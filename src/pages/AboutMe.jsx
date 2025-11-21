

export default function AboutMe({ data }) {
    if (!data) return "null"
    return (
        <section id="about" className="pt-16">
            <div >
                <div className="flex flex-col lg:flex-row mx-8 lg:mx-10">

                    <div>

                        <h1 className='text-primary text-3xl lg:text-4xl  font-bold'>About Me</h1>
                            
                        <div className="mt-5 text-lg lg:w-11/12 lg:mx-12 lg:text-xl ">
                            <p className="mb-3">{data.prg1}</p>
                            <p className="mb-3">{data.prg2}</p>
                            <p className="mb-3">{data.prg3}</p>
                            <p className="mb-3">{data.prg4}</p>
                            <p >{data.prg5}</p>
                            {/* <p >{data.prg6}</p> */}
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}
