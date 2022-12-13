import { observable } from "mobx";

export const TILE_SIZE = 0.5;

export const AXIS = {
    X: 0,
    Y: 1,
    Z: 2
}

export const DIR ={
    START : 0,
    END   : 1,
}

export const DELTA_DIS = 1.0;

export const WALL_MAP = [
    {
        name: 'tile1',
        diffuse: 'tiled1.jpg',
        specular: 'tiles1.png',
        normal: 'tilen1.png'
    },
    {
        name: 'tile2',
        diffuse: 'tiled2.png',
        specular: 'tiles1.png',
        normal: 'tilen1.png'
    },
    {
        name: 'tile1',
        diffuse: 'tiled3.png',
        specular: 'tiles1.png',
        normal: 'tilen1.png'
    }
]

export const STORE = observable({
    fetchedObjectData: [],
    width: 5000,
    length: 4000,
    cwidth: 2000,
    clength: 2000,
    height: 2400,
    thickness: .1,
    type: 1,
    walls: [],
    view: 0,
    scale : 1,
    change : 0,
    material : 1,
    changeElement:'',

    get FetchedObjectData() {
        return this.fetchedObjectData;
    },

    get Material() {
        return this.material;
    },

    get CutOutLength() {
        return this.clength * .001;
    },

    get CutOutWidth() {
        return this.cwidth * .001;
    },

    get Width() {
        return this.width * .001;
    },

    get Height() {
        return this.height * .001;
    },

    get Length() {
        return this.length * .001;
    },
    get Scale() {

        return this.scale;
    },

    get Change() {
        return this.change;
    },


});

export const DOOR = 'Door';

export const wallItems = {
    door: {
        type: DOOR,
        width: .91,
        height: 2.05,
        depth: .15
    },
    shower: {
        type: "SHOWER",
        width: .91,
        height: 2.05,
        depth: .15
    },
    bathtub : {
        type: "BATHTUB",
        width: 1.8,
        height: 0.8,
        depth: 1.0
    },
    bathtub1 : {
        type: "BATH",
        width: 1.8,
        height: 0.8,
        depth: 1.0
    },
    bathtub2 : {
        type: "BATH1",
        width: 1.8,
        height: 0.8,
        depth: 1.0
    },
    tapware : {
        type: "TAPWARE",
        width: 1.8,
        height: 0.8,
        depth: 1.0
    }
}


const walls = [];


for (let i = 0; i < 6; i++) {
    const wall = { pos: { x: 0, y: 0, z: 0, norvec: null}, rot:{ x: 0, y: 0, z: 0 }, items: [] }
    if (i === 0) {
        wall.items.push({ ...Object.assign({}, wallItems.door), id: 0, position: { x: 0, y: 0, z: 0, w: 0 } });

    }
    walls.push(wall);
}