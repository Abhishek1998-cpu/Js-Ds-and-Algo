// Common Graph Interview Question
// Has Path Problem

// Example Graph -

// {
//     f: [g,i],
//     g: [h],
//     h: [],
//     i: [g,k],
//     j: [i],
//     k: []
// }

// The Above Graph is Acyclic -> No Cycle

// Method 1 - DFT using Recursion

const hasPath = (graph, src, dst) => {
  // Base Case
  if (src === dst) {
    return true;
  }

  // If neighbour is connect to the dst then src must also be connected to it
  for (let neighbour of graph[src]) {
    if (hasPath(graph, neighbour, dst) === true) {
      return true;
    }
  }

  return false;
};

// Method 2 - BFT using Iteration

const hasPath2 = (graph, src, dst) => {
  const queue = [src];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dst) {
      return true;
    }
    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
  return false;
};

console.log(
  hasPath(
    {
      f: ["g", "i"],
      g: ["h"],
      h: [],
      i: ["g", "k"],
      j: ["i"],
      k: [],
    },
    "f",
    "k"
  )
);

console.log(
  hasPath2(
    {
      f: ["g", "i"],
      g: ["h"],
      h: [],
      i: ["g", "k"],
      j: ["i"],
      k: [],
    },
    "f",
    "k"
  )
);
