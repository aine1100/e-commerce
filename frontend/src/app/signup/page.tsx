'use client';

import React from 'react';
import Link from 'next/link';

const SignUpPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
            <div className="flex flex-col lg:flex-row items-center gap-20">
                {/* Image Side */}
                <div className="flex-1 w-full bg-[#CBE4E8] rounded overflow-hidden flex items-center justify-center p-0">
                    <img
                        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800"
                        alt="Sign up"
                        className="w-full h-full object-cover mix-blend-multiply opacity-80"
                    />
                </div>

                {/* Form Side */}
                <div className="flex-1 w-full flex justify-center">
                    <div className="max-w-md w-full">
                        <h1 className="text-4xl font-semibold mb-6 tracking-tight">Create an account</h1>
                        <p className="text-base font-normal text-black mb-12">Enter your details below</p>

                        <form className="flex flex-col gap-10">
                            <div className="flex flex-col gap-10">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="px-0 py-2 bg-transparent border-b border-zinc-300 outline-none focus:border-black transition-all font-medium text-black placeholder:text-zinc-500"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email or Phone Number"
                                    className="px-0 py-2 bg-transparent border-b border-zinc-300 outline-none focus:border-black transition-all font-medium text-black placeholder:text-zinc-500"
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="px-0 py-2 bg-transparent border-b border-zinc-300 outline-none focus:border-black transition-all font-medium text-black placeholder:text-zinc-500"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-4">
                                <button className="w-full py-4 bg-primary text-white rounded font-medium hover:bg-red-700 transition-all shadow-lg shadow-red-100">
                                    Create Account
                                </button>
                                <button className="w-full py-4 border-2 border-zinc-200 rounded font-normal flex items-center justify-center gap-4 hover:border-black transition-all">
                                    <svg className="h-6 w-6" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C40.483,35.58,44,30.2,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                                    </svg>
                                    Sign up with Google
                                </button>
                            </div>

                            <div className="flex items-center justify-center gap-4 text-base font-normal">
                                <span className="text-zinc-500">Already have account?</span>
                                <Link href="/login" className="font-medium underline underline-offset-4 decoration-zinc-300 hover:text-primary transition-colors">Log in</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
