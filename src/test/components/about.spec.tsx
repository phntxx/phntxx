import { render } from "@testing-library/react";
import About from "../../components/about";

describe("about.tsx", () => {
  it("should render component without crashing", () => {
    const { asFragment } = render(<About />);
    expect(asFragment).toMatchSnapshot();
  });
});
