import React, { useState } from 'react';
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

function BoxSubmit() {
  const [boxForm, setBoxForm] = useState({
    branch: '',
    box: '',
    time: '',
    date: '',
    amount: 0
  });
  const updateBoxForm = (e) => {
    if (e.target.name === 'amount') {
      setBoxForm({
        ...boxForm,
        [e.target.name]: parseFloat(e.target.value)
      });
    } else {
      setBoxForm({
        ...boxForm,
        [e.target.name]: e.target.value
      });
    }
  };
  return (
    <Mutation mutation={CREATE_LOCKBOX_MUTATION} variables={boxForm}>
      {(createLockbox, { error, loading }) => (
        <div>
          <form
            method="post"
            onSubmit={async (e) => {
              e.preventDefault();
              console.log(boxForm);
              await createLockbox();
              setBoxForm({
                branch: '',
                box: '',
                time: '',
                date: '',
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
                value={boxForm.branch}
                onChange={updateBoxForm}
              />
            </label>
            <label htmlFor="box">
              Box
              <input
                type="text"
                name="box"
                placeholder="Box"
                value={boxForm.box}
                onChange={updateBoxForm}
              />
            </label>
            <label htmlFor="time">
              Time
              <input
                type="text"
                name="time"
                placeholder="Time"
                value={boxForm.time}
                onChange={updateBoxForm}
              />
            </label>
            <label htmlFor="amount">
              Amount
              <input
                type="number"
                step={0.1}
                name="amount"
                placeholder="Amount"
                value={boxForm.amount}
                onChange={updateBoxForm}
              />
            </label>
            <label htmlFor="date">
              Date
              <input
                type="text"
                name="date"
                placeholder="Date"
                value={boxForm.date}
                onChange={updateBoxForm}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </Mutation>
  );
}

export default BoxSubmit;
