function getSumOrders(arrayOrders) {
    let sum = 0;
    arrayOrders.forEach( el => {
      sum += el;
    });
    return sum;
  }
  
  let ordersCustomers = [10000, 20000, 30000];
  console.log(getSumOrders(ordersCustomers));