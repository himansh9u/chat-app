import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
    const { loading, login } = useLogin();
    const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login
                    <span className="text-blue-500"> ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2 flex flex-col items-start gap-2">
                            <span className="text-base label-text text-slate-300">
                                Username
                            </span>
                            <input
                                type="text"
                                placeholder="Enter username"
                                className="bg-gray-800 w-full input input-bordered h-10 text-slate-300"
                                value={username}
							    onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                    </div>
					<div>
                        <label className="label p-2 flex flex-col items-start gap-2">
                            <span className="text-base label-text text-slate-300">
                                Password
                            </span>
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="bg-gray-800 w-full input input-bordered h-10 text-slate-300"
                                value={password}
							    onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
					<div className="px-2">
						<Link to="/signup" className='text-slate-300 text-sm hover:underline hover:text-white mt-2 inline-block'>
							{"Don't"} have an account?
						</Link>
					</div>
					<div className="px-2 mb-4">
						<button className='bg-slate-900 hover:scale-95 hover:bg-slate-900 text-white btn btn-block btn-sm  mt-2 border-none'>
							Login
						</button>
					</div>
                </form>
            </div>
        </div>
    );
};

export default login;
