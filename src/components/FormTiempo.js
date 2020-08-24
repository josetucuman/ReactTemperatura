import React from 'react';

const FormTiempo = props => (
    <div className="card">
        <div className="card-header">
            <h3 className="display-5 text-center">Temperatura</h3>
        </div>
        <div className="card-body">
            <form onSubmit={props.tomarTemperatura}>
                <div className="form-group">
                    <input type="text" name="ciudad" placeholder="Ciudad" className="form-control" autoFocus/>
                </div>
                <div className="form-group">
                    <input type="text" name="pais" placeholder="Codigo de Pais" className="form-control" />
                </div>
                <button
                    className="btn btn-mio btn-block">
                   Enviar
                </button>
            </form>
        </div>
    </div>
)

export default FormTiempo;