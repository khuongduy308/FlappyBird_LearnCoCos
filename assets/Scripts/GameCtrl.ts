import { _decorator, Component, Node, CCInteger, input, Input, EventKeyboard, KeyCode, director } from 'cc';
import { Ground } from './Ground';
import { Results } from './Results';
import { Bird } from './Bird';
const { ccclass, property } = _decorator;

@ccclass('GameCtrl')
export class GameCtrl extends Component {
    
    @property({
        type:Ground,
        tooltip: 'this is ground'
    })
    public ground: Ground

    @property({
        type: Results,
        tooltip: 'results go here'
    })
    public result: Results;

    @property({
        type: Bird
    })
    public bird: Bird;

    @property({
        type: CCInteger
    })
    public speed: number = 300

    @property({
        type: CCInteger
    })
    public pipeSpeed: number = 200;

    onLoad(){
        this.InitListener();

        this.result.resetScore();

        director.pause();
    }

    InitListener(){
        input.on(Input.EventType.KEY_DOWN, this.OnKeyDown, this);

        this.node.on(Node.EventType.TOUCH_START, () => {
            this.bird.fly();
        })
    }

    OnKeyDown(event: EventKeyboard){
        switch(event.keyCode){
            case KeyCode.KEY_A:
                this.gameOver();
                break;
            case KeyCode.KEY_P:
                this.result.addScore();
                break;
            case KeyCode.KEY_Q:
                this.resetGame();
                this.bird.resetBird();
        }
    }

    startGame(){
        this.result.hideResults();

        director.resume();
    }

    gameOver(){
        this.result.showResults();
        director.pause();
    }

    resetGame(){
        this.result.resetScore();

        this.startGame();
    }

}


