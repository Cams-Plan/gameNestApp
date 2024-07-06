
async function returnFullPlayerBoard(req, res){
    const data = req.body;
    try {
        // get all data from the minesweeper scorers table
    } catch (error) {
        
    }
   
}

async function uploadScoreById(req, res){
    const playerId = req.params
    const data = req.body
    try {
        // upload the player's score using the playerId as the primary key
    } catch (error) {
        
    }
}

async function getPlayerScoresById(req, res){
    const playerId = req.params
    try {
        // get the player's scores using the playerId as the primary key
    } catch (error) {
        
    }
}

async function deletePlayerScores(req, res){
    const playerId = req.params
    const data = req.body

    try {
        // use all score ids provided in the body to remove from the db - can filter by user first if playerId is in params
    } catch (error) {
        
    }
}

module.exports = {returnFullPlayerBoard, uploadScoreById, getPlayerScoresById, deletePlayerScores}