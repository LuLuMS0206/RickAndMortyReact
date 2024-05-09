/* eslint-disable react/prop-types */

import './infoEpisodesComponent.css'
export const InfoEpisodesComponent = (props) => {
    return (
        <div className="infoEpisodesComponent">
            <p>Nombre episodio: {props.name}</p>
            <p>Fecha de publicación: {props.airDate}</p>
            <p>Número episodio: {props.episode}</p>
            <p>Creado: {props.created}</p>
    
        </div>
    );
}
