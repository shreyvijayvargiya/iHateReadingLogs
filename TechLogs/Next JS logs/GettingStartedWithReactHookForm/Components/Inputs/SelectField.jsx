import React from 'react';

const SelectInput = React.forwardRef(({ onChange, name, label, options, errors, rules }, ref) => {
    return (
        <div>
            <p className="text-gray-500 text-sm text-left">{label}</p>
            <select 
                name={name}  
                ref={ref} 
                className="w-full border-indigo-500 mb-2 p-2 border rounded"
                onChange={onChange}
            >
                {options && options.map(item => (
                    <option value={item}>{item}</option>
                ))}
            </select>
        </div>
    )
});
export default SelectInput;
