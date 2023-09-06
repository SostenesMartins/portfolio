import Avatar from '../img/profile.jpg'

import '../styles/components/mainprofile.sass'

const MainProfile = () => {
    return <section id="mainprofile">
        <img src={Avatar} alt="Sóstenes Martins" />
        <div id="mainprofile-elements">
            <h2>sobre mim</h2>
            <p>Olá meu nome e Sóstenes e conclui meu curso de TI na Estácio de SÁ. Quando mais novo eu via a tecnologia com outros olhos, um mundo fantástico em que eu queria fazer parte e hoje realizando uma jornada em busca do conhecimento e aprendizado para que eu possa fazer parte de uma ótima equipe, e mostrar meus talentos a empresa em que farei parte. Estou a procura de uma oportunidade na área tecnológica. Quero crescer e me tornar um profissional exemplar. Melhorando minhas habilidades e aumentar meus conhecimentos.</p>
            <a href="#">Baixar Curriculo</a>
        </div>
    </section>
}

export default MainProfile