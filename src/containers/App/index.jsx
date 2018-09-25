import React, { Component } from 'react';
import * as THREE from 'three';
import OrbitControls from '../../utils/OrbitControls.js'

let scene, camera, renderer, controls, geometry,  material, cube
let width = 800;
let height = 800;
export default class App extends Component {
  constructor(props) {
    super(props)
    this.init = this.init.bind(this)
    this.addCamera = this.addCamera.bind(this)
    this.addLight = this.addLight.bind(this)
    this.animate = this.animate.bind(this)
    this.addObject = this.addObject.bind(this)
  }

  componentDidMount() {
    this.init()
    this.animate();
  }

  init() {
    scene = new  THREE.Scene();
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize( 800, 800);
    scene.background = new THREE.Color( 0xeeeeee);
    document.getElementById('3d-rendering').appendChild( renderer.domElement );
    this.addCamera();
    this.addLight();
    this.addObject();
  }

  addCamera() {
    camera = new THREE.PerspectiveCamera( 75, width / height, 0.01, 1000);
    camera.position.set(0, 0, 5)
    // controls = new OrbitControls( camera, renderer.domElement );
    // controls.update();
    scene.add(camera);
  }

  addLight() {
    scene.add( new THREE.AmbientLight( 0x404040 ) );
    let light = new THREE.DirectionalLight( 0xffffff, 1 );
    light.position.set( 1, 0.75, 0.5 );
    scene.add( light );

    let light1 = new THREE.DirectionalLight( 0xfffff, 1 );
    light1.position.set( -1, 0.75, -0.5 );
    scene.add( light1 );
  }

  addObject() {
    geometry = new THREE.BoxGeometry( 1, 1, 1 );
		material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		cube = new THREE.Mesh( geometry, material );
		scene.add( cube );
  }

  animate(){
    // controls.update();
    // cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    window.requestAnimationFrame(this.animate.bind(this));
  }

  changeCameraPosition() {

  }

  render() {
    return (
      <div className="content">
        <div id="3d-rendering">
        </div>
        <div className="function">
          <button className='change-camera' onClick={this.changeCameraPosition.bind(this)}>Change Camera</button>
        </div>
      </div>
    )
  }
}