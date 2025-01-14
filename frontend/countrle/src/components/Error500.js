// Error500.js
import React from 'react';


function Error500() {
    return (


        <div>
            <br></br>
            <div className="container animacion-carga">
                <div className="jumbotron">
                    <div>
                        <p className="error_emoji">😵</p>
                        <h1 className="error">Error 500</h1>
                        <h3>¡Ups! Parece que nuestro servidor está teniendo problemas. Inténtalo más tarde</h3>
                        <a className="btn btn-large btn-primary" href="/">Volver a Inicio</a>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Error500;
