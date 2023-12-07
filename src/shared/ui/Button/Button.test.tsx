import { Button } from "./Button";
import { render } from "@testing-library/react";

describe("classNames", () => {
	test("with only first param", () => {
		// expect(classNames("someClass")).toBe("someClass");
		render(<Button />);
	});
});

//2 vbyens
