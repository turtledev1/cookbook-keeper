import React, { FC } from 'react';
import styles from './button.module.css';

export const Button: FC = ({
    children,
}) => {
    return (
        <button className={styles.button}>
            {children}
        </button>
    );
}
