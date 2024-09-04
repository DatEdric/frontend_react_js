import "bootstrap/dist/css/bootstrap.min.css";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import BaseComponent from "./Components/client/home/BaseComponent";
import HomePageComponent from "./Components/client/home/HomePageComponent";
import WomentProductComponent from "./Components/client/product/WomenProductComponent";

function App() {
    return (
        <>
            <HelmetProvider>
                <Routes>
                    <Route path="/" element={<BaseComponent />}>
                        <Route path="/home" index element={<HomePageComponent />} />
                        <Route path="/women" element={<WomentProductComponent />} />
                    </Route>
                </Routes>
            </HelmetProvider>
        </>
    );
}

export default App;
