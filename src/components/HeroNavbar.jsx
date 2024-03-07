import { useState } from "react"
import { heroNavLinks } from "../constants"
import styles from "../style"

const HeroNavbar = () => {
    const [navIdx, setNavIdx] = useState(0);
    
    return (
        <nav className={`${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <div className="w-full flex justify-between items-center border-b-[1px] border-black-6 my-4">
                    <ul className="list-none flex items-center flex-1 overflow-x-auto">
                        {heroNavLinks.map((navLink, index) => (
                            <li
                                key={navLink.id}
                                className={`${index === navIdx ? "text-primary-5 border-b-[3px]  border-primary-5" : "text-black-8"} font-inter font-bold  cursor-pointer text-[16px] mr-10 py-2`}
                            >
                                <a
                                    href={`#${navLink.id}`}
                                    onClick={() => setNavIdx(index)}
                                >
                                    {navLink.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeroNavbar
