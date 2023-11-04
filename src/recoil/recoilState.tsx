import { atom, selector } from "recoil";

export const introMessageState = atom({
  key: " introMessageState",
  default: "hi",
});

export const introSelector = selector({
  key: "IntroSelector",
  get: ({ get }) => {
    const messgae = get(introMessageState);
    if (messgae === "hi") {
      return get(introMessageState) + "hi";
    }
    return get(introMessageState) + "hello";
  },
  set: ({ set }, newValue) => set(introMessageState, newValue + "3"),
});

export const arrayState = atom({
  key: "arrayState",
  default: [1, 2, 3],
});

export const arraySelector = selector({
  key: "arraySelector",
  get: ({ get }) => get(arrayState),
  //   set: ({ set }, newValue) => set(...arrayState, newValue),
});
