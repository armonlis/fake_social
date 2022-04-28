import { render, screen } from "@testing-library/react";
import App from "../src/ts/app/app"

describe("The app's structure test:", () => {
  test("There is the header in the App:", () => {
    render(App);
    let header = null;
    try {
      header = screen.getByTestId("header");
    }
    catch {
      throw new Error("There is no header.")
    }
    expect(header).not.toBe(null);
  });
  test("There is the navigation in the App:", () => {
    render(App);
    let nav = null;
    try {
      nav = screen.getByTestId("nav");
    }
    catch {
      throw new Error("There is no nav.")
    }
    expect(nav).not.toBe(null);
  });
  test("There is the main part in the App:", () => {
    render(App);
    let main = null;
    try {
      main = screen.getByTestId("main");
    }
    catch {
      throw new Error("There is no main.");
    }
    expect(main).not.toBe(null);
  });
  test("There is the footer in the App:", () => {
    render(App);
    let footer = null;
    try {
      footer = screen.getByTestId("footer");
    }
    catch {
      throw new Error("There is no footer.")
    } 
    expect(footer).not.toBe(null);
  });
});
