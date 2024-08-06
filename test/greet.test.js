import assert from "assert";
import greet from "../first-terminal-tests/greet.js";

describe("The greet function", function () {
  it("should greet Andrew correctly", function () {
    assert.equal("Hello, Andrew!", greet("Andrew"));
  });
  it("should greet Karen correctly", function () {
    // this test will now pass
    assert.equal("Hello, Karen!", greet("Karen"));
  });
  it("should greet Masego correctly", function () {
    assert.equal("Hello, Masego!", greet("Masego"));
  });
});
