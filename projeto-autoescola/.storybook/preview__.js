import React from "react";
import { addDecorator } from "@storybook/react";
import GlobalStyle from "../src/components/GlobalStyle";
addDecorator((storyFn) => {
  <>
    <GlobalStyle />
    {storyFn()}
  </>;
});

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
