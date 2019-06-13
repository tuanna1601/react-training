import React from 'react';

export const theme = {
  dark: {
    backgroundColor: 'black',
    color: 'white'
  },
  light: {
    backgroundColor: 'grey',
    color: 'black'
  }
};

const ThemeContext = React.createContext(theme.dark);

export default ThemeContext;
