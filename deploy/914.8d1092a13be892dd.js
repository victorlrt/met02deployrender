"use strict";(self.webpackChunktp07_larmet_victor=self.webpackChunktp07_larmet_victor||[]).push([[914],{9914:(v,h,o)=>{o.r(h),o.d(h,{ClientModule:()=>c});var p=o(6895),t=o(4006);class u{constructor(i,n,r,g,Z,k,P,F,M){this.id=0,this.lastname="",this.firstname="",this.zipcode="",this.tel="",this.email="",this.gender="",this.login="",this.password="",this.id=i,this.lastname=n,this.firstname=r,this.zipcode=g,this.tel=Z,this.email=k,this.gender=P,this.login=F,this.password=M}}var e=o(8274),f=o(5599);class l{constructor(i){this._element=i,this._element.nativeElement.onkeypress=n=>{this._element.nativeElement.style.backgroundColor=n.which>64&&n.which<91||n.which>96&&n.which<123?"#90EE90":"red"}}static#e=this.\u0275fac=function(n){return new(n||l)(e.Y36(e.SBq))};static#t=this.\u0275dir=e.lG2({type:l,selectors:[["","appCheckFormString",""]]})}class s{constructor(i){this._element=i,this._element.nativeElement.onkeypress=n=>{this._element.nativeElement.style.backgroundColor=n.which<48||n.which>57?"red":"#90EE90"}}static#e=this.\u0275fac=function(n){return new(n||s)(e.Y36(e.SBq))};static#t=this.\u0275dir=e.lG2({type:s,selectors:[["","appCheckFormNumber",""]]})}class a{constructor(i){this._element=i,this._element.nativeElement.onkeypress=n=>{this._element.nativeElement.style.backgroundColor=n.which>63&&n.which<91||n.which>96&&n.which<123||n.which>47&&n.which<58?"#90EE90":"red"}}static#e=this.\u0275fac=function(n){return new(n||a)(e.Y36(e.SBq))};static#t=this.\u0275dir=e.lG2({type:a,selectors:[["","appCheckFormEmail",""]]})}function C(d,i){1&d&&e.GkF(0)}class m{constructor(i){this.clientService=i,this.ngLastname="",this.ngFirstname="",this.ngZipCode="",this.ngTel="",this.ngEmail="",this.ngGender="",this.ngLogin="",this.ngPassword="",this.ngPasswordCheck="",this.showSummary=!1,this.clientForm=new t.cw({lastname:new t.NI("",[t.kI.required,t.kI.minLength(2)]),firstname:new t.NI("",[t.kI.required,t.kI.minLength(2)]),zipcode:new t.NI("",[t.kI.required,t.kI.minLength(5)]),tel:new t.NI("",[t.kI.required,t.kI.minLength(10)]),email:new t.NI("",[t.kI.required,t.kI.email]),gender:new t.NI("",[t.kI.required]),login:new t.NI("",[t.kI.required,t.kI.minLength(2)]),password:new t.NI("",[t.kI.required,t.kI.minLength(2)]),passwordCheck:new t.NI("",[t.kI.required,t.kI.minLength(2)])})}clicChange(i){this.showSummary=i}createClient(){this.client=new u(0,this.clientForm.value.lastname,this.clientForm.value.firstname,this.clientForm.value.zipcode,this.clientForm.value.tel,this.clientForm.value.email,this.clientForm.value.gender,this.clientForm.value.login,this.clientForm.value.password),console.log(this.client),this.clientService.postClient(this.client)}static#e=this.\u0275fac=function(n){return new(n||m)(e.Y36(f.y))};static#t=this.\u0275cmp=e.Xpm({type:m,selectors:[["app-component-form"]],decls:47,vars:2,consts:[[1,"form-holder"],[1,"form-content"],[1,"form-items"],[3,"formGroup"],[1,"form-informations"],["type","text","placeholder","Lastname","formControlName","lastname","appCheckFormString",""],["type","text","placeholder","Firstname","formControlName","firstname","appCheckFormString",""],["type","text","placeholder","Zip code","formControlName","zipcode","appCheckFormNumber",""],["type","tel","placeholder","Telephone","formControlName","tel","formControlName","tel","appCheckFormNumber",""],["type","email","placeholder","Email","formControlName","email","appCheckFormEmail",""],["id","genderCtn"],["type","radio","name","gender","value","Male","formControlName","gender"],["type","radio","name","gender","value","Female","formControlName","gender"],[1,"form-logs"],["type","text","placeholder","Login","formControlName","login"],["type","password","id","password","placeholder","Password","formControlName","password"],["type","password","id","verifPassword","formControlName","passwordCheck","placeholder","Verification Password"],[3,"click"],[4,"ngIfShowSummary","ngIf"]],template:function(n,r){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3)(4,"div",4)(5,"label"),e._uU(6,"Lastname : "),e._UZ(7,"input",5),e.qZA(),e._UZ(8,"br"),e.TgZ(9,"label"),e._uU(10,"Firstname : "),e._UZ(11,"input",6),e.qZA(),e._UZ(12,"br"),e.TgZ(13,"label"),e._uU(14,"Zip code : "),e._UZ(15,"input",7),e.qZA(),e._UZ(16,"br"),e.TgZ(17,"label"),e._uU(18,"Telephone : "),e._UZ(19,"input",8),e.qZA(),e._UZ(20,"br"),e.TgZ(21,"label"),e._uU(22,"Email : "),e._UZ(23,"input",9),e.qZA(),e.TgZ(24,"label"),e._uU(25,"Gender : "),e.qZA(),e.TgZ(26,"div",10)(27,"label"),e._uU(28," Male "),e._UZ(29,"input",11),e.qZA(),e.TgZ(30,"label"),e._uU(31," Female "),e._UZ(32,"input",12),e.qZA()()(),e.TgZ(33,"div",13)(34,"label"),e._uU(35,"Login : "),e._UZ(36,"input",14),e.qZA(),e.TgZ(37,"label"),e._uU(38,"Password : "),e._UZ(39,"input",15),e.qZA(),e.TgZ(40,"label"),e._uU(41,"Verification Password : "),e._UZ(42,"input",16),e.qZA()()(),e.TgZ(43,"div")(44,"button",17),e.NdJ("click",function(){return r.createClient()}),e._uU(45,"Send"),e.qZA()()(),e.YNc(46,C,1,0,"ng-container",18),e.qZA()()),2&n&&(e.xp6(3),e.Q6J("formGroup",r.clientForm),e.xp6(43),e.Q6J("ngIf",r.showSummary))},dependencies:[p.O5,t._Y,t.Fj,t._,t.JJ,t.JL,t.sg,t.u,l,s,a],styles:[".form-holder[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;text-align:center}.form-holder[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]{position:relative;text-align:center;display:flex;justify-content:center;align-items:center}.form-content[_ngcontent-%COMP%]   .form-items[_ngcontent-%COMP%]{border:.1em solid rgb(255,255,255);padding:1.2em;border-radius:1em;text-align:left;margin:2em;display:flex;flex-direction:column}.form-items[_ngcontent-%COMP%]   .form-informations[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;margin:1em}.form-items[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-right:2em}.form-items[_ngcontent-%COMP%]   .form-logs[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;margin:1em}#genderCtn[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:baseline;justify-content:space-evenly}#genderCtn[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin:0}label[_ngcontent-%COMP%]{margin-top:.5em;margin-right:.5em}input[_ngcontent-%COMP%]{margin-bottom:1em;padding:.8em 2em}.form-content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], .form-content[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], .form-content[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%], .form-content[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%], .form-content[_ngcontent-%COMP%]   input[type=tel][_ngcontent-%COMP%], .form-content[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .form-content[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:80%;text-align:left;border:0;outline:0;border-radius:.8em;font-size:.7em;transition:all .3s ease;margin-left:1em}"]})}var _=o(529),w=o(8741);const y=[{path:"",component:m}];class c{static#e=this.\u0275fac=function(n){return new(n||c)};static#t=this.\u0275mod=e.oAB({type:c});static#n=this.\u0275inj=e.cJS({imports:[p.ez,t.u5,_.JF,t.UX,w.Bz.forChild(y)]})}}}]);