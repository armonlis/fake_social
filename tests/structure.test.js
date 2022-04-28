import { render, screen } from "@testing-library/react";
import App from "../src/ts/app/app"

describe("The app's structure test:", () => {
  test("There is the header in the App:", () => {
    render(App);
    const header = screen.getByTestId("header");
    expect(header).not.toBe(null);
  });
  test("There is the navigation in the App:", () => {
    render(App);
    const nav = screen.getByTestId("nav");
    expect(nav).not.toBe(null);
  });
  test("There is the main part in the App:", () => {
    render(App);
    const main = screen.getByTestId("main");
    expect(main).not.toBe(null);
  });
  test("There is the footer in the App:", () => {
    render(App);
    const footer = screen.getByTestId("footer");
    expect(footer).not.toBe(null);
  });
});
