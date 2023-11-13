import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  borderState,
  isDragState,
  leftState,
  targetBlockIdState,
  topState,
} from "store/pageState";

function useDND(ref: React.MutableRefObject<HTMLDivElement | null>) {
  const [isDrag, setIsDrag] = useState(false);
  const [globalDragState, setGlobalDragState] = useRecoilState(isDragState);
  const [shiftX, setShiftX] = useState(0);
  const [shiftY, setShiftY] = useState(0);
  const [top, setTop] = useRecoilState(topState);
  const [left, setLeft] = useRecoilState(leftState);
  const [isEntered, setIsEntered] = useState(false);
  const [border, setBorder] = useState("");
  const [globalBorderState, setGlobalBorderState] = useRecoilState(borderState);
  const [targetBlockId, setTargetBlockId] = useRecoilState(targetBlockIdState);

  const dragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDrag || !ref || !ref.current) return;
    setIsDrag(true);
    setGlobalDragState(true);
    setShiftX(e.clientX - ref.current.getBoundingClientRect().left);
    setShiftY(e.clientY - ref.current.getBoundingClientRect().top);

    // 비동기로 인하여 원값 그대로 사용
    setLeft(e.pageX - (e.clientX - ref.current.getBoundingClientRect().left));
    setTop(e.pageY - (e.clientY - ref.current.getBoundingClientRect().top));
  };

  const dragMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!globalDragState) return;

    setLeft(e.pageX - shiftX);
    setTop(e.pageY - shiftY);
  };

  const dragEnd = () => {
    if (!isDrag) return;
    setIsDrag(false);
    setGlobalDragState(false);
    setIsEntered(false);
    // console.log(targetBlock);
  };

  const onDragMoveHandle = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // console.log(isEntered);
    if (!globalDragState) return;
    if (!isEntered) return;

    const elementWidth = e.currentTarget.offsetWidth;
    const elementHeight = e.currentTarget.offsetHeight;

    if (
      e.clientX - e.currentTarget.getBoundingClientRect().left >
      elementWidth * 0.8
    ) {
      setBorder("right");
      setGlobalBorderState("right");
      return;
    }

    if (
      e.clientX - e.currentTarget.getBoundingClientRect().left <
      elementWidth * 0.2
    ) {
      setBorder("left");
      setGlobalBorderState("left");
      return;
    }

    if (
      e.clientY - e.currentTarget.getBoundingClientRect().top <
      elementHeight * 0.2
    ) {
      setBorder("top");
      setGlobalBorderState("top");
      return;
    }
    if (
      e.clientY - e.currentTarget.getBoundingClientRect().top >
      elementHeight * 0.8
    ) {
      setBorder("bottom");
      setGlobalBorderState("bottom");
      return;
    }

    setGlobalBorderState("");
    setBorder("");

    // deps에 따라서,
    // deps 1(라인)
    // - 위에 추가 (50% 이상)
    // - 밑에 추가 (50% 이하)
    // - deps2로 왼쪽에 추가 (왼쪽 10%, 우선순위 상)
    // - deps2로 오른쪽에 추가(오른쪽 10%, 우선순위 상)
    // deps 2(리스트) => 옆에 추가, deps3으로 리스트요소화
    // - 왼쪽에 추가 (왼쪽 10%, 우선순위 상)
    // - 오른쪽에 추가(오른쪽 10%, 우선순위 상)
    // - deps 3 위에 추가 (50% 이상)
    // - deps 3 밑에 추가 (50% 이하)
    // deps 3(아이템) => 위/아래 추가만 가능
  };

  const onDragEnterHandle = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!globalDragState) return;
    if (isDrag) return;
    const blockId = parseInt(e.currentTarget.id.substring(6), 10);
    // console.log(blockId);
    if (targetBlockId !== blockId) {
      setTargetBlockId(blockId);
    }
    setIsEntered(true);
  };

  const onDragLeaveHandle = () => {
    if (!globalDragState) return;
    if (isDrag) return;
    setIsEntered(false);
    setBorder("");
  };

  return {
    dragStart,
    dragMove,
    dragEnd,
    onDragEnterHandle,
    onDragLeaveHandle,
    onDragMoveHandle,
    isDrag,
    isEntered,
    border,
    top,
    left,
  };
}

export default useDND;
