import PropTypes from 'prop-types';
import { StatList, StatSection, StatItem } from './Statistics.styled';

export const Statistics = ({ title, statistics }) => {
  return (
    <StatSection>
      {title && <h2>{title}</h2>}
      <StatList>
        {statistics.map(({ id, label, percentage }) => (
          <StatItem key={id} typeItem={label}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
