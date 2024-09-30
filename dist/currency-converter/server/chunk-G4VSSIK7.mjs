import './polyfills.server.mjs';
import{$ as Y,Ca as Ae,Ea as Me,Fa as k,Ga as m,Ha as Q,I as N,J as q,K as d,Ka as Ee,La as Fe,M as g,Ma as we,N as fe,Na as Ie,Oa as Se,P as x,Pa as Ne,Q as h,R as f,Ta as xe,U as pe,V as z,X as O,Y as Z,Z as D,_ as o,ba as P,ca as v,e as ue,fa as K,ga as X,h as ce,ha as me,ia as p,ja as u,ka as ge,la as b,m as de,ma as J,na as A,oa as ve,pa as _e,qa as ye,r as he,ra as Ce,sa as R,ua as Ve,va as De,xa as be}from"./chunk-EXQ4F4H2.mjs";import{a,b as l}from"./chunk-5XUXGTUW.mjs";var Be=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(o(Y),o(Z))}}static{this.\u0275dir=f({type:i})}}return i})(),Ue=(()=>{class i extends Be{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=z(i)))(r||i)}})()}static{this.\u0275dir=f({type:i,features:[v]})}}return i})(),re=new g("");var et={provide:re,useExisting:N(()=>U),multi:!0};function tt(){let i=Q()?Q().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var it=new g(""),U=(()=>{class i extends Be{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!tt())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(o(Y),o(Z),o(it,8))}}static{this.\u0275dir=f({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&b("input",function(c){return r._handleInput(c.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(c){return r._compositionEnd(c.target.value)})},features:[R([et]),v]})}}return i})();var nt=new g(""),rt=new g("");function He(i){return i!=null}function Le(i){return be(i)?ce(i):i}function $e(i){let e={};return i.forEach(t=>{e=t!=null?a(a({},e),t):e}),Object.keys(e).length===0?null:e}function We(i,e){return e.map(t=>t(i))}function st(i){return!i.validate}function qe(i){return i.map(e=>st(e)?e:t=>e.validate(t))}function ot(i){if(!i)return null;let e=i.filter(He);return e.length==0?null:function(t){return $e(We(t,e))}}function ze(i){return i!=null?ot(qe(i)):null}function at(i){if(!i)return null;let e=i.filter(He);return e.length==0?null:function(t){let n=We(t,e).map(Le);return he(n).pipe(de($e))}}function Ze(i){return i!=null?at(qe(i)):null}function Oe(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function lt(i){return i._rawValidators}function ut(i){return i._rawAsyncValidators}function ee(i){return i?Array.isArray(i)?i:[i]:[]}function j(i,e){return Array.isArray(i)?i.includes(e):i===e}function Pe(i,e){let t=ee(e);return ee(i).forEach(r=>{j(t,r)||t.push(r)}),t}function Re(i,e){return ee(e).filter(t=>!j(i,t))}var T=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ze(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ze(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},te=class extends T{get formDirective(){return null}get path(){return null}},I=class extends T{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ie=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},ct={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ti=l(a({},ct),{"[class.ng-submitted]":"isSubmitted"}),Ye=(()=>{class i extends ie{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(I,2))}}static{this.\u0275dir=f({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&me("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[v]})}}return i})();var M="VALID",G="INVALID",_="PENDING",E="DISABLED",C=class{},B=class extends C{constructor(e,t){super(),this.value=e,this.source=t}},F=class extends C{constructor(e,t){super(),this.pristine=e,this.source=t}},w=class extends C{constructor(e,t){super(),this.touched=e,this.source=t}},y=class extends C{constructor(e,t){super(),this.status=e,this.source=t}};function dt(i){return(H(i)?i.validators:i)||null}function ht(i){return Array.isArray(i)?ze(i):i||null}function ft(i,e){return(H(e)?e.asyncValidators:i)||null}function pt(i){return Array.isArray(i)?Ze(i):i||null}function H(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var ne=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=k(()=>this.statusReactive()),this.statusReactive=P(void 0),this._pristine=k(()=>this.pristineReactive()),this.pristineReactive=P(!0),this._touched=k(()=>this.touchedReactive()),this.touchedReactive=P(!1),this._events=new ue,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return m(this.statusReactive)}set status(e){m(()=>this.statusReactive.set(e))}get valid(){return this.status===M}get invalid(){return this.status===G}get pending(){return this.status==_}get disabled(){return this.status===E}get enabled(){return this.status!==E}get pristine(){return m(this.pristineReactive)}set pristine(e){m(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return m(this.touchedReactive)}set touched(e){m(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Pe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Pe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Re(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Re(e,this._rawAsyncValidators))}hasValidator(e){return j(this._rawValidators,e)}hasAsyncValidator(e){return j(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(l(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new w(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new w(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(l(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new F(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new F(!0,n))}markAsPending(e={}){this.status=_;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new y(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(l(a({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=E,this.errors=null,this._forEachChild(r=>{r.disable(l(a({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new B(this.value,n)),this._events.next(new y(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(l(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=M,this._forEachChild(n=>{n.enable(l(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(l(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===_)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new B(this.value,t)),this._events.next(new y(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(l(a({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?E:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=_,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Le(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new y(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new O,this.statusChanges=new O}_calculateStatus(){return this._allControlsDisabled()?E:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_)?_:this._anyControlsHaveStatus(G)?G:M}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new F(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new w(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){H(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ht(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=pt(this._rawAsyncValidators)}};var Ke=new g("CallSetDisabledState",{providedIn:"root",factory:()=>se}),se="always";function mt(i,e){return[...e.path,i]}function gt(i,e,t=se){_t(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),yt(i,e),Vt(i,e),Ct(i,e),vt(i,e)}function ke(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function vt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function _t(i,e){let t=lt(i);e.validator!==null?i.setValidators(Oe(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=ut(i);e.asyncValidator!==null?i.setAsyncValidators(Oe(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();ke(e._rawValidators,r),ke(e._rawAsyncValidators,r)}function yt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Xe(i,e)})}function Ct(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Xe(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Xe(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Vt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Dt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function bt(i){return Object.getPrototypeOf(i.constructor)===Ue}function At(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===U?t=s:bt(s)?n=s:r=s}),r||n||t||null}function Ge(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function je(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Mt=class extends ne{constructor(e=null,t,n){super(dt(t),ft(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),H(t)&&(t.nonNullable||t.initialValueIsDefault)&&(je(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ge(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ge(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){je(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Et={provide:I,useExisting:N(()=>oe)},Te=Promise.resolve(),oe=(()=>{class i extends I{constructor(t,n,r,s,c,Qe){super(),this._changeDetectorRef=c,this.callSetDisabledState=Qe,this.control=new Mt,this._registered=!1,this.name="",this.update=new O,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=At(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Dt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){gt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Te.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&Me(n);Te.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?mt(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(o(te,9),o(nt,10),o(rt,10),o(re,10),o(Ae,8),o(Ke,8))}}static{this.\u0275dir=f({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[R([Et]),v,pe]})}}return i})();var Ft={provide:re,useExisting:N(()=>ae),multi:!0},ae=(()=>{class i extends Ue{writeValue(t){let n=t??"";this.setProperty("value",n)}registerOnChange(t){this.onChange=n=>{t(n==""?null:parseFloat(n))}}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=z(i)))(r||i)}})()}static{this.\u0275dir=f({type:i,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,r){n&1&&b("input",function(c){return r.onChange(c.target.value)})("blur",function(){return r.onTouched()})},features:[R([Ft]),v]})}}return i})();var wt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=h({type:i})}static{this.\u0275inj=d({})}}return i})();var Je=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Ke,useValue:t.callSetDisabledState??se}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=h({type:i})}static{this.\u0275inj=d({imports:[wt]})}}return i})();var L=class i{constructor(e){this.http=e}apiKey="6ad2757f0b7cbe38f6a54ec4";apiUrl="https://v6.exchangerate-api.com/v6/";getExchangeRates(e){let t=`${this.apiUrl}${this.apiKey}/latest/${e}`;return console.log("\u0417\u0430\u043F\u0440\u043E\u0441 \u043A API:",t),this.http.get(t)}static \u0275fac=function(t){return new(t||i)(fe(Ie))};static \u0275prov=q({token:i,factory:i.\u0275fac,providedIn:"root"})};function xt(i,e){if(i&1&&(p(0,"li"),A(1),Ve(2,"number"),u()),i&2){let t=e.$implicit,n=J(2);D(),ve(" ",t,": ",De(2,2,n.convertedValues[t],"1.2-2")," ")}}function Ot(i,e){if(i&1&&(p(0,"div",5)(1,"h3"),A(2,"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438:"),u(),p(3,"ul"),K(4,xt,3,5,"li",6),u()()),i&2){let t=J();D(4),X("ngForOf",t.currencyList)}}var $=class i{constructor(e){this.currencyService=e}rubAmount=0;exchangeRates={};convertedValues={};currencyList=["USD","EUR","CNY","JPY","INR"];ngOnInit(){this.getRates()}getRates(){this.currencyService.getExchangeRates("RUB").subscribe(e=>{this.exchangeRates=e.conversion_rates,console.log("\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u044B \u043A\u0443\u0440\u0441\u044B \u043E\u0431\u043C\u0435\u043D\u0430:",this.exchangeRates),this.convert()},e=>{console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u043A\u0443\u0440\u0441\u043E\u0432 \u043E\u0431\u043C\u0435\u043D\u0430:",e)})}convert(){if(console.log("\u0412\u044B\u0437\u043E\u0432 convert() \u0441 rubAmount:",this.rubAmount),this.rubAmount=Number(this.rubAmount),this.exchangeRates){this.convertedValues={};for(let e of this.currencyList){let t=this.exchangeRates[e];t?(this.convertedValues[e]=this.rubAmount*t,console.log(`\u041A\u043E\u043D\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u044F: ${this.rubAmount} RUB = ${this.convertedValues[e]} ${e}`)):console.warn(`\u041A\u0443\u0440\u0441 \u0434\u043B\u044F ${e} \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D.`)}}else console.warn("\u041A\u0443\u0440\u0441\u044B \u043E\u0431\u043C\u0435\u043D\u0430 \u043D\u0435 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B.")}static \u0275fac=function(t){return new(t||i)(o(L))};static \u0275cmp=x({type:i,selectors:[["app-converter"]],decls:8,vars:2,consts:[[1,"converter-container"],[1,"input-group"],["for","rubAmount"],["type","number","id","rubAmount","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443",3,"ngModelChange","input","ngModel"],["class","results",4,"ngIf"],[1,"results"],[4,"ngFor","ngForOf"]],template:function(t,n){t&1&&(p(0,"div",0)(1,"h2"),A(2,"\u041A\u043E\u043D\u0432\u0435\u0440\u0442\u0435\u0440 \u0440\u0443\u0431\u043B\u0435\u0439 \u0432 \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0435 \u0432\u0430\u043B\u044E\u0442\u044B"),u(),p(3,"div",1)(4,"label",2),A(5,"\u0421\u0443\u043C\u043C\u0430 \u0432 \u0440\u0443\u0431\u043B\u044F\u0445:"),u(),p(6,"input",3),Ce("ngModelChange",function(s){return ye(n.rubAmount,s)||(n.rubAmount=s),s}),b("input",function(){return n.convert()}),u()(),K(7,Ot,5,1,"div",4),u()),t&2&&(D(6),_e("ngModel",n.rubAmount),D(),X("ngIf",n.convertedValues))},dependencies:[Ee,Fe,U,ae,Ye,oe,we],styles:[".converter-container[_ngcontent-%COMP%]{max-width:500px;margin:0 auto;text-align:center}.input-group[_ngcontent-%COMP%]{margin-bottom:20px}.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-right:10px}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:200px;padding:5px}.results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none;padding:0}.results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}"]})};var V=class i{title="currency-converter";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=x({type:i,selectors:[["app-root"]],decls:1,vars:0,template:function(t,n){t&1&&ge(0,"app-converter")},dependencies:[$]})};var W=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=h({type:i,bootstrap:[V]});static \u0275inj=d({imports:[Ne,Je,Se]})};var le=class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=h({type:i,bootstrap:[V]});static \u0275inj=d({imports:[W,xe]})};export{le as a};
