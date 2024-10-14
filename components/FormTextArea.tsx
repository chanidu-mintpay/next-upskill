import { Field, Label, Textarea } from '@headlessui/react';
import clsx from 'clsx';
import { ChangeEvent } from 'react';

export interface FormTextAreaProps {
    label?: string;
    id?: string;
    name?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    placeholder?: string;
}

export default function FormTextArea({ label, name, value, onChange, id, placeholder }: FormTextAreaProps) {
    return (
        <div className="w-full max-w-md px-4">
            <Field>
                <Label htmlFor={id} className="text-sm/6 font-medium text-black">
                    {label}
                </Label>
                <Textarea
                    name={name}
                    id={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required
                    className={clsx(
                        'mt-1 block w-full resize-none rounded-lg border shadow-md bg-white/5 py-1.5 px-3 text-sm/6 ',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-blue/25',
                    )}
                    rows={3}
                />
            </Field>
        </div>
    );
}
