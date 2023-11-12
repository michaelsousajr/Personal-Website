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
    // Set fixed size dimensions
    const fixedWidth = 600 // 8x ratio
    const fixedHeight = 300 // 6x ratio
    const aspectRatio = fixedWidth / fixedHeight

    // Define zoom factor (larger values = more zoomed out)
    const zoomFactor = 400

    // Camera setup with adjusted zoom
    const camera = new THREE.OrthographicCamera(
      -aspectRatio * zoomFactor,
      aspectRatio * zoomFactor,
      1 * zoomFactor,
      -1 * zoomFactor,
      -50000,
      10000
    )
    camera.position.set(0, 1, 10)

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

    // Renderer with fixed size
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setClearColor(0x000000, 0)

    const setRendererSize = () => {
      const screenWidth = window.innerWidth
      const width = Math.min(screenWidth, fixedWidth)
      const height = width / aspectRatio
      renderer.setSize(width, height)
    }

    setRendererSize()
    mountRef.current.appendChild(renderer.domElement)

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05

    // Handle window resize
    const onWindowResize = () => {
      setRendererSize()
      camera.updateProjectionMatrix()
    }

    window.addEventListener('resize', onWindowResize, false)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      scene.rotation.y += 0.003
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      window.removeEventListener('resize', onWindowResize, false)
      if (mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <Container ref={mountRef}>{loading && <ModelSpinner />}</Container>
}

export default Model
