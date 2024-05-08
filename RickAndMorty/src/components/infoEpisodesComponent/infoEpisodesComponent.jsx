/* eslint-disable react/prop-types */
export const InfoEpisodesComponent = (props) => {
    return (
        <div>
            <p>Nombre episodio: {props.name}</p>
            <p>Fecha de publicación: {props.airDate}</p>
            <p>Número episodio: {props.episode}</p>
            <p>Creado: {props.created}</p>
            <p>Personajes: {props.characters}</p>
        </div>
    );
}
