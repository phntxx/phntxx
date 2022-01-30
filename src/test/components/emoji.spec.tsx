import { render } from "@testing-library/react";
import Emoji, { IEmojiProps } from "../../components/emoji";

describe("emoji.tsx", () => {
  it("should render component without label without crashing", () => {
    const { asFragment } = render(<Emoji symbol="🤔" />);
    expect(asFragment).toMatchSnapshot();
  });

  it("should render component with label without crashing", () => {
    const { asFragment } = render(<Emoji symbol="🤔" label="Test" />);
    expect(asFragment).toMatchSnapshot();
  });
});
