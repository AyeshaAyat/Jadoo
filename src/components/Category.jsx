import React from "react";
import Container from "./Container";
import Image from "./Image";
import redSign from "../assets/redSign.png";
import plane from "../assets/Group 51.png";
const Category = () => {
  return (
    <>
      <Container>
        <div className=" py-30 text-center ">
          <p className="text-[#5E6282] text-[13px] font-semibold">CATEGORY </p>
          <h1 className="text-[#14183E] text-[40px]  font-bold">
            We Offer Best Services
          </h1>
          <div className="flex mt-5 px-20">

          {/* ----------------CardsStart--------------- */}
          <div className="relative mt-10 z-10 h-65 w-70">
            <div className="RedSign absolute z-0 bottom-7 left-6">
              <Image className="" imgSrc={redSign} imgAlt={redSign} />
            </div>
            <div className="cardMain bg-white  z-50 group-hover:block  cursor-pointer  px-8  drop-shadow-xl    m-auto h-[205px] rounded-[27px] w-[170px]">
              <Image className="" imgSrc={plane} imgAlt={plane} />

              <p className=" text-[#1E1D4C] text-[12px] mb-2 font-[450]">
                Best Flights
              </p>
              <p className="text-[#5E6282] text-[10px]  font-[420]">
                Engrossed listening. Park gate sell they west hard for the.
              </p>
            </div>
          </div>
          {/* ----------------CardsEnd--------------- */}
          {/* ----------------CardsStart--------------- */}
          <div className="relative mt-10 z-10 h-65 w-70">
           
            <div className="cardMain  bg-white   cursor-pointer  px-8     m-auto h-[205px] rounded-[27px] w-[170px]">
              <Image className="" imgSrc={plane} imgAlt={plane} />

              <p className=" text-[#1E1D4C] text-[12px] mb-2 font-[450]">
                Best Flights
              </p>
              <p className="text-[#5E6282] text-[10px]  font-[420]">
                Engrossed listening. Park gate sell they west hard for the.
              </p>
            </div>
          </div>
          {/* ----------------CardsEnd--------------- */}
          {/* ----------------CardsStart--------------- */}
          <div className="relative mt-10 z-10 h-65 w-70">
          
            <div className="cardMain  bg-white  cursor-pointer  px-8    m-auto h-[205px] rounded-[27px] w-[170px]">
              <Image className="" imgSrc={plane} imgAlt={plane} />

              <p className=" text-[#1E1D4C] text-[12px] mb-2 font-[450]">
                Best Flights
              </p>
              <p className="text-[#5E6282] text-[10px]  font-[420]">
                Engrossed listening. Park gate sell they west hard for the.
              </p>
            </div>
          </div>
          {/* ----------------CardsEnd--------------- */}
          {/* ----------------CardsStart--------------- */}
          <div className="relative mt-10 z-10 h-65 w-70">
          
            <div className="cardMain bg-white   cursor-pointer  px-8     m-auto h-[205px] rounded-[27px] w-[170px]">
              <Image className="" imgSrc={plane} imgAlt={plane} />

              <p className=" text-[#1E1D4C] text-[12px] mb-2 font-[450]">
                Best Flights
              </p>
              <p className="text-[#5E6282] text-[10px]  font-[420]">
                Engrossed listening. Park gate sell they west hard for the.
              </p>
            </div>
          </div>
          {/* ----------------CardsEnd--------------- */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Category;
