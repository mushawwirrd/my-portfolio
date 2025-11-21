
export default function Skill({ data }) {

    if (!data) return null

    const mySkill =
        <div className=" ">
            <div className='flex flex-wrap  lg:mx-72 justify-center '>

                {data.skill.map(skl => {
                    return (

                        <div className="flex flex-col items-center justify-center mx-3 lg:mx-4 mt-10 lg:mt-5  ">
                          
                            <div className="">
                                <img src={skl.skillLogo} alt={skl.skillName} className="w-14 h-14 md:w-20 md:h-20" />
                            </div>

                            <div>
                                <h1 className="text-lg md:text-xl font-medium ">{skl.skillName}</h1>
                            </div>

                        </div>

                    )
                })}

            </div>
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
