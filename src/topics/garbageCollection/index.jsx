// src/topics/garbageCollection/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiTrash2,
    FiDatabase,
    FiCpu,
    FiZap,
    FiAlertCircle,
    FiCheckCircle,
    FiLink,
    FiClock,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const GarbageCollection = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Garbage collection",
            sub: "Garbage collection is how JavaScript automatically frees memory that is no longer reachable by your program. It prevents you from manually freeing memory, but you still must avoid keeping unnecessary references.",
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
        <Styled.Wrapper id="garbage-collection">
            <div className="top">
                <h2 className="title">Garbage collection</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiTrash2 /> Auto memory cleanup
                    </span>
                    <span className="pill">
                        <FiLink /> Reachability based
                    </span>
                    <span className="pill">
                        <FiZap /> Avoid memory leaks
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="garbage-collection-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                deep beginner friendly explanation and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="garbage-collection-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">Meaning</h3>
                                <p className="p">
                                    <strong>Garbage collection</strong> is the
                                    process of finding objects that your code
                                    can no longer use and freeing their memory.
                                    <br />
                                    JavaScript does this automatically, because
                                    JS has automatic memory management.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            The simple rule
                                        </div>
                                        <p className="miniText">
                                            If an object is{" "}
                                            <strong>reachable</strong> from your
                                            program, it must stay in memory. If
                                            it is not reachable, it can be
                                            collected.
                                        </p>
                                    </div>

                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Why leaks still happen
                                        </div>
                                        <p className="miniText">
                                            Garbage collector removes memory
                                            only when there are no references.
                                            If you accidentally keep references,
                                            memory stays forever.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Stack vs heap - quick model
                                </h3>

                                <div className="insideGrid">
                                    <div className="inside">
                                        <div className="insideTop">
                                            <FiCpu />
                                            <span className="insideTitle">
                                                Stack
                                            </span>
                                        </div>
                                        <div className="insideText">
                                            Stores function call frames and
                                            primitive values during execution.
                                            Very fast. Managed by push and pop
                                            as functions call and return.
                                        </div>
                                    </div>

                                    <div className="inside">
                                        <div className="insideTop">
                                            <FiDatabase />
                                            <span className="insideTitle">
                                                Heap
                                            </span>
                                        </div>
                                        <div className="insideText">
                                            Stores objects, arrays, functions,
                                            and closures. Garbage collection
                                            mostly deals with heap memory.
                                        </div>
                                    </div>

                                    <div className="inside">
                                        <div className="insideTop">
                                            <FiLink />
                                            <span className="insideTitle">
                                                References
                                            </span>
                                        </div>
                                        <div className="insideText">
                                            Variables on the stack often point
                                            to objects on the heap by reference.
                                            If references remain, objects
                                            remain.
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - heap object referenced by
                                        stack
                                    </div>
                                    <pre className="code">{`function makeUser() {
  const user = { name: "Ashish", role: "MERN" };
  return user;
}

const u = makeUser(); // u references the object on heap`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    How GC decides what to remove
                                </h3>
                                <p className="p">
                                    Modern JavaScript engines use{" "}
                                    <strong>reachability</strong>.
                                    <br />
                                    They start from a set of "roots" and mark
                                    everything reachable. Anything not marked is
                                    garbage.
                                </p>

                                <div className="termGrid">
                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">Roots</span>
                                            <span className="tag">Start</span>
                                        </div>
                                        <p className="tBody">
                                            Roots are always reachable starting
                                            points. Examples - global object,
                                            current call stack variables, active
                                            closures, active timers and
                                            listeners.
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">Mark</span>
                                            <span className="tag">Visit</span>
                                        </div>
                                        <p className="tBody">
                                            Engine visits objects reachable from
                                            roots and marks them as "keep".
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">Sweep</span>
                                            <span className="tag">Free</span>
                                        </div>
                                        <p className="tBody">
                                            Engine frees memory for objects that
                                            were not marked.
                                        </p>
                                    </div>
                                </div>

                                <div className="finalNote">
                                    This is commonly called "mark and sweep".
                                    You do not need to implement it, but you
                                    should understand reachability.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Generational GC - why most objects die young
                                </h3>
                                <p className="p">
                                    Engines optimize garbage collection using
                                    the idea that most objects are created and
                                    discarded quickly.
                                    <br />
                                    So memory is often split into:
                                    <br />- young generation - short lived
                                    objects
                                    <br />- old generation - long lived objects
                                </p>

                                <div className="flowGrid">
                                    <div className="flow">
                                        <div className="flowTitle">
                                            Minor GC
                                        </div>
                                        <ul className="list">
                                            <li>
                                                Runs frequently on young objects
                                            </li>
                                            <li>Usually fast</li>
                                            <li>Collects temporary objects</li>
                                        </ul>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTitle">
                                            Major GC
                                        </div>
                                        <ul className="list">
                                            <li>
                                                Runs less often on old objects
                                            </li>
                                            <li>Can take longer</li>
                                            <li>
                                                Happens when old space grows
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="warn">
                                    <span className="wIcon">
                                        <FiAlertCircle />
                                    </span>
                                    <div className="wText">
                                        <div className="wTitle">
                                            Stop the world
                                        </div>
                                        <div className="wSub">
                                            Some GC work can pause JavaScript
                                            execution briefly. Engines work hard
                                            to reduce this, but heavy memory
                                            pressure can still cause jank.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Common memory leaks in JavaScript
                                </h3>
                                <p className="p">
                                    Garbage collection frees memory only when
                                    objects become unreachable. Leaks happen
                                    when objects remain reachable accidentally.
                                </p>

                                <div className="qaGrid">
                                    <div className="qa">
                                        <div className="q">
                                            Global references
                                        </div>
                                        <div className="a">
                                            Storing large objects on global
                                            variables keeps them alive for the
                                            entire page lifetime.
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            Timers not cleared
                                        </div>
                                        <div className="a">
                                            setInterval keeps running and keeps
                                            captured references alive until
                                            cleared.
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            Event listeners not removed
                                        </div>
                                        <div className="a">
                                            A listener can keep a closure alive.
                                            Always remove listeners when not
                                            needed.
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            Closures holding big data
                                        </div>
                                        <div className="a">
                                            A closure can keep references to
                                            large arrays or objects even when
                                            you think you are done with them.
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - leak with setInterval
                                    </div>
                                    <pre className="code">{`function start() {
  const big = new Array(1e6).fill("x");

  const id = setInterval(() => {
    // big is captured by closure and kept alive
    console.log(big.length);
  }, 1000);

  // Fix later: clearInterval(id)
}`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Fix - clear the timer when done
                                    </div>
                                    <pre className="code">{`function start() {
  const big = new Array(1e6).fill("x");

  const id = setInterval(() => {
    console.log(big.length);
  }, 1000);

  setTimeout(() => {
    clearInterval(id); // now big can become unreachable
  }, 5000);
}`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    WeakMap and WeakSet - memory friendly
                                    references
                                </h3>
                                <p className="p">
                                    Sometimes you want to associate metadata
                                    with objects, but you do not want that
                                    association to keep the object alive.
                                    <br />
                                    <strong>WeakMap</strong> and{" "}
                                    <strong>WeakSet</strong> help with that.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            WeakMap - idea
                                        </div>
                                        <p className="miniText">
                                            Keys are objects. If the key object
                                            becomes unreachable elsewhere, GC
                                            can collect it and the WeakMap entry
                                            disappears.
                                        </p>
                                    </div>

                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Where it helps
                                        </div>
                                        <p className="miniText">
                                            Caching, private data, DOM element
                                            metadata, without accidental memory
                                            leaks.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - cache without preventing GC
                                    </div>
                                    <pre className="code">{`const cache = new WeakMap();

function expensive(obj) {
  if (cache.has(obj)) return cache.get(obj);

  const result = { computed: true };
  cache.set(obj, result);
  return result;
}

let o = { id: 1 };
expensive(o);

// later
o = null; // object can be collected, cache entry can disappear`}</pre>
                                </div>

                                <div className="finalNote">
                                    WeakMap is not for iteration and not for
                                    replacing normal maps. It is a tool to avoid
                                    keeping objects alive by mistake.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Practical debugging tips</h3>
                                <div className="tipGrid">
                                    <div className="tip">
                                        <div className="tipTop">
                                            <FiClock />
                                            <div className="tipTitle">
                                                Watch growth over time
                                            </div>
                                        </div>
                                        <div className="tipText">
                                            If memory usage only grows and never
                                            falls during repeated actions, you
                                            likely keep references
                                            unintentionally.
                                        </div>
                                    </div>

                                    <div className="tip">
                                        <div className="tipTop">
                                            <FiLink />
                                            <div className="tipTitle">
                                                Track who holds reference
                                            </div>
                                        </div>
                                        <div className="tipText">
                                            Ask - what variable, closure, timer,
                                            listener, or cache still points to
                                            this object.
                                        </div>
                                    </div>

                                    <div className="tip">
                                        <div className="tipTop">
                                            <FiCpu />
                                            <div className="tipTitle">
                                                Clean up on unmount
                                            </div>
                                        </div>
                                        <div className="tipText">
                                            In React, always clear intervals,
                                            timeouts, subscriptions, and
                                            listeners in cleanup.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Terms and full forms</h3>
                                <div className="abbrGrid">
                                    <div className="abbr">
                                        <span className="mono">GC</span> -
                                        Garbage Collection
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">JS</span> -
                                        JavaScript
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">RAM</span> -
                                        Random Access Memory
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">DOM</span> -
                                        Document Object Model
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">V8</span> -
                                        JavaScript engine used by Chrome and
                                        Node.js
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    How to say it confidently
                                </h3>
                                <ul className="list">
                                    <li>
                                        "Garbage collection is reachability
                                        based - if nothing can reach an object
                                        from roots, it can be collected."
                                    </li>
                                    <li>
                                        "Leaks happen when we keep references
                                        alive - commonly via globals, closures,
                                        timers, and event listeners."
                                    </li>
                                    <li>
                                        "Engines use generational GC - most
                                        objects die young, so minor collections
                                        are frequent and fast."
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

export default GarbageCollection;
