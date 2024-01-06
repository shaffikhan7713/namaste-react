import { Sum } from "../components/Sum";

test("Sum function to calculate two numbers", () => {
  const result = Sum(5, 7);

  expect(result).toBe(12); //this is called Assertation
});
