import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ModelViewer = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    const modelPath =
      "https://raw.githubusercontent.com/dwqdaiwenqi/react-3d-viewer/master/site/src/lib/model/DamagedHelmet.gltf";

    const scene = new THREE.Scene();
    if(scene === null) {
      return scene;
    }
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xffffff);
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      scene.add(gltf.scene);
    });

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff);
    directionalLight1.position.set(100, 200, 100);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xff00ff);
    directionalLight2.position.set(-100, 200, -100);
    scene.add(directionalLight2);

    camera.position.z = 5;

    const animate = () => {
      if (!isMounted) return;
      requestAnimationFrame(animate);
      controls.update(); // Atualiza os controles de órbita
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      isMounted = false;
    };
  }, []); // Array vazio como segundo argumento

  return <div ref={mountRef} />;
};

export default ModelViewer;