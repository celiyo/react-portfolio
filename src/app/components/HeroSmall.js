import Section from './Section';
import '../../styles/Hero.css';

const HeroSmall = ({ heroTitle, heroLead }) => {
  return (
    <Section customClass={'jumbotron jumbotron-fluid hero hero-small'}>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>{heroTitle}</h1>
            <p className='lead'>{heroLead}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSmall;
