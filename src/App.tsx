import { Suspense } from 'react';
import './App.css';
import './styles/fonts.scss';
import SyncContacts from './pages/SyncContacts';

function App() {
  return (
    <div className="appContainer">
      <Suspense fallback="Loading...">
        <SyncContacts />
      </Suspense>
    </div>
  );
}

export default App;
