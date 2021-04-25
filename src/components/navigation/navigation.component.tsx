import React, { FC, useState } from 'react';
import { useHistory } from 'react-router';
import styles from './navigation.module.css';

export const Navigation: FC = () => {
    const history = useHistory();

    const [expanded, setExpanded] = useState(true);

    return (
        <div className={`${styles.container} ${expanded ? styles.expanded : ''}`}>
            <button onClick={() => setExpanded(!expanded)}>Hamburger</button>
            <button onClick={() => history.push('/')}>Dashboard</button>
            <button onClick={() => history.push('/recipes')}>Recipes</button>
            <button onClick={() => history.push('/new')}>Create a new recipe</button>
        </div>
    );
}
