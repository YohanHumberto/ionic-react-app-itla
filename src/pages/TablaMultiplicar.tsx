import React, { Fragment, useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../components/Header';

const TablaMultiplicar: React.FC = () => {

    const [num1, setNum1] = useState(0);
    const numsTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    return (
        <IonPage>
            <Header name={"Tabla de multiplicar"} />
            <IonContent fullscreen>
                <div className="container row m-0 mt-5 p-2 p-md-5">
                    <div className='alert alert-success m-auto w-100 mb-5'>
                        <div>
                            <h4>Tabla de multiplicar</h4>
                            <div className='row m-0 p-0'>
                                <label className='form-label'>Ingrese el numero para generar la tabla de multiplicar:</label>
                                <input className='form-control me-1' type='number' value={num1}
                                    onChange={(e) => setNum1(parseInt(e.target.value))} />
                            </div>
                            <hr />
                        </div>
                        <table className='table table-light'>
                            <thead>
                                <tr>
                                    <th>Operacion</th>
                                    <th>Resultado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    numsTable.map(item => {
                                        let num:number = num1;
                                        if (Number.isNaN(num))  num = 0;
                                        return (
                                            <tr key={item}>
                                                <td>{num} <span style={{ fontSize: "13px" }}>x</span> {item}</td>
                                                <td>{item * num}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default TablaMultiplicar;
