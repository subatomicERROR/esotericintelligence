import React, { useRef, useEffect } from 'react';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  DirectionalLight,
  CubeTextureLoader,
  SphereGeometry,
  MeshStandardMaterial,
  Mesh,
  BufferGeometry,
  Float32BufferAttribute,
  PointsMaterial,
  Points,
} from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// This component has been repurposed to display a 3D space background.
const NeuralNetworkBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const currentMount = mountRef.current;
    let animationFrameId: number;
    let isInteracting = false; // Flag to track user interaction

    // Scene
    const scene = new Scene();
    
    // Camera
    const camera = new PerspectiveCamera(60, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    // Renderer
    const renderer = new WebGLRenderer({ 
        antialias: true,
        powerPreference: 'high-performance' 
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 3;
    controls.maxDistance = 15;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Event listeners to pause object animations during interaction
    const onInteractionStart = () => { isInteracting = true; };
    const onInteractionEnd = () => { isInteracting = false; };

    controls.addEventListener('start', onInteractionStart);
    controls.addEventListener('end', onInteractionEnd);

    // Lighting
    const ambientLight = new AmbientLight(0x404040, 1);
    scene.add(ambientLight);

    const directionalLight = new DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Env Map & Background
    const cubeTextureLoader = new CubeTextureLoader();
    const envTexture = cubeTextureLoader.load([
      "https://threejs.org/examples/textures/cube/MilkyWay/dark-s_px.jpg",
      "https://threejs.org/examples/textures/cube/MilkyWay/dark-s_nx.jpg",
      "https://threejs.org/examples/textures/cube/MilkyWay/dark-s_py.jpg",
      "https://threejs.org/examples/textures/cube/MilkyWay/dark-s_ny.jpg",
      "https://threejs.org/examples/textures/cube/MilkyWay/dark-s_pz.jpg",
      "https://threejs.org/examples/textures/cube/MilkyWay/dark-s_nz.jpg",
    ]);
    scene.background = envTexture;

    // Sphere
    const sphereGeometry = new SphereGeometry(1, 64, 64);
    const sphereMaterial = new MeshStandardMaterial({
      envMap: envTexture,
      metalness: 1,
      roughness: 0,
    });
    const sphere = new Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Stars
    const starsGeometry = new BufferGeometry();
    const starVertices: number[] = [];
    for (let i = 0; i < 1000; i++) {
        const x = (Math.random() - 0.5) * 100;
        const y = (Math.random() - 0.5) * 100;
        const z = (Math.random() - 0.5) * 100;
        starVertices.push(x, y, z);
    }
    starsGeometry.setAttribute('position', new Float32BufferAttribute(starVertices, 3));
    const starsMaterial = new PointsMaterial({ color: 0xffffff, size: 0.1 });
    const starField = new Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = performance.now() * 0.001;

      // Subtle pulsating effect is always on to keep it "alive"
      sphere.scale.setScalar(Math.sin(time * 0.5) * 0.02 + 1);
      
      // Automatic object rotations only happen when not interacting
      if (!isInteracting) {
        sphere.rotation.x += 0.0005;
        sphere.rotation.y += 0.001;
        starField.rotation.y += 0.0002;
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if(currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      controls.removeEventListener('start', onInteractionStart);
      controls.removeEventListener('end', onInteractionEnd);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
         try {
            currentMount.removeChild(renderer.domElement);
         } catch (e) {
            // Failsafe in case the element is already gone
         }
      }
      renderer.dispose();
      scene.traverse(object => {
        if (object instanceof Mesh) {
          object.geometry?.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach(material => material?.dispose());
        }
      });
      envTexture.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

export default NeuralNetworkBackground;