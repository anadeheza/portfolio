function scroll2(id){document.getElementById(id).scrollIntoView({behavior:'smooth'});}

const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));

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
  const col=['transparent','#ec6553','#ffcbb3','#fe8e6e','#febfb4'];
  px.forEach((row,y)=>row.forEach((v,x)=>{
    if(v===0)return;
    g.fillStyle=col[v];
    g.fillRect(x,y,1,1);
  }));
}
drawChar();
