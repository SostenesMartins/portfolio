
import { BiLinkExternal } from 'react-icons/bi';
import '../styles/components/projects.sass'

import dev1 from '../img/Gallery.jpeg'
import dev2 from '../img/Gallerytwo.jpeg'
import dev3 from '../img/Checkout.jpeg'
import dev4 from '../img/Interior.jpeg'
import dev5 from '../img/Receita.jpeg'
import dev6 from '../img/Lampada.jpeg'

import IconNavegation from './IconNavegation'

const Projects = () => {

    return <section id='projects'>
        <h2 className='projects-title'>Projetos</h2>

        <div className='portfolio-container'>
            <div className='portfolio-box'>
                <img className='portfolio-img' src={dev1} alt="Galeria" />
                <div className='portfolio-slayer'>
                    <h3>Galeria</h3>
                    <p>Uma página de fotos com uso das tecnologias <span>html5</span> e <span>sass</span> <br /> (Link do projeto abaixo)</p>
                    <IconNavegation icon={{ name: 'projeto1', icon: <BiLinkExternal />, url: 'https://sostenesmartins.github.io/Gallery/' }} />
                </div>
            </div>

            <div className='portfolio-box'>
                <img className='portfolio-img' src={dev2} alt="Galeria" />
                <div className='portfolio-slayer'>
                    <h3>Galeria</h3>
                    <p>Uma outra página de fotos focado em usar <span>grid layout</span> com uso das tecnologias  <span>html5</span> e <span>css3</span> <br /> (Link do projeto abaixo)</p>
                    <IconNavegation icon={{ name: 'projeto2', icon: <BiLinkExternal />, url: 'https://sostenesmartins.github.io/myGallery/' }} />
                </div>
            </div>

            <div className='portfolio-box'>
                <img className='portfolio-img' src={dev3} alt="Site de Cadastro" />
                <div className='portfolio-slayer'>
                    <h3>Loja Web</h3>
                    <p>Uma página de simulação de cadastro para fazer uma comprar online com uso das tecnologias <span>html5</span>, <span>css3</span> e <span>javascript</span> <br /> (Link do projeto abaixo)</p>
                    <IconNavegation icon={{ name: 'projeto3', icon: <BiLinkExternal />, url: 'https://sostenesmartins.github.io/checkoutPageMaster/' }} />
                </div>
            </div>

            <div className='portfolio-box'>
                <img className='portfolio-img' src={dev4} alt="Site de Inteirores" />
                <div className='portfolio-slayer'>
                    <h3>Interior</h3>
                    <p>Uma página de simulação de interiores com uso das tecnologias <span>html5</span>, <span>css3</span> e <span>javascript</span> <br /> (Link do projeto abaixo)</p>
                    <IconNavegation icon={{ name: 'projeto4', icon: <BiLinkExternal />, url: 'https://sostenesmartins.github.io/interiorConsultant/' }} />
                </div>
            </div>

            <div className='portfolio-box'>
                <img className='portfolio-img' src={dev5} alt="Site de Receita" />
                <div className='portfolio-slayer'>
                    <h3>Receita</h3>
                    <p>Uma página de receita com uso das tecnologias <span>html5</span> e <span>css3</span> <br /> (Link do projeto abaixo)</p>
                    <IconNavegation icon={{ name: 'projeto5', icon: <BiLinkExternal />, url: 'https://sostenesmartins.github.io/recipePage/' }} />
                </div>
            </div>

            <div className='portfolio-box'>
                <img className='portfolio-img' src={dev6} alt="Lampada" />
                <div className='portfolio-slayer'>
                    <h3>Lampada</h3>
                    <p>Uma página com uma lampada que tem interação de ligar/desligar e quebrar com uso da tecnologia <span>javascript</span> <br /> (Link do projeto abaixo)</p>
                    <IconNavegation icon={{ name: 'projeto6', icon: <BiLinkExternal />, url: 'https://sostenesmartins.github.io/Lampada/' }} />
                </div>
            </div>
        </div>
    </section>

}

export default Projects