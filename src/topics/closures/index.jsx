// src/topics/closures/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLock,
    FiLink,
    FiLayers,
    FiCpu,
    FiZap,
    FiAlertCircle,
    FiCheckCircle,
    FiCode,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const Closures = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Closures",
            sub: "A closure is created when a function remembers variables from its outer scope even after the outer function has finished. This is the core reason why callbacks, private state, and many JS patterns work.",
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
        <Styled.Wrapper id="closures">
            <div className="top">
                <h2 className="title">Closures</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiLink /> Remembers outer scope
                    </span>
                    <span className="pill">
                        <FiLock /> Private state
                    </span>
                    <span className="pill">
                        <FiZap /> Powers callbacks
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="closures-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>

                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                deep beginner friendly examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="closures-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">Meaning</h3>
                                <p className="p">
                                    A <strong>closure</strong> happens when a
                                    function "carries" references to variables
                                    from its <strong>lexical scope</strong>.
                                    <br />
                                    That means the inner function can still use
                                    those variables later, even if the outer
                                    function has already returned.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            One line definition
                                        </div>
                                        <p className="miniText">
                                            Closure is a function plus the scope
                                            it was created in.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Why it exists
                                        </div>
                                        <p className="miniText">
                                            JavaScript functions are first class
                                            values, they can be returned and
                                            stored. Closures make them safe and
                                            powerful.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    The mental model - what is remembered
                                </h3>

                                <div className="insideGrid">
                                    <div className="inside">
                                        <div className="insideTop">
                                            <FiLayers />
                                            <span className="insideTitle">
                                                Lexical scope
                                            </span>
                                        </div>
                                        <div className="insideText">
                                            Lexical means based on where code is
                                            written. Inner functions can "see"
                                            variables of outer functions.
                                        </div>
                                    </div>

                                    <div className="inside">
                                        <div className="insideTop">
                                            <FiLink />
                                            <span className="insideTitle">
                                                Scope chain
                                            </span>
                                        </div>
                                        <div className="insideText">
                                            The lookup path used when a variable
                                            is not found locally. The engine
                                            searches outer scopes step by step.
                                        </div>
                                    </div>

                                    <div className="inside">
                                        <div className="insideTop">
                                            <FiCpu />
                                            <span className="insideTitle">
                                                Reference, not copy
                                            </span>
                                        </div>
                                        <div className="insideText">
                                            Closures keep references to
                                            variables, not snapshots. If the
                                            variable changes, the closure sees
                                            the latest value.
                                        </div>
                                    </div>
                                </div>

                                <div className="warn">
                                    <span className="wIcon">
                                        <FiAlertCircle />
                                    </span>
                                    <div className="wText">
                                        <div className="wTitle">
                                            Important truth
                                        </div>
                                        <div className="wSub">
                                            Closure does not freeze values. It
                                            keeps access to variables through
                                            scope chain.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Classic example - function returning a
                                    function
                                </h3>

                                <p className="p">
                                    This is the easiest way to see closures.
                                    Outer function creates a variable, returns
                                    an inner function that uses it.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">Example</div>
                                    <pre className="code">{`function makeCounter() {
  let count = 0;

  return function increment() {
    count += 1;
    return count;
  };
}

const c1 = makeCounter();
c1(); // 1
c1(); // 2

const c2 = makeCounter();
c2(); // 1 (separate closure state)`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            What is happening
                                        </div>
                                        <p className="miniText">
                                            <span className="mono">
                                                increment
                                            </span>{" "}
                                            remembers{" "}
                                            <span className="mono">count</span>{" "}
                                            from{" "}
                                            <span className="mono">
                                                makeCounter
                                            </span>
                                            . That remembered environment is the
                                            closure.
                                        </p>
                                    </div>

                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Why c1 and c2 differ
                                        </div>
                                        <p className="miniText">
                                            Each call to{" "}
                                            <span className="mono">
                                                makeCounter
                                            </span>{" "}
                                            creates a new function execution
                                            context and a new{" "}
                                            <span className="mono">count</span>{" "}
                                            variable. So each returned function
                                            closes over its own state.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Closures in callbacks</h3>

                                <p className="p">
                                    Closures show up most in callbacks. A
                                    callback is a function you pass to another
                                    function to run later.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - setTimeout callback
                                    </div>
                                    <pre className="code">{`function greetLater(name) {
  setTimeout(function () {
    console.log("Hi " + name);
  }, 500);
}

greetLater("Ashish");`}</pre>
                                </div>

                                <div className="finalNote">
                                    The callback runs later, but it still knows{" "}
                                    <span className="mono">name</span> because
                                    of closure.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Interview classic - loop closure problem
                                </h3>

                                <p className="p">
                                    Many people get confused when using{" "}
                                    <span className="mono">var</span> in loops
                                    with async callbacks. The issue is one
                                    shared variable reference.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Problem - var shares one binding
                                    </div>
                                    <pre className="code">{`for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

// prints: 3, 3, 3`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Fix 1 - let creates a new binding per
                                        iteration
                                    </div>
                                    <pre className="code">{`for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

// prints: 0, 1, 2`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Fix 2 - IIFE creates a new scope
                                    </div>
                                    <pre className="code">{`for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 0);
  })(i);
}

// prints: 0, 1, 2`}</pre>
                                </div>

                                <div className="warn">
                                    <span className="wIcon">
                                        <FiAlertCircle />
                                    </span>
                                    <div className="wText">
                                        <div className="wTitle">
                                            Why var fails here
                                        </div>
                                        <div className="wSub">
                                            <span className="mono">var i</span>{" "}
                                            is function scoped, not block
                                            scoped. All callbacks close over the
                                            same <span className="mono">i</span>
                                            . By the time callbacks run, loop is
                                            finished and{" "}
                                            <span className="mono">i</span> is
                                            3.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Closures for private data
                                </h3>

                                <p className="p">
                                    Closures can hide data without classes. This
                                    is a common pattern for "private" variables.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - private state
                                    </div>
                                    <pre className="code">{`function createUser(username) {
  let password = "secret";

  return {
    getUsername() {
      return username;
    },
    checkPassword(p) {
      return p === password;
    },
    setPassword(p) {
      password = p;
    },
  };
}

const u = createUser("a2rp");
u.getUsername(); // "a2rp"
u.checkPassword("secret"); // true
u.password; // undefined`}</pre>
                                </div>

                                <div className="finalNote">
                                    The object methods keep access to{" "}
                                    <span className="mono">password</span> via
                                    closure, but outside code cannot access it
                                    directly.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Performance and memory notes
                                </h3>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Memory retention
                                        </div>
                                        <p className="miniText">
                                            If a closure references large
                                            objects, they stay in memory while
                                            the closure is reachable. This can
                                            cause memory leaks if not cleaned
                                            up.
                                        </p>
                                    </div>

                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Good practice
                                        </div>
                                        <p className="miniText">
                                            Do not keep unused closures in
                                            global variables. Clear references
                                            when done.
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
                                        <span className="mono">IIFE</span> -
                                        Immediately Invoked Function Expression
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">TDZ</span> -
                                        Temporal Dead Zone
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">Scope</span> -
                                        Where a variable can be accessed
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    How to say it confidently
                                </h3>
                                <ul className="list">
                                    <li>
                                        "Closure is created when a function
                                        retains access to variables from its
                                        lexical scope after the outer function
                                        returns."
                                    </li>
                                    <li>
                                        "Closures keep references to variables,
                                        not copies. That is why updated values
                                        are visible."
                                    </li>
                                    <li>
                                        "Callbacks work because closures keep
                                        the required scope alive until the
                                        callback executes."
                                    </li>
                                </ul>

                                <div className="quote">
                                    <span className="qIcon">
                                        <FiCode />
                                    </span>
                                    <div className="qText">
                                        If you understand closures, you will
                                        stop guessing in async code.
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default Closures;
