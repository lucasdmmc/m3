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
    renderer.setClearColor(0xffffff); // Define o fundo como branco
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // Desabilita o zoom

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

    const handleScroll = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
    };

    const handleTouchMove = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
    };

    const enableControls = () => {
      controls.enabled = true;
    };

    const disableControls = () => {
      controls.enabled = false;
    };

    const animate = () => {
      if (!isMounted) return;
      requestAnimationFrame(animate);
      // controls.update(); // Comentado para desabilitar o controle de zoom
      renderer.render(scene, camera);
    };

    animate();

    renderer.domElement.addEventListener("wheel", handleScroll, { passive: false });
    renderer.domElement.addEventListener("touchmove", handleTouchMove, { passive: false });
    renderer.domElement.addEventListener("touchstart", disableControls);
    renderer.domElement.addEventListener("touchend", enableControls);

    return () => {
      isMounted = false;
      renderer.domElement.removeEventListener("wheel", handleScroll);
      renderer.domElement.removeEventListener("touchmove", handleTouchMove);
      renderer.domElement.removeEventListener("touchstart", disableControls);
      renderer.domElement.removeEventListener("touchend", enableControls);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ModelViewer;