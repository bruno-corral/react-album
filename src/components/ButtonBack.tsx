type Props = {
    onClick: () => void
}

export const ButtonBack = ({onClick}: Props) => {
    return (
        <div>
            <button className="border border-white p-3 rounded-md font-bold hover:opacity-60" onClick={onClick}>Voltar</button>
        </div>
    );
}