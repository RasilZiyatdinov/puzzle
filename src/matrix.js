
export class Matrix {
    constructor(array, last_empty_position = null) {
        this.array = array
        this.last_empty_position = last_empty_position
    }

    get_empty_position(){
        for (var i = 0; i < this.array.length; i++){
            if (this.array[i].indexOf('-') !== -1)
                return [i, this.array[i].indexOf('-')]
        }
    }

    generate_children(){
        var children = []
        var empty_pos = this.get_empty_position()
        var temp
            if ((empty_pos[0] > 0) && (JSON.stringify([empty_pos[0] - 1, empty_pos[1]]) !== JSON.stringify(this.last_empty_position))){
                temp = structuredClone(this.array)
                temp[empty_pos[0]][empty_pos[1]] = temp[empty_pos[0] - 1][empty_pos[1]]
                temp[empty_pos[0] - 1][empty_pos[1]] = '-'
                children.push(new Matrix(temp, empty_pos))
            }

            if ((empty_pos[0] < this.array.length - 1) && (JSON.stringify([empty_pos[0] + 1, empty_pos[1]]) !== JSON.stringify(this.last_empty_position))){
                temp = structuredClone(this.array)
                temp[empty_pos[0]][empty_pos[1]] = temp[empty_pos[0] + 1][empty_pos[1]]
                temp[empty_pos[0] + 1][empty_pos[1]] = '-'
                children.push(new Matrix(temp, empty_pos))
            }

            if ((empty_pos[1] > 0) && (JSON.stringify([empty_pos[0], empty_pos[1] - 1]) !== JSON.stringify(this.last_empty_position))){
                temp = structuredClone(this.array)
                temp[empty_pos[0]][empty_pos[1]] = temp[empty_pos[0]][empty_pos[1] - 1]
                temp[empty_pos[0]][empty_pos[1] - 1] = '-'
                children.push(new Matrix(temp, empty_pos))
            }

            if ((empty_pos[1] < this.array[0].length - 1) && (JSON.stringify([empty_pos[0], empty_pos[1] + 1]) !== JSON.stringify(this.last_empty_position))){
                temp = structuredClone(this.array)
                temp[empty_pos[0]][empty_pos[1]] = temp[empty_pos[0]][empty_pos[1] + 1]
                temp[empty_pos[0]][empty_pos[1] + 1] = '-'
                children.push(new Matrix(temp, empty_pos))
            }
        return children
    }

    get_different(target){
        var different = 0
        for (var i = 0; i < this.array.length; i++){
            for (var j = 0; j < this.array[i].length; j++){
                if (this.array[i][j] !== target.array[i][j] && this.array[i][j] !== '-'){ 
                    different += 1 
                }
            }
        }
        return different
    }
}