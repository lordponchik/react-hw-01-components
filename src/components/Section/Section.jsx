import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ title, children }) {
  return (
    <section className={s.section}>
      {title && <h3 className={s.title}>{title}</h3>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
