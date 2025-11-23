import { motion } from "motion/react"

export default function AboutMe({ data }) {
    if (!data) return "null"
    return (
        <section id="about" className="pt-16 lg:pt-28">
            <div >
                <div className="flex flex-col lg:flex-row mx-8 lg:mx-10">

                    <div>

                        <h1 className='text-primary text-3xl lg:text-4xl  font-bold'>About Me</h1>

                        <div

                            className="mt-5 text-lg md:w-11/12 md:mx-12 lg:text-xl ">
                            <motion.p
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="mb-3">
                                {data.prg1}
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="mb-3">
                                {data.prg2}
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="mb-3">
                                {data.prg3}
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="mb-3">
                                {data.prg4}
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}>
                                {data.prg5}
                            </motion.p>

                            {/* <p >{data.prg6}</p> */}
                        </div>


                    </div>

                </div>
            </div>

        </section>
    )
}
