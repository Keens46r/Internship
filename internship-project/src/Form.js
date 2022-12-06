import { useState } from 'react';

const Form = () => {
    const [person, setPerson] = useState({
        firstName: 'Keeno',
        lastName: 'Papier',
        email: 'keeno@gmail.com'
    });

    const message = 'String is empty.';
    
    function handleFirstNameChange(e) {
        setPerson({
          ...person,
          firstName: e.target.value
        });
    } 
    if (person.firstName === '')
    {
        document.getElementById('errorMessage1').textContent = message;
    }

    function handleLastNameChange(e) {
        setPerson({
            ...person,
            lastName: e.target.value
            });
          }

        if (person.lastName === '')
        {
            document.getElementById('errorMessage2').textContent = message;
        }
        
    function handleEmailChange(e) {
        setPerson({
        ...person,
        email: e.target.value
        });
    }

    if (person.email === '')
        {
            document.getElementById('errorMessage3').textContent = message;
        }
    return ( 
    <>
    <div>
        <label>First name: </label><br/>
        <input value={person.firstName} onChange={handleFirstNameChange}/><br/>
        <span className="error" id="errorMessage1"></span><br/>
    </div>

    <div>
        <label>Last name:</label><br/>
        <input value={person.lastName} onChange={handleLastNameChange}/><br/>
        <span className="error" id="errorMessage2"></span><br/>
    </div> 

    <div>
        <label>Email: </label><br/>
        <input value={person.email} onChange={handleEmailChange}/><br/>
        <span className="error" id="errorMessage3"></span><br/>
    </div>
    
    <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
    </p>
    </>
     );
}
 
export default Form;
