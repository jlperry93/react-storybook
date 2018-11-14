import { configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

setAddon(JSXAddon);

function loadStories() {
  require('./Welcome.js');
  require('../src/stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);