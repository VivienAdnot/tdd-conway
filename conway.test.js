const createConway = require("./conway");

let conway;

describe("should draw next line of conway suite", () => {
  beforeAll(() => {
    conway = createConway();
  });

  it("removes all spaces", () => {
    const str = "1 2 3";
    expect(conway._removeLineSpaces(str)).toEqual("123");
  });

  describe("returns next distinct number index", () => {
    it("1", () => {
      expect(conway._indexOfNextDistinctNumber("1", 0)).toEqual(0);
    });

    it("12", () => {
      expect(conway._indexOfNextDistinctNumber("12", 0)).toEqual(0);
    });

    it("112", () => {
      expect(conway._indexOfNextDistinctNumber("112", 0)).toEqual(1);
    });

    it("1112", () => {
      expect(conway._indexOfNextDistinctNumber("1112", 0)).toEqual(2);
    });

    it("1111", () => {
      expect(conway._indexOfNextDistinctNumber("1111", 0)).toEqual(3);
    });
  });

  describe("depth 1", () => {
    it("1", () => {
      expect(conway.draw("1", 1)).toEqual("1\n1 1");
    });

    it("2", () => {
      expect(conway.draw("2", 1)).toEqual("2\n1 2");
    });

    it("2 2", () => {
      expect(conway.draw("2 2", 1)).toEqual("2 2\n2 2");
    });

    it("2 1", () => {
      expect(conway.draw("2 1", 1)).toEqual("2 1\n1 2 1 1");
    });

    it("2 1 3", () => {
      expect(conway.draw("2 1 3", 1)).toEqual("2 1 3\n1 2 1 1 1 3");
    });

    it("2 1 1 1", () => {
      expect(conway.draw("2 1 1 1", 1)).toEqual("2 1 1 1\n1 2 3 1");
    });

    it("2 3 3 1", () => {
      expect(conway.draw("2 3 3 1", 1)).toEqual("2 3 3 1\n1 2 2 3 1 1");
    });

    it("1 1 1 1", () => {
      expect(conway.draw("1 1 1 1", 1)).toEqual("1 1 1 1\n4 1");
    });
  });

  describe("depth 2", () => {
    it("1", () => {
      expect(conway.draw("1", 2)).toEqual("1\n1 1\n2 1");
    });
  });

  describe("depth 3", () => {
    it("1", () => {
      expect(conway.draw("1", 3)).toEqual("1\n1 1\n2 1\n1 2 1 1");
    });
  });

  describe("depth 4", () => {
    it("1", () => {
      expect(conway.draw("1", 4)).toEqual("1\n1 1\n2 1\n1 2 1 1\n1 1 1 2 2 1");
    });
  });
});
