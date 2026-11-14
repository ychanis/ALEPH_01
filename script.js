(()=>{
 const modals=[...document.querySelectorAll('[data-modal]')];
 const visibleNodes=modal=>[...modal.querySelectorAll('button,a[href],input,textarea,[tabindex]:not([tabindex="-1"])')].filter(el=>!el.disabled&&el.getClientRects().length);
 let active=null,previous=null;
 const choose=(modal,id)=>{
  modal.querySelectorAll('[data-case-tab]').forEach(t=>{const selected=t.dataset.caseTab===id;t.classList.toggle('active',selected);t.setAttribute('aria-selected',String(selected));t.tabIndex=selected?0:-1;});
  modal.querySelectorAll('[data-case-panel]').forEach(p=>p.hidden=p.dataset.casePanel!==id);
  modal.querySelector('.modal').scrollTop=0;
 };
 const hide=()=>{if(!active)return;active.hidden=true;active=null;document.body.style.overflow='';previous?.focus();};
 document.querySelectorAll('[data-modal-open]').forEach(open=>open.addEventListener('click',e=>{
  e.preventDefault();const id=open.dataset.modalOpen||'';const modal=modals.find(m=>m.dataset.modal===id);if(!modal)return;
  previous=document.activeElement;active=modal;choose(modal,'overview');modal.hidden=false;document.body.style.overflow='hidden';modal.querySelector('[data-modal-close]').focus();
 }));
 modals.forEach(modal=>{
  modal.querySelector('[data-modal-close]').addEventListener('click',hide);
  modal.addEventListener('click',e=>{if(e.target===modal)hide();});
  const tabs=[...modal.querySelectorAll('[data-case-tab]')];
  tabs.forEach((tab,index)=>{
   tab.addEventListener('click',()=>choose(modal,tab.dataset.caseTab));
   tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(index+1)%tabs.length;else if(e.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=tabs.length-1;else return;e.preventDefault();choose(modal,tabs[next].dataset.caseTab);tabs[next].focus();});
  });
 });
 document.addEventListener('keydown',e=>{
  if(!active)return;if(e.key==='Escape')hide();
  else if(e.key==='Tab'){const nodes=visibleNodes(active);const first=nodes[0],last=nodes[nodes.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
 });
})();
(()=>{const box=document.querySelector('[data-screen-lightbox]');if(!box)return;const image=box.querySelector('[data-screen-image]'),title=box.querySelector('h2'),close=box.querySelector('[data-screen-close]');let previous;const hide=()=>{box.hidden=true;image.removeAttribute('src');previous?.focus();};document.querySelectorAll('[data-screen-src]').forEach(button=>button.addEventListener('click',()=>{previous=button;image.src=button.dataset.screenSrc;image.alt=button.dataset.screenTitle;title.textContent=button.dataset.screenTitle;box.hidden=false;close.focus();}));close.addEventListener('click',hide);box.addEventListener('click',e=>{if(e.target===box||e.target.classList.contains('screen-lightbox-body'))hide();});document.addEventListener('keydown',e=>{if(box.hidden)return;if(e.key==='Escape'){e.stopImmediatePropagation();hide();}else if(e.key==='Tab'){e.preventDefault();close.focus();}},true);})();
