import axios from "axios";

class BlockServiceClass {
  BASE_URL = "/block";

  getBlocks(pageId: number) {
    return axios.get(this.BASE_URL, { params: { pageId } });
  }
}

const BlockServices = new BlockServiceClass();
export default BlockServices;
