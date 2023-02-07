import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 icons-container'>
            <a href='mailto:riana.tysson@gmail.com' target='_blank' rel='noreferrer'>
              <i className='fas fa-envelope'></i>
            </a>
            <a href='https://github.com/celiyo' target='_blank' rel='noreferrer'>
              <i className='fab fa-github'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/adriana-paduraru/'
              target='_blank'
              rel='noreferrer'>
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
          <div className='col-lg-12 copyright'>
            &copy; Copyright
            <strong>
              <span>Adriana Paduraru</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
