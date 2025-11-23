import { motion } from "motion/react"

import SmallButton from "../ui/SmallButton"
import Button from "../ui/Button"

export default function Project({ data }) {
  if (!data) return null



  const myProject =
    <div className="flex flex-wrap justify-center ">

      {data.project.map((prj, i) => (


        <div className="lg:w-[550px] mt-6 lg:mr-6 ">

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 13 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="rounded-xl lg:rounded-3xl shadow-lg overflow-hidden">

            <img src={prj.image} alt={prj.title} />

            <div className="flex flex-col items-start p-5 lg:p-7">

              <motion.h1
                key={i}
                initial={{ opacity: 0, y: -13 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-2">{prj.title}</motion.h1>
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 13 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="py-0.5 px-2.5 border rounded-full mb-4 w-fit ">{prj.type}</motion.p>

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 13 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="flex gap-3 w-7 lg:w-8 mb-0.5">
                <img src={prj.lng1} />
                <img src={prj.lng2} />
                <img src={prj.lng3} />
                <img src={prj.lng4} />
              </motion.div>

              <motion.div
                key={i}
                initial={{ opacity: 0, x: -13 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="self-end">
                <Button href={prj.link} lable="Preview" />
                {/* <SmallButton href={prj.link} lable="Preview" /> */}
              </motion.div>

            </div>

          </motion.div>


        </div>


      ))
      }
    </div >

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