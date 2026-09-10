/**
 * HeroGrainient — WebGL Grainient Background (OGL)
 * Exact port of React Bits Grainient component
 * PENDOOROOTS green color scheme
 */

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [1, 1, 1];
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255
  ];
};

const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform vec2 uCenterOffset;
uniform float uZoom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uLightMode;
out vec4 fragColor;
#define S(a,b,t) smoothstep(a,b,t)
mat2 Rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);}
vec2 hash(vec2 p){p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));return fract(sin(p)*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);float n=mix(mix(dot(-1.0+2.0*hash(i+vec2(0.0,0.0)),f-vec2(0.0,0.0)),dot(-1.0+2.0*hash(i+vec2(1.0,0.0)),f-vec2(1.0,0.0)),u.x),mix(dot(-1.0+2.0*hash(i+vec2(0.0,1.0)),f-vec2(0.0,1.0)),dot(-1.0+2.0*hash(i+vec2(1.0,1.0)),f-vec2(1.0,1.0)),u.x),u.y);return 0.5+0.5*n;}
void mainImage(out vec4 o, vec2 C){
  float t=iTime*uTimeSpeed;
  vec2 uv=C/iResolution.xy;
  float ratio=iResolution.x/iResolution.y;
  vec2 tuv=uv-0.5+uCenterOffset;
  tuv/=max(uZoom,0.001);

  float degree=noise(vec2(t*0.1,tuv.x*tuv.y)*uNoiseScale);
  tuv.y*=1.0/ratio;
  tuv*=Rot(radians((degree-0.5)*uRotationAmount+180.0));
  tuv.y*=ratio;

  float frequency=uWarpFrequency;
  float ws=max(uWarpStrength,0.001);
  float amplitude=uWarpAmplitude/ws;
  float warpTime=t*uWarpSpeed;
  tuv.x+=sin(tuv.y*frequency+warpTime)/amplitude;
  tuv.y+=sin(tuv.x*(frequency*1.5)+warpTime)/(amplitude*0.5);

  vec3 colLav=uColor1;
  vec3 colOrg=uColor2;
  vec3 colDark=uColor3;
  float b=uColorBalance;
  float s=max(uBlendSoftness,0.0);
  mat2 blendRot=Rot(radians(uBlendAngle));
  float blendX=(tuv*blendRot).x;
  float edge0=-0.3-b-s;
  float edge1=0.2-b+s;
  float v0=0.5-b+s;
  float v1=-0.3-b-s;
  vec3 layer1=mix(colDark,colOrg,S(edge0,edge1,blendX));
  vec3 layer2=mix(colOrg,colLav,S(edge0,edge1,blendX));
  vec3 col=mix(layer1,layer2,S(v0,v1,tuv.y));

  vec2 grainUv=uv*max(uGrainScale,0.001);
  if(uGrainAnimated>0.5){grainUv+=vec2(iTime*0.05);}
  float grain=fract(sin(dot(grainUv,vec2(12.9898,78.233)))*43758.5453);
  col+=(grain-0.5)*uGrainAmount;

  col=(col-0.5)*uContrast+0.5;
  float luma=dot(col,vec3(0.2126,0.7152,0.0722));
  col=mix(vec3(luma),col,uSaturation);
  col=pow(max(col,0.0),vec3(1.0/max(uGamma,0.001)));
  col=clamp(col,0.0,1.0);
  if(uLightMode>0.5){
    float energy=max(max(col.r,col.g),col.b);
    vec3 hue=col/max(energy,0.001);
    float chroma=length(col-vec3(dot(col,vec3(0.333333))));
    float coverage=clamp(0.12+chroma*1.15+energy*0.18,0.0,0.88);
    col=mix(vec3(1.0),clamp(hue*0.58+col*0.18,0.0,1.0),coverage);
  }

  o=vec4(col,1.0);
}
void main(){
  vec4 o=vec4(0.0);
  mainImage(o,gl_FragCoord.xy);
  fragColor=o;
}
`;

// PENDOOROOTS green palette (replacing React Bits pink/purple defaults)
const CONFIG = {
  timeSpeed: 0.25,
  colorBalance: 0.0,
  warpStrength: 1.0,
  warpFrequency: 5.0,
  warpSpeed: 2.0,
  warpAmplitude: 50.0,
  blendAngle: 0.0,
  blendSoftness: 0.05,
  rotationAmount: 500.0,
  noiseScale: 2.0,
  grainAmount: 0.1,
  grainScale: 2.0,
  grainAnimated: false,
  contrast: 1.5,
  gamma: 1.0,
  saturation: 1.0,
  centerX: 0.0,
  centerY: 0.0,
  zoom: 0.9,
  color1: '#4caf50',  // lime green (replaces #FF9FFC)
  color2: '#1b5e20',  // deep forest green (replaces #5227FF)
  color3: '#0a2e0a',  // darkest green (replaces #B497CF)
  lightMode: false
};

// Keep renderer/program alive across calls
const ctxMap = new WeakMap();

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initGrainient(container: HTMLElement): () => void {
  if (prefersReducedMotion()) return () => {};
  let destroyed = false;

  import('ogl').then(({ Renderer, Program, Mesh, Triangle }) => {
    if (destroyed || !container.isConnected) return;

    try {
      const renderer = new Renderer({
        webgl: 2,
        alpha: true,
        antialias: false,
        dpr: Math.min(window.devicePixelRatio || 1, 2)
      });

      const gl = renderer.gl;
      const canvas = gl.canvas as HTMLCanvasElement;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.display = 'block';
      container.appendChild(canvas);

      const geometry = new Triangle(gl);
      const program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          iTime:           { value: 0 },
          iResolution:     { value: new Float32Array([1, 1]) },
          uTimeSpeed:      { value: CONFIG.timeSpeed },
          uColorBalance:   { value: CONFIG.colorBalance },
          uWarpStrength:   { value: CONFIG.warpStrength },
          uWarpFrequency:  { value: CONFIG.warpFrequency },
          uWarpSpeed:      { value: CONFIG.warpSpeed },
          uWarpAmplitude:  { value: CONFIG.warpAmplitude },
          uBlendAngle:     { value: CONFIG.blendAngle },
          uBlendSoftness:  { value: CONFIG.blendSoftness },
          uRotationAmount: { value: CONFIG.rotationAmount },
          uNoiseScale:     { value: CONFIG.noiseScale },
          uGrainAmount:    { value: CONFIG.grainAmount },
          uGrainScale:     { value: CONFIG.grainScale },
          uGrainAnimated:  { value: CONFIG.grainAnimated ? 1.0 : 0.0 },
          uContrast:       { value: CONFIG.contrast },
          uGamma:          { value: CONFIG.gamma },
          uSaturation:     { value: CONFIG.saturation },
          uCenterOffset:   { value: new Float32Array([CONFIG.centerX, CONFIG.centerY]) },
          uZoom:           { value: CONFIG.zoom },
          uColor1:         { value: new Float32Array(hexToRgb(CONFIG.color1)) },
          uColor2:         { value: new Float32Array(hexToRgb(CONFIG.color2)) },
          uColor3:         { value: new Float32Array(hexToRgb(CONFIG.color3)) },
          uLightMode:      { value: CONFIG.lightMode ? 1.0 : 0.0 }
        }
      });

      const mesh = new Mesh(gl, { geometry, program });
      ctxMap.set(container, { renderer, program, mesh });

      const setSize = () => {
        if (destroyed) return;
        const rect = container.getBoundingClientRect();
        const w = Math.max(1, Math.floor(rect.width));
        const h = Math.max(1, Math.floor(rect.height));
        renderer.setSize(w, h);
        const res = program.uniforms.iResolution.value as Float32Array;
        res[0] = gl.drawingBufferWidth;
        res[1] = gl.drawingBufferHeight;
        renderer.render({ scene: mesh });
      };

      const ro = new ResizeObserver(setSize);
      ro.observe(container);
      setSize();

      let raf = 0;
      let isVisible = true;
      let isPageVisible = !document.hidden;
      const t0 = performance.now();

      const loop = (t: number) => {
        program.uniforms.iTime.value = (t - t0) * 0.001;
        renderer.render({ scene: mesh });
        raf = requestAnimationFrame(loop);
      };

      const tryStart = () => {
        if (isVisible && isPageVisible && raf === 0) raf = requestAnimationFrame(loop);
      };
      const tryStop = () => {
        if (raf !== 0) { cancelAnimationFrame(raf); raf = 0; }
      };

      const io = new IntersectionObserver(
        ([entry]) => { isVisible = entry.isIntersecting; isVisible ? tryStart() : tryStop(); },
        { threshold: 0 }
      );
      io.observe(container);

      const onVisibility = () => {
        isPageVisible = !document.hidden;
        isPageVisible ? tryStart() : tryStop();
      };
      document.addEventListener('visibilitychange', onVisibility);

      tryStart();

      // Expose uniform updater for runtime changes
      (container as any).__grainientUpdate = (props: Record<string, any>) => {
        const u = program.uniforms;
        if (props.timeSpeed !== undefined) u.uTimeSpeed.value = props.timeSpeed;
        if (props.colorBalance !== undefined) u.uColorBalance.value = props.colorBalance;
        if (props.warpStrength !== undefined) u.uWarpStrength.value = props.warpStrength;
        if (props.warpFrequency !== undefined) u.uWarpFrequency.value = props.warpFrequency;
        if (props.warpSpeed !== undefined) u.uWarpSpeed.value = props.warpSpeed;
        if (props.warpAmplitude !== undefined) u.uWarpAmplitude.value = props.warpAmplitude;
        if (props.blendAngle !== undefined) u.uBlendAngle.value = props.blendAngle;
        if (props.blendSoftness !== undefined) u.uBlendSoftness.value = props.blendSoftness;
        if (props.rotationAmount !== undefined) u.uRotationAmount.value = props.rotationAmount;
        if (props.noiseScale !== undefined) u.uNoiseScale.value = props.noiseScale;
        if (props.grainAmount !== undefined) u.uGrainAmount.value = props.grainAmount;
        if (props.grainScale !== undefined) u.uGrainScale.value = props.grainScale;
        if (props.grainAnimated !== undefined) u.uGrainAnimated.value = props.grainAnimated ? 1.0 : 0.0;
        if (props.contrast !== undefined) u.uContrast.value = props.contrast;
        if (props.gamma !== undefined) u.uGamma.value = props.gamma;
        if (props.saturation !== undefined) u.uSaturation.value = props.saturation;
        if (props.centerX !== undefined || props.centerY !== undefined) {
          u.uCenterOffset.value = new Float32Array([
            props.centerX ?? CONFIG.centerX,
            props.centerY ?? CONFIG.centerY
          ]);
        }
        if (props.zoom !== undefined) u.uZoom.value = props.zoom;
        if (props.color1) u.uColor1.value = new Float32Array(hexToRgb(props.color1));
        if (props.color2) u.uColor2.value = new Float32Array(hexToRgb(props.color2));
        if (props.color3) u.uColor3.value = new Float32Array(hexToRgb(props.color3));
        if (props.lightMode !== undefined) u.uLightMode.value = props.lightMode ? 1.0 : 0.0;
      };

      return () => {
        destroyed = true;
        tryStop();
        ro.disconnect();
        io.disconnect();
        document.removeEventListener('visibilitychange', onVisibility);
        ctxMap.delete(container);
        try { container.removeChild(canvas); } catch {}
        try { gl.getExtension('WEBGL_lose_context')?.loseContext(); } catch {}
      };
    } catch (err) {
      console.error('Grainient init failed:', err);
      return () => {};
    }
  }).catch(err => {
    console.error('Grainient OGL load failed:', err);
  });

  return () => { destroyed = true; };
}

// Auto-init on elements with [data-grainient]
if (typeof window !== 'undefined') {
  const initAll = () => {
    document.querySelectorAll<HTMLElement>('[data-grainient]').forEach(el => {
      if (!(el as any).__grainientInit) {
        (el as any).__grainientInit = true;
        initGrainient(el);
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
}
