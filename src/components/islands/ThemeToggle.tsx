import { useState, useEffect } from 'react';

interface Props {
  initialTheme: 'dark' | 'light';
  labelToLight: string;
  labelToDark: string;
}

export default function ThemeToggle({ initialTheme, labelToLight, labelToDark }: Props) {
  const [theme, setTheme] = useState<'dark' | 'light'>(initialTheme);

  useEffect(() => {
    // Sync with the actual DOM state set by the FOUC inline script
    const actual =
      document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    if (actual !== theme) setTheme(actual);
  }, []);

  function toggle() {
    const next: 'dark' | 'light' = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (next === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', next);
  }

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? labelToLight : labelToDark}
      type="button"
    >
      <span aria-hidden="true">{theme === 'dark' ? '○' : '●'}</span>
    </button>
  );
}
