import React, { useEffect, useState } from 'react';
import Display from './Display';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Place.css"
import { Link } from 'react-router-dom';
const Place = () => {
    const [place, setPlace] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/place")
            .then(res => res.json())
            .then(data => setPlace(data))
        console.log(place)
    }, [])
    return (
        <div className='container'>
            {/* <div className='data-container'>

            </div>
            <div className='placeContainer'>
                {
                    place.map(places => <Display
                        places={places}
                    ></Display>)
                }
            </div> */}
            <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {place.map((place) => (
          <SwiperSlide key={place.id} className="package">
            <Link to={`/place/${place.id}`}>
              <img src={place.thumbnail_url} alt={place.category} />
            </Link>
            <h2 className='text-white'>{place.name}</h2>
            <Link className="text-white" to={`/category/${place.id}`}>
              {place.place}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
        </div>
    );
};

export default Place;