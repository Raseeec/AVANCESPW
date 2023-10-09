import React, { useState } from 'react';
import './PerfilAdminCuenta.css';
import Link from "next/link";

function PerfilAdminCuenta() {
  const [adminData, setAdminData] = useState({
    correo: '',
    contraseña: '',
  });

  const [userPhoto, setUserPhoto] = useState('/images/img01.jpg');
  const [previewPhoto, setPreviewPhoto] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminData({
      ...adminData,
      [name]: value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewPhoto(reader.result);
      };
      reader.readAsDataurl(file);
    }
  };

  const handleSave = () => {
    console.log('Datos del administrador:', adminData);
    alert("Datos actualizados")
  };

  return (
    <div>
      <h2>Perfil Administrador</h2>
      <hr/>
      <div className='barraHor'>
      <ul className='listaGeneral'>
        <li className='listaDesp'>
          <Link href="/perfilAdmin/PerfilAdmin" style={{textDecoration:"none",color:"#79747E"}}>DATOS PERSONALES</Link>
        </li>
        <li className='listaDespSelec'>CUENTA</li>
        <li className='listaDesp'>
          <Link href="/perfilAdminPrefe/PerfilAdminPrefe" style={{textDecoration:"none",color:"#79747E"}}>PREFERENCIAS</Link></li>
      </ul>
      <div className='BarraSelecUsu'></div>
      </div>
      <form>
        <div className='contenedorDos'>
          
        <div>
              <img src={userPhoto} alt="Foto del usuario"/>
            </div>
            <div className='contenedorTres'>
              <div className='textAfuera'>
                <label className='correo'>Correo</label>
                <input
                type="text"
                id="correo"
                name="correo"
                value={adminData.correo}
                onChange={handleInputChange}
                required
                />
              </div>
              <div className='textAfuera'> 
                <label className='contraseña'>Contraseña</label>
                <input
                type="contraseña"
                id="contraseña"
                name="contraseña"
                value={adminData.contraseña}
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

export default PerfilAdminCuenta;