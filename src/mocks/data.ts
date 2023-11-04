import { Block } from "./../types/blockType";
import sample from "assets/image/sample.jpg";

export const page1: { pageId: number; blocks: Block[] } = {
  pageId: 1,
  blocks: [
    {
      blockId: 0,
      parentId: null,
      childernIds: [1, 2, 3],
      deps: 0,
      type: "node",
    },
    {
      blockId: 1,
      parentId: 0,
      childernIds: [4, 5],
      deps: 1,
      type: "node",
    },
    {
      blockId: 2,
      parentId: 0,
      childernIds: [6],
      deps: 1,
      type: "node",
    },
    {
      blockId: 3,
      parentId: 0,
      childernIds: [],
      deps: 1,
      type: "text",
      data: "텍스트 데이터",
    },
    {
      blockId: 4,
      parentId: 1,
      childernIds: [],
      deps: 2,
      type: "text",
      data: "text data",
    },
    {
      blockId: 5,
      parentId: 1,
      childernIds: [],
      deps: 2,
      type: "image",
      data: sample,
    },
    {
      blockId: 6,
      parentId: 2,
      childernIds: [7, 8],
      deps: 2,
      type: "node",
    },
    {
      blockId: 7,
      parentId: 6,
      childernIds: [],
      deps: 3,
      type: "text",
      data: "tttest",
    },
    {
      blockId: 8,
      parentId: 6,
      childernIds: [],
      deps: 3,
      type: "image",
      data: sample,
    },
  ],
};

export const defaulPage: { pageId: number; blocks: Block[] } = {
  pageId: 1,
  blocks: [
    {
      blockId: 0,
      parentId: null,
      childernIds: [],
      deps: 0,
      type: "node",
    },
  ],
};
