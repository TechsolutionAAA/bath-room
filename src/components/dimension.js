import {Vector3 } from "three";
import * as THREE from 'three';
import {STORE, AXIS} from '../Constant';

const hex = 0x0;
const hexheight = 0.005;
const hexlength = 0.3;
const Delta_dim = 0.3;
let lines = [];

class  Dimensions{

    constructor(node, group, camera, element, room_type, selectedobject){

        this.createPoints(selectedobject, room_type);

        element.innerHTML ="";
        for (var i= 0; i < lines.length; i ++) {
            var line = lines[i];   
            var startX = line.start.x;
            var startZ = line.start.z;
            var endX = line.end.x;
            var endZ = line.end.z;
    
            var from = new THREE.Vector3(startX, 0, startZ);
            var to = new THREE.Vector3(endX, 0, endZ);
    
            var direction = to.clone().sub(from);
            var length = direction.length();
            var arrorGroupHelper = new THREE.Group();
            arrorGroupHelper.add(new THREE.ArrowHelper(direction.normalize(), from, length, hex, hexheight, hexlength));
            arrorGroupHelper.add(new THREE.ArrowHelper(direction.negate(), to, length, hex, hexheight, hexlength));
            node.add(arrorGroupHelper);
            group.push(arrorGroupHelper);
    
            var label = document.createElement('span');
            label.style.position = 'absolute';
            label.style.zIndex = 5;
            var text = document.createElement('div');
            text.innerHTML = (length *1000).toFixed(0) +"mm";
            text.style.backgroundColor = "white";
            text.style.borderRadius = 5 + "px";
            text.style.textAlign = "center";
            text.style.fontSize = 12 + "px";

            if(startX == endX){
                var style_text = ' rotate(-1.57rad)';
                text.style.transform = style_text;
            }
            const container = document.getElementById('canvas-container');
            let interiorCenter = to.clone().add(from).multiplyScalar(0.5);
            let textPos = interiorCenter.project( camera );
            var widthHalf = container.clientWidth/2;
            var heightHalf = window.innerHeight/2;
            var style = 'translate(-50%,-50%) translate(' + ( textPos.x * widthHalf + widthHalf ) + 'px,' + ( - textPos.y * heightHalf + heightHalf ) + 'px)';
            label.style.transform = style;
           
            element.append(label);
            label.append(text);
        }
    }

