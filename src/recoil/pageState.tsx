import { atom } from "recoil";

export const pageState = atom<number>({
  key: "page",
  default: 0,
});

export const pageListState = atom<number[]>({
  key: "pageList",
  default: [1],
});
