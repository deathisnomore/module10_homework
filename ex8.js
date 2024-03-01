let fruits = new Map([
    ["banana", "yellow"],
    ["cucumber", "green"],
    ["cherry", "red"]
]);
for (let [name, color] of fruits) {
    console.log(`${name} - ${color}`);
 }