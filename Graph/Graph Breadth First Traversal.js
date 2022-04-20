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

// For Breadth First Traversal we need to use Stack and Iteration
// Using Recursion for Breadth First Traversal is not good and not used

const breadthFirstPrint = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
};

// Actual Output -
// a, c, b, e, d, f;

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

breadthFirstPrint(graph, "a"); //acbedf
