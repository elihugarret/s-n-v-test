import { createContext } from 'react';

export const AppContext = createContext({
    playerCards: [],
    setPlayerCards: () => {},
});

export default AppContext;