import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, Field, Label } from '@headlessui/react';
import React, { useState } from 'react';

interface ClubDetails {
    id: number;
    name: string;
    country: string;
}

interface FormComboBoxProps {
    items?: ClubDetails[];
    placeholder?: string;
}

export default function FormComboBox({ items = [], placeholder }: FormComboBoxProps) {
    const [selectedItem, setSelectedItem] = useState<ClubDetails | null>(items[0]);
    const [query, setQuery] = useState('');

    const filteredItems =
        query === ''
            ? items
            : items?.filter((item) => {
                  return item.name.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <Field className={`text-sm/6 font-semibold flex flex-col`}>
            <Label>Favorite Club</Label>
            <Combobox value={selectedItem} onChange={setSelectedItem} onClose={() => setQuery('')}>
                <ComboboxInput
                    className={`px-2 h-[38px] w-[408px] border rounded-[9px] shadow-md`}
                    placeholder={placeholder}
                    displayValue={(item: ClubDetails) => item?.name}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <ComboboxOptions anchor="bottom" className="border bg-white empty:invisible w-[408px]">
                    {filteredItems.map((item: ClubDetails) => (
                        <ComboboxOption key={item.id} value={item} className="data-[focus]:bg-blue-100">
                            {item.name}
                        </ComboboxOption>
                    ))}
                </ComboboxOptions>
            </Combobox>
        </Field>
    );
}
