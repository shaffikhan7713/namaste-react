import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/searchMockDataList.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    filterData: () => {
      Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should load body component with search feature", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );

    const resCardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(resCardsBeforeSearch.lenght).toBe(20);

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "burger" } });

    const searchBtn = screen.getByRole("button", { name: "search-btn" });

    fireEvent.click(searchBtn);

    expect(resCardsBeforeSearch.length).toBe(4);
  });
});
