import React, { Component } from 'react';
import * as THREE from 'three';
import OrbitControls from '../../utils/OrbitControls.js'

let scene, camera, renderer, controls, mesh, line;
let width = 800;
let height = 800;
export default class App extends Component {
  constructor(props) {
    super(props)
    this.init = this.init.bind(this)
    this.addCamera = this.addCamera.bind(this)
    this.addLight = this.addLight.bind(this)
  }

  componentDidMount() {
    this.init()
  }

  init() {
    scene = new  THREE.Scene();
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize( 800, 800);
    let color = new THREE.Color();
    scene.background = new THREE.Color();
    document.getElementById('3d-rendering').appendChild( renderer.domElement );
    this.addCamera();
    this.addLight();
  }

  addCamera() {
    camera = new THREE.PerspectiveCamera( 75, width / height, 0.01, 1000);
    camera.target = new THREE.Vector3();
    controls = new OrbitControls( camera, renderer.domElement );
    controls.update();
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

  render() {
    return (
      <div id="3d-rendering">
      </div>
    )
  }
}