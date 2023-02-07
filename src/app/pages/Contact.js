import Wrapper from '../components/Wrapper';
import Section from '../components/Section';
import Hero from '../components/HeroSmall';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import '../../styles/Contact.css';

const Contact = () => {
  return (
    <Wrapper>
      <Hero heroTitle={'Contact'} heroLead={'Reach out to me via the form below.'} />
      <Section customClass={'contact-form'}>
        <div className='container'>
          <div className='row'>
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </Section>
    </Wrapper>
  );
};

export default Contact;
