import '../styles/variables.css';
import '../styles/reset.css';
import '../styles/global.css';
import '../styles/dnd.css';

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
