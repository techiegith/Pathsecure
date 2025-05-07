import React from 'react';

const TestImageLoad: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Test Team Images</h1>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2>Team 1</h2>
          <img src="/about/our%20team/team1.png" alt="Team 1" className="w-full" />
        </div>
        <div>
          <h2>Team 2</h2>
          <img src="/about/our%20team/team2.png" alt="Team 2" className="w-full" />
        </div>
        <div>
          <h2>Team 3</h2>
          <img src="/about/our%20team/team3.png" alt="Team 3" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default TestImageLoad; 