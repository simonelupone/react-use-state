import { useState } from "react";
import Button from "./Button";
import LangInfo from "./LangInfo";

const Main = ({ languages }) => {
    const [active, setActive] = useState(null);
    const activeItem = languages.find((lang) => lang.id === active);

    return (
        <main>
            <div className="w-full mt-20 flex flex-col items-center justify-center">
                <div className="w-7xl">
                    <Button
                        languages={languages}
                        active={active}
                        setActive={setActive}
                    />
                </div>

                <div className="w-7xl mt-10 p-4 border border-gray-300 rounded">
                    <LangInfo
                        active={active}
                        activeItem={activeItem}
                    />
                </div>
            </div>
        </main>
    );
};

export default Main;
