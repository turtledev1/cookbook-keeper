import React, { FC } from 'react';
import styles from './input.module.css';

export interface InputProps {
    label: string;
    placeholder?: string;
}

export const Input: FC<InputProps> = ({
    label,
    placeholder = '',
}) => {
    return (
        <div className={styles.container}>
            <label>
                {label}
            </label>
            <input
                className={styles.input}
                placeholder={placeholder}
            />
        </div>
    );
}
