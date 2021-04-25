import React, { FC } from 'react';
import { useHistory } from 'react-router';

export const Dashboard: FC = () => {
    const history = useHistory();

    return (
        <>
            <div>Dashboard</div>
            <button onClick={() => history.push('/recipes')}>test</button>
        </>
    );
}
