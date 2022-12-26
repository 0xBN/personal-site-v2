import { useState, useEffect } from 'react';
import { Footer, Main, Header } from 'components';

function App() {
  const root = document.getElementById('root');
  const [isWindowSmall, setIsWindowSmall] = useState(null);
  const [darkMode, setDarkMode] = useState(Boolean(localStorage.darkTheme));

  const toggleTheme = () => {
    setDarkMode((prev) => {
      localStorage.setItem('darkTheme', !Boolean(prev));
      return !darkMode;
    });
  };

  useEffect(() => {
    setIsWindowSmall(window.innerWidth < 768);

    // SAVE DARK THEME IN LOCAL STORAGE
    if (localStorage.darkTheme === undefined) {
      localStorage.setItem('darkTheme', 'true');
    }
    if (localStorage.darkTheme === 'true') {
      setDarkMode(true);
    }
    if (localStorage.darkTheme === 'false') {
      setDarkMode(false);
    }
  }, []);

  // HANDLE HTML BACKGROUND COLOR
  if (darkMode) {
    root.classList.add('bg-slate-600');
    root.classList.remove('bg-white');
  } else {
    root.classList.add('bg-white');
    root.classList.remove('bg-slate-600');
  }

  return (
    <div
      className={`App mx-auto min-h-screen grid-cols-4 scroll-smooth md:grid md:max-w-7xl 
       ${Boolean(darkMode) && 'dark'} font-display`}
    >
      <Header
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        isWindowSmall={isWindowSmall}
      />

      <div className='md:col-span-full md:col-start-2 md:max-h-screen md:overflow-y-auto md:overflow-x-hidden'>
        <Main darkMode={darkMode} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
