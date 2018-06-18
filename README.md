# Data Structures

1. Queue
A queue works like a line for an amusement park ride -- people enter at the end of the queue and leave from the front (FIFO: first in, first out).

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/200px-Data_Queue.svg.png">

<strong>A queue would be great for....</strong>
Issuing instructions to your sandwich-making robot.

2. Stack
A stack works like a stack of plates -- plates are added and removed from the the top of the stack (LIFO: last in, first out).

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Data_stack.svg/200px-Data_stack.svg.png">

<strong>A stack would be great for...</strong>
Implementing your browser's back button.

3. Linked List
A linked list is a dynamic data structure that allows for constant time insertion and removal at any point in the linked list (compare this to an array which on average has linear time insertion and removal operations). In exchange for this insertion and removal speed, linked lists are not indexed and any find operations on a link list require the linear time operation of traversing the entire linked-list from the beginning.

<img src="https://f.cloud.github.com/assets/1577682/1212239/43154574-2615-11e3-8e29-43cf74e25b10.png">

A linked list would be great for....
An itinerary you expect to add and remove destinations to and from.

4. Tree
A tree is a hierarchical data structure consisting of a node (potentially) with children. The children are trees unto themselves, that is, nodes with (potential) children. For this reason the tree is referred to as a recursive data structure.

<img src="http://www.urgenthomework.com/images/ternary-and-quaternary-tree.gif">

A tree would be great for....
Making a family tree.

5. Graph
Graphs consist of nodes (often referred to as vertices) and edges (often referred to as arcs) that connect the nodes. Unlike trees, graphs are not necessarily hierarchical. Graphs can be undirected, which means that the relationship of any 2 nodes connected by an edge is a symmetrical relationship, or they can be directed, which means there is an asymmetrical relationship between nodes that are connected by an edge. You will be implementing an undirected graph.

<img src="http://i.imgur.com/PlN2VGG.png">

A graph would be great for....
Representing how a collection of websites (or the entire world wide web) link to each other, and many other things

6. Set
Sets contain unique values in no particular order.

<img src="http://www.codeproject.com/KB/recipes/DotNetSet/Sets02.png">

A set would be great for....
A raffle, where all the tickets are unique and you just want to randomly pick one (or several) out of them all.

7. Hash Table
Hash tables (sometimes called hash maps) store key value pairs. They do so in a memory efficient way by using a 'hashing function' that translates keys into numerical indices located within a fixed block of memory (think about the contiguous blocks of memory used in arrays). Hash tables only increase their size in memory when necessary, and reduce their size in memory when possible.

<img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg">

A hash table would be great for....
A contact list you might add to or remove from over time.

<strong>On Objects and Hash Tables:</strong> An astute hacker might find themself wondering "Is it not so that a JavaScript object is a hash table?" or even further, "Why would I ever need to create a hash table in JavaScript?" While it is true that objects and hash tables are functionally similar, knowing how a hash table works is hugely important as they are an incredibly useful and fundamental data structure. To have detailed knowledge of how a hash table is constructed will give you valuable insight on your path to code mastery. Additionally, other languages might not provide the convenience of JavaScript's object class, meaning you may someday have to put your hash table construction abilities to good use.

**Interesting Aside: JavaScript objects aren't necessarily backed by hash tables. Despite the similarities, the ECMA-262 standard makes no restrictions on how JavaScript objects are implmented. The V8 JavaScript engine, which is used in Chrome, implements objects in a way that is significantly faster than using a hash table.

8. Binary Search Tree
Binary trees are trees that can only have 0, 1, or 2 children. Remember that trees are recursive data structures and therefore a tree's children are themselves trees and can each have 0, 1, or 2 children. In a binary search tree, one child (out of potentially two) will always be less than the node's value (based on whatever sorting condition you wish) and the other child will always be greater than the node's value. Whether it is the 'left' or the 'right' child which is greater or lesser is consistent throughout the binary search tree. This structure results in particularly fast find operations. You'll be asked to answer just how fast yourself.

<img src="http://i.imgur.com/eDw57vR.png">

A binary search tree would be great for....
A dictionary of all English words.
