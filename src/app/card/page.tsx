"use client";

import React, { useEffect, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import CardSales03 from "../component/CardSales03";
import CardSales01 from "../component/CardSales01";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import EmblaCarouselFade from "embla-carousel-fade";

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
      const newIndex = Math.max(currentIndex - 3, 0); // Scroll back by 6 elements
      scrollToIndex(newIndex);
    }
  }, [emblaApi, scrollToIndex]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      const currentIndex = emblaApi.selectedScrollSnap();
      const totalSlides = emblaApi.scrollSnapList().length;
      const newIndex = Math.min(currentIndex + 3, totalSlides - 1); // Scroll forward by 6 elements
      scrollToIndex(newIndex);
    }
  }, [emblaApi, scrollToIndex]);
  return (
    <>
      <div>
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

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {[...Array(10)].map((_, index) => (
              <div className="embla__slide" key={index}>
                <CardSales03 />
              </div>
            ))}
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
