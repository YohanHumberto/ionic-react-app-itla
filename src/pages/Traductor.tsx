import React, { useEffect, useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Header from '../components/Header';



const Traductor: React.FC = () => {

    // Función para convertir números a letras
    function numeroEnLetras(numero: number):string {
        const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
        const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
        const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

        if (numero === 0) {
            return 'cero';
        } else if (numero < 20) {
            return unidades[numero];
        } else if (numero < 100) {
            const unidad = numero % 10;
            const decena = Math.floor(numero / 10);
            return decenas[decena] + (unidad !== 0 ? ' y ' + unidades[unidad] : '');
        } else if (numero < 1000) {
            const centena = Math.floor(numero / 100);
            const resto = numero % 100;
            return centenas[centena] + (resto !== 0 ? ' ' + numeroEnLetras(resto) : '');
        } else if (numero === 1000) {
            return 'mil';
        }
        return "";
    }

    const [num1, setNum1] = useState(0);
    const [resultado, setResultado] = useState("");
    
    useEffect(()=>{
        const res:string = numeroEnLetras(num1);
        if(num1 < 0 || num1 > 1000 || Number.isNaN(num1))  setNum1(0);
        setResultado(res);
    }, [num1]);

    return (
        <IonPage>
            <Header name={"Traductor"} />
            <IonContent fullscreen>
                <div className="container row m-0 p-3 p-md-5 text-center">
                    <div className='alert alert-success m-auto w-100 mb-5'>
                        <div>
                            <h4>Traductor de numero a texto</h4>
                            <div className='row m-0 p-0'>
                                <label className='form-label'>Ingrese el numero a traducir entre 0 y 1000:</label>
                                <input min={0} max={1000} className='form-control me-1' type='number' value={num1}
                                    onChange={(e) => setNum1(parseInt(e.target.value))} />
                            </div>
                            <hr />
                            <h4 style={{border: "2px solid #198754"}}>
                                {resultado}
                            </h4>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Traductor;
