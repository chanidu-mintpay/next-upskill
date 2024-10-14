'use client';

import React, { useState } from 'react';
import { HeadlessInput } from '@/components/HeadlessInput';

const login = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    return (
        <div className={`flex flex-col w-1/2 items-center justify-center`}>
            <HeadlessInput
                lableName={'Enter Name'}
                id={'name'}
                name={'name'}
                inputType={'text'}
                value={userData.name}
                onChange={handleChange}
                placeholder={'Tom Hendricks'}
            />
            <HeadlessInput
                lableName={'Enter Email'}
                id={'email'}
                name={'email'}
                inputType={'email'}
                value={userData.email}
                onChange={handleChange}
                placeholder={'tom@gmail.com'}
            />
            <HeadlessInput
                lableName={'Enter Number'}
                id={'phone'}
                name={'phone'}
                inputType={'tel'}
                value={userData.phone}
                onChange={handleChange}
                placeholder={'0773284750'}
            />
        </div>
    );
};

export default login;
