/* eslint-disable react/prop-types */


export const CardsComponent = (props) => {

    return (
        <div>
            <h3>{props.name}</h3>
            <img src={props.image} alt={props.name} />
            <p>{props.species}</p>
        </div>
    )
}
