const theme = {
  palette: {
    background: {
      body: '#FFFFFF',
    },
    blue: '#00b3f5',
    green: '#00cd50',
    red: '#c81a0d',
    text: {
      primary: '#445368',
      secondary: '#8d99aa',
      light: '#d0d5dc',
    },
  },
  spacing: (multiplier = 1) => `${4 * multiplier}px`,
  typography: {
    body: {
      'font-weight': 'normal',
      'font-size': '18px',
    },
  },
};

export default theme;
