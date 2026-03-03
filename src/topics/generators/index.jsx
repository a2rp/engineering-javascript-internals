// src/topics/generators/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiZap,
    FiRepeat,
    FiCpu,
    FiCode,
    FiLayers,
    FiCheckCircle,
    FiAlertCircle,
    FiPlay,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const Generators = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Generators",
            sub: "Generators are special functions that can pause and resume. They produce values one at a time using `yield`. This helps with lazy iteration, custom iterables, and step-by-step control flow.",
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
        <Styled.Wrapper id="generators">
            <div className="top">
                <h2 className="title">Generators</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiRepeat /> Pause and resume
                    </span>
                    <span className="pill">
                        <FiZap /> `yield` values
                    </span>
                    <span className="pill">
                        <FiCpu /> Lazy iteration
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="generators-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                beginner explanation and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="generators-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">Meaning</h3>
                                <p className="p">
                                    A <strong>generator</strong> is a function
                                    that can <strong>pause</strong> and later{" "}
                                    <strong>resume</strong> from the same point.
                                    It does not return all results at once.
                                    Instead, it produces values step by step.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Normal function
                                        </div>
                                        <p className="miniText">
                                            Runs from start to end in one go. It
                                            returns once using{" "}
                                            <span className="mono">return</span>
                                            .
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Generator function
                                        </div>
                                        <p className="miniText">
                                            Can pause at{" "}
                                            <span className="mono">yield</span>{" "}
                                            and continue later. It can yield
                                            many times.
                                        </p>
                                    </div>
                                </div>

                                <div className="finalNote">
                                    Think of a generator like a "controlled
                                    faucet" of values. You pull values when you
                                    need them, not all at once.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">How to write a generator</h3>
                                <p className="p">
                                    You create a generator by using{" "}
                                    <span className="mono">function*</span> and{" "}
                                    <span className="mono">yield</span>.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Basic generator
                                    </div>
                                    <pre className="code">{`function* countUpTo3() {
  yield 1;
  yield 2;
  yield 3;
}

const it = countUpTo3();

it.next(); // { value: 1, done: false }
it.next(); // { value: 2, done: false }
it.next(); // { value: 3, done: false }
it.next(); // { value: undefined, done: true }`}</pre>
                                </div>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiLayers />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            What you get back
                                        </div>
                                        <div className="cSub">
                                            Calling a generator function does
                                            not run it immediately. It returns
                                            an <strong>iterator</strong> object.
                                            You control execution using{" "}
                                            <span className="mono">next()</span>
                                            .
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Generator execution model
                                </h3>
                                <p className="p">
                                    Each <span className="mono">next()</span>{" "}
                                    call continues the generator until it hits
                                    the next <span className="mono">yield</span>{" "}
                                    or the end of the function.
                                </p>

                                <div className="flowGrid">
                                    <div className="flow">
                                        <div className="flowTitle">
                                            Step 1 - create iterator
                                        </div>
                                        <p className="flowText">
                                            <span className="mono">
                                                const it = gen()
                                            </span>{" "}
                                            creates an iterator. No code runs
                                            yet.
                                        </p>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTitle">
                                            Step 2 - pull values
                                        </div>
                                        <p className="flowText">
                                            <span className="mono">
                                                it.next()
                                            </span>{" "}
                                            runs code until first{" "}
                                            <span className="mono">yield</span>.
                                        </p>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTitle">
                                            Step 3 - finish
                                        </div>
                                        <p className="flowText">
                                            When function ends,{" "}
                                            <span className="mono">done</span>{" "}
                                            becomes{" "}
                                            <span className="mono">true</span>.
                                        </p>
                                    </div>
                                </div>

                                <div className="warn">
                                    <span className="wIcon">
                                        <FiAlertCircle />
                                    </span>
                                    <div className="wText">
                                        <div className="wTitle">
                                            Not the same as async
                                        </div>
                                        <div className="wSub">
                                            Generators are about pausing and
                                            resuming synchronous execution.
                                            Async generators exist, but start
                                            with normal generators first.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Why generators matter</h3>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Lazy iteration
                                        </div>
                                        <p className="miniText">
                                            Generate values only when needed.
                                            Useful when data is large or
                                            infinite.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Clean custom loops
                                        </div>
                                        <p className="miniText">
                                            Build custom iterable objects that
                                            work with{" "}
                                            <span className="mono">
                                                for...of
                                            </span>
                                            .
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - infinite sequence (careful)
                                    </div>
                                    <pre className="code">{`function* infiniteIds() {
  let id = 1;
  while (true) {
    yield id;
    id += 1;
  }
}

const it = infiniteIds();
it.next().value; // 1
it.next().value; // 2
it.next().value; // 3`}</pre>
                                </div>

                                <div className="finalNote">
                                    In interviews, generators often appear as
                                    "lazy streams" and "custom iterables".
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    yield and next() with input
                                </h3>
                                <p className="p">
                                    <span className="mono">yield</span> can both
                                    output a value and later receive a value.
                                    The value passed to{" "}
                                    <span className="mono">next(value)</span>{" "}
                                    becomes the result of the paused{" "}
                                    <span className="mono">yield</span>.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - send value into generator
                                    </div>
                                    <pre className="code">{`function* ask() {
  const name = yield "What is your name?";
  yield "Hello " + name;
}

const it = ask();

it.next();          // { value: "What is your name?", done: false }
it.next("Ashish");  // { value: "Hello Ashish", done: false }
it.next();          // { value: undefined, done: true }`}</pre>
                                </div>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiPlay />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            Important detail
                                        </div>
                                        <div className="cSub">
                                            The first{" "}
                                            <span className="mono">next()</span>{" "}
                                            starts the generator and reaches the
                                            first{" "}
                                            <span className="mono">yield</span>.
                                            There is no paused{" "}
                                            <span className="mono">yield</span>{" "}
                                            before that.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Generators and for...of</h3>
                                <p className="p">
                                    A generator returns an iterator, and it is
                                    also an <strong>iterable</strong>. That
                                    means you can loop it using{" "}
                                    <span className="mono">for...of</span>.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - for...of
                                    </div>
                                    <pre className="code">{`function* nums() {
  yield 10;
  yield 20;
  yield 30;
}

for (const n of nums()) {
  console.log(n);
}
// 10
// 20
// 30`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Iterable
                                        </div>
                                        <p className="miniText">
                                            An object you can iterate with{" "}
                                            <span className="mono">
                                                for...of
                                            </span>
                                            . It has{" "}
                                            <span className="mono">
                                                Symbol.iterator
                                            </span>
                                            .
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Iterator
                                        </div>
                                        <p className="miniText">
                                            An object with{" "}
                                            <span className="mono">next()</span>{" "}
                                            that returns{" "}
                                            <span className="mono">
                                                {`{ value, done }`}
                                            </span>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Common use cases in real projects
                                </h3>

                                <div className="qaGrid">
                                    <div className="qa">
                                        <div className="q">Paginated APIs</div>
                                        <div className="a">
                                            Yield items page by page, avoid
                                            loading everything into memory.
                                        </div>
                                    </div>
                                    <div className="qa">
                                        <div className="q">
                                            Parser style code
                                        </div>
                                        <div className="a">
                                            Step through tokens, yield states,
                                            keep code readable.
                                        </div>
                                    </div>
                                    <div className="qa">
                                        <div className="q">
                                            Simulation and streams
                                        </div>
                                        <div className="a">
                                            Produce values on demand, control
                                            speed and steps.
                                        </div>
                                    </div>
                                </div>

                                <div className="finalNote">
                                    If your code benefits from "step by step"
                                    production of values, generators are a clean
                                    fit.
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
                                        <span className="mono">it</span> -
                                        Iterator (common variable name)
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">done</span> -
                                        Indicates iteration finished
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">yield</span> -
                                        Pause and emit a value
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    How to say it confidently
                                </h3>
                                <ul className="list">
                                    <li>
                                        "A generator is a function that can
                                        pause at `yield` and resume later,
                                        producing values lazily."
                                    </li>
                                    <li>
                                        "Calling a generator returns an
                                        iterator, and execution happens when we
                                        call next()."
                                    </li>
                                    <li>
                                        "Generators are great for custom
                                        iterables and memory-friendly
                                        iteration."
                                    </li>
                                </ul>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Mini practice</h3>
                                <div className="practice">
                                    <div className="pRow">
                                        <span className="label">Try</span>
                                        <span className="value">
                                            Write a generator that yields even
                                            numbers from 2 to 10.
                                        </span>
                                    </div>
                                    <div className="pRow">
                                        <span className="label">Answer</span>
                                        <span className="value">
                                            Use a loop and yield when number is
                                            even.
                                        </span>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">One solution</div>
                                    <pre className="code">{`function* evens() {
  for (let n = 2; n <= 10; n += 1) {
    if (n % 2 === 0) yield n;
  }
}

[...evens()] // [2, 4, 6, 8, 10]`}</pre>
                                </div>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default Generators;
