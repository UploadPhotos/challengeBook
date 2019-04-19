var __reflect = this && this.__reflect || function(e, t, a) {
        e.__class__ = t, a ? a.push(t) : a = [t], e.__types__ = e.__types__ ? a.concat(e.__types__) : a
    },
    __extends = this && this.__extends || function(e, t) {
        function a() {
            this.constructor = e
        }
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        a.prototype = t.prototype, e.prototype = new a
    },
    __awaiter = this && this.__awaiter || function(e, t, a, i) {
        return new(a || (a = Promise))(function(n, r) {
            function o(e) {
                try {
                    h(i.next(e))
                } catch (t) {
                    r(t)
                }
            }

            function s(e) {
                try {
                    h(i["throw"](e))
                } catch (t) {
                    r(t)
                }
            }

            function h(e) {
                e.done ? n(e.value) : new a(function(t) {
                    t(e.value)
                }).then(o, s)
            }
            h((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        function a(e) {
            return function(t) {
                return i([e, t])
            }
        }

        function i(a) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; h;) try {
                if (n = 1, r && (o = r[2 & a[0] ? "return" : a[0] ? "throw" : "next"]) && !(o = o.call(r, a[1])).done) return o;
                switch (r = 0, o && (a = [0, o.value]), a[0]) {
                    case 0:
                    case 1:
                        o = a;
                        break;
                    case 4:
                        return h.label++, {
                            value: a[1],
                            done: !1
                        };
                    case 5:
                        h.label++, r = a[1], a = [0];
                        continue;
                    case 7:
                        a = h.ops.pop(), h.trys.pop();
                        continue;
                    default:
                        if (o = h.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                            h = 0;
                            continue
                        }
                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                            h.label = a[1];
                            break
                        }
                        if (6 === a[0] && h.label < o[1]) {
                            h.label = o[1], o = a;
                            break
                        }
                        if (o && h.label < o[2]) {
                            h.label = o[2], h.ops.push(a);
                            break
                        }
                        o[2] && h.ops.pop(), h.trys.pop();
                        continue
                }
                a = t.call(e, h)
            } catch (i) {
                a = [6, i], r = 0
            } finally {
                n = o = 0
            }
            if (5 & a[0]) throw a[1];
            return {
                value: a[0] ? a[1] : void 0,
                done: !0
            }
        }
        var n, r, o, s, h = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: a(0),
            "throw": a(1),
            "return": a(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    },
    Page3 = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.addEventListener(egret.Event.ADDED_TO_STAGE, t.scene, t), t
        }
        return __extends(t, e), t.prototype.scene = function() {
            var e = this;
            this.mainBox = new egret.Sprite, this.addChild(this.mainBox);
            var t = Tool.createBitmapByName("bg2_1_jpg");
            this.mainBox.addChild(t);
            var a = Tool.createBitmapByName("txt3_1_png");
            this.mainBox.addChild(a), Tool.anchorXY(a), a.x = 365, a.y = -77, a.alpha = 0, egret.Tween.get(a).to({
                alpha: 1
            }).to({
                y: 123
            }, 1e3, egret.Ease.quartOut);
            var i = new egret.Sprite;
            this.mainBox.addChild(i), i.width = 613, i.height = 145, i.x = 75, i.y = 250, i.alpha = 0, egret.Tween.get(i).to({
                alpha: 1
            }).to({
                y: 150
            }, 1e3, egret.Ease.quartOut);
            var n = Tool.createBitmapByName("kuan3_1_png");
            i.addChild(n);
            var r = Tool.createBitmapByName("txt3_2_png");
            i.addChild(r), r.x = 157, r.y = 51, this.input = new egret.TextField, this.input.text = "", i.addChild(this.input), this.input.width = 613, this.input.height = 145, this.input.maxChars = 6, this.input.size = 58, this.input.bold = !0, this.input.textColor = 4093126, this.input.textAlign = "center", this.input.verticalAlign = egret.VerticalAlign.MIDDLE, this.input.type = egret.TextFieldType.INPUT, this.input.addEventListener(egret.FocusEvent.FOCUS_IN, function(e) {
                r.visible = !1
            }, this), this.input.addEventListener(egret.FocusEvent.FOCUS_OUT, function(e) {
                "" == this.input.text && (r.visible = !0), scroll_rest()
            }, this);
            var o = Tool.createBitmapByName("img3_3_png");
            this.mainBox.addChild(o), Tool.anchorXY(o), o.x = 375, o.y = 698, o.scaleX = o.scaleY = 0, egret.Tween.get(o).wait(300).to({
                scaleX: 1,
                scaleY: 1
            }, 1e3, egret.Ease.quartOut).call(function() {
                egret.Tween.get(o, {
                    loop: !0
                }).to({
                    scaleX: 1.1,
                    scaleY: 1.1
                }, 600, egret.Ease.quadInOut).to({
                    scaleX: 1,
                    scaleY: 1
                }, 600, egret.Ease.quadInOut)
            });
            var s = Tool.createBitmapByName("txt3_3_png");
            this.mainBox.addChild(s), Tool.anchorXY(s), s.x = 0, s.y = 695, s.alpha = 0, egret.Tween.get(s).wait(1400).to({
                alpha: 1
            }).to({
                x: 411,
                y: 535
            }, 1200, egret.Ease.backOut);
            var h = Tool.createBitmapByName("txt3_4_png");
            this.mainBox.addChild(h), Tool.anchorXY(h), h.x = 388, h.y = 778, h.scaleX = h.scaleY = 0, egret.Tween.get(h).wait(600).to({
                scaleX: 1,
                scaleY: 1
            }, 600, egret.Ease.quintOut);
            for (var l = [
                    [158, 604],
                    [470, 743]
                ], g = 0; 2 > g; g++) {
                var c = Tool.createBitmapByName("img3_" + (g + 1) + "_png");
                this.mainBox.addChild(c), Tool.anchorXY(c), c.x = l[g][0], c.y = l[g][1], c.scaleX = c.scaleY = 0, egret.Tween.get(c).wait(900 + 100 * g).to({
                    scaleX: 1,
                    scaleY: 1
                }, 800, egret.Ease.backOut).call(function(e) {
                    egret.Tween.get(e, {
                        loop: !0
                    }).to({
                        y: e.y - 20
                    }, 500, egret.Ease.quadInOut).to({
                        y: e.y
                    }, 500, egret.Ease.quadInOut)
                }, this, [c])
            }
            var d = Tool.createBitmapByName("btn3_png");
            this.mainBox.addChild(d), Tool.anchorXY(d), d.x = 375, d.y = 1285, d.alpha = 0, egret.Tween.get(d).wait(1100).to({
                alpha: 1,
                y: 1185
            }, 1e3, egret.Ease.quartOut), d.touchEnabled = !0, d.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function() {
                playEft(), scroll_rest(), "" == e.input.text ? alert("请输入您的突破宣言") : (Util.text = e.input.text, console.log("下一页"), EM.dispatch().dispatchEventWith("nextPage"))
            }, this)
        }, t
    }(egret.Sprite);
