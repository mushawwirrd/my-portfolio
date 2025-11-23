import { ArrowUpRight, MoveRightIcon, MoveUpRight } from "lucide-react"
import { motion } from "motion/react"

import ButtonIcon from "../ui/IconButton"
import IconTextButton from "../ui/IconTextButton"


function Footer({ data }) {

    if (!data) return null


    return (
        <footer className="pt-20 ">
            <div className="pt-8 pb-4  border-t border-t-primary/15 ">

                <div className="flex flex-col items-center  justify-center mx-8 lg:mx-10 ">

                    <div className="w-24 md:w-28 mb-8">
                        <img src="/muru.png" alt="" />
                    </div>

                    <div className="text-center mb-5">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="text-xl lg:text-2xl">
                            Have an awesome idea?
                            <motion.span
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="block">
                                Let's bring it to the screen!
                            </motion.span>
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -7 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center mb-20 ">
                        <IconTextButton icon2={<MoveRightIcon />} href="https://linktr.ee/mushawwirrd" lable={"Bring To Screen"} />
                    </motion.div>

                    <div className="flex flex-row justify-center gap-5 lg:justify-start mb-4">

                        <ButtonIcon
                            href="https://www.linkedin.com/in/mushawwir-rudianto"
                            src="linkedin.svg"
                            target="_blank"
                            alt="Linked In"
                        />

                        <ButtonIcon
                            href="https://github.com/mushawwirrd"
                            src="github.svg"
                            target="_blank"
                            alt="Github"
                        />

                        <ButtonIcon
                            href="https://www.behance.net/mushawwrudiant"
                            src="behance.svg"
                            target="_blank"
                            alt="Behance"
                        />

                    </div>

                    <div className="w-full text-center">
                        <p>{data.copy}</p>
                        <p className=""> {data.message} Mushawwir R</p>
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer