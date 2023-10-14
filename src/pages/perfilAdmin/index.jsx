import React, { useState } from 'react';
import './PerfilAdmin.css';

function PerfilAdmin() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('datosPersonales');

  const [adminData, setAdminData] = useState({
    nombres: '',
    apellidos: '',
    tipoDoc: '',
    numeroDocumento: '',
    correo: '',
    contraseña: '',
    idioma: '',
    prefijo: '',
    color: '',
  });

  const [userPhoto, setUserPhoto] = useState('/images/julianaAdmin.png');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminData({
      ...adminData,
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
    console.log('Datos del administrador:', adminData);
    alert("Datos actualizados");
  };

  if(opcionSeleccionada === 'datosPersonales'){
    return (
      <div>
        <div className='trabajito'>
        <h2>Hola, administrador</h2>
        <hr />
        <div className='barraHor'>
          <ul className='listaGeneral'>
            <li className="OpcionDatosPerso" onClick={() => setOpcionSeleccionada('datosPersonales')} style={{color:'#6750A4', fontWeight:700}}>DATOS PERSONALES</li>
            <li className="OpcionCuenta" onClick={() => setOpcionSeleccionada('cuenta')}>CUENTA</li>
            <li className="OpcionPrefer" onClick={() => setOpcionSeleccionada('preferencias')}>PREFERENCIAS</li>
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
                  className='inputPerfil'
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
                  className='inputPerfil'
                  type="text"
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
                  className='inputPerfil'
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
                  className='inputPerfil'
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
      </div>
    );
  }else if(opcionSeleccionada === 'cuenta'){
    return (
      <div>
        <div className='trabajito'>
        <h2>Hola, administrador</h2>
        <hr />
        <div className='barraHor'>
          <ul className='listaGeneral'>
            <li className="OpcionDatosPerso" onClick={() => setOpcionSeleccionada('datosPersonales')}>DATOS PERSONALES</li>
            <li className="OpcionCuenta" onClick={() => setOpcionSeleccionada('cuenta')} style={{color:'#6750A4', fontWeight:700}}>CUENTA</li>
            <li className="OpcionPrefer" onClick={() => setOpcionSeleccionada('preferencias')}>PREFERENCIAS</li>
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
                  value={adminData.correo}
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
      </div>
    );    
  }else if(opcionSeleccionada === 'preferencias'){
    return (
      <div>
        <div className='trabajito'>
        <h2>Hola, administrador</h2>
        <hr/>
        <div className='barraHor'>
          <ul className='listaGeneral'>
            <li className="OpcionDatosPerso" onClick={() => setOpcionSeleccionada('datosPersonales')}>DATOS PERSONALES</li>
            <li className="OpcionCuenta" onClick={() => setOpcionSeleccionada('cuenta')}>CUENTA</li>
            <li className="OpcionPrefer" onClick={() => setOpcionSeleccionada('preferencias')} style={{color:'#6750A4', fontWeight:700}}>PREFERENCIAS</li>
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
      </div>
    );    
  }
}

export default PerfilAdmin;