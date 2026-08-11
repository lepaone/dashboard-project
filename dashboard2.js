/* ── BRAND PALETTE ─────────────────────────────── */
const B = {
  g1:'#0C4B3A', g2:'#1A6854', g3:'#2E8B72',
  t1:'#1B6E62', t2:'#1E8070', t3:'#2E9D8A',
  p1:'#4A2880', p2:'#6B3FA0', p3:'#9068C0',
  w:'#B56A00',  r:'#B83232',  i:'#1A5490',
};
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

/* ── DATA ──────────────────────────────────────── */
const D = {
  timeline:{
    sub:[0,210,380,490,620,710,840,920,760,810,690,397],
    com:[0,148,310,420,540,620,750,840,680,730,590,310],
  },
  statuses:[
    {en:'Completed',  ar:'مكتملة',         n:3241,pct:67,c:B.g1},
    {en:'Processing', ar:'قيد المعالجة',   n:701, pct:15,c:B.i},
    {en:'Fees Paid',  ar:'تم سداد الرسوم', n:312, pct:6, c:B.t2},
    {en:'Validated',  ar:'تم التحقق',      n:225, pct:5, c:B.t3},
    {en:'Received',   ar:'مستلمة',         n:200, pct:4, c:B.w},
    {en:'Rejected',   ar:'مرفوضة',         n:148, pct:3, c:B.r},
  ],
  countries:[
    {flag:'🇮🇳',en:'India',          ar:'الهند',           n:3210,pct:29},
    {flag:'🇵🇰',en:'Pakistan',       ar:'باكستان',         n:2180,pct:19},
    {flag:'🇮🇩',en:'Indonesia',      ar:'إندونيسيا',       n:1740,pct:15},
    {flag:'🇪🇬',en:'Egypt',          ar:'مصر',             n:1120,pct:10},
    {flag:'🇬🇧',en:'United Kingdom', ar:'المملكة المتحدة', n:820, pct:7},
    {flag:'🇺🇸',en:'United States',  ar:'الولايات المتحدة',n:680, pct:6},
    {flag:'🇲🇾',en:'Malaysia',       ar:'ماليزيا',         n:540, pct:5},
    {flag:'🇧🇩',en:'Bangladesh',     ar:'بنغلاديش',        n:420, pct:4},
  ],
  cities:{
    labels:['Riyadh','Jeddah','AlUla','Abha','Taif','Dammam'],
    vals:[38,27,14,11,6,4],
    cols:[B.g1,B.t2,B.p2,B.w,B.i,B.r],
  },
  fees:[
    {en:'Visa Issuance Fee',    ar:'رسم إصدار التأشيرة',  per:'Traveler',tot:'3,372,900'},
    {en:'Insurance Policy Fee', ar:'رسم وثيقة التأمين',   per:'Traveler',tot:'1,037,210'},
    {en:'Visa Processing Fee',  ar:'رسم معالجة التأشيرة', per:'Traveler',tot:'438,477'},
    {en:'Ministry Admin Fee',   ar:'رسم وزارة السياحة',   per:'Package', tot:'0'},
  ],
  dmcs:[
    {n:'Almosafer Travel',sub:'Riyadh', pkgs:847,done:811,rev:'1.24M',active:true},
    {n:'Seera Group',     sub:'Riyadh', pkgs:712,done:698,rev:'1.04M',active:true},
    {n:'Wego',            sub:'Riyadh', pkgs:634,done:601,rev:'0.93M',active:true},
    {n:'Tajawal',         sub:'Jeddah', pkgs:521,done:499,rev:'0.76M',active:true},
    {n:'Flyin.com',       sub:'Jeddah', pkgs:418,done:390,rev:'0.61M',active:true},
    {n:'Al Tayyar Group', sub:'Riyadh', pkgs:312,done:298,rev:'0.46M',active:true},
    {n:'Abercrombie KSA', sub:'AlUla',  pkgs:201,done:187,rev:'0.29M',active:true},
  ],
  inactiveDmcs:[
    {n:'Arabian Horizons',  sub:'Jeddah', pkgs:38, rev:'0.056M', reason:'VCC expired',            since:'2026-02-14', action:'Renew VCC via HyperPay'},
    {n:'Nusuk Travel',      sub:'Riyadh', pkgs:21, rev:'0.031M', reason:'API integration failed', since:'2026-02-28', action:'Contact technical support'},
    {n:'GulfTours KSA',     sub:'Dammam', pkgs:14, rev:'0.020M', reason:'License renewal pending',since:'2026-03-01', action:'Submit renewed MoT license'},
    {n:'Rawafed Travel',    sub:'Taif',   pkgs:9,  rev:'0.013M', reason:'Account suspended',      since:'2026-03-05', action:'Resolve compliance issue'},
    {n:'Dar Al-Salam Tours',sub:'Abha',   pkgs:6,  rev:'0.009M', reason:'VCC expired',            since:'2026-03-08', action:'Renew VCC via HyperPay'},
  ],
  pkgs:[
    {id:'PKG-2026-004827',dmc:'Almosafer',  n:4,nat:'Indian',    city:'Riyadh',s:5,d:7, hotelP:'14,800',flightP:'9,200', visaF:'1,200',procF:'157',insF:'380', val:'28,400',fee:'1,736',st:'completed', dt:'2026-03-10',hotel:'Ritz-Carlton Riyadh',   dep:'Saudia (SV)',    arr:'Saudia (SV)',   ins:'Tawuniya'},
    {id:'PKG-2026-004826',dmc:'Wego',       n:2,nat:'Indonesian',city:'AlUla', s:5,d:10,hotelP:'7,400', flightP:'4,800', visaF:'600',  procF:'79', insF:'190', val:'14,200',fee:'868',  st:'processing', dt:'2026-03-10',hotel:'Rosewood AlUla',        dep:'Emirates (EK)',  arr:'Emirates (EK)', ins:'Bupa Arabia'},
    {id:'PKG-2026-004825',dmc:'Seera Group',n:6,nat:'Pakistani', city:'Jeddah',s:4,d:14,hotelP:'21,600',flightP:'14,400',visaF:'1,800',procF:'236',insF:'570', val:'42,600',fee:'2,604',st:'completed', dt:'2026-03-09',hotel:'Four Seasons Jeddah',    dep:'flynas (XY)',    arr:'Saudia (SV)',   ins:'MedGulf'},
    {id:'PKG-2026-004824',dmc:'Tajawal',    n:3,nat:'Egyptian',  city:'Abha',  s:4,d:7, hotelP:'9,200', flightP:'5,600', visaF:'900',  procF:'118',insF:'285', val:'18,000',fee:'1,302',st:'validated', dt:'2026-03-09',hotel:'InterContinental Abha', dep:'Qatar Airways',  arr:'flyadeal (F3)', ins:'Walaa Insurance'},
    {id:'PKG-2026-004823',dmc:'Flyin.com',  n:1,nat:'British',   city:'Riyadh',s:5,d:5, hotelP:'3,200', flightP:'2,400', visaF:'300',  procF:'39', insF:'95',  val:'7,200', fee:'434',  st:'paid',       dt:'2026-03-08',hotel:'Fairmont Riyadh',       dep:'British Airways',arr:'Saudia (SV)',   ins:'Tawuniya'},
    {id:'PKG-2026-004822',dmc:'Almosafer',  n:5,nat:'Malaysian', city:'Taif',  s:4,d:14,hotelP:'16,800',flightP:'11,200',visaF:'1,500',procF:'197',insF:'475', val:'32,500',fee:'2,170',st:'completed', dt:'2026-03-08',hotel:'Marriott Riyadh',        dep:'Malaysia AL',    arr:'flynas (XY)',   ins:'GIG Gulf'},
    {id:'PKG-2026-004821',dmc:'Al Tayyar', n:2,nat:'American',  city:'Riyadh',s:5,d:3, hotelP:'7,200', flightP:'6,800', visaF:'600',  procF:'79', insF:'190', val:'16,000',fee:'868',  st:'rejected',   dt:'2026-03-07',hotel:'Hilton Riyadh',          dep:'United (UA)',    arr:'Saudia (SV)',   ins:'Tawuniya'},
    {id:'PKG-2026-004820',dmc:'Seera Group',n:4,nat:'Bangladeshi',city:'Dammam',s:4,d:7,hotelP:'11,400',flightP:'7,800', visaF:'1,200',procF:'157',insF:'380', val:'24,000',fee:'1,736',st:'cancelled',  dt:'2026-03-07',hotel:'Park Hyatt Jeddah',      dep:'Biman (BG)',     arr:'flynas (XY)',   ins:'MedGulf'},
    {id:'PKG-2026-004819',dmc:'Wego',       n:3,nat:'Indian',    city:'Jeddah',s:5,d:10,hotelP:'10,200',flightP:'6,600', visaF:'900',  procF:'118',insF:'285', val:'19,800',fee:'1,302',st:'completed', dt:'2026-03-06',hotel:'Hyatt Regency Jeddah',   dep:'Air India (AI)', arr:'Emirates (EK)', ins:'Bupa Arabia'},
    {id:'PKG-2026-004818',dmc:'Tajawal',    n:2,nat:'Pakistani', city:'AlUla', s:4,d:21,hotelP:'5,800', flightP:'3,400', visaF:'600',  procF:'79', insF:'190', val:'11,400',fee:'868',  st:'processing', dt:'2026-03-06',hotel:'Anantara AlUla',         dep:'Turkish (TK)',   arr:'Saudia (SV)',   ins:'Al-Etihad Coop.'},
  ],
  vcc:[
    {en:'Active VCC Cards',        ar:'بطاقات نشطة',        v:41,   c:B.g1},
    {en:'Expiring within 60 days', ar:'تنتهي خلال 60 يوم',  v:6,    c:B.w},
    {en:'Expired / Removed',       ar:'منتهية / محذوفة',    v:3,    c:B.r},
    {en:'Failed Transactions',     ar:'معاملات فاشلة',       v:8,    c:B.p2},
    {en:'Successful Payments YTD', ar:'مدفوعات ناجحة',       v:4791, c:B.t2},
  ],
  validations:[
    {icon:'✅',en:'Passed All Validations',   ar:'اجتاز التحقق كاملاً', n:3578,c:B.g1},
    {icon:'⚠️',en:'Corrected & Resubmitted', ar:'صُحح وأُعيد تقديمه',  n:901, c:B.w},
    {icon:'❌',en:'Rejected — Not Corrected', ar:'مرفوض — لم يُصحح',    n:148, c:B.r},
    {icon:'⏳',en:'Pending Validation',       ar:'في انتظار التحقق',     n:200, c:B.i},
  ],
  cancelR:[
    {en:'Traveler request',      ar:'طلب المسافر',     pct:42,c:B.p2},
    {en:'Visa rejected by MOFA', ar:'رفض التأشيرة',    pct:28,c:B.r},
    {en:'MOFA integration error',ar:'خطأ تقني',        pct:18,c:B.w},
    {en:'Insurance failure (IA)',ar:'فشل التأمين',      pct:12,c:B.i},
  ],
  overstays:[
    {pkgId:'PKG-2026-003841',dmc:'Almosafer Travel',  dmcPhone:'+966-11-234-5678',dmcEmail:'ops@almosafer.com',
     travelers:[
       {id:'TRV-2026-019201',name:'Ravi Kumar',  nat:'🇮🇳 Indian',   passport:'K8821045',entry:'2026-02-10',visaExp:'2026-02-25',overDays:13},
       {id:'TRV-2026-019202',name:'Priya Kumar', nat:'🇮🇳 Indian',   passport:'K8821046',entry:'2026-02-10',visaExp:'2026-02-25',overDays:13},
     ],city:'Riyadh',hotel:'Ritz-Carlton Riyadh',visaType:'15-day'},
    {pkgId:'PKG-2026-003614',dmc:'Wego',              dmcPhone:'+966-11-876-5432',dmcEmail:'support@wego.com',
     travelers:[
       {id:'TRV-2026-017801',name:'Ahmad Fauzi', nat:'🇮🇩 Indonesian',passport:'A7741209',entry:'2026-02-18',visaExp:'2026-03-05',overDays:7},
     ],city:'Jeddah',hotel:'Hyatt Regency Jeddah',visaType:'15-day'},
    {pkgId:'PKG-2026-003502',dmc:'Seera Group',       dmcPhone:'+966-11-345-6789',dmcEmail:'operations@seera.sa',
     travelers:[
       {id:'TRV-2026-016901',name:'Muhammad Tariq',nat:'🇵🇰 Pakistani',passport:'BP4421901',entry:'2026-02-20',visaExp:'2026-03-07',overDays:5},
       {id:'TRV-2026-016902',name:'Fatima Tariq',  nat:'🇵🇰 Pakistani',passport:'BP4421902',entry:'2026-02-20',visaExp:'2026-03-07',overDays:5},
       {id:'TRV-2026-016903',name:'Zain Tariq',    nat:'🇵🇰 Pakistani',passport:'BP4421903',entry:'2026-02-20',visaExp:'2026-03-07',overDays:5},
     ],city:'Jeddah',hotel:'Four Seasons Jeddah',visaType:'15-day'},
    {pkgId:'PKG-2026-003388',dmc:'Tajawal',           dmcPhone:'+966-12-567-8901',dmcEmail:'help@tajawal.com',
     travelers:[
       {id:'TRV-2026-015401',name:'Omar Hassan', nat:'🇪🇬 Egyptian', passport:'A09821334',entry:'2026-02-22',visaExp:'2026-03-09',overDays:3},
     ],city:'Abha',hotel:'InterContinental Abha',visaType:'15-day'},
    {pkgId:'PKG-2026-003201',dmc:'Flyin.com',         dmcPhone:'+966-12-678-9012',dmcEmail:'ops@flyin.com',
     travelers:[
       {id:'TRV-2026-014101',name:'James Wilson', nat:'🇬🇧 British',  passport:'531274018',entry:'2026-02-25',visaExp:'2026-03-11',overDays:1},
       {id:'TRV-2026-014102',name:'Sarah Wilson', nat:'🇬🇧 British',  passport:'531274019',entry:'2026-02-25',visaExp:'2026-03-11',overDays:1},
     ],city:'Riyadh',hotel:'Fairmont Riyadh',visaType:'15-day'},
    {pkgId:'PKG-2026-002974',dmc:'Al Tayyar Group',   dmcPhone:'+966-11-789-0123',dmcEmail:'contact@altayyar.com',
     travelers:[
       {id:'TRV-2026-012801',name:'Karim El-Sayed', nat:'🇪🇬 Egyptian',passport:'A08712290',entry:'2026-02-01',visaExp:'2026-03-03',overDays:9},
       {id:'TRV-2026-012802',name:'Nour El-Sayed',  nat:'🇪🇬 Egyptian',passport:'A08712291',entry:'2026-02-01',visaExp:'2026-03-03',overDays:9},
       {id:'TRV-2026-012803',name:'Lina El-Sayed',  nat:'🇪🇬 Egyptian',passport:'A08712292',entry:'2026-02-01',visaExp:'2026-03-03',overDays:9},
       {id:'TRV-2026-012804',name:'Yassin El-Sayed',nat:'🇪🇬 Egyptian',passport:'A08712293',entry:'2026-02-01',visaExp:'2026-03-03',overDays:9},
     ],city:'Dammam',hotel:'Radisson Dammam',visaType:'30-day'},
  ],
  mofa:[
    {en:'Submitted to MOFA',pct:92,c:B.g1},
    {en:'Visa Issued',      pct:89,c:B.t2},
    {en:'Visa Pending',     pct:7, c:B.w},
    {en:'Visa Rejected',    pct:4, c:B.r},
  ],
  ia:[
    {en:'Submitted to IA',pct:91,c:B.g1},
    {en:'Policy Issued',   pct:87,c:B.t2},
    {en:'Policy Pending',  pct:8, c:B.w},
    {en:'Policy Failed',   pct:5, c:B.r},
  ],
  hotels:[
    {n:'Ritz-Carlton Riyadh',   pkgs:412},{n:'Rosewood AlUla',       pkgs:388},
    {n:'Four Seasons Jeddah',   pkgs:354},{n:'Park Hyatt Jeddah',    pkgs:301},
    {n:'Marriott Riyadh',       pkgs:278},{n:'Hilton Riyadh',        pkgs:241},
    {n:'Anantara AlUla',        pkgs:219},{n:'Fairmont Riyadh',      pkgs:198},
    {n:'InterContinental Abha', pkgs:175},{n:'Hyatt Regency Jeddah', pkgs:161},
  ],
  carriers:[
    {n:'Saudia (SV)',        pkgs:1842},{n:'flynas (XY)',          pkgs:976},
    {n:'Emirates (EK)',      pkgs:621}, {n:'Qatar Airways (QR)',   pkgs:504},
    {n:'flyadeal (F3)',      pkgs:398}, {n:'Turkish Airlines (TK)',pkgs:284},
    {n:'Air Arabia (G9)',    pkgs:202},
  ],
  insurers:[
    {n:'Tawuniya',             ar:'التعاونية',          policies:3210,pct:29},
    {n:'Bupa Arabia',          ar:'بوبا العربية',        policies:2640,pct:24},
    {n:'MedGulf',              ar:'ميدغلف',              policies:1965,pct:18},
    {n:'Walaa Insurance',      ar:'ولاء للتأمين',        policies:1530,pct:14},
    {n:'GIG Gulf',             ar:'جي آي جي الخليج',     policies:874, pct:8},
    {n:'Al-Etihad Cooperative',ar:'الاتحاد التعاونية',   policies:699, pct:6},
  ],
  pkgComp:{
    accom: [0,18200,34100,42600,53800,62400,73800,82400,67200,71400,60800,34400],
    flight:[0,14500,27200,33900,43000,49800,58900,65800,53700,57000,48500,27400],
    other: [0,3600, 6700, 8400, 10600,12300,14500,16200,13200,14100,12000,6800],
  },
};

