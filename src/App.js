import {useState, useEffect} from 'react';
import './global.css';
import Header from './header'
import TopCardList from './topcards'
import Overview from './overview';
import Switch from './switch';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode';

  useEffect(()=> {
    const mq = window.matchMedia('(prefers-color-scheme: dark)').matches 
      // setChecked(true)
      // ref.current.setAttribute('checked', true)
      setDarkMode(mq.matches)
      setChecked(mq.matches)
  }, [])

  return (
    <main className={mainClass}> 
      <Header>
        <Switch setDarkMode={setDarkMode} checked={checked} setChecked={setChecked} />
      </Header>
      <TopCardList />
      <Overview />
    </main>
  ) 
}

export default App;
