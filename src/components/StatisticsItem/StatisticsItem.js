import PropTypes from 'prop-types';
import css from './StatisticsItem.module.css';
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export default function StatItem({ id, label, percentage }) {
  return (
    <li
      className={css.item}
      key={id}
      style={{ backgroundColor: randomColor() }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage} %</span>
    </li>
  );
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
