// Branded PDF of the faith and marriage questions, for pastors. Source: src/lib/questions.ts (live app wording).
// Run: node docs/faith-questions/build.cjs  (from the repo root) -> docs/faith-questions/Kingdom-First-Covenant-faith-questions.pdf
const fs=require('fs'),path=require('path');const {chromium}=require('playwright');
const root=path.resolve(__dirname,'../..');
const src=fs.readFileSync(path.join(root,'src/lib/questions.ts'),'utf8');
const arr=src.match(/export const SECTIONS: Section\[\] = (\[[\s\S]*?\n\]);/)[1];
const SECTIONS=eval(arr);
const fd='/home/claude/kingdom-first-life-app/marketing/video/fonts';
const face=(f,file,w,s)=>`@font-face{font-family:'${f}';src:url(data:font/${file.endsWith('otf')?'otf':'ttf'};base64,${fs.readFileSync(fd+'/'+file).toString('base64')});font-weight:${w};font-style:${s}}`;
const fonts=[face('CG','CormorantGaramond-Medium.ttf',500,'normal'),face('CG','CormorantGaramond-SemiBold.ttf',600,'normal'),face('CG','CormorantGaramond-Bold.ttf',700,'normal'),face('CG','CormorantGaramond-MediumItalic.ttf',500,'italic'),face('CG','CormorantGaramond-SemiBoldItalic.ttf',600,'italic'),
 face('IN','Inter-Regular.otf',400,'normal'),face('IN','Inter-Medium.otf',500,'normal'),face('IN','Inter-SemiBold.otf',600,'normal'),face('IN','Inter-Bold.otf',700,'normal')].join('');
const logo=fs.readFileSync(path.join(root,'deck/slides/cover.html'),'utf8').match(/<svg class="icon big"[\s\S]*?<\/svg>/)[0].replace('class="icon big"','class="logo"');
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const req={B:'Everyone answers this group before any introduction.',D:'Everyone answers this group before any introduction.'};
const intro={C:'Optional. Shown with the note: <i>Christians answer these differently, and your church’s teaching matters. Answer honestly; nothing is scored.</i>'};
let n=0;
const secs=SECTIONS.map((s,i)=>{const qs=s.qs.filter(q=>!(s.k==='C'&&false)).map((q,j)=>`<div class="q"><div class="qn">${j+1}</div><div class="qb"><h3>${esc(q.text)}</h3><ul>${q.options.map(o=>`<li>${esc(o)}</li>`).join('')}</ul>${q.note&&s.k!=='C'||q.note&&q.id!=='communion'?`<p class="note"><b>Note shown</b> ${esc(q.note)}</p>`:''}</div></div>`).join('');
 const tag=s.needed?'<span class="tag must">Answered by everyone</span>':'<span class="tag">Optional</span>';
 return `<section class="sec"><div class="sh"><span class="num">${i+1}</span><div><h2>${esc(s.name)}</h2>${tag}</div></div>${intro[s.k]?`<p class="lead">${intro[s.k]}</p>`:''}${qs}</section>`;}).join('');
