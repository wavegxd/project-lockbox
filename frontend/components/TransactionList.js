import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const TRANSACTION_QUERY = gql`
  query TRANSACTION_QUERY {
    transactions {
      id
      amount
      lockbox {
        box
        branch
      }
      transactionType
    }
  }
`;

const TableStyle = styled.div`
  .table-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  table {
    width: 800px;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  th,
  td {
    padding: 15px;
  }

  th {
    text-align: left;
  }

  thead {
    th {
      background-color: #f9faf5;
    }
  }

  tbody {
    tr {
      &:hover {
        background-color: rgba(111, 119, 239, 0.3);
      }
    }
    td {
      position: relative;
      &:hover {
        &:before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: -9999px;
          bottom: -9999px;
          background-color: rgba(111, 119, 239, 0.2);
          z-index: -1;
        }
      }
    }
  }
`;

class TransactionList extends Component {
  render() {
    return (
      <Query query={TRANSACTION_QUERY}>
        {({ data: { transactions }, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error}</p>;
          return (
            <TableStyle>
              <table className="table-container">
                <thead>
                  <tr>
                    <th>Lockbox</th>
                    <th>Transaction</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map(transaction => (
                    <tr key={transaction.id}>
                      <td>{transaction.lockbox.box}</td>
                      <td>{transaction.transactionType}</td>
                      <td>{transaction.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TableStyle>
          );
        }}
      </Query>
    );
  }
}

export default TransactionList;
