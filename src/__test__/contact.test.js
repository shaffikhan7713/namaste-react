import { fireEvent, render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";

test("Test to check if contact us component is loaded", () => {
  render(<ContactUs />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should load button inside the Contact component", () => {
  render(<ContactUs />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("get all input elements", () => {
  render(<ContactUs />);

  const inputElements = screen.getAllByRole("textbox"); //called querying and get all inputs
  //   const textSearch = screen.getByText("Cart - 0"); //text search
  //   const textSearch = screen.getByText(/Cart/); // text search LIKE

  //   expect(inputElements).toBeInTheDocument();
  expect(inputElements.length).toBe(2); // we can do lot of stuff here
});

/** we can also group the test cases in describe() */
describe("Contact Us Page Test Cases", () => {
  //Can include all above test cases inside here
  // also we have special functions as below
  /*beforeAll(() => {
    console.log("Before All");
  });
  beforeEach(() => {
    console.log("Before each test cases inside describe");
  });
  afterAll(() => {
    console.log("After All");
  });
  afterEach(() => {
    console.log("After each test cases inside describe");
  });*/
});

/** Header test case needs redux, router information */
test("Should render header component with Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <ContactUs />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button");
  expect(loginButton).toBeInTheDocument();
});

test("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
