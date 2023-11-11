import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import SplineLoader from '@splinetool/loader'
import { ModelSpinner } from './spinner'
import { Container } from '@chakra-ui/react'

const Model = () => {
  const mountRef = useRef(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Camera
    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      -50000,
      10000
    )
    camera.position.set(0, 1, 10)
    camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0))

    // Scene
    const scene = new THREE.Scene()

    // Spline Scene
    const loader = new SplineLoader()
    loader.load(
      'https://prod.spline.design/vB2RRuSkLcqVyNcG/scene.splinecode',
      splineScene => {
        scene.add(splineScene)
        setLoading(false)
      }
    )

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(600, 300)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05
    controls.screenSpacePanning = false
    controls.minDistance = 100
    controls.maxDistance = 500

    const onWindowResize = () => {
      camera.left = window.innerWidth / -2
      camera.right = window.innerWidth / 2
      camera.top = window.innerHeight / 2
      camera.bottom = window.innerHeight / -2
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(600, 300)
    }

    window.addEventListener('resize', onWindowResize, false)

    const animate = () => {
      requestAnimationFrame(animate)
      scene.rotation.y += 0.003
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      window.removeEventListener('resize', onWindowResize, false)
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <Container ref={mountRef}>{loading && <ModelSpinner />}</Container>
}

export default Model
