
import { useParams } from 'react-router-dom';

export const InfoEpisodesPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Nombre del Episodio: {id}</h1>
        </div>
    );
}
