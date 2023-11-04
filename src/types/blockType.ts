export interface Block {
  blockId: number;
  parentId: number | null;
  childernIds: number[];
  deps: number;
  type: "node" | "text" | "image";
  data?: any;
}
