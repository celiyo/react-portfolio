import Wrapper from '../components/Wrapper';
import Hero from '../components/HeroLarge';
import About from '../components/About';

const Home = () => {
  return (
    <Wrapper>
      <Hero heroTitle={'Adriana Paduraru'} heroLead={'Front-End Web Developer'} />
      <About />
    </Wrapper>
  );
};

export default Home;
