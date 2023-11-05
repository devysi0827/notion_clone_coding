// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from "msw";
import * as D from "./data";

export const handlers = () => [
  rest.get("http://localhost:3000/block", getPageRes),
  rest.post("http://localhost:3000/page", creatPageRes),
];

const getPageRes: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  const param = req.url.search.slice(-1);
  if (param === "1") {
    return res(ctx.status(200), ctx.json({ data: D.page1 }));
  } else {
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          pageId: parseInt(param, 10),
          blocks: D.initialBlock,
        },
      })
    );
  }
};

const creatPageRes: Parameters<typeof rest.post>[1] = async (req, res, ctx) => {
  const { pageId } = await req.json();

  return res(
    ctx.status(200),
    ctx.json({
      data: {
        pageId: pageId,
        blocks: D.initialBlock,
      },
    })
  );
};
