// smooth scroll
function scroll2(id){document.getElementById(id).scrollIntoView({behavior:'smooth'});}

// custom cursor
const cur=document.getElementById('cursor');
document.addEventListener('mousemove',e=>{
  cur.style.left=e.clientX+'px';
  cur.style.top=e.clientY+'px';
  spawnTrail(e.clientX,e.clientY);
});
document.querySelectorAll('button,a,.skill-pill,.project-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>cur.classList.add('big'));
  el.addEventListener('mouseleave',()=>cur.classList.remove('big'));
});

// trail
let trailTimer;
function spawnTrail(x,y){
  clearTimeout(trailTimer);
  const t=document.createElement('div');
  t.className='trail';
  t.style.left=x+'px';t.style.top=y+'px';
  document.body.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';},50);
  setTimeout(()=>t.remove(),650);
}

// reveal on scroll
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

// pixel character canvas
function drawChar(){
  const c=document.getElementById('charCanvas');
  if(!c)return;
  const g=c.getContext('2d');
  const px=[[0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,1,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,2,2,3,3,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,2,3,3,3,3,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,2,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,1,1,2,2,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,1,4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,1,1,4,4,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,4,4,4,4,4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,4,1,4,4,1,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,1,1,4,4,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,1,4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
  const col=['transparent','#c73a62','#ffb3ce','#ff85b3','#ffd6e7'];
  px.forEach((row,y)=>row.forEach((v,x)=>{
    if(v===0)return;
    g.fillStyle=col[v];
    g.fillRect(x,y,1,1);
  }));
}
drawChar();

// mini pixel art for project cards
function drawProj(id,colors){
  const c=document.getElementById(id);
  if(!c)return;
  const g=c.getContext('2d');
  const W=80,H=40;
  c.width=W;c.height=H;
  // random pixel landscape
  g.fillStyle=colors[0];g.fillRect(0,0,W,H);
  for(let i=0;i<W;i+=4){
    const h=8+Math.floor(Math.sin(i*.18)*6+Math.random()*4);
    g.fillStyle=colors[1];
    g.fillRect(i,H-h,4,h);
  }
  // stars/dots
  for(let i=0;i<12;i++){
    g.fillStyle=colors[2];
    g.fillRect(Math.floor(Math.random()*W),Math.floor(Math.random()*(H-12)),2,2);
  }
}
drawProj('proj1',['#fff0f5','#ffb3ce','#ff85b3']);
drawProj('proj2',['#ffd6e7','#e8527a','#ffb3ce']);
drawProj('proj3',['#ffeef5','#ff85b3','#c73a62']);