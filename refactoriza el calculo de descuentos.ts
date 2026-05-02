// Implementa la función calculateOrderDiscount que calcula
// el precio final de un pedido aplicando descuentos según
// el tipo de membresía del cliente.

// Reglas de negocio:
// Membresía	Subtotal ≥ 100	Subtotal < 100
// "gold"	20% descuento	10% descuento
// "silver"	10% descuento	5% descuento
// otros	sin descuento	sin descuento

//     Retorna -1 si el subtotal del pedido es menor a 10.

// Tipos
interface OrderItem {
  price: number;
  quantity: number;
}

function descuentoMembresia(membresia: string, subtotal: number): number {
  switch (membresia) {
    case "gold":
      return subtotal >= 100 ? subtotal * 0.2 : subtotal * 0.1;
      break;
    case "silver":
      return subtotal >= 100 ? subtotal * 0.1 : subtotal * 0.05;
      break;
    default:
      return 0;
  }
}

// Comportamiento esperado
function calculateOrderDiscount(order: OrderItem[], membresia: string): number {
  const SUBTOTAL = order.reduce((acc: number, item: OrderItem) => {
    return acc + item.price * item.quantity;
  }, 0);
  if (SUBTOTAL < 10) return -1;
  return SUBTOTAL - descuentoMembresia(membresia, SUBTOTAL);
}

console.log(calculateOrderDiscount([{ price: 50, quantity: 2 }], "gold")); // 80
console.log(calculateOrderDiscount([{ price: 30, quantity: 2 }], "gold")); // 54
console.log(calculateOrderDiscount([{ price: 20, quantity: 2 }], "silver")); // 38
console.log(calculateOrderDiscount([{ price: 50, quantity: 2 }], "silver")); // 90
console.log(calculateOrderDiscount([{ price: 5, quantity: 1 }], "gold")); // -1
console.log(calculateOrderDiscount([{ price: 50, quantity: 1 }], "bronze")); // 50

// Requisitos de calidad

// Al enviar, tu código será evaluado también en estos criterios:

//     Sin números mágicos — extrae los porcentajes y
// umbrales como constantes con nombres descriptivos
//     Sin variables de una sola letra —
// usa nombres que expresen la intención (items, subtotal, discount, etc.)
//     Constantes en UPPER_SNAKE_CASE —
// al menos una constante nombrada así (ej: MIN_ORDER_AMOUNT)
//     Al menos una función auxiliar —
// extrae lógica en funciones con responsabilidad única
