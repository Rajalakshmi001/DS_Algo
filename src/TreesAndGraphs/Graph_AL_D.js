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

  detectCycle() {
    let visited = {},
      recStack = {};
    const vertices = this.adJlist.keys();
    for (let vertex of vertices) {
      if (this.detectCycleUtil(vertex, visited, recStack)) {
        return "There is a cycle";
      }
      return "No cycle";
    }
  }

  detectCycleUtil(vertex, visited, recStack) {
    if (!visited[vertex]) {
      visited[vertex] = true;
      recStack[vertex] = true;
      let adListofVertex = this.adJlist.get(vertex);
      for (let adNode of adListofVertex) {
        if (
          !visited[adNode] &&
          this.detectCycleUtil(adNode, visited, recStack)
        ) {
          return true;
        } else if (recStack[adNode]) {
          return true;
        }
      }
    }
    recStack[vertex] = false;
    return false;
  }

  isRoute(source, destination) {
    return this.adJlist.get(source).indexOf(destination) > -1 ? true : false;
  }
}
// Using the above implemented graph class
var g = new Graph(5);
var vertices = ["A", "B", "C", "D", "E"];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("A", "B");
g.addEdge("D", "E");
g.addEdge("C", "E");
g.addEdge("A", "D");
g.addEdge("A", "C");
g.addEdge("E", "B");
g.addEdge("D", "B");
g.addEdge("E", "A");
// prints all vertex and
// its adjacency list
// A -> B D C
// B ->
// C -> E
// D -> E B
// E -> B
g.printGraph();
// prints
// BFS
// A B D E C F
console.log("BFS");
g.bfs("A");

console.log("DFS");
g.dfs("A");

console.log("Cycle detection");
console.log(g.detectCycle());

console.log(g.isRoute("B", "F"));
