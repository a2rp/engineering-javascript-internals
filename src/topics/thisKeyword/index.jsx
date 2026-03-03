// src/topics/thisKeyword/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiTarget,
    FiCode,
    FiLink,
    FiZap,
    FiAlertCircle,
    FiCheckCircle,
    FiBookOpen,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const ThisKeyword = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "this keyword",
            sub: "`this` is a special value set for a function call. It is decided by how the function is called, not where the function is written.",
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
        <Styled.Wrapper id="this-keyword">
            <div className="top">
                <h2 className="title">this keyword</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiTarget /> Call-site decides
                    </span>
                    <span className="pill">
                        <FiLink /> Method vs function
                    </span>
                    <span className="pill">
                        <FiZap /> Arrow is different
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="this-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} with
                                beginner rules and examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="this-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">Meaning</h3>
                                <p className="p">
                                    <span className="mono">`this`</span> is a
                                    value the JavaScript engine sets when a
                                    function is called.
                                    <br />- it is not a variable you declare
                                    <br />- it changes based on the call-site
                                    <br />- different call types create
                                    different{" "}
                                    <span className="mono">`this`</span>
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            The one-line rule
                                        </div>
                                        <p className="miniText">
                                            <strong>
                                                Find the dot before the call.
                                            </strong>
                                            If you see{" "}
                                            <span className="mono">
                                                obj.fn()
                                            </span>
                                            , then{" "}
                                            <span className="mono">this</span>{" "}
                                            is <span className="mono">obj</span>
                                            .
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Why beginners get stuck
                                        </div>
                                        <p className="miniText">
                                            People think{" "}
                                            <span className="mono">this</span>{" "}
                                            means the object where function is
                                            written. It does not. It depends on
                                            how it is called.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Core rules (practical)</h3>

                                <div className="ruleGrid">
                                    <div className="rule">
                                        <div className="rTop">
                                            <FiLink />
                                            <span className="rTitle">
                                                Method call
                                            </span>
                                        </div>
                                        <p className="rText">
                                            <span className="mono">
                                                obj.fn()
                                            </span>
                                            <br />
                                            <span className="mono">
                                                this
                                            </span>{" "}
                                            is <span className="mono">obj</span>
                                        </p>
                                    </div>

                                    <div className="rule">
                                        <div className="rTop">
                                            <FiCode />
                                            <span className="rTitle">
                                                Normal function call
                                            </span>
                                        </div>
                                        <p className="rText">
                                            <span className="mono">fn()</span>
                                            <br />
                                            In strict mode{" "}
                                            <span className="mono">
                                                this
                                            </span>{" "}
                                            is{" "}
                                            <span className="mono">
                                                undefined
                                            </span>
                                            <br />
                                            In browser non-strict scripts it can
                                            be{" "}
                                            <span className="mono">window</span>
                                        </p>
                                    </div>

                                    <div className="rule">
                                        <div className="rTop">
                                            <FiTarget />
                                            <span className="rTitle">
                                                Constructor call
                                            </span>
                                        </div>
                                        <p className="rText">
                                            <span className="mono">
                                                new Fn()
                                            </span>
                                            <br />
                                            <span className="mono">
                                                this
                                            </span>{" "}
                                            is the new object
                                        </p>
                                    </div>

                                    <div className="rule">
                                        <div className="rTop">
                                            <FiZap />
                                            <span className="rTitle">
                                                Arrow function
                                            </span>
                                        </div>
                                        <p className="rText">
                                            Arrow does not create its own{" "}
                                            <span className="mono">this</span>
                                            <br />
                                            It uses{" "}
                                            <span className="mono">
                                                this
                                            </span>{" "}
                                            from outer scope
                                        </p>
                                    </div>
                                </div>

                                <div className="warn">
                                    <span className="wIcon">
                                        <FiAlertCircle />
                                    </span>
                                    <div className="wText">
                                        <div className="wTitle">
                                            Most mistakes happen here
                                        </div>
                                        <div className="wSub">
                                            If you pass a method as a callback,
                                            like{" "}
                                            <span className="mono">
                                                setTimeout(obj.fn, 0)
                                            </span>
                                            , the dot is lost, so{" "}
                                            <span className="mono">this</span>{" "}
                                            changes.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Example 1 - method vs function
                                </h3>

                                <div className="exampleBlock">
                                    <div className="exTitle">Code</div>
                                    <pre className="code">{`"use strict";

const user = {
  name: "Ash",
  show() {
    console.log(this.name);
  }
};

user.show(); // this is user -> "Ash"

const f = user.show;
f(); // this is undefined in strict mode -> error`}</pre>
                                </div>

                                <div className="finalNote">
                                    When you store{" "}
                                    <span className="mono">user.show</span> into{" "}
                                    <span className="mono">f</span>, it becomes
                                    a plain function call{" "}
                                    <span className="mono">f()</span>. No dot,
                                    no object, so{" "}
                                    <span className="mono">this</span> is not{" "}
                                    <span className="mono">user</span>.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Fix 1 - bind</h3>

                                <p className="p">
                                    <strong>bind</strong> creates a new function
                                    with fixed{" "}
                                    <span className="mono">this</span>.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">Code</div>
                                    <pre className="code">{`"use strict";

const user = {
  name: "Ash",
  show() {
    console.log(this.name);
  }
};

const bound = user.show.bind(user);
bound(); // "Ash"`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">bind</div>
                                        <p className="miniText">
                                            Returns a new function. Does not
                                            call immediately.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            call and apply
                                        </div>
                                        <p className="miniText">
                                            Call immediately with a chosen{" "}
                                            <span className="mono">this</span>.
                                            Difference is how arguments are
                                            passed.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Fix 2 - arrow function in callbacks
                                </h3>

                                <p className="p">
                                    Arrow functions do not create their own{" "}
                                    <span className="mono">this</span>. They use
                                    outer <span className="mono">this</span>.
                                    This is useful inside class methods and
                                    timers.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">Code</div>
                                    <pre className="code">{`"use strict";

const user = {
  name: "Ash",
  showLater() {
    setTimeout(() => {
      console.log(this.name);
    }, 0);
  }
};

user.showLater(); // "Ash"`}</pre>
                                </div>

                                <div className="warn">
                                    <span className="wIcon">
                                        <FiAlertCircle />
                                    </span>
                                    <div className="wText">
                                        <div className="wTitle">
                                            Arrow is not a replacement for
                                            everything
                                        </div>
                                        <div className="wSub">
                                            Arrow is great for callbacks and
                                            preserving outer{" "}
                                            <span className="mono">this</span>.
                                            But do not use arrow as an object
                                            method if you want method-style{" "}
                                            <span className="mono">this</span>.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Example 2 - arrow as method trap
                                </h3>

                                <div className="exampleBlock">
                                    <div className="exTitle">Code</div>
                                    <pre className="code">{`"use strict";

const user = {
  name: "Ash",
  show: () => {
    console.log(this);
  }
};

user.show(); // this is not user
// arrow takes this from outer scope`}</pre>
                                </div>

                                <div className="finalNote">
                                    In objects, prefer normal method syntax{" "}
                                    <span className="mono">show() {}</span> when
                                    you want <span className="mono">this</span>{" "}
                                    to point to the object.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Example 3 - constructor and new
                                </h3>

                                <div className="exampleBlock">
                                    <div className="exTitle">Code</div>
                                    <pre className="code">{`"use strict";

function User(name) {
  this.name = name;
}

const u1 = new User("Ash");
console.log(u1.name); // "Ash"`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            What new does
                                        </div>
                                        <p className="miniText">
                                            Creates a new object, sets{" "}
                                            <span className="mono">this</span>{" "}
                                            to it, links prototype, returns the
                                            object.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Without new
                                        </div>
                                        <p className="miniText">
                                            In strict mode,{" "}
                                            <span className="mono">this</span>{" "}
                                            becomes{" "}
                                            <span className="mono">
                                                undefined
                                            </span>{" "}
                                            and property assignment fails.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Quick interview lines</h3>
                                <ul className="list">
                                    <li>
                                        "`this` is decided by the call-site.
                                        Method call uses the object before the
                                        dot."
                                    </li>
                                    <li>
                                        "Arrow functions do not have their own
                                        `this`. They close over outer `this`."
                                    </li>
                                    <li>
                                        "bind creates a new function with fixed
                                        `this`. call and apply invoke
                                        immediately."
                                    </li>
                                </ul>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Terms and full forms</h3>
                                <div className="abbrGrid">
                                    <div className="abbr">
                                        <span className="mono">JS</span> -
                                        JavaScript
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">TDZ</span> -
                                        Temporal Dead Zone
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">API</span> -
                                        Application Programming Interface
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">OOP</span> -
                                        Object Oriented Programming
                                    </div>
                                </div>

                                <div className="finalNote">
                                    The fastest way to solve{" "}
                                    <span className="mono">this</span> questions
                                    is: look at the call-site, then identify the
                                    rule that matches.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Mini practice</h3>

                                <div className="qaGrid">
                                    <div className="qa">
                                        <div className="q">
                                            What is printed here
                                        </div>
                                        <div className="a">
                                            <span className="mono">
                                                obj.fn()
                                            </span>{" "}
                                            prints{" "}
                                            <span className="mono">obj</span>{" "}
                                            based value.{" "}
                                            <span className="mono">fn()</span>{" "}
                                            does not.
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            Why does callback lose this
                                        </div>
                                        <div className="a">
                                            The dot is lost. The function is
                                            called without an owning object. Use{" "}
                                            <span className="mono">bind</span>{" "}
                                            or arrow callback.
                                        </div>
                                    </div>

                                    <div className="qa">
                                        <div className="q">
                                            When is arrow best
                                        </div>
                                        <div className="a">
                                            When you want to preserve outer{" "}
                                            <span className="mono">this</span>,
                                            especially in callbacks and event
                                            handlers.
                                        </div>
                                    </div>
                                </div>

                                <div className="tip">
                                    <span className="tipIcon">
                                        <FiBookOpen />
                                    </span>
                                    <div className="tipText">
                                        Tip - when stuck, rewrite the call-site
                                        clearly. For example replace{" "}
                                        <span className="mono">obj.fn</span>{" "}
                                        with a variable and see if the dot
                                        remains.
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

export default ThisKeyword;
