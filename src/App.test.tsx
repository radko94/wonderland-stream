import React, { Suspense } from "react";
import App from "./App";
import { create } from "react-test-renderer";
import Header from "./components/header/Header";

describe("renders learn react link", () => {
  it("should render App component", async () => {
    const component = await create(
      <Suspense fallback={<h1>Loading...</h1>}>
        <App />
      </Suspense>
    );

    expect(component).toBeDefined();
    expect(component).toBeTruthy();
  });
});
