// App.jsx
import React from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import ExecutionContext from "./topics/executionContext";
import CallStack from "./topics/callStack";
import EventLoop from "./topics/eventLoop";
import MicrotaskVsMacrotask from "./topics/microtaskVsMacrotask";
import Closures from "./topics/closures";
import Prototypes from "./topics/prototypes";
import ThisKeyword from "./topics/thisKeyword";
import MemoryManagement from "./topics/memoryManagement";
import GarbageCollection from "./topics/garbageCollection";
import AsyncPatterns from "./topics/asyncPatterns";
import Promises from "./topics/promises";
import Generators from "./topics/generators";
import Es6PlusFeatures from "./topics/es6PlusFeatures";

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
                <div className="contentWrapper">
                    <About />

                    <ExecutionContext />
                    <CallStack />
                    <EventLoop />
                    <MicrotaskVsMacrotask />
                    <Closures />
                    <Prototypes />
                    <ThisKeyword />
                    <MemoryManagement />
                    <GarbageCollection />
                    <AsyncPatterns />
                    <Promises />
                    <Generators />
                    <Es6PlusFeatures />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
