import React, { useState } from "react";
import Slider from "react-slick";
import { bannerImgFive, bannerImgOne, bannerImgTwo, bannerImgFour, bannerImgThree } from "../../assets/index";
const Banner = () => {
    const [dotActive, setDotActive] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000,
        beforeChange: (prev, next) => {
            setDotActive(next);
        },
        appendDots: (dots) => (
            <div
                style={{
                    position: "absolute",
                    top: "75%",
                    left: "0",
                    right: "0",
                    margin: "0 auto",
                    transform: "translate(-50% -50%)",
                    width: "210px",
                }}
            >
                <ul style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}> {dots} </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={
                    i === dotActive
                        ? {
                              width: "25px",
                              height: "25px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "white",
                              background: "#131921",
                              padding: "8px 0",
                              cursor: "pointer",
                              border: "1px solid #f3a847",
                          }
                        : {
                              width: "25px",
                              height: "25px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "white",
                              background: "#232F3E",
                              padding: "8px 0",
                              cursor: "pointer",
                              border: "1px solid #fff",
                          }
                }
            >
                {i + 1}
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    appendDots: (dots) => (
                        <div
                            style={{
                                position: "absolute",
                                top: "75%",
                                left: "0",
                                right: "0",
                                margin: "0 auto",
                                transform: "translate(-50% -50%)",
                                width: "210px",
                            }}
                        >
                            <ul style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}> {dots} </ul>
                        </div>
                    ),
                    customPaging: (i) => (
                        <div
                            style={
                                i === dotActive
                                    ? {
                                          width: "25px",
                                          height: "25px",
                                          borderRadius: "50%",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          color: "white",
                                          background: "#131921",
                                          padding: "8px 0",
                                          cursor: "pointer",
                                          border: "1px solid #f3a847",
                                      }
                                    : {
                                          width: "25px",
                                          height: "25px",
                                          borderRadius: "50%",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          color: "white",
                                          background: "#232F3E",
                                          padding: "8px 0",
                                          cursor: "pointer",
                                          border: "1px solid #fff",
                                      }
                            }
                        >
                            {i + 1}
                        </div>
                    ),
                },
            },
        ],
    };
    return (
        <div className="w-full">
            <div className="w-full h-full relative">
                <Slider {...settings}>
                    <div>
                        <img src={bannerImgOne} alt="imgOne" />
                    </div>
                    <div>
                        <img src={bannerImgTwo} alt="imgTwo" />
                    </div>
                    <div>
                        <img src={bannerImgThree} alt="imgThree" />
                    </div>
                    <div>
                        <img src={bannerImgFour} alt="imgFour" />
                    </div>
                    <div>
                        <img src={bannerImgFive} alt="imgFive" />
                    </div>
                    <div>
                        <img src={bannerImgOne} alt="imgOne" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Banner;
