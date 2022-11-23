import PropTypes from 'prop-types';
import {
  Table,
  TableTableRow,
  TableHeaderTitle,
  TableData,
} from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <TableTableRow>
          <TableHeaderTitle>Type</TableHeaderTitle>
          <TableHeaderTitle>Amount</TableHeaderTitle>
          <TableHeaderTitle>Currency</TableHeaderTitle>
        </TableTableRow>
      </thead>

      <tbody>
        {items.map(item => (
          <TableTableRow key={item.id}>
            <TableData>{item.type}</TableData>
            <TableData>{item.amount}</TableData>
            <TableData>{item.currency}</TableData>
          </TableTableRow>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape),
};
