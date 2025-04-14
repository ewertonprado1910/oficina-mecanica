import { Route, Routes } from "react-router-dom"

import Home from "../containers/Home"
import Servico from "../containers/Servico"
import Sobre from "../containers/Sobre"

const Router = () => {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Home />} />
                <Route path="/servico" element={<Servico />} />
                <Route path="/sobre" element={<Sobre />} />
            </Route>
        </Routes>
    )
}

export default Router