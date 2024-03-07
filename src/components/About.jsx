import { hero1, hero2 } from '../assets'
import { MdOutlineArrowRightAlt } from "react-icons/md";

import styles from '../style'

const About = () => {
    return (
        <div id="about" className={`bg-white rounded-lg ${styles.padding} my-4`}>
            <h1 className="font-semibold text-[24px] text-black-10 mb-4">About Bitcoin</h1>
            <div className="border-b-2 pb-4 mb-4">
                <h2 className='font-semibold mb-2'>What is Bitcoin?</h2>
                <p className='text-sm'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus et adipisci soluta repellendus assumenda sequi non corrupti rerum totam, ut eaque error ullam corporis ratione libero iusto quia deserunt in atque, odit temporibus at.
                </p>
            </div>
            <div className="border-b-2 pb-4 mb-4">
                <h2 className='font-semibold mb-2'>Lorem ipsum dolor sit amet.</h2>
                <p className='text-sm pb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veritatis ea alias rerum illum numquam amet, maxime nihil minima quasi vero odio est harum quis beatae aperiam commodi at enim in odit voluptatem? Debitis animi dolorum excepturi quos natus nemo placeat dolores, ipsam sequi nisi.
                </p>
                <p className='text-sm pb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad quas vel, alias dolores maiores quaerat ullam. Quos aspernatur voluptates neque iure accusantium. Ipsa molestias perspiciatis, repellat debitis praesentium voluptas deleniti! At commodi atque iure sit debitis error culpa iusto, unde quisquam excepturi cupiditate nam ullam nemo sequi nostrum repellat?
                </p>
                <p className='text-sm pb-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, est quas. Quibusdam, nulla qui. A debitis saepe possimus ullam aut consectetur. Ad, laudantium. Odit, dolorum necessitatibus iure dolores, voluptatum molestiae ratione impedit commodi iusto illum minima quia aut cum explicabo.
                </p>
            </div>
            <div className="border-b-2 pb-4 mb-4">
                <h2 className='font-semibold mb-2 text-[24px]'>Already holding Bitcoin?</h2>
                <div className="flex gap-4">
                    <div className="flex gap-8 bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-lg max-w-[400px]">
                        <img src={hero1} alt="calculate asset" className='h-32  rounded-lg' />
                        <div className="flex flex-col justify-around">
                            <h1 className="font-bold text-[24px] text-white">
                                Calculate your Profits
                            </h1>
                            <div>
                                <button className='flex justify-center items-center gap-2 rounded-lg font-semibold bg-white px-2 py-1'>
                                    Check Now <MdOutlineArrowRightAlt size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-8 bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-lg max-w-[400px]">
                        <img src={hero2} alt="calculate asset" className='h-32  rounded-lg' />
                        <div className="flex flex-col justify-around">
                            <h1 className="font-bold text-[24px] text-white">
                                Calculate your Tax Liability
                            </h1>
                            <div>
                                <button className='flex justify-center items-center gap-2 rounded-lg font-semibold bg-white px-2 py-1'>
                                    Check Now <MdOutlineArrowRightAlt size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, nemo quasi quo quis est necessitatibus repudiandae quisquam veniam eos odit iure adipisci quas ipsum, corporis pariatur repellendus officia sapiente qui unde natus? Consectetur, laborum. Omnis assumenda nobis excepturi iusto accusamus.
            </span>
        </div>
    )
}

export default About
