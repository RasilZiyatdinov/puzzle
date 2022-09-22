import {Node} from "./node.js"

function compare( a, b ) {
    if ( a.get_value() < b.get_value() ){
      return -1;
    }
    if ( a.get_value() > b.get_value() ){
      return 1;
    }
    return 0;
}



export class Tree{

    constructor() {
        this.root = null;
        this.height = 0
        this.nodes = []
        this.solution_path = []
        this.result_json = {}
    }

    root(){
        return this.root
    }

    insert(node, parent){
        if (parent == null){
            if (this.root == null){
                this.root = node
                //this.result_json.name = matrix_to_string(node)
            }
        }
        else{
            parent.add_child(node)

            //this.result_json.children.push(matrix_to_string(node))
        }
    }

    solve(){
        if (this.root == null)
            return
        var iterations = 0
        this.nodes.push(this.root)
        this.nodes.sort(compare)
        var cur_node = this.nodes[0];
        this.nodes.splice(0, 1)

        while (cur_node.different !== 0){
            var children = cur_node.matrix.generate_children()
            //var new_node;
            ///////////////////////////
            // eslint-disable-next-line no-loop-func
            
            // eslint-disable-next-line no-loop-func
            children.forEach(child => {
                var new_node = new Node(child, cur_node.target, cur_node)
                this.insert(new_node, cur_node)
                this.nodes.push(new_node)
                this.nodes.sort(compare)
                
            });
            
            cur_node = this.nodes[0]
            //console.log(this.nodes.length)
            this.nodes.splice(0, 1)
            iterations += 1
        }
        
        console.log('iter count', iterations)
        console.log('node depth', cur_node.depth)

        this.solution_path = this.find_solution_path(cur_node)

        return cur_node
    }

    find_solution_path(solution_node){
        var path = []
        path.push(solution_node.uuid)
        solution_node.isPath = true
        var parent = solution_node.parent
        while (parent != null){
            path.push(parent.uuid)
            parent.isPath = true
            parent = parent.parent
        }
        
        return path.reverse();
    }
}
