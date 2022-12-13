import * as THREE from 'three';
import { Vector3 } from 'three';
import { STORE, DIR} from '../Constant';

class BottomWall extends THREE.Mesh {
    constructor(pos, axis,  dir, room_type, view){

        let  bottomMat = new THREE.MeshStandardMaterial({transparent:true,  color: 0xffffff });
        let shape = new THREE.Shape();
        switch(room_type){
            case 1:
                shape.moveTo( -STORE.Width/2, STORE.Length/2 );
                shape.lineTo(STORE.Width/2, STORE.Length/2);
                shape.lineTo( STORE.Width/2, -STORE.Length/2 );
                shape.lineTo( -STORE.Width/2, -STORE.Length/2);
                shape.lineTo( -STORE.Width/2, STORE.Length/2);
                break;
            case 2:
                shape.moveTo( -STORE.Width/2, STORE.Length/2 );
                shape.lineTo(STORE.Width/2, STORE.Length/2);
                shape.lineTo( STORE.Width/2, -(STORE.Length/2 - STORE.CutOutLength) );
                shape.lineTo( STORE.Width/2 - STORE.CutOutWidth, -(STORE.Length/2 - STORE.CutOutLength) );
                shape.lineTo( STORE.Width/2 - STORE.CutOutWidth, -STORE.Length/2 );
                shape.lineTo( -STORE.Width/2, -STORE.Length/2);
                shape.lineTo( -STORE.Width/2, STORE.Length/2);
                break;
            case 3:
                shape.moveTo( -STORE.Width/2, STORE.Length/2 );
                shape.lineTo(STORE.Width/2, STORE.Length/2);
                shape.lineTo(STORE.Width/2, -STORE.Length/2);
                shape.lineTo(-(STORE.Width/2 - STORE.CutOutWidth), -STORE.Length/2);
                shape.lineTo(-(STORE.Width/2 - STORE.CutOutWidth), -(STORE.Length/2 - STORE.CutOutLength) );
                shape.lineTo( -STORE.Width/2, -(STORE.Length/2 - STORE.CutOutLength));
                shape.lineTo( -STORE.Width/2, STORE.Length/2);
                break;
            case 4:
                shape.moveTo( -STORE.Width/2, STORE.Length/2 );
                shape.lineTo(STORE.Width/2 - STORE.CutOutWidth, STORE.Length/2);
                shape.lineTo(STORE.Width/2 - STORE.CutOutWidth, STORE.Length/2 - STORE.CutOutLength);
                shape.lineTo(STORE.Width/2, STORE.Length/2 - STORE.CutOutLength);
                shape.lineTo(STORE.Width/2, -STORE.Length/2);
                shape.lineTo( -STORE.Width/2, -STORE.Length/2);
                shape.lineTo( -STORE.Width/2, STORE.Length/2);
                break;
            case 5:
                shape.moveTo( -STORE.Width/2, STORE.Length/2 - STORE.CutOutLength );
                shape.lineTo( -(STORE.Width/2 - STORE.CutOutWidth), STORE.Length/2 - STORE.CutOutLength );
                shape.lineTo( -(STORE.Width/2 - STORE.CutOutWidth), STORE.Length/2);
                shape.lineTo(STORE.Width/2, STORE.Length/2);
                shape.lineTo( STORE.Width/2, -STORE.Length/2 );
                shape.lineTo( -STORE.Width/2, -STORE.Length/2);
                shape.lineTo(  -STORE.Width/2, STORE.Length/2 - STORE.CutOutLength);
                break;
            default:
                break;
        }
        const extrudeSettings = {
            steps: 1,
            depth: 0.1,
            bevelEnabled: false,
        };
        const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
        super(geometry, bottomMat);
        this.position.set(pos.x, pos.y, pos.z);
        this.rotation.x = -Math.PI/2;
        this.userData.normalAxis = axis;
        if(dir === DIR.START) {
            this.geometry.translate(0, 0, -0.1);
            this.userData.normalVector = new Vector3(0, 1, 0);
        }
        else if(dir === DIR.END) {
            this.geometry.translate(0, 0, 0);
            this.userData.normalVector = new Vector3(0, -1, 0);
            if(view === 0) this.material.visible = false;
            else this.material.visible = true;
        }
    }
}

export {BottomWall};