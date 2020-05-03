class Graph {
  constructor(noOfVertices) {
    this._noOfVertices = noOfVertices;
    this.adJlist = new Map();
  }

  addVertex(value) {
    if (!this.adJlist.has(value)) this.adJlist.set(value, []);
  }

  addEdge(source, destination) {
    console.log(this.adJlist.get(source), source, destination);
    this.adJlist.get(source).push(destination);
  }
  printGraph() {
    const vertexes = this.adJlist.keys();
    for (const vertex of vertexes) {
      const adListOfVertex = this.adJlist.get(vertex);
      let result = `${vertex} -> `;
      for (const ad of adListOfVertex) {
        result += `${ad} `;
      }
      console.log(result);
    }
  }
  // dfs(startNode, result) {
  //   const adjListKeys = this.adJlist.keys();
  //   const visitedList = {},
  //     visitedNodes = [];
  //   for (const key of adjListKeys) {
  //     visitedList[key] = false;
  //   }
  //   this.dfsUntil(startNode, visitedList, visitedNodes, result);
  //   return result;
  // }

  // dfsUntil(startNode, visitedList, visitedNodes, result) {
  //   visitedList[startNode] = true;
  //   result.push(startNode);
  //   // console.log(startNode);
  //   const adOfCurrentNode = this.adJlist.get(startNode);
  //   if (!adOfCurrentNode.length) return result;
  //   for (const node of adOfCurrentNode) {
  //     if (!visitedList[node]) {
  //       this.dfsUntil(node, visitedList, visitedNodes, result);
  //     }
  //   }
  //   return result;
  // }
  bfs(startNode) {
    let queue = []; //A queue
    let resultStack = [];
    const adjListKeys = this.adJlist.keys();
    let visitedList = {};
    for (let key of adjListKeys) {
      visitedList[key] = false;
    }
    queue.push(startNode);
    resultStack.push(startNode);
    visitedList[startNode] = true;
    while (queue.length) {
      let currentNode = queue.shift();
      // console.log(currentNode);
      let adOfCurrentNode = this.adJlist.get(currentNode);
      for (let node of adOfCurrentNode) {
        if (!visitedList[node]) {
          queue.push(node);
          resultStack.push(node);
          visitedList[node] = true;
        }
      }
    }
    return { visitedList, resultStack };
  }
}
function findAloofNodes(aloofNodes) {
  let found;
  for (const project of projects) {
    if (g.adJlist.get(project).length === 0) {
      for (const pro of projects) {
        if (g.adJlist.get(pro).indexOf(project) === -1) {
          found = true;
        } else {
          found = false;
          break;
        }
      }
      if (found) aloofNodes.push(project);
    }
  }
  return aloofNodes;
}
function buildOrder(g) {
  let aloofNodes = [],
    output,
    found = false;
  aloofNodes = findAloofNodes(aloofNodes);
  for (const project of projects) {
    output = g.bfs(project);
    for (let node of aloofNodes) {
      output.visitedList[node] = true;
    }
    for (let proj of projects) {
      if (output.visitedList[proj] === false) {
        found = false;
        break;
      } else {
        found = true;
      }
    }
    if (found) break;
  }
  return found ? output.resultStack : false;
}

/* TEST */
var projects = ["a", "b", "c", "d", "e", "f", "g"];
const dependencies = [
  ["a", "d"],
  ["f", "b"],
  ["b", "d"],
  ["f", "a"],
  ["d", "c"],
  ["g", "f"]
];

const g = new Graph(projects.length);
for (const project of projects) {
  g.addVertex(project);
}
for (const dep of dependencies) {
  g.addEdge(dep[0], dep[1]);
}
g.printGraph();
console.log(g);
console.log(buildOrder(g));
