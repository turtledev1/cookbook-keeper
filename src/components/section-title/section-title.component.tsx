import React, { FC } from 'react';
import styles from './section-title.module.css';

export interface SectionTitleProps {
    title: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({
    title,
}) => {
    return (
        <div className={styles.title}>{title}</div>
    );
}
