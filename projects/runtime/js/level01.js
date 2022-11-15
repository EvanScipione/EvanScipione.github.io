var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 300, "y":  300 },
                { "type": "sawblade", "x": 500, "y": 300 },
                { "type": "sawblade", "x": 650, "y": 300 },
                { "type": "sawblade", "x": 800, "y": 300 },
                { "type": "sawblade", "x": 1000, "y": 180 },
                { "type": "sawblade", "x": 1200, "y": 180 },
                { "type": "sawblade", "x": 1300, "y": 300 },
                { "type": "sawblade", "x": 1510, "y": 180 },
                { "type": "sawblade", "x": 1800, "y": 180 },
                
                { "type": "familyGuy", "x": 2000, "y": 300 },
                { "type": "familyGuy", "x": 2600, "y": 300 },
                { "type": "familyGuy", "x": 2900, "y": 180 },
                { "type": "familyGuy", "x": 3200, "y": 180 },
                { "type": "familyGuy", "x": 3600, "y": 300 },
                
                { "type": "enemy", "x": 400, "y": groundY - 50 },
                { "type": "enemy", "x": 800, "y": groundY - 50 },
                { "type": "enemy", "x": 1200, "y": groundY - 50 },
                { "type": "enemy", "x": 1600, "y": groundY - 50 },
                { "type": "enemy", "x": 2000, "y": groundY - 50 },
                { "type": "enemy", "x": 2400, "y": groundY - 50 },

                { "type": "reward", "x": 1000, "y": groundY - 50 },
                { "type": "reward", "x": 1500, "y": groundY - 50 },
                { "type": "reward", "x": 2000, "y": groundY - 50 },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        
function createSawBlade(x, y){
    var hitZoneSize = 25;
    var damageFromObstacle = 20;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/sawblade.png");
    obstacleImage.scaleX = 1;
    obstacleImage.scaleY = 1;
    obstacleImage.x = -25;
    obstacleImage.y = -25;
    sawBladeHitZone.addChild(obstacleImage);
}
        
        function createHappiness(x, y){
            var hitZoneSize = 30;
            var damageFromObstacle = 20;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x ;
        sawBladeHitZone.y = y;
        game.addGameItem(sawBladeHitZone);
        var obstacleImage = draw.bitmap("data:image/jpeg;base64,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");
        obstacleImage.scaleX = 0.2;
        obstacleImage.scaleY = 0.2;
        obstacleImage.x = -30;
        obstacleImage.y = -20;
        sawBladeHitZone.addChild(obstacleImage);
        }

        function createEnemy(x, y) {
            var enemy = game.createGameItem("enemy", 25);
        var redSquare = draw.rect(50, 50, "blue");
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = -5;
        enemy.rotationalVelocity = 1500;
        enemy.onPlayerCollision = function () {game.changeIntegrity(-30)};
        enemy.onProjectileCollision = function () {
            game.increaseScore(5000);
            enemy.fadeOut();
        };
    }

        function createReward(x, y) {
            var reward = game.createGameItem("reward", 25);
        var redSquare = draw.rect(50, 50, "yellow");
        redSquare.x = -25;
        redSquare.y = -25;
        reward.addChild(redSquare);
        reward.x = x;
        reward.y = y;
        game.addGameItem(reward);
        reward.velocityX = -5;
        reward.rotationalVelocity = 1500;
        reward.onPlayerCollision = function () {game.changeIntegrity(-30)};
        reward.onProjectileCollision = function () {
            game.increaseScore(5000);
            reward.fadeOut();
        };
    }
      
        for (var i = 0; i < levelData.gameItems.length; i++){
            if(levelData.gameItems[i].type === "sawblade"){
                createSawBlade(levelData.gameItems[i].x, levelData.gameItems[i].y)}
            else if (levelData.gameItems[i].type === "familyGuy"){
                createHappiness(levelData.gameItems[i].x, levelData.gameItems[i].y)}   
            else if (levelData.gameItems[i].type === "enemy"){
                createEnemy(levelData.gameItems[i].x, levelData.gameItems[i].y)}  
            else if (levelData.gameItems[i].type === "reward"){
                createReward(levelData.gameItems[i].x, levelData.gameItems[i].y)}  
            }
            
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
