import { motion, useInView } from "framer-motion"
import SmallButton from "../ui/SmallButton"


export default function Project({ data }) {
  if (!data) return null

  const myProject =
    <div className="flex flex-wrap justify-center ">

      {data.project.map(prj => (
        <div className="lg:w-[550px] mt-6 lg:mr-6 ">

          <div className="rounded-xl lg:rounded-3xl  shadow-lg overflow-hidden">

            <img src={prj.image} alt={prj.title} />

            <div className="flex flex-col items-start p-6 lg:p-7">

              <h1 className="text-2xl font-bold mb-2">{prj.title}</h1>
              <p className="py-0.5 px-2.5 border rounded-full mb-4 w-fit ">{prj.type}</p>

              <div className="flex gap-3 w-7 lg:w-8 mb-0.5">
                <img src={prj.lng1} />
                <img src={prj.lng2} />
                <img src={prj.lng3} />
                <img src={prj.lng4} />
              </div>

              <div className="self-end">
                <SmallButton href={prj.link} lable="Preview"/>
              </div>

            </div>

          </div>

        </div>
      ))}
    </div>

  return (

    <section id='project' className='pt-16'>

      <div>
        <div className='mx-5 lg:mx-10'>

          <h1 className='text-primary text-3xl lg:text-4xl font-bold mx-8 lg:mx-0'>Project</h1>

          <div className="mt-5">
            {myProject}
          </div>

        </div>
      </div>

    </section>
  )
}