import React, { useMemo } from "react";
import { Styled } from "./styled";
import {
    FiCpu,
    FiLayers,
    FiZap,
    FiClock,
    FiDatabase,
    FiCode,
} from "react-icons/fi";

const About = () => {
    const buildTime = useMemo(() => {
        if (typeof __APP_BUILD_ISO__ === "undefined") return null;

        const date = new Date(__APP_BUILD_ISO__);

        return date.toLocaleString("en-IN", {
            year: "numeric",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
    }, []);

    return (
        <Styled.Wrapper id="about">
            <div className="container">
                <div className="left">
                    <div className="badge">Engineering Series</div>

                    <h1 className="title">JavaScript Internals</h1>

                    <p className="subtitle">
                        Understand how JavaScript actually executes. Not syntax.
                        Not surface patterns. The engine, the runtime, and the
                        execution model.
                    </p>

                    <div className="principles">
                        <div className="pItem">
                            <FiCpu />
                            <span>Engine level thinking</span>
                        </div>
                        <div className="pItem">
                            <FiLayers />
                            <span>Mental model clarity</span>
                        </div>
                        <div className="pItem">
                            <FiZap />
                            <span>Async behavior mastery</span>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="card">
                        <div className="cardTitle">
                            What this repo focuses on
                        </div>

                        <div className="grid">
                            <div className="gItem">
                                <FiClock />
                                <div>
                                    <div className="gHead">Execution Flow</div>
                                    <div className="gSub">
                                        Execution context, call stack, event
                                        loop
                                    </div>
                                </div>
                            </div>

                            <div className="gItem">
                                <FiDatabase />
                                <div>
                                    <div className="gHead">Memory Model</div>
                                    <div className="gSub">
                                        Stack vs heap, garbage collection
                                    </div>
                                </div>
                            </div>

                            <div className="gItem">
                                <FiCode />
                                <div>
                                    <div className="gHead">Core Mechanics</div>
                                    <div className="gSub">
                                        Closures, prototypes, this keyword
                                    </div>
                                </div>
                            </div>

                            <div className="gItem">
                                <FiZap />
                                <div>
                                    <div className="gHead">Async Patterns</div>
                                    <div className="gSub">
                                        Promises, microtasks, generators
                                    </div>
                                </div>
                            </div>
                        </div>

                        {buildTime && (
                            <div className="buildMeta">
                                <FiClock />
                                <span>Last build: {buildTime}</span>
                            </div>
                        )}

                        <div className="footerNote">
                            When you understand the runtime, debugging becomes
                            reasoning instead of guessing.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default About;
