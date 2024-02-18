"use client"

import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Float, Environment } from "@react-three/drei"
import { gsap } from "gsap"
import { Suspense, useRef } from "react"
import { func } from "three/examples/jsm/nodes/Nodes.js"

export default function Shapes() {
    return (
        <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
            <Canvas 
            className="z-0" 
            shadows 
            gl={{ antialias: false }} 
            dpr={[1, 1.5]} 
            camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
            >
            <Suspense fallback={null}>
                <ContactShadows
                position={[0, -3.5, 0]}
                opacity={0.65}
                scale={40}
                blur={1}
                far={9} />
                <Environment preset="studio" />
                </Suspense>
            </Canvas>
        </div>
    )
}
function Geometries() {
    const geometries = [
        {
            position: [0, 0, 0],
            r: 0.3,
            geometry: new THREE.IcosahedronGeometry(3) // Gem
        },
    ];

    const materials = [
        new THREE.MeshNormalMaterial()
    ]

    // Pass to Geometry

}



function Geometry({r, position, geometry, materials}){
    const meshRef = useRef()
const [visible, setVisible] = useState(false);

    const startingMaterial = getRandomMaterial();

    function getRandomMaterial() {
        return gsap.utils.random(materials);
    }

    function handleClick(e){
        const nesg = e.object;

        gsap.to(mesh.rotation,{
            x: `+=${gsap.utils.random(0,2)}`,
            y: `+=${gsap.utils.random(0,2)}`,
            z: `+=${gsap.utils.random(0,2)}`,
            duration: 1.3,
            ease: "elastic.out(1,0.3)",
            yoyo: true,
        });
        mesh.material = getRandomMaterial();


    }

    const handlePointerOver = () =>{
        document.body.style.cursor = "pointer"
    }

    const handlePointerOver = () =>{

    })

}