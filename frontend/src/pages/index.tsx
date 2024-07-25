import React from 'react';
import UserInterface from '../components/UserInterface'; 


const Home: React.FC = () => {

  return (
    <main className="justify-center items-start my-8">
      <div className="m-4">
        <UserInterface backendName="rust" />
      </div>
    </main>
  );

};

export default Home;