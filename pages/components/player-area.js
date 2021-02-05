import styles from '../player-area.module.css';
import { useEffect, useContext, useState } from 'react';
import { AppContext } from '../../context/state';

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