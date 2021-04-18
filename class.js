class Grass {

    constructor(x, y) {

        this.x = x
        this.y = y

        this.multiplay = 0

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    chooseCell(num) {

        let result = []

        for (let index in this.directions) {
            let x = this.directions[index][0]
            let y = this.directions[index][1]

            if (x >= 0 && x < matrix.length && y >= 0 && y < matrix.length)
                if (matrix[y][x] == num) {
                    result.push(this.directions[index])
                }

        }

        return result
    }

    mul() {
        this.multiplay++
        if (this.multiplay >= 30) {
            let emptyCells = this.chooseCell(0)
            let randomCell = random(emptyCells)


            if (emptyCells.length != 0) {
                let x = randomCell[0]
                let y = randomCell[1]

                matrix[y][x] = 1
                let gr = new Grass(x, y)
                grassArr.push(gr)
            }

            this.multiplay = 0
        }



    }


}