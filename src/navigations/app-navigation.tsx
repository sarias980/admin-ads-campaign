import { Routes, Route } from 'react-router-dom';
import Companies from "../pages/Companies";

const AppNavigation = () => {

    return (
        <Routes>
            <Route path='/' element={<Companies />}></Route>
    </Routes>
)
}

export default AppNavigation;
