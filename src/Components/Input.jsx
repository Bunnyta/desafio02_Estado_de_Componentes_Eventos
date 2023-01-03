import React from 'react';
import { useState } from "react";
import Boton from './button';





const userCredential = {
    nombre: 'berni',
    password: '252525'
}

const input = () => {

    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    
    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");

        if (!nombre.trim() || !password.trim()) {
            return setError("Debes llenar todos los campos");
        }

        if (
            userCredential.nombre === nombre &&
            userCredential.password === password
        ) {
            alert("Bienvenido");
            
        } else {
            setError("Credenciales no validas");
            
        }

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setNombre(e.target.value)}
                    type="text"
                    placeholder="Ingrese Nombre"
                    name="nombre"
                    value={nombre}
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Ingrese Contraseña"
                    name="password"
                    value={password}
                />
                {password === "252525" ? <Boton/> : null}
                
            </form>
            {error ? error : null}
            
            
        </>
    );
};

export default input;

