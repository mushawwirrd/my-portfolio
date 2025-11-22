import { useState } from "react"
import OutLineButton from "../ui/OutlineButton"
import { ArrowUpRightIcon } from "lucide-react"


export default function Experience({ data }) {
    const [isOpen, setOpen] = useState(false)

    if (!data) return null

    const myExperience =
        data.experience.map(ex => {
            return (

                <div className="flex flex-row items-start justify-between mx-6 border-b-2 py-5 lg:mx-56 ">

                    <div id={ex.id}>

                        <h1 className="text-lg md:text-2xl font-semibold ">{ex.position}</h1>
                        <p className="lg:font-semibold text-slate-400">{ex.date}</p>

                    </div>

                    <div id={ex.id} className="mt-5 flex items-start md:w-24">
                        <h1 className="text-lg lg:text-xl font-bold text-primary">{ex.company}</h1>
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

                    <div className=" flex justify-center mt-10">
                        <OutLineButton icon2={<ArrowUpRightIcon />} href="https://drive.google.com/file/d/1L_9BVBXeRk1qUylPYyfN0jveGLbi-TZY/view?usp=drivesdk" lable="My Resume" />

                    </div>

                </div>
            </div>

        </section>
    )
}
