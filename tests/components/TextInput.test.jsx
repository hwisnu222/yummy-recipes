import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TextInput from "../../src/components/inputs/TextInput";

describe("Text input component", () => {
  it("textinput not change", () => {
    const input = render(<TextInput />);
    /**
     * method expect.toMatchSnapshot() digunakan agar component memiliki tree DOM yang sama
     * sehingga apa bila ada didalam component tersebut terdapat perubahan, maka test akan failed
     *
     * untuk mengupdate snapshot yaitu dengan npm run test --updateSnapshot
     */
    expect(input).toMatchSnapshot();
  });
});
