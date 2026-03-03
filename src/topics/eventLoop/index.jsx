// src/topics/eventLoop/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiRepeat,
    FiClock,
    FiZap,
    FiLayers,
    FiCpu,
    FiCheckCircle,
    FiAlertCircle,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const EventLoop = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Event loop",
            sub: "The event loop is the runtime mechanism that lets JavaScript handle asynchronous work while still running your code on a single main thread. It decides when callbacks run by moving tasks into the call stack.",
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
        <Styled.Wrapper id="event-loop">
            <div className="top">
                <h2 className="title">Event loop</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiRepeat /> Scheduler
                    </span>
                    <span className="pill">
                        <FiLayers /> Queues
                    </span>
                    <span className="pill">
                        <FiZap /> Async ordering
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="event-loop-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                beginner explanation and output examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="event-loop-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">Meaning</h3>
                                <p className="p">
                                    JavaScript runs your code on a single main
                                    thread. That means only one thing can be on
                                    the call stack at a time.
                                    <br />
                                    The <strong>event loop</strong> is the
                                    runtime system that keeps the program
                                    responsive by deciding when waiting tasks
                                    can enter the call stack.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Simple idea
                                        </div>
                                        <p className="miniText">
                                            When the call stack becomes empty,
                                            the event loop pulls the next ready
                                            task from queues and pushes it onto
                                            the stack.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Why it exists
                                        </div>
                                        <p className="miniText">
                                            Without it, async callbacks would
                                            never run and UI would freeze while
                                            waiting for timers or network.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Core pieces</h3>

                                <div className="termGrid">
                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">
                                                Call stack
                                            </span>
                                            <span className="tag">Run now</span>
                                        </div>
                                        <p className="tBody">
                                            Stack of execution contexts. The top
                                            frame runs. If stack is busy, no
                                            other JS can run.
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">
                                                Web APIs
                                            </span>
                                            <span className="tag">
                                                Wait here
                                            </span>
                                        </div>
                                        <p className="tBody">
                                            Browser provided features like
                                            timers, DOM events, network
                                            requests. They run outside the JS
                                            call stack.
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">Queues</span>
                                            <span className="tag">
                                                Ready list
                                            </span>
                                        </div>
                                        <p className="tBody">
                                            When async work completes, callbacks
                                            wait in queues until the event loop
                                            schedules them.
                                        </p>
                                    </div>
                                </div>

                                <div className="finalNote">
                                    Event loop does not interrupt running code.
                                    It waits for the stack to be empty.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Main rule</h3>
                                <div className="rule">
                                    <div className="rTitle">
                                        Only when the call stack is empty
                                    </div>
                                    <div className="rText">
                                        The event loop can move a callback from
                                        a queue into the call stack only when
                                        the current stack is empty.
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - why setTimeout does not run
                                        immediately
                                    </div>
                                    <pre className="code">{`console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">Output</div>
                                        <p className="miniText">
                                            A
                                            <br />
                                            C
                                            <br />B
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">Reason</div>
                                        <p className="miniText">
                                            Timer callback waits in a queue. It
                                            runs only after current script
                                            finishes and stack becomes empty.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Queues - task vs microtask
                                </h3>

                                <p className="p">
                                    There are multiple queues. The important
                                    ones for interviews are:
                                    <br />- task queue (also called macrotask
                                    queue)
                                    <br />- microtask queue
                                </p>

                                <div className="flowGrid">
                                    <div className="flow">
                                        <div className="flowTitle">
                                            Task queue (macrotask)
                                        </div>
                                        <ul className="list">
                                            <li>setTimeout</li>
                                            <li>setInterval</li>
                                            <li>UI events</li>
                                            <li>message events</li>
                                        </ul>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTitle">
                                            Microtask queue
                                        </div>
                                        <ul className="list">
                                            <li>Promise then catch finally</li>
                                            <li>queueMicrotask</li>
                                            <li>MutationObserver (browser)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="warn">
                                    <span className="wIcon">
                                        <FiAlertCircle />
                                    </span>
                                    <div className="wText">
                                        <div className="wTitle">
                                            Priority rule
                                        </div>
                                        <div className="wSub">
                                            After a call stack turn finishes,
                                            the runtime drains the microtask
                                            queue completely before taking the
                                            next task from the task queue.
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - microtasks run before timers
                                    </div>
                                    <pre className="code">{`console.log("A");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("B");`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">Output</div>
                                        <p className="miniText">
                                            A
                                            <br />
                                            B
                                            <br />
                                            promise
                                            <br />
                                            timeout
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">Reason</div>
                                        <p className="miniText">
                                            Promise callbacks are microtasks.
                                            Microtasks run fully before next
                                            task like setTimeout.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Visual mental model</h3>

                                <div className="diagram">
                                    <div className="dCol">
                                        <div className="dTitle">Call stack</div>
                                        <div className="dBox">
                                            Runs sync code now
                                        </div>
                                    </div>

                                    <div className="dArrow">-</div>

                                    <div className="dCol">
                                        <div className="dTitle">Web APIs</div>
                                        <div className="dBox">
                                            Timers - fetch - DOM events
                                        </div>
                                    </div>

                                    <div className="dArrow">-</div>

                                    <div className="dCol">
                                        <div className="dTitle">Queues</div>
                                        <div className="dBox">
                                            Microtask queue first
                                            <br />
                                            Task queue next
                                        </div>
                                    </div>

                                    <div className="dArrow">-</div>

                                    <div className="dCol">
                                        <div className="dTitle">Event loop</div>
                                        <div className="dBox">
                                            Moves ready callbacks to stack when
                                            stack is empty
                                        </div>
                                    </div>
                                </div>

                                <div className="finalNote">
                                    A timer does not mean it runs at that exact
                                    time. It means it becomes eligible after
                                    that delay. Actual run depends on stack and
                                    queue priority.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Common confusion</h3>

                                <div className="qaGrid">
                                    <div className="qa">
                                        <div className="q">
                                            Is JavaScript single threaded
                                        </div>
                                        <div className="a">
                                            The call stack is single threaded.
                                            But the runtime uses Web APIs and
                                            background threads for timers and
                                            network.
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            Does event loop run async code
                                        </div>
                                        <div className="a">
                                            It schedules callbacks. The callback
                                            itself runs on the call stack.
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            Can setTimeout run before Promise
                                        </div>
                                        <div className="a">
                                            Usually no. Promise microtasks run
                                            first after the current stack turn.
                                        </div>
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
                                        <span className="mono">API</span> -
                                        Application Programming Interface
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">UI</span> - User
                                        Interface
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">DOM</span> -
                                        Document Object Model
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    How to say it confidently
                                </h3>
                                <ul className="list">
                                    <li>
                                        "The event loop schedules callbacks by
                                        moving them from queues to the call
                                        stack when the stack is empty."
                                    </li>
                                    <li>
                                        "Microtasks have higher priority than
                                        tasks and are drained fully before the
                                        next task runs."
                                    </li>
                                    <li>
                                        "setTimeout delay means eligibility
                                        time, not guaranteed execution time."
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

export default EventLoop;
