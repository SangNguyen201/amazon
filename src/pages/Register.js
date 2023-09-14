import React, { useState } from "react";
import { darklogo } from "../assets";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { RotatingLines } from "react-loader-spinner";
const Register = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [clientName, setClientName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setrePassword] = useState("");
    // Error Message
    const [errClientName, setErrClientName] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");
    const [errRePassword, setErrRePassword] = useState("");
    const [firebaseErr, setFireBaseErr] = useState("");
    // Loading state
    const [loading, setLoading] = useState(false);
    const [successMess, setSuccessMess] = useState("");
    // handle function
    const handleName = (e) => {
        setClientName(e.target.value);
        setErrClientName("");
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail("");
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setErrPassword("");
    };
    const handleRepassword = (e) => {
        setrePassword(e.target.value);
        setErrRePassword("");
    };
    // Email validation
    const emailValidation = (e) => {
        return String(e)
            .toLocaleLowerCase()
            .match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    };
    // submit button
    const handleRegister = (e) => {
        e.preventDefault();
        if (clientName === "") {
            setErrClientName("Enter your name");
        }
        if (email === "") {
            setErrEmail("Enter your email");
        } else {
            if (!emailValidation(email)) {
                setErrEmail("Enter a valid email");
            }
        }
        if (password === "") {
            setErrPassword("Enter you password");
        } else {
            if (password.length < 6) setErrPassword("Passwords must to be ae least 6 characters");
        }
        if (rePassword === "") {
            setErrRePassword("Confirm your password");
        } else {
            if (password !== rePassword) {
                setErrRePassword("Password is correct");
            }
        }
        if (clientName && email && emailValidation(email) && password ** password.length >= 6 && rePassword === password) {
            setLoading(true);
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    updateProfile(auth.currentUser, {
                        displayName: clientName,
                        photoURL:
                            "https://www.google.com/search?q=image+people&tbm=isch&chips=q:people,g_1:famous:agijlT5CHMA%3D&hl=en&sa=X&ved=2ahUKEwiW1ueG7aiBAxWUUt4KHeU-A60Q4lYoAHoECAEQNA&biw=1381&bih=643#imgrc=I8An5UVps77z8M",
                    });
                    // Signed in
                    const user = userCredential.user;
                    setLoading(false);
                    setSuccessMess("Account Created Successfully !");
                    setTimeout(() => {
                        navigate("/signin");
                    }, 2000);
                    // ...
                })
                .catch((error) => {
                    if (error.code) {
                        const errorCode = error.code;
                        if (errorCode.includes("auth/email-already-in-use")) {
                            setFireBaseErr("Email already in use, Try another one");
                        }
                    }
                });
            setClientName("");
            setEmail("");
            setPassword("");
            setrePassword("");
        }
    };
    return (
        <div className="w-full">
            <div className="w-full bg-gray-100 py-10">
                <form className="w-[400px] mx-auto flex flex-col items-center">
                    <img className="w-32 mb-5" src={darklogo} alt="logo" />
                    <div className="w-full border border-zinc-200 p-5">
                        <h2 className="text-2xl font-medium mb-4">Create Account</h2>
                        <div className="flex flex-col gap-3">
                            <div>
                                <p className="text-sm font-medium">Your Name</p>
                                <input
                                    onChange={handleName}
                                    value={clientName}
                                    type="text"
                                    className="w-full lowercase py-1 border border-zinc-400 px-2 rounded-sm outline-none forcus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                                />
                                {errClientName && (
                                    <p className="text-red-500 text-xs font-semibold flex items-center gap-2 mt-1">
                                        <span>!</span>
                                        {errClientName}
                                    </p>
                                )}
                            </div>
                            <div>
                                <p className="text-sm font-medium">Email & Phone Number</p>
                                <input
                                    onChange={handleEmail}
                                    value={email}
                                    type="text"
                                    className="w-full lowercase py-1 border border-zinc-400 px-2 rounded-sm outline-none forcus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                                />
                                {errEmail && (
                                    <p className="text-red-500 text-xs font-semibold flex items-center gap-2 mt-1">
                                        <span>!</span>
                                        {errEmail}
                                    </p>
                                )}
                                {firebaseErr && (
                                    <p className="text-red-500 text-xs font-semibold flex items-center gap-2 mt-1">
                                        <span>!</span>
                                        {firebaseErr}
                                    </p>
                                )}
                            </div>
                            <div>
                                <p className="text-sm font-medium">Password</p>
                                <input
                                    onChange={handlePassword}
                                    value={password}
                                    type="password"
                                    className="w-full lowercase py-1 border border-zinc-400 px-2 rounded-sm outline-none forcus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                                />
                                {errPassword && (
                                    <p className="text-red-500 text-xs font-semibold flex items-center gap-2 mt-1">
                                        <span>!</span>
                                        {errPassword}
                                    </p>
                                )}
                            </div>
                            <div>
                                <p className="text-sm font-medium">Re-enter Password</p>
                                <input
                                    onChange={handleRepassword}
                                    value={rePassword}
                                    type="password"
                                    className="w-full lowercase py-1 border border-zinc-400 px-2 rounded-sm outline-none forcus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                                />
                                {errRePassword && (
                                    <p className="text-red-500 text-xs font-semibold flex items-center gap-2 mt-1">
                                        <span>!</span>
                                        {errRePassword}
                                    </p>
                                )}
                                <p className="text-xs text-gray-400">Passwords must to be ae least 6 characters</p>
                            </div>
                            <button onClick={handleRegister} className="buttonCart">
                                Continue
                            </button>
                            {loading && (
                                <div className="flex justify-center">
                                    <RotatingLines strokeColor="#febd69" strokeWidth="5" animationDuration="0.75" width="50" visible={true} />
                                </div>
                            )}
                            {successMess && (
                                <div>
                                    <p>
                                        <motion.p
                                            initial={{ y: 10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                            className="text-base font-semibold text-green-500 border-[1px] border-green-500 px-2 text-center"
                                        >
                                            {successMess}
                                        </motion.p>
                                    </p>
                                </div>
                            )}
                        </div>
                        <p className="text-sm mt-4">
                            By Continuing , you agree to Amazon's <span className="text-blue-500">Condition Of Use</span> and
                            <span className="text-blue-500"> Privacy Notice.</span>
                        </p>
                        <div>
                            <p>
                                Already have an account?{" "}
                                <Link to="/signin">
                                    <span className="text-blue-500">
                                        Sign in{" "}
                                        <span>
                                            <ArrowRightAltIcon />
                                        </span>
                                    </span>
                                </Link>
                            </p>
                            <p className="text-xs text-black -mt-1">
                                Buying for work? <span className="text-blue-500">Create a free business account</span>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
