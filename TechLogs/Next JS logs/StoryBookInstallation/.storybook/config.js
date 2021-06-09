import { configure } from '@storybook/react';

// automatically import all files ending in *.js
configure(require.context('../Storybook/Playground', true, /\.(js)$/), module);