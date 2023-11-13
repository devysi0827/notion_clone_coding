import { atom, useRecoilState } from "recoil";
import { Block } from "types/blockType";
import sample from "assets/image/sample.jpg";

export const blockDataState = atom<Map<number, Block>>({
  key: "blockDatas",
  default: new Map(),
});

export const useAddBlock = () => {
  const [blockDatas, setBlockDatas] = useRecoilState(blockDataState);

  const addBlock = (blockType: "text" | "image", data: any) => {
    const ids = Array.from(blockDatas.keys());
    const maxId = Math.max(...ids) + 1;
    const newMap = new Map(blockDatas.entries());

    const newBlock = {
      blockId: maxId,
      parentId: 0,
      childernIds: [] as number[],
      deps: 1,
      type: blockType,
      data: data,
    };

    newMap.set(maxId, newBlock);

    const parentBlock: Block | undefined = newMap.get(0);
    if (!parentBlock) return;

    newMap.set(0, {
      ...parentBlock,
      childernIds: [...parentBlock.childernIds, maxId],
    });

    setBlockDatas(newMap);
  };

  const addTextBlock = () => {
    addBlock("text", "placeholder");
  };

  const addImageBlock = () => {
    addBlock("image", sample);
  };

  return { addTextBlock, addImageBlock };
};

export const useDeleteBlock = () => {};

export const useChangeBlock = () => {
  //to
  //from
};

// deleteBlock
// block 객체 삭제 기능
// 재귀적으로 상위 block의 childrens를 확인하고 빈 배열이면 같이 삭제

// changeBlockOrder
// front logic (자체적으로 이동 가능한 곳으로 이동)
// 자신의 parentId, deps와 부모의 childrenIds를 수정해야함
