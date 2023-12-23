# Hash Tables

Hash tables are used to store key-value pairs. They are like arrays, but the keys are not ordered. They are really fast for finding values, adding values, removing values.

- Insertion: `O(1)`
- Deletion: `O(1)`
- Access: `O(1)`

## Hashing

To implement a hash table, we will use an array. In order to look up values by key, we need a way to convert keys into valid array indices. A function that performs this task is called a hash function

### Hash Functions

What makes a good hash? (not a cryptographically secure one though)

- Fast (i.e. constant time)
- Doesn't cluster outputs at specific indicies, but distributes uniformly
- Deterministic (same input yields same output)

### Dealing With Collisions

Linear Probing

Separate Chaining

### Implementing the following methods on the HashTable class:

- set - this method should accept a key and a value, hash the key, store the key-value pair in the hash table array via separate chaining.
-  get - this method should accepts a key, retrieve the key-value pair in the hash table, if the key isn't found, return undefined.
- keys - this method should loop through the hash table array and return an array of keys in the table.
- values - this method should loop through the hash table array and return an array of values in the table.
- delete - accepts a key, removes the key-value pair from the hash table.
- print - for each index number in the 'Hash Table', print the keys, values, and index where they are stored.

