import db from "@phenomic/core/lib/db";

import plugin from "..";

import fixtures from "./__fixtures__";

it("should collect stuff", async () => {
  db.destroy();

  const p = plugin();
  Object.keys(fixtures).map(path => {
    p.collect(db, path, fixtures[path]);
  });

  expect(await db.getList("__null__")).toMatchSnapshot();
  expect(await db.getList("news/2017")).toMatchSnapshot();
  expect(await db.getList("showcaseTags")).toMatchSnapshot();
});
