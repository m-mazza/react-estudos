import React from "react";

import GlobalStyle from "../src/components/GlobalStyle";
import { BreakpointSize } from "../src/components/Breakpoints";

export const decorators = [
  (StoryFn) => (
    <>
      <GlobalStyle />
      <StoryFn />
    </>
  ),
];

const viewports = {
  extraSmall: {
    name: "Portrait phone (default)",
    styles: {
      width: "360px",
      height: "640px",
    },
  },

  small: {
    name: "Landscape Phone (sm)",
    styles: {
      width: "640px",
      height: "360px",
    },
  },

  medium: {
    name: "Tablet (md)",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },

  large: {
    name: "Desktop (lg)",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },

  extraLarge: {
    name: "Large Desktop (xl)",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
};

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports,
    },
  },
};

export default preview;
