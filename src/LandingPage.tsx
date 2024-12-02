import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container center">
      <h1>Welcome to the Onboarding Funnel</h1>
      <Link to="/step/1">
        <button className="button">Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
