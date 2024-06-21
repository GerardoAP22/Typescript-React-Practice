import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  const [alertVisbile, setAlertVisibility] = useState(false);

  const handleTestButton = () => {
    setAlertVisibility(true);
  }

  return (
    <div>
      {/* <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem} /> */}
      {alertVisbile && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Button onClick={handleTestButton}>
        My Button
      </Button>
    </div>
  )
}

export default App;