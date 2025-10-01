import React from "react";
import Container from "../Container";
import Image from "../Image";
import logo from "../../assets/Logo.png";
import Flex from "../flex";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import bannerLetter from "../../assets/Desc.png";
import bannergirl from "../../assets/bannergirl.png";
const Navbar = () => {
  return (
    <>
        <div className="bg-[url('/src/assets/Decore.png')]  w-[1500px] m-auto  bg-right-top  bg-no-repeat p-5">
      <Container>
        {/* ---------------------hearderPart----------- */}
        <div className="py-10 ">

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
              <ul className="gap-x-20 px-5  flex justify-between">
            
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
               
              </ul>
              <button className="h-[50px] w-[130px] pb-10 rounded-[10px] text-[22px] text-[#212832] cursor-pointer ">
                Login
              </button>
              <button className="h-[50px] w-[130px] pb-2 rounded-[10px] text-[22px] text-[#212832] cursor-pointer border-1 border:mb-2">
                Sign up
              </button>
              <div className=" flex px-7 gap-x-3 justify-between py-2 pb-10  text-[22px] text-[#212832] cursor-pointer ">
              <>
              <p>EN</p>
                
                <FaAngleDown className="mt-2 text-[#212832] opacity-70"/>

              </>
              </div>
            </div>
          </Flex>
                  {/* ---------------------hearderPart----------- */}

        </div>
        {/* ----------------------bannerPart-------------- */}
          <Container>
            <div className=" px-10">
              <Flex>
                <Image imgSrc={bannerLetter} imgAlt={bannerLetter} className='mt-18 ml-5 h-[535px] w-[630px]' />
                <Image imgSrc={bannergirl} imgAlt={bannergirl} className='h-[764px] w-[783px]' />
              </Flex>
            </div>
          </Container>
      </Container>
        {/* ----------------------bannerPart-------------- */}
        </div>
    </>
  );
};

export default Navbar;
