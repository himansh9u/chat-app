import React from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });
    const { loading, signup } = useSignup();
    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-8 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up
                    <span className="text-blue-500"> ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label flex flex-col items-start gap-2">
                            <span className="text-base label-text text-gray-300">
                                Full Name
                            </span>
                            <input
                                type="text"
                                placeholder="John Doe"
                                value={inputs.fullName}
                                onChange={(e) =>
                                    setInputs({
                                        ...inputs,
                                        fullName: e.target.value,
                                    })
                                }
                                className="w-full input input-bordered h-10 bg-gray-800 text-white"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="label flex flex-col items-start gap-2">
                            <span className="text-base label-text text-gray-300">
                                Username
                            </span>
                            <input
                                type="text"
                                placeholder="Enter username"
                                value={inputs.username}
                                onChange={(e) =>
                                    setInputs({
                                        ...inputs,
                                        username: e.target.value,
                                    })
                                }
                                className="w-full input input-bordered h-10 bg-gray-800 text-white"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="label flex flex-col items-start gap-2">
                            <span className="text-base label-text text-gray-300">
                                Password
                            </span>
                            <input
                                type="password"
                                placeholder="Enter password"
                                value={inputs.password}
                                onChange={(e) =>
                                    setInputs({
                                        ...inputs,
                                        password: e.target.value,
                                    })
                                }
                                className="w-full input input-bordered h-10 bg-gray-800 text-white"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="label flex flex-col items-start gap-2">
                            <span className="text-base label-text text-gray-300">
                                Confirm Password
                            </span>
                            <input
                                type="password"
                                placeholder="Enter confirm password"
                                value={inputs.confirmPassword}
                                onChange={(e) =>
                                    setInputs({
                                        ...inputs,
                                        confirmPassword: e.target.value,
                                    })
                                }
                                className="w-full input input-bordered h-10 bg-gray-800 text-white"
                            />
                        </label>
                    </div>
                    <GenderCheckbox
                        onCheckboxChange={handleCheckboxChange}
                        selectedGender={inputs.gender}
                    />
                    <div className="mt-4">
                        <Link
                            to="/login"
                            className="text-sm hover:underline hover:text-white mt-2 inline-block text-gray-300"
                        >
                            Already have an account?
                        </Link>
                    </div>
                    <div className=" mb-4">
                        <button
                            className="bg-slate-900 hover:scale-95 hover:bg-slate-900 text-white btn btn-block btn-sm  mt-2 border-none"
                            disabled={loading}
                        >
                            {loading ? "Loading.." : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
