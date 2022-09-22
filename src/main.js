import {Node} from "./node.js"
import {Tree} from "./tree.js"
import {Matrix} from "./matrix.js"


// var start = new Matrix([
//     ['2', '4', '3'],
//     ['1', '8', '5'],
//     ['7', '-', '6']
// ])

// var target = new Matrix([   
//     ['1', '2', '3'],
//     ['4', '5', '6'],
//     ['7', '8', '-']
// ])

var start = new Matrix([
    ['2', '1', '6'],
    ['4', '-', '8'],
    ['7', '5', '3']
])

var target = new Matrix([   
    ['1', '2', '3'],
    ['8', '-', '4'],
    ['7', '6', '5']
])

export default function Mains(){
    var root = new Node(start, target)

    var tree = new Tree()
    tree.insert(root, null)

    tree.solve()

    var t = tree.root.to_string()
    return t;
}


