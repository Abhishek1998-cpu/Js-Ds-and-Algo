// Graph Data Structure
// Graph = Node +  Edges
// Depth First Traversal - Stack
// Breadth First Traversal - Queue - FIFO
// 16.37

// a ---------> c
// |            |
// |            |
// |            |
// |            |
// |            |
// >            >
// b            e
// |
// |
// |
// |
// >
// d ---------> f

// Depth First Traversal Implementation using Stack and Iteration
// const depthFirstSearch = (graph, source) => {
//   const stack = [source];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     console.log(current);
//     for (let neighbour of graph[current]) {
//       stack.push(neighbour);
//     }
//   }
// };

// Depth First Traversal Implementation using Recursion
const depthFirstSearch = (graph, source) => {
  console.log(source);
  for (let neighbour of graph[source]) {
    depthFirstSearch(graph, neighbour);
  }
};

// Expected Outcomes
// a, c, e, b, d, f
// a, b, d, f, c, e

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

depthFirstSearch(graph, "a"); //abdfce
