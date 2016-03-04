// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: objects.Label;
        private _rollButton: objects.Button;
        private _diceImages: createjs.Bitmap[];
        private _dicesLabel1: objects.Label;
        private _dicesLabel2: objects.Label;
        private _randomRoll1: number = 0;
        private _randomRoll2: number = 0;

        private _dice1 = 0;
        private _dice2 = 0;
        private _dice3 = 0;
        private _dice4 = 0;
        private _dice5 = 0;
        private _dice6 = 0;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {


            this._dicesLabel1 = new objects.Label(
                "0", "12px Consolas",
                "#000000",
                245, 270);
            this.addChild(this._dicesLabel1);

            this._dicesLabel2 = new objects.Label(
                "0", "12px Consolas",
                "#000000",
                340, 270);
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
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
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
        private _rollDices(): string[] {
            var betLine = [" ", " "];
            var outCome = [0, 0];

            for (var spin = 0; spin < 2; spin++) {
                outCome[spin] = Math.floor((Math.random() * 6)+ 1);

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
        }
        
        // This method creates the Bitmap Array
        private _initializeBitmapArray(): void {
            var bitmap: string[] = this._rollDices();

            this._diceImages = new Array<createjs.Bitmap>();

            for (var dice: number = 0; dice < 2; dice++) {
                this._diceImages[dice] = new createjs.Bitmap(assets.getResult(bitmap[dice]));
                this._diceImages[dice].x = 240 + (dice * 80);
                this._diceImages[dice].y = 200;
                this.addChild(this._diceImages[dice]);

            }
        }

        private _resetDices(): void {
            
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // Roll Button Click Handuler
        private _rollButtonClick(event: createjs.MouseEvent): void {
            console.log("Roll Button click");
            this._initializeBitmapArray();
            //stage.removeAllChildren();
            //this._addChildren();
        }

    }
}