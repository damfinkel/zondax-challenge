import { Suspense } from 'react';
import styles from './App.module.scss';
import './styles/fonts.scss';
import SyncContacts from './pages/SyncContacts';

function App() {
  return (
    <div className={styles.appContainer}>
      <Suspense fallback="Loading...">
        <SyncContacts />
      </Suspense>
    </div>
  );
}

export default App;
