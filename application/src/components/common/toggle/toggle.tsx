'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      style={{ cursor: 'pointer' }}
      className='p-2 bg-gray-200 dark:bg-gray-700 rounded-xl'>
      {isDarkMode ? (
        <Sun color='#FFC300' />
      ) : (
        <Moon color='#1c406b' fill='#1c406b' />
      )}
    </button>
  );
};

export default Toggle;
