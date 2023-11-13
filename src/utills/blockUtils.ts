import { Block } from "types/blockType";

export function blockArrToMap(arr: Block[]) {
  const map = new Map();
  arr.map((block: Block) => map.set(block.blockId, block));
  return map;
}

// export const findBlockDeps = (blockDatas: Block[], parentId: number) => {
//   if (blockDatas.length === 0) {
//     return -1;
//   }

//   for (let i = 1; i < blockDatas.length; i++) {
//     if (blockDatas[i].blockId === parentId) {
//       return blockDatas[i].deps + 1;
//     }
//   }
//   return -1;
// };
