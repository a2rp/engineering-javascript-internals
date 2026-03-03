// src/topics/es6PlusFeatures/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiZap,
    FiPackage,
    FiCode,
    FiLayers,
    FiShuffle,
    FiGitBranch,
    FiCheckCircle,
    FiAlertCircle,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const Es6PlusFeatures = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "ES6+ features",
            sub: "ES6+ means modern JavaScript features added from ES6 (2015) onwards. These features improve readability, safety, and async code, and they also changed how scope, modules, and functions behave.",
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
        <Styled.Wrapper id="es6-plus-features">
            <div className="top">
                <h2 className="title">ES6+ features</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiZap /> Modern syntax
                    </span>
                    <span className="pill">
                        <FiLayers /> Safer scope
                    </span>
                    <span className="pill">
                        <FiPackage /> Modules
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="es6-plus-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                beginner explanations and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="es6-plus-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">Meaning</h3>
                                <p className="p">
                                    <strong>ES</strong> means "ECMAScript",
                                    which is the official standard that
                                    JavaScript follows.
                                    <br />
                                    <strong>ES6</strong> is the 2015 update that
                                    introduced major features like{" "}
                                    <span className="mono">let</span>,{" "}
                                    <span className="mono">const</span>, arrow
                                    functions, classes, modules, promises,
                                    destructuring, and more.
                                    <br />
                                    <strong>ES6+</strong> means ES6 and all
                                    later versions.
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Why ES6+ matters
                                        </div>
                                        <p className="miniText">
                                            Cleaner code, fewer bugs, better
                                            async patterns, and production
                                            friendly features used everywhere in
                                            modern MERN apps.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Interview angle
                                        </div>
                                        <p className="miniText">
                                            Many "JS internals" questions become
                                            easy once you understand block
                                            scope, modules, and promises
                                            behavior.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    1 - Block scope with let and const
                                </h3>
                                <p className="p">
                                    <span className="mono">var</span> is
                                    function scoped, but{" "}
                                    <span className="mono">let</span> and{" "}
                                    <span className="mono">const</span> are
                                    block scoped.
                                    <br />
                                    Block means code inside{" "}
                                    <span className="mono">{`{ }`}</span>.
                                    <br />
                                    Also, <span className="mono">
                                        let
                                    </span> and{" "}
                                    <span className="mono">const</span> have{" "}
                                    <span className="mono">TDZ</span> behavior.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">Example</div>
                                    <pre className="code">{`if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // 1
console.log(b); // ReferenceError
console.log(c); // ReferenceError`}</pre>
                                </div>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiAlertCircle />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">TDZ</div>
                                        <div className="cSub">
                                            TDZ - Temporal Dead Zone.
                                            <br />
                                            It means you cannot access{" "}
                                            <span className="mono">
                                                let
                                            </span> or{" "}
                                            <span className="mono">const</span>{" "}
                                            before their declaration line.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">2 - Arrow functions</h3>
                                <p className="p">
                                    Arrow functions are shorter syntax and they
                                    do not have their own{" "}
                                    <span className="mono">`this`</span>. They
                                    capture <span className="mono">`this`</span>{" "}
                                    from the surrounding scope.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - this behavior
                                    </div>
                                    <pre className="code">{`const obj = {
  name: "A",
  normal() {
    console.log(this.name); // "A"
  },
  arrow: () => {
    console.log(this); // not obj
  }
};

obj.normal();
obj.arrow();`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            When to use
                                        </div>
                                        <p className="miniText">
                                            Use arrows for callbacks and small
                                            functions, especially when you want
                                            outer{" "}
                                            <span className="mono">`this`</span>
                                            .
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            When to avoid
                                        </div>
                                        <p className="miniText">
                                            Avoid arrows as object methods when
                                            you need method level{" "}
                                            <span className="mono">`this`</span>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">3 - Template literals</h3>
                                <p className="p">
                                    Template literals use backticks{" "}
                                    <span className="mono">`</span> and allow:
                                    <br />- string interpolation using{" "}
                                    <span className="mono">{`${"{ }"}`}</span>
                                    <br />- multiline strings
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">Example</div>
                                    <pre className="code">{`const name = "Ashish";
const msg = \`Hello \${name}
Welcome to JS internals\`;

console.log(msg);`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">4 - Destructuring</h3>
                                <p className="p">
                                    Destructuring extracts values from arrays
                                    and objects into variables. It reduces
                                    repetitive access code.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - object destructuring
                                    </div>
                                    <pre className="code">{`const user = { id: 7, name: "A", role: "dev" };

const { id, name } = user;

console.log(id);   // 7
console.log(name); // "A"`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - array destructuring
                                    </div>
                                    <pre className="code">{`const arr = [10, 20, 30];

const [x, y] = arr;

console.log(x); // 10
console.log(y); // 20`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">5 - Spread and rest</h3>
                                <p className="p">
                                    <span className="mono">...</span> has two
                                    meanings depending on where you use it:
                                    <br />- spread - expands an array or object
                                    <br />- rest - collects remaining values
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - spread
                                    </div>
                                    <pre className="code">{`const a = [1, 2];
const b = [0, ...a, 3]; // [0, 1, 2, 3]

const obj1 = { x: 1 };
const obj2 = { ...obj1, y: 2 }; // { x: 1, y: 2 }`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - rest
                                    </div>
                                    <pre className="code">{`function sum(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3); // 6`}</pre>
                                </div>

                                <div className="finalNote">
                                    Spread is great for immutable updates in
                                    React. Rest is great for flexible function
                                    arguments.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">6 - Default parameters</h3>
                                <p className="p">
                                    Default parameters provide fallback values
                                    when arguments are missing or{" "}
                                    <span className="mono">undefined</span>.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">Example</div>
                                    <pre className="code">{`function greet(name = "Guest") {
  return \`Hello \${name}\`;
}

greet();       // "Hello Guest"
greet("A");    // "Hello A"`}</pre>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">7 - Classes</h3>
                                <p className="p">
                                    Classes are mostly syntax sugar over
                                    prototypes. They make object oriented code
                                    cleaner to read, but under the hood
                                    prototypes still exist.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">Example</div>
                                    <pre className="code">{`class User {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return "hi " + this.name;
  }
}

const u = new User("A");
u.hello(); // "hi A"`}</pre>
                                </div>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiGitBranch />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">
                                            Important note
                                        </div>
                                        <div className="cSub">
                                            Class methods are stored on the
                                            prototype, not copied per object.
                                            That saves memory.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">8 - Modules</h3>
                                <p className="p">
                                    Modules allow you to split code into files.
                                    ES modules use{" "}
                                    <span className="mono">import</span> and{" "}
                                    <span className="mono">export</span>. They
                                    support static analysis and better bundling.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - export and import
                                    </div>
                                    <pre className="code">{`// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./math.js";
console.log(add(2, 3)); // 5`}</pre>
                                </div>

                                <div className="finalNote">
                                    In ES modules, top level{" "}
                                    <span className="mono">`this`</span> is not
                                    the global object. This matters for
                                    internals.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    9 - Promises and async/await
                                </h3>
                                <p className="p">
                                    Promises represent a future value.
                                    Async/await is syntax that makes promise
                                    code look synchronous, but it still uses the
                                    event loop under the hood.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - promise
                                    </div>
                                    <pre className="code">{`const p = Promise.resolve(7);

p.then((v) => console.log(v)); // 7`}</pre>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - async/await
                                    </div>
                                    <pre className="code">{`async function run() {
  const v = await Promise.resolve(10);
  console.log(v); // 10
}

run();`}</pre>
                                </div>

                                <div className="callout">
                                    <span className="cIcon">
                                        <FiShuffle />
                                    </span>
                                    <div className="cText">
                                        <div className="cTitle">Microtasks</div>
                                        <div className="cSub">
                                            Promise callbacks run in the
                                            microtask queue. Microtasks run
                                            before normal tasks.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    10 - Common ES6+ checklist for MERN
                                </h3>

                                <div className="qaGrid">
                                    <div className="qa">
                                        <div className="q">
                                            Use const by default
                                        </div>
                                        <div className="a">
                                            Prefer const unless you need
                                            reassignment.
                                        </div>
                                    </div>
                                    <div className="qa">
                                        <div className="q">Avoid var</div>
                                        <div className="a">
                                            var has confusing hoisting and scope
                                            rules.
                                        </div>
                                    </div>
                                    <div className="qa">
                                        <div className="q">Prefer modules</div>
                                        <div className="a">
                                            Use import and export for clean
                                            structure.
                                        </div>
                                    </div>
                                    <div className="qa">
                                        <div className="q">
                                            Use spread for immutability
                                        </div>
                                        <div className="a">
                                            Common in React state updates.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Terms and full forms</h3>
                                <div className="abbrGrid">
                                    <div className="abbr">
                                        <span className="mono">ES</span> -
                                        ECMAScript
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">ES6</span> -
                                        ECMAScript 2015
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">ES6+</span> - ES6
                                        and later versions
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">TDZ</span> -
                                        Temporal Dead Zone
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">JS</span> -
                                        JavaScript
                                    </div>
                                </div>

                                <div className="finalNote">
                                    ES6+ is not just syntax. Many features
                                    change runtime behavior, especially scope,
                                    modules, and async execution order.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    How to say it confidently
                                </h3>
                                <ul className="list">
                                    <li>
                                        "ES6 introduced block scope with let and
                                        const, and this reduced many var related
                                        bugs."
                                    </li>
                                    <li>
                                        "Arrow functions do not bind their own
                                        this, they capture it from outer scope."
                                    </li>
                                    <li>
                                        "Classes are syntax sugar over
                                        prototypes, the prototype chain is still
                                        the real mechanism."
                                    </li>
                                    <li>
                                        "Promises schedule microtasks, which run
                                        before macrotasks in the event loop."
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

export default Es6PlusFeatures;
