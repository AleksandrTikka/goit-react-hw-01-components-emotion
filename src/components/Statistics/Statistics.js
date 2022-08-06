import StatItem from '../StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';
import css from './Statistics.module.css'



export default function Statistics({title, stats,}) {
    // const {id, label, percentage,} = stats
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>Upload stats</h2>}
            <ul className={css.statList}>
                    {stats.map((stat) =>
                        // <li class="item" key={stat.id}>
                        //     <span class="label">{stat.label}</span>
                        //     <span class="percentage">{stat.percentage} %</span>
                        // </li>
                        <StatItem 
                            key={stat.id}
                            label={stat.label}
                            percentage={stat.percentage}
                                
                        />
                    )}
            
                </ul>
        </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape
        ({
            id: PropTypes.string.isRequired,
            // label: PropTypes.string.isRequired,
            // percentage: PropTypes.number.isRequired,
        })).isRequired
};