import { Block } from "types/blockType";

export const findMaxId = (blockDatas: Block[]) => {
  if (blockDatas.length === 0) {
    return -1;
  }

  let maxId = blockDatas[0].blockId;

  for (let i = 1; i < blockDatas.length; i++) {
    if (blockDatas[i].blockId > maxId) {
      maxId = blockDatas[i].blockId;
    }
  }

  return maxId;
};

export const findBlockDeps = (blockDatas: Block[], parentId: number) => {
  if (blockDatas.length === 0) {
    return -1;
  }

  for (let i = 1; i < blockDatas.length; i++) {
    if (blockDatas[i].blockId === parentId) {
      return blockDatas[i].deps + 1;
    }
  }
  return -1;
};
