import { useContext } from 'react';
import { UserContext } from './UserContext';

function About() {
  const { user } = useContext(UserContext);

  return (
    <div className="about-container">
      <h1>About Page</h1>
      <p>Hello, {user.name}!</p>
      <style jsx>{`
        .about-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        @media (min-width: 768px) {
          .about-container {
            flex-direction: row;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
