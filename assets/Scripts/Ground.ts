import { _decorator, Component, Node, UITransform, Vec2, Vec3, director, Canvas } from 'cc';
const { ccclass, property } = _decorator;
import { GameCtrl } from './GameCtrl';

@ccclass('Ground')
export class Ground extends Component {
    
    @property({
        type: Node,
        tooltip: 'Ground 1 is here'
    })
    public ground1 : Node;

    @property({
        type: Node,
        tooltip: 'Ground 2 is here'
    })
    public ground2 : Node;

    @property({
        type: Node,
        tooltip: 'Ground 3 is here'
    })
    public ground3 : Node;


    public groundWidth1: number;
    public groundWidth2: number;
    public groundWidth3: number;

    public tempStartLocation1 = new Vec3;
    public tempStartLocation2 = new Vec3;
    public tempStartLocation3 = new Vec3;

    public gameCtrlSpeed = new GameCtrl;
    public gameSpeed:number;

    onLoad(){
        this.startUp();
    }

    startUp(){
        this.groundWidth1 = this.ground1.getComponent(UITransform).width;
        this.groundWidth2 = this.ground2.getComponent(UITransform).width;
        this.groundWidth3 = this.ground3.getComponent(UITransform).width;

        this.tempStartLocation1.x = 0;
        this.tempStartLocation2.x = this.groundWidth1;
        this.tempStartLocation3.x = this.groundWidth1 + this.groundWidth2;

        this.ground1.setPosition(this.tempStartLocation1);
        this.ground2.setPosition(this.tempStartLocation2);
        this.ground3.setPosition(this.tempStartLocation3);
    }

    update(deltaTime: number) {

        this.gameSpeed = this.gameCtrlSpeed.speed;

        this.tempStartLocation1 = this.ground1.position;
        this.tempStartLocation2 = this.ground2.position;
        this.tempStartLocation3 = this.ground3.position;

        //get the speed and subtract from x
        this.tempStartLocation1.x -= this.gameSpeed * deltaTime;
        this.tempStartLocation2.x -= this.gameSpeed * deltaTime;
        this.tempStartLocation3.x -= this.gameSpeed * deltaTime;

        const scene = director.getScene();
        const canvas = scene.getComponentInChildren(Canvas);

        if(this.tempStartLocation1.x <= (0 - this.groundWidth1)){
            this.tempStartLocation1.x = canvas.getComponent(UITransform).width;
        }

        if(this.tempStartLocation2.x <= (0 - this.groundWidth2)){
            this.tempStartLocation2.x = canvas.getComponent(UITransform).width;
        }

        if(this.tempStartLocation3.x <= (0 - this.groundWidth3)){
            this.tempStartLocation3.x = canvas.getComponent(UITransform).width;
        }

        this.ground1.setPosition(this.tempStartLocation1);
        this.ground2.setPosition(this.tempStartLocation2);
        this.ground3.setPosition(this.tempStartLocation3);
    }
}


