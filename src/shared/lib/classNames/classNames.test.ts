import { classNames } from "./classNames";

describe("classNames", () => {
	test("with only first param", () => {
		expect(classNames("someClass")).toBe("someClass");
	});
	test("with additional class", () => {
		expect(classNames("someClass", {}, ["j", "h"])).toBe("someClass j h");
	});
});