    createPoints(object, room_type){
        let points = [];
        let start;
        let mid_x, mid_z;
        let min_x, max_x, min_z, max_z;
        lines =[];
        if(object == null){
            min_x = max_x = min_z = max_z = null;
        }else{
            lines =[];
            min_x = this.getSize(object).min_x;
            max_x = this.getSize(object).max_x;
            min_z = this.getSize(object).min_z;
            max_z = this.getSize(object).max_z;

            mid_x = STORE.Width/2 - STORE.CutOutWidth;
            mid_z = STORE.Length/2 - STORE.CutOutLength;
        }

        switch(room_type){
            case 1:
                start = new Vector3(-STORE.Width/2, 0, -STORE.Length/2 - Delta_dim);
                points =   this.getPoints(-STORE.Width/2, min_x, max_x, STORE.Width/2);
                this.createline(start, points, lines, AXIS.X);
                start = new Vector3(-STORE.Width/2, 0, STORE.Length/2 + Delta_dim);
                this.createline(start, points, lines, AXIS.X);
                start = new Vector3(-STORE.Width/2 - Delta_dim, 0, -STORE.Length/2);
                points = this.getPoints(-STORE.Length/2, min_z, max_z, STORE.Length/2);
                this.createline(start, points, lines, AXIS.Z);
                start = new Vector3(STORE.Width/2 + Delta_dim, 0, -STORE.Length/2);
                this.createline(start, points, lines, AXIS.Z);
                break;
            case 2 :
                start = new Vector3(-STORE.Width/2, 0, -STORE.Length/2 - Delta_dim);
                points =   this.getPoints(-STORE.Width/2, min_x, max_x, STORE.Width/2);
                this.createline(start, points, lines, AXIS.X);

                start = new Vector3(-STORE.Width/2, 0, STORE.Length/2 + Delta_dim);
                points =   this.getPoints(-STORE.Width/2, min_x, max_x, mid_x);
                this.createline(start, points, lines, AXIS.X);

                start = new Vector3(mid_x, 0, mid_z + Delta_dim);
                points =   this.getPoints(  mid_x, min_x, max_x, STORE.Width/2);
                this.createline(start, points, lines, AXIS.X);

                start = new Vector3(-STORE.Width/2 - Delta_dim, 0, -STORE.Length/2);
                points = this.getPoints(-STORE.Length/2, min_z, max_z, STORE.Length/2);
                this.createline(start, points, lines, AXIS.Z);

                start = new Vector3(STORE.Width/2 + Delta_dim, 0, -STORE.Length/2);
                points = this.getPoints(-STORE.Length/2, min_z, max_z, mid_z);
                this.createline(start, points, lines, AXIS.Z);

                start = new Vector3(mid_x + Delta_dim, 0, mid_z);
                points = this.getPoints(mid_z, min_z, max_z, STORE.Length/2);
                this.createline(start, points, lines, AXIS.Z);

                break;
            case 3:
                points =   this.getPoints(-STORE.Width/2, min_x, max_x, STORE.Width/2);
                start = new Vector3(-STORE.Width/2, 0, -STORE.Length/2 - Delta_dim);
                this.createline(start, points, lines, AXIS.X);
    
                points =   this.getPoints(-mid_x, min_x, max_x, STORE.Width/2);
                start = new Vector3( -mid_x, 0, STORE.Length/2 + Delta_dim);
                this.createline(start, points, lines, AXIS.X);
    
                points =   this.getPoints(-STORE.Width/2, min_x, max_x, -mid_x);
                start = new Vector3( -STORE.Width/2, 0, mid_z + Delta_dim);
                this.createline(start, points, lines, AXIS.X);

                points = this.getPoints(-STORE.Length/2, min_z, max_z, STORE.Length/2);
                start = new Vector3( STORE.Width/2 + Delta_dim, 0, -STORE.Length/2);
                this.createline(start, points, lines, AXIS.Z);

                start = new Vector3 ( - STORE.Width/2 - Delta_dim, 0, -STORE.Length/2);
                points = this.getPoints(-STORE.Length/2, min_z, max_z, mid_z);
                this.createline(start, points, lines, AXIS.Z);

                start = new Vector3 ( - mid_x - Delta_dim, 0, mid_z);
                points = this.getPoints(mid_z, min_z, max_z, STORE.Length/2);
                this.createline(start, points, lines, AXIS.Z);

                break;
            case 4:
                points =   this.getPoints(-STORE.Width/2, min_x, max_x, STORE.Width/2);
                start = new Vector3(-STORE.Width/2, 0, STORE.Length/2 + Delta_dim);
                this.createline(start, points, lines, AXIS.X);

                start = new Vector3(-STORE.Width/2, 0, -STORE.Length/2 - Delta_dim);
                points = this.getPoints(-STORE.Width/2, min_x, max_x, mid_x);
                this.createline(start, points, lines, AXIS.X);

                start = new Vector3(mid_x, 0, mid_z - Delta_dim);
                points = this.getPoints(mid_x,  min_x, max_x, STORE.Width/2);
                this.createline(start, points, lines, AXIS.X);

                start = new Vector3(-STORE.Width/2 - Delta_dim, 0, -STORE.Length/2);
                points = this.getPoints(-STORE.Length/2, min_z, max_z, STORE.Length/2);
                this.createline(start, points, lines, AXIS.Z);

                start = new Vector3(STORE.Width/2 - STORE.CutOutWidth + Delta_dim, 0, -STORE.Length/2);
                points = this.getPoints(-STORE.Length/2, min_z, max_z, -mid_z);
                this.createline(start, points, lines, AXIS.Z);

                start = new Vector3(STORE.Width/2  + Delta_dim, 0,-mid_z);
                points = this.getPoints(-mid_z, min_z, max_z, STORE.Length/2);
                this.createline(start, points, lines, AXIS.Z);

                 break;
            case 5:
                points =   this.getPoints(-STORE.Width/2, min_x, max_x, STORE.Width/2);
                start = new Vector3(-STORE.Width/2, 0, STORE.Length/2 + Delta_dim);
                this.createline(start, points, lines, AXIS.X);

                points =   this.getPoints(-STORE.Width/2, min_x, max_x, -mid_x);
                start = new Vector3(-STORE.Width/2, 0, -mid_z - Delta_dim);
                this.createline(start, points, lines, AXIS.X);

                points =   this.getPoints(-mid_x, min_x, max_x,STORE.Width/2);
                start = new Vector3(-mid_x, 0, -STORE.Length/2 - Delta_dim);
                this.createline(start, points, lines, AXIS.X);

                points = this.getPoints(-STORE.Length/2, min_z, max_z, STORE.Length/2);
                start = new Vector3(STORE.Width/2 + Delta_dim, 0, -STORE.Length/2);
                this.createline(start, points, lines, AXIS.Z);

                points = this.getPoints(-mid_z, min_z, max_z, STORE.Length/2);
                start = new Vector3(-STORE.Width/2 - Delta_dim, 0, -mid_z);
                this.createline(start, points, lines, AXIS.Z);

                points = this.getPoints(-STORE.Length/2, min_z, max_z, -mid_z);
                start = new Vector3(-mid_x - Delta_dim, 0, -STORE.Length/2);
                this.createline(start, points, lines, AXIS.Z);
                break;
            default:
                break;
        }

    }

    getPoints(start, min, max, end){
        let points =[];
        if(min == null && max== null){
            points = [start, end];
        }
        else{
            if(max > end && min < end)
                points = [start, min, end];
            else if(min > end && max > end)
                points = [start, end];
            else if(min < start && max  > start)
                points = [start, max, end];
            else if(min < start && max < start)
                points = [start, end];
            else
                points = [start, min, max, end];
        }

        return points;
    }

    createline(start, points, lines, dir){
        for(let i = 1  ; i < points.length ; i++){
            let v = new Vector3();
            let length = points[i] - points[i - 1];
            let delta;
            if(dir === AXIS.X)
                 delta = new Vector3(length, 0, 0);
            else if(dir === AXIS.Z)
                 delta = new Vector3(0, 0, length);
            lines.push({start: start, end: v.addVectors(start, delta)});
            start = v;
        }  
    }

    getSize(object){
        let measure = new THREE.Vector3();
        var boundingBox = new THREE.Box3().setFromObject(object);
        var size = boundingBox.getSize(measure); // Returns Vector3
        let width = size.x;
        let height = size.y;
        let depth = size.z;
        let min_x = object.position.x - width/2;
        let max_x = object.position.x + width/2;
        let min_z = object.position.z - depth/2;
        let max_z = object.position.z + depth/2;
        return {min_x: min_x, max_x : max_x, min_z : min_z, max_z : max_z};

    }

}

export  {Dimensions}