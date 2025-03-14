import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/common/Header";
import LikedBookPage from "@/pages/LikedBookPage";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<div />} />
                    <Route path="/like" element={<LikedBookPage />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
