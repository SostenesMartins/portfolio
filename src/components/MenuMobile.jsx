import { useState } from "react"

import '../styles/components/menumobile.sass'

const MenuMobile = () => {
    const [active, setMode] = useState(false)
    const ToggleMode = () => {
        setMode(!active)
    }


    return <section id="menumobile">

        <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
            <div className="hamburguer hamburguerIcon"></div>
        </div>

        <div className={active ? "menu menuOpen" : "menu menuClose"}>
            <div className="list">
                <ul className="listItems">
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
            </div>
        </div>
    </section>
}

export default MenuMobile