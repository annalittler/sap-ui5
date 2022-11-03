/*!
 * @license
 *
 * Scandit Barcode Scanner SDK for the Web
 * v. 5.12.1
 *
 * Copyright © 2022 Scandit AG. All Rights Reserved.
 *
 * The use of this software is governed by the Scandit Terms and Conditions.
 * https://ssl.scandit.com/terms/test.pdf
 *
 * The following sets forth attribution notices for third party software that may be contained in portions of the product.
 * https://docs.scandit.com/stable/web/LICENSE
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(
        ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).ScanditSDK = {})
      );
})(this, function (e) {
  "use strict";
  var t =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
    n = Math.ceil,
    r = Math.floor,
    i = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
    },
    a = function (e) {
      if (null == e) throw TypeError("Can't call method on  " + e);
      return e;
    },
    o = i,
    s = a,
    c = { exports: {} },
    u = (c.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
  "number" == typeof __g && (__g = u);
  var l = { exports: {} },
    d = (l.exports = { version: "2.6.12" });
  "number" == typeof __e && (__e = d);
  var h = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    },
    f = h,
    g = function (e, t, n) {
      if ((f(e), void 0 === t)) return e;
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function (n, r, i) {
            return e.call(t, n, r, i);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    },
    m = {},
    p = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    },
    v = p,
    y = function (e) {
      if (!v(e)) throw TypeError(e + " is not an object!");
      return e;
    },
    b = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    },
    E = !b(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
    S = p,
    A = c.exports.document,
    _ = S(A) && S(A.createElement),
    C = function (e) {
      return _ ? A.createElement(e) : {};
    },
    T =
      !E &&
      !b(function () {
        return (
          7 !=
          Object.defineProperty(C("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    w = p,
    N = function (e, t) {
      if (!w(e)) return e;
      var n, r;
      if (t && "function" == typeof (n = e.toString) && !w((r = n.call(e))))
        return r;
      if ("function" == typeof (n = e.valueOf) && !w((r = n.call(e)))) return r;
      if (!t && "function" == typeof (n = e.toString) && !w((r = n.call(e))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    },
    I = y,
    k = T,
    L = N,
    x = Object.defineProperty;
  m.f = E
    ? Object.defineProperty
    : function (e, t, n) {
        if ((I(e), (t = L(t, !0)), I(n), k))
          try {
            return x(e, t, n);
          } catch (e) {}
        if ("get" in n || "set" in n)
          throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e;
      };
  var M = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    },
    V = m,
    O = M,
    R = E
      ? function (e, t, n) {
          return V.f(e, t, O(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        },
    D = {}.hasOwnProperty,
    P = function (e, t) {
      return D.call(e, t);
    },
    F = c.exports,
    B = l.exports,
    j = g,
    U = R,
    G = P,
    z = function (e, t, n) {
      var r,
        i,
        a,
        o = e & z.F,
        s = e & z.G,
        c = e & z.S,
        u = e & z.P,
        l = e & z.B,
        d = e & z.W,
        h = s ? B : B[t] || (B[t] = {}),
        f = h.prototype,
        g = s ? F : c ? F[t] : (F[t] || {}).prototype;
      for (r in (s && (n = t), n))
        ((i = !o && g && void 0 !== g[r]) && G(h, r)) ||
          ((a = i ? g[r] : n[r]),
          (h[r] =
            s && "function" != typeof g[r]
              ? n[r]
              : l && i
              ? j(a, F)
              : d && g[r] == a
              ? (function (e) {
                  var t = function (t, n, r) {
                    if (this instanceof e) {
                      switch (arguments.length) {
                        case 0:
                          return new e();
                        case 1:
                          return new e(t);
                        case 2:
                          return new e(t, n);
                      }
                      return new e(t, n, r);
                    }
                    return e.apply(this, arguments);
                  };
                  return (t.prototype = e.prototype), t;
                })(a)
              : u && "function" == typeof a
              ? j(Function.call, a)
              : a),
          u &&
            (((h.virtual || (h.virtual = {}))[r] = a),
            e & z.R && f && !f[r] && U(f, r, a)));
    };
  (z.F = 1),
    (z.G = 2),
    (z.S = 4),
    (z.P = 8),
    (z.B = 16),
    (z.W = 32),
    (z.U = 64),
    (z.R = 128);
  var W = z,
    H = R,
    Y = {},
    Q = {}.toString,
    Z = function (e) {
      return Q.call(e).slice(8, -1);
    },
    q = Z,
    X = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (e) {
          return "String" == q(e) ? e.split("") : Object(e);
        },
    K = X,
    J = a,
    $ = function (e) {
      return K(J(e));
    },
    ee = i,
    te = Math.min,
    ne = function (e) {
      return e > 0 ? te(ee(e), 9007199254740991) : 0;
    },
    re = i,
    ie = Math.max,
    ae = Math.min,
    oe = $,
    se = ne,
    ce = { exports: {} },
    ue = l.exports,
    le = c.exports,
    de = "__core-js_shared__",
    he = le[de] || (le[de] = {});
  (ce.exports = function (e, t) {
    return he[e] || (he[e] = void 0 !== t ? t : {});
  })("versions", []).push({
    version: ue.version,
    mode: "pure",
    copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
  });
  var fe = 0,
    ge = Math.random(),
    me = function (e) {
      return "Symbol(".concat(
        void 0 === e ? "" : e,
        ")_",
        (++fe + ge).toString(36)
      );
    },
    pe = ce.exports("keys"),
    ve = me,
    ye = function (e) {
      return pe[e] || (pe[e] = ve(e));
    },
    be = P,
    Ee = $,
    Se =
      (!1,
      function (e, t, n) {
        for (
          var r = oe(e),
            i = se(r.length),
            a = (function (e, t) {
              return (e = re(e)) < 0 ? ie(e + t, 0) : ae(e, t);
            })(n, i);
          i > a;
          a++
        )
          if (a in r && r[a] === t) return a || 0;
        return -1;
      }),
    Ae = ye("IE_PROTO"),
    _e = function (e, t) {
      var n,
        r = Ee(e),
        i = 0,
        a = [];
      for (n in r) n != Ae && be(r, n) && a.push(n);
      for (; t.length > i; ) be(r, (n = t[i++])) && (~Se(a, n) || a.push(n));
      return a;
    },
    Ce =
      "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      ),
    Te = _e,
    we = Ce,
    Ne =
      Object.keys ||
      function (e) {
        return Te(e, we);
      },
    Ie = m,
    ke = y,
    Le = Ne,
    xe = E
      ? Object.defineProperties
      : function (e, t) {
          ke(e);
          for (var n, r = Le(t), i = r.length, a = 0; i > a; )
            Ie.f(e, (n = r[a++]), t[n]);
          return e;
        },
    Me = c.exports.document,
    Ve = Me && Me.documentElement,
    Oe = y,
    Re = xe,
    De = Ce,
    Pe = ye("IE_PROTO"),
    Fe = function () {},
    Be = function () {
      var e,
        t = C("iframe"),
        n = De.length;
      for (
        t.style.display = "none",
          Ve.appendChild(t),
          t.src = "javascript:",
          (e = t.contentWindow.document).open(),
          e.write("<script>document.F=Object</script>"),
          e.close(),
          Be = e.F;
        n--;

      )
        delete Be.prototype[De[n]];
      return Be();
    },
    je =
      Object.create ||
      function (e, t) {
        var n;
        return (
          null !== e
            ? ((Fe.prototype = Oe(e)),
              (n = new Fe()),
              (Fe.prototype = null),
              (n[Pe] = e))
            : (n = Be()),
          void 0 === t ? n : Re(n, t)
        );
      },
    Ue = { exports: {} },
    Ge = ce.exports("wks"),
    ze = me,
    We = c.exports.Symbol,
    He = "function" == typeof We;
  (Ue.exports = function (e) {
    return Ge[e] || (Ge[e] = (He && We[e]) || (He ? We : ze)("Symbol." + e));
  }).store = Ge;
  var Ye = m.f,
    Qe = P,
    Ze = Ue.exports("toStringTag"),
    qe = function (e, t, n) {
      e &&
        !Qe((e = n ? e : e.prototype), Ze) &&
        Ye(e, Ze, { configurable: !0, value: t });
    },
    Xe = je,
    Ke = M,
    Je = qe,
    $e = {};
  R($e, Ue.exports("iterator"), function () {
    return this;
  });
  var et = a,
    tt = function (e) {
      return Object(et(e));
    },
    nt = P,
    rt = tt,
    it = ye("IE_PROTO"),
    at = Object.prototype,
    ot =
      Object.getPrototypeOf ||
      function (e) {
        return (
          (e = rt(e)),
          nt(e, it)
            ? e[it]
            : "function" == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? at
            : null
        );
      },
    st = W,
    ct = H,
    ut = R,
    lt = Y,
    dt = function (e, t, n) {
      (e.prototype = Xe($e, { next: Ke(1, n) })), Je(e, t + " Iterator");
    },
    ht = qe,
    ft = ot,
    gt = Ue.exports("iterator"),
    mt = !([].keys && "next" in [].keys()),
    pt = "keys",
    vt = "values",
    yt = function () {
      return this;
    },
    bt = function (e, t, n, r, i, a, o) {
      dt(n, t, r);
      var s,
        c,
        u,
        l = function (e) {
          if (!mt && e in g) return g[e];
          switch (e) {
            case pt:
            case vt:
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this, e);
          };
        },
        d = t + " Iterator",
        h = i == vt,
        f = !1,
        g = e.prototype,
        m = g[gt] || g["@@iterator"] || (i && g[i]),
        p = m || l(i),
        v = i ? (h ? l("entries") : p) : void 0,
        y = ("Array" == t && g.entries) || m;
      if (
        (y &&
          (u = ft(y.call(new e()))) !== Object.prototype &&
          u.next &&
          ht(u, d, !0),
        h &&
          m &&
          m.name !== vt &&
          ((f = !0),
          (p = function () {
            return m.call(this);
          })),
        o && (mt || f || !g[gt]) && ut(g, gt, p),
        (lt[t] = p),
        (lt[d] = yt),
        i)
      )
        if (
          ((s = { values: h ? p : l(vt), keys: a ? p : l(pt), entries: v }), o)
        )
          for (c in s) c in g || ct(g, c, s[c]);
        else st(st.P + st.F * (mt || f), t, s);
      return s;
    },
    Et = function (e, t) {
      var n,
        r,
        i = String(s(e)),
        a = o(t),
        c = i.length;
      return a < 0 || a >= c
        ? ""
        : (n = i.charCodeAt(a)) < 55296 ||
          n > 56319 ||
          a + 1 === c ||
          (r = i.charCodeAt(a + 1)) < 56320 ||
          r > 57343
        ? i.charAt(a)
        : i.slice(a, a + 2);
    };
  bt(
    String,
    "String",
    function (e) {
      (this._t = String(e)), (this._i = 0);
    },
    function () {
      var e,
        t = this._t,
        n = this._i;
      return n >= t.length
        ? { value: void 0, done: !0 }
        : ((e = Et(t, n)), (this._i += e.length), { value: e, done: !1 });
    }
  );
  var St = function (e, t) {
      return { value: t, done: !!e };
    },
    At = St,
    _t = Y,
    Ct = $;
  bt(
    Array,
    "Array",
    function (e, t) {
      (this._t = Ct(e)), (this._i = 0), (this._k = t);
    },
    function () {
      var e = this._t,
        t = this._k,
        n = this._i++;
      return !e || n >= e.length
        ? ((this._t = void 0), At(1))
        : At(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
    },
    "values"
  ),
    (_t.Arguments = _t.Array);
  for (
    var Tt = c.exports,
      wt = R,
      Nt = Y,
      It = Ue.exports("toStringTag"),
      kt =
        "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
          ","
        ),
      Lt = 0;
    Lt < kt.length;
    Lt++
  ) {
    var xt = kt[Lt],
      Mt = Tt[xt],
      Vt = Mt && Mt.prototype;
    Vt && !Vt[It] && wt(Vt, It, xt), (Nt[xt] = Nt.Array);
  }
  var Ot = Z,
    Rt = Ue.exports("toStringTag"),
    Dt =
      "Arguments" ==
      Ot(
        (function () {
          return arguments;
        })()
      ),
    Pt = function (e) {
      var t, n, r;
      return void 0 === e
        ? "Undefined"
        : null === e
        ? "Null"
        : "string" ==
          typeof (n = (function (e, t) {
            try {
              return e[t];
            } catch (e) {}
          })((t = Object(e)), Rt))
        ? n
        : Dt
        ? Ot(t)
        : "Object" == (r = Ot(t)) && "function" == typeof t.callee
        ? "Arguments"
        : r;
    },
    Ft = function (e, t, n, r) {
      if (!(e instanceof t) || (void 0 !== r && r in e))
        throw TypeError(n + ": incorrect invocation!");
      return e;
    },
    Bt = { exports: {} },
    jt = y,
    Ut = function (e, t, n, r) {
      try {
        return r ? t(jt(n)[0], n[1]) : t(n);
      } catch (t) {
        var i = e.return;
        throw (void 0 !== i && jt(i.call(e)), t);
      }
    },
    Gt = Y,
    zt = Ue.exports("iterator"),
    Wt = Array.prototype,
    Ht = function (e) {
      return void 0 !== e && (Gt.Array === e || Wt[zt] === e);
    },
    Yt = Pt,
    Qt = Ue.exports("iterator"),
    Zt = Y,
    qt = (l.exports.getIteratorMethod = function (e) {
      if (null != e) return e[Qt] || e["@@iterator"] || Zt[Yt(e)];
    }),
    Xt = g,
    Kt = Ut,
    Jt = Ht,
    $t = y,
    en = ne,
    tn = qt,
    nn = {},
    rn = {},
    an = (Bt.exports = function (e, t, n, r, i) {
      var a,
        o,
        s,
        c,
        u = i
          ? function () {
              return e;
            }
          : tn(e),
        l = Xt(n, r, t ? 2 : 1),
        d = 0;
      if ("function" != typeof u) throw TypeError(e + " is not iterable!");
      if (Jt(u)) {
        for (a = en(e.length); a > d; d++)
          if ((c = t ? l($t((o = e[d]))[0], o[1]) : l(e[d])) === nn || c === rn)
            return c;
      } else
        for (s = u.call(e); !(o = s.next()).done; )
          if ((c = Kt(s, l, o.value, t)) === nn || c === rn) return c;
    });
  (an.BREAK = nn), (an.RETURN = rn);
  var on,
    sn,
    cn,
    un = y,
    ln = h,
    dn = Ue.exports("species"),
    hn = function (e, t) {
      var n,
        r = un(e).constructor;
      return void 0 === r || null == (n = un(r)[dn]) ? t : ln(n);
    },
    fn = function (e, t, n) {
      var r = void 0 === n;
      switch (t.length) {
        case 0:
          return r ? e() : e.call(n);
        case 1:
          return r ? e(t[0]) : e.call(n, t[0]);
        case 2:
          return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
          return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
          return r
            ? e(t[0], t[1], t[2], t[3])
            : e.call(n, t[0], t[1], t[2], t[3]);
      }
      return e.apply(n, t);
    },
    gn = g,
    mn = fn,
    pn = Ve,
    vn = C,
    yn = c.exports,
    bn = yn.process,
    En = yn.setImmediate,
    Sn = yn.clearImmediate,
    An = yn.MessageChannel,
    _n = yn.Dispatch,
    Cn = 0,
    Tn = {},
    wn = function () {
      var e = +this;
      if (Tn.hasOwnProperty(e)) {
        var t = Tn[e];
        delete Tn[e], t();
      }
    },
    Nn = function (e) {
      wn.call(e.data);
    };
  (En && Sn) ||
    ((En = function (e) {
      for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
      return (
        (Tn[++Cn] = function () {
          mn("function" == typeof e ? e : Function(e), t);
        }),
        on(Cn),
        Cn
      );
    }),
    (Sn = function (e) {
      delete Tn[e];
    }),
    "process" == Z(bn)
      ? (on = function (e) {
          bn.nextTick(gn(wn, e, 1));
        })
      : _n && _n.now
      ? (on = function (e) {
          _n.now(gn(wn, e, 1));
        })
      : An
      ? ((cn = (sn = new An()).port2),
        (sn.port1.onmessage = Nn),
        (on = gn(cn.postMessage, cn, 1)))
      : yn.addEventListener &&
        "function" == typeof postMessage &&
        !yn.importScripts
      ? ((on = function (e) {
          yn.postMessage(e + "", "*");
        }),
        yn.addEventListener("message", Nn, !1))
      : (on =
          "onreadystatechange" in vn("script")
            ? function (e) {
                pn.appendChild(vn("script")).onreadystatechange = function () {
                  pn.removeChild(this), wn.call(e);
                };
              }
            : function (e) {
                setTimeout(gn(wn, e, 1), 0);
              }));
  var In = { set: En, clear: Sn },
    kn = c.exports,
    Ln = In.set,
    xn = kn.MutationObserver || kn.WebKitMutationObserver,
    Mn = kn.process,
    Vn = kn.Promise,
    On = "process" == Z(Mn),
    Rn = {},
    Dn = h;
  function Pn(e) {
    var t, n;
    (this.promise = new e(function (e, r) {
      if (void 0 !== t || void 0 !== n)
        throw TypeError("Bad Promise constructor");
      (t = e), (n = r);
    })),
      (this.resolve = Dn(t)),
      (this.reject = Dn(n));
  }
  Rn.f = function (e) {
    return new Pn(e);
  };
  var Fn = function (e) {
      try {
        return { e: !1, v: e() };
      } catch (e) {
        return { e: !0, v: e };
      }
    },
    Bn = c.exports.navigator,
    jn = (Bn && Bn.userAgent) || "",
    Un = y,
    Gn = p,
    zn = Rn,
    Wn = function (e, t) {
      if ((Un(e), Gn(t) && t.constructor === e)) return t;
      var n = zn.f(e);
      return (0, n.resolve)(t), n.promise;
    },
    Hn = R,
    Yn = function (e, t, n) {
      for (var r in t) n && e[r] ? (e[r] = t[r]) : Hn(e, r, t[r]);
      return e;
    },
    Qn = c.exports,
    Zn = l.exports,
    qn = m,
    Xn = E,
    Kn = Ue.exports("species"),
    Jn = function (e) {
      var t = "function" == typeof Zn[e] ? Zn[e] : Qn[e];
      Xn &&
        t &&
        !t[Kn] &&
        qn.f(t, Kn, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    },
    $n = Ue.exports("iterator"),
    er = !1;
  try {
    var tr = [7][$n]();
    (tr.return = function () {
      er = !0;
    }),
      Array.from(tr, function () {
        throw 2;
      });
  } catch (e) {}
  var nr,
    rr,
    ir,
    ar,
    or = function (e, t) {
      if (!t && !er) return !1;
      var n = !1;
      try {
        var r = [7],
          i = r[$n]();
        (i.next = function () {
          return { done: (n = !0) };
        }),
          (r[$n] = function () {
            return i;
          }),
          e(r);
      } catch (e) {}
      return n;
    },
    sr = c.exports,
    cr = g,
    ur = Pt,
    lr = W,
    dr = p,
    hr = h,
    fr = Ft,
    gr = Bt.exports,
    mr = hn,
    pr = In.set,
    vr = (function () {
      var e,
        t,
        n,
        r = function () {
          var r, i;
          for (On && (r = Mn.domain) && r.exit(); e; ) {
            (i = e.fn), (e = e.next);
            try {
              i();
            } catch (r) {
              throw (e ? n() : (t = void 0), r);
            }
          }
          (t = void 0), r && r.enter();
        };
      if (On)
        n = function () {
          Mn.nextTick(r);
        };
      else if (!xn || (kn.navigator && kn.navigator.standalone))
        if (Vn && Vn.resolve) {
          var i = Vn.resolve(void 0);
          n = function () {
            i.then(r);
          };
        } else
          n = function () {
            Ln.call(kn, r);
          };
      else {
        var a = !0,
          o = document.createTextNode("");
        new xn(r).observe(o, { characterData: !0 }),
          (n = function () {
            o.data = a = !a;
          });
      }
      return function (r) {
        var i = { fn: r, next: void 0 };
        t && (t.next = i), e || ((e = i), n()), (t = i);
      };
    })(),
    yr = Rn,
    br = Fn,
    Er = jn,
    Sr = Wn,
    Ar = "Promise",
    _r = sr.TypeError,
    Cr = sr.process,
    Tr = Cr && Cr.versions,
    wr = (Tr && Tr.v8) || "",
    Nr = sr.Promise,
    Ir = "process" == ur(Cr),
    kr = function () {},
    Lr = (rr = yr.f),
    xr = !!(function () {
      try {
        var e = Nr.resolve(1),
          t = ((e.constructor = {})[Ue.exports("species")] = function (e) {
            e(kr, kr);
          });
        return (
          (Ir || "function" == typeof PromiseRejectionEvent) &&
          e.then(kr) instanceof t &&
          0 !== wr.indexOf("6.6") &&
          -1 === Er.indexOf("Chrome/66")
        );
      } catch (e) {}
    })(),
    Mr = function (e) {
      var t;
      return !(!dr(e) || "function" != typeof (t = e.then)) && t;
    },
    Vr = function (e, t) {
      if (!e._n) {
        e._n = !0;
        var n = e._c;
        vr(function () {
          for (
            var r = e._v,
              i = 1 == e._s,
              a = 0,
              o = function (t) {
                var n,
                  a,
                  o,
                  s = i ? t.ok : t.fail,
                  c = t.resolve,
                  u = t.reject,
                  l = t.domain;
                try {
                  s
                    ? (i || (2 == e._h && Dr(e), (e._h = 1)),
                      !0 === s
                        ? (n = r)
                        : (l && l.enter(),
                          (n = s(r)),
                          l && (l.exit(), (o = !0))),
                      n === t.promise
                        ? u(_r("Promise-chain cycle"))
                        : (a = Mr(n))
                        ? a.call(n, c, u)
                        : c(n))
                    : u(r);
                } catch (e) {
                  l && !o && l.exit(), u(e);
                }
              };
            n.length > a;

          )
            o(n[a++]);
          (e._c = []), (e._n = !1), t && !e._h && Or(e);
        });
      }
    },
    Or = function (e) {
      pr.call(sr, function () {
        var t,
          n,
          r,
          i = e._v,
          a = Rr(e);
        if (
          (a &&
            ((t = br(function () {
              Ir
                ? Cr.emit("unhandledRejection", i, e)
                : (n = sr.onunhandledrejection)
                ? n({ promise: e, reason: i })
                : (r = sr.console) &&
                  r.error &&
                  r.error("Unhandled promise rejection", i);
            })),
            (e._h = Ir || Rr(e) ? 2 : 1)),
          (e._a = void 0),
          a && t.e)
        )
          throw t.v;
      });
    },
    Rr = function (e) {
      return 1 !== e._h && 0 === (e._a || e._c).length;
    },
    Dr = function (e) {
      pr.call(sr, function () {
        var t;
        Ir
          ? Cr.emit("rejectionHandled", e)
          : (t = sr.onrejectionhandled) && t({ promise: e, reason: e._v });
      });
    },
    Pr = function (e) {
      var t = this;
      t._d ||
        ((t._d = !0),
        ((t = t._w || t)._v = e),
        (t._s = 2),
        t._a || (t._a = t._c.slice()),
        Vr(t, !0));
    },
    Fr = function (e) {
      var t,
        n = this;
      if (!n._d) {
        (n._d = !0), (n = n._w || n);
        try {
          if (n === e) throw _r("Promise can't be resolved itself");
          (t = Mr(e))
            ? vr(function () {
                var r = { _w: n, _d: !1 };
                try {
                  t.call(e, cr(Fr, r, 1), cr(Pr, r, 1));
                } catch (e) {
                  Pr.call(r, e);
                }
              })
            : ((n._v = e), (n._s = 1), Vr(n, !1));
        } catch (e) {
          Pr.call({ _w: n, _d: !1 }, e);
        }
      }
    };
  xr ||
    ((Nr = function (e) {
      fr(this, Nr, Ar, "_h"), hr(e), nr.call(this);
      try {
        e(cr(Fr, this, 1), cr(Pr, this, 1));
      } catch (e) {
        Pr.call(this, e);
      }
    }),
    ((nr = function (e) {
      (this._c = []),
        (this._a = void 0),
        (this._s = 0),
        (this._d = !1),
        (this._v = void 0),
        (this._h = 0),
        (this._n = !1);
    }).prototype = Yn(Nr.prototype, {
      then: function (e, t) {
        var n = Lr(mr(this, Nr));
        return (
          (n.ok = "function" != typeof e || e),
          (n.fail = "function" == typeof t && t),
          (n.domain = Ir ? Cr.domain : void 0),
          this._c.push(n),
          this._a && this._a.push(n),
          this._s && Vr(this, !1),
          n.promise
        );
      },
      catch: function (e) {
        return this.then(void 0, e);
      },
    })),
    (ir = function () {
      var e = new nr();
      (this.promise = e),
        (this.resolve = cr(Fr, e, 1)),
        (this.reject = cr(Pr, e, 1));
    }),
    (yr.f = Lr =
      function (e) {
        return e === Nr || e === ar ? new ir(e) : rr(e);
      })),
    lr(lr.G + lr.W + lr.F * !xr, { Promise: Nr }),
    qe(Nr, Ar),
    Jn(Ar),
    (ar = l.exports.Promise),
    lr(lr.S + lr.F * !xr, Ar, {
      reject: function (e) {
        var t = Lr(this);
        return (0, t.reject)(e), t.promise;
      },
    }),
    lr(lr.S + !0 * lr.F, Ar, {
      resolve: function (e) {
        return Sr(this === ar ? Nr : this, e);
      },
    }),
    lr(
      lr.S +
        lr.F *
          !(
            xr &&
            or(function (e) {
              Nr.all(e).catch(kr);
            })
          ),
      Ar,
      {
        all: function (e) {
          var t = this,
            n = Lr(t),
            r = n.resolve,
            i = n.reject,
            a = br(function () {
              var n = [],
                a = 0,
                o = 1;
              gr(e, !1, function (e) {
                var s = a++,
                  c = !1;
                n.push(void 0),
                  o++,
                  t.resolve(e).then(function (e) {
                    c || ((c = !0), (n[s] = e), --o || r(n));
                  }, i);
              }),
                --o || r(n);
            });
          return a.e && i(a.v), n.promise;
        },
        race: function (e) {
          var t = this,
            n = Lr(t),
            r = n.reject,
            i = br(function () {
              gr(e, !1, function (e) {
                t.resolve(e).then(n.resolve, r);
              });
            });
          return i.e && r(i.v), n.promise;
        },
      }
    );
  var Br = W,
    jr = l.exports,
    Ur = c.exports,
    Gr = hn,
    zr = Wn;
  Br(Br.P + Br.R, "Promise", {
    finally: function (e) {
      var t = Gr(this, jr.Promise || Ur.Promise),
        n = "function" == typeof e;
      return this.then(
        n
          ? function (n) {
              return zr(t, e()).then(function () {
                return n;
              });
            }
          : e,
        n
          ? function (n) {
              return zr(t, e()).then(function () {
                throw n;
              });
            }
          : e
      );
    },
  });
  var Wr = Rn,
    Hr = Fn;
  W(W.S, "Promise", {
    try: function (e) {
      var t = Wr.f(this),
        n = Hr(e);
      return (n.e ? t.reject : t.resolve)(n.v), t.promise;
    },
  });
  var Yr = l.exports.Promise;
  function Qr(e, t, n, r, i, a, o) {
    try {
      var s = e[a](o),
        c = s.value;
    } catch (e) {
      return void n(e);
    }
    s.done ? t(c) : Yr.resolve(c).then(r, i);
  }
  function Zr(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Yr(function (r, i) {
        var a = e.apply(t, n);
        function o(e) {
          Qr(a, r, i, o, s, "next", e);
        }
        function s(e) {
          Qr(a, r, i, o, s, "throw", e);
        }
        o(void 0);
      });
    };
  }
  var qr = { exports: {} },
    Xr = { exports: {} },
    Kr = { exports: {} },
    Jr = me("meta"),
    $r = p,
    ei = P,
    ti = m.f,
    ni = 0,
    ri =
      Object.isExtensible ||
      function () {
        return !0;
      },
    ii = !b(function () {
      return ri(Object.preventExtensions({}));
    }),
    ai = function (e) {
      ti(e, Jr, { value: { i: "O" + ++ni, w: {} } });
    },
    oi = (Kr.exports = {
      KEY: Jr,
      NEED: !1,
      fastKey: function (e, t) {
        if (!$r(e))
          return "symbol" == typeof e
            ? e
            : ("string" == typeof e ? "S" : "P") + e;
        if (!ei(e, Jr)) {
          if (!ri(e)) return "F";
          if (!t) return "E";
          ai(e);
        }
        return e[Jr].i;
      },
      getWeak: function (e, t) {
        if (!ei(e, Jr)) {
          if (!ri(e)) return !0;
          if (!t) return !1;
          ai(e);
        }
        return e[Jr].w;
      },
      onFreeze: function (e) {
        return ii && oi.NEED && ri(e) && !ei(e, Jr) && ai(e), e;
      },
    }),
    si = {};
  si.f = Ue.exports;
  var ci = l.exports,
    ui = si,
    li = m.f,
    di = function (e) {
      var t = ci.Symbol || (ci.Symbol = {});
      "_" == e.charAt(0) || e in t || li(t, e, { value: ui.f(e) });
    },
    hi = {};
  hi.f = Object.getOwnPropertySymbols;
  var fi = {};
  fi.f = {}.propertyIsEnumerable;
  var gi = Ne,
    mi = hi,
    pi = fi,
    vi = Z,
    yi =
      Array.isArray ||
      function (e) {
        return "Array" == vi(e);
      },
    bi = {},
    Ei = {},
    Si = _e,
    Ai = Ce.concat("length", "prototype");
  Ei.f =
    Object.getOwnPropertyNames ||
    function (e) {
      return Si(e, Ai);
    };
  var _i = $,
    Ci = Ei.f,
    Ti = {}.toString,
    wi =
      "object" == typeof window && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window)
        : [];
  bi.f = function (e) {
    return wi && "[object Window]" == Ti.call(e)
      ? (function (e) {
          try {
            return Ci(e);
          } catch (e) {
            return wi.slice();
          }
        })(e)
      : Ci(_i(e));
  };
  var Ni = {},
    Ii = fi,
    ki = M,
    Li = $,
    xi = N,
    Mi = P,
    Vi = T,
    Oi = Object.getOwnPropertyDescriptor;
  Ni.f = E
    ? Oi
    : function (e, t) {
        if (((e = Li(e)), (t = xi(t, !0)), Vi))
          try {
            return Oi(e, t);
          } catch (e) {}
        if (Mi(e, t)) return ki(!Ii.f.call(e, t), e[t]);
      };
  var Ri = c.exports,
    Di = P,
    Pi = E,
    Fi = W,
    Bi = H,
    ji = Kr.exports.KEY,
    Ui = b,
    Gi = ce.exports,
    zi = qe,
    Wi = me,
    Hi = Ue.exports,
    Yi = si,
    Qi = di,
    Zi = yi,
    qi = y,
    Xi = p,
    Ki = tt,
    Ji = $,
    $i = N,
    ea = M,
    ta = je,
    na = bi,
    ra = Ni,
    ia = hi,
    aa = m,
    oa = Ne,
    sa = ra.f,
    ca = aa.f,
    ua = na.f,
    la = Ri.Symbol,
    da = Ri.JSON,
    ha = da && da.stringify,
    fa = Hi("_hidden"),
    ga = Hi("toPrimitive"),
    ma = {}.propertyIsEnumerable,
    pa = Gi("symbol-registry"),
    va = Gi("symbols"),
    ya = Gi("op-symbols"),
    ba = Object.prototype,
    Ea = "function" == typeof la && !!ia.f,
    Sa = Ri.QObject,
    Aa = !Sa || !Sa.prototype || !Sa.prototype.findChild,
    _a =
      Pi &&
      Ui(function () {
        return (
          7 !=
          ta(
            ca({}, "a", {
              get: function () {
                return ca(this, "a", { value: 7 }).a;
              },
            })
          ).a
        );
      })
        ? function (e, t, n) {
            var r = sa(ba, t);
            r && delete ba[t], ca(e, t, n), r && e !== ba && ca(ba, t, r);
          }
        : ca,
    Ca = function (e) {
      var t = (va[e] = ta(la.prototype));
      return (t._k = e), t;
    },
    Ta =
      Ea && "symbol" == typeof la.iterator
        ? function (e) {
            return "symbol" == typeof e;
          }
        : function (e) {
            return e instanceof la;
          },
    wa = function (e, t, n) {
      return (
        e === ba && wa(ya, t, n),
        qi(e),
        (t = $i(t, !0)),
        qi(n),
        Di(va, t)
          ? (n.enumerable
              ? (Di(e, fa) && e[fa][t] && (e[fa][t] = !1),
                (n = ta(n, { enumerable: ea(0, !1) })))
              : (Di(e, fa) || ca(e, fa, ea(1, {})), (e[fa][t] = !0)),
            _a(e, t, n))
          : ca(e, t, n)
      );
    },
    Na = function (e, t) {
      qi(e);
      for (
        var n,
          r = (function (e) {
            var t = gi(e),
              n = mi.f;
            if (n)
              for (var r, i = n(e), a = pi.f, o = 0; i.length > o; )
                a.call(e, (r = i[o++])) && t.push(r);
            return t;
          })((t = Ji(t))),
          i = 0,
          a = r.length;
        a > i;

      )
        wa(e, (n = r[i++]), t[n]);
      return e;
    },
    Ia = function (e, t) {
      if (((e = Ji(e)), (t = $i(t, !0)), e !== ba || !Di(va, t) || Di(ya, t))) {
        var n = sa(e, t);
        return (
          !n || !Di(va, t) || (Di(e, fa) && e[fa][t]) || (n.enumerable = !0), n
        );
      }
    },
    ka = function (e) {
      for (var t, n = ua(Ji(e)), r = [], i = 0; n.length > i; )
        Di(va, (t = n[i++])) || t == fa || t == ji || r.push(t);
      return r;
    },
    La = function (e) {
      for (
        var t, n = e === ba, r = ua(n ? ya : Ji(e)), i = [], a = 0;
        r.length > a;

      )
        !Di(va, (t = r[a++])) || (n && !Di(ba, t)) || i.push(va[t]);
      return i;
    };
  Ea ||
    ((la = function () {
      if (this instanceof la) throw TypeError("Symbol is not a constructor!");
      var e = Wi(arguments.length > 0 ? arguments[0] : void 0),
        t = function (n) {
          this === ba && t.call(ya, n),
            Di(this, fa) && Di(this[fa], e) && (this[fa][e] = !1),
            _a(this, e, ea(1, n));
        };
      return Pi && Aa && _a(ba, e, { configurable: !0, set: t }), Ca(e);
    }),
    Bi(la.prototype, "toString", function () {
      return this._k;
    }),
    (ra.f = Ia),
    (aa.f = wa),
    (Ei.f = na.f = ka),
    (fi.f = function (e) {
      var t = ma.call(this, (e = $i(e, !0)));
      return (
        !(this === ba && Di(va, e) && !Di(ya, e)) &&
        (!(t || !Di(this, e) || !Di(va, e) || (Di(this, fa) && this[fa][e])) ||
          t)
      );
    }),
    (ia.f = La),
    (Yi.f = function (e) {
      return Ca(Hi(e));
    })),
    Fi(Fi.G + Fi.W + Fi.F * !Ea, { Symbol: la });
  for (
    var xa =
        "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
          ","
        ),
      Ma = 0;
    xa.length > Ma;

  )
    Hi(xa[Ma++]);
  for (var Va = oa(Hi.store), Oa = 0; Va.length > Oa; ) Qi(Va[Oa++]);
  Fi(Fi.S + Fi.F * !Ea, "Symbol", {
    for: function (e) {
      return Di(pa, (e += "")) ? pa[e] : (pa[e] = la(e));
    },
    keyFor: function (e) {
      if (!Ta(e)) throw TypeError(e + " is not a symbol!");
      for (var t in pa) if (pa[t] === e) return t;
    },
    useSetter: function () {
      Aa = !0;
    },
    useSimple: function () {
      Aa = !1;
    },
  }),
    Fi(Fi.S + Fi.F * !Ea, "Object", {
      create: function (e, t) {
        return void 0 === t ? ta(e) : Na(ta(e), t);
      },
      defineProperty: wa,
      defineProperties: Na,
      getOwnPropertyDescriptor: Ia,
      getOwnPropertyNames: ka,
      getOwnPropertySymbols: La,
    });
  var Ra = Ui(function () {
    ia.f(1);
  });
  Fi(Fi.S + Fi.F * Ra, "Object", {
    getOwnPropertySymbols: function (e) {
      return ia.f(Ki(e));
    },
  }),
    da &&
      Fi(
        Fi.S +
          Fi.F *
            (!Ea ||
              Ui(function () {
                var e = la();
                return (
                  "[null]" != ha([e]) ||
                  "{}" != ha({ a: e }) ||
                  "{}" != ha(Object(e))
                );
              })),
        "JSON",
        {
          stringify: function (e) {
            for (var t, n, r = [e], i = 1; arguments.length > i; )
              r.push(arguments[i++]);
            if (((n = t = r[1]), (Xi(t) || void 0 !== e) && !Ta(e)))
              return (
                Zi(t) ||
                  (t = function (e, t) {
                    if (
                      ("function" == typeof n && (t = n.call(this, e, t)),
                      !Ta(t))
                    )
                      return t;
                  }),
                (r[1] = t),
                ha.apply(da, r)
              );
          },
        }
      ),
    la.prototype[ga] || R(la.prototype, ga, la.prototype.valueOf),
    zi(la, "Symbol"),
    zi(Math, "Math", !0),
    zi(Ri.JSON, "JSON", !0),
    di("asyncIterator"),
    di("observable");
  var Da = l.exports.Symbol,
    Pa = si.f("iterator");
  !(function (e) {
    var t = Da,
      n = Pa;
    function r(i) {
      return (
        (e.exports = r =
          "function" == typeof t && "symbol" == typeof n
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof t &&
                  e.constructor === t &&
                  e !== t.prototype
                  ? "symbol"
                  : typeof e;
              }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        r(i)
      );
    }
    (e.exports = r),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  })(Xr);
  var Fa = W;
  Fa(Fa.S + Fa.F * !E, "Object", { defineProperty: m.f });
  var Ba = l.exports.Object,
    ja = function (e, t, n) {
      return Ba.defineProperty(e, t, n);
    };
  W(W.S, "Object", { create: je });
  var Ua,
    Ga,
    za,
    Wa,
    Ha = l.exports.Object,
    Ya = function (e, t) {
      return Ha.create(e, t);
    },
    Qa = W,
    Za = l.exports,
    qa = b,
    Xa = tt,
    Ka = ot;
  (Ua = "getPrototypeOf"),
    (Ga = function () {
      return function (e) {
        return Ka(Xa(e));
      };
    }),
    (za = (Za.Object || {})[Ua] || Object[Ua]),
    ((Wa = {})[Ua] = Ga()),
    Qa(
      Qa.S +
        Qa.F *
          qa(function () {
            za(1);
          }),
      "Object",
      Wa
    );
  var Ja = l.exports.Object.getPrototypeOf,
    $a = p,
    eo = y,
    to = function (e, t) {
      if ((eo(e), !$a(t) && null !== t))
        throw TypeError(t + ": can't set as prototype!");
    },
    no = {
      set:
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function (e, t, n) {
              try {
                (n = g(
                  Function.call,
                  Ni.f(Object.prototype, "__proto__").set,
                  2
                ))(e, []),
                  (t = !(e instanceof Array));
              } catch (e) {
                t = !0;
              }
              return function (e, r) {
                return to(e, r), t ? (e.__proto__ = r) : n(e, r), e;
              };
            })({}, !1)
          : void 0),
      check: to,
    };
  W(W.S, "Object", { setPrototypeOf: no.set });
  var ro = l.exports.Object.setPrototypeOf;
  !(function (e) {
    var t = Xr.exports.default,
      n = Da,
      r = ja,
      i = Ya,
      a = Ja,
      o = ro,
      s = Yr;
    function c() {
      (e.exports = c =
        function () {
          return u;
        }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
      var u = {},
        l = Object.prototype,
        d = l.hasOwnProperty,
        h = "function" == typeof n ? n : {},
        f = h.iterator || "@@iterator",
        g = h.asyncIterator || "@@asyncIterator",
        m = h.toStringTag || "@@toStringTag";
      function p(e, t, n) {
        return (
          r(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }),
          e[t]
        );
      }
      try {
        p({}, "");
      } catch (e) {
        p = function (e, t, n) {
          return (e[t] = n);
        };
      }
      function v(e, t, n, r) {
        var a = t && t.prototype instanceof E ? t : E,
          o = i(a.prototype),
          s = new x(r || []);
        return (
          (o._invoke = (function (e, t, n) {
            var r = "suspendedStart";
            return function (i, a) {
              if ("executing" === r)
                throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === i) throw a;
                return { value: void 0, done: !0 };
              }
              for (n.method = i, n.arg = a; ; ) {
                var o = n.delegate;
                if (o) {
                  var s = I(o, n);
                  if (s) {
                    if (s === b) continue;
                    return s;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var c = y(e, t, n);
                if ("normal" === c.type) {
                  if (
                    ((r = n.done ? "completed" : "suspendedYield"), c.arg === b)
                  )
                    continue;
                  return { value: c.arg, done: n.done };
                }
                "throw" === c.type &&
                  ((r = "completed"), (n.method = "throw"), (n.arg = c.arg));
              }
            };
          })(e, n, s)),
          o
        );
      }
      function y(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      u.wrap = v;
      var b = {};
      function E() {}
      function S() {}
      function A() {}
      var _ = {};
      p(_, f, function () {
        return this;
      });
      var C = a && a(a(M([])));
      C && C !== l && d.call(C, f) && (_ = C);
      var T = (A.prototype = E.prototype = i(_));
      function w(e) {
        ["next", "throw", "return"].forEach(function (t) {
          p(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function N(e, n) {
        function r(i, a, o, s) {
          var c = y(e[i], e, a);
          if ("throw" !== c.type) {
            var u = c.arg,
              l = u.value;
            return l && "object" == t(l) && d.call(l, "__await")
              ? n.resolve(l.__await).then(
                  function (e) {
                    r("next", e, o, s);
                  },
                  function (e) {
                    r("throw", e, o, s);
                  }
                )
              : n.resolve(l).then(
                  function (e) {
                    (u.value = e), o(u);
                  },
                  function (e) {
                    return r("throw", e, o, s);
                  }
                );
          }
          s(c.arg);
        }
        var i;
        this._invoke = function (e, t) {
          function a() {
            return new n(function (n, i) {
              r(e, t, n, i);
            });
          }
          return (i = i ? i.then(a, a) : a());
        };
      }
      function I(e, t) {
        var n = e.iterator[t.method];
        if (void 0 === n) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = void 0),
              I(e, t),
              "throw" === t.method)
            )
              return b;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return b;
        }
        var r = y(n, e.iterator, t.arg);
        if ("throw" === r.type)
          return (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), b;
        var i = r.arg;
        return i
          ? i.done
            ? ((t[e.resultName] = i.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              b)
            : i
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            b);
      }
      function k(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function L(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function x(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(k, this),
          this.reset(!0);
      }
      function M(e) {
        if (e) {
          var t = e[f];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var n = -1,
              r = function t() {
                for (; ++n < e.length; )
                  if (d.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (r.next = r);
          }
        }
        return { next: V };
      }
      function V() {
        return { value: void 0, done: !0 };
      }
      return (
        (S.prototype = A),
        p(T, "constructor", A),
        p(A, "constructor", S),
        (S.displayName = p(A, m, "GeneratorFunction")),
        (u.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === S || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (u.mark = function (e) {
          return (
            o ? o(e, A) : ((e.__proto__ = A), p(e, m, "GeneratorFunction")),
            (e.prototype = i(T)),
            e
          );
        }),
        (u.awrap = function (e) {
          return { __await: e };
        }),
        w(N.prototype),
        p(N.prototype, g, function () {
          return this;
        }),
        (u.AsyncIterator = N),
        (u.async = function (e, t, n, r, i) {
          void 0 === i && (i = s);
          var a = new N(v(e, t, n, r), i);
          return u.isGeneratorFunction(t)
            ? a
            : a.next().then(function (e) {
                return e.done ? e.value : a.next();
              });
        }),
        w(T),
        p(T, m, "Generator"),
        p(T, f, function () {
          return this;
        }),
        p(T, "toString", function () {
          return "[object Generator]";
        }),
        (u.keys = function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return (
            t.reverse(),
            function n() {
              for (; t.length; ) {
                var r = t.pop();
                if (r in e) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (u.values = M),
        (x.prototype = {
          constructor: x,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(L),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  d.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function n(n, r) {
              return (
                (a.type = "throw"),
                (a.arg = e),
                (t.next = n),
                r && ((t.method = "next"), (t.arg = void 0)),
                !!r
              );
            }
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var i = this.tryEntries[r],
                a = i.completion;
              if ("root" === i.tryLoc) return n("end");
              if (i.tryLoc <= this.prev) {
                var o = d.call(i, "catchLoc"),
                  s = d.call(i, "finallyLoc");
                if (o && s) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                } else if (o) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                } else {
                  if (!s)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var r = this.tryEntries[n];
              if (
                r.tryLoc <= this.prev &&
                d.call(r, "finallyLoc") &&
                this.prev < r.finallyLoc
              ) {
                var i = r;
                break;
              }
            }
            i &&
              ("break" === e || "continue" === e) &&
              i.tryLoc <= t &&
              t <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = e),
              (a.arg = t),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), b)
                : this.complete(a)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              b
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), L(n), b;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var i = r.arg;
                  L(n);
                }
                return i;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, n) {
            return (
              (this.delegate = { iterator: M(e), resultName: t, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              b
            );
          },
        }),
        u
      );
    }
    (e.exports = c),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  })(qr);
  var io = qr.exports(),
    ao = io;
  try {
    regeneratorRuntime = io;
  } catch (e) {
    "object" == typeof globalThis
      ? (globalThis.regeneratorRuntime = io)
      : Function("r", "regeneratorRuntime = r")(io);
  }
  !(function () {
    if ("undefined" != typeof window) {
      var e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
        t = e ? parseInt(e[1], 10) : null,
        n = !!t && 16 <= t && t <= 18;
      if ("objectFit" in document.documentElement.style == 0 || n) {
        var r = function (e, t, n) {
            var r, i, a, o, s;
            if (((n = n.split(" ")).length < 2 && (n[1] = n[0]), "x" === e))
              (r = n[0]),
                (i = n[1]),
                (a = "left"),
                (o = "right"),
                (s = t.clientWidth);
            else {
              if ("y" !== e) return;
              (r = n[1]),
                (i = n[0]),
                (a = "top"),
                (o = "bottom"),
                (s = t.clientHeight);
            }
            if (r !== a && i !== a) {
              if (r !== o && i !== o)
                return "center" === r || "50%" === r
                  ? ((t.style[a] = "50%"),
                    void (t.style["margin-" + a] = s / -2 + "px"))
                  : void (0 <= r.indexOf("%")
                      ? (r = parseInt(r, 10)) < 50
                        ? ((t.style[a] = r + "%"),
                          (t.style["margin-" + a] = s * (r / -100) + "px"))
                        : ((r = 100 - r),
                          (t.style[o] = r + "%"),
                          (t.style["margin-" + o] = s * (r / -100) + "px"))
                      : (t.style[a] = r));
              t.style[o] = "0";
            } else t.style[a] = "0";
          },
          i = function (e) {
            var t = e.dataset
                ? e.dataset.objectFit
                : e.getAttribute("data-object-fit"),
              n = e.dataset
                ? e.dataset.objectPosition
                : e.getAttribute("data-object-position");
            (t = t || "cover"), (n = n || "50% 50%");
            var i = e.parentNode;
            return (
              (function (e) {
                var t = window.getComputedStyle(e, null),
                  n = t.getPropertyValue("position"),
                  r = t.getPropertyValue("overflow"),
                  i = t.getPropertyValue("display");
                (n && "static" !== n) || (e.style.position = "relative"),
                  "hidden" !== r && (e.style.overflow = "hidden"),
                  (i && "inline" !== i) || (e.style.display = "block"),
                  0 === e.clientHeight && (e.style.height = "100%"),
                  -1 === e.className.indexOf("object-fit-polyfill") &&
                    (e.className = e.className + " object-fit-polyfill");
              })(i),
              (function (e) {
                var t = window.getComputedStyle(e, null),
                  n = {
                    "max-width": "none",
                    "max-height": "none",
                    "min-width": "0px",
                    "min-height": "0px",
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto",
                    "margin-top": "0px",
                    "margin-right": "0px",
                    "margin-bottom": "0px",
                    "margin-left": "0px",
                  };
                for (var r in n)
                  t.getPropertyValue(r) !== n[r] && (e.style[r] = n[r]);
              })(e),
              (e.style.position = "absolute"),
              (e.style.width = "auto"),
              (e.style.height = "auto"),
              "scale-down" === t &&
                (t =
                  e.clientWidth < i.clientWidth &&
                  e.clientHeight < i.clientHeight
                    ? "none"
                    : "contain"),
              "none" === t
                ? (r("x", e, n), void r("y", e, n))
                : "fill" === t
                ? ((e.style.width = "100%"),
                  (e.style.height = "100%"),
                  r("x", e, n),
                  void r("y", e, n))
                : ((e.style.height = "100%"),
                  void (("cover" === t && e.clientWidth > i.clientWidth) ||
                  ("contain" === t && e.clientWidth < i.clientWidth)
                    ? ((e.style.top = "0"),
                      (e.style.marginTop = "0"),
                      r("x", e, n))
                    : ((e.style.width = "100%"),
                      (e.style.height = "auto"),
                      (e.style.left = "0"),
                      (e.style.marginLeft = "0"),
                      r("y", e, n))))
            );
          },
          a = function (e) {
            if (void 0 === e || e instanceof Event)
              e = document.querySelectorAll("[data-object-fit]");
            else if (e && e.nodeName) e = [e];
            else if ("object" != typeof e || !e.length || !e[0].nodeName)
              return !1;
            for (var t = 0; t < e.length; t++)
              if (e[t].nodeName) {
                var r = e[t].nodeName.toLowerCase();
                if ("img" === r) {
                  if (n) continue;
                  e[t].complete
                    ? i(e[t])
                    : e[t].addEventListener("load", function () {
                        i(this);
                      });
                } else
                  "video" === r
                    ? 0 < e[t].readyState
                      ? i(e[t])
                      : e[t].addEventListener("loadedmetadata", function () {
                          i(this);
                        })
                    : i(e[t]);
              }
            return !0;
          };
        "loading" === document.readyState
          ? document.addEventListener("DOMContentLoaded", a)
          : a(),
          window.addEventListener("resize", a),
          (window.objectFitPolyfill = a);
      } else
        window.objectFitPolyfill = function () {
          return !1;
        };
    }
  })();
  var oo = h,
    so = p,
    co = fn,
    uo = [].slice,
    lo = {},
    ho = function (e, t, n) {
      if (!(t in lo)) {
        for (var r = [], i = 0; i < t; i++) r[i] = "a[" + i + "]";
        lo[t] = Function("F,a", "return new F(" + r.join(",") + ")");
      }
      return lo[t](e, n);
    },
    fo =
      Function.bind ||
      function (e) {
        var t = oo(this),
          n = uo.call(arguments, 1),
          r = function () {
            var i = n.concat(uo.call(arguments));
            return this instanceof r ? ho(t, i.length, i) : co(t, i, e);
          };
        return so(t.prototype) && (r.prototype = t.prototype), r;
      },
    go = W,
    mo = je,
    po = h,
    vo = y,
    yo = p,
    bo = b,
    Eo = fo,
    So = (c.exports.Reflect || {}).construct,
    Ao = bo(function () {
      function e() {}
      return !(So(function () {}, [], e) instanceof e);
    }),
    _o = !bo(function () {
      So(function () {});
    });
  go(go.S + go.F * (Ao || _o), "Reflect", {
    construct: function (e, t) {
      po(e), vo(t);
      var n = arguments.length < 3 ? e : po(arguments[2]);
      if (_o && !Ao) return So(e, t, n);
      if (e == n) {
        switch (t.length) {
          case 0:
            return new e();
          case 1:
            return new e(t[0]);
          case 2:
            return new e(t[0], t[1]);
          case 3:
            return new e(t[0], t[1], t[2]);
          case 4:
            return new e(t[0], t[1], t[2], t[3]);
        }
        var r = [null];
        return r.push.apply(r, t), new (Eo.apply(e, r))();
      }
      var i = n.prototype,
        a = mo(yo(i) ? i : Object.prototype),
        o = Function.apply.call(e, a, t);
      return yo(o) ? o : a;
    },
  });
  var Co = l.exports.Reflect.construct;
  function To(e, t, n) {
    return (
      t in e
        ? ja(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  function wo(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        ja(e, r.key, r);
    }
  }
  function No(e, t, n) {
    return (
      t && wo(e.prototype, t),
      n && wo(e, n),
      ja(e, "prototype", { writable: !1 }),
      e
    );
  }
  function Io(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function ko(e, t) {
    return (
      (ko = ro
        ? ro.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      ko(e, t)
    );
  }
  function Lo(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Ya(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      ja(e, "prototype", { writable: !1 }),
      t && ko(e, t);
  }
  function xo(e) {
    return (
      (xo =
        "function" == typeof Da && "symbol" == typeof Pa
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Da &&
                e.constructor === Da &&
                e !== Da.prototype
                ? "symbol"
                : typeof e;
            }),
      xo(e)
    );
  }
  function Mo(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function Vo(e, t) {
    if (t && ("object" === xo(t) || "function" == typeof t)) return t;
    if (void 0 !== t)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return Mo(e);
  }
  function Oo(e) {
    return (
      (Oo = ro
        ? Ja.bind()
        : function (e) {
            return e.__proto__ || Ja(e);
          }),
      Oo(e)
    );
  }
  var Ro = m,
    Do = M,
    Po = function (e, t, n) {
      t in e ? Ro.f(e, t, Do(0, n)) : (e[t] = n);
    },
    Fo = g,
    Bo = W,
    jo = tt,
    Uo = Ut,
    Go = Ht,
    zo = ne,
    Wo = Po,
    Ho = qt;
  Bo(
    Bo.S +
      Bo.F *
        !or(function (e) {
          Array.from(e);
        }),
    "Array",
    {
      from: function (e) {
        var t,
          n,
          r,
          i,
          a = jo(e),
          o = "function" == typeof this ? this : Array,
          s = arguments.length,
          c = s > 1 ? arguments[1] : void 0,
          u = void 0 !== c,
          l = 0,
          d = Ho(a);
        if (
          (u && (c = Fo(c, s > 2 ? arguments[2] : void 0, 2)),
          null == d || (o == Array && Go(d)))
        )
          for (n = new o((t = zo(a.length))); t > l; l++)
            Wo(n, l, u ? c(a[l], l) : a[l]);
        else
          for (i = d.call(a), n = new o(); !(r = i.next()).done; l++)
            Wo(n, l, u ? Uo(i, c, [r.value, l], !0) : r.value);
        return (n.length = l), n;
      },
    }
  );
  var Yo = l.exports.Array.from,
    Qo = p,
    Zo = function (e, t) {
      if (!Qo(e) || e._t !== t)
        throw TypeError("Incompatible receiver, " + t + " required!");
      return e;
    },
    qo = m.f,
    Xo = je,
    Ko = Yn,
    Jo = g,
    $o = Ft,
    es = Bt.exports,
    ts = bt,
    ns = St,
    rs = Jn,
    is = E,
    as = Kr.exports.fastKey,
    os = Zo,
    ss = is ? "_s" : "size",
    cs = function (e, t) {
      var n,
        r = as(t);
      if ("F" !== r) return e._i[r];
      for (n = e._f; n; n = n.n) if (n.k == t) return n;
    },
    us = {
      getConstructor: function (e, t, n, r) {
        var i = e(function (e, a) {
          $o(e, i, t, "_i"),
            (e._t = t),
            (e._i = Xo(null)),
            (e._f = void 0),
            (e._l = void 0),
            (e[ss] = 0),
            null != a && es(a, n, e[r], e);
        });
        return (
          Ko(i.prototype, {
            clear: function () {
              for (var e = os(this, t), n = e._i, r = e._f; r; r = r.n)
                (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i];
              (e._f = e._l = void 0), (e[ss] = 0);
            },
            delete: function (e) {
              var n = os(this, t),
                r = cs(n, e);
              if (r) {
                var i = r.n,
                  a = r.p;
                delete n._i[r.i],
                  (r.r = !0),
                  a && (a.n = i),
                  i && (i.p = a),
                  n._f == r && (n._f = i),
                  n._l == r && (n._l = a),
                  n[ss]--;
              }
              return !!r;
            },
            forEach: function (e) {
              os(this, t);
              for (
                var n,
                  r = Jo(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                (n = n ? n.n : this._f);

              )
                for (r(n.v, n.k, this); n && n.r; ) n = n.p;
            },
            has: function (e) {
              return !!cs(os(this, t), e);
            },
          }),
          is &&
            qo(i.prototype, "size", {
              get: function () {
                return os(this, t)[ss];
              },
            }),
          i
        );
      },
      def: function (e, t, n) {
        var r,
          i,
          a = cs(e, t);
        return (
          a
            ? (a.v = n)
            : ((e._l = a =
                {
                  i: (i = as(t, !0)),
                  k: t,
                  v: n,
                  p: (r = e._l),
                  n: void 0,
                  r: !1,
                }),
              e._f || (e._f = a),
              r && (r.n = a),
              e[ss]++,
              "F" !== i && (e._i[i] = a)),
          e
        );
      },
      getEntry: cs,
      setStrong: function (e, t, n) {
        ts(
          e,
          t,
          function (e, n) {
            (this._t = os(e, t)), (this._k = n), (this._l = void 0);
          },
          function () {
            for (var e = this, t = e._k, n = e._l; n && n.r; ) n = n.p;
            return e._t && (e._l = n = n ? n.n : e._t._f)
              ? ns(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v])
              : ((e._t = void 0), ns(1));
          },
          n ? "entries" : "values",
          !n,
          !0
        ),
          rs(t);
      },
    },
    ls = (Ue.exports("species"), g),
    ds = X,
    hs = tt,
    fs = ne,
    gs = c.exports,
    ms = W,
    ps = Kr.exports,
    vs = b,
    ys = R,
    bs = Yn,
    Es = Bt.exports,
    Ss = Ft,
    As = p,
    _s = qe,
    Cs = m.f,
    Ts = E,
    ws = function (e, t, n, r, i, a) {
      var o = gs[e],
        s = o,
        c = i ? "set" : "add",
        u = s && s.prototype,
        l = {};
      return (
        Ts &&
        "function" == typeof s &&
        (a ||
          (u.forEach &&
            !vs(function () {
              new s().entries().next();
            })))
          ? ((s = t(function (t, n) {
              Ss(t, s, e, "_c"),
                (t._c = new o()),
                null != n && Es(n, i, t[c], t);
            })),
            (function (e, t, n) {
              for (
                var r = hs(e),
                  i = ds(r),
                  a = ls(t, n, 3),
                  o = fs(i.length),
                  s = 0;
                o > s;
                s++
              )
                s in i && a(i[s], s, r);
            })(
              "add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(
                ","
              ),
              function (e) {
                var t = "add" == e || "set" == e;
                !(e in u) ||
                  (a && "clear" == e) ||
                  ys(s.prototype, e, function (n, r) {
                    if ((Ss(this, s, e), !t && a && !As(n)))
                      return "get" == e && void 0;
                    var i = this._c[e](0 === n ? 0 : n, r);
                    return t ? this : i;
                  });
              }
            ),
            a ||
              Cs(s.prototype, "size", {
                get: function () {
                  return this._c.size;
                },
              }))
          : ((s = r.getConstructor(t, e, i, c)),
            bs(s.prototype, n),
            (ps.NEED = !0)),
        _s(s, e),
        (l[e] = s),
        ms(ms.G + ms.W + ms.F, l),
        a || r.setStrong(s, e, i),
        s
      );
    },
    Ns = us,
    Is = Zo;
  ws(
    "Set",
    function (e) {
      return function () {
        return e(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    },
    {
      add: function (e) {
        return Ns.def(Is(this, "Set"), (e = 0 === e ? 0 : e), e);
      },
    },
    Ns
  );
  var ks = Bt.exports,
    Ls = Pt,
    xs = function (e) {
      return function () {
        if (Ls(this) != e) throw TypeError(e + "#toJSON isn't generic");
        return ks(this, !1, (t = []).push, t, void 0), t;
        var t;
      };
    },
    Ms = W;
  Ms(Ms.P + Ms.R, "Set", { toJSON: xs("Set") });
  var Vs = W,
    Os = function (e) {
      Vs(Vs.S, e, {
        of: function () {
          for (var e = arguments.length, t = new Array(e); e--; )
            t[e] = arguments[e];
          return new this(t);
        },
      });
    };
  Os("Set");
  var Rs = W,
    Ds = h,
    Ps = g,
    Fs = Bt.exports,
    Bs = function (e) {
      Rs(Rs.S, e, {
        from: function (e) {
          var t,
            n,
            r,
            i,
            a = arguments[1];
          return (
            Ds(this),
            (t = void 0 !== a) && Ds(a),
            null == e
              ? new this()
              : ((n = []),
                t
                  ? ((r = 0),
                    (i = Ps(a, arguments[2], 2)),
                    Fs(e, !1, function (e) {
                      n.push(i(e, r++));
                    }))
                  : Fs(e, !1, n.push, n),
                new this(n))
          );
        },
      });
    };
  Bs("Set");
  var js = l.exports.Set,
    Us = { exports: {} };
  !(function (e) {
    var t = Object.prototype.hasOwnProperty,
      n = "~";
    function r() {}
    function i(e, t, n) {
      (this.fn = e), (this.context = t), (this.once = n || !1);
    }
    function a(e, t, r, a, o) {
      if ("function" != typeof r)
        throw new TypeError("The listener must be a function");
      var s = new i(r, a || e, o),
        c = n ? n + t : t;
      return (
        e._events[c]
          ? e._events[c].fn
            ? (e._events[c] = [e._events[c], s])
            : e._events[c].push(s)
          : ((e._events[c] = s), e._eventsCount++),
        e
      );
    }
    function o(e, t) {
      0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
    }
    function s() {
      (this._events = new r()), (this._eventsCount = 0);
    }
    Object.create &&
      ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
      (s.prototype.eventNames = function () {
        var e,
          r,
          i = [];
        if (0 === this._eventsCount) return i;
        for (r in (e = this._events))
          t.call(e, r) && i.push(n ? r.slice(1) : r);
        return Object.getOwnPropertySymbols
          ? i.concat(Object.getOwnPropertySymbols(e))
          : i;
      }),
      (s.prototype.listeners = function (e) {
        var t = n ? n + e : e,
          r = this._events[t];
        if (!r) return [];
        if (r.fn) return [r.fn];
        for (var i = 0, a = r.length, o = new Array(a); i < a; i++)
          o[i] = r[i].fn;
        return o;
      }),
      (s.prototype.listenerCount = function (e) {
        var t = n ? n + e : e,
          r = this._events[t];
        return r ? (r.fn ? 1 : r.length) : 0;
      }),
      (s.prototype.emit = function (e, t, r, i, a, o) {
        var s = n ? n + e : e;
        if (!this._events[s]) return !1;
        var c,
          u,
          l = this._events[s],
          d = arguments.length;
        if (l.fn) {
          switch ((l.once && this.removeListener(e, l.fn, void 0, !0), d)) {
            case 1:
              return l.fn.call(l.context), !0;
            case 2:
              return l.fn.call(l.context, t), !0;
            case 3:
              return l.fn.call(l.context, t, r), !0;
            case 4:
              return l.fn.call(l.context, t, r, i), !0;
            case 5:
              return l.fn.call(l.context, t, r, i, a), !0;
            case 6:
              return l.fn.call(l.context, t, r, i, a, o), !0;
          }
          for (u = 1, c = new Array(d - 1); u < d; u++) c[u - 1] = arguments[u];
          l.fn.apply(l.context, c);
        } else {
          var h,
            f = l.length;
          for (u = 0; u < f; u++)
            switch (
              (l[u].once && this.removeListener(e, l[u].fn, void 0, !0), d)
            ) {
              case 1:
                l[u].fn.call(l[u].context);
                break;
              case 2:
                l[u].fn.call(l[u].context, t);
                break;
              case 3:
                l[u].fn.call(l[u].context, t, r);
                break;
              case 4:
                l[u].fn.call(l[u].context, t, r, i);
                break;
              default:
                if (!c)
                  for (h = 1, c = new Array(d - 1); h < d; h++)
                    c[h - 1] = arguments[h];
                l[u].fn.apply(l[u].context, c);
            }
        }
        return !0;
      }),
      (s.prototype.on = function (e, t, n) {
        return a(this, e, t, n, !1);
      }),
      (s.prototype.once = function (e, t, n) {
        return a(this, e, t, n, !0);
      }),
      (s.prototype.removeListener = function (e, t, r, i) {
        var a = n ? n + e : e;
        if (!this._events[a]) return this;
        if (!t) return o(this, a), this;
        var s = this._events[a];
        if (s.fn)
          s.fn !== t || (i && !s.once) || (r && s.context !== r) || o(this, a);
        else {
          for (var c = 0, u = [], l = s.length; c < l; c++)
            (s[c].fn !== t || (i && !s[c].once) || (r && s[c].context !== r)) &&
              u.push(s[c]);
          u.length ? (this._events[a] = 1 === u.length ? u[0] : u) : o(this, a);
        }
        return this;
      }),
      (s.prototype.removeAllListeners = function (e) {
        var t;
        return (
          e
            ? ((t = n ? n + e : e), this._events[t] && o(this, t))
            : ((this._events = new r()), (this._eventsCount = 0)),
          this
        );
      }),
      (s.prototype.off = s.prototype.removeListener),
      (s.prototype.addListener = s.prototype.on),
      (s.prefixed = n),
      (s.EventEmitter = s),
      (e.exports = s);
  })(Us);
  var Gs = us,
    zs = Zo,
    Ws = "Map";
  ws(
    Ws,
    function (e) {
      return function () {
        return e(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    },
    {
      get: function (e) {
        var t = Gs.getEntry(zs(this, Ws), e);
        return t && t.v;
      },
      set: function (e, t) {
        return Gs.def(zs(this, Ws), 0 === e ? 0 : e, t);
      },
    },
    Gs,
    !0
  );
  var Hs = W;
  Hs(Hs.P + Hs.R, "Map", { toJSON: xs("Map") }), Os("Map"), Bs("Map");
  var Ys,
    Qs,
    Zs,
    qs = l.exports.Map;
  function Xs(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) e[r] = n[r];
    }
    return e;
  }
  (e.Barcode = void 0),
    ((Ys = e.Barcode || (e.Barcode = {})).createFromWASMResult = function (e) {
      var t;
      try {
        t = decodeURIComponent(
          escape(String.fromCharCode.apply(null, e.rawData))
        );
      } catch (e) {
        t = "";
      }
      return {
        symbology: e.symbology,
        data: t,
        rawData: new Uint8Array(e.rawData),
        location: {
          topLeft: { x: e.location[0][0], y: e.location[0][1] },
          topRight: { x: e.location[1][0], y: e.location[1][1] },
          bottomRight: { x: e.location[2][0], y: e.location[2][1] },
          bottomLeft: { x: e.location[3][0], y: e.location[3][1] },
        },
        compositeFlag: e.compositeFlag,
        isGs1DataCarrier: e.isGs1DataCarrier,
        encodingArray: e.encodingArray,
      };
    }),
    ((Qs = Ys.Symbology || (Ys.Symbology = {})).AZTEC = "aztec"),
    (Qs.CODABAR = "codabar"),
    (Qs.CODE11 = "code11"),
    (Qs.CODE128 = "code128"),
    (Qs.CODE25 = "code25"),
    (Qs.CODE32 = "code32"),
    (Qs.CODE39 = "code39"),
    (Qs.CODE93 = "code93"),
    (Qs.DATA_MATRIX = "data-matrix"),
    (Qs.DOTCODE = "dotcode"),
    (Qs.EAN13 = "ean13"),
    (Qs.EAN8 = "ean8"),
    (Qs.FIVE_DIGIT_ADD_ON = "five-digit-add-on"),
    (Qs.GS1_DATABAR = "databar"),
    (Qs.GS1_DATABAR_EXPANDED = "databar-expanded"),
    (Qs.GS1_DATABAR_LIMITED = "databar-limited"),
    (Qs.IATA_2_OF_5 = "iata2of5"),
    (Qs.INTERLEAVED_2_OF_5 = "itf"),
    (Qs.KIX = "kix"),
    (Qs.LAPA4SC = "lapa4sc"),
    (Qs.MATRIX_2_OF_5 = "matrix2of5"),
    (Qs.MAXICODE = "maxicode"),
    (Qs.MICRO_PDF417 = "micropdf417"),
    (Qs.MICRO_QR = "microqr"),
    (Qs.MSI_PLESSEY = "msi-plessey"),
    (Qs.PDF417 = "pdf417"),
    (Qs.QR = "qr"),
    (Qs.RM4SCC = "rm4scc"),
    (Qs.TWO_DIGIT_ADD_ON = "two-digit-add-on"),
    (Qs.UPCA = "upca"),
    (Qs.UPCE = "upce"),
    (Qs.USPS_INTELLIGENT_MAIL = "usps-intelligent-mail"),
    ((Zs = Ys.CompositeFlag || (Ys.CompositeFlag = {}))[(Zs.NONE = 0)] =
      "NONE"),
    (Zs[(Zs.UNKNOWN = 1)] = "UNKNOWN"),
    (Zs[(Zs.LINKED = 2)] = "LINKED"),
    (Zs[(Zs.GS1_A = 4)] = "GS1_A"),
    (Zs[(Zs.GS1_B = 8)] = "GS1_B"),
    (Zs[(Zs.GS1_C = 16)] = "GS1_C"),
    (function (e) {
      var t = new qs([
          [e.AZTEC, "Aztec"],
          [e.CODABAR, "Codabar"],
          [e.CODE11, "Code 11"],
          [e.CODE128, "Code 128"],
          [e.CODE25, "Code 25"],
          [e.CODE32, "Code 32"],
          [e.CODE39, "Code 39"],
          [e.CODE93, "Code 93"],
          [e.DATA_MATRIX, "Data Matrix"],
          [e.DOTCODE, "DotCode"],
          [e.EAN13, "EAN-13"],
          [e.EAN8, "EAN-8"],
          [e.FIVE_DIGIT_ADD_ON, "Five-Digit Add-On"],
          [e.GS1_DATABAR_EXPANDED, "GS1 DataBar Expanded"],
          [e.GS1_DATABAR_LIMITED, "GS1 DataBar Limited"],
          [e.GS1_DATABAR, "GS1 DataBar 14"],
          [e.IATA_2_OF_5, "IATA 2 of 5"],
          [e.INTERLEAVED_2_OF_5, "Interleaved 2 of 5"],
          [e.KIX, "KIX"],
          [e.LAPA4SC, "LAPA4SC"],
          [e.MATRIX_2_OF_5, "Matrix 2 of 5"],
          [e.MAXICODE, "MaxiCode"],
          [e.MICRO_PDF417, "MicroPDF417"],
          [e.MICRO_QR, "Micro QR"],
          [e.MSI_PLESSEY, "MSI-Plessey"],
          [e.PDF417, "PDF417"],
          [e.QR, "QR"],
          [e.RM4SCC, "RM4SCC"],
          [e.TWO_DIGIT_ADD_ON, "Two-Digit Add-On"],
          [e.UPCA, "UPC-A"],
          [e.UPCE, "UPC-E"],
          [e.USPS_INTELLIGENT_MAIL, "USPS Intelligent Mail"],
        ]),
        n = new qs([
          [e.AZTEC, "aztec"],
          [e.CODABAR, "codabar"],
          [e.CODE11, "code11"],
          [e.CODE128, "code128"],
          [e.CODE25, "code25"],
          [e.CODE32, "code32"],
          [e.CODE39, "code39"],
          [e.CODE93, "code93"],
          [e.DATA_MATRIX, "data-matrix"],
          [e.DOTCODE, "dotcode"],
          [e.EAN13, "ean13"],
          [e.EAN8, "ean8"],
          [e.FIVE_DIGIT_ADD_ON, "five-digit-add-on"],
          [e.GS1_DATABAR_EXPANDED, "databar-expanded"],
          [e.GS1_DATABAR_LIMITED, "databar-limited"],
          [e.GS1_DATABAR, "databar"],
          [e.IATA_2_OF_5, "iata2of5"],
          [e.INTERLEAVED_2_OF_5, "itf"],
          [e.KIX, "kix"],
          [e.LAPA4SC, "lapa4sc"],
          [e.MATRIX_2_OF_5, "matrix2of5"],
          [e.MAXICODE, "maxicode"],
          [e.MICRO_PDF417, "micropdf417"],
          [e.MICRO_QR, "microqr"],
          [e.MSI_PLESSEY, "msi-plessey"],
          [e.PDF417, "pdf417"],
          [e.QR, "qr"],
          [e.RM4SCC, "rm4scc"],
          [e.TWO_DIGIT_ADD_ON, "two-digit-add-on"],
          [e.UPCA, "upca"],
          [e.UPCE, "upce"],
          [e.USPS_INTELLIGENT_MAIL, "usps-intelligent-mail"],
        ]);
      (e.toHumanizedName = function (e) {
        var n;
        return null !== (n = t.get(e.toLowerCase())) && void 0 !== n
          ? n
          : "Unknown";
      }),
        (e.toJSONName = function (e) {
          var t;
          return null !== (t = n.get(e.toLowerCase())) && void 0 !== t
            ? t
            : "unknown";
        });
    })(Ys.Symbology || (Ys.Symbology = {}));
  var Ks = (function e(t, n) {
      function r(e, r, i) {
        if ("undefined" != typeof document) {
          "number" == typeof (i = Xs({}, n, i)).expires &&
            (i.expires = new Date(Date.now() + 864e5 * i.expires)),
            i.expires && (i.expires = i.expires.toUTCString()),
            (e = encodeURIComponent(e)
              .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
              .replace(/[()]/g, escape));
          var a = "";
          for (var o in i)
            i[o] &&
              ((a += "; " + o), !0 !== i[o] && (a += "=" + i[o].split(";")[0]));
          return (document.cookie = e + "=" + t.write(r, e) + a);
        }
      }
      return Object.create(
        {
          set: r,
          get: function (e) {
            if ("undefined" != typeof document && (!arguments.length || e)) {
              for (
                var n = document.cookie ? document.cookie.split("; ") : [],
                  r = {},
                  i = 0;
                i < n.length;
                i++
              ) {
                var a = n[i].split("="),
                  o = a.slice(1).join("=");
                try {
                  var s = decodeURIComponent(a[0]);
                  if (((r[s] = t.read(o, s)), e === s)) break;
                } catch (e) {}
              }
              return e ? r[e] : r;
            }
          },
          remove: function (e, t) {
            r(e, "", Xs({}, t, { expires: -1 }));
          },
          withAttributes: function (t) {
            return e(this.converter, Xs({}, this.attributes, t));
          },
          withConverter: function (t) {
            return e(Xs({}, this.converter, t), this.attributes);
          },
        },
        {
          attributes: { value: Object.freeze(n) },
          converter: { value: Object.freeze(t) },
        }
      );
    })(
      {
        read: function (e) {
          return (
            '"' === e[0] && (e = e.slice(1, -1)),
            e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
          );
        },
        write: function (e) {
          return encodeURIComponent(e).replace(
            /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
            decodeURIComponent
          );
        },
      },
      { path: "/" }
    ),
    Js = { exports: {} };
  !(function (e, n) {
    !(function (t, r) {
      var i = "function",
        a = "undefined",
        o = "object",
        s = "string",
        c = "model",
        u = "name",
        l = "type",
        d = "vendor",
        h = "version",
        f = "architecture",
        g = "console",
        m = "mobile",
        p = "tablet",
        v = "smarttv",
        y = "wearable",
        b = "embedded",
        E = "Amazon",
        S = "Apple",
        A = "ASUS",
        _ = "BlackBerry",
        C = "Google",
        T = "Huawei",
        w = "LG",
        N = "Microsoft",
        I = "Motorola",
        k = "Samsung",
        L = "Sony",
        x = "Xiaomi",
        M = "Zebra",
        V = "Facebook",
        O = function (e) {
          for (var t = {}, n = 0; n < e.length; n++)
            t[e[n].toUpperCase()] = e[n];
          return t;
        },
        R = function (e, t) {
          return typeof e === s && -1 !== D(t).indexOf(D(e));
        },
        D = function (e) {
          return e.toLowerCase();
        },
        P = function (e, t) {
          if (typeof e === s)
            return (
              (e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")),
              typeof t === a ? e : e.substring(0, 255)
            );
        },
        F = function (e, t) {
          for (var n, a, s, c, u, l, d = 0; d < t.length && !u; ) {
            var h = t[d],
              f = t[d + 1];
            for (n = a = 0; n < h.length && !u; )
              if ((u = h[n++].exec(e)))
                for (s = 0; s < f.length; s++)
                  (l = u[++a]),
                    typeof (c = f[s]) === o && c.length > 0
                      ? 2 === c.length
                        ? typeof c[1] == i
                          ? (this[c[0]] = c[1].call(this, l))
                          : (this[c[0]] = c[1])
                        : 3 === c.length
                        ? typeof c[1] !== i || (c[1].exec && c[1].test)
                          ? (this[c[0]] = l ? l.replace(c[1], c[2]) : r)
                          : (this[c[0]] = l ? c[1].call(this, l, c[2]) : r)
                        : 4 === c.length &&
                          (this[c[0]] = l
                            ? c[3].call(this, l.replace(c[1], c[2]))
                            : r)
                      : (this[c] = l || r);
            d += 2;
          }
        },
        B = function (e, t) {
          for (var n in t)
            if (typeof t[n] === o && t[n].length > 0) {
              for (var i = 0; i < t[n].length; i++)
                if (R(t[n][i], e)) return "?" === n ? r : n;
            } else if (R(t[n], e)) return "?" === n ? r : n;
          return e;
        },
        j = {
          ME: "4.90",
          "NT 3.11": "NT3.51",
          "NT 4.0": "NT4.0",
          2e3: "NT 5.0",
          XP: ["NT 5.1", "NT 5.2"],
          Vista: "NT 6.0",
          7: "NT 6.1",
          8: "NT 6.2",
          8.1: "NT 6.3",
          10: ["NT 6.4", "NT 10.0"],
          RT: "ARM",
        },
        U = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [h, [u, "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [h, [u, "Edge"]],
            [
              /(opera mini)\/([-\w\.]+)/i,
              /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
              /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
            ],
            [u, h],
            [/opios[\/ ]+([\w\.]+)/i],
            [h, [u, "Opera Mini"]],
            [/\bopr\/([\w\.]+)/i],
            [h, [u, "Opera"]],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
              /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
              /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
              /(?:ms|\()(ie) ([\w\.]+)/i,
              /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
              /(weibo)__([\d\.]+)/i,
            ],
            [u, h],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [h, [u, "UCBrowser"]],
            [/\bqbcore\/([\w\.]+)/i],
            [h, [u, "WeChat(Win) Desktop"]],
            [/micromessenger\/([\w\.]+)/i],
            [h, [u, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [h, [u, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [h, [u, "IE"]],
            [/yabrowser\/([\w\.]+)/i],
            [h, [u, "Yandex"]],
            [/(avast|avg)\/([\w\.]+)/i],
            [[u, /(.+)/, "$1 Secure Browser"], h],
            [/\bfocus\/([\w\.]+)/i],
            [h, [u, "Firefox Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [h, [u, "Opera Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [h, [u, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [h, [u, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [h, [u, "Opera Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [h, [u, "MIUI Browser"]],
            [/fxios\/([-\w\.]+)/i],
            [h, [u, "Firefox"]],
            [/\bqihu|(qi?ho?o?|360)browser/i],
            [[u, "360 Browser"]],
            [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
            [[u, /(.+)/, "$1 Browser"], h],
            [/(comodo_dragon)\/([\w\.]+)/i],
            [[u, /_/g, " "], h],
            [
              /(electron)\/([\w\.]+) safari/i,
              /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
              /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
            ],
            [u, h],
            [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
            [u],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [[u, V], h],
            [
              /safari (line)\/([\w\.]+)/i,
              /\b(line)\/([\w\.]+)\/iab/i,
              /(chromium|instagram)[\/ ]([-\w\.]+)/i,
            ],
            [u, h],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [h, [u, "GSA"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [h, [u, "Chrome Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [[u, "Chrome WebView"], h],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [h, [u, "Android Browser"]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [u, h],
            [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
            [h, [u, "Mobile Safari"]],
            [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
            [h, u],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [
              u,
              [
                h,
                B,
                {
                  "1.0": "/8",
                  1.2: "/1",
                  1.3: "/3",
                  "2.0": "/412",
                  "2.0.2": "/416",
                  "2.0.3": "/417",
                  "2.0.4": "/419",
                  "?": "/",
                },
              ],
            ],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [u, h],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[u, "Netscape"], h],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [h, [u, "Firefox Reality"]],
            [
              /ekiohf.+(flow)\/([\w\.]+)/i,
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
              /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
              /(firefox)\/([\w\.]+)/i,
              /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
              /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
              /(links) \(([\w\.]+)/i,
            ],
            [u, h],
          ],
          cpu: [
            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
            [[f, "amd64"]],
            [/(ia32(?=;))/i],
            [[f, D]],
            [/((?:i[346]|x)86)[;\)]/i],
            [[f, "ia32"]],
            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
            [[f, "arm64"]],
            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
            [[f, "armhf"]],
            [/windows (ce|mobile); ppc;/i],
            [[f, "arm"]],
            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
            [[f, /ower/, "", D]],
            [/(sun4\w)[;\)]/i],
            [[f, "sparc"]],
            [
              /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
            ],
            [[f, D]],
          ],
          device: [
            [
              /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
            ],
            [c, [d, k], [l, p]],
            [
              /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
              /samsung[- ]([-\w]+)/i,
              /sec-(sgh\w+)/i,
            ],
            [c, [d, k], [l, m]],
            [/\((ip(?:hone|od)[\w ]*);/i],
            [c, [d, S], [l, m]],
            [
              /\((ipad);[-\w\),; ]+apple/i,
              /applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
            ],
            [c, [d, S], [l, p]],
            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
            [c, [d, T], [l, p]],
            [
              /(?:huawei|honor)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i,
            ],
            [c, [d, T], [l, m]],
            [
              /\b(poco[\w ]+)(?: bui|\))/i,
              /\b; (\w+) build\/hm\1/i,
              /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
              /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
              /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
            ],
            [
              [c, /_/g, " "],
              [d, x],
              [l, m],
            ],
            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
            [
              [c, /_/g, " "],
              [d, x],
              [l, p],
            ],
            [
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
            ],
            [c, [d, "OPPO"], [l, m]],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [c, [d, "Vivo"], [l, m]],
            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
            [c, [d, "Realme"], [l, m]],
            [
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
            ],
            [c, [d, I], [l, m]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [c, [d, I], [l, p]],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [c, [d, w], [l, p]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
              /\blg-?([\d\w]+) bui/i,
            ],
            [c, [d, w], [l, m]],
            [
              /(ideatab[-\w ]+)/i,
              /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
            ],
            [c, [d, "Lenovo"], [l, p]],
            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
            [
              [c, /_/g, " "],
              [d, "Nokia"],
              [l, m],
            ],
            [/(pixel c)\b/i],
            [c, [d, C], [l, p]],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [c, [d, C], [l, m]],
            [
              /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
            ],
            [c, [d, L], [l, m]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [c, "Xperia Tablet"],
              [d, L],
              [l, p],
            ],
            [
              / (kb2005|in20[12]5|be20[12][59])\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
            ],
            [c, [d, "OnePlus"], [l, m]],
            [
              /(alexa)webm/i,
              /(kf[a-z]{2}wi)( bui|\))/i,
              /(kf[a-z]+)( bui|\)).+silk\//i,
            ],
            [c, [d, E], [l, p]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [c, /(.+)/g, "Fire Phone $1"],
              [d, E],
              [l, m],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [c, d, [l, p]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [c, [d, _], [l, m]],
            [
              /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
            ],
            [c, [d, A], [l, p]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [c, [d, A], [l, m]],
            [/(nexus 9)/i],
            [c, [d, "HTC"], [l, p]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i,
            ],
            [d, [c, /_/g, " "], [l, m]],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [c, [d, "Acer"], [l, p]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [c, [d, "Meizu"], [l, m]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [c, [d, "Sharp"], [l, m]],
            [
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
              /(hp) ([\w ]+\w)/i,
              /(asus)-?(\w+)/i,
              /(microsoft); (lumia[\w ]+)/i,
              /(lenovo)[-_ ]?([-\w]+)/i,
              /(jolla)/i,
              /(oppo) ?([\w ]+) bui/i,
            ],
            [d, c, [l, m]],
            [
              /(archos) (gamepad2?)/i,
              /(hp).+(touchpad(?!.+tablet)|tablet)/i,
              /(kindle)\/([\w\.]+)/i,
              /(nook)[\w ]+build\/(\w+)/i,
              /(dell) (strea[kpr\d ]*[\dko])/i,
              /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
              /(trinity)[- ]*(t\d{3}) bui/i,
              /(gigaset)[- ]+(q\w{1,9}) bui/i,
              /(vodafone) ([\w ]+)(?:\)| bui)/i,
            ],
            [d, c, [l, p]],
            [/(surface duo)/i],
            [c, [d, N], [l, p]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [c, [d, "Fairphone"], [l, m]],
            [/(u304aa)/i],
            [c, [d, "AT&T"], [l, m]],
            [/\bsie-(\w*)/i],
            [c, [d, "Siemens"], [l, m]],
            [/\b(rct\w+) b/i],
            [c, [d, "RCA"], [l, p]],
            [/\b(venue[\d ]{2,7}) b/i],
            [c, [d, "Dell"], [l, p]],
            [/\b(q(?:mv|ta)\w+) b/i],
            [c, [d, "Verizon"], [l, p]],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [c, [d, "Barnes & Noble"], [l, p]],
            [/\b(tm\d{3}\w+) b/i],
            [c, [d, "NuVision"], [l, p]],
            [/\b(k88) b/i],
            [c, [d, "ZTE"], [l, p]],
            [/\b(nx\d{3}j) b/i],
            [c, [d, "ZTE"], [l, m]],
            [/\b(gen\d{3}) b.+49h/i],
            [c, [d, "Swiss"], [l, m]],
            [/\b(zur\d{3}) b/i],
            [c, [d, "Swiss"], [l, p]],
            [/\b((zeki)?tb.*\b) b/i],
            [c, [d, "Zeki"], [l, p]],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [[d, "Dragon Touch"], c, [l, p]],
            [/\b(ns-?\w{0,9}) b/i],
            [c, [d, "Insignia"], [l, p]],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [c, [d, "NextBook"], [l, p]],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [[d, "Voice"], c, [l, m]],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [[d, "LvTel"], c, [l, m]],
            [/\b(ph-1) /i],
            [c, [d, "Essential"], [l, m]],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [c, [d, "Envizen"], [l, p]],
            [/\b(trio[-\w\. ]+) b/i],
            [c, [d, "MachSpeed"], [l, p]],
            [/\btu_(1491) b/i],
            [c, [d, "Rotor"], [l, p]],
            [/(shield[\w ]+) b/i],
            [c, [d, "Nvidia"], [l, p]],
            [/(sprint) (\w+)/i],
            [d, c, [l, m]],
            [/(kin\.[onetw]{3})/i],
            [
              [c, /\./g, " "],
              [d, N],
              [l, m],
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [c, [d, M], [l, p]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [c, [d, M], [l, m]],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [d, c, [l, g]],
            [/droid.+; (shield) bui/i],
            [c, [d, "Nvidia"], [l, g]],
            [/(playstation [345portablevi]+)/i],
            [c, [d, L], [l, g]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [c, [d, N], [l, g]],
            [/smart-tv.+(samsung)/i],
            [d, [l, v]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [c, /^/, "SmartTV"],
              [d, k],
              [l, v],
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [d, w],
              [l, v],
            ],
            [/(apple) ?tv/i],
            [d, [c, "Apple TV"], [l, v]],
            [/crkey/i],
            [
              [c, "Chromecast"],
              [d, C],
              [l, v],
            ],
            [/droid.+aft(\w)( bui|\))/i],
            [c, [d, E], [l, v]],
            [/\(dtv[\);].+(aquos)/i],
            [c, [d, "Sharp"], [l, v]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
            ],
            [
              [d, P],
              [c, P],
              [l, v],
            ],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [[l, v]],
            [/((pebble))app/i],
            [d, c, [l, y]],
            [/droid.+; (glass) \d/i],
            [c, [d, C], [l, y]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [c, [d, M], [l, y]],
            [/(quest( 2)?)/i],
            [c, [d, V], [l, y]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [d, [l, b]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
            [c, [l, m]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [c, [l, p]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[l, p]],
            [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
            [[l, m]],
            [/(android[-\w\. ]{0,9});.+buil/i],
            [c, [d, "Generic"]],
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [h, [u, "EdgeHTML"]],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [h, [u, "Blink"]],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
              /ekioh(flow)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
              /(icab)[\/ ]([23]\.[\d\.]+)/i,
            ],
            [u, h],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [h, u],
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [u, h],
            [
              /(windows) nt 6\.2; (arm)/i,
              /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
              /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
            ],
            [u, [h, B, j]],
            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
            [
              [u, "Windows"],
              [h, B, j],
            ],
            [
              /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
              /cfnetwork\/.+darwin/i,
            ],
            [
              [h, /_/g, "."],
              [u, "iOS"],
            ],
            [
              /(mac os x) ?([\w\. ]*)/i,
              /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
            ],
            [
              [u, "Mac OS"],
              [h, /_/g, "."],
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
            [h, u],
            [
              /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
              /(blackberry)\w*\/([\w\.]*)/i,
              /(tizen|kaios)[\/ ]([\w\.]+)/i,
              /\((series40);/i,
            ],
            [u, h],
            [/\(bb(10);/i],
            [h, [u, _]],
            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
            [h, [u, "Symbian"]],
            [
              /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
            ],
            [h, [u, "Firefox OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [h, [u, "webOS"]],
            [/crkey\/([\d\.]+)/i],
            [h, [u, "Chromecast"]],
            [/(cros) [\w]+ ([\w\.]+\w)/i],
            [[u, "Chromium OS"], h],
            [
              /(nintendo|playstation) ([wids345portablevuch]+)/i,
              /(xbox); +xbox ([^\);]+)/i,
              /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
              /(mint)[\/\(\) ]?(\w*)/i,
              /(mageia|vectorlinux)[; ]/i,
              /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
              /(hurd|linux) ?([\w\.]*)/i,
              /(gnu) ?([\w\.]*)/i,
              /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
              /(haiku) (\w+)/i,
            ],
            [u, h],
            [/(sunos) ?([\w\.\d]*)/i],
            [[u, "Solaris"], h],
            [
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
              /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
              /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
              /(unix) ?([\w\.]*)/i,
            ],
            [u, h],
          ],
        },
        G = function (e, n) {
          if ((typeof e === o && ((n = e), (e = r)), !(this instanceof G)))
            return new G(e, n).getResult();
          var i =
              e ||
              (typeof t !== a && t.navigator && t.navigator.userAgent
                ? t.navigator.userAgent
                : ""),
            c = n
              ? (function (e, t) {
                  var n = {};
                  for (var r in e)
                    t[r] && t[r].length % 2 == 0
                      ? (n[r] = t[r].concat(e[r]))
                      : (n[r] = e[r]);
                  return n;
                })(U, n)
              : U;
          return (
            (this.getBrowser = function () {
              var e,
                t = {};
              return (
                (t.name = r),
                (t.version = r),
                F.call(t, i, c.browser),
                (t.major =
                  typeof (e = t.version) === s
                    ? e.replace(/[^\d\.]/g, "").split(".")[0]
                    : r),
                t
              );
            }),
            (this.getCPU = function () {
              var e = {};
              return (e.architecture = r), F.call(e, i, c.cpu), e;
            }),
            (this.getDevice = function () {
              var e = {};
              return (
                (e.vendor = r),
                (e.model = r),
                (e.type = r),
                F.call(e, i, c.device),
                e
              );
            }),
            (this.getEngine = function () {
              var e = {};
              return (e.name = r), (e.version = r), F.call(e, i, c.engine), e;
            }),
            (this.getOS = function () {
              var e = {};
              return (e.name = r), (e.version = r), F.call(e, i, c.os), e;
            }),
            (this.getResult = function () {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU(),
              };
            }),
            (this.getUA = function () {
              return i;
            }),
            (this.setUA = function (e) {
              return (
                (i = typeof e === s && e.length > 255 ? P(e, 255) : e), this
              );
            }),
            this.setUA(i),
            this
          );
        };
      (G.VERSION = "1.0.2"),
        (G.BROWSER = O([u, h, "major"])),
        (G.CPU = O([f])),
        (G.DEVICE = O([c, d, l, g, m, v, p, y, b])),
        (G.ENGINE = G.OS = O([u, h])),
        e.exports && (n = e.exports = G),
        (n.UAParser = G);
      var z = typeof t !== a && (t.jQuery || t.Zepto);
      if (z && !z.ua) {
        var W = new G();
        (z.ua = W.getResult()),
          (z.ua.get = function () {
            return W.getUA();
          }),
          (z.ua.set = function (e) {
            W.setUA(e);
            var t = W.getResult();
            for (var n in t) z.ua[n] = t[n];
          });
      }
    })("object" == typeof window ? window : t);
  })(Js, Js.exports);
  var $s,
    ec,
    tc,
    nc = Js.exports;
  function rc() {
    const e = "/scandit_sync_folder_preload",
      t = "/scandit_sync_folder",
      n = [],
      r = [],
      i = "function" == typeof self.OffscreenCanvas;
    let a,
      o,
      s,
      c,
      u,
      l,
      d,
      h,
      f,
      g,
      m,
      p,
      v,
      y,
      b = !1,
      E = !1,
      S = !1,
      A = !1,
      _ = !1,
      C = !1,
      T = !1,
      w = !1,
      N = !1,
      I = Promise.resolve(),
      k = !1,
      L = !1;
    function x(e, t, n) {
      function r() {
        postMessage([
          "context-created",
          { hiddenScanditLogoAllowed: 1 === Module._can_hide_logo() },
        ]);
      }
      if (N) return r();
      if (
        (null != e && (d = e),
        null != t && (h = t),
        null != n && (f = n),
        !C || null == d || null == h || (!E && !d) || null == f)
      )
        return;
      const i = lengthBytesUTF8(f) + 1,
        a = Module._malloc(i);
      stringToUTF8(f, a, i);
      const o = lengthBytesUTF8(u) + 1,
        s = Module._malloc(o);
      stringToUTF8(u, s, o);
      const c = lengthBytesUTF8(l) + 1,
        g = Module._malloc(c);
      stringToUTF8(l, g, c),
        Module._create_context(a, s, d, h, g, !1),
        Module._free(a),
        Module._free(s),
        Module._free(g),
        (N = !0),
        G(),
        z(),
        r();
    }
    function M(e) {
      if (260 === e.errorCode) {
        var t;
        let n;
        (n =
          0 ===
          (null === (t = location.href) || void 0 === t
            ? void 0
            : t.indexOf("blob:null/"))
            ? "localhost"
            : new URL(
                null == location.pathname ||
                "" === location.pathname ||
                location.pathname.startsWith("/")
                  ? location.origin
                  : location.pathname
              ).hostname),
          n[0].startsWith("[") && n.endsWith("]") && (n = n.slice(1, -1)),
          (e.errorMessage = e.errorMessage.replace(
            "domain name",
            "domain name (".concat(n, ")")
          ));
      }
      [
        6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 260,
      ].includes(e.errorCode) &&
        null != f &&
        f.length > 0 &&
        (e.errorMessage += " License Key: ".concat(f.slice(0, 15), "..."));
    }
    function V(e) {
      e.highQualitySingleFrameMode && j(!0);
      const t =
        (n = e.data).byteLength !== s
          ? JSON.stringify({ barcodeResult: [], textResult: [] })
          : (Module.HEAPU8.set(n, o), UTF8ToString(Module._scanner_scan(o)));
      var n;
      e.highQualitySingleFrameMode && j(!1);
      const r = JSON.parse(t);
      null != r.error
        ? (M(r.error),
          postMessage(
            ["work-error", { requestId: e.requestId, error: r.error }, e.data],
            [e.data.buffer]
          ))
        : null != r.barcodeResult &&
          null != r.textResult &&
          postMessage(
            [
              "work-result",
              {
                requestId: e.requestId,
                result: { barcodes: r.barcodeResult, texts: r.textResult },
              },
              e.data,
            ],
            [e.data.buffer]
          );
    }
    function O() {
      if (C && 0 !== n.length && (N || x(), T || j(), w || U(), N && T && w))
        for (; 0 !== n.length; ) {
          var e;
          if (
            n[0].highQualitySingleFrameMode &&
            !0 ===
              (null === (e = p) || void 0 === e
                ? void 0
                : e.includes("code")) &&
            !b
          )
            break;
          V(n.shift());
        }
    }
    function R(e) {
      const t = (function (e, t, n) {
          const r =
              "string" == typeof t ? lengthBytesUTF8(t) + 1 : t.byteLength,
            i = Module._malloc(r);
          "string" == typeof t
            ? stringToUTF8(t, i, r)
            : Module.HEAPU8.set(t, i);
          const a = lengthBytesUTF8(n) + 1,
            o = Module._malloc(a);
          stringToUTF8(n, o, a);
          const s = Module._parser_parse_string(e.valueOf(), i, r - 1, o);
          return Module._free(i), Module._free(o), UTF8ToString(s);
        })(e.dataFormat, e.data, e.options),
        n = JSON.parse(t);
      null != n.error
        ? (M(n.error),
          postMessage([
            "parse-error",
            { requestId: e.requestId, error: n.error },
          ]))
        : null != n.result &&
          postMessage([
            "parse-result",
            { requestId: e.requestId, result: n.result },
          ]);
    }
    function D() {
      if (C && 0 !== r.length && (N || (x(), N)))
        for (; 0 !== r.length; ) R(r.shift());
    }
    function P() {
      T && Module._scanner_session_clear();
    }
    function F(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      n.forEach(function (e, t) {
        if (e instanceof Error) {
          const r = { name: e.name, message: e.message, stack: e.stack };
          n[t] = r;
        }
      }),
        postMessage(["log", { level: e, data: n }]);
    }
    function B(e, t, n, r) {
      return new Promise(function (i, a) {
        e()
          .then(i)
          .catch(function (o) {
            const s = 2 * t;
            if (s > n) return a(o);
            r(o),
              setTimeout(function () {
                B(e, s, n, r).then(i).catch(a);
              }, t);
          });
      });
    }
    function j() {
      var e, t, n, r;
      let a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (!C || !N || !E || null == g) return;
      T = !1;
      const o = JSON.parse(g);
      (p = o.recognitionMode),
        (null !== (e = o.textRecognitionSettings) && void 0 !== e) ||
          (o.textRecognitionSettings = JSON.stringify({}));
      const s = lengthBytesUTF8(g) + 1,
        c = Module._malloc(s);
      stringToUTF8(g, c, s);
      const u = lengthBytesUTF8(o.textRecognitionSettings) + 1,
        l = Module._malloc(u);
      stringToUTF8(o.textRecognitionSettings, l, u);
      const d = Module._scanner_settings_new_from_json(
        c,
        l,
        !0 === (null === (t = p) || void 0 === t ? void 0 : t.includes("code")),
        !0 === (null === (n = p) || void 0 === n ? void 0 : n.includes("text")),
        !0 === o.blurryRecognition && b,
        null !== (r = o.matrixScanEnabled) && void 0 !== r && r,
        a,
        !0 === o.gpuAcceleration && i
      );
      Module._free(c);
      const h = UTF8ToString(d);
      "" !== h &&
        ((T = !0),
        F(
          "debug",
          "External Scandit Data Capture scan settings:",
          JSON.parse(h)
        ));
    }
    function U() {
      if (!C || !N || !E || null == m) return;
      let e;
      (w = !1),
        (e = 1 === m.format.valueOf() ? 3 : 2 === m.format.valueOf() ? 4 : 1),
        Module._scanner_image_settings_new(m.width, m.height, e),
        null != o && Module._free(o),
        (s = m.width * m.height * e),
        (o = Module._malloc(s)),
        (w = !0);
    }
    function G() {
      C &&
        N &&
        null != v &&
        Module._report_camera_properties("front" === v.cameraType, v.autofocus);
    }
    function z() {
      if (!C || !N || null == y) return;
      const e = lengthBytesUTF8(y) + 1,
        t = Module._malloc(e);
      stringToUTF8(y, t, e), Module._set_device_name(t), Module._free(t);
    }
    function W(e, t, n, r) {
      return B(
        function () {
          return new Promise(function (i, a) {
            fetch(e)
              .then(function (o) {
                o.ok
                  ? (o
                      .clone()
                      .arrayBuffer()
                      .then(function (a) {
                        r && i(o),
                          (function (r) {
                            var i, a;
                            "function" ==
                            typeof (null === (i = crypto) ||
                            void 0 === i ||
                            null === (a = i.subtle) ||
                            void 0 === a
                              ? void 0
                              : a.digest)
                              ? crypto.subtle
                                  .digest("SHA-256", r)
                                  .then(function (r) {
                                    const i =
                                      ((a = r),
                                      Array.from(new Uint8Array(a))
                                        .map(function (e) {
                                          const t = e.toString(16);
                                          return 1 === t.length
                                            ? "0".concat(t)
                                            : t;
                                        })
                                        .join(""));
                                    var a;
                                    let o =
                                      "4572045fed6c242bd9523d4c4890c8832b1d8ded591f5f84a452f66b86affb5d";
                                    t &&
                                      (o = n
                                        ? "f66f36ada4369d161a55dd0efcfb1dc290b907f2a3ea3588b86d489cf9e79873"
                                        : "900b975dc7c0e8973dac38464fd7f7bfac8e5543693bc0ed0dfd8e0e2bd09272"),
                                      i !== o &&
                                        F(
                                          "error",
                                          "The Scandit Data Capture library WASM file found at ".concat(
                                            e,
                                            " seems invalid: "
                                          ) +
                                            "expected file hash doesn't match (received: ".concat(
                                              i,
                                              ", "
                                            ) +
                                            "expected: ".concat(o, "). ") +
                                            "Please ensure the correct Scandit Data Capture file (with correct version) is retrieved."
                                        );
                                  })
                                  .catch(function () {})
                              : F(
                                  "warn",
                                  "Insecure context (see https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts): " +
                                    "The hash of the Scandit Data Capture library WASM file found at ".concat(
                                      e,
                                      " could not be verified"
                                    )
                                );
                          })(a);
                      })
                      .catch(function (e) {
                        r && a(e);
                      }),
                    r || i(o))
                  : a(new Error("HTTP status code is not ok"));
              })
              .catch(function (e) {
                a(e);
              });
          });
        },
        250,
        4e3,
        function (t) {
          F("warn", t),
            F(
              "warn",
              "Couldn't retrieve Scandit Data Capture library at ".concat(
                e,
                ", retrying..."
              )
            );
        }
      ).catch(function (t) {
        return (
          F("error", t),
          F(
            "error",
            "Couldn't retrieve/instantiate Scandit Data Capture library at ".concat(
              e,
              ", "
            ) + "did you configure the path for it correctly?"
          ),
          Promise.reject(t)
        );
      });
    }
    function H(e, t, n, r, i, a) {
      (null != a ? Promise.resolve(a) : W(t, n, r, !0))
        .then(function (e) {
          return e.arrayBuffer();
        })
        .then(function (n) {
          return self.WebAssembly.instantiate(n, e)
            .then(function (e) {
              i(e.instance);
            })
            .catch(function (e) {
              F("error", e),
                F(
                  "error",
                  "Couldn't instantiate Scandit Data Capture library at ".concat(
                    t,
                    ", "
                  ) + "did you configure the path for it correctly?"
                );
            });
        })
        .catch(function () {});
    }
    function Y(n, r) {
      return null == a
        ? Promise.resolve()
        : ((k = !0),
          new Promise(function (i, o) {
            (!c && n
              ? (function () {
                  const n = "FILE_DATA";
                  let r, i, a;
                  function o() {
                    var e, t, n, o;
                    null === (e = i) ||
                      void 0 === e ||
                      null === (t = e.result) ||
                      void 0 === t ||
                      t.close(),
                      null === (n = a) ||
                        void 0 === n ||
                        null === (o = n.result) ||
                        void 0 === o ||
                        o.close(),
                      r(0);
                  }
                  return new Promise(function (s) {
                    (r = s),
                      (i = indexedDB.open(e)),
                      (i.onupgradeneeded = function () {
                        try {
                          i.result.createObjectStore(n);
                        } catch (e) {}
                      }),
                      (i.onsuccess = function () {
                        if (!Array.from(i.result.objectStoreNames).includes(n))
                          return s(0);
                        (a = indexedDB.open(t)),
                          (a.onupgradeneeded = function () {
                            try {
                              a.result.createObjectStore(n);
                            } catch (e) {}
                          }),
                          (a.onsuccess = function () {
                            !(function () {
                              try {
                                const s = [],
                                  c = i.result.transaction(n, "readonly");
                                c.onerror = o;
                                const u = c.objectStore(n).openCursor();
                                (u.onsuccess = function () {
                                  const c = u.result;
                                  if (null == c)
                                    try {
                                      let e = 0;
                                      const t = a.result.transaction(
                                          n,
                                          "readwrite"
                                        ),
                                        c = t.objectStore(n);
                                      (t.onerror = o),
                                        (t.oncomplete = function () {
                                          return (
                                            i.result.close(),
                                            a.result.close(),
                                            r(e)
                                          );
                                        });
                                      for (const t of s) {
                                        const n = c.count(t.primaryKey);
                                        n.onsuccess = function () {
                                          0 === n.result &&
                                            (++e, c.add(t.value, t.primaryKey));
                                        };
                                      }
                                    } catch (e) {
                                      o.call({ error: e });
                                    }
                                  else
                                    s.push({
                                      value: c.value,
                                      primaryKey: c.primaryKey
                                        .toString()
                                        .replace(
                                          "".concat(e, "/"),
                                          "".concat(t, "/")
                                        ),
                                    }),
                                      c.continue();
                                }),
                                  (u.onerror = o);
                              } catch (e) {
                                o.call({ error: e });
                              }
                            })();
                          }),
                          (a.onblocked = a.onerror = o);
                      }),
                      (i.onblocked = i.onerror = o);
                  });
                })()
              : Promise.resolve(0)
            )
              .then(function (e) {
                if (!c && n && !r && 0 === e) return (k = !1), i();
                a(n, function (e) {
                  if (((k = !1), null != e)) return o(e);
                  i();
                });
              })
              .catch(o);
          }));
    }
    function Q(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return (
        (L && !n) ||
          (k
            ? ((L = !0),
              (I = I.then(function () {
                return (L = !1), Y(e, t);
              })))
            : (I = Y(e, t))),
        I
      );
    }
    return {
      loadLibrary: function (n, r, o, s, d, f, g, m, p) {
        function v() {
          postMessage(["library-loaded"]), x(d, f, m);
        }
        function y() {
          !C &&
            A &&
            _ &&
            ((S = !1), Module.callMain(), (C = !0), v(), d || (O(), D()));
        }
        if (S) return Promise.resolve();
        if (C) return v(), Promise.resolve();
        S = !0;
        const b = WebAssembly.validate(
            new Uint8Array([
              0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0,
              10, 10, 1, 8, 0, 65, 1, 253, 15, 253, 98, 11,
            ])
          ),
          E = (function (e, t, n) {
            let r = !1;
            /^https?:\/\/([^\/.]*\.)*cdn.jsdelivr.net\//.test(e)
              ? ((e = "https://cdn.jsdelivr.net/npm/scandit-sdk@5.12.1/build/"),
                (r = !0))
              : /^https?:\/\/([^\/.]*\.)*unpkg.com\//.test(e) &&
                ((e = "https://unpkg.com/scandit-sdk@5.12.1/build/"), (r = !0));
            let i = "";
            return (
              t && ((i += "-ocr"), n && (i += "-simd")),
              r
                ? {
                    jsURI: ""
                      .concat(e, "scandit-engine-sdk")
                      .concat(i, ".min.js"),
                    wasmURI: ""
                      .concat(e, "scandit-engine-sdk")
                      .concat(i, ".wasm"),
                  }
                : {
                    jsURI: ""
                      .concat(e, "scandit-engine-sdk")
                      .concat(i, ".min.js?v=5.12.1"),
                    wasmURI: ""
                      .concat(e, "scandit-engine-sdk")
                      .concat(i, ".wasm?v=5.12.1"),
                  }
            );
          })(r, g, b),
          T = E.jsURI,
          w = E.wasmURI;
        return (
          (c = s),
          (u = s ? e : t),
          (l = "".concat(r).concat("resources", "/")),
          (h = f),
          (self.window = self.document = self),
          (self.path = o),
          (self.deviceModelName = p),
          (Module = {
            arguments: [n],
            canvas: i ? new self.OffscreenCanvas(32, 32) : void 0,
            instantiateWasm: function (e, t) {
              var n;
              const r =
                null !== (n = self.wasmJSVersion) && void 0 !== n
                  ? n
                  : "undefined";
              return (
                "5.12.1" !== r &&
                  F(
                    "error",
                    "The Scandit Data Capture library JS file found at ".concat(
                      T,
                      " seems invalid: "
                    ) +
                      "expected version doesn't match (received: ".concat(
                        r,
                        ", expected: ",
                        "5.12.1",
                        "). "
                      ) +
                      "Please ensure the correct Scandit Data Capture file (with correct version) is retrieved."
                  ),
                "function" == typeof self.WebAssembly.instantiateStreaming
                  ? (function (e, t, n, r, i) {
                      W(t, n, r, !1)
                        .then(function (a) {
                          self.WebAssembly.instantiateStreaming(a, e)
                            .then(function (e) {
                              i(e.instance);
                            })
                            .catch(function (o) {
                              F("warn", o),
                                F(
                                  "warn",
                                  "WebAssembly streaming compile failed. Falling back to ArrayBuffer instantiation (this will make things slower)"
                                ),
                                H(e, t, n, r, i, a);
                            });
                        })
                        .catch(function () {});
                    })(e, w, g, b, t)
                  : H(e, w, g, b, t),
                {}
              );
            },
            noInitialRun: !0,
            preRun: [
              function () {
                return (function () {
                  (a = FS.syncfs),
                    (FS.syncfs = function (e, t) {
                      const n = t;
                      (t = function (e) {
                        n(e);
                      }),
                        Q(e).then(t).catch(t);
                    });
                  try {
                    FS.mkdir(u);
                  } catch (e) {
                    if ("EEXIST" !== e.code)
                      return (a = void 0), Promise.reject(e);
                  }
                  return FS.mount(IDBFS, {}, u), Q(!0, !0);
                })()
                  .catch(function (e) {
                    F(
                      "debug",
                      "No IndexedDB support, some data will not be persisted:",
                      e
                    );
                  })
                  .then(function () {
                    (A = !0), y();
                  });
              },
            ],
            onRuntimeInitialized: function () {
              (_ = !0), y();
            },
            print: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              F("info", ...t);
            },
            printErr: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              F("error", ...t);
            },
          }),
          B(
            function () {
              try {
                var e;
                return null !== (e = importScripts(T)) && void 0 !== e
                  ? e
                  : Promise.resolve();
              } catch (e) {
                return Promise.reject(e);
              }
            },
            250,
            4e3,
            function (e) {
              F("warn", e),
                F(
                  "warn",
                  "Couldn't retrieve Scandit Data Capture library at ".concat(
                    T,
                    ", retrying..."
                  )
                );
            }
          ).catch(function (e) {
            return (
              F("error", e),
              F(
                "error",
                "Couldn't retrieve Scandit Data Capture library at ".concat(
                  T,
                  ", did you configure the path for it correctly?"
                )
              ),
              Promise.resolve(e)
            );
          })
        );
      },
      setScanSettings: function (e, t, n) {
        function r() {
          (g = e), (b = t), j(), O();
        }
        (g = void 0), (T = !1), t && n ? Q(!0, !1, !0).then(r).catch(r) : r();
      },
      setImageSettings: function (e) {
        (m = e), U(), O();
      },
      workOnScanQueue: O,
      workOnParseQueue: D,
      addScanWorkUnit: function (e) {
        (E = !0), n.push(e), O();
      },
      addParseWorkUnit: function (e) {
        (E = !0), r.push(e), D();
      },
      clearSession: P,
      createBlurryTable: function (e) {
        function t() {
          postMessage(["create-blurry-table-result", e]);
        }
        if (!C || !N) return;
        const n = lengthBytesUTF8(e) + 1,
          r = Module._malloc(n);
        stringToUTF8(e, r, n),
          Module._create_blurry_table(r),
          Module._free(r),
          I.then(t).catch(t);
      },
      setCameraProperties: function (e, t) {
        (v = { cameraType: e, autofocus: t }), G();
      },
      setDeviceName: function (e) {
        y !== e && ((y = e), z());
      },
      reset: function () {
        P(),
          (n.length = 0),
          (r.length = 0),
          (g = void 0),
          (m = void 0),
          (E = !1),
          (T = !1),
          (w = !1);
      },
    };
  }
  (e.BrowserCompatibility = void 0),
    ((ec =
      ($s = e.BrowserCompatibility || (e.BrowserCompatibility = {})).Feature ||
      ($s.Feature = {})).BLOB = "blob"),
    (ec.MEDIA_DEVICES = "mediaDevices"),
    (ec.OFFSCREEN_CANVAS = "offscreenCanvas"),
    (ec.HTTP_PROTOCOL = "httpProtocol"),
    (ec.SECURE_CONTEXT = "secureContext"),
    (ec.URL_OBJECT = "urlObject"),
    (ec.WEB_WORKERS = "webWorkers"),
    (ec.WEB_ASSEMBLY = "webAssembly"),
    (ec.WEB_ASSEMBLY_ERROR_FREE = "webAssemblyErrorFree"),
    (ec.WEBGL = "webgl"),
    (e.BrowserHelper = void 0),
    ((tc = e.BrowserHelper || (e.BrowserHelper = {})).userAgentInfo = new nc(
      navigator.userAgent
    )),
    (tc.canvas = document.createElement("canvas")),
    (tc.isDesktopDevice = function () {
      if ("orientation" in window) return !1;
      var e,
        t,
        n = "(any-pointer: coarse)",
        r =
          null === (e = (t = window).matchMedia) || void 0 === e
            ? void 0
            : e.call(t, n);
      return (
        0 === navigator.maxTouchPoints ||
        ((null == r ? void 0 : r.media) === n &&
          !1 === (null == r ? void 0 : r.matches))
      );
    }),
    (tc.checkBrowserCompatibility = function () {
      function t(e, n, r) {
        var i = e[n[0]];
        return (
          null != i &&
          (1 === n.length
            ? typeof i === r
            : ("function" == typeof i || "object" == typeof i) &&
              t(i, n.slice(1), r))
        );
      }
      var n,
        r = !0,
        i = !0,
        a = [];
      location.protocol.startsWith("http") ||
        (a.push(e.BrowserCompatibility.Feature.HTTP_PROTOCOL), (r = i = !1)),
        t(window, ["isSecureContext"], "boolean") &&
          !1 === window.isSecureContext &&
          a.push(e.BrowserCompatibility.Feature.SECURE_CONTEXT),
        t(navigator, ["mediaDevices", "getUserMedia"], "function") ||
          t(navigator, ["enumerateDevices"], "function") ||
          t(window, ["MediaStreamTrack", "getSources"], "function") ||
          (a.push(e.BrowserCompatibility.Feature.MEDIA_DEVICES), (r = !1)),
        t(window, ["Worker"], "function") ||
          (a.push(e.BrowserCompatibility.Feature.WEB_WORKERS), (r = i = !1)),
        t(window, ["WebAssembly"], "object") ||
          (a.push(e.BrowserCompatibility.Feature.WEB_ASSEMBLY), (r = i = !1)),
        t(window, ["Blob"], "function") ||
          (a.push(e.BrowserCompatibility.Feature.BLOB), (r = i = !1)),
        t(window, ["URL", "createObjectURL"], "function") ||
          (a.push(e.BrowserCompatibility.Feature.URL_OBJECT), (r = i = !1)),
        t(window, ["OffscreenCanvas"], "function") ||
          a.push(e.BrowserCompatibility.Feature.OFFSCREEN_CANVAS);
      try {
        if (
          !t(window, ["WebGLRenderingContext"], "function") ||
          (null == tc.canvas.getContext("webgl") &&
            null == tc.canvas.getContext("experimental-webgl"))
        )
          throw new Error();
      } catch (t) {
        a.push(e.BrowserCompatibility.Feature.WEBGL);
      }
      return (
        "iOS" === (n = tc.userAgentInfo.getOS()).name &&
          null != n.version &&
          ["11.2.2", "11.2.5", "11.2.6"].includes(n.version) &&
          (a.push(e.BrowserCompatibility.Feature.WEB_ASSEMBLY_ERROR_FREE),
          (r = i = !1)),
        { fullSupport: r, scannerSupport: i, missingFeatures: a }
      );
    }),
    (tc.getDeviceId = function () {
      var e = "scandit-device-id",
        t = localStorage.getItem(e);
      if (null != t && "" !== t) return t;
      if (null != (t = Ks.get(e)) && "" !== t)
        return localStorage.setItem(e, t), t;
      var n = new Uint8Array(20);
      return (
        crypto.getRandomValues(n),
        (t = Yo(n)
          .map(function (e) {
            var t = e.toString(16);
            return 1 === t.length ? "0".concat(t) : t;
          })
          .join("")),
        localStorage.setItem(e, t),
        t
      );
    }),
    (tc.isValidHTMLElement = function (e) {
      return (
        e instanceof HTMLElement ||
        (null != e && "object" == typeof e && "string" == typeof e.tagName)
      );
    });
  const ic = new Blob(
    [
      "var Module;".concat(rc.toString(), "(").concat(
        function () {
          const e = rc();
          onmessage = function (t) {
            const n = t.data;
            switch (n.type) {
              case "load-library":
                e.loadLibrary(
                  n.deviceId,
                  n.libraryLocation,
                  n.path,
                  n.preload,
                  n.delayedRegistration,
                  n.highEndBlurryRecognition,
                  n.textRecognition,
                  n.licenseKey,
                  n.deviceModelName
                );
                break;
              case "scan-settings":
                e.setScanSettings(
                  n.settings,
                  n.blurryRecognitionAvailable,
                  n.blurryRecognitionRequiresUpdate
                );
                break;
              case "image-settings":
                e.setImageSettings(n.imageSettings);
                break;
              case "scan-image":
                e.addScanWorkUnit({
                  requestId: n.requestId,
                  data: n.data,
                  highQualitySingleFrameMode: n.highQualitySingleFrameMode,
                });
                break;
              case "parse":
                e.addParseWorkUnit({
                  requestId: n.requestId,
                  dataFormat: n.dataFormat,
                  data: n.data,
                  options: n.options,
                });
                break;
              case "clear-session":
                e.clearSession();
                break;
              case "create-blurry-table":
                e.createBlurryTable(n.symbology);
                break;
              case "camera-properties":
                e.setCameraProperties(n.cameraType, n.autofocus);
                break;
              case "device-name":
                e.setDeviceName(n.deviceName);
                break;
              case "reset":
                e.reset();
            }
          };
        }.toString(),
        ")()"
      ),
    ],
    { type: "text/javascript" }
  );
  var ac = (function () {
    function t(e) {
      Io(this, t),
        To(this, "preloadedDataCaptureWorker", void 0),
        To(this, "preloadedDataCaptureWorkerAvailable", void 0),
        e &&
          ((this.preloadedDataCaptureWorker = new Worker(
            URL.createObjectURL(ic)
          )),
          t.load(this.preloadedDataCaptureWorker)),
        (this.preloadedDataCaptureWorkerAvailable = e);
    }
    return (
      No(
        t,
        [
          {
            key: "getDataCaptureWorker",
            value: function () {
              return this.preloadedDataCaptureWorkerAvailable &&
                null != this.preloadedDataCaptureWorker
                ? ((this.preloadedDataCaptureWorkerAvailable = !1),
                  this.preloadedDataCaptureWorker)
                : new Worker(URL.createObjectURL(ic));
            },
          },
          {
            key: "returnDataCaptureWorker",
            value: function (e) {
              null == this.preloadedDataCaptureWorker &&
                (this.preloadedDataCaptureWorker = e),
                this.preloadedDataCaptureWorker === e
                  ? ((this.preloadedDataCaptureWorker.onmessage = null),
                    this.preloadedDataCaptureWorker.postMessage({
                      type: "reset",
                    }),
                    (this.preloadedDataCaptureWorkerAvailable = !0))
                  : e.terminate();
            },
          },
        ],
        [
          {
            key: "load",
            value: function (t) {
              var n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              t.postMessage({
                type: "load-library",
                deviceId: Ed,
                libraryLocation: e.scanditDataCaptureLocation,
                path: window.location.pathname,
                preload: n,
                delayedRegistration: r,
                highEndBlurryRecognition: e.highEndBlurryRecognition,
                textRecognition: e.textRecognition,
                licenseKey: e.userLicenseKey,
                deviceModelName:
                  e.BrowserHelper.userAgentInfo.getDevice().model,
              });
            },
          },
        ]
      ),
      t
    );
  })();
  (e.Logger = void 0),
    (function (e) {
      var t;
      !(function (e) {
        (e.DEBUG = "debug"),
          (e.INFO = "info"),
          (e.WARN = "warn"),
          (e.ERROR = "error"),
          (e.QUIET = "quiet");
      })((t = e.Level || (e.Level = {})));
      var n = new qs([
          [t.DEBUG, 1],
          [t.INFO, 2],
          [t.WARN, 3],
          [t.ERROR, 4],
          [t.QUIET, 5],
        ]),
        r = t.DEBUG;
      (e.setLevel = function (e) {
        r = e;
      }),
        (e.log = function (e) {
          var i, a, o, s;
          if (!(n.get(r) > n.get(e))) {
            for (
              var c = arguments.length, u = new Array(c > 1 ? c - 1 : 0), l = 1;
              l < c;
              l++
            )
              u[l - 1] = arguments[l];
            switch (e) {
              case t.DEBUG:
                (i = console).debug.apply(i, u);
                break;
              case t.INFO:
                (a = console).log.apply(a, u);
                break;
              case t.WARN:
                (o = console).warn.apply(o, u);
                break;
              case t.ERROR:
                (s = console).error.apply(s, u);
            }
          }
        });
    })(e.Logger || (e.Logger = {}));
  var oc = (function () {
    function t(e) {
      Io(this, t),
        To(this, "eventEmitter", new Us.exports.EventEmitter()),
        To(this, "preload", void 0),
        To(
          this,
          "queuedBlurryRecognitionSymbologies",
          Yo(t.availableBlurryRecognitionSymbologies.values())
        ),
        To(this, "readyBlurryRecognitionSymbologies", new js()),
        To(this, "dataCaptureWorker", void 0),
        (this.preload = e);
    }
    var n;
    return (
      No(
        t,
        [
          {
            key: "prepareBlurryTables",
            value:
              ((n = Zr(
                ao.mark(function n() {
                  var r;
                  return ao.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (((r = !0), !this.preload)) {
                              n.next = 11;
                              break;
                            }
                            return (
                              (n.prev = 2),
                              (n.next = 5),
                              this.checkBlurryTablesAlreadyAvailable()
                            );
                          case 5:
                            (r = n.sent), (n.next = 11);
                            break;
                          case 8:
                            (n.prev = 8),
                              (n.t0 = n.catch(2)),
                              e.Logger.log(e.Logger.Level.ERROR, n.t0);
                          case 11:
                            r
                              ? ((this.queuedBlurryRecognitionSymbologies = []),
                                (this.readyBlurryRecognitionSymbologies =
                                  new js(
                                    t.availableBlurryRecognitionSymbologies
                                  )),
                                this.eventEmitter.emit(
                                  "blurryTablesUpdate",
                                  new js(this.readyBlurryRecognitionSymbologies)
                                ))
                              : ((this.dataCaptureWorker = new Worker(
                                  URL.createObjectURL(ic)
                                )),
                                (this.dataCaptureWorker.onmessage =
                                  this.dataCaptureWorkerOnMessage.bind(this)),
                                ac.load(this.dataCaptureWorker, !0, !0));
                          case 12:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    this,
                    [[2, 8]]
                  );
                })
              )),
              function () {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "on",
            value: function (e, n) {
              "blurryTablesUpdate" === e &&
                (this.readyBlurryRecognitionSymbologies.size ===
                t.availableBlurryRecognitionSymbologies.size
                  ? n(this.readyBlurryRecognitionSymbologies)
                  : this.eventEmitter.on(e, n));
            },
          },
          {
            key: "updateBlurryRecognitionPriority",
            value: function (e) {
              var t = this.queuedBlurryRecognitionSymbologies.slice();
              this.getEnabledSymbologies(e).forEach(function (e) {
                var n = t.indexOf(e);
                -1 !== n && t.unshift(t.splice(n, 1)[0]);
              }),
                (this.queuedBlurryRecognitionSymbologies = t);
            },
          },
          {
            key: "isBlurryRecognitionAvailable",
            value: function (e) {
              var t = this;
              return this.getEnabledSymbologies(e).every(function (e) {
                return t.readyBlurryRecognitionSymbologies.has(e);
              });
            },
          },
          {
            key: "getEnabledSymbologies",
            value: function (e) {
              return Yo(
                t.availableBlurryRecognitionSymbologies.values()
              ).filter(function (t) {
                return e.isSymbologyEnabled(t);
              });
            },
          },
          {
            key: "createNextBlurryTableSymbology",
            value: function () {
              var e;
              do {
                e = this.queuedBlurryRecognitionSymbologies.shift();
              } while (
                null != e &&
                this.readyBlurryRecognitionSymbologies.has(e)
              );
              null != e &&
                this.dataCaptureWorker.postMessage({
                  type: "create-blurry-table",
                  symbology: e,
                });
            },
          },
          {
            key: "checkBlurryTablesAlreadyAvailable",
            value: function () {
              return new Yr(function (n) {
                var r = indexedDB.open(t.writableDataPath);
                function i() {
                  var e;
                  null == r ||
                    null === (e = r.result) ||
                    void 0 === e ||
                    e.close(),
                    n(!1);
                }
                (r.onupgradeneeded = function () {
                  try {
                    r.result.createObjectStore(t.fsObjectStoreName);
                  } catch (e) {}
                }),
                  (r.onsuccess = function () {
                    try {
                      var a = r.result.transaction(
                        t.fsObjectStoreName,
                        "readonly"
                      );
                      a.onerror = i;
                      var o = a.objectStore(t.fsObjectStoreName).getAllKeys();
                      (o.onsuccess = function () {
                        return (
                          r.result.close(),
                          (e.highEndBlurryRecognition
                            ? t.highEndBlurryTableFiles
                            : t.defaultBlurryTableFiles
                          ).every(function (e) {
                            return -1 !== o.result.indexOf(e);
                          })
                            ? n(!0)
                            : n(!1)
                        );
                      }),
                        (o.onerror = i);
                    } catch (e) {
                      i.call({ error: e });
                    }
                  }),
                  (r.onblocked = r.onerror = i);
              });
            },
          },
          {
            key: "dataCaptureWorkerOnMessage",
            value: function (n) {
              var r = this,
                i = n.data;
              if (null != i[1])
                switch (i[0]) {
                  case "context-created":
                    this.createNextBlurryTableSymbology();
                    break;
                  case "create-blurry-table-result":
                    this.readyBlurryRecognitionSymbologies.add(i[1]),
                      [
                        e.Barcode.Symbology.EAN8,
                        e.Barcode.Symbology.EAN13,
                        e.Barcode.Symbology.UPCA,
                        e.Barcode.Symbology.UPCE,
                      ].includes(i[1])
                        ? (this.readyBlurryRecognitionSymbologies.add(
                            e.Barcode.Symbology.EAN13
                          ),
                          this.readyBlurryRecognitionSymbologies.add(
                            e.Barcode.Symbology.EAN8
                          ),
                          this.readyBlurryRecognitionSymbologies.add(
                            e.Barcode.Symbology.UPCA
                          ),
                          this.readyBlurryRecognitionSymbologies.add(
                            e.Barcode.Symbology.UPCE
                          ))
                        : [
                            e.Barcode.Symbology.CODE32,
                            e.Barcode.Symbology.CODE39,
                          ].includes(i[1]) &&
                          (this.readyBlurryRecognitionSymbologies.add(
                            e.Barcode.Symbology.CODE32
                          ),
                          this.readyBlurryRecognitionSymbologies.add(
                            e.Barcode.Symbology.CODE39
                          )),
                      this.eventEmitter.emit(
                        "blurryTablesUpdate",
                        new js(this.readyBlurryRecognitionSymbologies)
                      ),
                      this.readyBlurryRecognitionSymbologies.size ===
                      t.availableBlurryRecognitionSymbologies.size
                        ? setTimeout(function () {
                            r.dataCaptureWorker.terminate();
                          }, 250)
                        : this.createNextBlurryTableSymbology();
                }
            },
          },
        ],
        [
          {
            key: "create",
            value: (function () {
              var n = Zr(
                ao.mark(function n(r) {
                  var i, a;
                  return ao.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (!r) {
                            n.next = 5;
                            break;
                          }
                          if (
                            null ==
                              (i =
                                e.BrowserHelper.userAgentInfo.getBrowser()
                                  .name) ||
                            !i.includes("Edge")
                          ) {
                            n.next = 5;
                            break;
                          }
                          return (
                            (a = new Worker(
                              URL.createObjectURL(
                                new Blob(
                                  [
                                    "(".concat(
                                      t.workerIndexedDBSupportTestFunction.toString(),
                                      ")()"
                                    ),
                                  ],
                                  { type: "text/javascript" }
                                )
                              )
                            )),
                            n.abrupt(
                              "return",
                              new Yr(function (e) {
                                a.onmessage = function (n) {
                                  a.terminate(), e(new t(n.data));
                                };
                              })
                            )
                          );
                        case 5:
                          return n.abrupt("return", new t(r));
                        case 6:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
              return function (e) {
                return n.apply(this, arguments);
              };
            })(),
          },
          {
            key: "workerIndexedDBSupportTestFunction",
            value: function () {
              try {
                indexedDB.deleteDatabase("scandit_indexeddb_support_test"),
                  postMessage(!0);
              } catch (e) {
                postMessage(!1);
              }
            },
          },
        ]
      ),
      t
    );
  })();
  function sc() {
    if ("undefined" == typeof Reflect || !Co) return !1;
    if (Co.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(Co(Boolean, [], function () {})), !0
      );
    } catch (e) {
      return !1;
    }
  }
  function cc(e, t, n) {
    return (
      (cc = sc()
        ? Co.bind()
        : function (e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var i = new (Function.bind.apply(e, r))();
            return n && ko(i, n.prototype), i;
          }),
      cc.apply(null, arguments)
    );
  }
  function uc(e) {
    var t = "function" == typeof qs ? new qs() : void 0;
    return (
      (uc = function (e) {
        if (
          null === e ||
          !(function (e) {
            return -1 !== Function.toString.call(e).indexOf("[native code]");
          })(e)
        )
          return e;
        if ("function" != typeof e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, n);
        }
        function n() {
          return cc(e, arguments, Oo(this).constructor);
        }
        return (
          (n.prototype = Ya(e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          ko(n, e)
        );
      }),
      uc(e)
    );
  }
  To(oc, "writableDataPath", "/scandit_sync_folder_preload"),
    To(oc, "fsObjectStoreName", "FILE_DATA"),
    To(
      oc,
      "defaultBlurryTableFiles",
      [
        "/20919bc5228479679a264521447f9c87.scandit",
        "/855b1fdf70718074e40e97328ea23039.scandit",
        "/92038ea8367cfcdfebed31e0ad1c5c6d.scandit",
        "/1c02d3aa478da28ebf5756c342565017.scandit",
        "/ce00c525c9f8160b0cd12b09fa739fbf.scandit",
        "/e5e60e4cc82ecb0f1b7f7bfaabfe7a8c.scandit",
        "/3a63262b342a4f603b3626a98565e174.scandit",
        "/e9bb1a0e5ec3ddd037a91497c09d8daa.scandit",
        "/f6f53a0c00683f6b349f29ff76107662.scandit",
        "/41db165d92b2369b4e7c841e29ced06a.scandit",
        "/4571aa251af4c3d3bd63f47a0b54d30d.scandit",
        "/94c3ff79d8c922c01f048c1deac9d89b.scandit",
        "/7a1d15cb731e1a8fd146427bb7920922.scandit",
        "/b874f8f9aa42b909b68c8cb59db5b2aa.scandit",
        "/f867458021a0bd9b2bd2448958e98d9b.scandit",
        "/828281aceea050a47657fab7fc470b2c.scandit",
        "/9e06fc65990c496de0da6c71376758b3.scandit",
        "/ef939d962bc030919393e822be1ba6f7.scandit",
        "/04c912268484e863833dcf31c8ad7898.scandit",
        "/401b20aa6d4551f9d001c20581ece64e.scandit",
        "/b8f73417d6947f4c4fc205329703804c.scandit",
      ].map(function (e) {
        return "".concat(oc.writableDataPath).concat(e);
      })
    ),
    To(
      oc,
      "highEndBlurryTableFiles",
      [
        "/9acb7e350bb910f2a1309b31214f9a4e.scandit",
        "/b2dc1168d2bb679c233068f078944e41.scandit",
        "/4b93e8f2d0a529874f5737e04b9784c1.scandit",
        "/4e9821a5898a46445b8beed46626581f.scandit",
        "/260b8a8fdf8e5fbf2526e138c7c0bbb5.scandit",
        "/8c561caef1b9c4b852811f5c2374bb8e.scandit",
        "/f63809050de2702c9527eb1891b337e5.scandit",
        "/576639d5aa0b5f5d19bfe3864eab749a.scandit",
        "/e645b5549783972888fc1cf69163de27.scandit",
        "/9dd619e2ae39d75ecbc1cb9391b04aad.scandit",
        "/0fa0b08a89e9ce63edc91beab6206461.scandit",
        "/c0a273dbcef08a1e4a9cc387752b4c0e.scandit",
        "/00caaf030fbdfcec26df3f8d3a400f2e.scandit",
        "/b53f643fcc542977ffe8ce30d1f8beb0.scandit",
        "/825a85c14ca9e19e2bc211c8e82c1e53.scandit",
        "/23b2c91f549629488800b671406ed399.scandit",
        "/7c43295d738875ce8265ecf037fa1b12.scandit",
        "/3f9b28270bc4a077fde6b547574d5780.scandit",
        "/814cf529041339e4f6598e6b69b7c608.scandit",
        "/ddc7990e91e2293216c98e6bb1ac024a.scandit",
        "/75e3eaabf7987fdb433be1d1fe92032a.scandit",
        "/497112cbe8674c21c4c8bd7f0e957b71.scandit",
        "/94ae9b357c6061d489c10d7ac73e3139.scandit",
        "/df4383c06c7a85a8e8c2a1d86b61e6bc.scandit",
        "/5aee7e2ea252b3b05145493721caa9b1.scandit",
        "/aeb733f6d7a86c4115826b2c89df2720.scandit",
        "/c22f49a08f466b877208c4a31569bd9d.scandit",
        "/1524b7b4fa54aee57369c54b86bd65f4.scandit",
        "/cf3110c18bec369705b94e50aae077ab.scandit",
        "/bb7b0c63371cfa0787a90b19c3650587.scandit",
        "/6e4454c7a20910115e6653b1cd607e12.scandit",
        "/492339332477a5c9efa2cb6701f754d3.scandit",
        "/50919ffed0c9a78f19ff465bdfd4f2b8.scandit",
        "/c0795f18a2ebfd0b6835be5ad787a040.scandit",
        "/1e0a5fb89be9e843b96174b0c182727b.scandit",
        "/14126c0d924e0128f6caca76ecdceb6d.scandit",
        "/5f43256a6a2032966dd44c6a3eef53eb.scandit",
        "/83bb18bb71dead54a013fe2cc85ad4f7.scandit",
        "/6ee5a2338030d3282516040607182b26.scandit",
        "/7a341c4ba35f02335fd3200ec02ff205.scandit",
        "/6ebdbff2f3739b35ba8f68517451eb37.scandit",
        "/a5ba033b43d4a2c80dab49eaa2d90162.scandit",
      ].map(function (e) {
        return "".concat(oc.writableDataPath).concat(e);
      })
    ),
    To(
      oc,
      "availableBlurryRecognitionSymbologies",
      new js([
        e.Barcode.Symbology.EAN13,
        e.Barcode.Symbology.EAN8,
        e.Barcode.Symbology.CODE32,
        e.Barcode.Symbology.CODE39,
        e.Barcode.Symbology.CODE128,
        e.Barcode.Symbology.CODE93,
        e.Barcode.Symbology.INTERLEAVED_2_OF_5,
        e.Barcode.Symbology.MSI_PLESSEY,
        e.Barcode.Symbology.CODABAR,
        e.Barcode.Symbology.UPCA,
        e.Barcode.Symbology.UPCE,
      ])
    );
  var lc,
    dc,
    hc = (function (e) {
      Lo(i, e);
      var t,
        n,
        r =
          ((t = i),
          (n = (function () {
            if ("undefined" == typeof Reflect || !Co) return !1;
            if (Co.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(Co(Boolean, [], function () {})),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var e,
              r = Oo(t);
            if (n) {
              var i = Oo(this).constructor;
              e = Co(r, arguments, i);
            } else e = r.apply(this, arguments);
            return Vo(this, e);
          });
      function i() {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t.name,
          a = void 0 === n ? "" : n,
          o = t.message,
          s = void 0 === o ? "" : o;
        return (
          Io(this, i),
          (e = r.call(this, s)),
          Object.setPrototypeOf(Mo(e), i.prototype),
          (e.name = a),
          e
        );
      }
      return No(i);
    })(uc(Error)),
    fc = (function (e) {
      Lo(i, e);
      var t,
        n,
        r =
          ((t = i),
          (n = (function () {
            if ("undefined" == typeof Reflect || !Co) return !1;
            if (Co.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(Co(Boolean, [], function () {})),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var e,
              r = Oo(t);
            if (n) {
              var i = Oo(this).constructor;
              e = Co(r, arguments, i);
            } else e = r.apply(this, arguments);
            return Vo(this, e);
          });
      function i(e) {
        var t;
        return (
          Io(this, i),
          To(
            Mo(
              (t = r.call(this, {
                name: "UnsupportedBrowserError",
                message:
                  "This OS / browser has one or more missing features preventing it from working correctly (".concat(
                    e.missingFeatures.join(", "),
                    ")"
                  ),
              }))
            ),
            "data",
            void 0
          ),
          (t.data = e),
          t
        );
      }
      return No(i);
    })(hc),
    gc = (function (e) {
      if ("undefined" == typeof window) return;
      const t = document.createElement("style");
      return (
        t.setAttribute("type", "text/css"),
        (t.innerHTML = e),
        document.head.appendChild(t),
        e
      );
    })(
      '.scandit.scandit-container{align-items:center;display:flex;height:100%;justify-content:center;overflow:hidden;width:100%}.scandit.scandit-barcode-picker{background-color:#000;height:100%;min-height:1px;min-width:1px;position:relative;width:100%}.scandit .scandit-video{display:block;height:100%;position:relative;width:100%}.scandit .scandit-video.mirrored{transform:scaleX(-1)}.scandit .scandit-logo{bottom:5%;max-height:12.5%;max-width:35%;right:5%;z-index:20}.scandit .scandit-laser,.scandit .scandit-logo{pointer-events:none;position:absolute;transform:translateZ(0)}.scandit .scandit-laser{align-items:center;box-sizing:border-box;display:flex;top:-9999px;z-index:10}.scandit .scandit-laser img{max-height:47px;width:100%}.scandit .scandit-laser img,.scandit .scandit-viewfinder{animation-duration:.25s;position:absolute;transition:opacity .25s ease}.scandit .scandit-viewfinder{border:2px solid #fff;border-radius:10px;box-sizing:border-box;pointer-events:none;top:-9999px;transform:translateZ(0);z-index:10}.scandit .scandit-viewfinder.paused{opacity:.4}.scandit .scandit-camera-switcher,.scandit .scandit-torch-toggle{-webkit-tap-highlight-color:rgba(255,255,255,0);cursor:pointer;filter:drop-shadow(0 2px 0 #808080);max-height:15%;max-width:15%;position:absolute;top:5%;transform:translateZ(0);z-index:10}.scandit .scandit-camera-switcher{left:5%}.scandit .scandit-torch-toggle{right:5%}.scandit .scandit-camera-recovery{background-color:#000;color:#fff;cursor:pointer;position:absolute;top:0;transform:translateZ(0);z-index:15}.scandit .scandit-camera-recovery,.scandit .scandit-camera-upload{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.scandit .scandit-camera-upload{-webkit-tap-highlight-color:rgba(255,255,255,0);flex-direction:column;z-index:5}.scandit .scandit-camera-upload label{align-items:center;border-radius:50%;cursor:pointer;display:flex;flex-direction:column;height:180px;justify-content:center;margin-top:18px;width:180px}.scandit .scandit-camera-upload label input[type=file]{position:absolute;top:-9999px}.scandit .radial-progress{animation-duration:.25s;background-color:transparent;border-radius:50%;border-style:solid;border-width:3px;box-sizing:border-box;height:180px;position:absolute;transition:opacity 1s ease,border-color .5s;width:180px}.scandit .radial-progress[data-progress="0"]{opacity:.2}.scandit .radial-progress[data-progress="5"]{opacity:.24}.scandit .radial-progress[data-progress="10"]{opacity:.28}.scandit .radial-progress[data-progress="15"]{opacity:.32}.scandit .radial-progress[data-progress="20"]{opacity:.36}.scandit .radial-progress[data-progress="25"]{opacity:.4}.scandit .radial-progress[data-progress="30"]{opacity:.44}.scandit .radial-progress[data-progress="35"]{opacity:.48}.scandit .radial-progress[data-progress="40"]{opacity:.52}.scandit .radial-progress[data-progress="45"]{opacity:.56}.scandit .radial-progress[data-progress="50"]{opacity:.6}.scandit .radial-progress[data-progress="55"]{opacity:.64}.scandit .radial-progress[data-progress="60"]{opacity:.68}.scandit .radial-progress[data-progress="65"]{opacity:.72}.scandit .radial-progress[data-progress="70"]{opacity:.76}.scandit .radial-progress[data-progress="75"]{opacity:.8}.scandit .radial-progress[data-progress="80"]{opacity:.84}.scandit .radial-progress[data-progress="85"]{opacity:.88}.scandit .radial-progress[data-progress="90"]{opacity:.92}.scandit .radial-progress[data-progress="95"]{opacity:.96}.scandit .radial-progress[data-progress="100"]{opacity:1}.scandit .scandit-flash-color{animation-name:scandit-flash-color}.scandit .scandit-flash-white{animation-name:scandit-flash-white}.scandit .scandit-flash-inset{animation-name:scandit-flash-inset}.scandit .scandit-opacity-pulse{animation-delay:0s,.333s;animation-duration:.333s,1s;animation-iteration-count:1,infinite;animation-name:scandit-opacity-pulse-before,scandit-opacity-pulse;animation-timing-function:cubic-bezier(.645,.045,.355,1),cubic-bezier(.645,.045,.355,1)}.scandit .scandit-hidden-opacity{opacity:0}.scandit-hidden{display:none!important}@keyframes scandit-flash-color{0%{filter:none}50%{filter:drop-shadow(0 0 .75rem #fff) drop-shadow(0 0 2.5rem #7ed9e2)}to{filter:none}}@keyframes scandit-flash-white{0%{filter:none}50%{filter:drop-shadow(0 0 .5rem #fff) drop-shadow(0 0 1rem #fff) drop-shadow(0 0 2.5rem #fff)}to{filter:none}}@keyframes scandit-flash-inset{0%{box-shadow:none}50%{box-shadow:inset 0 0 .5rem,inset 0 0 1rem,inset 0 0 2.5rem}to{box-shadow:none}}@keyframes scandit-opacity-pulse-before{0%{opacity:1}to{opacity:.4}}@keyframes scandit-opacity-pulse{0%{opacity:.4}50%{opacity:.6}to{opacity:.4}}'
    ),
    mc = {};
  !(function (e) {
    !(function () {
      var n = function () {
        this.init();
      };
      n.prototype = {
        init: function () {
          var e = this || r;
          return (
            (e._counter = 1e3),
            (e._html5AudioPool = []),
            (e.html5PoolSize = 10),
            (e._codecs = {}),
            (e._howls = []),
            (e._muted = !1),
            (e._volume = 1),
            (e._canPlayEvent = "canplaythrough"),
            (e._navigator =
              "undefined" != typeof window && window.navigator
                ? window.navigator
                : null),
            (e.masterGain = null),
            (e.noAudio = !1),
            (e.usingWebAudio = !0),
            (e.autoSuspend = !0),
            (e.ctx = null),
            (e.autoUnlock = !0),
            e._setup(),
            e
          );
        },
        volume: function (e) {
          var t = this || r;
          if (
            ((e = parseFloat(e)),
            t.ctx || d(),
            void 0 !== e && e >= 0 && e <= 1)
          ) {
            if (((t._volume = e), t._muted)) return t;
            t.usingWebAudio &&
              t.masterGain.gain.setValueAtTime(e, r.ctx.currentTime);
            for (var n = 0; n < t._howls.length; n++)
              if (!t._howls[n]._webAudio)
                for (
                  var i = t._howls[n]._getSoundIds(), a = 0;
                  a < i.length;
                  a++
                ) {
                  var o = t._howls[n]._soundById(i[a]);
                  o && o._node && (o._node.volume = o._volume * e);
                }
            return t;
          }
          return t._volume;
        },
        mute: function (e) {
          var t = this || r;
          t.ctx || d(),
            (t._muted = e),
            t.usingWebAudio &&
              t.masterGain.gain.setValueAtTime(
                e ? 0 : t._volume,
                r.ctx.currentTime
              );
          for (var n = 0; n < t._howls.length; n++)
            if (!t._howls[n]._webAudio)
              for (
                var i = t._howls[n]._getSoundIds(), a = 0;
                a < i.length;
                a++
              ) {
                var o = t._howls[n]._soundById(i[a]);
                o && o._node && (o._node.muted = !!e || o._muted);
              }
          return t;
        },
        stop: function () {
          for (var e = this || r, t = 0; t < e._howls.length; t++)
            e._howls[t].stop();
          return e;
        },
        unload: function () {
          for (var e = this || r, t = e._howls.length - 1; t >= 0; t--)
            e._howls[t].unload();
          return (
            e.usingWebAudio &&
              e.ctx &&
              void 0 !== e.ctx.close &&
              (e.ctx.close(), (e.ctx = null), d()),
            e
          );
        },
        codecs: function (e) {
          return (this || r)._codecs[e.replace(/^x-/, "")];
        },
        _setup: function () {
          var e = this || r;
          if (
            ((e.state = (e.ctx && e.ctx.state) || "suspended"),
            e._autoSuspend(),
            !e.usingWebAudio)
          )
            if ("undefined" != typeof Audio)
              try {
                void 0 === new Audio().oncanplaythrough &&
                  (e._canPlayEvent = "canplay");
              } catch (t) {
                e.noAudio = !0;
              }
            else e.noAudio = !0;
          try {
            new Audio().muted && (e.noAudio = !0);
          } catch (e) {}
          return e.noAudio || e._setupCodecs(), e;
        },
        _setupCodecs: function () {
          var e = this || r,
            t = null;
          try {
            t = "undefined" != typeof Audio ? new Audio() : null;
          } catch (t) {
            return e;
          }
          if (!t || "function" != typeof t.canPlayType) return e;
          var n = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            i = e._navigator ? e._navigator.userAgent : "",
            a = i.match(/OPR\/([0-6].)/g),
            o = a && parseInt(a[0].split("/")[1], 10) < 33,
            s = -1 !== i.indexOf("Safari") && -1 === i.indexOf("Chrome"),
            c = i.match(/Version\/(.*?) /),
            u = s && c && parseInt(c[1], 10) < 15;
          return (
            (e._codecs = {
              mp3: !(
                o ||
                (!n && !t.canPlayType("audio/mp3;").replace(/^no$/, ""))
              ),
              mpeg: !!n,
              opus: !!t
                .canPlayType('audio/ogg; codecs="opus"')
                .replace(/^no$/, ""),
              ogg: !!t
                .canPlayType('audio/ogg; codecs="vorbis"')
                .replace(/^no$/, ""),
              oga: !!t
                .canPlayType('audio/ogg; codecs="vorbis"')
                .replace(/^no$/, ""),
              wav: !!(
                t.canPlayType('audio/wav; codecs="1"') ||
                t.canPlayType("audio/wav")
              ).replace(/^no$/, ""),
              aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
              caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
              m4a: !!(
                t.canPlayType("audio/x-m4a;") ||
                t.canPlayType("audio/m4a;") ||
                t.canPlayType("audio/aac;")
              ).replace(/^no$/, ""),
              m4b: !!(
                t.canPlayType("audio/x-m4b;") ||
                t.canPlayType("audio/m4b;") ||
                t.canPlayType("audio/aac;")
              ).replace(/^no$/, ""),
              mp4: !!(
                t.canPlayType("audio/x-mp4;") ||
                t.canPlayType("audio/mp4;") ||
                t.canPlayType("audio/aac;")
              ).replace(/^no$/, ""),
              weba: !(
                u ||
                !t
                  .canPlayType('audio/webm; codecs="vorbis"')
                  .replace(/^no$/, "")
              ),
              webm: !(
                u ||
                !t
                  .canPlayType('audio/webm; codecs="vorbis"')
                  .replace(/^no$/, "")
              ),
              dolby: !!t
                .canPlayType('audio/mp4; codecs="ec-3"')
                .replace(/^no$/, ""),
              flac: !!(
                t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")
              ).replace(/^no$/, ""),
            }),
            e
          );
        },
        _unlockAudio: function () {
          var e = this || r;
          if (!e._audioUnlocked && e.ctx) {
            (e._audioUnlocked = !1),
              (e.autoUnlock = !1),
              e._mobileUnloaded ||
                44100 === e.ctx.sampleRate ||
                ((e._mobileUnloaded = !0), e.unload()),
              (e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050));
            var t = function (n) {
              for (; e._html5AudioPool.length < e.html5PoolSize; )
                try {
                  var r = new Audio();
                  (r._unlocked = !0), e._releaseHtml5Audio(r);
                } catch (n) {
                  e.noAudio = !0;
                  break;
                }
              for (var i = 0; i < e._howls.length; i++)
                if (!e._howls[i]._webAudio)
                  for (
                    var a = e._howls[i]._getSoundIds(), o = 0;
                    o < a.length;
                    o++
                  ) {
                    var s = e._howls[i]._soundById(a[o]);
                    s &&
                      s._node &&
                      !s._node._unlocked &&
                      ((s._node._unlocked = !0), s._node.load());
                  }
              e._autoResume();
              var c = e.ctx.createBufferSource();
              (c.buffer = e._scratchBuffer),
                c.connect(e.ctx.destination),
                void 0 === c.start ? c.noteOn(0) : c.start(0),
                "function" == typeof e.ctx.resume && e.ctx.resume(),
                (c.onended = function () {
                  c.disconnect(0),
                    (e._audioUnlocked = !0),
                    document.removeEventListener("touchstart", t, !0),
                    document.removeEventListener("touchend", t, !0),
                    document.removeEventListener("click", t, !0),
                    document.removeEventListener("keydown", t, !0);
                  for (var n = 0; n < e._howls.length; n++)
                    e._howls[n]._emit("unlock");
                });
            };
            return (
              document.addEventListener("touchstart", t, !0),
              document.addEventListener("touchend", t, !0),
              document.addEventListener("click", t, !0),
              document.addEventListener("keydown", t, !0),
              e
            );
          }
        },
        _obtainHtml5Audio: function () {
          var e = this || r;
          if (e._html5AudioPool.length) return e._html5AudioPool.pop();
          var t = new Audio().play();
          return (
            t &&
              "undefined" != typeof Promise &&
              (t instanceof Promise || "function" == typeof t.then) &&
              t.catch(function () {
                console.warn(
                  "HTML5 Audio pool exhausted, returning potentially locked audio object."
                );
              }),
            new Audio()
          );
        },
        _releaseHtml5Audio: function (e) {
          var t = this || r;
          return e._unlocked && t._html5AudioPool.push(e), t;
        },
        _autoSuspend: function () {
          var e = this;
          if (
            e.autoSuspend &&
            e.ctx &&
            void 0 !== e.ctx.suspend &&
            r.usingWebAudio
          ) {
            for (var t = 0; t < e._howls.length; t++)
              if (e._howls[t]._webAudio)
                for (var n = 0; n < e._howls[t]._sounds.length; n++)
                  if (!e._howls[t]._sounds[n]._paused) return e;
            return (
              e._suspendTimer && clearTimeout(e._suspendTimer),
              (e._suspendTimer = setTimeout(function () {
                if (e.autoSuspend) {
                  (e._suspendTimer = null), (e.state = "suspending");
                  var t = function () {
                    (e.state = "suspended"),
                      e._resumeAfterSuspend &&
                        (delete e._resumeAfterSuspend, e._autoResume());
                  };
                  e.ctx.suspend().then(t, t);
                }
              }, 3e4)),
              e
            );
          }
        },
        _autoResume: function () {
          var e = this;
          if (e.ctx && void 0 !== e.ctx.resume && r.usingWebAudio)
            return (
              "running" === e.state &&
              "interrupted" !== e.ctx.state &&
              e._suspendTimer
                ? (clearTimeout(e._suspendTimer), (e._suspendTimer = null))
                : "suspended" === e.state ||
                  ("running" === e.state && "interrupted" === e.ctx.state)
                ? (e.ctx.resume().then(function () {
                    e.state = "running";
                    for (var t = 0; t < e._howls.length; t++)
                      e._howls[t]._emit("resume");
                  }),
                  e._suspendTimer &&
                    (clearTimeout(e._suspendTimer), (e._suspendTimer = null)))
                : "suspending" === e.state && (e._resumeAfterSuspend = !0),
              e
            );
        },
      };
      var r = new n(),
        i = function (e) {
          e.src && 0 !== e.src.length
            ? this.init(e)
            : console.error(
                "An array of source files must be passed with any new Howl."
              );
        };
      i.prototype = {
        init: function (e) {
          var t = this;
          return (
            r.ctx || d(),
            (t._autoplay = e.autoplay || !1),
            (t._format = "string" != typeof e.format ? e.format : [e.format]),
            (t._html5 = e.html5 || !1),
            (t._muted = e.mute || !1),
            (t._loop = e.loop || !1),
            (t._pool = e.pool || 5),
            (t._preload =
              ("boolean" != typeof e.preload && "metadata" !== e.preload) ||
              e.preload),
            (t._rate = e.rate || 1),
            (t._sprite = e.sprite || {}),
            (t._src = "string" != typeof e.src ? e.src : [e.src]),
            (t._volume = void 0 !== e.volume ? e.volume : 1),
            (t._xhr = {
              method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
              headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
              withCredentials:
                !(!e.xhr || !e.xhr.withCredentials) && e.xhr.withCredentials,
            }),
            (t._duration = 0),
            (t._state = "unloaded"),
            (t._sounds = []),
            (t._endTimers = {}),
            (t._queue = []),
            (t._playLock = !1),
            (t._onend = e.onend ? [{ fn: e.onend }] : []),
            (t._onfade = e.onfade ? [{ fn: e.onfade }] : []),
            (t._onload = e.onload ? [{ fn: e.onload }] : []),
            (t._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : []),
            (t._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : []),
            (t._onpause = e.onpause ? [{ fn: e.onpause }] : []),
            (t._onplay = e.onplay ? [{ fn: e.onplay }] : []),
            (t._onstop = e.onstop ? [{ fn: e.onstop }] : []),
            (t._onmute = e.onmute ? [{ fn: e.onmute }] : []),
            (t._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
            (t._onrate = e.onrate ? [{ fn: e.onrate }] : []),
            (t._onseek = e.onseek ? [{ fn: e.onseek }] : []),
            (t._onunlock = e.onunlock ? [{ fn: e.onunlock }] : []),
            (t._onresume = []),
            (t._webAudio = r.usingWebAudio && !t._html5),
            void 0 !== r.ctx && r.ctx && r.autoUnlock && r._unlockAudio(),
            r._howls.push(t),
            t._autoplay &&
              t._queue.push({
                event: "play",
                action: function () {
                  t.play();
                },
              }),
            t._preload && "none" !== t._preload && t.load(),
            t
          );
        },
        load: function () {
          var e = this,
            t = null;
          if (!r.noAudio) {
            "string" == typeof e._src && (e._src = [e._src]);
            for (var n = 0; n < e._src.length; n++) {
              var i, o;
              if (e._format && e._format[n]) i = e._format[n];
              else {
                if ("string" != typeof (o = e._src[n])) {
                  e._emit(
                    "loaderror",
                    null,
                    "Non-string found in selected audio sources - ignoring."
                  );
                  continue;
                }
                (i = /^data:audio\/([^;,]+);/i.exec(o)) ||
                  (i = /\.([^.]+)$/.exec(o.split("?", 1)[0])),
                  i && (i = i[1].toLowerCase());
              }
              if (
                (i ||
                  console.warn(
                    'No file extension was found. Consider using the "format" property or specify an extension.'
                  ),
                i && r.codecs(i))
              ) {
                t = e._src[n];
                break;
              }
            }
            return t
              ? ((e._src = t),
                (e._state = "loading"),
                "https:" === window.location.protocol &&
                  "http:" === t.slice(0, 5) &&
                  ((e._html5 = !0), (e._webAudio = !1)),
                new a(e),
                e._webAudio && s(e),
                e)
              : void e._emit(
                  "loaderror",
                  null,
                  "No codec support for selected audio sources."
                );
          }
          e._emit("loaderror", null, "No audio support.");
        },
        play: function (e, t) {
          var n = this,
            i = null;
          if ("number" == typeof e) (i = e), (e = null);
          else {
            if ("string" == typeof e && "loaded" === n._state && !n._sprite[e])
              return null;
            if (void 0 === e && ((e = "__default"), !n._playLock)) {
              for (var a = 0, o = 0; o < n._sounds.length; o++)
                n._sounds[o]._paused &&
                  !n._sounds[o]._ended &&
                  (a++, (i = n._sounds[o]._id));
              1 === a ? (e = null) : (i = null);
            }
          }
          var s = i ? n._soundById(i) : n._inactiveSound();
          if (!s) return null;
          if (
            (i && !e && (e = s._sprite || "__default"), "loaded" !== n._state)
          ) {
            (s._sprite = e), (s._ended = !1);
            var c = s._id;
            return (
              n._queue.push({
                event: "play",
                action: function () {
                  n.play(c);
                },
              }),
              c
            );
          }
          if (i && !s._paused) return t || n._loadQueue("play"), s._id;
          n._webAudio && r._autoResume();
          var u = Math.max(0, s._seek > 0 ? s._seek : n._sprite[e][0] / 1e3),
            l = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - u),
            d = (1e3 * l) / Math.abs(s._rate),
            h = n._sprite[e][0] / 1e3,
            f = (n._sprite[e][0] + n._sprite[e][1]) / 1e3;
          (s._sprite = e), (s._ended = !1);
          var g = function () {
            (s._paused = !1),
              (s._seek = u),
              (s._start = h),
              (s._stop = f),
              (s._loop = !(!s._loop && !n._sprite[e][2]));
          };
          if (!(u >= f)) {
            var m = s._node;
            if (n._webAudio) {
              var p = function () {
                (n._playLock = !1), g(), n._refreshBuffer(s);
                var e = s._muted || n._muted ? 0 : s._volume;
                m.gain.setValueAtTime(e, r.ctx.currentTime),
                  (s._playStart = r.ctx.currentTime),
                  void 0 === m.bufferSource.start
                    ? s._loop
                      ? m.bufferSource.noteGrainOn(0, u, 86400)
                      : m.bufferSource.noteGrainOn(0, u, l)
                    : s._loop
                    ? m.bufferSource.start(0, u, 86400)
                    : m.bufferSource.start(0, u, l),
                  d !== 1 / 0 &&
                    (n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), d)),
                  t ||
                    setTimeout(function () {
                      n._emit("play", s._id), n._loadQueue();
                    }, 0);
              };
              "running" === r.state && "interrupted" !== r.ctx.state
                ? p()
                : ((n._playLock = !0),
                  n.once("resume", p),
                  n._clearTimer(s._id));
            } else {
              var v = function () {
                (m.currentTime = u),
                  (m.muted = s._muted || n._muted || r._muted || m.muted),
                  (m.volume = s._volume * r.volume()),
                  (m.playbackRate = s._rate);
                try {
                  var i = m.play();
                  if (
                    (i &&
                    "undefined" != typeof Promise &&
                    (i instanceof Promise || "function" == typeof i.then)
                      ? ((n._playLock = !0),
                        g(),
                        i
                          .then(function () {
                            (n._playLock = !1),
                              (m._unlocked = !0),
                              t ? n._loadQueue() : n._emit("play", s._id);
                          })
                          .catch(function () {
                            (n._playLock = !1),
                              n._emit(
                                "playerror",
                                s._id,
                                "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                              ),
                              (s._ended = !0),
                              (s._paused = !0);
                          }))
                      : t || ((n._playLock = !1), g(), n._emit("play", s._id)),
                    (m.playbackRate = s._rate),
                    m.paused)
                  )
                    return void n._emit(
                      "playerror",
                      s._id,
                      "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."
                    );
                  "__default" !== e || s._loop
                    ? (n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), d))
                    : ((n._endTimers[s._id] = function () {
                        n._ended(s),
                          m.removeEventListener(
                            "ended",
                            n._endTimers[s._id],
                            !1
                          );
                      }),
                      m.addEventListener("ended", n._endTimers[s._id], !1));
                } catch (e) {
                  n._emit("playerror", s._id, e);
                }
              };
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" ===
                m.src && ((m.src = n._src), m.load());
              var y =
                (window && window.ejecta) ||
                (!m.readyState && r._navigator.isCocoonJS);
              if (m.readyState >= 3 || y) v();
              else {
                (n._playLock = !0), (n._state = "loading");
                var b = function () {
                  (n._state = "loaded"),
                    v(),
                    m.removeEventListener(r._canPlayEvent, b, !1);
                };
                m.addEventListener(r._canPlayEvent, b, !1),
                  n._clearTimer(s._id);
              }
            }
            return s._id;
          }
          n._ended(s);
        },
        pause: function (e) {
          var t = this;
          if ("loaded" !== t._state || t._playLock)
            return (
              t._queue.push({
                event: "pause",
                action: function () {
                  t.pause(e);
                },
              }),
              t
            );
          for (var n = t._getSoundIds(e), r = 0; r < n.length; r++) {
            t._clearTimer(n[r]);
            var i = t._soundById(n[r]);
            if (
              i &&
              !i._paused &&
              ((i._seek = t.seek(n[r])),
              (i._rateSeek = 0),
              (i._paused = !0),
              t._stopFade(n[r]),
              i._node)
            )
              if (t._webAudio) {
                if (!i._node.bufferSource) continue;
                void 0 === i._node.bufferSource.stop
                  ? i._node.bufferSource.noteOff(0)
                  : i._node.bufferSource.stop(0),
                  t._cleanBuffer(i._node);
              } else
                (isNaN(i._node.duration) && i._node.duration !== 1 / 0) ||
                  i._node.pause();
            arguments[1] || t._emit("pause", i ? i._id : null);
          }
          return t;
        },
        stop: function (e, t) {
          var n = this;
          if ("loaded" !== n._state || n._playLock)
            return (
              n._queue.push({
                event: "stop",
                action: function () {
                  n.stop(e);
                },
              }),
              n
            );
          for (var r = n._getSoundIds(e), i = 0; i < r.length; i++) {
            n._clearTimer(r[i]);
            var a = n._soundById(r[i]);
            a &&
              ((a._seek = a._start || 0),
              (a._rateSeek = 0),
              (a._paused = !0),
              (a._ended = !0),
              n._stopFade(r[i]),
              a._node &&
                (n._webAudio
                  ? a._node.bufferSource &&
                    (void 0 === a._node.bufferSource.stop
                      ? a._node.bufferSource.noteOff(0)
                      : a._node.bufferSource.stop(0),
                    n._cleanBuffer(a._node))
                  : (isNaN(a._node.duration) && a._node.duration !== 1 / 0) ||
                    ((a._node.currentTime = a._start || 0),
                    a._node.pause(),
                    a._node.duration === 1 / 0 && n._clearSound(a._node))),
              t || n._emit("stop", a._id));
          }
          return n;
        },
        mute: function (e, t) {
          var n = this;
          if ("loaded" !== n._state || n._playLock)
            return (
              n._queue.push({
                event: "mute",
                action: function () {
                  n.mute(e, t);
                },
              }),
              n
            );
          if (void 0 === t) {
            if ("boolean" != typeof e) return n._muted;
            n._muted = e;
          }
          for (var i = n._getSoundIds(t), a = 0; a < i.length; a++) {
            var o = n._soundById(i[a]);
            o &&
              ((o._muted = e),
              o._interval && n._stopFade(o._id),
              n._webAudio && o._node
                ? o._node.gain.setValueAtTime(
                    e ? 0 : o._volume,
                    r.ctx.currentTime
                  )
                : o._node && (o._node.muted = !!r._muted || e),
              n._emit("mute", o._id));
          }
          return n;
        },
        volume: function () {
          var e,
            t,
            n,
            i = this,
            a = arguments;
          if (0 === a.length) return i._volume;
          if (
            (1 === a.length || (2 === a.length && void 0 === a[1])
              ? i._getSoundIds().indexOf(a[0]) >= 0
                ? (t = parseInt(a[0], 10))
                : (e = parseFloat(a[0]))
              : a.length >= 2 &&
                ((e = parseFloat(a[0])), (t = parseInt(a[1], 10))),
            !(void 0 !== e && e >= 0 && e <= 1))
          )
            return (n = t ? i._soundById(t) : i._sounds[0]) ? n._volume : 0;
          if ("loaded" !== i._state || i._playLock)
            return (
              i._queue.push({
                event: "volume",
                action: function () {
                  i.volume.apply(i, a);
                },
              }),
              i
            );
          void 0 === t && (i._volume = e), (t = i._getSoundIds(t));
          for (var o = 0; o < t.length; o++)
            (n = i._soundById(t[o])) &&
              ((n._volume = e),
              a[2] || i._stopFade(t[o]),
              i._webAudio && n._node && !n._muted
                ? n._node.gain.setValueAtTime(e, r.ctx.currentTime)
                : n._node && !n._muted && (n._node.volume = e * r.volume()),
              i._emit("volume", n._id));
          return i;
        },
        fade: function (e, t, n, i) {
          var a = this;
          if ("loaded" !== a._state || a._playLock)
            return (
              a._queue.push({
                event: "fade",
                action: function () {
                  a.fade(e, t, n, i);
                },
              }),
              a
            );
          (e = Math.min(Math.max(0, parseFloat(e)), 1)),
            (t = Math.min(Math.max(0, parseFloat(t)), 1)),
            (n = parseFloat(n)),
            a.volume(e, i);
          for (var o = a._getSoundIds(i), s = 0; s < o.length; s++) {
            var c = a._soundById(o[s]);
            if (c) {
              if ((i || a._stopFade(o[s]), a._webAudio && !c._muted)) {
                var u = r.ctx.currentTime,
                  l = u + n / 1e3;
                (c._volume = e),
                  c._node.gain.setValueAtTime(e, u),
                  c._node.gain.linearRampToValueAtTime(t, l);
              }
              a._startFadeInterval(c, e, t, n, o[s], void 0 === i);
            }
          }
          return a;
        },
        _startFadeInterval: function (e, t, n, r, i, a) {
          var o = this,
            s = t,
            c = n - t,
            u = Math.abs(c / 0.01),
            l = Math.max(4, u > 0 ? r / u : r),
            d = Date.now();
          (e._fadeTo = n),
            (e._interval = setInterval(function () {
              var i = (Date.now() - d) / r;
              (d = Date.now()),
                (s += c * i),
                (s = Math.round(100 * s) / 100),
                (s = c < 0 ? Math.max(n, s) : Math.min(n, s)),
                o._webAudio ? (e._volume = s) : o.volume(s, e._id, !0),
                a && (o._volume = s),
                ((n < t && s <= n) || (n > t && s >= n)) &&
                  (clearInterval(e._interval),
                  (e._interval = null),
                  (e._fadeTo = null),
                  o.volume(n, e._id),
                  o._emit("fade", e._id));
            }, l));
        },
        _stopFade: function (e) {
          var t = this,
            n = t._soundById(e);
          return (
            n &&
              n._interval &&
              (t._webAudio &&
                n._node.gain.cancelScheduledValues(r.ctx.currentTime),
              clearInterval(n._interval),
              (n._interval = null),
              t.volume(n._fadeTo, e),
              (n._fadeTo = null),
              t._emit("fade", e)),
            t
          );
        },
        loop: function () {
          var e,
            t,
            n,
            r = this,
            i = arguments;
          if (0 === i.length) return r._loop;
          if (1 === i.length) {
            if ("boolean" != typeof i[0])
              return !!(n = r._soundById(parseInt(i[0], 10))) && n._loop;
            (e = i[0]), (r._loop = e);
          } else 2 === i.length && ((e = i[0]), (t = parseInt(i[1], 10)));
          for (var a = r._getSoundIds(t), o = 0; o < a.length; o++)
            (n = r._soundById(a[o])) &&
              ((n._loop = e),
              r._webAudio &&
                n._node &&
                n._node.bufferSource &&
                ((n._node.bufferSource.loop = e),
                e &&
                  ((n._node.bufferSource.loopStart = n._start || 0),
                  (n._node.bufferSource.loopEnd = n._stop),
                  r.playing(a[o]) && (r.pause(a[o], !0), r.play(a[o], !0)))));
          return r;
        },
        rate: function () {
          var e,
            t,
            n,
            i = this,
            a = arguments;
          if (0 === a.length) t = i._sounds[0]._id;
          else if (1 === a.length) {
            var o = i._getSoundIds(),
              s = o.indexOf(a[0]);
            s >= 0 ? (t = parseInt(a[0], 10)) : (e = parseFloat(a[0]));
          } else
            2 === a.length &&
              ((e = parseFloat(a[0])), (t = parseInt(a[1], 10)));
          if ("number" != typeof e)
            return (n = i._soundById(t)) ? n._rate : i._rate;
          if ("loaded" !== i._state || i._playLock)
            return (
              i._queue.push({
                event: "rate",
                action: function () {
                  i.rate.apply(i, a);
                },
              }),
              i
            );
          void 0 === t && (i._rate = e), (t = i._getSoundIds(t));
          for (var c = 0; c < t.length; c++)
            if ((n = i._soundById(t[c]))) {
              i.playing(t[c]) &&
                ((n._rateSeek = i.seek(t[c])),
                (n._playStart = i._webAudio
                  ? r.ctx.currentTime
                  : n._playStart)),
                (n._rate = e),
                i._webAudio && n._node && n._node.bufferSource
                  ? n._node.bufferSource.playbackRate.setValueAtTime(
                      e,
                      r.ctx.currentTime
                    )
                  : n._node && (n._node.playbackRate = e);
              var u = i.seek(t[c]),
                l =
                  (i._sprite[n._sprite][0] + i._sprite[n._sprite][1]) / 1e3 - u,
                d = (1e3 * l) / Math.abs(n._rate);
              (!i._endTimers[t[c]] && n._paused) ||
                (i._clearTimer(t[c]),
                (i._endTimers[t[c]] = setTimeout(i._ended.bind(i, n), d))),
                i._emit("rate", n._id);
            }
          return i;
        },
        seek: function () {
          var e,
            t,
            n = this,
            i = arguments;
          if (0 === i.length) n._sounds.length && (t = n._sounds[0]._id);
          else if (1 === i.length) {
            var a = n._getSoundIds(),
              o = a.indexOf(i[0]);
            o >= 0
              ? (t = parseInt(i[0], 10))
              : n._sounds.length &&
                ((t = n._sounds[0]._id), (e = parseFloat(i[0])));
          } else
            2 === i.length &&
              ((e = parseFloat(i[0])), (t = parseInt(i[1], 10)));
          if (void 0 === t) return 0;
          if ("number" == typeof e && ("loaded" !== n._state || n._playLock))
            return (
              n._queue.push({
                event: "seek",
                action: function () {
                  n.seek.apply(n, i);
                },
              }),
              n
            );
          var s = n._soundById(t);
          if (s) {
            if (!("number" == typeof e && e >= 0)) {
              if (n._webAudio) {
                var c = n.playing(t) ? r.ctx.currentTime - s._playStart : 0,
                  u = s._rateSeek ? s._rateSeek - s._seek : 0;
                return s._seek + (u + c * Math.abs(s._rate));
              }
              return s._node.currentTime;
            }
            var l = n.playing(t);
            l && n.pause(t, !0),
              (s._seek = e),
              (s._ended = !1),
              n._clearTimer(t),
              n._webAudio ||
                !s._node ||
                isNaN(s._node.duration) ||
                (s._node.currentTime = e);
            var d = function () {
              l && n.play(t, !0), n._emit("seek", t);
            };
            if (l && !n._webAudio) {
              var h = function () {
                n._playLock ? setTimeout(h, 0) : d();
              };
              setTimeout(h, 0);
            } else d();
          }
          return n;
        },
        playing: function (e) {
          var t = this;
          if ("number" == typeof e) {
            var n = t._soundById(e);
            return !!n && !n._paused;
          }
          for (var r = 0; r < t._sounds.length; r++)
            if (!t._sounds[r]._paused) return !0;
          return !1;
        },
        duration: function (e) {
          var t = this,
            n = t._duration,
            r = t._soundById(e);
          return r && (n = t._sprite[r._sprite][1] / 1e3), n;
        },
        state: function () {
          return this._state;
        },
        unload: function () {
          for (var e = this, t = e._sounds, n = 0; n < t.length; n++)
            t[n]._paused || e.stop(t[n]._id),
              e._webAudio ||
                (e._clearSound(t[n]._node),
                t[n]._node.removeEventListener("error", t[n]._errorFn, !1),
                t[n]._node.removeEventListener(
                  r._canPlayEvent,
                  t[n]._loadFn,
                  !1
                ),
                t[n]._node.removeEventListener("ended", t[n]._endFn, !1),
                r._releaseHtml5Audio(t[n]._node)),
              delete t[n]._node,
              e._clearTimer(t[n]._id);
          var i = r._howls.indexOf(e);
          i >= 0 && r._howls.splice(i, 1);
          var a = !0;
          for (n = 0; n < r._howls.length; n++)
            if (
              r._howls[n]._src === e._src ||
              e._src.indexOf(r._howls[n]._src) >= 0
            ) {
              a = !1;
              break;
            }
          return (
            o && a && delete o[e._src],
            (r.noAudio = !1),
            (e._state = "unloaded"),
            (e._sounds = []),
            (e = null),
            null
          );
        },
        on: function (e, t, n, r) {
          var i = this["_on" + e];
          return (
            "function" == typeof t &&
              i.push(r ? { id: n, fn: t, once: r } : { id: n, fn: t }),
            this
          );
        },
        off: function (e, t, n) {
          var r = this,
            i = r["_on" + e],
            a = 0;
          if (("number" == typeof t && ((n = t), (t = null)), t || n))
            for (a = 0; a < i.length; a++) {
              var o = n === i[a].id;
              if ((t === i[a].fn && o) || (!t && o)) {
                i.splice(a, 1);
                break;
              }
            }
          else if (e) r["_on" + e] = [];
          else {
            var s = Object.keys(r);
            for (a = 0; a < s.length; a++)
              0 === s[a].indexOf("_on") &&
                Array.isArray(r[s[a]]) &&
                (r[s[a]] = []);
          }
          return r;
        },
        once: function (e, t, n) {
          return this.on(e, t, n, 1), this;
        },
        _emit: function (e, t, n) {
          for (var r = this, i = r["_on" + e], a = i.length - 1; a >= 0; a--)
            (i[a].id && i[a].id !== t && "load" !== e) ||
              (setTimeout(
                function (e) {
                  e.call(this, t, n);
                }.bind(r, i[a].fn),
                0
              ),
              i[a].once && r.off(e, i[a].fn, i[a].id));
          return r._loadQueue(e), r;
        },
        _loadQueue: function (e) {
          var t = this;
          if (t._queue.length > 0) {
            var n = t._queue[0];
            n.event === e && (t._queue.shift(), t._loadQueue()),
              e || n.action();
          }
          return t;
        },
        _ended: function (e) {
          var t = this,
            n = e._sprite;
          if (
            !t._webAudio &&
            e._node &&
            !e._node.paused &&
            !e._node.ended &&
            e._node.currentTime < e._stop
          )
            return setTimeout(t._ended.bind(t, e), 100), t;
          var i = !(!e._loop && !t._sprite[n][2]);
          if (
            (t._emit("end", e._id),
            !t._webAudio && i && t.stop(e._id, !0).play(e._id),
            t._webAudio && i)
          ) {
            t._emit("play", e._id),
              (e._seek = e._start || 0),
              (e._rateSeek = 0),
              (e._playStart = r.ctx.currentTime);
            var a = (1e3 * (e._stop - e._start)) / Math.abs(e._rate);
            t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), a);
          }
          return (
            t._webAudio &&
              !i &&
              ((e._paused = !0),
              (e._ended = !0),
              (e._seek = e._start || 0),
              (e._rateSeek = 0),
              t._clearTimer(e._id),
              t._cleanBuffer(e._node),
              r._autoSuspend()),
            t._webAudio || i || t.stop(e._id, !0),
            t
          );
        },
        _clearTimer: function (e) {
          var t = this;
          if (t._endTimers[e]) {
            if ("function" != typeof t._endTimers[e])
              clearTimeout(t._endTimers[e]);
            else {
              var n = t._soundById(e);
              n &&
                n._node &&
                n._node.removeEventListener("ended", t._endTimers[e], !1);
            }
            delete t._endTimers[e];
          }
          return t;
        },
        _soundById: function (e) {
          for (var t = this, n = 0; n < t._sounds.length; n++)
            if (e === t._sounds[n]._id) return t._sounds[n];
          return null;
        },
        _inactiveSound: function () {
          var e = this;
          e._drain();
          for (var t = 0; t < e._sounds.length; t++)
            if (e._sounds[t]._ended) return e._sounds[t].reset();
          return new a(e);
        },
        _drain: function () {
          var e = this,
            t = e._pool,
            n = 0,
            r = 0;
          if (!(e._sounds.length < t)) {
            for (r = 0; r < e._sounds.length; r++) e._sounds[r]._ended && n++;
            for (r = e._sounds.length - 1; r >= 0; r--) {
              if (n <= t) return;
              e._sounds[r]._ended &&
                (e._webAudio &&
                  e._sounds[r]._node &&
                  e._sounds[r]._node.disconnect(0),
                e._sounds.splice(r, 1),
                n--);
            }
          }
        },
        _getSoundIds: function (e) {
          if (void 0 === e) {
            for (var t = [], n = 0; n < this._sounds.length; n++)
              t.push(this._sounds[n]._id);
            return t;
          }
          return [e];
        },
        _refreshBuffer: function (e) {
          return (
            (e._node.bufferSource = r.ctx.createBufferSource()),
            (e._node.bufferSource.buffer = o[this._src]),
            e._panner
              ? e._node.bufferSource.connect(e._panner)
              : e._node.bufferSource.connect(e._node),
            (e._node.bufferSource.loop = e._loop),
            e._loop &&
              ((e._node.bufferSource.loopStart = e._start || 0),
              (e._node.bufferSource.loopEnd = e._stop || 0)),
            e._node.bufferSource.playbackRate.setValueAtTime(
              e._rate,
              r.ctx.currentTime
            ),
            this
          );
        },
        _cleanBuffer: function (e) {
          var t = r._navigator && r._navigator.vendor.indexOf("Apple") >= 0;
          if (
            r._scratchBuffer &&
            e.bufferSource &&
            ((e.bufferSource.onended = null), e.bufferSource.disconnect(0), t)
          )
            try {
              e.bufferSource.buffer = r._scratchBuffer;
            } catch (e) {}
          return (e.bufferSource = null), this;
        },
        _clearSound: function (e) {
          /MSIE |Trident\//.test(r._navigator && r._navigator.userAgent) ||
            (e.src =
              "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
        },
      };
      var a = function (e) {
        (this._parent = e), this.init();
      };
      a.prototype = {
        init: function () {
          var e = this,
            t = e._parent;
          return (
            (e._muted = t._muted),
            (e._loop = t._loop),
            (e._volume = t._volume),
            (e._rate = t._rate),
            (e._seek = 0),
            (e._paused = !0),
            (e._ended = !0),
            (e._sprite = "__default"),
            (e._id = ++r._counter),
            t._sounds.push(e),
            e.create(),
            e
          );
        },
        create: function () {
          var e = this,
            t = e._parent,
            n = r._muted || e._muted || e._parent._muted ? 0 : e._volume;
          return (
            t._webAudio
              ? ((e._node =
                  void 0 === r.ctx.createGain
                    ? r.ctx.createGainNode()
                    : r.ctx.createGain()),
                e._node.gain.setValueAtTime(n, r.ctx.currentTime),
                (e._node.paused = !0),
                e._node.connect(r.masterGain))
              : r.noAudio ||
                ((e._node = r._obtainHtml5Audio()),
                (e._errorFn = e._errorListener.bind(e)),
                e._node.addEventListener("error", e._errorFn, !1),
                (e._loadFn = e._loadListener.bind(e)),
                e._node.addEventListener(r._canPlayEvent, e._loadFn, !1),
                (e._endFn = e._endListener.bind(e)),
                e._node.addEventListener("ended", e._endFn, !1),
                (e._node.src = t._src),
                (e._node.preload = !0 === t._preload ? "auto" : t._preload),
                (e._node.volume = n * r.volume()),
                e._node.load()),
            e
          );
        },
        reset: function () {
          var e = this,
            t = e._parent;
          return (
            (e._muted = t._muted),
            (e._loop = t._loop),
            (e._volume = t._volume),
            (e._rate = t._rate),
            (e._seek = 0),
            (e._rateSeek = 0),
            (e._paused = !0),
            (e._ended = !0),
            (e._sprite = "__default"),
            (e._id = ++r._counter),
            e
          );
        },
        _errorListener: function () {
          var e = this;
          e._parent._emit(
            "loaderror",
            e._id,
            e._node.error ? e._node.error.code : 0
          ),
            e._node.removeEventListener("error", e._errorFn, !1);
        },
        _loadListener: function () {
          var e = this,
            t = e._parent;
          (t._duration = Math.ceil(10 * e._node.duration) / 10),
            0 === Object.keys(t._sprite).length &&
              (t._sprite = { __default: [0, 1e3 * t._duration] }),
            "loaded" !== t._state &&
              ((t._state = "loaded"), t._emit("load"), t._loadQueue()),
            e._node.removeEventListener(r._canPlayEvent, e._loadFn, !1);
        },
        _endListener: function () {
          var e = this,
            t = e._parent;
          t._duration === 1 / 0 &&
            ((t._duration = Math.ceil(10 * e._node.duration) / 10),
            t._sprite.__default[1] === 1 / 0 &&
              (t._sprite.__default[1] = 1e3 * t._duration),
            t._ended(e)),
            e._node.removeEventListener("ended", e._endFn, !1);
        },
      };
      var o = {},
        s = function (e) {
          var t = e._src;
          if (o[t]) return (e._duration = o[t].duration), void l(e);
          if (/^data:[^;]+;base64,/.test(t)) {
            for (
              var n = atob(t.split(",")[1]),
                r = new Uint8Array(n.length),
                i = 0;
              i < n.length;
              ++i
            )
              r[i] = n.charCodeAt(i);
            u(r.buffer, e);
          } else {
            var a = new XMLHttpRequest();
            a.open(e._xhr.method, t, !0),
              (a.withCredentials = e._xhr.withCredentials),
              (a.responseType = "arraybuffer"),
              e._xhr.headers &&
                Object.keys(e._xhr.headers).forEach(function (t) {
                  a.setRequestHeader(t, e._xhr.headers[t]);
                }),
              (a.onload = function () {
                var t = (a.status + "")[0];
                "0" === t || "2" === t || "3" === t
                  ? u(a.response, e)
                  : e._emit(
                      "loaderror",
                      null,
                      "Failed loading audio file with status: " + a.status + "."
                    );
              }),
              (a.onerror = function () {
                e._webAudio &&
                  ((e._html5 = !0),
                  (e._webAudio = !1),
                  (e._sounds = []),
                  delete o[t],
                  e.load());
              }),
              c(a);
          }
        },
        c = function (e) {
          try {
            e.send();
          } catch (t) {
            e.onerror();
          }
        },
        u = function (e, t) {
          var n = function () {
              t._emit("loaderror", null, "Decoding audio data failed.");
            },
            i = function (e) {
              e && t._sounds.length > 0 ? ((o[t._src] = e), l(t, e)) : n();
            };
          "undefined" != typeof Promise && 1 === r.ctx.decodeAudioData.length
            ? r.ctx.decodeAudioData(e).then(i).catch(n)
            : r.ctx.decodeAudioData(e, i, n);
        },
        l = function (e, t) {
          t && !e._duration && (e._duration = t.duration),
            0 === Object.keys(e._sprite).length &&
              (e._sprite = { __default: [0, 1e3 * e._duration] }),
            "loaded" !== e._state &&
              ((e._state = "loaded"), e._emit("load"), e._loadQueue());
        },
        d = function () {
          if (r.usingWebAudio) {
            try {
              "undefined" != typeof AudioContext
                ? (r.ctx = new AudioContext())
                : "undefined" != typeof webkitAudioContext
                ? (r.ctx = new webkitAudioContext())
                : (r.usingWebAudio = !1);
            } catch (e) {
              r.usingWebAudio = !1;
            }
            r.ctx || (r.usingWebAudio = !1);
            var e = /iP(hone|od|ad)/.test(
                r._navigator && r._navigator.platform
              ),
              t =
                r._navigator &&
                r._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
              n = t ? parseInt(t[1], 10) : null;
            if (e && n && n < 9) {
              var i = /safari/.test(
                r._navigator && r._navigator.userAgent.toLowerCase()
              );
              r._navigator && !i && (r.usingWebAudio = !1);
            }
            r.usingWebAudio &&
              ((r.masterGain =
                void 0 === r.ctx.createGain
                  ? r.ctx.createGainNode()
                  : r.ctx.createGain()),
              r.masterGain.gain.setValueAtTime(
                r._muted ? 0 : r._volume,
                r.ctx.currentTime
              ),
              r.masterGain.connect(r.ctx.destination)),
              r._setup();
          }
        };
      (e.Howler = r),
        (e.Howl = i),
        void 0 !== t
          ? ((t.HowlerGlobal = n), (t.Howler = r), (t.Howl = i), (t.Sound = a))
          : "undefined" != typeof window &&
            ((window.HowlerGlobal = n),
            (window.Howler = r),
            (window.Howl = i),
            (window.Sound = a));
    })();
  })(mc),
    (e.Camera = void 0),
    ((dc = (lc = e.Camera || (e.Camera = {})).Type || (lc.Type = {})).FRONT =
      "front"),
    (dc.BACK = "back"),
    W(W.S, "Array", { isArray: yi });
  var pc = l.exports.Array.isArray;
  function vc(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function yc(e) {
    return (
      (function (e) {
        if (pc(e)) return vc(e);
      })(e) ||
      (function (e) {
        if ((void 0 !== Da && null != e[Pa]) || null != e["@@iterator"])
          return Yo(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return vc(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Yo(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? vc(e, t)
              : void 0
          );
        }
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  var bc,
    Ec,
    Sc,
    Ac,
    _c = l.exports,
    Cc = _c.JSON || (_c.JSON = { stringify: JSON.stringify }),
    Tc = function (e) {
      return Cc.stringify.apply(Cc, arguments);
    };
  (e.ImageSettings = void 0),
    ((Ec =
      (bc = e.ImageSettings || (e.ImageSettings = {})).Format ||
      (bc.Format = {}))[(Ec.GRAY_8U = 0)] = "GRAY_8U"),
    (Ec[(Ec.RGB_8U = 1)] = "RGB_8U"),
    (Ec[(Ec.RGBA_8U = 2)] = "RGBA_8U"),
    (e.Parser = (function () {
      function e(t, n) {
        Io(this, e),
          To(this, "scanner", void 0),
          To(this, "dataFormat", void 0),
          To(this, "options", void 0),
          (this.scanner = t),
          (this.dataFormat = n);
      }
      return (
        No(e, [
          {
            key: "setOptions",
            value: function (e) {
              this.options = e;
            },
          },
          {
            key: "parseRawData",
            value: function (e) {
              return this.scanner.parse(this.dataFormat, e, this.options);
            },
          },
          {
            key: "parseString",
            value: function (e) {
              return this.scanner.parse(this.dataFormat, e, this.options);
            },
          },
        ]),
        e
      );
    })()),
    ((Ac =
      (Sc = e.Parser || (e.Parser = {})).DataFormat || (Sc.DataFormat = {}))[
      (Ac.GS1_AI = 1)
    ] = "GS1_AI"),
    (Ac[(Ac.HIBC = 2)] = "HIBC"),
    (Ac[(Ac.DLID = 3)] = "DLID"),
    (Ac[(Ac.MRTD = 4)] = "MRTD"),
    (Ac[(Ac.SWISSQR = 5)] = "SWISSQR"),
    (Ac[(Ac.VIN = 6)] = "VIN"),
    (Ac[(Ac.US_USID = 7)] = "US_USID"),
    (e.RecognizedText = void 0),
    ((e.RecognizedText || (e.RecognizedText = {})).createFromWASMResult =
      function (e) {
        return {
          location: {
            topLeft: { x: e.location[0][0], y: e.location[0][1] },
            topRight: { x: e.location[1][0], y: e.location[1][1] },
            bottomRight: { x: e.location[2][0], y: e.location[2][1] },
            bottomLeft: { x: e.location[3][0], y: e.location[3][1] },
          },
          value: e.value,
        };
      });
  var wc = (function () {
      function t(n, r, i, a) {
        var o = this;
        Io(this, t),
          To(this, "barcodes", void 0),
          To(this, "texts", void 0),
          To(this, "imageData", void 0),
          To(this, "imageSettings", void 0),
          To(this, "rejectedCodes", void 0),
          To(this, "rejectedTexts", void 0),
          (this.barcodes = []),
          n.forEach(function (t) {
            o.barcodes.push(e.Barcode.createFromWASMResult(t));
          }),
          (this.texts = []),
          r.forEach(function (t) {
            o.texts.push(e.RecognizedText.createFromWASMResult(t));
          }),
          (this.imageData = i),
          (this.imageSettings = a),
          (this.rejectedCodes = new js()),
          (this.rejectedTexts = new js());
      }
      return (
        No(t, [
          {
            key: "rejectCode",
            value: function (e) {
              this.rejectedCodes.add(e);
            },
          },
          {
            key: "rejectText",
            value: function (e) {
              this.rejectedTexts.add(e);
            },
          },
        ]),
        t
      );
    })(),
    Nc = E,
    Ic = Ne,
    kc = $,
    Lc = fi.f,
    xc = function (e) {
      for (var t, n = kc(e), r = Ic(n), i = r.length, a = 0, o = []; i > a; )
        (t = r[a++]), (Nc && !Lc.call(n, t)) || o.push(n[t]);
      return o;
    };
  W(W.S, "Object", {
    values: function (e) {
      return xc(e);
    },
  });
  var Mc = l.exports.Object.values;
  (e.SymbologySettings = (function () {
    function e(t) {
      var n,
        r,
        i,
        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      Io(this, e),
        To(this, "symbology", void 0),
        To(this, "enabled", void 0),
        To(this, "colorInvertedEnabled", void 0),
        To(this, "activeSymbolCounts", void 0),
        To(this, "extensions", void 0),
        To(this, "checksums", void 0),
        (this.symbology = t),
        (this.enabled = a),
        (this.colorInvertedEnabled = !1),
        (this.activeSymbolCounts =
          null !== (n = e.defaultActiveSymbolCounts[t]) && void 0 !== n
            ? n
            : []),
        (this.extensions = new js(
          null !== (r = e.defaultExtensions[t]) && void 0 !== r ? r : []
        )),
        (this.checksums = new js(
          null !== (i = e.defaultChecksums[t]) && void 0 !== i ? i : []
        ));
    }
    return (
      No(e, [
        {
          key: "isEnabled",
          value: function () {
            return this.enabled;
          },
        },
        {
          key: "setEnabled",
          value: function (e) {
            return (this.enabled = e), this;
          },
        },
        {
          key: "isColorInvertedEnabled",
          value: function () {
            return this.colorInvertedEnabled;
          },
        },
        {
          key: "setColorInvertedEnabled",
          value: function (e) {
            return (this.colorInvertedEnabled = e), this;
          },
        },
        {
          key: "getActiveSymbolCounts",
          value: function () {
            return this.activeSymbolCounts;
          },
        },
        {
          key: "setActiveSymbolCounts",
          value: function (t) {
            var n;
            return (
              (this.activeSymbolCounts = t),
              0 === this.activeSymbolCounts.length &&
                (this.activeSymbolCounts =
                  null !== (n = e.defaultActiveSymbolCounts[this.symbology]) &&
                  void 0 !== n
                    ? n
                    : []),
              this
            );
          },
        },
        {
          key: "setActiveSymbolCountsRange",
          value: function (t, n) {
            var r;
            return (
              (this.activeSymbolCounts = e.getNumberRange(t, n)),
              0 === this.activeSymbolCounts.length &&
                (this.activeSymbolCounts =
                  null !== (r = e.defaultActiveSymbolCounts[this.symbology]) &&
                  void 0 !== r
                    ? r
                    : []),
              this
            );
          },
        },
        {
          key: "getEnabledExtensions",
          value: function () {
            return this.extensions;
          },
        },
        {
          key: "enableExtensions",
          value: function (e) {
            var t = this;
            return (
              "object" == typeof e
                ? (this.extensions = new js(
                    [].concat(
                      yc(this.extensions),
                      yc(
                        Yo(e).filter(function (e) {
                          return t.isValidExtension(e);
                        })
                      )
                    )
                  ))
                : this.isValidExtension(e) && this.extensions.add(e),
              this
            );
          },
        },
        {
          key: "disableExtensions",
          value: function (e) {
            return (
              "object" == typeof e
                ? (this.extensions = new js(
                    yc(this.extensions).filter(function (t) {
                      return e instanceof Array ? !e.includes(t) : !e.has(t);
                    })
                  ))
                : this.isValidExtension(e) && this.extensions.delete(e),
              this
            );
          },
        },
        {
          key: "getEnabledChecksums",
          value: function () {
            return this.checksums;
          },
        },
        {
          key: "enableChecksums",
          value: function (e) {
            var t = this;
            return (
              "object" == typeof e
                ? (this.checksums = new js(
                    [].concat(
                      yc(this.checksums),
                      yc(
                        Yo(e).filter(function (e) {
                          return t.isValidChecksum(e);
                        })
                      )
                    )
                  ))
                : this.isValidChecksum(e) && this.checksums.add(e),
              this
            );
          },
        },
        {
          key: "disableChecksums",
          value: function (e) {
            return (
              "object" == typeof e
                ? (this.checksums = new js(
                    yc(this.checksums).filter(function (t) {
                      return e instanceof Array ? !e.includes(t) : !e.has(t);
                    })
                  ))
                : this.isValidChecksum(e) && this.checksums.delete(e),
              this
            );
          },
        },
        {
          key: "toJSON",
          value: function () {
            return {
              enabled: this.enabled,
              colorInvertedEnabled: this.colorInvertedEnabled,
              activeSymbolCounts:
                0 === this.activeSymbolCounts.length
                  ? void 0
                  : this.activeSymbolCounts,
              extensions: Yo(this.extensions),
              checksums: Yo(this.checksums),
            };
          },
        },
        {
          key: "isValidExtension",
          value: function (t) {
            return (
              t in e.Extension || Mc(e.Extension).includes(t.toLowerCase())
            );
          },
        },
        {
          key: "isValidChecksum",
          value: function (t) {
            return t in e.Checksum || Mc(e.Checksum).includes(t.toLowerCase());
          },
        },
      ]),
      e
    );
  })()),
    (function (t) {
      function n(e, t) {
        return Yo({ length: t - e + 1 }, function (t, n) {
          return n + e;
        });
      }
      var r, i;
      (t.getNumberRange = n),
        (function (e) {
          (e.DIRECT_PART_MARKING_MODE = "direct_part_marking_mode"),
            (e.FULL_ASCII = "full_ascii"),
            (e.RELAXED_SHARP_QUIET_ZONE_CHECK =
              "relaxed_sharp_quiet_zone_check"),
            (e.REMOVE_LEADING_ZERO = "remove_leading_zero"),
            (e.REMOVE_LEADING_UPCA_ZERO = "remove_leading_upca_zero"),
            (e.RETURN_AS_UPCA = "return_as_upca"),
            (e.STRICT = "strict"),
            (e.STRIP_LEADING_FNC1 = "strip_leading_fnc1"),
            (e.DEBUG_CONTROL_CHARACTERS = "debug_control_characters"),
            (e.GUESS_ENCODING = "guess_encoding"),
            (e.MIRRORED = "mirrored"),
            (e.NO_BLURRY_DECODING = "no_blurry_decoding"),
            (e.USE_UTF8_AS_DEFAULT_ENCODING = "use_utf8_as_default_encoding");
        })((r = t.Extension || (t.Extension = {}))),
        (function (e) {
          (e.MOD_10 = "mod10"),
            (e.MOD_11 = "mod11"),
            (e.MOD_16 = "mod16"),
            (e.MOD_43 = "mod43"),
            (e.MOD_47 = "mod47"),
            (e.MOD_103 = "mod103"),
            (e.MOD_1010 = "mod1010"),
            (e.MOD_1110 = "mod1110");
        })((i = t.Checksum || (t.Checksum = {}))),
        (t.defaultActiveSymbolCounts = {
          [e.Barcode.Symbology.CODABAR]: n(7, 20),
          [e.Barcode.Symbology.CODE11]: n(7, 20),
          [e.Barcode.Symbology.CODE128]: n(6, 40),
          [e.Barcode.Symbology.CODE25]: n(7, 20),
          [e.Barcode.Symbology.CODE32]: [8],
          [e.Barcode.Symbology.CODE39]: n(6, 40),
          [e.Barcode.Symbology.CODE93]: n(6, 40),
          [e.Barcode.Symbology.EAN13]: [12],
          [e.Barcode.Symbology.EAN8]: [8],
          [e.Barcode.Symbology.FIVE_DIGIT_ADD_ON]: [5],
          [e.Barcode.Symbology.GS1_DATABAR_EXPANDED]: n(1, 11),
          [e.Barcode.Symbology.GS1_DATABAR_LIMITED]: [1],
          [e.Barcode.Symbology.GS1_DATABAR]: [2],
          [e.Barcode.Symbology.IATA_2_OF_5]: n(7, 20),
          [e.Barcode.Symbology.INTERLEAVED_2_OF_5]: n(6, 40),
          [e.Barcode.Symbology.KIX]: n(7, 24),
          [e.Barcode.Symbology.LAPA4SC]: [16],
          [e.Barcode.Symbology.MSI_PLESSEY]: n(6, 32),
          [e.Barcode.Symbology.RM4SCC]: n(7, 24),
          [e.Barcode.Symbology.TWO_DIGIT_ADD_ON]: [2],
          [e.Barcode.Symbology.UPCA]: [12],
          [e.Barcode.Symbology.UPCE]: [6],
        }),
        (t.defaultExtensions = {
          [e.Barcode.Symbology.CODE128]: [r.STRIP_LEADING_FNC1],
          [e.Barcode.Symbology.DATA_MATRIX]: [r.STRIP_LEADING_FNC1],
        }),
        (t.defaultChecksums = {
          [e.Barcode.Symbology.MSI_PLESSEY]: [i.MOD_10],
          [e.Barcode.Symbology.CODE11]: [i.MOD_11],
        });
    })(e.SymbologySettings || (e.SymbologySettings = {}));
  var Vc,
    Oc,
    Rc,
    Dc = (function () {
      function e() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t.recognizer,
          r = void 0 === n ? "mrzFullScreen" : n,
          i = t.regex,
          a = t.characterWhitelist,
          o = t.textDuplicateFilter,
          s = void 0 === o ? 0 : o;
        Io(this, e),
          To(this, "properties", void 0),
          To(this, "recognizer", void 0),
          To(this, "regex", void 0),
          To(this, "characterWhitelist", void 0),
          To(this, "textDuplicateFilter", void 0),
          (this.recognizer = r),
          (this.regex = i instanceof RegExp ? i.source : i),
          (this.characterWhitelist = a),
          (this.textDuplicateFilter = s),
          (this.properties = new qs());
      }
      return (
        No(e, [
          {
            key: "toJSONString",
            value: function () {
              var e = {};
              return (
                this.properties.forEach(function (t, n) {
                  e[n] = t;
                }),
                Tc({
                  recognizer: this.recognizer,
                  regex: this.regex,
                  characterWhitelist: this.characterWhitelist,
                  duplicateFilter: this.textDuplicateFilter,
                  properties: e,
                })
              );
            },
          },
          {
            key: "getRegex",
            value: function () {
              return this.regex;
            },
          },
          {
            key: "setRegex",
            value: function (e) {
              return (this.regex = e instanceof RegExp ? e.source : e), this;
            },
          },
          {
            key: "getCharacterWhitelist",
            value: function () {
              return this.characterWhitelist;
            },
          },
          {
            key: "setCharacterWhitelist",
            value: function (e) {
              return (this.characterWhitelist = e), this;
            },
          },
          {
            key: "getTextDuplicateFilter",
            value: function () {
              return this.textDuplicateFilter;
            },
          },
          {
            key: "setTextDuplicateFilter",
            value: function (e) {
              return (this.textDuplicateFilter = e), this;
            },
          },
          {
            key: "getProperty",
            value: function (e) {
              return this.properties.has(e) ? this.properties.get(e) : -1;
            },
          },
          {
            key: "setProperty",
            value: function (e, t) {
              return this.properties.set(e, t), this;
            },
          },
        ]),
        e
      );
    })();
  function Pc(e, t) {
    var n = (void 0 !== Da && e[Pa]) || e["@@iterator"];
    if (!n) {
      if (
        Array.isArray(e) ||
        (n = (function (e, t) {
          if (e) {
            if ("string" == typeof e) return Fc(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Yo(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Fc(e, t)
                : void 0
            );
          }
        })(e)) ||
        (t && e && "number" == typeof e.length)
      ) {
        n && (e = n);
        var r = 0,
          i = function () {};
        return {
          s: i,
          n: function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          },
          e: function (e) {
            throw e;
          },
          f: i,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var a,
      o = !0,
      s = !1;
    return {
      s: function () {
        n = n.call(e);
      },
      n: function () {
        var e = n.next();
        return (o = e.done), e;
      },
      e: function (e) {
        (s = !0), (a = e);
      },
      f: function () {
        try {
          o || null == n.return || n.return();
        } finally {
          if (s) throw a;
        }
      },
    };
  }
  function Fc(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  (e.ScanSettings = (function () {
    function t() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = e.textRecognitionSettings,
        r = void 0 === n ? new Dc() : n,
        i = e.recognitionMode,
        a = void 0 === i ? t.RecognitionMode.CODE : i,
        o = e.enabledSymbologies,
        s = void 0 === o ? [] : o,
        c = e.codeDuplicateFilter,
        u = void 0 === c ? 0 : c,
        l = e.maxNumberOfCodesPerFrame,
        d = void 0 === l ? 1 : l,
        h = e.searchArea,
        f = void 0 === h ? { x: 0, y: 0, width: 1, height: 1 } : h,
        g = e.gpuAcceleration,
        m = void 0 === g || g,
        p = e.blurryRecognition,
        v = void 0 === p || p,
        y = e.codeDirectionHint,
        b = void 0 === y ? t.CodeDirection.LEFT_TO_RIGHT : y,
        E = e.deviceName;
      Io(this, t),
        To(this, "symbologySettings", void 0),
        To(this, "properties", void 0),
        To(this, "textRecognitionSettings", void 0),
        To(this, "recognitionMode", void 0),
        To(this, "codeDuplicateFilter", void 0),
        To(this, "maxNumberOfCodesPerFrame", void 0),
        To(this, "baseSearchArea", void 0),
        To(this, "searchArea", void 0),
        To(this, "gpuAcceleration", void 0),
        To(this, "blurryRecognition", void 0),
        To(this, "codeDirectionHint", void 0),
        To(this, "deviceName", void 0),
        (this.symbologySettings = new qs()),
        (this.textRecognitionSettings = r),
        this.setRecognitionMode(a),
        this.enableSymbologies(s),
        (this.codeDuplicateFilter = u),
        (this.maxNumberOfCodesPerFrame = d),
        (this.baseSearchArea = { x: 0, y: 0, width: 1, height: 1 }),
        (this.searchArea = f),
        (this.gpuAcceleration = m),
        (this.blurryRecognition = v),
        (this.codeDirectionHint = b),
        (this.deviceName = E),
        (this.properties = new qs([["advanced_localization", 0]]));
    }
    return (
      No(t, [
        {
          key: "toJSONString",
          value: function () {
            var t = {};
            this.symbologySettings.forEach(function (n, r) {
              t[e.Barcode.Symbology.toJSONName(r)] = n;
            });
            var n = {};
            this.properties.forEach(function (e, t) {
              n[t] = e;
            });
            var r = {
                x: Math.max(
                  0,
                  Math.min(
                    1,
                    this.baseSearchArea.x +
                      this.searchArea.x * this.baseSearchArea.width
                  )
                ),
                y: Math.max(
                  0,
                  Math.min(
                    1,
                    this.baseSearchArea.y +
                      this.searchArea.y * this.baseSearchArea.height
                  )
                ),
                width: Math.max(
                  0,
                  Math.min(1, this.baseSearchArea.width * this.searchArea.width)
                ),
                height: Math.max(
                  0,
                  Math.min(
                    1,
                    this.baseSearchArea.height * this.searchArea.height
                  )
                ),
              },
              i =
                0 === Math.round(100 * r.x) &&
                0 === Math.round(100 * r.y) &&
                100 === Math.round(100 * r.width) &&
                100 === Math.round(100 * r.height);
            return Tc({
              textRecognitionSettings:
                this.textRecognitionSettings.toJSONString(),
              recognitionMode: this.recognitionMode,
              symbologies: t,
              codeDuplicateFilter: this.codeDuplicateFilter,
              maxNumberOfCodesPerFrame: this.maxNumberOfCodesPerFrame,
              searchArea: r,
              codeLocation1d: i
                ? void 0
                : {
                    area: {
                      x: r.x,
                      y: r.y + (0.75 * r.height) / 2,
                      width: r.width,
                      height: 0.25 * r.height,
                    },
                  },
              codeLocation2d: i ? void 0 : { area: r },
              gpuAcceleration: this.gpuAcceleration,
              blurryRecognition: this.blurryRecognition,
              codeDirectionHint: this.codeDirectionHint,
              properties: n,
            });
          },
        },
        {
          key: "getTextRecognitionSettings",
          value: function () {
            return this.textRecognitionSettings;
          },
        },
        {
          key: "setTextRecognitionSettings",
          value: function (e) {
            return (this.textRecognitionSettings = e), this;
          },
        },
        {
          key: "getRecognitionMode",
          value: function () {
            return this.recognitionMode;
          },
        },
        {
          key: "setRecognitionMode",
          value: function (t) {
            return (
              (this.recognitionMode = t),
              t.includes("text") &&
                !e.textRecognition &&
                e.Logger.log(
                  e.Logger.Level.WARN,
                  "The library has not been configured to load text recognition (ScanditSDK.configure() - loadTextRecognition option): ScanSettings' recognition mode for text will be ignored"
                ),
              this
            );
          },
        },
        {
          key: "getSymbologySettings",
          value: function (t) {
            if (this.symbologySettings.has(t))
              return this.symbologySettings.get(t);
            if (t in e.Barcode.Symbology || Mc(e.Barcode.Symbology).includes(t))
              return (
                this.symbologySettings.set(t, new e.SymbologySettings(t)),
                this.symbologySettings.get(t)
              );
            throw new TypeError('Invalid symbology "'.concat(t, '"'));
          },
        },
        {
          key: "isSymbologyEnabled",
          value: function (e) {
            return (
              this.symbologySettings.has(e) &&
              this.symbologySettings.get(e).isEnabled()
            );
          },
        },
        {
          key: "enableSymbologies",
          value: function (e) {
            return this.setSymbologiesEnabled(e, !0);
          },
        },
        {
          key: "disableSymbologies",
          value: function (e) {
            return this.setSymbologiesEnabled(e, !1);
          },
        },
        {
          key: "getCodeDuplicateFilter",
          value: function () {
            return this.codeDuplicateFilter;
          },
        },
        {
          key: "setCodeDuplicateFilter",
          value: function (e) {
            return (this.codeDuplicateFilter = e), this;
          },
        },
        {
          key: "getMaxNumberOfCodesPerFrame",
          value: function () {
            return this.maxNumberOfCodesPerFrame;
          },
        },
        {
          key: "setMaxNumberOfCodesPerFrame",
          value: function (e) {
            return (this.maxNumberOfCodesPerFrame = e), this;
          },
        },
        {
          key: "getSearchArea",
          value: function () {
            return this.searchArea;
          },
        },
        {
          key: "setSearchArea",
          value: function (e) {
            return (this.searchArea = e), this;
          },
        },
        {
          key: "getBaseSearchArea",
          value: function () {
            return this.baseSearchArea;
          },
        },
        {
          key: "setBaseSearchArea",
          value: function (e) {
            return (this.baseSearchArea = e), this;
          },
        },
        {
          key: "isGpuAccelerationEnabled",
          value: function () {
            return this.gpuAcceleration;
          },
        },
        {
          key: "setGpuAccelerationEnabled",
          value: function (e) {
            return (this.gpuAcceleration = e), this;
          },
        },
        {
          key: "isBlurryRecognitionEnabled",
          value: function () {
            return this.blurryRecognition;
          },
        },
        {
          key: "setBlurryRecognitionEnabled",
          value: function (e) {
            return (this.blurryRecognition = e), this;
          },
        },
        {
          key: "getCodeDirectionHint",
          value: function () {
            return this.codeDirectionHint;
          },
        },
        {
          key: "setCodeDirectionHint",
          value: function (e) {
            return (this.codeDirectionHint = e), this;
          },
        },
        {
          key: "getDeviceName",
          value: function () {
            return this.deviceName;
          },
        },
        {
          key: "setDeviceName",
          value: function (e) {
            return (this.deviceName = e), this;
          },
        },
        {
          key: "getProperty",
          value: function (e) {
            return this.properties.has(e) ? this.properties.get(e) : -1;
          },
        },
        {
          key: "setProperty",
          value: function (e, t) {
            return this.properties.set(e, t), this;
          },
        },
        {
          key: "setSingleSymbologyEnabled",
          value: function (t, n) {
            if (
              !(t in e.Barcode.Symbology) &&
              !Mc(e.Barcode.Symbology).includes(t)
            )
              throw new TypeError('Invalid symbology "'.concat(t, '"'));
            this.symbologySettings.has(t)
              ? this.symbologySettings.get(t).setEnabled(n)
              : this.symbologySettings.set(t, new e.SymbologySettings(t, n));
          },
        },
        {
          key: "setMultipleSymbologiesEnabled",
          value: function (t, n) {
            var r,
              i = Pc(t);
            try {
              for (i.s(); !(r = i.n()).done; ) {
                var a = r.value;
                if (
                  !(a in e.Barcode.Symbology) &&
                  !Mc(e.Barcode.Symbology).includes(a)
                )
                  throw new TypeError('Invalid symbology "'.concat(a, '"'));
              }
            } catch (e) {
              i.e(e);
            } finally {
              i.f();
            }
            var o,
              s = Pc(t);
            try {
              for (s.s(); !(o = s.n()).done; ) {
                var c = o.value;
                this.symbologySettings.has(c)
                  ? this.symbologySettings.get(c).setEnabled(n)
                  : this.symbologySettings.set(
                      c,
                      new e.SymbologySettings(c, n)
                    );
              }
            } catch (e) {
              s.e(e);
            } finally {
              s.f();
            }
          },
        },
        {
          key: "setSymbologiesEnabled",
          value: function (e, t) {
            return (
              "object" == typeof e
                ? this.setMultipleSymbologiesEnabled(e, t)
                : this.setSingleSymbologyEnabled(e, t),
              this
            );
          },
        },
      ]),
      t
    );
  })()),
    ((Oc =
      (Vc = e.ScanSettings || (e.ScanSettings = {})).RecognitionMode ||
      (Vc.RecognitionMode = {})).CODE = "code"),
    (Oc.TEXT = "text"),
    (Oc.CODE_AND_TEXT = "code-and-text"),
    ((Rc = Vc.CodeDirection || (Vc.CodeDirection = {})).LEFT_TO_RIGHT =
      "left-to-right"),
    (Rc.RIGHT_TO_LEFT = "right-to-left"),
    (Rc.BOTTOM_TO_TOP = "bottom-to-top"),
    (Rc.TOP_TO_BOTTOM = "top-to-bottom"),
    (Rc.HORIZONTAL = "horizontal"),
    (Rc.VERTICAL = "vertical"),
    (Rc.NONE = "none");
  var Bc = (function () {
    function t() {
      var n =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = n.scanSettings,
        i = void 0 === r ? new e.ScanSettings() : r,
        a = n.imageSettings;
      Io(this, t),
        To(this, "dataCaptureWorker", void 0),
        To(this, "eventEmitter", void 0),
        To(this, "scanSettings", void 0),
        To(this, "imageSettings", void 0),
        To(this, "workerParseRequestId", void 0),
        To(this, "workerScanQueueLength", void 0),
        To(this, "isReadyToWork", void 0),
        To(this, "licenseKeyFeatures", void 0),
        To(this, "imageDataConversionContext", void 0),
        To(this, "activeBlurryRecognitionSymbologies", void 0),
        To(this, "blurryRecognitionAvailable", void 0);
      var o = e.BrowserHelper.checkBrowserCompatibility();
      if (!o.scannerSupport) throw new fc(o);
      if ("done" !== e.configurePhase)
        throw new hc({
          name: "LibraryNotConfiguredError",
          message:
            "started" === e.configurePhase
              ? "The library has not completed its configuration yet, please call 'configure' and wait for the returned\n            promise's resolution"
              : "The library was not configured yet, 'configure' must be called with valid parameters before instantiating\n            the Scanner",
        });
      (this.eventEmitter = new Us.exports.EventEmitter()),
        (this.isReadyToWork = !1),
        (this.workerScanQueueLength = 0),
        (this.workerParseRequestId = 0),
        (this.dataCaptureWorker = e.dataCaptureLoader.getDataCaptureWorker()),
        (this.dataCaptureWorker.onmessage =
          this.dataCaptureWorkerOnMessage.bind(this)),
        ac.load(this.dataCaptureWorker),
        (this.activeBlurryRecognitionSymbologies = new js()),
        (this.blurryRecognitionAvailable = !1),
        this.applyScanSettings(i),
        null != a && this.applyImageSettings(a),
        e.blurryRecognitionPreloader.on(
          "blurryTablesUpdate",
          this.handleBlurryTablesUpdate.bind(this)
        );
    }
    var n, r;
    return (
      No(
        t,
        [
          {
            key: "destroy",
            value: function () {
              null != this.dataCaptureWorker &&
                e.dataCaptureLoader.returnDataCaptureWorker(
                  this.dataCaptureWorker
                ),
                this.eventEmitter.removeAllListeners();
            },
          },
          {
            key: "applyScanSettings",
            value: function (t) {
              var n = this;
              (this.scanSettings = t),
                e.blurryRecognitionPreloader.updateBlurryRecognitionPriority(
                  this.scanSettings
                );
              var r = e.blurryRecognitionPreloader.getEnabledSymbologies(
                this.scanSettings
              );
              (this.blurryRecognitionAvailable =
                e.blurryRecognitionPreloader.isBlurryRecognitionAvailable(
                  this.scanSettings
                )),
                this.dataCaptureWorker.postMessage({
                  type: "scan-settings",
                  settings: this.scanSettings.toJSONString(),
                  blurryRecognitionAvailable: this.blurryRecognitionAvailable,
                  blurryRecognitionRequiresUpdate: r.some(function (e) {
                    return !n.activeBlurryRecognitionSymbologies.has(e);
                  }),
                });
              var i = this.scanSettings.getDeviceName();
              return (
                null != i &&
                  this.dataCaptureWorker.postMessage({
                    type: "device-name",
                    deviceName: i,
                  }),
                this.blurryRecognitionAvailable &&
                  (this.activeBlurryRecognitionSymbologies = new js(
                    [].concat(
                      yc(this.activeBlurryRecognitionSymbologies),
                      yc(r)
                    )
                  )),
                this.eventEmitter.emit("newScanSettings", this.scanSettings),
                this
              );
            },
          },
          {
            key: "applyImageSettings",
            value: function (e) {
              return (
                (this.imageSettings = e),
                this.dataCaptureWorker.postMessage({
                  type: "image-settings",
                  imageSettings: e,
                }),
                this
              );
            },
          },
          {
            key: "clearSession",
            value: function () {
              return (
                this.dataCaptureWorker.postMessage({ type: "clear-session" }),
                this
              );
            },
          },
          {
            key: "processImage",
            value:
              ((r = Zr(
                ao.mark(function n(r) {
                  var i,
                    a,
                    o = this,
                    s = arguments;
                  return ao.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (
                              ((i = s.length > 1 && void 0 !== s[1] && s[1]),
                              null != this.imageSettings)
                            ) {
                              n.next = 3;
                              break;
                            }
                            throw new hc({
                              name: "NoImageSettings",
                              message:
                                "No image settings set up in the scanner",
                            });
                          case 3:
                            r instanceof HTMLImageElement &&
                              (null == this.imageDataConversionContext &&
                                (this.imageDataConversionContext = document
                                  .createElement("canvas")
                                  .getContext("2d")),
                              (this.imageDataConversionContext.canvas.width =
                                r.naturalWidth),
                              (this.imageDataConversionContext.canvas.height =
                                r.naturalHeight),
                              this.imageDataConversionContext.drawImage(
                                r,
                                0,
                                0,
                                r.naturalWidth,
                                r.naturalHeight
                              ),
                              (r = new Uint8Array(
                                this.imageDataConversionContext.getImageData(
                                  0,
                                  0,
                                  r.naturalWidth,
                                  r.naturalHeight
                                ).data.buffer
                              ))),
                              (n.t0 = this.imageSettings.format.valueOf()),
                              (n.next =
                                n.t0 === e.ImageSettings.Format.GRAY_8U
                                  ? 7
                                  : n.t0 === e.ImageSettings.Format.RGB_8U
                                  ? 9
                                  : n.t0 === e.ImageSettings.Format.RGBA_8U
                                  ? 11
                                  : 13);
                            break;
                          case 7:
                          case 13:
                            return (a = 1), n.abrupt("break", 15);
                          case 9:
                            return (a = 3), n.abrupt("break", 15);
                          case 11:
                            return (a = 4), n.abrupt("break", 15);
                          case 15:
                            if (
                              this.imageSettings.width *
                                this.imageSettings.height *
                                a ===
                              r.length
                            ) {
                              n.next = 17;
                              break;
                            }
                            throw new hc({
                              name: "ImageSettingsDataMismatch",
                              message:
                                "The provided image data doesn't match the previously set image settings",
                            });
                          case 17:
                            return (
                              t.workerScanRequestId++,
                              this.workerScanQueueLength++,
                              n.abrupt(
                                "return",
                                new Yr(function (n, a) {
                                  var s = "workResult-".concat(
                                      t.workerScanRequestId
                                    ),
                                    c = "workError-".concat(
                                      t.workerScanRequestId
                                    );
                                  o.eventEmitter.once(s, function (e, t) {
                                    o.eventEmitter.removeAllListeners(c),
                                      o.workerScanQueueLength--,
                                      n(
                                        new wc(
                                          e.barcodes,
                                          e.texts,
                                          t,
                                          o.imageSettings
                                        )
                                      );
                                  }),
                                    o.eventEmitter.once(c, function (t, n) {
                                      e.Logger.log(
                                        e.Logger.Level.ERROR,
                                        "Scandit Data Capture error (".concat(
                                          t.errorCode,
                                          "):"
                                        ),
                                        t.errorMessage
                                      ),
                                        o.eventEmitter.removeAllListeners(s),
                                        o.workerScanQueueLength--;
                                      var r = new hc({
                                        name: "ScanditEngineError",
                                        message: ""
                                          .concat(t.errorMessage, " (")
                                          .concat(t.errorCode, ")"),
                                      });
                                      a(r);
                                    }),
                                    o.dataCaptureWorker.postMessage(
                                      {
                                        type: "scan-image",
                                        requestId: t.workerScanRequestId,
                                        data: r,
                                        highQualitySingleFrameMode: i,
                                      },
                                      [r.buffer]
                                    );
                                })
                              )
                            );
                          case 20:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    this
                  );
                })
              )),
              function (e) {
                return r.apply(this, arguments);
              }),
          },
          {
            key: "isBusyProcessing",
            value: function () {
              return 0 !== this.workerScanQueueLength;
            },
          },
          {
            key: "isReady",
            value: function () {
              return this.isReadyToWork;
            },
          },
          {
            key: "on",
            value: function (e, t) {
              return (
                "ready" === e
                  ? this.isReadyToWork
                    ? t()
                    : this.eventEmitter.once(e, t, this)
                  : "contextCreated" === e
                  ? null != this.licenseKeyFeatures
                    ? t(this.licenseKeyFeatures)
                    : this.eventEmitter.once(e, t, this)
                  : this.eventEmitter.on(e, t, this),
                this
              );
            },
          },
          {
            key: "addListener",
            value: function (e, t) {
              return this.on(e, t);
            },
          },
          {
            key: "createParserForFormat",
            value: function (t) {
              return new e.Parser(this, t);
            },
          },
          {
            key: "getImageSettings",
            value: function () {
              return this.imageSettings;
            },
          },
          {
            key: "getScanSettings",
            value: function () {
              return this.scanSettings;
            },
          },
          {
            key: "parse",
            value:
              ((n = Zr(
                ao.mark(function t(n, r, i) {
                  var a = this;
                  return ao.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              this.workerParseRequestId++,
                              t.abrupt(
                                "return",
                                new Yr(function (t, o) {
                                  var s = "parseResult-".concat(
                                      a.workerParseRequestId
                                    ),
                                    c = "parseError-".concat(
                                      a.workerParseRequestId
                                    );
                                  a.eventEmitter.once(s, function (e) {
                                    a.eventEmitter.removeAllListeners(c);
                                    var n = {
                                      jsonString: e,
                                      fields: [],
                                      fieldsByName: {},
                                    };
                                    JSON.parse(e).forEach(function (e) {
                                      n.fields.push(e),
                                        (n.fieldsByName[e.name] = e);
                                    }),
                                      t(n);
                                  }),
                                    a.eventEmitter.once(c, function (t) {
                                      e.Logger.log(
                                        e.Logger.Level.ERROR,
                                        "Scandit Data Capture error (".concat(
                                          t.errorCode,
                                          "):"
                                        ),
                                        t.errorMessage
                                      ),
                                        a.eventEmitter.removeAllListeners(s);
                                      var n = new hc({
                                        name: "ScanditEngineError",
                                        message: ""
                                          .concat(t.errorMessage, " (")
                                          .concat(t.errorCode, ")"),
                                      });
                                      o(n);
                                    }),
                                    a.dataCaptureWorker.postMessage({
                                      type: "parse",
                                      requestId: a.workerParseRequestId,
                                      dataFormat: n,
                                      data: r,
                                      options: null == i ? "{}" : Tc(i),
                                    });
                                })
                              )
                            );
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              )),
              function (e, t, r) {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "reportCameraProperties",
            value: function (e) {
              var t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              return (
                this.dataCaptureWorker.postMessage({
                  type: "camera-properties",
                  cameraType: e,
                  autofocus: t,
                }),
                this
              );
            },
          },
          {
            key: "removeListener",
            value: function (e, t) {
              return this.eventEmitter.removeListener(e, t), this;
            },
          },
          {
            key: "removeAllListeners",
            value: function (e) {
              return this.eventEmitter.removeAllListeners(e), this;
            },
          },
          {
            key: "handleBlurryTablesUpdate",
            value: function () {
              this.blurryRecognitionAvailable ||
                ((this.blurryRecognitionAvailable =
                  e.blurryRecognitionPreloader.isBlurryRecognitionAvailable(
                    this.scanSettings
                  )),
                this.blurryRecognitionAvailable &&
                  ((this.activeBlurryRecognitionSymbologies = new js(
                    [].concat(
                      yc(this.activeBlurryRecognitionSymbologies),
                      yc(
                        e.blurryRecognitionPreloader.getEnabledSymbologies(
                          this.scanSettings
                        )
                      )
                    )
                  )),
                  this.dataCaptureWorker.postMessage({
                    type: "scan-settings",
                    settings: this.scanSettings.toJSONString(),
                    blurryRecognitionAvailable: !0,
                    blurryRecognitionRequiresUpdate: !0,
                  })));
            },
          },
          {
            key: "dataCaptureWorkerOnMessage",
            value: function (t) {
              var n = t.data;
              if ("log" === n[0])
                return (
                  n[1].data.forEach(function (e, t) {
                    if (null != e.name && null != e.message) {
                      var r = new hc({ name: e.name, message: e.message });
                      (r.stack = e.stack), (n[1].data[t] = r);
                    }
                  }),
                  void e.Logger.log.apply(
                    e.Logger,
                    [n[1].level].concat(yc(n[1].data))
                  )
                );
              if ("library-loaded" === n[0])
                return (
                  (this.isReadyToWork = !0),
                  void this.eventEmitter.emit("ready")
                );
              if (null != n[1])
                switch (n[0]) {
                  case "context-created":
                    (this.licenseKeyFeatures = n[1]),
                      this.eventEmitter.emit(
                        "contextCreated",
                        this.licenseKeyFeatures
                      );
                    break;
                  case "work-result":
                    this.eventEmitter.emit(
                      "workResult-".concat(n[1].requestId),
                      n[1].result,
                      n[2]
                    );
                    break;
                  case "work-error":
                    this.eventEmitter.emit(
                      "workError-".concat(n[1].requestId),
                      n[1].error,
                      n[2]
                    );
                    break;
                  case "parse-result":
                    this.eventEmitter.emit(
                      "parseResult-".concat(n[1].requestId),
                      n[1].result
                    );
                    break;
                  case "parse-error":
                    this.eventEmitter.emit(
                      "parseError-".concat(n[1].requestId),
                      n[1].error
                    );
                }
            },
          },
        ],
        [{ key: "ready", value: function () {} }]
      ),
      t
    );
  })();
  To(Bc, "workerScanRequestId", 0),
    (e.SingleImageModeSettings = void 0),
    (function (e) {
      function t(e, t) {
        return {
          informationElement: document.createRange().createContextualFragment(e)
            .firstElementChild,
          buttonElement: document
            .createRange()
            .createContextualFragment(atob(t)).firstElementChild,
          containerStyle: { backgroundColor: "#333333" },
          informationStyle: { color: "#FFFFFF" },
          buttonStyle: {
            borderColor: "#FFFFFF",
            color: "#FFFFFF",
            fill: "#FFFFFF",
          },
        };
      }
      var n;
      ((n = e.UsageStrategy || (e.UsageStrategy = {})).NEVER = "never"),
        (n.FALLBACK = "fallback"),
        (n.ALWAYS = "always"),
        (e.defaultDesktop = t(
          "<p>To scan:<br>1. Click on the folder icon<br>2. Select the picture to scan</p>",
          "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzIgMTcyIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTEwLjMgMTMuOEM0LjcgMTMuOCAwIDE4LjQgMCAyNHYxMjdjLS4yLjctLjEgMS42LjIgMi4zIDEgNC43IDUuMiA4LjMgMTAuMSA4LjNoMTM0LjJjNS4xIDAgOS4zLTMuOSAxMC04LjhsLjItLjd2LS4ybC4xLS41di0uMWwxNy05Mi4zLjItLjN2LS4zYzAtNS43LTQuNy0xMC4zLTEwLjMtMTAuM1YzNy44YzAtNS42LTQuNy0xMC4zLTEwLjMtMTAuM0g2MmE3IDcgMCAwIDEtMS0xYy0uOS0xLTEuOS0yLjUtMy00LjItMS0xLjgtMi4yLTMuNi0zLjYtNS4ycy0zLjQtMy4zLTYuMi0zLjN6bTAgNi44aDM3LjljLS4zIDAgLjIgMCAxIDEgLjkgMSAxLjkgMi42IDMgNC4zYTQxIDQxIDAgMCAwIDMuNiA1LjJjMS40IDEuNiAzLjMgMy4zIDYuMSAzLjNoODkuNWMxLjkgMCAzLjQgMS41IDMuNCAzLjR2MTAuNEgyNy41Yy01LjQgMC05LjcgNC4zLTEwIDkuNmgtLjJsLS4xLjctMTAuMyA1NS43VjI0YzAtMiAxLjUtMy41IDMuNC0zLjV6TTI3LjUgNTVoMTM0LjJjMiAwIDMuNCAxLjUgMy40IDMuNWwtMTYuOSA5MS4ydi4zbC0uMi40VjE1MWwtLjIuNnYuN2EzLjQgMy40IDAgMCAxLTMuMyAyLjRIMTAuM2MtMiAwLTMuNC0xLjUtMy40LTMuNGwxNy05Mi4zLjItLjN2LS4zYzAtMiAxLjUtMy41IDMuNC0zLjV6Ii8+PC9zdmc+Cg=="
        )),
        (e.defaultMobile = t(
          "<p>To scan:<br>1. Tap the camera icon<br>2. Take a picture of the code(s)</p>",
          "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0xNyA1Yy0uOCAwLTEuNC41LTEuOCAxLS40LjUtLjcgMS0xLjEgMS41cy0uNiAxLS44IDEuM2wtLjMuM0gzYy0xLjYgMC0zIDEuNC0zIDN2MjdjMCAxLjYgMS40IDMgMyAzaDQ0YzEuNiAwIDMtMS40IDMtM3YtMjdjMC0xLjYtMS40LTMtMy0zSDM3bC0uMy0uM2MtLjItLjMtLjUtLjctLjgtMS4ycy0uNi0xLTEuMS0xLjVjLS40LS41LTEtMS0xLjgtMXptMCAyaDE2Yy0uMSAwIC4xIDAgLjMuM3MuNS44LjggMS4zLjcgMSAxLjEgMS41IDEgMSAxLjggMWgxMGMuNiAwIDEgLjQgMSAxdjI3YzAgLjYtLjQgMS0xIDFIM2MtLjYgMC0xLS40LTEtMXYtMjdjMC0uNi40LTEgMS0xaDEwYy44IDAgMS40LS41IDEuOC0xcy44LTEgMS4xLTEuNS42LTEgLjgtMS4yLjQtLjMuMy0uM3ptOCA0Yy03LjIgMC0xMyA1LjgtMTMgMTNzNS44IDEzIDEzIDEzIDEzLTUuOCAxMy0xMy01LjgtMTMtMTMtMTN6bTAgMmM2LjEgMCAxMSA0LjkgMTEgMTFzLTQuOSAxMS0xMSAxMS0xMS00LjktMTEtMTEgNC45LTExIDExLTExek04IDE0Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMmgxYzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMnptMTcgMWMtNSAwLTkgNC05IDlzNCA5IDkgOSA5LTQgOS05LTQtOS05LTl6bTAgMmMzLjkgMCA3IDMuMSA3IDdzLTMuMSA3LTcgNy03LTMuMS03LTcgMy4xLTcgNy03eiIvPjwvc3ZnPgo="
        ));
    })(e.SingleImageModeSettings || (e.SingleImageModeSettings = {}));
  var jc = l.exports.Object.getOwnPropertySymbols,
    Uc = Ei,
    Gc = hi,
    zc = y,
    Wc = c.exports.Reflect,
    Hc =
      (Wc && Wc.ownKeys) ||
      function (e) {
        var t = Uc.f(zc(e)),
          n = Gc.f;
        return n ? t.concat(n(e)) : t;
      },
    Yc = $,
    Qc = Ni,
    Zc = Po;
  W(W.S, "Object", {
    getOwnPropertyDescriptors: function (e) {
      for (
        var t, n, r = Yc(e), i = Qc.f, a = Hc(r), o = {}, s = 0;
        a.length > s;

      )
        void 0 !== (n = i(r, (t = a[s++]))) && Zc(o, t, n);
      return o;
    },
  });
  var qc = l.exports.Object.getOwnPropertyDescriptors,
    Xc = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",
    Kc = W,
    Jc = a,
    $c = b,
    eu = Xc,
    tu = "[" + eu + "]",
    nu = RegExp("^" + tu + tu + "*"),
    ru = RegExp(tu + tu + "*$"),
    iu = function (e, t, n) {
      var r = {},
        i = $c(function () {
          return !!eu[e]() || "​" != "​"[e]();
        }),
        a = (r[e] = i ? t(au) : eu[e]);
      n && (r[n] = a), Kc(Kc.P + Kc.F * i, "String", r);
    },
    au = (iu.trim = function (e, t) {
      return (
        (e = String(Jc(e))),
        1 & t && (e = e.replace(nu, "")),
        2 & t && (e = e.replace(ru, "")),
        e
      );
    }),
    ou = iu,
    su = c.exports.parseInt,
    cu = ou.trim,
    uu = Xc,
    lu = /^[-+]?0[xX]/,
    du = W,
    hu =
      8 !== su(uu + "08") || 22 !== su(uu + "0x16")
        ? function (e, t) {
            var n = cu(String(e), 3);
            return su(n, t >>> 0 || (lu.test(n) ? 16 : 10));
          }
        : su;
  du(du.G + du.F * (parseInt != hu), { parseInt: hu });
  var fu,
    gu,
    mu,
    pu,
    vu = l.exports.parseInt;
  function yu(e, t) {
    var n = Object.keys(e);
    if (jc) {
      var r = jc(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function bu(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? yu(Object(n), !0).forEach(function (t) {
            To(e, t, n[t]);
          })
        : qc
        ? Object.defineProperties(e, qc(n))
        : yu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function Eu(e, t) {
    var n = Object.keys(e);
    if (jc) {
      var r = jc(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function Su(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? Eu(Object(n), !0).forEach(function (t) {
            To(e, t, n[t]);
          })
        : qc
        ? Object.defineProperties(e, qc(n))
        : Eu(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  (e.CameraAccess = void 0),
    (function (t) {
      var n,
        r = new qs([
          ["DeviceCaptureError", "AbortError"],
          ["NotSupportedError", "AbortError"],
          ["ScreenCaptureError", "AbortError"],
          ["TabCaptureError", "AbortError"],
          ["TypeError", "AbortError"],
          ["InvalidStateError", "NotAllowedError"],
          ["MediaDeviceFailedDueToShutdown", "NotAllowedError"],
          ["MediaDeviceKillSwitchOn", "NotAllowedError"],
          ["PermissionDeniedError", "NotAllowedError"],
          ["PermissionDismissedError", "NotAllowedError"],
          ["DevicesNotFoundError", "NotFoundError"],
          ["SourceUnavailableError", "NotReadableError"],
          ["TrackStartError", "NotReadableError"],
          ["ConstraintNotSatisfiedError", "OverconstrainedError"],
        ]),
        i = [
          "rear",
          "back",
          "rück",
          "arrière",
          "trasera",
          "trás",
          "traseira",
          "posteriore",
          "后面",
          "後面",
          "背面",
          "后置",
          "後置",
          "背置",
          "задней",
          "الخلفية",
          "후",
          "arka",
          "achterzijde",
          "หลัง",
          "baksidan",
          "bagside",
          "sau",
          "bak",
          "tylny",
          "takakamera",
          "belakang",
          "אחורית",
          "πίσω",
          "spate",
          "hátsó",
          "zadní",
          "darrere",
          "zadná",
          "задня",
          "stražnja",
          "belakang",
          "बैक",
        ],
        a = !1;
      function o() {
        a = !0;
      }
      function s(e) {
        var t, n;
        (t =
          "Invalid constraint" === e.message
            ? "OverconstrainedError"
            : null !== (n = r.get(e.name)) && void 0 !== n
            ? n
            : e.name),
          Object.defineProperty(e, "name", { value: t });
      }
      function c(t, n) {
        var r = t.getVideoTracks();
        if (0 !== r.length) {
          var i,
            a,
            o = r[0];
          "function" == typeof o.getSettings &&
            null !=
              (null === (a = i = o.getSettings()) || void 0 === a
                ? void 0
                : a.facingMode) &&
            i.facingMode.length > 0 &&
            (n.cameraType =
              "environment" === i.facingMode
                ? e.Camera.Type.BACK
                : e.Camera.Type.FRONT),
            null != o.label && o.label.length > 0 && (n.label = o.label);
        }
      }
      function u(n) {
        var r = n
          .map(function (n, r, a) {
            var o;
            if (t.deviceIdToCameraObjects.has(n.deviceId))
              return t.deviceIdToCameraObjects.get(n.deviceId);
            var s,
              c = null !== (o = n.label) && void 0 !== o ? o : "";
            return (
              (s =
                !e.BrowserHelper.isDesktopDevice() &&
                a.every(function (e) {
                  return (
                    "" === e.label && !t.deviceIdToCameraObjects.has(e.deviceId)
                  );
                })
                  ? 1 === a.length || r + 1 <= Math.floor(a.length / 2)
                    ? e.Camera.Type.FRONT
                    : e.Camera.Type.BACK
                  : (function (e) {
                      var t = e.toLowerCase();
                      return i.some(function (e) {
                        return t.includes(e);
                      });
                    })(c)
                  ? e.Camera.Type.BACK
                  : e.Camera.Type.FRONT),
              { deviceId: n.deviceId, label: c, cameraType: s }
            );
          })
          .map(function (e) {
            return (
              "" !== e.deviceId && t.deviceIdToCameraObjects.set(e.deviceId, e),
              e
            );
          })
          .filter(function (e) {
            return !/\b(?:ir|infrared)\b/i.test(e.label);
          })
          .filter(function (e) {
            return !t.inaccessibleDeviceIds.has(e.deviceId);
          });
        if (
          !e.BrowserHelper.isDesktopDevice() &&
          r.length > 1 &&
          !r.some(function (t) {
            return t.cameraType === e.Camera.Type.BACK;
          })
        ) {
          var a = r.length - 1,
            o = r.map(function (e) {
              var t = e.label.match(/\b([0-9]+)MP?\b/i);
              return null != t ? vu(t[1], 10) : NaN;
            });
          o.some(function (e) {
            return isNaN(e);
          }) || (a = o.lastIndexOf(Math.max.apply(Math, yc(o)))),
            (r[a].cameraType = e.Camera.Type.BACK);
        }
        return r;
      }
      function l() {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = Zr(
          ao.mark(function e() {
            return ao.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        !(
                          null != n &&
                          n.length > 0 &&
                          n.every(function (e) {
                            return (
                              "" === e.label &&
                              !t.deviceIdToCameraObjects.has(e.deviceId)
                            );
                          })
                        )
                      ) {
                        e.next = 9;
                        break;
                      }
                      return (
                        (e.prev = 1),
                        (e.next = 4),
                        navigator.mediaDevices.getUserMedia({
                          video: !0,
                          audio: !1,
                        })
                      );
                    case 4:
                      return e.abrupt("return", e.sent);
                    case 7:
                      (e.prev = 7), (e.t0 = e.catch(1));
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 7]]
            );
          })
        )).apply(this, arguments);
      }
      function h(n, r) {
        if (
          r.length > 0 &&
          n.length === r.length &&
          !r.every(function (e, t) {
            return n[t].deviceId === e.deviceId;
          })
        ) {
          var i = {};
          n.forEach(function (e, n) {
            var a,
              o = t.deviceIdToCameraObjects.get(e.deviceId);
            if (
              null != o &&
              o.label === (null !== (a = r[n].label) && void 0 !== a ? a : "")
            ) {
              var s = r[n].deviceId;
              (i[o.deviceId] = s),
                t.inaccessibleDeviceIds.has(o.deviceId) &&
                  t.inaccessibleDeviceIds.add(s),
                (o.deviceId = s),
                t.deviceIdToCameraObjects.set(s, o);
            }
          }),
            e.Logger.log(
              e.Logger.Level.DEBUG,
              "Detected updated camera deviceId information and updated it accordingly",
              i
            );
        }
      }
      function f() {
        return (
          (f = Zr(
            ao.mark(function t() {
              var r,
                i,
                c,
                d,
                f,
                g,
                m,
                p = arguments;
              return ao.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((r = p.length > 0 && void 0 !== p[0] && p[0]),
                          (i = p.length > 1 && void 0 !== p[1] && p[1]),
                          (c = e.BrowserHelper.checkBrowserCompatibility())
                            .fullSupport)
                        ) {
                          t.next = 5;
                          break;
                        }
                        throw new fc(c);
                      case 5:
                        if (
                          ("function" ==
                          typeof navigator.mediaDevices.addEventListener
                            ? navigator.mediaDevices.addEventListener(
                                "devicechange",
                                o
                              )
                            : (navigator.mediaDevices.ondevicechange = o),
                          null != n && !r && !a)
                        ) {
                          t.next = 33;
                          break;
                        }
                        return (
                          (a = !1),
                          (g = null !== (d = n) && void 0 !== d ? d : []),
                          (n = []),
                          (t.prev = 10),
                          (t.next = 13),
                          y()
                        );
                      case 13:
                        if (((n = t.sent), i)) {
                          t.next = 22;
                          break;
                        }
                        return (t.next = 17), l();
                      case 17:
                        if (null == (f = t.sent)) {
                          t.next = 22;
                          break;
                        }
                        return (t.next = 21), y();
                      case 21:
                        n = t.sent;
                      case 22:
                        e.Logger.log.apply(
                          e.Logger,
                          [
                            e.Logger.Level.DEBUG,
                            "Camera list (devices):",
                          ].concat(yc(n))
                        ),
                          h(g, n),
                          (t.next = 30);
                        break;
                      case 26:
                        throw (
                          ((t.prev = 26), (t.t0 = t.catch(10)), s(t.t0), t.t0)
                        );
                      case 30:
                        return (
                          (t.prev = 30),
                          null != f &&
                            f.getVideoTracks().forEach(function (e) {
                              e.stop();
                            }),
                          t.finish(30)
                        );
                      case 33:
                        return (
                          (m = u(n)),
                          e.Logger.log.apply(
                            e.Logger,
                            [
                              e.Logger.Level.DEBUG,
                              "Camera list (cameras): ",
                            ].concat(yc(m))
                          ),
                          t.abrupt("return", yc(m))
                        );
                      case 36:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[10, 26, 30, 33]]
              );
            })
          )),
          f.apply(this, arguments)
        );
      }
      function g(t) {
        return (
          e.Logger.log(
            e.Logger.Level.DEBUG,
            "Attempt to access camera (parameters):",
            t.video
          ),
          new Yr(function (e, n) {
            window.setTimeout(function () {
              var r;
              (null !== (r = navigator.mediaDevices.getUserMedia(t)) &&
              void 0 !== r
                ? r
                : Yr.reject(new hc({ name: "AbortError" }))
              )
                .then(e)
                .catch(n);
            }, 0);
          })
        );
      }
      function m(e) {
        var t = { resizeMode: "none" };
        switch (e) {
          case pu.ULTRA_HD:
            return bu(
              bu({}, t),
              {},
              {
                width: { min: 3200, ideal: 3840, max: 4096 },
                height: { min: 1800, ideal: 2160, max: 2400 },
              }
            );
          case pu.FULL_HD:
            return bu(
              bu({}, t),
              {},
              {
                width: { min: 1400, ideal: 1920, max: 2160 },
                height: { min: 900, ideal: 1080, max: 1440 },
              }
            );
          case pu.HD:
            return bu(
              bu({}, t),
              {},
              {
                width: { min: 960, ideal: 1280, max: 1440 },
                height: { min: 480, ideal: 720, max: 960 },
              }
            );
          case pu.SD:
            return bu(
              bu({}, t),
              {},
              {
                width: { min: 640, ideal: 640, max: 800 },
                height: { min: 480, ideal: 480, max: 600 },
              }
            );
          case pu.NONE:
          default:
            return {};
        }
      }
      function p() {
        return (p = Zr(
          ao.mark(function t(n, r) {
            var i, a;
            return ao.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        e.Logger.log(
                          e.Logger.Level.DEBUG,
                          "Attempt to access camera (camera):",
                          r
                        ),
                        (i = { audio: !1, video: m(n) }),
                        "" === r.deviceId
                          ? (i.video.facingMode = {
                              ideal:
                                r.cameraType === e.Camera.Type.BACK
                                  ? "environment"
                                  : "user",
                            })
                          : (i.video.deviceId = { exact: r.deviceId }),
                        (t.prev = 3),
                        (t.next = 6),
                        g(i)
                      );
                    case 6:
                      return c((a = t.sent), r), t.abrupt("return", a);
                    case 11:
                      throw (
                        ((t.prev = 11),
                        (t.t0 = t.catch(3)),
                        s(t.t0),
                        [
                          "OverconstrainedError",
                          "NotReadableError",
                          "NotAllowedError",
                        ].includes(t.t0.name) || v(r),
                        t.t0)
                      );
                    case 16:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[3, 11]]
            );
          })
        )).apply(this, arguments);
      }
      function v(n) {
        "" !== n.deviceId &&
          (e.Logger.log(
            e.Logger.Level.DEBUG,
            "Camera marked to be inaccessible:",
            n
          ),
          t.inaccessibleDeviceIds.add(n.deviceId));
      }
      function y() {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = Zr(
          ao.mark(function t() {
            var n, r;
            return ao.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if ("function" != typeof navigator.enumerateDevices) {
                        t.next = 6;
                        break;
                      }
                      return (t.next = 3), navigator.enumerateDevices();
                    case 3:
                    case 9:
                      (n = t.sent), (t.next = 24);
                      break;
                    case 6:
                      if (
                        "object" != typeof navigator.mediaDevices ||
                        "function" !=
                          typeof navigator.mediaDevices.enumerateDevices
                      ) {
                        t.next = 12;
                        break;
                      }
                      return (
                        (t.next = 9), navigator.mediaDevices.enumerateDevices()
                      );
                    case 12:
                      if (
                        ((t.prev = 12),
                        null !=
                          (null === (r = window.MediaStreamTrack) ||
                          void 0 === r
                            ? void 0
                            : r.getSources))
                      ) {
                        t.next = 15;
                        break;
                      }
                      throw new Error();
                    case 15:
                      return (
                        (t.next = 17),
                        new Yr(function (e) {
                          var t, n;
                          null === (t = window.MediaStreamTrack) ||
                            void 0 === t ||
                            null === (n = t.getSources) ||
                            void 0 === n ||
                            n.call(t, e);
                        })
                      );
                    case 17:
                      (n = (n = t.sent)
                        .filter(function (e) {
                          return (
                            "video" === e.kind.toLowerCase() ||
                            "videoinput" === e.kind.toLowerCase()
                          );
                        })
                        .map(function (e) {
                          var t;
                          return {
                            deviceId:
                              null !== (t = e.deviceId) && void 0 !== t
                                ? t
                                : "",
                            groupId: e.groupId,
                            kind: "videoinput",
                            label: e.label,
                            toJSON: function () {
                              return this;
                            },
                          };
                        })),
                        (t.next = 24);
                      break;
                    case 21:
                      throw (
                        ((t.prev = 21),
                        (t.t0 = t.catch(12)),
                        new fc({
                          fullSupport: !1,
                          scannerSupport: !0,
                          missingFeatures: [
                            e.BrowserCompatibility.Feature.MEDIA_DEVICES,
                          ],
                        }))
                      );
                    case 24:
                      return t.abrupt(
                        "return",
                        n.filter(function (e) {
                          return "videoinput" === e.kind;
                        })
                      );
                    case 25:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[12, 21]]
            );
          })
        )).apply(this, arguments);
      }
      (t.mainCameraForTypeOverridesOnDesktop = new qs()),
        (t.deviceIdToCameraObjects = new qs()),
        (t.inaccessibleDeviceIds = new js()),
        (t.getMainCameraForType = function (n, r) {
          var i;
          if (e.BrowserHelper.isDesktopDevice())
            i = t.mainCameraForTypeOverridesOnDesktop.has(r)
              ? t.mainCameraForTypeOverridesOnDesktop.get(r)
              : n.filter(function (e) {
                  return e.cameraType === r;
                })[0];
          else {
            var a = n.every(function (e) {
                return "" === e.label;
              }),
              o = n.every(function (e) {
                return "" !== e.label;
              }),
              s = n.length > 1 && !a && !o;
            if (a) i = n[r === e.Camera.Type.FRONT ? 0 : n.length - 1];
            else if (s) {
              var c = n.filter(function (e) {
                return e.cameraType === r;
              });
              1 === c.length
                ? (i = c[0])
                : c.length > 1 &&
                  (i = c[r === e.Camera.Type.FRONT ? 0 : c.length - 1]);
            } else
              i = n
                .filter(function (e) {
                  return e.cameraType === r;
                })
                .sort(function (e, t) {
                  return e.label.localeCompare(t.label);
                })[0];
          }
          return i;
        }),
        (t.sortCamerasForCameraType = function (n, r) {
          function i(e, n) {
            var r = t.mainCameraForTypeOverridesOnDesktop.get(n);
            return (
              null != r &&
                e.includes(r) &&
                (e = e.filter(function (e) {
                  return e !== r;
                })).unshift(r),
              e
            );
          }
          var a = n.filter(function (t) {
              return t.cameraType === e.Camera.Type.FRONT;
            }),
            o = n.filter(function (t) {
              return t.cameraType === e.Camera.Type.BACK;
            });
          return (
            e.BrowserHelper.isDesktopDevice()
              ? ((a = i(a, e.Camera.Type.FRONT)),
                (o = i(o, e.Camera.Type.BACK)))
              : n.every(function (e) {
                  return "" === e.label;
                })
              ? o.reverse()
              : (a.sort(function (e, t) {
                  return e.label.localeCompare(t.label);
                }),
                o.sort(function (e, t) {
                  return e.label.localeCompare(t.label);
                })),
            r === e.Camera.Type.FRONT
              ? [].concat(yc(a), yc(o))
              : [].concat(yc(o), yc(a))
          );
        }),
        (t.adjustCameraFromMediaStream = c),
        (t.getCameras = function () {
          return f.apply(this, arguments);
        }),
        (t.accessCameraStream = function (e, t) {
          return p.apply(this, arguments);
        }),
        (t.markCameraAsInaccessible = v);
    })(e.CameraAccess || (e.CameraAccess = {})),
    (e.CameraSettings = void 0),
    ((gu =
      (fu = e.CameraSettings || (e.CameraSettings = {})).ResolutionPreference ||
      (fu.ResolutionPreference = {})).ULTRA_HD = "ultra-hd"),
    (gu.FULL_HD = "full-hd"),
    (gu.HD = "hd"),
    (function (e) {
      (e.CONTINUOUS = "continuous"),
        (e.MANUAL = "manual"),
        (e.NONE = "none"),
        (e.SINGLE_SHOT = "single-shot");
    })(mu || (mu = {})),
    (function (e) {
      (e[(e.ULTRA_HD = 0)] = "ULTRA_HD"),
        (e[(e.FULL_HD = 1)] = "FULL_HD"),
        (e[(e.HD = 2)] = "HD"),
        (e[(e.SD = 3)] = "SD"),
        (e[(e.NONE = 4)] = "NONE");
    })(pu || (pu = {}));
  var Au = (function () {
    function t(n, r, i) {
      Io(this, t),
        To(this, "selectedCamera", void 0),
        To(this, "activeCamera", void 0),
        To(this, "activeCameraSettings", void 0),
        To(this, "scanner", void 0),
        To(this, "triggerCameraAccessError", void 0),
        To(this, "gui", void 0),
        To(
          this,
          "postStreamInitializationListener",
          this.postStreamInitialization.bind(this)
        ),
        To(this, "videoResizeListener", this.videoResizeHandle.bind(this)),
        To(
          this,
          "videoTrackEndedListener",
          this.videoTrackEndedRecovery.bind(this)
        ),
        To(
          this,
          "videoTrackMuteListener",
          this.videoTrackMuteRecovery.bind(this)
        ),
        To(
          this,
          "triggerManualFocusListener",
          this.triggerManualFocus.bind(this)
        ),
        To(this, "triggerZoomStartListener", this.triggerZoomStart.bind(this)),
        To(this, "triggerZoomMoveListener", this.triggerZoomMove.bind(this)),
        To(
          this,
          "checkCameraVideoStreamAccessIfVisibleListener",
          this.checkCameraVideoStreamAccessIfVisible.bind(this)
        ),
        To(this, "cameraType", void 0),
        To(this, "selectedCameraSettings", void 0),
        To(this, "mediaStream", void 0),
        To(this, "mediaTrackCapabilities", void 0),
        To(this, "cameraAccessTimeout", void 0),
        To(this, "cameraAccessRejectCallback", void 0),
        To(this, "videoMetadataCheckInterval", void 0),
        To(this, "getCapabilitiesTimeout", void 0),
        To(this, "autofocusInterval", void 0),
        To(this, "manualToAutofocusResumeTimeout", void 0),
        To(this, "manualFocusWaitTimeout", void 0),
        To(this, "cameraSwitcherEnabled", void 0),
        To(this, "torchToggleEnabled", void 0),
        To(this, "tapToFocusEnabled", void 0),
        To(this, "pinchToZoomEnabled", void 0),
        To(this, "pinchToZoomDistance", void 0),
        To(this, "pinchToZoomInitialZoom", void 0),
        To(this, "torchEnabled", void 0),
        To(this, "cameraInitializationPromise", void 0),
        To(this, "abortedCameraInitializationResolveCallback", void 0),
        To(this, "cameraSetupPromise", void 0),
        (this.scanner = n),
        (this.triggerCameraAccessError = r),
        (this.gui = i),
        (this.cameraType = e.Camera.Type.BACK);
    }
    var n,
      r,
      i,
      a,
      o,
      s,
      c,
      u,
      l,
      d,
      h,
      f,
      g,
      m,
      p,
      v,
      y,
      b,
      E,
      S,
      A,
      _,
      C,
      T,
      w,
      N;
    return (
      No(t, [
        {
          key: "setInteractionOptions",
          value: function (e, t, n, r) {
            (this.cameraSwitcherEnabled = e),
              (this.torchToggleEnabled = t),
              (this.tapToFocusEnabled = n),
              (this.pinchToZoomEnabled = r);
          },
        },
        {
          key: "isCameraSwitcherEnabled",
          value: function () {
            return this.cameraSwitcherEnabled;
          },
        },
        {
          key: "setCameraSwitcherEnabled",
          value:
            ((N = Zr(
              ao.mark(function t(n) {
                return ao.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((this.cameraSwitcherEnabled = n),
                            !this.cameraSwitcherEnabled)
                          ) {
                            t.next = 8;
                            break;
                          }
                          return (t.next = 4), e.CameraAccess.getCameras();
                        case 4:
                          t.sent.length > 1 &&
                            this.gui.setCameraSwitcherVisible(!0),
                            (t.next = 9);
                          break;
                        case 8:
                          this.gui.setCameraSwitcherVisible(!1);
                        case 9:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            )),
            function (e) {
              return N.apply(this, arguments);
            }),
        },
        {
          key: "isTorchToggleEnabled",
          value: function () {
            return this.torchToggleEnabled;
          },
        },
        {
          key: "setTorchToggleEnabled",
          value: function (e) {
            var t;
            (this.torchToggleEnabled = e),
              this.torchToggleEnabled
                ? null != this.mediaStream &&
                  !0 ===
                    (null === (t = this.mediaTrackCapabilities) || void 0 === t
                      ? void 0
                      : t.torch) &&
                  this.gui.setTorchTogglerVisible(!0)
                : this.gui.setTorchTogglerVisible(!1);
          },
        },
        {
          key: "isTapToFocusEnabled",
          value: function () {
            return this.tapToFocusEnabled;
          },
        },
        {
          key: "setTapToFocusEnabled",
          value: function (e) {
            (this.tapToFocusEnabled = e),
              null != this.mediaStream &&
                (this.tapToFocusEnabled
                  ? this.enableTapToFocusListeners()
                  : this.disableTapToFocusListeners());
          },
        },
        {
          key: "isPinchToZoomEnabled",
          value: function () {
            return this.pinchToZoomEnabled;
          },
        },
        {
          key: "setPinchToZoomEnabled",
          value: function (e) {
            (this.pinchToZoomEnabled = e),
              null != this.mediaStream &&
                (this.pinchToZoomEnabled
                  ? this.enablePinchToZoomListeners()
                  : this.disablePinchToZoomListeners());
          },
        },
        {
          key: "setInitialCameraType",
          value: function (e) {
            this.cameraType = e;
          },
        },
        {
          key: "setCameraType",
          value:
            ((w = Zr(
              ao.mark(function t(n) {
                var r;
                return ao.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            this.setInitialCameraType(n),
                            (t.t0 = e.CameraAccess),
                            (t.next = 4),
                            e.CameraAccess.getCameras()
                          );
                        case 4:
                          if (
                            ((t.t1 = t.sent),
                            (t.t2 = n),
                            null ==
                              (r = t.t0.getMainCameraForType.call(
                                t.t0,
                                t.t1,
                                t.t2
                              )) || r === this.selectedCamera)
                          ) {
                            t.next = 9;
                            break;
                          }
                          return t.abrupt(
                            "return",
                            this.initializeCameraWithSettings(
                              r,
                              this.selectedCameraSettings
                            )
                          );
                        case 9:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            )),
            function (e) {
              return w.apply(this, arguments);
            }),
        },
        {
          key: "setSelectedCamera",
          value: function (e) {
            this.selectedCamera = e;
          },
        },
        {
          key: "setSelectedCameraSettings",
          value: function (e) {
            this.selectedCameraSettings = e;
          },
        },
        {
          key: "setupCameras",
          value:
            ((T = Zr(
              ao.mark(function e() {
                return ao.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (null == this.cameraSetupPromise) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return", this.cameraSetupPromise);
                        case 2:
                          return (
                            (this.cameraSetupPromise =
                              this.setupCamerasAndStream()),
                            e.abrupt("return", this.cameraSetupPromise)
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function () {
              return T.apply(this, arguments);
            }),
        },
        {
          key: "stopStream",
          value:
            ((C = Zr(
              ao.mark(function t() {
                var n,
                  r = this,
                  i = arguments;
                return ao.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((n = i.length > 0 && void 0 !== i[0] && i[0]),
                            null != this.activeCamera &&
                              (this.activeCamera.currentResolution = void 0),
                            (this.activeCamera = void 0),
                            null == this.mediaStream)
                          ) {
                            t.next = 14;
                            break;
                          }
                          return (
                            e.Logger.log(
                              e.Logger.Level.DEBUG,
                              "Stop camera video stream access".concat(
                                n ? " (abort access detection)" : "",
                                ":"
                              ),
                              this.mediaStream
                            ),
                            document.removeEventListener(
                              "visibilitychange",
                              this.checkCameraVideoStreamAccessIfVisibleListener
                            ),
                            window.clearTimeout(this.cameraAccessTimeout),
                            window.clearInterval(
                              this.videoMetadataCheckInterval
                            ),
                            window.clearTimeout(this.getCapabilitiesTimeout),
                            window.clearTimeout(this.manualFocusWaitTimeout),
                            window.clearTimeout(
                              this.manualToAutofocusResumeTimeout
                            ),
                            window.clearInterval(this.autofocusInterval),
                            this.gui.videoElement.pause(),
                            t.abrupt(
                              "return",
                              new Yr(function (e) {
                                setTimeout(function () {
                                  var t, i;
                                  null === (t = r.mediaStream) ||
                                    void 0 === t ||
                                    t.getVideoTracks().forEach(function (e) {
                                      e.removeEventListener(
                                        "ended",
                                        r.videoTrackEndedListener
                                      ),
                                        e.stop();
                                    }),
                                    (r.gui.videoElement.srcObject = null),
                                    (r.mediaStream = void 0),
                                    (r.mediaTrackCapabilities = void 0),
                                    n ||
                                      null ===
                                        (i =
                                          r.abortedCameraInitializationResolveCallback) ||
                                      void 0 === i ||
                                      i.call(r),
                                    e();
                                }, 0);
                              })
                            )
                          );
                        case 14:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            )),
            function () {
              return C.apply(this, arguments);
            }),
        },
        {
          key: "applyCameraSettings",
          value:
            ((_ = Zr(
              ao.mark(function e(n) {
                return ao.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((this.selectedCameraSettings = n),
                            null != this.activeCamera)
                          ) {
                            e.next = 3;
                            break;
                          }
                          throw new hc(t.noCameraErrorParameters);
                        case 3:
                          return e.abrupt(
                            "return",
                            this.initializeCameraWithSettings(
                              this.activeCamera,
                              n
                            )
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function (e) {
              return _.apply(this, arguments);
            }),
        },
        {
          key: "reinitializeCamera",
          value:
            ((A = Zr(
              ao.mark(function t() {
                return ao.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (null != this.activeCamera) {
                            t.next = 4;
                            break;
                          }
                          e.Logger.log(
                            e.Logger.Level.DEBUG,
                            "Camera reinitialization delayed"
                          ),
                            (t.next = 15);
                          break;
                        case 4:
                          return (
                            e.Logger.log(
                              e.Logger.Level.DEBUG,
                              "Reinitialize camera:",
                              this.activeCamera
                            ),
                            (t.prev = 5),
                            (t.next = 8),
                            this.initializeCameraWithSettings(
                              this.activeCamera,
                              this.activeCameraSettings
                            )
                          );
                        case 8:
                          t.next = 15;
                          break;
                        case 10:
                          throw (
                            ((t.prev = 10),
                            (t.t0 = t.catch(5)),
                            e.Logger.log(
                              e.Logger.Level.WARN,
                              "Couldn't access camera:",
                              this.activeCamera,
                              t.t0
                            ),
                            this.triggerCameraAccessError(t.t0),
                            t.t0)
                          );
                        case 15:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[5, 10]]
                );
              })
            )),
            function () {
              return A.apply(this, arguments);
            }),
        },
        {
          key: "initializeCameraWithSettings",
          value:
            ((S = Zr(
              ao.mark(function e(t, n) {
                return ao.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (null == this.cameraInitializationPromise) {
                            e.next = 3;
                            break;
                          }
                          return (e.next = 3), this.cameraInitializationPromise;
                        case 3:
                          return (
                            this.setSelectedCamera(t),
                            (this.selectedCameraSettings =
                              this.activeCameraSettings =
                                n),
                            (this.cameraInitializationPromise =
                              this.initializeCameraAndCheckUpdatedSettings(t)),
                            e.abrupt("return", this.cameraInitializationPromise)
                          );
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function (e, t) {
              return S.apply(this, arguments);
            }),
        },
        {
          key: "setTorchEnabled",
          value:
            ((E = Zr(
              ao.mark(function e(t) {
                var n, r;
                return ao.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            null == this.mediaStream ||
                            !0 !==
                              (null === (n = this.mediaTrackCapabilities) ||
                              void 0 === n
                                ? void 0
                                : n.torch)
                          ) {
                            e.next = 6;
                            break;
                          }
                          if (
                            ((this.torchEnabled = t),
                            0 ===
                              (r = this.mediaStream.getVideoTracks()).length ||
                              "function" != typeof r[0].applyConstraints)
                          ) {
                            e.next = 6;
                            break;
                          }
                          return (
                            (e.next = 6),
                            r[0].applyConstraints({ advanced: [{ torch: t }] })
                          );
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function (e) {
              return E.apply(this, arguments);
            }),
        },
        {
          key: "toggleTorch",
          value:
            ((b = Zr(
              ao.mark(function e() {
                return ao.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (this.torchEnabled = !this.torchEnabled),
                            (e.next = 3),
                            this.setTorchEnabled(this.torchEnabled)
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function () {
              return b.apply(this, arguments);
            }),
        },
        {
          key: "setZoom",
          value:
            ((y = Zr(
              ao.mark(function e(t, n) {
                var r, i, a, o;
                return ao.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            null == this.mediaStream ||
                            null ==
                              (null === (r = this.mediaTrackCapabilities) ||
                              void 0 === r
                                ? void 0
                                : r.zoom)
                          ) {
                            e.next = 7;
                            break;
                          }
                          if (
                            0 ===
                              (i = this.mediaStream.getVideoTracks()).length ||
                            "function" != typeof i[0].applyConstraints
                          ) {
                            e.next = 7;
                            break;
                          }
                          return (
                            (a =
                              this.mediaTrackCapabilities.zoom.max -
                              this.mediaTrackCapabilities.zoom.min),
                            (o = Math.max(
                              this.mediaTrackCapabilities.zoom.min,
                              Math.min(
                                (null != n
                                  ? n
                                  : this.mediaTrackCapabilities.zoom.min) +
                                  a * t,
                                this.mediaTrackCapabilities.zoom.max
                              )
                            )),
                            (e.next = 7),
                            i[0].applyConstraints({ advanced: [{ zoom: o }] })
                          );
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function (e, t) {
              return y.apply(this, arguments);
            }),
        },
        {
          key: "recoverStreamIfNeeded",
          value:
            ((v = Zr(
              ao.mark(function e() {
                var t, n, r;
                return ao.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            "ended" !==
                            (null ==
                              (r =
                                null === (t = this.mediaStream) || void 0 === t
                                  ? void 0
                                  : t.getVideoTracks()) ||
                            null === (n = r[0]) ||
                            void 0 === n
                              ? void 0
                              : n.readyState)
                          ) {
                            e.next = 4;
                            break;
                          }
                          return (e.next = 4), this.reinitializeCamera();
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function () {
              return v.apply(this, arguments);
            }),
        },
        {
          key: "setupCamerasAndStream",
          value:
            ((p = Zr(
              ao.mark(function t() {
                var n, r, i, a, o, s, c;
                return ao.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((t.prev = 0), null != this.selectedCamera)) {
                            t.next = 6;
                            break;
                          }
                          return (
                            this.gui.setVideoVisible(!1),
                            (t.next = 5),
                            this.accessInitialCamera()
                          );
                        case 5:
                          a = t.sent;
                        case 6:
                          return (
                            (t.next = 8), e.CameraAccess.getCameras(!1, !0)
                          );
                        case 8:
                          if (
                            ((o = t.sent),
                            this.cameraSwitcherEnabled &&
                              o.length > 1 &&
                              this.gui.setCameraSwitcherVisible(!0),
                            (s =
                              null === (n = this.mediaStream) ||
                              void 0 === n ||
                              null === (r = n.getVideoTracks()[0]) ||
                              void 0 === r ||
                              null === (i = r.getSettings) ||
                              void 0 === i
                                ? void 0
                                : i.call(r).deviceId),
                            null == this.mediaStream || null == a)
                          ) {
                            t.next = 29;
                            break;
                          }
                          if (
                            null ==
                            (c =
                              1 === o.length
                                ? o[0]
                                : o.find(function (e) {
                                    var t;
                                    return (
                                      e.deviceId === s ||
                                      ("" !== e.label &&
                                        e.label ===
                                          (null === (t = a) || void 0 === t
                                            ? void 0
                                            : t.label))
                                    );
                                  }))
                          ) {
                            t.next = 28;
                            break;
                          }
                          if (
                            (e.CameraAccess.adjustCameraFromMediaStream(
                              this.mediaStream,
                              c
                            ),
                            e.BrowserHelper.isDesktopDevice() &&
                              (e.CameraAccess.mainCameraForTypeOverridesOnDesktop.set(
                                this.cameraType,
                                c
                              ),
                              e.CameraAccess.mainCameraForTypeOverridesOnDesktop.set(
                                c.cameraType,
                                c
                              )),
                            1 !== o.length &&
                              e.CameraAccess.getMainCameraForType(
                                o,
                                this.cameraType
                              ) !== c)
                          ) {
                            t.next = 25;
                            break;
                          }
                          return (
                            e.Logger.log(
                              e.Logger.Level.DEBUG,
                              "Initial camera access was correct (main camera), keep camera:",
                              c
                            ),
                            this.setSelectedCamera(c),
                            this.updateActiveCameraCurrentResolution(c),
                            (t.next = 22),
                            this.recoverStreamIfNeeded()
                          );
                        case 22:
                          return t.abrupt("return");
                        case 25:
                          e.Logger.log(
                            e.Logger.Level.DEBUG,
                            "Initial camera access was incorrect (not main camera), change camera",
                            Su(Su({}, a), {}, { deviceId: s })
                          );
                        case 26:
                          t.next = 29;
                          break;
                        case 28:
                          e.Logger.log(
                            e.Logger.Level.DEBUG,
                            "Initial camera access was incorrect (unknown camera), change camera",
                            Su(Su({}, a), {}, { deviceId: s })
                          );
                        case 29:
                          if (null != this.selectedCamera) {
                            t.next = 35;
                            break;
                          }
                          return (
                            (t.next = 32), this.accessAutoselectedCamera(o)
                          );
                        case 32:
                          return t.abrupt("return", t.sent);
                        case 35:
                          return (
                            (t.next = 37),
                            this.initializeCameraWithSettings(
                              this.selectedCamera,
                              this.selectedCameraSettings
                            )
                          );
                        case 37:
                          return t.abrupt("return", t.sent);
                        case 38:
                          return (
                            (t.prev = 38),
                            this.gui.setVideoVisible(!0),
                            (this.cameraSetupPromise = void 0),
                            t.finish(38)
                          );
                        case 42:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, , 38, 42]]
                );
              })
            )),
            function () {
              return p.apply(this, arguments);
            }),
        },
        {
          key: "getInitialCameraResolutionConstraint",
          value: function () {
            var t, n;
            switch (
              null === (t = this.activeCameraSettings) || void 0 === t
                ? void 0
                : t.resolutionPreference
            ) {
              case e.CameraSettings.ResolutionPreference.ULTRA_HD:
                n = pu.ULTRA_HD;
                break;
              case e.CameraSettings.ResolutionPreference.FULL_HD:
                n = pu.FULL_HD;
                break;
              case e.CameraSettings.ResolutionPreference.HD:
              default:
                n = pu.HD;
            }
            return n;
          },
        },
        {
          key: "accessAutoselectedCamera",
          value:
            ((m = Zr(
              ao.mark(function n(r) {
                var i;
                return ao.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          (r = e.CameraAccess.sortCamerasForCameraType(
                            r,
                            this.cameraType
                          )),
                            (i = r.shift());
                        case 2:
                          if (null == i) {
                            n.next = 20;
                            break;
                          }
                          return (
                            (n.prev = 3),
                            (n.next = 6),
                            this.initializeCameraWithSettings(
                              i,
                              this.selectedCameraSettings
                            )
                          );
                        case 6:
                          return n.abrupt("return", n.sent);
                        case 9:
                          if (
                            ((n.prev = 9),
                            (n.t0 = n.catch(3)),
                            this.setSelectedCamera(),
                            1 === r.length &&
                              this.gui.setCameraSwitcherVisible(!1),
                            !(r.length >= 1))
                          ) {
                            n.next = 17;
                            break;
                          }
                          return (
                            e.Logger.log(
                              e.Logger.Level.WARN,
                              "Couldn't access camera:",
                              i,
                              n.t0
                            ),
                            (i = r.shift()),
                            n.abrupt("continue", 2)
                          );
                        case 17:
                          throw n.t0;
                        case 18:
                          n.next = 2;
                          break;
                        case 20:
                          throw new hc(t.noCameraErrorParameters);
                        case 21:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  this,
                  [[3, 9]]
                );
              })
            )),
            function (e) {
              return m.apply(this, arguments);
            }),
        },
        {
          key: "accessInitialCamera",
          value:
            ((g = Zr(
              ao.mark(function e() {
                var t;
                return ao.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = {
                              deviceId: "",
                              label: "",
                              cameraType: this.cameraType,
                            }),
                            (e.prev = 1),
                            (e.next = 4),
                            this.initializeCameraWithSettings(
                              t,
                              this.selectedCameraSettings
                            )
                          );
                        case 4:
                          e.next = 8;
                          break;
                        case 6:
                          (e.prev = 6), (e.t0 = e.catch(1));
                        case 8:
                          return (
                            (e.prev = 8), this.setSelectedCamera(), e.finish(8)
                          );
                        case 11:
                          return e.abrupt("return", t);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[1, 6, 8, 11]]
                );
              })
            )),
            function () {
              return g.apply(this, arguments);
            }),
        },
        {
          key: "updateActiveCameraCurrentResolution",
          value: function (e) {
            this.gui.videoElement.videoWidth > 2 &&
              this.gui.videoElement.videoHeight > 2 &&
              (e.currentResolution = {
                width: this.gui.videoElement.videoWidth,
                height: this.gui.videoElement.videoHeight,
              }),
              "" !== e.deviceId &&
                ((this.activeCamera = e),
                this.gui.setMirrorImageEnabled(
                  this.gui.isMirrorImageEnabled(),
                  !1
                ));
          },
        },
        {
          key: "postStreamInitialization",
          value: function () {
            var e = this;
            window.clearTimeout(this.getCapabilitiesTimeout),
              (this.getCapabilitiesTimeout = window.setTimeout(function () {
                var t;
                e.storeStreamCapabilities(),
                  e.setupAutofocus(),
                  e.torchToggleEnabled &&
                    null != e.mediaStream &&
                    !0 ===
                      (null === (t = e.mediaTrackCapabilities) || void 0 === t
                        ? void 0
                        : t.torch) &&
                    e.gui.setTorchTogglerVisible(!0);
              }, t.getCapabilitiesTimeoutMs));
          },
        },
        {
          key: "videoResizeHandle",
          value: function () {
            null != this.activeCamera &&
              this.updateActiveCameraCurrentResolution(this.activeCamera);
          },
        },
        {
          key: "checkCameraVideoStreamAccessIfVisible",
          value: function () {
            "visible" === document.visibilityState &&
              (e.Logger.log(
                e.Logger.Level.DEBUG,
                "Page is visible again, waiting for camera video stream start..."
              ),
              document.removeEventListener(
                "visibilitychange",
                this.checkCameraVideoStreamAccessIfVisibleListener
              ),
              this.setCameraAccessTimeout());
          },
        },
        {
          key: "videoTrackEndedRecovery",
          value:
            ((f = Zr(
              ao.mark(function t() {
                return ao.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (e.Logger.log(
                              e.Logger.Level.DEBUG,
                              'Detected video track "ended" event, try to reinitialize camera'
                            ),
                            "visible" === document.visibilityState)
                          ) {
                            t.next = 6;
                            break;
                          }
                          e.Logger.log(
                            e.Logger.Level.DEBUG,
                            "Page is currently not visible, delay camera reinitialization until visible"
                          ),
                            document.addEventListener(
                              "visibilitychange",
                              this.checkCameraVideoStreamAccessIfVisibleListener
                            ),
                            (t.next = 13);
                          break;
                        case 6:
                          return (
                            (t.prev = 6),
                            (t.next = 9),
                            this.reinitializeCamera()
                          );
                        case 9:
                          t.next = 13;
                          break;
                        case 11:
                          (t.prev = 11), (t.t0 = t.catch(6));
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[6, 11]]
                );
              })
            )),
            function () {
              return f.apply(this, arguments);
            }),
        },
        {
          key: "videoTrackMuteRecovery",
          value:
            ((h = Zr(
              ao.mark(function t(n) {
                var r;
                return ao.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (null == this.gui.videoElement.onloadeddata) {
                            t.next = 4;
                            break;
                          }
                          return (
                            e.Logger.log(
                              e.Logger.Level.DEBUG,
                              'Detected video track "'.concat(
                                n.type,
                                '" event, delay camera video stream access detection'
                              )
                            ),
                            this.setCameraAccessTimeout(),
                            t.abrupt("return")
                          );
                        case 4:
                          (r = "mute" === n.type) !==
                            this.gui.isCameraRecoveryVisible() &&
                            (e.Logger.log(
                              e.Logger.Level.DEBUG,
                              'Detected video track "'
                                .concat(n.type, '" event, ')
                                .concat(
                                  r ? "enable" : "disable",
                                  " camera recovery"
                                )
                            ),
                            this.gui.setCameraRecoveryVisible(r));
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            )),
            function (e) {
              return h.apply(this, arguments);
            }),
        },
        {
          key: "triggerManualFocusForContinuous",
          value:
            ((d = Zr(
              ao.mark(function e() {
                var n,
                  r,
                  i,
                  a = this;
                return ao.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (null != this.mediaStream) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (
                            ((this.manualToAutofocusResumeTimeout =
                              window.setTimeout(
                                Zr(
                                  ao.mark(function e() {
                                    return ao.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2),
                                              a.triggerFocusMode(mu.CONTINUOUS)
                                            );
                                          case 2:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                ),
                                t.manualToAutofocusResumeTimeoutMs
                              )),
                            (n = !0),
                            0 !==
                              (r = this.mediaStream.getVideoTracks()).length &&
                              "function" == typeof r[0].getConstraints &&
                              (n =
                                !0 ===
                                (null ===
                                  (i = r[0].getConstraints().advanced) ||
                                void 0 === i
                                  ? void 0
                                  : i.some(function (e) {
                                      return e.focusMode === mu.MANUAL;
                                    }))),
                            !n)
                          ) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (e.next = 9), this.triggerFocusMode(mu.CONTINUOUS)
                          );
                        case 9:
                          (this.manualFocusWaitTimeout = window.setTimeout(
                            Zr(
                              ao.mark(function e() {
                                return ao.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          a.triggerFocusMode(mu.MANUAL)
                                        );
                                      case 2:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            ),
                            t.manualFocusWaitTimeoutMs
                          )),
                            (e.next = 14);
                          break;
                        case 12:
                          return (
                            (e.next = 14), this.triggerFocusMode(mu.MANUAL)
                          );
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function () {
              return d.apply(this, arguments);
            }),
        },
        {
          key: "triggerManualFocusForSingleShot",
          value:
            ((l = Zr(
              ao.mark(function e() {
                var n = this;
                return ao.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            window.clearInterval(this.autofocusInterval),
                            (this.manualToAutofocusResumeTimeout =
                              window.setTimeout(function () {
                                n.autofocusInterval = window.setInterval(
                                  n.triggerAutoFocus.bind(n),
                                  t.autofocusIntervalMs
                                );
                              }, t.manualToAutofocusResumeTimeoutMs)),
                            (e.prev = 2),
                            (e.next = 5),
                            this.triggerFocusMode(mu.SINGLE_SHOT)
                          );
                        case 5:
                          e.next = 9;
                          break;
                        case 7:
                          (e.prev = 7), (e.t0 = e.catch(2));
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[2, 7]]
                );
              })
            )),
            function () {
              return l.apply(this, arguments);
            }),
        },
        {
          key: "triggerManualFocus",
          value:
            ((u = Zr(
              ao.mark(function e(t) {
                var n;
                return ao.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (null == t) {
                            e.next = 7;
                            break;
                          }
                          if (
                            (t.preventDefault(),
                            "touchend" !== t.type || 0 === t.touches.length)
                          ) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt("return");
                        case 4:
                          if (null == this.pinchToZoomDistance) {
                            e.next = 7;
                            break;
                          }
                          return (
                            (this.pinchToZoomDistance = void 0),
                            e.abrupt("return")
                          );
                        case 7:
                          if (
                            (window.clearTimeout(this.manualFocusWaitTimeout),
                            window.clearTimeout(
                              this.manualToAutofocusResumeTimeout
                            ),
                            null == this.mediaStream ||
                              null == this.mediaTrackCapabilities)
                          ) {
                            e.next = 20;
                            break;
                          }
                          if (
                            !(
                              (n =
                                this.mediaTrackCapabilities
                                  .focusMode) instanceof Array
                            )
                          ) {
                            e.next = 20;
                            break;
                          }
                          if (
                            !n.includes(mu.CONTINUOUS) ||
                            !n.includes(mu.MANUAL)
                          ) {
                            e.next = 17;
                            break;
                          }
                          return (
                            (e.next = 15),
                            this.triggerManualFocusForContinuous()
                          );
                        case 15:
                          e.next = 20;
                          break;
                        case 17:
                          if (!n.includes(mu.SINGLE_SHOT)) {
                            e.next = 20;
                            break;
                          }
                          return (
                            (e.next = 20),
                            this.triggerManualFocusForSingleShot()
                          );
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function (e) {
              return u.apply(this, arguments);
            }),
        },
        {
          key: "triggerZoomStart",
          value: function (e) {
            var t;
            if (
              2 === (null == e ? void 0 : e.touches.length) &&
              (e.preventDefault(),
              (this.pinchToZoomDistance = Math.hypot(
                (e.touches[1].screenX - e.touches[0].screenX) / screen.width,
                (e.touches[1].screenY - e.touches[0].screenY) / screen.height
              )),
              null != this.mediaStream &&
                null !=
                  (null === (t = this.mediaTrackCapabilities) || void 0 === t
                    ? void 0
                    : t.zoom))
            ) {
              var n = this.mediaStream.getVideoTracks();
              if (0 !== n.length && "function" == typeof n[0].getConstraints) {
                this.pinchToZoomInitialZoom =
                  this.mediaTrackCapabilities.zoom.min;
                var r = n[0].getConstraints();
                if (null != r.advanced) {
                  var i = r.advanced.find(function (e) {
                    return "zoom" in e;
                  });
                  null != (null == i ? void 0 : i.zoom) &&
                    (this.pinchToZoomInitialZoom = i.zoom);
                }
              }
            }
          },
        },
        {
          key: "triggerZoomMove",
          value:
            ((c = Zr(
              ao.mark(function e(t) {
                return ao.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            null != this.pinchToZoomDistance &&
                            2 === (null == t ? void 0 : t.touches.length)
                          ) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            t.preventDefault(),
                            (e.next = 5),
                            this.setZoom(
                              2 *
                                (Math.hypot(
                                  (t.touches[1].screenX -
                                    t.touches[0].screenX) /
                                    screen.width,
                                  (t.touches[1].screenY -
                                    t.touches[0].screenY) /
                                    screen.height
                                ) -
                                  this.pinchToZoomDistance),
                              this.pinchToZoomInitialZoom
                            )
                          );
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function (e) {
              return c.apply(this, arguments);
            }),
        },
        {
          key: "storeStreamCapabilities",
          value: function () {
            if (null != this.mediaStream) {
              var e = this.mediaStream.getVideoTracks();
              0 !== e.length &&
                "function" == typeof e[0].getCapabilities &&
                (this.mediaTrackCapabilities = e[0].getCapabilities());
            }
            var t;
            null != this.activeCamera &&
              this.scanner.reportCameraProperties(
                this.activeCamera.cameraType,
                null ==
                  (null === (t = this.mediaTrackCapabilities) || void 0 === t
                    ? void 0
                    : t.focusMode) ||
                  this.mediaTrackCapabilities.focusMode.includes(mu.CONTINUOUS)
              );
          },
        },
        {
          key: "setupAutofocus",
          value: function () {
            if (
              (window.clearTimeout(this.manualFocusWaitTimeout),
              window.clearTimeout(this.manualToAutofocusResumeTimeout),
              null != this.mediaStream && null != this.mediaTrackCapabilities)
            ) {
              var e = this.mediaTrackCapabilities.focusMode;
              e instanceof Array &&
                !e.includes(mu.CONTINUOUS) &&
                e.includes(mu.SINGLE_SHOT) &&
                (window.clearInterval(this.autofocusInterval),
                (this.autofocusInterval = window.setInterval(
                  this.triggerAutoFocus.bind(this),
                  t.autofocusIntervalMs
                )));
            }
          },
        },
        {
          key: "triggerAutoFocus",
          value:
            ((s = Zr(
              ao.mark(function e() {
                return ao.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), this.triggerFocusMode(mu.SINGLE_SHOT)
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            )),
            function () {
              return s.apply(this, arguments);
            }),
        },
        {
          key: "triggerFocusMode",
          value:
            ((o = Zr(
              ao.mark(function e(t) {
                var n;
                return ao.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (null == this.mediaStream) {
                            e.next = 10;
                            break;
                          }
                          if (
                            0 ===
                              (n = this.mediaStream.getVideoTracks()).length ||
                            "function" != typeof n[0].applyConstraints
                          ) {
                            e.next = 10;
                            break;
                          }
                          return (
                            (e.prev = 3),
                            (e.next = 6),
                            n[0].applyConstraints({
                              advanced: [{ focusMode: t }],
                            })
                          );
                        case 6:
                          e.next = 10;
                          break;
                        case 8:
                          (e.prev = 8), (e.t0 = e.catch(3));
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[3, 8]]
                );
              })
            )),
            function (e) {
              return o.apply(this, arguments);
            }),
        },
        {
          key: "enableTapToFocusListeners",
          value: function () {
            var e = this;
            ["touchend", "mousedown"].forEach(function (t) {
              e.gui.videoElement.addEventListener(
                t,
                e.triggerManualFocusListener
              );
            });
          },
        },
        {
          key: "enablePinchToZoomListeners",
          value: function () {
            this.gui.videoElement.addEventListener(
              "touchstart",
              this.triggerZoomStartListener
            ),
              this.gui.videoElement.addEventListener(
                "touchmove",
                this.triggerZoomMoveListener
              );
          },
        },
        {
          key: "disableTapToFocusListeners",
          value: function () {
            var e = this;
            ["touchend", "mousedown"].forEach(function (t) {
              e.gui.videoElement.removeEventListener(
                t,
                e.triggerManualFocusListener
              );
            });
          },
        },
        {
          key: "disablePinchToZoomListeners",
          value: function () {
            this.gui.videoElement.removeEventListener(
              "touchstart",
              this.triggerZoomStartListener
            ),
              this.gui.videoElement.removeEventListener(
                "touchmove",
                this.triggerZoomMoveListener
              );
          },
        },
        {
          key: "initializeCameraAndCheckUpdatedSettings",
          value:
            ((a = Zr(
              ao.mark(function e(t) {
                var n = this;
                return ao.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0), (e.next = 3), this.initializeCamera(t)
                          );
                        case 3:
                          if (
                            this.selectedCameraSettings ===
                              this.activeCameraSettings ||
                            (null != this.selectedCameraSettings &&
                              null != this.activeCameraSettings &&
                              !Object.keys(this.selectedCameraSettings).some(
                                function (e) {
                                  return (
                                    n.selectedCameraSettings[e] !==
                                    n.activeCameraSettings[e]
                                  );
                                }
                              ))
                          ) {
                            e.next = 8;
                            break;
                          }
                          return (
                            (this.activeCameraSettings =
                              this.selectedCameraSettings),
                            (e.next = 7),
                            this.initializeCameraAndCheckUpdatedSettings(t)
                          );
                        case 7:
                          return e.abrupt("return", e.sent);
                        case 8:
                          return (
                            (e.prev = 8),
                            (this.cameraInitializationPromise = void 0),
                            e.finish(8)
                          );
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[0, , 8, 11]]
                );
              })
            )),
            function (e) {
              return a.apply(this, arguments);
            }),
        },
        {
          key: "handleCameraInitializationError",
          value:
            ((i = Zr(
              ao.mark(function t(n, r, i) {
                var a;
                return ao.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            [
                              "OverconstrainedError",
                              "NotReadableError",
                            ].includes(i.name) &&
                            ("NotReadableError" !== i.name || r !== pu.NONE)
                          ) {
                            t.next = 4;
                            break;
                          }
                          throw (
                            (e.Logger.log(
                              e.Logger.Level.DEBUG,
                              "Camera video stream access failure (unrecoverable error)",
                              n,
                              i
                            ),
                            "NotAllowedError" !== i.name &&
                              e.CameraAccess.markCameraAsInaccessible(n),
                            i)
                          );
                        case 4:
                          if (
                            "OverconstrainedError" !== i.name ||
                            r !== pu.NONE
                          ) {
                            t.next = 20;
                            break;
                          }
                          if ("" !== n.deviceId) {
                            t.next = 8;
                            break;
                          }
                          throw (
                            (e.Logger.log(
                              e.Logger.Level.DEBUG,
                              "Camera video stream access failure (no camera with such type error)",
                              n,
                              i
                            ),
                            i)
                          );
                        case 8:
                          return (
                            e.Logger.log(
                              e.Logger.Level.DEBUG,
                              "Detected non-existent deviceId error, attempt to find and reaccess updated camera",
                              n,
                              i
                            ),
                            (a = n.deviceId),
                            (t.next = 12),
                            e.CameraAccess.getCameras(!0)
                          );
                        case 12:
                          if (a !== n.deviceId) {
                            t.next = 18;
                            break;
                          }
                          throw (
                            (e.Logger.log(
                              e.Logger.Level.DEBUG,
                              "Camera video stream access failure (updated camera not found after non-existent deviceId error)",
                              n,
                              i
                            ),
                            e.CameraAccess.markCameraAsInaccessible(n),
                            i)
                          );
                        case 18:
                          return (
                            e.Logger.log(
                              e.Logger.Level.DEBUG,
                              "Updated camera found (recovered from non-existent deviceId error), attempt to access it",
                              n
                            ),
                            t.abrupt("return", this.initializeCamera(n))
                          );
                        case 20:
                          return t.abrupt(
                            "return",
                            this.initializeCamera(n, r + 1)
                          );
                        case 21:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            )),
            function (e, t, n) {
              return i.apply(this, arguments);
            }),
        },
        {
          key: "initializeCamera",
          value:
            ((r = Zr(
              ao.mark(function n(r, i) {
                var a,
                  o,
                  s,
                  c = this;
                return ao.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            (this.gui.setCameraRecoveryVisible(!1), null != r)
                          ) {
                            n.next = 3;
                            break;
                          }
                          throw new hc(t.noCameraErrorParameters);
                        case 3:
                          return (n.next = 5), this.stopStream();
                        case 5:
                          return (
                            (this.torchEnabled = !1),
                            this.gui.setTorchTogglerVisible(!1),
                            (null !== (a = i) && void 0 !== a) ||
                              (i = this.getInitialCameraResolutionConstraint()),
                            (n.prev = 8),
                            (n.next = 11),
                            e.CameraAccess.accessCameraStream(i, r)
                          );
                        case 11:
                          if (
                            ((o = n.sent),
                            e.Logger.log(
                              e.Logger.Level.DEBUG,
                              "Camera accessed, waiting for camera video stream start..."
                            ),
                            "function" != typeof o.getTracks()[0].getSettings)
                          ) {
                            n.next = 22;
                            break;
                          }
                          if (
                            null ==
                              (s = o.getTracks()[0].getSettings()).width ||
                            null == s.height ||
                            (2 !== s.width && 2 !== s.height)
                          ) {
                            n.next = 22;
                            break;
                          }
                          if (
                            (e.Logger.log(
                              e.Logger.Level.DEBUG,
                              "Camera video stream access failure (invalid video metadata):",
                              r
                            ),
                            i !== pu.NONE)
                          ) {
                            n.next = 21;
                            break;
                          }
                          throw new hc(t.notReadableErrorParameters);
                        case 21:
                        case 35:
                          return n.abrupt(
                            "return",
                            this.initializeCamera(r, i + 1)
                          );
                        case 22:
                          return (
                            (this.mediaStream = o),
                            this.mediaStream
                              .getVideoTracks()
                              .forEach(function (e) {
                                e.addEventListener(
                                  "ended",
                                  c.videoTrackEndedListener
                                ),
                                  e.addEventListener(
                                    "mute",
                                    c.videoTrackMuteListener
                                  ),
                                  e.addEventListener(
                                    "unmute",
                                    c.videoTrackMuteListener
                                  );
                              }),
                            (n.prev = 24),
                            (n.next = 27),
                            this.setupCameraStreamVideo(r, o)
                          );
                        case 27:
                          n.next = 36;
                          break;
                        case 29:
                          if (
                            ((n.prev = 29), (n.t0 = n.catch(24)), i !== pu.NONE)
                          ) {
                            n.next = 35;
                            break;
                          }
                          throw n.t0;
                        case 36:
                          n.next = 41;
                          break;
                        case 38:
                          return (
                            (n.prev = 38),
                            (n.t1 = n.catch(8)),
                            n.abrupt(
                              "return",
                              this.handleCameraInitializationError(r, i, n.t1)
                            )
                          );
                        case 41:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  this,
                  [
                    [8, 38],
                    [24, 29],
                  ]
                );
              })
            )),
            function (e, t) {
              return r.apply(this, arguments);
            }),
        },
        {
          key: "setCameraAccessTimeout",
          value: function () {
            var n = this;
            window.clearTimeout(this.cameraAccessTimeout),
              (this.cameraAccessTimeout = window.setTimeout(
                Zr(
                  ao.mark(function r() {
                    var i;
                    return ao.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if ("visible" === document.visibilityState) {
                              r.next = 5;
                              break;
                            }
                            e.Logger.log(
                              e.Logger.Level.DEBUG,
                              "Page is currently not visible, delay camera video stream access detection"
                            ),
                              document.addEventListener(
                                "visibilitychange",
                                n.checkCameraVideoStreamAccessIfVisibleListener
                              ),
                              (r.next = 8);
                            break;
                          case 5:
                            return (r.next = 7), n.stopStream(!0);
                          case 7:
                            null === (i = n.cameraAccessRejectCallback) ||
                              void 0 === i ||
                              i.call(n, new hc(t.notReadableErrorParameters));
                          case 8:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                ),
                t.cameraAccessTimeoutMs
              ));
          },
        },
        {
          key: "checkCameraAccess",
          value: function (t) {
            var n = this;
            return new Yr(function (r, i) {
              (n.cameraAccessRejectCallback = function (r) {
                e.Logger.log(
                  e.Logger.Level.DEBUG,
                  "Camera video stream access failure (video data load timeout):",
                  t
                ),
                  n.gui.setCameraRecoveryVisible(!0),
                  i(r);
              }),
                n.setCameraAccessTimeout();
            });
          },
        },
        {
          key: "checkVideoMetadata",
          value:
            ((n = Zr(
              ao.mark(function n(r) {
                var i = this;
                return ao.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return n.abrupt(
                          "return",
                          new Yr(function (n, a) {
                            i.gui.videoElement.onloadeddata = function () {
                              if (
                                ((i.gui.videoElement.onloadeddata = null),
                                window.clearTimeout(i.cameraAccessTimeout),
                                i.gui.videoElement.videoWidth > 2 &&
                                  i.gui.videoElement.videoHeight > 2 &&
                                  i.gui.videoElement.currentTime > 0)
                              )
                                return (
                                  i.updateActiveCameraCurrentResolution(r),
                                  e.Logger.log(
                                    e.Logger.Level.DEBUG,
                                    "Camera video stream access success:",
                                    r
                                  ),
                                  n()
                                );
                              var o = performance.now();
                              window.clearInterval(
                                i.videoMetadataCheckInterval
                              ),
                                (i.videoMetadataCheckInterval =
                                  window.setInterval(
                                    Zr(
                                      ao.mark(function s() {
                                        return ao.wrap(function (s) {
                                          for (;;)
                                            switch ((s.prev = s.next)) {
                                              case 0:
                                                if (
                                                  !(
                                                    i.gui.videoElement
                                                      .videoWidth <= 2 ||
                                                    i.gui.videoElement
                                                      .videoHeight <= 2 ||
                                                    0 ===
                                                      i.gui.videoElement
                                                        .currentTime
                                                  )
                                                ) {
                                                  s.next = 8;
                                                  break;
                                                }
                                                if (
                                                  !(
                                                    performance.now() - o >
                                                    t.videoMetadataCheckTimeoutMs
                                                  )
                                                ) {
                                                  s.next = 7;
                                                  break;
                                                }
                                                return (
                                                  e.Logger.log(
                                                    e.Logger.Level.DEBUG,
                                                    "Camera video stream access failure (valid video metadata timeout):",
                                                    r
                                                  ),
                                                  window.clearInterval(
                                                    i.videoMetadataCheckInterval
                                                  ),
                                                  (s.next = 6),
                                                  i.stopStream(!0)
                                                );
                                              case 6:
                                                return s.abrupt(
                                                  "return",
                                                  a(
                                                    new hc(
                                                      t.notReadableErrorParameters
                                                    )
                                                  )
                                                );
                                              case 7:
                                                return s.abrupt("return");
                                              case 8:
                                                window.clearInterval(
                                                  i.videoMetadataCheckInterval
                                                ),
                                                  i.updateActiveCameraCurrentResolution(
                                                    r
                                                  ),
                                                  e.Logger.log(
                                                    e.Logger.Level.DEBUG,
                                                    "Camera video stream access success:",
                                                    r
                                                  ),
                                                  n();
                                              case 12:
                                              case "end":
                                                return s.stop();
                                            }
                                        }, s);
                                      })
                                    ),
                                    t.videoMetadataCheckIntervalMs
                                  ));
                            };
                          })
                        );
                      case 1:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )),
            function (e) {
              return n.apply(this, arguments);
            }),
        },
        {
          key: "setupCameraStreamVideo",
          value: function (e, t) {
            var n = this;
            this.gui.videoElement.addEventListener(
              "loadedmetadata",
              this.postStreamInitializationListener
            ),
              this.gui.videoElement.addEventListener(
                "resize",
                this.videoResizeListener
              ),
              this.tapToFocusEnabled && this.enableTapToFocusListeners(),
              this.pinchToZoomEnabled && this.enablePinchToZoomListeners();
            var r = Yr.race([
              this.checkCameraAccess(e),
              this.checkVideoMetadata(e),
              new Yr(function (e) {
                n.abortedCameraInitializationResolveCallback = e;
              }),
            ]);
            return (
              (this.gui.videoElement.srcObject = t),
              this.gui.videoElement.load(),
              this.gui.playVideo(),
              this.scanner.reportCameraProperties(e.cameraType),
              r
            );
          },
        },
      ]),
      t
    );
  })();
  To(Au, "cameraAccessTimeoutMs", 4e3),
    To(Au, "videoMetadataCheckTimeoutMs", 4e3),
    To(Au, "videoMetadataCheckIntervalMs", 50),
    To(Au, "getCapabilitiesTimeoutMs", 500),
    To(Au, "autofocusIntervalMs", 1500),
    To(Au, "manualToAutofocusResumeTimeoutMs", 5e3),
    To(Au, "manualFocusWaitTimeoutMs", 400),
    To(Au, "noCameraErrorParameters", {
      name: "NoCameraAvailableError",
      message: "No camera available",
    }),
    To(Au, "notReadableErrorParameters", {
      name: "NotReadableError",
      message: "Could not initialize camera correctly",
    });
  var _u = (function (e) {
      Lo(g, e);
      var t,
        n,
        r,
        i,
        a,
        o,
        s,
        c,
        u,
        l,
        d,
        h,
        f =
          ((d = g),
          (h = (function () {
            if ("undefined" == typeof Reflect || !Co) return !1;
            if (Co.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(Co(Boolean, [], function () {})),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var e,
              t = Oo(d);
            if (h) {
              var n = Oo(this).constructor;
              e = Co(t, arguments, n);
            } else e = t.apply(this, arguments);
            return Vo(this, e);
          });
      function g() {
        return Io(this, g), f.apply(this, arguments);
      }
      return (
        No(g, [
          { key: "setInteractionOptions", value: function (e, t, n, r) {} },
          {
            key: "isCameraSwitcherEnabled",
            value: function () {
              return !1;
            },
          },
          {
            key: "setCameraSwitcherEnabled",
            value:
              ((l = Zr(
                ao.mark(function e(t) {
                  return ao.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt("return");
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function (e) {
                return l.apply(this, arguments);
              }),
          },
          {
            key: "isTorchToggleEnabled",
            value: function () {
              return !1;
            },
          },
          { key: "setTorchToggleEnabled", value: function (e) {} },
          {
            key: "isTapToFocusEnabled",
            value: function () {
              return !1;
            },
          },
          { key: "setTapToFocusEnabled", value: function (e) {} },
          {
            key: "isPinchToZoomEnabled",
            value: function () {
              return !1;
            },
          },
          { key: "setPinchToZoomEnabled", value: function (e) {} },
          { key: "setInitialCameraType", value: function (e) {} },
          {
            key: "setCameraType",
            value:
              ((u = Zr(
                ao.mark(function e(t) {
                  return ao.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt("return");
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function (e) {
                return u.apply(this, arguments);
              }),
          },
          { key: "setSelectedCamera", value: function (e) {} },
          { key: "setSelectedCameraSettings", value: function (e) {} },
          {
            key: "setupCameras",
            value:
              ((c = Zr(
                ao.mark(function e() {
                  return ao.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt("return");
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return c.apply(this, arguments);
              }),
          },
          {
            key: "stopStream",
            value:
              ((s = Zr(
                ao.mark(function e() {
                  return ao.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt("return");
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return s.apply(this, arguments);
              }),
          },
          {
            key: "applyCameraSettings",
            value:
              ((o = Zr(
                ao.mark(function e(t) {
                  return ao.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt("return");
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function (e) {
                return o.apply(this, arguments);
              }),
          },
          {
            key: "reinitializeCamera",
            value:
              ((a = Zr(
                ao.mark(function e() {
                  return ao.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt("return");
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return a.apply(this, arguments);
              }),
          },
          {
            key: "initializeCameraWithSettings",
            value:
              ((i = Zr(
                ao.mark(function e(t, n) {
                  return ao.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt("return");
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function (e, t) {
                return i.apply(this, arguments);
              }),
          },
          {
            key: "setTorchEnabled",
            value:
              ((r = Zr(
                ao.mark(function e(t) {
                  return ao.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt("return");
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function (e) {
                return r.apply(this, arguments);
              }),
          },
          {
            key: "toggleTorch",
            value:
              ((n = Zr(
                ao.mark(function e() {
                  return ao.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt("return");
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function () {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "setZoom",
            value:
              ((t = Zr(
                ao.mark(function e(t, n) {
                  return ao.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt("return");
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              function (e, n) {
                return t.apply(this, arguments);
              }),
          },
        ]),
        g
      );
    })(Au),
    Cu = E,
    Tu = Ne,
    wu = hi,
    Nu = fi,
    Iu = tt,
    ku = X,
    Lu = Object.assign,
    xu =
      !Lu ||
      b(function () {
        var e = {},
          t = {},
          n = Symbol(),
          r = "abcdefghijklmnopqrst";
        return (
          (e[n] = 7),
          r.split("").forEach(function (e) {
            t[e] = e;
          }),
          7 != Lu({}, e)[n] || Object.keys(Lu({}, t)).join("") != r
        );
      })
        ? function (e, t) {
            for (
              var n = Iu(e), r = arguments.length, i = 1, a = wu.f, o = Nu.f;
              r > i;

            )
              for (
                var s,
                  c = ku(arguments[i++]),
                  u = a ? Tu(c).concat(a(c)) : Tu(c),
                  l = u.length,
                  d = 0;
                l > d;

              )
                (s = u[d++]), (Cu && !o.call(c, s)) || (n[s] = c[s]);
            return n;
          }
        : Lu,
    Mu = W;
  Mu(Mu.S + Mu.F, "Object", { assign: xu });
  var Vu,
    Ou = l.exports.Object.assign,
    Ru = [],
    Du = "ResizeObserver loop completed with undelivered notifications.";
  !(function (e) {
    (e.BORDER_BOX = "border-box"),
      (e.CONTENT_BOX = "content-box"),
      (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
  })(Vu || (Vu = {}));
  var Pu,
    Fu,
    Bu,
    ju,
    Uu,
    Gu,
    zu = function (e) {
      return Object.freeze(e);
    },
    Wu = function (e, t) {
      (this.inlineSize = e), (this.blockSize = t), zu(this);
    },
    Hu = (function () {
      function e(e, t, n, r) {
        return (
          (this.x = e),
          (this.y = t),
          (this.width = n),
          (this.height = r),
          (this.top = this.y),
          (this.left = this.x),
          (this.bottom = this.top + this.height),
          (this.right = this.left + this.width),
          zu(this)
        );
      }
      return (
        (e.prototype.toJSON = function () {
          var e = this;
          return {
            x: e.x,
            y: e.y,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            width: e.width,
            height: e.height,
          };
        }),
        (e.fromRect = function (t) {
          return new e(t.x, t.y, t.width, t.height);
        }),
        e
      );
    })(),
    Yu = function (e) {
      return e instanceof SVGElement && "getBBox" in e;
    },
    Qu = function (e) {
      if (Yu(e)) {
        var t = e.getBBox(),
          n = t.width,
          r = t.height;
        return !n && !r;
      }
      var i = e,
        a = i.offsetWidth,
        o = i.offsetHeight;
      return !(a || o || e.getClientRects().length);
    },
    Zu = function (e) {
      var t, n;
      if (e instanceof Element) return !0;
      var r =
        null ===
          (n = null === (t = e) || void 0 === t ? void 0 : t.ownerDocument) ||
        void 0 === n
          ? void 0
          : n.defaultView;
      return !!(r && e instanceof r.Element);
    },
    qu = "undefined" != typeof window ? window : {},
    Xu = new WeakMap(),
    Ku = /auto|scroll/,
    Ju = /^tb|vertical/,
    $u = /msie|trident/i.test(qu.navigator && qu.navigator.userAgent),
    el = function (e) {
      return parseFloat(e || "0");
    },
    tl = function (e, t, n) {
      return (
        void 0 === e && (e = 0),
        void 0 === t && (t = 0),
        void 0 === n && (n = !1),
        new Wu((n ? t : e) || 0, (n ? e : t) || 0)
      );
    },
    nl = zu({
      devicePixelContentBoxSize: tl(),
      borderBoxSize: tl(),
      contentBoxSize: tl(),
      contentRect: new Hu(0, 0, 0, 0),
    }),
    rl = function (e, t) {
      if ((void 0 === t && (t = !1), Xu.has(e) && !t)) return Xu.get(e);
      if (Qu(e)) return Xu.set(e, nl), nl;
      var n = getComputedStyle(e),
        r = Yu(e) && e.ownerSVGElement && e.getBBox(),
        i = !$u && "border-box" === n.boxSizing,
        a = Ju.test(n.writingMode || ""),
        o = !r && Ku.test(n.overflowY || ""),
        s = !r && Ku.test(n.overflowX || ""),
        c = r ? 0 : el(n.paddingTop),
        u = r ? 0 : el(n.paddingRight),
        l = r ? 0 : el(n.paddingBottom),
        d = r ? 0 : el(n.paddingLeft),
        h = r ? 0 : el(n.borderTopWidth),
        f = r ? 0 : el(n.borderRightWidth),
        g = r ? 0 : el(n.borderBottomWidth),
        m = d + u,
        p = c + l,
        v = (r ? 0 : el(n.borderLeftWidth)) + f,
        y = h + g,
        b = s ? e.offsetHeight - y - e.clientHeight : 0,
        E = o ? e.offsetWidth - v - e.clientWidth : 0,
        S = i ? m + v : 0,
        A = i ? p + y : 0,
        _ = r ? r.width : el(n.width) - S - E,
        C = r ? r.height : el(n.height) - A - b,
        T = _ + m + E + v,
        w = C + p + b + y,
        N = zu({
          devicePixelContentBoxSize: tl(
            Math.round(_ * devicePixelRatio),
            Math.round(C * devicePixelRatio),
            a
          ),
          borderBoxSize: tl(T, w, a),
          contentBoxSize: tl(_, C, a),
          contentRect: new Hu(d, c, _, C),
        });
      return Xu.set(e, N), N;
    },
    il = function (e, t, n) {
      var r = rl(e, n),
        i = r.borderBoxSize,
        a = r.contentBoxSize,
        o = r.devicePixelContentBoxSize;
      switch (t) {
        case Vu.DEVICE_PIXEL_CONTENT_BOX:
          return o;
        case Vu.BORDER_BOX:
          return i;
        default:
          return a;
      }
    },
    al = function (e) {
      var t = rl(e);
      (this.target = e),
        (this.contentRect = t.contentRect),
        (this.borderBoxSize = zu([t.borderBoxSize])),
        (this.contentBoxSize = zu([t.contentBoxSize])),
        (this.devicePixelContentBoxSize = zu([t.devicePixelContentBoxSize]));
    },
    ol = function (e) {
      if (Qu(e)) return 1 / 0;
      for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
      return t;
    },
    sl = function () {
      var e = 1 / 0,
        t = [];
      Ru.forEach(function (n) {
        if (0 !== n.activeTargets.length) {
          var r = [];
          n.activeTargets.forEach(function (t) {
            var n = new al(t.target),
              i = ol(t.target);
            r.push(n),
              (t.lastReportedSize = il(t.target, t.observedBox)),
              i < e && (e = i);
          }),
            t.push(function () {
              n.callback.call(n.observer, r, n.observer);
            }),
            n.activeTargets.splice(0, n.activeTargets.length);
        }
      });
      for (var n = 0, r = t; n < r.length; n++) (0, r[n])();
      return e;
    },
    cl = function (e) {
      Ru.forEach(function (t) {
        t.activeTargets.splice(0, t.activeTargets.length),
          t.skippedTargets.splice(0, t.skippedTargets.length),
          t.observationTargets.forEach(function (n) {
            n.isActive() &&
              (ol(n.target) > e
                ? t.activeTargets.push(n)
                : t.skippedTargets.push(n));
          });
      });
    },
    ul = [],
    ll = 0,
    dl = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    hl = [
      "resize",
      "load",
      "transitionend",
      "animationend",
      "animationstart",
      "animationiteration",
      "keyup",
      "keydown",
      "mouseup",
      "mousedown",
      "mouseover",
      "mouseout",
      "blur",
      "focus",
    ],
    fl = function (e) {
      return void 0 === e && (e = 0), Date.now() + e;
    },
    gl = !1,
    ml = new ((function () {
      function e() {
        var e = this;
        (this.stopped = !0),
          (this.listener = function () {
            return e.schedule();
          });
      }
      return (
        (e.prototype.run = function (e) {
          var t = this;
          if ((void 0 === e && (e = 250), !gl)) {
            gl = !0;
            var n,
              r = fl(e);
            (n = function () {
              var n = !1;
              try {
                n = (function () {
                  var e,
                    t = 0;
                  for (
                    cl(t);
                    Ru.some(function (e) {
                      return e.activeTargets.length > 0;
                    });

                  )
                    (t = sl()), cl(t);
                  return (
                    Ru.some(function (e) {
                      return e.skippedTargets.length > 0;
                    }) &&
                      ("function" == typeof ErrorEvent
                        ? (e = new ErrorEvent("error", { message: Du }))
                        : ((e = document.createEvent("Event")).initEvent(
                            "error",
                            !1,
                            !1
                          ),
                          (e.message = Du)),
                      window.dispatchEvent(e)),
                    t > 0
                  );
                })();
              } finally {
                if (((gl = !1), (e = r - fl()), !ll)) return;
                n ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
              }
            }),
              (function (e) {
                if (!Pu) {
                  var t = 0,
                    r = document.createTextNode("");
                  new MutationObserver(function () {
                    return ul.splice(0).forEach(function (e) {
                      return e();
                    });
                  }).observe(r, { characterData: !0 }),
                    (Pu = function () {
                      r.textContent = "" + (t ? t-- : t++);
                    });
                }
                ul.push(function () {
                  requestAnimationFrame(n);
                }),
                  Pu();
              })();
          }
        }),
        (e.prototype.schedule = function () {
          this.stop(), this.run();
        }),
        (e.prototype.observe = function () {
          var e = this,
            t = function () {
              return e.observer && e.observer.observe(document.body, dl);
            };
          document.body ? t() : qu.addEventListener("DOMContentLoaded", t);
        }),
        (e.prototype.start = function () {
          var e = this;
          this.stopped &&
            ((this.stopped = !1),
            (this.observer = new MutationObserver(this.listener)),
            this.observe(),
            hl.forEach(function (t) {
              return qu.addEventListener(t, e.listener, !0);
            }));
        }),
        (e.prototype.stop = function () {
          var e = this;
          this.stopped ||
            (this.observer && this.observer.disconnect(),
            hl.forEach(function (t) {
              return qu.removeEventListener(t, e.listener, !0);
            }),
            (this.stopped = !0));
        }),
        e
      );
    })())(),
    pl = function (e) {
      !ll && e > 0 && ml.start(), !(ll += e) && ml.stop();
    },
    vl = (function () {
      function e(e, t) {
        (this.target = e),
          (this.observedBox = t || Vu.CONTENT_BOX),
          (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
      }
      return (
        (e.prototype.isActive = function () {
          var e,
            t = il(this.target, this.observedBox, !0);
          return (
            (e = this.target),
            Yu(e) ||
              (function (e) {
                switch (e.tagName) {
                  case "INPUT":
                    if ("image" !== e.type) break;
                  case "VIDEO":
                  case "AUDIO":
                  case "EMBED":
                  case "OBJECT":
                  case "CANVAS":
                  case "IFRAME":
                  case "IMG":
                    return !0;
                }
                return !1;
              })(e) ||
              "inline" !== getComputedStyle(e).display ||
              (this.lastReportedSize = t),
            this.lastReportedSize.inlineSize !== t.inlineSize ||
              this.lastReportedSize.blockSize !== t.blockSize
          );
        }),
        e
      );
    })(),
    yl = function (e, t) {
      (this.activeTargets = []),
        (this.skippedTargets = []),
        (this.observationTargets = []),
        (this.observer = e),
        (this.callback = t);
    },
    bl = new WeakMap(),
    El = function (e, t) {
      for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
      return -1;
    },
    Sl = (function () {
      function e() {}
      return (
        (e.connect = function (e, t) {
          var n = new yl(e, t);
          bl.set(e, n);
        }),
        (e.observe = function (e, t, n) {
          var r = bl.get(e),
            i = 0 === r.observationTargets.length;
          El(r.observationTargets, t) < 0 &&
            (i && Ru.push(r),
            r.observationTargets.push(new vl(t, n && n.box)),
            pl(1),
            ml.schedule());
        }),
        (e.unobserve = function (e, t) {
          var n = bl.get(e),
            r = El(n.observationTargets, t),
            i = 1 === n.observationTargets.length;
          r >= 0 &&
            (i && Ru.splice(Ru.indexOf(n), 1),
            n.observationTargets.splice(r, 1),
            pl(-1));
        }),
        (e.disconnect = function (e) {
          var t = this,
            n = bl.get(e);
          n.observationTargets.slice().forEach(function (n) {
            return t.unobserve(e, n.target);
          }),
            n.activeTargets.splice(0, n.activeTargets.length);
        }),
        e
      );
    })(),
    Al = (function () {
      function e(e) {
        if (0 === arguments.length)
          throw new TypeError(
            "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
          );
        if ("function" != typeof e)
          throw new TypeError(
            "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
          );
        Sl.connect(this, e);
      }
      return (
        (e.prototype.observe = function (e, t) {
          if (0 === arguments.length)
            throw new TypeError(
              "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
            );
          if (!Zu(e))
            throw new TypeError(
              "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
            );
          Sl.observe(this, e, t);
        }),
        (e.prototype.unobserve = function (e) {
          if (0 === arguments.length)
            throw new TypeError(
              "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
            );
          if (!Zu(e))
            throw new TypeError(
              "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
            );
          Sl.unobserve(this, e);
        }),
        (e.prototype.disconnect = function () {
          Sl.disconnect(this);
        }),
        (e.toString = function () {
          return "function ResizeObserver () { [polyfill code] }";
        }),
        e
      );
    })(),
    _l = null !== (Fu = window.ResizeObserver) && void 0 !== Fu ? Fu : Al,
    Cl = (function () {
      function t(n) {
        var r = this;
        Io(this, t),
          To(this, "videoElement", void 0),
          To(this, "cameraSwitcherElement", void 0),
          To(this, "torchTogglerElement", void 0),
          To(this, "cameraRecoveryElement", void 0),
          To(this, "scanner", void 0),
          To(this, "singleImageModeEnabled", void 0),
          To(this, "singleImageModeSettings", void 0),
          To(this, "grandParentElement", void 0),
          To(this, "parentElement", void 0),
          To(this, "laserContainerElement", void 0),
          To(this, "laserActiveImageElement", void 0),
          To(this, "laserPausedImageElement", void 0),
          To(this, "viewfinderElement", void 0),
          To(this, "cameraUploadElement", void 0),
          To(this, "cameraUploadLabelElement", void 0),
          To(this, "cameraUploadInputElement", void 0),
          To(this, "cameraUploadProgressElement", void 0),
          To(this, "visibilityListener", void 0),
          To(this, "videoPauseListener", void 0),
          To(this, "videoResizeListener", void 0),
          To(this, "webGLContextLostListener", void 0),
          To(this, "newScanSettingsListener", void 0),
          To(this, "contextCreatedShowLogoListener", void 0),
          To(this, "contextCreatedActivateGUIListener", void 0),
          To(this, "resizeObserver", void 0),
          To(this, "cameraUploadCallback", void 0),
          To(this, "mirrorImageOverrides", void 0),
          To(this, "contextWebGL", void 0),
          To(this, "context2d", void 0),
          To(this, "cameraManager", void 0),
          To(this, "originElement", void 0),
          To(this, "scanningPaused", void 0),
          To(this, "visible", void 0),
          To(this, "guiStyle", void 0),
          To(this, "videoFit", void 0),
          To(this, "customLaserArea", void 0),
          To(this, "customViewfinderArea", void 0),
          To(this, "cameraUploadInProgress", void 0),
          To(this, "cameraSwitchInProgress", void 0),
          To(this, "dataCaptureContextCreated", void 0),
          To(this, "isVideoElementDetached", !1),
          (this.scanner = n.scanner),
          (this.originElement = n.originElement),
          (this.singleImageModeEnabled = n.singleImageModeEnabled),
          (this.singleImageModeSettings = n.singleImageModeSettings),
          (this.scanningPaused = n.scanningPaused),
          (this.cameraUploadCallback = n.cameraUploadCallback),
          (this.mirrorImageOverrides = new qs()),
          (this.cameraUploadInProgress = !1),
          (this.cameraSwitchInProgress = !1),
          (this.dataCaptureContextCreated = !1),
          (this.grandParentElement = document.createElement("div")),
          (this.grandParentElement.className = t.grandParentElementClassName),
          this.originElement.appendChild(this.grandParentElement),
          (this.parentElement = document.createElement("div")),
          (this.parentElement.className = t.parentElementClassName),
          this.grandParentElement.appendChild(this.parentElement),
          (this.videoElement = document.createElement("video")),
          (this.cameraSwitcherElement = document.createElement("img")),
          (this.torchTogglerElement = document.createElement("img")),
          (this.laserContainerElement = document.createElement("div")),
          (this.laserActiveImageElement = document.createElement("img")),
          (this.laserPausedImageElement = document.createElement("img")),
          (this.cameraRecoveryElement = document.createElement("div")),
          (this.viewfinderElement = document.createElement("div"));
        var i = document.createElement("canvas");
        (this.webGLContextLostListener =
          this.handleWebGLContextLost.bind(this)),
          n.singleImageModeEnabled
            ? ((this.context2d = i.getContext("2d")),
              (this.cameraUploadElement = document.createElement("div")),
              (this.cameraUploadLabelElement = document.createElement("label")),
              (this.cameraUploadInputElement = document.createElement("input")),
              (this.cameraUploadProgressElement =
                document.createElement("div")),
              this.setupCameraUploadGuiAssets(),
              (this.guiStyle = e.BarcodePicker.GuiStyle.NONE))
            : (this.setupContext(i),
              this.setupVideoElement(),
              this.setupCameraSwitcher(),
              this.setupTorchToggler(),
              this.setupCameraRecovery(n.cameraRecoveryText),
              this.setupFullGuiAssets(),
              this.setGuiStyle(n.guiStyle),
              this.setVideoFit(n.videoFit),
              this.setLaserArea(n.laserArea),
              this.setViewfinderArea(n.viewfinderArea),
              (this.visibilityListener =
                this.checkAndRecoverPlayback.bind(this)),
              document.addEventListener(
                "visibilitychange",
                this.visibilityListener
              ),
              (this.newScanSettingsListener =
                this.handleNewScanSettings.bind(this)),
              this.scanner.on("newScanSettings", this.newScanSettingsListener),
              this.handleNewScanSettings(),
              (this.videoPauseListener = this.handleVideoPause.bind(this)),
              this.videoElement.addEventListener(
                "pause",
                this.videoPauseListener
              ),
              (this.videoResizeListener = this.handleVideoResize.bind(this)),
              this.videoElement.addEventListener(
                "resize",
                this.videoResizeListener
              )),
          n.hideLogo
            ? ((this.contextCreatedShowLogoListener = this.showScanditLogo.bind(
                this,
                n.hideLogo
              )),
              this.scanner.on(
                "contextCreated",
                this.contextCreatedShowLogoListener
              ))
            : this.showScanditLogo(n.hideLogo),
          (this.contextCreatedActivateGUIListener =
            this.activateGUI.bind(this)),
          this.scanner.on(
            "contextCreated",
            this.contextCreatedActivateGUIListener
          ),
          this.resize(),
          (this.resizeObserver = new _l(function () {
            r.resize();
          })),
          this.resizeObserver.observe(this.originElement),
          this.setVisible(n.visible);
      }
      var n, r, i, a, o;
      return (
        No(t, [
          {
            key: "destroy",
            value: function () {
              var e, n, r, i;
              null != this.visibilityListener &&
                document.removeEventListener(
                  "visibilitychange",
                  this.visibilityListener
                ),
                null != this.newScanSettingsListener &&
                  this.scanner.removeListener(
                    "newScanSettings",
                    this.newScanSettingsListener
                  ),
                null != this.videoPauseListener &&
                  this.videoElement.removeEventListener(
                    "pause",
                    this.videoPauseListener
                  ),
                null != this.videoResizeListener &&
                  this.videoElement.removeEventListener(
                    "resize",
                    this.videoResizeListener
                  ),
                null != this.contextCreatedShowLogoListener &&
                  this.scanner.removeListener(
                    "contextCreated",
                    this.contextCreatedShowLogoListener
                  ),
                null != this.contextCreatedActivateGUIListener &&
                  this.scanner.removeListener(
                    "contextCreated",
                    this.contextCreatedActivateGUIListener
                  ),
                this.resizeObserver.disconnect(),
                this.grandParentElement.remove(),
                this.videoElement.remove(),
                null === (e = this.contextWebGL) ||
                  void 0 === e ||
                  null === (n = e.canvas) ||
                  void 0 === n ||
                  n.removeEventListener(
                    "webglcontextlost",
                    this.webGLContextLostListener
                  ),
                null === (r = this.contextWebGL) ||
                  void 0 === r ||
                  null === (i = r.getExtension("WEBGL_lose_context")) ||
                  void 0 === i ||
                  i.loseContext(),
                (this.contextWebGL = void 0),
                (this.context2d = void 0),
                this.originElement.classList.remove(t.hiddenClassName);
            },
          },
          {
            key: "setCameraManager",
            value: function (e) {
              this.cameraManager = e;
            },
          },
          {
            key: "pauseScanning",
            value: function () {
              (this.scanningPaused = !0),
                this.laserActiveImageElement.classList.add(
                  t.hiddenOpacityClassName
                ),
                this.laserPausedImageElement.classList.remove(
                  t.hiddenOpacityClassName
                ),
                this.viewfinderElement.classList.add(t.pausedClassName);
            },
          },
          {
            key: "resumeScanning",
            value: function () {
              (this.scanningPaused = !1),
                this.dataCaptureContextCreated &&
                  (this.laserPausedImageElement.classList.add(
                    t.hiddenOpacityClassName
                  ),
                  this.laserActiveImageElement.classList.remove(
                    t.hiddenOpacityClassName
                  ),
                  this.viewfinderElement.classList.remove(t.pausedClassName));
            },
          },
          {
            key: "isVisible",
            value: function () {
              return this.visible;
            },
          },
          {
            key: "setVisible",
            value: function (n) {
              (this.visible = n),
                n
                  ? (this.originElement.classList.remove(t.hiddenClassName),
                    this.guiStyle === e.BarcodePicker.GuiStyle.LASER
                      ? this.laserActiveImageElement.classList.remove(
                          t.flashColorClassName
                        )
                      : this.guiStyle === e.BarcodePicker.GuiStyle.VIEWFINDER &&
                        this.viewfinderElement.classList.remove(
                          t.flashWhiteClassName
                        ))
                  : this.originElement.classList.add(t.hiddenClassName);
            },
          },
          {
            key: "isMirrorImageEnabled",
            value: function () {
              var t, n;
              if (
                null !=
                  (null === (t = this.cameraManager) || void 0 === t
                    ? void 0
                    : t.selectedCamera) &&
                null !=
                  (null === (n = this.cameraManager) || void 0 === n
                    ? void 0
                    : n.activeCamera)
              ) {
                var r = this.mirrorImageOverrides.get(
                  this.cameraManager.activeCamera
                );
                return null != r
                  ? r
                  : this.cameraManager.activeCamera.cameraType ===
                      e.Camera.Type.FRONT;
              }
              return !1;
            },
          },
          {
            key: "setMirrorImageEnabled",
            value: function (e, n) {
              var r;
              null !=
                (null === (r = this.cameraManager) || void 0 === r
                  ? void 0
                  : r.selectedCamera) &&
                (e
                  ? this.videoElement.classList.add(t.mirroredClassName)
                  : this.videoElement.classList.remove(t.mirroredClassName),
                n &&
                  this.mirrorImageOverrides.set(
                    this.cameraManager.selectedCamera,
                    e
                  ));
            },
          },
          {
            key: "setGuiStyle",
            value: function (n) {
              if (!this.singleImageModeEnabled)
                switch (n) {
                  case e.BarcodePicker.GuiStyle.LASER:
                    (this.guiStyle = n),
                      this.laserContainerElement.classList.remove(
                        t.hiddenClassName
                      ),
                      this.viewfinderElement.classList.add(t.hiddenClassName);
                    break;
                  case e.BarcodePicker.GuiStyle.VIEWFINDER:
                    (this.guiStyle = n),
                      this.laserContainerElement.classList.add(
                        t.hiddenClassName
                      ),
                      this.viewfinderElement.classList.remove(
                        t.hiddenClassName
                      );
                    break;
                  case e.BarcodePicker.GuiStyle.NONE:
                  default:
                    (this.guiStyle = e.BarcodePicker.GuiStyle.NONE),
                      this.laserContainerElement.classList.add(
                        t.hiddenClassName
                      ),
                      this.viewfinderElement.classList.add(t.hiddenClassName);
                }
            },
          },
          {
            key: "setLaserArea",
            value: function (e) {
              (this.customLaserArea = e),
                null == e &&
                  (e = this.scanner.getScanSettings().getSearchArea());
              var t = 0.95;
              (this.laserContainerElement.style.left = "".concat(
                100 * (0.025 + e.x * t),
                "%"
              )),
                (this.laserContainerElement.style.width = "".concat(
                  e.width * t * 100,
                  "%"
                )),
                (this.laserContainerElement.style.top = "".concat(
                  100 * (0.025 + e.y * t),
                  "%"
                )),
                (this.laserContainerElement.style.height = "".concat(
                  e.height * t * 100,
                  "%"
                ));
            },
          },
          {
            key: "setViewfinderArea",
            value: function (e) {
              (this.customViewfinderArea = e),
                null == e &&
                  (e = this.scanner.getScanSettings().getSearchArea());
              var t = 0.95;
              (this.viewfinderElement.style.left = "".concat(
                100 * (0.025 + e.x * t),
                "%"
              )),
                (this.viewfinderElement.style.width = "".concat(
                  e.width * t * 100,
                  "%"
                )),
                (this.viewfinderElement.style.top = "".concat(
                  100 * (0.025 + e.y * t),
                  "%"
                )),
                (this.viewfinderElement.style.height = "".concat(
                  e.height * t * 100,
                  "%"
                ));
            },
          },
          {
            key: "setVideoFit",
            value: function (t) {
              this.singleImageModeEnabled ||
                ((this.videoFit = t),
                t === e.BarcodePicker.ObjectFit.COVER
                  ? ((this.videoElement.style.objectFit = "cover"),
                    (this.videoElement.dataset.objectFit = "cover"))
                  : ((this.videoElement.style.objectFit = "contain"),
                    (this.videoElement.dataset.objectFit = "contain"),
                    this.scanner.applyScanSettings(
                      this.scanner
                        .getScanSettings()
                        .setBaseSearchArea({ x: 0, y: 0, width: 1, height: 1 })
                    )),
                this.resize());
            },
          },
          {
            key: "reassignOriginElement",
            value: function (e) {
              this.visible ||
                (this.originElement.classList.remove(t.hiddenClassName),
                e.classList.add(t.hiddenClassName)),
                e.appendChild(this.grandParentElement),
                this.checkAndRecoverPlayback().catch(function () {}),
                this.resize(),
                this.resizeObserver.disconnect(),
                this.resizeObserver.observe(e),
                (this.originElement = e);
            },
          },
          {
            key: "flashGUI",
            value: function () {
              this.guiStyle === e.BarcodePicker.GuiStyle.LASER
                ? this.flashLaser()
                : this.guiStyle === e.BarcodePicker.GuiStyle.VIEWFINDER &&
                  this.flashViewfinder();
            },
          },
          {
            key: "getImageData",
            value: function (t) {
              function n(e, t) {
                return (
                  4 === e.readyState &&
                  e.videoWidth > 2 &&
                  e.videoHeight > 2 &&
                  t.canvas.width > 2 &&
                  t.canvas.height > 2
                );
              }
              if (this.singleImageModeEnabled && null != this.context2d)
                return new Uint8Array(
                  this.context2d.getImageData(
                    0,
                    0,
                    this.context2d.canvas.width,
                    this.context2d.canvas.height
                  ).data.buffer
                );
              if (!this.singleImageModeEnabled) {
                if (null != this.contextWebGL) {
                  if (
                    !n(this.videoElement, this.contextWebGL) ||
                    this.contextWebGL.drawingBufferWidth <= 2 ||
                    this.contextWebGL.drawingBufferHeight <= 2
                  )
                    return;
                  var r =
                    this.contextWebGL.drawingBufferWidth *
                    this.contextWebGL.drawingBufferHeight *
                    4;
                  return (
                    (null != t && 0 !== t.byteLength && t.byteLength === r) ||
                      (t = new Uint8Array(r)),
                    this.contextWebGL.texImage2D(
                      this.contextWebGL.TEXTURE_2D,
                      0,
                      this.contextWebGL.RGBA,
                      this.contextWebGL.RGBA,
                      this.contextWebGL.UNSIGNED_BYTE,
                      this.videoElement
                    ),
                    this.contextWebGL.readPixels(
                      0,
                      0,
                      this.contextWebGL.drawingBufferWidth,
                      this.contextWebGL.drawingBufferHeight,
                      this.contextWebGL.RGBA,
                      this.contextWebGL.UNSIGNED_BYTE,
                      t
                    ),
                    255 !== t[3]
                      ? (e.Logger.log(
                          e.Logger.Level.WARN,
                          "Detected incorrect GPU accelerated WebGL image processing, switching to canvas mode"
                        ),
                        (this.contextWebGL = void 0),
                        this.setupContext(document.createElement("canvas"), !0),
                        this.handleVideoResize(),
                        this.getImageData(t))
                      : t
                  );
                }
                if (null != this.context2d) {
                  if (!n(this.videoElement, this.context2d)) return;
                  return (
                    this.context2d.drawImage(this.videoElement, 0, 0),
                    new Uint8Array(
                      this.context2d.getImageData(
                        0,
                        0,
                        this.context2d.canvas.width,
                        this.context2d.canvas.height
                      ).data.buffer
                    )
                  );
                }
              }
            },
          },
          {
            key: "getVideoCurrentTime",
            value: function () {
              return this.videoElement.currentTime;
            },
          },
          {
            key: "setCameraSwitcherVisible",
            value: function (e) {
              e
                ? this.cameraSwitcherElement.classList.remove(t.hiddenClassName)
                : this.cameraSwitcherElement.classList.add(t.hiddenClassName);
            },
          },
          {
            key: "isCameraRecoveryVisible",
            value: function () {
              return !this.cameraRecoveryElement.classList.contains(
                t.hiddenClassName
              );
            },
          },
          {
            key: "setCameraRecoveryVisible",
            value: function (e) {
              e
                ? this.cameraRecoveryElement.classList.remove(t.hiddenClassName)
                : this.cameraRecoveryElement.classList.add(t.hiddenClassName);
            },
          },
          {
            key: "setTorchTogglerVisible",
            value: function (e) {
              e
                ? this.torchTogglerElement.classList.remove(t.hiddenClassName)
                : this.torchTogglerElement.classList.add(t.hiddenClassName);
            },
          },
          {
            key: "playVideo",
            value: function () {
              var e = this.videoElement.play();
              null == e || e.catch(function () {});
            },
          },
          {
            key: "setVideoVisible",
            value: function (e) {
              this.videoElement.style.visibility = e ? "visible" : "hidden";
            },
          },
          {
            key: "setCameraType",
            value: function (t) {
              var n;
              null === (n = this.cameraUploadInputElement) ||
                void 0 === n ||
                n.setAttribute(
                  "capture",
                  t === e.Camera.Type.FRONT ? "user" : "environment"
                );
            },
          },
          {
            key: "setCameraUploadGuiBusyScanning",
            value: function (e) {
              e
                ? (this.cameraUploadProgressElement.classList.remove(
                    t.flashInsetClassName
                  ),
                  this.cameraUploadElement.classList.add(
                    t.opacityPulseClassName
                  ))
                : (this.cameraUploadProgressElement.classList.add(
                    t.flashInsetClassName
                  ),
                  this.cameraUploadElement.classList.remove(
                    t.opacityPulseClassName
                  ));
            },
          },
          {
            key: "setupContext",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (t) this.context2d = e.getContext("2d");
              else {
                var n = e.getContext("webgl", { alpha: !1, antialias: !1 });
                null == n &&
                  (n = e.getContext("experimental-webgl", {
                    alpha: !1,
                    antialias: !1,
                  })),
                  null != n
                    ? (this.setupWebGL(n),
                      e.addEventListener(
                        "webglcontextlost",
                        this.webGLContextLostListener
                      ))
                    : (this.context2d = e.getContext("2d"));
              }
            },
          },
          {
            key: "setupWebGL",
            value: function (e) {
              var t = e.createTexture();
              e.bindTexture(e.TEXTURE_2D, t);
              var n = e.createFramebuffer();
              e.bindFramebuffer(e.FRAMEBUFFER, n),
                e.framebufferTexture2D(
                  e.FRAMEBUFFER,
                  e.COLOR_ATTACHMENT0,
                  e.TEXTURE_2D,
                  t,
                  0
                ),
                e.texParameteri(
                  e.TEXTURE_2D,
                  e.TEXTURE_WRAP_S,
                  e.CLAMP_TO_EDGE
                ),
                e.texParameteri(
                  e.TEXTURE_2D,
                  e.TEXTURE_WRAP_T,
                  e.CLAMP_TO_EDGE
                ),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST),
                (this.contextWebGL = e);
            },
          },
          {
            key: "setupVideoElement",
            value: function () {
              this.videoElement.setAttribute("autoplay", "autoplay"),
                this.videoElement.setAttribute("playsinline", "true"),
                this.videoElement.setAttribute("muted", "muted"),
                (this.videoElement.className = t.videoElementClassName),
                this.parentElement.appendChild(this.videoElement);
            },
          },
          {
            key: "setupCameraUploadGuiAssets",
            value: function () {
              var n,
                r,
                i = this,
                a = e.BrowserHelper.userAgentInfo.getDevice().type,
                o =
                  "mobile" === a || "tablet" === a
                    ? e.SingleImageModeSettings.defaultMobile
                    : e.SingleImageModeSettings.defaultDesktop;
              (this.cameraUploadElement.className =
                t.cameraUploadElementClassName),
                Ou(
                  this.cameraUploadElement.style,
                  o.containerStyle,
                  this.singleImageModeSettings.containerStyle
                ),
                this.parentElement.appendChild(this.cameraUploadElement);
              var s =
                null !==
                  (n = this.singleImageModeSettings.informationElement) &&
                void 0 !== n
                  ? n
                  : o.informationElement;
              Ou(
                s.style,
                o.informationStyle,
                this.singleImageModeSettings.informationStyle
              ),
                this.cameraUploadElement.appendChild(s),
                (this.cameraUploadInputElement.type = "file"),
                (this.cameraUploadInputElement.accept = "image/*"),
                this.cameraUploadInputElement.addEventListener(
                  "change",
                  this.cameraUploadFile.bind(this)
                );
              var c = function (e) {
                (i.scanningPaused || i.cameraUploadInProgress) &&
                  e.preventDefault();
              };
              this.cameraUploadInputElement.addEventListener("click", c),
                this.cameraUploadInputElement.addEventListener("keydown", c),
                this.cameraUploadLabelElement.appendChild(
                  this.cameraUploadInputElement
                );
              var u =
                null !== (r = this.singleImageModeSettings.buttonElement) &&
                void 0 !== r
                  ? r
                  : o.buttonElement;
              [this.cameraUploadProgressElement.style, u.style].forEach(
                function (e) {
                  Ou(e, o.buttonStyle, i.singleImageModeSettings.buttonStyle);
                }
              ),
                (u.style.maxWidth = "100px"),
                (u.style.maxHeight = "100px"),
                this.cameraUploadLabelElement.appendChild(u),
                this.cameraUploadProgressElement.classList.add(
                  "radial-progress"
                ),
                this.cameraUploadLabelElement.appendChild(
                  this.cameraUploadProgressElement
                ),
                this.cameraUploadElement.appendChild(
                  this.cameraUploadLabelElement
                );
            },
          },
          {
            key: "setupFullGuiAssets",
            value: function () {
              (this.laserActiveImageElement.src =
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuwAAAAvCAMAAACPHW/9AAAAwFBMVEVHcExUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFVydJUyNFUyNFUyNFUyNH8/v5UyNFUyNFUyNFVydJUyNFUyNFUyNFVydJUyNFVydL3/f1YytNUyNFUyNFUyNHx+/ve9fbp+PnR8fNUyNGF2N9009q15+uW3ePD7O+l4+dv0dlv0dj///9Ujp4pAAAAP3RSTlMAiXJnBFsIARM5oA1+UKsuG5W3JEULBishQj5iAm0QkTQZ/h5MF3snWISbSHb8plMFjfjv9Oeyua3Ww9/Nn4y/IgemAAAIrElEQVR42u2da1saOxCAq8jRVuql0qOVIgcvgHhBrBbUYv//vzpzySSTZBeWqo8fOm+E9Vv3eXxnOptNJh8+vD3rhvFC3lHR73/GmmEsxdKKVY+N3ONFN3OT8O+S/GMYnmXtid0rCJAy7b3nrPDyQn5dnk3DiFnaoeJ4Ife98ZnqTnTSPHZ38R0ezWPDMF6BeY6lseK0F+Ej3Vl1MJ1EZ78rmXrmBvxWTLcCO4axU8WUEsk2nIMhJsh6Et75HnQn10l1NB093xB9F9p4UsBBKXuGsQSlIuXSScSQ/Og8Ch9097aT66I6mo6S74i1c++mn7G/v4+fQrYNYymKPWLBEvEkOtD7LhoPvmN+R93R9sR1UR1FR8n7/cqS/oejjI+G8UIyqbb9NQ4NtB6MJ99J99j2deU6q35AnrPDFew99FcY+MN8K6VpGHMpVecwQL5p/1h+dL6/Bwm+i9k92M6yY2IPrpPqaLqT2omrR7hk9l4ETvEHRuAzD8OogNNFgUpd8DeRhgYGACkPvqPuO5jc2XZM7SGxK9dRdRSdknNicIy+Ey/xyDMYDRR1dzGMaihrHKCUxweFhALpD8qj76Q71jLOdknt6y6xB9dZdRCddU4ibpSgdA606q2cWqtWq7VqfDWMUpwk8BVRd99xPHAYkP6oPPkOurPtVMlwaneyU2KHZ1NxHVVvXqDm3uXC0GuR1Nrr+J7bODyr9IGByNUwYtr+wrYEgcClJCZ0FJD6YDz5Drqz7Vi3U2oX2amKgcR+1nWuk+okelmOrmVWB6XxVi9xBHpFNHoNw0gpUkU8WsUfCYoQBLW2uA/Cj0aQ353tBydcyHAdQ8+na5TYsYg52GPXUXUwnbXW2TnC/atKbO+x47xxnrFiGBXIxEGbkoCQAHD2k/CgO2T3JtkOT6ldl9q17JtUxOz1xXXM6WC6N5qVVtm6B2ZfRmrnPo9Xxkxn3InYlWEYGudFDOjDpHEAyin7UXoQnnVn27mQodQusksVw0UMuj6CrM6mU7ZO/6ehIFNZ28uNXjudFUPNJxz8ZRgxw09eDbgEQCEdERwCSn+X+EF48B11B9uxkqFCZmNjk4t2/3xKFTsl9m9Ndh1N7zUa5eWHZO1Y7qFzW+7/GgZ+AVvXW1v0RR/DKMGZgldAFJKAcP7vDhP30fkG6I7ZnWynQoZS+9ev/ISKz6euioHEDkWMdx1UJ8Wdz+NOqEZU1vaJW9ntxBZ+5nzhYRgJJEYBKhQoAjL3wXr0nXRH20+bnNpdHQNPqCQ7VzGS2C9GXnUQncQe+nyNZcjsegZMZ1NgMp0Aj8Av5AF5Qu6RH8wdcctcBY49v42/m6CC8oN8YXnu2CSyivwi01A5dO8RJZxMp+jl8/Pzee+yXasPJLV3pWj3slMVgxV78xTyunN93KG8HWoqjKkZfKZb06A6u462P4DtTyT7Pdn+g3S/I9tvyfYrHInpJPvxbzP+79Qc//BBddEdPLm9cvmRZCfd78t0d7ZP2fbn3mq7VcfU7uqYWPYjnnekKmYAiV1cZ9W5MnGmo+jadQotSuwPvySxR64H1dl2dh1/LLMbLHyku8/sV2z6rU/tJPvTvbhO1cSjtx2E5NzeoNT++SLUMaWy1yPZOZ+L7VtTlP3ndPqFbJ9M0irmKVQxktddYpfMTrofp5ndMNlF9WNnep7ZXWIH2x+C7uT6Y5zaWfZvy8o+lPIF8/oW6z5F3Sec2UNiDxX7vS7Z7+6KqhjU3TK7kVTsKrOz7XeuaM/KGK5iojpmSmU7uT43s0c1Oz2fNs7P8elUlewzrGJwkO6+Yp/oil1ndl2ySxnjXD9OUrv9vU12pzqNUMWEZ9TwiPoUinYpYySzu0dUKmNKa3Y9G0MTj5doO0/G4BzMDAZ+fZrRXEw0FePLmHQu5l5l9rRmvzLZjeLUfhW7ns3GJM+nfj5mqlzHB9Ti2Zh8nr2l5tnjF/67qL9+PxomJYd6ziZ6bVQwz24Y5XPt2SQ7jvDGiebZr7Np9irz7Okb1IvsDeqKjNIXqJ3s/elQvWOS6Rz1psneoRrlL1D16yN+gxpeoPplBLslb1BXy9+ghrUx3cK1Mb2CtTGN4oWMWv6Ol1/nfnkvRStkeJmMrZExooUxTo4E8kjWioXFYdHSsEZj0dqYSqseLwuQNY9h0WMjW0Yz9sTrHnnFY0fu3jCcCR2vc77ocbwyztf/hmWPbtVjbf6qR1nP3o3Xs9fdevaa3yeithz5bRpxMMT6Fy1o53vlj61tN+I17JEX2Xr282SDh9/TIbs5eD37YDRvPXvpTqV6vcI+Jdou5f1XWzr0fwL5ZiW+a9uZY0T7lBpzNioFsfVOJdr9WXGnkt+DulG+B7Vk+3eyZa+m4qCdbEBVwWCbT41Ke1H1/tOgdbtoE6reg3qa7kHd1HtQo+4Ce2l3gfLeAoO4X0YSBfWstUAr7Bo3jMXtBdiatMGA7i5Qj3pshO4C4rokdtVdwPeNOYv7xnD7o6W6xnzWoTBIWsdwRFjrGGNBw5ikT4YyelDaN+ZU+sYcUp+k4r4xlTqCHc7radcsagiWBINvCGYdwYxqHcFO855g1BWMWs2VtwRTHcHQ9aOoI9jcXo/S3NEP/3tOHBSuRV4WGNbq0ajW7DFr+Mg9F2Oy5qfS6/Eg9HpUib2ki+8ed/HtL27iK91PS9ugWhtf4zW6+H7MO/lux518ky6+2vWsZ3VRf/ZqzdnD70l39m1rz268eoN2TML9/Vi90J/9ZE5/9kUnbyx77gYOfdqGHbxhvPLRGycFZ2+EkzfO+LQZOXnjZi0/Z6boTKVFJyrJLy84UcmOVDJefqhSctDYnDOVotPy3GGQ1Q7LO8JhZ+UZ731cHoqojsuT0/Ju1uYeDpmfg/pmp6DaMajGWx2EOvcc1OTg32oHXN+89HxrO+DaeNMjrqsd7M5Huxfy/Y9ZM4wlWVoyZ+mHd2LdMF7Ma5j4P+hE04Z78rHKAAAAAElFTkSuQmCC"),
                this.laserContainerElement.appendChild(
                  this.laserActiveImageElement
                ),
                (this.laserPausedImageElement.src =
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuwAAAAvCAMAAACPHW/9AAAAYFBMVEVHcExUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFTyNFUyNE9ws1UyNFUyNFUyNFTyNFCxM5UyNFHxc9RyNE5wcwd5ZO7AAAAH3RSTlMAZ35yAQgbBAwTI4lbRDmUoKtQLrc080osVZvhKMyyq5oARwAAB8JJREFUeNrtnYtS4koQhhUENRFRRBQRff+3PNP3nktCRHbPqTr9T5jErdrVrfr6t5PMdF9d/XndhEK/1H8T0dtQ6K/ol7FxAWIX+Veh0AVVoLaYEAojoP8C1btQ6O8KmBsPiSbwnvSfsHvPB4w7ucBhRyh0EQlROgw5/kKjwDNf4G6ke8yngrrkaYmDr+hIk35CoXPlOKJTAZxQSCHhiK9xV9aFdKN3BNNOJ5w7nTs60tR1PIdCZ2pp52VHXC3lBMh1SqEGBjHPvJe056gj6UsFt6HPdMAH5s9K73zQ9I6Tnlp6CYVqGSCf/hK4+pQTq6OJg4KQF+AVdzV2Yt2jjlDjP1ux2cLzFUZTj3A8hkLn6JXn1yEReRofSD0gT7wb7WLtjnVGHTkHpo3YbIxrBccKjlDoskKucLQiA+lPzAPw7O6OdoNdWGfUCXSBtxhyKnh+g5GEU0sbGqHQKb1tGJYBlFY854EgyL+8GO5CO8HOxm6sA+oIOsEsDBffqODYaZ+OfTpMD6HQWdrLKQ0T8JWFhqIJzAPviHuDdjV2ZZ1RB9ALjgXmzd7jDD/S/qFG+pqGnUKhn+iBJkUojToaLAwIe+Q94f5utJewo7Ej68nWkXTkfIov489AP5PTPA0+zfmY21eh0KgEE4GHh2DlwsFHAQAvuCvtYO0edjV29HVgnUh3/vxwPeLOAnGB8awcIrsKhXLNGY+5Xs95QqJ8PABzHn5kHnh3tDtrB9idsad7U2adSDeY9eCpsueZwV2r7+lInxme+15OoVCtmcwzZgYpqoOCsWP6EXjAHdw90Y53qWbtBjsbO7KebF1QL3Cm06yJdT9jlBXjNQ1/QvEpFCrUu6t+vc4B8rEAmOX0E6CKO3q7WbvBTlmMJOyJdUad4B6U0t0b3X2J8sdHOgo9PcGUBkyhEIphIELwYK1pAph8LHj6e3Z/wZ1p50SG8pgbn7KzsaccZg+oK+gDCcea4e6N7g+Hdv4feYYRCv1IT8/PRE4WExYEAr/aPvGutIu1Ux6T7lARdjV2TGI2zDom2y4d6UvTZr4rujOwv56/vvQj2tIIhTIxGIUSRIkeHwQV/Agj8Q7unmgvrL2GHZMY9nVCvfDrD8k8GGTgFnQUHY4H067SN4xv/IRCA9p9IyeAS6bDzthKpJG2RwqTFAxA/pp4v0bazdqHYSfWGfXCs51tM+nHLX5LZZ1x38kwzr9tootQqME5kQFnYl5QJ6CYdcOdgUfchfaUyoC1D8LedZTFJGNnX/eoU9b95HMTJn0rpAPqauye853EKYNunAfvoYx0vVJ3d/Z+8N5+VNq3Ge2QzaC1b+DxI+Qxbdg/4fZ0442dWLc7BYe6ZNyKumd9dyh8fWesh7OHTno7o54lM4ec92OWyhydtc+asN82nV1gtyTm+Snz9crYt01nrzj3pLfiOfQ/t/WdT9kbeXuGepbFHC1td87+yrDfD+bslsb0RcpON8HFvamzdkvZd2buyrsDPjtCoTx/cfeombET621nB9iJ9fWUnL28QeU71LU+hDHuFXez9/phzO7QeBKzC7xDU4DftY39MJTDoK9Lyi6wjz6NyZ6zu/dJ/Oq2krzcGnvOrnGhj9jtcvu1jSfuoS8/CIniYXv1tql6zN54zr5qP2fP36Bu9rJYYKbvlXgZV/0a1cVA/TRen+M82Q1uvEkNTXt7ys9F+Jax8Qb1w1bU9PIGdT72BvXU2pjB9bi6irGIgew3QGthDK16gGiIpTEhvzYGgfjQ1TFea8d2c21MP2VtzPCqx2LRY75GvV726NaEzZr+H2sdQ+csg2xxravF3YrfYtXjamDV4/B69odsb4Yuma83G7UX/orzZxexkj00bU27QqMI5dt/5oJ4vqB9bD37lJ1KugHK9gaWW/Aa2zlm/heBj4LYqRQa36k0L7ZoCNSzYqOS36pEG5XGdypN2YO69xtc29uqiyiY2xanYkfhtW0zDIXG9qEaN5JdtPZku53Y+/3pPagj1QVaVT2stMCD1hfgKgMaAdmmcPndEAqdridwnW13tu3PVYGBPeKt9QVcdYHHkeoCi2bdGKuB9DasRuWjfVYzBn4U/o3gym5w0YIoKRNqFYmRCyOmVF43hsopcbEkrJPUrhszXBFMC4LVFcHa4npKqywWaJKIeMvLPoVCw0XB+PxWFwdbYTmwt6o4nlQEex+oCCbWPlbr0RcqxWqTUgGyVebRRUUodPFqj4JYWfDxNav1WLBusOdVfJdVFd/091/k896q4Gs1VduFfF1J1KjoG5pUvZeReR2u4fviSvm6Mr6uii+zvrAqvpzHtOqzj8nXZu/qQu3D9dijPHvoRGn2F/XUkpbPrDC7VWdnyLVA+1B99qrzhnaPmdwehnsgVO0Lou9G6A904ei6svdG1XhDSF8M95nJeyqdbKR0r81tfI8buaBQuY+OSqFLNVVSsvyF76zkQB/oqZThzt3ysPHeYqRDnmtTZh3yrK0Zf+7sD0KhczvkOYQyohyM2jAvsbsY65ZX9UFd/KAP6p2c7vwVd6ksm1ZG787Q+V1P2X4BOYKNDfzOMETKF+N9UH/V4XpRNB1e6BdFM1b+hEKT+lkLLbd5P1+meZGBVzZX/0Fjdwf+dN3+pg98KPRDjbF49S/pJhT6tS5B4j8UFQCShr1YqAAAAABJRU5ErkJggg=="),
                this.laserContainerElement.appendChild(
                  this.laserPausedImageElement
                ),
                (this.laserContainerElement.className =
                  t.laserContainerElementClassName),
                this.parentElement.appendChild(this.laserContainerElement),
                (this.viewfinderElement.className =
                  t.viewfinderElementClassName),
                this.parentElement.appendChild(this.viewfinderElement),
                this.laserActiveImageElement.classList.add(
                  t.hiddenOpacityClassName
                ),
                this.laserPausedImageElement.classList.remove(
                  t.hiddenOpacityClassName
                ),
                this.viewfinderElement.classList.add(t.pausedClassName);
            },
          },
          {
            key: "flashLaser",
            value: function () {
              this.laserActiveImageElement.classList.remove(
                t.flashColorClassName
              ),
                this.laserActiveImageElement.offsetHeight,
                this.laserActiveImageElement.classList.add(
                  t.flashColorClassName
                );
            },
          },
          {
            key: "flashViewfinder",
            value: function () {
              this.viewfinderElement.classList.remove(t.flashWhiteClassName),
                this.viewfinderElement.offsetHeight,
                this.viewfinderElement.classList.add(t.flashWhiteClassName);
            },
          },
          {
            key: "resize",
            value: function () {
              (this.parentElement.style.maxWidth = ""),
                (this.parentElement.style.maxHeight = "");
              var e = this.originElement.clientWidth,
                t = this.originElement.clientHeight;
              0 !== e && 0 !== t
                ? this.singleImageModeEnabled
                  ? this.resizeCameraUpload(e, t)
                  : (this.resizeVideo(e, t), this.handleVideoDisplay(!1))
                : this.singleImageModeEnabled || this.handleVideoDisplay(!0);
            },
          },
          {
            key: "resizeCameraUpload",
            value: function (e, t) {
              this.cameraUploadLabelElement.style.transform = "scale(".concat(
                Math.min(1, e / 300, t / 300),
                ")"
              );
            },
          },
          {
            key: "resizeVideo",
            value: function (t, n) {
              if (
                !(
                  this.videoElement.videoWidth <= 2 ||
                  this.videoElement.videoHeight <= 2
                )
              ) {
                var r =
                  this.videoElement.videoWidth / this.videoElement.videoHeight;
                if (this.videoFit === e.BarcodePicker.ObjectFit.COVER) {
                  var i = 1,
                    a = 1;
                  return (
                    r < t / n
                      ? (a = Math.min(1, n / (t / r)))
                      : (i = Math.min(1, t / (n * r))),
                    void this.scanner.applyScanSettings(
                      this.scanner.getScanSettings().setBaseSearchArea({
                        x: (1 - i) / 2,
                        y: (1 - a) / 2,
                        width: i,
                        height: a,
                      })
                    )
                  );
                }
                r > t / n ? (n = t / r) : (t = n * r),
                  (this.parentElement.style.maxWidth = "".concat(
                    Math.ceil(t),
                    "px"
                  )),
                  (this.parentElement.style.maxHeight = "".concat(
                    Math.ceil(n),
                    "px"
                  )),
                  window.objectFitPolyfill(this.videoElement);
              }
            },
          },
          {
            key: "checkAndRecoverPlayback",
            value:
              ((o = Zr(
                ao.mark(function t() {
                  var n, r, i, a;
                  return ao.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              ((i = this.videoElement.srcObject),
                              "visible" !== document.visibilityState ||
                                null ==
                                  (null === (n = this.cameraManager) ||
                                  void 0 === n
                                    ? void 0
                                    : n.activeCamera) ||
                                null ==
                                  (null === (r = this.videoElement) ||
                                  void 0 === r
                                    ? void 0
                                    : r.srcObject))
                            ) {
                              t.next = 15;
                              break;
                            }
                            if (
                              i.active &&
                              !1 ===
                                (null === (a = i.getVideoTracks()[0]) ||
                                void 0 === a
                                  ? void 0
                                  : a.muted)
                            ) {
                              t.next = 13;
                              break;
                            }
                            return (
                              (t.prev = 3),
                              e.Logger.log(
                                e.Logger.Level.DEBUG,
                                'Detected visibility change ("visible") event with inactive video source, try to reinitialize camera'
                              ),
                              (t.next = 7),
                              this.cameraManager.reinitializeCamera()
                            );
                          case 7:
                            t.next = 11;
                            break;
                          case 9:
                            (t.prev = 9), (t.t0 = t.catch(3));
                          case 11:
                            t.next = 15;
                            break;
                          case 13:
                            e.Logger.log(
                              e.Logger.Level.DEBUG,
                              'Detected visibility change ("visible") event with active video source, replay video'
                            ),
                              this.playVideo();
                          case 15:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [[3, 9]]
                  );
                })
              )),
              function () {
                return o.apply(this, arguments);
              }),
          },
          {
            key: "updateCameraUploadProgress",
            value: function (e) {
              this.cameraUploadProgressElement.setAttribute("data-progress", e);
            },
          },
          {
            key: "cameraUploadImageLoad",
            value:
              ((a = Zr(
                ao.mark(function e(t) {
                  var n, r, i;
                  return ao.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              this.updateCameraUploadProgress("100"),
                              (i = 1440),
                              t.naturalWidth <= i && t.naturalHeight <= i
                                ? ((n = t.naturalWidth), (r = t.naturalHeight))
                                : t.naturalWidth > t.naturalHeight
                                ? ((n = i),
                                  (r = Math.round(
                                    (t.naturalHeight / t.naturalWidth) * i
                                  )))
                                : ((n = Math.round(
                                    (t.naturalWidth / t.naturalHeight) * i
                                  )),
                                  (r = i)),
                              (e.next = 5),
                              this.cameraUploadFileProcess(t, n, r)
                            );
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e) {
                return a.apply(this, arguments);
              }),
          },
          {
            key: "cameraUploadFileProcess",
            value:
              ((i = Zr(
                ao.mark(function t(n, r, i) {
                  return ao.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              null != this.context2d &&
                                ((this.context2d.canvas.width = r),
                                (this.context2d.canvas.height = i),
                                this.context2d.drawImage(n, 0, 0, r, i),
                                this.scanner.applyImageSettings({
                                  width: r,
                                  height: i,
                                  format: e.ImageSettings.Format.RGBA_8U,
                                })),
                              this.setCameraUploadGuiBusyScanning(!0),
                              (t.next = 4),
                              this.cameraUploadCallback()
                            );
                          case 4:
                            this.setCameraUploadGuiBusyScanning(!1),
                              (this.cameraUploadInProgress = !1);
                          case 6:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              )),
              function (e, t, n) {
                return i.apply(this, arguments);
              }),
          },
          {
            key: "cameraUploadFile",
            value: function () {
              var t = this,
                n = this.cameraUploadInputElement.files;
              if (null != n && 0 !== n.length) {
                this.cameraUploadInProgress = !0;
                var r = new Image(),
                  i = new FileReader();
                (i.onload = function () {
                  (t.cameraUploadInputElement.value = ""),
                    null != i.result &&
                      ((r.onload = t.cameraUploadImageLoad.bind(t, r)),
                      (r.onprogress = function (e) {
                        if (e.lengthComputable) {
                          var n = 5 * Math.round((e.loaded / e.total) * 20);
                          n <= 100 &&
                            t.updateCameraUploadProgress(n.toString());
                        }
                      }),
                      (r.onerror = function () {
                        (t.cameraUploadInProgress = !1),
                          e.Logger.log(
                            e.Logger.Level.WARN,
                            "Could not load image from selected file"
                          );
                      }),
                      (r.src = i.result));
                }),
                  (i.onerror = function () {
                    var n;
                    (t.cameraUploadInProgress = !1),
                      e.Logger.log(
                        e.Logger.Level.WARN,
                        "Error while reading the file: ".concat(
                          null === (n = i.error) || void 0 === n
                            ? void 0
                            : n.toString()
                        )
                      );
                  }),
                  this.updateCameraUploadProgress("0"),
                  i.readAsDataURL(n[0]);
              }
            },
          },
          {
            key: "cameraSwitcherListener",
            value:
              ((r = Zr(
                ao.mark(function t(n) {
                  var r, i, a, o;
                  return ao.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              this.cameraSwitchInProgress ||
                              null == this.cameraManager
                            ) {
                              t.next = 40;
                              break;
                            }
                            return (
                              (r = this.cameraManager),
                              n.preventDefault(),
                              (t.prev = 3),
                              (t.next = 6),
                              e.CameraAccess.getCameras()
                            );
                          case 6:
                            if (((i = t.sent), null != r.activeCamera)) {
                              t.next = 9;
                              break;
                            }
                            return t.abrupt("return");
                          case 9:
                            if (!(i.length <= 1)) {
                              t.next = 12;
                              break;
                            }
                            return (
                              this.setCameraSwitcherVisible(!1),
                              t.abrupt("return")
                            );
                          case 12:
                            (this.cameraSwitchInProgress = !0),
                              (a = i.indexOf(r.activeCamera)),
                              (o = (a + 1) % i.length);
                          case 15:
                            if (o === a) {
                              t.next = 33;
                              break;
                            }
                            return (
                              (t.prev = 16),
                              (t.next = 19),
                              r.initializeCameraWithSettings(
                                i[o],
                                r.activeCameraSettings
                              )
                            );
                          case 19:
                            t.next = 30;
                            break;
                          case 21:
                            if (
                              ((t.prev = 21),
                              (t.t0 = t.catch(16)),
                              e.Logger.log(
                                e.Logger.Level.WARN,
                                "Couldn't access camera:",
                                i[o],
                                t.t0
                              ),
                              (o = (o + 1) % i.length) !== a)
                            ) {
                              t.next = 29;
                              break;
                            }
                            return (
                              this.setCameraSwitcherVisible(!1),
                              (t.next = 29),
                              r.initializeCameraWithSettings(
                                i[o],
                                r.activeCameraSettings
                              )
                            );
                          case 29:
                            return t.abrupt("continue", 15);
                          case 30:
                            return t.abrupt("break", 33);
                          case 33:
                            (this.cameraSwitchInProgress = !1), (t.next = 40);
                            break;
                          case 36:
                            (t.prev = 36),
                              (t.t1 = t.catch(3)),
                              e.Logger.log(e.Logger.Level.ERROR, t.t1),
                              (this.cameraSwitchInProgress = !1);
                          case 40:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [
                      [3, 36],
                      [16, 21],
                    ]
                  );
                })
              )),
              function (e) {
                return r.apply(this, arguments);
              }),
          },
          {
            key: "cameraRecoveryListener",
            value:
              ((n = Zr(
                ao.mark(function e(t) {
                  var n;
                  return ao.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (t.preventDefault(), null == this.cameraManager)
                            ) {
                              e.next = 5;
                              break;
                            }
                            return (
                              (this.cameraManager.activeCamera =
                                this.cameraManager.selectedCamera),
                              (e.next = 5),
                              null === (n = this.cameraManager) || void 0 === n
                                ? void 0
                                : n.reinitializeCamera()
                            );
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (e) {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "setupCameraSwitcher",
            value: function () {
              var e = this;
              (this.cameraSwitcherElement.src =
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0yNi4xNCA4YTQuOTkgNC45OSAwIDAgMC00LjE2IDIuMjI3bC0yLjIxOCAzLjMyOGExLjAwMyAxLjAwMyAwIDAgMS0uODMyLjQ0NUgxOHYtMmMwLTEuMTAyLS44OTgtMi0yLTJoLTZjLTEuMTAyIDAtMiAuODk4LTIgMnYySDVjLTEuNjUyIDAtMyAxLjM0OC0zIDN2MzZjMCAxLjY1MiAxLjM0OCAzIDMgM2g1NGMxLjY1MiAwIDMtMS4zNDggMy0zVjE3YzAtMS42NTItMS4zNDgtMy0zLTNoLTN2LTFjMC0xLjEwMi0uODk4LTItMi0yaC0yYy0xLjEwMiAwLTIgLjg5OC0yIDJ2MWgtNC45MzhhLjk5Ny45OTcgMCAwIDEtLjgyOC0uNDQxbC0yLjI1NC0zLjM1MkE1LjAwMSA1LjAwMSAwIDAgMCAzNy44MjggOHptMCAyaDExLjY4OGMxIDAgMS45MzQuNDk2IDIuNDkyIDEuMzI0bDIuMjU0IDMuMzUyQTIuOTk4IDIuOTk4IDAgMCAwIDQ1LjA2MyAxNkg1OWMuNTUgMCAxIC40NSAxIDF2MzZjMCAuNTUtLjQ1IDEtMSAxSDVjLS41NSAwLTEtLjQ1LTEtMVYxN2MwLS41NS40NS0xIDEtMWgxMy45M2MxLjAwNCAwIDEuOTM3LS41IDIuNDk2LTEuMzM2bDIuMjE5LTMuMzI4QTIuOTk4IDIuOTk4IDAgMCAxIDI2LjE0IDEwek0xMCAxMmg2djJoLTZ6bTQyIDFoMnYxaC0yem0tMjAgNWMtNS4yOSAwLTEwLjI0NiAyLjgzNi0xMi45MzQgNy4zOThhLjk5Ni45OTYgMCAwIDAgLjM1NiAxLjM2OC45OTcuOTk3IDAgMCAwIDEuMzY3LS4zNTZBMTMuMDY1IDEzLjA2NSAwIDAgMSAzMiAyMGM3LjE2OCAwIDEzIDUuODMyIDEzIDEzIDAgLjE4OC0uMDE2LjM3NS0uMDIzLjU2M2wtMi4yNy0yLjI3YTEgMSAwIDEgMC0xLjQxNCAxLjQxNGw0IDRjLjE5NS4xOTUuNDUuMjkzLjcwNy4yOTNhLjk5My45OTMgMCAwIDAgLjcwNy0uMjkzbDQtNGExIDEgMCAxIDAtMS40MTQtMS40MTRsLTIuMzIgMi4zMTZjLjAxMS0uMjAzLjAyNy0uNDA2LjAyNy0uNjA5IDAtOC4yNy02LjczLTE1LTE1LTE1ek0xOCAyOWExIDEgMCAwIDAtLjcwNy4yOTNsLTQgNGExIDEgMCAxIDAgMS40MTQgMS40MTRsMi4zMTMtMi4zMTZjLS4wMDguMjAzLS4wMi40MDYtLjAyLjYwOSAwIDguMjcgNi43MyAxNSAxNSAxNSA1LjM2NyAwIDEwLjM2LTIuODk4IDEzLjAyNy03LjU2M2EuOTk5Ljk5OSAwIDEgMC0xLjczNC0uOTkyQTEzLjA0MiAxMy4wNDIgMCAwIDEgMzIgNDZjLTcuMTY4IDAtMTMtNS44MzItMTMtMTMgMC0uMTg4LjAxMi0uMzc5LjAyLS41NjZsMi4yNzMgMi4yNzNjLjE5NS4xOTUuNDUuMjkzLjcwNy4yOTNhMSAxIDAgMCAwIC43MDctMS43MDdsLTQtNEExIDEgMCAwIDAgMTggMjl6bTkgMmMtLjU1NSAwLTEgLjQ0NS0xIDF2MmMwIC41NTUuNDQ1IDEgMSAxIC41NTUgMCAxLS40NDUgMS0xdi0yYzAtLjU1NS0uNDQ1LTEtMS0xem01IDBjLS41NTUgMC0xIC40NDUtMSAxdjJjMCAuNTU1LjQ0NSAxIDEgMSAuNTU1IDAgMS0uNDQ1IDEtMXYtMmMwLS41NTUtLjQ0NS0xLTEtMXptNSAwYy0uNTU1IDAtMSAuNDQ1LTEgMXYyYzAgLjU1NS40NDUgMSAxIDEgLjU1NSAwIDEtLjQ0NSAxLTF2LTJjMC0uNTU1LS40NDUtMS0xLTF6Ii8+PC9zdmc+Cg=="),
                (this.cameraSwitcherElement.className =
                  t.cameraSwitcherElementClassName),
                this.cameraSwitcherElement.classList.add(t.hiddenClassName),
                this.parentElement.appendChild(this.cameraSwitcherElement),
                ["touchstart", "mousedown"].forEach(function (t) {
                  e.cameraSwitcherElement.addEventListener(
                    t,
                    e.cameraSwitcherListener.bind(e)
                  );
                });
            },
          },
          {
            key: "setupCameraRecovery",
            value: function (e) {
              var n = this;
              (this.cameraRecoveryElement.textContent = e),
                (this.cameraRecoveryElement.className =
                  t.cameraRecoveryElementClassName),
                this.cameraRecoveryElement.classList.add(t.hiddenClassName),
                this.parentElement.appendChild(this.cameraRecoveryElement),
                ["touchstart", "mousedown"].forEach(function (e) {
                  n.cameraRecoveryElement.addEventListener(
                    e,
                    n.cameraRecoveryListener.bind(n)
                  );
                });
            },
          },
          {
            key: "setupTorchToggler",
            value: function () {
              var e = this;
              (this.torchTogglerElement.src =
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0zMC45MzggMWMtLjQ0Ni4wMi0xIC4yMy0xLjMxMy42NTZhMS4zMDIgMS4zMDIgMCAwIDAtLjA2My4wOTRsLTYuNzggMTIuMDYzLS4wNjMuMDkzYy0uNTU1Ljc4NS0uNzI3IDEuNzMtLjU5NCAyLjY1NmwtMjAuNSAyMi41NjMtLjAzMS4wMzFjLTEuMDcgMS4yMTktLjY2NCAzLjAxMi40NjggNC4xNTdoLjAzMmw0LjU5NCA0LjU5M2MuNTcuNTcgMS4yNjUuOTUgMiAxLjA2My43MzQuMTEzIDEuNTQ2LS4wNTUgMi4xNTYtLjU5NGguMDMxbDIyLjU2My0yMC41Yy45My4xMjkgMS44Ny0uMDQzIDIuNjU2LS41OTQuMDItLjAxNS4wNDMtLjAxNS4wNjItLjAzMWwuMDYzLS4wMzEgMTIuMDMxLTYuNzgyYy4wMzEtLjAxOS4wNjMtLjAzOS4wOTQtLjA2Mi40MjItLjMxMy42MzYtLjg2Ny42NTYtMS4zMTMuMDItLjQ0NS0uMDk4LS44NC0uMjUtMS4yNS0uMzA1LS44Mi0uODI4LTEuNjktMS41MzEtMi42ODctMS40MDctMS45OTItMy41MTYtNC4zOS01Ljc1LTYuNjI1LTIuMjM1LTIuMjM0LTQuNjAyLTQuMzEzLTYuNTk0LTUuNzE5LS45OTYtLjcwMy0xLjg2Ny0xLjIyNi0yLjY4OC0xLjUzMS0uNDEtLjE1Mi0uODA0LS4yNy0xLjI1LS4yNXptLjIxOCAyLjAzMWMuMDc4LjAxMi4xNTMuMDI0LjM0NC4wOTQuNTIuMTkxIDEuMy42MzMgMi4yMTkgMS4yODEgMS44MzYgMS4yOTcgNC4xNjggMy4zNTYgNi4zNDMgNS41MzIgMi4xNzYgMi4xNzUgNC4yMzUgNC40NzYgNS41MzIgNi4zMTIuNjQ4LjkxOCAxLjA5IDEuNzMgMS4yODEgMi4yNS4wNy4xOTEuMDgyLjI2Ni4wOTQuMzQ0TDM1LjEyNSAyNS41M2EuOTQ5Ljk0OSAwIDAgMC0uMTI1LjA5NGMtLjMxNi4yNDItLjg2LjMyOC0xLjQzOC4yMTlhMS4wNTYgMS4wNTYgMCAwIDAtLjE4Ny0uMDYzIDMuMTEzIDMuMTEzIDAgMCAxLTEuNDM4LS44MTJsLTYuOTA2LTYuOTA3Yy0uOTc2LS45ODQtMS4xMjktMi40MzctLjY1Ni0zLjA2MmEuNTMyLjUzMiAwIDAgMCAuMDk0LS4wOTR6bS04LjIxOCAxNS41OTRjLjE5OS4yOTcuNDMuNTg2LjY4Ny44NDRsNi45MDYgNi45MDZjLjI2Mi4yNjIuNTQzLjQ4OC44NDQuNjg4TDkuNTMxIDQ2LjkwNmMtLjA4Ni4wNzgtLjI1NC4xMzctLjUzMS4wOTQtLjI3Ny0uMDQzLS42MjktLjIyMy0uOTA2LS41TDMuNSA0MS45MDZjLS41NTktLjU2Ni0uNTYzLTEuMjYxLS40MDYtMS40Mzd6bS0yLjg3NSA4LjMxM2MtLjc3IDAtMS41NDMuMjkyLTIuMTI1Ljg3NWwtMi4xMjUgMi4xMjVhMy4wMjMgMy4wMjMgMCAwIDAgMCA0LjI1IDMuMDIzIDMuMDIzIDAgMCAwIDQuMjUgMGwyLjEyNS0yLjEyNmEzLjAyMyAzLjAyMyAwIDAgMCAwLTQuMjUgMy4wMDIgMy4wMDIgMCAwIDAtMi4xMjUtLjg3NXptMCAyYy4yNTMgMCAuNTE5LjA4Mi43MTguMjguMzk5LjQuMzk5IDEuMDQgMCAxLjQzOGwtMi4xMjUgMi4xMjVhMS4wMTQgMS4wMTQgMCAwIDEtMS40MzcgMCAxLjAxNCAxLjAxNCAwIDAgMSAwLTEuNDM3Yy40MjItLjQyMiAxLjY5OS0xLjY5NiAyLjEyNS0yLjEyNS4xOTktLjIuNDY1LS4yODIuNzE4LS4yODJ6Ii8+PC9zdmc+Cg=="),
                (this.torchTogglerElement.className =
                  t.torchTogglerElementClassName),
                this.torchTogglerElement.classList.add(t.hiddenClassName),
                this.parentElement.appendChild(this.torchTogglerElement),
                ["touchstart", "mousedown"].forEach(function (t) {
                  e.torchTogglerElement.addEventListener(
                    t,
                    (function () {
                      var t = Zr(
                        ao.mark(function t(n) {
                          return ao.wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (null == e.cameraManager) {
                                    t.next = 4;
                                    break;
                                  }
                                  return (
                                    n.preventDefault(),
                                    (t.next = 4),
                                    e.cameraManager.toggleTorch()
                                  );
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()
                  );
                });
            },
          },
          {
            key: "showScanditLogo",
            value: function (e, n) {
              if (
                !e ||
                !0 !== (null == n ? void 0 : n.hiddenScanditLogoAllowed)
              ) {
                var r = document.createElement("img");
                (r.src =
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAAAhCAMAAAB9TZmqAAABgFBMVEVHcEyCgoL+/v6Kior///+FhYXW1tbn5+eAgIDp6en+/v6BgYH///////////+BgYH///////////+wsLCCgoL4+PiBgYH///+srKyAgID////s7OyCgoKBgYGDg4P///+BgYH6+vqBgYH////MzMz39/f///+BgYGbm5uDg4OMjIyBgYG+vr6QkJD///////+BgYGDg4P+/v7Hx8eOjo6BgYH09PT7+/v///////+MjIz9/f3////////Y2Nj6+vrPz8+BgYH9/f3///+3t7f///+Ghob///+AgICDg4P///+IiIj///////+CgoL6+vqmpqb////////t7e3////////////b29vj4+PNzc3y8vLl5eXv7+/U1NTDw8O8vLyRkZH////x8fGJiYmZmZnDw8Pf39/S0tLT09PCwsKfn5/4+PjV1dWlpaWwsLCjo6OsrKzj4+OZmZnCwsLq6uqurq7///+AgICfn5+Tk5OFhYXCwsLJycmYmJjU1NS/v79wPZvPAAAAdnRSTlMAcvoPxiTEAsby9L8p/eusNEoJBlEZ2Pb67nz25fVGOv1Eh+RW7oyC/ToXzkALzmqTe8BJHmf9Uu+n/B2Dnt7/+6MvEP2ZKrmzXHIx2dScYv6wkf3o3SL+/uDhqLbnuNrVV4u4ie7LNGlhweeUnrTsZOjkis/PjpWtfQAACfhJREFUaN7tmXlbGksWxtlMEwRUVjUgrSQqEAQccXdQQRUVVYxqoolqjGa9WW7uW25Xv/pUdxe9q2TM88zMM55/aE5V1/Lr03XeqrZYHuzBHuzB/vPmX+hzgdmcyh/sXrIx95LKPQ64/JoG5oaHHVztzya8Ssl0rV1PfO6A03YbR4xdzUBnblbgXphZm2hv+W0z9bW0+H7tjmL9d2w6VDPon7XX/CsuxR2fTcr1hervk+oWBM9KDa0bLqVys5pOn1vTrxfvG6SrCT3HpwNiS3O1Gzt/E8dN5RHVadNAsL6aXB9ch3/9zWyUdDF/Bqh8/ngm2Shpkp+QB49xEdJy3MbgW4UjaVQ42nola73ywDWt5XhKpIcWbP4h9F3CIOuOEOodiwNz4wvdDsDW/N/PMYPhb1GiGOMY82CiSeWWObYgXsI2SWo4tq7jusOco9xC7yAGF005WixOocIq1mt1eerrw/BT6/L8cu69C3Hfb+EY3NkJ/tINHOU4Vl/VORxGiTOQ9DOTVjGugrVGwmdn/Zxkcv0qds/gOS9rOa6isM+Zc3TaRUsmvhQw2WDO0Z+mNoRnpEnurgjs8RLVPeD3vNkNhMz+2h1PgZP6anrxkTT69d4hhI8IHzCpX8Eb8gyrU1qOxIHJ/A0c5XqHwL7flCOL9GdK2NMR4JRv7LJmnYQvoF2OEHcsqEpY/s1YzK1JYJy7WRu8KoeGo75iMea7iWMxdncYb6CXLBq8I5jhSd7s1YBnnxzjMqLjSDv8kb6Do8+L6556OXYCpYR41RFdbWXx2NwfBrCRYU+jOO4FgBfjEsn+8EpxZBjAHHsX9Y4Tm+3EtKLFV10CPA73SrjfwPFgA0C8KlIOusILtVmHq1pil1HOsC548YcKgMpWUOHJCtbJrJZjwwi2eu7gaGnHdlu6To4DgHdIugwQIi2+GRvwogJgRByxzwF4+vqos5uNY8EBl/Cfrad6Ry3PGCoGHYCLqr94Nxx6joceeIWqfSLzNVQkQptATE0sBk+rXU9rDJ4IKZtxnMAOCQWB0byO46YNqwN3cIzRv+U6OQauAfSNd9KJ+qMkx1SUY3M2cVIFFiQl6xqaTSQW55hkpWy8Q9zs83EgY+pQOBorDiUT9gMbYOCIjWl7YmDBI2nrFmCaxURFS2YG+JlpoRYrWpT5ewlvN+MYp4Gapbm0dV7H0dKN9ak7OAaB8+U6OXaQkihgPX3jsY5yQkqJS05BWkQ+SbN14FGbkIe+ApvC/8dAZxP18IMYsZg5ngP/MPPHgD9C9K9zBXis5+j9FhL6fCMmu2R0kAV/BaWs9h3eqclf20RQntInkjLD6IYtRAKU2WQbp+NY9KK0eDtHH3CWqpNjmieRz2vDAABHjEVTiU6Izqr3pbgiruydET6Vip6yMHuMV07SluLJJfotZg6Fo9Y/gieERFNREnlm5PiIF6uSdZH5/DXinCQsRxM6OB8vtx6/evXKBWyM1Rb5T2TeXG06hEBtwSBJ6DjSMkGM38axCJxH6uRoyRFCUl0fMmthwNYpvVKjTtpPQ5YQq1Cjh0QD6WBn+6DMcbKNSgx77hqvLCYOTuGorVihOSLAWfzl6JWR498hGh1+K3+JPmG5GZVE2DiuQoaskuNrSvl7ks3fRabMOK5hh1AwPhvOcnqO/iVcBG7lOA2Qtno5WqziS8ununY8GKbL5AIKKTFL+UNSo87zR3PDAFwyngsxH3HvGA294/kNFV0oSYmsfGHkOCohyZcQFm6JbGFClDmrVhOBmlueorZvw1d7bSFrMtP3w/iDCDuefpQa9Ryp5Cvs+2/jeEDDvN54PDhwp/NNIkryUsyNhyiw5Jbo6hHerT/D8DjoOcY3Gc9LqfyRzFHjUMWj1m/DOza/SSPHI1b0Djah055V4aE2Y5BP3iwmd3GdZenktNGkPAZXRNQg7diKpvUcKd0r620cZ/CT1Ls+VsTHzi3mm6LkTEzQfwIDTH0HBS0edGEuaEl25H7IeB7pOWodz2+o+ATHrNfvRo4f2OUxnoh6jB/EEE0QF/O3iPIFXPED0so7GTEpb0c/ifpFoAWm6dQcm4GvJzdz9HvxhkzVyXECGyyTpXtOgRaR41BtGC6fEN04mhcCtrdOjtxNHK/wTOoraDNyPGSXn7Al/s5fYI2L4yxwC8cqXksCrxOF0QFjeT8FIULyu9DbZeBI8W9/uZnjAsIhYq2T4+eauhZDoUAfWm4d0jGn7wXWRJoFKlWWc4Hde8YjtwqssPmb6J4iGx1axd4DZx5bC7Yj/lvOOV9QTlL+6MNWzlhuw0diZQnnOmXkOBbGxY0cm13YIaShTo6hLWBElLxjM8Ak7TWwCqwVhT0c0MlZuCFgj65RxRkAT+8Vj6lteDJFy2YVg0aOWKKj4IbC2JYStJBp4mjtugXjGuIptuGYtmHLsDlvQTwqbca5DLblhVbhSOVA4QaO/swwlt6qovMOjsvnTwDEHf1LAK6ERWSRXILKcscwcCEsLuV1YGNuyePZGUR84T7rY9PoNoBhYK5k5HgMvOinZetnbEWkmQaFc/3BUay7ZmteeN4TnhEZssE2Mt4uGdubd2OXtNWOx2znASPHohdajp7J1xOC9dOCjSOiUp13cCwT8qbCDunfED4typ2/Kh4AG19FcZs72wLgWWpZvgBm7hOPHYTfcYRRqWav8d2gezJxAN7dc8LmK2SaSacxdSjmfR+R8wD3YVspcFnYy/5Gnmkcq8tGjpYMUFBzVMy2+5aQrKVejtw8IVPPYysrnSdZQpbZeUVTsjkWzBK+Q/p7FIv57LT47AMnngazl62Hhb3eUTs3M1RsJHw+WaQCf7KmiJgtEkJCs+7OzUBUURpvCzg1nIV1zhz/U7KXexFCInJ24QK915evWdGUsFhy1eq+fJiW2V0NmXDkltQcgzPHl5OvBXu5N0p4MsXVzdFiTwnbWmdjiCeE3ZcVZLmTpmjxZMkeIiREi/muCIlY78Nx+nCPtkzbfevCnp7jMh1FY5uAU0mB64roU0z+fEAHPK+e2WKjUiChsfNKnlCug+6owrH45YyopGde9W0ipJEKY8+JlqPffaTZz3DlkHRfY7mGPyBAldtpmBfGFuqgOMRA//c5Al+cUT6UnVG+M8kcB/I0vEjblDxW3xJKyybppcNas7J+8Wwo14qkoSfzqnjOW2WmbUQRSemImuOs3HhA33iS53VP1Up0m6iBRLncodFf6cWEah+RTCTEJhpmuXt9cHAgXG3pzPQDJbM8PKsaQ7W9D4PniYfP9Sa2mPsJAMBwyfQjgNqGgfBp6IGZKUfCf1vonmkfWiZt9ru+r1bb9++E/f9qThLNBhL5RkKsd1XN9qRIJP2AzNTSTdLJYVv+znWWZu7ow+p4ow1Ys3Snnry7Yj5rHfjfmda/AA1uqYyEPVX6AAAAAElFTkSuQmCC"),
                  (r.className = t.scanditLogoImageElementClassName),
                  this.parentElement.appendChild(r);
              }
            },
          },
          {
            key: "activateGUI",
            value: function () {
              (this.dataCaptureContextCreated = !0),
                this.scanningPaused || this.resumeScanning();
            },
          },
          {
            key: "handleNewScanSettings",
            value: function () {
              null == this.customLaserArea && this.setLaserArea(),
                null == this.customViewfinderArea && this.setViewfinderArea();
            },
          },
          {
            key: "handleVideoDisplay",
            value: function (e) {
              e && !this.isVideoElementDetached
                ? ((this.videoElement.width = this.videoElement.height = 0),
                  (this.videoElement.style.opacity = "0"),
                  document.body.appendChild(this.videoElement),
                  (this.isVideoElementDetached = !0))
                : !e &&
                  this.isVideoElementDetached &&
                  (this.parentElement.insertAdjacentElement(
                    "afterbegin",
                    this.videoElement
                  ),
                  (this.isVideoElementDetached = !1),
                  this.videoElement.removeAttribute("width"),
                  this.videoElement.removeAttribute("height"),
                  this.videoElement.style.removeProperty("opacity"),
                  this.resize());
            },
          },
          {
            key: "handleVideoPause",
            value: function () {
              this.playVideo();
            },
          },
          {
            key: "handleVideoResize",
            value: function () {
              if (
                (this.resize(),
                !(
                  this.videoElement.videoWidth <= 2 ||
                  this.videoElement.videoHeight <= 2
                ))
              )
                if (null != this.contextWebGL) {
                  if (
                    this.contextWebGL.canvas.width ===
                      this.videoElement.videoWidth &&
                    this.contextWebGL.canvas.height ===
                      this.videoElement.videoHeight
                  )
                    return;
                  (this.contextWebGL.canvas.width =
                    this.videoElement.videoWidth),
                    (this.contextWebGL.canvas.height =
                      this.videoElement.videoHeight),
                    this.contextWebGL.viewport(
                      0,
                      0,
                      this.contextWebGL.drawingBufferWidth,
                      this.contextWebGL.drawingBufferHeight
                    ),
                    this.scanner.applyImageSettings({
                      width: this.contextWebGL.drawingBufferWidth,
                      height: this.contextWebGL.drawingBufferHeight,
                      format: e.ImageSettings.Format.RGBA_8U,
                    });
                } else if (null != this.context2d) {
                  if (
                    this.context2d.canvas.width ===
                      this.videoElement.videoWidth &&
                    this.context2d.canvas.height ===
                      this.videoElement.videoHeight
                  )
                    return;
                  (this.context2d.canvas.width = this.videoElement.videoWidth),
                    (this.context2d.canvas.height =
                      this.videoElement.videoHeight),
                    this.scanner.applyImageSettings({
                      width: this.videoElement.videoWidth,
                      height: this.videoElement.videoHeight,
                      format: e.ImageSettings.Format.RGBA_8U,
                    });
                }
            },
          },
          {
            key: "handleWebGLContextLost",
            value: function () {
              e.Logger.log(
                e.Logger.Level.WARN,
                "WebGL context has been lost, restoring..."
              ),
                (this.contextWebGL = void 0),
                this.setupContext(document.createElement("canvas")),
                this.handleVideoResize(),
                e.Logger.log(e.Logger.Level.WARN, "WebGL context restored");
            },
          },
        ]),
        t
      );
    })();
  function Tl(e) {
    throw new Error("Unexpected object: ".concat(e));
  }
  function wl(e, t) {
    if (null == e) return t;
    var n = Nl(e);
    return null == n || Array.isArray(n) || "number" == typeof n ? t : n;
  }
  function Nl(e) {
    try {
      return JSON.parse(e);
    } catch (e) {
      return;
    }
  }
  To(Cl, "grandParentElementClassName", "scandit scandit-container"),
    To(Cl, "parentElementClassName", "scandit scandit-barcode-picker"),
    To(Cl, "hiddenClassName", "scandit-hidden"),
    To(Cl, "hiddenOpacityClassName", "scandit-hidden-opacity"),
    To(Cl, "videoElementClassName", "scandit-video"),
    To(Cl, "scanditLogoImageElementClassName", "scandit-logo"),
    To(Cl, "laserContainerElementClassName", "scandit-laser"),
    To(Cl, "viewfinderElementClassName", "scandit-viewfinder"),
    To(Cl, "cameraSwitcherElementClassName", "scandit-camera-switcher"),
    To(Cl, "cameraRecoveryElementClassName", "scandit-camera-recovery"),
    To(Cl, "torchTogglerElementClassName", "scandit-torch-toggle"),
    To(Cl, "cameraUploadElementClassName", "scandit-camera-upload"),
    To(Cl, "flashColorClassName", "scandit-flash-color"),
    To(Cl, "flashWhiteClassName", "scandit-flash-white"),
    To(Cl, "flashInsetClassName", "scandit-flash-inset"),
    To(Cl, "opacityPulseClassName", "scandit-opacity-pulse"),
    To(Cl, "mirroredClassName", "mirrored"),
    To(Cl, "pausedClassName", "paused"),
    (e.BarcodePicker = (function () {
      function t(e, n) {
        var r,
          i,
          a,
          o,
          s = n.visible,
          c = n.singleImageModeEnabled,
          u = n.singleImageModeSettings,
          l = n.playSoundOnScan,
          d = n.vibrateOnScan,
          h = n.scanningPaused,
          f = n.guiStyle,
          g = n.videoFit,
          m = n.cameraRecoveryText,
          p = n.laserArea,
          v = n.viewfinderArea,
          y = n.scanner,
          b = n.scanSettings,
          E = n.cameraType,
          S = n.targetScanningFPS,
          A = n.hideLogo;
        Io(this, t),
          To(this, "cameraManager", void 0),
          To(this, "gui", void 0),
          To(this, "eventEmitter", void 0),
          To(this, "scanner", void 0),
          To(this, "beepSound", void 0),
          To(this, "vibrateFunction", void 0),
          To(this, "scannerReadyEventListener", void 0),
          To(this, "playSoundOnScan", void 0),
          To(this, "vibrateOnScan", void 0),
          To(this, "scanningPaused", void 0),
          To(this, "latestVideoTimeProcessed", void 0),
          To(this, "destroyed", void 0),
          To(this, "isReadyToWork", void 0),
          To(this, "cameraAccess", void 0),
          To(this, "targetScanningFPS", void 0),
          To(this, "averageProcessingTime", void 0),
          To(this, "externalImageData", void 0),
          To(this, "internalImageData", void 0),
          (this.isReadyToWork = !1),
          (this.destroyed = !1),
          (this.scanningPaused = h),
          (mc.Howler.autoSuspend = !1),
          (this.beepSound = new mc.Howl({
            src: "data:audio/mp3;base64,//uwAAAAA8ROTJVigAB4icmSrFAAE/IjVfj6gAJ+RGq/H1AAADEN55555509PSUkYjEMQ5DCaBiMBmSoGPBh6QGGJAZo8BoDwGYJADEBmQbAAbMBcAJ0IIRQuFwuF8vm6aaaaaaCCH/9RcIubDkCgBQAzBOLL5cLhog3p////6BgTBFC4yZfTah/////WmYFwuBgTh///5cEDgnB8AMQ3nnnnnnT09JSRiMQxDkMJoGIwGZKgY8GHpAYYkBmjwGgPAZgkAMQGZBsABswFwAnQghFC4XC4Xy+bppppppoIIf/1Fwi5sOQKAFADME4svlwuGiDen////oGBMEULjJl9NqH////9aZgXC4GBOH///lwQOCcH7usq4IwABEoZUkABBACSAH6LQxWQ1ekTmN4ZafMA1wANy7UyDUPgZzK4WdA1sdhHQGm0eAcG0Uwxsang94vpi3jMEgeLBTM1nUEFdDatet8mwsLJddIZ0CIGTVYoADBkuf9NrJ1f3UsUMJtLy/dMOCTfrUURBBm/6mKA7P6lkcLj/z5mI2/+plE5/9TFgqrf/qYpFf/9v///9Z7////Weu6yrgjAAEShlSQAEEAJIAfotDFZDV6ROY3hlp8wDXAA3LtTINQ+BnMrhZ0DWx2EdAabR4BwbRTDGxqeD3i+mLeMwSB4sFMzWdQQV0Nq163ybCwsl10hnQIgZNVigAMGS5/02snV/dSxQwm0vL90w4JN+tRREEGb/qYoDs/qWRwuP/PmYjb/6mUTn/1MWCqt/+pikV//2////1nv///9Z57qrtSAAaAEOPo6q0VkVoBSMfBmZVHFMomra/sFv//+7IADwAEcXjR92KgAo4vGj7sVABRJeNFzHKLAiS8aLmOUWARYQFAEDoGXFeBv7iAZHHAGKwQLnD0RkkCKmpzOKUjUjUiy0nUlpOh2UUjSoc4VsAaFAMkgspOZb1de+/222v3lN9ikN8FBKOaa0lI/b/+32+TGsxIaGIRJknav9///1fSInqSWHRKS6v///6/nCEJvdVdqQADQAhx9HVWisitAKRj4MzKo4plE1bX9gt/iLCAoAgdAy4rwN/cQDI44AxWCBc4eiMkgRU1OZxSkakakWWk6ktJ0OyikaVDnCtgDQoBkkFlJzLerr33+221+8pvsUhvgoJRzTWkpH7f/2+3yY1mJDQxCJMk7V/v//+r6RE9SSw6JSXV////X84QhNqq9yGAAtDIPgN54cGQ0s4MLUdIZgz1qumUxddqEpWGZfQdAYAOR0btmDgYpm3SG6ec7wnc1aVs2dj+1bbTnyweolsigCR4Bd4UcqIoKbf1mlbVoekvRo/NT+yIW3Ci11PUfr6dTaC7b2fe/yLtUspAgFDuR53///+pvOkM14YR+pvt/+v6/koSLVV7kMABaGQfAbzw4MhpZwYWo6QzBnrVdMpi67UJSsMy+g6AwAcjo3bMHAxTNukN0853hO5q0rZs7H9q22nPlg9RLZFAEjwC7wo5URQU2/rNK2rQ9JejR+an9kQtuFFrqeo/X06m0F23s+9/kXapZSBAKHcjzv///9TedIZrwwj9Tfb/9f1/JQkVi7zplQAFIAgwMk9GmLaGUorLwS8iIOIgIHDACBpGPGPIQTeb9Ig1+zoNGAMN6Ijtv5KI3h0rZfrLVE0dZ6n/+7IAHwAEk3jRez2kEJJvGi9ntIIT3eU/7PqwQnu8p/2fVgg7IPUzJfLB65iPwTcgPIEeWDqpvvvo6N2qSs9T1fIxKtlg1Fg5Kkp6z7nWWdSqqUulspS3s9vkhqoBb8Kg7POv6///9vUQVqqgx7Xmf7f//rbyUN1Rd50yoACkAQYGSejTFtDKUVl4JeREHEQEDhgBA0jHjHkIJvN+kQa/Z0GjAGG9ER238lEbw6Vsv1lqiaOs9SdkHqZkvlg9cxH4JuQHkCPLB1U3330dG7VJWep6vkYlWywaiwclSU9Z9zrLOpVVKXS2Upb2e3yQ1UAt+FQdnnX9f//+3qIK1VQY9rzP9v//1t5KG6jmYd0IAA0gIAD4Llq2gAnFo8YQd9sJd67dV09LYmltad5GkSGPh80IAtg4NUiAWeV15W6FXRpnnczdM46C/SvZzut0SUNUjYiIywAAvA1QCg40iSbnTJdtr85/P3fO63YhxpWgiDUWgsOUjjzp+tq2+r+++jtYd2dURoFQ+LhSOZ0/Xrb/9T9Sz21xU3rrCIH1Zi9ev9/1atZ7aRwqb1nMw7oQABpAQAHwXLVtABOLR4wg77YS7126rp6WxNLa07yNIkMfD5oQBbBwapEAs8rryt0KujTPO5m6Zx0F+lezndbokoapGxERlgABeBqgFBxpEk3OmS7bX5z+fu+d1uxDjStBEGotBYcpHHnT9bVt9X999Haw7s6ojQKh8XCkczp+vW3/6n6lntripvXWEQPqzF69f7/q1az20jhU3rV7maZEAAWQDDArs+W/cFQBSysHAKdYWnzUwc2mlLOlivqupASYLMR//In/+7IAFQAEsHlRe4mkoJYPKi9xNJQSUeVF7hqSwko8qL3DUliIwQla+ytB9/jCGTwOk7YLCgqBZuy6Dc6/c4eQc0L4CDQAc0T4T5smsq7e5vm9np2bqoaspnmWgiEzoOAqU861fWtS6kamrTW703pasnfL4YpEzZ2sf+32//WnrnSY1XDcPXnP/r/q/baZjfd7maZEAAWQDDArs+W/cFQBSysHAKdYWnzUwc2mlLOlivqupASYLMR//ImIwQla+ytB9/jCGTwOk7YLCgqBZuy6Dc6/c4eQc0L4CDQAc0T4T5smsq7e5vm9np2bqoaspnmWgiEzoOAqU861fWtS6kamrTW703pasnfL4YpEzZ2sf+32//WnrnSY1XDcPXnP/r/q/baZjfdpycyVAATgBDA1ALqbMHAeBrYsAWWvHH2AywaA7BHvZmwaGmklUBEh5MPfAYCKjjZQRAGyw/4fwM8hGdB9J4CJscei+u5YLTImQ+QavAASY+iycWpPbNd999Hba+rMXrrCZ0W1StZar1utXOa91mj1O3XkCZ1SkCRAiy16n9Tfq//P+onVdYcXq02/9f9bf+P47nacnMlQAE4AQwNQC6mzBwHga2LAFlrxx9gMsGgOwR72ZsGhppJVARIeTD3wGAio42UEQBssP+H8DPIRnQfSeAibHHovruWC0yJkPkGrwAEmPosnFqT2zXfffR22vqzF66wmdFtUrWWq9brVzmvdZo9Tt15AmdUpAkQIstep/U36v/z/qJ1XWHF6tNv/X/W3/j+O543/+6UACbAYaztA4tsHCcKBx5S8EJ48ScsKkEaV3wtIwd45ACAQBij/+7IAFAAEt3hUfWKgApbvCo+sVABSgV9f+YoAAlAr6/8xQAAgAbKYoGDwWBIDlhrJuWqzTL9SbKMay9NzZaZstX1Hqz6AYYCxHFLl9Pf+tVapulmK7UWt9B61l8Neg3tQSZCrztaV88yFfW7oCbU6RmLPAOCwEggQQ0TqfapGrV//Uf9RC6EzDAiSHKL/////nREb//dKABNgMNZ2gcW2DhOFA48peCE8eJOWFSCNK74WkYO8cgBAIAxQQANlMUDB4LAkByw1k3LVZpl+pNlGNZem5stM2Wr6j1Z9AMMBYjily+nv/WqtU3SzFdqLW+g9ay+GvQb2oJMhV52tK+eZCvrd0BNqdIzFngHBYCQQIIaJ1PtUjVq//qP+ohdCZhgRJDlF/////zoi5C6lVAABQCoDYQD4ZCwVB9kTFKkiv9NQcExMLk3ipgtxrzPf8LZgdNYHsgYIPgbIgAEXEAwCgpAie4XVi5BaBlBUxSQfMO7yfQPFcsGReNjIgX0QvmASaIgQc3SJkgpqr+myNNNNJSSX/n1Hw/4CgwqkXN3qSMTVX//U2skkQuTq9JJEy/+ybvT6p1IjCCpfiL/+SuQupVQAAUAqA2EA+GQsFQfZExSpIr/TUHBMTC5N4qYLca8z3/C2YHTWB7IGCD4GyIABFxAMAoKQInuF1YuQWgZQVMUkHzDu8n0DxXLBkXjYyIF9EL5gEmiIEHN0iZIKaq/psjTTTSUkl/59R8P+AoMKpFzd6kjE1V//1NrJJELk6vSSRMv/sm70+qdSIwgqX4i//klMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+7IAAA/wAABpBwAACAAADSDgAAEAAAGkAAAAIAAANIAAAARMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",
          })),
          (this.vibrateFunction =
            null !==
              (r =
                null !==
                  (i =
                    null !== (a = navigator.vibrate) && void 0 !== a
                      ? a
                      : navigator.webkitVibrate) && void 0 !== i
                  ? i
                  : navigator.mozVibrate) && void 0 !== r
              ? r
              : navigator.msVibrate),
          (this.eventEmitter = new Us.exports.EventEmitter()),
          this.setPlaySoundOnScanEnabled(l),
          this.setVibrateOnScanEnabled(d),
          this.setTargetScanningFPS(S),
          (this.scanner =
            null !== (o = null == y ? void 0 : y.applyScanSettings(b)) &&
            void 0 !== o
              ? o
              : new Bc({ scanSettings: b })),
          (this.scannerReadyEventListener = this.handleScannerReady.bind(this)),
          this.scanner.on("ready", this.scannerReadyEventListener),
          (this.gui = new Cl({
            scanner: this.scanner,
            originElement: e,
            singleImageModeEnabled: c,
            singleImageModeSettings: u,
            scanningPaused: h,
            visible: s,
            guiStyle: f,
            videoFit: g,
            hideLogo: A,
            cameraRecoveryText: m,
            laserArea: p,
            viewfinderArea: v,
            cameraUploadCallback: this.processVideoFrame.bind(this, !0),
          })),
          c
            ? ((this.cameraManager = new _u(
                this.scanner,
                this.triggerCameraAccessError.bind(this),
                this.gui
              )),
              this.gui.setCameraType(E))
            : ((this.cameraManager = new Au(
                this.scanner,
                this.triggerCameraAccessError.bind(this),
                this.gui
              )),
              this.scheduleVideoProcessing()),
          this.gui.setCameraManager(this.cameraManager);
      }
      var n, r, i, a, o, s, c, u, l, d;
      return (
        No(
          t,
          [
            {
              key: "destroy",
              value: function () {
                var e =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0];
                this.pauseScanning(!0),
                  this.scanner.removeListener(
                    "ready",
                    this.scannerReadyEventListener
                  ),
                  (this.destroyed = !0),
                  e && this.scanner.destroy(),
                  this.gui.destroy(),
                  this.eventEmitter.removeAllListeners();
              },
            },
            {
              key: "applyScanSettings",
              value: function (e) {
                return this.scanner.applyScanSettings(e), this;
              },
            },
            {
              key: "isScanningPaused",
              value: function () {
                return this.scanningPaused;
              },
            },
            {
              key: "pauseScanning",
              value: function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                return (
                  (this.scanningPaused = !0),
                  e && this.cameraManager.stopStream().catch(function () {}),
                  this.scanner.isReady() && this.gui.pauseScanning(),
                  this
                );
              },
            },
            {
              key: "resumeScanning",
              value:
                ((d = Zr(
                  ao.mark(function e() {
                    return ao.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((this.scanningPaused = !1),
                                this.scanner.isReady() &&
                                  this.gui.resumeScanning(),
                                !this.cameraAccess ||
                                  null != this.getActiveCamera())
                              ) {
                                e.next = 5;
                                break;
                              }
                              return (
                                (e.next = 5), this.cameraManager.setupCameras()
                              );
                            case 5:
                              return e.abrupt("return", this);
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function () {
                  return d.apply(this, arguments);
                }),
            },
            {
              key: "getActiveCamera",
              value: function () {
                return this.cameraManager.activeCamera;
              },
            },
            {
              key: "setActiveCamera",
              value:
                ((l = Zr(
                  ao.mark(function e(t, n) {
                    return ao.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (null != t && this.cameraAccess) {
                                e.next = 8;
                                break;
                              }
                              if (
                                (this.cameraManager.setSelectedCamera(t),
                                this.cameraManager.setSelectedCameraSettings(n),
                                !this.cameraAccess)
                              ) {
                                e.next = 6;
                                break;
                              }
                              return (
                                (e.next = 6), this.cameraManager.setupCameras()
                              );
                            case 6:
                              e.next = 10;
                              break;
                            case 8:
                              return (
                                (e.next = 10),
                                this.cameraManager.initializeCameraWithSettings(
                                  t,
                                  n
                                )
                              );
                            case 10:
                              return e.abrupt("return", this);
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function (e, t) {
                  return l.apply(this, arguments);
                }),
            },
            {
              key: "setCameraType",
              value:
                ((u = Zr(
                  ao.mark(function e(t) {
                    return ao.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (this.gui.setCameraType(t), !this.cameraAccess)
                              ) {
                                e.next = 6;
                                break;
                              }
                              return (
                                (e.next = 4),
                                this.cameraManager.setCameraType(t)
                              );
                            case 4:
                              e.next = 7;
                              break;
                            case 6:
                              this.cameraManager.setInitialCameraType(t);
                            case 7:
                              return e.abrupt("return", this);
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function (e) {
                  return u.apply(this, arguments);
                }),
            },
            {
              key: "applyCameraSettings",
              value:
                ((c = Zr(
                  ao.mark(function e(t) {
                    return ao.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this.cameraAccess) {
                                e.next = 4;
                                break;
                              }
                              this.cameraManager.setSelectedCameraSettings(t),
                                (e.next = 6);
                              break;
                            case 4:
                              return (
                                (e.next = 6),
                                this.cameraManager.applyCameraSettings(t)
                              );
                            case 6:
                              return e.abrupt("return", this);
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function (e) {
                  return c.apply(this, arguments);
                }),
            },
            {
              key: "isVisible",
              value: function () {
                return this.gui.isVisible();
              },
            },
            {
              key: "setVisible",
              value: function (e) {
                return this.gui.setVisible(e), this;
              },
            },
            {
              key: "isMirrorImageEnabled",
              value: function () {
                return this.gui.isMirrorImageEnabled();
              },
            },
            {
              key: "setMirrorImageEnabled",
              value: function (e) {
                return this.gui.setMirrorImageEnabled(e, !0), this;
              },
            },
            {
              key: "isPlaySoundOnScanEnabled",
              value: function () {
                return this.playSoundOnScan;
              },
            },
            {
              key: "setPlaySoundOnScanEnabled",
              value: function (e) {
                return (this.playSoundOnScan = e), this;
              },
            },
            {
              key: "isVibrateOnScanEnabled",
              value: function () {
                return this.vibrateOnScan;
              },
            },
            {
              key: "setVibrateOnScanEnabled",
              value: function (e) {
                return (this.vibrateOnScan = e), this;
              },
            },
            {
              key: "isCameraSwitcherEnabled",
              value: function () {
                return this.cameraManager.isCameraSwitcherEnabled();
              },
            },
            {
              key: "setCameraSwitcherEnabled",
              value: function (e) {
                return (
                  this.cameraManager
                    .setCameraSwitcherEnabled(e)
                    .catch(function () {}),
                  this
                );
              },
            },
            {
              key: "isTorchToggleEnabled",
              value: function () {
                return this.cameraManager.isTorchToggleEnabled();
              },
            },
            {
              key: "setTorchToggleEnabled",
              value: function (e) {
                return this.cameraManager.setTorchToggleEnabled(e), this;
              },
            },
            {
              key: "isTapToFocusEnabled",
              value: function () {
                return this.cameraManager.isTapToFocusEnabled();
              },
            },
            {
              key: "setTapToFocusEnabled",
              value: function (e) {
                return this.cameraManager.setTapToFocusEnabled(e), this;
              },
            },
            {
              key: "isPinchToZoomEnabled",
              value: function () {
                return this.cameraManager.isPinchToZoomEnabled();
              },
            },
            {
              key: "setPinchToZoomEnabled",
              value: function (e) {
                return this.cameraManager.setPinchToZoomEnabled(e), this;
              },
            },
            {
              key: "setTorchEnabled",
              value:
                ((s = Zr(
                  ao.mark(function e(t) {
                    return ao.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.cameraManager.setTorchEnabled(t)
                              );
                            case 2:
                              return e.abrupt("return", this);
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function (e) {
                  return s.apply(this, arguments);
                }),
            },
            {
              key: "setZoom",
              value:
                ((o = Zr(
                  ao.mark(function e(t) {
                    return ao.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2), this.cameraManager.setZoom(t)
                              );
                            case 2:
                              return e.abrupt("return", this);
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function (e) {
                  return o.apply(this, arguments);
                }),
            },
            {
              key: "isReady",
              value: function () {
                return this.isReadyToWork;
              },
            },
            {
              key: "on",
              value: function (e, t) {
                var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                return (
                  "ready" === e
                    ? this.isReadyToWork
                      ? t()
                      : this.eventEmitter.once(e, t, this)
                    : !0 === n
                    ? this.eventEmitter.once(e, t, this)
                    : this.eventEmitter.on(e, t, this),
                  this
                );
              },
            },
            {
              key: "removeListener",
              value: function (e, t) {
                return this.eventEmitter.removeListener(e, t), this;
              },
            },
            {
              key: "removeAllListeners",
              value: function (e) {
                return this.eventEmitter.removeAllListeners(e), this;
              },
            },
            {
              key: "addListener",
              value: function (e, t, n) {
                return this.on(e, t, n);
              },
            },
            {
              key: "setGuiStyle",
              value: function (e) {
                return this.gui.setGuiStyle(e), this;
              },
            },
            {
              key: "setVideoFit",
              value: function (e) {
                return this.gui.setVideoFit(e), this;
              },
            },
            {
              key: "accessCamera",
              value:
                ((a = Zr(
                  ao.mark(function e() {
                    return ao.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                this.cameraAccess &&
                                null != this.getActiveCamera()
                              ) {
                                e.next = 4;
                                break;
                              }
                              return (
                                (e.next = 3), this.cameraManager.setupCameras()
                              );
                            case 3:
                              this.cameraAccess = !0;
                            case 4:
                              return e.abrupt("return", this);
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function () {
                  return a.apply(this, arguments);
                }),
            },
            {
              key: "createParserForFormat",
              value: function (e) {
                return this.scanner.createParserForFormat(e);
              },
            },
            {
              key: "reassignOriginElement",
              value: function (t) {
                if (!e.BrowserHelper.isValidHTMLElement(t))
                  throw new hc({
                    name: "NoOriginElementError",
                    message: "A valid origin HTML element must be given",
                  });
                return this.gui.reassignOriginElement(t), this;
              },
            },
            {
              key: "setTargetScanningFPS",
              value: function (e) {
                return e <= 0 && (e = 30), (this.targetScanningFPS = e), this;
              },
            },
            {
              key: "getScanner",
              value: function () {
                return this.scanner;
              },
            },
            {
              key: "clearSession",
              value: function () {
                return this.scanner.clearSession(), this;
              },
            },
            {
              key: "setLaserArea",
              value: function (e) {
                return this.gui.setLaserArea(e), this;
              },
            },
            {
              key: "setViewfinderArea",
              value: function (e) {
                return this.gui.setViewfinderArea(e), this;
              },
            },
            {
              key: "pauseCameraAccess",
              value: function () {
                return (
                  (this.cameraAccess = !1),
                  this.cameraManager.stopStream().catch(function () {}),
                  this
                );
              },
            },
            {
              key: "triggerCameraAccessError",
              value: function (e) {
                this.eventEmitter.emit("cameraAccessError", e);
              },
            },
            {
              key: "handleScanResult",
              value: function (e) {
                var t = this;
                (e.imageData = this.externalImageData),
                  this.eventEmitter.emit("processFrame", e),
                  (0 === e.barcodes.length && 0 === e.texts.length) ||
                    (this.eventEmitter.once("scan", function () {
                      var n,
                        r = e.barcodes.some(function (t) {
                          return !e.rejectedCodes.has(t);
                        }),
                        i = e.texts.some(function (t) {
                          return !e.rejectedTexts.has(t);
                        });
                      (r || i) &&
                        (t.gui.flashGUI(),
                        t.playSoundOnScan && t.beepSound.play(),
                        t.vibrateOnScan &&
                          (null === (n = t.vibrateFunction) ||
                            void 0 === n ||
                            n.call(navigator, 300)));
                    }),
                    this.eventEmitter.emit("scan", e));
              },
            },
            {
              key: "scheduleVideoProcessing",
              value: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                window.setTimeout(
                  Zr(
                    ao.mark(function t() {
                      return ao.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), e.videoProcessing();
                            case 2:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  ),
                  t
                );
              },
            },
            {
              key: "scheduleNextVideoProcessing",
              value:
                ((i = Zr(
                  ao.mark(function e(t) {
                    var n;
                    return ao.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!(this.targetScanningFPS < 60)) {
                                e.next = 11;
                                break;
                              }
                              if (
                                (null == this.averageProcessingTime
                                  ? (this.averageProcessingTime =
                                      performance.now() - t)
                                  : (this.averageProcessingTime =
                                      0.9 * this.averageProcessingTime +
                                      0.1 * (performance.now() - t)),
                                (n = Math.max(
                                  0,
                                  1e3 / this.targetScanningFPS -
                                    this.averageProcessingTime
                                )),
                                !(Math.round(n) <= 16))
                              ) {
                                e.next = 8;
                                break;
                              }
                              return (e.next = 6), this.videoProcessing();
                            case 6:
                              e.next = 9;
                              break;
                            case 8:
                              this.scheduleVideoProcessing(n);
                            case 9:
                              e.next = 13;
                              break;
                            case 11:
                              return (e.next = 13), this.videoProcessing();
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function (e) {
                  return i.apply(this, arguments);
                }),
            },
            {
              key: "processVideoFrame",
              value:
                ((r = Zr(
                  ao.mark(function e(t) {
                    var n;
                    return ao.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((this.internalImageData =
                                  this.gui.getImageData(
                                    this.internalImageData
                                  )),
                                null != this.internalImageData)
                              ) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return");
                            case 3:
                              if (
                                (null == this.externalImageData ||
                                0 === this.externalImageData.byteLength ||
                                this.externalImageData.byteLength !==
                                  this.internalImageData.byteLength
                                  ? (this.externalImageData = new Uint8Array(
                                      this.internalImageData
                                    ))
                                  : this.externalImageData.set(
                                      this.internalImageData
                                    ),
                                this.scanningPaused)
                              ) {
                                e.next = 21;
                                break;
                              }
                              return (
                                this.eventEmitter.listenerCount("submitFrame") >
                                  0 &&
                                  this.eventEmitter.emit(
                                    "submitFrame",
                                    new wc(
                                      [],
                                      [],
                                      this.externalImageData,
                                      this.scanner.getImageSettings()
                                    )
                                  ),
                                (e.prev = 6),
                                (e.next = 9),
                                this.scanner.processImage(
                                  this.internalImageData,
                                  t
                                )
                              );
                            case 9:
                              (n = e.sent),
                                (this.internalImageData = n.imageData),
                                this.scanningPaused || this.handleScanResult(n),
                                (e.next = 21);
                              break;
                            case 14:
                              if (
                                ((e.prev = 14),
                                (e.t0 = e.catch(6)),
                                (this.internalImageData = void 0),
                                "ImageSettingsDataMismatch" !== e.t0.name)
                              ) {
                                e.next = 19;
                                break;
                              }
                              return e.abrupt("return");
                            case 19:
                              this.pauseScanning(),
                                this.eventEmitter.emit("scanError", e.t0);
                            case 21:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[6, 14]]
                    );
                  })
                )),
                function (e) {
                  return r.apply(this, arguments);
                }),
            },
            {
              key: "videoProcessing",
              value:
                ((n = Zr(
                  ao.mark(function e() {
                    var t, n;
                    return ao.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!this.destroyed) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              if (
                                null !=
                                  (null === (t = this.getActiveCamera()) ||
                                  void 0 === t
                                    ? void 0
                                    : t.currentResolution) &&
                                !this.scanningPaused &&
                                this.scanner.isReady() &&
                                !this.scanner.isBusyProcessing() &&
                                this.latestVideoTimeProcessed !==
                                  this.gui.getVideoCurrentTime()
                              ) {
                                e.next = 5;
                                break;
                              }
                              return (
                                this.scheduleVideoProcessing(),
                                e.abrupt("return")
                              );
                            case 5:
                              if (null != this.latestVideoTimeProcessed) {
                                e.next = 8;
                                break;
                              }
                              return (e.next = 8), this.resumeScanning();
                            case 8:
                              return (
                                (n = performance.now()),
                                (this.latestVideoTimeProcessed =
                                  this.gui.getVideoCurrentTime()),
                                (e.next = 12),
                                this.processVideoFrame(!1)
                              );
                            case 12:
                              return (
                                (e.next = 14),
                                this.scheduleNextVideoProcessing(n)
                              );
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: "handleScannerReady",
              value: function () {
                (this.isReadyToWork = !0), this.eventEmitter.emit("ready");
              },
            },
          ],
          [
            { key: "ready", value: function () {} },
            { key: "submitFrame", value: function (e) {} },
            { key: "processFrame", value: function (e) {} },
            { key: "scan", value: function (e) {} },
            { key: "scanError", value: function (e) {} },
            { key: "cameraAccessError", value: function (e) {} },
            {
              key: "create",
              value: (function () {
                var n = Zr(
                  ao.mark(function n(r) {
                    var i,
                      a,
                      o,
                      s,
                      c,
                      u,
                      l,
                      d,
                      h,
                      f,
                      g,
                      m,
                      p,
                      v,
                      y,
                      b,
                      E,
                      S,
                      A,
                      _,
                      C,
                      T,
                      w,
                      N,
                      I,
                      k,
                      L,
                      x,
                      M,
                      V,
                      O,
                      R,
                      D,
                      P,
                      F,
                      B,
                      j,
                      U,
                      G,
                      z,
                      W,
                      H,
                      Y,
                      Q,
                      Z,
                      q,
                      X,
                      K = arguments;
                    return ao.wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (
                              ((a =
                                K.length > 1 && void 0 !== K[1] ? K[1] : {}),
                              (o = a.visible),
                              (s = void 0 === o || o),
                              (c = a.singleImageModeSettings),
                              (u = void 0 === c ? {} : c),
                              (l = a.playSoundOnScan),
                              (d = void 0 !== l && l),
                              (h = a.vibrateOnScan),
                              (f = void 0 !== h && h),
                              (g = a.scanningPaused),
                              (m = void 0 !== g && g),
                              (p = a.guiStyle),
                              (v = void 0 === p ? t.GuiStyle.LASER : p),
                              (y = a.videoFit),
                              (b = void 0 === y ? t.ObjectFit.CONTAIN : y),
                              (E = a.cameraRecoveryText),
                              (S =
                                void 0 === E
                                  ? "Tap/click to resume scanning"
                                  : E),
                              (A = a.laserArea),
                              (_ = a.viewfinderArea),
                              (C = a.scanner),
                              (T = a.scanSettings),
                              (w = void 0 === T ? new e.ScanSettings() : T),
                              (N = a.enableCameraSwitcher),
                              (I = void 0 === N || N),
                              (k = a.enableTorchToggle),
                              (L = void 0 === k || k),
                              (x = a.enableTapToFocus),
                              (M = void 0 === x || x),
                              (V = a.enablePinchToZoom),
                              (O = void 0 === V || V),
                              (R = a.accessCamera),
                              (D = void 0 === R || R),
                              (P = a.camera),
                              (F = a.cameraType),
                              (B = void 0 === F ? e.Camera.Type.BACK : F),
                              (j = a.cameraSettings),
                              (U = a.targetScanningFPS),
                              (G = void 0 === U ? 30 : U),
                              (z = a.hideLogo),
                              (W = void 0 !== z && z),
                              (H =
                                e.BrowserHelper.userAgentInfo.getDevice().type),
                              (Y =
                                null !==
                                  (i =
                                    "mobile" === H || "tablet" === H
                                      ? u.mobile
                                      : u.desktop) && void 0 !== i
                                  ? i
                                  : {}),
                              (Q =
                                Y.usageStrategy ===
                                e.SingleImageModeSettings.UsageStrategy.NEVER),
                              (Z =
                                Y.usageStrategy ===
                                e.SingleImageModeSettings.UsageStrategy.ALWAYS),
                              (q = e.BrowserHelper.checkBrowserCompatibility())
                                .scannerSupport &&
                                (!Q || q.fullSupport))
                            ) {
                              n.next = 9;
                              break;
                            }
                            throw new fc(q);
                          case 9:
                            if (
                              (q.fullSupport ||
                                Z ||
                                e.Logger.log(
                                  e.Logger.Level.INFO,
                                  "BarcodePicker's Single Image Mode is being used as fallback as the OS/browser combination doesn't support camera video stream scanning (https://caniuse.com/#feat=stream). You can configure this behaviour via the \"singleImageModeSettings\" option.",
                                  q
                                ),
                              "done" === e.configurePhase)
                            ) {
                              n.next = 12;
                              break;
                            }
                            throw new hc({
                              name: "LibraryNotConfiguredError",
                              message:
                                "started" === e.configurePhase
                                  ? "The library has not completed its configuration yet, please call 'configure' and wait for the returned\n              promise's resolution"
                                  : "The library was not configured, 'configure' must be called with valid parameters before instantiating\n              the BarcodePicker",
                            });
                          case 12:
                            if (e.BrowserHelper.isValidHTMLElement(r)) {
                              n.next = 14;
                              break;
                            }
                            throw new hc({
                              name: "NoOriginElementError",
                              message:
                                "A valid origin HTML element must be given",
                            });
                          case 14:
                            if (
                              ((X = new t(r, {
                                visible: s,
                                singleImageModeEnabled: !q.fullSupport || Z,
                                singleImageModeSettings: Y,
                                playSoundOnScan: d,
                                vibrateOnScan: f,
                                scanningPaused: m,
                                guiStyle: v,
                                videoFit: b,
                                cameraRecoveryText: S,
                                laserArea: A,
                                viewfinderArea: _,
                                scanner: C,
                                scanSettings: w,
                                cameraType: B,
                                targetScanningFPS: G,
                                hideLogo: W,
                              })).cameraManager.setInteractionOptions(
                                I,
                                L,
                                M,
                                O
                              ),
                              X.cameraManager.setInitialCameraType(B),
                              X.cameraManager.setSelectedCamera(P),
                              X.cameraManager.setSelectedCameraSettings(j),
                              (X.cameraAccess = D),
                              X.on("scanError", function (e) {
                                ["localhost", "127.0.0.1", ""].includes(
                                  window.location.hostname
                                ) && alert(e);
                              }),
                              !D)
                            ) {
                              n.next = 24;
                              break;
                            }
                            return (
                              (n.next = 24), X.cameraManager.setupCameras()
                            );
                          case 24:
                            return n.abrupt("return", X);
                          case 25:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                );
                return function (e) {
                  return n.apply(this, arguments);
                };
              })(),
            },
          ]
        ),
        t
      );
    })()),
    ((ju =
      (Bu = e.BarcodePicker || (e.BarcodePicker = {})).GuiStyle ||
      (Bu.GuiStyle = {})).NONE = "none"),
    (ju.LASER = "laser"),
    (ju.VIEWFINDER = "viewfinder"),
    ((Uu = Bu.ObjectFit || (Bu.ObjectFit = {})).CONTAIN = "contain"),
    (Uu.COVER = "cover"),
    (function (e) {
      (e.ACCESS_CAMERA = "accessCamera"),
        (e.CAMERA = "camera"),
        (e.CAMERA_SETTINGS = "cameraSettings"),
        (e.CAMERA_TYPE = "cameraType"),
        (e.CONFIGURE = "configure"),
        (e.ENABLE_CAMERA_SWITCHER = "enableCameraSwitcher"),
        (e.ENABLE_PINCH_TO_ZOOM = "enablePinchToZoom"),
        (e.ENABLE_TAP_TO_FOCUS = "enableTapToFocus"),
        (e.ENABLE_TORCH_TOGGLE = "enableTorchToggle"),
        (e.GUI_STYLE = "guiStyle"),
        (e.LASER_AREA = "laserArea"),
        (e.PLAY_SOUND_ON_SCAN = "playSoundOnScan"),
        (e.SCANNING_PAUSED = "scanningPaused"),
        (e.SINGLE_IMAGE_MODE_SETTINGS = "singleImageModeSettings"),
        (e.TARGET_SCANNING_FPS = "targetScanningFPS"),
        (e.VIBRATE_ON_SCAN = "vibrateOnScan"),
        (e.VIDEO_FIT = "videoFit"),
        (e.VIEWFINDER_AREA = "viewfinderArea"),
        (e.VISIBLE = "visible"),
        (e.CONFIGURE_ENGINE_LOCATION = "configure.engineLocation"),
        (e.CONFIGURE_LICENSE_KEY = "configure.licenseKey"),
        (e.CONFIGURE_HIGH_QUALITY_BLURRY_RECOGNITION =
          "configure.highQualityBlurryRecognition"),
        (e.CONFIGURE_LOAD_TEXT_RECOGNITION = "configure.loadTextRecognition"),
        (e.CONFIGURE_PRELOAD_BLURRY_RECOGNITION =
          "configure.preloadBlurryRecognition"),
        (e.CONFIGURE_PRELOAD_ENGINE = "configure.preloadEngine"),
        (e.SCAN_SETTINGS_BLURRY_RECOGNITION = "scanSettings.blurryRecognition"),
        (e.SCAN_SETTINGS_CODE_DIRECTION_HINT =
          "scanSettings.codeDirectionHint"),
        (e.SCAN_SETTINGS_CODE_DUPLICATE_FILTER =
          "scanSettings.codeDuplicateFilter"),
        (e.SCAN_SETTINGS_DEVICE_NAME = "scanSettings.deviceName"),
        (e.SCAN_SETTINGS_ENABLED_SYMBOLOGIES =
          "scanSettings.enabledSymbologies"),
        (e.SCAN_SETTINGS_GPU_ACCELERATION = "scanSettings.gpuAcceleration"),
        (e.SCAN_SETTINGS_MAX_NUMBER_OF_CODES_PER_FRAME =
          "scanSettings.maxNumberOfCodesPerFrame"),
        (e.SCAN_SETTINGS_RECOGNITION_MODE = "scanSettings.recognitionMode"),
        (e.SCAN_SETTINGS_SEARCH_AREA = "scanSettings.searchArea"),
        (e.SCAN_SETTINGS_TEXT_RECOGNITION_SETTINGS =
          "scanSettings.textRecognitionSettings");
    })(Gu || (Gu = {}));
  var Il,
    kl,
    Ll,
    xl,
    Ml,
    Vl,
    Ol,
    Rl,
    Dl,
    Pl,
    Fl,
    Bl,
    jl,
    Ul,
    Gl,
    zl,
    Wl,
    Hl,
    Yl,
    Ql,
    Zl,
    ql,
    Xl,
    Kl,
    Jl,
    $l,
    ed,
    td,
    nd,
    rd,
    id,
    ad,
    od,
    sd,
    cd,
    ud,
    ld = Mc(Gu);
  function dd() {
    return null != Il
      ? Il
      : (Il = Object.freeze({
          [Gu.ACCESS_CAMERA]: { type: "boolean", default: !0 },
          [Gu.CAMERA]: { type: "camera", default: void 0 },
          [Gu.CAMERA_SETTINGS]: { type: "cameraSettings", default: void 0 },
          [Gu.CAMERA_TYPE]: { type: "cameraType", default: e.Camera.Type.BACK },
          [Gu.CONFIGURE]: { type: "boolean", default: !0 },
          [Gu.ENABLE_CAMERA_SWITCHER]: { type: "boolean", default: !0 },
          [Gu.ENABLE_PINCH_TO_ZOOM]: { type: "boolean", default: !0 },
          [Gu.ENABLE_TAP_TO_FOCUS]: { type: "boolean", default: !0 },
          [Gu.ENABLE_TORCH_TOGGLE]: { type: "boolean", default: !0 },
          [Gu.GUI_STYLE]: {
            type: "guiStyle",
            default: e.BarcodePicker.GuiStyle.LASER,
          },
          [Gu.LASER_AREA]: { type: "searchArea", default: void 0 },
          [Gu.PLAY_SOUND_ON_SCAN]: { type: "boolean", default: !0 },
          [Gu.SCANNING_PAUSED]: { type: "boolean", default: !1 },
          [Gu.SINGLE_IMAGE_MODE_SETTINGS]: {
            type: "singleImageModeSettings",
            default: void 0,
          },
          [Gu.TARGET_SCANNING_FPS]: { type: "integer", default: 30 },
          [Gu.VIBRATE_ON_SCAN]: { type: "boolean", default: !1 },
          [Gu.VIDEO_FIT]: {
            type: "videoFit",
            default: e.BarcodePicker.ObjectFit.CONTAIN,
          },
          [Gu.VIEWFINDER_AREA]: { type: "searchArea", default: void 0 },
          [Gu.VISIBLE]: { type: "boolean", default: !0 },
          [Gu.CONFIGURE_ENGINE_LOCATION]: { type: "string", default: "/" },
          [Gu.CONFIGURE_LICENSE_KEY]: { type: "string", default: "" },
          [Gu.CONFIGURE_HIGH_QUALITY_BLURRY_RECOGNITION]: {
            type: "boolean",
            default: !1,
          },
          [Gu.CONFIGURE_LOAD_TEXT_RECOGNITION]: {
            type: "boolean",
            default: !1,
          },
          [Gu.CONFIGURE_PRELOAD_BLURRY_RECOGNITION]: {
            type: "boolean",
            default: !0,
          },
          [Gu.CONFIGURE_PRELOAD_ENGINE]: { type: "boolean", default: !0 },
          [Gu.SCAN_SETTINGS_BLURRY_RECOGNITION]: {
            type: "boolean",
            default: !0,
          },
          [Gu.SCAN_SETTINGS_CODE_DIRECTION_HINT]: {
            type: "codeDirection",
            default: e.ScanSettings.CodeDirection.LEFT_TO_RIGHT,
          },
          [Gu.SCAN_SETTINGS_CODE_DUPLICATE_FILTER]: {
            type: "integer",
            default: 0,
          },
          [Gu.SCAN_SETTINGS_DEVICE_NAME]: { type: "string", default: void 0 },
          [Gu.SCAN_SETTINGS_ENABLED_SYMBOLOGIES]: {
            type: "array",
            default: [],
          },
          [Gu.SCAN_SETTINGS_GPU_ACCELERATION]: { type: "boolean", default: !0 },
          [Gu.SCAN_SETTINGS_MAX_NUMBER_OF_CODES_PER_FRAME]: {
            type: "integer",
            default: 1,
          },
          [Gu.SCAN_SETTINGS_RECOGNITION_MODE]: {
            type: "recognitionMode",
            default: e.ScanSettings.RecognitionMode.CODE,
          },
          [Gu.SCAN_SETTINGS_SEARCH_AREA]: {
            type: "searchArea",
            default: void 0,
          },
          [Gu.SCAN_SETTINGS_TEXT_RECOGNITION_SETTINGS]: {
            type: "textRecognitionSettings",
            default: void 0,
          },
        }));
  }
  (kl = Gu.ACCESS_CAMERA),
    (Ll = Gu.CAMERA),
    (xl = Gu.CAMERA_SETTINGS),
    (Ml = Gu.CAMERA_TYPE),
    (Vl = Gu.CONFIGURE),
    (Ol = Gu.ENABLE_CAMERA_SWITCHER),
    (Rl = Gu.ENABLE_PINCH_TO_ZOOM),
    (Dl = Gu.ENABLE_TAP_TO_FOCUS),
    (Pl = Gu.ENABLE_TORCH_TOGGLE),
    (Fl = Gu.GUI_STYLE),
    (Bl = Gu.LASER_AREA),
    (jl = Gu.PLAY_SOUND_ON_SCAN),
    (Ul = Gu.SCANNING_PAUSED),
    (Gl = Gu.SINGLE_IMAGE_MODE_SETTINGS),
    (zl = Gu.TARGET_SCANNING_FPS),
    (Wl = Gu.VIBRATE_ON_SCAN),
    (Hl = Gu.VIDEO_FIT),
    (Yl = Gu.VIEWFINDER_AREA),
    (Ql = Gu.VISIBLE),
    (Zl = Gu.CONFIGURE_ENGINE_LOCATION),
    (ql = Gu.CONFIGURE_LICENSE_KEY),
    (Xl = Gu.CONFIGURE_HIGH_QUALITY_BLURRY_RECOGNITION),
    (Kl = Gu.CONFIGURE_LOAD_TEXT_RECOGNITION),
    (Jl = Gu.CONFIGURE_PRELOAD_BLURRY_RECOGNITION),
    ($l = Gu.CONFIGURE_PRELOAD_ENGINE),
    (ed = Gu.SCAN_SETTINGS_BLURRY_RECOGNITION),
    (td = Gu.SCAN_SETTINGS_CODE_DIRECTION_HINT),
    (nd = Gu.SCAN_SETTINGS_CODE_DUPLICATE_FILTER),
    (rd = Gu.SCAN_SETTINGS_DEVICE_NAME),
    (id = Gu.SCAN_SETTINGS_ENABLED_SYMBOLOGIES),
    (ad = Gu.SCAN_SETTINGS_GPU_ACCELERATION),
    (od = Gu.SCAN_SETTINGS_MAX_NUMBER_OF_CODES_PER_FRAME),
    (sd = Gu.SCAN_SETTINGS_RECOGNITION_MODE),
    (cd = Gu.SCAN_SETTINGS_SEARCH_AREA),
    (ud = Gu.SCAN_SETTINGS_TEXT_RECOGNITION_SETTINGS);
  var hd = (function () {
    function e(t, n) {
      Io(this, e),
        To(this, "schema", void 0),
        To(this, "view", void 0),
        (this.schema = t),
        (this.view = n);
    }
    return (
      No(e, [
        {
          key: kl,
          get: function () {
            return this.convertToPrimary(Gu.ACCESS_CAMERA);
          },
        },
        {
          key: Ll,
          get: function () {
            return this.convertToPrimary(Gu.CAMERA);
          },
        },
        {
          key: xl,
          get: function () {
            return this.convertToPrimary(Gu.CAMERA_SETTINGS);
          },
        },
        {
          key: Ml,
          get: function () {
            return this.convertToPrimary(Gu.CAMERA_TYPE);
          },
        },
        {
          key: Vl,
          get: function () {
            return this.convertToPrimary(Gu.CONFIGURE);
          },
        },
        {
          key: Ol,
          get: function () {
            return this.convertToPrimary(Gu.ENABLE_CAMERA_SWITCHER);
          },
        },
        {
          key: Rl,
          get: function () {
            return this.convertToPrimary(Gu.ENABLE_PINCH_TO_ZOOM);
          },
        },
        {
          key: Dl,
          get: function () {
            return this.convertToPrimary(Gu.ENABLE_TAP_TO_FOCUS);
          },
        },
        {
          key: Pl,
          get: function () {
            return this.convertToPrimary(Gu.ENABLE_TORCH_TOGGLE);
          },
        },
        {
          key: Fl,
          get: function () {
            return this.convertToPrimary(Gu.GUI_STYLE);
          },
        },
        {
          key: Bl,
          get: function () {
            return this.convertToPrimary(Gu.LASER_AREA);
          },
        },
        {
          key: jl,
          get: function () {
            return this.convertToPrimary(Gu.PLAY_SOUND_ON_SCAN);
          },
        },
        {
          key: Ul,
          get: function () {
            return this.convertToPrimary(Gu.SCANNING_PAUSED);
          },
        },
        {
          key: Gl,
          get: function () {
            return this.convertToPrimary(Gu.SINGLE_IMAGE_MODE_SETTINGS);
          },
        },
        {
          key: zl,
          get: function () {
            return this.convertToPrimary(Gu.TARGET_SCANNING_FPS);
          },
        },
        {
          key: Wl,
          get: function () {
            return this.convertToPrimary(Gu.VIBRATE_ON_SCAN);
          },
        },
        {
          key: Hl,
          get: function () {
            return this.convertToPrimary(Gu.VIDEO_FIT);
          },
        },
        {
          key: Yl,
          get: function () {
            return this.convertToPrimary(Gu.VIEWFINDER_AREA);
          },
        },
        {
          key: Ql,
          get: function () {
            return this.convertToPrimary(Gu.VISIBLE);
          },
        },
        {
          key: Zl,
          get: function () {
            return this.convertToPrimary(Gu.CONFIGURE_ENGINE_LOCATION);
          },
        },
        {
          key: ql,
          get: function () {
            return this.convertToPrimary(Gu.CONFIGURE_LICENSE_KEY);
          },
        },
        {
          key: Xl,
          get: function () {
            return this.convertToPrimary(
              Gu.CONFIGURE_HIGH_QUALITY_BLURRY_RECOGNITION
            );
          },
        },
        {
          key: Kl,
          get: function () {
            return this.convertToPrimary(Gu.CONFIGURE_LOAD_TEXT_RECOGNITION);
          },
        },
        {
          key: Jl,
          get: function () {
            return this.convertToPrimary(
              Gu.CONFIGURE_PRELOAD_BLURRY_RECOGNITION
            );
          },
        },
        {
          key: $l,
          get: function () {
            return this.convertToPrimary(Gu.CONFIGURE_PRELOAD_ENGINE);
          },
        },
        {
          key: ed,
          get: function () {
            return this.convertToPrimary(Gu.SCAN_SETTINGS_BLURRY_RECOGNITION);
          },
        },
        {
          key: td,
          get: function () {
            return this.convertToPrimary(Gu.SCAN_SETTINGS_CODE_DIRECTION_HINT);
          },
        },
        {
          key: nd,
          get: function () {
            return this.convertToPrimary(
              Gu.SCAN_SETTINGS_CODE_DUPLICATE_FILTER
            );
          },
        },
        {
          key: rd,
          get: function () {
            return this.convertToPrimary(Gu.SCAN_SETTINGS_DEVICE_NAME);
          },
        },
        {
          key: id,
          get: function () {
            return this.convertToPrimary(Gu.SCAN_SETTINGS_ENABLED_SYMBOLOGIES);
          },
        },
        {
          key: ad,
          get: function () {
            return this.convertToPrimary(Gu.SCAN_SETTINGS_GPU_ACCELERATION);
          },
        },
        {
          key: od,
          get: function () {
            return this.convertToPrimary(
              Gu.SCAN_SETTINGS_MAX_NUMBER_OF_CODES_PER_FRAME
            );
          },
        },
        {
          key: sd,
          get: function () {
            return this.convertToPrimary(Gu.SCAN_SETTINGS_RECOGNITION_MODE);
          },
        },
        {
          key: cd,
          get: function () {
            return this.convertToPrimary(Gu.SCAN_SETTINGS_SEARCH_AREA);
          },
        },
        {
          key: ud,
          get: function () {
            return this.convertToPrimary(
              Gu.SCAN_SETTINGS_TEXT_RECOGNITION_SETTINGS
            );
          },
        },
        {
          key: "convertToPrimary",
          value: function (e) {
            var t;
            return (function (e, t) {
              switch (e.type) {
                case "boolean":
                  return (
                    (n = t), (r = e.default), null == n ? r : "false" !== n
                  );
                case "string":
                case "guiStyle":
                case "cameraType":
                case "videoFit":
                case "codeDirection":
                case "recognitionMode":
                  return (function (e, t) {
                    return null != e ? e : t;
                  })(t, e.default);
                case "array":
                  return (function (e, t) {
                    if (null == e) return t;
                    var n = Nl(e);
                    return null != n && Array.isArray(n) ? n : t;
                  })(t, e.default);
                case "integer":
                  return (function (e, t) {
                    if (null == e) return t;
                    var n = vu(e, 10);
                    return isNaN(n) ? t : n;
                  })(t, e.default);
                case "searchArea":
                case "camera":
                case "cameraSettings":
                case "singleImageModeSettings":
                  return wl(t, e.default);
                case "textRecognitionSettings":
                  return new Dc(wl(t, e.default));
              }
              var n, r;
              return Tl(e);
            })(
              this.schema[e],
              null !== (t = this.view.getAttribute(e)) && void 0 !== t
                ? t
                : void 0
            );
          },
        },
      ]),
      e
    );
  })();
  function fd(e, t, n, r) {
    var i,
      a = arguments.length,
      o =
        a < 3
          ? t
          : null === r
          ? (r = Object.getOwnPropertyDescriptor(t, n))
          : r;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
      o = Reflect.decorate(e, t, n, r);
    else
      for (var s = e.length - 1; s >= 0; s--)
        (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
    return a > 3 && o && Object.defineProperty(t, n, o), o;
  }
  var gd = (function () {
    function t() {
      Io(this, t);
    }
    return (
      No(t, null, [
        {
          key: "isBooleanAttribute",
          value: function (e) {
            return "true" === e || "false" === e;
          },
        },
        {
          key: "isBooleanProperty",
          value: function (e) {
            return "boolean" == typeof e;
          },
        },
        {
          key: "isIntegerAttribute",
          value: function (e) {
            return "string" == typeof e && /^-?\d+$/.test(e);
          },
        },
        {
          key: "isIntegerProperty",
          value: function (e) {
            return Number.isInteger(e);
          },
        },
        {
          key: "isValidCameraType",
          value: function (t) {
            return Mc(e.Camera.Type).includes(t);
          },
        },
        {
          key: "isValidGuiStyle",
          value: function (t) {
            return Mc(e.BarcodePicker.GuiStyle).includes(t);
          },
        },
        {
          key: "isValidVideoFit",
          value: function (t) {
            return Mc(e.BarcodePicker.ObjectFit).includes(t);
          },
        },
        {
          key: "isValidCodeDirection",
          value: function (t) {
            return Mc(e.ScanSettings.CodeDirection).includes(t);
          },
        },
        {
          key: "isValidRecognitionMode",
          value: function (t) {
            return Mc(e.ScanSettings.RecognitionMode).includes(t);
          },
        },
        {
          key: "isArray",
          value: function (e) {
            return Array.isArray(e);
          },
        },
        {
          key: "isValidJsonArray",
          value: function (e) {
            var t;
            try {
              t = JSON.parse(e);
            } catch (e) {
              return !1;
            }
            return Array.isArray(t);
          },
        },
        {
          key: "isValidSearchAreaAttribute",
          value: function (e) {
            var n;
            try {
              n = JSON.parse(e);
            } catch (e) {
              return !1;
            }
            return t.isValidSearchAreaProperty(n);
          },
        },
        {
          key: "isValidSearchAreaProperty",
          value: function (e) {
            return (
              null != e &&
              "object" == typeof e &&
              e.x >= 0 &&
              e.x <= 1 &&
              e.y >= 0 &&
              e.y <= 1 &&
              e.width >= 0 &&
              e.width <= 1 &&
              e.height >= 0 &&
              e.height <= 1
            );
          },
        },
        {
          key: "isValidCameraObject",
          value: function (e) {
            var t, n;
            try {
              n = JSON.parse(e);
            } catch (e) {
              return !1;
            }
            return (
              "string" ==
              typeof (null === (t = n) || void 0 === t ? void 0 : t.deviceId)
            );
          },
        },
        {
          key: "isValidCameraSettingsObject",
          value: function (e) {
            var t, n;
            try {
              n = JSON.parse(e);
            } catch (e) {
              return !1;
            }
            return (
              "string" ==
              typeof (null === (t = n) || void 0 === t
                ? void 0
                : t.resolutionPreference)
            );
          },
        },
        {
          key: "isValidSingleImageModeSettingsObject",
          value: function (e) {
            var t;
            try {
              t = JSON.parse(e);
            } catch (e) {
              return !1;
            }
            return null != t && "object" == typeof t;
          },
        },
        {
          key: "isValidTextRecognitionSettingsObject",
          value: function (e) {
            var t;
            try {
              t = JSON.parse(e);
            } catch (e) {
              return !1;
            }
            return null != t && "object" == typeof t;
          },
        },
        {
          key: "getExpectationMessageForType",
          value: function (e) {
            return {
              booleanAttribute: 'Expected one of "true" or "false"',
              boolean: "Boolean expected",
              integer: "Integer expected",
              array: "Array expected",
              jsonArray: "Expected JSON array",
              videoFit: 'Expected a valid BarcodePicker.ObjectFit"',
              camera:
                "Expected JSON object having properties of a Camera object",
              cameraSettings:
                "Expected JSON object having properties of a CameraSettings object",
              cameraType: 'Expected a valid Camera.Type"',
              codeDirection: 'Expected a valid ScanSettings.CodeDirection"',
              recognitionMode: 'Expected a valid ScanSettings.RecognitionMode"',
              guiStyle: 'Expected a valid BarcodePicker.GuiStyle"',
              searchArea:
                "Expected JSON object having properties of a SearchArea object",
              singleImageModeSettings:
                "Expected JSON object having properties of a SingleImageModeSettings object",
              textRecognitionSettings:
                "Expected JSON object having properties of a TextRecognitionSettings object",
            }[e];
          },
        },
      ]),
      t
    );
  })();
  function md(e) {
    return function (t, n) {
      t.expectationMessage.set(t[n], t.getExpectationMessageForType(e));
    };
  }
  function pd(e, t) {
    var n = Object.keys(e);
    if (jc) {
      var r = jc(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function vd(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? pd(Object(n), !0).forEach(function (t) {
            To(e, t, n[t]);
          })
        : qc
        ? Object.defineProperties(e, qc(n))
        : pd(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  To(gd, "expectationMessage", new qs()),
    fd([md("booleanAttribute")], gd, "isBooleanAttribute", null),
    fd([md("boolean")], gd, "isBooleanProperty", null),
    fd([md("integer")], gd, "isIntegerAttribute", null),
    fd([md("integer")], gd, "isIntegerProperty", null),
    fd([md("cameraType")], gd, "isValidCameraType", null),
    fd([md("guiStyle")], gd, "isValidGuiStyle", null),
    fd([md("videoFit")], gd, "isValidVideoFit", null),
    fd([md("codeDirection")], gd, "isValidCodeDirection", null),
    fd([md("recognitionMode")], gd, "isValidRecognitionMode", null),
    fd([md("array")], gd, "isArray", null),
    fd([md("jsonArray")], gd, "isValidJsonArray", null),
    fd([md("searchArea")], gd, "isValidSearchAreaAttribute", null),
    fd([md("searchArea")], gd, "isValidSearchAreaProperty", null),
    fd([md("camera")], gd, "isValidCameraObject", null),
    fd([md("cameraSettings")], gd, "isValidCameraSettingsObject", null),
    fd(
      [md("singleImageModeSettings")],
      gd,
      "isValidSingleImageModeSettingsObject",
      null
    ),
    fd(
      [md("textRecognitionSettings")],
      gd,
      "isValidTextRecognitionSettingsObject",
      null
    );
  var yd = (function () {
      function t(n) {
        Io(this, t),
          To(this, "view", void 0),
          To(this, "picker", void 0),
          To(this, "lazyAttributeConverter", void 0),
          To(this, "scanSettings", void 0),
          To(this, "viewConnected", !1),
          To(this, "trackAttributes", !0),
          To(
            this,
            "allSymbologies",
            Mc(e.Barcode.Symbology).filter(function (e) {
              return "string" == typeof e;
            })
          ),
          (this.view = n);
      }
      var n, r, i, a;
      return (
        No(t, [
          {
            key: "viewConnectedCallback",
            value:
              ((a = Zr(
                ao.mark(function e() {
                  return ao.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((this.viewConnected = !0),
                              this.view.initializeDom(),
                              this.initializeAttributeConversionGetter(),
                              !this.lazyAttributeConverter[Gu.CONFIGURE])
                            ) {
                              e.next = 6;
                              break;
                            }
                            return (e.next = 6), this.initPicker();
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function () {
                return a.apply(this, arguments);
              }),
          },
          {
            key: "attributeChangedCallback",
            value: function (e) {
              if (this.viewConnected && this.trackAttributes) {
                var t = this.view.getAttribute(e);
                if (null == t || this.validateAttribute(e, t)) {
                  var n = this.attributeToCamelCase(e);
                  this.applyChangeFromAttributeChange(n);
                }
              }
            },
          },
          {
            key: "viewDisconnectedCallback",
            value: function () {
              (this.viewConnected = !1),
                this.picker.destroy(),
                delete this.picker,
                delete this.scanSettings;
            },
          },
          {
            key: "applyChangeFromAttributeChange",
            value: function (t) {
              var n = this;
              switch (t) {
                case Gu.ACCESS_CAMERA:
                  this.lazyAttributeConverter[Gu.ACCESS_CAMERA]
                    ? this.picker.accessCamera().catch(function (t) {
                        e.Logger.log(
                          e.Logger.Level.WARN,
                          "Error while accessing the camera:",
                          t
                        );
                      })
                    : this.picker.pauseCameraAccess();
                  break;
                case Gu.ENABLE_CAMERA_SWITCHER:
                  this.picker.setCameraSwitcherEnabled(
                    this.lazyAttributeConverter[Gu.ENABLE_CAMERA_SWITCHER]
                  );
                  break;
                case Gu.ENABLE_PINCH_TO_ZOOM:
                  this.picker.setPinchToZoomEnabled(
                    this.lazyAttributeConverter[Gu.ENABLE_PINCH_TO_ZOOM]
                  );
                  break;
                case Gu.ENABLE_TAP_TO_FOCUS:
                  this.picker.setTapToFocusEnabled(
                    this.lazyAttributeConverter[Gu.ENABLE_TAP_TO_FOCUS]
                  );
                  break;
                case Gu.ENABLE_TORCH_TOGGLE:
                  this.picker.setTorchToggleEnabled(
                    this.lazyAttributeConverter[Gu.ENABLE_TORCH_TOGGLE]
                  );
                  break;
                case Gu.GUI_STYLE:
                  this.picker.setGuiStyle(
                    this.lazyAttributeConverter[Gu.GUI_STYLE]
                  );
                  break;
                case Gu.LASER_AREA:
                  this.picker.setLaserArea(
                    this.lazyAttributeConverter[Gu.LASER_AREA]
                  );
                  break;
                case Gu.PLAY_SOUND_ON_SCAN:
                  this.picker.setPlaySoundOnScanEnabled(
                    this.lazyAttributeConverter[Gu.PLAY_SOUND_ON_SCAN]
                  );
                  break;
                case Gu.SCANNING_PAUSED:
                  if (this.lazyAttributeConverter[Gu.SCANNING_PAUSED]) {
                    this.picker.pauseScanning();
                    break;
                  }
                  this.picker.resumeScanning().catch(function (t) {
                    e.Logger.log(
                      e.Logger.Level.WARN,
                      "Error while resuming scanning:",
                      t
                    );
                  });
                  break;
                case Gu.TARGET_SCANNING_FPS:
                  this.picker.setTargetScanningFPS(
                    this.lazyAttributeConverter[Gu.TARGET_SCANNING_FPS]
                  );
                  break;
                case Gu.VIBRATE_ON_SCAN:
                  this.picker.setVibrateOnScanEnabled(
                    this.lazyAttributeConverter[Gu.VIBRATE_ON_SCAN]
                  );
                  break;
                case Gu.VIDEO_FIT:
                  this.picker.setVideoFit(
                    this.lazyAttributeConverter[Gu.VIDEO_FIT]
                  );
                  break;
                case Gu.VIEWFINDER_AREA:
                  this.picker.setViewfinderArea(
                    this.lazyAttributeConverter[Gu.VIEWFINDER_AREA]
                  );
                  break;
                case Gu.VISIBLE:
                  this.picker.setVisible(
                    this.lazyAttributeConverter[Gu.VISIBLE]
                  );
                  break;
                case Gu.CAMERA:
                  this.getCameraFromAttribute()
                    .then(function (t) {
                      n.picker.setActiveCamera(t).catch(function (t) {
                        e.Logger.log(
                          e.Logger.Level.WARN,
                          "Error while setting the active camera:",
                          t
                        );
                      });
                    })
                    .catch(function (t) {
                      e.Logger.log(
                        e.Logger.Level.WARN,
                        "Error while getting the camera:",
                        t
                      );
                    });
                  break;
                case Gu.CAMERA_TYPE:
                  this.picker
                    .setCameraType(this.lazyAttributeConverter[Gu.CAMERA_TYPE])
                    .catch(function (t) {
                      e.Logger.log(
                        e.Logger.Level.WARN,
                        "Error while setting camera type:",
                        t
                      );
                    });
                  break;
                case Gu.CAMERA_SETTINGS:
                  this.picker
                    .applyCameraSettings(
                      this.lazyAttributeConverter[Gu.CAMERA_SETTINGS]
                    )
                    .catch(function (t) {
                      e.Logger.log(
                        e.Logger.Level.WARN,
                        "Error while applying camera settings:",
                        t
                      );
                    });
                  break;
                case Gu.SCAN_SETTINGS_BLURRY_RECOGNITION:
                  this.scanSettings.setBlurryRecognitionEnabled(
                    this.lazyAttributeConverter[
                      Gu.SCAN_SETTINGS_BLURRY_RECOGNITION
                    ]
                  ),
                    this.picker.applyScanSettings(this.scanSettings);
                  break;
                case Gu.SCAN_SETTINGS_CODE_DIRECTION_HINT:
                  this.scanSettings.setCodeDirectionHint(
                    this.lazyAttributeConverter[
                      Gu.SCAN_SETTINGS_CODE_DIRECTION_HINT
                    ]
                  ),
                    this.picker.applyScanSettings(this.scanSettings);
                  break;
                case Gu.SCAN_SETTINGS_CODE_DUPLICATE_FILTER:
                  this.scanSettings.setCodeDuplicateFilter(
                    this.lazyAttributeConverter[
                      Gu.SCAN_SETTINGS_CODE_DUPLICATE_FILTER
                    ]
                  ),
                    this.picker.applyScanSettings(this.scanSettings);
                  break;
                case Gu.SCAN_SETTINGS_DEVICE_NAME:
                  this.scanSettings.setDeviceName(
                    this.lazyAttributeConverter[Gu.SCAN_SETTINGS_DEVICE_NAME]
                  ),
                    this.picker.applyScanSettings(this.scanSettings);
                  break;
                case Gu.SCAN_SETTINGS_ENABLED_SYMBOLOGIES:
                  this.onEnabledSymbologiesChanged();
                  break;
                case Gu.SCAN_SETTINGS_GPU_ACCELERATION:
                  this.scanSettings.setGpuAccelerationEnabled(
                    this.lazyAttributeConverter[
                      Gu.SCAN_SETTINGS_GPU_ACCELERATION
                    ]
                  ),
                    this.picker.applyScanSettings(this.scanSettings);
                  break;
                case Gu.SCAN_SETTINGS_MAX_NUMBER_OF_CODES_PER_FRAME:
                  this.scanSettings.setMaxNumberOfCodesPerFrame(
                    this.lazyAttributeConverter[
                      Gu.SCAN_SETTINGS_MAX_NUMBER_OF_CODES_PER_FRAME
                    ]
                  ),
                    this.picker.applyScanSettings(this.scanSettings);
                  break;
                case Gu.SCAN_SETTINGS_RECOGNITION_MODE:
                  this.scanSettings.setRecognitionMode(
                    this.lazyAttributeConverter[
                      Gu.SCAN_SETTINGS_RECOGNITION_MODE
                    ]
                  ),
                    this.picker.applyScanSettings(this.scanSettings);
                  break;
                case Gu.SCAN_SETTINGS_SEARCH_AREA:
                  this.scanSettings.setSearchArea(
                    this.lazyAttributeConverter[Gu.SCAN_SETTINGS_SEARCH_AREA]
                  ),
                    this.picker.applyScanSettings(this.scanSettings);
                  break;
                case Gu.SCAN_SETTINGS_TEXT_RECOGNITION_SETTINGS:
                  this.scanSettings.setTextRecognitionSettings(
                    this.lazyAttributeConverter[
                      Gu.SCAN_SETTINGS_TEXT_RECOGNITION_SETTINGS
                    ]
                  ),
                    this.picker.applyScanSettings(this.scanSettings);
                  break;
                case Gu.CONFIGURE:
                  this.lazyAttributeConverter[Gu.CONFIGURE] &&
                    this.initPicker().catch(function (t) {
                      e.Logger.log(
                        e.Logger.Level.WARN,
                        "Error while initializing barcode picker:",
                        t
                      );
                    });
                  break;
                case Gu.SINGLE_IMAGE_MODE_SETTINGS:
                case Gu.CONFIGURE_ENGINE_LOCATION:
                case Gu.CONFIGURE_LICENSE_KEY:
                case Gu.CONFIGURE_HIGH_QUALITY_BLURRY_RECOGNITION:
                case Gu.CONFIGURE_LOAD_TEXT_RECOGNITION:
                case Gu.CONFIGURE_PRELOAD_BLURRY_RECOGNITION:
                case Gu.CONFIGURE_PRELOAD_ENGINE:
                  break;
                default:
                  Tl(t);
              }
            },
          },
          {
            key: "initPicker",
            value:
              ((i = Zr(
                ao.mark(function t() {
                  return ao.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (null == this.picker) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt("return");
                          case 2:
                            return (
                              this.validateAllAttributes(),
                              (t.prev = 3),
                              (t.next = 6),
                              Ad(
                                this.lazyAttributeConverter[
                                  Gu.CONFIGURE_LICENSE_KEY
                                ],
                                {
                                  engineLocation:
                                    this.lazyAttributeConverter[
                                      Gu.CONFIGURE_ENGINE_LOCATION
                                    ],
                                  highQualityBlurryRecognition:
                                    this.lazyAttributeConverter[
                                      Gu
                                        .CONFIGURE_HIGH_QUALITY_BLURRY_RECOGNITION
                                    ],
                                  loadTextRecognition:
                                    this.lazyAttributeConverter[
                                      Gu.CONFIGURE_LOAD_TEXT_RECOGNITION
                                    ],
                                  preloadBlurryRecognition:
                                    this.lazyAttributeConverter[
                                      Gu.CONFIGURE_PRELOAD_BLURRY_RECOGNITION
                                    ],
                                  preloadEngine:
                                    this.lazyAttributeConverter[
                                      Gu.CONFIGURE_PRELOAD_ENGINE
                                    ],
                                }
                              )
                            );
                          case 6:
                            return (
                              (t.t0 = Proxy),
                              (t.t1 = e.BarcodePicker),
                              (t.t2 = this.view.root),
                              (t.t3 =
                                this.lazyAttributeConverter[Gu.ACCESS_CAMERA]),
                              (t.next = 12),
                              this.getCameraFromAttribute()
                            );
                          case 12:
                            return (
                              (t.t4 = t.sent),
                              (t.t5 =
                                this.lazyAttributeConverter[Gu.CAMERA_TYPE]),
                              (t.t6 =
                                this.lazyAttributeConverter[
                                  Gu.ENABLE_CAMERA_SWITCHER
                                ]),
                              (t.t7 =
                                this.lazyAttributeConverter[
                                  Gu.ENABLE_PINCH_TO_ZOOM
                                ]),
                              (t.t8 =
                                this.lazyAttributeConverter[
                                  Gu.ENABLE_TAP_TO_FOCUS
                                ]),
                              (t.t9 =
                                this.lazyAttributeConverter[
                                  Gu.ENABLE_TORCH_TOGGLE
                                ]),
                              (t.t10 =
                                this.lazyAttributeConverter[
                                  Gu.PLAY_SOUND_ON_SCAN
                                ]),
                              (t.t11 =
                                this.lazyAttributeConverter[
                                  Gu.VIBRATE_ON_SCAN
                                ]),
                              (t.t12 =
                                this.lazyAttributeConverter[
                                  Gu.SCANNING_PAUSED
                                ]),
                              (t.t13 =
                                this.lazyAttributeConverter[Gu.GUI_STYLE]),
                              (t.t14 =
                                this.lazyAttributeConverter[
                                  Gu.TARGET_SCANNING_FPS
                                ]),
                              (t.t15 =
                                this.lazyAttributeConverter[Gu.VIDEO_FIT]),
                              (t.t16 = this.lazyAttributeConverter[Gu.VISIBLE]),
                              (t.t17 =
                                this.lazyAttributeConverter[
                                  Gu.VIEWFINDER_AREA
                                ]),
                              (t.t18 =
                                this.lazyAttributeConverter[Gu.LASER_AREA]),
                              (t.next = 29),
                              this.getSingleImageModeSettings()
                            );
                          case 29:
                            return (
                              (t.t19 = t.sent),
                              (t.t20 = {
                                accessCamera: t.t3,
                                camera: t.t4,
                                cameraType: t.t5,
                                enableCameraSwitcher: t.t6,
                                enablePinchToZoom: t.t7,
                                enableTapToFocus: t.t8,
                                enableTorchToggle: t.t9,
                                playSoundOnScan: t.t10,
                                vibrateOnScan: t.t11,
                                scanningPaused: t.t12,
                                guiStyle: t.t13,
                                targetScanningFPS: t.t14,
                                videoFit: t.t15,
                                visible: t.t16,
                                viewfinderArea: t.t17,
                                laserArea: t.t18,
                                singleImageModeSettings: t.t19,
                              }),
                              (t.next = 33),
                              t.t1.create.call(t.t1, t.t2, t.t20)
                            );
                          case 33:
                            (t.t21 = t.sent),
                              (t.t22 = this.getBarcodePickerProxyHandler()),
                              (this.picker = new t.t0(t.t21, t.t22)),
                              (t.next = 41);
                            break;
                          case 38:
                            return (
                              (t.prev = 38),
                              (t.t23 = t.catch(3)),
                              t.abrupt("return", this.handleException(t.t23))
                            );
                          case 41:
                            (this.scanSettings = new e.ScanSettings({
                              textRecognitionSettings:
                                this.lazyAttributeConverter[
                                  Gu.SCAN_SETTINGS_TEXT_RECOGNITION_SETTINGS
                                ],
                              recognitionMode:
                                this.lazyAttributeConverter[
                                  Gu.SCAN_SETTINGS_RECOGNITION_MODE
                                ],
                              blurryRecognition:
                                this.lazyAttributeConverter[
                                  Gu.SCAN_SETTINGS_BLURRY_RECOGNITION
                                ],
                              codeDirectionHint:
                                this.lazyAttributeConverter[
                                  Gu.SCAN_SETTINGS_CODE_DIRECTION_HINT
                                ],
                              codeDuplicateFilter:
                                this.lazyAttributeConverter[
                                  Gu.SCAN_SETTINGS_CODE_DUPLICATE_FILTER
                                ],
                              deviceName:
                                this.lazyAttributeConverter[
                                  Gu.SCAN_SETTINGS_DEVICE_NAME
                                ],
                              enabledSymbologies:
                                this.lazyAttributeConverter[
                                  Gu.SCAN_SETTINGS_ENABLED_SYMBOLOGIES
                                ],
                              gpuAcceleration:
                                this.lazyAttributeConverter[
                                  Gu.SCAN_SETTINGS_GPU_ACCELERATION
                                ],
                              maxNumberOfCodesPerFrame:
                                this.lazyAttributeConverter[
                                  Gu.SCAN_SETTINGS_MAX_NUMBER_OF_CODES_PER_FRAME
                                ],
                              searchArea:
                                this.lazyAttributeConverter[
                                  Gu.SCAN_SETTINGS_SEARCH_AREA
                                ],
                            })),
                              this.picker.applyScanSettings(this.scanSettings),
                              this.picker.on(
                                "ready",
                                this.dispatchPickerEvent.bind(this, "ready")
                              ),
                              this.picker.on(
                                "submitFrame",
                                this.dispatchPickerEvent.bind(
                                  this,
                                  "submitFrame"
                                )
                              ),
                              this.picker.on(
                                "processFrame",
                                this.dispatchPickerEvent.bind(
                                  this,
                                  "processFrame"
                                )
                              ),
                              this.picker.on(
                                "scan",
                                this.dispatchPickerEvent.bind(this, "scan")
                              ),
                              this.picker.on(
                                "scanError",
                                this.dispatchPickerEvent.bind(this, "scanError")
                              );
                          case 48:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this,
                    [[3, 38]]
                  );
                })
              )),
              function () {
                return i.apply(this, arguments);
              }),
          },
          {
            key: "getBarcodePickerProxyHandler",
            value: function () {
              var e,
                t,
                n = this,
                r = this;
              return {
                get: function (i, a) {
                  return "gui" === a
                    ? (function (t) {
                        return (
                          null == e &&
                            (e = new Proxy(t.gui, {
                              set: function (e, t, n) {
                                return (
                                  Reflect.set(e, t, n),
                                  r.onPickerPropertyUpdate.call(r, {
                                    origin: "gui",
                                    key: t,
                                    newValue: n,
                                  }),
                                  !0
                                );
                              },
                            })),
                          e
                        );
                      })(i)
                    : "cameraManager" === a
                    ? (function (e) {
                        return (
                          null == t &&
                            (t = new Proxy(e.cameraManager, {
                              set: function (e, t, n) {
                                return (
                                  Reflect.set(e, t, n),
                                  r.onPickerPropertyUpdate.call(r, {
                                    origin: "cameraManager",
                                    key: t,
                                    newValue: n,
                                  }),
                                  !0
                                );
                              },
                            })),
                          t
                        );
                      })(i)
                    : "applyScanSettings" === a
                    ? function (e) {
                        Reflect.apply(Reflect.get(i, a), i, [e]),
                          n.onScannerNewScanSettings(e);
                      }
                    : Reflect.get(i, a);
                },
                set: function (e, t, r) {
                  return (
                    Reflect.set(e, t, r),
                    n.onPickerPropertyUpdate({
                      key: t,
                      origin: "picker",
                      newValue: r,
                    }),
                    !0
                  );
                },
              };
            },
          },
          {
            key: "onScannerNewScanSettings",
            value: function (t) {
              var n = this,
                r = Mc(e.Barcode.Symbology).filter(function (e) {
                  return "string" == typeof e;
                });
              [
                {
                  key: Gu.SCAN_SETTINGS_BLURRY_RECOGNITION,
                  newValue: t.isBlurryRecognitionEnabled(),
                },
                {
                  key: Gu.SCAN_SETTINGS_CODE_DIRECTION_HINT,
                  newValue: t.getCodeDirectionHint(),
                },
                {
                  key: Gu.SCAN_SETTINGS_CODE_DUPLICATE_FILTER,
                  newValue: t.getCodeDuplicateFilter(),
                },
                {
                  key: Gu.SCAN_SETTINGS_DEVICE_NAME,
                  newValue: t.getDeviceName(),
                },
                {
                  key: Gu.SCAN_SETTINGS_ENABLED_SYMBOLOGIES,
                  newValue: r.reduce(function (n, r) {
                    return (
                      t.isSymbologyEnabled(r) &&
                        n.push(e.Barcode.Symbology.toJSONName(r)),
                      n
                    );
                  }, []),
                },
                {
                  key: Gu.SCAN_SETTINGS_GPU_ACCELERATION,
                  newValue: t.isGpuAccelerationEnabled(),
                },
                {
                  key: Gu.SCAN_SETTINGS_MAX_NUMBER_OF_CODES_PER_FRAME,
                  newValue: t.getMaxNumberOfCodesPerFrame(),
                },
                {
                  key: Gu.SCAN_SETTINGS_RECOGNITION_MODE,
                  newValue: t.getRecognitionMode(),
                },
                {
                  key: Gu.SCAN_SETTINGS_SEARCH_AREA,
                  newValue: t.getSearchArea(),
                },
                {
                  key: Gu.SCAN_SETTINGS_TEXT_RECOGNITION_SETTINGS,
                  newValue: t.getTextRecognitionSettings(),
                },
              ].forEach(function (e) {
                n.onPickerPropertyUpdate(vd({ origin: "scanner" }, e));
              });
            },
          },
          {
            key: "initializeAttributeConversionGetter",
            value: function () {
              this.lazyAttributeConverter = new hd(dd(), this.view);
            },
          },
          {
            key: "getCameraFromAttribute",
            value:
              ((r = Zr(
                ao.mark(function t() {
                  var n, r, i, a;
                  return ao.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              null ==
                              (null ==
                              (r = this.lazyAttributeConverter[Gu.CAMERA])
                                ? void 0
                                : r.deviceId)
                            ) {
                              t.next = 8;
                              break;
                            }
                            return (t.next = 4), e.CameraAccess.getCameras();
                          case 4:
                            (i = t.sent),
                              (a = r.deviceId),
                              null ==
                                (n = i.find(function (e) {
                                  return e.deviceId === a;
                                })) &&
                                e.Logger.log(
                                  e.Logger.Level.WARN,
                                  'Could not find camera with id "'.concat(
                                    a,
                                    '", will use default camera.'
                                  )
                                );
                          case 8:
                            return t.abrupt("return", n);
                          case 9:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              )),
              function () {
                return r.apply(this, arguments);
              }),
          },
          {
            key: "onEnabledSymbologiesChanged",
            value: function () {
              var e = this,
                t =
                  this.lazyAttributeConverter[
                    Gu.SCAN_SETTINGS_ENABLED_SYMBOLOGIES
                  ];
              this.allSymbologies.forEach(function (n) {
                var r = t.includes(n);
                e.scanSettings.getSymbologySettings(n).setEnabled(r);
              }),
                this.picker.applyScanSettings(this.scanSettings);
            },
          },
          {
            key: "onPickerPropertyUpdate",
            value: function (e) {
              var t,
                n,
                r = this,
                i =
                  null !==
                    (t =
                      null ===
                        (n = {
                          gui: {
                            customLaserArea: [Gu.LASER_AREA],
                            customViewfinderArea: [Gu.VIEWFINDER_AREA],
                          },
                          cameraManager: {
                            activeCamera: [Gu.CAMERA, Gu.CAMERA_TYPE],
                            cameraSwitcherEnabled: [Gu.ENABLE_CAMERA_SWITCHER],
                            torchToggleEnabled: [Gu.ENABLE_TORCH_TOGGLE],
                            tapToFocusEnabled: [Gu.ENABLE_TAP_TO_FOCUS],
                            pinchToZoomEnabled: [Gu.ENABLE_PINCH_TO_ZOOM],
                          },
                        }[e.origin]) || void 0 === n
                        ? void 0
                        : n[e.key]) && void 0 !== t
                    ? t
                    : [e.key];
              (this.trackAttributes = !1),
                i.forEach(function (t) {
                  ld.includes(t) &&
                    (null == e.newValue
                      ? r.view.removeAttribute(t)
                      : r.view.setAttribute(
                          t,
                          (function (e, t) {
                            switch (e.type) {
                              case "boolean":
                                return t ? "true" : "false";
                              case "guiStyle":
                              case "integer":
                              case "string":
                              case "videoFit":
                              case "codeDirection":
                              case "recognitionMode":
                                return t.toString();
                              case "array":
                              case "camera":
                              case "cameraSettings":
                              case "searchArea":
                              case "singleImageModeSettings":
                              case "textRecognitionSettings":
                                return Tc(t);
                              case "cameraType":
                                return t.cameraType.toString();
                            }
                            return Tl(e);
                          })(dd()[t], e.newValue)
                        ));
                }),
                (this.trackAttributes = !0);
            },
          },
          {
            key: "getSingleImageModeSettings",
            value:
              ((n = Zr(
                ao.mark(function t() {
                  var n,
                    r,
                    i,
                    a = this;
                  return ao.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = {}),
                              null !=
                                this.lazyAttributeConverter[
                                  Gu.SINGLE_IMAGE_MODE_SETTINGS
                                ] &&
                                ((n.desktop = vd(
                                  vd(
                                    {},
                                    e.SingleImageModeSettings.defaultDesktop
                                  ),
                                  null !==
                                    (r =
                                      this.lazyAttributeConverter[
                                        Gu.SINGLE_IMAGE_MODE_SETTINGS
                                      ].desktop) && void 0 !== r
                                    ? r
                                    : {}
                                )),
                                (n.mobile = vd(
                                  vd(
                                    {},
                                    e.SingleImageModeSettings.defaultMobile
                                  ),
                                  null !==
                                    (i =
                                      this.lazyAttributeConverter[
                                        Gu.SINGLE_IMAGE_MODE_SETTINGS
                                      ].mobile) && void 0 !== i
                                    ? i
                                    : {}
                                ))),
                              (t.next = 4),
                              this.view.waitOnChildrenReady()
                            );
                          case 4:
                            return (
                              ["mobile", "desktop"].forEach(function (e) {
                                ["informationElement", "buttonElement"].forEach(
                                  function (t) {
                                    var r = a.view.querySelector(
                                      '*[slot="singleImageModeSettings.'
                                        .concat(e, ".")
                                        .concat(t, '"]')
                                    );
                                    null != r && null != n[e] && (n[e][t] = r);
                                  }
                                );
                              }),
                              t.abrupt("return", n)
                            );
                          case 6:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              )),
              function () {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "dispatchPickerEvent",
            value: function (e, t) {
              var n = new CustomEvent(e, { detail: t });
              this.view.dispatchCustomEvent(n);
            },
          },
          {
            key: "validateAllAttributes",
            value: function () {
              var e = this;
              Yo(this.view.getAttributes()).forEach(function (t) {
                ld.includes(t.name) && e.validateAttribute(t.name, t.value);
              });
            },
          },
          {
            key: "validateAttribute",
            value: function (t, n) {
              var r,
                i,
                a = this.attributeToCamelCase(t);
              switch (a) {
                case Gu.ACCESS_CAMERA:
                case Gu.CONFIGURE:
                case Gu.CONFIGURE_HIGH_QUALITY_BLURRY_RECOGNITION:
                case Gu.CONFIGURE_LOAD_TEXT_RECOGNITION:
                case Gu.CONFIGURE_PRELOAD_BLURRY_RECOGNITION:
                case Gu.CONFIGURE_PRELOAD_ENGINE:
                case Gu.ENABLE_CAMERA_SWITCHER:
                case Gu.ENABLE_PINCH_TO_ZOOM:
                case Gu.ENABLE_TAP_TO_FOCUS:
                case Gu.ENABLE_TORCH_TOGGLE:
                case Gu.PLAY_SOUND_ON_SCAN:
                case Gu.SCANNING_PAUSED:
                case Gu.VIBRATE_ON_SCAN:
                case Gu.VISIBLE:
                case Gu.SCAN_SETTINGS_BLURRY_RECOGNITION:
                case Gu.SCAN_SETTINGS_GPU_ACCELERATION:
                  r = gd.isBooleanAttribute;
                  break;
                case Gu.TARGET_SCANNING_FPS:
                case Gu.SCAN_SETTINGS_CODE_DUPLICATE_FILTER:
                case Gu.SCAN_SETTINGS_MAX_NUMBER_OF_CODES_PER_FRAME:
                  r = gd.isIntegerAttribute;
                  break;
                case Gu.SCAN_SETTINGS_CODE_DIRECTION_HINT:
                  r = gd.isValidCodeDirection;
                  break;
                case Gu.SCAN_SETTINGS_RECOGNITION_MODE:
                  r = gd.isValidRecognitionMode;
                  break;
                case Gu.SCAN_SETTINGS_TEXT_RECOGNITION_SETTINGS:
                  r = gd.isValidTextRecognitionSettingsObject;
                  break;
                case Gu.CAMERA_TYPE:
                  r = gd.isValidCameraType;
                  break;
                case Gu.GUI_STYLE:
                  r = gd.isValidGuiStyle;
                  break;
                case Gu.VIDEO_FIT:
                  r = gd.isValidVideoFit;
                  break;
                case Gu.SCAN_SETTINGS_ENABLED_SYMBOLOGIES:
                  r = gd.isValidJsonArray;
                  break;
                case Gu.VIEWFINDER_AREA:
                case Gu.LASER_AREA:
                case Gu.SCAN_SETTINGS_SEARCH_AREA:
                  r = gd.isValidSearchAreaAttribute;
                  break;
                case Gu.CAMERA:
                  r = gd.isValidCameraObject;
                  break;
                case Gu.CAMERA_SETTINGS:
                  r = gd.isValidCameraSettingsObject;
                  break;
                case Gu.SINGLE_IMAGE_MODE_SETTINGS:
                  r = gd.isValidSingleImageModeSettingsObject;
                  break;
                case Gu.CONFIGURE_ENGINE_LOCATION:
                case Gu.CONFIGURE_LICENSE_KEY:
                case Gu.SCAN_SETTINGS_DEVICE_NAME:
                  r = function () {
                    return !0;
                  };
                  break;
                default:
                  Tl(a);
              }
              return (
                !!r(n) ||
                (e.Logger.log(
                  e.Logger.Level.WARN,
                  'Invalid value for attribute "'
                    .concat(a, '": "')
                    .concat(n, '". ')
                    .concat(
                      null !== (i = gd.expectationMessage.get(r)) &&
                        void 0 !== i
                        ? i
                        : ""
                    )
                ),
                !1)
              );
            },
          },
          {
            key: "attributeToCamelCase",
            value: function (e) {
              var t = ld.findIndex(function (t) {
                return t.toLowerCase() === e.toLowerCase();
              });
              return ld[t];
            },
          },
          {
            key: "handleException",
            value: function (t) {
              e.Logger.log(e.Logger.Level.ERROR, t);
            },
          },
        ]),
        t
      );
    })(),
    bd = (function (e) {
      Lo(a, e);
      var t,
        n,
        r,
        i =
          ((n = a),
          (r = (function () {
            if ("undefined" == typeof Reflect || !Co) return !1;
            if (Co.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(Co(Boolean, [], function () {})),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var e,
              t = Oo(n);
            if (r) {
              var i = Oo(this).constructor;
              e = Co(t, arguments, i);
            } else e = t.apply(this, arguments);
            return Vo(this, e);
          });
      function a() {
        var e;
        return (
          Io(this, a),
          To(Mo((e = i.call(this))), "shadowDom", void 0),
          To(Mo(e), "controller", void 0),
          (e.controller = new yd(Mo(e))),
          (e.shadowDom = e.attachShadow({ mode: "open" })),
          e
        );
      }
      return (
        No(
          a,
          [
            {
              key: "barcodePicker",
              get: function () {
                return this.controller.picker;
              },
            },
            {
              key: "root",
              get: function () {
                return this.shadowDom.querySelector("#root");
              },
            },
            {
              key: "connectedCallback",
              value:
                ((t = Zr(
                  ao.mark(function e() {
                    return ao.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                this.controller.viewConnectedCallback()
                              );
                            case 2:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function () {
                  return t.apply(this, arguments);
                }),
            },
            {
              key: "disconnectedCallback",
              value: function () {
                this.controller.viewDisconnectedCallback();
              },
            },
            {
              key: "attributeChangedCallback",
              value: function (e) {
                this.controller.attributeChangedCallback(e);
              },
            },
            {
              key: "initializeDom",
              value: function () {
                this.shadowDom.innerHTML = this.initialDomContent;
              },
            },
            {
              key: "dispatchCustomEvent",
              value: function (e) {
                this.dispatchEvent(e);
              },
            },
            {
              key: "getAttributes",
              value: function () {
                return Yo(this.attributes).map(function (e) {
                  return { name: e.name, value: e.value };
                });
              },
            },
            {
              key: "waitOnChildrenReady",
              value: function () {
                return new Yr(function (e) {
                  setTimeout(e, 50);
                });
              },
            },
            {
              key: "initialDomContent",
              get: function () {
                return "\n      <style>".concat(
                  this.styles,
                  '</style>\n      <div id="root"></div>\n    '
                );
              },
            },
            {
              key: "wcStyles",
              get: function () {
                return "\n      :host {\n        display: block;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n\n      #root {\n        height: 100%;\n      }\n    ";
              },
            },
            {
              key: "styles",
              get: function () {
                return "\n      "
                  .concat(this.wcStyles, "\n      ")
                  .concat(gc, "\n    ");
              },
            },
          ],
          [
            {
              key: "observedAttributes",
              get: function () {
                return ld.map(function (e) {
                  return e.toLowerCase();
                });
              },
            },
            {
              key: "registerComponent",
              value: function () {
                if ("customElements" in window)
                  return (
                    null == customElements.get(a.TAG_NAME) &&
                      customElements.define(a.TAG_NAME, a),
                    a.TAG_NAME
                  );
              },
            },
          ]
        ),
        a
      );
    })(uc(HTMLElement));
  To(bd, "TAG_NAME", "scandit-barcode-picker"), bd.registerComponent();
  var Ed = e.BrowserHelper.getDeviceId();
  function Sd() {
    e.configurePhase = "unconfigured";
  }
  function Ad(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      r = n.logLevel,
      i = void 0 === r ? e.Logger.Level.DEBUG : r,
      a = n.engineLocation,
      o = void 0 === a ? "/" : a,
      s = n.highQualityBlurryRecognition,
      c = void 0 !== s && s,
      u = n.loadTextRecognition,
      l = void 0 !== u && u,
      d = n.preloadBlurryRecognition,
      h = void 0 === d || d,
      f = n.preloadEngine,
      g = void 0 === f || f;
    return (
      ("unconfigured" !== e.configurePhase && null != e.configurePromise) ||
        (e.Logger.setLevel(i),
        (e.configurePromise = new Yr(
          (function () {
            var n = Zr(
              ao.mark(function n(r, i) {
                var a, s, u, d;
                return ao.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (
                          (e.Logger.log(
                            e.Logger.Level.INFO,
                            "Scandit Web SDK version: 5.12.1"
                          ),
                          (e.configurePhase = "started"),
                          (a = e.BrowserHelper.checkBrowserCompatibility())
                            .fullSupport || a.scannerSupport)
                        ) {
                          n.next = 5;
                          break;
                        }
                        return n.abrupt("return", i(new fc(a)));
                      case 5:
                        if (!(null == t || t.trim().length < 64)) {
                          n.next = 7;
                          break;
                        }
                        return n.abrupt(
                          "return",
                          i(
                            new hc({
                              name: "NoLicenseKeyError",
                              message: "No license key provided",
                            })
                          )
                        );
                      case 7:
                        if (
                          ((e.userLicenseKey = t),
                          (o += "/" === o.slice(-1) ? "" : "/"),
                          /^https?:\/\//.test(o)
                            ? (e.scanditDataCaptureLocation = "".concat(o))
                            : ((o =
                                "" ===
                                (o = o
                                  .split("/")
                                  .filter(function (e) {
                                    return e.length > 0;
                                  })
                                  .join("/"))
                                  ? "/"
                                  : "/".concat(o, "/")),
                              "file:" === location.protocol ||
                              "null" === location.origin
                                ? (e.scanditDataCaptureLocation = ""
                                    .concat(
                                      location.href
                                        .split("/")
                                        .slice(0, -1)
                                        .join("/")
                                    )
                                    .concat(o))
                                : (e.scanditDataCaptureLocation = ""
                                    .concat(location.origin)
                                    .concat(o))),
                          (s = e.BrowserHelper.userAgentInfo.getBrowser().name),
                          (u = e.BrowserHelper.userAgentInfo.getOS().name),
                          (null != s &&
                            !s.includes("Safari") &&
                            null != u &&
                            "iOS" !== u) ||
                            null == window.indexedDB ||
                            !("databases" in indexedDB))
                        ) {
                          n.next = 15;
                          break;
                        }
                        return (
                          (n.next = 15),
                          new Yr(function (e) {
                            function t() {
                              indexedDB
                                .databases()
                                .then(e)
                                .catch(function () {});
                            }
                            (d = window.setInterval(t, 50)), t();
                          }).then(function () {
                            return clearInterval(d);
                          })
                        );
                      case 15:
                        return (
                          (e.highEndBlurryRecognition = c),
                          (e.textRecognition = l),
                          (n.next = 19),
                          oc.create(h)
                        );
                      case 19:
                        return (
                          (e.blurryRecognitionPreloader = n.sent),
                          (n.next = 22),
                          e.blurryRecognitionPreloader.prepareBlurryTables()
                        );
                      case 22:
                        return (
                          (e.dataCaptureLoader = new ac(g)),
                          (e.configurePhase = "done"),
                          n.abrupt("return", r())
                        );
                      case 25:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
            return function (e, t) {
              return n.apply(this, arguments);
            };
          })()
        ).catch(function (e) {
          throw (Sd(), e);
        }))),
      e.configurePromise
    );
  }
  (e.userLicenseKey = void 0),
    (e.scanditDataCaptureLocation = void 0),
    (e.blurryRecognitionPreloader = void 0),
    (e.highEndBlurryRecognition = void 0),
    (e.textRecognition = void 0),
    (e.dataCaptureLoader = void 0),
    (e.configurePhase = "unconfigured"),
    (e.configurePromise = void 0),
    (e.CustomError = hc),
    (e.ScanResult = wc),
    (e.Scanner = Bc),
    (e.TextRecognitionSettings = Dc),
    (e.UAParser = nc),
    (e.configure = Ad),
    (e.dataCapture = rc),
    (e.dataCaptureWorkerBlob = ic),
    (e.deviceId = Ed),
    (e.resetConfigure = Sd),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=index.min.js.map
