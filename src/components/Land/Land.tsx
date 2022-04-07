import { useDimensions } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { MeshBasicMaterial } from "three";
import { GLTFLoader, OrbitControls } from "three-stdlib";

type LandObject = THREE.Object3D & {
  material: THREE.Material;
};

function LandComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(elementRef);
  const texture = new THREE.TextureLoader().load("/baked.jpg");
  const poleLightMaterial = new MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
  });
  const scene = new THREE.Scene();

  let renderer!: THREE.WebGLRenderer;
  let camera!: THREE.PerspectiveCamera;
  let control!: OrbitControls;
  let mesh!: THREE.Group;

  // Create renderer when component mounts
  if (dimensions && canvasRef && !renderer) {
    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current as HTMLCanvasElement,
      antialias: true,
      alpha: true,
    });

    const { width, height } = dimensions.borderBox;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
  }

  // Create camera when component mounts
  if (dimensions && !camera) {
    const { width, height } = dimensions.borderBox;
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(4, 2, 4);
    scene.add(camera);
  }

  const tick = () => {
    control.update();
    renderer.render(scene, camera);

    if(mesh) {
        mesh.rotation.y += 0.001;
    }

    window.requestAnimationFrame(tick);
  };

  // Create orbit controls when component mounts
  if (canvasRef && camera) {
    control = new OrbitControls(camera, canvasRef.current as HTMLCanvasElement);
    tick();
  }

  new GLTFLoader().load("/portal.glb", (gltf) => {
    texture.flipY = false;
    texture.encoding = THREE.sRGBEncoding;

    const bakedMesh = gltf.scene.children.find(
      (child) => child.name === "baked"
    ) as LandObject;
    bakedMesh.material = new THREE.MeshBasicMaterial({ map: texture });

    const poleLightA = gltf.scene.children.find(
      (child) => child.name === "poleLightA"
    ) as LandObject;
    poleLightA.material = poleLightMaterial;

    const poleLightB = gltf.scene.children.find(
      (child) => child.name === "poleLightB"
    ) as LandObject;
    poleLightB.material = poleLightMaterial;

    const portalMesh = gltf.scene.children.find(
      (child) => child.name === "portalLight"
    ) as LandObject;
    portalMesh.material = poleLightMaterial;

    mesh = gltf.scene;
    mesh.scale.set(0.8, 0.8, 0.8);


    scene.add(gltf.scene);
  });

  useEffect(() => {
    if (!dimensions) {
      return;
    }

    const { width, height } = dimensions.borderBox;
    console.log(dimensions);
    // Update camera aspect ratio
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // Update renderer size
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }, [dimensions]);

  return (
    <div ref={elementRef} className="h-full w-full">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default LandComponent;
