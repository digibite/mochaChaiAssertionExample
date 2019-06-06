const expect = require("chai").expect,
  foo = "bar",
  drinks = { coffee: ["Guatemalan", "colombian", "hawaiian"] };

describe("drinks tests", () => {
  it("this is where the tests go...", () => {
    expect(foo).to.be.a("string");
    expect(foo).to.equal("bar");
    expect(foo).to.have.lengthOf(3);
    expect(beverages)
      .to.have.property("tea")
      .with.lengthOf(3);
    expect(drinks).to.be.a("object");
    expect(drinks).to.not.be.null;
    expect(drinks.coffee).to.bea("string");
  });
});
