(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"5oEP":function(e,r,t){"use strict";t.r(r),t.d(r,"ExerciceModule",function(){return m});var o=t("ofXK"),b=t("3Pt+"),n=t("tyNb"),a=t("fXoL");let c=(()=>{class e{transform(e,...r){return JSON.stringify(e,null,2).replace(/ /g,"&nbsp;").replace(/\n/g,"<br/>")}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275pipe=a.Hb({name:"prettyjson",type:e,pure:!0}),e})();function l(e,r){if(1&e&&(a.Lb(0,"tr"),a.Lb(1,"th"),a.jc(2),a.Kb(),a.Lb(3,"td"),a.Jb(4,"input",21),a.Kb(),a.Kb()),2&e){const e=r.index;a.wb(2),a.kc(e+1),a.wb(2),a.Yb("id",e),a.Xb("formControlName",e)}}const i=[{path:"",component:(()=>{class e{constructor(e){this.fb=e,this.exampleForm=this.fb.group({name:[""],releaseDate:[""],characters:this.fb.array([this.fb.control("Iron Man"),this.fb.control("Thanos"),this.fb.control("Hulk"),this.fb.control("Captain America")])})}ngOnInit(){this.exampleForm.patchValue({name:"Avengers: Endgame",releaseDate:"26/04/2019"})}addCharacter(){this.characters.push(this.fb.control("New Character"))}get characters(){return this.exampleForm.get("characters")}updateControls(){this.exampleForm.patchValue({name:"Avengers: Endgame patchValue",releaseDate:"26/04/2019 patchValue"})}resetControls(){this.exampleForm.patchValue({name:null,releaseDate:null})}}return e.\u0275fac=function(r){return new(r||e)(a.Ib(b.d))},e.\u0275cmp=a.Cb({type:e,selectors:[["app-form-array"]],decls:53,vars:9,consts:[[1,"card"],[1,"card-body"],[1,"row"],[1,"col-7"],[1,"card-title","text-center","text-primary"],[3,"formGroup"],[1,"form-row"],[1,"form-group","col-md-9"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],[1,"form-group","col-md-3"],["for","releaseDate"],["type","text","id","releaseDate","formControlName","releaseDate",1,"form-control"],[1,"card","p-4"],[1,"card-title","text-center","text-info"],["formArrayName","characters"],["type","submit",1,"btn","btn-primary","mr-2",3,"click"],[1,"table","table-sm","table-bordered"],[4,"ngFor","ngForOf"],[1,"col-5"],[3,"innerHTML"],["type","text",1,"form-control",3,"id","formControlName"]],template:function(e,r){1&e&&(a.Lb(0,"div",0),a.Lb(1,"div",1),a.Lb(2,"div",2),a.Lb(3,"div",3),a.Lb(4,"h5",4),a.jc(5,"FormArray"),a.Kb(),a.Lb(6,"form",5),a.Lb(7,"div",6),a.Lb(8,"div",7),a.Lb(9,"label",8),a.jc(10,"Name"),a.Kb(),a.Jb(11,"input",9),a.Kb(),a.Lb(12,"div",10),a.Lb(13,"label",11),a.jc(14,"Date"),a.Kb(),a.Jb(15,"input",12),a.Kb(),a.Kb(),a.Lb(16,"div",13),a.Lb(17,"h5",14),a.jc(18,"Arrays"),a.Kb(),a.Lb(19,"div",6),a.Lb(20,"div",15),a.Lb(21,"button",16),a.Sb("click",function(){return r.addCharacter()}),a.jc(22,"Add"),a.Kb(),a.Lb(23,"button",16),a.Sb("click",function(){return r.updateControls()}),a.jc(24,"Delete"),a.Kb(),a.Lb(25,"table",17),a.Lb(26,"thead"),a.Lb(27,"tr"),a.Lb(28,"th"),a.jc(29,"Id"),a.Kb(),a.Lb(30,"th"),a.jc(31,"Name"),a.Kb(),a.Kb(),a.Kb(),a.Lb(32,"tbody"),a.ic(33,l,5,3,"tr",18),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Kb(),a.Lb(34,"button",16),a.Sb("click",function(){return r.resetControls()}),a.jc(35,"Reset Controls"),a.Kb(),a.Lb(36,"button",16),a.Sb("click",function(){return r.updateControls()}),a.jc(37,"Update Controls"),a.Kb(),a.Kb(),a.Kb(),a.Lb(38,"div",19),a.Lb(39,"h5",4),a.jc(40,"FormArray Result"),a.Kb(),a.Lb(41,"strong"),a.jc(42,"Valid"),a.Kb(),a.jc(43),a.Jb(44,"br"),a.Lb(45,"strong"),a.jc(46,"Form Value"),a.Kb(),a.Jb(47,"div",20),a.Vb(48,"prettyjson"),a.Lb(49,"strong"),a.jc(50,"Array Value"),a.Kb(),a.Jb(51,"div",20),a.Vb(52,"prettyjson"),a.Kb(),a.Kb(),a.Kb(),a.Kb()),2&e&&(a.wb(6),a.Xb("formGroup",r.exampleForm),a.wb(27),a.Xb("ngForOf",r.characters.controls),a.wb(10),a.lc(" : ",r.exampleForm.valid,""),a.wb(4),a.Xb("innerHTML",a.Wb(48,5,r.exampleForm.value),a.ec),a.wb(4),a.Xb("innerHTML",a.Wb(52,7,r.exampleForm.value.characters),a.ec))},directives:[b.u,b.m,b.i,b.b,b.l,b.g,b.c,o.j],pipes:[c],styles:[""]}),e})(),children:[]}];let s=(()=>{class e{}return e.\u0275mod=a.Gb({type:e}),e.\u0275inj=a.Fb({factory:function(r){return new(r||e)},imports:[[n.d.forChild(i)],n.d]}),e})(),m=(()=>{class e{}return e.\u0275mod=a.Gb({type:e}),e.\u0275inj=a.Fb({factory:function(r){return new(r||e)},providers:[],imports:[[o.b,s,b.k,b.q]]}),e})()}}]);