import { Field, Input, Label } from '@headlessui/react';
import { ChangeEvent } from 'react';

interface HeadlessInputProps {
    id?: string;
    name?: string;
    value?: string;
    lableName?: string;
    placeholder?: string;
    maxLength?: number;
    minLength?: number;
    inputType?: 'text' | 'password' | 'email' | 'number' | 'tel';
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export function HeadlessInput({
    id,
    lableName,
    inputType,
    name,
    placeholder,
    value,
    onChange,
    maxLength,
    minLength,
}: HeadlessInputProps) {
    return (
        <Field>
            <Label className={`font-semibold text-xl`} htmlFor={id}>
                {lableName}
            </Label>
            <Input
                className={`font-medium border border-teal-800 w-full h-[30px] `}
                id={id}
                name={name}
                value={value}
                type={inputType}
                onChange={onChange}
                maxLength={maxLength}
                minLength={minLength}
                placeholder={placeholder}
                required
            />
        </Field>
    );
}
