// Amazon Interview Question
// We're given a binary tree. We need to find the minimum depth of this binary tree.
// It makes sense to use BFS to go level by level.

/* 

                3
            /        \
            9        20
                    /   \
                    15  7
*/

// Define the binary tree
const tree = {
    value: 3,
    left: {
        value: 9,
        left: null,
        right: null
    },
    right: {
        value: 20,
        left: {
            value: 15,
            left: null,
            right: null
        },
        right: {
            value: 7,
            left: null,
            right: null
        }
    }
};

// Function to find the minimum depth of the binary tree
function minDepth(root) {
    // If the tree is empty, the minimum depth is 0.
    if (root === null) return 0;

    // Initialize the minimum depth to 1, as the root itself is at level 1.
    let minDepth = 1;

    // Initialize a queue with the root node.
    let queue = [root];
    
    // Perform Breadth-First Search (BFS)
    while(queue.length)  {
        // Get the number of nodes at the current level.
        let levelSize = queue.length;

        // Process nodes at the current level.
        for (let i = 0; i < levelSize; i++) {
            // Dequeue the front node.
            let current = queue.shift();

            // If the current node is a leaf node, return the current minimum depth.
            if (current.left === null && current.right === null) {
                return minDepth;
            } else {
                // Enqueue the left and right children if they exist.
                if (current.left) queue.push(current.left);
                if (current.right) queue.push(current.right);
            }
        }

        // Increment the minimum depth for the next level.
        minDepth++;
    }

    // Return the minimum depth of the binary tree.
    return minDepth;
}

// Output the result
console.log(minDepth(tree)); // Output will be 2

// Level 1: Only the root node is present, so the minimum depth is 1.
// Level 2: Nodes 9 and 20 are present. 
// Both are leaf nodes, so the minimum depth remains 1 as we only count the distance to the nearest leaf node.
// then the output will be 2