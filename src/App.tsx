// App.tsx
import React from 'react';
import './styles.css'; // Importing the CSS file
import UserInfo from './UserInfo';
import Card from './Card';

const App: React.FC = () => {
  const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
  };

  return (
    <div>
      <h1>Welcome to the User Info App</h1>
      <Card>
        <UserInfo {...user} />
      </Card>
      <Card>
        <h2>Another Card with Different Content</h2>
        <p>This is a paragraph inside a card.</p>
        <p>This is a second paragraph inside this card.</p>
      </Card>
    </div>
  );
};

export default App;
