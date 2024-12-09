import { rubik } from "../fonts";
import { inter } from "../fonts";
import { HiOutlineUser, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

export default function HeroHome() {
    return(
        <>
        <div className="hero page-width">
            <div className="hero-content gap-12 items-center flex-col-reverse lg:flex-row lg:gap-28">
                <div className="text-center w-full lg:text-left">
                    <h1 className={`${rubik.className} section-title text-xl font-bold`} >Unlock Exclusive Travel Deals and <span className="text-primary">Save Up to 86%</span> on Your Next Adventure!</h1>
                    <p className={` ${inter.className} py-4 text-lg`}>
                    Access unbeatable hotel, flight, and vacation deals – save time and money with our AI-powered platform.
                    </p>
                    <button className="btn accent-color">Start Saving Now – Get Your Free 7-Day Trial!</button>
                </div>
                <div className="w-full justify-center hidden lg:max-w-[50%] sm:flex">
                    <div className="card bg-base-100 w-[90%] form-card shrink-0 shadow-2xl">
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
                
            </div>
        </div>
        </>
    )
}