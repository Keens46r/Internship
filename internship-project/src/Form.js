import { useState } from 'react';

const Form = () => {
    const [person, setPerson] = useState({
        firstName: 'Keeno',
        lastName: 'Papier',
        email: 'keeno@gmail.com'
    });

    function handleFirstNameChange(e) {
        setPerson({
          ...person,
          firstName: e.target.value
        });
    } 

    function handleLastNameChange(e) {
        setPerson({
            ...person,
            lastName: e.target.value
            });
          }
        
    function handleEmailChange(e) {
        setPerson({
        ...person,
        email: e.target.value
        });
    }
    return ( 
    <>
    <div>
        <label>First name: </label><br/>
        <input value={person.firstName} onChange={handleFirstNameChange}/><br/>
    </div>

    <div>
        <label>Last name:</label><br/>
        <input value={person.lastName} onChange={handleLastNameChange}/>
    </div> 

    <div>
        <label>Email: </label><br/>
        <input value={person.email} onChange={handleEmailChange}/>
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
