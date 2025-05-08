const LangInfo = ({ active, activeItem }) => {
    if (active === null) {
        return <p>Nessun linguaggio selezionato</p>;
    }

    return (
        <div>
            <h3 className="font-bold text-xl pb-2">{activeItem.title}</h3>
            <p>{activeItem.description}</p>
        </div>
    );
};

export default LangInfo;
