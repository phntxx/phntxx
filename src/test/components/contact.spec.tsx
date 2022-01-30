import { render } from "@testing-library/react";
import Contact from "../../components/contact";

describe("contact.tsx", () => {
  it("should render component without crashing", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment).toMatchSnapshot();
  });
});
