function numIslands(grid){
    let map = {};
    let islands = 0;
    let limiter = 0;

    for (let v = 0; v < grid.length; v++){
        for (let h = 0; h < grid[v].length; h++){
            if ((grid[v][h] === "1") && (map[`${v}${h}`] === undefined)){
                islands++;
                map[`${v}${h}`] = 1;
                markVisited(v, h);
            }
        }
    }
    function markVisited(v, h){
        limiter++; if (limiter === 200) return;
        let negativeV = v--,
            positiveV = v++,
            negativeH = h--,
            positiveH = h++;


        if ((negativeV >= 0) && (map[`${negativeV}${h}`] !== undefined) && (grid[negativeV][h] === "1")){
            map[`${negativeV}${h}`] = 1;
            markVisited(negativeV, h);
        }

    }
}


cc(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]));
