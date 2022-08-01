import React, { useState } from "react";
import {contacts} from './data.js';

function App() {

  console.log(contacts);

  const [search, setSearch] = useState('');

  return (
    <main>

      <h1>Contact keeper</h1>

      <input onChange={(e) => setSearch(e.target.value)}
             className="searchBtn" 
             type="search" 
             placeholder="Search contact"
      />

      <table id="contacts">
      <thead>
      <tr>
         <th>First name</th>
         <th>Last name</th>
         <th>Email</th>
         <th>Phone</th>
      </tr>
      </thead>

      <tbody>
        {contacts.filter((contact) => {
          return search.toLowerCase() === '' 
          ? contact 
          : contact.first_name.toLowerCase().includes(search)
        })
        .map((contact) => (
          <tr key={contact.id}>
            <td>{contact.first_name}</td>
            <td>{contact.last_name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
          </tr>
        ))}
      </tbody>
      
      </table>

    </main>
  );
}

export default App;




// 1. dodajemo table html element
// 2. dodajemo thead i tbody elemente
// 3. unutar thead i tbody elemenata dodajemo tr elemente i unutar njih td elemente
// 4. unutar tbody elementa dodajemo javascript map metodu
// 5. uredujemo td elemente
// 6. dodajemo react hook useState
// 7. input elementu dodajemo onChange dogadaj
// 8. dodajemo javascript filter metodu (prije map metode)
// 9. dodajemo ternarni operator 
