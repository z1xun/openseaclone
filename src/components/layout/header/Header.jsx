import { Link } from "react-router-dom";
import styled from "styled-components";
import Gnb from "./Gnb";
import { Heading } from "@chakra-ui/react";

import gsap from "gsap";
import imglogo from "../../../../src/assets/images/logo/opensea-logo.svg";
import { HiOutlineUserCircle, HiOutlineShoppingCart, HiSearch } from "react-icons/hi";
import { MdOutlineWallet } from "react-icons/md";

const Header = () => {
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const headerWrap = document.querySelector(".header-wrap");

        if (scrollY >= 100) {
            gsap.to(headerWrap, {
                backgroundColor: "#000000",
                duration: 0.5,
            });
        } else {
            gsap.to(headerWrap, { backgroundColor: "transparent", duration: 0.5 });
        }
    };

    // 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    return (
        <HeaderWrap className="header-wrap">
            <div className="header-left">
                <Heading as={"h1"}>
                    <Link to="#">
                        <img src={imglogo}></img>
                    </Link>
                    <Link to="/" className="logoname">
                        OpenSea
                    </Link>
                </Heading>
                <Gnb />
            </div>
            <div className="searchbox">
                <Icon />
                <input placeholder="Search" htmlSize={4} width="auto" />
            </div>
            <div className="header-right">
                <Utility to="/">
                    login
                    <MdOutlineWallet />
                </Utility>
                <Utility to="/">
                    my <HiOutlineUserCircle />
                </Utility>
                <Utility to="/">
                    cart <HiOutlineShoppingCart />
                </Utility>
            </div>
        </HeaderWrap>
    );
};
const Utility = styled(Link)`
    text-indent: -9999px;
    display: flex;
    align-items: center;
    min-width: 48px;
    color: var(--white);
    font-size: 24px;
    border-radius: 12px;
    padding: 0px 12px;
    height: 48px;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    background-color: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(20px);
`;
const Icon = styled(HiSearch)`
    font-size: 24px;
`;

const HeaderWrap = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 60px;
    z-index: 1000;
    .header-left {
        display: flex;
    }
    .header-right {
        display: flex;
        gap: 10px;
    }

    h1 {
        display: flex;
        align-items: center;
        img {
            width: 40px;
        }
        .logoname {
            color: var(--white);
            padding: 0 10px;
            font-size: 26px;
            line-height: 80px;
        }
        a {
            font-size: 30px;
            font-weight: bold;
        }
    }
    .searchbox {
        display: flex;
        align-items: center;
        line-height: 26px;
        padding: 8px;
        border-radius: 12px;
        height: 48px;
        border-color: transparent;
        background-color: rgba(255, 255, 255, 0.12);
        color: rgb(255, 255, 255);
        backdrop-filter: blur(20px);
        flex: 0.8;
        transition: all 0.4s;

        input {
            width: calc(100% - 24px);
            background-color: transparent;
            margin-left: 10px;
        }
        input:focus {
            outline: none;
        }
        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
    }
`;

export default Header;
