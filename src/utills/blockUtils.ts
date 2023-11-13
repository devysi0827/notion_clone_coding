import { Block } from "types/blockType";

export function findMaxId(blockDatas: Map<number, Block>) {
  let maxId = null;

  for (const key of blockDatas.keys()) {
    if (maxId === null || key > maxId) {
      maxId = key;
    }
  }

  return maxId;
}

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
