(function () {
  'use strict';
  const canvas = document.createElement('canvas');
  canvas.id = 'playground';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');
  let W = 0, H = 0, dpr = 1;
  const particles = [];
  const ripples = [];
  const palette = ['#ff4d6d','#ffbe0b','#3a86ff','#8338ec','#06d6a0','#fb5607','#00b4d8','#f72585'];

  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W*dpr; canvas.height = H*dpr;
    canvas.style.width=W+'px'; canvas.style.height=H+'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  resize(); window.addEventListener('resize', resize);

  let audioCtx = null;
  function audio(){
    if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if(audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }
  const notes = [130.81,146.83,164.81,174.61,196,220,246.94,261.63,293.66,329.63,349.23,392,440,493.88,523.25,587.33,659.25,698.46,783.99,880,987.77,1046.5,1174.66,1318.51,1396.91,1567.98];
  function sound(index){
    try {
      const ac=audio(), now=ac.currentTime;
      const osc=ac.createOscillator(), gain=ac.createGain();
      const types=['sine','triangle','square','sawtooth'];
      osc.type=types[index%types.length]; osc.frequency.value=notes[index%notes.length];
      if(index%5===0) osc.frequency.exponentialRampToValueAtTime(notes[index%notes.length]*1.7, now+.18);
      gain.gain.setValueAtTime(.0001,now); gain.gain.exponentialRampToValueAtTime(.16,now+.012); gain.gain.exponentialRampToValueAtTime(.0001,now+.38);
      osc.connect(gain); gain.connect(ac.destination); osc.start(now); osc.stop(now+.4);
    } catch(e) {}
  }
  function burst(x,y,index){
    const color=palette[index%palette.length];
    const count=12+(index%8);
    for(let i=0;i<count;i++){
      const a=(Math.PI*2*i/count)+Math.random()*.3, speed=2+Math.random()*5;
      particles.push({x,y,vx:Math.cos(a)*speed,vy:Math.sin(a)*speed,r:3+Math.random()*10,life:1,color,shape:index%4,rot:Math.random()*6.28});
    }
    ripples.push({x,y,r:8,life:1,color,line:4+(index%5)});
    document.documentElement.style.setProperty('--pulse', color);
    document.body.classList.remove('key-pop'); void document.body.offsetWidth; document.body.classList.add('key-pop');
  }
  function trigger(index,x,y){ sound(index); burst(x??(W*.2+Math.random()*W*.6),y??(H*.2+Math.random()*H*.6),index); }

  function draw(){
    ctx.clearRect(0,0,W,H);
    for(let i=ripples.length-1;i>=0;i--){
      const r=ripples[i]; r.r+=9; r.life-=.025;
      ctx.globalAlpha=Math.max(0,r.life); ctx.strokeStyle=r.color; ctx.lineWidth=r.line; ctx.beginPath(); ctx.arc(r.x,r.y,r.r,0,Math.PI*2); ctx.stroke();
      if(r.life<=0) ripples.splice(i,1);
    }
    for(let i=particles.length-1;i>=0;i--){
      const p=particles[i]; p.x+=p.vx; p.y+=p.vy; p.vy+=.08; p.vx*=.992; p.life-=.018; p.rot+=.05;
      ctx.globalAlpha=Math.max(0,p.life); ctx.fillStyle=p.color; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot);
      if(p.shape===0){ctx.beginPath();ctx.arc(0,0,p.r,0,Math.PI*2);ctx.fill();}
      else if(p.shape===1){ctx.fillRect(-p.r,-p.r,p.r*2,p.r*2);}
      else if(p.shape===2){ctx.beginPath();ctx.moveTo(0,-p.r*1.4);ctx.lineTo(p.r,p.r);ctx.lineTo(-p.r,p.r);ctx.closePath();ctx.fill();}
      else {ctx.fillRect(-p.r*1.8,-p.r*.3,p.r*3.6,p.r*.6);}
      ctx.restore(); if(p.life<=0) particles.splice(i,1);
    }
    ctx.globalAlpha=1; requestAnimationFrame(draw);
  }
  draw();

  window.addEventListener('keydown', function(e){
    if(e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
    const k=e.key.toUpperCase(); if(k.length!==1 || k<'A' || k>'Z') return;
    trigger(k.charCodeAt(0)-65);
    const badge=document.querySelector('[data-key-display]'); if(badge){badge.textContent=k; badge.classList.remove('hit'); void badge.offsetWidth; badge.classList.add('hit');}
  });
  window.addEventListener('pointerdown', function(e){
    if(e.target.closest('a,button')) return;
    trigger(Math.floor(Math.random()*26),e.clientX,e.clientY);
  });

  document.querySelectorAll('[data-play-key]').forEach(function(btn){
    btn.addEventListener('click',function(){ const k=btn.dataset.playKey; trigger(k.charCodeAt(0)-65); });
  });
})();

// --- Sorry Lecturer themed interactions: KIND VALENTINE EDITION ---
(function(){
  'use strict';
  let forgiveness=0;
  const fill=document.querySelector('[data-anger-fill]'), count=document.querySelector('[data-forgive-count]'), face=document.querySelector('[data-mood-face]'), title=document.querySelector('[data-mood-title]'), copy=document.querySelector('[data-mood-copy]'), garden=document.querySelector('[data-garden-bed]');
  const moods=[
    [0,'🥺','We know we disappointed you','We are truly sorry, Mdm. We hope our actions can earn back your trust.'],
    [25,'💌','Thank you for hearing us out','We know an apology matters only when our actions improve too.'],
    [50,'🌷','We really appreciate your patience','We are learning from this and we promise to manage our time better.'],
    [75,'💗','Your kindness means a lot to us','Thank you for giving us the chance to explain and do better.'],
    [100,'🥹','With all our hearts: thank you, Mdm','Whatever you decide, we appreciate you reading our apology.']
  ];
  function updateMood(){
    if(fill) fill.style.width=forgiveness+'%'; if(count) count.textContent=forgiveness;
    let m=moods[0]; moods.forEach(x=>{if(forgiveness>=x[0])m=x});
    if(face)face.textContent=m[1]; if(title)title.textContent=m[2]; if(copy)copy.textContent=m[3];
    if(garden){
      const level=Math.min(10,Math.floor(forgiveness/10));
      const plants=[0,1,2].map((_,i)=>{
        const local=Math.max(0,Math.min(10,level-i+1));
        let crown='🌱'; if(local>=3)crown='🌷'; if(local>=5)crown='🌹'; if(local>=7)crown='🌸'; if(local>=9)crown='💐';
        const h=18+local*8+(i===1?8:0);
        return `<span class="growing-plant" style="--h:${h}px;--delay:${i*.08}s"><i class="plant-crown">${crown}</i><i class="plant-stem"></i><i class="plant-leaf l1">🍃</i><i class="plant-leaf l2">🍃</i></span>`;
      }).join('');
      const extras=level>=6?'<b class="garden-extra butterfly">🦋</b>':'';
      const extras2=level>=8?'<b class="garden-extra bee">🐝</b>':'';
      const extras3=level>=10?'<b class="garden-extra sparkle">✨ 💗 ✨</b>':'';
      const mega=level>=10?`<div class="mega-bloom">${['🌷','🌹','🌸','🌺','🌼','💐','🌹','🌷','🌸','🌺','🌼','💐','🌷','🌹','🌸','🌺','🌼','💐'].map((x,j)=>`<i style="--i:${j}">${x}</i>`).join('')}</div><b class="garden-extra lovecloud">💗 ✨ 💕 ✨ 💗</b><b class="garden-extra butterfly b2">🦋</b><b class="garden-extra butterfly b3">🦋</b>`:'';
      garden.innerHTML=plants+extras+extras2+extras3+mega;
      garden.classList.toggle('full-bloom',level>=10);
    }
  }
  function emojiBurst(items,n,kind){
    const layer=document.createElement('div'); layer.className='kind-burst '+(kind||''); document.body.appendChild(layer);
    for(let i=0;i<n;i++){ const b=document.createElement('span'); b.textContent=items[Math.floor(Math.random()*items.length)]; b.style.left=(5+Math.random()*90)+'vw'; b.style.top=(15+Math.random()*70)+'vh'; b.style.setProperty('--bx',(Math.random()*260-130)+'px'); b.style.setProperty('--by',(Math.random()*360-180)+'px'); b.style.setProperty('--br',(Math.random()*540-270)+'deg'); b.style.animationDelay=(Math.random()*.3)+'s'; layer.appendChild(b); }
    setTimeout(()=>layer.remove(),2300);
  }
  function meow(){
    try { const A=window.AudioContext||window.webkitAudioContext, ac=new A(), now=ac.currentTime, o=ac.createOscillator(), g=ac.createGain(); o.type='triangle'; o.frequency.setValueAtTime(650,now); o.frequency.exponentialRampToValueAtTime(900,now+.09); o.frequency.exponentialRampToValueAtTime(430,now+.38); g.gain.setValueAtTime(.0001,now); g.gain.exponentialRampToValueAtTime(.22,now+.03); g.gain.exponentialRampToValueAtTime(.0001,now+.45); o.connect(g);g.connect(ac.destination);o.start(now);o.stop(now+.46); }catch(e){}
  }
  function heartForgive(){ forgiveness=Math.min(100,forgiveness+10); updateMood(); emojiBurst(forgiveness===100?['🌷','🌹','🌸','🌺','🌼','💐','🦋','✨','💗']:['💗','💕','💖','💌','🌷','✨','🥺'],forgiveness===100?150:75,forgiveness===100?'flowers':'hearts'); }
  document.querySelectorAll('[data-forgive]').forEach(b=>b.addEventListener('click',heartForgive));

  const shred=document.querySelector('[data-shred]'), machine=document.querySelector('.excuse-machine'), excuse=document.querySelector('[data-excuse-text]');
  if(shred) shred.addEventListener('click',()=>{machine.classList.remove('shredding');void machine.offsetWidth;machine.classList.add('shredding');excuse.textContent='NO EXCUSES. WE TAKE RESPONSIBILITY.';shred.textContent='WE TAKE RESPONSIBILITY ✓';setTimeout(()=>machine.classList.remove('shredding'),500)});

  document.querySelectorAll('[data-panic]').forEach(b=>b.addEventListener('click',()=>{
    for(let k=0;k<4;k++) setTimeout(meow,k*170);
    emojiBurst(['🐱','😺','😸','😽','🐈','🐈‍⬛','💗','🐾'],115,'cats');
    const note=document.createElement('div'); note.className='cat-note'; note.innerHTML='<b>EMERGENCY CAT APOLOGY! 🐱</b><span>Even the cats are asking very politely: please forgive us, Mdm. 💗</span>'; document.body.appendChild(note); setTimeout(()=>note.remove(),2200);
  }));

  const yes=document.querySelector('[data-final-yes]'), no=document.querySelector('[data-final-no]'), msg=document.querySelector('[data-final-message]'), emoji=document.querySelector('[data-final-emoji]'), boss=document.querySelector('.final-boss');
  if(yes) yes.addEventListener('click',()=>{forgiveness=100;updateMood();if(msg)msg.textContent='Thank you so much, Mdm 🥹💗 We will prove it through our actions.';if(emoji)emoji.textContent='🥹💗';if(boss)boss.classList.add('mercy-unlocked');emojiBurst(['💗','🌹','💌','✨','💕','🥹'],130,'hearts')});
  if(no){ const escape=()=>{ const r=no.getBoundingClientRect(), pad=18; const maxX=Math.max(pad,innerWidth-r.width-pad), maxY=Math.max(pad,innerHeight-r.height-pad); no.classList.add('gentle-escape'); no.style.left=(pad+Math.random()*(maxX-pad))+'px'; no.style.top=(pad+Math.random()*(maxY-pad))+'px'; emojiBurst(['🥺','💗','🙏','🌷'],18,'hearts'); if(msg)msg.textContent='We completely understand, Mdm… but our tiny apology button is still hoping for one more chance 🥺💗'; }; no.addEventListener('pointerenter',escape); no.addEventListener('pointerdown',e=>{e.preventDefault();escape()}); no.addEventListener('focus',()=>no.blur()); }

  const song=document.getElementById('theme-song'), gate=document.querySelector('[data-sound-gate]'), enter=document.querySelector('[data-enter-site]');
  function saveSong(){ if(song){ try{sessionStorage.setItem('sorrySongTime',String(song.currentTime)); sessionStorage.setItem('sorrySongPlaying',song.paused?'0':'1');}catch(e){} } }
  if(song){
    song.volume=.48;
    try{ const t=parseFloat(sessionStorage.getItem('sorrySongTime')||'0'); if(isFinite(t)&&t>0) song.currentTime=t; }catch(e){}
    const shouldPlay=sessionStorage.getItem('sorrySongPlaying')==='1';
    if(shouldPlay){ const p=song.play(); if(p&&p.catch)p.catch(()=>{}); }
    song.addEventListener('timeupdate',()=>{try{sessionStorage.setItem('sorrySongTime',String(song.currentTime));}catch(e){}});
    song.addEventListener('play',()=>{try{sessionStorage.setItem('sorrySongPlaying','1')}catch(e){}});
    song.addEventListener('pause',()=>{try{sessionStorage.setItem('sorrySongPlaying','0')}catch(e){}});
    window.addEventListener('pagehide',saveSong);
    document.querySelectorAll('a[href]').forEach(a=>a.addEventListener('click',saveSong));
  }
  if(enter) enter.addEventListener('click',()=>{if(song)song.play().catch(()=>{});if(gate)gate.classList.add('gone');emojiBurst(['💗','💌','🌹','💕','✨'],55,'hearts');setTimeout(()=>gate&&gate.remove(),600)});
})();
