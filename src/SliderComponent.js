import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "./SliderComponent.css";

const SliderComponent = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://slider-test-nine.vercel.app/data.json"
        );
        setItems(response.data.dining.restaurants);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching slider data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="slider-item">
            <img
              src={item.images[0]}
              alt={item.name}
              className="slider-image"
            />
            <h3>{item.name}</h3>
            {/* <p>{item.overview}</p> */}
            <button
              className="visit-website-button"
              onClick={() => window.open(item.websiteUrl, "_blank")}
            >
              Visit Website
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
