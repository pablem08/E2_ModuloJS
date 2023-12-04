const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//Ejercicio A
console.log("Ejercicio a) :");
console.log("Las pizzas que tienen un id impar son: ");
pizzas.forEach((pizza) => {
  if (pizza.id % 2 != 0) {
    console.log(pizza.nombre);
  }
});

console.log(
  "---------------------------------------------------------------------------------------------------------------"
);

//Ejercicio B
console.log("Ejercicio b) :");
console.log("Pizza/s con un valor menor de $600 :");
pizzas.forEach((pizza) => {
  if (pizza.precio < 600) {
    console.log(pizza.nombre);
  }
});

console.log(
  "---------------------------------------------------------------------------------------------------------------"
);

//Ejercicio C
console.log("Ejercicio c) :");
pizzas.forEach((pizza) => {
  console.log(`La ${pizza.nombre} , tiene un  valor de $${pizza.precio}`);
});


console.log(
  "---------------------------------------------------------------------------------------------------------------"
);

//Ejercicio D
console.log("Ejercicio d) :");
pizzas.forEach(pizza => {
  console.log(`La ${pizza.nombre} tiene los ingredientes:`)
  pizza.ingredientes.forEach(ingrediente =>{
    console.log(ingrediente)
  })
})


