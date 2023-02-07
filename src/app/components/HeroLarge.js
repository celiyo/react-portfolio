import Section from './Section';
import profileImg from '../../assets/images/profile.jpg';
import '../../styles/Hero.css';

const HeroLarge = ({ heroTitle, heroLead }) => {
  return (
    <Section customClass={'jumbotron jumbotron-fluid min-vh-100 hero hero-large'}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7 col-12 hero-text'>
            <h1>{heroTitle}</h1>
            <p className='lead'>{heroLead}</p>
            <a className='btn text-uppercase btn-large custom-button' href='#about' role='button'>
              About me
            </a>
          </div>
          <div className='col-md-5 col-12 d-flex hero-img'>
            <img src={profileImg} alt='Profile' />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroLarge;
