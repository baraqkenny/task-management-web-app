import React from 'react'

function Dashboard({ activeContent }) {
  return (
    <div>
      {activeContent === "dashboard" && (
        <div id="dashboard-text">This is the dashboard content.</div>
      )}
    </div>
  );
}

export default Dashboard
