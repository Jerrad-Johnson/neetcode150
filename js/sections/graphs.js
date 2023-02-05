function numIslands(grid){
    let map = {};
    let islands = 0;

    for (let v = 0; v < grid.length; v++){
        for (let h = 0; h < grid[v].length; h++){
            if ((grid[v][h] === "1") && (map[`${v}${h}`] === undefined)){
                islands++;
                findAdjacent(v, h);
            }
        }
    }

    return islands;

    function findAdjacent(v, h){
        if (map[`${v}${h}`] === 1) return;
        map[`${v}${h}`] = 1;

        let negativeV = v-1,
            positiveV = v+1,
            negativeH = h-1,
            positiveH = h+1;

        if ((negativeV >= 0) && (map[`${negativeV}${h}`] === undefined) && (grid[negativeV][h] === "1")) findAdjacent(negativeV, h);
        if ((positiveV <= grid.length-1) && (map[`${positiveV}${h}`] === undefined) && (grid[positiveV][h] === "1")) findAdjacent(positiveV, h);
        if ((negativeH <= 0) && (map[`${v}${negativeH}`] === undefined) && (grid[v][negativeH] === "1"))  findAdjacent(v, negativeH);
        if ((positiveH <= grid[v].length-1) && (map[`${v}${positiveH}`] === undefined) && (grid[v][positiveH] === "1")) findAdjacent(v, positiveH);
    }
}

function maxAreaOfIsland(grid){
    let map = {},
        islands = 0,
        thisIslandSize = 0,
        largestIsland = 0;

    for (let v = 0; v < grid.length; v++){
        for (let h = 0; h < grid[v].length; h++){
            if ((grid[v][h] === 1) && (map[`${v}${h}`] === undefined)){
                islands++;
                findAdjacent(v, h);
                if (thisIslandSize > largestIsland) largestIsland = thisIslandSize;
                thisIslandSize = 0;
            }
        }
    }

    return largestIsland;

    function findAdjacent(v, h){
        if (map[`${v}${h}`] === 1) return;
        map[`${v}${h}`] = 1;
        thisIslandSize++;

        let negativeV = v-1,
            positiveV = v+1,
            negativeH = h-1,
            positiveH = h+1;

        if ((negativeV >= 0) && (map[`${negativeV}${h}`] === undefined) && (grid[negativeV][h] === 1)) findAdjacent(negativeV, h);
        if ((positiveV <= grid.length-1) && (map[`${positiveV}${h}`] === undefined) && (grid[positiveV][h] === 1)) findAdjacent(positiveV, h);
        if ((negativeH <= 0) && (map[`${v}${negativeH}`] === undefined) && (grid[v][negativeH] === 1))  findAdjacent(v, negativeH);
        if ((positiveH <= grid[v].length-1) && (map[`${v}${positiveH}`] === undefined) && (grid[v][positiveH] === 1)) findAdjacent(v, positiveH);
    }
}


cc(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]));


cc(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]))