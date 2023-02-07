const SkillItem = ({ name, val, valnow, valmin, valmax, style }) => {
  return (
    <div className='progress'>
      <span className='skill'>
        {name} <i className='val'>{val}</i>
      </span>
      <div className='progress-bar-container'>
        <div
          className='progress-bar'
          role='progressbar'
          aria-valuenow={valnow}
          aria-valuemin={valmin}
          aria-valuemax={valmax}
          style={style}></div>
      </div>
    </div>
  );
};

export default SkillItem;
