import React, { FC, useState } from 'react';
import { api } from '../../api/api.service';

export const Dashboard: FC = () => {
    const [value, setValue] = useState('');

    const onClick = async () => {
        setValue(await (await api.send<{ kernel: string }>('load-recipes')).kernel);
    };

    return (
        <>
            <div>Dashboard</div>
            <button onClick={onClick}>Test</button>
            {value}
        </>
    );
}
