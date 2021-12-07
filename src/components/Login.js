import React from 'react';
import '../assets/login.css';
import backgroundVideo from '../assets/ubisoftbackground.mp4';
import logopng from '../assets/ubilogo_h.png';

export default function Login(){
  return(
    <main>
    <video preload="auto" autoPlay muted loop className="video" id="videoID" src={backgroundVideo} type="video/mp4"/>
    <section>
      <form action="formulario" id="formulario" className="section-form">
        <img className="form-logo" id="logo" src={logopng} alt="Logo Ubisoft" />
        {/* <!-- ENTRADA DE NOMBRE DE USUARIO --> */}
        <label for="username" className="form-label">Username</label>
        <input type="text" className="form-input" autocomplete="username" placeholder=" Ingresa tu usuario"/>
        {/* <!-- ENTRADA DE CONTRASEÑA --> */}
        <label for="contraseña" className="form-label">Password</label>
        <input type="password" className="form-input" autocomplete="password" placeholder="Ingresa tu password"/>
        <input type="submit" className="form-inputButton" value="Ingresar"/>
        <br/>
        <a href="#" className="form-a">Lost your Password?</a>
        <br/>
        <a href="#"className="form-a">Don't have An account?</a>
      </form>
    </section>
    </main>
  );

};
