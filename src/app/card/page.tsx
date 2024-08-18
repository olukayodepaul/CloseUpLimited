"use client";

import React, { useEffect, useCallback } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import CardSales03 from "../component/CardSales03";
import CardSales01 from "../component/CardSales01";
import useEmblaCarousel from "embla-carousel-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function showCard() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, // Optional: Enable looping
  });

  const scrollToIndex = useCallback(
    (index) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      const currentIndex = emblaApi.selectedScrollSnap();
      const newIndex = Math.max(currentIndex - 5, 0); // Scroll back by 6 elements
      scrollToIndex(newIndex);
    }
  }, [emblaApi, scrollToIndex]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      const currentIndex = emblaApi.selectedScrollSnap();
      const totalSlides = emblaApi.scrollSnapList().length;
      const newIndex = Math.min(currentIndex + 5, totalSlides - 1); // Scroll forward by 6 elements
      scrollToIndex(newIndex);
    }
  }, [emblaApi, scrollToIndex]);

  const openNavBar = (event: any) => {
    event.preventDefault();
    const nav = document.getElementById("Navname");
    const overlay = document.getElementById("overlay");
    const scrollDisable = document.getElementById("overlay");

    if (overlay && nav) {
      nav.style.animation = "expand 0.2s forwards";
      overlay.style.display = "block";
      document.body.classList.add("overlay-active");
      overlay.style.animation = "expand 0.2s forwards";
    }
  };

  const closeNavBar = (event: any) => {
    event.preventDefault();
    const nav = document.getElementById("Navname");
    const overlay = document.getElementById("overlay");

    if (overlay && nav) {
      nav.style.animation = "collaps 0.2s forwards";
      overlay.style.animation = "hide 0.2s forwards";
      document.body.classList.remove("overlay-active");
      overlay.style.display = "none";
    }
  };

  return (
    <>
      {/* text-amber-900 */}
      <div id="overlay"></div>
      <header className="top-0 left-0 w-full  shadow-sm relative">
        <div className="header__container pt-2 pb-2 pl-5 pr-5 bg-slate-800">
          <div className="adver___header"></div>

          {/* ----start header ---- */}
          <div className="flex items-center justify-between">
            <div className="flex items-center mr-36">
              <FontAwesomeIcon
                icon={faBars}
                className="w-5 h-5 text-white  hover:text-amber-100  transition-colors duration-300 cursor-pointer"
                onClick={openNavBar}
              />
            </div>

            {/* ----Search Box header ---- */}
            <div className="flex flex-1 mr-10">
              <div className="flex flex-none items-center border-l border-b border-t border-gray-200 bg-gray-200 text-gray-600 text-xs  rounded-l-md p-2 pr-3   hover:bg-gray-300 hover:border-gray-300 transition-colors duration-300 cursor-pointer ">
                <p className="mr-1">Camera & Photo</p>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="w-3 h-3 text-amber-700 stroke-amber-700 "
                />
              </div>
              <input
                className="text-sm bg-white text-white px-4 py-2 focus:outline-none  focus:ring-0 grow border-b border-t border-l border-white"
                placeholder="Search on DartSpatial Engine"
              />
              <button className=" text-white rounded-r-lg bg-amber-700 border-b-2 border-t border-r border-amber-700 pl-3 pr-3 flex-none hover:bg-amber-800 hover:border-amber-800 transition-colors duration-300 cursor-pointer">
                <MagnifyingGlassIcon className="w-6 h-6  flex align-middle text-white font-extralight" />
              </button>
            </div>
            {/* ----End Search Box header ---- */}

            <div className="flex items-end ml-auto">
              <div className="text-white p-2 hover:text-amber-100  transition-colors duration-300 cursor-pointer">
                <p className="text-[12px]">Kingly, Sign in</p>
                <p className="text-[14px] flex items-center font-bold">
                  <span className="mr-1">Account & Help</span>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className="w-3 h-3 text-white"
                  />
                </p>
              </div>

              <div className="text-white p-2 hover:text-amber-100  transition-colors duration-300 cursor-pointer">
                <p className="text-[11px]">
                  <FontAwesomeIcon
                    icon={faTruckFast}
                    className="w-5 h-5 text-white  hover:text-amber-100  transition-colors duration-300 cursor-pointer "
                  />
                </p>
                <p className="text-[14px] flex items-center font-bold">
                  <span className="mr-1">Logistics</span>
                </p>
              </div>

              <div className="text-white p-2 hover:text-amber-100  transition-colors duration-300 cursor-pointer">
                <p className="text-[11px]">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="w-5 h-5 text-white  hover:text-amber-100  transition-colors duration-300 cursor-pointer "
                  />
                </p>
                <p className="text-[14px] flex items-center font-bold">
                  <span className="mr-1">Cart</span>
                </p>
              </div>
            </div>
          </div>

          {/* ----end header ---- */}
        </div>
        <div className="border-gray-200 shadow-sm h-12 "></div>
      </header>

      <main>
        <aside className="navBar" id="Navname">
          <FontAwesomeIcon
            icon={faXmark}
            className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors duration-300 cursor-pointer"
            onClick={closeNavBar}
          />
          <p>Navigation content hare</p>
        </aside>

        <div className="mt-5">
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <div className="flex items-center justify-center mx-auto adjust_screen">
            <div className="resizes__containers">
              {[...Array(10)].map((_, index) => (
                <div className="embla__slide" key={index}>
                  <CardSales01 />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="carousel_wrapers">
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {[...Array(18)].map((_, index) => (
                  <div className="embla__slide" key={index}>
                    <CardSales03 />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="embla__prev carousel__button carousel__button--prev bg-white text-gray-500 active:bg-slate-300 active:text-white focus:outline-none hover:text-amber-600"
          >
            <ChevronRightIcon className="h-8 w-8" />
          </button>
          <button
            onClick={scrollNext}
            className="embla__next carousel__button carousel__button--next bg-white text-gray-500 active:bg-slate-300 active:text-white focus:outline-none hover:text-amber-600"
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </button>
        </div> */}
      </main>
    </>
  );
}
