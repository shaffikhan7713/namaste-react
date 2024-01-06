import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Restaurant from "../components/Restaurant";
import MOCK_DATA from "../mocks/restoMenuMockJson.json";

global.fetch = jest.fn(() => {
  Promise.resolve({
    resData: () => Promise.resolve(MOCK_DATA),
  });
});

test("Should load Resturant menu component", async () => {
  await act(async () => render(<Restaurant />));
});
