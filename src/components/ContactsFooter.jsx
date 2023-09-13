import '../styles/components/contactsfooter.sass'

import {
    FaInstagram,
    FaWhatsapp,
    FaLinkedin,
} from 'react-icons/fa'

import {
    BiLogoGithub,
    BiLogoGmail
} from 'react-icons/bi'

const socialFooter = [
    { name: 'instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/' },
    { name: 'whatsapp', icon: <FaWhatsapp />, href: 'https://wa.me/5561995874732' },
    { name: 'gmail', icon: <BiLogoGmail />, href: 'mailto:sostenesmartins1996@gmail.com' },
    { name: 'linkedin', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/s%C3%B3stenes-de-souza-siqueira-martins-336b491bb/' },
    { name: 'github', icon: <BiLogoGithub />, href: 'https://github.com/SostenesMartins' }
]

const ContactsFooter = () => {
    return <section id='footer'>
        {socialFooter.map((networks) => (
            <a href={networks.href} target="_blank" className="social-link-footer" id={networks.name} key={networks.name}>
                {networks.icon}
            </a>
        ))}
        <ul className='list-footer'>
            <li>
                <a href="#" className='link'>Home</a>
            </li>
            <li>
                <a href="#" className='link'>Projetos</a>
            </li>
            <li>
                <a href="#" className='link'>Contatos</a>
            </li>
        </ul>
        <p className='copyright'>Developed in 2023 &copy; <span>Sóstenes</span></p>
    </section>

}

export default ContactsFooter