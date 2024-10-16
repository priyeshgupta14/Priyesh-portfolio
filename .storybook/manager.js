import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    // brandImage: 'https://priyeshgupta.com/icon.svg',
    brandTitle: 'Priyesh Gupta Components',
    brandUrl: 'https://priyeshgupta.netlify.app',
  },
});
