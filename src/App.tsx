import { useState, useEffect } from 'react'
import Theme from 'src/components/common/themeButton';
import { ThemeProvider } from '@emotion/react'; 
import { darkTheme, lightTheme } from 'src/utils/theme';
import GlobalStyles from 'src/styles/globalStyles';
import Home from 'src/pages/home';

function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  const toggleDark = () => {
    setIsDark(prev => !prev);
    localStorage.setItem('theme', isDark ? 'light' : 'dark')
  }

  return (
    <div className="App">
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles/>
        <Home />
        <Theme
          toggleDark={toggleDark}
          isDark={isDark}
        />
      </ThemeProvider>
    </div>
  )
}

export default App
