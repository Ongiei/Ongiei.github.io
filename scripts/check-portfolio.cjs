/* Browser regression check for the static portfolio. Use an existing Playwright runtime. */
const fs=require('node:fs'), vm=require('node:vm'), assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright');
const site=process.env.PORTFOLIO_URL || 'http://127.0.0.1:8000';
const model={window:{}};vm.runInNewContext(fs.readFileSync('data.js','utf8'),model);
const projects=model.window.PORTFOLIO_PROJECTS;
(async()=>{
 fs.mkdirSync('output/playwright',{recursive:true});
 const browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{channel:'chrome'})});
 const report={routes:[],interactions:[],failures:[]};
 try{
  const routes=['index.html','work.html','about.html',...projects.map(p=>'project.html?slug='+p.slug)];
  for(const width of [1440,768,390,320]){
   const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
   const errors=[];page.on('pageerror',e=>errors.push(String(e)));page.on('response',r=>{if(r.status()>=400)errors.push(r.status()+' '+r.url())});
   for(const route of routes){
    errors.length=0;await page.goto(site+'/'+route,{waitUntil:'networkidle'});
    for(let y=0;y<await page.locator('body').evaluate(e=>e.scrollHeight);y+=700){await page.evaluate(y=>window.scrollTo(0,y),y);await page.waitForTimeout(40)}
    const facts=await page.evaluate(()=>({h1:document.querySelectorAll('h1').length,overflow:document.documentElement.scrollWidth>innerWidth+1,broken:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src),badAnchors:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.getAttribute('href').slice(1))).map(a=>a.getAttribute('href')),emptyCharts:[...document.querySelectorAll('.lf-card svg,.lf-preview svg')].filter(s=>!s.children.length).map(s=>s.id)}));
    report.routes.push({width,route,...facts,errors:[...errors]});if(facts.h1!==1||facts.overflow||facts.broken.length||facts.badAnchors.length||facts.emptyCharts.length||errors.length)report.failures.push({width,route,...facts,errors:[...errors]});
    await page.evaluate(()=>window.scrollTo(0,0));
    if([1440,390].includes(width))await page.screenshot({path:'output/playwright/'+(route.includes('?')?route.split('=')[1]:route.replace('.html',''))+'-'+width+'.png',fullPage:true});
   }
   await page.goto(site+'/work.html');
   for(const [category,count] of [['hardware',2],['data',3],['research',1],['architecture',3],['all',9]]){await page.locator('.filter[data-filter="'+category+'"]').click();assert.equal(await page.locator('.index-row').count(),count);assert.equal(await page.locator('.index-row[aria-pressed="true"]').count(),1);assert.equal(await page.locator('.filter[aria-pressed="true"]').count(),1)}
   await page.locator('.index-row[data-slug="spatial-storage"]').click();assert.match(await page.locator('.work-detail h2').innerText(),/Spatial Storage/);assert.match(page.url(),/slug=spatial-storage/);await page.reload();assert.match(await page.locator('.work-detail h2').innerText(),/Spatial Storage/);
   await page.locator('.index-row[data-slug="spatial-storage"]').focus();await page.keyboard.press('ArrowDown');assert.match(await page.locator('.work-detail h2').innerText(),/德州/);
   if(width<760){await page.locator('.nav-toggle').click();assert.equal(await page.locator('.nav-toggle').getAttribute('aria-expanded'),'true');await page.keyboard.press('Escape');assert.equal(await page.locator('.nav-toggle').getAttribute('aria-expanded'),'false')}
   report.interactions.push({width,filters:'pass',selection:'pass',reload:'pass',keyboard:'pass',menu:width<760?'pass':'desktop'});await page.close();
  }
  const page=await browser.newPage();await page.goto(site+'/project.html?slug=does-not-exist');assert.match(await page.locator('h1').innerText(),/作品索引/);report.interactions.push({unknownSlug:'pass'});await page.close();
 }finally{await browser.close();fs.writeFileSync('output/review/browser-report.json',JSON.stringify(report,null,2));console.log(JSON.stringify({routes:report.routes.length,interactions:report.interactions,failures:report.failures},null,2));}
 if(report.failures.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
