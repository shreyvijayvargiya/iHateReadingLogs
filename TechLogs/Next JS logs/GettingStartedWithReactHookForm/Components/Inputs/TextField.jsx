import React from 'react';

const TextField = ({ label, register, rules, placeholder, errors, name, type }) => {

    return (
        <div>
            <p className="text-gray-500 text-sm text-left">{name}</p>
            <input placeholder={placeholder} type={type} className="w-full border-indigo-500 mb-2 p-2 border rounded" {...register(label, { ...rules })} />
            {errors[label] && errors[label].type === 'required' && <p className="mb-3 text-red-500 text-left">{name} is required</p>}
            {errors[label] &&errors[label].type === 'maxLength' && <p className="mb-3 text-red-500 text-left">{name} should be have maximum of {rules.maxLength} characters</p>}
            {errors[label] && errors[label].type === 'min' && <p className="mb-3 text-red-500 text-left">{name} should be contain atleast {rules.min} characters</p>}
            {errors[label] && errors[label].type === 'pattern' && <p className="mb-3 text-red-500 text-left">{name} is invalid</p>}
        </div>
    );
};
export default TextField;
