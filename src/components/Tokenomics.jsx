import { hero3 } from "../assets"
import styles from "../style"

const Tokenomics = () => {
    return (
        <div id="tokenomics" className={`bg-white rounded-lg ${styles.padding} my-4`}>
            <h1 className="font-semibold text-[24px] text-black-10 mb-4">Tokenomics</h1>
            <h2 className="font-semibold text-black-10 mb-4">Initial Distribution</h2>
            <img src={hero3} alt="" className="h-44 my-2" />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam deleniti cupiditate reiciendis eligendi adipisci, nihil, dolorem autem amet molestias, ratione necessitatibus eius sunt. Quae praesentium cumque, suscipit vel maxime officia, ab nam dolorem ex aliquid veritatis obcaecati amet aperiam velit voluptate dolores sapiente nihil repellat ratione optio tempora numquam quas. Quod illum error optio iusto officia, incidunt exercitationem. Exercitationem, ab.
            </p>
        </div>
    )
}

export default Tokenomics
