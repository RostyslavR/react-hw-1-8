import PropTypes from 'prop-types';
import { Table, TR } from './TransactionHistory.styled';
import { TransactionsItem } from './TransactionItem';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <thead>
        <TR>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TR>
      </thead>

      <tbody>
        {transactions.map(item => (
          <TR key={item.id}>
            <TransactionsItem item={item} />
          </TR>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ).isRequired,
};
