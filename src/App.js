// src/App.js

import React, { Component } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debit from './components/Debit';
import Credit from './components/Credit';
import AccountBalance from './components/AccountBalance'

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      debits: [],
      credits: [],
    };
  }

  handleBalanceChange = delta => {
    this.setState({ accountBalance: this.state.accountBalance + delta });
  }

  handleDebitChange = newDebits => {
    this.setState({ debits: newDebits });
  }


  handleCreditChange = newCredits => {
    this.setState({ credits: newCredits });
  }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  }

  async componentDidMount() {
    let debits = await axios.get("https://moj-api.herokuapp.com/debits");
    let credits = await axios.get("https://moj-api.herokuapp.com/credits");
    debits = debits.data;
    credits = credits.data;
    let debitSum = 0, creditSum = 0;

    debits.forEach((debit) => {
      debitSum += debit.amount;
    });

    credits.forEach((credit) => {
      creditSum += credit.amount;
    });

    const accountBalance = creditSum - debitSum;

    this.setState({ debits, credits, accountBalance });

  }


  render() {
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
    const DebitComponent = () => (<Debit accountBalance={this.state.accountBalance} debits={this.state.debits} handleBalanceChange={this.handleBalanceChange} handleDebitChange={this.handleDebitChange} />);
    const CreditComponent = () => (<Credit accountBalance={this.state.accountBalance} credits={this.state.credits} handleBalanceChange={this.handleBalanceChange} handleCreditChange={this.handleCreditChange} />);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );



    return (
      <Router>
        <div>
          <Link to="/wd-7">Return to Home</Link> |&nbsp;
          <Link to="/wd-7/login">Log in</Link> |&nbsp;
          <Link to="/wd-7/userProfile">User Profile</Link> |&nbsp;
          <Link to="/wd-7/debit">Debits</Link> |&nbsp;
          <Link to="/wd-7/credit">Credits</Link>
          <Route exact path="/wd-7" render={HomeComponent} />
          <Route exact path="/wd-7/userProfile" render={UserProfileComponent} />
          <Route exact path="/wd-7/login" render={LogInComponent} />
          <Route exact path="/wd-7/debit" render={DebitComponent} />
          <Route exact path="/wd-7/credit" render={CreditComponent} />
          <AccountBalance accountBalance={this.state.accountBalance} />
        </div>
      </Router>

    );
  }

}

export default App;
