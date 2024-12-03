import { orbitron } from '@/app/fonts/fonts';
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
    initialTime: number; // Tempo inicial em segundos
}

export const Cronometro: React.FC<CountdownTimerProps> = ({ initialTime }) => {
    const [timeLeft, setTimeLeft] = useState<number>(initialTime);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timerId = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft]);

    const formatTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className={`text-5xl ${orbitron.className}`}>
            <h1>{formatTime(timeLeft)}</h1>
            {timeLeft <= 0 && <p>Tempo esgotado!</p>}
        </div>
    );
};
