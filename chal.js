// Feature Tasks
// Write the following methods for the Linked List class:

// .append(value) which adds a new node with the given value to the end of the list
// .insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
// .insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

// Examples
// .append(value)
// Input	Args	Output
// head -> [1] -> [3] -> [2] -> X	5	head -> [1] -> [3] -> [2] -> [5] -> X
// head -> X	1	head -> [1] -> X

// .insertBefore(value, newVal)
// Input	Args	Output
// head -> [1] -> [3] -> [2] -> X	3, 5	head -> [1] -> [5] -> [3] -> [2] -> X
// head -> [1] -> [3] -> [2] -> X	1, 5	head -> [5] -> [1] -> [3] -> [2] -> X
// head -> [1] -> [2] -> [2] -> X	2, 5	head -> [1] -> [5] -> [2] -> [2] -> X
// head -> [1] -> [3] -> [2] -> X	4, 5	Exception

// .insertAfter(value, newVal)
// Input	Args	Output
// head -> [1] -> [3] -> [2] -> X	3, 5	head -> [1] -> [3] -> [5] -> [2] -> X
// head -> [1] -> [3] -> [2] -> X	2, 5	head -> [1] -> [3] -> [2] -> [5] -> X
// head -> [1] -> [2] -> [2] -> X	2, 5	head -> [1] -> [2] -> [5] -> [2] -> X
// head -> [1] -> [3] -> [2] -> X	4, 5	Exception


// 

// Feature Tasks
// Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.
// Example
// ll.kthFromEnd(k)
// Input ll	Arg k	Output
// head -> [1] -> [3] -> [8] -> [2] -> X	0	2
// head -> [1] -> [3] -> [8] -> [2] -> X	2	3
// head -> [1] -> [3] -> [8] -> [2] -> X	6	Exception

// 


// Feature Tasks
// Write a function called zipLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.
// Example
// zipLists(list1, list2)
// Arg list1	Arg list2	Output
// head -> [1] -> [3] -> [2] -> X	head -> [5] -> [9] -> [4] -> X	head -> [1] -> [5] -> [3] -> [9] -> [2] -> [4] -> X
// head -> [1] -> [3] -> X	head -> [5] -> [9] -> [4] -> X	head -> [1] -> [5] -> [3] -> [9] -> [4] -> X
// head -> [1] -> [3] -> [2] -> X	head -> [5] -> [9] -> X	head -> [1] -> [5] -> [3] -> [9] -> [2] -> X



// moc
// Feature Tasks
// Ask the candidate to write a function to validate whether or not a Linked list is palindrome
// Help the candidate understand the definition of a Palindrome if he/she is unsure of it.
// A palindrome is a word, phrase, number, or sequence of nodes which reads the same backward as forward.
// Avoid utilizing any of the built-in methods available in your language.
// This problem can be solved using different approaches:
// Using a helper data structure (Array or Linked List) to keep track of the nodes.
// This method takes O(n) and uses O(n) extra space.
// Reversing the Linked List, and checking for equality of the reversed part.
// Structure
// Familiarize yourself with the grading rubric, so you know how to score the interview.

// Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

// Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

// Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

// Add up all the points at the end, and record the total at the bottom of the page.

// Example
// Input	Output
// head->[t]->[a]->[c]->[o]->[c]->[a]->[t]	TRUE
// head->[m]->[o]->[o]->[m]	TRUE
// head->[h]->[o]->[u]->[s]->[e]	FALSE


// Feature Tasks
// Ask the candidate to write a function to reverse a Singly Linked List.
// Avoid utilizing any of the built-in methods available in your language.
// Attempt to guide the candidate to an in-place solution (i.e. avoid creating a copy of the Linked List).
// This problem can be approached in several ways:
// Iterating over the linked list and storing a reference to a current node, its previous node, and its next node.
// In every iteration, after the next node is stored, the current’s node next pointer is pointed at the stored reference to the previous node.
// This solution takes O(n) time and uses O(1) extra space.
// A recursive solution that reverses the body of the link list before re-connecting the head.
// This solution takes O(n) time and uses O(n) space on the call stack.
// Creating a copy of the linked list, inserting elements at the head of the new list.
// This solution takes O(n) time and uses O(n) space.
// Structure
// Familiarize yourself with the grading rubric, so you know how to score the interview.

// Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

// Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

// Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

// Add up all the points at the end, and record the total at the bottom of the page.

// Example
// Input	Output
// head->[3]->[2]->[1]	head->[1]->[2]->[3]
// head->['a']->['b']->['c']	head->['c']->['b']->['a']