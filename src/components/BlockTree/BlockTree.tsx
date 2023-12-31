import { Block } from "../../types/blockType";
import DNDBlock from "components/Blocks/DNDBlock";
import { useRecoilState } from "recoil";
import { blockDataState } from "store/blockState";

export default function BlockTree(props: { blockId: number }) {
  const { blockId } = props;
  const [blockDatas, setBlockDatas] = useRecoilState(blockDataState);
  const block: Block | undefined = blockDatas.get(blockId);

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
        <DNDBlock blockId={blockId} />
      )}
    </>
  );
}
