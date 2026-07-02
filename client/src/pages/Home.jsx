import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="top-banner">
        <h1>Bucket List Baseball</h1>
        <p>Welcome to Bucket List Baseball where the goal is to visit all 30 ballparks!</p>
        <Link to="/tracker" className="tracker-button">
        Go to Tracker</Link>
      </div>
    </div>
  );
}

export default Home;