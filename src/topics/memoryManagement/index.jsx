// src/topics/memoryManagement/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiDatabase,
    FiCpu,
    FiLayers,
    FiTrash2,
    FiAlertCircle,
    FiCheckCircle,
    FiZap,
    FiActivity,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const MemoryManagement = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Memory management",
            sub: "Memory management means how JavaScript allocates, uses, and frees memory while your program runs. Understanding stack vs heap, references, and garbage collection helps you avoid memory leaks and weird performance issues.",
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
        <Styled.Wrapper id="memory-management">
            <div className="top">
                <h2 className="title">Memory management</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiLayers /> Stack vs heap
                    </span>
                    <span className="pill">
                        <FiDatabase /> References
                    </span>
                    <span className="pill">
                        <FiTrash2 /> Garbage collection
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="memory-management-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                beginner explanation and practical examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="memory-management-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">Meaning</h3>
                                <p className="p">
                                    JavaScript needs memory to store values like
                                    numbers, strings, objects, arrays, and
                                    functions.
                                    <br />
                                    <strong>Memory management</strong> is about:
                                    <br />- allocating memory when values are
                                    created
                                    <br />- keeping memory while values are
                                    still reachable
                                    <br />- freeing memory when values are no
                                    longer needed
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Why you should care
                                        </div>
                                        <p className="miniText">
                                            Memory issues cause slow apps,
                                            browser tab crashes, and random lag.
                                            Most bugs happen because something
                                            stays referenced by mistake.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            What you control
                                        </div>
                                        <p className="miniText">
                                            JavaScript frees memory
                                            automatically, but you control
                                            references. If you keep references
                                            alive, memory cannot be freed.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Stack vs heap</h3>

                                <p className="p">
                                    A simple mental model:
                                    <br />- <strong>Stack</strong> stores
                                    function call frames and small fixed size
                                    values
                                    <br />- <strong>Heap</strong> stores objects
                                    and dynamic data
                                </p>

                                <div className="termGrid">
                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">Stack</span>
                                            <span className="tag">Fast</span>
                                        </div>
                                        <p className="tBody">
                                            Stack is managed like a stack data
                                            structure.
                                            <br />
                                            Each function call pushes a frame.
                                            When it returns, the frame is
                                            popped.
                                            <br />
                                            It is fast and predictable.
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">Heap</span>
                                            <span className="tag">
                                                Flexible
                                            </span>
                                        </div>
                                        <p className="tBody">
                                            Heap is a large pool of memory used
                                            for objects, arrays, functions,
                                            closures, and everything that can
                                            grow.
                                            <br />
                                            It is flexible but needs garbage
                                            collection.
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">
                                                Reference
                                            </span>
                                            <span className="tag">Pointer</span>
                                        </div>
                                        <p className="tBody">
                                            A reference is like an address to a
                                            heap object.
                                            <br />
                                            Variables often store references
                                            rather than full objects.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - primitives vs objects
                                    </div>
                                    <pre className="code">{`// primitives - usually stored directly
let a = 10;
let b = a;
b = 20;

// objects - variables hold references
let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 99;

console.log(a);    // 10
console.log(obj1); // { x: 99 }`}</pre>
                                </div>

                                <div className="finalNote">
                                    Primitive copy is value copy. Object copy is
                                    reference copy. This one idea explains a
                                    huge chunk of bugs.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Call stack and memory</h3>
                                <p className="p">
                                    Each running function has a stack frame that
                                    stores local variables and parameters.
                                    <br />
                                    When the function returns, its stack frame
                                    is removed. But heap objects referenced from
                                    somewhere else can stay alive.
                                </p>

                                <div className="stackBox">
                                    <div className="stackTitle">
                                        Stack frame mental model
                                    </div>
                                    <pre className="stackCode">{`function greet(name) {
  const msg = "hi " + name;
  return msg;
}

greet("A") creates a stack frame:
- name -> "A"
- msg  -> "hi A"

when greet returns, frame is popped`}</pre>
                                    <div className="stackNote">
                                        Stack frames are short-lived. Heap
                                        allocations can live long depending on
                                        references.
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Closures keep memory alive
                                </h3>
                                <p className="p">
                                    A <strong>closure</strong> happens when a
                                    function remembers variables from its outer
                                    scope.
                                    <br />
                                    That means outer variables cannot be freed
                                    while the inner function is still reachable.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - closure retaining memory
                                    </div>
                                    <pre className="code">{`function makeCounter() {
  let count = 0;

  return function inc() {
    count += 1;
    return count;
  };
}

const c = makeCounter();
c(); // 1
c(); // 2

// count stays alive because inc() still references it`}</pre>
                                </div>

                                <div className="warn">
                                    <span className="wIcon">
                                        <FiAlertCircle />
                                    </span>
                                    <div className="wText">
                                        <div className="wTitle">
                                            Closures are not bad
                                        </div>
                                        <div className="wSub">
                                            Closures are powerful and normal.
                                            The problem is keeping big data in a
                                            closure for too long.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Garbage collection basics
                                </h3>
                                <p className="p">
                                    <strong>GC</strong> - Garbage Collection. It
                                    is the engine process that frees heap memory
                                    that is no longer reachable.
                                    <br />
                                    Most engines use a "mark and sweep" idea:
                                    <br />- mark reachable objects from root
                                    references
                                    <br />- sweep the unmarked objects
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Root references
                                        </div>
                                        <p className="miniText">
                                            Roots are things like:
                                            <br />- global variables
                                            <br />- active stack variables
                                            <br />- closures that are reachable
                                            <br />- DOM references
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Reachable means alive
                                        </div>
                                        <p className="miniText">
                                            If an object can be reached by
                                            following references from roots, it
                                            stays. If not reachable, GC can free
                                            it.
                                        </p>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - unreachable object
                                    </div>
                                    <pre className="code">{`let user = { name: "A" };

// later
user = null;

// the old object { name: "A" } has no references now
// it becomes eligible for garbage collection`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Common memory leak patterns
                                </h3>

                                <div className="qaGrid">
                                    <div className="qa">
                                        <div className="q">
                                            Global growing arrays or maps
                                        </div>
                                        <div className="a">
                                            You keep pushing data to a global
                                            list and never remove it.
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            Timers not cleared
                                        </div>
                                        <div className="a">
                                            <span className="mono">
                                                setInterval
                                            </span>{" "}
                                            keeps running and holds references.
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            Event listeners not removed
                                        </div>
                                        <div className="a">
                                            Listeners keep closures alive and
                                            prevent objects from being freed.
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            Detached DOM nodes
                                        </div>
                                        <div className="a">
                                            You remove elements from DOM but
                                            still keep references in JS.
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - timer leak pattern
                                    </div>
                                    <pre className="code">{`function start() {
  const big = new Array(100000).fill("x");

  const id = setInterval(() => {
    // big is captured by closure
    console.log(big.length);
  }, 1000);

  // fix is to clear it when not needed
  return () => clearInterval(id);
}

const stop = start();
// later
stop();`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Practical checks and habits
                                </h3>

                                <div className="flowGrid">
                                    <div className="flow">
                                        <div className="flowTitle">
                                            What to do
                                        </div>
                                        <ul className="list">
                                            <li>
                                                Clear intervals and timeouts
                                            </li>
                                            <li>
                                                Remove event listeners on
                                                cleanup
                                            </li>
                                            <li>
                                                Avoid storing huge data in
                                                global scope
                                            </li>
                                            <li>
                                                Null references when large
                                                objects are done
                                            </li>
                                            <li>
                                                Use WeakMap for cache keyed by
                                                objects
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTitle">
                                            Debugging tools
                                        </div>
                                        <ul className="list">
                                            <li>
                                                Chrome DevTools - Memory tab
                                            </li>
                                            <li>Heap snapshot comparisons</li>
                                            <li>Allocation instrumentation</li>
                                            <li>
                                                Performance recordings for GC
                                                pauses
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="finalNote">
                                    Most memory problems are not about "GC is
                                    bad". They are about references that never
                                    die.
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
                                        <span className="mono">RAM</span> -
                                        Random Access Memory
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">DOM</span> -
                                        Document Object Model
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">JS</span> -
                                        JavaScript
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    How to say it confidently
                                </h3>
                                <ul className="list">
                                    <li>
                                        "Stack stores call frames and small
                                        values, heap stores objects and dynamic
                                        allocations."
                                    </li>
                                    <li>
                                        "Garbage collection frees heap objects
                                        that are no longer reachable from
                                        roots."
                                    </li>
                                    <li>
                                        "Memory leaks usually happen because
                                        some reference stays alive by mistake,
                                        like timers, listeners, or caches."
                                    </li>
                                </ul>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Mini practice</h3>
                                <div className="practice">
                                    <div className="pRow">
                                        <span className="label">Try</span>
                                        <span className="value">
                                            Why does{" "}
                                            <span className="mono">
                                                obj2 = obj1
                                            </span>{" "}
                                            copy changes back to{" "}
                                            <span className="mono">obj1</span>?
                                        </span>
                                    </div>
                                    <div className="pRow">
                                        <span className="label">Answer</span>
                                        <span className="value">
                                            Because objects are copied by
                                            reference, both variables point to
                                            the same heap object.
                                        </span>
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

export default MemoryManagement;
