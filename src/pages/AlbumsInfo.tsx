import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { api } from "../utils/api";
import { Album } from "../types/Album";
import { Photos } from "../types/Photos";
import { ButtonBack } from "../components/ButtonBack";

export const AlbumsInfo = () => {
    const [ambumInfo, setAlbumInfo] = useState<Album>();
    const [photo, setPhoto] = useState<Photos[]>([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.id) {
            responseAlbum(params.id);
            responsePhoto(params.id);
        }
    }, []);

    const responseAlbum = async (id: string) => {
        try {
            setLoading(true);
            setError(false);

            const responseAlbum = await api.getAlbum(id);
            setAlbumInfo(responseAlbum);

            setLoading(false);
        } catch (error) {
            setError(true);
            return;
        }
    }

    const responsePhoto = async (id: string) => {
        try {
            setLoading(true);
            setError(false);
            const responsePhoto = await api.getPhotos(id);
            setPhoto(responsePhoto);

            setLoading(false);
        } catch (error) {
            setError(true);
            return;
        }
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div className="py-4">
            <ButtonBack onClick={handleBackButton} />

            {loading && error === false &&
                <p className="font-bond text-2xl">Carregando...</p>
            }
            {error === true &&  
                <h1 className="my-4 text-2xl font-bold">Houve algum erro, estamos consertando!</h1>
            }

            <h1 className="py-4 text-2xl font-bold">{ambumInfo?.title}</h1>
            {photo.map(item => 
                <Link key={item.id} to={`/photo/${item.id}`}>
                    <img 
                        src={item.thumbnailUrl} 
                        className="border border-white py-4 p-3 m-4 hover:opacity-60 cursor-pointer inline-block"
                        title={item.title} 
                    />
                </Link>                 
            )}
        </div>
    );
}