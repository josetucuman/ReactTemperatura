import React from 'react';

const TempInfo = props => {
    console.log(props)
    return (
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {props.temperatura ?  props.ciudad && props.pais &&  props.temperatura && props.humedad && props.velocidad_viento &&
                       
                
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Pais</th>
                                <th scope="col">Ciudad</th>
                                <th scope="col">Temperatura °C</th>
                                <th scope="col">Velocidad Viento [Km/h]</th>
                                <th scope="col">Humedad °C</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                        <tr className="tabla-decana">
                            <td>{props.pais}</td>
                            <td>{props.ciudad}</td>
                            <td>{props.temperatura}</td>
                            <td>{props.humedad}</td>
                            <td>{props.velocidad_viento}</td>
                        </tr>
                        </tbody>
                    </table>
                    
                :
                <div className="card card-body mt-2 text-center">
                    <i className="fas fa-sun fa-10x"></i>
                </div>
                
            }
        </div>

    )
}
    


export default TempInfo;