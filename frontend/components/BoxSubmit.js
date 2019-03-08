import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const CREATE_LOCKBOX_MUTATION = gql`
  mutation CREATE_LOCKBOX_MUTATION(
    $amount: Float!
    $branch: String!
    $box: String!
    $time: String!
    $date: String!
  ) {
    createLockbox(
      data: {
        amount: $amount
        branch: $branch
        box: $box
        time: $time
        date: $date
      }
    ) {
      amount
      branch
      box
    }
  }
`;

class BoxSubmit extends Component {
  state = {
    branch: '',
    box: '',
    time: '',
    data: '',
    amount: 0
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  hadnleFormReset = () => {
    this.setState(() => this.state);
  };
  render() {
    return (
      <Mutation mutation={CREATE_LOCKBOX_MUTATION} variables={this.state}>
        {(createLockbox, { error, loading }) => {
          return (
            <div>
              <form
                method="post"
                onSubmit={async e => {
                  e.preventDefault();
                  await createLockbox();
                  this.setState({
                    branch: '',
                    box: '',
                    time: '',
                    data: '',
                    amount: 0
                  });
                }}
              >
                <label htmlFor="branch">
                  Branch
                  <input
                    type="text"
                    name="branch"
                    placeholder="Branch"
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="box">
                  Box
                  <input
                    type="text"
                    name="box"
                    placeholder="Box"
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="time">
                  Time
                  <input
                    type="text"
                    name="time"
                    placeholder="Time"
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="amount">
                  Amount
                  <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="date">
                  Date
                  <input
                    type="text"
                    name="date"
                    placeholder="Date"
                    onChange={this.saveToState}
                  />
                </label>
                <button type="submit">Submit</button>
              </form>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default BoxSubmit;
