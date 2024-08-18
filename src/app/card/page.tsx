"use client";

import React, { useEffect, useCallback } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import CardSales03 from "../component/CardSales03";
import CardSales01 from "../component/CardSales01";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import EmblaCarouselFade from "embla-carousel-fade";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
  return (
    <>
      <header className="top-0 left-0 w-full  shadow-sm">
        <div className="adver___header"></div>
        <div className="p-5 bg-slate-300"></div>

        <div className="flex items-center main__header pt-3 pl-5 pr-5 pb-3 gap-28">
          <p className="text-slate-300 flex-shrink-0">
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </p>

          <div className="flex-1 flex items-center justify-between ml-4">
            <div className="flex w-[800px] ">
              <div className="flex flex-none  items-center border border-gray-200 rounded-l-md p-2 pr-3 bg-gray-300 text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300 cursor-pointer">
                <p className="mr-5"> Computer Engineering Development</p>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="w-3 h-3 text-slate-500 stroke-gray-900 "
                />
              </div>
              <input
                className="bg-white text-white px-4 py-2 focus:outline-none  focus:ring-0 grow "
                placeholder="Search DartSpatial"
              />

              <button className=" text-white rounded-r-lg bg-amber-700 border border-amber-700  pl-3 pr-3 flex-none">
                <MagnifyingGlassIcon className="w-6 h-6  flex align-middle text-white font-extralight" />
              </button>
            </div>

            <div className="">
              <div className="dr001_acc__help">3</div>
              <div className="dr001_cart">4</div>
            </div>
          </div>
        </div>

        {/* <div className="flex items-center main__header pt-3 pl-5 pr-5 pb-3 gap-28 bg-slate-400">
          <p className="text-white flex-shrink-0">
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          </p>
        </div> */}
      </header>

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

      <div className="carousel_wrapers">
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
      </div>
    </>
  );
}
