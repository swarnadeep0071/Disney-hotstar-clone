import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";

function MovieList({ genreId, index_ }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const slideRight = (elememt) => {
    elememt.scrollLeft += 500;
  };
  const slideLeft = (elememt) => {
    elememt.scrollLeft -= 500;
  };
  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] p-2 z-10 cursor-pointer hidden md:block absolute ${
          index_ % 3 == 0 ? `mt-[65px]` : `mt-[150px]`
        } `}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 no-scrollbar scroll-smooth pt-5 px-3 pb-5"
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 ${
          index_ % 3 == 0 ? `mt-[65px]` : `mt-[150px]`
        } `}
      />
    </div>
  );
}

export default MovieList;
