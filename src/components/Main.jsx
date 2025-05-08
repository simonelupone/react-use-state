import { useState } from "react"

const Main = ({ languages }) => {

    const [active, setActive] = useState(null)
    const activeItem = languages.find((lang) => lang.id === active)

    return (
        <main>
            <div className="w-full mt-20 flex flex-col items-center justify-center">
                <div className="w-7xl">

                    <div>
                        {languages.map((lang) => {
                            return (
                                <button onClick={() => setActive(active === lang.id ? null : lang.id)} key={`lang-${lang.id}`} className={`font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer ${active === lang.id ? 'bg-yellow-500 text-black' : 'bg-blue-700 text-white'}`}>{lang.title}</button>
                            )
                        })}
                    </div>

                </div>

                <div className="w-7xl mt-10 p-4 border border-gray-300 rounded">
                    {active === null ? (
                        <p>Nessun linguaggio selezionato</p>
                    ) : (
                        <div>
                            <h3 className="font-bold text-xl pb-2">{activeItem.title}</h3>
                            <p>{activeItem.description}</p>
                        </div>
                    )}
                </div>

            </div>
        </main >
    )
}

export default Main