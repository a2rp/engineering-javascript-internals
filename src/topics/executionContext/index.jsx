// src/topics/executionContext/index.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiCpu,
    FiLayers,
    FiFileText,
    FiCode,
    FiZap,
    FiCheckCircle,
    FiAlertCircle,
} from "react-icons/fi";

const TRANSITION_MS = 220;

const ExecutionContext = () => {
    const [open, setOpen] = useState(false);

    // load on click
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const content = useMemo(() => {
        return {
            title: "Execution context",
            sub: "Execution context is the environment where JavaScript runs your code. It decides what variables exist, what `this` means, and how the call stack manages function execution.",
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
        <Styled.Wrapper id="execution-context">
            <div className="top">
                <h2 className="title">Execution context</h2>
                <p className="sub">{content.sub}</p>

                <div className="pillRow" aria-label="At a glance">
                    <span className="pill">
                        <FiCpu /> Where code runs
                    </span>
                    <span className="pill">
                        <FiLayers /> Scope + `this`
                    </span>
                    <span className="pill">
                        <FiZap /> Creation then execution
                    </span>
                </div>
            </div>

            <div className="accordion">
                <button
                    type="button"
                    className="accBtn"
                    onClick={toggle}
                    aria-expanded={open}
                    aria-controls="execution-context-panel"
                >
                    <div className="accLeft">
                        <span className="accIcon">
                            <FiCheckCircle />
                        </span>
                        <div className="accText">
                            <div className="accTitle">{content.title}</div>
                            <div className="accHint">
                                Click to {open ? "collapse" : "expand"} for
                                beginner explanation with real examples
                            </div>
                        </div>
                    </div>

                    <span className={`chev ${open ? "open" : ""}`}>
                        <FiChevronDown />
                    </span>
                </button>

                {isMounted && (
                    <div
                        id="execution-context-panel"
                        className={`panel ${isVisible ? "open" : ""}`}
                    >
                        <div className="panelInner">
                            <section className="sec">
                                <h3 className="h3">Meaning</h3>
                                <p className="p">
                                    An <strong>execution context</strong> is a
                                    container created by the JavaScript engine
                                    before running a piece of code.
                                    <br />
                                    You can imagine it like a "runtime box" that
                                    holds:
                                    <br />- variables and functions available in
                                    that code
                                    <br />- the value of{" "}
                                    <span className="mono">`this`</span>
                                    <br />- a link to outer scopes
                                </p>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Simple analogy
                                        </div>
                                        <p className="miniText">
                                            Every time a function runs, the
                                            engine creates a fresh "workspace"
                                            for it. That workspace is the
                                            function execution context.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            Why it matters
                                        </div>
                                        <p className="miniText">
                                            It explains hoisting, scope, call
                                            stack behavior, and why variables
                                            sometimes look "undefined".
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Types of execution context
                                </h3>

                                <div className="termGrid">
                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">GEC</span>
                                            <span className="tag">Global</span>
                                        </div>
                                        <p className="tBody">
                                            <strong>GEC</strong> - Global
                                            Execution Context. Created once when
                                            the script starts. It sets up global
                                            variables and global
                                            <span className="mono">
                                                {" "}
                                                `this`
                                            </span>
                                            .
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">FEC</span>
                                            <span className="tag">
                                                Function
                                            </span>
                                        </div>
                                        <p className="tBody">
                                            <strong>FEC</strong> - Function
                                            Execution Context. Created each time
                                            a function is called. Each call gets
                                            its own independent context.
                                        </p>
                                    </div>

                                    <div className="term">
                                        <div className="tHead">
                                            <span className="mono">MEC</span>
                                            <span className="tag">Module</span>
                                        </div>
                                        <p className="tBody">
                                            <strong>MEC</strong> - Module
                                            Execution Context. Used for ES
                                            Modules. Top-level{" "}
                                            <span className="mono">`this`</span>{" "}
                                            behaves differently.
                                        </p>
                                    </div>
                                </div>

                                <div className="finalNote">
                                    Most interview questions are about GEC and
                                    FEC. Module context matters when you use ES
                                    modules.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    What is inside an execution context
                                </h3>

                                <div className="insideGrid">
                                    <div className="inside">
                                        <div className="insideTop">
                                            <FiLayers />
                                            <span className="insideTitle">
                                                Variable environment
                                            </span>
                                        </div>
                                        <div className="insideText">
                                            Stores variables and function
                                            declarations for that context. This
                                            is where hoisting comes from.
                                        </div>
                                    </div>

                                    <div className="inside">
                                        <div className="insideTop">
                                            <FiCpu />
                                            <span className="insideTitle">
                                                Lexical environment
                                            </span>
                                        </div>
                                        <div className="insideText">
                                            Stores scope information and
                                            references to outer scopes. This is
                                            how closures work.
                                        </div>
                                    </div>

                                    <div className="inside">
                                        <div className="insideTop">
                                            <FiFileText />
                                            <span className="insideTitle">
                                                this binding
                                            </span>
                                        </div>
                                        <div className="insideText">
                                            Decides what{" "}
                                            <span className="mono">`this`</span>{" "}
                                            points to inside the current
                                            execution context.
                                        </div>
                                    </div>
                                </div>

                                <div className="warn">
                                    <span className="wIcon">
                                        <FiAlertCircle />
                                    </span>
                                    <div className="wText">
                                        <div className="wTitle">
                                            Variable environment vs lexical
                                            environment
                                        </div>
                                        <div className="wSub">
                                            Many people treat these as the same.
                                            For practical understanding,
                                            remember this - lexical environment
                                            is about scope chain and closures,
                                            variable environment is about
                                            declarations and hoisting.
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    Two phases - creation and execution
                                </h3>

                                <p className="p">
                                    When an execution context is created, the
                                    engine does not run your code immediately.
                                    It does it in two steps:
                                    <br />- creation phase - allocate memory,
                                    set up scope, hoist declarations
                                    <br />- execution phase - run code line by
                                    line, assign real values
                                </p>

                                <div className="flowGrid">
                                    <div className="flow">
                                        <div className="flowTitle">
                                            Creation phase
                                        </div>
                                        <ul className="list">
                                            <li>
                                                Memory allocated for variables
                                                and functions
                                            </li>
                                            <li>
                                                Function declarations are stored
                                                fully
                                            </li>
                                            <li>
                                                <span className="mono">
                                                    var
                                                </span>{" "}
                                                variables become{" "}
                                                <span className="mono">
                                                    undefined
                                                </span>
                                            </li>
                                            <li>
                                                <span className="mono">
                                                    let
                                                </span>{" "}
                                                and{" "}
                                                <span className="mono">
                                                    const
                                                </span>{" "}
                                                are created but not usable yet
                                            </li>
                                            <li>
                                                <span className="mono">
                                                    `this`
                                                </span>{" "}
                                                is decided
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="flow">
                                        <div className="flowTitle">
                                            Execution phase
                                        </div>
                                        <ul className="list">
                                            <li>Code runs line by line</li>
                                            <li>Variables get actual values</li>
                                            <li>
                                                Function calls create new
                                                contexts
                                            </li>
                                            <li>
                                                Call stack grows and shrinks
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - hoisting in creation phase
                                    </div>
                                    <pre className="code">{`console.log(a);
console.log(b);

var a = 10;
let b = 20;`}</pre>
                                </div>

                                <div className="miniGrid">
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            What happens
                                        </div>
                                        <p className="miniText">
                                            <span className="mono">var a</span>{" "}
                                            exists in memory as{" "}
                                            <span className="mono">
                                                undefined
                                            </span>
                                            , so first log prints{" "}
                                            <span className="mono">
                                                undefined
                                            </span>
                                            .
                                            <br />
                                            <span className="mono">
                                                let b
                                            </span>{" "}
                                            exists but is in a restricted state,
                                            so accessing it throws an error.
                                        </p>
                                    </div>
                                    <div className="miniCard">
                                        <div className="miniTitle">
                                            That restricted state
                                        </div>
                                        <p className="miniText">
                                            It is called <strong>TDZ</strong> -
                                            Temporal Dead Zone. It means{" "}
                                            <span className="mono">let</span>{" "}
                                            and{" "}
                                            <span className="mono">const</span>
                                            cannot be used before the line where
                                            they are declared.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Call stack connection</h3>
                                <p className="p">
                                    The <strong>call stack</strong> is a stack
                                    data structure used by the engine to track
                                    active execution contexts.
                                    <br />
                                    Rule - the top of the stack is the currently
                                    running context.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - call stack growing
                                    </div>
                                    <pre className="code">{`function one() {
  two();
}

function two() {
  three();
}

function three() {
  return "done";
}

one();`}</pre>
                                </div>

                                <div className="stackBox">
                                    <div className="stackTitle">
                                        Stack view (top to bottom)
                                    </div>
                                    <pre className="stackCode">{`three()  - FEC created
two()    - FEC created
one()    - FEC created
global   - GEC`}</pre>
                                    <div className="stackNote">
                                        When{" "}
                                        <span className="mono">three()</span>{" "}
                                        finishes, its context is popped, then{" "}
                                        <span className="mono">two()</span>{" "}
                                        finishes, then{" "}
                                        <span className="mono">one()</span>.
                                    </div>
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    this inside execution context
                                </h3>

                                <p className="p">
                                    <span className="mono">`this`</span> is not
                                    based on where a function is written. It is
                                    based on how the function is called.
                                </p>

                                <div className="exampleBlock">
                                    <div className="exTitle">
                                        Example - same function, different this
                                    </div>
                                    <pre className="code">{`function show() {
  console.log(this);
}

show(); // in browser non-module: window (or undefined in strict mode)

const obj = { name: "A", show };
obj.show(); // this is obj`}</pre>
                                </div>

                                <div className="finalNote">
                                    You will master{" "}
                                    <span className="mono">`this`</span> easily
                                    once execution context becomes clear. Each
                                    call creates a context and decides a{" "}
                                    <span className="mono">`this`</span> value
                                    for that call.
                                </div>
                            </section>

                            <section className="sec">
                                <h3 className="h3">Terms and full forms</h3>
                                <div className="abbrGrid">
                                    <div className="abbr">
                                        <span className="mono">GEC</span> -
                                        Global Execution Context
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">FEC</span> -
                                        Function Execution Context
                                    </div>
                                    <div className="abbr">
                                        <span className="mono">MEC</span> -
                                        Module Execution Context
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
                            </section>

                            <section className="sec">
                                <h3 className="h3">
                                    How to say it confidently
                                </h3>
                                <ul className="list">
                                    <li>
                                        "Every time a function is called, the
                                        engine creates a new function execution
                                        context and pushes it on the call
                                        stack."
                                    </li>
                                    <li>
                                        "Execution context is created in two
                                        phases - creation phase for hoisting and
                                        setup, execution phase for running
                                        code."
                                    </li>
                                    <li>
                                        "`this` is part of the execution
                                        context, and it is decided by the
                                        call-site."
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

export default ExecutionContext;
