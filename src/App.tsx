import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/common/Header";
import SearchBookPage from "@/pages/SearchBookPage";
import LikedBookPage from "@/pages/LikedBookPage";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 20 * 60 * 1000
        }
    }
});
function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<SearchBookPage />} />
                        <Route path="/like" element={<LikedBookPage />} />
                    </Routes>
                </main>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
