
import PropTypes from 'prop-types';
const FirstApp = ({saludo = "Alohaa", subtitle}) =>{
    
    return (
        <>
        <h1> {saludo}!!! </h1>
        <p>{subtitle}</p>
        </>
    )
}

FirstApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
   subtitle: 'Soy un valor por defecto'
}
export default FirstApp;