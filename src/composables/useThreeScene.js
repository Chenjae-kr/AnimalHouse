import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export function useThreeScene() {
  let scene, camera, renderer, controls
  let animationId
  let mesh // 현재 3D 오브젝트 (나중에 동물 모델로 교체)

  // 씬 초기화
  const initScene = (canvas) => {
    // 씬 생성
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0xfff5f7) // 부드러운 핑크색 배경

    // 카메라 생성
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(0, 2, 5)

    // 렌더러 생성
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    // OrbitControls
    controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.minDistance = 3
    controls.maxDistance = 10
    controls.maxPolarAngle = Math.PI / 2 // 바닥 아래로 못 보게

    // 조명 추가
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 10, 5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    scene.add(directionalLight)

    // 바닥 추가
    const groundGeometry = new THREE.PlaneGeometry(20, 20)
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x98d8c8,
      roughness: 0.8
    })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    scene.add(ground)

    // 그리드 헬퍼 (선택 사항)
    const gridHelper = new THREE.GridHelper(20, 20, 0xcccccc, 0xeeeeee)
    scene.add(gridHelper)

    // 창 크기 조절 이벤트
    window.addEventListener('resize', onWindowResize)
  }

  // 3D 모델 로딩 (현재는 기본 큐브)
  const loadModel = async () => {
    // TODO: 나중에 GLTFLoader로 실제 동물 모델 로드
    // 지금은 임시로 큐브 사용
    
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshStandardMaterial({
      color: 0xff6b9d,
      roughness: 0.5,
      metalness: 0.1
    })
    
    mesh = new THREE.Mesh(geometry, material)
    mesh.position.y = 0.5
    mesh.castShadow = true
    mesh.receiveShadow = true
    
    scene.add(mesh)
    
    return Promise.resolve()
  }

  // 애니메이션 루프
  const animate = () => {
    animationId = requestAnimationFrame(animate)

    // 컨트롤 업데이트
    controls.update()

    // 임시 큐브 회전 (나중에 제거)
    if (mesh) {
      mesh.rotation.y += 0.01
    }

    // 렌더링
    renderer.render(scene, camera)
  }

  // 창 크기 조절
  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  // 정리
  const cleanup = () => {
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
    
    window.removeEventListener('resize', onWindowResize)
    
    if (renderer) {
      renderer.dispose()
    }
    
    if (controls) {
      controls.dispose()
    }
  }

  return {
    initScene,
    loadModel,
    animate,
    cleanup
  }
}
