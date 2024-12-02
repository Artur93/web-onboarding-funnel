import React, { useState, useEffect } from 'react';
import { getCompletedUsers } from './analytics';

const Dashboard = () => {
  const [completedUsers, setCompletedUsers] = useState(0);

  useEffect(() => {
    setCompletedUsers(getCompletedUsers());
  }, []);

  return (
    <div className="container center">
      <h1>Analytics Dashboard</h1>
      <p>Users who completed onboarding: {completedUsers}</p>
    </div>
  );
};

export default Dashboard;
