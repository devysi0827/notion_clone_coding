import { atom, useRecoilState } from "recoil";
import { Block } from "types/blockType";
import { findMaxId } from "utills/blockUtils";
import sample from "assets/image/sample.jpg";

export const blockDataState = atom<Map<number, Block>>({
  key: "blockDatas",
  default: new Map(),
});

// export const useFindBlock = (blockId: number) => {
//   const [blockDatas, setBlockDatas] = useRecoilState(blockDataState);
//   let block = {} as Block;
//   for (let i = 0; i < blockDatas.length; i += 1) {
//     if (blockDatas[i].blockId === blockId) {
//       block = blockDatas[i];
//       return block;
//     }
//   }
//   return null;
// };

export const useAddBlock = () => {
  const [blockDatas, setBlockDatas] = useRecoilState(blockDataState);

  const addBlock = (blockType: "text" | "image", data: any) => {
    const maxId = findMaxId(blockDatas);
    const newId = maxId ? maxId + 1 : 0;
    const newBlock = {
      blockId: newId,
      parentId: 0,
      childernIds: [] as number[],
      deps: 1,
      type: blockType,
      data: data,
    };

    blockDatas.set(newId, newBlock);

    const parentBlock: Block | undefined = blockDatas.get(0);
    if (!parentBlock) return;

    blockDatas.set(0, {
      ...parentBlock,
      childernIds: [...parentBlock.childernIds, newId],
    });

    // setBlockDatas((blockDatas) => {
    //   const updatedData = blockDatas.map((block) => {
    //     if (block.blockId === 0) {
    //       return { ...block, childernIds: [...block.childernIds, newId] };
    //     }
    //     return block;
    //   });
    //   return [...updatedData, newBlock];
    // });
  };

  const addTextBlock = () => {
    console.log("do");
    addBlock("text", "placeholder");
  };

  const addImageBlock = () => {
    addBlock("image", sample);
  };

  return { addTextBlock, addImageBlock };
};

// deleteBlock
// block 객체 삭제 기능
// 재귀적으로 상위 block의 childrens를 확인하고 빈 배열이면 같이 삭제

// changeBlockOrder
// front logic (자체적으로 이동 가능한 곳으로 이동)
// 자신의 parentId, deps와 부모의 childrenIds를 수정해야함
