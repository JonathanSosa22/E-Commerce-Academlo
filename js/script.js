const productos = [
  {codigo: 1, nombre: 'Hoodies', descripcion:'Hoodies red', precio: 14.00, imagen: '../img/buzo1.png', stock: 10},
  {codigo: 2, nombre: 'Shirts', descripcion:'Shirts gray', precio: 20.00, imagen: '../img/buzo2.png', stock: 15},
  {codigo: 3, nombre: 'Sweatshirts', descripcion:'Sweatshirts white', precio: 23.00,imagen: '../img/buzo3.png', stock: 7}
];

let contenedorProductos = document.querySelector('#contenedorProductos');
let arregloCarrito = [];

let carrito = JSON.parse(localStorage.getItem('carrito'));

if(carrito){
    arregloCarrito = carrito;
}

for (let i = 0; i < productos.length; i++) {

  contenedorProductos.innerHTML += `
  <div class="card">
        <div><img src="${productos[i].imagen}" alt=""></div>
        <div class="card-buzo">
          <h3>$${productos[i].precio} | Stock: ${productos[i].stock}</h3>
          <h3>${productos[i].nombre}</h3><br>
             <button class="details-button" id="${productos[i].codigo}">Add To Card</button>
          </div>
        </div>
      </div>
  `;
}

let botonesCarrito = document.querySelectorAll('.details-button');

for (let i = 0; i <  botonesCarrito.length; i++) {
  botonesCarrito[i].addEventListener('click', (e) => {
      e.preventDefault();

      let productoSeleccionado = productos.find( (element) =>{  return element.codigo == e.target.id; } );

      let productoRepetido = arregloCarrito.findIndex( (element) => { return element.codigo === productoSeleccionado.codigo} );


      if(productoRepetido != -1){
          alert('The product is already in your cart');
      }else{
          arregloCarrito.push(productoSeleccionado);
          localStorage.setItem("carrito", JSON.stringify(arregloCarrito));
      }  
  });
}

