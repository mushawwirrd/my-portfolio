import { useState } from "react"
import { ArrowUpRightIcon } from "lucide-react"

import OutLineButton from "../ui/OutlineButton"

import { motion } from "motion/react"


export default function Experience({ data }) {
    const [isOpen, setOpen] = useState(false)

    if (!data) return null

    const myExperience =
        data.experience.map((ex, i) => {
            return (

                <div className="flex flex-row items-start justify-between mx-6 border-b-2 py-5 lg:mx-56 ">

                    <div id={ex.id}>
                        <motion.h1
                            key={i}
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="text-lg md:text-2xl font-semibold ">
                            {ex.position}
                        </motion.h1>
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="lg:font-semibold text-slate-400">
                            {ex.date}
                        </motion.p>

                    </div>

                    <div id={ex.id} className="mt-5 flex items-start md:w-24">
                        <motion.h1
                            key={i}
                            initial={{ opacity: 0, x: 11 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="text-lg lg:text-xl font-bold text-primary">{ex.company}</motion.h1>
                    </div>


                </div>

            )
        })

    return (
        <section className="pt-16 ">

            <div >
                <div className="mx-8 lg:mx-10 ">

                    <h1 className='text-primary text-3xl lg:text-4xl font-bold'>Experience</h1>

                    <div className=" mt-5  ">
                        {myExperience}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className=" flex justify-center mt-10">
                        <OutLineButton icon2={<ArrowUpRightIcon />} href="https://drive.google.com/file/d/1-4fzFVcOW51sCo_KAsS1glFCeLJ6lWiu/view?usp=drivesdk" lable="My Resume" />
                    </motion.div>

                </div>
            </div>

        </section>
    )
}
