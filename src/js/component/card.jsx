import React from "react";


const Card = (props) => {
    const cards = [
        {
            title: 'Card title 1',
            text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            img: 'https://picsum.photos/200/?random=1'
        },
        {
            title: 'Card title 2',
            text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            img: 'https://picsum.photos/200/?random=2'
        },
        {
            title: 'Card title 3',
            text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            img: 'https://picsum.photos/200/?random=3'
        },
        {
            title: 'Card title 4',
            text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            img: 'https://picsum.photos/200/?random=4'
        },
    ];
    // La función flecha devuelve el estilo de la carta de Boostrap5 y dentro el método maps 
    // Para el método map: 1º se llama a la const card 2º .map(). Iteramos sobre el array cards usando map() para renderizar una carta por cada elemento del array.
    // Por cada iteración, accedemos a las propiedades title, text e img para mostrar los datos correspondientes.
    //Componente Card: Cada carta de Bootstrap está envuelta dentro de un div con la clase col-md-3 para que ocupe una cuarta parte del ancho en pantallas medianas (md).
    //key: React necesita un key único cuando se generan componentes dinámicamente en un bucle. En este caso, usamos el índice (index) del array como key.


    return (

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {cards.map((card, index) => (
                <div className="col" key={index}>
                    <div className="card d-flex flex-column align-items-center text-center">
                        <img src={card.img} className="card-img-top" alt={card.title} />
                        <div className="card-body d-flex flex-column justify-content-center">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.text}</p>
                            <a href={props.linkUrl} className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};



export default Card;
