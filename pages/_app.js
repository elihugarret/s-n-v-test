import '../styles/globals.css'
import AppContext from '../context/state';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [playerCards, setPlayerCards] = useState([]);
  return (
    <AppContext.Provider value={{playerCards, setPlayerCards}}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
