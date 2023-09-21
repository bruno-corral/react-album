import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Album } from "../types/Album";
import { api } from "../utils/api";

export const AlbumList = () => {
    const [albumList, setAlbumList] = useState<Album[]>([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const albums = async () => {
        try {
            setLoading(true);
            setError(false);

            const response = await api.getAlbums();
            setAlbumList(response);

            setLoading(false);
        } catch (error) {
            setError(true);
            return;
        }
    }

    useEffect(() => {
        albums();
    }, []);

    return (
        <div className="my-4">
            {loading && error === false &&
                <p className="font-bond text-2xl">Carregando...</p>
            }
            {error === true &&  
                <h1 className="my-4 text-2xl font-bold">Houve algum erro, estamos consertando!</h1>
            }

            <ul>
                {albumList.map(item =>
                    <Link key={item.id} to={`/album/${item.id}`}>
                        <li className="border border-white py-4 p-3 m-4 hover:opacity-60 cursor-pointer">{item.title}</li>
                    </Link>   
                )}
            </ul>
        </div>
    );
}