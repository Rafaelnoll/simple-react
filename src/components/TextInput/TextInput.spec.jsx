import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextInput } from ".";

describe("<TextInput/>", () => {
  it("should have a value of searchValue", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={"testing"} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input).toBeInTheDocument();

    expect(input.value).toEqual("testing");
  });

  it("should call handleChange function on each key pressed", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue="the value" />);

    const input = screen.getByPlaceholderText(/type your search/i);

    userEvent.type(input, "the value");

    expect(input.value).toEqual("the value");
    expect(fn).toHaveBeenCalledTimes("the value".length);
  });

  it("should match snapshot", () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} searchValue={"testing"} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
