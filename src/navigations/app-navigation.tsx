import { Routes, Route } from 'react-router-dom';
import Companies from "../pages/Companies";
import Products from "../pages/Products";

const AppNavigation = () => {

    return (
        <Routes>
            <Route path='/' element={<Companies />}></Route>
            <Route path='/:companyId/products' element={<Products />}></Route>
    </Routes>
)
}

export default AppNavigation;
