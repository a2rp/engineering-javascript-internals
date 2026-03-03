// src/components/header/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import transparentLogo from "/images/transparentLogo.png";
import { FiMoon, FiSun, FiCpu, FiZap, FiActivity } from "react-icons/fi";

const THEME_LS_KEY = "engineering-javascript-internals-theme";

const Header = () => {
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem(THEME_LS_KEY);
        const initialTheme = storedTheme || "dark";
        setTheme(initialTheme);

        if (initialTheme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
    }, []);

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }

        localStorage.setItem(THEME_LS_KEY, theme);
    }, [theme]);

    const nextTheme = useMemo(() => {
        return theme === "light" ? "dark" : "light";
    }, [theme]);

    const handleToggle = () => {
        setTheme(nextTheme);
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <div className="leftSide">
                    <div className="logoNameWrapper">
                        <div className="logoWrapper">
                            {!logoLoaded && <div className="logoSkeleton" />}
                            <img
                                src={transparentLogo}
                                alt="engineering-javascript-internals"
                                onLoad={() => setLogoLoaded(true)}
                                style={{ opacity: logoLoaded ? 1 : 0 }}
                            />
                        </div>

                        <div className="nameWrapper">
                            <div className="title">
                                engineering-javascript-internals
                            </div>
                            <div className="subTitle">
                                Runtime mental models - engine, async, memory,
                                objects
                            </div>
                        </div>
                    </div>

                    <div className="miniStats" aria-label="Quick focus areas">
                        <span className="stat">
                            <span className="sIcon">
                                <FiCpu />
                            </span>
                            <span className="sText">Engine</span>
                        </span>

                        <span className="stat">
                            <span className="sIcon">
                                <FiActivity />
                            </span>
                            <span className="sText">Async</span>
                        </span>

                        <span className="stat">
                            <span className="sIcon">
                                <FiZap />
                            </span>
                            <span className="sText">Internals</span>
                        </span>
                    </div>
                </div>

                <div className="rightSide">
                    <button
                        type="button"
                        className="themeToggleBtn"
                        onClick={handleToggle}
                        aria-label={`Switch to ${nextTheme} theme`}
                        title={`Switch to ${nextTheme}`}
                    >
                        <span className="icon">
                            {theme === "light" ? <FiMoon /> : <FiSun />}
                        </span>
                        <span className="label">
                            {theme === "light" ? "Light" : "Dark"}
                        </span>
                    </button>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
