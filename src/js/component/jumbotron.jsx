import React from "react";
import propTypes from "prop-types";


const Jumbotron = (props) => {

    return (

        <div className="jumbotron bg-light p-5">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">{props.description}</p>
                <p>{props.textBold}</p>
                <a className="btn btn-primary btn-lg mt-3" href="#" role="button">{props.linkLabel}</a>
        </div>


    )
}

Jumbotron.propTypes = {
    title: propTypes.string,
    description: propTypes.string,
    textBold: propTypes.string,
    linkLabel: propTypes.string
}

export default Jumbotron;