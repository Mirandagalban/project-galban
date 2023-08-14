import { useEffect } from'react';

const products= [{
    id: 0,
    nombre:'Coneja amigurumi',
    precio: 12000,
    imagen:'../public/img/coneja1.jpeg' ,
    descripcion:'tamaño ...',
    armado:'entre 10 y 14 dias habiles',
    stock: 2,
    categoria: 'peluches'
},
{
    id: 1,
    nombre:'Grinch amigurumi',
    precio: 10000,
    imagen:'../public/img/grinch2.jpeg' ,
    descripcion:'tamaño ...',
    armado:'entre 10 y 14 dias habiles',
    stock: 0,
    categoria:  'peluches'

},
{
    id: 2,
    nombre:'Osa amigurumi',
    precio: 13000,
    imagen:'../public/img/osa4.jpeg' ,
    descripcion:'tamaño ...',
    armado:'entre 14 y 20 dias',
    stock: 3,
    categoria:  'peluches'
},
{
    id: 3,
    nombre:'Ratón amigurumi',
    precio: 14000,
    imagen:'../public/img/raton2.jpeg' ,
    descripcion:'tamaño ...',
    armado:'entre 14 y 20 dias',
    stock: 5,
    categoria:  'peluches'

},
{
    id: 4,
    nombre:'Yoda amigurumi',
    precio:14000, 
    imagen:'../public/img/yoda1.jpeg',
    descripcion:'tamaño ...',
    armado:'entre 14 y 20 dias',
    stock: 1,
    categoria:  'peluches'

},
{
  id: 5,
  nombre:'Chaleco al crochet',
  precio: 4500,
  imagen:'../public/img/chaleco.jpeg' ,
  descripcion:'Talles para 1, 2 y 3 años, color a eleccion',
  armado:'1 semana',
  stock: 3,
  categoria: 'bebes'
},{
  id: 6,
  nombre:' Movil con estrellas',
  precio: 5500,
  imagen:'../public/img/movil.jpeg' ,
  descripcion:'tamaño: 30 cm de alto x 7cx de ancho, color a eleccion',
  armado:'1 semana',
  stock: 2,
  categoria: 'bebes'
},{
  id: 7,
  nombre:' Movil con lunas',
  precio: 5500,
  imagen:'../public/img/movil2.jpeg' ,
  descripcion:'tamaño: 30 cm de alto x 7cx de ancho, color a eleccion',
  armado:'1 semana',
  stock: 5,
  categoria: 'bebes'
},]

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
  
  export const getItem = (id)=> {
    return new Promise ((resolve) => {
      setTimeout(()=> {
        resolve (products.find((item)=> item.id === id))
      },2000)
    })
  }