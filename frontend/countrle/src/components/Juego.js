import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import sonidoConffeti from '../assets/sonidoConffeti.mp3';
import './Juego.css';
import Modal from './Modal';

const Juego = () => {
    const palabra = 'nadie';
    const palabraObjetivo = palabra.toUpperCase();
    const [intento, setIntento] = useState(Array(5).fill(''));
    const [intentos, setIntentos] = useState(Array(6).fill(Array(5).fill({ letra: '', color: '' })));
    const [indice, setIndice] = useState(0);
    const [ganador, setGanador] = useState(false);
    const [letrasUsadas, setLetrasUsadas] = useState({});
    const [indiceActivo, setIndiceActivo] = useState(0);
    const [tiempoInicio, setTiempoInicio] = useState(null);
    const [tiempoTotal, setTiempoTotal] = useState(null);
    const tecladoQWERTY = 'QWERTYUIOPASDFGHJKLÑZXCVBNM';
    const [showModalLose, setShowModalLose] = useState(false);
    const [showModalWin, setShowModalWin] = useState(false);
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    const handleCloseLose = () => {
        setShowModalLose(false);
    }

    const handleCloseWin = () => {
        setShowModalWin(false);
    }

    useEffect(() => {
        if (ganador) {
            confetti({
                particleCount: 200,
                spread: 70,
                origin: { y: 0.6 }
            });

            // Reproduce el sonido sólo si el navegador no es Safari.
            if (!isSafari) {
                const audio = new Audio(sonidoConffeti);
                audio.onloadeddata = () => {
                    audio.play();
                };
            }
        }
    }, [ganador]);


    const manejarClick = (letra) => {
        if (intento.indexOf('') === -1 && indice < 6) {
            if (indice === 0) {
                setTiempoInicio(Date.now());
            }
        }
        if (intento.indexOf('') !== -1) {
            let nuevoIntento = [...intento];
            nuevoIntento[intento.indexOf('')] = letra;
            setIndiceActivo(indiceActivo);
            setIntento(nuevoIntento);
            let nuevosIntentos = [...intentos];
            nuevosIntentos[indice] = nuevoIntento.map(letra => ({ letra: letra, color: '' }));
            setIntentos(nuevosIntentos);
            if (!letrasUsadas[letra]) {
                setLetrasUsadas({ ...letrasUsadas, [letra]: 'gris' });
            }
            setIndiceActivo(nuevoIntento.indexOf(''));
        }
    };
    const comprobar = () => {
        if (intento.indexOf('') === -1 && indice < 6) {
            const nuevoIntento = intento.map((letra, i) => {
                let color = '';
                if (letra === palabraObjetivo[i]) color = 'verde';
                else if (palabraObjetivo.includes(letra)) color = 'amarillo';
                else color = 'gris';
                if (letrasUsadas[letra] !== color) {
                    setLetrasUsadas({ ...letrasUsadas, [letra]: color });
                }
                return { letra: letra, color: color };
            });
            let nuevosIntentos = [...intentos];
            nuevosIntentos[indice] = nuevoIntento;
            setIntentos(nuevosIntentos);
            if (nuevoIntento.every((item) => item.color === 'verde')) {
                setGanador(true);
                setTiempoTotal(((Date.now() - tiempoInicio) / 1000).toFixed(2));
                setShowModalWin(true);
            } else if (indice < 5) {
                setIndice(indice + 1);
                setIntento(Array(5).fill(''));
                setIndiceActivo(0);
            } else {
                setShowModalLose(true);
            }
        }
    };

    const borrar = () => {
        let nuevoIntento = [...intento];
        const ultimoIndiceNoVacio = nuevoIntento.reduce((acc, cur, i) => cur !== '' ? i : acc, -1);
        if (ultimoIndiceNoVacio !== -1) {
            nuevoIntento[ultimoIndiceNoVacio] = '';
            setIntento(nuevoIntento);
            setIndiceActivo(nuevoIntento.lastIndexOf('') !== -1 ? nuevoIntento.lastIndexOf('') : 5);

            let nuevosIntentos = [...intentos];
            nuevosIntentos[indice] = nuevoIntento.map(letra => ({ letra: letra, color: '' }));
            setIntentos(nuevosIntentos); // Actualizamos la matriz de intentos
        }
    };

    return (
        <div>
           <Modal show={showModalLose} handleClose={handleCloseLose}>
                <h1>😭</h1>
                <p>¡Has perdido!</p>
                <p>La palabra correcta era "{palabraObjetivo}"</p>
            </Modal>

            <Modal show={showModalWin} handleClose={handleCloseWin}>
                <h1>🥳</h1>
                <p>¡Has acertado! ¡Felicidades!</p>
            </Modal>
            <br></br>
            <div class="container animacion-carga">
                <div class="jumbotron">
                    <div className="juego">
                        <div className="tablero">
                            {intentos.map((intento, index) => (
                                <div key={index} className="fila">
                                    {intento.map((item, i) => (
                                        <div
                                            key={i}
                                            className={`casilla ${item.color} ${index === indice && i === indiceActivo ? 'activo' : ''}`}
                                        >
                                            {item.letra}
                                        </div>
                                    ))}
                                </div>
                            ))}

                        </div>
                        <div className="teclado">
                            {tecladoQWERTY.split('').map((letra, index) => (
                                <button key={index} className={letrasUsadas[letra] || ''} onClick={() => manejarClick(letra)}>
                                    {letra}
                                </button>
                            ))}
                        </div>
                        <div className="botones">
                            <button id="bComprobar" onClick={comprobar}>Comprobar ✅</button>
                            <button id="bBorrar" onClick={borrar}>Borrar 🗑️</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Juego;
