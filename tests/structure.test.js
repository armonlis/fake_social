import { render, screen } from "@testing-library/react";
import App from "../src/ts/app/app"

describe("The app's structure test:", () => {
  test("There is the header in the App:", () => {
    render(App);
    expect(screen.getByRole("header")).not.toBe(null);
  });
  test("There is the navigation in the App:", () => {
    render(App);
    expect(screen.getByRole("nav")).not.toBe(null);
  });
  test("There is the main part in the App:", () => {
    render(App);
    expect(screen.getByRole("main")).not.toBe(null);
  });
  test("There is the footer in the App:", () => {
    render(App);
    expect(screen.getByRole("footer")).not.toBe(null);
  });
});
