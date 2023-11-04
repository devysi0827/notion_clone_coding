// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from "msw";
import * as D from "./data";

export const handlers = () => [
  rest.get("http://localhost:3000/block", getPageRes),
  rest.post("http://localhost:3000/", postExampleRes),
];

const getPageRes: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  const param = req.url.search.slice(-1);
  if (param === "1") {
    return res(ctx.status(200), ctx.json({ data: D.page1 }));
  } else {
    return res(ctx.status(200), ctx.json({ data: "sell" }));
  }
};

const postExampleRes: Parameters<typeof rest.get>[1] = (_, res, ctx) => {
  return res(ctx.status(200), ctx.json({ data: { problemId: 0 } }));
};
