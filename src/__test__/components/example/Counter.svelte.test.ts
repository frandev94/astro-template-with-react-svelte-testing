/* eslint-disable @typescript-eslint/no-explicit-any */
import Counter from "./Counter.svelte";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";

function setup() {
  const incrementSpy = vi.fn(() => {});
  const decrementSpy = vi.fn(() => {});

  return { incrementSpy, decrementSpy };
}

describe("Counter", () => {
  it("starts with a count of 0", async () => {
    const { incrementSpy, decrementSpy } = setup();
    render(Counter as any, {
      props: { onIncrement: incrementSpy, onDecrement: decrementSpy },
    });
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(incrementSpy).toHaveBeenCalledTimes(0);
    expect(decrementSpy).toHaveBeenCalledTimes(0);
  });

  it("increases the count when the + button is clicked", async () => {
    const { incrementSpy, decrementSpy } = setup();
    render(Counter as any, {
      props: { onIncrement: incrementSpy, onDecrement: decrementSpy },
    });
    await userEvent.click(screen.getByRole("button", { name: "+" }));
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(incrementSpy).toHaveBeenCalledTimes(1);
    expect(decrementSpy).toHaveBeenCalledTimes(0);
  });

  it("decreases the count when the - button is clicked", async () => {
    const { incrementSpy, decrementSpy } = setup();
    render(Counter as any, {
      props: { onIncrement: incrementSpy, onDecrement: decrementSpy },
    });
    await userEvent.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByText("-1")).toBeInTheDocument();
    expect(incrementSpy).toHaveBeenCalledTimes(0);
    expect(decrementSpy).toHaveBeenCalledTimes(1);
  });

  it("keeps the count in sync when both buttons are clicked", async () => {
    const { incrementSpy, decrementSpy } = setup();
    render(Counter as any, {
      props: { onIncrement: incrementSpy, onDecrement: decrementSpy },
    });
    await userEvent.click(screen.getByRole("button", { name: "+" }));
    await userEvent.click(screen.getByRole("button", { name: "-" }));
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(incrementSpy).toHaveBeenCalledTimes(1);
    expect(decrementSpy).toHaveBeenCalledTimes(1);
  });
});
