//import { uuid } from 'uuidv4'

function matr_to_string(arr,i){
    var str = ""
    for (var j = 0; j < arr[i].length; j++){
        str += arr[i][j] + ' '
    }
    
    return str   
}
export class Node {
    constructor(matrix, target,  parent=null, children=null) {
      //this.uuid = 5
      this.matrix = matrix;
      //this.name = matrix_to_string(this.matrix.array)
      this.name1 = matr_to_string(this.matrix.array, 0)
      this.name2 = matr_to_string(this.matrix.array, 1)
      this.name3 = matr_to_string(this.matrix.array, 2)
      this.isPath = false
      this.target = target;
      this.parent = parent;
      this.depth = this.get_depth()
      this.different = matrix.get_different(this.target)
      this.value = this.get_value()
      this.children = []
      if (children != null){
        children.forEach(element => this.add_child(element));      
      }
    }

    to_string(){
        return JSON.stringify(this, ['name1', 'name2', 'name3', 'isPath', 'children'], 4)    
    }

    is_root() {
        return this.parent == null;
    }

    is_leaf(){
        if (this.children.length === 0)
            return true;
        else
            return false;
    }

    get_depth(){
        if (this.is_root())
            return 0
        else
            return 1 + this.parent.depth
    }

    get_value(){
        return this.depth + 4 * this.different
    }

    add_child(node){
        node.parent = this
        console.assert(node instanceof Node);
        this.children.push(node)
    }
  }