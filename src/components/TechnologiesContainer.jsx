import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiMysql,
    DiPostgresql,
    DiReact,
    DiSass,
    DiBootstrap,
    DiDocker,
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    {id: "html", name: "HTML5", icon: <DiHtml5 />},
    {id: "css", name: "CSS3", icon: <DiCss3 />},
    {id: "javascript", name: "JAVASCRIPT", icon: <DiJavascript1 />},
    {id: "mysql", name: "MYSQL", icon: <DiMysql />},
    {id: "postgresql", name: "POSTGRESQL", icon: <DiPostgresql />},
    {id: "react", name: "REACT", icon: <DiReact />},
    {id: "sass", name: "SASS", icon: <DiSass />},
    {id: "bootstrap", name: "BOOTSTRAP", icon: <DiBootstrap />},
    {id: "docker", name: "DOCKER", icon: <DiDocker />},
]

const TechnologiesContainer = () => {
    return <section className='technologies-cotainer'>
            {technologies.map((tech) => (
                <i className="technology-icon" id={tech.id} key={tech.id}>
                    {tech.icon}
                </i>
            ))}
        
    </section>
}

export default TechnologiesContainer