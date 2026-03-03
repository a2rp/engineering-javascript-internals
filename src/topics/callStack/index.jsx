// src/topics/callStack/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayers,
    FiArrowDown,
    FiArrowUp,
    FiCpu,
    FiAlertCircle,
    FiCheckCircle,
    FiRepeat,
    FiZap,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const CallStack = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Call stack",
            sub: "Call stack is the runtime stack used by the JavaScript engine to track which function is currently running. It follows LIFO - last in, first out.",
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
            tId = window.setTimeout(() => {
                setIsMounted(false);
            }, TRANSITION_MS);
        }

        return () => {
            if (tId) window.clearTimeout(tId);
        };
    }, [open]);

    return (
        <Styled.Wrapper id="call-stack">
            <div className="top">
                <h2 className="title">Call stack</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiLayers /> LIFO order
                    </span>
                    <span className="pill">
                        <FiArrowDown /> Push on call
                    </span>
                    <span className="pill">
                        <FiArrowUp /> Pop on return
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="call-stack-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} for deep
                                explanation with real stack traces and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="call-stack-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">Meaning</h3>
                                <p className="p">
                                    The <strong>call stack</strong> is a stack
                                    data structure maintained by the engine. It
                                    stores <strong>stack frames</strong>. Each
                                    stack frame represents one active function
                                    call.
                                    <br />
                                    The top frame is the function that is
                                    currently running.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            LIFO rule
                                        </div>
                                        <p className="miniText">
                                            <strong>LIFO</strong> - Last In,
                                            First Out.
                                            <br />
                                            The most recent function call runs
                                            first and returns first.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Stack frame
                                        </div>
                                        <p className="miniText">
                                            A stack frame stores function info
                                            like parameters, local variables,
                                            return address, and the execution
                                            context reference.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Push and pop behavior</h3>
                                <p className="p">
                                    When a function is called, its frame is
                                    <strong> pushed</strong> on the stack. When
                                    it returns or throws, its frame is
                                    <strong> popped</strong>.
                                </p>

                                <div className="flowGrid">
                                    <div className="flow">
                                        <div className="flowTitle">
                                            On function call
                                        </div>
                                        <ul className="list">
                                            <li>New stack frame is created</li>
                                            <li>Frame is pushed on top</li>
                                            <li>
                                                Control jumps into the function
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTitle">
                                            On return
                                        </div>
                                        <ul className="list">
                                            <li>Function finishes execution</li>
                                            <li>Frame is popped from top</li>
                                            <li>Control returns to caller</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="stackBox">
                                    <div className="stackTitle">
                                        Mental model
                                    </div>
                                    <div className="stackNote">
                                        Think of the call stack as a pile of
                                        plates. You can only add a plate on top,
                                        and you can only remove the top plate.
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Example 1 - normal nested calls
                                </h3>

                                <div className="exampleBlock">
                                    <div className="exTitle">Code</div>
                                    <pre className="code">{`function one() {
  two();
}

function two() {
  three();
}

function three() {
  return "ok";
}

one();`}</pre>
                                </div>

                                <div className="stackBox">
                                    <div className="stackTitle">
                                        Stack during execution
                                    </div>
                                    <pre className="stackCode">{`three()  - top
two()
one()
global`}</pre>
                                    <div className="stackNote">
                                        When{" "}
                                        <span className="mono">three()</span>{" "}
                                        returns, it is popped. Then{" "}
                                        <span className="mono">two()</span>{" "}
                                        returns, then{" "}
                                        <span className="mono">one()</span>.
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Example 2 - stack trace from an error
                                </h3>

                                <p className="p">
                                    A stack trace is basically the call stack
                                    printed at the moment an error happens.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">Code</div>
                                    <pre className="code">{`function parseUser() {
  throw new Error("Bad user");
}

function loadProfile() {
  parseUser();
}

function appStart() {
  loadProfile();
}

appStart();`}</pre>
                                </div>

                                <div className="stackBox">
                                    <div className="stackTitle">
                                        Stack trace meaning
                                    </div>
                                    <pre className="stackCode">{`Error: Bad user
  at parseUser()
  at loadProfile()
  at appStart()
  at global`}</pre>
                                    <div className="stackNote">
                                        Read it as - global called{" "}
                                        <span className="mono">appStart()</span>
                                        , which called{" "}
                                        <span className="mono">
                                            loadProfile()
                                        </span>
                                        , which called{" "}
                                        <span className="mono">
                                            parseUser()
                                        </span>{" "}
                                        where the error happened.
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Why recursion can crash - stack overflow
                                </h3>

                                <p className="p">
                                    Recursion means a function calls itself.
                                    Each call pushes a new frame. If the calls
                                    never stop, the stack keeps growing until
                                    the engine runs out of stack space. That is
                                    called <strong>stack overflow</strong>.
                                </p>

                                <div className="warn">
                                    <span className="wIcon">
                                        <FiAlertCircle />
                                    </span>
                                    <div className="wText">
                                        <div className="wTitle">
                                            Stack overflow
                                        </div>
                                        <div className="wSub">
                                            It happens when too many function
                                            calls are active at once, commonly
                                            due to infinite recursion or very
                                            deep recursion.
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - infinite recursion
                                    </div>
                                    <pre className="code">{`function boom() {
  return boom();
}

boom(); // RangeError: Maximum call stack size exceeded`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            How to avoid
                                        </div>
                                        <p className="miniText">
                                            Use a proper base case.
                                            <br />
                                            Or convert recursion to an iterative
                                            loop when depth can be large.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Practical tip
                                        </div>
                                        <p className="miniText">
                                            Deep recursion is risky in JS
                                            because there is no guaranteed tail
                                            call optimization.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Call stack vs event loop</h3>

                                <p className="p">
                                    The call stack runs{" "}
                                    <strong>synchronous</strong> code. Async
                                    callbacks wait in queues and enter the call
                                    stack only when the stack is empty. That
                                    scheduling is handled by the event loop.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Synchronous
                                        </div>
                                        <p className="miniText">
                                            Runs now, blocks the call stack
                                            until finished. Example - normal
                                            function call.
                                        </p>
                                    </div>

                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Asynchronous
                                        </div>
                                        <p className="miniText">
                                            Runs later, does not immediately
                                            occupy the stack. Example - timers,
                                            promises, I/O callbacks.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - async order basics
                                    </div>
                                    <pre className="code">{`console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");

// Output
// A
// C
// B`}</pre>
                                </div>

                                <div className="finalNote">
                                    Key rule - the call stack must be empty
                                    before the event loop can push the next
                                    callback onto it.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Terms and full forms</h3>
                                <div className="abbrGrid">
                                    <div className="abbr">
                                        <span className="mono">LIFO</span> -
                                        Last In, First Out
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">JS</span> -
                                        JavaScript
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">CPU</span> -
                                        Central Processing Unit
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">I/O</span> -
                                        Input/Output
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    How to say it confidently
                                </h3>
                                <ul className="list">
                                    <li>
                                        "Call stack stores active function calls
                                        as stack frames using LIFO order."
                                    </li>
                                    <li>
                                        "Each function call pushes a frame, each
                                        return pops a frame."
                                    </li>
                                    <li>
                                        "Async callbacks run only when the stack
                                        is empty, after the event loop schedules
                                        them."
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

export default CallStack;
