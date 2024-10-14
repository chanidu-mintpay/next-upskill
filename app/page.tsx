'use client';

import React, { useState } from 'react';
import FormInput from '@/components/FormInput';
import { Fieldset, Label, Legend } from '@headlessui/react';
import FormTextArea from '@/components/FormTextArea';
import FormComboBox from '@/components/FormComboBox';

export default function Home() {
    const initialValues = {
        name: '',
        email: '',
        gender: '',
        phone: '',
        agreeToTerms: false,
        password: '',
        description: '',
    };

    const [formData, setFormDate] = useState(initialValues);

    const clubs = [
        { id: 1, name: 'Real Madrid', country: 'Spain' },
        { id: 2, name: 'Liverpool', country: 'England' },
        { id: 3, name: 'Juventus', country: 'Italy' },
        { id: 4, name: 'Leipzig', country: 'Germany' },
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormDate({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormDate({
            ...formData,
            [name]: checked,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Registration Successful', formData);
        setFormDate(initialValues);
    };

    return (
        <>
            <div className={`flex justify-center flex-col items-center font-semibold`}>
                <div className={`w-3/4`}>
                    <form onSubmit={handleSubmit}>
                        <Fieldset className={`p-2 border border-cyan-800 rounded-2xl flex flex-col items-center justify-center`}>
                            <Legend className="text-xl underline font-semibold">Personal Details</Legend>

                            <FormInput
                                label={'Full Name'}
                                inputType={'text'}
                                id={'name'}
                                name={'name'}
                                value={formData.name}
                                placeholder={'sergio ramos'}
                                onChange={handleInputChange}
                            />

                            <FormInput
                                label={'Email Address'}
                                inputType={'email'}
                                id={'email'}
                                name={'email'}
                                value={formData.email}
                                placeholder={'sergio@gmail.com'}
                                onChange={handleInputChange}
                            />

                            <div className={`flex flex-col w-[410px]`}>
                                <Label htmlFor="phone" className={`text-sm/6 font-medium text-black`}>
                                    Phone Number
                                </Label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    pattern="^0?7*[0-9]\d{7}$"
                                    maxLength={10}
                                    title={'Please enter a number starting 076'}
                                    required
                                    placeholder={'0774839380'}
                                    onChange={handleInputChange}
                                    className={'mt-1 block rounded-lg border py-1.5 px-3 text-sm/6 text-black shadow-md '}
                                />
                            </div>

                            <FormInput
                                label={'Password'}
                                inputType={'password'}
                                id={'password'}
                                name={'password'}
                                value={formData.password}
                                placeholder={'************'}
                                onChange={handleInputChange}
                            />

                            <div className={`flex flex-col`}>
                                <FormComboBox placeholder={'Favorite Club'} items={clubs} />
                            </div>

                            <div className={`p-4 text-sm/6 font-semibold flex flex-col mr-[305px]`}>
                                <label htmlFor="gender" className={`text-sm/6 font-medium text-black`}>
                                    Select Gender
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        id="male"
                                        name="gender"
                                        value="male"
                                        checked={formData.gender === 'male'}
                                        onChange={handleInputChange}
                                    />{' '}
                                    Male
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        value="female"
                                        checked={formData.gender === 'female'}
                                        onChange={handleInputChange}
                                        className={`text-sm/6 font-medium text-black`}
                                    />{' '}
                                    Female
                                </label>
                            </div>

                            <FormTextArea
                                name={'description'}
                                value={formData.description}
                                id={'description'}
                                onChange={handleInputChange}
                                label={'Add your Extra Activities'}
                                placeholder={'Ex: Sport Activities'}
                            />

                            <label htmlFor="agreeToTerms" className={`p-6 text-sm/6 font-medium text-black`}>
                                <input
                                    type="checkbox"
                                    id={'agreeToTerms'}
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleCheckboxChange}
                                    required
                                />{' '}
                                Agree Terms & Conditions
                            </label>
                            <input
                                type="submit"
                                value={'Submit'}
                                className={`bg-teal-900 rounded-xl px-9 py-3 text-white hover:bg-teal-700 hover:cursor-pointer
                            `}
                            />
                        </Fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}
