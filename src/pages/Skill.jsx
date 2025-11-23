import { motion, scale } from "motion/react"

export default function Skill({ data }) {

    if (!data) return null

    const mySkill =
        <div className='flex flex-wrap  lg:mx-72 justify-center '>

            {data.skill.map((skl, i) => {
                return (

                    <div className="flex flex-col items-center justify-center mx-3 lg:mx-4 mt-10 lg:mt-5 ">
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: -11 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="">
                            <img src={skl.skillLogo} alt={skl.skillName} className="w-14 h-14 md:w-20 md:h-20" />
                        </motion.div>

                        <div>
                            <motion.h1
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="text-lg md:text-xl font-medium ">{skl.skillName}</motion.h1>
                        </div>

                    </div>

                )
            })}

        </div>


    return (

        <section className='pt-16 lg:pt-28'>
            <div >
                <div className='mx-8 lg:mx-10'>

                    <h1 className='text-primary text-3xl lg:text-4xl font-bold'>Skill</h1>

                    <div>
                        {mySkill}
                    </div>

                </div>
            </div>

        </section>
    )
}
