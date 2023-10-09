import React, { useState } from 'react';
import './PerfilAdmin.css'

function PerfilAdmin() {
  const [adminData, setAdminData] = useState({
    nombres: '',
    apellidos: '',
    tipoDocumento: '',
    numeroDocumento: '',
  });

  const [userPhoto, setUserPhoto] = useState('/images/img01.jpg');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminData({
      ...adminData,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log('Datos del administrador:', adminData);
  };

  return (
    <div>
      <h2>Perfil Administrador</h2>
      <div className='barraHor'>
      <ul className='listaGeneral'>
        <li className='listaDespSelec'>DATOS PERSONALES</li>
        <li className='listaDesp'>CUENTA</li>
        <li className='listaDesp'>PREFERENCIAS</li>
      </ul>
      <div className='BarraSelec'></div>
      </div>
      <form>
        <div className='contenedorDos'>
        <div>
              <img src={userPhoto} alt="Foto del usuario"/>
            </div>
            <div className='contenedorTres'>
              <div className='textAfuera'>
                <label>Nombres</label>
                <input
                type="text"
                id="nombres"
                name="nombres"
                value={adminData.nombres}
                onChange={handleInputChange}
                required
                />
              </div>
              <div className='textAfuera'> 
                <label className='tipoDoc'>Tipo de Documento</label>
                <input
                type="tipoDoc"
                id="tipoDoc"
                name="tipoDoc"
                value={adminData.tipoDoc}
                onChange={handleInputChange}
              required
            />
          </div>
          <div className='textAfuera'>
            <label htmlFor="apellidos">Apellidos</label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={adminData.apellidos}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='textAfuera'>
            <label className='nroDoc'>Nro de Documento</label>
            <input
              type="number"
              id="numeroDocumento"
              name="numeroDocumento"
              value={adminData.numeroDocumento}
              onChange={handleInputChange}
              required
            />
          </div>
            </div>
        </div>
        <div className='botonBack'>
          <button type="button" onClick={handleSave}>Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default PerfilAdmin;
