import React from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '../../atom';

const ThemeToggle = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setTheme(current => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={toggleTheme} className="btn theme-toggle">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;
