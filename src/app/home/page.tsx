"use client";

import React, { useCallback, useState, useEffect } from "react";
import useProducts from "./hooks/useProducts";
import Cards from "./component/Cards";
import "react-multi-carousel/lib/styles.css";
import useEmblaCarousel from "embla-carousel-react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const HomePage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });

  const { products, loading, error } = useProducts();

  const slideCount = 6;
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateNavigation = () => {
    if (emblaApi) {
      const currentIndex = emblaApi.selectedScrollSnap();
      const lastIndex = emblaApi.scrollSnapList().length - 1;
      setCanScrollPrev(currentIndex > 0);
      setCanScrollNext(currentIndex < lastIndex);
    }
  };

  useEffect(() => {
    if (emblaApi) {
      updateNavigation();
      emblaApi.on("scroll", updateNavigation);
    }

    return () => {
      if (emblaApi) emblaApi.off("scroll", updateNavigation);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      const currentIndex = emblaApi.selectedScrollSnap();
      const prevIndex = Math.max(0, currentIndex - slideCount);
      emblaApi.scrollTo(prevIndex);
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      const currentIndex = emblaApi.selectedScrollSnap();
      const lastIndex = emblaApi.scrollSnapList().length - 1;
      const nextIndex = Math.min(lastIndex, currentIndex + slideCount);
      emblaApi.scrollTo(nextIndex);
    }
  }, [emblaApi]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className="btn-bound">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {products.map((product) => (
              <Cards
                key={product.product_id}
                productname={product.name}
                description={product.description}
                discount={product.discount}
                price={product.price}
                className="embla__slide"
              />
            ))}
          </div>
        </div>
      </div>
      <button
        className={`embla__button embla__button--prev ${
          !canScrollPrev ? "hidden" : ""
        }`}
        onClick={scrollPrev}
      >
        <ChevronLeftIcon className="h-9 w-9 text-white" />
      </button>
      <button
        className={`embla__button embla__button--next  ${
          !canScrollNext ? "hidden" : ""
        }`}
        onClick={scrollNext}
      >
        <ChevronRightIcon className="h-9 w-9 text-white" />
      </button>
    </div>
  );
};

export default HomePage;
