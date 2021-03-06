import { withInfo } from '@storybook/addon-info';

const wInfoStyle = {
  header: {
    h1: {
      marginRight: '20px',
      fontSize: '25px',
      display: 'inline',
      color: 'blue'
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    h2: {
      display: 'inline',
      color: '#999',
    },
  },
  infoBody: {
    padding: '0px 5px',
    lineHeight: '2',
  },
};

export const wInfo = text =>
  withInfo({ inline: true, source: false, styles: wInfoStyle, text: text });