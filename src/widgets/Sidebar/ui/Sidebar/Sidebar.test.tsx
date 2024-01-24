import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
    test("render Sidebar component", () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });
    test("Sidebar toggle", () => {
        renderWithTranslation(<Sidebar />);
        const ButtonToggle = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(ButtonToggle);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");

    });
});
 