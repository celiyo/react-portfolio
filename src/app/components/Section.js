const Section = ({ children, customClass, customId }) => {
  return (
    <section id={customId} className={customClass}>
      {children}
    </section>
  );
};

export default Section;
