import axios from "axios";

class PageServiceClass {
  BASE_URL = "/page";

  createPages(pageId: number) {
    return axios.post(this.BASE_URL, { pageId });
  }
}

const PageServices = new PageServiceClass();
export default PageServices;
