import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import TableStyle from './styles/TableStyle';

const LOCKBOX_QUERY = gql`
  query LOCKBOX_QUERY {
    lockboxes {
      id
      box
      amount
      branch
    }
  }
`;

class LockboxList extends Component {
  render() {
    return (
      <Query query={LOCKBOX_QUERY}>
        {({ data: { lockboxes }, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error}</p>;
          return (
            <TableStyle>
              <table className="table-container">
                <thead>
                  <tr>
                    <th>BRANCH</th>
                    <th>BOX</th>
                    <th>AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {lockboxes.map(lockbox => (
                    <tr key={lockbox.id}>
                      <td>{lockbox.branch}</td>
                      <td>{lockbox.box}</td>
                      <td>${lockbox.amount}</td>
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

export default LockboxList;
