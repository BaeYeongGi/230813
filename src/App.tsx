import { useState, useEffect } from 'react'
import Theme from 'src/components/common/themeButton';
import { ThemeProvider } from '@emotion/react'; 
import { darkTheme, lightTheme } from 'src/utils/theme';
import GlobalStyles from 'src/styles/globalStyles';
import Home from 'src/pages/home';

function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  },[isDark])

  const toggleDark = () => {
    setIsDark(prev => !prev);
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
