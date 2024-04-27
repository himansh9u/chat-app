import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();
    const login = async (username, password) => {
        const success = handleInputErrors(username, password);
		if (!success) return;
		setLoading(true);
		const toastId = toast.loading("loading");
        try {
            const res = await fetch("http://localhost:5001/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
				credentials: 'include'
			});
			console.log("result: ", res);
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
        } catch (error) {
			toast.error(error.message);
		} finally {
			toast.dismiss(toastId);
			toast.success("Logged In Successful");
			setLoading(false);
		}
    }
    return { loading, login };
}

function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}
	return true;
}

export default useLogin