(function () {
  'use strict';

  // Pure layout: the same relationships are used in both orientations.
  function layoutTree({people, rootId, expanded, orientation='vertical', sizes=new Map()}) {
    const byId=new Map(people.map(p=>[p.id,p])), children=new Map();
    for(const p of people)if(p.lineage&&p.treeParentId){if(!children.has(p.treeParentId))children.set(p.treeParentId,[]);children.get(p.treeParentId).push(p);}
    if(!byId.has(rootId))throw new Error('Unknown branch');
    const vertical=orientation==='vertical',gap=18,levelGap=34,pad=18,nodes=[],edges=[],levelSizes=[];
    // Each subtree reserves its real cross-axis footprint. Taller names and
    // multiple spouses cannot collide with siblings or the following generation.
    function visit(id,depth,path){
      if(path.has(id))throw new Error('Circular tree connection');
      const p=byId.get(id),size=sizes.get(id)||{width:224,height:112};
      const n={id,p,depth,x:0,y:0,width:size.width,height:size.height};nodes.push(n);
      levelSizes[depth]=Math.max(levelSizes[depth]||0,vertical?n.height:n.width);
      const next=new Set([...path,id]),shown=expanded.has(id)?children.get(id)||[]:[];
      const branches=shown.map(c=>{edges.push({from:id,to:c.id});return visit(c.id,depth+1,next);});
      const childrenSpan=branches.reduce((sum,b)=>sum+b.span,0)+Math.max(0,branches.length-1)*gap;
      return {n,branches,childrenSpan,span:Math.max(vertical?n.width:n.height,childrenSpan)};
    }
    const tree=visit(rootId,0,new Set()),levels=[];
    levelSizes.forEach((size,i)=>{levels[i]=i?levels[i-1]+levelSizes[i-1]+levelGap:pad;});
    function place(branch,start){
      const n=branch.n,cross=start+(branch.span-(vertical?n.width:n.height))/2;
      n.levelEnd=levels[n.depth]+levelSizes[n.depth];
      if(vertical){n.x=cross;n.y=levels[n.depth];}else{n.x=levels[n.depth];n.y=cross;}
      let childStart=start+(branch.span-branch.childrenSpan)/2;
      for(const child of branch.branches){place(child,childStart);childStart+=child.span+gap;}
    }
    place(tree,pad);
    return {nodes,edges,width:Math.max(...nodes.map(n=>n.x+n.width))+pad,height:Math.max(...nodes.map(n=>n.y+n.height))+pad,maxDepth:levelSizes.length-1};
  }
  function edgePath(a,b,orientation){
    if(orientation==='vertical'){
      const x1=a.x+a.width/2,y1=a.y+a.height,x2=b.x+b.width/2,y2=b.y,exit=a.levelEnd??y1,m=(exit+y2)/2;
      return `M${x1} ${y1} L${x1} ${exit} C${x1} ${m},${x2} ${m},${x2} ${y2}`;
    }
    const x1=a.x+a.width,y1=a.y+a.height/2,x2=b.x,y2=b.y+b.height/2,exit=a.levelEnd??x1,m=(exit+x2)/2;
    return `M${x1} ${y1} L${exit} ${y1} C${m} ${y1},${m} ${y2},${x2} ${y2}`;
  }
  const edgeKind=p=>p.gender==='Female'?'female':p.gender==='Male'?'male':'unknown';
  if(typeof module==='object'&&module.exports){module.exports={layoutTree,edgeKind,edgePath};return;}

  const people=window.FAMILY_DATA||[],metadata=window.FAMILY_METADATA||{},byId=new Map(people.map(p=>[p.id,p]));
  const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
  if(!people.length||!byId.has('musu')){$('#tree-canvas').textContent='Family data could not be loaded. Please upload data.js alongside index.html.';return;}
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const icons={chart:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 8h10M12 8v4M7 16v-4h10v4M12 12v4"/>',edit:'<path d="m16 3 5 5-12 12-6 1 1-6zM14 5l5 5"/>',tree:'<path d="M12 5v5M5 15v-5h14v5M12 10v5"/><rect x="9" y="2" width="6" height="4" rx="1"/><rect x="2" y="16" width="6" height="5" rx="1"/><rect x="9" y="16" width="6" height="5" rx="1"/><rect x="16" y="16" width="6" height="5" rx="1"/>',people:'<circle cx="9" cy="7" r="3"/><path d="M3 21v-4a6 6 0 0 1 12 0v4M16 4a3 3 0 0 1 0 6M21 21v-4a5 5 0 0 0-4-5"/>',book:'<path d="M12 5v16M3 3c4 0 6 0 9 2 3-2 5-2 9-2v16c-4 0-6 0-9 2-3-2-5-2-9-2z"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7v.1"/>',search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/>',list:'<path d="M8 5h13M8 12h13M8 19h13M3 5h.1M3 12h.1M3 19h.1"/>',home:'<path d="m3 11 9-8 9 8M5 9v12h14V9M9 21v-7h6v7"/>',link:'<path d="m10 13 4-4M8 16l-2 2a4 4 0 0 1-6-6l5-5a4 4 0 0 1 6 0m2 1 2-2a4 4 0 0 1 6 6l-5 5a4 4 0 0 1-6 0" transform="translate(1 0)"/>',fit:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m8 0h5v-5"/>',download:'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>'};
  const icon=k=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[k]||''}</svg>`;
  $$('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));
  const treeChildren=new Map(),allChildren=new Map();
  for(const p of people){if(p.lineage&&p.treeParentId){if(!treeChildren.has(p.treeParentId))treeChildren.set(p.treeParentId,[]);treeChildren.get(p.treeParentId).push(p);}for(const id of p.parentIds){if(!allChildren.has(id))allChildren.set(id,[]);allChildren.get(id).push(p);}}
  const kids=id=>treeChildren.get(id)||[],primary=p=>p.lineage?p:byId.get(p.spouseIds.find(id=>byId.get(id)?.lineage))||p;
  const displayName=p=>(p.lifeStatus==='Deceased'?'स्व. ':'')+p.name;
  const pathTo=p=>{const path=[p],seen=new Set([p.id]);while(p.treeParentId&&byId.has(p.treeParentId)&&!seen.has(p.treeParentId)){p=byId.get(p.treeParentId);seen.add(p.id);path.unshift(p);}return path;};
  const branchIds=['musu','hari-prasad','damodar','chakrapani','churamani','rameshwar','khadanand','bhakti-ram','prajapati','jayapati','kamalapati','maheshwar','motilal','ratnakhar','dhanapati','dandapani','khim-prasad','jhyapu','kriparam'];
  const tones={'motilal':'#4f8269','ratnakhar':'#a68b55','dhanapati':'#6b88a0','dandapani':'#9a809c','khim-prasad':'#b0805d','kamalapati':'#739077','maheshwar':'#688c86'};
  const tone=p=>pathTo(primary(p)).reverse().map(q=>tones[q.id]).find(Boolean)||'#7d9678';
  let view='tree',scopeId='musu',mode='chart',orientation='vertical',depth='2',expanded=new Set(),selected='musu',profileTab='family',zoom=1,layout,offsetX=0,photos={},lastFocus=null,lastRoute='',toastTimer;
  try{photos=JSON.parse(localStorage.getItem('bhusal-demo-photos-v1')||'{}')||{};const pref=JSON.parse(localStorage.getItem('bhusal-ui-v3')||'{}');if(['vertical','horizontal'].includes(pref.orientation))orientation=pref.orientation;}catch{}
  const localPhoto=id=>typeof photos[id]==='string'&&/^data:image\/(jpeg|png|webp);base64,/.test(photos[id])?photos[id]:null;
  const photo=id=>localPhoto(id)||(/^\.\/photos\/[a-zA-Z0-9_.-]+\.(jpg|jpeg|png|webp)$/i.test(byId.get(id)?.photo||'')?byId.get(id).photo:null);
  const avatar=p=>`<span class="avatar ${p.gender==='Female'?'female':p.gender==='Unknown'?'unknown':''}">${photo(p.id)?`<img src="${esc(photo(p.id))}" alt="${esc(p.english)}" loading="lazy">`:esc(Array.from(p.name)[0])}</span>`;
  const reviewLabel=p=>p.review==='Confirmed'?'नाम पुष्टि भएको':p.review==='Needs clarification'?'स्पष्टीकरण बाँकी':'परिवारको विवरण';
  function toast(text){clearTimeout(toastTimer);$('#toast').textContent=text;$('#toast').hidden=false;toastTimer=setTimeout(()=>$('#toast').hidden=true,5000);}
  function expandDepth(){expanded=new Set();const max=depth==='all'?100:Number(depth)||2;function visit(id,d){if(d<max-1&&kids(id).length){expanded.add(id);kids(id).forEach(p=>visit(p.id,d+1));}}visit(scopeId,0);}
  function writeRoute(push=false){const q=new URLSearchParams({view,branch:scopeId,mode,layout:orientation,depth:depth==='custom'?'2':depth});if($('#profile-dialog').open)q.set('person',selected);const hash='#'+q.toString();if(location.hash!==hash)history[push?'pushState':'replaceState'](null,'',hash);lastRoute=location.hash;}
  function syncScope(){const p=byId.get(scopeId);$('#branch-title').textContent=scopeId==='musu'?'सम्पूर्ण वंश':p.name+'को शाखा';const select=$('#branch-select');if(![...select.options].some(o=>o.value===scopeId)){const ids=[...branchIds];if(!ids.includes(scopeId))ids.push(scopeId);select.innerHTML=ids.map(id=>`<option value="${esc(id)}">${id==='musu'?'मुसुका सन्तान':esc(byId.get(id).name)}</option>`).join('');}select.value=scopeId;$('#ancestor-path').hidden=pathTo(p).length===1;$('#ancestor-path').innerHTML=pathTo(p).map(q=>`<button data-scope="${q.id}" aria-label="Focus on ${esc(q.english)}">${esc(q.name)}</button>`).join('<span aria-hidden="true">›</span>');$('#orientation').value=orientation;$('#depth').value=depth;$('#tree-count').textContent=`देखाइएको पुस्ता ${p.generation}–${p.generation+layout.maxDepth}`;}
  const spouseLinks=p=>p.spouseIds.map(id=>{const partner=byId.get(id);return `<button class="partner-link" data-person="${id}" aria-label="जीवनसाथी ${esc(displayName(partner))}को विवरण" title="${esc(displayName(partner))}को परिवार र तस्बिर">+ ${esc(displayName(partner))}</button>`;}).join('');
  function nodeHTML(n,measure=false){const p=n.p,cc=kids(p.id);return `<article class="person-node gender-${edgeKind(p)} ${p.id===scopeId?'root':''} ${selected===p.id?'selected':''}" style="left:${n.x}px;top:${n.y}px;${measure?'':`width:${n.width}px;height:${n.height}px;`}--tone:${tone(p)}" data-node="${p.id}"><div class="person-body"><button class="person-main" data-person="${p.id}" aria-label="${esc(displayName(p))} · ${p.gender==='Female'?'महिला':p.gender==='Male'?'पुरुष':'लिङ्ग नखुलेको'} · विवरण"><span class="node-copy"><strong lang="ne">${esc(displayName(p))}</strong><span class="english">${esc(p.english)}</span></span></button><div class="node-partners">${spouseLinks(p)|| (p.id==='musu'?'<span class="ancestor-label">मूल पुर्खा</span>':'')}</div></div><div class="node-foot"><span class="node-generation">पुस्ता ${p.generation}${p.gender==='Female'?'<span class="node-gender">छोरी</span>':''}${p.review==='Needs clarification'?'<span title="Needs clarification">?</span>':''}</span>${cc.length?`<button class="expand-node" data-expand="${p.id}" aria-expanded="${expanded.has(p.id)}" aria-label="${expanded.has(p.id)?'Collapse':'Expand'} ${esc(p.english)}’s ${cc.length} children"><b aria-hidden="true">${expanded.has(p.id)?'−':'+'}</b><span><strong class="child-count">${cc.length}</strong> सन्तति</span></button>`:'<span class="node-leaf">विवरण ↗</span>'}<button class="request-node" data-request="${p.id}" aria-label="Request an addition or correction for ${esc(p.english)}" title="थप्ने / सच्याउने अनुरोध">${icon('edit')}</button></div></article>`;}
  const cardSizeCache=new Map();
  const cardSizeMode=()=>window.matchMedia('(max-width:700px)').matches?'phone':'desktop';
  function measureCards(nodes){
    const prefix=cardSizeMode(),sizes=new Map(),missing=[];
    for(const n of nodes){const saved=cardSizeCache.get(prefix+':'+n.id);if(saved)sizes.set(n.id,saved);else missing.push(n);}
    if(missing.length){
      const probe=document.createElement('div');probe.className='tree-measure';
      probe.setAttribute('aria-hidden','true');probe.inert=true;
      probe.innerHTML=missing.map(n=>nodeHTML(n,true)).join('');document.body.append(probe);
      try{for(const card of probe.children){
        const rect=card.getBoundingClientRect(),size={width:Math.ceil(rect.width),height:Math.ceil(rect.height)};
        sizes.set(card.dataset.node,size);cardSizeCache.set(prefix+':'+card.dataset.node,size);
      }}finally{probe.remove();}
    }
    return sizes;
  }
  function renderTree(){
    const visible=layoutTree({people,rootId:scopeId,expanded,orientation});
    layout=layoutTree({people,rootId:scopeId,expanded,orientation,sizes:measureCards(visible.nodes)});
    const pos=new Map(layout.nodes.map(n=>[n.id,n]));
    const paths=layout.edges.map(e=>{const a=pos.get(e.from),b=pos.get(e.to);return `<path class="connection-${edgeKind(b.p)}" data-child="${b.p.id}" d="${edgePath(a,b,orientation)}"/>`;}).join('');
    $('#tree-canvas').innerHTML=`<svg class="tree-edges" width="${layout.width}" height="${layout.height}" aria-hidden="true">${paths}</svg>`+layout.nodes.map(n=>nodeHTML(n)).join('');
    applyZoom();renderOutline();syncScope();
  }
  function applyZoom(){if(!layout)return;const v=$('#tree-viewport'),canvas=$('#tree-canvas'),sizer=$('#tree-sizer');offsetX=Math.max(0,(v.clientWidth-layout.width*zoom)/2);canvas.style.width=layout.width+'px';canvas.style.height=layout.height+'px';canvas.style.transform=`scale(${zoom})`;canvas.style.left=offsetX+'px';sizer.style.width=Math.max(v.clientWidth,layout.width*zoom)+'px';sizer.style.height=Math.max(v.clientHeight,layout.height*zoom)+'px';$('#zoom-reset').textContent=Math.round(zoom*100)+'%';$('#zoom-out').disabled=zoom<=.8;$('#zoom-in').disabled=zoom>=1.6;}
  function setZoom(next){const v=$('#tree-viewport'),ax=v.clientWidth/2,ay=v.clientHeight/2,px=(v.scrollLeft+ax-offsetX)/zoom,py=(v.scrollTop+ay)/zoom;zoom=Math.max(.8,Math.min(1.6,next));applyZoom();v.scrollLeft=px*zoom+offsetX-ax;v.scrollTop=py*zoom-ay;}
  function centrePerson(id,top=false){if(mode!=='chart')return;const n=layout.nodes.find(p=>p.id===id);if(!n)return;const v=$('#tree-viewport');v.scrollLeft=Math.max(0,(n.x+n.width/2)*zoom+offsetX-v.clientWidth/2);v.scrollTop=top?0:Math.max(0,(n.y+n.height/2)*zoom-v.clientHeight/2);}
  function renderOutline(){function row(id,d){const p=byId.get(id),cc=kids(id),spouses=p.spouseIds.map(s=>byId.get(s).name).join(' · ');return `<div role="listitem"><div class="outline-row gender-${edgeKind(p)}"><button class="outline-toggle ${cc.length?'':'empty'}" ${cc.length?`data-expand="${id}" aria-expanded="${expanded.has(id)}" aria-label="${expanded.has(id)?'Collapse':'Expand'} ${esc(p.english)}’s children"`:'disabled aria-hidden="true"'}>${cc.length?(expanded.has(id)?'−':'+'):'·'}</button><div class="outline-person-group"><button class="outline-person" data-person="${id}" aria-label="${esc(displayName(p))} · ${p.gender==='Female'?'महिला':p.gender==='Male'?'पुरुष':'लिङ्ग नखुलेको'} · विवरण">${avatar(p)}<span><strong>${esc(displayName(p))}</strong><small>${esc(p.english)}</small></span></button><div class="outline-partners">${spouseLinks(p)}</div></div><span class="outline-meta">पुस्ता ${p.generation}${p.gender==='Female'?'<span class="node-gender">छोरी</span>':''}${p.review==='Needs clarification'?'<small>पुष्टि बाँकी</small>':''}</span></div>${cc.length&&expanded.has(id)?`<div role="list" class="outline-group ${d>=3?'deep':''}">${cc.map(c=>row(c.id,d+1)).join('')}</div>`:''}</div>`;}$('#outline-list').innerHTML=`<div role="list" class="outline-group top-level">${row(scopeId,0)}</div>`;}
  function toggleBranch(id){if(!kids(id).length)return;const v=$('#tree-viewport'),old=layout.nodes.find(n=>n.id===id),anchor=old?{x:(old.x+old.width/2)*zoom+offsetX-v.scrollLeft,y:(old.y+old.height/2)*zoom-v.scrollTop}:null;expanded.has(id)?expanded.delete(id):expanded.add(id);depth='custom';renderTree();if(anchor){const n=layout.nodes.find(n=>n.id===id);v.scrollLeft=(n.x+n.width/2)*zoom+offsetX-anchor.x;v.scrollTop=(n.y+n.height/2)*zoom-anchor.y;}const selector=mode==='chart'?`#tree-canvas [data-expand="${id}"]`:`#outline-list [data-expand="${id}"]`;$(selector)?.focus({preventScroll:true});}
  function setMode(next,updateUrl=true){mode=next;$('.zoom-tools').hidden=mode!=='chart';$('#chart-panel').hidden=mode!=='chart';$('#outline-panel').hidden=mode!=='outline';$$('[data-mode]').forEach(b=>{b.setAttribute('aria-selected',String(b.dataset.mode===mode));b.tabIndex=b.dataset.mode===mode?0:-1;});$('.layout-controls').hidden=mode==='outline';if(mode==='chart')applyZoom();if(updateUrl)writeRoute();}
  function setView(next,push=true,updateUrl=true){if(!['tree','chronicle','people','news','requests','about'].includes(next))return;closeProfile(false);view=next;document.body.classList.toggle('tree-active',view==='tree');document.body.classList.toggle('pdf-active',view==='chronicle');if(view!=='tree')setFocus(false);for(const name of ['tree','chronicle','people','news','requests','about'])$('#'+name+'-view').hidden=name!==view;$$('[data-view]').forEach(b=>{const active=b.dataset.view===view;b.classList.toggle('active',active&&b.classList.contains('rail-link'));if(active)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});if(view==='people')renderDirectory();if(view==='tree')applyZoom();hideSearch();if(updateUrl)writeRoute(push);window.scrollTo({top:0,behavior:'instant'});}
  function focusBranch(id,{push=true,highlight=id}={}){if(!byId.has(id))return;const person=primary(byId.get(id));if(!person?.lineage)return;closeProfile(false);scopeId=person.id;selected=highlight;zoom=1;depth=depth==='all'?'2':depth==='custom'?'2':depth;expandDepth();setView('tree',false,false);renderTree();writeRoute(push);centrePerson(scopeId,true);}
  function showInTree(id){const p=primary(byId.get(id)),parent=p.treeParentId&&byId.get(p.treeParentId);focusBranch(parent?parent.id:p.id,{highlight:p.id});if(kids(p.id).length)expanded.add(p.id);renderTree();centrePerson(p.id);writeRoute();}
  function home(){depth='2';$('#search').value='';focusBranch('musu');}
  const relative=(p,label)=>`<button class="relative-button" data-person="${p.id}">${avatar(p)}<span><strong>${esc(displayName(p))}</strong><small>${esc(label)} · ${esc(p.english)}</small></span><span aria-hidden="true">›</span></button>`;
  function renderProfile(){
    const p=byId.get(selected),children=allChildren.get(p.id)||[],siblings=people.filter(q=>q.id!==p.id&&p.parentIds.some(id=>q.parentIds.includes(id))),status={Unknown:'जानकारी नभएको · Unknown',Living:'जीवित · Living',Deceased:'स्वर्गीय · Deceased'}[p.lifeStatus]||p.lifeStatus;
    const parentDetail=(id,detail)=>id&&byId.has(id)?displayName(byId.get(id)):(detail&&/[^.\s…]/.test(detail)?detail:'नाम नखुलेको');
    const parentsPanel=!p.lineage?`<section class="profile-section natal-family"><h3>${p.gender==='Female'?'माइती परिवार':'मातापिता'}</h3><dl class="profile-dl"><dt>पिता</dt><dd>${esc(parentDetail(p.fatherId,p.fatherDetails))}</dd><dt>माता</dt><dd>${esc(parentDetail(p.motherId,p.motherDetails))}</dd></dl><button class="button parent-request" data-request="${p.id}" data-request-kind="parent-details">मातापिताको विवरण थप्ने / सच्याउने</button></section>`:'';
    const family=`${parentsPanel}${p.parentIds.length?`<section class="profile-section"><h3>मातापिता · Parents</h3>${p.parentIds.map(id=>relative(byId.get(id),id===p.fatherId?'Father':id===p.motherId?'Mother':'Parent')).join('')}</section>`:''}${p.spouseIds.length?`<section class="profile-section"><h3>जीवनसाथी · ${p.spouseIds.length>1?'Spouses':'Spouse'}</h3>${p.spouseIds.map(id=>relative(byId.get(id),'Spouse')).join('')}</section>`:''}<section class="profile-section"><h3>सन्तति <strong class="profile-child-count">${children.length}</strong></h3>${children.length?children.map(q=>relative(q,q.gender==='Female'?'Daughter':q.gender==='Male'?'Son':'Child')).join(''):`<p class="profile-empty">${p.noChildrenRecordedExplicitly?'निःसन्तान उल्लेख छ।':'यहाँ सन्ततिको विवरण लेखिएको छैन। This does not establish that the person has no children.'}</p>`}</section>${siblings.length?`<section class="profile-section"><h3>दाजुभाइ, दिदीबहिनी · Siblings</h3>${siblings.map(q=>relative(q,q.gender==='Female'?'Sister':q.gender==='Male'?'Brother':'Sibling')).join('')}</section>`:''}`;
    const detail=`<div class="photo-controls"><button class="button" data-photo>${photo(p.id)?'Change photo':'Add photo'}</button>${localPhoto(p.id)?'<button class="button" data-remove-photo>Remove browser photo</button>':''}</div><p class="photo-caption">यहाँ राखिएको तस्बिर यस ब्राउजरमा मात्र सुरक्षित हुन्छ।<br>Photo previews are saved only in this browser.</p><dl class="profile-dl"><dt>लिङ्ग</dt><dd>${p.gender==='Female'?'महिला':p.gender==='Male'?'पुरुष':'नखुलेको'}</dd><dt>स्थिति</dt><dd>${esc(status)}</dd><dt>पुस्ता</dt><dd>${p.generation}</dd><dt>पिता</dt><dd>${esc(parentDetail(p.fatherId,p.fatherDetails))}</dd><dt>माता</dt><dd>${esc(parentDetail(p.motherId,p.motherDetails))}</dd><dt>शाखा</dt><dd>${esc(p.branch)}</dd>${p.birthAD?`<dt>जन्म (AD)</dt><dd>${esc(p.birthAD)}</dd>`:''}${p.birthBS?`<dt>जन्म (BS)</dt><dd>${esc(p.birthBS)}</dd>`:''}${p.deathAD?`<dt>निधन (AD)</dt><dd>${esc(p.deathAD)}</dd>`:''}${p.deathBS?`<dt>निधन (BS)</dt><dd>${esc(p.deathBS)}</dd>`:''}${p.place?`<dt>स्थान</dt><dd>${esc(p.place)}</dd>`:''}</dl>${p.notes?`<p class="profile-note">${esc(p.notes)}</p>`:''}`;
    $('#profile-content').innerHTML=`<div class="dialog-top"><span>पुस्ता ${p.generation}</span><button class="icon-button" data-close-profile aria-label="Close profile">${icon('close')}</button></div><div class="profile-hero">${avatar(p)}<div><h2 id="profile-name">${esc(displayName(p))}</h2><p>${esc(p.english)}</p><div class="profile-tags">${p.review==='Needs clarification'?'<span class="tag review">पुष्टि बाँकी</span>':''}${p.lifeStatus==='Deceased'?'<span class="tag deceased">स्वर्गीय</span>':''}<span class="tag">${p.lineage?'वंशका सदस्य':'जीवनसाथी'}</span></div></div></div><div class="profile-tabs" role="tablist" aria-label="Person information">${[['family','परिवार'],['details','विवरण / तस्बिर']].map(([id,label])=>`<button role="tab" id="profile-tab-${id}" aria-selected="${profileTab===id}" aria-controls="profile-pane-${id}" tabindex="${profileTab===id?0:-1}" data-profile-tab="${id}">${label}</button>`).join('')}</div>${[['family',family],['details',detail]].map(([id,html])=>`<div id="profile-pane-${id}" class="profile-pane" role="tabpanel" aria-labelledby="profile-tab-${id}" ${profileTab===id?'':'hidden'}>${html}</div>`).join('')}<div class="profile-actions"><button class="button" data-request="${p.id}" title="Suggest an addition or correction">${icon('edit')}अनुरोध</button><button class="button primary" data-show-tree="${p.id}">${icon('tree')}वृक्षमा हेर्नुहोस्</button>${kids(primary(p).id).length?`<button class="button" data-scope="${primary(p).id}">यो शाखा ${icon('arrow')}</button>`:''}</div>`;
  }
  function showProfile(id,push=true){if(!byId.has(id))return;const dialog=$('#profile-dialog');if(!dialog.open)lastFocus=document.activeElement;selected=id;profileTab='family';renderProfile();hideSearch();if(!dialog.open)dialog.showModal();document.body.classList.add('profile-open');dialog.scrollTop=0;dialog.querySelector('[data-close-profile]').focus({preventScroll:true});if(view==='tree')renderTree();if(push)writeRoute(true);}
  function closeProfile(updateUrl=true){const dialog=$('#profile-dialog');if(!dialog.open)return;dialog.close();document.body.classList.remove('profile-open');if(lastFocus?.isConnected)lastFocus.focus({preventScroll:true});else $(`[data-person="${selected}"]`)?.focus({preventScroll:true});if(updateUrl)writeRoute();}
  function selectProfileTab(tab){profileTab=tab;renderProfile();$(`[data-profile-tab="${tab}"]`).focus({preventScroll:true});}
  const matches=(p,q)=>(p.name+' '+p.english+' '+p.id).toLocaleLowerCase().includes(q.trim().toLocaleLowerCase());
  function renderDirectory(){const q=$('#search').value,filter=$('#people-filter').value,gen=$('#generation-filter').value;const list=people.filter(p=>matches(p,q)&&(gen==='all'||p.generation===Number(gen))&&(filter==='all'||filter==='lineage'&&p.lineage||filter==='partners'&&!p.lineage||filter==='unclear'&&p.review==='Needs clarification'||filter==='deceased'&&p.lifeStatus==='Deceased'));$('#directory-grid').innerHTML=list.map(p=>`<button class="directory-card" data-person="${p.id}">${avatar(p)}<span><strong>${esc(displayName(p))}</strong><small>${esc(p.english)}</small><em>पुस्ता ${p.generation} · ${esc(p.branch)}${p.review==='Needs clarification'?' · पुष्टि बाँकी':''}</em></span></button>`).join('');$('#directory-count').textContent='';$('#directory-empty').hidden=!!list.length;}
  function hideSearch(closePanel=true){if(closePanel){$('.masthead').classList.remove('search-open');$('[data-toggle-search]').setAttribute('aria-expanded','false');}$('#search-results').hidden=true;$('#search').setAttribute('aria-expanded','false');}
  function searchNames(){const q=$('#search').value.trim();if(view==='people'){renderDirectory();hideSearch(false);return;}if(!q){hideSearch(false);return;}const list=people.filter(p=>matches(p,q));$('#search-results').innerHTML=list.length?list.slice(0,10).map(p=>`<button data-person="${p.id}">${avatar(p)}<span><strong>${esc(displayName(p))}</strong><small>${esc(p.english)} · पुस्ता ${p.generation}</small></span></button>`).join(''):'<p>No matching name. Try another spelling.</p>';$('#search-results').hidden=false;$('#search').setAttribute('aria-expanded','true');}
  async function copyLink(){writeRoute();try{await navigator.clipboard.writeText(location.href);toast('शाखाको लिंक कपी भयो · Link copied.');}catch{toast('Copy the address from your browser’s address bar to share this branch.');}}
  function readRoute(){const q=new URLSearchParams(location.hash.slice(1));const requestedView=q.get('view'),requestedBranch=q.get('branch'),requestedMode=q.get('mode'),requestedLayout=q.get('layout'),requestedDepth=q.get('depth'),requestedPerson=q.get('person');if(byId.get(requestedBranch)?.lineage)scopeId=requestedBranch;else scopeId='musu';view=['tree','chronicle','people','news','requests','about'].includes(requestedView)?requestedView:'tree';mode=requestedMode==='outline'?'outline':'chart';if(['vertical','horizontal'].includes(requestedLayout))orientation=requestedLayout;depth=['2','3','4','all'].includes(requestedDepth)?requestedDepth:'2';selected=byId.has(requestedPerson)?requestedPerson:scopeId;zoom=1;expandDepth();setView(view,false,false);renderTree();setMode(mode,false);if(byId.has(requestedPerson))showProfile(requestedPerson,false);writeRoute();centrePerson(scopeId,true);}

  document.addEventListener('click',e=>{const hit=selector=>e.target.closest(selector);let b;
    if(hit('[data-toggle-search]')){const opened=$('.masthead').classList.toggle('search-open');$('[data-toggle-search]').setAttribute('aria-expanded',String(opened));if(opened)$('#search').focus();else hideSearch();return;}
    if(hit('.skip-link')){e.preventDefault();$('#main').focus();return;}
    if((b=hit('[data-home]'))){home();return;}
    if((b=hit('[data-view]'))){setView(b.dataset.view);return;}
    if((b=hit('[data-mode]'))){setMode(b.dataset.mode);return;}
    if((b=hit('[data-scope]'))){focusBranch(b.dataset.scope);return;}
    if((b=hit('[data-expand]'))){toggleBranch(b.dataset.expand);return;}
    if((b=hit('[data-person]'))){showProfile(b.dataset.person);return;}
    if((b=hit('[data-profile-tab]'))){selectProfileTab(b.dataset.profileTab);return;}
    if((b=hit('[data-close-profile]'))){closeProfile();return;}
    if((b=hit('[data-show-tree]'))){showInTree(b.dataset.showTree);return;}
    if(hit('[data-photo]')){$('#photo-input').click();return;}
    if(hit('[data-remove-photo]')){delete photos[selected];savePhotos();renderProfile();renderTree();renderDirectory();toast('Browser photo removed.');return;}
    if(!hit('.global-search'))hideSearch();
  });
  $('#branch-select').addEventListener('change',e=>focusBranch(e.target.value));
  $('#orientation').addEventListener('change',e=>{orientation=e.target.value;zoom=1;renderTree();centrePerson(scopeId,true);try{localStorage.setItem('bhusal-ui-v3',JSON.stringify({orientation}));}catch{}writeRoute();});
  $('#depth').addEventListener('change',e=>{if(e.target.value==='custom')return;depth=e.target.value;expandDepth();renderTree();centrePerson(scopeId,true);writeRoute();if(depth==='all')toast('All recorded descendants opened. Use Outline for a compact reading view.');});
  $('#zoom-out').addEventListener('click',()=>setZoom(Math.round((zoom-.1)*100)/100));
  $('#zoom-in').addEventListener('click',()=>setZoom(Math.round((zoom+.1)*100)/100));
  $('#zoom-reset').addEventListener('click',()=>setZoom(1));
  $('#fit-tree').addEventListener('click',()=>{const v=$('#tree-viewport'),fit=Math.min(1,(v.clientWidth-10)/layout.width,(v.clientHeight-10)/layout.height);setZoom(fit);centrePerson(scopeId,true);if(fit<.8)toast('Names stay readable. Scroll for more branches, or switch to Outline.');});
  function setFocus(active){document.body.classList.toggle('tree-focus',active);$('#focus-tree').setAttribute('aria-pressed',String(active));$('#focus-tree').setAttribute('aria-label',active?'सामान्य दृश्यमा फर्कनुहोस्':'वृक्ष फैलाउनुहोस्');$('#focus-tree').title=active?'सामान्य दृश्यमा फर्कनुहोस्':'वृक्ष फैलाउनुहोस्';requestAnimationFrame(applyZoom);}
  $('#focus-tree').addEventListener('click',()=>setFocus(!document.body.classList.contains('tree-focus')));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#profile-dialog').open&&document.body.classList.contains('tree-focus'))setFocus(false);});
  $('#share-branch').addEventListener('click',copyLink);
  $('#search').addEventListener('input',searchNames);
  $('#search').addEventListener('keydown',e=>{if(e.key==='Escape')hideSearch();if(e.key==='ArrowDown'&&!$('#search-results').hidden){$('#search-results button')?.focus();e.preventDefault();}if(e.key==='Enter'&&!$('#search-results').hidden){$('#search-results button')?.click();e.preventDefault();}});
  $('#search-results').addEventListener('keydown',e=>{const items=$$('#search-results button'),i=items.indexOf(document.activeElement);if(e.key==='ArrowDown'){items[(i+1)%items.length]?.focus();e.preventDefault();}if(e.key==='ArrowUp'){(i<=0?$('#search'):items[i-1]).focus();e.preventDefault();}if(e.key==='Escape'){hideSearch();$('#search').focus();}});
  $('#people-filter').addEventListener('change',renderDirectory);$('#generation-filter').addEventListener('change',renderDirectory);
  $('#profile-dialog').addEventListener('cancel',e=>{e.preventDefault();closeProfile();});
  $('#profile-dialog').addEventListener('click',e=>{if(e.target!==$('#profile-dialog'))return;const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeProfile();});
  document.addEventListener('keydown',e=>{const tab=e.target.closest('[role="tab"]');if(!tab||!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;const tabs=[...tab.parentElement.querySelectorAll('[role="tab"]')],i=tabs.indexOf(tab),next=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;e.preventDefault();tabs[next].click();const selector=tabs[next].dataset.mode?`[data-mode="${tabs[next].dataset.mode}"]`:`[data-profile-tab="${tabs[next].dataset.profileTab}"]`;$(selector)?.focus();});
  // Native touch scrolling is preserved. Mouse dragging is an optional shortcut.
  let drag=null;const viewport=$('#tree-viewport');
  viewport.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse'||e.button!==0||e.target.closest('button,a,input,select,.person-node'))return;drag={id:e.pointerId,x:e.clientX,y:e.clientY,left:viewport.scrollLeft,top:viewport.scrollTop};viewport.setPointerCapture(e.pointerId);});
  viewport.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.abs(dx)+Math.abs(dy)>4){viewport.classList.add('dragging');viewport.scrollLeft=drag.left-dx;viewport.scrollTop=drag.top-dy;e.preventDefault();}});
  const endDrag=()=>{drag=null;viewport.classList.remove('dragging');};viewport.addEventListener('pointerup',endDrag);viewport.addEventListener('pointercancel',endDrag);viewport.addEventListener('lostpointercapture',endDrag);
  function savePhotos(){try{localStorage.setItem('bhusal-demo-photos-v1',JSON.stringify(photos));return true;}catch{toast('Browser storage is unavailable or full. The picture is shown for this visit only.');return false;}}
  $('#photo-input').addEventListener('change',async e=>{const file=e.target.files[0];e.target.value='';if(!file)return;if(!['image/jpeg','image/png','image/webp'].includes(file.type)){toast('Choose a JPG, PNG or WebP image.');return;}if(file.size>5*1024*1024){toast('Choose an image smaller than 5 MB.');return;}const id=selected,url=URL.createObjectURL(file);try{const img=new Image();await new Promise((resolve,reject)=>{img.onload=resolve;img.onerror=reject;img.src=url;});const scale=Math.min(1,720/Math.max(img.width,img.height)),c=document.createElement('canvas');c.width=Math.round(img.width*scale);c.height=Math.round(img.height*scale);c.getContext('2d').drawImage(img,0,0,c.width,c.height);photos[id]=c.toDataURL('image/jpeg',.85);const saved=savePhotos();renderTree();renderDirectory();if($('#profile-dialog').open)renderProfile();if(saved)toast('Photo saved in this browser. See About for shared photographs.');}catch{toast('The image could not be opened. Please try another image.');}finally{URL.revokeObjectURL(url);}});
  $('#generation-count').textContent=Math.max(...people.map(p=>p.generation));
  $('#generation-filter').insertAdjacentHTML('beforeend',[...new Set(people.map(p=>p.generation))].sort((a,b)=>a-b).map(g=>`<option value="${g}">पुस्ता ${g}</option>`).join(''));
  const routeChanged=()=>{if(location.hash!==lastRoute)readRoute();};window.addEventListener('popstate',routeChanged);window.addEventListener('hashchange',routeChanged);
  let lastViewportWidth=0,lastCardSizeMode=cardSizeMode();function resizeTree(){const nextCardSizeMode=cardSizeMode();if(nextCardSizeMode!==lastCardSizeMode){lastCardSizeMode=nextCardSizeMode;renderTree();}if(view!=='tree'||mode!=='chart')return;const width=viewport.clientWidth;applyZoom();if(width&&lastViewportWidth&&Math.abs(width-lastViewportWidth)>1)centrePerson(scopeId,true);if(width)lastViewportWidth=width;}if(window.ResizeObserver)new ResizeObserver(resizeTree).observe(viewport);else window.addEventListener('resize',resizeTree);
  readRoute();renderDirectory();
  // Re-measure the actual typeface if the browser finishes loading it later.
  if(document.fonts){document.fonts.ready.then(()=>{cardSizeCache.clear();renderTree();});}

})();
