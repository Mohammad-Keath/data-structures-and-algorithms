function DepthFirst(root) {
    const visited = [];
    const queue = [];
    const result = [];

    queue.push(root);
    visited.push(root);
    result.push(root.value)
    const recursion = (node)=>{
        let neighbors = this.getNeighbors(node)
        neighbors.map((neighbor)=>{
            if (!visited.includes(neighbor.vertex)) {
                queue.push(neighbor.vertex);
                visited.push(neighbor.vertex);
                if(!result.includes(neighbor.vertex.value)){
                    result.push(neighbor.vertex.value);
            }
            }
            recursion(queue.shift())
        }) 
    }
    recursion(queue.shift());
    

    return result;
  }