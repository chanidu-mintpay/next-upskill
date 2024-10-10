import { Field, Label, Select } from '@headlessui/react';
import clsx from 'clsx';
import { ChangeEvent } from 'react';

export interface FormSelectProps {
    label?: string;
    id?: string;
    name?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export default function FormSelect({ label, id, name, value, onChange }: FormSelectProps) {
    return (
        <div className="w-full max-w-md px-4">
            <Field>
                <Label htmlFor={id} className="text-sm/6 font-semibold text-black">
                    {label}
                </Label>
                <div className="realtive ">
                    <Select
                        name={name}
                        value={value}
                        onChange={onChange}
                        required
                        className={clsx(
                            'mt-1 block w-full  rounded-lg bg-white border py-1.5 px-2 text-sm/6 h-[40px] shadow-md',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                        )}
                    >
                        <option value="none">Select option</option>
                        <option value="student">Student</option>
                        <option value="undergraduate">Undergraduate</option>
                        <option value="graduate">Graduate</option>
                    </Select>
                </div>
            </Field>
        </div>
    );
}
