'use client';
import Image from "next/image";
import { montserrat } from "../fonts";
import Link from 'next/link';
import { HiOutlineUser, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import React from 'react';



export default function Header() {
  const handleClick = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };
    return(

<header className="page-width header-sticky pt-4 pb-4 z-50">
          <div className="navbar ">
            <div className="navbar-start">
              
              <Link href="/" className=" text-xl">
                <Image src="/logo-white.png" alt="Travel Hack Logo" width={180} height={80} />
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className={`${montserrat.className} menu menu-horizontal text-white px-1`}>
                <li onClick={handleClick}><Link href="/pricing">Pricing</Link></li>
                <li onClick={handleClick}>
                <Link href="/referral-program">Referral Program</Link>
                </li>
                <li onClick={handleClick}><Link href="/blog">Blog</Link></li>
                <li onClick={handleClick}><Link href="/faq">FAQ</Link></li>
              </ul>
            </div>
            <div className="navbar-end gap-3 ">
            <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#FFF">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className={`${montserrat.className} menu menu-sm dropdown-content font-medium bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow`}>
                  <li onClick={handleClick}><Link href="/pricing">Pricing</Link></li>
                  <li onClick={handleClick}>
                    <Link href="/referral-program">Referral Program</Link>
                  </li>
                  <li onClick={handleClick}><Link href="/blog">Blog</Link></li>
                  <li onClick={handleClick}><Link href="/faq">FAQ</Link></li>
                  <li className="bt-1"><button className="btn" onClick={()=>document.getElementById('signup_modal').showModal()}>Signup</button></li>
                </ul>
              </div>
              <div className="hidden gap-3 sm:flex">
                <button className="btn btn-outline btn-outline-white ">Login</button>
                <button className="btn bg-white">Get Started</button>
              </div>
              
            </div>
          </div>
          
          <dialog id="signup_modal" className="modal">
            <div className="modal-box sigup-modal">
            <div className=" bg-base-100 w-full  shrink-0 shadow-2xl">
                        <form className="card-body">
                            <h2 className="text-xl text-black text-center font-bold">Sign up for Free - Get your 7-day Trial</h2>
                            <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">

                                    <HiOutlineUser className="h-4 w-4 opacity-70 form-icon" />
                                
                                <input type="text" className="grow" placeholder="Full name" />
                            </label>
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <HiOutlineMail className="h-4 w-4 opacity-70 form-icon" />
                                <input type="text" className="grow" placeholder="Email" />
                            </label>
                            
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <HiOutlinePhone className="h-4 w-4 opacity-70 form-icon" />
                                <input type="text" className="grow" placeholder="+1 234 567 890" />
                            </label>
                            <div className="form-control mt-6">
                            <button className="btn accent-color">Signup</button>
                            </div>
                        </form>
                    </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
          </header>
    )}