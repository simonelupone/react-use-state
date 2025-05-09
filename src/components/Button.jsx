const Button = ({ languages, active, setActive }) => {
    return (
        <div>
            {languages.map((lang) => (
                <button
                    key={`lang-${lang.id}`}
                    onClick={() => setActive(lang === active ? null : lang)}
                    className={`font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer ${active === lang ? "bg-yellow-500 text-black" : "bg-blue-700 text-white"}`}>
                    {lang.title}
                </button>
            ))}
        </div>
    );
};

export default Button;
