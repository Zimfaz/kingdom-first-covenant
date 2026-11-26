const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const out = process.argv[2];
  const pages = ['/','/yes','/signin','/whycheck','/idcheck','/checked','/basics','/faith','/exploring','/church','/story','/separated','/open','/questions','/q?sec=D','/secdone?sec=B','/home','/intros','/waiting','/me','/companion','/pause','/leave','/help','/talk','/report','/sent?k=talk','/scripture'];
  const bad = [];
  for (const [w, scheme, big] of [[320,'light',0],[390,'dark',0],[440,'light',0],[360,'light',1]]) {
    const ctx = await b.newContext({ viewport: { width: w, height: 2400 }, colorScheme: scheme, isMobile: true, hasTouch: true, deviceScaleFactor: 1 });
    const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
    for (const u of pages) {
      await p.goto('http://localhost:8791' + u, { waitUntil: 'networkidle' });
      if (big) await p.addStyleTag({ content: 'html{-webkit-text-size-adjust:130%;text-size-adjust:130%}' });
      // tick some options so states show
      if (u==='/talk') { await p.getByText('My family or someone else is pushing me to marry').click().catch(()=>{}); }
      if (u.startsWith('/q?')) { await p.getByText('Yes',{exact:true}).click().catch(()=>{}); await p.getByText('This matters a lot to me').click().catch(()=>{}); }
      if (u==='/leave') { await p.getByText('Delete my account').click().catch(()=>{}); }
      if (u==='/open') { await p.getByText('Never married').click().catch(()=>{}); await p.getByText('Read what my church teaches').click().catch(()=>{}); }
      if (u==='/basics') { await p.getByText('Woman',{exact:true}).click().catch(()=>{}); }
      await p.waitForTimeout(400);
      const m = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth }));
      await p.screenshot({ path: `${out}/${w}-${scheme}${big?'-big':''}${u.replace(/[/?=]/g,'_')}.png`, fullPage: true });
      if (m.sw > m.cw || errs.length) bad.push({ w, scheme, big, u, overflow: m.sw > m.cw, errs: errs.splice(0).map(e=>e.slice(0,90)) });
    }
    await ctx.close();
  }
  console.log(JSON.stringify(bad)); await b.close();
})();
