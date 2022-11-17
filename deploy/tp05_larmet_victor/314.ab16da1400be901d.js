"use strict";(self.webpackChunktp05_larmet_victor=self.webpackChunktp05_larmet_victor||[]).push([[314],{2314:(N,m,l)=>{l.r(m),l.d(m,{CatalogueModule:()=>b});var c=l(6895),s=l(4004),a=l(4006),t=l(8274),f=l(2340),p=l(529);let h=(()=>{class o{constructor(e){this.http=e,this.env=f.N,this.listProducts=[]}getCatalogue(){return this.http.get(this.env.catalogue)}getCatalogueDistinctTypeToxicity(){return this.http.get(this.env.catalogue).pipe((0,s.U)(e=>e.map(i=>i.toxicity).filter((i,n,d)=>d.indexOf(i)===n)))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(p.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var C=l(1370),u=l(3074),T=l(4318);const v=function(o){return[o]},x=function(){return["/catalogue"]};function Z(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.qZA()(),t.TgZ(6,"button",3),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.addMushroomToStore(n.mushroom))}),t._uU(7," Add to store $ "),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"a",4),t._uU(10," Back "),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("routerLink",t.VKq(4,v,e.mushroom.id)),t.xp6(2),t.hij(" Name : ",e.mushroom.name,""),t.xp6(2),t.hij(" Description : ",e.mushroom.description,""),t.xp6(4),t.Q6J("routerLink",t.DdM(6,x))}}let g=(()=>{class o{constructor(e,i,n){this.mushService=e,this.route=i,this.store=n}ngOnInit(){this.mushService.getCatalogue().subscribe(e=>{this.mushroom=e.find(i=>i.id==this.route.snapshot.params.id)}),console.log(this.mushroom)}addMushroomToStore(e){this.store.dispatch(new C.B(e))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h),t.Y36(u.gz),t.Y36(T.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-details-catalogue"]],decls:1,vars:1,consts:[["class","detailsGroup",4,"ngIf"],[1,"detailsGroup"],[3,"routerLink"],[1,"detailsBtnAdd",3,"click"],[1,"detailsBtn",3,"routerLink"]],template:function(e,i){1&e&&t.YNc(0,Z,11,7,"div",0),2&e&&t.Q6J("ngIf",i.mushroom)},dependencies:[c.O5,u.rH,u.yS],styles:[".detailsGroup[_ngcontent-%COMP%]{margin:2em;padding:1em;justify-content:center;align-items:center;background-color:#ffffff31;border-radius:5px;box-shadow:0 0 10px #0003}"]}),o})();function _(o,r){if(1&o&&(t.TgZ(0,"option"),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.hij(" ",e," ")}}const y=function(o){return["/catalogue",o]};function F(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"div",7)(2,"div",8),t._UZ(3,"img",9),t.qZA(),t.TgZ(4,"div",10)(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"button",11),t.NdJ("click",function(){const d=t.CHM(e).$implicit,U=t.oxw();return t.KtG(U.quickAddMushroomToStore(d))}),t._uU(14," Quick add $ "),t.qZA(),t._UZ(15,"br"),t.TgZ(16,"a",12),t._uU(17," Voir d\xe9tails (+) "),t.qZA()()()()}if(2&o){const e=r.$implicit;t.xp6(3),t.s9C("src",e.img,t.LSH),t.xp6(3),t.hij(" Name : ",e.name,""),t.xp6(2),t.hij(" Edible : ",e.edible,""),t.xp6(2),t.hij(" Poisonous : ",e.poisonous,""),t.xp6(2),t.hij(" Toxicity : ",e.toxicity,""),t.xp6(4),t.Q6J("routerLink",t.VKq(6,y,e.id))}}const A=[{path:"",component:(()=>{class o{constructor(e,i){this.tsCatalogue=e,this.details=i,this.formSearchText=new a.cw({nameFilter:new a.NI("",[a.kI.required,a.kI.pattern("[a-z]*")]),toxicityFilter:new a.NI("",[a.kI.required])}),this.formChoiceEdible=new a.cw({edibleFilter:new a.NI("")}),this.formChoiceToxicity=new a.cw({toxicityFilter:new a.NI("")})}quickAddMushroomToStore(e){this.details.addMushroomToStore(e)}ngOnInit(){this.catalogue$=this.tsCatalogue.getCatalogue(),this.uniqueData$=this.tsCatalogue.getCatalogueDistinctTypeToxicity()}doFilterMushroomEdible(){this.catalogue$=this.tsCatalogue.getCatalogue().pipe((0,s.U)(e=>e.filter(i=>{let n=!1;return n="Yes"===this.formChoiceEdible.value.edibleFilter?!0===i.edible.valueOf():"No"!==this.formChoiceEdible.value.edibleFilter||!1===i.edible.valueOf(),n})))}doFilterMushroomName(){this.catalogue$=this.tsCatalogue.getCatalogue().pipe((0,s.U)(e=>e.filter(i=>{let n=!1;return n=""==this.formSearchText.value.nameFilter||i.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").indexOf(this.formSearchText.value.nameFilter.toLowerCase())>-1,n})))}doFilterDistinctToxicity(){this.catalogue$=this.tsCatalogue.getCatalogue().pipe((0,s.U)(e=>e.filter(i=>{let n=!1;return console.log(this.formChoiceToxicity.value.toxicityFilter.valueOf().length),n=0===this.formChoiceToxicity.value.toxicityFilter.valueOf().length||this.formChoiceToxicity.value.toxicityFilter.valueOf().includes(i.toxicity.valueOf()),n})))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(h),t.Y36(g))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-catalogue"]],decls:30,vars:9,consts:[[1,"listCatalogue"],[1,"groupFilter"],[3,"formGroup"],["type","text","formControlName","nameFilter",3,"keydown"],["formControlName","edibleFilter",3,"change"],["formControlName","toxicityFilter","multiple","","size","3",3,"change"],[4,"ngFor","ngForOf"],[1,"itemCatalogue"],[1,"imgCatalogue"],["alt","N/A",3,"src"],[1,"infoCatalogue"],[1,"detailsBtnAdd",3,"click"],[1,"detailsBtn",3,"routerLink"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3,"Filter :"),t.qZA(),t.TgZ(4,"form",2)(5,"label"),t._uU(6,"Name : "),t.TgZ(7,"input",3),t.NdJ("keydown",function(){return i.doFilterMushroomName()}),t.qZA()()(),t.TgZ(8,"form",2)(9,"label"),t._uU(10,"Edible : "),t.TgZ(11,"select",4),t.NdJ("change",function(){return i.doFilterMushroomEdible()}),t.TgZ(12,"option"),t._uU(13," All "),t.qZA(),t.TgZ(14,"option"),t._uU(15," Yes "),t.qZA(),t.TgZ(16,"option"),t._uU(17," No "),t.qZA()()()(),t.TgZ(18,"form",2)(19,"label"),t._uU(20,"Toxicity : "),t.qZA(),t._UZ(21,"br"),t.TgZ(22,"select",5),t.NdJ("change",function(){return i.doFilterDistinctToxicity()}),t.YNc(23,_,2,1,"option",6),t.ALo(24,"async"),t.qZA()()(),t.TgZ(25,"div")(26,"h3"),t._uU(27," List of mushrooms :"),t.qZA(),t.YNc(28,F,18,8,"div",6),t.ALo(29,"async"),t.qZA()()),2&e&&(t.xp6(4),t.Q6J("formGroup",i.formSearchText),t.xp6(4),t.Q6J("formGroup",i.formChoiceEdible),t.xp6(10),t.Q6J("formGroup",i.formChoiceToxicity),t.xp6(5),t.Q6J("ngForOf",t.lcZ(24,5,i.uniqueData$)),t.xp6(5),t.Q6J("ngForOf",t.lcZ(29,7,i.catalogue$)))},dependencies:[c.sg,u.yS,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.K7,a.JJ,a.JL,a.sg,a.u,c.Ov],styles:[".itemCatalogue[_ngcontent-%COMP%]{orientation:center;border:1px solid #ccc;padding:.5em;display:flex;flex-direction:row}.imgCatalogue[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20em;height:20em}.infoCatalogue[_ngcontent-%COMP%]{margin:0 2em}.infoCatalogue[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:.2em}.listCatalogue[_ngcontent-%COMP%]{margin:1em 2em}.groupFilter[_ngcontent-%COMP%]{border:1px solid #ccc;padding:1em;margin:1em 20em;border-radius:1em}"]}),o})()},{path:":id",component:g}];let b=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[g],imports:[c.ez,u.Bz.forChild(A),p.JF,a.UX,a.u5]}),o})()}}]);