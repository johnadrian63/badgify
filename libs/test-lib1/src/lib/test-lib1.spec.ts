import { testLib1 } from "./test-lib1";

describe("testLib1", () => {
    it("should work", () => {
        expect(testLib1()).toEqual("test-lib1");
    });
});
