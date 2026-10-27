const FEEDBACK={formspree:'',email:'your-email@example.com'};
const $=(s,r=document)=>[...r.querySelectorAll(s)],cl=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
const calm=matchMedia('(prefers-reduced-motion:reduce)').matches,F=[];
const P=[['index','Prologue'],['history','History'],['careers','Careers'],['colleges','Colleges'],['games','Games'],['feedback','Feedback']];
const cur=location.pathname.split('/').pop().replace('.html','')||'index';
const vPill='<div class=v-switcher><a href=/index.html title="v1 Pavilion">v1</a><a href=/v2.html title="v2 Premier">v2</a><a href=/v3.html title="v3 Open Mic">v3</a><a href=/v4.html title="v4 Alexandria">v4</a><a href=/v5.html title="v5 Mobility">v5</a><span class=act title="v6 Theatrical">v6</span><a href=/v7.html title="v7 Renaissance">v7</a><a href=/v8.html title="v8 Arena">v8</a><a href=/v9.html title="v9 Newsroom">v9</a><a href=/v10.html title="v10 Cyberpunk">v10</a><a href=/v12.html title="v12 Glassmorphism">v12</a><a href=/v14.html title="v14 Split Vault">v14</a><a href=/v15.html title="v15 Autonomous">v15</a><a href=/v16.html title="v16 Fusion">v16</a></div>';
document.body.insertAdjacentHTML('afterbegin',`<canvas id=bg></canvas><nav><a class=logo href=/v6/index.html>English · X-D</a><div>${P.map(([h,n])=>`<a href=/v6/${h}.html${h==cur?' class=on':''}>${n}</a>`).join('')}</div>${vPill}</nav>`);
document.body.insertAdjacentHTML('beforeend','<footer>Class X-D · Career Fair 2026 · Creators: to be added</footer>');
const L=!calm&&window.Lenis&&cur!=='games'?new Lenis({lerp:.09}):null;
let mx=0,my=0;addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5},{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -10% 0px'});
$('[data-r]').forEach(e=>io.observe(e));
const pin=(sel,fn)=>$(sel).forEach(el=>F.push(()=>{const r=el.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;fn(el,cl(-r.top/Math.max(1,r.height-innerHeight)))}));
if(window.THREE&&cur!=='games'){
  const cv=$('#bg')[0];
  if(cv){
    const r=new THREE.WebGLRenderer({canvas:cv,alpha:true,powerPreference:'high-performance'}),s=new THREE.Scene(),cam=new THREE.PerspectiveCamera(60,1,.1,50),N=180,pos=new Float32Array(N*3);
    for(let i=0;i<N;i++)pos.set([(Math.random()-.5)*16,(Math.random()-.5)*10,(Math.random()-.5)*8],i*3);
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));
    const pts=new THREE.Points(g,new THREE.PointsMaterial({color:0xffa94d,size:.06,transparent:true,opacity:.8,blending:THREE.AdditiveBlending,depthWrite:false}));
    s.add(pts);
    const pg=[];
    for(let i=0;i<6;i++){
      const m=new THREE.Mesh(new THREE.PlaneGeometry(1.1,1.5),new THREE.MeshBasicMaterial({color:0xe8d7b0,transparent:true,opacity:.08,side:THREE.DoubleSide}));
      m.position.set((Math.random()-.5)*12,(Math.random()-.5)*7,-1-Math.random()*4);
      m.rotation.set(Math.random()*3,Math.random()*3,0);
      s.add(m);pg.push(m);
    }
    const rs=()=>{r.setPixelRatio(Math.min(devicePixelRatio,1.25));r.setSize(innerWidth,innerHeight,false);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()};
    rs();addEventListener('resize',rs,{passive:true});
    F.push(t=>{
      if(document.querySelector('.game-modal.active'))return;
      const sc=scrollY/Math.max(1,document.body.scrollHeight-innerHeight);
      if(!calm){
        pts.rotation.y+=.001;
        pts.rotation.x+=.0004;
        pg.forEach((m,i)=>{m.rotation.x+=.002;m.rotation.y+=.003*(i%2?1:-1);m.position.y+=Math.sin(t/2500+i)*.0015});
      }
      cam.position.set(mx*.8,-sc*3.5-my*.6,6-sc*2);
      cam.lookAt(0,-sc*3.5,0);
      r.render(s,cam);
    });
  }
}
F.push(()=>{$('.t3').forEach(t=>{t.style.setProperty('--rx',-my*14+'deg');t.style.setProperty('--ry',mx*22+'deg')});if($('.cur')[0])document.documentElement.style.setProperty('--c',cl(scrollY/(innerHeight*.9)))});
$('.tilt').forEach(c=>{
  c.addEventListener('pointermove',e=>{
    if(e.target.closest('button,a,input'))return;
    const r=c.getBoundingClientRect();
    c.style.transform=`perspective(700px) rotateY(${((e.clientX-r.left)/r.width-.5)*12}deg) rotateX(${-((e.clientY-r.top)/r.height-.5)*12}deg)`;
  },{passive:true});
  c.addEventListener('pointerleave',()=>c.style.transform='');
});
pin('.book',(el,p)=>{const pg=$('.pg',el),n=pg.length;pg.forEach((q,i)=>{const k=cl(p*(n-1)-i);q.style.transform=`rotateY(${-k*100}deg)`;q.style.opacity=1-k*k;q.style.zIndex=n-i;q.style.pointerEvents=k>.5?'none':''})});
pin('.ringsec',(el,p)=>{const rg=$('.ring',el)[0];if(rg){rg.style.setProperty('--a',-p*308.57+'deg');const a=Math.round(p*6);$('.c',el).forEach((c,i)=>c.classList.toggle('act',i==a))}});
$('.ring .c').forEach(c=>{const f=()=>c.classList.toggle('flip');c.onclick=f;c.onkeydown=e=>{if(e.key=='Enter'||e.key==' '){e.preventDefault();f()}}});
pin('.reel',(el,p)=>{const tr=$('.track',el)[0],vw=innerWidth;if(tr){tr.style.transform=`translateX(${-p*Math.max(0,tr.scrollWidth-vw)}px)`;$('.c',el).forEach(c=>{const r=c.getBoundingClientRect(),o=(r.left+r.width/2-vw/2)/vw,a=cl(Math.abs(o)*1.6);c.style.opacity=1-a*.6;c.style.transform=`rotateY(${-o*40}deg) scale(${1-a*.12})`})}});
const fm=$('#fm')[0];if(fm)fm.onsubmit=async e=>{e.preventDefault();const m=$('#msg')[0],d=new FormData(fm),seal=()=>$('.seal')[0].classList.add('on');
if(!fm.checkValidity()){m.textContent='Add your name and a message before sealing.';fm.reportValidity();return}
if(FEEDBACK.formspree){try{const r=await fetch(FEEDBACK.formspree,{method:'POST',body:d,headers:{Accept:'application/json'}});if(!r.ok)throw 0;seal();m.textContent='Sealed and sent. Thank you.';fm.reset()}catch{m.textContent='Couldn’t send. Check your connection and try again.'}return}
const body=[...d].map(([k,v])=>k+': '+v).join('\n');location.href=`mailto:${FEEDBACK.email}?subject=${encodeURIComponent('Feedback: '+d.get('topic'))}&body=${encodeURIComponent(body)}`;seal();m.textContent='Sealed. Your mail app should open with the message ready. Press send.'};
const tick=t=>{L&&L.raf(t);F.forEach(f=>f(t));requestAnimationFrame(tick)};requestAnimationFrame(tick);
