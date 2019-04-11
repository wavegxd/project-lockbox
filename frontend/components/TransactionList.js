import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const TRANSACTION_QUERY = gql`
  query TRANSACTION_QUERY {
    transactions {
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
            <div>
              <table>
                <tr>
                  <td>Lockbox</td>
                  <td>Transaction</td>
                  <td>Amount</td>
                </tr>
                {transactions.map(transaction => (
                  <tr>
                    <td>{transaction.lockbox.box}</td>
                    <td>{transaction.transactionType}</td>
                    <td>{transaction.amount}</td>
                  </tr>
                ))}
              </table>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default TransactionList;
