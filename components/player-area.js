import styles from '../pages/player-area.module.css';
import { AppContext } from '../context/state';
import { useContext } from 'react';

export default function PlayerArea() {
    const { playerCards } = useContext(AppContext);

    return (
        <div className={styles['player-area']}>
            {Array(4).fill(null).map((_, index) => (
                <div key={index}>
                    {playerCards[index] && <img src={playerCards[index]}/>}
                </div>
            ))}
        </div>
    )
}