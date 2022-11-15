import { render, screen } from "@testing-library/react";
import HighLightItem from "./HighLightItem";

const testId = `highlight-item`

describe("HighLightItem", () => {
  it("HighLightItem component", async () => {
    const children = <span></span>;
    const title = "test title here"
    render(<HighLightItem  children={children} title={title} />)

    const highlightItemComp = screen.getByTestId(testId)
    expect(highlightItemComp).toBeDefined();
  });

  it("HighLightItem title Lable", async () => {
    const children = <></>;
    const title = "test title here"
    render(<HighLightItem  children={children} title={title} />)

    const titleLable = screen.getByText(title)
    expect(titleLable).toBeDefined();
  });
});
