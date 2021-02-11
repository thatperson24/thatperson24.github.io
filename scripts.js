function openGame(gameName)
{
    if(gameName==='Shape Fighter')
    {
        document.getElementById('gameSummary').innerHTML = "Shape Fighter is a local multiplayer, turn-based strategy game in which players select a shape, each with a unique move-set, and battle another players shape to determine the victor"
        document.getElementById('gameImage').src= "images/gameIcons/shape_fighter.PNG"
    }
    else if(gameName==='Grape Climber')
    {
        document.getElementById('gameSummary').innerHTML = "Grape Climber is a single player game built to test players reaction speeds. Race to the top of the screen before running out of lives, or else you will meet your demise"
        document.getElementById('gameImage').src= "images/gameIcons/grape_climber.jpg"
    }
    else if(gameName==='Building The Game')
    {
        document.getElementById('gameSummary').innerHTML = "Building The Game is a single player, puzzle/quick time event game in which you must complete floor after floor of puzzles in the time given to escape the building. Every mistake brings you all the way back to the start, so proceed with caution"
        document.getElementById('gameImage').src= "images/gameIcons/building_the_game.jpg"
    }
    else
    {
        document.getElementById('gameSummary').innerHTML = "Spider Fighter is a local multiplayer fighting game, with two unique characters. The goal of the game is to use your move set to bring the opponents health to 0 before they do the same to you"
        document.getElementById('gameImage').src= "images/gameIcons/spider_fighter.png"
    }
}

function switchWindow(gameName)
{
    switch(gameName)
    {
        case 'ShapeFighter':
            window.location='shapeFighter.html';
            break;
        case 'GrapeClimber':
            window.location='grapeClimber.html';
            break;
        case 'BuildingTheGame':
            window.location='buildingTheGame.html';
            break;
        case 'SpiderFighter':
            window.location='spiderFighter.html';
            break;
    }
}