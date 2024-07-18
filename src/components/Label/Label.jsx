import PropTypes from "prop-types";
import './label.css'

function Label ({ label }) {

    return (
        <section className='label'>{ label }</section>
    )
}

export default Label;

Label.propTypes = {
    label: PropTypes.string.isRequired,
    }
