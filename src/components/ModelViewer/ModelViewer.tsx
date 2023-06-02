import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ModelViewer = () => {
  const mountRef = useRef(null);
  useEffect(() => {

    let isMounted = true;

    const modelPath =
      "/scene.gltf";

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xffffff);
    renderer.setSize(1200, 1200 * (window.innerHeight / window.innerWidth));
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    const loader = new GLTFLoader();
    loader.load(modelPath, (gltf) => {
      const model = gltf.scene;
      scene.add(model);
    });

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff);
    directionalLight1.position.set(100, 200, 100);
    scene.add(directionalLight1);

    camera.position.z = window.innerWidth < 640 ? 3 : 0.7;


    const handleResize = () => {
      renderer.setSize(1200, 1200 * (window.innerHeight / window.innerWidth));
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    const animate = () => {
      if (!isMounted) return;
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} />
};

export default ModelViewer;