import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const image_base_url = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    GlobalApi.getTrendingVideos.then((resp) => {
      setMovieList(resp.data.results || []);
    });
  }, []);

  const sliderRight = () => {
    const element = elementRef.current;
    if (!element) return;
    const width = element.clientWidth;
    element.scrollLeft += width;
  };
  
  const sliderLeft = () => {
    const element = elementRef.current;
    if (!element) return;
    const width = element.clientWidth;
    element.scrollLeft -= width;
  };

  if (!movieList.length) return null;

  const heroMovie = movieList[0];

  return (
    <div className="relative mb-6 md:mb-10">
      {/* Arrows */}
      <HiChevronLeft
  className="hidden md:block text-[32px] absolute mx-8 top-1/2 -translate-y-1/2 cursor-pointer z-20"
  onClick={sliderLeft}
/>

<HiChevronRight
  className="hidden md:block text-[32px] absolute mx-8 top-1/2 -translate-y-1/2 cursor-pointer right-0 z-20"
  onClick={sliderRight}
/>

      {/* Slider images */}
      <div className="relative">
        <div
          className="flex overflow-x-auto w-full px-0 sm:px-2 md:px-16 py-2 md:py-4 no-scrollbar scroll-smooth"
          ref={elementRef}
        >
          {movieList.map((item) => (
            <img
              key={item.id}
              src={image_base_url + item.backdrop_path}
              alt={item.title || item.name}
              className="min-w-full h-[220px] md:h-[410px] object-cover object-left-top mr-3 md:mr-5 rounded-md hover:scale-[1.01] transition-transform duration-150 ease-in-out"
            />
          ))}
        </div>

        {/* Dark bottom gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040714] via-transparent to-transparent" />

        {/* Hero text overlay */}
        <div className="absolute bottom-8 left-4 md:left-16 max-w-md z-30 text-white">
          <h2 className="text-xl md:text-3xl font-bold mb-2">
            {heroMovie.title || heroMovie.name}
          </h2>
          {heroMovie.overview && (
            <p className="hidden md:block text-sm md:text-base text-gray-200 mb-4 max-h-20 overflow-hidden">
              {heroMovie.overview}
            </p>
          )}
          <button className="bg-white text-black font-semibold px-4 py-2 rounded-full text-sm md:text-base hover:bg-gray-200">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;