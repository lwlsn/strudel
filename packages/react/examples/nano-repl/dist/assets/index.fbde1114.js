import{P as _,m as Lt,g as Ut,c as Y,a as Xt,r as Kt,H as Qt,s as Yt}from"./index.ec9f9930.js";const C=(n,t)=>Array(Math.abs(t)+1).join(n);function g(n,t,e){return function(...o){return console.warn(`${n} is deprecated. Use ${t}.`),e.apply(this,o)}}function z(n){return n!==null&&typeof n=="object"&&typeof n.name=="string"}function q(n){return n!==null&&typeof n=="object"&&typeof n.step=="number"&&typeof n.alt=="number"}const Qn=[0,2,4,-1,1,3,5],Yn=Qn.map(n=>Math.floor(n*7/12));function en(n){const{step:t,alt:e,oct:o,dir:r=1}=n,i=Qn[t]+7*e;if(o===void 0)return[r*i];const a=o-Yn[t]-4*e;return[r*i,r*a]}const Zt=[3,0,4,1,5,2,6];function on(n){const[t,e,o]=n,r=Zt[Jt(t)],i=Math.floor((t+1)/7);if(e===void 0)return{step:r,alt:i,dir:o};const a=e+4*i+Yn[r];return{step:r,alt:i,oct:a,dir:o}}function Jt(n){const t=(n+1)%7;return t<0?7+t:t}const Zn={empty:!0,name:"",pc:"",acc:""},Dn=new Map,vn=n=>"CDEFGAB".charAt(n),E=n=>n<0?C("b",-n):C("#",n),G=n=>n[0]==="b"?-n.length:n.length;function u(n){const t=Dn.get(n);if(t)return t;const e=typeof n=="string"?te(n):q(n)?u(ee(n)):z(n)?u(n.name):Zn;return Dn.set(n,e),e}const Wt=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function rn(n){const t=Wt.exec(n);return[t[1].toUpperCase(),t[2].replace(/x/g,"##"),t[3],t[4]]}function F(n){return u(on(n))}const ne=(n,t)=>(n%t+t)%t,pn=[0,2,4,5,7,9,11];function te(n){const t=rn(n);if(t[0]===""||t[3]!=="")return Zn;const e=t[0],o=t[1],r=t[2],i=(e.charCodeAt(0)+3)%7,a=G(o),s=r.length?+r:void 0,c=en({step:i,alt:a,oct:s}),l=e+o+r,m=e+o,d=(pn[i]+a+120)%12,M=s===void 0?ne(pn[i]+a,12)-12*99:pn[i]+a+12*(s+1),h=M>=0&&M<=127?M:null,A=s===void 0?null:Math.pow(2,(M-69)/12)*440;return{empty:!1,acc:o,alt:a,chroma:d,coord:c,freq:A,height:M,letter:e,midi:h,name:l,oct:s,pc:m,step:i}}function ee(n){const{step:t,alt:e,oct:o}=n,r=vn(t);if(!r)return"";const i=r+E(e);return o||o===0?i+o:i}const yn={empty:!0,name:"",acc:""},oe="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",re="(AA|A|P|M|m|d|dd)([-+]?\\d+)",ie=new RegExp("^"+oe+"|"+re+"$");function $n(n){const t=ie.exec(`${n}`);return t===null?["",""]:t[1]?[t[1],t[2]]:[t[4],t[3]]}const Rn={};function f(n){return typeof n=="string"?Rn[n]||(Rn[n]=ae(n)):q(n)?f(ce(n)):z(n)?f(n.name):yn}const kn=[0,2,4,5,7,9,11],Jn="PMMPPMM";function ae(n){const t=$n(n);if(t[0]==="")return yn;const e=+t[0],o=t[1],r=(Math.abs(e)-1)%7,i=Jn[r];if(i==="M"&&o==="P")return yn;const a=i==="M"?"majorable":"perfectable",s=""+e+o,c=e<0?-1:1,l=e===8||e===-8?e:c*(r+1),m=se(a,o),d=Math.floor((Math.abs(e)-1)/7),M=c*(kn[r]+m+12*d),h=(c*(kn[r]+m)%12+12)%12,A=en({step:r,alt:m,oct:d,dir:c});return{empty:!1,name:s,num:e,q:o,step:r,alt:m,dir:c,type:a,simple:l,semitones:M,chroma:h,coord:A,oct:d}}function B(n,t){const[e,o=0]=n,r=e*7+o*12<0,i=t||r?[-e,-o,-1]:[e,o,1];return f(on(i))}function se(n,t){return t==="M"&&n==="majorable"||t==="P"&&n==="perfectable"?0:t==="m"&&n==="majorable"?-1:/^A+$/.test(t)?t.length:/^d+$/.test(t)?-1*(n==="perfectable"?t.length:t.length+1):0}function ce(n){const{step:t,alt:e,oct:o=0,dir:r}=n;if(!r)return"";const i=t+1+7*o,a=i===0?t+1:i,s=r<0?"-":"",c=Jn[t]==="M"?"majorable":"perfectable";return s+a+me(c,e)}function me(n,t){return t===0?n==="majorable"?"M":"P":t===-1&&n==="majorable"?"m":t>0?C("A",t):C("d",n==="perfectable"?t:t+1)}function P(n,t){const e=u(n),o=f(t);if(e.empty||o.empty)return"";const r=e.coord,i=o.coord,a=r.length===1?[r[0]+i[0]]:[r[0]+i[0],r[1]+i[1]];return F(a).name}function D(n,t){const e=u(n),o=u(t);if(e.empty||o.empty)return"";const r=e.coord,i=o.coord,a=i[0]-r[0],s=r.length===2&&i.length===2?i[1]-r[1]:-Math.floor(a*7/12),c=o.height===e.height&&o.midi!==null&&e.midi!==null&&e.step>o.step;return B([a,s],c).name}const Wn=Object.freeze(Object.defineProperty({__proto__:null,accToAlt:G,altToAcc:E,coordToInterval:B,coordToNote:F,decode:on,deprecate:g,distance:D,encode:en,fillStr:C,interval:f,isNamed:z,isPitch:q,note:u,stepToLetter:vn,tokenizeInterval:$n,tokenizeNote:rn,transpose:P},Symbol.toStringTag,{value:"Module"})),On=(n,t)=>Array(t+1).join(n),ue=/^(_{1,}|=|\^{1,}|)([abcdefgABCDEFG])([,']*)$/;function nt(n){const t=ue.exec(n);return t?[t[1],t[2],t[3]]:["","",""]}function W(n){const[t,e,o]=nt(n);if(e==="")return"";let r=4;for(let a=0;a<o.length;a++)r+=o.charAt(a)===","?-1:1;const i=t[0]==="_"?t.replace(/_/g,"b"):t[0]==="^"?t.replace(/\^/g,"#"):"";return e.charCodeAt(0)>96?e.toUpperCase()+i+(r+1):e+i+r}function tt(n){const t=u(n);if(t.empty||!t.oct&&t.oct!==0)return"";const{letter:e,acc:o,oct:r}=t,i=o[0]==="b"?o.replace(/b/g,"_"):o.replace(/#/g,"^"),a=r>4?e.toLowerCase():e,s=r===5?"":r>4?On("'",r-5):On(",",4-r);return i+a+s}function le(n,t){return tt(P(W(n),t))}function de(n,t){return D(W(n),W(t))}var Me={abcToScientificNotation:W,scientificToAbcNotation:tt,tokenize:nt,transpose:le,distance:de};function fe(n,t){const e=[];for(;t--;e[t]=t+n);return e}function Pe(n,t){const e=[];for(;t--;e[t]=n-t);return e}function pe(n,t){return n<t?fe(n,t-n+1):Pe(n,n-t+1)}function he(n,t){const e=t.length,o=(n%e+e)%e;return t.slice(o,e).concat(t.slice(0,o))}function ye(n){return n.filter(t=>t===0||t)}function et(n){return n.map(e=>u(e)).filter(e=>!e.empty).sort((e,o)=>e.height-o.height).map(e=>e.name)}function ge(n){return et(n).filter((t,e,o)=>e===0||t!==o[e-1])}function be(n,t=Math.random){let e,o,r=n.length;for(;r;)e=Math.floor(t()*r--),o=n[r],n[r]=n[e],n[e]=o;return n}function ot(n){return n.length===0?[[]]:ot(n.slice(1)).reduce((t,e)=>t.concat(n.map((o,r)=>{const i=e.slice();return i.splice(r,0,n[0]),i})),[])}const Ae=Object.freeze(Object.defineProperty({__proto__:null,compact:ye,permutations:ot,range:pe,rotate:he,shuffle:be,sortedNoteNames:et,sortedUniqNoteNames:ge},Symbol.toStringTag,{value:"Module"}));function ve(n,t){const e=[];for(;t--;e[t]=t+n);return e}function $e(n,t){const e=[];for(;t--;e[t]=n-t);return e}function an(n,t){return n<t?ve(n,t-n+1):$e(n,n-t+1)}function H(n,t){const e=t.length,o=(n%e+e)%e;return t.slice(o,e).concat(t.slice(0,o))}function Nn(n){return n.filter(t=>t===0||t)}function Ne(n,t=Math.random){let e,o,r=n.length;for(;r;)e=Math.floor(t()*r--),o=n[r],n[r]=n[e],n[e]=o;return n}function rt(n){return n.length===0?[[]]:rt(n.slice(1)).reduce((t,e)=>t.concat(n.map((o,r)=>{const i=e.slice();return i.splice(r,0,n[0]),i})),[])}var Ie={compact:Nn,permutations:rt,range:an,rotate:H,shuffle:Ne};const T={empty:!0,name:"",setNum:0,chroma:"000000000000",normalized:"000000000000",intervals:[]},In=n=>Number(n).toString(2),Fn=n=>parseInt(n,2),je=/^[01]{12}$/;function it(n){return je.test(n)}const Se=n=>typeof n=="number"&&n>=0&&n<=4095,Te=n=>n&&it(n.chroma),zn={[T.chroma]:T};function p(n){const t=it(n)?n:Se(n)?In(n):Array.isArray(n)?ze(n):Te(n)?n.chroma:T.chroma;return zn[t]=zn[t]||Fe(t)}const Ve=g("Pcset.pcset","Pcset.get",p),_e=n=>p(n).chroma,Ce=n=>p(n).intervals,we=n=>p(n).setNum,xe=["1P","2m","2M","3m","3M","4P","5d","5P","6m","6M","7m","7M"];function Ee(n){const t=[];for(let e=0;e<12;e++)n.charAt(e)==="1"&&t.push(xe[e]);return t}function De(){return an(2048,4095).map(In)}function jn(n,t=!0){const o=p(n).chroma.split("");return Nn(o.map((r,i)=>{const a=H(i,o);return t&&a[0]==="0"?null:a.join("")}))}function Re(n,t){return p(n).setNum===p(t).setNum}function sn(n){const t=p(n).setNum;return e=>{const o=p(e).setNum;return t&&t!==o&&(o&t)===o}}function cn(n){const t=p(n).setNum;return e=>{const o=p(e).setNum;return t&&t!==o&&(o|t)===o}}function at(n){const t=p(n);return e=>{const o=u(e);return t&&!o.empty&&t.chroma.charAt(o.chroma)==="1"}}function ke(n){const t=at(n);return e=>e.filter(t)}var st={get:p,chroma:_e,num:we,intervals:Ce,chromas:De,isSupersetOf:cn,isSubsetOf:sn,isNoteIncludedIn:at,isEqual:Re,filter:ke,modes:jn,pcset:Ve};function Oe(n){const t=n.split("");return t.map((e,o)=>H(o,t).join(""))}function Fe(n){const t=Fn(n),e=Oe(n).map(Fn).filter(i=>i>=2048).sort()[0],o=In(e),r=Ee(n);return{empty:!1,name:"",setNum:t,chroma:n,normalized:o,intervals:r}}function ze(n){if(n.length===0)return T.chroma;let t;const e=[0,0,0,0,0,0,0,0,0,0,0,0];for(let o=0;o<n.length;o++)t=u(n[o]),t.empty&&(t=f(n[o])),t.empty||(e[t.chroma]=1);return e.join("")}const qe=[["1P 3M 5P","major","M ^ "],["1P 3M 5P 7M","major seventh","maj7 \u0394 ma7 M7 Maj7 ^7"],["1P 3M 5P 7M 9M","major ninth","maj9 \u03949 ^9"],["1P 3M 5P 7M 9M 13M","major thirteenth","maj13 Maj13 ^13"],["1P 3M 5P 6M","sixth","6 add6 add13 M6"],["1P 3M 5P 6M 9M","sixth/ninth","6/9 69 M69"],["1P 3M 6m 7M","major seventh flat sixth","M7b6 ^7b6"],["1P 3M 5P 7M 11A","major seventh sharp eleventh","maj#4 \u0394#4 \u0394#11 M7#11 ^7#11 maj7#11"],["1P 3m 5P","minor","m min -"],["1P 3m 5P 7m","minor seventh","m7 min7 mi7 -7"],["1P 3m 5P 7M","minor/major seventh","m/ma7 m/maj7 mM7 mMaj7 m/M7 -\u03947 m\u0394 -^7"],["1P 3m 5P 6M","minor sixth","m6 -6"],["1P 3m 5P 7m 9M","minor ninth","m9 -9"],["1P 3m 5P 7M 9M","minor/major ninth","mM9 mMaj9 -^9"],["1P 3m 5P 7m 9M 11P","minor eleventh","m11 -11"],["1P 3m 5P 7m 9M 13M","minor thirteenth","m13 -13"],["1P 3m 5d","diminished","dim \xB0 o"],["1P 3m 5d 7d","diminished seventh","dim7 \xB07 o7"],["1P 3m 5d 7m","half-diminished","m7b5 \xF8 -7b5 h7 h"],["1P 3M 5P 7m","dominant seventh","7 dom"],["1P 3M 5P 7m 9M","dominant ninth","9"],["1P 3M 5P 7m 9M 13M","dominant thirteenth","13"],["1P 3M 5P 7m 11A","lydian dominant seventh","7#11 7#4"],["1P 3M 5P 7m 9m","dominant flat ninth","7b9"],["1P 3M 5P 7m 9A","dominant sharp ninth","7#9"],["1P 3M 7m 9m","altered","alt7"],["1P 4P 5P","suspended fourth","sus4 sus"],["1P 2M 5P","suspended second","sus2"],["1P 4P 5P 7m","suspended fourth seventh","7sus4 7sus"],["1P 5P 7m 9M 11P","eleventh","11"],["1P 4P 5P 7m 9m","suspended fourth flat ninth","b9sus phryg 7b9sus 7b9sus4"],["1P 5P","fifth","5"],["1P 3M 5A","augmented","aug + +5 ^#5"],["1P 3m 5A","minor augmented","m#5 -#5 m+"],["1P 3M 5A 7M","augmented seventh","maj7#5 maj7+5 +maj7 ^7#5"],["1P 3M 5P 7M 9M 11A","major sharp eleventh (lydian)","maj9#11 \u03949#11 ^9#11"],["1P 2M 4P 5P","","sus24 sus4add9"],["1P 3M 5A 7M 9M","","maj9#5 Maj9#5"],["1P 3M 5A 7m","","7#5 +7 7+ 7aug aug7"],["1P 3M 5A 7m 9A","","7#5#9 7#9#5 7alt"],["1P 3M 5A 7m 9M","","9#5 9+"],["1P 3M 5A 7m 9M 11A","","9#5#11"],["1P 3M 5A 7m 9m","","7#5b9 7b9#5"],["1P 3M 5A 7m 9m 11A","","7#5b9#11"],["1P 3M 5A 9A","","+add#9"],["1P 3M 5A 9M","","M#5add9 +add9"],["1P 3M 5P 6M 11A","","M6#11 M6b5 6#11 6b5"],["1P 3M 5P 6M 7M 9M","","M7add13"],["1P 3M 5P 6M 9M 11A","","69#11"],["1P 3m 5P 6M 9M","","m69 -69"],["1P 3M 5P 6m 7m","","7b6"],["1P 3M 5P 7M 9A 11A","","maj7#9#11"],["1P 3M 5P 7M 9M 11A 13M","","M13#11 maj13#11 M13+4 M13#4"],["1P 3M 5P 7M 9m","","M7b9"],["1P 3M 5P 7m 11A 13m","","7#11b13 7b5b13"],["1P 3M 5P 7m 13M","","7add6 67 7add13"],["1P 3M 5P 7m 9A 11A","","7#9#11 7b5#9 7#9b5"],["1P 3M 5P 7m 9A 11A 13M","","13#9#11"],["1P 3M 5P 7m 9A 11A 13m","","7#9#11b13"],["1P 3M 5P 7m 9A 13M","","13#9"],["1P 3M 5P 7m 9A 13m","","7#9b13"],["1P 3M 5P 7m 9M 11A","","9#11 9+4 9#4"],["1P 3M 5P 7m 9M 11A 13M","","13#11 13+4 13#4"],["1P 3M 5P 7m 9M 11A 13m","","9#11b13 9b5b13"],["1P 3M 5P 7m 9m 11A","","7b9#11 7b5b9 7b9b5"],["1P 3M 5P 7m 9m 11A 13M","","13b9#11"],["1P 3M 5P 7m 9m 11A 13m","","7b9b13#11 7b9#11b13 7b5b9b13"],["1P 3M 5P 7m 9m 13M","","13b9"],["1P 3M 5P 7m 9m 13m","","7b9b13"],["1P 3M 5P 7m 9m 9A","","7b9#9"],["1P 3M 5P 9M","","Madd9 2 add9 add2"],["1P 3M 5P 9m","","Maddb9"],["1P 3M 5d","","Mb5"],["1P 3M 5d 6M 7m 9M","","13b5"],["1P 3M 5d 7M","","M7b5"],["1P 3M 5d 7M 9M","","M9b5"],["1P 3M 5d 7m","","7b5"],["1P 3M 5d 7m 9M","","9b5"],["1P 3M 7m","","7no5"],["1P 3M 7m 13m","","7b13"],["1P 3M 7m 9M","","9no5"],["1P 3M 7m 9M 13M","","13no5"],["1P 3M 7m 9M 13m","","9b13"],["1P 3m 4P 5P","","madd4"],["1P 3m 5P 6m 7M","","mMaj7b6"],["1P 3m 5P 6m 7M 9M","","mMaj9b6"],["1P 3m 5P 7m 11P","","m7add11 m7add4"],["1P 3m 5P 9M","","madd9"],["1P 3m 5d 6M 7M","","o7M7"],["1P 3m 5d 7M","","oM7"],["1P 3m 6m 7M","","mb6M7"],["1P 3m 6m 7m","","m7#5"],["1P 3m 6m 7m 9M","","m9#5"],["1P 3m 5A 7m 9M 11P","","m11A"],["1P 3m 6m 9m","","mb6b9"],["1P 2M 3m 5d 7m","","m9b5"],["1P 4P 5A 7M","","M7#5sus4"],["1P 4P 5A 7M 9M","","M9#5sus4"],["1P 4P 5A 7m","","7#5sus4"],["1P 4P 5P 7M","","M7sus4"],["1P 4P 5P 7M 9M","","M9sus4"],["1P 4P 5P 7m 9M","","9sus4 9sus"],["1P 4P 5P 7m 9M 13M","","13sus4 13sus"],["1P 4P 5P 7m 9m 13m","","7sus4b9b13 7b9b13sus4"],["1P 4P 7m 10m","","4 quartal"],["1P 5P 7m 9m 11P","","11b9"]],Ge={...T,name:"",quality:"Unknown",intervals:[],aliases:[]};let R=[],j={};function Sn(n){return j[n]||Ge}const Be=g("ChordType.chordType","ChordType.get",Sn);function He(){return R.map(n=>n.name).filter(n=>n)}function Le(){return R.map(n=>n.aliases[0]).filter(n=>n)}function Ue(){return Object.keys(j)}function k(){return R.slice()}const Xe=g("ChordType.entries","ChordType.all",k);function Ke(){R=[],j={}}function ct(n,t,e){const o=Ye(n),r={...p(n),name:e||"",quality:o,intervals:n,aliases:t};R.push(r),r.name&&(j[r.name]=r),j[r.setNum]=r,j[r.chroma]=r,r.aliases.forEach(i=>Qe(r,i))}function Qe(n,t){j[t]=n}function Ye(n){const t=e=>n.indexOf(e)!==-1;return t("5A")?"Augmented":t("3M")?"Major":t("5d")?"Diminished":t("3m")?"Minor":"Unknown"}qe.forEach(([n,t,e])=>ct(n.split(" "),e.split(" "),t));R.sort((n,t)=>n.setNum-t.setNum);var mt={names:He,symbols:Le,get:Sn,all:k,add:ct,removeAll:Ke,keys:Ue,entries:Xe,chordType:Be};const Ze=n=>{const t=n.reduce((e,o)=>{const r=u(o).chroma;return r!==void 0&&(e[r]=e[r]||u(o).name),e},{});return e=>t[e]};function Je(n){const t=n.map(o=>u(o).pc).filter(o=>o);return u.length===0?[]:We(t,1).filter(o=>o.weight).sort((o,r)=>r.weight-o.weight).map(o=>o.name)}function We(n,t){const e=n[0],o=u(e).chroma,r=Ze(n),i=jn(n,!1),a=[];return i.forEach((s,c)=>{k().filter(m=>m.chroma===s).forEach(m=>{const d=m.aliases[0],M=r(c);c!==o?a.push({weight:.5*t,name:`${M}${d}/${e}`}):a.push({weight:1*t,name:`${M}${d}`})})}),a}const no=[["1P 2M 3M 5P 6M","major pentatonic","pentatonic"],["1P 3M 4P 5P 7M","ionian pentatonic"],["1P 3M 4P 5P 7m","mixolydian pentatonic","indian"],["1P 2M 4P 5P 6M","ritusen"],["1P 2M 4P 5P 7m","egyptian"],["1P 3M 4P 5d 7m","neopolitan major pentatonic"],["1P 3m 4P 5P 6m","vietnamese 1"],["1P 2m 3m 5P 6m","pelog"],["1P 2m 4P 5P 6m","kumoijoshi"],["1P 2M 3m 5P 6m","hirajoshi"],["1P 2m 4P 5d 7m","iwato"],["1P 2m 4P 5P 7m","in-sen"],["1P 3M 4A 5P 7M","lydian pentatonic","chinese"],["1P 3m 4P 6m 7m","malkos raga"],["1P 3m 4P 5d 7m","locrian pentatonic","minor seven flat five pentatonic"],["1P 3m 4P 5P 7m","minor pentatonic","vietnamese 2"],["1P 3m 4P 5P 6M","minor six pentatonic"],["1P 2M 3m 5P 6M","flat three pentatonic","kumoi"],["1P 2M 3M 5P 6m","flat six pentatonic"],["1P 2m 3M 5P 6M","scriabin"],["1P 3M 5d 6m 7m","whole tone pentatonic"],["1P 3M 4A 5A 7M","lydian #5P pentatonic"],["1P 3M 4A 5P 7m","lydian dominant pentatonic"],["1P 3m 4P 5P 7M","minor #7M pentatonic"],["1P 3m 4d 5d 7m","super locrian pentatonic"],["1P 2M 3m 4P 5P 7M","minor hexatonic"],["1P 2A 3M 5P 5A 7M","augmented"],["1P 2M 3m 3M 5P 6M","major blues"],["1P 2M 4P 5P 6M 7m","piongio"],["1P 2m 3M 4A 6M 7m","prometheus neopolitan"],["1P 2M 3M 4A 6M 7m","prometheus"],["1P 2m 3M 5d 6m 7m","mystery #1"],["1P 2m 3M 4P 5A 6M","six tone symmetric"],["1P 2M 3M 4A 5A 7m","whole tone","messiaen's mode #1"],["1P 2m 4P 4A 5P 7M","messiaen's mode #5"],["1P 3m 4P 5d 5P 7m","minor blues","blues"],["1P 2M 3M 4P 5d 6m 7m","locrian major","arabian"],["1P 2m 3M 4A 5P 6m 7M","double harmonic lydian"],["1P 2M 3m 4P 5P 6m 7M","harmonic minor"],["1P 2m 2A 3M 4A 6m 7m","altered","super locrian","diminished whole tone","pomeroy"],["1P 2M 3m 4P 5d 6m 7m","locrian #2","half-diminished","aeolian b5"],["1P 2M 3M 4P 5P 6m 7m","mixolydian b6","melodic minor fifth mode","hindu"],["1P 2M 3M 4A 5P 6M 7m","lydian dominant","lydian b7","overtone"],["1P 2M 3M 4A 5P 6M 7M","lydian"],["1P 2M 3M 4A 5A 6M 7M","lydian augmented"],["1P 2m 3m 4P 5P 6M 7m","dorian b2","phrygian #6","melodic minor second mode"],["1P 2M 3m 4P 5P 6M 7M","melodic minor"],["1P 2m 3m 4P 5d 6m 7m","locrian"],["1P 2m 3m 4d 5d 6m 7d","ultralocrian","superlocrian bb7","superlocrian diminished"],["1P 2m 3m 4P 5d 6M 7m","locrian 6","locrian natural 6","locrian sharp 6"],["1P 2A 3M 4P 5P 5A 7M","augmented heptatonic"],["1P 2M 3m 4A 5P 6M 7m","dorian #4","ukrainian dorian","romanian minor","altered dorian"],["1P 2M 3m 4A 5P 6M 7M","lydian diminished"],["1P 2m 3m 4P 5P 6m 7m","phrygian"],["1P 2M 3M 4A 5A 7m 7M","leading whole tone"],["1P 2M 3M 4A 5P 6m 7m","lydian minor"],["1P 2m 3M 4P 5P 6m 7m","phrygian dominant","spanish","phrygian major"],["1P 2m 3m 4P 5P 6m 7M","balinese"],["1P 2m 3m 4P 5P 6M 7M","neopolitan major"],["1P 2M 3m 4P 5P 6m 7m","aeolian","minor"],["1P 2M 3M 4P 5P 6m 7M","harmonic major"],["1P 2m 3M 4P 5P 6m 7M","double harmonic major","gypsy"],["1P 2M 3m 4P 5P 6M 7m","dorian"],["1P 2M 3m 4A 5P 6m 7M","hungarian minor"],["1P 2A 3M 4A 5P 6M 7m","hungarian major"],["1P 2m 3M 4P 5d 6M 7m","oriental"],["1P 2m 3m 3M 4A 5P 7m","flamenco"],["1P 2m 3m 4A 5P 6m 7M","todi raga"],["1P 2M 3M 4P 5P 6M 7m","mixolydian","dominant"],["1P 2m 3M 4P 5d 6m 7M","persian"],["1P 2M 3M 4P 5P 6M 7M","major","ionian"],["1P 2m 3M 5d 6m 7m 7M","enigmatic"],["1P 2M 3M 4P 5A 6M 7M","major augmented","major #5","ionian augmented","ionian #5"],["1P 2A 3M 4A 5P 6M 7M","lydian #9"],["1P 2m 2M 4P 4A 5P 6m 7M","messiaen's mode #4"],["1P 2m 3M 4P 4A 5P 6m 7M","purvi raga"],["1P 2m 3m 3M 4P 5P 6m 7m","spanish heptatonic"],["1P 2M 3M 4P 5P 6M 7m 7M","bebop"],["1P 2M 3m 3M 4P 5P 6M 7m","bebop minor"],["1P 2M 3M 4P 5P 5A 6M 7M","bebop major"],["1P 2m 3m 4P 5d 5P 6m 7m","bebop locrian"],["1P 2M 3m 4P 5P 6m 7m 7M","minor bebop"],["1P 2M 3m 4P 5d 6m 6M 7M","diminished","whole-half diminished"],["1P 2M 3M 4P 5d 5P 6M 7M","ichikosucho"],["1P 2M 3m 4P 5P 6m 6M 7M","minor six diminished"],["1P 2m 3m 3M 4A 5P 6M 7m","half-whole diminished","dominant diminished","messiaen's mode #2"],["1P 3m 3M 4P 5P 6M 7m 7M","kafi raga"],["1P 2M 3M 4P 4A 5A 6A 7M","messiaen's mode #6"],["1P 2M 3m 3M 4P 5d 5P 6M 7m","composite blues"],["1P 2M 3m 3M 4A 5P 6m 7m 7M","messiaen's mode #3"],["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M","messiaen's mode #7"],["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M","chromatic"]],to={...T,intervals:[],aliases:[]};let mn=[],S={};function ut(){return mn.map(n=>n.name)}function un(n){return S[n]||to}const eo=g("ScaleDictionary.scaleType","ScaleType.get",un);function L(){return mn.slice()}const oo=g("ScaleDictionary.entries","ScaleType.all",L);function ro(){return Object.keys(S)}function io(){mn=[],S={}}function lt(n,t,e=[]){const o={...p(n),name:t,intervals:n,aliases:e};return mn.push(o),S[o.name]=o,S[o.setNum]=o,S[o.chroma]=o,o.aliases.forEach(r=>ao(o,r)),o}function ao(n,t){S[t]=n}no.forEach(([n,t,...e])=>lt(n.split(" "),t,e));var dt={names:ut,get:un,all:L,add:lt,removeAll:io,keys:ro,entries:oo,scaleType:eo};const gn={empty:!0,name:"",symbol:"",root:"",rootDegree:0,type:"",tonic:null,setNum:NaN,quality:"Unknown",chroma:"",normalized:"",aliases:[],notes:[],intervals:[]},so=/^(6|64|7|9|11|13)$/;function ln(n){const[t,e,o,r]=rn(n);return t===""?["",n]:t==="A"&&r==="ug"?["","aug"]:!r&&(o==="4"||o==="5")?[t+e,o]:so.test(o)?[t+e,o+r]:[t+e+o,r]}function U(n){if(n==="")return gn;if(Array.isArray(n)&&n.length===2)return Z(n[1],n[0]);{const[t,e]=ln(n),o=Z(e,t);return o.empty?Z(n):o}}function Z(n,t,e){const o=Sn(n),r=u(t||""),i=u(e||"");if(o.empty||t&&r.empty||e&&i.empty)return gn;const a=D(r.pc,i.pc),s=o.intervals.indexOf(a)+1;if(!i.empty&&!s)return gn;const c=Array.from(o.intervals);for(let M=1;M<s;M++){const h=c[0][0],A=c[0][1],Q=parseInt(h,10)+7;c.push(`${Q}${A}`),c.shift()}const l=r.empty?[]:c.map(M=>P(r,M));n=o.aliases.indexOf(n)!==-1?n:o.aliases[0];const m=`${r.empty?"":r.pc}${n}${i.empty||s<=1?"":"/"+i.pc}`,d=`${t?r.pc+" ":""}${o.name}${s>1&&e?" over "+i.pc:""}`;return{...o,name:d,symbol:m,type:o.name,root:i.name,intervals:c,rootDegree:s,tonic:r.name,notes:l}}const co=g("Chord.chord","Chord.get",U);function mo(n,t){const[e,o]=ln(n);return e?P(e,t)+o:n}function uo(n){const t=U(n),e=cn(t.chroma);return L().filter(o=>e(o.chroma)).map(o=>o.name)}function lo(n){const t=U(n),e=cn(t.chroma);return k().filter(o=>e(o.chroma)).map(o=>t.tonic+o.aliases[0])}function Mo(n){const t=U(n),e=sn(t.chroma);return k().filter(o=>e(o.chroma)).map(o=>t.tonic+o.aliases[0])}var fo={getChord:Z,get:U,detect:Je,chordScales:uo,extended:lo,reduced:Mo,tokenize:ln,transpose:mo,chord:co};const Po=[[.125,"dl",["large","duplex longa","maxima","octuple","octuple whole"]],[.25,"l",["long","longa"]],[.5,"d",["double whole","double","breve"]],[1,"w",["whole","semibreve"]],[2,"h",["half","minim"]],[4,"q",["quarter","crotchet"]],[8,"e",["eighth","quaver"]],[16,"s",["sixteenth","semiquaver"]],[32,"t",["thirty-second","demisemiquaver"]],[64,"sf",["sixty-fourth","hemidemisemiquaver"]],[128,"h",["hundred twenty-eighth"]],[256,"th",["two hundred fifty-sixth"]]],dn=[];Po.forEach(([n,t,e])=>$o(n,t,e));const po={empty:!0,name:"",value:0,fraction:[0,0],shorthand:"",dots:"",names:[]};function ho(){return dn.reduce((n,t)=>(t.names.forEach(e=>n.push(e)),n),[])}function yo(){return dn.map(n=>n.shorthand)}const go=/^([^.]+)(\.*)$/;function Tn(n){const[t,e,o]=go.exec(n)||[],r=dn.find(s=>s.shorthand===e||s.names.includes(e));if(!r)return po;const i=No(r.fraction,o.length),a=i[0]/i[1];return{...r,name:n,dots:o,value:a,fraction:i}}const bo=n=>Tn(n).value,Ao=n=>Tn(n).fraction;var vo={names:ho,shorthands:yo,get:Tn,value:bo,fraction:Ao};function $o(n,t,e){dn.push({empty:!1,dots:"",name:"",value:1/n,fraction:n<1?[1/n,1]:[1,n],shorthand:t,names:e})}function No(n,t){const e=Math.pow(2,t);let o=n[0]*e,r=n[1]*e;const i=o;for(let a=0;a<t;a++)o+=i/Math.pow(2,a+1);for(;o%2===0&&r%2===0;)o/=2,r/=2;return[o,r]}function Io(){return"1P 2M 3M 4P 5P 6m 7m".split(" ")}const Mt=f,jo=n=>f(n).name,So=n=>f(n).semitones,To=n=>f(n).q,Vo=n=>f(n).num;function ft(n){const t=f(n);return t.empty?"":t.simple+t.q}function _o(n){const t=f(n);if(t.empty)return"";const e=(7-t.step)%7,o=t.type==="perfectable"?-t.alt:-(t.alt+1);return f({step:e,alt:o,oct:t.oct,dir:t.dir}).name}const Co=[1,2,2,3,3,4,5,5,6,6,7,7],wo="P m M m M P d P m M m M".split(" ");function xo(n){const t=n<0?-1:1,e=Math.abs(n),o=e%12,r=Math.floor(e/12);return t*(Co[o]+7*r)+wo[o]}const Eo=D,Pt=ht((n,t)=>[n[0]+t[0],n[1]+t[1]]),Do=n=>t=>Pt(n,t),Ro=ht((n,t)=>[n[0]-t[0],n[1]-t[1]]);function pt(n,t){const e=Mt(n);if(e.empty)return"";const[o,r,i]=e.coord;return B([o+t,r,i]).name}var bn={names:Io,get:Mt,name:jo,num:Vo,semitones:So,quality:To,fromSemitones:xo,distance:Eo,invert:_o,simplify:ft,add:Pt,addTo:Do,substract:Ro,transposeFifths:pt};function ht(n){return(t,e)=>{const o=f(t).coord,r=f(e).coord;if(o&&r){const i=n(o,r);return B(i).name}}}function yt(n){return+n>=0&&+n<=127}function gt(n){if(yt(n))return+n;const t=u(n);return t.empty?null:t.midi}function ko(n,t=440){return Math.pow(2,(n-69)/12)*t}const Oo=Math.log(2),Fo=Math.log(440);function Vn(n){const t=12*(Math.log(n)-Fo)/Oo+69;return Math.round(t*100)/100}const zo="C C# D D# E F F# G G# A A# B".split(" "),qo="C Db D Eb E F Gb G Ab A Bb B".split(" ");function I(n,t={}){if(isNaN(n)||n===-1/0||n===1/0)return"";n=Math.round(n);const o=(t.sharps===!0?zo:qo)[n%12];if(t.pitchClass)return o;const r=Math.floor(n/12)-1;return o+r}var Go={isMidi:yt,toMidi:gt,midiToFreq:ko,midiToNoteName:I,freqToMidi:Vn};const Bo=["C","D","E","F","G","A","B"],bt=n=>n.name,At=n=>n.map(u).filter(t=>!t.empty);function Ho(n){return n===void 0?Bo.slice():Array.isArray(n)?At(n).map(bt):[]}const y=u,Lo=n=>y(n).name,Uo=n=>y(n).pc,Xo=n=>y(n).acc,Ko=n=>y(n).oct,Qo=n=>y(n).midi,Yo=n=>y(n).freq,Zo=n=>y(n).chroma;function vt(n){return I(n)}function Jo(n){return I(Vn(n))}function Wo(n){return I(Vn(n),{sharps:!0})}function nr(n){return I(n,{sharps:!0})}const _n=P,tr=P,$t=n=>t=>_n(t,n),er=$t,Nt=n=>t=>_n(n,t),or=Nt;function nn(n,t){const e=y(n);if(e.empty)return"";const[o,r]=e.coord;return F(r===void 0?[o+t]:[o+t,r]).name}const rr=nn,Cn=(n,t)=>n.height-t.height,ir=(n,t)=>t.height-n.height;function It(n,t){return t=t||Cn,At(n).sort(t).map(bt)}function jt(n){return It(n,Cn).filter((t,e,o)=>e===0||t!==o[e-1])}const ar=n=>{const t=y(n);return t.empty?"":I(t.midi||t.chroma,{sharps:t.alt>0,pitchClass:t.midi===null})};function St(n,t){const e=y(n);if(e.empty)return"";const o=y(t||I(e.midi||e.chroma,{sharps:e.alt<0,pitchClass:!0}));if(o.empty||o.chroma!==e.chroma)return"";if(e.oct===void 0)return o.pc;const r=e.chroma-e.alt,i=o.chroma-o.alt,a=r>11||i<0?-1:r<0||i>11?1:0,s=e.oct+a;return o.pc+s}var w={names:Ho,get:y,name:Lo,pitchClass:Uo,accidentals:Xo,octave:Ko,midi:Qo,ascending:Cn,descending:ir,sortedNames:It,sortedUniqNames:jt,fromMidi:vt,fromMidiSharps:nr,freq:Yo,fromFreq:Jo,fromFreqSharps:Wo,chroma:Zo,transpose:_n,tr,transposeBy:$t,trBy:er,transposeFrom:Nt,trFrom:or,transposeFifths:nn,trFifths:rr,simplify:ar,enharmonic:St};const Tt={empty:!0,name:"",chordType:""},qn={};function $(n){return typeof n=="string"?qn[n]||(qn[n]=Mr(n)):typeof n=="number"?$(Mn[n]||""):q(n)?mr(n):z(n)?$(n.name):Tt}const sr=g("RomanNumeral.romanNumeral","RomanNumeral.get",$);function cr(n=!0){return(n?Mn:dr).slice()}function mr(n){return $(E(n.alt)+Mn[n.step])}const ur=/^(#{1,}|b{1,}|x{1,}|)(IV|I{1,3}|VI{0,2}|iv|i{1,3}|vi{0,2})([^IViv]*)$/;function lr(n){return ur.exec(n)||["","","",""]}const Vt="I II III IV V VI VII",Mn=Vt.split(" "),dr=Vt.toLowerCase().split(" ");function Mr(n){const[t,e,o,r]=lr(n);if(!o)return Tt;const i=o.toUpperCase(),a=Mn.indexOf(i),s=G(e),c=1;return{empty:!1,name:t,roman:o,interval:f({step:a,alt:s,dir:c}).name,acc:e,chordType:r,alt:s,step:a,major:o===i,oct:0,dir:c}}var fr={names:cr,get:$,romanNumeral:sr};const b=Object.freeze([]),_t={type:"major",tonic:"",alteration:0,keySignature:""},J={tonic:"",grades:b,intervals:b,scale:b,chords:b,chordsHarmonicFunction:b,chordScales:b},Pr={..._t,...J,type:"major",minorRelative:"",scale:b,secondaryDominants:b,secondaryDominantsMinorRelative:b,substituteDominants:b,substituteDominantsMinorRelative:b},pr={..._t,type:"minor",relativeMajor:"",natural:J,harmonic:J,melodic:J},Gn=(n,t,e="")=>t.map((o,r)=>`${n[r]}${e}${o}`);function fn(n,t,e,o){return r=>{const i=n.map(s=>$(s).interval||""),a=i.map(s=>P(r,s));return{tonic:r,grades:n,intervals:i,scale:a,chords:Gn(a,t),chordsHarmonicFunction:e.slice(),chordScales:Gn(a,o," ")}}}const Ct=(n,t)=>{const e=u(n),o=u(t);return e.empty||o.empty?0:o.coord[0]-e.coord[0]},hr=fn("I II III IV V VI VII".split(" "),"maj7 m7 m7 maj7 7 m7 m7b5".split(" "),"T SD T SD D T D".split(" "),"major,dorian,phrygian,lydian,mixolydian,minor,locrian".split(",")),yr=fn("I II bIII IV V bVI bVII".split(" "),"m7 m7b5 maj7 m7 m7 maj7 7".split(" "),"T SD T SD D SD SD".split(" "),"minor,locrian,major,dorian,phrygian,lydian,mixolydian".split(",")),gr=fn("I II bIII IV V bVI VII".split(" "),"mMaj7 m7b5 +maj7 m7 7 maj7 o7".split(" "),"T SD T SD D SD D".split(" "),"harmonic minor,locrian 6,major augmented,lydian diminished,phrygian dominant,lydian #9,ultralocrian".split(",")),br=fn("I II bIII IV V VI VII".split(" "),"m6 m7 +maj7 7 7 m7b5 m7b5".split(" "),"T SD T SD D  ".split(" "),"melodic minor,dorian b2,lydian augmented,lydian dominant,mixolydian b6,locrian #2,altered".split(","));function Ar(n){const t=u(n).pc;if(!t)return Pr;const e=hr(t),o=Ct("C",t),r=i=>{const a=$(i);return a.empty?"":P(n,a.interval)+a.chordType};return{...e,type:"major",minorRelative:P(t,"-3m"),alteration:o,keySignature:E(o),secondaryDominants:"- VI7 VII7 I7 II7 III7 -".split(" ").map(r),secondaryDominantsMinorRelative:"- IIIm7b5 IV#m7 Vm7 VIm7 VIIm7b5 -".split(" ").map(r),substituteDominants:"- bIII7 IV7 bV7 bVI7 bVII7 -".split(" ").map(r),substituteDominantsMinorRelative:"- IIIm7 Im7 IIbm7 VIm7 IVm7 -".split(" ").map(r)}}function vr(n){const t=u(n).pc;if(!t)return pr;const e=Ct("C",t)-3;return{type:"minor",tonic:t,relativeMajor:P(t,"3m"),alteration:e,keySignature:E(e),natural:yr(t),harmonic:gr(t),melodic:br(t)}}function $r(n){return typeof n=="number"?nn("C",n):typeof n=="string"&&/^b+|#+$/.test(n)?nn("C",G(n)):null}var Nr={majorKey:Ar,majorTonicFromKeySignature:$r,minorKey:vr};const wn=[[0,2773,0,"ionian","","Maj7","major"],[1,2902,2,"dorian","m","m7"],[2,3418,4,"phrygian","m","m7"],[3,2741,-1,"lydian","","Maj7"],[4,2774,1,"mixolydian","","7"],[5,2906,3,"aeolian","m","m7","minor"],[6,3434,5,"locrian","dim","m7b5"]],Bn={...T,name:"",alt:0,modeNum:NaN,triad:"",seventh:"",aliases:[]},xn=wn.map(Tr),An={};xn.forEach(n=>{An[n.name]=n,n.aliases.forEach(t=>{An[t]=n})});function V(n){return typeof n=="string"?An[n.toLowerCase()]||Bn:n&&n.name?V(n.name):Bn}const Ir=g("Mode.mode","Mode.get",V);function wt(){return xn.slice()}const jr=g("Mode.mode","Mode.all",wt);function Sr(){return xn.map(n=>n.name)}function Tr(n){const[t,e,o,r,i,a,s]=n,c=s?[s]:[],l=Number(e).toString(2),m=un(r).intervals;return{empty:!1,intervals:m,modeNum:t,chroma:l,normalized:l,name:r,setNum:e,alt:o,triad:i,seventh:a,aliases:c}}function Vr(n,t){return V(n).intervals.map(e=>P(t,e))}function xt(n){return(t,e)=>{const o=V(t);if(o.empty)return[];const r=H(o.modeNum,n),i=o.intervals.map(a=>P(e,a));return r.map((a,s)=>i[s]+a)}}const _r=xt(wn.map(n=>n[4])),Cr=xt(wn.map(n=>n[5]));function Et(n,t){const e=V(t),o=V(n);return e.empty||o.empty?"":ft(pt("1P",o.alt-e.alt))}function wr(n,t,e){return P(e,Et(n,t))}var xr={get:V,names:Sr,all:wt,distance:Et,relativeTonic:wr,notes:Vr,triads:_r,seventhChords:Cr,entries:jr,mode:Ir};function Er(n,t){return t.map($).map(o=>P(n,f(o))+o.chordType)}function Dr(n,t){return t.map(e=>{const[o,r]=ln(e),i=D(n,o);return $(f(i)).name+r})}var Rr={fromRomanNumerals:Er,toRomanNumerals:Dr};function Dt(n){const t=Nn(n.map(gt));return!n.length||t.length!==n.length?[]:t.reduce((e,o)=>{const r=e[e.length-1];return e.concat(an(r,o).slice(1))},[t[0]])}function kr(n,t){return Dt(n).map(e=>I(e,t))}var Or={numeric:Dt,chromatic:kr};const Fr={empty:!0,name:"",type:"",tonic:null,setNum:NaN,chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function Rt(n){if(typeof n!="string")return["",""];const t=n.indexOf(" "),e=u(n.substring(0,t));if(e.empty){const r=u(n);return r.empty?["",n]:[r.name,""]}const o=n.substring(e.name.length+1);return[e.name,o.length?o:""]}const zr=ut;function N(n){const t=Array.isArray(n)?n:Rt(n),e=u(t[0]).name,o=un(t[1]);if(o.empty)return Fr;const r=o.name,i=e?o.intervals.map(s=>P(e,s)):[],a=e?e+" "+r:r;return{...o,name:a,type:r,tonic:e,notes:i}}const qr=g("Scale.scale","Scale.get",N);function Gr(n){const t=N(n),e=sn(t.chroma);return k().filter(o=>e(o.chroma)).map(o=>o.aliases[0])}function Br(n){const t=N(n),e=cn(t.chroma);return L().filter(o=>e(o.chroma)).map(o=>o.name)}function Hr(n){const t=sn(N(n).chroma);return L().filter(e=>t(e.chroma)).map(e=>e.name)}function kt(n){const t=n.map(r=>u(r).pc).filter(r=>r),e=t[0],o=jt(t);return H(o.indexOf(e),o)}function Lr(n){const t=N(n);if(t.empty)return[];const e=t.tonic?t.notes:t.intervals;return jn(t.chroma).map((o,r)=>{const i=N(o).name;return i?[e[r],i]:["",""]}).filter(o=>o[0])}function Ur(n){const t=Array.isArray(n)?kt(n):N(n).notes,e=t.map(o=>u(o).chroma);return o=>{const r=u(typeof o=="number"?vt(o):o),i=r.height;if(i===void 0)return;const a=i%12,s=e.indexOf(a);if(s!==-1)return St(r.name,t[s])}}function Xr(n){const t=Ur(n);return(e,o)=>{const r=u(e).height,i=u(o).height;return r===void 0||i===void 0?[]:an(r,i).map(t).filter(a=>a)}}var tn={get:N,names:zr,extended:Br,modeNames:Lr,reduced:Hr,scaleChords:Gr,scaleNotes:kt,tokenize:Rt,rangeOf:Xr,scale:qr};const Kr={empty:!0,name:"",upper:void 0,lower:void 0,type:void 0,additive:[]},Qr=["4/4","3/4","2/4","2/2","12/8","9/8","6/8","3/8"];function Yr(){return Qr.slice()}const Zr=/^(\d?\d(?:\+\d)*)\/(\d)$/,Hn=new Map;function Jr(n){const t=Hn.get(n);if(t)return t;const e=ni(En(n));return Hn.set(n,e),e}function En(n){if(typeof n=="string"){const[i,a,s]=Zr.exec(n)||[];return En([a,s])}const[t,e]=n,o=+e;if(typeof t=="number")return[t,o];const r=t.split("+").map(i=>+i);return r.length===1?[r[0],o]:[r,o]}var Wr={names:Yr,parse:En,get:Jr};function ni([n,t]){const e=Array.isArray(n)?n.reduce((s,c)=>s+c,0):n,o=t;if(e===0||o===0)return Kr;const r=Array.isArray(n)?`${n.join("+")}/${t}`:`${n}/${t}`,i=Array.isArray(n)?n:[],a=o===4||o===2?"simple":o===8&&e%3===0?"compound":"irregular";return{empty:!1,name:r,type:a,upper:e,lower:o,additive:i}}const ti=Wn,ei=st,oi=mt,ri=dt,ii=Object.freeze(Object.defineProperty({__proto__:null,Array:Ae,Core:Wn,ChordDictionary:oi,PcSet:ei,ScaleDictionary:ri,Tonal:ti,AbcNotation:Me,Chord:fo,ChordType:mt,Collection:Ie,DurationValue:vo,Interval:bn,Key:Nr,Midi:Go,Mode:xr,Note:w,Pcset:st,Progression:Rr,Range:Or,RomanNumeral:fr,Scale:tn,ScaleType:dt,TimeSignature:Wr,accToAlt:G,altToAcc:E,coordToInterval:B,coordToNote:F,decode:on,deprecate:g,distance:D,encode:en,fillStr:C,interval:f,isNamed:z,isPitch:q,note:u,stepToLetter:vn,tokenizeInterval:$n,tokenizeNote:rn,transpose:P},Symbol.toStringTag,{value:"Module"}));function Ot(n,t,e){let[o,r]=tn.tokenize(n),{notes:i}=tn.get(`${o} ${r}`);if(i=i.map(h=>w.get(h).pc),t=Number(t),isNaN(t))throw new Error(`scale offset "${t}" not a number`);const{pc:a,oct:s=3}=w.get(e),c=i.indexOf(a);if(c===-1)throw new Error(`note "${e}" is not in scale "${n}"`);let l=c,m=s,d=a;const M=Math.sign(t);for(;Math.abs(l-c)<Math.abs(t);){l+=M;const h=Lt(l,i.length);M<0&&d[0]==="C"&&(m+=M),d=i[h],M>0&&d[0]==="C"&&(m+=M)}return d+m}_.prototype._transpose=function(n){return this._withHap(t=>{const e=isNaN(Number(n))?String(n):bn.fromSemitones(n);if(typeof t.value=="number"){const o=typeof e=="string"?bn.semitones(e)||0:e;return t.withValue(()=>t.value+o)}return t.withValue(()=>w.simplify(w.transpose(t.value,e)))})};_.prototype._scaleTranspose=function(n){return this._withHap(t=>{if(!t.context.scale)throw new Error("can only use scaleTranspose after .scale");if(typeof t.value!="string")throw new Error("can only use scaleTranspose with notes");return t.withValue(()=>Ot(t.context.scale,Number(n),t.value))})};_.prototype._scale=function(n){return this._withHap(t=>{let e=t.value;const o=Number(e);if(!isNaN(o)){let[r,i]=tn.tokenize(n);const{pc:a,oct:s=3}=w.get(r);e=Ot(a+" "+i,o,a+s)}return t.withValue(()=>e).setContext({...t.context,scale:n})})};_.prototype.define("transpose",(n,t)=>t.transpose(n),{composable:!0,patternified:!0});_.prototype.define("scale",(n,t)=>t.scale(n),{composable:!0,patternified:!0});_.prototype.define("scaleTranspose",(n,t)=>t.scaleTranspose(n),{composable:!0,patternified:!0});var Ft={},hn={},X={};X.__esModule=!0;X.getBestVoicing=void 0;function ai(n){var t=n.chord,e=n.range,o=n.finder,r=n.picker,i=n.lastVoicing,a=o(t,e);return a.length?r(a,i):[]}X.getBestVoicing=ai;var O={};const zt=Ut(ii);var K={};K.__esModule=!0;K.tokenizeChord=void 0;function si(n){var t=(n||"").match(/^([A-G][b#]*)([^\/]*)[\/]?([A-G][b#]*)?$/);return t?t.slice(1):[]}K.tokenizeChord=si;var Ln;function ci(){if(Ln)return O;Ln=1,O.__esModule=!0,O.voicingsInRange=void 0;var n=zt,t=qt(),e=K;function o(r,i,a){i===void 0&&(i=t.lefthand),a===void 0&&(a=["D3","A4"]);var s=(0,e.tokenizeChord)(r),c=s[0],l=s[1];if(!i[l])return[];var m=i[l].map(function(M){return M.split(" ")}),d=n.Range.chromatic(a);return m.reduce(function(M,h){var A=h.map(function(v){return n.Interval.substract(v,h[0])}),Q=n.Note.transpose(c,h[0]),Gt=d.filter(function(v){return n.Note.chroma(v)===n.Note.chroma(Q)}).filter(function(v){return n.Note.midi(n.Note.transpose(v,A[A.length-1]))<=n.Note.midi(a[1])}).map(function(v){return n.Note.enharmonic(v,Q)}),Bt=Gt.map(function(v){return A.map(function(Ht){return n.Note.transpose(v,Ht)})});return M.concat(Bt)},[])}return O.voicingsInRange=o,O}var Un;function qt(){return Un||(Un=1,function(n){var t=Y&&Y.__assign||function(){return t=Object.assign||function(s){for(var c,l=1,m=arguments.length;l<m;l++){c=arguments[l];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(s[d]=c[d])}return s},t.apply(this,arguments)},e=Y&&Y.__rest||function(s,c){var l={};for(var m in s)Object.prototype.hasOwnProperty.call(s,m)&&c.indexOf(m)<0&&(l[m]=s[m]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,m=Object.getOwnPropertySymbols(s);d<m.length;d++)c.indexOf(m[d])<0&&Object.prototype.propertyIsEnumerable.call(s,m[d])&&(l[m[d]]=s[m[d]]);return l};n.__esModule=!0,n.dictionaryVoicing=n.dictionaryVoicingFinder=n.triads=n.guidetones=n.lefthand=void 0;var o=X,r=ci();n.lefthand={m7:["3m 5P 7m 9M","7m 9M 10m 12P"],7:["3M 6M 7m 9M","7m 9M 10M 13M"],"^7":["3M 5P 7M 9M","7M 9M 10M 12P"],69:["3M 5P 6A 9M"],m7b5:["3m 5d 7m 8P","7m 8P 10m 12d"],"7b9":["3M 6m 7m 9m","7m 9m 10M 13m"],"7b13":["3M 6m 7m 9m","7m 9m 10M 13m"],o7:["1P 3m 5d 6M","5d 6M 8P 10m"],"7#11":["7m 9M 11A 13A"],"7#9":["3M 7m 9A"],mM7:["3m 5P 7M 9M","7M 9M 10m 12P"],m6:["3m 5P 6M 9M","6M 9M 10m 12P"]},n.guidetones={m7:["3m 7m","7m 10m"],m9:["3m 7m","7m 10m"],7:["3M 7m","7m 10M"],"^7":["3M 7M","7M 10M"],"^9":["3M 7M","7M 10M"],69:["3M 6M"],6:["3M 6M","6M 10M"],m7b5:["3m 7m","7m 10m"],"7b9":["3M 7m","7m 10M"],"7b13":["3M 7m","7m 10M"],o7:["3m 6M","6M 10m"],"7#11":["3M 7m","7m 10M"],"7#9":["3M 7m","7m 10M"],mM7:["3m 7M","7M 10m"],m6:["3m 6M","6M 10m"]},n.triads={M:["1P 3M 5P","3M 5P 8P","5P 8P 10M"],m:["1P 3m 5P","3m 5P 8P","5P 8P 10m"],o:["1P 3m 5d","3m 5d 8P","5d 8P 10m"],aug:["1P 3m 5A","3m 5A 8P","5A 8P 10m"]};var i=function(s){return function(c,l){return(0,r.voicingsInRange)(c,s,l)}};n.dictionaryVoicingFinder=i;var a=function(s){var c=s.dictionary,l=s.range,m=e(s,["dictionary","range"]);return(0,o.getBestVoicing)(t(t({},m),{range:l,finder:(0,n.dictionaryVoicingFinder)(c)}))};n.dictionaryVoicing=a}(hn)),hn}var Pn={};Pn.__esModule=!0;Pn.minTopNoteDiff=void 0;var Xn=zt;function mi(n,t){if(!t)return n[0];var e=function(o){return Math.abs(Xn.Note.midi(t[t.length-1])-Xn.Note.midi(o[o.length-1]))};return n.reduce(function(o,r){return e(r)<e(o)?r:o},n[0])}Pn.minTopNoteDiff=mi;(function(n){n.__esModule=!0;var t=qt(),e=Pn,o=X,r=K;n.default={tokenizeChord:r.tokenizeChord,getBestVoicing:o.getBestVoicing,dictionaryVoicing:t.dictionaryVoicing,dictionaryVoicingFinder:t.dictionaryVoicingFinder,lefthand:t.lefthand,guidetones:t.guidetones,triads:t.triads,minTopNoteDiff:e.minTopNoteDiff}})(Ft);const Kn=Xt(Ft),{dictionaryVoicing:ui,minTopNoteDiff:li,lefthand:di}=Kn.default||Kn,Mi=(n,t,e=["F3","A4"])=>ui({chord:n,dictionary:di,range:e,picker:li,lastVoicing:t}),x=_;x.prototype.fmapNested=function(n){return new x(t=>this.query(t).map(e=>Kt(n(e)).query(t).map(o=>new Qt(e.whole,e.part,o.value,o.context))).flat())};x.prototype.voicings=function(n){let t;return n!=null&&n.length||(n=["F3","A4"]),this.fmapNested(e=>(t=Mi(e.value,t,n),Yt(...t)._withContext(()=>({locations:e.context.locations||[]}))))};x.prototype._rootNotes=function(n=2){return this.fmap(t=>{const[e,o]=t.match(/^([a-gA-G][b#]?).*$/);return o+n})};x.prototype.define("voicings",(n,t)=>t.voicings(n),{composable:!0});x.prototype.define("rootNotes",(n,t)=>t.rootNotes(n),{composable:!0,patternified:!0});
