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
        return "page-block";
      case 1:
        return "line-block";
      case 2:
        return "list-block";
      default:
        return "content-block";
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
        <>
          {
            {
              text: <TextBlock data={block.data} />,
              image: <ImageBlock data={block.data} />,
            }[block.type]
          }
        </>
      )}
    </>
  );
}
