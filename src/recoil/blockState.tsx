import { atom, useRecoilState } from "recoil";
import { Block } from "types/blockType";

export const blockDataState = atom<Block[]>({
  key: "blockDatas",
  default: [],
});

export const useFindBlock = (blockId: number) => {
  const [blockDatas, setBlockDatas] = useRecoilState(blockDataState);
  let block = {} as Block;
  for (let i = 0; i < blockDatas.length; i += 1) {
    if (blockDatas[i].blockId === blockId) {
      block = blockDatas[i];
      return block;
    }
  }
  return null;
};
