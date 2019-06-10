const createConway = require("./conway");

let conway;

xdescribe("substring", () => {
  it("substring(1)", () => {
    const fn = str => str.substring(1);
    return expect(fn("boom")).toEqual("oom");
  });

  it("substring(0, 1)", () => {
    const fn = str => str.substring(0, 1);
    return expect(fn("boom")).toEqual("b");
  });

  it("substring(-1)", () => {
    const fn = str => str.substring(0, str.length - 1);
    return expect(fn("boom")).toEqual("boo");
  });
});

xdescribe("slice", () => {
  it("slice(1)", () => {
    const fn = str => str.slice(1);
    return expect(fn("boom")).toEqual("oom");
  });

  it("slice(0, 1)", () => {
    const fn = str => str.slice(0, 1);
    return expect(fn("boom")).toEqual("b");
  });

  it("slice(-1)", () => {
    const fn = str => str.slice(0, -1);
    return expect(fn("boom")).toEqual("boo");
  });
});

describe("should draw next line of conway suite", () => {
  beforeAll(() => {
    conway = createConway();
  });

  it("removes all spaces", () => {
    const str = "1 2 3";
    expect(conway._removeLineSpaces(str)).toEqual("123");
  });

  it("1", () => {
    expect(conway.draw("1")).toEqual("1\n1 1");
  });

  it("2", () => {
    expect(conway.draw("2")).toEqual("2\n1 2");
  });

  it("2 2", () => {
    expect(conway.draw("2 2")).toEqual("2 2\n2 2");
  });

  it("2 1", () => {
    expect(conway.draw("2 1")).toEqual("2 1\n1 2 1 1");
  });

  it("2 1 3", () => {
    expect(conway.draw("2 1 3")).toEqual("2 1 3\n1 2 1 1 1 3");
  });

  it("2 1 1 1", () => {
    expect(conway.draw("2 1 1 1")).toEqual("2 1 1 1\n1 2 3 1");
  });

  // it("2 3 3 1", () => {
  //   expect(conway.draw("2 3 3 1")).toEqual("2 3 3 1\n1 2 2 3 1 1");
  // });
});
