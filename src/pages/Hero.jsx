import Button from "../ui/Button"
import { motion } from "motion/react"

export default function Hero({ data }) {


    if (!data) return null

    return (
        <section id="hero" className="pt-20 lg:pt-32">

            <div className="flex flex-col items-center mx-8 lg:flex-row-reverse lg:justify-between lg:mx-10">

                <div >
                    <motion.div
                        initial={{ opacity: 0, y: 7 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center border border-primary rounded-full size-[258px] lg:size-96">
                        <motion.img
                            initial={{ opacity: 0, y: 5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            src={data.photo}
                            alt={data.name}
                            className="size-[216px] lg:size-[336px] shadow-2xl rounded-full" />
                    </motion.div>
                </div>

                <div className="flex flex-col items-center lg:items-start text-center lg:text-start mt-4 lg:mt-0 mx-8  ">

                    <motion.h1
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-xl w-full">Hey, <span className="text-primary text-xl lg:text-3xl font-medium"><span className="text-black">I'm</span> {data.name}</span>👋🏻 </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 17 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold mt-1 lg:mt-0 text-primary lg:text-7xl ">{data.role}
                        <motion.span
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="block text-black">Developer</motion.span>
                    </motion.h2>

                    <motion.h2
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-lg w-72 lg:w-[460px] mt-3 lg:mt-8 lg:text-xl ">{data.desc}</motion.h2>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-lg w-80 lg:w-[360px] lg:text-xl ">{data.desc2}</motion.h2>


                    <motion.div
                        initial={{ opacity: 0, x: -18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className=" flex flex-row justify-center gap-2 lg:justify-start mt-4 mb-12 lg:mb-12">
                        <Button href="https://linktr.ee/mushawwirrd" lable="Contact Me" />
                    </motion.div>

                    {/* <div className="flex flex-row justify-center mx-5 gap-5 lg:justify-start mt-5">

                        <ButtonIcon
                            href="https://www.linkedin.com/in/mushawwir-rudianto"
                            src="/linkedin.svg"
                            target="_blank"
                            alt="Linked In"
                        />

                        <ButtonIcon
                            href="https://github.com/mushawwirrd"
                            src="/github.svg"
                            target="_blank"
                            alt="Github"
                        />

                    </div> */}
                </div>


            </div>

        </section>

    )
}



