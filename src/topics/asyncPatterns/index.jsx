// src/topics/asyncPatterns/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiZap,
    FiCpu,
    FiRepeat,
    FiAlertCircle,
    FiCheckCircle,
    FiClock,
    FiLayers,
    FiShuffle,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const AsyncPatterns = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Async patterns",
            sub: "Async patterns are ways to structure non blocking JavaScript code. They help you handle I O, network calls, timers, and user events without freezing the UI.",
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
        <Styled.Wrapper id="async-patterns">
            <div className="top">
                <h2 className="title">Async patterns</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiZap /> Non blocking flow
                    </span>
                    <span className="pill">
                        <FiRepeat /> Manage sequences
                    </span>
                    <span className="pill">
                        <FiLayers /> Errors + results
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="async-patterns-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                beginner explanations and real code examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="async-patterns-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">Meaning</h3>
                                <p className="p">
                                    <strong>Async</strong> means your code
                                    starts an operation now and continues later
                                    when the result is ready.
                                    <br />
                                    JavaScript stays responsive while waiting
                                    for things like:
                                    <br />- network requests
                                    <br />- file operations
                                    <br />- timers
                                    <br />- user events
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Non blocking
                                        </div>
                                        <p className="miniText">
                                            The main thread does not sit idle
                                            waiting. It keeps running other
                                            tasks.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Later delivery
                                        </div>
                                        <p className="miniText">
                                            Results arrive through callbacks,
                                            promises, or async await.
                                        </p>
                                    </div>
                                </div>

                                <div className="warn">
                                    <span className="wIcon">
                                        <FiAlertCircle />
                                    </span>
                                    <div className="wText">
                                        <div className="wTitle">
                                            Async is not parallel by default
                                        </div>
                                        <div className="wSub">
                                            Async means "do not block while
                                            waiting". Parallel means "run at the
                                            same time". In browsers, JavaScript
                                            runs on one main thread, but the
                                            platform can do work outside the
                                            thread and notify you later.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">What makes JS async work</h3>
                                <p className="p">
                                    This repo will cover event loop separately,
                                    but for async patterns you should remember
                                    this pipeline:
                                </p>

                                <div className="flowStrip">
                                    <div className="step">
                                        <FiCpu />
                                        <div>
                                            <div className="sHead">
                                                Call stack
                                            </div>
                                            <div className="sSub">
                                                Runs synchronous code now
                                            </div>
                                        </div>
                                    </div>

                                    <div className="step">
                                        <FiClock />
                                        <div>
                                            <div className="sHead">
                                                Web APIs
                                            </div>
                                            <div className="sSub">
                                                Timers, fetch, DOM events
                                            </div>
                                        </div>
                                    </div>

                                    <div className="step">
                                        <FiLayers />
                                        <div>
                                            <div className="sHead">Queues</div>
                                            <div className="sSub">
                                                Microtasks and macrotasks
                                            </div>
                                        </div>
                                    </div>

                                    <div className="step">
                                        <FiRepeat />
                                        <div>
                                            <div className="sHead">
                                                Event loop
                                            </div>
                                            <div className="sSub">
                                                Pushes ready callbacks to stack
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="finalNote">
                                    Patterns are basically ways to control order
                                    of execution and error handling across this
                                    pipeline.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Pattern 1 - Callbacks</h3>
                                <p className="p">
                                    A <strong>callback</strong> is a function
                                    you pass to another function, to be called
                                    later when work finishes.
                                    <br />
                                    Example - timers and DOM event listeners.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Callback example
                                    </div>
                                    <pre className="code">{`setTimeout(() => {
  console.log("runs later");
}, 1000);

document.addEventListener("click", () => {
  console.log("clicked");
});`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Strength
                                        </div>
                                        <p className="miniText">
                                            Simple and direct for single async
                                            step.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Weakness
                                        </div>
                                        <p className="miniText">
                                            Nested callbacks create "callback
                                            hell" and messy error handling.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Pattern 2 - Promises</h3>
                                <p className="p">
                                    A <strong>promise</strong> represents a
                                    future value. It has states:
                                    <br />- pending
                                    <br />- fulfilled
                                    <br />- rejected
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">Promise chain</div>
                                    <pre className="code">{`fetch("/api/user")
  .then((res) => res.json())
  .then((data) => {
    console.log("user", data);
  })
  .catch((err) => {
    console.log("error", err);
  })
  .finally(() => {
    console.log("always runs");
  });`}</pre>
                                </div>

                                <div className="termGrid">
                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">then</span>
                                            <span className="tag">Success</span>
                                        </div>
                                        <p className="tBody">
                                            Runs when promise is fulfilled and
                                            returns a new promise for chaining.
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">catch</span>
                                            <span className="tag">Error</span>
                                        </div>
                                        <p className="tBody">
                                            Handles rejection or errors thrown
                                            in previous steps.
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">
                                                finally
                                            </span>
                                            <span className="tag">Cleanup</span>
                                        </div>
                                        <p className="tBody">
                                            Runs regardless of success or
                                            failure. Useful for cleanup.
                                        </p>
                                    </div>
                                </div>

                                <div className="finalNote">
                                    Promise callbacks run in the microtask
                                    queue, which usually runs before macrotasks.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Pattern 3 - Async and await
                                </h3>
                                <p className="p">
                                    <strong>async await</strong> is syntax built
                                    on promises. It makes async code read like
                                    synchronous code.
                                    <br />
                                    Rule - <span className="mono">
                                        await
                                    </span>{" "}
                                    pauses the async function, not the whole
                                    program.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Async await example
                                    </div>
                                    <pre className="code">{`async function loadUser() {
  try {
    const res = await fetch("/api/user");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("error", err);
    return null;
  }
}

loadUser().then((user) => console.log(user));`}</pre>
                                </div>

                                <div className="warn">
                                    <span className="wIcon">
                                        <FiAlertCircle />
                                    </span>
                                    <div className="wText">
                                        <div className="wTitle">
                                            Common beginner mistake
                                        </div>
                                        <div className="wSub">
                                            Forgetting to handle errors. Always
                                            use try catch in async functions or
                                            return the promise and handle with
                                            catch.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Pattern 4 - Sequencing styles
                                </h3>
                                <p className="p">
                                    Most real projects need control over order.
                                    These are the common sequencing styles.
                                </p>

                                <div className="qaGrid">
                                    <div className="qa">
                                        <div className="q">Sequential</div>
                                        <div className="a">
                                            Do A, wait, then do B, wait, then C.
                                        </div>
                                    </div>
                                    <div className="qa">
                                        <div className="q">Parallel</div>
                                        <div className="a">
                                            Start A, B, C together and wait for
                                            results.
                                        </div>
                                    </div>
                                    <div className="qa">
                                        <div className="q">Race</div>
                                        <div className="a">
                                            Start many tasks and use the first
                                            one that finishes.
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Parallel with Promise.all
                                    </div>
                                    <pre className="code">{`async function loadAll() {
  const [user, orders, cart] = await Promise.all([
    fetch("/api/user").then((r) => r.json()),
    fetch("/api/orders").then((r) => r.json()),
    fetch("/api/cart").then((r) => r.json()),
  ]);

  return { user, orders, cart };
}`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Promise.all behavior
                                        </div>
                                        <p className="miniText">
                                            If any promise rejects, the whole
                                            Promise.all rejects.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Promise.allSettled behavior
                                        </div>
                                        <p className="miniText">
                                            Waits for all promises and gives
                                            both success and failure results.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Pattern 5 - Retry and backoff
                                </h3>
                                <p className="p">
                                    A <strong>retry</strong> pattern repeats a
                                    failing operation.
                                    <br />A <strong>backoff</strong> adds
                                    increasing delays between retries so you do
                                    not spam the server.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Retry with simple backoff
                                    </div>
                                    <pre className="code">{`async function retry(fn, maxTries = 3) {
  let attempt = 0;

  while (attempt < maxTries) {
    try {
      return await fn();
    } catch (err) {
      attempt += 1;
      if (attempt >= maxTries) throw err;

      const delayMs = 300 * attempt;
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
}

// usage
// retry(() => fetch("/api/ping"), 3)`}</pre>
                                </div>

                                <div className="finalNote">
                                    Real systems also cap retries and include
                                    jitter to avoid synchronized retry storms.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Pattern 6 - Cancellation</h3>
                                <p className="p">
                                    Sometimes you start async work, then you no
                                    longer need it, like user typing in search.
                                    <br />
                                    In fetch, the common cancellation tool is{" "}
                                    <strong>AbortController</strong>.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        AbortController example
                                    </div>
                                    <pre className="code">{`const controller = new AbortController();
const signal = controller.signal;

fetch("/api/search?q=js", { signal })
  .then((r) => r.json())
  .then(console.log)
  .catch((err) => {
    if (err.name === "AbortError") {
      console.log("request aborted");
      return;
    }
    console.log("error", err);
  });

// later
controller.abort();`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Why cancel
                                        </div>
                                        <p className="miniText">
                                            Saves bandwidth, prevents race bugs,
                                            and keeps UI correct.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Common place
                                        </div>
                                        <p className="miniText">
                                            Search boxes and auto complete.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Pattern 7 - Avoid race bugs
                                </h3>
                                <p className="p">
                                    A <strong>race</strong> bug happens when
                                    older responses arrive after newer ones and
                                    overwrite the UI with stale data.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Simple "latest only" guard
                                    </div>
                                    <pre className="code">{`let requestId = 0;

async function search(q) {
  const id = ++requestId;
  const res = await fetch("/api/search?q=" + encodeURIComponent(q));
  const data = await res.json();

  // only apply latest response
  if (id !== requestId) return;

  console.log("apply", data);
}`}</pre>
                                </div>

                                <div className="finalNote">
                                    Cancellation plus latest only guards are the
                                    safest combo in real UI apps.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Pattern 8 - Debounce and throttle
                                </h3>
                                <p className="p">
                                    These patterns control how often a function
                                    runs.
                                    <br />- debounce - wait until user stops
                                    triggering
                                    <br />- throttle - run at most once per time
                                    window
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Debounce example use
                                        </div>
                                        <p className="miniText">
                                            Search input. Call API only after
                                            user stops typing for 300ms.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Throttle example use
                                        </div>
                                        <p className="miniText">
                                            Scroll handler. Run at most once
                                            every 100ms.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Pattern 9 - Async iteration
                                </h3>
                                <p className="p">
                                    Sometimes you receive data over time, like
                                    paginated APIs or streams.
                                    <br />
                                    Async iteration pattern uses{" "}
                                    <span className="mono">for await</span>.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Async iterator example
                                    </div>
                                    <pre className="code">{`async function* pages() {
  yield await fetch("/api/page/1").then((r) => r.json());
  yield await fetch("/api/page/2").then((r) => r.json());
}

(async () => {
  for await (const page of pages()) {
    console.log("page", page);
  }
})();`}</pre>
                                </div>

                                <div className="finalNote">
                                    Generators are powerful for controlling
                                    async flows, but promises and async await
                                    cover most app needs.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Terms and full forms</h3>
                                <div className="abbrGrid">
                                    <div className="abbr">
                                        <span className="mono">I O</span> -
                                        Input Output
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">API</span> -
                                        Application Programming Interface
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">HTTP</span> -
                                        Hypertext Transfer Protocol
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">JSON</span> -
                                        JavaScript Object Notation
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">DOM</span> -
                                        Document Object Model
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">CPU</span> -
                                        Central Processing Unit
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    How to say it confidently
                                </h3>
                                <ul className="list">
                                    <li>
                                        "Async patterns control ordering, error
                                        handling, and cleanup for non blocking
                                        operations."
                                    </li>
                                    <li>
                                        "Promises and async await are about
                                        composing async flows without callback
                                        nesting."
                                    </li>
                                    <li>
                                        "For UI correctness, use cancellation or
                                        latest only guards to prevent race
                                        bugs."
                                    </li>
                                    <li>
                                        "Promise.all is parallel but fails fast,
                                        Promise.allSettled gives complete
                                        results."
                                    </li>
                                </ul>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Mini practice</h3>
                                <div className="practice">
                                    <div className="pRow">
                                        <span className="label">Try</span>
                                        <span className="value">
                                            You type fast in a search box and
                                            see old results flashing. Which
                                            pattern fixes it best?
                                        </span>
                                    </div>
                                    <div className="pRow">
                                        <span className="label">Answer</span>
                                        <span className="value">
                                            Debounce plus AbortController or a
                                            latest only guard.
                                        </span>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Quick mental model</h3>
                                <div className="mentalGrid">
                                    <div className="mCard">
                                        <div className="mTop">
                                            <FiShuffle />
                                            <div className="mTitle">
                                                Ordering problems
                                            </div>
                                        </div>
                                        <div className="mText">
                                            Use sequencing patterns -
                                            sequential, parallel, race.
                                        </div>
                                    </div>

                                    <div className="mCard">
                                        <div className="mTop">
                                            <FiAlertCircle />
                                            <div className="mTitle">
                                                Failure problems
                                            </div>
                                        </div>
                                        <div className="mText">
                                            Use retries, backoff, and proper
                                            error handling.
                                        </div>
                                    </div>

                                    <div className="mCard">
                                        <div className="mTop">
                                            <FiClock />
                                            <div className="mTitle">
                                                Too frequent triggers
                                            </div>
                                        </div>
                                        <div className="mText">
                                            Use debounce or throttle to control
                                            calls.
                                        </div>
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

export default AsyncPatterns;
