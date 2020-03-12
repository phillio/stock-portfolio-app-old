import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: null
    }
  }

  render() {
    return (
      <div className="dashboard-container">
        <p>Stock Portfolio Data here</p>
      </div>
    );
  }
}

export default Dashboard;
