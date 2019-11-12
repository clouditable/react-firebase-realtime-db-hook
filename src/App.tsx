import React from 'react';
import './App.css';
import { useTracking } from './hooks/track';

const App: React.FC = () => {
  const trackingId = 'demo-tracking-id';
  const customUserToken = 'custom-user-token';
  const { trackingData, user } = useTracking(trackingId, customUserToken);
  console.log(trackingData, user);
  return (
    <div className="App">
      <header className="App-header" />
    </div>
  );
};

export default App;
