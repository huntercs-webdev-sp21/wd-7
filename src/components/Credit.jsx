// src/components/Credit.jsx

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

class Credit extends Component {
  constructor(props) {
    super();
    this.state = {
      amount:0,
      description:'',
      date:'',
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    switch (name) {
    case 'amount':
      this.setState({amount:value});

      break;
    case 'description':
      this.setState({description:value});
      break;
    case 'date':
      this.setState({date:value});
    default:
      break;
    }
  };


  handleSumbit = () => {
    const {amount, description, date} = this.state;
    if (!(amount && description && date)) return;
    let newCredits = [...this.props.credits, {...this.state}];
    this.props.handleCreditChange(newCredits);
    this.props.handleBalanceChange(parseInt(this.state.amount));
  }

  render() {
    return (
      <div>
        <h1>Credit</h1>
        {this.props.credits.map((data,index) => (
          <li key={index}>{data.amount} {data.description} {data.date}</li>
        ))}
        <form id='add-credit'>
          <input
            type='number'
            name='amount'
            value={this.state.amount}
            onChange={this.handleChange}
            placeholder='100'
          ></input>
          <input
            type='text'
            name='description'
            value={this.state.description}
            onChange={this.handleChange}
            placeholder='desc'
          ></input>
          <input
            type='date'
            name='date'
            value={this.state.date}
            onChange={this.handleChange}
            placeholder='2020-12-12'
          ></input>
        </form>
        <button className='button' onClick={this.handleSumbit}>
          Submit
        </button>
        <br/>
      </div>
    );
  }
}

export default Credit;
