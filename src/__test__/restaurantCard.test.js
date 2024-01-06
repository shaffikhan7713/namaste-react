import { render, screen } from "@testing-library/react";
import RestoCard from "../components/RestoCard";
import MOCK_DATA from "../mocks/restoCardMockJson.json";
import "@testing-library/jest-dom";

test("get mock data of restaurant card", () => {
  render(<RestoCard resObject={MOCK_DATA} />);

  const name = screen.getByText("Louis Burger");

  expect(name).toBeInTheDocument();
});
