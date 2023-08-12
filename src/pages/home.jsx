import React, { useState } from "react";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Input from "@/components/Input";
import { useNavigate } from "react-router-dom";
import catFact from "./catFact";

const inter = Inter({ subsets: ["latin"] });
export const home = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };

    console.log("userDetails:", formData);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="lg:px-24 md:px-10 sm:px-20 ">
      <div className={inter.className}>
        <div>
          <nav className="flex justify-between pt-3 px-4">
            <ul>
              <li className="flex gap-4 font-bold text-gray-500 text-sm ">
                <Link href="/home" className="hover:text-gray-800">
                  HOME
                </Link>
                <Link href="/" className="hover:text-gray-800">
                  ABOUT
                </Link>
                <Link href="/" className="hover:text-gray-800">
                  CONTACT
                </Link>
              </li>
            </ul>
            <button className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:bg-slate-500">
              sign up
            </button>
          </nav>

          <div className="flex justify-center items-center flex-col mt-10 ">
            <form action="" className="flex flex-col  gap-4 ">
              <input
                type="email"
                placeholder="Email"
                onChange={handleEmail}
                className="block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 "
              />

              <input
                type="password"
                placeholder="Password"
                onChange={handlePassword}
                className="block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
              />

              <Link
                href="/catFact"
                onClick={handleSubmit}
                className="bg-teal-500 p-4
                hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md
                hover:bg-slate-500 text-center"
              >
                Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
