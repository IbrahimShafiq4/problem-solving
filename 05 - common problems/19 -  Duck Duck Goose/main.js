class Player {
    constructor(name) {
        this.name = name;
    }
}

/**
 * Using Modulus Operator
 */
function duckDuckGoose(players, goose) {
    // Modulus wraps around the player list
    const index = (goose - 1) % players.length;
    return players[index].name;
}

/**
 * Recursive Approach
 */
function duckDuckGooseRecursive(players, goose) {
    if (goose <= players.length) return players[goose - 1].name;
    return duckDuckGooseRecursive(players, goose - players.length);
}

/**
 * Spread Operator (Alternative to Array Copy)
 */
function duckDuckGooseExtended(players, goose) {
    const extendedPlayers = [...players, ...players];
    return extendedPlayers[(goose - 1) % players.length].name;
}

// Test Cases
const ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
const players = ex_names.map((n) => new Player(n));

console.log(duckDuckGoose(players, 1));   // Expected output: "a"
console.log(duckDuckGoose(players, 5));   // Expected output: "a"
console.log(duckDuckGoose(players, 10));  // Expected output: "z"
console.log(duckDuckGoose(players, 20));  // Expected output: "z"

console.log(duckDuckGooseRecursive(players, 3));   // Expected output: "c"
console.log(duckDuckGooseRecursive(players, 10));  // Expected output: "z"
console.log(duckDuckGooseRecursive(players, 18));  // Expected output: "g"

console.log(duckDuckGooseExtended(players, 2));    // Expected output: "b"
console.log(duckDuckGooseExtended(players, 28));   // Expected output: "g"
console.log(duckDuckGooseExtended(players, 7));    // Expected output: "f"
