import React, { useState } from 'react';
import './PerfilAdmin.css';
import Link from "next/link";

function PerfilAdmin() {
  const [adminData, setAdminData] = useState({
    nombres: '',
    apellidos: '',
    tipoDoc: '',
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
    alert("Datos actualizados");
  };

  return (
    <div>
      <h2>Perfil Administrador</h2>
      <hr/>
      <div className='barraHor'>
      <ul className='listaGeneral'>
        <li className='listaDespSelec'>DATOS PERSONALES</li>
        <li className='listaDesp'>
          <Link href="/perfilAdminCuenta/PerfilAdminCuenta" style={{textDecoration:"none",color:"#79747E"}}>CUENTA</Link></li>
          <li className='listaDesp'>
          <Link href="/perfilAdminPrefe/PerfilAdminPrefe" style={{textDecoration:"none",color:"#79747E"}}>PREFERENCIAS</Link></li>
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
          <button type="button" onClick={handleSave}>Guardar</button>
      </div>
      
    </div>
        
        
        
      </form>
    </div>
  );
}

export default PerfilAdmin;
