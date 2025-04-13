'use client'
import React from 'react';
import Image from "next/image";
import { IoMailUnreadOutline } from "react-icons/io5";
import { SlSocialInstagram } from "react-icons/sl";
import { FiArrowDownCircle, FiFacebook } from "react-icons/fi";
import { useRouter } from 'next/navigation'


export default function Main() {
    const router = useRouter()
    return (
        <div>
            <div>
                <Image
                    src="/myimage.webp"
                    className="drop-shadow " 
                    unoptimized = {true}
                    priority="high"
                    width={540}
                    height={540}
                    alt="Picture of the author"
                />
            </div>
            <div className="info-wrapper flex flex-1 flex-col gap-y-4 md:justify-center lg:justify-end lg:gap-y-8">
                <h1 className="font-main text-4xl font-semibold md:!leading-tight lg:text-5xl xl:text-6xl opacity-80 ">
                    {" "}
                    Read Your Pages <br></br>
                    Where Your Favorite <br></br> Stories Come to Life.
                </h1>
                <p className="font-MyFont lg:text-lg opacity-80 ">
                    Welcome to your next reading adventure!
                    Step into a world of stories, knowledge, and inspiration—right at your fingertips. From timeless classics to the latest bestsellers, our curated collection has something for every reader.
                    Start exploring today and let your next favorite book find you.
                </p>
                <p className="w-[125px] ring-1 ring-textgray ring-opacity-80 flex flex-row rounded py-3 px-4 text-lg opacity-75 font-MyFont font-semibold  ">
                    Browse
                <FiArrowDownCircle 
                    onClick={() => router.push('#books', { scroll: true })}
                    className="icon-bottom ml-3 mt-2 scale-110  bounce" />
                </p>
                <div className="flex flex-row gap-x-8 mt-6 opacity-80 !stroke-current stroke-2 ">
                    {" "}
                    <Link href="https://www.facebook.com/">
                        {" "}
                        <FiFacebook className="icon-bottom " />{" "}
                    </Link>
                    <Link href="https://www.instagram.com/yaswanthkumardamarla">
                        {" "}
                        <SlSocialInstagram className="icon-bottom" />{" "}
                    </Link>
                    <Link href="mailto:yd3034@nyu.edu">
                        {" "}
                        <IoMailUnreadOutline className="icon-bottom" />
                    </Link>
                </div>
                <div className="mt-12 flex gap-2 font-MyFont divide-x divide-textgray md:w-[125%] lg:w-auto">
                    <div className="">Fast Delivery</div>
                    <div className=" pl-2">Exclusive Deals</div>
                    <div className=" pl-2">Curated Collections</div>
                </div>
            </div>
        </div>    
    );
}
