
import '../styles/components/iconnavagation.sass'

const IconNavegation = ({ icon }) => {
    return <div>
        {icon && (
            <a href={icon.url} className='icon-navigation' target='_blank' id={icon.name} key={icon.name}>
                {icon.icon}
            </a>
        )}
    </div>

}

export default IconNavegation