import React, { Component } from 'react';
import AddExpenses from '../components/AddExpenses';
import Header from '../components/Header';
import ExpensesTable from '../components/ExpensesTable';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <AddExpenses />
        <ExpensesTable />
      </div>
    );
  }
}

export default Wallet;
