import { NavLink } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';
import Chatbot from '../images/chatbot.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Banner = () => {
    var settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ],
    };

    return (
        <div className="bg-white dark:bg-slate-800">
            <div className="w-5/6 mx-auto">
                <div className="flex flex-col justify-center items-center lg:flex-row lg:py-20">
                    <div className="w-5/6 lg:w-[50%] py-14 xl:pl-10">
                        <div className="dark:text-white">
                            <Slider {...settings}>
                                <div>
                                    <h2 className="text-5xl md:text-6xl font-bold text-violet-800 dark:text-violet-400">Subtitle 1</h2>
                                    <p className="py-5 text-2xl lg:w-3/4 xl:w-1/2">Lorem ipsum dolor sit amet. In consectetur mollitia ut placeat esse id consequatur mollitia</p>
                                </div>
                                <div>
                                    <h2 className="text-5xl md:text-6xl font-bold text-violet-800 dark:text-violet-400">Subtitle 2</h2>
                                    <p className="py-5 text-2xl lg:w-3/4 xl:w-1/2">Lorem ipsum dolor sit amet. In consectetur mollitia ut placeat esse id consequatur mollitia</p>
                                </div>
                                <div>
                                    <h2 className="text-5xl md:text-6xl font-bold text-violet-800 dark:text-violet-400">Subtitle 3</h2>
                                    <p className="py-5 text-2xl lg:w-3/4 xl:w-1/2">Lorem ipsum dolor sit amet. In consectetur mollitia ut placeat esse id consequatur mollitia</p>
                                </div>
                            </Slider>
                        </div>
                        <NavLink to="/">
                            <button className="bg-teal-600 animate-[pulse_2s_ease-in-out_infinite] rounded-md text-white px-7 py-3 my-5 flex justify-center items-center">
                                Start &nbsp; <FaArrowRight style={{ fontSize: '14px', marginTop: '2px' }} />
                            </button>
                        </NavLink>
                    </div>
                    <div className="w-5/6 lg:w-[50%] py-5">
                        <div className="w-full mx-auto">
                            <img src={Chatbot} width="600" height="432" alt="Chatbot" draggable="false" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;