import React, { useEffect, useState, useContext } from 'react';

import ThemeContext from './theme';

export default ({ onLoad }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useContext(ThemeContext);
  useEffect(() => {
    onLoad();
  }, [onLoad]);
  console.log(theme);
  return (
    <div
      style={{
        ...theme,
        borderRight: '1px solid black',
        height: '100%',
        overflow: 'hidden',
        transition: 'width 2s',
        width: expanded ? '300px' : '80px'
      }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div
        style={{
          width: '300px'
        }}
      >
        This is the sidebar
      </div>
    </div>
  );
};
