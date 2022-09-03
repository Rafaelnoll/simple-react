import { render, screen } from "@testing-library/react";
import { Posts } from ".";

const props = {
  posts: [
    {
      id: 1,
      title: "title1",
      cover: "img/img1.png",
      body: "body1",
    },
    {
      id: 2,
      title: "title2",
      cover: "img/img2.png",
      body: "body2",
    },
    {
      id: 3,
      title: "title3",
      cover: "img/img3.png",
      body: "body3",
    },
  ],
};

describe("<Posts/>", () => {
  it("should render posts", () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole("heading", { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole("img", { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
    expect(screen.getByRole("img", { name: /title3/i })).toHaveAttribute("src", "img/img3.png");
  });

  it("should not render posts", () => {
    render(<Posts />);
    expect(screen.queryAllByRole("heading", /title/i)).toHaveLength(0);
  });

  it("should match snapshot", () => {
    const { container } = render(<Posts {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
