import React from "react";
import Container from "../Container";
import Image from "../Image";
import logo from "../../assets/Logo.png";
import Flex from "../flex";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import bannerLetter from "../../assets/Desc.png";
import banner from "../../assets/Hero Content.png";
import bannergirl from "../../assets/bannergirl.png";

const Navbar = () => {
    return (
        <>
            <div className="bg-[url('/src/assets/Decore.png')]  w-[1450px] m-auto  bg-right-top  bg-no-repeat p-5">
                <Container>
                    {/* ---------------------hearderPart----------- */}
                    <div className="pt-10 ">

                        <Flex className="justify-between">
                            <Link to="/">
                                <div className="">
                                    <Image
                                        imgSrc={logo}
                                        imgAlt={logo}
                                        className="h-[33px] w-[114px]"
                                    />
                                </div>
                            </Link>
                            <div className="flex gap-x-4 px-10">
                                <ul className="gap-x-18 px-5  flex justify-between">

                                    <Link to="desitination/">
                                        <li className="text-[22px] font-sans text-[#212832]">
                                            Desitnations
                                        </li>
                                    </Link>
                                    <Link to="hotels/">
                                        <li className="text-[22px] font-sans text-[#212832]">
                                            Hotels
                                        </li>
                                    </Link>
                                    <Link to="flights/">
                                        <li className="text-[22px] font-sans text-[#212832]">
                                            Flights
                                        </li>
                                    </Link>
                                    <Link to="bookings/">
                                        <li className="text-[22px] font-sans text-[#212832]">
                                            Bookings
                                        </li>
                                    </Link>
                                    <Link to="login/">
                                        <li className=" ml-2 text-[22px] font-sans text-[#212832]">

                                            Login
                                        </li>
                                    </Link>
                                    <Link to=" signup/">
                                        <li className=" py-1 mr-2  px-4 text-center  border-[#212832c6] rounded-[6px] text-[22px] text-[#212832] cursor-pointer border-1">
                                            Sign up
                                        </li>
                                    </Link>

                                </ul>

                                <div className=" flex pr-7 gap-x-3 justify-between py-2 pb-10  text-[22px] text-[#212832] cursor-pointer ">
                                    <>
                                        <p>EN</p>

                                        <FaAngleDown className="mt-2 text-[#212832] opacity-70" />

                                    </>
                                </div>
                            </div>
                        </Flex>
                        {/* ---------------------hearderPart----------- */}

                    </div>
                    {/* ----------------------bannerPart-------------- */}
                    <div className="m-auto">
                        <Image imgSrc={banner} imgAlt={banner} className='mb-10 px-8  w-[1400px] h-[770px] bg-cover bg-center bg-no-repeat' />
                    </div>

                    {/* ----------------------bannerPart-------------- */}
                </Container>
            </div>
        </>
    );
};

export default Navbar;
