// Grainient — WebGL animated gradient (React Bits port, standalone)
// PENDOOROOTS green palette
(function() {
  var container = document.getElementById('heroGrainient');
  if (!container) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var COLORS = { c1: '#4caf50', c2: '#1b5e20', c3: '#0a2e0a' };

  function hexToRgb(hex) {
    var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!r) return [1,1,1];
    return [parseInt(r[1],16)/255, parseInt(r[2],16)/255, parseInt(r[3],16)/255];
  }

  var vert = '#version 300 es\nin vec2 position;\nvoid main(){gl_Position=vec4(position,0.0,1.0);}';

  var frag = '#version 300 es\nprecision highp float;\n' +
    'uniform vec2 iResolution;uniform float iTime;' +
    'uniform float uTimeSpeed,uColorBalance,uWarpStrength,uWarpFrequency,uWarpSpeed,uWarpAmplitude;' +
    'uniform float uBlendAngle,uBlendSoftness,uRotationAmount,uNoiseScale,uGrainAmount,uGrainScale;' +
    'uniform float uGrainAnimated,uContrast,uGamma,uSaturation,uZoom,uLightMode;' +
    'uniform vec2 uCenterOffset;uniform vec3 uColor1,uColor2,uColor3;out vec4 fragColor;' +
    '#define S(a,b,t) smoothstep(a,b,t)\n' +
    'mat2 Rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);}\n' +
    'vec2 hash(vec2 p){p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));return fract(sin(p)*43758.5453);}\n' +
    'float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);return 0.5+0.5*mix(mix(dot(-1.0+2.0*hash(i),f),dot(-1.0+2.0*hash(i+vec2(1,0)),f-vec2(1,0)),u.x),mix(dot(-1.0+2.0*hash(i+vec2(0,1)),f-vec2(0,1)),dot(-1.0+2.0*hash(i+vec2(1,1)),f-vec2(1,1)),u.x),u.y);}\n' +
    'void mainImage(out vec4 o,vec2 C){float t=iTime*uTimeSpeed;vec2 uv=C/iResolution.xy;float ratio=iResolution.x/iResolution.y;vec2 tuv=uv-0.5+uCenterOffset;tuv/=max(uZoom,0.001);float degree=noise(vec2(t*0.1,tuv.x*tuv.y)*uNoiseScale);tuv.y*=1.0/ratio;tuv*=Rot(radians((degree-0.5)*uRotationAmount+180.0));tuv.y*=ratio;float frequency=uWarpFrequency;float ws=max(uWarpStrength,0.001);float amplitude=uWarpAmplitude/ws;float warpTime=t*uWarpSpeed;tuv.x+=sin(tuv.y*frequency+warpTime)/amplitude;tuv.y+=sin(tuv.x*(frequency*1.5)+warpTime)/(amplitude*0.5);vec3 colLav=uColor1;vec3 colOrg=uColor2;vec3 colDark=uColor3;float b=uColorBalance;float s=max(uBlendSoftness,0.0);mat2 blendRot=Rot(radians(uBlendAngle));float blendX=(tuv*blendRot).x;float edge0=-0.3-b-s;float edge1=0.2-b+s;float v0=0.5-b+s;float v1=-0.3-b-s;vec3 layer1=mix(colDark,colOrg,S(edge0,edge1,blendX));vec3 layer2=mix(colOrg,colLav,S(edge0,edge1,blendX));vec3 col=mix(layer1,layer2,S(v0,v1,tuv.y));vec2 grainUv=uv*max(uGrainScale,0.001);if(uGrainAnimated>0.5){grainUv+=vec2(iTime*0.05);}float grain=fract(sin(dot(grainUv,vec2(12.9898,78.233)))*43758.5453);col+=(grain-0.5)*uGrainAmount;col=(col-0.5)*uContrast+0.5;float luma=dot(col,vec3(0.2126,0.7152,0.0722));col=mix(vec3(luma),col,uSaturation);col=pow(max(col,0.0),vec3(1.0/max(uGamma,0.001)));col=clamp(col,0.0,1.0);if(uLightMode>0.5){float energy=max(max(col.r,col.g),col.b);vec3 hue=col/max(energy,0.001);float chroma=length(col-vec3(dot(col,vec3(0.333333))));float coverage=clamp(0.12+chroma*1.15+energy*0.18,0.0,0.88);col=mix(vec3(1.0),clamp(hue*0.58+col*0.18,0.0,1.0),coverage);}o=vec4(col,1.0);}\n' +
    'void main(){vec4 o=vec4(0.0);mainImage(o,gl_FragCoord.xy);fragColor=o;}';

  // Load OGL from CDN
  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/ogl@1.0.11/dist/ogl.mjs';
  script.type = 'module';
  script.onload = function() {
    import('https://cdn.jsdelivr.net/npm/ogl@1.0.11/dist/ogl.mjs').then(function(mod) {
      var Renderer = mod.Renderer, Program = mod.Program, Mesh = mod.Mesh, Triangle = mod.Triangle;

      var renderer = new Renderer({ webgl: 2, alpha: true, antialias: false, dpr: Math.min(window.devicePixelRatio||1,2) });
      var gl = renderer.gl;
      var canvas = gl.canvas;
      canvas.style.cssText = 'width:100%;height:100%;display:block;position:absolute;inset:0;';
      container.appendChild(canvas);

      var geometry = new Triangle(gl);
      var program = new Program(gl, {
        vertex: vert,
        fragment: frag,
        uniforms: {
          iTime:           { value: 0 },
          iResolution:     { value: new Float32Array([1,1]) },
          uTimeSpeed:      { value: 0.25 },
          uColorBalance:   { value: 0 },
          uWarpStrength:   { value: 1 },
          uWarpFrequency:  { value: 5 },
          uWarpSpeed:      { value: 2 },
          uWarpAmplitude:  { value: 50 },
          uBlendAngle:     { value: 0 },
          uBlendSoftness:  { value: 0.05 },
          uRotationAmount: { value: 500 },
          uNoiseScale:     { value: 2 },
          uGrainAmount:    { value: 0.1 },
          uGrainScale:     { value: 2 },
          uGrainAnimated:  { value: 0 },
          uContrast:       { value: 1.5 },
          uGamma:          { value: 1 },
          uSaturation:     { value: 1 },
          uCenterOffset:   { value: new Float32Array([0,0]) },
          uZoom:           { value: 0.9 },
          uColor1:         { value: new Float32Array(hexToRgb(COLORS.c1)) },
          uColor2:         { value: new Float32Array(hexToRgb(COLORS.c2)) },
          uColor3:         { value: new Float32Array(hexToRgb(COLORS.c3)) },
          uLightMode:      { value: 0 }
        }
      });

      var mesh = new Mesh(gl, { geometry: geometry, program: program });

      function setSize() {
        var rect = container.getBoundingClientRect();
        renderer.setSize(Math.max(1,Math.floor(rect.width)), Math.max(1,Math.floor(rect.height)));
        var res = program.uniforms.iResolution.value;
        res[0] = gl.drawingBufferWidth;
        res[1] = gl.drawingBufferHeight;
        renderer.render({ scene: mesh });
      }

      new ResizeObserver(setSize).observe(container);
      setSize();

      var raf = 0, vis = true, pgVis = !document.hidden, t0 = performance.now();

      function loop(t) {
        program.uniforms.iTime.value = (t - t0) * 0.001;
        renderer.render({ scene: mesh });
        raf = requestAnimationFrame(loop);
      }
      function start() { if (vis && pgVis && !raf) raf = requestAnimationFrame(loop); }
      function stop() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }

      new IntersectionObserver(function(e) { vis = e[0].isIntersecting; vis ? start() : stop(); }, { threshold: 0 }).observe(container);
      document.addEventListener('visibilitychange', function() { pgVis = !document.hidden; pgVis ? start() : stop(); });
      start();
    }).catch(function(e) { console.error('Grainient OGL failed:', e); });
  };
  document.head.appendChild(script);
})();
