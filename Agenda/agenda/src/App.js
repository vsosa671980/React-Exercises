
import { Button } from 'bootstrap';
import { useState } from 'react';
import './App.css';
import { Agenda } from './Components/Agenda';
import { Formulario } from './Components/Formulario';

function App() {

  const contactos = [
    {
      nombre:"Vicente",apellidos:"Sosa",direccion: "Enric Soler i godes",ciudad:"Xirivella",codigoPostal:46950,telefono: 651337054
    },
    {
      nombre:"Erika",apellidos:"Sosa",direccion: "Enric Soler i godes",ciudad:"Xirivella",codigoPostal:46950,telefono: 651337054
    },
    {
      nombre:"Rubén",apellidos:"Sosa",direccion: "Enric Soler i godes",ciudad:"Xirivella",codigoPostal:46950,telefono: 651337054
    }
    
  ];

  const [contacts, setContacts] = useState(contactos)

  return (
    <div className="container">
      <h2>Agenda</h2>
      <Agenda contactos={contacts} />
      <h2>Formulario</h2>
      <Formulario />
    
    </div>
  );
}

export default App;
