import styles from'./ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png'
import fitlift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className ='SectionTitle'> Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={viberr} link="https://github.com/vikku8056/amazon_clone"
            h3="Amazon clone"
            p="Amazon clone with html & css"
            />
            <ProjectCard src={freshBurger} link="https://drive.google.com/drive/folders/1u_2rdRegGnT0Ej21un5nuw9mDcBdIqCa?usp=sharing"
            h3="Data Analytics"
            p="Final project blinkit data analytics"
            />
            <ProjectCard src={hipsster} link="https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?backgroundImageURL=https%3A%2F%2Fau-syd.assistant.watson.cloud.ibm.com%2Fpublic%2Fimages%2Fupx-36bba9eb-6161-4a69-b13d-1b8712288e80%3A%3A82f5b0a3-7049-420d-9423-5ece59b9e86e&integrationID=be4e272e-9a36-44f1-8c76-444596132cea&region=au-syd&serviceInstanceID=36bba9eb-6161-4a69-b13d-1b8712288e80"
            h3="Certificate bot"
            p="Showcase my Certificates"
            />
            <ProjectCard src={fitlift} link="https://github.com/vikku8056/Vikas_Portfolio_latest"
            h3="Vikas Portfolio"
            p="this portfolio project"
            />
        </div>
    </section>
  )
}

export default Projects