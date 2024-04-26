import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-8 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up
                    <span className="text-blue-500"> ChatApp</span>
                </h1>
                <form>
                    <div>
                        <label className="label flex flex-col items-start gap-2">
                            <span className="text-base label-text text-gray-300">
                                Full Name
                            </span>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full input input-bordered h-10"
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
                                className="w-full input input-bordered h-10"
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
                                className="w-full input input-bordered h-10"
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
                                className="w-full input input-bordered h-10"
                            />
                        </label>
                    </div>
                    <GenderCheckbox/>
                    <div className="mt-4">
                        <a
                            href="#"
                            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-300"
                        >
                            Already have an account?
                        </a>
                    </div>
                    <div className=" mb-4">
                        <button className="btn btn-block btn-sm mt-2">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
