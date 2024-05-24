import '../Projects/Projects.css'
import Gobble from '/Images/Gobble!.png'
import Weather from '/Images/WeatherSnap.png'
import Phrases from '/Images/PhrasesApp.png'



const Projects = () => {
  return (
    <section id="projects">
    <h5>My Recent Works</h5>
    <h2>Projects</h2>

    <div className="container project_container">
        <article className="project_item">
            <div className="project_item_image">
                <img src={Weather} alt="WeatherSnap" />
            </div>
            <h3>WeatherSnap</h3>
            <small className="text-light">CSS</small>
            <br />
            <small className="text-light">Javascript</small>
            <br />
            <small className="text-light">React.JS</small>
            <div className="project_item_btn">
                <a href="https://github.com/Chaunceydarby35/WeatherSnap" className="btn">Github</a>
            </div>
        </article>
        <article className="project_item">
            <div className="project_item_image">
                <img src={Phrases} alt="Phrases" />
            </div>
            <h3>Phrases</h3>
            <small className="text-light">CSS</small> 
            <br />
            <small className="text-light">React.JS</small>
            <div className="project_item_btn">
                <a href="https://github.com/Chaunceydarby35/Phrases" className="btn">Github</a>
            </div>
        </article>
        <article className="project_item">
            <div className="project_item_image">
                <img src={Gobble} alt="Gobble" />
            </div>
            <h3>Gobble!</h3>
            <small className="text-light">CSS</small>
            <br />
            <small className="text-light">Javascript</small>
            <br />
            <small className="text-light">React.JS</small>
            <div className="project_item_btn">
                <a href="https://github.com/Chaunceydarby35/Food-Del-App" className="btn">Github</a>
            </div>
        </article>
    </div>

</section>
  )
}

export default Projects