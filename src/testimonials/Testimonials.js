import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import data from "./TestimonialData";
import React, { useRef } from "react";
import "swiper/css";
import right from "./right.svg";
import left from "./left.svg";

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <StyledContainer>
      <div className="inner-div">
        <StyledSwiper>
          <Swiper
            spaceBetween={40}
            loop={true}
            className="mySwiper"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {data.map((quote, index) => (
              <SwiperSlide key={index}>
                <StyledTestimonial>
                  {quote.split("\n").map((paragraph, pIndex) => (
                    <div className="paragraph" key={`${index}:${pIndex}`}>
                      {paragraph}
                    </div>
                  ))}
                </StyledTestimonial>
              </SwiperSlide>
            ))}
          </Swiper>
        </StyledSwiper>
      </div>
      <div className="nav-section">
        <div className="button" onClick={() => swiperRef.current.slidePrev()}>
          <img src={left} alt="left arrow" />
        </div>
        <div className="button" onClick={() => swiperRef.current.slideNext()}>
          <img src={right} alt="right arrow" />
        </div>
      </div>
    </StyledContainer>
  );
};

export default Testimonials;

const StyledTestimonial = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;

  .inner-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: red !important;
  }

  .paragraph {
    margin: 0;
    color: #4a4947;
    font-weight: 400;
    font-size: clamp(8px, 3vw, 15px);
    text-align: left;
    width: 80%;
  }

  cursor: grab;
  &:active {
    cursor: grabbing;
  }
  padding: 58px 0;
  .swiper {
    display: flex !important;
    align-items: center !important;
    background: red !important;
  }

  background: #faf7f0 !important;
  border-radius: 12px;
`;

const StyledSwiper = styled.div`
  width: 100vw;
  max-width: 575px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 44px;
  .nav-section {
    display: flex;
    justify-content: center;
    gap: 40px;
    transition: background-color 0.3s ease;

    .button {
      width: clamp(30px, 5vw, 40px);
      height: clamp(30px, 5vw, 40px);
      border-radius: 1000px;

      background: #e8e8ed;

      &:hover {
        background: #ececef;
      }

      cursor: pointer;
    }
  }

  .mySwiper {
    .swiper-wrapper {
      display: flex;
      align-items: center;
    }
  }

  border-radius: 12px;
`;
