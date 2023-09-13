import { useState } from "react"
import SocialNetworks from "./SocialNetworks"

import "../styles/components/navbar.sass"

const Navbar = () => {
    const [active, setMode] = useState(false)
    const ToggleMode = () => {
        setMode(!active)
    }

    return <div id="navbar">
        <h1>Sóstenes Martins</h1>
        <ul className={active ? "menu menuOpen" : "menu menuClose"}>
            <li>
                <a href="#" class="active">Home</a>
            </li>
            <li>
                <a href="#">Projetos</a>
            </li>
            <li>
                <a href="#">Contatos</a>
            </li>
        </ul>
        <SocialNetworks />
        <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
            <div className="hamburguer hamburguerIcon"></div>
        </div>
    </div>
}

export default Navbar