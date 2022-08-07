import React from 'react'

export const Formulario = () => {
  return (
    <div clasName="mb-3 container" >
        <form>
            <input type="text" className='form-control mb-3'placeholder='Nombre'></input>
            <input type="text" className='form-control  mb-3'placeholder='Apellido'></input>
            <input type="text" className='form-control mb-3'placeholder='Direccion'></input>
            <input type="text" className='form-control mb-3'placeholder='Ciudad'></input>
            <input type="text" className='form-control mb-3'placeholder='Codigo Postal'></input>
            <input type="text" className='form-control mb-3'placeholder='Telefono'></input>
            <input type="submit" className='btn btn-warning mb-3'></input>
        </form>
    </div>
  )
}
