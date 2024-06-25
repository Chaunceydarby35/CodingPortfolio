import { BsFillPatchCheckFill } from 'react-icons/bs'
import'../Experience/Experience.css'




const Experience = () => {
  return (
    <section id='experience'>
        <h5>The Skills I have</h5>
        <h2>My Experience</h2>

        <div className='container experience_container'>
            <div className="experience_frontend">
                <h3>Front-end Development</h3>
                <div className="experience_content">
                    <article className='experience_detail'>
                        <BsFillPatchCheckFill className='experience_icon'/>
                        <div>
                            <h4>Tailwind</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience_detail'>
                        <BsFillPatchCheckFill className='experience_icon'/>
                        <div>
                            <h4>Bulma</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience_detail'>
                        <BsFillPatchCheckFill className='experience_icon'/>
                        <div>
                            <h4>Javascript</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience_detail'>
                        <BsFillPatchCheckFill className='experience_icon'/>
                        <div>
                            <h4>Github</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience_detail'>
                        <BsFillPatchCheckFill className='experience_icon'/>
                        <div>
                            <h4>React.JS</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience_detail'>
                        <BsFillPatchCheckFill className='experience_icon'/>
                        <div>
                            <h4>Next.JS</h4>
                            <small className='text-light'>Novice</small>
                        </div>
                    </article>
                    <article className='experience_detail'>
                        <BsFillPatchCheckFill className='experience_icon'/>
                        <div>
                            <h4>Github</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience_detail'>
                        <BsFillPatchCheckFill className='experience_icon'/>
                        <div>
                            <h4>NPM</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience_detail'>
                        <BsFillPatchCheckFill className='experience_icon'/>
                        <div>
                            <h4>Next.JS</h4>
                            <small className='text-light'>Novice</small>
                        </div>
                    </article>
                </div>
            </div>

            {/* <div className="experience_backend">
                <h3>Back-end Development</h3>
                <div className="experience_content">
                    <article className='experience_detail'>
                        <BsFillPatchCheckFill className='experience_icon'/>
                        <div>
                            <h4>Node.JS</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience_detail'>
                        <BsFillPatchCheckFill className='experience_icon'/>
                        <div>
                            <h4>MySQL</h4>
                            <small className='text-light'>Novice</small>
                        </div>
                    </article>
                    <article className='experience_detail'>
                        <BsFillPatchCheckFill className='experience_icon'/>
                        <div>
                            <h4>Express.JS</h4>
                            <small className='text-light'>Novice</small>
                        </div>
                    </article>
                    <article className='experience_detail'>
                        <BsFillPatchCheckFill className='experience_icon'/>
                        <div>
                            <h4>MongoDB</h4>
                            <small className='text-light'>Novice</small>
                        </div>
                    </article>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default Experience