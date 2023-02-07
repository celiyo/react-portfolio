import Wrapper from '../components/Wrapper';
import Section from '../components/Section';
import Hero from '../components/HeroSmall';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects.json';
import '../../styles/Projects.css';

const Projects = () => {
  return (
    <Wrapper>
      <Hero heroTitle={'Projects'} heroLead={"Here's a selection of my recent work."} />
      <Section customClass={'projects'}>
        <div className='container'>
          <div id='cards' className='row no-gutters rounded shadow text-center'>
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  info={project.info}
                  img={project.imgUrl}
                  id={project.id}
                />
              );
            })}
          </div>
        </div>
      </Section>
    </Wrapper>
  );
};

export default Projects;
