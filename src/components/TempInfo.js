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
            {props.temperatura ?  props.ciudad && props.pais &&  props.temperatura && props.humedad && props.velocidad_viento && props.descripcion &&
                       
                
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                
                                <th scope="col">Ciudad</th>
                                <th scope="col">T Min</th>
                                <th scope="col">Temp°C</th>
                                <th scope="col">T Max</th>
                                <th scope="col">Viento [Km/h]</th>
                                <th scope="col">Humedad</th>
                                <th scope="col">Descripcion</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                        <tr className="tabla-decana">
                            
                            <td>{props.ciudad}</td>
                            <td>{props.temp_min}</td>
                            <td>{props.temperatura}</td>
                            <td>{props.temp_max}</td>
                            <td>{props.velocidad_viento}</td>
                            <td>{props.humedad} %</td>
                            <td>{props.descripcion}</td>
                        </tr>
                        </tbody>
                    </table>
                    
                :
                <div className="card card-body mt-2 text-center">
                   <h2>No se encontro la ciudad</h2>
                </div>
                
            }
        </div>

    )
}
    


export default TempInfo;