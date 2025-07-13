import { _decorator, Component, Node, CCInteger } from 'cc';
import { Ground } from './Ground';
const { ccclass, property } = _decorator;

@ccclass('GameCtrl')
export class GameCtrl extends Component {
    
    @property({
        type:Ground,
        tooltip: 'this is ground'
    })
    public ground: Ground

    @property({
        type: CCInteger
    })
    public speed: number = 300

    @property({
        type: CCInteger
    })
    public pipeSpeed: number = 200;

    onLoad(){

    }

    initListener(){

    }

    startGame(){
        
    }

}


