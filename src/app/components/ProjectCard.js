import { Link } from 'react-router-dom';

const ProjectCard = ({ id, name, info, img }) => {
  return (
    <div className='col-lg-4 bg-white card-content'>
      <div className='card'>
        <div className='card-body'>
          <img src={img} alt='Projects' />
          <h5 className='card-title mt-4'>
            <Link to={`/projects/${id}`}>{name}</Link>
          </h5>
          <p className='card-text'>{info}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
