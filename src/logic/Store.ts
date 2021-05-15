import { action, autorun, computed, makeObservable, observable } from "mobx";

class Store {
      @observable allEntries: string[];
      @observable currentPage: number;
      @observable totalPages: number;
      disposer;

      constructor() {
            this.allEntries = [];
            this.currentPage = 1;
            this.totalPages = 5;
            this.updateMockData(this.currentPage);
            this.disposer = autorun(() => {
                  this.updateMockData(this.currentPage);
            });
            makeObservable(this);
      }
      
      @action setPage(type: string) {
            switch(type) {
            case "next":
                  if (this.currentPage < this.totalPages) {
                        this.currentPage += 1;
                  }
                  break;
            case "previous":
                  if (this.currentPage > 1) {
                        this.currentPage -= 1;
                  }
                  break;
            }
      }

      @computed get getPage() {
            return this.currentPage;
      }

      @action updateMockData(page: number) {
            this.allEntries = [];
            let firstEntry = (page - 1) * 15;
            let lastEntry = page * 15;

            for (let i = firstEntry; i < lastEntry; i++) {
                  let textString = 'Test data number ' + (i + 1); 
                  this.allEntries.push(textString);
            }
      }
}

export default Store;