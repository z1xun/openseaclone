import React from "react";
import Layout from "../components/layout/Layout";

// import required modules

import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

const Home = () => {
    return (
        <Layout title="Home" pagename="home">
            <NavLnb className="nav-lnb">
                <ul>
                    <li className="active">
                        <Link to="#">All</Link>
                    </li>
                    <li>
                        <Link to="#">Art</Link>
                    </li>
                    <li>
                        <Link to="#">Gaming</Link>
                    </li>
                </ul>
            </NavLnb>

            <MainContents>
                <div className="contents-wrap">
                    <div className="contents-left">
                        <div className="profole-box">
                            <img src="profile.avif" alt="작가프로필" />
                        </div>
                        <div className="text-box">
                            <h1>zkMon by Polychain Monsters x Modulus</h1>
                            <p>By zkMonDeployer</p>
                            <p>1,000 items · 0.02 ETH</p>
                        </div>
                    </div>
                    <div className="more-box">
                        <Link to="/">View collection</Link>
                    </div>
                </div>
            </MainContents>
        </Layout>
    );
};

const MainContents = styled(Box)`
    width: 100%;
    height: 520px;
    border-radius: 20px;
    overflow: hidden;
    margin-top: 30px;
    position: relative;

    &:hover::after {
        transform: scale(1.1);
    }

    &::after {
        position: absolute;
        top: 0;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: url("homebg.webp") no-repeat 50% 50%;
        z-index: -500;
        transition: transform 0.3s;
    }
    .contents-wrap {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        padding: 30px;
        width: 100%;
    }
    .profole-box {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        border: 1px solid var(--white);
        overflow: hidden;
    }
    .text-box {
        color: var(--white);

        h1 {
            font-size: 30px;
            font-weight: 600;
        }
    }
    .more-box {
        display: flex;
        align-items: flex-end;
        a {
            color: var(--white);
            background: rgb(142 142 142 / 40%);
            border-radius: 12px;
            font-weight: 600;
            display: block;
            padding: 18px 20px;
            backdrop-filter: blur(20px);
            font-size: 18px;
            &:hover {
                color: var(--black);
                background: var(--white);
            }
        }
    }
`;

const NavLnb = styled.nav`
    ul {
        display: flex;
        gap: 10px;
    }
    li {
        color: white;
        border-radius: 12px;
        font-weight: 600;
        border-radius: 10px;
        &.active {
            background: rgba(255, 255, 255, 0.25);
        }
    }
    a {
        display: block;
        padding: 8px 16px;
    }
`;

export default Home;
