import { Link } from 'react-router-dom';


export const NotFound = () => {
    return (
        <div className='py-4'>
            <Link to='/'><button className="border border-white p-3 rounded-md font-bold hover:opacity-60">Voltar</button></Link>
            <h1 className="text-2xl font-bold p-3">Página não encontrada!!!</h1>
        </div>
    );
}