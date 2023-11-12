import styled from "styled-components";
import { useRef } from "react";
import useDND from "utills/useDND";
import { Block } from "../../types/blockType";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import { useRecoilState } from "recoil";
import { blockDataState } from "recoil/blockState";

interface TextBlockStyleProps {
  isDrag: boolean;
  top: number;
  left: number;
}

export default function DNDBlock(props: { blockId: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { blockId } = props;
  const [blockDatas, setBlockDatas] = useRecoilState(blockDataState);
  const block: Block | undefined = blockDatas.get(blockId);
  const { dragStart, dragEnd, isDrag, top, left } = useDND(ref);

  if (!block) {
    return <div></div>;
  }

  return (
    <Container
      onMouseDown={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        dragStart(e)
      }
      onMouseUp={() => dragEnd()}
      ref={ref}
      isDrag={isDrag}
      top={top}
      left={left}
    >
      <>
        {
          {
            text: <TextBlock data={block.data} />,
            image: <ImageBlock data={block.data} />,
            node: <div />,
          }[block.type]
        }
      </>
    </Container>
  );
}

const Container = styled.div.attrs((props: TextBlockStyleProps) => ({
  style: {
    position: props.isDrag ? "absolute" : null,
    top: props.top.toString() + "px",
    left: props.left.toString() + "px",
  },
}))<TextBlockStyleProps>`
  height: fit-content;
  min-height: 10px;
`;
