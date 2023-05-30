import React, { useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonInput, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Header from '../components/Header';

const Sumadora: React.FC = () => {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(0);

    const HandleSum = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const res = num1 + num2;
        setResultado(res);
    }

    return (
        <IonPage>
            <Header name={"Sumadora"} />
            <IonContent fullscreen>
                <div className="container row m-0 p-5">
                    <div className='alert alert-success m-auto w-75 mb-5'>
                        <b>Resultado: </b><span className='text-primary fw-bold'>{resultado}</span>
                    </div>
                    <form className='col-12 row m-0 p-0'>
                        <div className='col-12 col-md-4'>
                            <label>Primer Numero</label>
                            <input className='form-control me-1' type='number' value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} />
                        </div>
                        <div className='col-12 col-md-4 mt-2 mt-md-0'>
                            <label>Primer Numero</label>
                            <input className='form-control me-1' type='number' value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} />
                        </div>
                        <div className='col-12 col-md-3 mt-3 mt-md-0'>
                            <label style={{ visibility: "hidden" }}>Primer Numero</label>
                            <button className='btn btn-primary w-100' onClick={(e)=>HandleSum(e)}>Calcular</button>
                        </div>
                    </form>

                </div>
            </IonContent>
        </IonPage>
    );
};

export default Sumadora;
