import React, { useState } from 'react'

export const Formulario = () => {

    const[nombre , setNombre] = useState("");
    const[apellido , setApellido] = useState("");
    const[direccion , setdireccion] = useState("");
    const[ciudad , setCiudad] = useState("");
    const[cp , setCp] = useState("");
    const[telefono , setTelefono]= useState("");

    function handleNombre (e){
       setNombre(e.target.value)
    }

    function handleApellido (e){
        setApellido (e.target.value)
     }

     function handleDireccion(e){
        setdireccion (e.target.value)
     }

     function handleCiudad (e){
        setCiudad = e.target.value;
     }

     function handleCp (e){
        setCp (e.target.value)
     }
     function handleTelefono (e){
        setTelefono (e.target.value)
     }

     function submit(e){
      e.preventDefault();
       const newContact = {
        nombre : nombre,
        apellido: apellido,
        direccion: direccion,
        ciudad: ciudad,
        codigoPostal:cp,
        telefono:telefono
      }

      console.log(newContact);
      

     }

  return (
    <div clasName="mb-3 container" >
        <form onSubmit={submit}>
            <input type="text" className='form-control mb-3'placeholder='Nombre' onChange={handleNombre}></input>
            <input type="text" className='form-control  mb-3'placeholder='Apellido' onChange={handleApellido}></input>
            <input type="text" className='form-control mb-3'placeholder='Direccion' onChange={handleDireccion}></input>
            <input type="text" className='form-control mb-3'placeholder='Ciudad' onChange={handleCiudad}></input>
            <input type="text" className='form-control mb-3'placeholder='Codigo Postal' onChange={handleCp}></input>
            <input type="text" className='form-control mb-3'placeholder='Telefono' onChange={handleTelefono}></input>
            <input type="submit" className='btn btn-warning mb-3'></input>
        </form>
    </div>
  )
}
