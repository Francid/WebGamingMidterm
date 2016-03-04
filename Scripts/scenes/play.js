var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
            this._randomRoll1 = 0;
            this._randomRoll2 = 0;
            this._dice1 = 0;
            this._dice2 = 0;
            this._dice3 = 0;
            this._dice4 = 0;
            this._dice5 = 0;
            this._dice6 = 0;
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            this._dicesLabel1 = new objects.Label("0", "12px Consolas", "#000000", 245, 270);
            this.addChild(this._dicesLabel1);
            this._dicesLabel2 = new objects.Label("0", "12px Consolas", "#000000", 340, 270);
            this.addChild(this._dicesLabel2);
            // Add Roll button
            this._rollButton = new objects.Button("Roll", 300, 320);
            this.addChild(this._rollButton);
            //Set the Roll button Handuler 
            this._rollButton.on("click", this._rollButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
            this._initializeBitmapArray();
            this._addChildren();
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        // private _addChildren():void{
        //     this._dicesLabel1 = new objects.Label(
        //         "0", "12px Consolas",
        //         "#000000",
        //         245, 270);
        //     this.addChild(this._dicesLabel1);
        //     this._dicesLabel2 = new objects.Label(
        //         "0", "12px Consolas",
        //         "#000000",
        //         340, 270);
        //     this.addChild(this._dicesLabel2);
        //     // Add Roll button
        //     this._rollButton = new objects.Button("Roll", 300, 320);
        //     this.addChild(this._rollButton);
        //     //Set the Roll button Handuler 
        //     this._rollButton.on("click", this._rollButtonClick, this);
        //     // add this scene to the global stage container
        //     stage.addChild(this);
        //     this._initializeBitmapArray();
        // }
        // Private Variables
        Play.prototype._rollDices = function () {
            var betLine = [" ", " "];
            var outCome = [0, 0];
            for (var spin = 0; spin < 2; spin++) {
                outCome[spin] = Math.floor((Math.random() * 6) + 1);
                this._randomRoll1 = outCome[0];
                this._randomRoll2 = outCome[1];
                this._dicesLabel1.text = this._randomRoll1.toString();
                this._dicesLabel2.text = this._randomRoll2.toString();
                switch (outCome[spin]) {
                    case outCome[spin] = 1:
                        betLine[spin] = "Dice1";
                        break;
                    case outCome[spin] = 2:
                        betLine[spin] = "Dice2";
                        break;
                    case outCome[spin] = 3:
                        betLine[spin] = "Dice3";
                        break;
                    case outCome[spin] = 4:
                        betLine[spin] = "Dice4";
                        break;
                    case outCome[spin] = 5:
                        betLine[spin] = "Dice5";
                        break;
                    case outCome[spin] = 6:
                        betLine[spin] = "Dice6";
                        break;
                }
            }
            return betLine;
        };
        // This method creates the Bitmap Array
        Play.prototype._initializeBitmapArray = function () {
            var bitmap = this._rollDices();
            this._diceImages = new Array();
            for (var dice = 0; dice < 2; dice++) {
                this._diceImages[dice] = new createjs.Bitmap(assets.getResult(bitmap[dice]));
                this._diceImages[dice].x = 240 + (dice * 80);
                this._diceImages[dice].y = 200;
                this.addChild(this._diceImages[dice]);
            }
        };
        Play.prototype._resetDices = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // Roll Button Click Handuler
        Play.prototype._rollButtonClick = function (event) {
            console.log("Roll Button click");
            this._initializeBitmapArray();
            //stage.removeAllChildren();
            //this._addChildren();
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map