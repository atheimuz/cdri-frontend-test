import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/common/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<div />} />
                    <Route path="/like" element={<div />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
