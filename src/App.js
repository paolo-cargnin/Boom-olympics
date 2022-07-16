import './App.css';
import Remote from './pages/Remote';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EditionProvider } from './EditionContext';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <div className="App">
      <EditionProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/remote" element={<Remote />} />
          </Routes>
        </BrowserRouter>
      </EditionProvider>
    </div>
  );
}

export default App;
