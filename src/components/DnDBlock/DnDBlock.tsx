import { useRef } from "react";
import styled from "styled-components";
import useDND from "utills/useDND";
import { useRecoilState } from "recoil";
import { blockDataState } from "store/blockState";

interface DnDBlockProps {
  children?: React.ReactElement;
  blockId: number;
}

interface DnDStyledProps {
  isDrag: boolean;
  top: number;
  left: number;
  border: string;
}

export default function DnDBlock(props: DnDBlockProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { blockId } = props;
  const [blockDatas, setBlockDatas] = useRecoilState(blockDataState);
  const {
    dragStart,
    dragEnd,
    isDrag,
    top,
    left,
    isEntered,
    border,
    onDragEnterHandle,
    onDragMoveHandle,
    onDragLeaveHandle,
  } = useDND(ref);

  return (
    <Container
      className="dnd"
      ref={ref}
      draggable
      onDragStart={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        dragStart(e)
      }
      onDragOver={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isDrag) return;
        onDragMoveHandle(e);
      }}
      onDragEnd={dragEnd}
      onDragEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isDrag) return;
        onDragEnterHandle(e);
      }}
      onDragLeave={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isDrag) return;
        onDragLeaveHandle();
      }}
      id={`block-${blockId}`}
      isDrag={isDrag}
      top={top}
      left={left}
      isEntered={isEntered}
      border={border}
    >
      <div
        className="dnd__handle"
        onDragStart={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          dragStart(e)
        }
      />
      <div className="dnd__children" draggable={false}>
        {props.children}
      </div>
    </Container>
  );
}

const Container = styled.div.attrs((props: DnDStyledProps) => ({
  style: {
    top: props.isDrag && props.top.toString() + "px",
    left: props.isDrag && props.left.toString() + "px",
    borderLeft: props.border === "left" ? "green 3px solid" : "",
    borderRight: props.border === "right" ? "green 3px solid" : "",
    borderBottom: props.border === "bottom" ? "green 3px solid" : "",
    borderTop: props.border === "top" ? "green 3px solid" : "",
  },
}))<DnDStyledProps>`
  display: flex;
  .dnd__handle {
    height: 40px;
    width: 20px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #4b4b4b;
  }
  .dnd__children {
    user-select: none;
  }
`;
