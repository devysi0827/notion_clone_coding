import { Block } from "../types/blockType";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import { useFindBlock } from "recoil/blockState";

export default function BlockTree(props: { blockId: number }) {
  const { blockId } = props;
  const block: Block | null = useFindBlock(blockId);

  // Block Type Guard를 위해서 작성했는데 이 부분이 좀 고민됩니다.
  if (!block) {
    return <div></div>;
  }

  const nameSelector = (deps: number) => {
    switch (deps) {
      case 0:
        return "blockPage";
      case 1:
        return "blockLine";
      case 2:
        return "blockInlineList";
      default:
        return "";
    }
  };

  const componentSelctor = (type: string, data: any) => {
    switch (type) {
      case "text":
        return <TextBlock data={data} />;
      case "image":
        return <ImageBlock data={data} />;
      default:
        return <div />;
    }
  };

  return (
    <>
      {block.type === "node" ? (
        <div className={nameSelector(block.deps)}>
          {block.childernIds.map((childId) => (
            <div key={childId}>
              <BlockTree blockId={childId} />
            </div>
          ))}
        </div>
      ) : (
        <>{componentSelctor(block.type, block.data)}</>
      )}
    </>
  );
}
