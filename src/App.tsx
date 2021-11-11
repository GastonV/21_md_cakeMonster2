import './App.scss';
import { ComponentLifecycle, useEffect } from 'react';
import PContent from './Pages/PContent';

const App = () => {
  useEffect(() => {
    // eslint-disable-next-line no-alert
    alert('alert from effect');
  }, []);

  return (

    <div className="homePage">
      <PContent />

    </div>
  );
};
export default App;
