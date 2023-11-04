import axios from "axios";

class BlockServiceClass {
  BASE_URL = "/block";

  // getBlocks() {
  //   return axios.post(this.BASE_URL + "/create");
  // }

  getBlocks(pageId: number) {
    return axios.get(this.BASE_URL, { params: { pageId } });
  }
}

const BlockServices = new BlockServiceClass();
export default BlockServices;
