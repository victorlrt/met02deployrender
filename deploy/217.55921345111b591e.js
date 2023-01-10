"use strict";(self.webpackChunkprojet_larmet_victor=self.webpackChunkprojet_larmet_victor||[]).push([[217],{3217:(it,x,r)=>{r.r(x),r.d(x,{CatalogueModule:()=>T});var g=r(6895),U=r(8421),M=r(9751),E=r(5577),O=r(1144),u=r(576),L=r(3268);const N=["addListener","removeListener"],J=["addEventListener","removeEventListener"],b=["on","off"];function y(n,o,e,i){if((0,u.m)(e)&&(i=e,e=void 0),i)return y(n,o,e).pipe((0,L.Z)(i));const[l,c]=function $(n){return(0,u.m)(n.addEventListener)&&(0,u.m)(n.removeEventListener)}(n)?J.map(a=>d=>n[a](o,d,e)):function P(n){return(0,u.m)(n.addListener)&&(0,u.m)(n.removeListener)}(n)?N.map(Z(n,o)):function S(n){return(0,u.m)(n.on)&&(0,u.m)(n.off)}(n)?b.map(Z(n,o)):[];if(!l&&(0,O.z)(n))return(0,E.z)(a=>y(a,o,e))((0,U.Xf)(n));if(!l)throw new TypeError("Invalid event target");return new M.y(a=>{const d=(...f)=>a.next(1<f.length?f:f[0]);return l(d),()=>c(d)})}function Z(n,o){return e=>i=>n[e](o,i)}var w=r(3900),I=r(9646),p=r(4004),j=r(4408);const Y=new(r(7565).v)(j.o);var D=r(4482),G=r(5403),q=r(1884),z=r(262),s=r(4006),t=r(8274),A=r(7194),B=r(1370),v=r(8741),H=r(3658);const K=function(n){return[n]},V=function(){return["/catalogue"]};function X(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.qZA()(),t.TgZ(6,"button",3),t.NdJ("click",function(){t.CHM(e);const l=t.oxw();return t.KtG(l.addMushroomToStore(l.mushroom))}),t._uU(7," Add to store $ "),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"a",4),t._uU(10," Back "),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("routerLink",t.VKq(4,K,e.mushroom.id)),t.xp6(2),t.hij(" Name : ",e.mushroom.name,""),t.xp6(2),t.hij(" Description : ",e.mushroom.description,""),t.xp6(4),t.Q6J("routerLink",t.DdM(6,V))}}class m{constructor(o,e,i){this.mushService=o,this.route=e,this.store=i}ngOnInit(){this.mushService.getAll().subscribe(o=>{this.mushroom=o.find(e=>e.id==this.route.snapshot.params.id)}),console.log(this.mushroom)}addMushroomToStore(o){this.store.dispatch(new B.B(o))}static#t=this.\u0275fac=function(e){return new(e||m)(t.Y36(A.k),t.Y36(v.gz),t.Y36(H.yh))};static#e=this.\u0275cmp=t.Xpm({type:m,selectors:[["app-details-catalogue"]],decls:1,vars:1,consts:[["class","detailsGroup",4,"ngIf"],[1,"detailsGroup"],[3,"routerLink"],[1,"detailsBtnAdd",3,"click"],[1,"detailsBtn",3,"routerLink"]],template:function(e,i){1&e&&t.YNc(0,X,11,7,"div",0),2&e&&t.Q6J("ngIf",i.mushroom)},dependencies:[g.O5,v.rH],styles:[".detailsGroup[_ngcontent-%COMP%]{margin:2em;padding:1em;justify-content:center;align-items:center;background-color:#ffffff31;border-radius:5px;box-shadow:0 0 10px #0003}"]})}const R=["search"];function W(n,o){if(1&n&&(t.TgZ(0,"option"),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij(" ",e," ")}}const _=function(n){return["/catalogue",n]};function tt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"div",10)(2,"div",11),t._UZ(3,"img",12),t.qZA(),t.TgZ(4,"div",13)(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"button",14),t.NdJ("click",function(){const c=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.quickAddMushroomToStore(c))}),t._uU(14," Quick add $ "),t.qZA(),t._UZ(15,"br"),t.TgZ(16,"a",15),t._uU(17," Voir d\xe9tails (+) "),t.qZA()()()()}if(2&n){const e=o.$implicit;t.xp6(3),t.s9C("src",e.img,t.LSH),t.xp6(3),t.hij(" Name : ",e.name,""),t.xp6(2),t.hij(" Edible : ",e.edible,""),t.xp6(2),t.hij(" Poisonous : ",e.poisonous,""),t.xp6(2),t.hij(" Toxicity : ",e.toxicity,""),t.xp6(4),t.Q6J("routerLink",t.VKq(6,_,e.id))}}class C{constructor(o,e){this.tsCatalogue=o,this.details=e,this.formSearchText=new s.cw({nameFilter:new s.NI("",[s.kI.required,s.kI.pattern("[a-z]*")]),toxicityFilter:new s.NI("",[s.kI.required])}),this.formChoiceEdible=new s.cw({edibleFilter:new s.NI("")}),this.formChoiceToxicity=new s.cw({toxicityFilter:new s.NI("")})}quickAddMushroomToStore(o){this.details.addMushroomToStore(o)}ngOnInit(){this.catalogue$=this.tsCatalogue.getAll(),this.uniqueData$=this.tsCatalogue.getAllDistinctTypeToxicity()}doFilterMushroomEdible(){this.catalogue$=this.tsCatalogue.getAll().pipe((0,p.U)(o=>o.filter(e=>{let i=!1;return i="Yes"===this.formChoiceEdible.value.edibleFilter?!0===e.edible.valueOf():"No"!==this.formChoiceEdible.value.edibleFilter||!1===e.edible.valueOf(),i})))}doFilterMushroomName(){this.catalogue$=this.tsCatalogue.getAll().pipe((0,p.U)(o=>o.filter(e=>{let i=!1;return i=""==this.formSearchText.value.nameFilter||e.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").indexOf(this.formSearchText.value.nameFilter.toLowerCase())>-1,i})))}doFilterDistinctToxicity(){this.catalogue$=this.tsCatalogue.getAll().pipe((0,p.U)(o=>o.filter(e=>{let i=!1;return console.log(this.formChoiceToxicity.value.toxicityFilter.valueOf().length),i=0===this.formChoiceToxicity.value.toxicityFilter.valueOf().length||this.formChoiceToxicity.value.toxicityFilter.valueOf().includes(e.toxicity.valueOf()),i})))}ngAfterViewInit(){this.searchField$=y(this.input.nativeElement,"keyup"),this.model=this.searchField$.pipe((0,p.U)(o=>o.target.value),function k(n,o=Y){return(0,D.e)((e,i)=>{let l=null,c=null,a=null;const d=()=>{if(l){l.unsubscribe(),l=null;const h=c;c=null,i.next(h)}};function f(){const h=a+n,F=o.now();if(F<h)return l=this.schedule(void 0,h-F),void i.add(l);d()}e.subscribe((0,G.x)(i,h=>{c=h,a=o.now(),l||(l=o.schedule(f,n),i.add(l))},()=>{d(),i.complete()},void 0,()=>{c=l=null}))})}(1e3),(0,q.x)(),(0,w.w)(o=>this.tsCatalogue.search(o).pipe((0,z.K)(()=>(0,I.of)([]))))),this.model.subscribe(o=>{this.catalogue$=o})}static#t=this.\u0275fac=function(e){return new(e||C)(t.Y36(A.k),t.Y36(m))};static#e=this.\u0275cmp=t.Xpm({type:C,selectors:[["app-product-catalogue"]],viewQuery:function(e,i){if(1&e&&t.Gf(R,7),2&e){let l;t.iGM(l=t.CRH())&&(i.input=l.first)}},decls:35,vars:9,consts:[[1,"listCatalogue"],[1,"groupFilter"],[3,"formGroup"],["type","text","formControlName","nameFilter",3,"keydown"],["formControlName","edibleFilter",3,"change"],["formControlName","toxicityFilter","multiple","","size","3",3,"change"],[4,"ngFor","ngForOf"],[1,"form-group"],["type","text","placeholder","Mushrooms",1,"form-control"],["search",""],[1,"itemCatalogue"],[1,"imgCatalogue"],["alt","N/A",3,"src"],[1,"infoCatalogue"],[1,"detailsBtnAdd",3,"click"],[1,"detailsBtn",3,"routerLink"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3,"Filter :"),t.qZA(),t.TgZ(4,"form",2)(5,"label"),t._uU(6,"Name : "),t.TgZ(7,"input",3),t.NdJ("keydown",function(){return i.doFilterMushroomName()}),t.qZA()()(),t.TgZ(8,"form",2)(9,"label"),t._uU(10,"Edible : "),t.TgZ(11,"select",4),t.NdJ("change",function(){return i.doFilterMushroomEdible()}),t.TgZ(12,"option"),t._uU(13," All "),t.qZA(),t.TgZ(14,"option"),t._uU(15," Yes "),t.qZA(),t.TgZ(16,"option"),t._uU(17," No "),t.qZA()()()(),t.TgZ(18,"form",2)(19,"label"),t._uU(20,"Toxicity : "),t.qZA(),t._UZ(21,"br"),t.TgZ(22,"select",5),t.NdJ("change",function(){return i.doFilterDistinctToxicity()}),t.YNc(23,W,2,1,"option",6),t.ALo(24,"async"),t.qZA()(),t.TgZ(25,"div",7)(26,"label"),t._uU(27,"Search mushrooms"),t.qZA(),t._UZ(28,"input",8,9),t.qZA()(),t.TgZ(30,"div")(31,"h3"),t._uU(32," List of mushrooms :"),t.qZA(),t.YNc(33,tt,18,8,"div",6),t.ALo(34,"async"),t.qZA()()),2&e&&(t.xp6(4),t.Q6J("formGroup",i.formSearchText),t.xp6(4),t.Q6J("formGroup",i.formChoiceEdible),t.xp6(10),t.Q6J("formGroup",i.formChoiceToxicity),t.xp6(5),t.Q6J("ngForOf",t.lcZ(24,5,i.uniqueData$)),t.xp6(10),t.Q6J("ngForOf",t.lcZ(34,7,i.catalogue$)))},dependencies:[g.sg,v.rH,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.K7,s.JJ,s.JL,s.sg,s.u,g.Ov],styles:[".itemCatalogue[_ngcontent-%COMP%]{orientation:center;border:1px solid #ccc;padding:.5em;display:flex;flex-direction:row}.imgCatalogue[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20em;height:20em}.infoCatalogue[_ngcontent-%COMP%]{margin:0 2em}.infoCatalogue[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:.2em}.listCatalogue[_ngcontent-%COMP%]{margin:1em 2em}.groupFilter[_ngcontent-%COMP%]{border:1px solid #ccc;padding:1em;margin:1em 20em;border-radius:1em}"]})}var et=r(529);const ot=[{path:"",component:C},{path:":id",component:m}];class T{static#t=this.\u0275fac=function(e){return new(e||T)};static#e=this.\u0275mod=t.oAB({type:T});static#o=this.\u0275inj=t.cJS({providers:[m],imports:[g.ez,v.Bz.forChild(ot),et.JF,s.UX,s.u5]})}}}]);