import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ScrollToTop} from "./pages";
import Invoice from "./components/App";
import { Header, Footer, Error } from "./pages";

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Invoice />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}