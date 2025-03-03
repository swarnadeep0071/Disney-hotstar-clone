import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const image_base_url = "https://image.tmdb.org/t/p/w500";

const screenWidth = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 100;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 100;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-[30px] absolute mx-8 mt-[210px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-[30px] absolute mx-8 mt-[210px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4 no-scrollbar scroll-smooth "
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            src={image_base_url + item.backdrop_path}
            className=" min-w-full md:h-[410px] object-cover object-left-top mr-5 
          rounded-md hover:border -[4px] border-gray-400 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
