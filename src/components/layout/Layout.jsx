import CardWrap from "../common/CardWrap";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { Tab } from "../common/tabmenu/TabMenu";
import { Navigation } from "swiper/modules";

const Layout = ({ children }) => {
    return (
        <Wrap>
            <Header />
            <MainWrap>
                {/* <Box>
                    <History pagename={pagename} />
                    <Title title={title} />
                </Box> */}
                {children}
                <div className="innerimg"></div>
                <Tab />
                <div className="slide-section">
                    <h1>Notable collections</h1>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={5}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation={true}
                        modules={[Navigation]}
                    >
                        <SwiperSlide>
                            <CardWrap
                                imageUrl={"./slide1.avif"}
                                imageAlt={"슬라이드1"}
                                title={"Being by Parin Heidari "}
                                floor={"0.03"}
                                total={"1.28"}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardWrap
                                imageUrl={"./slide2.avif"}
                                imageAlt={"슬라이드2"}
                                title={"Monster Party"}
                                floor={"0.05"}
                                total={"1.58"}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardWrap
                                imageUrl={"./slide3.avif"}
                                imageAlt={"슬라이드3"}
                                title={"Springfield Punks"}
                                floor={"0.02"}
                                total={"3.00"}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardWrap
                                imageUrl={"./slide4.avif"}
                                imageAlt={"슬라이드4"}
                                title={"PARTS    "}
                                floor={"0.08"}
                                total={"1.28"}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardWrap
                                imageUrl={"./slide5.avif"}
                                imageAlt={"슬라이드5"}
                                title={"/// by Snowfro  "}
                                floor={"0.01"}
                                total={"1.04"}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardWrap
                                imageUrl={"./slide6.avif"}
                                imageAlt={"슬라이드6"}
                                title={"Mutant Ape Yacht Club "}
                                floor={"0.03"}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="slide-section">
                    <h1>Trending in Art</h1>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={5}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <CardWrap
                                imageUrl={"./slide7.avif"}
                                imageAlt={"슬라이드1"}
                                title={"Being by Parin Heidari "}
                                floor={"0.03"}
                                total={"1.28"}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardWrap
                                imageUrl={"./slide8.avif"}
                                imageAlt={"슬라이드2"}
                                title={"Monster Party"}
                                floor={"0.05"}
                                total={"1.58"}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardWrap
                                imageUrl={"./slide9.avif"}
                                imageAlt={"슬라이드3"}
                                title={"Springfield Punks"}
                                floor={"0.02"}
                                total={"3.00"}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardWrap
                                imageUrl={"./slide10.avif"}
                                imageAlt={"슬라이드4"}
                                title={"PARTS    "}
                                floor={"0.08"}
                                total={"1.28"}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardWrap
                                imageUrl={"./slide11.avif"}
                                imageAlt={"슬라이드5"}
                                title={"/// by Snowfro  "}
                                floor={"0.01"}
                                total={"1.04"}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <CardWrap
                                imageUrl={"./slide6.avif"}
                                imageAlt={"슬라이드6"}
                                title={"Mutant Ape Yacht Club "}
                                floor={"0.03"}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </MainWrap>
            <Footer />
        </Wrap>
    );
};

const Wrap = styled.div`
    min-height: 100vh;
    padding-top: 80px;
`;

const MainWrap = styled.main`
    /* height: calc(100vh - 80px); */
    height: 200vh; //추후에 지워야함! 스크롤트리거 작업하느라 추가해둠
    padding: 30px 60px;
    position: relative; // 추가

    .innerimg {
        width: 100%;
        height: 834px;
        position: absolute;
        top: -80px;
        left: 0;
        z-index: -1000;
        &:before {
            position: absolute;
            top: -80px;
            left: 0;
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            /* background-color: rgb(204, 204, 204, 50%); */
            background: linear-gradient(to bottom, rgb(85, 85, 85, 0.5) 0%, var(--white) 100%);
            backdrop-filter: blur(12px);
        }
        &::after {
            position: absolute;
            top: -80px;
            left: 0;
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            background: url("homebg.webp") no-repeat 50% 0;
            z-index: -1000;
        }
    }
    .slide-section {
        margin-top: 60px;
        h1 {
            margin-bottom: 24px;
            color: var(--black);
            font-size: 24px;
            font-weight: 600;
        }
    }
`;

export default Layout;
