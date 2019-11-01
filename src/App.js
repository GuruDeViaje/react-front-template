import React from 'react';
/* @ is alias to ./src/img */
import logo from '@/png/guru.png';
import styles from './App.css';

function App() {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <h3>
          Guru Boilerplate
        </h3>
        <img src={logo} className={styles.logo} alt="logo" />
        <a
          className={styles.link}
          href="https://github.com/GuruDeViaje"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guru Github page
        </a>
      </header>
    </div >
  );
}

export default App;
