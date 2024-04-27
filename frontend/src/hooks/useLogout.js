import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const logout = async () => {
        setLoading(true);
        const toastId = toast.loading("loading");
        try {
            const res = await fetch("http://localhost:5001/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            localStorage.removeItem("chat-user");
            setAuthUser(null);
        } catch (error) {
            toast.error(error.message);
        } finally {
            toast.dismiss(toastId);
            toast.success("Logged Out Successfully");
            setLoading(false);
        }
    }
    return { loading, logout };
}

export default useLogout;