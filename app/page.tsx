'use client';

import React, { useState } from 'react';
import FormInput from '@/components/FormInput';
import { Fieldset, Legend } from '@headlessui/react';
import FormTextArea from '@/components/FormTextArea';
import FormComboBox from '@/components/FormComboBox';
import FormDialog from '@/components/FormDialog';

export default function Home() {
    const [formData, setFormDate] = useState({
        name: '',
        email: '',
        gender: '',
        phone: '',
        agreeToTerms: false,
        password: '',
        description: '',
    });

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
                            <FormInput
                                label={'Phone Number'}
                                inputType={'number'}
                                id={'number'}
                                name={'number'}
                                value={formData.phone}
                                placeholder={'0773498780'}
                                onChange={handleInputChange}
                            />
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
                                <label htmlFor="gender">Select Gender</label>
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
                            <label htmlFor="agreeToTerms" className={`p-6 text-sm/6 font-semibold`}>
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
                            {/*<button*/}
                            {/*    className={`bg-teal-900 rounded-xl px-9 py-3 text-white hover:bg-teal-700*/}
                            {/*`}*/}
                            {/*    type={'submit'}*/}
                            {/*>*/}
                            {/*    Submit*/}
                            {/*</button>*/}
                            <FormDialog onClose={handleSubmit} />
                        </Fieldset>
                    </form>
                </div>
            </div>
        </>
    );
}
