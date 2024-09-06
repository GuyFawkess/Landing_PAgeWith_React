import React from "react";
import PropTypes from "prop-types";


const Card = (props) => {
    return (
        <div className="card d-flex flex-column align-items-center text-center">
            <img src={props.imgUrl} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardText}</p>
                <a href={props.linkUrl} className="btn btn-primary">{props.linkLabel}</a>
            </div>
        </div>
    );
};

Card.propType = {
    cardTitle: PropTypes.string,
    imgUrl: PropTypes.string,
    cardText: PropTypes.string,
    linkLabel: PropTypes.string,
    linkUrl: PropTypes.string
}

export default Card;
