import React from 'react';
import { wInfo } from './utils';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';


storiesOf('Button', module)
  .addWithJSX('with text', wInfo('description of component')(() => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  )))
  .addWithJSX('with some emoji', wInfo('description of component')(() => (
    <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ))); 