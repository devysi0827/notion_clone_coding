import { atom } from "recoil";

export const pageState = atom<number>({
  key: "page",
  default: 0,
});

export const pageListState = atom<number[]>({
  key: "pageList",
  default: [1],
});

export const isDragState = atom<boolean>({
  key: "isDrag",
  default: false,
});

export const shiftXState = atom<number>({
  key: "shiftX",
  default: 0,
});

export const shiftYState = atom<number>({
  key: "shiftY",
  default: 0,
});

export const topState = atom<number>({
  key: "top",
  default: 0,
});

export const leftState = atom<number>({
  key: "left",
  default: 0,
});

export const targetBlockIdState = atom<number>({
  key: "targetBlockId",
  default: 0,
});

export const borderState = atom<string>({
  key: "border",
  default: "",
});