__reflect(Page3.prototype, "Page3");
var EM = function(e) {
    function t() {
        return e.call(this) || this
    }
    return __extends(t, e), t.dispatch = function(e) {
        return void 0 === e && (e = null), null != e ? (t.dispatchDict[e] || (t.dispatchDict[e] = new egret.EventDispatcher), t.dispatchDict[e]) : (null == t._dispatch && (t._dispatch = new egret.EventDispatcher), t._dispatch)
    }, t.removeDispatch = function(e) {
        null != t.dispatchDict && (null == t.dispatchDict[e] && t.removeEvent(t.dispatchDict[e]), delete t.dispatchDict[e])
    }, t.addEvent = function(e, a, i, n) {
        t.eventDict[e.hashCode] || (t.eventDict[e.hashCode] = {}), t.eventDict[e.hashCode][a] && e.removeEventListener(a, t.eventDict[e.hashCode][a].listener, t.eventDict[e.hashCode][a].thisObject), t.eventDict[e.hashCode][a] = {
            dispatch: e,
            type: a,
            listener: i,
            thisObject: n
        }, e.addEventListener(a, i, n)
    }, t.removeEvent = function(e, a) {
        if (void 0 === a && (a = null), t.eventDict[e.hashCode]) {
            var i;
            if (null == a) {
                for (var n in t.eventDict[e.hashCode]) i = t.eventDict[e.hashCode][n], e.removeEventListener(i.type, i.listener, i.thisObject);
                delete t.eventDict[e.hashCode]
            } else i = t.eventDict[e.hashCode][a], e.removeEventListener(i.type, i.listener, i.thisObject), delete t.eventDict[e.hashCode][a]
        }
    }, t.dispatchDict = {}, t.eventDict = {}, t
}(egret.EventDispatcher);
__reflect(EM.prototype, "EM");
var Main = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.pageArr = [Page1, Page2, Page3, Page4], t.pageId = 0, t.addEventListener(egret.Event.ADDED_TO_STAGE, t.onAddToStage, t), t
    }
    return __extends(t, e), t.prototype.onAddToStage = function(e) {
        egret.lifecycle.addLifecycleListener(function(e) {
            e.onUpdate = function() {}
        }), egret.lifecycle.onPause = function() {}, egret.lifecycle.onResume = function() {}, this.runGame()["catch"](function(e) {})
    }, t.prototype.runGame = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return [4, this.loadResource()];
                    case 1:
                        return a.sent(), this.init(), [4, RES.getResAsync("description_json")];
                    case 2:
                        return e = a.sent(), [4, platform.login()];
                    case 3:
                        return a.sent(), [4, platform.getUserInfo()];
                    case 4:
                        return t = a.sent(), console.log(t), [2]
                }
            })
        })
    }, t.prototype.loadResource = function() {
        return __awaiter(this, void 0, void 0, function() {
            var e, t;
            return __generator(this, function(a) {
                switch (a.label) {
                    case 0:
                        return a.trys.push([0, 4, , 5]), [4, RES.loadConfig("./json/default.res.json", "./resource/")];
                    case 1:
                        return a.sent(), [4, RES.loadGroup("loading", 0)];
                    case 2:
                        return a.sent(), e = new LoadingUI, this.stage.addChild(e), this.loadingView = e, [4, RES.loadGroup("preload", 0, e)];
                    case 3:
                        return a.sent(), [3, 5];
                    case 4:
                        return t = a.sent(), console.error(t), [3, 5];
                    case 5:
                        return [2]
                }
            })
        })
    }, t.prototype.init = function() {
        var e = this;
        t.main = this, this.loadingView.addEventListener("hide", function() {
            egret.Tween.get(e.loadingView).to({
                alpha: 0
            }, 500, egret.Ease.quadOut).call(Tool.remove, e, [e.loadingView])
        }, this), this.group_bpx1 = new egret.Sprite, this.addChild(this.group_bpx1), Tool.alignObj(this.group_bpx1, 750, 1334, this.stage.stageWidth, this.stage.stageHeight);
        var a = Tool.createSprite(16777215, [0, 0, 750, 1334]);
        this.group_bpx1.addChild(a), this.group_bpx2 = new egret.Sprite, this.addChild(this.group_bpx2), Tool.alignObj(this.group_bpx2, 750, 1334, this.stage.stageWidth, this.stage.stageHeight)
    }, t.prototype.createGameScene = function() {
        this.showPage(), EM.dispatch().addEventListener("nextPage", this.nextPage, this)
    }, t.prototype.showPage = function() {
        this.page && egret.Tween.get(this.page).to({
            alpha: 0
        }, 500, egret.Ease.quadOut).call(Tool.remove, this, [this.page]), this.page = new this.pageArr[this.pageId], this.group_bpx1.addChild(this.page), this.page.alpha = 0, egret.Tween.get(this.page).to({
            alpha: 1
        }, 500, egret.Ease.quadOut)
    }, t.prototype.nextPage = function() {
        this.page && egret.Tween.get(this.page).to({
            alpha: 0
        }, 500, egret.Ease.quadOut).call(Tool.remove, this, [this.page]), this.pageId++, this.page = new this.pageArr[this.pageId], this.group_bpx1.addChild(this.page), this.page.alpha = 0, egret.Tween.get(this.page).to({
            alpha: 1
        }, 500, egret.Ease.quadOut)
    }, t
}(egret.DisplayObjectContainer);
__reflect(Main.prototype, "Main");
var Page1 = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.wait = 200, t.addEventListener(egret.Event.ADDED_TO_STAGE, t.scene, t), t
    }
    return __extends(t, e), t.prototype.scene = function() {
        this.view_Box = new egret.Sprite, this.addChild(this.view_Box);
        var e = Tool.createBitmapByName("bg1_1_jpg");
        this.view_Box.addChild(e);
        var t = Tool.createBitmapByName("logo1_1_png");
        this.view_Box.addChild(t), t.x = 43, t.y = -142, egret.Tween.get(t).wait(300 + this.wait).to({
            y: 78
        }, 1e3, egret.Ease.quartOut);
        var a = Tool.createBitmapByName("logo1_2_png");
        this.view_Box.addChild(a), a.x = 745, a.y = 69, egret.Tween.get(a).wait(300 + this.wait).to({
            x: 545
        }, 1e3, egret.Ease.quartOut);
        var i = Tool.createBitmapByName("kuan1_1_png");
        this.view_Box.addChild(i), Tool.anchorXY(i), i.x = 371, i.y = 693, i.scaleX = i.scaleY = 0, egret.Tween.get(i).wait(300 + this.wait).to({
            scaleX: 1,
            scaleY: 1
        }, 800, egret.Ease.backOut);
        for (var n = [
                [372, 495],
                [373, 592]
            ], r = 0; r < n.length; r++) {
            var o = Tool.createBitmapByName("txt1_" + (r + 1) + "_png");
            this.view_Box.addChild(o), Tool.anchorXY(o), o.alpha = 0, 0 == r ? (o.x = n[r][0] - 200, o.y = n[r][1] - 100) : (o.x = n[r][0] + 200, o.y = n[r][1] + 100), egret.Tween.get(o).wait(600 + 100 * r + this.wait).to({
                alpha: 1
            }).to({
                x: n[r][0],
                y: n[r][1]
            }, 600, egret.Ease.backOut)
        }
        for (var s = [
                [228, 715],
                [325, 700],
                [421, 683],
                [519, 666]
            ], r = 0; r < s.length; r++) {
            var h = Tool.createBitmapByName("zi1_" + (r + 1) + "_png");
            this.view_Box.addChild(h), Tool.anchorXY(h), h.x = s[r][0], h.y = s[r][1], h.scaleX = h.scaleY = 3, h.alpha = 0, egret.Tween.get(h).wait(900 + 100 * r + this.wait).to({
                alpha: 1,
                scaleX: 1,
                scaleY: 1
            }, 1e3, egret.Ease.elasticOut);
            var l = Tool.createBitmapByName("zi1_" + (r + 1) + "_png");
            this.view_Box.addChild(l), Tool.anchorXY(l), l.x = s[r][0] + 1, l.y = s[r][1] + 1, l.scaleX = l.scaleY = 0, egret.Tween.get(l).wait(1100 + 100 * r + this.wait).to({
                alpha: 0,
                scaleX: 2,
                scaleY: 2
            }, 500, egret.Ease.quartOut)
        }
        for (var g = [
                [381, 784],
                [382, 839],
                [376, 884]
            ], r = 0; r < g.length; r++) {
            var c = Tool.createBitmapByName("txt1_" + (r + 3) + "_png");
            this.view_Box.addChild(c), Tool.anchorXY(c), c.x = g[r][0], c.y = g[r][1] + 100, c.alpha = 0, egret.Tween.get(c).wait(1400 + 100 * r + this.wait).to({
                alpha: 1
            }).to({
                y: g[r][1]
            }, 1e3, egret.Ease.quartOut)
        }
        var d = Tool.createBitmapByName("btn1_1_png");
        this.view_Box.addChild(d), Tool.anchorXY(d), d.x = 374, d.y = 1285, d.alpha = 0, egret.Tween.get(d).wait(1700 + this.wait).to({
            alpha: 1,
            y: 1185
        }, 1e3, egret.Ease.quintOut).call(function() {
            egret.Tween.get(d, {
                loop: !0
            }).to({
                scaleX: 1.1,
                scaleY: 1.1
            }, 600, egret.Ease.quadInOut).to({
                scaleX: 1,
                scaleY: 1
            }, 600, egret.Ease.quadInOut)
        }), d.touchEnabled = !0, d.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function() {
            d.touchEnabled = !1, console.log("接受挑战"), EM.dispatch().dispatchEventWith("nextPage"), playEft()
        }, this)
    }, t
}(egret.Sprite);
__reflect(Page1.prototype, "Page1");
var Page2 = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.arr = [], t.arr2 = [], t.addEventListener(egret.Event.ADDED_TO_STAGE, t.scene, t), t
    }
    return __extends(t, e), t.prototype.scene = function() {
        this.mainBox = new egret.Sprite, this.addChild(this.mainBox);
        var e = Tool.createBitmapByName("bg2_1_jpg");
        this.mainBox.addChild(e);
        var t = Tool.createBitmapByName("txt2_1_png");
        this.mainBox.addChild(t), Tool.anchorXY(t), t.x = 371, t.y = -53, t.alpha = 0, egret.Tween.get(t).to({
            alpha: 1
        }).to({
            y: 147
        }, 1e3, egret.Ease.quartOut);
        var a = new egret.Sprite;
        this.mainBox.addChild(a), a.width = 655, a.height = 918, Tool.anchorXY(a), a.x = 381, a.y = 699, this.box = a, a.scaleX = a.scaleY = 0, egret.Tween.get(a).wait(300).to({
            scaleX: 1,
            scaleY: 1
        }, 1e3, egret.Ease.backOut);
        var i = Tool.createBitmapByName("kuan2_1_png");
        a.addChild(i);
        for (var n = 0; 3 > n; n++) {
            var r = Tool.createBitmapByName("btn2_" + (n + 1) + "_png");
            a.addChild(r), Tool.anchorXY(r), r.x = 321, r.y = 302 + 212 * n, r.touchEnabled = !0, r.id = n, r.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this), r.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTap, this), r.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this), this.arr.push(r)
        }
        this.showBox2()
    }, t.prototype.onBegin = function(e) {
        Util.id = e.currentTarget.id, playEft(), egret.Tween.get(this.arr[e.currentTarget.id]).to({
            scaleX: 1.1,
            scaleY: 1.1
        }, 500, egret.Ease.quadOut)
    }, t.prototype.onTap = function(e) {
        var t = this;
        this.box.touchChildren = !1, egret.Tween.removeTweens(this.arr[e.currentTarget.id]), egret.Tween.get(this.arr[e.currentTarget.id]).to({
            scaleX: 1,
            scaleY: 1
        }, 500, egret.Ease.quadOut).call(function() {
            egret.Tween.get(t.box).to({
                scaleX: 0
            }, 800, egret.Ease.quadOut).call(function() {
                Tool.remove(t.box)
            }), egret.Tween.get(t.box2).wait(700).to({
                scaleX: 1
            }, 800, egret.Ease.quadOut)
        })
    }, t.prototype.showBox2 = function() {
        var e = new egret.Sprite;
        this.mainBox.addChild(e), e.width = 655, e.height = 918, Tool.anchorXY(e), e.x = 381, e.y = 699, this.box2 = e, e.scaleX = 0;
        var t = Tool.createBitmapByName("kuan2_2_png");
        e.addChild(t);
        for (var a = 0; 3 > a; a++) {
            var i = Tool.createBitmapByName("btn3_" + (a + 1) + "_png");
            e.addChild(i), Tool.anchorXY(i), i.x = 321, i.y = 302 + 212 * a, i.touchEnabled = !0, i.id = a, i.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin2, this), i.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTap2, this), i.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap2, this), this.arr2.push(i)
        }
    }, t.prototype.onBegin2 = function(e) {
        playEft(), egret.Tween.get(this.arr2[e.currentTarget.id]).to({
            scaleX: 1.1,
            scaleY: 1.1
        }, 500, egret.Ease.quartOut)
    }, t.prototype.onTap2 = function(e) {
        this.box2.touchChildren = !1, egret.Tween.removeTweens(this.arr2[e.currentTarget.id]), egret.Tween.get(this.arr2[e.currentTarget.id]).to({
            scaleX: 1,
            scaleY: 1
        }, 500, egret.Ease.quartOut).call(function() {
            EM.dispatch().dispatchEventWith("nextPage")
        })
    }, t
}(egret.Sprite);
__reflect(Page2.prototype, "Page2");
var LoadingUI = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.addEventListener(egret.Event.ADDED_TO_STAGE, t.createView, t), t
    }
    return __extends(t, e), t.prototype.createView = function() {
        var e = this;
        this.box = new egret.Sprite, this.addChild(this.box), Tool.alignObj(this.box, 750, 1334, this.stage.stageWidth, this.stage.stageHeight);
        var t = Tool.createBitmapByName("bg2_1_jpg");
        this.box.addChild(t);
        var a = Tool.createBitmapByName("img3_3_png");
        this.box.addChild(a), a.x = 15, a.y = 246;
        var i = new egret.Shape;
        i.graphics.beginFill(16777215), i.graphics.drawCircle(374.5, 605.5, 158), i.graphics.endFill(), this.box.addChild(i);
        var n = Tool.createBitmapByName("loading_1_png");
        this.box.addChild(n), Tool.anchorXY(n), n.x = 374, n.y = 606, n.width = 319, n.height = 319, this.mak = new egret.Shape, this.box.addChild(this.mak), this.mak.x = 374, this.mak.y = 606, n.mask = this.mak, this.textField = new egret.TextField, this.box.addChild(this.textField), this.textField.y = 607, this.textField.width = 750, this.textField.height = 100, this.textField.textAlign = "center", this.textField.text = "0%", this.time = new egret.Timer(30, 100);
        var r = 0;
        this.time.addEventListener(egret.TimerEvent.TIMER, function() {
            r++, e.mak.graphics.clear(), e.mak.graphics.beginFill(65535, 1), e.mak.graphics.moveTo(0, 0), e.mak.graphics.lineTo(200, 0), e.mak.graphics.drawArc(0, 0, 200, 0, 3.6 * r * Math.PI / 180), e.mak.graphics.lineTo(0, 0), e.mak.graphics.endFill(), e.textField.text = r + "%"
        }, this), this.time.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function() {
            e.textField.alpha = 0, n.mask = null, Tool.remove(e.mak);
            var t = Tool.createBitmapByName("load_txt_png");
            e.box.addChild(t), Tool.anchorXY(t), t.x = 374, t.y = 604, t.scaleX = t.scaleY = 1, egret.Tween.get(t, {
                loop: !0
            }).to({
                scaleX: 1.1,
                scaleY: 1.1
            }, 600, egret.Ease.quadInOut).to({
                scaleX: 1,
                scaleY: 1
            }, 600, egret.Ease.quadInOut), n.touchEnabled = !0, n.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
                e.dispatchEventWith("hide"), n.touchEnabled = !1, play_video()
            }, e)
        }, this)
    }, t.prototype.onProgress = function(e, t) {
        Math.ceil(e / t * 100);
        this.time.start()
    }, t
}(egret.Sprite);
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var Page4 = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.id = Util.id, t.text = Util.text, t.addEventListener(egret.Event.ADDED_TO_STAGE, t.scene, t), t
    }
    return __extends(t, e), t.prototype.scene = function() {
        var e = this;
        this.mainBox = new egret.Sprite, this.addChild(this.mainBox);
        var t = Tool.createBitmapByName("bg4_" + (this.id + 1) + "_jpg");
        this.mainBox.addChild(t);
        var a = Tool.createBitmapByName("logo1_1_png");
        this.mainBox.addChild(a), a.x = 43, a.y = -142, egret.Tween.get(a).wait(300).to({
            y: 78
        }, 1e3, egret.Ease.quartOut);
        var i = Tool.createBitmapByName("logo1_2_png");
        if (this.mainBox.addChild(i), i.x = 745, i.y = 69, egret.Tween.get(i).wait(300).to({
                x: 545
            }, 1e3, egret.Ease.quartOut), 1 == this.id) {
            var n = Tool.createBitmapByName("ren2_1_png");
            this.mainBox.addChild(n), n.x = 49, n.y = 289
        }
        for (var r = [
                [
                    [52, 482],
                    [51, 561],
                    [48, 640],
                    [50, 720],
                    [49, 829],
                    [50, 976],
                    [43, 1041],
                    [43, 1080],
                    [322, 1144]
                ],
                [
                    [47, 289],
                    [46, 368],
                    [43, 447],
                    [46, 546],
                    [48, 656],
                    [49, 803],
                    [43, 867],
                    [43, 907],
                    [322, 1144]
                ],
                [
                    [45, 290],
                    [44, 368],
                    [41, 448],
                    [45, 546],
                    [43, 655],
                    [47, 803],
                    [40, 868],
                    [40, 907],
                    [322, 1144]
                ]
            ], o = ["jg_1_txt_1_png", "jg_1_txt_2_png", "jg_1_txt_3_png", "jg_1_txt_4_png", "jg_1_txt_5_png", "jg_1_txt_6_png", "jg_1_txt_7_png", "jg_1_txt_8_png", "txt4_1_png"], s = ["jg_1_txt_1_png", "jg_1_txt_2_png", "jg_1_txt_3_png", "jg_2_txt_4_png", "jg_1_txt_5_png", "jg_1_txt_6_png", "jg_1_txt_7_png", "jg_1_txt_8_png", "txt4_1_png"], h = ["jg_1_txt_1_png", "jg_1_txt_2_png", "jg_1_txt_3_png", "jg_3_txt_4_png", "jg_1_txt_5_png", "jg_1_txt_6_png", "jg_1_txt_7_png", "jg_1_txt_8_png", "txt4_1_png"], l = [o, s, h], g = 0; g < r[this.id].length; g++) {
            var c = Tool.createBitmapByName(l[this.id][g]);
            this.mainBox.addChild(c), c.x = r[this.id][g][0], c.y = r[this.id][g][1] + 200, c.alpha = 0, 5 > g ? egret.Tween.get(c).wait(100 * g).to({
                alpha: 1
            }).to({
                y: r[this.id][g][1]
            }, 1e3, egret.Ease.quartOut) : egret.Tween.get(c).wait(100 + 100 * g).to({
                alpha: 1
            }).to({
                y: r[this.id][g][1]
            }, 1e3, egret.Ease.quartOut)
        }
        var d = [
                [51, 890],
                [50, 717],
                [48, 717]
            ],
            p = new egret.TextField;
        p.text = this.text, this.mainBox.addChild(p), p.x = d[this.id][0], p.y = d[this.id][1] + 200, p.size = 74, p.bold = !0, p.textColor = 16777215, p.alpha = 0, egret.Tween.get(p).wait(500).to({
            alpha: 1
        }).to({
            y: d[this.id][1]
        }, 1e3, egret.Ease.quartOut);
        for (var u = [
                [85, 1201],
                [410, 1201]
            ], g = 0; 2 > g; g++) {
            var _ = Tool.createBitmapByName("btn4_" + (g + 1) + "_png");
            this.mainBox.addChild(_), _.x = u[g][0], _.y = u[g][1] + 200, _.alpha = 0, egret.Tween.get(_).wait(1e3).to({
                alpha: 1,
                y: u[g][1] - 20
            }, 1e3, egret.Ease.quartOut)
        }
        this.box = new egret.Sprite, this.addChild(this.box), this.box.x = 2e3;
        var v = new Page5;
        this.box.addChild(v), setTimeout(function() {
            e.renderTexture()
        }, 200)
    }, t.prototype.renderTexture = function() {
        console.log("开始渲染");
        var e = new egret.RenderTexture;
        e.drawToTexture(this.box, new egret.Rectangle(0, 0, 750, 1334));
        var t = e.toDataURL("image/jpeg", new egret.Rectangle(0, 0, 750, 1334));
        showBg(t)
    }, t
}(egret.Sprite);
__reflect(Page4.prototype, "Page4");
var Page5 = function(e) {
    function t() {
        var t = e.call(this) || this;
        return t.id = Util.id, t.text = Util.text, t.addEventListener(egret.Event.ADDED_TO_STAGE, t.scene, t), t
    }
    return __extends(t, e), t.prototype.scene = function() {
        this.mainBox = new egret.Sprite, this.addChild(this.mainBox);
        var e = Tool.createBitmapByName("jg_bg1_" + (this.id + 1) + "_jpg");
        this.mainBox.addChild(e);
        var t = [
                [91, 822],
                [91, 392],
                [91, 390]
            ],
            a = [16777215, 16738099, 16777215],
            i = new egret.TextField;
        i.text = this.text, this.mainBox.addChild(i), i.x = t[this.id][0], i.y = t[this.id][1], i.size = 72, i.bold = !0, i.textColor = a[this.id];
        var n = Tool.createBitmapByName("er_png");
        this.mainBox.addChild(n), n.width = n.height = 111, n.x = 558, n.y = 1105
    }, t
}(egret.Sprite);
__reflect(Page5.prototype, "Page5");
var DebugPlatform = function() {
    function e() {}
    return e.prototype.getUserInfo = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, {
                    nickName: "username"
                }]
            })
        })
    }, e.prototype.login = function() {
        return __awaiter(this, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2]
            })
        })
    }, e
}();
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]), window.platform || (window.platform = new DebugPlatform);
var Tool = function() {
    function e() {}
    return e.f2t = function(e, t) {
        return void 0 === t && (t = 30), e / t * 1e3
    }, e.gear = function(e, t) {
        return void 0 === t && (t = 1), e * t
    }, e.hitTest = function(e, t) {
        var a = e.getBounds(),
            i = t.getBounds();
        return a.x = e.x, a.y = e.y, i.x = t.x, i.y = t.y, a.intersects(i)
    }, e.hitTest2 = function(e, t, a, i, n, r, o, s) {
        return e >= n && e >= n + o ? !1 : n >= e && n >= e + a ? !1 : t >= r && t >= r + s ? !1 : r >= t && r >= t + i ? !1 : !0
    }, e.remove = function(e) {
        e ? e.parent && e.parent.removeChild(e) : console.log("Tool.remove:对象为空")
    }, e.anchorXY = function(e, t, a) {
        var i = t || 0 == t ? t : Math.round(e.width / 2),
            n = a || 0 == a ? a : Math.round(e.height / 2);
        e.anchorOffsetX = i, e.anchorOffsetY = n
    }, e.getMcData = function(e, t) {
        e = RES.getRes(e), t = RES.getRes(t);
        var a = new egret.MovieClipDataFactory(e, t);
        return a
    }, e.createBitmapByName = function(e) {
        var t = new egret.Bitmap,
            a = RES.getRes(e);
        return t.texture = a, t
    }, e.createSprite = function(e, t) {
        void 0 === t && (t = [0, 0, 640, 1030]);
        var a = new egret.Sprite;
        return a.graphics.beginFill(e), a.graphics.drawRect(t[0], t[1], t[2], t[3]), a.graphics.endFill(), a
    }, e.getRandom = function(e, t, a) {
        void 0 === a && (a = 2);
        var i = Math.random() * (t - e) + e;
        return Number(i.toFixed(a))
    }, e.RandomString = function(e) {
        for (var t = ""; t.length < e; t += Math.random().toString(36).substr(2));
        return t.substr(0, e)
    }, e.randomArray = function(e) {
        return e.sort(function() {
            return Math.random() > .5
        })
    }, e.FormatData = function(e, t) {
        void 0 === t && (t = []);
        var a = 20,
            i = new egret.TextField;
        i.size = a;
        for (var n, r, o = [], s = 0; s < e.length; s++) i.text = e.substr(s, 1), n = new egret.RenderTexture, n.drawToTexture(i, new egret.Rectangle(0, 0, i.width, i.height)), r = new egret.Bitmap, r.texture = n, o.push(r);
        for (var s = 0; s < t.length; s++) {
            r = t[s];
            var h = a / r.width;
            r.width = a, r.height = h * r.height, r.scaleX = r.scaleY = h, n = new egret.RenderTexture, n.drawToTexture(r, new egret.Rectangle(0, 0, r.width, r.height)), r = new egret.Bitmap, r.texture = n, o.push(r)
        }
        for (var l = [], g = [], s = 0; s < o.length; s++) {
            l = [], r = o[s];
            for (var c = 0; c < r.width; c++)
                for (var d = 0; d < r.height; d++) r.texture.getPixel32(c, d)[3] > 127.5 && l.push([c, d]);
            g.push(l)
        }
        return g
    }, e.shake = function(e, t, a, i, n) {
        void 0 === t && (t = 70), void 0 === a && (a = 1), void 0 === i && (i = 1), void 0 === n && (n = !0);
        var r = t * i,
            o = a * i;
        e.__mcX = e.x, e.__mcY = e.y;
        var s;
        s = 1 == n ? egret.Tween.get(e, {
            loop: !0
        }) : egret.Tween.get(e), s.to({
            x: e.__mcX + o,
            y: e.__mcY,
            alpha: 1
        }, r).to({
            x: e.__mcX - o,
            y: e.__mcY - o,
            alpha: 1
        }, r).to({
            x: e.__mcX,
            y: e.__mcY - o,
            alpha: 1
        }, r).to({
            x: e.__mcX,
            y: e.__mcY + o,
            alpha: 1
        }, r).to({
            x: e.__mcX - o,
            y: e.__mcY,
            alpha: 1
        }, r).to({
            x: e.__mcX + o,
            y: e.__mcY,
            alpha: 1
        }, r).to({
            x: e.__mcX - o,
            y: e.__mcY - o,
            alpha: 1
        }, r).to({
            x: e.__mcX,
            y: e.__mcY - o,
            alpha: 1
        }, r).to({
            x: e.__mcX,
            y: e.__mcY + o,
            alpha: 1
        }, r).to({
            x: e.__mcX - o,
            y: e.__mcY,
            alpha: 1
        }, r).to({
            x: e.__mcX,
            y: e.__mcY,
            alpha: 1
        }, r)
    }, e.scaleObj = function(t, a, i, n, r, o, s) {
        void 0 === o && (o = "out"), void 0 === s && (s = !0);
        var h = 1;
        h = "out" == o ? a / i > n / r ? r / i : n / a : a / i > n / r ? a / n : i / r, t.scaleX = t.scaleY = h, s && e.alignObj(t, a * h, i * h, n, r)
    }, e.getScale = function(t, a, i, n, r) {
        void 0 === t && (t = 640), void 0 === a && (a = 1030), void 0 === i && (i = e.getShowW()), void 0 === n && (n = e.getShowH()), void 0 === r && (r = "in");
        var o, s = t / a,
            h = i / n;
        return o = s > h ? "in" == r ? i / t : n / a : "in" == r ? n / a : i / t
    }, e.alignObj = function(e, t, a, i, n, r, o) {
        void 0 === r && (r = 0), void 0 === o && (o = 0), e.x = Math.round((i - t) / 2) + r, e.y = Math.round((n - a) / 2) + o
    }, e.getShowW = function() {
        return window.innerWidth
    }, e.getShowH = function() {
        return window.innerHeight
    }, e.sortArr1 = function(e, t) {
        return e - t
    }, e.sortArr2 = function(e, t) {
        return e > t ? 1 : t > e ? -1 : 0
    }, e
}();
__reflect(Tool.prototype, "Tool");
var Util = function() {
    function e() {}
    return e.id = 0, e
}();
__reflect(Util.prototype, "Util");