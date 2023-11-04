// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from "msw";
import * as D from "./data";

export const handlers = () => [
  rest.get("http://localhost:3000/", getExampleRes),
  rest.post("http://localhost:3000/", postExampleRes),
];

const getExampleRes: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(ctx.status(200), ctx.json({ data: D.dummy }));
};

const postExampleRes: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(ctx.status(200), ctx.json({ data: { problemId: 0 } }));
};
