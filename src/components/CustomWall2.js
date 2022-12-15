import * as THREE from "three";
import { Vector3 } from "three";
import { AXIS, DIR, WALL_MAP, STORE, TILE_SIZE } from "../Constant";

const textLoader = new THREE.TextureLoader();
const wallMat = new THREE.MeshStandardMaterial({ color: "white" });
class CustomWall2 extends THREE.Mesh {
  constructor(
    initlength,
    initheight,
    pos,
    norVec,
    dir,
    cut,
    material,
    imageURl
  ) {
    super(new THREE.BoxGeometry(0.1, initheight, initlength), wallMat);
    this.position.set(pos.x, pos.y, pos.z);
    this.userData.normalAxis = norVec;
    this.userData.dir = dir;
    this.userData.initheight = initheight;
    this.userData.initlength = initlength;
    this.userData.cut = cut;
    this.userData.material = material;
    this.imageURl = imageURl;
    switch (norVec) {
      case AXIS.X:
        if (dir === DIR.START) {
          this.geometry.translate(-0.05, initheight / 2, 0);
          this.userData.normalVector = new Vector3(1, 0, 0);
        } else if (dir === DIR.END) {
          this.geometry.translate(0.05, initheight / 2, 0);
          this.userData.normalVector = new Vector3(-1, 0, 0);
        }
        break;
      case AXIS.Z:
        this.rotation.y = -Math.PI / 2;
        if (dir === DIR.START) {
          this.geometry.translate(-0.05, initheight / 2, 0);
          this.userData.normalVector = new Vector3(0, 0, 1);
        } else if (dir === DIR.END) {
          this.geometry.translate(0.05, initheight / 2, 0);
          this.userData.normalVector = new Vector3(0, 0, -1);
        }
        break;
      default:
        break;
    }
    this.loadTextures();
  }

  loadTextures() {
    if (this.userData.material < 3) {
      this.material.map = textLoader.load(
        "assets/tiles/" + WALL_MAP[this.userData.material].diffuse
      );
      this.material.roughnessMap = textLoader.load(
        "assets/tiles/" + WALL_MAP[this.userData.material].specular
      );
      this.material.normalMap = textLoader.load(
        "assets/tiles/" + WALL_MAP[this.userData.material].normal
      );
    } else {
      this.material.map = textLoader.load(this.imageURl);
      this.material.roughnessMap = textLoader.load(this.imageURl);
      this.material.normalMap = textLoader.load(this.imageURl);
    }
    this.material.roughnessMap.repeat.x =
      (this.userData.initlength * this.scale.z) / TILE_SIZE;
    this.material.roughnessMap.repeat.y =
      (this.userData.initheight * this.scale.y) / TILE_SIZE;
    this.material.map.repeat.x =
      (this.userData.initlength * this.scale.z) / TILE_SIZE;
    this.material.map.repeat.y =
      (this.userData.initheight * this.scale.y) / TILE_SIZE;
    this.material.normalMap.repeat.x =
      (this.userData.initlength * this.scale.z) / TILE_SIZE;
    this.material.normalMap.repeat.y =
      (this.userData.initheight * this.scale.y) / TILE_SIZE;

    this.material.roughnessMap.wrapS = this.material.roughnessMap.wrapT =
      THREE.RepeatWrapping;
    this.material.map.wrapS = this.material.map.wrapT = THREE.RepeatWrapping;
    this.material.normalMap.wrapS = this.material.normalMap.wrapT =
      THREE.RepeatWrapping;
  }

  getNormalVector() {
    return this.userData.normalVector;
  }

  getNormalAxis() {
    return this.userData.normalAxis;
  }
}

export { CustomWall2 };
