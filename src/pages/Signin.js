import React, { useState } from "react";
import { darklogo } from "../assets/index";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";
import { RotatingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfor } from "../redux/amazoneSlice";
const Signin = () => {
    const auth = getAuth();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");
    // Loading state
    const [loading, setLoading] = useState(false);
    const [successMess, setSuccessMess] = useState("");
    const [userEmailErr, setUserEmailErr] = useState("");
    const [userPassErr, setUserPassErr] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail("");
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setErrPassword("");
    };
    const handleSigin = (e) => {
        e.preventDefault();
        if (email == "") {
            setErrEmail("Enter your email");
        }
        if (password == "") {
            setErrPassword("Enter your password");
        }
        if (email && password) {
            setLoading(true);
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    dispatch(
                        setUserInfor({
                            _id: user.uid,
                            userName: user.displayName,
                            email: user.email,
                            img: user.photoURL,
                        })
                    );
                    setLoading(false);
                    setSuccessMess("Logged in successfully ! welcome");
                    setTimeout(() => {
                        navigate("/");
                    }, 2000);
                })
                .catch((error) => {
                    setLoading(false);
                    if (error.code) {
                        const errorCode = error.code;
                        if (errorCode.inclues("auth/invalid-email")) {
                            setUserEmailErr("Invalid Email");
                        }
                        if (errorCode.inclues("auth/wrong-password")) {
                            setUserPassErr("Wrong password ! Try again");
                        }
                        console.log("Someting is up");
                    }
                });
            setEmail("");
            setPassword("");
        }
    };
    return (
        <div className="w-full">
            <div className="w-full bg-gray-100 py-10">
                {successMess ? (
                    <div className="w-full flex justify-center items-center py-32">
                        <p
                            className="border-[1px] border-green-500 text-green-500 text-lg font-semibold px-6 pỳ
                        "
                        >
                            {successMess}
                        </p>
                    </div>
                ) : (
                    <form className="w-[400px] mx-auto flex flex-col items-center">
                        <Link to="/">
                            <img className="w-32 mb-5" src={darklogo} alt="logo" />
                        </Link>
                        <div className="w-full border border-zinc-200 p-5">
                            <h2 className="text-2xl font-medium mb-4">Sign In</h2>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm font-medium">Email or Mobile phone number</p>
                                    <input
                                        onChange={handleEmail}
                                        value={email}
                                        className="w-full lowercase py-1 border border-zinc-400 px-2 rounded-sm outline-none forcus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                                        type="email"
                                    />
                                    {errEmail && (
                                        <p className="text-red-500 text-xs font-semibold flex items-center gap-2 mt-1">
                                            <span>!</span>
                                            {errEmail}
                                        </p>
                                    )}
                                    {userEmailErr && (
                                        <p className="text-red-500 text-xs font-semibold flex items-center gap-2 mt-1">
                                            <span>!</span>
                                            {userEmailErr}
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-sm font-medium">Password</p>
                                    <input
                                        onChange={handlePassword}
                                        value={password}
                                        className="w-full lowercase py-1 border border-zinc-400 px-2 rounded-sm outline-none forcus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                                        type="password"
                                    />
                                    {errPassword && (
                                        <p className="text-red-500 text-xs font-semibold flex items-center gap-2 mt-1">
                                            <span>!</span>
                                            {errPassword}
                                        </p>
                                    )}
                                    {userPassErr && (
                                        <p className="text-red-500 text-xs font-semibold flex items-center gap-2 mt-1">
                                            <span>!</span>
                                            {userPassErr}
                                        </p>
                                    )}
                                </div>
                                <button onClick={handleSigin} className="buttonCart">
                                    Continue
                                </button>
                                {loading && (
                                    <div className="flex justify-center">
                                        <RotatingLines strokeColor="#febd69" strokeWidth="5" animationDuration="0.75" width="50" visible={true} />
                                    </div>
                                )}
                            </div>
                            <p className="text-sm mt-4">
                                By Continuing , you agree to Amazon's <span className="text-blue-500">Condition Of Use</span> and
                                <span className="text-blue-500"> Privacy Notice.</span>
                            </p>
                            <p className="cursor-pointer mt-4 group">
                                <ArrowRightAltIcon />
                                <span className="group-hover:text-red-500 group-hover:underline underline-offset-1">Need Help ?</span>
                            </p>
                        </div>
                        <p className="w-full text-xs mt-4 flex items-center">
                            <span className="w-1/3 h-[1px] bg-zinc-400"></span>
                            <span className="w-1/3 text-center">New To Amazon ?</span>
                            <span className="w-1/3 h-[1px] bg-zinc-400"></span>
                        </p>
                        <Link to="/register" className="w-full">
                            <button className="buttonCart-1">Create Your Amazon Account</button>
                        </Link>
                    </form>
                )}
            </div>
            <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-5">
                <div className="flex items-center gap-6">
                    <p className="text-blue-500">Condition of Use</p>
                    <p className="text-blue-500">Privacy Noite</p>
                    <p className="text-blue-500">Your Ads Privacy Choices</p>
                </div>
                <p className="text-sm text-gray-500">© 1996-2023, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
    );
};

export default Signin;
