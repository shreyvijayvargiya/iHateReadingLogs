import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, SelectInput } from '../Components';

const App = () => {

    const { handleSubmit, formState: { errors }, register } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    console.log(errors)
    return (
        <div className="m-auto text-center w-screen h-screen">
            <div className="bg-gray-100 p-6">
                <p className="text-2xl text-white-400">React Hook Form</p>
            </div>
            <div className="h-4/6 flex justify-around align-center">
                <form className="w-1/5 mt-10 text-center">
                    <TextField 
                        label="firstName"
                        placeholder="John"
                        register={register}
                        name="First name"
                        errors={errors}
                        rules={{ maxLength: 20, required: true, min: 3 }}
                    />
                    <TextField 
                        label="lastName"
                        placeholder="Doe"
                        register={register}
                        name="Last name"
                        errors={errors}
                        rules={{ maxLength: 20, required: true, min: 3 }}
                    />
                    <TextField 
                        label="email"
                        placeholder="johndoe@gmail.com"
                        register={register}
                        name="Email"
                        errors={errors}
                        rules={{ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ }}
                    />
                    <SelectInput 
                        {...register('role')}
                        label="Select role"
                        errors={errors}
                        rules={{ required: true }}
                        options={['Male', 'Femail', 'Others']}
                    />
                    <input 
                        type="submit"
                        onClick={handleSubmit(onSubmit)}
                        className="m-auto w-full p-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex justify-center"
                    /> 
                </form>
                <div className="m-4 w-1/5 border bg-black ">
                    {errors ? (
                        <>
                            {errors['firstName'] && <p className="text-red-500">First Name: {errors['email'].type}</p>}
                            {errors['lastName'] && <p className="text-red-500">Last Name: {errors['email'].type}</p>}
                            {errors['email'] && errors['email'].type === 'required' && <p className="text-red-500">Email is required</p>}
                            {errors['email'] && errors['email'].type === 'pattern' && <p className="text-red-500">Email is invalid</p>}
                        </>
                    ):
                        <p className="text-green">Form Submitted Successfully</p>
                    }
                </div>
            </div>
            <div className="w-screen bg-gray-100 h-1/4 p-4 mt-4">
                <p>Developed By <a className="text-indigo-400 underline" href="http://i-hate-reading-logs.vercel.app/">Shrey Vijayvargiya</a></p>
            </div>
        </div>
    )
};
export default App;
