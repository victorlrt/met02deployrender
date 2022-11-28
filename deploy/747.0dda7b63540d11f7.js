"use strict";(self.webpackChunktp05_larmet_victor=self.webpackChunktp05_larmet_victor||[]).push([[747],{5747:(N,p,r)=>{r.r(p),r.d(p,{CatalogueModule:()=>d});var c=r(6895),g=r(4004),n=r(4006),t=r(8274),h=r(5945),f=r(1370),u=r(9342),C=r(4163);const T=function(a){return[a]},x=function(){return["/catalogue"]};function Z(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5),t.qZA()(),t.TgZ(6,"button",3),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.addMushroomToStore(s.mushroom))}),t._uU(7," Add to store $ "),t.qZA(),t._UZ(8,"br"),t.TgZ(9,"a",4),t._uU(10," Back "),t.qZA()()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("routerLink",t.VKq(4,T,e.mushroom.id)),t.xp6(2),t.hij(" Name : ",e.mushroom.name,""),t.xp6(2),t.hij(" Description : ",e.mushroom.description,""),t.xp6(4),t.Q6J("routerLink",t.DdM(6,x))}}class l{constructor(i,e,o){this.mushService=i,this.route=e,this.store=o}ngOnInit(){this.mushService.getCatalogue().subscribe(i=>{this.mushroom=i.find(e=>e.id==this.route.snapshot.params.id)}),console.log(this.mushroom)}addMushroomToStore(i){this.store.dispatch(new f.B(i))}static#t=this.\u0275fac=function(e){return new(e||l)(t.Y36(h.k),t.Y36(u.gz),t.Y36(C.yh))};static#e=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-details-catalogue"]],decls:1,vars:1,consts:[["class","detailsGroup",4,"ngIf"],[1,"detailsGroup"],[3,"routerLink"],[1,"detailsBtnAdd",3,"click"],[1,"detailsBtn",3,"routerLink"]],template:function(e,o){1&e&&t.YNc(0,Z,11,7,"div",0),2&e&&t.Q6J("ngIf",o.mushroom)},dependencies:[c.O5,u.rH],styles:[".detailsGroup[_ngcontent-%COMP%]{margin:2em;padding:1em;justify-content:center;align-items:center;background-color:#ffffff31;border-radius:5px;box-shadow:0 0 10px #0003}"]})}function v(a,i){if(1&a&&(t.TgZ(0,"option"),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",e," ")}}const _=function(a){return["/catalogue",a]};function F(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div")(1,"div",7)(2,"div",8),t._UZ(3,"img",9),t.qZA(),t.TgZ(4,"div",10)(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"button",11),t.NdJ("click",function(){const b=t.CHM(e).$implicit,U=t.oxw();return t.KtG(U.quickAddMushroomToStore(b))}),t._uU(14," Quick add $ "),t.qZA(),t._UZ(15,"br"),t.TgZ(16,"a",12),t._uU(17," Voir d\xe9tails (+) "),t.qZA()()()()}if(2&a){const e=i.$implicit;t.xp6(3),t.s9C("src",e.img,t.LSH),t.xp6(3),t.hij(" Name : ",e.name,""),t.xp6(2),t.hij(" Edible : ",e.edible,""),t.xp6(2),t.hij(" Poisonous : ",e.poisonous,""),t.xp6(2),t.hij(" Toxicity : ",e.toxicity,""),t.xp6(4),t.Q6J("routerLink",t.VKq(6,_,e.id))}}class m{constructor(i,e){this.tsCatalogue=i,this.details=e,this.formSearchText=new n.cw({nameFilter:new n.NI("",[n.kI.required,n.kI.pattern("[a-z]*")]),toxicityFilter:new n.NI("",[n.kI.required])}),this.formChoiceEdible=new n.cw({edibleFilter:new n.NI("")}),this.formChoiceToxicity=new n.cw({toxicityFilter:new n.NI("")})}quickAddMushroomToStore(i){this.details.addMushroomToStore(i)}ngOnInit(){this.catalogue$=this.tsCatalogue.getCatalogue(),this.uniqueData$=this.tsCatalogue.getCatalogueDistinctTypeToxicity()}doFilterMushroomEdible(){this.catalogue$=this.tsCatalogue.getCatalogue().pipe((0,g.U)(i=>i.filter(e=>{let o=!1;return o="Yes"===this.formChoiceEdible.value.edibleFilter?!0===e.edible.valueOf():"No"!==this.formChoiceEdible.value.edibleFilter||!1===e.edible.valueOf(),o})))}doFilterMushroomName(){this.catalogue$=this.tsCatalogue.getCatalogue().pipe((0,g.U)(i=>i.filter(e=>{let o=!1;return o=""==this.formSearchText.value.nameFilter||e.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").indexOf(this.formSearchText.value.nameFilter.toLowerCase())>-1,o})))}doFilterDistinctToxicity(){this.catalogue$=this.tsCatalogue.getCatalogue().pipe((0,g.U)(i=>i.filter(e=>{let o=!1;return console.log(this.formChoiceToxicity.value.toxicityFilter.valueOf().length),o=0===this.formChoiceToxicity.value.toxicityFilter.valueOf().length||this.formChoiceToxicity.value.toxicityFilter.valueOf().includes(e.toxicity.valueOf()),o})))}static#t=this.\u0275fac=function(e){return new(e||m)(t.Y36(h.k),t.Y36(l))};static#e=this.\u0275cmp=t.Xpm({type:m,selectors:[["app-product-catalogue"]],decls:30,vars:9,consts:[[1,"listCatalogue"],[1,"groupFilter"],[3,"formGroup"],["type","text","formControlName","nameFilter",3,"keydown"],["formControlName","edibleFilter",3,"change"],["formControlName","toxicityFilter","multiple","","size","3",3,"change"],[4,"ngFor","ngForOf"],[1,"itemCatalogue"],[1,"imgCatalogue"],["alt","N/A",3,"src"],[1,"infoCatalogue"],[1,"detailsBtnAdd",3,"click"],[1,"detailsBtn",3,"routerLink"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3,"Filter :"),t.qZA(),t.TgZ(4,"form",2)(5,"label"),t._uU(6,"Name : "),t.TgZ(7,"input",3),t.NdJ("keydown",function(){return o.doFilterMushroomName()}),t.qZA()()(),t.TgZ(8,"form",2)(9,"label"),t._uU(10,"Edible : "),t.TgZ(11,"select",4),t.NdJ("change",function(){return o.doFilterMushroomEdible()}),t.TgZ(12,"option"),t._uU(13," All "),t.qZA(),t.TgZ(14,"option"),t._uU(15," Yes "),t.qZA(),t.TgZ(16,"option"),t._uU(17," No "),t.qZA()()()(),t.TgZ(18,"form",2)(19,"label"),t._uU(20,"Toxicity : "),t.qZA(),t._UZ(21,"br"),t.TgZ(22,"select",5),t.NdJ("change",function(){return o.doFilterDistinctToxicity()}),t.YNc(23,v,2,1,"option",6),t.ALo(24,"async"),t.qZA()()(),t.TgZ(25,"div")(26,"h3"),t._uU(27," List of mushrooms :"),t.qZA(),t.YNc(28,F,18,8,"div",6),t.ALo(29,"async"),t.qZA()()),2&e&&(t.xp6(4),t.Q6J("formGroup",o.formSearchText),t.xp6(4),t.Q6J("formGroup",o.formChoiceEdible),t.xp6(10),t.Q6J("formGroup",o.formChoiceToxicity),t.xp6(5),t.Q6J("ngForOf",t.lcZ(24,5,o.uniqueData$)),t.xp6(5),t.Q6J("ngForOf",t.lcZ(29,7,o.catalogue$)))},dependencies:[c.sg,u.rH,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.K7,n.JJ,n.JL,n.sg,n.u,c.Ov],styles:[".itemCatalogue[_ngcontent-%COMP%]{orientation:center;border:1px solid #ccc;padding:.5em;display:flex;flex-direction:row}.imgCatalogue[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20em;height:20em}.infoCatalogue[_ngcontent-%COMP%]{margin:0 2em}.infoCatalogue[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:.2em}.listCatalogue[_ngcontent-%COMP%]{margin:1em 2em}.groupFilter[_ngcontent-%COMP%]{border:1px solid #ccc;padding:1em;margin:1em 20em;border-radius:1em}"]})}var y=r(529);const A=[{path:"",component:m},{path:":id",component:l}];class d{static#t=this.\u0275fac=function(e){return new(e||d)};static#e=this.\u0275mod=t.oAB({type:d});static#o=this.\u0275inj=t.cJS({providers:[l],imports:[c.ez,u.Bz.forChild(A),y.JF,n.UX,n.u5]})}}}]);