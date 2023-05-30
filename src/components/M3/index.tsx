import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeM = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load('https://raw.githubusercontent.com/dwqdaiwenqi/react-3d-viewer/master/site/src/lib/model/DamagedHelmet.gltf', (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      // Posiciona o modelo 3D
      model.position.set(0, 0, 0);

      // Configuração da câmera
      const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // Renderiza a cena
      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }
      animate();
    });

    return () => {
      // Limpa o contêiner ao desmontar o componente
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeM;