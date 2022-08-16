const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// const customerInfo = (order) => {
//   const name = order.order.delivery.deliveryPerson;
//   const name2 = order.name;
//   const phone = order.phoneNumber;
//   const address = Object.values(order.address);
//   console.log(
//     `Olá ${name}, entrega para ${name2}, telefone: ${phone}, Endereço: ${address}`
//   );
// };

// customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = "Luiz Silva";
  order.payment.total = '50R$'
  const name = order.name;
  marguerita = Object.keys(order.order.pizza)
  const cola = order.order.drinks.coke.type
  const price = order.payment.total

  console.log(`Olá ${name} o total do seu pedido de ${marguerita} e ${cola} é ${price}`,);
};

orderModifier(order);

// Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00
