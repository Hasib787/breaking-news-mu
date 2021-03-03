import Button from '@material-ui/core/Button';
import './App.css';
import News from './components/News/News';

function App() {
  return (
    <div>
      <h1>The News Feed</h1>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <News></News>
    </div>
  );
}

export default App;
