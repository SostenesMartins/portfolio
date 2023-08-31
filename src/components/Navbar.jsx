import SocialNetworks from "./SocialNetworks"

import "../styles/components/navbar.sass"

const Navbar = () => {
    return <div id="navbar">
        <h1>Sóstenes Martins</h1>
        <ul>
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
    </div>
}

export default Navbar