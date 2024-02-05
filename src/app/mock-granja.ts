import { tipo } from "./tipo"
export const TIPOS: tipo[] = 
[
    {
        "id": 1,
        "animal": "HUEVO",
        "diasExpiracion": 21,
        "cantidadMaxima": 10000,
        "tiempoDeReproduccion": 21,
        "precioCompra": 10,
        "precioVenta": 20,
        "imagen": "../assets/huevo.jpg",
    },
    {
        "id": 2,
        "animal": "POLLO",
        "diasExpiracion": 1000,
        "cantidadMaxima": 10000,
        "tiempoDeReproduccion": 1,
        "precioCompra": 200,
        "precioVenta": 5000,
        "imagen": "../assets/pollito.jpg",
    },
    {
        "id": 3,
        "animal": "CHANCHO",
        "diasExpiracion": 1300,
        "cantidadMaxima": 1000,
        "tiempoDeReproduccion": 20,
        "precioCompra": 1500,
        "precioVenta": 50000,
        "imagen": "../assets/chancho.jpg",
    },
    {
        "id": 4,
        "animal": "VACA",
        "diasExpiracion": 1000,
        "cantidadMaxima": 100,
        "tiempoDeReproduccion": 27,
        "precioCompra": 2000,
        "precioVenta": 80000,
        "imagen": "../assets/vaca.jpg",
    }
]