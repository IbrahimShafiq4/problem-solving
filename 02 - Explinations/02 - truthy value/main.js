// ( || - Logical OR Operation ) Will Take The First Falsy Value
// ( && - Logical AND Operation ) will Take The First Falsy Value

console.log(0 || "" || undefined || null || 2 || 1); // Output: 2
// will take the First Truthy value and the First Truthy value is 2

console.log(0 && "" && undefined && null && 2 && 1); // Output: 0
// will take the First Falsy value and the First Falsy value is 2

// ========================
// 0 => Falsy Value
// "" => Falsy Value
// undefined => Falsy Value
// null => Falsy Value
// ========================

// Try These 😁😁❤️
// And Comment The Output😊 
console.log(1 || 10); // ?
console.log(0 || 2); // ?
console.log(0 && 2) // ?

console.log(2 | 0); // ?
console.log(0 ^ 2); // ?
console.log(0 & 2); // ?