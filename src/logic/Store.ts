import { NavPage } from "./NavPage";
import {autorun} from "mobx";
import { Giph } from "./Giph";

export class Store {

      static APIKey = "b19u8eF8VgRCUL3uNwuWQYaizXwdpMUD";
      static maxGifsPerPage: number = 25;
      
      disposer;
      giphs: Giph[];
      currentNavPage: NavPage;
      isLoaded: boolean;
      searchContent: string;

      constructor() {
            this.currentNavPage = NavPage.TRENDING;
            this.isLoaded = true;
            this.searchContent = '';
            this.giphs = [];
            this.disposer = autorun(() => {
                  this.fetchContent(this.currentNavPage, this.searchContent);
            });
      }

      static createStore(): Store {
            return new Store();
      }

      destroyStore(): void {
            this.disposer();
      }

      setNavigatonPage(navPage: NavPage) {
            this.currentNavPage = navPage;
      }

      getNavigationPage() {
            return this.currentNavPage;
      }

      setGiphs(giphs: Giph[]) {
            this.giphs = giphs;
      }

      getGiphs() {
            return this.giphs;
      }


      createURL(navPage: NavPage, searchContent?: string) {
            let url;

            switch(navPage) {
                  case NavPage.TRENDING:
                        url = `https://api.giphy.com/v1/gifs/trending?api_key=${Store.APIKey}&limit=${Store.maxGifsPerPage}`;
                        break;

                  case NavPage.SEARCH:
                        url = `https://api.giphy.com/v1/gifs/search?api_key=${Store.APIKey}&limit=${Store.maxGifsPerPage}&q=${searchContent}`;
                        break;
            }

            return url;
      }

      fetchContent(navPage: NavPage, searchContent?: string) {
            let url = this.createURL(navPage, searchContent);

            fetch(url)
            .then((response) => response.json())
            .then((json) => {
                  (json.data.forEach((row: { url: string; title: string; }) => {
                        this.giphs.push(new Giph(row.title, row.url));
                  }));
            });

            console.log(this.giphs);
      }
}