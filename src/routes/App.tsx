import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../contexts/Auth';
import { ProjectProvider } from '../contexts/Project';
import AppRouter from './AppRouter';

function App() {
  return (
    <Router>
      <Routes>
        {/* Account */}
        <Route
          path="*"
          element={
            <AuthProvider>
              <ProjectProvider>
                <AppRouter />
              </ProjectProvider>
            </AuthProvider>
          }
        />

        {/* Enroll */}
      </Routes>
    </Router>
  );
}

export default App;
