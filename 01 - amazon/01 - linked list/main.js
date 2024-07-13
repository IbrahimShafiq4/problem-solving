// // Amazon Coding Interview Question
// // Given the head of a linked list 
// // return the middle node
// // if there is two middle nodes 
// // return the second middle node

// // Constrains:
// /* 
//     The number of nodes in the list is in
//     the range [1, 100].
//     1 <= Node.val <= 100

//     Our LinkedList
//     1 -> 2 -> 3 -> 4 -> 5
// */

// // Define a constructor function for a ListNode representing a node in a linked list
// class ListNode {
//     constructor(val) {
//         this.val = val; // Node value
//         this.next = null; // Reference to the next node in the list
//     }
// }

// // Define a function to find and return the middle node of a linked list
// const middleNode = function(head) {
//     let sPointer = head; // Initialize a sPointer pointer to the head of the list
//     let fPointer = head; // Initialize a fPointer pointer to the head of the list

//     // Traverse the list with two pointers, one moving one step at a time (sPointer),
//     // and the other moving two steps at a time (fPointer)
//     while (fPointer && fPointer.next) {
//         fPointer = fPointer.next.next; // Move fPointer pointer two steps
//         sPointer = sPointer.next;      // Move sPointer pointer one step
//     }

//     return sPointer; // Return the middle node (or second middle node if there are two)
// };

// // Create a linked list with values 1 -> 2 -> 3 -> 4 -> 5
// const list1 = new ListNode(1);
// list1.next = new ListNode(2);
// list1.next.next = new ListNode(3);
// list1.next.next.next = new ListNode(4);
// list1.next.next.next.next = new ListNode(5);

// // Call the middleNode function with the created linked list and log the result
// console.log(middleNode(list1));

// /* Output: 
//     ListNode { val: 3, next: 
//         ListNode { val: 4, next:
//             ListNode { val: 5, next: 
//                 null
//             }
//         }
//     }
// */


class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const findMiddleNode = (head) => {
    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer && fastPointer.next) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }

    return slowPointer;
};

const createLinkedList = (...values) => {
    const nodes = values.map(val => new ListNode(val));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    return nodes[0];
};

const printList = (head) => {
    const values = [];
    let current = head;
    while (current) {
        values.push(current.val);
        current = current.next;
    }
    console.log(values.join(' -> '));
};

const list1 = createLinkedList(1, 2, 3, 4, 5, 6);
printList(list1);

const middleNode = findMiddleNode(list1);
console.log(middleNode);
