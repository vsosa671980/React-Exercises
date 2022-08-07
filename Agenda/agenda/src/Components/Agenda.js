import React from 'react'

export const Agenda = (props) => {
    
  return (
   <div className='row'>
    {props.contactos.map(value => {
        return (
            <ul key= {value.telefono} className='list-group ,b-3 col-6'>
                <li className='list-group-item active'>{value.nombre}</li>
                <li className='list-group-item' >{value.apellidos}</li>
                <li className='list-group-item'>{value.direccion}</li>
                <li className='list-group-item'>{value.ciudad}</li>
                <li className='list-group-item'>{value.codigoPostal}</li>
                <li className='list-group-item'>{value.telefono}</li>

            </ul>
        )
    })}
     
     <ul>
    
   
       
     </ul>

   </div>
  )
}
