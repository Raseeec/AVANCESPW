import React, { useState } from 'react';
import './PerfilUsuario.css';

function PerfilAdmin() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('datosPersonalesUser');

  const [userData, setUserData] = useState({
    nombres: '',
    apellidos: '',
    tipoDoc: '',
    numeroDocumento: '',
    correo: '',
    contraseña: '',
  });

  const [userPhoto, setUserPhoto] = useState('/images/miperfil.png');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleUserPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log('Datos del usuario:', userData);
    alert("Datos actualizados");
  };

  if(opcionSeleccionada === 'datosPersonalesUser'){
    return (
      <div>
        <div className='trabajito'>
        <h2>Mi Perfil</h2>
        <hr />
        <div className='barraHor'>
          <ul className='listaGeneral'>
            <li className="OpcionDatosPerso" onClick={() => setOpcionSeleccionada('datosPersonalesUser')} style={{color:'#6750A4', fontWeight:700}}>DATOS PERSONALES</li>
            <li className="OpcionCuenta" onClick={() => setOpcionSeleccionada('cuentaUser')}>CUENTA</li>
          </ul>
          <div className='BarraSelec'></div>
        </div>
        <form>
          <div className='contenedorDos'>
            <div>
              <img src={userPhoto} className="FotoUsuario" />
              <input className="mensajeArchivo" type="file" accept="image/*" onChange={handleUserPhotoChange} />
            </div>
            <div className='contenedorTres'>
              <div className='textAfuera'>
                <label>Nombres</label>
                <input
                  type="text"
                  id="nombres"
                  name="nombres"
                  value={userData.nombres}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='textAfuera'>
                <label className='tipoDoc'>Tipo de Documento</label>
                <input
                  type="text"
                  id="tipoDoc"
                  name="tipoDoc"
                  value={userData.tipoDoc}
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
                  value={userData.apellidos}
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
                  value={userData.numeroDocumento}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="button" onClick={handleSave}>Guardar</button>
            </div>
          </div>
        </form>
        </div>
      </div>
    );
  }else if(opcionSeleccionada === 'cuentaUser'){
    return (
      <div>
        <div className='trabajito'>
        <h2>Mi Perfil</h2>
        <hr />
        <div className='barraHor'>
          <ul className='listaGeneral'>
            <li className="OpcionDatosPerso" onClick={() => setOpcionSeleccionada('datosPersonalesUser')}>DATOS PERSONALES</li>
            <li className="OpcionCuenta" onClick={() => setOpcionSeleccionada('cuentaUser')} style={{color:'#6750A4', fontWeight:700}}>CUENTA</li>
          </ul>
          <div className="BarraSelecCuenta"></div>
        </div>
        <form>
          <div className='contenedorDos'>
            <div>
              <img src={userPhoto} alt="Foto del usuario" />
            </div>
            <div className='contenedorTres'>
              <div className='textAfuera'>
                <label className='correo'>Correo</label>
                <input
                  type="text"
                  id="correo"
                  name="correo"
                  value={userData.correo}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='textAfuera'>
                <label className='contraseña'>Contraseña</label>
                <input
                  type="password"
                  id="contraseña"
                  name="contraseña"
                  value={userData.contraseña}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="button" onClick={handleSave}>Guardar</button>
            </div>
          </div>
        </form>
        </div>
      </div>
    );    
  }
}

export default PerfilAdmin;