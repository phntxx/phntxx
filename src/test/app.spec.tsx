import { render } from "@testing-library/react";
import App from "../app";

describe("app.tsx", () => {
  it("should render component without label without crashing", () => {
    const { asFragment } = render(<App />);
    expect(asFragment).toMatchSnapshot();
  });
});
