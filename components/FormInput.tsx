import { Field, Input, Label } from '@headlessui/react';
import clsx from 'clsx';
import { ChangeEvent } from 'react';

export interface FormInputProps {
    id?: string;
    name?: string;
    label?: string;
    value?: string;
    maxLength?: number;
    minLength?: number;
    placeholder?: string;
    inputType?: 'text' | 'number' | 'email' | 'password' | 'tel';
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export default function FormInput({
    label,
    id,
    name,
    inputType,
    value,
    onChange,
    placeholder,
    maxLength,
    minLength,
}: FormInputProps) {
    return (
        <div className="w-full max-w-md px-4">
            <Field>
                <Label htmlFor={id} className="text-sm/6 font-medium text-black">
                    {label}
                </Label>
                <Input
                    type={inputType}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                    placeholder={placeholder}
                    maxLength={maxLength}
                    minLength={minLength}
                    className={clsx(
                        'mt-1 block w-full rounded-lg border py-1.5 px-3 text-sm/6 text-black shadow-md',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-blue-950',
                    )}
                />
            </Field>
        </div>
    );
}
