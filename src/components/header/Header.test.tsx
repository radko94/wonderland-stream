import { render, cleanup, waitFor } from "@testing-library/react";
import { Suspense } from "react";
import Header from "./Header";

describe("Header component", () => {
  afterEach(cleanup);
  it("should be created", async () => {

    const component = render(
      <Suspense fallback={<h1>loading....</h1>}>
        <Header filterFn={jest.fn()} />
      </Suspense>
    );

    await waitFor(() => {
      expect(component).toBeDefined();
      expect(component).toBeTruthy();
    });
  });

  it("should have a title", async () => {

    const component = render(
      <Suspense fallback={<h1>loading....</h1>}>
        <Header filterFn={jest.fn()} />
      </Suspense>
    );

    await waitFor(() => {
      expect(component.queryByText('Wonderland Stream')).toBeTruthy();
    });
  });
});
