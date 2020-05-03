class Graph {
  constructor(noOfVertices) {
    this._noOfVertices = noOfVertices;
    this.adJlist = new Map();
  }

  addVertex(value) {
    if (!this.adJlist.has(value)) this.adJlist.set(value, []);
  }

  addEdge(source, destination) {
    const sourceVertex = this.adJlist.get(source);
    const destinationVertex = this.adJlist.get(destination);

    if (sourceVertex && destinationVertex) {
      this.adJlist.get(source).push(destination);
      this.adJlist.get(destination).push(source);
    }
  }

  printGraph() {
    const vertexes = this.adJlist.keys();
    for (let vertex of vertexes) {
      const adListOfVertex = this.adJlist.get(vertex);
      let result = vertex + " -> ";
      for (let ad of adListOfVertex) {
        result += ad + " ";
      }
      console.log(result);
    }
  }

  bfs(startNode) {
    let queue = []; //A queue
    const adjListKeys = this.adJlist.keys();
    let visitedList = {};
    for (let key of adjListKeys) {
      visitedList[key] = false;
    }
    queue.push(startNode);
    visitedList[startNode] = true;
    while (queue.length) {
      let currentNode = queue.shift();
      console.log(currentNode);
      let adOfCurrentNode = this.adJlist.get(currentNode);
      for (let node of adOfCurrentNode) {
        if (!visitedList[node]) {
          queue.push(node);
          visitedList[node] = true;
        }
      }
    }
  }
  dfs(startNode) {
    const adjListKeys = this.adJlist.keys();
    let visitedList = {};
    for (let key of adjListKeys) {
      visitedList[key] = false;
    }
    this.dfsUntil(startNode, visitedList);
  }

  dfsUntil(startNode, visitedList) {
    visitedList[startNode] = true;
    console.log(startNode);
    let adOfCurrentNode = this.adJlist.get(startNode);
    for (let node of adOfCurrentNode) {
      if (!visitedList[node]) {
        this.dfsUntil(node, visitedList);
      }
    }
  }
}

// Using the above implemented graph class
var g = new Graph(6);
var vertices = ["A", "B", "C", "D", "E", "F"];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
// g.printGraph();
// prints
// BFS
// A B D E C F
console.log("BFS");
g.bfs("A");

console.log("DFS");
g.dfs("A");
