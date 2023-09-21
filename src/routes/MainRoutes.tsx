import { useRoutes } from 'react-router-dom';

import { AlbumsInfo } from '../pages/AlbumsInfo';
import { AlbumList } from '../components/AlbumList';
import { NotFound } from '../pages/NotFound';
import { PhotoInfo } from '../pages/PhotoInfo';

export const MainRoutes = () => {
    return useRoutes([
        {path: '*', element: <NotFound />},
        {path: '/', element: <AlbumList />},
        {path: '/album/:id', element: <AlbumsInfo />},
        {path: '/photo/:id', element: <PhotoInfo />},
    ]);
}