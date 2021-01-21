import React from 'react'
import PropTypes from 'prop-types'

function PatternComponent(props) {
    return (
        <div>
            <h1>{props.header}</h1>
            <button onClick={props.handleClick}>Click</button>
        </div>
    )
}

PatternComponent.propTypes = {
    header: PropTypes.string,
    handleClick: PropTypes.func,
}

export default PatternComponent

