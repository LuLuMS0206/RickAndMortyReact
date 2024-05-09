/* eslint-disable react/prop-types */

import { NavLink } from 'react-router-dom';
import './episodesComponent.css'

export const EpisodesComponent = (props) => {
    return (
        <div className='episodesComponent'>
            <h3>{props.name}</h3>
            <p>Fecha de Publicación: {props.airDate}</p>
            <NavLink to={`/infoEpisodes/${props.id}`}>
                <button className='button__episodes'>Ver más</button>
            </NavLink>
        </div>
    );
}


