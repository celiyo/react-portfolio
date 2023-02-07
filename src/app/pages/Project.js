import { useParams } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import Section from '../components/Section';
import Hero from '../components/HeroSmall';
import projects from '../data/projects.json';
import '../../styles/Project.css';

const Project = () => {
  const params = useParams();
  const project = projects.find((project) => project.id === parseInt(params.id));

  return (
    <Wrapper>
      <Hero heroTitle={project.name} heroLead={project.info} />
      <Section customClass={'project-single'}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 project-links'>
              <a
                className='btn text-uppercase btn-large custom-button'
                href={project.demoUrl}
                role='button'
                rel='noreferrer'
                target={'_blank'}>
                Demo
              </a>
              <a
                className='btn text-uppercase btn-large custom-button'
                href={project.gitUrl}
                role='button'
                rel='noreferrer'
                target={'_blank'}>
                GitHub repository
              </a>
            </div>
            <div className='col-md-6 project-img'>
              <img src={project.imgUrl} alt='Profile Single' />
            </div>
          </div>
        </div>
      </Section>
    </Wrapper>
  );
};

export default Project;
