javascript:var%20%24jscomp%3D%24jscomp%7C%7C%7B%7D%3B%24jscomp.scope%3D%7B%7D%3B%24jscomp.createTemplateTagFirstArg%3Dfunction(a)%7Breturn%20a.raw%3Da%7D%3B%24jscomp.createTemplateTagFirstArgWithRaw%3Dfunction(a%2Cb)%7Ba.raw%3Db%3Breturn%20a%7D%3B%24jscomp.owns%3Dfunction(a%2Cb)%7Breturn%20Object.prototype.hasOwnProperty.call(a%2Cb)%7D%3B%24jscomp.ASSUME_ES5%3D!1%3B%24jscomp.ASSUME_NO_NATIVE_MAP%3D!1%3B%24jscomp.ASSUME_NO_NATIVE_SET%3D!1%3B%24jscomp.SIMPLE_FROUND_POLYFILL%3D!1%3B%24jscomp.ISOLATE_POLYFILLS%3D!1%3B%24jscomp.FORCE_POLYFILL_PROMISE%3D!1%3B%24jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION%3D!1%3B%24jscomp.defineProperty%3D%24jscomp.ASSUME_ES5%7C%7C%22function%22%3D%3Dtypeof%20Object.defineProperties%3FObject.defineProperty%3Afunction(a%2Cb%2Cc)%7Bif(a%3D%3DArray.prototype%7C%7Ca%3D%3DObject.prototype)return%20a%3Ba%5Bb%5D%3Dc.value%3Breturn%20a%7D%3B%24jscomp.getGlobal%3Dfunction(a)%7Ba%3D%5B%22object%22%3D%3Dtypeof%20globalThis%26%26globalThis%2Ca%2C%22object%22%3D%3Dtypeof%20window%26%26window%2C%22object%22%3D%3Dtypeof%20self%26%26self%2C%22object%22%3D%3Dtypeof%20global%26%26global%5D%3Bfor(var%20b%3D0%3Bb%3Ca.length%3B%2B%2Bb)%7Bvar%20c%3Da%5Bb%5D%3Bif(c%26%26c.Math%3D%3DMath)return%20c%7Dthrow%20Error(%22Cannot%20find%20global%20object%22)%3B%7D%3B%24jscomp.global%3D%24jscomp.getGlobal(this)%3B%24jscomp.IS_SYMBOL_NATIVE%3D%22function%22%3D%3D%3Dtypeof%20Symbol%26%26%22symbol%22%3D%3D%3Dtypeof%20Symbol(%22x%22)%3B%24jscomp.TRUST_ES6_POLYFILLS%3D!%24jscomp.ISOLATE_POLYFILLS%7C%7C%24jscomp.IS_SYMBOL_NATIVE%3B%24jscomp.polyfills%3D%7B%7D%3B%24jscomp.propertyToPolyfillSymbol%3D%7B%7D%3B%24jscomp.POLYFILL_PREFIX%3D%22%24jscp%24%22%3Bvar%20%24jscomp%24lookupPolyfilledValue%3Dfunction(a%2Cb)%7Bvar%20c%3D%24jscomp.propertyToPolyfillSymbol%5Bb%5D%3Bif(null%3D%3Dc)return%20a%5Bb%5D%3Bc%3Da%5Bc%5D%3Breturn%20void%200!%3D%3Dc%3Fc%3Aa%5Bb%5D%7D%3B%24jscomp.polyfill%3Dfunction(a%2Cb%2Cc%2Cd)%7Bb%26%26(%24jscomp.ISOLATE_POLYFILLS%3F%24jscomp.polyfillIsolated(a%2Cb%2Cc%2Cd)%3A%24jscomp.polyfillUnisolated(a%2Cb%2Cc%2Cd))%7D%3B%24jscomp.polyfillUnisolated%3Dfunction(a%2Cb%2Cc%2Cd)%7Bc%3D%24jscomp.global%3Ba%3Da.split(%22.%22)%3Bfor(d%3D0%3Bd%3Ca.length-1%3Bd%2B%2B)%7Bvar%20e%3Da%5Bd%5D%3Bif(!(e%20in%20c))return%3Bc%3Dc%5Be%5D%7Da%3Da%5Ba.length-1%5D%3Bd%3Dc%5Ba%5D%3Bb%3Db(d)%3Bb!%3Dd%26%26null!%3Db%26%26%24jscomp.defineProperty(c%2Ca%2C%7Bconfigurable%3A!0%2Cwritable%3A!0%2Cvalue%3Ab%7D)%7D%3B%24jscomp.polyfillIsolated%3Dfunction(a%2Cb%2Cc%2Cd)%7Bvar%20e%3Da.split(%22.%22)%3Ba%3D1%3D%3D%3De.length%3Bd%3De%5B0%5D%3Bd%3D!a%26%26d%20in%20%24jscomp.polyfills%3F%24jscomp.polyfills%3A%24jscomp.global%3Bfor(var%20g%3D0%3Bg%3Ce.length-1%3Bg%2B%2B)%7Bvar%20f%3De%5Bg%5D%3Bif(!(f%20in%20d))return%3Bd%3Dd%5Bf%5D%7De%3De%5Be.length-1%5D%3Bc%3D%24jscomp.IS_SYMBOL_NATIVE%26%26%22es6%22%3D%3D%3Dc%3Fd%5Be%5D%3Anull%3Bb%3Db(c)%3Bnull!%3Db%26%26(a%3F%24jscomp.defineProperty(%24jscomp.polyfills%2Ce%2C%7Bconfigurable%3A!0%2Cwritable%3A!0%2Cvalue%3Ab%7D)%3Ab!%3D%3Dc%26%26(void%200%3D%3D%3D%24jscomp.propertyToPolyfillSymbol%5Be%5D%26%26(c%3D1E9*Math.random()%3E%3E%3E0%2C%24jscomp.propertyToPolyfillSymbol%5Be%5D%3D%24jscomp.IS_SYMBOL_NATIVE%3F%24jscomp.global.Symbol(e)%3A%24jscomp.POLYFILL_PREFIX%2Bc%2B%22%24%22%2Be)%2C%24jscomp.defineProperty(d%2C%24jscomp.propertyToPolyfillSymbol%5Be%5D%2C%7Bconfigurable%3A!0%2Cwritable%3A!0%2Cvalue%3Ab%7D)))%7D%3B%24jscomp.assign%3D%24jscomp.TRUST_ES6_POLYFILLS%26%26%22function%22%3D%3Dtypeof%20Object.assign%3FObject.assign%3Afunction(a%2Cb)%7Bfor(var%20c%3D1%3Bc%3Carguments.length%3Bc%2B%2B)%7Bvar%20d%3Darguments%5Bc%5D%3Bif(d)for(var%20e%20in%20d)%24jscomp.owns(d%2Ce)%26%26(a%5Be%5D%3Dd%5Be%5D)%7Dreturn%20a%7D%3B%24jscomp.polyfill(%22Object.assign%22%2Cfunction(a)%7Breturn%20a%7C%7C%24jscomp.assign%7D%2C%22es6%22%2C%22es3%22)%3B%24jscomp.underscoreProtoCanBeSet%3Dfunction()%7Bvar%20a%3D%7Ba%3A!0%7D%2Cb%3D%7B%7D%3Btry%7Breturn%20b.__proto__%3Da%2Cb.a%7Dcatch(c)%7B%7Dreturn!1%7D%3B%24jscomp.setPrototypeOf%3D%24jscomp.TRUST_ES6_POLYFILLS%26%26%22function%22%3D%3Dtypeof%20Object.setPrototypeOf%3FObject.setPrototypeOf%3A%24jscomp.underscoreProtoCanBeSet()%3Ffunction(a%2Cb)%7Ba.__proto__%3Db%3Bif(a.__proto__!%3D%3Db)throw%20new%20TypeError(a%2B%22%20is%20not%20extensible%22)%3Breturn%20a%7D%3Anull%3B%24jscomp.arrayIteratorImpl%3Dfunction(a)%7Bvar%20b%3D0%3Breturn%20function()%7Breturn%20b%3Ca.length%3F%7Bdone%3A!1%2Cvalue%3Aa%5Bb%2B%2B%5D%7D%3A%7Bdone%3A!0%7D%7D%7D%3B%24jscomp.arrayIterator%3Dfunction(a)%7Breturn%7Bnext%3A%24jscomp.arrayIteratorImpl(a)%7D%7D%3B%24jscomp.makeIterator%3Dfunction(a)%7Bvar%20b%3D%22undefined%22!%3Dtypeof%20Symbol%26%26Symbol.iterator%26%26a%5BSymbol.iterator%5D%3Breturn%20b%3Fb.call(a)%3A%24jscomp.arrayIterator(a)%7D%3B%24jscomp.generator%3D%7B%7D%3B%24jscomp.generator.ensureIteratorResultIsObject_%3Dfunction(a)%7Bif(!(a%20instanceof%20Object))throw%20new%20TypeError(%22Iterator%20result%20%22%2Ba%2B%22%20is%20not%20an%20object%22)%3B%7D%3B%24jscomp.generator.Context%3Dfunction()%7Bthis.isRunning_%3D!1%3Bthis.yieldAllIterator_%3Dnull%3Bthis.yieldResult%3Dvoid%200%3Bthis.nextAddress%3D1%3Bthis.finallyAddress_%3Dthis.catchAddress_%3D0%3Bthis.finallyContexts_%3Dthis.abruptCompletion_%3Dnull%7D%3B%24jscomp.generator.Context.prototype.start_%3Dfunction()%7Bif(this.isRunning_)throw%20new%20TypeError(%22Generator%20is%20already%20running%22)%3Bthis.isRunning_%3D!0%7D%3B%24jscomp.generator.Context.prototype.stop_%3Dfunction()%7Bthis.isRunning_%3D!1%7D%3B%24jscomp.generator.Context.prototype.jumpToErrorHandler_%3Dfunction()%7Bthis.nextAddress%3Dthis.catchAddress_%7C%7Cthis.finallyAddress_%7D%3B%24jscomp.generator.Context.prototype.next_%3Dfunction(a)%7Bthis.yieldResult%3Da%7D%3B%24jscomp.generator.Context.prototype.throw_%3Dfunction(a)%7Bthis.abruptCompletion_%3D%7Bexception%3Aa%2CisException%3A!0%7D%3Bthis.jumpToErrorHandler_()%7D%3B%24jscomp.generator.Context.prototype%5B%22return%22%5D%3Dfunction(a)%7Bthis.abruptCompletion_%3D%7B%22return%22%3Aa%7D%3Bthis.nextAddress%3Dthis.finallyAddress_%7D%3B%24jscomp.generator.Context.prototype.jumpThroughFinallyBlocks%3Dfunction(a)%7Bthis.abruptCompletion_%3D%7BjumpTo%3Aa%7D%3Bthis.nextAddress%3Dthis.finallyAddress_%7D%3B%24jscomp.generator.Context.prototype.yield%3Dfunction(a%2Cb)%7Bthis.nextAddress%3Db%3Breturn%7Bvalue%3Aa%7D%7D%3B%24jscomp.generator.Context.prototype.yieldAll%3Dfunction(a%2Cb)%7Bvar%20c%3D%24jscomp.makeIterator(a)%2Cd%3Dc.next()%3B%24jscomp.generator.ensureIteratorResultIsObject_(d)%3Bif(d.done)this.yieldResult%3Dd.value%2Cthis.nextAddress%3Db%3Belse%20return%20this.yieldAllIterator_%3Dc%2Cthis.yield(d.value%2Cb)%7D%3B%24jscomp.generator.Context.prototype.jumpTo%3Dfunction(a)%7Bthis.nextAddress%3Da%7D%3B%24jscomp.generator.Context.prototype.jumpToEnd%3Dfunction()%7Bthis.nextAddress%3D0%7D%3B%24jscomp.generator.Context.prototype.setCatchFinallyBlocks%3Dfunction(a%2Cb)%7Bthis.catchAddress_%3Da%3Bvoid%200!%3Db%26%26(this.finallyAddress_%3Db)%7D%3B%24jscomp.generator.Context.prototype.setFinallyBlock%3Dfunction(a)%7Bthis.catchAddress_%3D0%3Bthis.finallyAddress_%3Da%7C%7C0%7D%3B%24jscomp.generator.Context.prototype.leaveTryBlock%3Dfunction(a%2Cb)%7Bthis.nextAddress%3Da%3Bthis.catchAddress_%3Db%7C%7C0%7D%3B%24jscomp.generator.Context.prototype.enterCatchBlock%3Dfunction(a)%7Bthis.catchAddress_%3Da%7C%7C0%3Ba%3Dthis.abruptCompletion_.exception%3Bthis.abruptCompletion_%3Dnull%3Breturn%20a%7D%3B%24jscomp.generator.Context.prototype.enterFinallyBlock%3Dfunction(a%2Cb%2Cc)%7Bc%3Fthis.finallyContexts_%5Bc%5D%3Dthis.abruptCompletion_%3Athis.finallyContexts_%3D%5Bthis.abruptCompletion_%5D%3Bthis.catchAddress_%3Da%7C%7C0%3Bthis.finallyAddress_%3Db%7C%7C0%7D%3B%24jscomp.generator.Context.prototype.leaveFinallyBlock%3Dfunction(a%2Cb)%7Bvar%20c%3Dthis.finallyContexts_.splice(b%7C%7C0)%5B0%5D%3Bif(c%3Dthis.abruptCompletion_%3Dthis.abruptCompletion_%7C%7Cc)%7Bif(c.isException)return%20this.jumpToErrorHandler_()%3Bvoid%200!%3Dc.jumpTo%26%26this.finallyAddress_%3Cc.jumpTo%3F(this.nextAddress%3Dc.jumpTo%2Cthis.abruptCompletion_%3Dnull)%3Athis.nextAddress%3Dthis.finallyAddress_%7Delse%20this.nextAddress%3Da%7D%3B%24jscomp.generator.Context.prototype.forIn%3Dfunction(a)%7Breturn%20new%20%24jscomp.generator.Context.PropertyIterator(a)%7D%3B%24jscomp.generator.Context.PropertyIterator%3Dfunction(a)%7Bthis.object_%3Da%3Bthis.properties_%3D%5B%5D%3Bfor(var%20b%20in%20a)this.properties_.push(b)%3Bthis.properties_.reverse()%7D%3B%24jscomp.generator.Context.PropertyIterator.prototype.getNext%3Dfunction()%7Bfor(%3B0%3Cthis.properties_.length%3B)%7Bvar%20a%3Dthis.properties_.pop()%3Bif(a%20in%20this.object_)return%20a%7Dreturn%20null%7D%3B%24jscomp.generator.Engine_%3Dfunction(a)%7Bthis.context_%3Dnew%20%24jscomp.generator.Context%3Bthis.program_%3Da%7D%3B%24jscomp.generator.Engine_.prototype.next_%3Dfunction(a)%7Bthis.context_.start_()%3Bif(this.context_.yieldAllIterator_)return%20this.yieldAllStep_(this.context_.yieldAllIterator_.next%2Ca%2Cthis.context_.next_)%3Bthis.context_.next_(a)%3Breturn%20this.nextStep_()%7D%3B%24jscomp.generator.Engine_.prototype.return_%3Dfunction(a)%7Bthis.context_.start_()%3Bvar%20b%3Dthis.context_.yieldAllIterator_%3Bif(b)return%20this.yieldAllStep_(%22return%22in%20b%3Fb%5B%22return%22%5D%3Afunction(c)%7Breturn%7Bvalue%3Ac%2Cdone%3A!0%7D%7D%2Ca%2Cthis.context_%5B%22return%22%5D)%3Bthis.context_%5B%22return%22%5D(a)%3Breturn%20this.nextStep_()%7D%3B%24jscomp.generator.Engine_.prototype.throw_%3Dfunction(a)%7Bthis.context_.start_()%3Bif(this.context_.yieldAllIterator_)return%20this.yieldAllStep_(this.context_.yieldAllIterator_%5B%22throw%22%5D%2Ca%2Cthis.context_.next_)%3Bthis.context_.throw_(a)%3Breturn%20this.nextStep_()%7D%3B%24jscomp.generator.Engine_.prototype.yieldAllStep_%3Dfunction(a%2Cb%2Cc)%7Btry%7Bvar%20d%3Da.call(this.context_.yieldAllIterator_%2Cb)%3B%24jscomp.generator.ensureIteratorResultIsObject_(d)%3Bif(!d.done)return%20this.context_.stop_()%2Cd%3Bvar%20e%3Dd.value%7Dcatch(g)%7Breturn%20this.context_.yieldAllIterator_%3Dnull%2Cthis.context_.throw_(g)%2Cthis.nextStep_()%7Dthis.context_.yieldAllIterator_%3Dnull%3Bc.call(this.context_%2Ce)%3Breturn%20this.nextStep_()%7D%3B%24jscomp.generator.Engine_.prototype.nextStep_%3Dfunction()%7Bfor(%3Bthis.context_.nextAddress%3B)try%7Bvar%20a%3Dthis.program_(this.context_)%3Bif(a)return%20this.context_.stop_()%2C%7Bvalue%3Aa.value%2Cdone%3A!1%7D%7Dcatch(b)%7Bthis.context_.yieldResult%3Dvoid%200%2Cthis.context_.throw_(b)%7Dthis.context_.stop_()%3Bif(this.context_.abruptCompletion_)%7Ba%3Dthis.context_.abruptCompletion_%3Bthis.context_.abruptCompletion_%3Dnull%3Bif(a.isException)throw%20a.exception%3Breturn%7Bvalue%3Aa%5B%22return%22%5D%2Cdone%3A!0%7D%7Dreturn%7Bvalue%3Avoid%200%2Cdone%3A!0%7D%7D%3B%24jscomp.generator.Generator_%3Dfunction(a)%7Bthis.next%3Dfunction(b)%7Breturn%20a.next_(b)%7D%3Bthis%5B%22throw%22%5D%3Dfunction(b)%7Breturn%20a.throw_(b)%7D%3Bthis%5B%22return%22%5D%3Dfunction(b)%7Breturn%20a.return_(b)%7D%3Bthis%5BSymbol.iterator%5D%3Dfunction()%7Breturn%20this%7D%7D%3B%24jscomp.generator.createGenerator%3Dfunction(a%2Cb)%7Bvar%20c%3Dnew%20%24jscomp.generator.Generator_(new%20%24jscomp.generator.Engine_(b))%3B%24jscomp.setPrototypeOf%26%26a.prototype%26%26%24jscomp.setPrototypeOf(c%2Ca.prototype)%3Breturn%20c%7D%3B%24jscomp.asyncExecutePromiseGenerator%3Dfunction(a)%7Bfunction%20b(d)%7Breturn%20a.next(d)%7Dfunction%20c(d)%7Breturn%20a%5B%22throw%22%5D(d)%7Dreturn%20new%20Promise(function(d%2Ce)%7Bfunction%20g(f)%7Bf.done%3Fd(f.value)%3APromise.resolve(f.value).then(b%2Cc).then(g%2Ce)%7Dg(a.next())%7D)%7D%3B%24jscomp.asyncExecutePromiseGeneratorFunction%3Dfunction(a)%7Breturn%20%24jscomp.asyncExecutePromiseGenerator(a())%7D%3B%24jscomp.asyncExecutePromiseGeneratorProgram%3Dfunction(a)%7Breturn%20%24jscomp.asyncExecutePromiseGenerator(new%20%24jscomp.generator.Generator_(new%20%24jscomp.generator.Engine_(a)))%7D%3B(function()%7Bfunction%20a()%7Breturn%20Object.values(document.querySelector(%22%23app%20%3E%20div%20%3E%20div%22))%5B1%5D.children%5B1%5D._owner%7Dvar%20b%2Cc%3Breturn%20%24jscomp.asyncExecutePromiseGeneratorProgram(function(d)%7Bb%3Ddocument.createElement(%22iframe%22)%3Bdocument.body.append(b)%3Bwindow.alert%3Db.contentWindow.alert.bind(window)%3Bwindow.prompt%3Db.contentWindow.prompt.bind(window)%3Bwindow.confirm%3Db.contentWindow.confirm.bind(window)%3Bb.remove()%3Bif(%22%2Ftower%2Fbattle%22%3D%3Dwindow.location.pathname%7C%7C%22%2Ftower%2Fstart%22%3D%3Dwindow.location.pathname)%7Bc%3Da().stateNode.state%3Bif(%22select%22!%3Dc.phase)return%20d%5B%22return%22%5D(alert(%22You%20must%20use%20this%20hack%20while%20you%20are%20starting%20a%20match%20or%20in%20one!%22))%3Ba().stateNode.setState(%7BmyCard%3AObject.assign(%7B%7D%2Cc.myCard%2C%7Bstrength%3A100%2Ccharisma%3A100%2Cwisdom%3A100%7D)%7D)%3Balert(%22Done!%22)%7Delse%20alert(%22You%20must%20be%20in%20a%20Tower%20of%20Doom%20game!%22)%3Bd.jumpToEnd()%7D)%7D)()%3Bfunction%20footer()%7Bvar%20a%3Ddocument.createElement(%22div%22)%3Ba.style%3D'font-family%3A%20%22Nunito%22%2C%20sans-serif%3B%20font-size%3A%2014px%3B%20height%3A%2065px%3B%20width%3A%20175px%3B%20border%3A%204px%20solid%20rgb(15%2C%2015%2C%2015)%3B%20background%3A%20rgb(240%2C%20240%2C%20240)%3B%20position%3A%20absolute%3B%20top%3A%2020x%3B%20left%3A%2020px%3B%20border-radius%3A%2010px%3B%20color%3A%20rgb(0%2C%200%2C%200)%3B%20text-align%3A%20center%3B'%3Ba.innerHTML%3D'%3Cp%3EMade%20by%20gliz%20%3Cbr%3E%20My%20%3Ca%20style%3D%22color%3A%20%230000ff%3B%22%20href%3D%22https%3A%2F%2Ftwitter.com%2Fglizuwu%22%20target%3D%22_blank%22%3Etwitter%3C%2Fa%3E%3C%2Fp%3E'%3Bdocument.body.appendChild(a)%3Bvar%20b%3D0%2Cc%3D0%2Cd%3D0%2Ce%3D0%3Ba.onmousedown%3Dfunction(g)%7Bg%3Dvoid%200%3D%3D%3Dg%3Fwindow.event%3Ag%3Bg.preventDefault()%3Bd%3Dg.clientX%3Be%3Dg.clientY%3Bdocument.onmouseup%3Dfunction()%7Bdocument.onmouseup%3Dnull%3Bdocument.onmousemove%3Dnull%7D%3Bdocument.onmousemove%3Dfunction(f)%7Bf%3Df%7C%7Cwindow.event%3Bf.preventDefault()%3Bb%3Dd-f.clientX%3Bc%3De-f.clientY%3Bd%3Df.clientX%3Be%3Df.clientY%3Bf%3D0%3Ca.offsetLeft-b%3Fa.offsetLeft-b%3A0%3Ba.style.top%3D(0%3Ca.offsetTop-c%3Fa.offsetTop-c%3A0)%2B%22px%22%3Ba.style.left%3Df%2B%22px%22%7D%7D%7Dfooter()%3Bvoid+0