/* ── CHART DEFAULTS ────────────────────────────── */
Chart.defaults.color = '#7A9E92';
Chart.defaults.font.family = "'IBM Plex Sans',sans-serif";
Chart.defaults.font.size = 11;
Chart.defaults.plugins.legend.display = false;
const GR = {color:'rgba(12,75,58,.07)',lineWidth:1};
const TK = {color:'#7A9E92'};
const BD = {display:false};
const TT = {backgroundColor:'#0A2218',borderColor:'rgba(12,75,58,.25)',borderWidth:1,
            titleColor:'#fff',bodyColor:'rgba(255,255,255,.8)',padding:10,cornerRadius:6};
const charts={};
const dc = id => { if(charts[id]){charts[id].destroy();delete charts[id];} };
const hexA = (hex,a) => {
  const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16);
  return `rgba(${r},${g},${b},${a})`;
};

/* ── COUNTER ANIMATION ─────────────────────────── */
function animKpi(el){
  const t=parseInt(el.dataset.target), fmt=el.dataset.fmt;
  const dur=1300, s=performance.now();
  const tick=now=>{
    const p=Math.min((now-s)/dur,1), e=1-Math.pow(1-p,3), v=Math.round(t*e);
    if(fmt==='sar') el.textContent=v>=1e6?(v/1e6).toFixed(1)+'M SAR':v.toLocaleString();
    else if(fmt==='pct') el.textContent=(v/10).toFixed(1)+'%';
    else el.textContent=v.toLocaleString();
    if(p<1)requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ── STATIC RENDERS ────────────────────────────── */
function renderFunnel(){
  const el=document.getElementById('funnelEl'); if(!el)return;
  el.innerHTML=D.statuses.map(s=>`
    <div class="funnel-row">
      <div class="funnel-st"><div class="funnel-en" style="color:${s.c}">${s.en}</div><div class="funnel-ar">${s.ar}</div></div>
      <div class="funnel-track"><div class="funnel-bar" style="width:${s.pct}%;background:${s.c}"></div></div>
      <div class="funnel-n" style="color:${s.c}">${s.n.toLocaleString()}</div>
      <div class="funnel-pct">${s.pct}%</div>
    </div>`).join('');
}

function renderCountries(){
  const el=document.getElementById('clistEl'); if(!el)return;
  const mx=D.countries[0].n;
  el.innerHTML=D.countries.map(c=>`
    <div class="crow">
      <div class="crow-flag">${c.flag}</div>
      <div class="crow-name"><span class="en-text">${c.en}</span><span class="ar-text">${c.ar}</span></div>
      <div class="crow-bar"><div class="crow-fill" style="width:${Math.round(c.n/mx*100)}%;background:${B.g1}"></div></div>
      <div class="crow-n">${c.n.toLocaleString()}</div>
    </div>`).join('');
}

function renderHbl(id,data){
  const el=document.getElementById(id); if(!el)return;
  const mx=Math.max(...data.map(d=>d.pct));
  el.innerHTML=data.map(d=>`
    <div class="hbl-row">
      <div class="hbl-label"><span class="en-text">${d.en}</span><span class="ar-text">${d.ar||d.en}</span></div>
      <div class="hbl-track"><div class="hbl-fill" style="width:${d.pct/mx*100}%;background:${d.c}"></div></div>
      <div class="hbl-val" style="color:${d.c}">${d.pct}%</div>
    </div>`).join('');
}

function renderDMC(){
  const el=document.getElementById('dmcListEl'); if(!el)return;
  const rk=['rk1','rk2','rk3','rkn','rkn','rkn','rkn'];
  el.innerHTML=D.dmcs.map((d,i)=>`
    <div class="dmc-row">
      <div class="rank-badge ${rk[i]}">${i+1}</div>
      <div class="dmc-info"><div class="dmc-name">${d.n}</div><div class="dmc-sub">${d.sub} · ${d.pkgs} packages</div></div>
      <div class="dmc-stats">
        <div class="dmc-stat"><div class="dmc-stat-val" style="color:${B.g1}">${d.done}</div><div class="dmc-stat-key">completed</div></div>
        <div class="dmc-stat"><div class="dmc-stat-val" style="color:${B.t2}">${d.rev}</div><div class="dmc-stat-key">SAR</div></div>
      </div>
    </div>`).join('');
}

function renderDMCComp(){
  const el=document.getElementById('dmcCompEl'); if(!el)return;
  const cols=[B.g1,B.t2,B.p2,B.w,B.i,B.r,B.g3];
  el.innerHTML=D.dmcs.map((d,i)=>{
    const pct=Math.round(d.done/d.pkgs*100);
    return `<div class="hbl-row"><div class="hbl-label" style="font-size:11px">${d.n}</div><div class="hbl-track"><div class="hbl-fill" style="width:${pct}%;background:${cols[i]}"></div></div><div class="hbl-val">${pct}%</div></div>`;
  }).join('');
}

function renderFeeTable(){
  const el=document.getElementById('feeTblEl'); if(!el)return;
  el.innerHTML=D.fees.map(f=>`
    <tr>
      <td><div class="fee-en en-text">${f.en}</div><div class="fee-ar">${f.ar}</div></td>
      <td style="font-size:10px;color:var(--tx3)">${f.per}</td>
      <td class="fee-amt">${f.tot==='0'?'—':f.tot+' SAR'}</td>
    </tr>`).join('');
}

function renderVal(){
  const el=document.getElementById('valListEl'); if(!el)return;
  el.innerHTML=D.validations.map(v=>`
    <div class="val-row">
      <div class="val-icon">${v.icon}</div>
      <div class="val-lbl" style="color:${v.c}"><span class="en-text">${v.en}</span><span class="ar-text">${v.ar}</span></div>
      <div class="val-n" style="color:${v.c}">${v.n.toLocaleString()}</div>
    </div>`).join('');
}

function renderActiveDmcTable(){
  const el=document.getElementById('activeDmcTblEl'); if(!el)return;
  const rk=['🥇','🥈','🥉','4','5','6','7'];
  el.innerHTML=D.dmcs.map((d,i)=>{
    const pct=Math.round(d.done/d.pkgs*100);
    return `<tr>
      <td style="text-align:center;font-size:15px">${rk[i]||i+1}</td>
      <td class="ptbl-val">${d.n}</td>
      <td class="ptbl-td">${d.sub}</td>
      <td class="ptbl-td" style="text-align:center;font-weight:700;color:var(--g1)">${d.pkgs.toLocaleString()}</td>
      <td class="ptbl-td" style="text-align:center;color:var(--s-success)">${d.done.toLocaleString()}</td>
      <td style="min-width:120px">
        <div style="display:flex;align-items:center;gap:6px">
          <div style="flex:1;height:6px;background:var(--srf3);border-radius:3px;overflow:hidden">
            <div style="width:${pct}%;height:100%;background:var(--g1);border-radius:3px"></div>
          </div>
          <span style="font-size:11px;font-weight:700;color:var(--g1);min-width:32px">${pct}%</span>
        </div>
      </td>
      <td class="ptbl-fee">${d.rev} SAR</td>
      <td><span class="badge b-completed">Active</span></td>
    </tr>`;
  }).join('');
}

function renderInactiveDmcTable(){
  const el=document.getElementById('inactiveDmcTblEl'); if(!el)return;
  const reasonColor={'VCC expired':B.r,'API integration failed':B.w,'License renewal pending':B.w,'Account suspended':B.r};
  el.innerHTML=D.inactiveDmcs.map(d=>`
    <tr>
      <td class="ptbl-val">${d.n}</td>
      <td class="ptbl-td">${d.sub}</td>
      <td class="ptbl-td" style="text-align:center">${d.pkgs}</td>
      <td class="ptbl-td">${d.rev} SAR</td>
      <td style="font-size:11px;color:${reasonColor[d.reason]||B.r};font-weight:600">${d.reason}</td>
      <td style="color:var(--tx3);font-size:11px">${d.since}</td>
      <td style="font-size:11px;font-weight:500">${d.action}</td>
      <td><span class="badge b-rejected">Inactive</span></td>
    </tr>`).join('');
}

function renderPkgTable(){
  const el=document.getElementById('pkgTblEl'); if(!el)return;
  const bm={completed:'b-completed',processing:'b-processing',validated:'b-validated',received:'b-received',rejected:'b-rejected',cancelled:'b-cancelled',paid:'b-paid'};
  const be={completed:'Completed',processing:'Processing',validated:'Validated',received:'Received',rejected:'Rejected',cancelled:'Cancelled',paid:'Fees Paid'};
  const ba={completed:'مكتملة',processing:'قيد المعالجة',validated:'تم التحقق',received:'مستلمة',rejected:'مرفوضة',cancelled:'ملغاة',paid:'تم السداد'};
  el.innerHTML=D.pkgs.map(r=>`
    <tr>
      <td><span class="ptbl-id">${r.id}</span></td>
      <td class="ptbl-td">${r.dmc}</td>
      <td class="ptbl-td" style="text-align:center">${r.n}</td>
      <td class="ptbl-td">${r.nat}</td>
      <td class="ptbl-td">${r.city}</td>
      <td class="ptbl-td" style="max-width:140px;white-space:normal;line-height:1.3;font-size:11px">${r.hotel}</td>
      <td class="ptbl-td" style="text-align:center">${'★'.repeat(r.s)}</td>
      <td class="ptbl-td" style="text-align:center">${r.d}d</td>
      <td class="ptbl-td" style="font-size:11px">${r.dep}</td>
      <td class="ptbl-td" style="font-size:11px">${r.arr}</td>
      <td class="ptbl-td" style="font-size:11px;color:var(--p2)">${r.ins}</td>
      <td class="ptbl-val" style="color:var(--t1)">${r.hotelP} SAR</td>
      <td class="ptbl-val" style="color:var(--p2)">${r.flightP} SAR</td>
      <td style="font-size:11px;font-weight:600;color:var(--s-info)">${r.visaF} SAR</td>
      <td style="font-size:11px;font-weight:600;color:var(--s-warn)">${r.procF} SAR</td>
      <td style="font-size:11px;font-weight:600;color:var(--p2)">${r.insF} SAR</td>
      <td class="ptbl-fee">${r.fee} SAR</td>
      <td class="ptbl-val">${r.val} SAR</td>
      <td><span class="badge ${bm[r.st]}"><span class="en-text">${be[r.st]}</span><span class="ar-text">${ba[r.st]}</span></span></td>
      <td style="color:var(--tx3)">${r.dt}</td>
    </tr>`).join('');
}

function renderVCC(){
  const el=document.getElementById('vccListEl'); if(!el)return;
  el.innerHTML=D.vcc.map(v=>`
    <div class="vcc-item">
      <div><div class="vcc-lbl-en en-text">${v.en}</div><div class="vcc-lbl-ar">${v.ar}</div></div>
      <div class="vcc-val" style="color:${v.c}">${v.v.toLocaleString()}</div>
    </div>`).join('');
}

/* ── OVERSTAY DETAILS ────────────────────────── */
(function renderOverstay(){
  const data=D.overstays; if(!data||!data.length)return;
  const totalTrav=data.reduce((s,p)=>s+p.travelers.length,0);
  const maxDays=Math.max(...data.flatMap(p=>p.travelers.map(t=>t.overDays)));
  const set=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v};
  set('osTotalTrav',totalTrav);
  set('osTotalPkg', data.length);
  set('osTotalDmc', new Set(data.map(p=>p.dmc)).size);
  set('osMaxDays',  maxDays+'d');
  const wrap=document.getElementById('overstayListEl'); if(!wrap)return;
  wrap.innerHTML=data.map(pkg=>{
    const tRows=pkg.travelers.map(t=>{
      const cls=t.overDays>=10?'crit':t.overDays>=5?'':'warn';
      return `<tr>
        <td style="font-weight:600">${t.name}</td>
        <td>${t.nat}</td>
        <td><span class="os-passport">${t.passport}</span></td>
        <td><span style="font-family:'Courier New',monospace;font-size:11px;color:#1a5490">${t.id}</span></td>
        <td>${t.entry}</td>
        <td>${t.visaExp}</td>
        <td><span class="os-days ${cls}">${t.overDays}d over</span></td>
      </tr>`;
    }).join('');
    return `<div class="os-card">
      <div class="os-card-hdr">
        <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
          <span class="os-pkg-id">${pkg.pkgId}</span>
          <span class="os-dmc">🏢 ${pkg.dmc}</span>
          <span class="os-city">📍 ${pkg.city}</span>
          <span class="os-hotel">🏨 ${pkg.hotel}</span>
          <span style="font-size:11px;background:#ffeaea;color:#b83232;padding:2px 8px;border-radius:10px;font-weight:700">
            ${pkg.travelers.length} traveler(s) overstaying
          </span>
        </div>
        <div class="os-contact">
          <span style="font-size:11px;color:#666;font-weight:600">Contact DMC:</span>
          <a class="os-contact-btn email" href="mailto:${pkg.dmcEmail}">✉️ ${pkg.dmcEmail}</a>
          <a class="os-contact-btn phone" href="tel:${pkg.dmcPhone}">📞 ${pkg.dmcPhone}</a>
        </div>
      </div>
      <div style="overflow-x:auto">
        <table class="os-tbl">
          <thead><tr>
            <th>Traveler Name</th><th>Nationality</th><th>Passport No.</th>
            <th>Traveler ID</th><th>Entry Date</th><th>Visa Expired</th><th>Overstay</th>
          </tr></thead>
          <tbody>${tRows}</tbody>
        </table>
      </div>
    </div>`;
  }).join('');
})();

/* ── EXPORT FUNCTIONS ──────────────────────────── */
function getOverstayRows(){
  const now=new Date();
  return D.overstays.flatMap(pkg=>pkg.travelers.map(t=>({
    'Package ID':pkg.pkgId,'DMC Name':pkg.dmc,'DMC Email':pkg.dmcEmail,'DMC Phone':pkg.dmcPhone,
    'City of Stay':pkg.city,'Hotel':pkg.hotel,'Visa Type':pkg.visaType,
    'Traveler ID':t.id,'Traveler Name':t.name,
    'Nationality':t.nat.replace(/[\u{1F1E0}-\u{1F1FF}]{2}/gu,'').trim(),
    'Passport No.':t.passport,'Entry Date':t.entry,'Visa Expiry Date':t.visaExp,
    'Days Overstayed':t.overDays,
    'Severity':t.overDays>=10?'Critical':t.overDays>=5?'High':'Moderate',
    'Action Required':'Contact DMC to locate traveler and arrange immediate departure',
    'Export Timestamp':now.toISOString().replace('T',' ').substring(0,19),
  })));
}

window.exportOverstayCSV=function(){
  const rows=getOverstayRows(); if(!rows.length){alert('No data.');return;}
  const headers=Object.keys(rows[0]);
  const escape=v=>`"${String(v).replace(/"/g,'""')}"`;
  const csv=[headers.map(escape).join(','),...rows.map(r=>headers.map(h=>escape(r[h])).join(','))].join('\r\n');
  const blob=new Blob(['﻿'+csv],{type:'text/csv;charset=utf-8;'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url; a.download=`Overstay_Alert_Report_${new Date().toISOString().slice(0,10)}.csv`; a.click();
  URL.revokeObjectURL(url);
};

window.exportOverstayExcel=function(){
  if(typeof XLSX==='undefined'){
    const s=document.createElement('script');
    s.src='https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
    s.onload=()=>_doExcelExport();
    s.onerror=()=>alert('Could not load Excel library. Use CSV export instead.');
    document.head.appendChild(s);
  } else { _doExcelExport(); }
};

function _doExcelExport(){
  const rows=getOverstayRows(); if(!rows.length){alert('No data.');return;}
  const headers=Object.keys(rows[0]);
  const wsData=[headers,...rows.map(r=>headers.map(h=>r[h]))];
  const wb=XLSX.utils.book_new();
  const ws=XLSX.utils.aoa_to_sheet(wsData);
  ws['!cols']=[{wch:20},{wch:22},{wch:28},{wch:20},{wch:14},{wch:26},{wch:10},{wch:22},{wch:22},{wch:14},{wch:14},{wch:12},{wch:14},{wch:10},{wch:8},{wch:12},{wch:44},{wch:22}];
  ws['!freeze']={xSplit:0,ySplit:1};
  ws['!autofilter']={ref:XLSX.utils.encode_range({s:{r:0,c:0},e:{r:rows.length,c:headers.length-1}})};
  const sumData=[
    ['Overstay Alert Report — Summary'],
    ['Generated',new Date().toISOString().replace('T',' ').substring(0,19)],
    [''],['Metric','Value'],
    ['Total Travelers Overstaying',rows.length],
    ['Packages Affected',new Set(rows.map(r=>r['Package ID'])).size],
    ['DMCs to Contact',new Set(rows.map(r=>r['DMC Name'])).size],
    ['Maximum Days Overstayed',Math.max(...rows.map(r=>r['Days Overstayed']))],
    [''],['Report Source','Ministry of Tourism — Visa by Package Operations Dashboard'],
    ['Classification','Confidential — Internal Use Only'],
  ];
  const wsSummary=XLSX.utils.aoa_to_sheet(sumData);
  wsSummary['!cols']=[{wch:36},{wch:52}];
  XLSX.utils.book_append_sheet(wb,wsSummary,'Summary');
  XLSX.utils.book_append_sheet(wb,ws,'Overstay Details');
  XLSX.writeFile(wb,`Overstay_Alert_Report_${new Date().toISOString().slice(0,10)}.xlsx`);
}

/* ── CHARTS ────────────────────────────────────── */
window.rTimeline=()=>{
  dc('cTimeline');const ctx=document.getElementById('cTimeline');if(!ctx)return;
  charts.cTimeline=new Chart(ctx,{type:'bar',data:{labels:MONTHS,datasets:[
    {label:'Submitted',data:D.timeline.sub,backgroundColor:hexA(B.g1,.15),borderColor:B.g1,borderWidth:2,borderRadius:5,borderSkipped:false},
    {label:'Completed',data:D.timeline.com,backgroundColor:hexA(B.t2,.15),borderColor:B.t2,borderWidth:2,borderRadius:5,borderSkipped:false},
  ]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index'},
    plugins:{legend:{display:true,labels:{color:'#3A5E52',boxWidth:10,boxHeight:10,borderRadius:3}},tooltip:TT},
    scales:{x:{grid:GR,ticks:TK,border:BD},y:{grid:GR,ticks:TK,border:BD}}}});
};

window.rCities=()=>{
  dc('cCities');const ctx=document.getElementById('cCities');if(!ctx)return;
  charts.cCities=new Chart(ctx,{type:'doughnut',data:{labels:D.cities.labels,datasets:[{data:D.cities.vals,backgroundColor:D.cities.cols,borderWidth:3,borderColor:'#fff',hoverBorderColor:'#f0f0ea'}]},
  options:{responsive:true,maintainAspectRatio:false,cutout:'62%',
    plugins:{legend:{display:true,position:'right',labels:{color:'#3A5E52',boxWidth:10,boxHeight:10,borderRadius:3,padding:12,font:{size:11}}},
    tooltip:{...TT,callbacks:{label:c=>` ${c.parsed}%`}}}}});
};

window.rDaily=()=>{
  dc('cDaily');const ctx=document.getElementById('cDaily');if(!ctx)return;
  const data=[12,18,24,15,30,28,35,19,42,38,50,44,29,35,48,52,41,37,60,55,43,49,58,62,44,51,48,55,61,58];
  charts.cDaily=new Chart(ctx,{type:'line',data:{labels:Array.from({length:30},(_,i)=>`Day ${i+1}`),datasets:[
    {data,borderColor:B.g1,backgroundColor:hexA(B.g1,.08),fill:true,tension:.4,borderWidth:2.5,pointRadius:0,pointHoverRadius:5}]},
  options:{responsive:true,maintainAspectRatio:false,plugins:{tooltip:TT},
    scales:{x:{grid:{display:false},ticks:{...TK,maxTicksLimit:10},border:BD},y:{grid:GR,ticks:TK,border:BD}}}});
};

window.rReject=()=>{
  dc('cReject');const ctx=document.getElementById('cReject');if(!ctx)return;
  const cols=[B.r,B.w,B.p2,B.i,B.t2,B.g1];
  charts.cReject=new Chart(ctx,{type:'bar',
    data:{labels:['Missing Data','Price < Min','Hotel < 4★','Invalid Passport','MOFA Mismatch','Duration > 21d'],
    datasets:[{data:[48,35,27,19,12,7],backgroundColor:cols.map(c=>hexA(c,.7)),borderColor:cols,borderWidth:1.5,borderRadius:5,borderSkipped:false}]},
  options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,plugins:{tooltip:TT},
    scales:{x:{grid:GR,ticks:TK,border:BD},y:{grid:{display:false},ticks:{color:'#3A5E52'},border:BD}}}});
};

window.rVisaMon=()=>{
  dc('cVisaMon');const ctx=document.getElementById('cVisaMon');if(!ctx)return;
  charts.cVisaMon=new Chart(ctx,{type:'bar',data:{labels:MONTHS,datasets:[
    {label:'Visas',    data:[0,180,340,430,570,650,790,870,710,760,640,368],backgroundColor:hexA(B.t2,.15),borderColor:B.t2,borderWidth:2,borderRadius:4,borderSkipped:false},
    {label:'Insurance',data:[0,165,320,415,550,630,765,845,690,740,618,351],backgroundColor:hexA(B.p2,.15),borderColor:B.p2,borderWidth:2,borderRadius:4,borderSkipped:false},
  ]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index'},
    plugins:{legend:{display:true,labels:{color:'#3A5E52',boxWidth:10,boxHeight:10,borderRadius:3}},tooltip:TT},
    scales:{x:{grid:GR,ticks:TK,border:BD},y:{grid:GR,ticks:TK,border:BD}}}});
};

window.rVisaDur=()=>{
  dc('cVisaDur');const ctx=document.getElementById('cVisaDur');if(!ctx)return;
  charts.cVisaDur=new Chart(ctx,{type:'doughnut',data:{labels:['15-day (2–7d stay)','30-day (8–21d stay)'],datasets:[{data:[4820,6423],backgroundColor:[B.t2,B.g1],borderWidth:3,borderColor:'#fff'}]},
  options:{responsive:true,maintainAspectRatio:false,cutout:'65%',
    plugins:{legend:{display:true,position:'bottom',labels:{color:'#3A5E52',boxWidth:10,boxHeight:10,borderRadius:3,padding:12}},tooltip:{...TT,callbacks:{label:c=>` ${c.parsed.toLocaleString()} visas`}}}}});
};

window.rRev=()=>{
  dc('cRev');const ctx=document.getElementById('cRev');if(!ctx)return;
  charts.cRev=new Chart(ctx,{type:'line',data:{labels:MONTHS,datasets:[
    {data:[0,91350,165100,213010,269700,308450,364950,399580,330340,350340,299760,172840],borderColor:B.g1,backgroundColor:hexA(B.g1,.07),fill:true,tension:.4,borderWidth:2.5,pointRadius:0,pointHoverRadius:5}]},
  options:{responsive:true,maintainAspectRatio:false,plugins:{tooltip:{...TT,callbacks:{label:c=>` ${c.parsed.y.toLocaleString()} SAR`}}},
    scales:{x:{grid:GR,ticks:TK,border:BD},y:{grid:GR,ticks:{...TK,callback:v=>(v/1000)+'K'},border:BD}}}});
};

window.rFeeBreak=()=>{
  dc('cFeeBreak');const ctx=document.getElementById('cFeeBreak');if(!ctx)return;
  charts.cFeeBreak=new Chart(ctx,{type:'doughnut',data:{labels:['Visa Fee','Insurance','Processing','Ministry'],datasets:[{data:[3372900,1037210,438477,0],backgroundColor:[B.g1,B.p2,B.t2,'#E0EDE8'],borderWidth:3,borderColor:'#fff'}]},
  options:{responsive:true,maintainAspectRatio:false,cutout:'68%',
    plugins:{legend:{display:true,position:'right',labels:{color:'#3A5E52',boxWidth:8,boxHeight:8,borderRadius:2,padding:8,font:{size:10}}},
    tooltip:{...TT,callbacks:{label:c=>` ${c.parsed.toLocaleString()} SAR`}}}}});
};

window.rDmcPkg=()=>{
  dc('cDmcPkg');const ctx=document.getElementById('cDmcPkg');if(!ctx)return;
  const cols=[B.g1,B.t2,B.p2,B.w,B.i,B.r,B.g3];
  charts.cDmcPkg=new Chart(ctx,{type:'bar',data:{labels:D.dmcs.map(d=>d.n),datasets:[
    {label:'Submitted',data:D.dmcs.map(d=>d.pkgs),backgroundColor:cols.map(c=>hexA(c,.18)),borderColor:cols,borderWidth:2,borderRadius:5,borderSkipped:false},
    {label:'Completed',data:D.dmcs.map(d=>d.done),backgroundColor:cols.map(c=>hexA(c,.55)),borderColor:cols,borderWidth:0,borderRadius:5,borderSkipped:false},
  ]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index'},
    plugins:{legend:{display:true,labels:{color:'#3A5E52',boxWidth:10,boxHeight:10,borderRadius:3}},tooltip:TT},
    scales:{x:{grid:{display:false},ticks:{...TK,maxRotation:30},border:BD},y:{grid:GR,ticks:TK,border:BD}}}});
};

window.rDmcRev=()=>{
  dc('cDmcRev');const ctx=document.getElementById('cDmcRev');if(!ctx)return;
  const cols=[B.g1,B.t2,B.p2,B.w,B.i,B.r,B.g3];
  charts.cDmcRev=new Chart(ctx,{type:'doughnut',data:{labels:D.dmcs.map(d=>d.n),datasets:[{data:[1240,1040,930,760,610,460,290],backgroundColor:cols,borderWidth:3,borderColor:'#fff'}]},
  options:{responsive:true,maintainAspectRatio:false,cutout:'60%',
    plugins:{legend:{display:true,position:'right',labels:{color:'#3A5E52',boxWidth:10,boxHeight:10,borderRadius:3,padding:10,font:{size:10.5}}},tooltip:TT}}});
};

window.rPort=()=>{
  dc('cPort');const ctx=document.getElementById('cPort');if(!ctx)return;
  const cols=[B.g1,B.t2,B.p2,B.i,B.w,B.r];
  charts.cPort=new Chart(ctx,{type:'bar',data:{labels:['KAIA Jeddah','King Khalid Riyadh','KFIA Dammam','Madinah Airport','Land: Bahrain','Land: UAE'],
    datasets:[{data:[3840,2910,1420,780,520,370],backgroundColor:cols.map(c=>hexA(c,.65)),borderColor:cols,borderWidth:1.5,borderRadius:5,borderSkipped:false}]},
  options:{responsive:true,maintainAspectRatio:false,plugins:{tooltip:TT},
    scales:{x:{grid:{display:false},ticks:{...TK,maxRotation:35},border:BD},y:{grid:GR,ticks:TK,border:BD}}}});
};

window.rFlow=()=>{
  dc('cFlow');const ctx=document.getElementById('cFlow');if(!ctx)return;
  const wks=['W1 Jan','W2 Jan','W3 Jan','W4 Jan','W1 Feb','W2 Feb','W3 Feb','W4 Feb','W1 Mar'];
  charts.cFlow=new Chart(ctx,{type:'line',data:{labels:wks,datasets:[
    {label:'Entries',data:[180,210,240,195,310,280,350,340,390],borderColor:B.g1,backgroundColor:hexA(B.g1,.07),fill:true,tension:.4,borderWidth:2,pointRadius:0,pointHoverRadius:4},
    {label:'Exits',  data:[120,170,200,175,270,250,310,295,340],borderColor:B.t2,backgroundColor:hexA(B.t2,.05),fill:true,tension:.4,borderWidth:2,pointRadius:0,pointHoverRadius:4},
  ]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index'},
    plugins:{legend:{display:true,labels:{color:'#3A5E52',boxWidth:10,boxHeight:10,borderRadius:3}},tooltip:TT},
    scales:{x:{grid:{display:false},ticks:TK,border:BD},y:{grid:GR,ticks:TK,border:BD}}}});
};

window.rCancel=()=>{
  dc('cCancel');const ctx=document.getElementById('cCancel');if(!ctx)return;
  charts.cCancel=new Chart(ctx,{type:'bar',data:{labels:MONTHS,datasets:[
    {label:'Package', data:[0,8,14,19,22,18,25,28,19,21,16,9], backgroundColor:hexA(B.p2,.3),borderColor:B.p2,borderWidth:2,borderRadius:4,borderSkipped:false},
    {label:'Traveler',data:[0,5,10,14,17,15,20,22,15,17,13,7], backgroundColor:hexA(B.w,.25),borderColor:B.w,borderWidth:2,borderRadius:4,borderSkipped:false},
  ]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index'},
    plugins:{legend:{display:true,labels:{color:'#3A5E52',boxWidth:10,boxHeight:10,borderRadius:3}},tooltip:TT},
    scales:{x:{grid:GR,ticks:TK,border:BD},y:{grid:GR,ticks:TK,border:BD}}}});
};

window.rHotels=()=>{
  dc('cHotels');const ctx=document.getElementById('cHotels');if(!ctx)return;
  const cols=[B.g1,B.g2,B.g3,B.t1,B.t2,B.t3,B.p1,B.p2,B.w,B.i];
  charts.cHotels=new Chart(ctx,{type:'bar',
    data:{labels:D.hotels.map(h=>h.n),datasets:[{data:D.hotels.map(h=>h.pkgs),backgroundColor:cols.map(c=>hexA(c,.75)),borderColor:cols,borderWidth:1.5,borderRadius:5,borderSkipped:false}]},
  options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,
    plugins:{tooltip:{...TT,callbacks:{label:c=>` ${c.parsed.x} packages`}}},
    scales:{x:{grid:GR,ticks:TK,border:BD},y:{grid:{display:false},ticks:{color:'#3A5E52',font:{size:10.5}},border:BD}}}});
};

window.rCarriers=()=>{
  dc('cCarriers');const ctx=document.getElementById('cCarriers');if(!ctx)return;
  const cols=[B.g1,B.t2,B.p2,B.w,B.g3,B.i,B.r];
  charts.cCarriers=new Chart(ctx,{type:'bar',
    data:{labels:D.carriers.map(c=>c.n),datasets:[{data:D.carriers.map(c=>c.pkgs),backgroundColor:cols.map(c=>hexA(c,.75)),borderColor:cols,borderWidth:1.5,borderRadius:5,borderSkipped:false}]},
  options:{responsive:true,maintainAspectRatio:false,plugins:{tooltip:{...TT,callbacks:{label:c=>` ${c.parsed.y} packages`}}},
    scales:{x:{grid:{display:false},ticks:{...TK,maxRotation:30,font:{size:10}},border:BD},y:{grid:GR,ticks:TK,border:BD}}}});
};

window.rInsurers=()=>{
  dc('cInsurers');const ctx=document.getElementById('cInsurers');if(!ctx)return;
  const cols=[B.g1,B.t2,B.p2,B.w,B.i,B.g3];
  charts.cInsurers=new Chart(ctx,{type:'doughnut',
    data:{labels:D.insurers.map(i=>i.n),datasets:[{data:D.insurers.map(i=>i.policies),backgroundColor:cols,borderWidth:3,borderColor:'#fff'}]},
  options:{responsive:true,maintainAspectRatio:false,cutout:'60%',
    plugins:{legend:{display:true,position:'right',labels:{color:'#3A5E52',boxWidth:10,boxHeight:10,borderRadius:3,padding:10,font:{size:10.5}}},
    tooltip:{...TT,callbacks:{label:c=>` ${c.parsed.toLocaleString()} policies (${D.insurers[c.dataIndex].pct}%)`}}}}});
};

window.rPkgComp=()=>{
  dc('cPkgComp');const ctx=document.getElementById('cPkgComp');if(!ctx)return;
  charts.cPkgComp=new Chart(ctx,{type:'bar',data:{labels:MONTHS,datasets:[
    {label:'Accommodation', data:D.pkgComp.accom, backgroundColor:hexA(B.g1,.7), borderColor:B.g1,borderWidth:0,borderRadius:3,stack:'s'},
    {label:'Flights',       data:D.pkgComp.flight,backgroundColor:hexA(B.t2,.7), borderColor:B.t2,borderWidth:0,borderRadius:0,stack:'s'},
    {label:'Other Services',data:D.pkgComp.other,  backgroundColor:hexA(B.p2,.7), borderColor:B.p2,borderWidth:0,borderRadius:0,stack:'s'},
  ]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index'},
    plugins:{legend:{display:true,labels:{color:'#3A5E52',boxWidth:10,boxHeight:10,borderRadius:3}},
      tooltip:{...TT,callbacks:{label:c=>` ${c.dataset.label}: ${(c.parsed.y/1000).toFixed(0)}K SAR`}}},
    scales:{x:{grid:GR,ticks:TK,border:BD,stacked:true},y:{grid:GR,ticks:{...TK,callback:v=>(v/1000)+'K'},border:BD,stacked:true}}}});
};

window.rPkgBreak=()=>{
  dc('cPkgBreak');const ctx=document.getElementById('cPkgBreak');if(!ctx)return;
  charts.cPkgBreak=new Chart(ctx,{type:'doughnut',
    data:{labels:['Accommodation','Flights','Other Services'],
    datasets:[{data:[93600000,74580000,18240000],backgroundColor:[B.g1,B.t2,B.p2],borderWidth:3,borderColor:'#fff'}]},
  options:{responsive:true,maintainAspectRatio:false,cutout:'64%',
    plugins:{legend:{display:true,position:'bottom',labels:{color:'#3A5E52',boxWidth:10,boxHeight:10,borderRadius:3,padding:12}},
    tooltip:{...TT,callbacks:{label:c=>` ${(c.parsed/1e6).toFixed(1)}M SAR`}}}}});
};

/* ── TAB ROUTING ────────────────────────────────── */
const tabFn={
  'overview':  [rTimeline,rCities],
  'packages':  [rPkgComp,rPkgBreak,rRev,rFeeBreak,rHotels,rCarriers,rDaily,rReject],
  'visa-ins':  [rVisaMon,rVisaDur,rInsurers],
  'dmc':       [rDmcPkg,rDmcRev],
  'moi':       [rPort,rFlow,rCancel],
};

function showTab(id,btn){
  document.querySelectorAll('.section').forEach(s=>s.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(`tab-${id}`)?.classList.remove('hidden');
  if(btn)btn.classList.add('active');
  setTimeout(()=>(tabFn[id]||[]).forEach(f=>f()),60);
}

/* ── LANGUAGE TOGGLE ────────────────────────────── */
function setLang(l){
  document.body.classList.toggle('ar',l==='ar');
  document.documentElement.lang=l;
  document.documentElement.dir=l==='ar'?'rtl':'ltr';
  document.getElementById('btnEn').classList.toggle('active',l==='en');
  document.getElementById('btnAr').classList.toggle('active',l==='ar');
}

/* ── FILTER ACTIONS ─────────────────────────────── */
function applyF(){
  const b=document.querySelector('.btn-prim'),p=b.innerHTML;
  b.innerHTML='<span>✓ Applied</span>';b.style.background='linear-gradient(135deg,#1A6854,#2E8B72)';
  setTimeout(()=>{b.innerHTML=p;b.style.background=''},1500);
}
function resetF(){
  document.querySelectorAll('select').forEach(s=>s.selectedIndex=0);
  document.getElementById('f-from').value='2026-01-01';
  document.getElementById('f-to').value='2026-03-10';
}

/* ── LIVE CLOCK ─────────────────────────────────── */
(function tick(){
  const el=document.getElementById('clockEl');
  if(el)el.textContent=new Date().toLocaleDateString('en-SA',{weekday:'short',day:'numeric',month:'short',year:'numeric'})+' · '+new Date().toLocaleTimeString('en-SA',{hour12:false});
  setTimeout(tick,1000);
})();

/* ── INITIALISE ─────────────────────────────────── */
(function init(){
  renderFunnel(); renderCountries();
  renderHbl('mofaEl',D.mofa); renderHbl('iaEl',D.ia);
  renderHbl('cancelEl',D.cancelR);
  const iHbl=D.insurers.map((x,i)=>({en:x.n,ar:x.ar,pct:x.pct,c:[B.g1,B.t2,B.p2,B.w,B.i,B.g3][i]}));
  renderHbl('insurerHblEl',iHbl);
  renderDMC(); renderDMCComp();
  renderFeeTable(); renderVal(); renderPkgTable(); renderVCC();
  renderActiveDmcTable(); renderInactiveDmcTable();
  document.querySelectorAll('.kpi-val[data-target]').forEach(animKpi);
  setTimeout(()=>{rTimeline();rCities();},200);
})();
