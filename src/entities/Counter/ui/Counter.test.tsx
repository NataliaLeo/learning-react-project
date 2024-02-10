import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";

// import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Counter", () => {
	test("Test render", () => {
		componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
		expect(screen.getByTestId("valuet")).toHaveTextContent("10");
	});
	test("increment", () => {
		componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
		fireEvent.click(screen.getByTestId("increment-btn"));
		expect(screen.getByTestId("valuet")).toHaveTextContent("11");
	});
	test("decrement", () => {
		componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
		fireEvent.click(screen.getByTestId("decrement-btn"));
		expect(screen.getByTestId("valuet")).toHaveTextContent("9");
	});
});
