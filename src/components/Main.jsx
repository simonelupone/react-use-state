import { useState } from "react"

const Main = ({ languages }) => {

    const [active, setActive] = useState(null)

    return (
        <main>
            <div className="w-full mt-20 flex justify-center">
                <div className="w-7xl">

                    <div className="">
                        {languages.map((lang) => {
                            return (
                                <button onClick={() => setActive(lang.id)} key={`lang-${lang.id}`} className={`font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer ${active === lang.id ? 'bg-yellow-500 text-black' : 'bg-blue-700 text-white'}`}>{lang.title}</button>
                            )
                        })}
                    </div>

                </div>
            </div>
        </main >
    )
}

export default Main