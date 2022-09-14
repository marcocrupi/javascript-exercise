const order = {};

 if (
   order &&
   order.customer &&
   order.customer.address &&
   !order.customer.address.city
 ) {
   console.log("City is required");
 }

const optionalChaining = !order?.customer?.address?.city || "City is required";
console.log(optionalChaining);
