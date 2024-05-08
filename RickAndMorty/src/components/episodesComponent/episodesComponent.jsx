/* eslint-disable react/prop-types */

import { NavLink } from 'react-router-dom';

export const EpisodesComponent = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>Fecha de Publicación: {props.airDate}</p>
            <NavLink to={`/infoEpisodes/${props.id}`}>
                <button>Ver más</button>
            </NavLink>
        </div>
    );
}


