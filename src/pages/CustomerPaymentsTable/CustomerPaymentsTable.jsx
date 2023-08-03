import { Table } from "react-bootstrap";

import PropTypes from "prop-types";

const CustomerPaymentsTable = ({ sales }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Receipt Number</th>
          <th>Date</th>
          <th>Total Items</th>
          <th>Delivered</th>
          <th>Status</th>
          <th>View Sale</th>
        </tr>
      </thead>
      <tbody>
        {sales.map((sale) => (
          <tr key={sale.id}>
            <td>
              <a href={`/sale/Receipt?id=${sale.id}&type=1`}>
                {sale.receiptNumber}
              </a>
            </td>
            <td>{sale.date}</td>
            <td>{sale.totalItems}</td>
            <td>{`${sale.delived}/${sale.totalItems}`}</td>
            <td>
              <a href={`/inventory/delivered?sale=${sale.id}`}>{sale.status}</a>
            </td>
            <td>
              <a href={`/sale/note?id=${sale.id}`}>View Sale</a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

CustomerPaymentsTable.propTypes = {
  sales: PropTypes.array.isRequired,
};

export default CustomerPaymentsTable;
