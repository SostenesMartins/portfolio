import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa"

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
    {name: "linkedin", icon: <FaLinkedinIn/>},
    {name: "github", icon: <FaGithub />},
    {name: "instagram", icon: <FaInstagram/>},
]

const SocialNetworks = () => {
    return <section id="social-networks">
        {socialNetworks.map((networks) => (
            <a href="#" className="social-link" id={networks.name} key={networks.name}>
                {networks.icon}
            </a>
        ))}
    </section>
}

export default SocialNetworks