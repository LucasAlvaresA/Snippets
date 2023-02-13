# Test Example

- Create a file with name `{fileName}.spec.tsx`

- This is a example test with Button component:

```ts
import { fireEvent, render, screen } from "@testing-library/react";

import { Primary } from ".";

describe("PrimaryButton", () => {
  it("renders PrimaryButton", () => {
    const foo = jest.fn();
    render(
      <Primary
        label="Primary Button"
        onClick={() => {
          foo();
        }}
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).toBeTruthy();
    expect(button.textContent).toBe("Primary Button");
    expect(foo).toBeCalled();
  });

  it("renders PrimaryButton with disable", () => {
    const foo = jest.fn();
    render(<Primary disable label="Primary Button" onClick={foo} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).toBeTruthy();
    expect(button.textContent).toBe("Primary Button");
    expect(button).toBeDisabled();
    expect(foo).not.toBeCalled();
  });
});
```