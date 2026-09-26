/* A single, optional spatial reading of the Dezhou exhibition centre's radial plan.
   Navigation and content stay in HTML; the image remains the WebGL fallback. */
const initSpatialScene = () => {
  const canvas = document.getElementById('spatial-canvas');
  const frame = canvas?.closest('.spatial-view');
  if (!canvas || !frame || !window.THREE) return;
  let renderer;
  try { renderer = new THREE.WebGLRenderer({canvas, antialias: true, alpha: false, powerPreference: 'low-power'}); }
  catch { return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setClearColor(0x031b15, 1);
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x031b15, .035);
  const camera = new THREE.PerspectiveCamera(38, 1, .1, 100);
  const architecture = new THREE.Group();
  const system = new THREE.Group();
  const interfaceLayer = new THREE.Group();
  scene.add(architecture, system, interfaceLayer);
  const architecturalMaterials = [];
  const systemMaterials = [];
  const interfaceMaterials = [];
  const line = (points, color, opacity, parent, list) => {
    const material = new THREE.LineBasicMaterial({color, transparent: true, opacity});
    material.userData.baseOpacity = opacity;
    parent.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points.map(p => new THREE.Vector3(...p))), material));
    list.push(material);
  };
  const box = (w, h, d, x, y, z, rotation) => {
    const geometry = new THREE.BoxGeometry(w, h, d);
    const fill = new THREE.MeshBasicMaterial({color: 0x43816e, transparent: true, opacity: .23, depthWrite: false});
    const edge = new THREE.LineBasicMaterial({color: 0xa2d3b8, transparent: true, opacity: .85});
    fill.userData.baseOpacity = .23;
    edge.userData.baseOpacity = .85;
    const mesh = new THREE.Mesh(geometry, fill);
    const outline = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), edge);
    mesh.position.set(x, y, z); outline.position.copy(mesh.position);
    mesh.rotation.y = rotation; outline.rotation.y = rotation;
    architecture.add(mesh, outline);
    architecturalMaterials.push(fill, edge);
  };
  box(2.3, .55, 2.3, 0, 0, 0, 0);
  for (let i = 0; i < 6; i++) {
    const angle = i * Math.PI / 3;
    const distance = 3.25;
    box(2.7, .34, 1.65, Math.sin(angle) * distance, -.16, Math.cos(angle) * distance, angle);
    line([[0,.15,0],[Math.sin(angle)*distance,.06,Math.cos(angle)*distance]], 0x8eb9a9, .35, architecture, architecturalMaterials);
  }
  const grid = new THREE.GridHelper(18, 18, 0x528575, 0x214d3d);
  grid.position.y = -.38;
  architecture.add(grid);
  const nodePositions = [[-3,1.2,-2.4],[-1,2.1,1.2],[1.8,1.5,-1.2],[3.2,.8,2.6],[.2,2.8,3.3]];
  nodePositions.forEach(([x,y,z], i) => {
    const material = new THREE.MeshBasicMaterial({color: i === 2 ? 0x8dc9ff : 0x7bbfab, transparent:true, opacity:0});
    material.userData.baseOpacity = .95;
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(.12, 10, 8), material);
    mesh.position.set(x,y,z); system.add(mesh); systemMaterials.push(material);
    if (i) line([nodePositions[i-1],nodePositions[i]], 0x76baff, .65, system, systemMaterials);
  });
  const planeMaterial = new THREE.MeshBasicMaterial({color:0x23679d, transparent:true, opacity:0, side:THREE.DoubleSide, depthWrite:false});
  planeMaterial.userData.baseOpacity = .16;
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(6.5,4.3), planeMaterial);
  plane.rotation.x = -Math.PI/2; plane.position.set(0,.15,0); interfaceLayer.add(plane); interfaceMaterials.push(planeMaterial);
  for (let i=0; i<6; i++) line([[-2.7+i*.95,.17,-1.8],[-2.7+i*.95,.17,1.8]],0x8ec8ff,.48,interfaceLayer,interfaceMaterials);
  for (let i=0; i<5; i++) line([[-2.7,.17,-1.8+i*.9],[2.7,.17,-1.8+i*.9]],0x8ec8ff,.48,interfaceLayer,interfaceMaterials);
  let visible = false;
  let pending = false;
  let pointerX = 0;
  const clamp = (n,min,max) => Math.max(min,Math.min(max,n));
  const render = () => {
    pending = false;
    if (!visible || document.hidden) return;
    const rect = frame.getBoundingClientRect();
    const progress = clamp((window.innerHeight - rect.top)/(window.innerHeight + rect.height),0,1);
    const systemMix = clamp((progress-.24)*2.5,0,1);
    const interfaceMix = clamp((progress-.57)*3.2,0,1);
    architecturalMaterials.forEach(material => { material.opacity = material.userData.baseOpacity * (1-interfaceMix*.72); });
    systemMaterials.forEach(material => { material.opacity = material.userData.baseOpacity*systemMix*(1-interfaceMix*.4); });
    interfaceMaterials.forEach(material => { material.opacity = material.userData.baseOpacity*interfaceMix; });
    architecture.rotation.y = -.24 + progress*.32 + pointerX*.06;
    system.rotation.y = architecture.rotation.y;
    interfaceLayer.rotation.y = architecture.rotation.y;
    camera.position.set(10-progress*2, 9-progress*4, 13-progress*3);
    camera.lookAt(0,.15,0);
    renderer.render(scene,camera);
  };
  const requestRender = () => { if (!pending) { pending=true; requestAnimationFrame(render); } };
  const resize = () => {
    const width = frame.clientWidth, height = frame.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width,height,false); camera.aspect=width/height; camera.updateProjectionMatrix(); requestRender();
  };
  const observer = new IntersectionObserver(entries => { visible=entries[0].isIntersecting; if (visible) requestRender(); }, {rootMargin:'100px'});
  observer.observe(frame);
  window.addEventListener('scroll',requestRender,{passive:true});
  window.addEventListener('resize',resize,{passive:true});
  frame.addEventListener('pointermove',event => { pointerX = (event.clientX-frame.getBoundingClientRect().left)/frame.clientWidth-.5; requestRender(); },{passive:true});
  canvas.addEventListener('webglcontextlost',event => { event.preventDefault(); frame.classList.remove('has-webgl'); visible=false; });
  resize(); frame.classList.add('has-webgl'); requestRender();
};

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && !window.matchMedia('(max-width: 760px)').matches) {
  const target = document.querySelector('.spatial-view');
  if (target) {
    const loader = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      loader.disconnect();
      const three = document.createElement('script');
      three.src = 'vendor/three.min.js';
      three.onload = initSpatialScene;
      document.head.appendChild(three);
    }, {rootMargin:'350px'});
    loader.observe(target);
  }
}
