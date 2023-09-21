import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ButtonBack } from "../components/ButtonBack";
import { Photos } from "../types/Photos";
import { api } from "../utils/api";

export const PhotoInfo = () => {
    const [photoInfo, setPhotoInfo] = useState<Photos>();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    }

    useEffect(() => {
        if (params.id) {
            infoPhoto(params.id);
        }
    }, []);

    const infoPhoto = async (id: string) => {
        try {
            setLoading(true);
            setError(false);

            const response = await api.getPhoto(id);
            setPhotoInfo(response);

            setLoading(false);
        } catch (error) {
            setError(true);
            return;
        }
    }

    return (
        <div className="my-4">
            <ButtonBack onClick={handleBackButton} />

            {loading && error === false &&
                <p className="font-bond text-2xl">Carregando...</p>
            }
            {error === true &&
                <h1 className="my-4 text-2xl font-bold">Houve algum erro, estamos consertando!</h1>
            }

            <h1 className="py-4 text-2xl font-bold">{photoInfo?.title}</h1>
            <img src={photoInfo?.url} />
        </div>
    );
}