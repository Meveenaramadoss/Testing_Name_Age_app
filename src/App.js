import { useState } from 'react';
import './App.css';

export default function Form() {
  const [firstName, setFirstName] = useState('Meveena');
  const [age, setAge] = useState('20');
  const ageAsNumber = Number(age);
  return (
    <>
      <label>
        First name:
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
  </label>
      <label>
        Age:
        <input
          value={age}
          onChange={e => setAge(e.target.value)}
          type="number"
        />
         

        <button onClick={() => setAge(ageAsNumber + 10)}>
          
          Add 10 years
        </button>
        </label>
   <result>
      {firstName !== '' &&
        <p>Your name is {firstName}.</p>
      }
      {ageAsNumber > 0 &&
        <p>Your age is {ageAsNumber}.</p>
      }
      </result>
    </>
  );
}
