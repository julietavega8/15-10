import React, {Fragment,useState} from 'react';

const Formulario = () => {
    const [cita, actualizarCita]= useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const { mascota, propietario, fecha, hora, sintomas}= cita;

    const submitCita = e => {
        e.preventDefault();
    }
    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            <form>
                <label>Nombre de Mascota</label>
                <input
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre de Mascota"
                onChange={actualizarState}
                value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre de dueño de mascota"
                onChange={actualizarState}
                value={propietario}
                />
                <label> Fecha</label>
                <input
                 type="date"
                 name="fecha"
                 className="u-full-width"
                 onChange={actualizarState}
                 value={fecha}
                />
                   <label> Hora</label>
                <input
                 type="time"
                 name="hora"
                 className="u-full-width"
                 onChange={actualizarState}
                 value={hora}
                />
                <label> Sintomas</label>
                <textarea
                 className="u-full-width" 
                 name="sintomas"
                 onChange={actualizarState}
                 value={sintomas}
                />
                <button
                type="submit"
                className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
        );
    
}

export default Formulario;