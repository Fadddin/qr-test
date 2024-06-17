import { BrowserRouter, Route, Routes } from "react-router-dom";
import Botany from "./Botany";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Botany />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
