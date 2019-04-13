import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const LOCKBOX_QUERY = gql`
  query LOCKBOX_QUERY {
    lockboxes {
      id
      box
      amount
    }
  }
`;
const LockboxUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  border: black;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
`;

class LockboxList extends Component {
  render() {
    return (
      <Query query={LOCKBOX_QUERY}>
        {({ data: { lockboxes }, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error}</p>;
          return (
            <div>
              <LockboxUl>
                {lockboxes.map(lockbox => (
                  <div>
                    <p>ID: {lockbox.id}</p>
                    <p>BOX: {lockbox.box}</p>
                    <p>AMOUNT: {lockbox.amount}</p>
                  </div>
                ))}
              </LockboxUl>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default LockboxList;
