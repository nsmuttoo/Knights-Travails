
console.log(knightMoves(4,3,3,3))

function makeNode(x,y,parent){
    this.x = x
    this.y=y
    this.parent = parent

    function printNode(){
        return ("[" + this.x + ", " + this.y + "]")
    }

    return{x,y,parent,printNode}

}

function possibleMoves(node){

let list = []

if(node.x+2 >=0 && node.x+2 <=7){
    if(node.y+1>=0 && node.y+1<=7){
        list.push(makeNode(node.x+2,node.y+1,node))
    }
    if(node.y-1>=0 && node.y-1<=7){
        list.push(makeNode(node.x+2,node.y-1,node))
    }
}

if(node.x-2 >=0 && node.x-2 <=7){
    if(node.y+1>=0 && node.y+1<=7){
        list.push(makeNode(node.x-2,node.y+1,node))
    }
    if(node.y-1>=0 && node.y-1<=7){
        list.push(makeNode(node.x-2,node.y-1,node))
    }
}

if(node.y+2 >=0 && node.y+2 <=7){
    if(node.x+1>=0 && node.x+1<=7){
        list.push(makeNode(node.x+1,node.y+2,node))
    }
    if(node.x-1>=0 && node.x-1<=7){
        list.push(makeNode(node.x-1,node.y+2,node))
    }
}

if(node.y-2 >=0 && node.y-2 <=7){
    if(node.x+1>=0 && node.x+1<=7){
        list.push(makeNode(node.x+1,node.y-2,node))
    }
    if(node.x-1>=0 && node.x-1<=7){
        list.push(makeNode(node.x-1,node.y-2,node))
    }
}

return list

}

function knightMoves(startX,startY,endX,endY){
let root = makeNode(startX,startY)
let queue = []
let path = []
let temp = root

queue.push(root)

for(let i = 0; i<queue.length; i++){

    if(queue[i].x === endX && queue[i].y === endY){
        temp = queue[i]
        break;
    }
    let store = possibleMoves(queue[i])

    for(let j=0; j<store.length; j++){
        queue.push(store[j])
    }



}

path.push(temp.printNode())

while(temp.parent){
    temp = temp.parent
    path.push(temp.printNode())
}

path.reverse()

return path
}



