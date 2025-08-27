"use client";
import React, { useState } from "react";
import CustomInput from "./CustomButton";
import { Button, CircularProgress } from "@mui/material";
import Link from "next/link";
import { authSignup } from "@/actions/userAuth";
import { useRouter } from "next/navigation";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const payload = {
      username,
      name,
      password,
    };
    const response = await authSignup(payload);
    if (response.message) {
      router.push("/dashboad");
    } else if (response.error) {
      alert(response.error);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col justify-center w-80 h-96 items-center  p-4 bg-slate-100 rounded py-16 gap-2 border-2 shadow-xs border-slate-200">
      <p className="font-semibold text-center text-2xl w-full ">
        Welcome to GenVideo
      </p>
      <p className="text-center text-sm  w-full">
        Create an account to get started
      </p>
      <div className="h-[70%] !py-6 w-fit flex flex-col items-center justify-center gap-4 p-6">
        <CustomInput
          className="!h-8 !w-72 !my-2"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          name="username"
        />
        <CustomInput
          className="!h-8 !w-72 !my-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Full name"
          name="full name"
        />
        <CustomInput
          className="!h-8 !w-72 !my-2"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
      </div>
      <div>
        <Button
          onClick={handleSignUp}
          variant="contained"
          className="!h-10 !w-72 !my-2"
        >
          {isLoading ? (
            <CircularProgress color="inherit" size={30} />
          ) : (
            "Sign Up"
          )}
        </Button>
        <div className="justify-center items-center text-center w-full flex  gap-1">
          <p className=" text-sm">Already have an account?</p>
          <Link
            className=" text-sm  text-blue-500 hover:text-blue-600 cursor-pointer"
            href="/api/auth/signin"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
