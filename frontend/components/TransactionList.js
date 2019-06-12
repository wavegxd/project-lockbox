import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import TableStyle from './styles/TableStyle';

const Header = styled.div`
  text-align: center;
`;

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

class TransactionList extends Component {
  render() {
    return (
      <Query query={TRANSACTION_QUERY}>
        {({ data: { transactions }, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error}</p>;
          return (
            <>
              <Header>
                <h2>Transactions</h2>
              </Header>
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
            </>
          );
        }}
      </Query>
    );
  }
}

export default TransactionList;
