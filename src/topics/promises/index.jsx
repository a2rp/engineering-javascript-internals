// src/topics/promises/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiZap,
    FiClock,
    FiCheckCircle,
    FiGitBranch,
    FiRefreshCw,
    FiAlertCircle,
    FiCode,
    FiLayers,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const Promises = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Promises",
            sub: "A Promise is a JavaScript object that represents a value that will be available later. It gives you a clean way to handle async work without nesting callbacks.",
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
        <Styled.Wrapper id="promises">
            <div className="top">
                <h2 className="title">Promises</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiClock /> Future value
                    </span>
                    <span className="pill">
                        <FiZap /> Async control
                    </span>
                    <span className="pill">
                        <FiLayers /> Microtasks
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="promises-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                beginner explanation, patterns, and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="promises-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">Meaning</h3>
                                <p className="p">
                                    A <strong>Promise</strong> is like a receipt
                                    for an async operation.
                                    <br />
                                    You start some work now, and you get a
                                    Promise back immediately.
                                    <br />
                                    Later, the Promise settles and gives you:
                                    <br />- success value
                                    <br />- failure reason
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Why Promises exist
                                        </div>
                                        <p className="miniText">
                                            They avoid "callback hell" and make
                                            async code predictable using
                                            chaining.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            What you get
                                        </div>
                                        <p className="miniText">
                                            A single object that represents the
                                            future result of your async work.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Promise states</h3>

                                <div className="stateGrid">
                                    <div className="state">
                                        <div className="sTop">
                                            <FiRefreshCw />
                                            <span className="sTitle">
                                                pending
                                            </span>
                                        </div>
                                        <div className="sText">
                                            The Promise is created and the async
                                            work is still running.
                                        </div>
                                    </div>

                                    <div className="state">
                                        <div className="sTop">
                                            <FiCheckCircle />
                                            <span className="sTitle">
                                                fulfilled
                                            </span>
                                        </div>
                                        <div className="sText">
                                            The Promise completed successfully
                                            and has a value.
                                        </div>
                                    </div>

                                    <div className="state">
                                        <div className="sTop">
                                            <FiAlertCircle />
                                            <span className="sTitle">
                                                rejected
                                            </span>
                                        </div>
                                        <div className="sText">
                                            The Promise failed and has an error
                                            reason.
                                        </div>
                                    </div>
                                </div>

                                <div className="finalNote">
                                    A Promise settles only once. After it is
                                    fulfilled or rejected, it cannot go back to
                                    pending.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Creating a Promise (producer)
                                </h3>
                                <p className="p">
                                    A Promise is created using{" "}
                                    <span className="mono">new Promise</span>.
                                    <br />
                                    The function inside is called the{" "}
                                    <strong>executor</strong>.
                                    <br />
                                    It receives two functions:
                                    <br />-{" "}
                                    <span className="mono">resolve</span> for
                                    success
                                    <br />- <span className="mono">
                                        reject
                                    </span>{" "}
                                    for failure
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - create a Promise
                                    </div>
                                    <pre className="code">{`const p = new Promise((resolve, reject) => {
  const ok = true;

  setTimeout(() => {
    if (ok) resolve("data loaded");
    else reject(new Error("failed"));
  }, 500);
});`}</pre>
                                </div>

                                <div className="warn">
                                    <span className="wIcon">
                                        <FiAlertCircle />
                                    </span>
                                    <div className="wText">
                                        <div className="wTitle">
                                            Executor runs immediately
                                        </div>
                                        <div className="wSub">
                                            When you create a Promise, the
                                            executor function starts right away.
                                            Promises do not wait for you to call
                                            <span className="mono">then</span>.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Consuming a Promise (then, catch, finally)
                                </h3>

                                <p className="p">
                                    To use a Promise result, you attach
                                    handlers:
                                    <br />- <span className="mono">
                                        then
                                    </span>{" "}
                                    for fulfilled
                                    <br />- <span className="mono">
                                        catch
                                    </span>{" "}
                                    for rejected
                                    <br />-{" "}
                                    <span className="mono">finally</span> for
                                    cleanup
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - consume a Promise
                                    </div>
                                    <pre className="code">{`p
  .then((value) => {
    console.log("success:", value);
  })
  .catch((err) => {
    console.log("error:", err.message);
  })
  .finally(() => {
    console.log("done");
  });`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            finally is for
                                        </div>
                                        <p className="miniText">
                                            Cleanup work like stopping loaders,
                                            closing resources, or logging.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            catch is for
                                        </div>
                                        <p className="miniText">
                                            Handling any rejection in the chain.
                                            One catch can cover above steps.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Chaining - why then returns a Promise
                                </h3>

                                <p className="p">
                                    The superpower of Promises is chaining.
                                    <br />
                                    <span className="mono">then</span> returns a
                                    new Promise. That allows you to write steps
                                    in a row.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - chain steps
                                    </div>
                                    <pre className="code">{`fetch("/api/user")
  .then((res) => res.json())
  .then((user) => {
    console.log("user:", user.name);
    return fetch("/api/orders");
  })
  .then((res) => res.json())
  .then((orders) => {
    console.log("orders:", orders.length);
  })
  .catch((err) => {
    console.log("chain error:", err.message);
  });`}</pre>
                                </div>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiGitBranch />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">Rule</div>
                                        <div className="cSub">
                                            If you return a value from{" "}
                                            <span className="mono">then</span>,
                                            the next{" "}
                                            <span className="mono">then</span>{" "}
                                            gets that value.
                                            <br />
                                            If you return a Promise, the next{" "}
                                            <span className="mono">
                                                then
                                            </span>{" "}
                                            waits for it.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Error handling and propagation
                                </h3>

                                <p className="p">
                                    Errors propagate down the chain until a{" "}
                                    <span className="mono">catch</span> handles
                                    them.
                                    <br />
                                    This includes thrown errors inside{" "}
                                    <span className="mono">then</span>.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - thrown error becomes rejection
                                    </div>
                                    <pre className="code">{`Promise.resolve(10)
  .then((n) => {
    if (n === 10) throw new Error("boom");
    return n;
  })
  .then((n) => console.log("never runs", n))
  .catch((e) => console.log("caught:", e.message));`}</pre>
                                </div>

                                <div className="finalNote">
                                    In Promise chains, "throw" is like "reject".
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Microtask behavior</h3>

                                <p className="p">
                                    Promise callbacks run in the{" "}
                                    <strong>microtask queue</strong>.
                                    <br />
                                    Microtasks run after the current call stack
                                    is empty, and before macrotasks like{" "}
                                    <span className="mono">setTimeout</span>.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - Promise vs setTimeout order
                                    </div>
                                    <pre className="code">{`console.log("A");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("B");

// Output:
// A
// B
// promise
// timeout`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Microtask
                                        </div>
                                        <p className="miniText">
                                            Promise callbacks, queueMicrotask,
                                            MutationObserver
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Macrotask
                                        </div>
                                        <p className="miniText">
                                            setTimeout, setInterval, I/O,
                                            rendering tasks
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Promise helpers (static methods)
                                </h3>

                                <div className="qaGrid">
                                    <div className="qa">
                                        <div className="q">
                                            Promise.resolve(value)
                                        </div>
                                        <div className="a">
                                            Creates a fulfilled Promise with
                                            value
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            Promise.reject(error)
                                        </div>
                                        <div className="a">
                                            Creates a rejected Promise with
                                            error
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">Promise.all</div>
                                        <div className="a">
                                            Wait for all, reject if any fails
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">Promise.race</div>
                                        <div className="a">
                                            First one to settle wins
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            Promise.allSettled
                                        </div>
                                        <div className="a">
                                            Wait for all, never rejects
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">Promise.any</div>
                                        <div className="a">
                                            First fulfilled wins, rejects if all
                                            fail
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - Promise.all
                                    </div>
                                    <pre className="code">{`const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);

Promise.all([p1, p2])
  .then(([a, b]) => console.log(a + b))
  .catch((e) => console.log("error:", e.message));`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Async and await connection
                                </h3>
                                <p className="p">
                                    <span className="mono">async</span> and{" "}
                                    <span className="mono">await</span> are
                                    syntax built on top of Promises.
                                    <br />
                                    An <span className="mono">async</span>{" "}
                                    function always returns a Promise.
                                    <br />
                                    <span className="mono">await</span> pauses
                                    inside the async function until the Promise
                                    settles.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - async and await
                                    </div>
                                    <pre className="code">{`async function loadUser() {
  const res = await fetch("/api/user");
  const user = await res.json();
  return user.name;
}

loadUser().then((name) => console.log("name:", name));`}</pre>
                                </div>

                                <div className="finalNote">
                                    async and await look synchronous, but they
                                    still use the Promise microtask behavior.
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
                                        <span className="mono">I/O</span> -
                                        Input Output
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">HTTP</span> -
                                        HyperText Transfer Protocol
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">JSON</span> -
                                        JavaScript Object Notation
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">async</span> -
                                        asynchronous
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    How to say it confidently
                                </h3>
                                <ul className="list">
                                    <li>
                                        "A Promise represents a future value and
                                        it settles once as fulfilled or
                                        rejected."
                                    </li>
                                    <li>
                                        "then returns a new Promise, which
                                        enables chaining."
                                    </li>
                                    <li>
                                        "Promise callbacks run as microtasks, so
                                        they execute before setTimeout
                                        callbacks."
                                    </li>
                                    <li>
                                        "async and await are built on top of
                                        Promises, async functions always return
                                        a Promise."
                                    </li>
                                </ul>

                                <div className="closing">
                                    <FiCode />
                                    <span>
                                        Practice tip - predict output order of
                                        mixed console.log, Promise.then, and
                                        setTimeout. That single skill fixes most
                                        async confusion.
                                    </span>
                                </div>
                            </section>
                        </div>
                    </div>
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default Promises;
