const { chromium } = require('playwright');const fs=require('fs');
(async()=>{const dir=process.argv[2];const css=fs.readFileSync(dir+'/project/deck.css','utf8');const deck=JSON.parse(fs.readFileSync(dir+'/project/deck.json','utf8'));
const fd='/home/claude/kingdom-first-life-app/marketing/video/fonts';const ff=fs.readdirSync(fd).filter(x=>/Cormorant|Inter/.test(x)).map(x=>`@font-face{font-family:'${/Cormorant/i.test(x)?'Cormorant Garamond':'IBM Plex Sans'}';src:url(data:font/ttf;base64,${fs.readFileSync(fd+'/'+x).toString('base64')});font-weight:${/Bold/i.test(x)?700:/SemiBold/i.test(x)?600:/Medium/i.test(x)?500:400};font-style:${/Italic/i.test(x)?'italic':'normal'}}`).join('');
const b=await chromium.launch();const p=await b.newPage({viewport:{width:1920,height:1080}});
for(const id of deck.order){let h=fs.readFileSync(dir+`/project/slides/${id}.html`,'utf8').replace(/<aside>[\s\S]*?<\/aside>/,'');
await p.setContent(`<style>${ff}${css} html,body{margin:0} section{width:1920px;height:1080px;position:relative;overflow:hidden} .rise{animation:none} section p,section li,section h3{letter-spacing:.012em}</style>${h}`);await p.evaluate(()=>document.fonts.ready);
const r=await p.evaluate(()=>{const out=[];const lines=e=>{const cs=getComputedStyle(e);const lh=parseFloat(cs.lineHeight)||parseFloat(cs.fontSize)*1.2;return Math.round(e.getBoundingClientRect().height/lh)};
document.querySelectorAll('section p,section h2,section h3,section li').forEach(e=>{if(e.closest('.foot'))return;const t=e.textContent.trim();const n=lines(e);
 // orphan: last line single word
 const range=document.createRange();range.selectNodeContents(e);const rects=[...range.getClientRects()];let orphan=false;if(n>1&&rects.length){const last=rects[rects.length-1];const words=t.split(/\s+/);const lw=words[words.length-1];orphan=last.width<lw.length*22+30&&last.width<160}
 out.push({t:t.slice(0,40),n,orphan,ov:e.scrollWidth>e.clientWidth+1})});
// svg text vs shapes
document.querySelectorAll('svg text').forEach(t=>{const bb=t.getBBox();out.push({svg:t.textContent,w:Math.round(bb.width)})});
document.querySelectorAll('svg rect').forEach(t=>{if(t.getAttribute('rx')==='50')out.push({pill:Math.round(t.getBBox().width)})});
return out});
console.log('== '+id);for(const x of r){if(x.svg||x.pill)console.log(JSON.stringify(x));else console.log((x.orphan?'ORPHAN ':'')+(x.ov?'OVERFLOW ':'')+x.n+' | '+x.t)}
await p.screenshot({path:`prev-${dir}-${id}.png`});}
await b.close()})();
