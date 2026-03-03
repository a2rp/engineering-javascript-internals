// src/topics/microtaskVsMacrotask/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiZap,
    FiClock,
    FiLayers,
    FiPlay,
    FiCheckCircle,
    FiAlertCircle,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const MicrotaskVsMacrotask = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Microtask vs macrotask",
            sub: "JavaScript runs sync code first. Then it processes queues. Microtasks run before macrotasks. This single rule explains most async order confusion.",
        };
    }, []);

    const toggle = () => setOpen((v) => !v);

    useEffect(() => {
        let tId = null;

        if (open) {
            setIsMounted(true);
            requestAnimationFrame(() => setIsVisible(true));
        } else {
            setIsVisible(false);
            tId = window.setTimeout(() => setIsMounted(false), TRANSITION_MS);
        }

        return () => {
            if (tId) window.clearTimeout(tId);
        };
    }, [open]);

    return (
        <Styled.Wrapper id="microtask-vs-macrotask">
            <div className="top">
                <h2 className="title">Microtask vs macrotask</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiZap /> Microtasks first
                    </span>
                    <span className="pill">
                        <FiClock /> Event loop rule
                    </span>
                    <span className="pill">
                        <FiLayers /> Queues matter
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="microtask-macrotask-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                beginner explanation and execution order
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="microtask-macrotask-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">The core rule</h3>
                                <p className="p">
                                    JavaScript follows this sequence:
                                    <br />- run all synchronous code on the call
                                    stack
                                    <br />- drain the microtask queue completely
                                    <br />- run one macrotask from the macrotask
                                    queue
                                    <br />- after that macrotask, drain
                                    microtasks again
                                    <br />
                                    Repeat forever.
                                </p>

                                <div className="ruleCard">
                                    <div className="ruleTop">
                                        <FiPlay />
                                        <div className="ruleTitle">
                                            Quick mental model
                                        </div>
                                    </div>
                                    <div className="ruleText">
                                        Microtasks are "run as soon as possible
                                        after current code finishes".
                                        <br />
                                        Macrotasks are "run later, one per loop
                                        turn".
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">What is a microtask</h3>
                                <p className="p">
                                    A <strong>microtask</strong> is a small job
                                    scheduled to run right after the current
                                    synchronous code finishes, before any timers
                                    or UI events.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Common microtasks
                                        </div>
                                        <ul className="list">
                                            <li>
                                                <span className="mono">
                                                    Promise.then
                                                </span>{" "}
                                                callbacks
                                            </li>
                                            <li>
                                                <span className="mono">
                                                    Promise.catch
                                                </span>{" "}
                                                callbacks
                                            </li>
                                            <li>
                                                <span className="mono">
                                                    Promise.finally
                                                </span>{" "}
                                                callbacks
                                            </li>
                                            <li>
                                                <span className="mono">
                                                    queueMicrotask
                                                </span>
                                            </li>
                                            <li>
                                                <span className="mono">
                                                    MutationObserver
                                                </span>{" "}
                                                (browser)
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Why they exist
                                        </div>
                                        <p className="miniText">
                                            Promises need a reliable "run soon"
                                            mechanism so async chains feel fast
                                            and consistent.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">What is a macrotask</h3>
                                <p className="p">
                                    A <strong>macrotask</strong> is a larger job
                                    that runs in a future turn of the event
                                    loop. After one macrotask runs, microtasks
                                    get a chance again.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Common macrotasks
                                        </div>
                                        <ul className="list">
                                            <li>
                                                <span className="mono">
                                                    setTimeout
                                                </span>
                                            </li>
                                            <li>
                                                <span className="mono">
                                                    setInterval
                                                </span>
                                            </li>
                                            <li>
                                                <span className="mono">
                                                    setImmediate
                                                </span>{" "}
                                                (Node.js)
                                            </li>
                                            <li>
                                                <span className="mono">
                                                    I/O callbacks
                                                </span>{" "}
                                                (Node.js)
                                            </li>
                                            <li>
                                                <span className="mono">
                                                    UI events
                                                </span>{" "}
                                                (browser)
                                            </li>
                                            <li>
                                                <span className="mono">
                                                    MessageChannel
                                                </span>{" "}
                                                (browser)
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Timer confusion
                                        </div>
                                        <p className="miniText">
                                            <span className="mono">
                                                setTimeout(fn, 0)
                                            </span>{" "}
                                            does not mean "run now".
                                            <br />
                                            It means "run after current code and
                                            after microtasks".
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Classic output order example
                                </h3>

                                <div className="exampleBlock">
                                    <div className="exTitle">Example</div>
                                    <pre className="code">{`console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");`}</pre>
                                </div>

                                <div className="resultGrid">
                                    <div className="result">
                                        <div className="rTitle">Output</div>
                                        <pre className="rCode">{`A
D
C
B`}</pre>
                                    </div>

                                    <div className="result">
                                        <div className="rTitle">Why</div>
                                        <ul className="list">
                                            <li>
                                                Sync first - prints{" "}
                                                <span className="mono">A</span>{" "}
                                                then{" "}
                                                <span className="mono">D</span>
                                            </li>
                                            <li>
                                                Microtasks next - Promise prints{" "}
                                                <span className="mono">C</span>
                                            </li>
                                            <li>
                                                Macrotasks after - timer prints{" "}
                                                <span className="mono">B</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Microtasks can starve macrotasks
                                </h3>

                                <p className="p">
                                    If microtasks keep scheduling more
                                    microtasks, the event loop will keep
                                    draining them and timers can get delayed.
                                </p>

                                <div className="warn">
                                    <span className="wIcon">
                                        <FiAlertCircle />
                                    </span>
                                    <div className="wText">
                                        <div className="wTitle">
                                            Starvation means delay
                                        </div>
                                        <div className="wSub">
                                            Starvation is when one queue keeps
                                            getting work and other queues do not
                                            get a chance. Here, too many
                                            microtasks can delay timers and UI
                                            updates.
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - microtask chain
                                    </div>
                                    <pre className="code">{`setTimeout(() => console.log("timer"), 0);

function loop() {
  Promise.resolve().then(loop);
}
loop();`}</pre>
                                </div>

                                <div className="finalNote">
                                    Do not write infinite microtask chains in
                                    real apps. It can freeze the UI in browsers
                                    or delay timers in Node.js.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Browser and Node.js note</h3>
                                <p className="p">
                                    The rule "microtasks before macrotasks" is
                                    consistent, but the exact macrotask phases
                                    can differ between browser and Node.js. For
                                    interviews and practical debugging, focus on
                                    the queue priority rule and the call stack.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Browser example
                                        </div>
                                        <p className="miniText">
                                            Microtasks include Promise
                                            callbacks. Macrotasks include timers
                                            and UI events.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Node.js example
                                        </div>
                                        <p className="miniText">
                                            Node.js has more phases. Also has{" "}
                                            <span className="mono">
                                                process.nextTick
                                            </span>{" "}
                                            which behaves like a very high
                                            priority microtask.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Terms and full forms</h3>
                                <div className="abbrGrid">
                                    <div className="abbr">
                                        <span className="mono">JS</span> -
                                        JavaScript
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">UI</span> - User
                                        Interface
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">I/O</span> -
                                        Input Output
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">API</span> -
                                        Application Programming Interface
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    How to say it confidently
                                </h3>
                                <ul className="list">
                                    <li>
                                        "JavaScript runs sync code, then drains
                                        the microtask queue, then runs a
                                        macrotask."
                                    </li>
                                    <li>
                                        "Promises schedule microtasks, timers
                                        schedule macrotasks, and microtasks run
                                        first."
                                    </li>
                                    <li>
                                        "If microtasks keep adding microtasks,
                                        timers can be delayed - microtask
                                        starvation."
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default MicrotaskVsMacrotask;
