// function processOrder(order) {
//     if (order) {
//         order.status = 'fulfilled';
//         console.log('Processing Order:', {order});
//     }

//     if (order.status === 'fulfilled') {
//         order.payment = 'Eg';
//         console.log('order Processed', {order});
//     }
// }

// This function processes an order
function processOrder(order) {
    // If there is no order provided, exit the function immediately
    if (!order) return;

    // Set the order status to 'fulfilled'
    order.status = 'fulfilled';
    console.log('Processing Order:', {order});

    // If the order status is not 'fulfilled' for any reason, exit the function
    if (order.status !== 'fulfilled') return;

    // Set the payment method to 'Eg'
    order.payment = 'Eg';
    console.log('Order Processed:', {order});
}

// Creating a new order object
const newOrder = {
    orderId: 1,
    status: "pending",
    payment: ''
};

// Uncomment this line to process the new order object
// processOrder(newOrder);

// This line demonstrates the function's handling of a null order
// It is uncommented to show that the function exits without error

processOrder(null);
// processOrder(newOrder);

/*
 * Brief Explanation:
 * - The function `processOrder` is designed to update and process an order object.
 * - If no order is provided (`null` or `undefined`), the function exits immediately.
 * - The function sets the order status to 'fulfilled' and logs this update.
 * - If, for any reason, the order status is not 'fulfilled', the function exits without making further changes.
 * - Finally, it sets the payment method and logs the processed order.
 * 
 * Why avoid using the uncommented code (`processOrder(null);`):
 * - This line is only for demonstration and doesn't have a practical use in a real scenario.
 * - It could cause confusion if left in production code.
 * - It adds unnecessary log statements, cluttering the console.
 */
