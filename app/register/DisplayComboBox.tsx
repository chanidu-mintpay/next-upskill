import React, { useState } from 'react';
import { Label } from '@headlessui/react';

export interface DisplayComboBoxProps {
    placeholder?: string;
    options?: string[];
}

export const DisplayComboBox = ({ placeholder, options = [] }: DisplayComboBoxProps) => {
    const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.toLowerCase();

        if (query === '') {
            setFilteredOptions(options);
            setIsOpen(true);
        } else {
            setFilteredOptions(options.filter((option) => option.toLowerCase().includes(query)));
        }

        setSelectedOption(event.target.value);
    };

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative w-64 text-sm/6 font-semibold text-black">
            <Label>Select Your Status</Label>
            <input
                type="text"
                value={selectedOption}
                onChange={handleInputChange}
                placeholder={placeholder}
                onFocus={() => setIsOpen(true)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            />
            {isOpen && (
                <ul className="absolute z-10 w-full mt-2 bg-white border rounded-md shadow-lg">
                    {filteredOptions.map((option, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                    {filteredOptions.length === 0 && <li className="px-4 py-2 text-gray-500">No options found</li>}
                </ul>
            )}
        </div>
    );
};
