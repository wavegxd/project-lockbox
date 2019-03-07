import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const LOCKBOX_QUERY = gql`
  query LOCKBOX_QUERY {
    lockboxes {
      id
      box
    }
  }
`;
const LockboxUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

class LockboxList extends Component {
  render() {
    return (
      <Query query={LOCKBOX_QUERY}>
        {({ data: { lockboxes }, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error}</p>;
          console.log(lockboxes);
          return (
            <div>
              <h2>There are {lockboxes.length} transactions</h2>
              <LockboxUl>
                {lockboxes.map(lockbox => (
                  <div>
                    <p>{lockbox.id}</p>
                    <p>{lockbox.box}</p>
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
