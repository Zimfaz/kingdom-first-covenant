const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const out=[];
 for (const [w,h] of [[320,568],[390,844],[440,956]]) for (const big of [0,1]) {
  const ctx = await b.newContext({ viewport:{width:w,height:h}, isMobile:true, hasTouch:true });
  const p = await ctx.newPage();
  for (const u of ['/home','/me','/intros']) { await p.goto('http://localhost:8791'+u,{waitUntil:'networkidle'});
   if (big) await p.addStyleTag({content:'html{-webkit-text-size-adjust:130%;text-size-adjust:130%}'});
   await p.waitForTimeout(300);
   const r = await p.evaluate(()=>{const t=[...document.querySelectorAll('[role=tab]')].map(e=>{const r=e.getBoundingClientRect();return [Math.round(r.top),Math.round(r.bottom),Math.round(r.height)]});return {t, sw:document.documentElement.scrollWidth}});
   out.push([w,big,u,JSON.stringify(r)]);
   if (u==='/me') await p.screenshot({path:`tab-${w}${big?'-big':''}.png`}); }
  await ctx.close(); }
 console.log(out.map(x=>x.join(' ')).join('\n')); await b.close(); })();
