import React, { useState } from 'react';
import './PerfilAdminPrefe.css';
import Link from "next/link";

function PerfilAdminPreferencia() {
  const [adminData, setAdminData] = useState({
    idioma: '',
    prefijo: '',
    color: '',
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
        <li className='listaDesp'>
          <Link href="/perfilAdminCuenta/PerfilAdminCuenta" style={{textDecoration:"none",color:"#79747E"}}>CUENTA</Link></li>
        <li className='listaDespSelec'>PREFERENCIAS</li>
      </ul>
      <div className='BarraSelecPrefe'></div>
      </div>
      <form>
        <div className='contenedorDos'>
          
        <div>
              <img src={userPhoto} alt="Foto del usuario"/>
            </div>
            <div className='contenedorTres'>
              <div className='textAfuera'>
                <label className='idioma'>Idioma</label>
                <input
                type="text"
                idioma="idioma"
                name="idioma"
                value={adminData.idioma}
                onChange={handleInputChange}
                required
                />
              </div>
              <div className='textAfuera'>
                <label className='prefijo'>Prefijo</label>
                <input
                type="text"
                idioma="prefijo"
                name="prefijo"
                value={adminData.prefijo}
                onChange={handleInputChange}
                required
                />
              </div>
              <div className='textAfuera'> 
                <label className='color'>Color</label>
                <input
                type="color"
                idioma="color"
                name="color"
                value={adminData.color}
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

export default PerfilAdminPreferencia;