import { NavPage } from "./NavPage";
import {action, autorun, computed, makeObservable, observable} from "mobx";
import { Giph } from "./Giph";

export class Store {

      static APIKey = "b19u8eF8VgRCUL3uNwuWQYaizXwdpMUD";
      static maxGifsPerPage: number = 10;
      
      disposer;
      @observable giphs: Giph[];
      @observable currentNavPage: NavPage;
      @observable isLoaded: boolean;
      @observable currentPage: number;
      @observable totalPages: number;
      @observable searchContent: string;

      constructor() {
            this.giphs = [];
            this.currentNavPage = NavPage.TRENDING;
            this.isLoaded = false;
            this.currentPage = 1;
            this.totalPages = 1;
            this.searchContent = '';
            
            this.disposer = autorun(() => {
                  this.fetchContent(this.currentNavPage, this.searchContent);
            });
            makeObservable(this);
      }

      static createStore(): Store {
            return new Store();
      }

      destroyStore(): void {
            this.disposer();
      }

      @action setNavigatonPage(navPage: NavPage) {
            this.currentNavPage = navPage;
            this.giphs = [];
            this.fetchContent(this.currentNavPage, this.searchContent);
            console.log(this.currentPage);
      }

      @computed get getNavigationPage() {
            return this.currentNavPage;
      }

      @action addGiph(title: string, url: string) {
            this.giphs.push(new Giph(title, url));
      }

      @computed get getGiphs() {
            return this.giphs;
      }

      @action deleteGiphs() {
            this.giphs = [];
      }

      @action setLoaded() {
            this.isLoaded = true;
      }

      @action setSearchContent(searchContent: string) {
            this.searchContent = searchContent;
            this.giphs = [];
            this.fetchContent(this.currentNavPage, this.searchContent);
            console.log(this.currentPage);
      }

      @action setPage(type: string, searchResult?: string) {
            switch(type) {
            case "next":
                  if (this.currentPage < this.totalPages) {
                        this.currentPage += 1;
                  }

                  this.giphs = [];
                  this.fetchContent(this.currentNavPage, this.searchContent);
                  console.log(this.currentPage);
                  break;
            case "previous":
                  if (this.currentPage > 1) {
                        this.currentPage -= 1;
                  }

                  this.giphs = [];
                  this.fetchContent(this.currentNavPage, this.searchContent);
                  console.log(this.currentPage);
                  break;
            case "search":
                  let searchAsNumber = parseInt(searchResult || "1");

                  if (searchAsNumber > this.totalPages) {
                        this.currentPage = this.totalPages;  
                  } else if (isNaN(searchAsNumber)){
                        this.currentPage = 1;
                  } else {
                        this.currentPage = searchAsNumber;
                  }

                  this.giphs = [];
                  this.fetchContent(this.currentNavPage, this.searchContent);
                  console.log(this.currentPage);
                  break;
            }
            
      }

      @computed get getPage() {
            return this.currentPage;
      }

      @action createURL(navPage: NavPage, searchContent?: string) {
            let url;

            switch(navPage) {
                  case NavPage.TRENDING:
                        url = `https://api.giphy.com/v1/gifs/trending?api_key=${Store.APIKey}&limit=${Store.maxGifsPerPage}&offset=${(this.currentPage - 1) * Store.maxGifsPerPage}`;
                        break;

                  case NavPage.SEARCH:
                        url = `https://api.giphy.com/v1/gifs/search?api_key=${Store.APIKey}&limit=${Store.maxGifsPerPage}&offset=${(this.currentPage - 1) * Store.maxGifsPerPage}&q=${searchContent}`;
                        break;
            }

            return url;
      }

      @action fetchContent(navPage: NavPage, searchContent?: string) {
            let url = this.createURL(navPage, searchContent);
            this.isLoaded = false;

            fetch(url)
            .then((response) => response.json())
            .then((json) => {
                  console.log(json);
                  (json.data.forEach((row: { title: string; images: { fixed_height: { url: string; }; }; }) => {  
                        this.addGiph(row.title, row.images.fixed_height.url);
                  }));
                  let allGiphs = json.pagination.total_count;

                  this.totalPages = Math.ceil(allGiphs / Store.maxGifsPerPage)

                  this.setLoaded();
                  console.log(this.giphs);
            });     
      }
}