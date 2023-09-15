import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa"

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn/>, href: "https://www.linkedin.com/in/s%C3%B3stenes-de-souza-siqueira-martins-336b491bb/"},
    {name: "github", icon: <FaGithub />, href: "https://github.com/SostenesMartins"},
    {name: "instagram", icon: <FaInstagram/>, href: "https://www.instagram.com/sostenes.martins7/"},
]

const SocialNetworks = () => {
    return <section id="social-networks">
        {socialNetworks.map((networks) => (
            <a href={networks.href} target="_blank" className="social-link" id={networks.name} key={networks.name}>
                {networks.icon}
            </a>
        ))}
    </section>
}

export default SocialNetworks