// src/topics/prototypes/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiLayers,
    FiLink,
    FiBox,
    FiCpu,
    FiZap,
    FiCheckCircle,
    FiAlertCircle,
    FiCode,
    FiGitMerge,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const Prototypes = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Prototypes",
            sub: "JavaScript objects can share behavior through a prototype chain. When you access a property, JavaScript searches the object first, then walks up its prototypes until it finds the property or reaches null.",
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
        <Styled.Wrapper id="prototypes">
            <div className="top">
                <h2 className="title">Prototypes</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiLink /> Prototype chain lookup
                    </span>
                    <span className="pill">
                        <FiLayers /> Shared methods
                    </span>
                    <span className="pill">
                        <FiCpu /> Objects inherit behavior
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="prototypes-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                deep beginner explanation and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="prototypes-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">Meaning</h3>
                                <p className="p">
                                    In JavaScript, <strong>every object</strong>{" "}
                                    has a hidden link to another object called
                                    its <strong>prototype</strong>.
                                    <br />
                                    When you try to read a property, JavaScript
                                    does a lookup:
                                    <br />- check the object itself
                                    <br />- if not found, check the prototype
                                    <br />- keep going up the chain
                                    <br />- stop at{" "}
                                    <span className="mono">null</span>
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Why it exists
                                        </div>
                                        <p className="miniText">
                                            To share methods and properties
                                            without copying them into every
                                            object.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Common confusion
                                        </div>
                                        <p className="miniText">
                                            Prototype is not a class. It is just
                                            an object used for delegation.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Prototype chain in one picture
                                </h3>

                                <div className="chainBox">
                                    <div className="chainTitle">
                                        Property lookup order
                                    </div>
                                    <pre className="chainCode">{`obj
  |
  v
obj.[[Prototype]]  ->  (someObject)
  |
  v
someObject.[[Prototype]]  ->  (Object.prototype)
  |
  v
Object.prototype.[[Prototype]]  ->  null`}</pre>

                                    <div className="chainNote">
                                        JavaScript walks this chain when a
                                        property is missing on the current
                                        object.
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Key pieces - prototype, __proto__, prototype
                                    property
                                </h3>

                                <div className="termGrid">
                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">
                                                [[Prototype]]
                                            </span>
                                            <span className="tag">
                                                Internal
                                            </span>
                                        </div>
                                        <p className="tBody">
                                            The real internal link used by the
                                            engine. You do not access it
                                            directly in code.
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">
                                                __proto__
                                            </span>
                                            <span className="tag">Getter</span>
                                        </div>
                                        <p className="tBody">
                                            A legacy accessor that points to an
                                            object's prototype. Works, but
                                            prefer modern methods.
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">
                                                function.prototype
                                            </span>
                                            <span className="tag">
                                                Template
                                            </span>
                                        </div>
                                        <p className="tBody">
                                            Only functions have{" "}
                                            <span className="mono">
                                                prototype
                                            </span>{" "}
                                            property. It is used when you create
                                            objects with{" "}
                                            <span className="mono">new</span>.
                                        </p>
                                    </div>
                                </div>

                                <div className="warn">
                                    <span className="wIcon">
                                        <FiAlertCircle />
                                    </span>
                                    <div className="wText">
                                        <div className="wTitle">
                                            The biggest confusion
                                        </div>
                                        <div className="wSub">
                                            <span className="mono">
                                                obj.__proto__
                                            </span>{" "}
                                            is the object's prototype link.
                                            <br />
                                            <span className="mono">
                                                Fn.prototype
                                            </span>{" "}
                                            is a property on the function used
                                            as the prototype for objects created
                                            by{" "}
                                            <span className="mono">
                                                new Fn()
                                            </span>
                                            .
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Example 1 - basic delegation
                                </h3>

                                <div className="exampleBlock">
                                    <div className="exTitle">Code</div>
                                    <pre className="code">{`const animal = {
  speak() {
    return "sound";
  }
};

const dog = Object.create(animal);

dog.name = "Bruno";

dog.speak(); // "sound"
dog.hasOwnProperty("speak"); // false`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            What happened
                                        </div>
                                        <p className="miniText">
                                            <span className="mono">dog</span>{" "}
                                            does not have{" "}
                                            <span className="mono">speak</span>,
                                            so JS looks at{" "}
                                            <span className="mono">animal</span>
                                            and finds it there.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Why hasOwnProperty is useful
                                        </div>
                                        <p className="miniText">
                                            It tells you whether the property
                                            exists directly on the object or is
                                            coming from the prototype chain.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Example 2 - new, constructor, and prototype
                                </h3>

                                <p className="p">
                                    When you use{" "}
                                    <span className="mono">new</span>,
                                    JavaScript does 4 steps:
                                    <br />- create a new object
                                    <br />- set its prototype to{" "}
                                    <span className="mono">Fn.prototype</span>
                                    <br />- call the function with{" "}
                                    <span className="mono">this</span> bound to
                                    the new object
                                    <br />- return the object (unless you return
                                    a different object)
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">Code</div>
                                    <pre className="code">{`function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  return "hi " + this.name;
};

const u1 = new User("A");
const u2 = new User("B");

u1.sayHi(); // "hi A"
u2.sayHi(); // "hi B"`}</pre>
                                </div>

                                <div className="flowGrid">
                                    <div className="flow">
                                        <div className="flowTitle">
                                            Memory saving
                                        </div>
                                        <p className="flowText">
                                            <span className="mono">sayHi</span>{" "}
                                            exists once on{" "}
                                            <span className="mono">
                                                User.prototype
                                            </span>
                                            , and all users share it through the
                                            chain.
                                        </p>
                                    </div>
                                    <div className="flow">
                                        <div className="flowTitle">
                                            Lookup rule
                                        </div>
                                        <p className="flowText">
                                            If <span className="mono">u1</span>{" "}
                                            does not have{" "}
                                            <span className="mono">sayHi</span>,
                                            JS checks{" "}
                                            <span className="mono">
                                                User.prototype
                                            </span>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Shadowing - when object overrides prototype
                                </h3>

                                <div className="exampleBlock">
                                    <div className="exTitle">Code</div>
                                    <pre className="code">{`const base = { x: 10 };
const obj = Object.create(base);

obj.x; // 10 (from prototype)

obj.x = 99;
obj.x; // 99 (own property now)

delete obj.x;
obj.x; // 10 (prototype again)`}</pre>
                                </div>

                                <div className="finalNote">
                                    If a property exists on the object, it hides
                                    the same property on the prototype. This is
                                    called shadowing or overriding.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Important rules and common pitfalls
                                </h3>

                                <div className="qaGrid">
                                    <div className="qa">
                                        <div className="q">
                                            Does prototype lookup happen on
                                            writes?
                                        </div>
                                        <div className="a">
                                            Usually no. Writing{" "}
                                            <span className="mono">
                                                obj.x = ...
                                            </span>{" "}
                                            creates or updates an own property
                                            on <span className="mono">obj</span>
                                            .
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            Is prototype chain slow?
                                        </div>
                                        <div className="a">
                                            Usually not. Engines optimize
                                            heavily. Deep chains can be slower,
                                            but normal usage is fine.
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            Should I use __proto__?
                                        </div>
                                        <div className="a">
                                            Avoid in production. Prefer{" "}
                                            <span className="mono">
                                                Object.getPrototypeOf
                                            </span>{" "}
                                            and{" "}
                                            <span className="mono">
                                                Object.setPrototypeOf
                                            </span>
                                            .
                                        </div>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Modern prototype helpers
                                    </div>
                                    <pre className="code">{`const p = Object.getPrototypeOf(obj);
Object.setPrototypeOf(obj, otherProto);`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Quick practice</h3>

                                <div className="practice">
                                    <div className="pRow">
                                        <span className="label">Try</span>
                                        <span className="value">
                                            If <span className="mono">obj</span>{" "}
                                            has no{" "}
                                            <span className="mono">
                                                toString
                                            </span>
                                            , where does it come from?
                                        </span>
                                    </div>
                                    <div className="pRow">
                                        <span className="label">Answer</span>
                                        <span className="value">
                                            From{" "}
                                            <span className="mono">
                                                Object.prototype
                                            </span>{" "}
                                            through the prototype chain.
                                        </span>
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
                                        <span className="mono">proto</span> -
                                        Prototype (common short form)
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">
                                            [[Prototype]]
                                        </span>{" "}
                                        - Internal prototype link
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">OOP</span> -
                                        Object Oriented Programming
                                    </div>
                                </div>

                                <div className="finalNote">
                                    Prototype based inheritance in JS is
                                    delegation. Objects do not copy methods -
                                    they find them through the chain.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    How to say it confidently
                                </h3>
                                <ul className="list">
                                    <li>
                                        "When a property is missing on the
                                        object, JavaScript walks up the
                                        prototype chain until it finds it or
                                        reaches null."
                                    </li>
                                    <li>
                                        "Functions have a prototype property
                                        which becomes the [[Prototype]] of
                                        objects created with new."
                                    </li>
                                    <li>
                                        "Prototype is not a class - it is an
                                        object used for delegation and shared
                                        behavior."
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

export default Prototypes;
