const LangInfo = ({ active }) => {
    if (active === null) {
        return <p>Nessun linguaggio selezionato</p>;
    }

    const { title, description } = active

    return (
        <div>
            <h3 className="font-bold text-xl pb-2">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default LangInfo;
