import './App.css';
import LanguageProvider from './components/LanguageProvider';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </LanguageProvider>
  );
}

export default App;
