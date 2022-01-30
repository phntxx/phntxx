import { render } from "@testing-library/react";
import Heading from "../../components/heading";

describe("heading.tsx", () => {
  it("should render component without label without crashing", () => {
    const { asFragment } = render(<Heading />);
    expect(asFragment).toMatchSnapshot();
  });
});
