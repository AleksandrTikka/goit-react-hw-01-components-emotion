import PropTypes from 'prop-types';

export default function StatItem({ id, label, percentage }) {
    // const { label, percentage} = stat
    return (
          
    <li className="item" key={id} >
        <span className="label">{label}</span>
        <span className="percentage">{percentage} %</span>
    </li>)
};

StatItem.propTypes = {
//   props: PropTypes.shape({
    // id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
//   }).isRequired,
};