import { useEffect } from'react';

const products= [{
    id: 0,
    nombre:'Coneja amigurumi',
    precio: 12000,
    imagen:'../public/img/coneja1.jpeg' ,
    descripcion:'tamaño ...',
    armado:'entre 10 y 14 dias habiles',
    stock: 2
},
{
    id: 1,
    nombre:'Grinch amigurumi',
    precio: 10000,
    imagen:'../public/img/grinch2.jpeg' ,
    descripcion:'tamaño ...',
    armado:'entre 10 y 14 dias habiles',
    stock: 0

},
{
    id: 2,
    nombre:'Osa amigurumi',
    precio: 13000,
    imagen:'../public/img/osa4.jpeg' ,
    descripcion:'tamaño ...',
    armado:'entre 14 y 20 dias',
    stock: 3
},
{
    id: 3,
    nombre:'Ratón amigurumi',
    precio: 14000,
    imagen:'../public/img/raton2.jpeg' ,
    descripcion:'tamaño ...',
    armado:'entre 14 y 20 dias',
    stock: 5
},
{
    id: 4,
    nombre:'Yoda amigurumi',
    precio:14000, 
    imagen:'../public/img/yoda1.jpeg',
    descripcion:'tamaño ...',
    armado:'entre 14 y 20 dias',
    stock: 1
}]

export const getProducts = () => {
    let error = false;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!error) {
          resolve(products);
        } else {
          reject('Hubo un error intente mas tarde');
        }
      }, 2000);
    });
  };
  
  export const getItem = ()=> {
    return new Promise ((resolve) => {
      setTimeout(()=> {
        resolve (products[3])
      },2000)
    })
  }