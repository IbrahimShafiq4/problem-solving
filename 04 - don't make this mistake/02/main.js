const newArray = [1, 2, 3, 4, 5];

// This commented-out function tries to process each item in the array asynchronously using forEach
// It doesn't work as expected because forEach doesn't handle async/await correctly
// async function processArray(arr) {
//     arr.forEach(async (item) => {
//         await performAsyncTasks(item);
//         console.log(`Processed: ${item}`);
//     });
// }

// This function processes each item in the array sequentially using a for...of loop
async function processArray(arr) {
    for (const item of arr) {
        // Wait for the async task to complete for each item
        await performAsyncTasks(item);
        console.log(`Processed: ${item}`);
    }
}

// Call the processArray function and handle success or error
processArray(newArray)
    .then(() => console.log('All items processed'))
    .catch((error) => console.log(`Error: ${error}`));

// Simulate an asynchronous task with a promise that resolves after 1 second
function performAsyncTasks(item) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
    });
}

/*
 * Brief Explanation:
 * - The `processArray` function processes an array of items asynchronously.
 * - The commented-out version uses forEach, which doesn't handle async/await correctly, leading to potential issues with the order of processing and final completion.
 * - The correct version uses a for...of loop to ensure each item is processed sequentially, waiting for the async task to complete before moving to the next item.
 * 
 * Why avoid using the commented-out version:
 * - The async forEach loop doesn't wait for each async operation to complete, causing all async tasks to run in parallel.
 * - This can lead to unpredictable behavior and incorrect logging order.
 * - The for...of loop ensures each item is processed one by one, maintaining the correct order and expected behavior.
 */
