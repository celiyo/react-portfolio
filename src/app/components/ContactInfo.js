import resume from '../../assets/resume/resume.pdf';

const ContactInfo = () => {
  return (
    <div className='col-md-6'>
      <div className='contact-email'>
        <i className='fas fa-envelope mr-2'></i>
        <a href='mailto:riana.tysson@gmail.com' rel='noreferrer' target={'_blank'}>
          riana.tysson@gmail.com
        </a>
      </div>
      <div className='contact-github'>
        <i className='fab fa-github mr-2'></i>
        <a href='https://github.com/celiyo' rel='noreferrer' target={'_blank'}>
          https://github.com/celiyo
        </a>
      </div>
      <div className='contact-linkedin'>
        <i className='fab fa-linkedin mr-2'></i>
        <a href='https://www.linkedin.com/in/adriana-paduraru/' rel='noreferrer' target={'_blank'}>
          https://www.linkedin.com/in/adriana-paduraru
        </a>
      </div>
      <div className='contact-cv'>
        <i className='fas fa-file-pdf mr-2'></i>
        <a href={resume} download='resume' rel='noreferrer' target={'_blank'}>
          Download my Resume
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
