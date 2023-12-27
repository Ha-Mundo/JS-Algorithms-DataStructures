# Dynamic Programming

Method of solving a complex problem by breaking it down into a collection of simpler sub problems, solving each of those sub problems just once and storing their solutions.

It works on problems if it has overlapping sub problems and optimal substructure.

### Overlapping sub problems

A problem is said to have overlapping sub problems if it can be broken down into sub problems which are reused several time

- Fibonacci is an example

### Optimal substructure

A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its sub problems

- Shortest path in a graph

## Memoization

Storing the results of expensive function calls and returning the cached result when the same inputs occur again.

## Tabulation: A Bottom Up Approach

- Storing the result of a previous result in a "table" (usually an array).
- Usually done using iteration.
- Better space complexity can be achieved using tabulation

## Tabulation vs Memoization
|                    | Tabulation                                                                                                                                       | Memoization                                                                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| State              | State Transition relation is difficult to think                                                                                                  | State transition relation is easy to think                                                                                                                                    |
| Code               | Code gets complicated when lots of conditions are required                                                                                       | Code is easy and less complicated                                                                                                                                             |
| Speed              | Fast, as we directly access previous states from the table                                                                                       | Slow due to a lot of recursive calls and return statements                                                                                                                    |
| Subproblem Solving | If all sub problems must be solved at least once, a bottom-up DP algorithm usually outperforms a top-down memoized algorithm by a constant factor | If some sub problems in the subproblem space need not be solved at all, the memoized solution has the advantage of solving only those sub problems that are definitely required |
| Table Entries      | In tabulated version, starting from the first entry, all entries are filled one by one                                                           |