const notes=[['Catholic','The Catholic Church teaches that a valid marriage lasts for life, so a civil divorce on its own doesn’t free someone to marry again in church. A declaration of nullity (often called an annulment) is the Church’s finding, after careful inquiry, that a true marriage bond never existed. It isn’t a “Catholic divorce”, and it doesn’t make children of that marriage illegitimate. This applies to anyone a Catholic marries, whether or not they’re Catholic. A widowed person is free to marry. If you’re unsure, your parish priest can help.'],
['Eastern Orthodox','The Orthodox Church holds that marriage is for life, and it grieves when a marriage breaks down. Out of care for its people (this is called economia), a bishop may give a church divorce and allow a second, or even a third, marriage, usually with a quieter service of repentance and hope. Each diocese has its own process, so your priest will guide you.'],
['Oriental Orthodox','Your church has its own teaching on marriage after divorce, and some of it is stricter than in other churches. Please ask your priest before you choose.'],
['Anglican','The Church of England teaches that marriage is for life. Since 2002 it has accepted that, in exceptional circumstances, a divorced person may marry in church while a former husband or wife is still living. The decision rests with the priest, who may also say no. A service of prayer and dedication after a civil wedding is another way. The Church in Wales, the Scottish Episcopal Church and other Anglican churches have their own guidance.'],
['Protestant and free churches','Churches differ. Many allow remarriage after divorce, some only where there was adultery or desertion, and a few not while a former husband or wife is living. Your church’s leaders can tell you how they see it.']];
const open=`<section class="sec"><div class="sh"><span class="num">6</span><div><h2>Who you’re open to marrying</h2><span class="tag must">Answered by everyone</span></div></div>
<p class="lead">A separate screen. Members tick at least one answer in each list, nothing is ticked for them, and nobody is told what they chose.</p>
<div class="q"><div class="qn">1</div><div class="qb"><h3>Who would you be open to marrying?</h3><p class="sub">Tick everyone you could marry with a clear conscience. You can change this at any time.</p><ul>${['Never married','Widowed','Divorced, with a declaration of nullity','Divorced, with church permission to marry again','Divorced','Declaration of nullity or permission in process'].map(o=>`<li>${o}</li>`).join('')}</ul></div></div>
<div class="q"><div class="qn">2</div><div class="qb"><h3>Which church families could you marry into?</h3><ul>${['Catholic','Eastern Orthodox','Oriental Orthodox (Coptic, Ethiopian, Eritrean, Armenian, Syriac)','Anglican','Protestant and free churches'].map(o=>`<li>${o}</li>`).join('')}</ul></div></div>
<h4 style="break-before:page">Read what my church teaches</h4><p class="lead small">Each member sees only the note for their own church, followed by: <i>Your church’s teaching and your priest’s or pastor’s guidance come first. This is only a short summary.</i></p>
<table>${notes.map(([c,t])=>`<tr><th>${c}</th><td>${t}</td></tr>`).join('')}</table></section>`;
const close=`<section class="ask"><h2>Questions we would value your view on</h2><ol>
<li>Is anything here unfair to your church, or worded in a way your people would find unfamiliar?</li>
<li>Is there a question you would want every couple to have talked about that is missing?</li>
<li>Is any question too personal to ask before two people have met?</li>
<li>Are the notes on marriage after divorce accurate for your church?</li></ol>
<p>Thank you for your counsel. Please reply to <b>support@kingdomfirstlife.com</b>.</p></section>`;
const html=`<!doctype html><meta charset="utf-8"><style>${fonts}
@page{size:A4;margin:16mm 16mm 18mm}
:root{--navy:#19203A;--wine:#7B2D3B;--wl:#E4A6A0;--gold:#CBAA6A;--cream:#F3EEE4;--ink:#2A1840;--muted:#645A73;--line:#E4DDEB;--sunk:#F3F0EA}
body{margin:0;font-family:IN,Arial,sans-serif;color:var(--ink);font-size:10pt;line-height:1.45}
.cover{background:var(--navy);color:var(--cream);border-radius:12px;padding:12mm 12mm 10mm}
.brand{display:flex;align-items:center;gap:16px}.logo{width:64px;height:64px;border-radius:14px;box-shadow:0 0 0 1px #3A4466}
.wm1{font-family:CG;font-weight:600;font-size:15pt;letter-spacing:5px}.wm2{font-family:CG;font-style:italic;font-weight:600;font-size:36pt;line-height:.95;color:var(--wl)}
.rule{width:56px;height:3px;background:var(--gold);border-radius:2px;margin:22px 0 14px}
.cover h1{font-family:CG;font-weight:600;font-size:30pt;line-height:1.1;margin:0 0 8px}
.cover .tl{font-family:CG;font-style:italic;font-weight:500;font-size:15pt;color:var(--cream);opacity:.92;margin:0}
.meta{font-size:8.5pt;letter-spacing:.14em;text-transform:uppercase;color:var(--wl);margin-top:16px;font-weight:600}
.intro{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin:16px 0 6px}
.intro div{background:var(--sunk);border-top:3px solid var(--wine);border-radius:8px;padding:10px 12px;font-size:9pt;color:var(--muted)}
.intro b{display:block;font-family:CG;font-size:13pt;color:var(--ink);margin-bottom:2px}
.sec{margin-top:18px}
.sh{display:flex;gap:12px;align-items:center;border-bottom:1.5px solid var(--wine);padding-bottom:6px;margin-bottom:8px;break-after:avoid}
.num{width:30px;height:30px;border-radius:50%;background:var(--navy);color:var(--cream);font-family:CG;font-weight:700;font-size:15pt;display:flex;align-items:center;justify-content:center;flex:none}
h2{font-family:CG;font-weight:600;font-size:19pt;margin:0;line-height:1.1;color:var(--ink)}
.tag{display:inline-block;font-size:7.5pt;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);background:#ECE7DF;border-radius:20px;padding:2px 8px;margin-top:3px}
.tag.must{background:var(--wine);color:#fff}
.lead{color:var(--muted);margin:4px 0 8px}.lead.small{font-size:9pt}
.q{display:flex;gap:10px;padding:8px 0;border-bottom:1px solid var(--line);break-inside:avoid}
.qn{font-family:CG;font-weight:700;font-size:13pt;color:var(--wine);width:16px;flex:none;line-height:1.2}
.qb{flex:1;min-width:0}
h3{font-family:CG;font-weight:700;font-size:13pt;line-height:1.2;margin:0 0 4px}
h4{font-family:CG;font-weight:700;font-size:13.5pt;margin:14px 0 2px;break-after:avoid}
.sub{font-style:italic;color:var(--muted);margin:0 0 4px;font-size:9pt}
ul{margin:0;padding:0;list-style:none;display:flex;flex-wrap:wrap;gap:4px 6px}
li{border:1px solid var(--line);background:#fff;border-radius:14px;padding:2px 9px;font-size:9pt}
.note{margin:6px 0 0;font-size:8.8pt;color:var(--ink);background:var(--sunk);border-left:3px solid var(--gold);padding:5px 9px;border-radius:0 6px 6px 0}
.note b{font-size:7.5pt;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-right:4px}
table{border-collapse:collapse;width:100%;margin-top:6px;font-size:8.8pt}
th{font-family:CG;font-weight:700;font-size:11.5pt;text-align:left;vertical-align:top;width:25%;padding:7px 10px 7px 0;color:var(--wine)}
td{padding:7px 0;color:var(--ink)}tr{border-top:1px solid var(--line);break-inside:avoid}
.ask{margin-top:22px;background:var(--navy);color:var(--cream);border-radius:10px;padding:16px 20px;break-inside:avoid}
.ask h2{color:var(--cream)}.ask ol{margin:8px 0;padding-left:18px}.ask li{border:0;background:none;padding:2px 0;font-size:10pt;display:list-item}
.ask p{margin:6px 0 0;color:#D9D2E6}
</style>
<div class="cover"><div class="brand">${logo}<div><div class="wm1">KINGDOM FIRST</div><div class="wm2">Covenant</div></div></div>
<div class="rule"></div><h1>The faith and marriage questions</h1><p class="tl">For marriage, and never one-to-one.</p>
<div class="meta">For pastors and priests · Draft · 26 November 2026</div></div>
<div class="intro"><div><b>Before any introduction</b>Every member answers these before anyone is introduced, exactly as they appear in the app today.</div><div><b>Nothing is scored</b>No scores or percentages. Anyone can choose “I’d rather not say” on any question.</div><div><b>Checked before use</b>A pastoral reviewer and a reader from each church check them. Your comments are very welcome.</div></div>
${secs}${open}${close}`;
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.setContent(html,{waitUntil:'load'});await p.evaluate(()=>document.fonts.ready);
await p.pdf({path:path.join(__dirname,'Kingdom-First-Covenant-faith-questions.pdf'),format:'A4',printBackground:true,displayHeaderFooter:true,headerTemplate:'<div></div>',
footerTemplate:'<div style="width:100%;font-size:7pt;color:#645A73;padding:0 16mm;display:flex;justify-content:space-between;font-family:Arial"><span>Kingdom First Covenant · Faith and marriage questions · Draft</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>',margin:{top:'16mm',bottom:'18mm',left:'16mm',right:'16mm'}});await b.close()})();
