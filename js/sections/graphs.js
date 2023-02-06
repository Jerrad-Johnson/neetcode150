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

function pacificAtlantic(height){
    let possibiltiies = [];
    let paths = {pacific: false, atlantic: false};
    let visited = {};

    for (let v = 0; v < height.length; v++){
        for (let h = 0; h < height[v].length; h++){
            findPaths(v, h);
            if (paths.pacific === true && paths.atlantic === true) possibiltiies.push([v, h]);
            paths = {pacific: false, atlantic: false};
            visited = {};
        }
    }

    return possibiltiies;

    function findPaths(v, h) {
        if (visited[`${v}${h}`] === 1) return;
        visited[`${v}${h}`] = 1;

        let negativeV = v-1,
            positiveV = v+1,
            negativeH = h-1,
            positiveH = h+1,
            thisHeight = height[v][h];

        if (v === 0 || h === 0) paths.pacific = true;
        if ((v === height.length-1) || (h === height[v].length-1)) paths.atlantic = true;
        if (paths.pacific === true && paths.atlantic === true) return;

        if ((negativeV >= 0) && (visited[`${negativeV}${h}`] === undefined) && (height[negativeV][h] <= thisHeight)) findPaths(negativeV, h);
        if ((positiveV <= height.length-1) && (visited[`${positiveV}${h}`] === undefined) && (height[positiveV][h] <= thisHeight)) findPaths(positiveV, h);
        if ((negativeH >= 0) && (visited[`${v}${negativeH}`] === undefined) && (height[v][negativeH] <= thisHeight))  findPaths(v, negativeH);
        if ((positiveH <= height[v].length-1) && (visited[`${v}${positiveH}`] === undefined) && (height[v][positiveH] <= thisHeight)) findPaths(v, positiveH);
    }
}

function orangesRotting(board){
    let rots = []; getInitialRots();
    let changed = false,
        time = -1;

    do {
        changed = addRots();
    } while (changed === true);

    const anyHealthy = findHealthy();

    if (anyHealthy === false) return time;
    return -1;


    function getInitialRots(){
        for (let v = 0; v < board.length; v++) {
            for (let h = 0; h < board[v].length; h++) {
                if (board[v][h] === 2) {
                    rots.push([v, h]);
                }
            }
        }
    }

    function addRots(){
        let change = false;
        let rotsCopy = [...rots];
        time++;

        for (let entry of rotsCopy){
            let v = entry[0],
                h = entry[1],
                negativeV = v-1,
                positiveV = v+1,
                negativeH = h-1,
                positiveH = h+1;

            if ((positiveH <= board[v].length-1) && (board[v][positiveH] === 1)){
                board[v][positiveH] = 2;
                rots.push([v, positiveH]);
                change = true;
            }
            if ((positiveV <= board.length-1) && (board[positiveV][h] === 1)){
                board[positiveV][h] = 2;
                rots.push([positiveV, h]);
                change = true;
            }
            if ((negativeV >= 0) && (board[negativeV][h] === 1)){
                board[negativeV][h] = 2;
                rots.push([negativeV, h]);
                change = true;
            }
            if ((negativeH >= 0) && (board[v][negativeH] === 1)){
                board[v][negativeH] = 2;
                rots.push([v, negativeH]);
                change = true;
            }
        }

        return change;
    }

    function findHealthy(){
        for (let v = 0; v < board.length; v++) {
            for (let h = 0; h < board[v].length; h++) {
                if (board[v][h] === 1) {
                    return true;
                }
            }
        }

        return false;
    }
}




/*cc(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]));*/

//cc(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]))
//cc(pacificAtlantic( [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]));
//cc(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));
