/* Shared monitor renderer; project geometry, inventory and references live in JSON. */
async function initMonitor() {
  const response = await fetch('/assets/monitor-gpr/avo1.json');
  if (!response.ok) throw new Error('No se pudo cargar el inventario de demostración.');
  const {project, radargrams, states, anomalies} = await response.json();
  const colors = {unchanged:'#456B55',minor:'#9C6D1A',significant:'#8F3A33',new:'#A65325',absent:'#706963',verified:'#67584b'};
  const byId = id => document.getElementById(id);
  const number = n => n.toLocaleString('es-CL', {minimumFractionDigits:2,maximumFractionDigits:2});
  const pk = n => '0+' + String(n).padStart(3,'0');
  const id = a => `${project.idPrefix}-${String(a.pk).padStart(4,'0')}-A01`;
  function select(a) {
    byId('id').textContent=id(a); byId('pk').textContent=pk(a.pk);
    byId('off').textContent=number(a.offset)+' m'; byId('dep').textContent=number(a.depth)+' m';
    byId('status').textContent=states[a.state]; byId('interp').textContent=a.interpretation;
    byId('radarSel').value=String(a.radar); byId('radarImg').src=radargrams[a.radar];
    byId('comparison-state').textContent=states[a.state];
    byId('comparison-note').textContent=`${id(a)} · ${pk(a.pk)}. Estado ficticio para ilustrar el seguimiento. Requiere interpretación técnica y, según el caso, validación física o documental.`;
    document.querySelectorAll('.anom').forEach((b,i)=>b.setAttribute('aria-pressed',String(anomalies[i]===a)));
  }
  byId('track').replaceChildren();
  for(let n=0;n<=project.length;n+=project.length/4){const label=document.createElement('span');label.className='pk';label.style.left=n/project.length*100+'%';label.textContent=pk(n);byId('track').append(label);}
  anomalies.forEach(a=>{const b=document.createElement('button');b.type='button';b.className='anom';b.style.left=a.pk/project.length*100+'%';b.style.top=(18+a.offset/project.width*64)+'%';b.style.background=colors[a.state];b.title=`${id(a)} · ${states[a.state]}`;b.setAttribute('aria-label',b.title);b.onclick=()=>select(a);byId('track').append(b);});
  document.querySelector('.legend').replaceChildren();
  Object.entries(states).forEach(([key,label])=>{const s=document.createElement('span');const dot=document.createElement('span');dot.className='dot';dot.style.background=colors[key];s.append(dot,document.createTextNode(label));document.querySelector('.legend').append(s);});
  byId('history').replaceChildren();
  anomalies.forEach(a=>{const row=document.createElement('tr');const cell=document.createElement('td');const b=document.createElement('button');b.type='button';b.className='history-select';b.textContent=id(a);b.onclick=()=>{select(a);byId('anomaly-detail').scrollIntoView({behavior:'smooth',block:'center'});};cell.append(b);row.append(cell);[pk(a.pk),number(a.depth)+' m',a.state==='new'?'Sin registro':'Detectada',states[a.state],'Pendiente','Pendiente',states[a.state]].forEach(value=>{const td=document.createElement('td');td.textContent=value;row.append(td);});byId('history').append(row);});
  byId('radarSel').onchange=()=>byId('radarImg').src=radargrams[Number(byId('radarSel').value)];
  select(anomalies.find(a=>a.pk===182)||anomalies[0]);
}
initMonitor().catch(error=>{const note=document.createElement('p');note.className='note';note.setAttribute('role','alert');note.textContent=error.message;document.querySelector('main').prepend(note);});
