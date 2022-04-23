// Graph Data Structure
// Graph = Node +  Edges
// Depth First Traversal - Stack
// Breadth First Traversal - Queue
// 16.37

const depthFirstSearch = (graph, source) => {};

const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

depthFirstSearch(graph, "a"); //abdfce
