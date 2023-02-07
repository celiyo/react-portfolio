import Section from '../components/Section';
import Skill from './Skill';
import skills from '../data/skills.json';
import '../../styles/About.css';

const About = () => {
  return (
    <Section customId={'about'} customClass={'about'}>
      <div className='container'>
        <div className='title-content'>
          <h2 className='text-uppercase'>About</h2>
          <p>
            I am a web designer/developer based in the UK. I am passionate about web design and
            enjoy creating applications for web and mobile devices.
          </p>
        </div>
        <div className='skills' id='skills'>
          <div className='row'>
            <div className='col-12'>
              {skills.map((skill) => {
                return (
                  <Skill
                    key={skill.id}
                    name={skill.name}
                    val={skill.val}
                    valnow={skill.valnow}
                    valmin={skill.valmin}
                    valmax={skill.valmax}
                    style={{ width: `${skill.val}` }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
