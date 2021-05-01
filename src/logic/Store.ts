import { Page } from "./Page";
import {autorun} from "mobx";

export class Store {

      static APIKey = "b19u8eF8VgRCUL3uNwuWQYaizXwdpMUD";
      disposer;

      currentPage: Page;


      constructor() {
            this.currentPage = Page.TRENDING;

            this.disposer = autorun(() => {
            
            });
      }

      static createStore(): Store {
            return new Store();
      }

      destroyStore(): void {
            this.disposer();
      }

      setPage(page: Page) {
            this.currentPage = page;
      }
}