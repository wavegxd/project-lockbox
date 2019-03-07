import React, { Component } from 'react';

class BoxSubmit extends Component {
  state = {
    branch: '',
    box: '',
    time: '',
    data: ''
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  hadnleFormReset = () => {
    this.setState(() => this.state);
  };
  render() {
    return (
      <div>
        <form
          method="post"
          onSubmit={async e => {
            e.preventDefault();
            this.setState({
              branch: '',
              box: '',
              time: '',
              data: ''
            });
          }}
        >
          <label htmlFor="branch">
            Branch{' '}
            <input
              type="text"
              name="branch"
              placeholder="Branch"
              onChange={this.saveToState}
            />
          </label>
          <label htmlFor="box">
            Box{' '}
            <input
              type="text"
              name="box"
              placeholder="Box"
              onChange={this.saveToState}
            />
          </label>
          <label htmlFor="time">
            Time{' '}
            <input
              type="text"
              name="box"
              placeholder="Time"
              onChange={this.saveToState}
            />
          </label>
          <label htmlFor="date">
            Date{' '}
            <input
              type="text"
              name="box"
              placeholder="Date"
              onChange={this.saveToState}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default BoxSubmit;
