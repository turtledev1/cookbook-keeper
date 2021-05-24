import React, { FC } from 'react';
import styles from './button.module.css';

export interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
    onClick = () => {},
    disabled = false,
    children,
}) => {
    return (
        <button
            onClick={onClick}
            className={styles.button}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
