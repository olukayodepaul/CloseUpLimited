"use client";

import React from "react";
import useProducts from "./hooks/useProducts";
import Card from "./component/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useScreenSize from "./hooks/useScreenSize";

const HomePage = () => {
  const { products, loading, error } = useProducts();
  const screenWidth = useScreenSize();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: screenWidth <= 3000 ? 5 : 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: screenWidth <= 1024 ? 2 : 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: screenWidth <= 464 ? 1 : 1,
    },
  };

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className="ml-20 mr-20 mt-10">
      <Carousel
        responsive={responsive}
        itemClass="carousel-item"
        containerClass="carousel-container"
      >
        {products.map((product) => (
          <Card
            key={product.product_id}
            productname={product.name}
            description={product.description}
            discount={product.discount}
            price={product.price}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default HomePage;
