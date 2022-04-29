import React from "react";
import { fireEvent, render, screen, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { inRange } from "../utils/validators";
import { fetchSidebarData } from "../utils/ApiClient";
import { logHandler } from "../utils/logger";
import { rest } from "msw";
import { setupServer } from "msw/node";
import App from "../App";

describe("Level 1 Spec", () => {
  test("Q1: inRange should check that the input length is within the specified range", () => {
    expect(inRange("", 0, 0)).toBe(true);
    expect(inRange("", 1, 1)).toBe(false);
    expect(inRange("a", 0, 0)).toBe(false);
    expect(inRange("abc", 10, 0)).toBe(false);
  });

  test("Q2: fetchSidebarData should make a request to the /sidebar endpoint", async () => {
    server.use(
      rest.get("/sidebar", (req, res, ctx) => {
        return res(
          ctx.json({
            data: "Hello world!",
          })
        );
      })
    );

    const response = await fetchSidebarData();
    expect(response.data).toBe("Hello world!");
  });

  test("Q3: fetchSidebarData should make a request with the Authorization header set to a non-empty value", async () => {
    server.use(
      rest.get("/sidebar", (req, res, ctx) => {
        const headers = req.headers;
        const authHeader = headers.get("Authorization");

        if (authHeader.length === 0) {
          return res(ctx.status(401))
        }

        return res(
          ctx.json({
            data: "Authorized",
          })
        );
      })
    );

    const response = await fetchSidebarData();
    expect(response.data).toBe("Authorized")
  });
});

describe("Level 2 Spec", () => {
  test("Q4: 2FA code submit should be disabled until all validation is met", () => {
    const utils = render(<App />);
    const submitButton = screen.getByRole("button", { name: "Submit" });
    const twoFactorAuthInput = utils.getByRole("textbox");
    expect(submitButton).toHaveAttribute("disabled");

    // Must be exactly 7 characters
    fireEvent.change(twoFactorAuthInput, { target: { value: "123" } });
    expect(submitButton).toHaveAttribute("disabled");
    fireEvent.change(twoFactorAuthInput, { target: { value: "12345678" } });
    expect(submitButton).toHaveAttribute("disabled");
    fireEvent.change(twoFactorAuthInput, { target: { value: "1234567" } });
    expect(submitButton).not.toHaveAttribute("disabled");
  });

  test("Q5: sidebar context items should render from a backend payload and only render items based on count", async () => {
    server.use(
      rest.get("/sidebar", (req, res, ctx) => {
        return res(
          ctx.json({
            count: 3,
            line_3: "third message",
            line_4: "forth should not render",
            line_1: "first message",
            line_2: "second message",
          })
        );
      })
    );

    render(<App />);

    await waitFor(() => screen.getByTestId("sidebar"));
    const sidebar = screen.getByTestId("sidebar");
    await waitFor(() => expect(sidebar).toHaveTextContent("first message"));
    expect(sidebar).toHaveTextContent("second message");
    expect(sidebar).toHaveTextContent("third message");
    expect(sidebar).not.toHaveTextContent("forth should not render");
  });
});

describe("Level 3 Spec", () => {
  test("Q6: logHandler should take in an array and log each item in order with a 1 second delay between logs", async () => {
    function flushPromises() {
      return new Promise(resolve => setImmediate(resolve));
    }

    const TEST_LOGS = [
      "log 1",
      "log 2",
      "log 3",
    ];

    jest.useFakeTimers();
    await flushPromises()

    const spy = jest.spyOn(console, 'log')
    logHandler(TEST_LOGS)
    
    await jest.advanceTimersByTime(1000)
    await flushPromises()
    expect(spy).toBeCalledTimes(1);
    await jest.advanceTimersByTime(1000)
    await flushPromises()
    expect(spy).toBeCalledTimes(2);
    await jest.advanceTimersByTime(1000)
    await flushPromises()
    expect(spy).toBeCalledTimes(3);
  })
});

const server = setupServer(
  rest.get("/sidebar", (req, res, ctx) => {
    return res(ctx.json({}));
  })
);
  
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
