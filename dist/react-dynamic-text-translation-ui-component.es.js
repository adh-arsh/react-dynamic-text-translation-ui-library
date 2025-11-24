import { jsx as T, jsxs as v } from "react/jsx-runtime";
import { createContext as Ot, useState as j, useEffect as z, useContext as Ct, useRef as se, forwardRef as At, createElement as Ue, useCallback as me } from "react";
const Ze = Ot(void 0), fr = ({
  children: e,
  config: t
}) => {
  const [n, r] = j(
    t.defaultLanguage || "en"
  ), s = t.storageKey || "app_language";
  z(() => {
    if (typeof window < "u") {
      const o = localStorage.getItem(s);
      o && r(o);
    }
  }, [s]);
  const i = (o) => {
    r(o), typeof window < "u" && localStorage.setItem(s, o);
  };
  return /* @__PURE__ */ T(
    Ze.Provider,
    {
      value: { currentLanguage: n, setLanguage: i, config: t },
      children: e
    }
  );
}, Qe = () => {
  const e = Ct(Ze);
  if (e === void 0)
    throw new Error(
      "useTranslationContext must be used within a TranslationProvider"
    );
  return e;
};
function Ye(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Nt } = Object.prototype, { getPrototypeOf: Te } = Object, { iterator: le, toStringTag: et } = Symbol, ue = /* @__PURE__ */ ((e) => (t) => {
  const n = Nt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), L = (e) => (e = e.toLowerCase(), (t) => ue(t) === e), fe = (e) => (t) => typeof t === e, { isArray: K } = Array, J = fe("undefined");
function G(e) {
  return e !== null && !J(e) && e.constructor !== null && !J(e.constructor) && P(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const tt = L("ArrayBuffer");
function Pt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && tt(e.buffer), t;
}
const kt = fe("string"), P = fe("function"), nt = fe("number"), Z = (e) => e !== null && typeof e == "object", Lt = (e) => e === !0 || e === !1, oe = (e) => {
  if (ue(e) !== "object")
    return !1;
  const t = Te(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(et in e) && !(le in e);
}, Ft = (e) => {
  if (!Z(e) || G(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, _t = L("Date"), Ut = L("File"), Dt = L("Blob"), Bt = L("FileList"), vt = (e) => Z(e) && P(e.pipe), jt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || P(e.append) && ((t = ue(e)) === "formdata" || // detect form-data instance
  t === "object" && P(e.toString) && e.toString() === "[object FormData]"));
}, It = L("URLSearchParams"), [$t, Ht, Mt, qt] = ["ReadableStream", "Request", "Response", "Headers"].map(L), zt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Q(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), K(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (G(e))
      return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let c;
    for (r = 0; r < o; r++)
      c = i[r], t.call(null, e[c], c, e);
  }
}
function rt(e, t) {
  if (G(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const $ = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, st = (e) => !J(e) && e !== $;
function Ee() {
  const { caseless: e, skipUndefined: t } = st(this) && this || {}, n = {}, r = (s, i) => {
    const o = e && rt(n, i) || i;
    oe(n[o]) && oe(s) ? n[o] = Ee(n[o], s) : oe(s) ? n[o] = Ee({}, s) : K(s) ? n[o] = s.slice() : (!t || !J(s)) && (n[o] = s);
  };
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && Q(arguments[s], r);
  return n;
}
const Jt = (e, t, n, { allOwnKeys: r } = {}) => (Q(t, (s, i) => {
  n && P(s) ? e[i] = Ye(s, n) : e[i] = s;
}, { allOwnKeys: r }), e), Kt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Wt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Vt = (e, t, n, r) => {
  let s, i, o;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, e, t)) && !c[o] && (t[o] = e[o], c[o] = !0);
    e = n !== !1 && Te(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Xt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Gt = (e) => {
  if (!e) return null;
  if (K(e)) return e;
  let t = e.length;
  if (!nt(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Zt = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Te(Uint8Array)), Qt = (e, t) => {
  const r = (e && e[le]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, Yt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, en = L("HTMLFormElement"), tn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), De = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), nn = L("RegExp"), ot = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Q(n, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(e, r);
}, rn = (e) => {
  ot(e, (t, n) => {
    if (P(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (P(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, sn = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return K(e) ? r(e) : r(String(e).split(t)), n;
}, on = () => {
}, an = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function cn(e) {
  return !!(e && P(e.append) && e[et] === "FormData" && e[le]);
}
const ln = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Z(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (G(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const i = K(r) ? [] : {};
        return Q(r, (o, c) => {
          const d = n(o, s + 1);
          !J(d) && (i[c] = d);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, un = L("AsyncFunction"), fn = (e) => e && (Z(e) || P(e)) && P(e.then) && P(e.catch), it = ((e, t) => e ? setImmediate : t ? ((n, r) => ($.addEventListener("message", ({ source: s, data: i }) => {
  s === $ && i === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), $.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  P($.postMessage)
), dn = typeof queueMicrotask < "u" ? queueMicrotask.bind($) : typeof process < "u" && process.nextTick || it, pn = (e) => e != null && P(e[le]), a = {
  isArray: K,
  isArrayBuffer: tt,
  isBuffer: G,
  isFormData: jt,
  isArrayBufferView: Pt,
  isString: kt,
  isNumber: nt,
  isBoolean: Lt,
  isObject: Z,
  isPlainObject: oe,
  isEmptyObject: Ft,
  isReadableStream: $t,
  isRequest: Ht,
  isResponse: Mt,
  isHeaders: qt,
  isUndefined: J,
  isDate: _t,
  isFile: Ut,
  isBlob: Dt,
  isRegExp: nn,
  isFunction: P,
  isStream: vt,
  isURLSearchParams: It,
  isTypedArray: Zt,
  isFileList: Bt,
  forEach: Q,
  merge: Ee,
  extend: Jt,
  trim: zt,
  stripBOM: Kt,
  inherits: Wt,
  toFlatObject: Vt,
  kindOf: ue,
  kindOfTest: L,
  endsWith: Xt,
  toArray: Gt,
  forEachEntry: Qt,
  matchAll: Yt,
  isHTMLForm: en,
  hasOwnProperty: De,
  hasOwnProp: De,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ot,
  freezeMethods: rn,
  toObjectSet: sn,
  toCamelCase: tn,
  noop: on,
  toFiniteNumber: an,
  findKey: rt,
  global: $,
  isContextDefined: st,
  isSpecCompliantForm: cn,
  toJSONObject: ln,
  isAsyncFn: un,
  isThenable: fn,
  setImmediate: it,
  asap: dn,
  isIterable: pn
};
function b(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(b, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const at = b.prototype, ct = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  ct[e] = { value: e };
});
Object.defineProperties(b, ct);
Object.defineProperty(at, "isAxiosError", { value: !0 });
b.from = (e, t, n, r, s, i) => {
  const o = Object.create(at);
  a.toFlatObject(e, o, function(l) {
    return l !== Error.prototype;
  }, (u) => u !== "isAxiosError");
  const c = e && e.message ? e.message : "Error", d = t == null && e ? e.code : t;
  return b.call(o, c, d, n, r, s), e && o.cause == null && Object.defineProperty(o, "cause", { value: e, configurable: !0 }), o.name = e && e.name || "Error", i && Object.assign(o, i), o;
};
const hn = null;
function Se(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function lt(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Be(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = lt(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function mn(e) {
  return a.isArray(e) && !e.some(Se);
}
const wn = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function de(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, m) {
    return !a.isUndefined(m[w]);
  });
  const r = n.metaTokens, s = n.visitor || l, i = n.dots, o = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(f) {
    if (f === null) return "";
    if (a.isDate(f))
      return f.toISOString();
    if (a.isBoolean(f))
      return f.toString();
    if (!d && a.isBlob(f))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f) ? d && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, w, m) {
    let S = f;
    if (f && !m && typeof f == "object") {
      if (a.endsWith(w, "{}"))
        w = r ? w : w.slice(0, -2), f = JSON.stringify(f);
      else if (a.isArray(f) && mn(f) || (a.isFileList(f) || a.endsWith(w, "[]")) && (S = a.toArray(f)))
        return w = lt(w), S.forEach(function(p, g) {
          !(a.isUndefined(p) || p === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Be([w], g, i) : o === null ? w : w + "[]",
            u(p)
          );
        }), !1;
    }
    return Se(f) ? !0 : (t.append(Be(m, w, i), u(f)), !1);
  }
  const h = [], y = Object.assign(wn, {
    defaultVisitor: l,
    convertValue: u,
    isVisitable: Se
  });
  function E(f, w) {
    if (!a.isUndefined(f)) {
      if (h.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      h.push(f), a.forEach(f, function(S, O) {
        (!(a.isUndefined(S) || S === null) && s.call(
          t,
          S,
          a.isString(O) ? O.trim() : O,
          w,
          y
        )) === !0 && E(S, w ? w.concat(O) : [O]);
      }), h.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function ve(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Oe(e, t) {
  this._pairs = [], e && de(e, this, t);
}
const ut = Oe.prototype;
ut.append = function(t, n) {
  this._pairs.push([t, n]);
};
ut.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ve);
  } : ve;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function yn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function ft(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || yn;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let i;
  if (s ? i = s(t, n) : i = a.isURLSearchParams(t) ? t.toString() : new Oe(t, n).toString(r), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class je {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const dt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, bn = typeof URLSearchParams < "u" ? URLSearchParams : Oe, gn = typeof FormData < "u" ? FormData : null, En = typeof Blob < "u" ? Blob : null, Sn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: bn,
    FormData: gn,
    Blob: En
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ce = typeof window < "u" && typeof document < "u", xe = typeof navigator == "object" && navigator || void 0, xn = Ce && (!xe || ["ReactNative", "NativeScript", "NS"].indexOf(xe.product) < 0), Rn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Tn = Ce && window.location.href || "http://localhost", On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ce,
  hasStandardBrowserEnv: xn,
  hasStandardBrowserWebWorkerEnv: Rn,
  navigator: xe,
  origin: Tn
}, Symbol.toStringTag, { value: "Module" })), A = {
  ...On,
  ...Sn
};
function Cn(e, t) {
  return de(e, new A.classes.URLSearchParams(), {
    visitor: function(n, r, s, i) {
      return A.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function An(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Nn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function pt(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const c = Number.isFinite(+o), d = i >= n.length;
    return o = !o && a.isArray(s) ? s.length : o, d ? (a.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !c) : ((!s[o] || !a.isObject(s[o])) && (s[o] = []), t(n, r, s[o], i) && a.isArray(s[o]) && (s[o] = Nn(s[o])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(An(r), s, n, 0);
    }), n;
  }
  return null;
}
function Pn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Y = {
  transitional: dt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = a.isObject(t);
    if (i && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(pt(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Cn(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return de(
          c ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), Pn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Y.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t, this.parseReviver);
      } catch (c) {
        if (o)
          throw c.name === "SyntaxError" ? b.from(c, b.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: A.classes.FormData,
    Blob: A.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Y.headers[e] = {};
});
const kn = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Ln = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && kn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ie = Symbol("internals");
function X(e) {
  return e && String(e).trim().toLowerCase();
}
function ie(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(ie) : String(e);
}
function Fn(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const _n = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function we(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Un(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Dn(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
let k = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(c, d, u) {
      const l = X(d);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(s, l);
      (!h || s[h] === void 0 || u === !0 || u === void 0 && s[h] !== !1) && (s[h || d] = ie(c));
    }
    const o = (c, d) => a.forEach(c, (u, l) => i(u, l, d));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (a.isString(t) && (t = t.trim()) && !_n(t))
      o(Ln(t), n);
    else if (a.isObject(t) && a.isIterable(t)) {
      let c = {}, d, u;
      for (const l of t) {
        if (!a.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        c[u = l[0]] = (d = c[u]) ? a.isArray(d) ? [...d, l[1]] : [d, l[1]] : l[1];
      }
      o(c, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = X(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Fn(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = X(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || we(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (o = X(o), o) {
        const c = a.findKey(r, o);
        c && (!n || we(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || we(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, i) => {
      const o = a.findKey(r, i);
      if (o) {
        n[o] = ie(s), delete n[i];
        return;
      }
      const c = t ? Un(i) : String(i).trim();
      c !== i && delete n[i], n[c] = ie(s), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Ie] = this[Ie] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const c = X(o);
      r[c] || (Dn(s, o), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
k.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(k.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(k);
function ye(e, t) {
  const n = this || Y, r = t || n, s = k.from(r.headers);
  let i = r.data;
  return a.forEach(e, function(c) {
    i = c.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function ht(e) {
  return !!(e && e.__CANCEL__);
}
function W(e, t, n) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(W, b, {
  __CANCEL__: !0
});
function mt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new b(
    "Request failed with status code " + n.status,
    [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Bn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function vn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const u = Date.now(), l = r[i];
    o || (o = u), n[s] = d, r[s] = u;
    let h = i, y = 0;
    for (; h !== s; )
      y += n[h++], h = h % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), u - o < t)
      return;
    const E = l && u - l;
    return E ? Math.round(y * 1e3 / E) : void 0;
  };
}
function jn(e, t) {
  let n = 0, r = 1e3 / t, s, i;
  const o = (u, l = Date.now()) => {
    n = l, s = null, i && (clearTimeout(i), i = null), e(...u);
  };
  return [(...u) => {
    const l = Date.now(), h = l - n;
    h >= r ? o(u, l) : (s = u, i || (i = setTimeout(() => {
      i = null, o(s);
    }, r - h)));
  }, () => s && o(s)];
}
const ce = (e, t, n = 3) => {
  let r = 0;
  const s = vn(50, 250);
  return jn((i) => {
    const o = i.loaded, c = i.lengthComputable ? i.total : void 0, d = o - r, u = s(d), l = o <= c;
    r = o;
    const h = {
      loaded: o,
      total: c,
      progress: c ? o / c : void 0,
      bytes: d,
      rate: u || void 0,
      estimated: u && c && l ? (c - o) / u : void 0,
      event: i,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, n);
}, $e = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, He = (e) => (...t) => a.asap(() => e(...t)), In = A.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, A.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(A.origin),
  A.navigator && /(msie|trident)/i.test(A.navigator.userAgent)
) : () => !0, $n = A.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, i, o) {
      if (typeof document > "u") return;
      const c = [`${e}=${encodeURIComponent(t)}`];
      a.isNumber(n) && c.push(`expires=${new Date(n).toUTCString()}`), a.isString(r) && c.push(`path=${r}`), a.isString(s) && c.push(`domain=${s}`), i === !0 && c.push("secure"), a.isString(o) && c.push(`SameSite=${o}`), document.cookie = c.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Hn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Mn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function wt(e, t, n) {
  let r = !Hn(t);
  return e && (r || n == !1) ? Mn(e, t) : t;
}
const Me = (e) => e instanceof k ? { ...e } : e;
function M(e, t) {
  t = t || {};
  const n = {};
  function r(u, l, h, y) {
    return a.isPlainObject(u) && a.isPlainObject(l) ? a.merge.call({ caseless: y }, u, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(u, l, h, y) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u, h, y);
    } else return r(u, l, h, y);
  }
  function i(u, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function o(u, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, l);
  }
  function c(u, l, h) {
    if (h in t)
      return r(u, l);
    if (h in e)
      return r(void 0, u);
  }
  const d = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: c,
    headers: (u, l, h) => s(Me(u), Me(l), h, !0)
  };
  return a.forEach(Object.keys({ ...e, ...t }), function(l) {
    const h = d[l] || s, y = h(e[l], t[l], l);
    a.isUndefined(y) && h !== c || (n[l] = y);
  }), n;
}
const yt = (e) => {
  const t = M({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: c } = t;
  if (t.headers = o = k.from(o), t.url = ft(wt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && o.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  ), a.isFormData(n)) {
    if (A.hasStandardBrowserEnv || A.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if (a.isFunction(n.getHeaders)) {
      const d = n.getHeaders(), u = ["content-type", "content-length"];
      Object.entries(d).forEach(([l, h]) => {
        u.includes(l.toLowerCase()) && o.set(l, h);
      });
    }
  }
  if (A.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && In(t.url))) {
    const d = s && i && $n.read(i);
    d && o.set(s, d);
  }
  return t;
}, qn = typeof XMLHttpRequest < "u", zn = qn && function(e) {
  return new Promise(function(n, r) {
    const s = yt(e);
    let i = s.data;
    const o = k.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: d, onDownloadProgress: u } = s, l, h, y, E, f;
    function w() {
      E && E(), f && f(), s.cancelToken && s.cancelToken.unsubscribe(l), s.signal && s.signal.removeEventListener("abort", l);
    }
    let m = new XMLHttpRequest();
    m.open(s.method.toUpperCase(), s.url, !0), m.timeout = s.timeout;
    function S() {
      if (!m)
        return;
      const p = k.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), R = {
        data: !c || c === "text" || c === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: p,
        config: e,
        request: m
      };
      mt(function(C) {
        n(C), w();
      }, function(C) {
        r(C), w();
      }, R), m = null;
    }
    "onloadend" in m ? m.onloadend = S : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, m.onabort = function() {
      m && (r(new b("Request aborted", b.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function(g) {
      const R = g && g.message ? g.message : "Network Error", N = new b(R, b.ERR_NETWORK, e, m);
      N.event = g || null, r(N), m = null;
    }, m.ontimeout = function() {
      let g = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const R = s.transitional || dt;
      s.timeoutErrorMessage && (g = s.timeoutErrorMessage), r(new b(
        g,
        R.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        e,
        m
      )), m = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in m && a.forEach(o.toJSON(), function(g, R) {
      m.setRequestHeader(R, g);
    }), a.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials), c && c !== "json" && (m.responseType = s.responseType), u && ([y, f] = ce(u, !0), m.addEventListener("progress", y)), d && m.upload && ([h, E] = ce(d), m.upload.addEventListener("progress", h), m.upload.addEventListener("loadend", E)), (s.cancelToken || s.signal) && (l = (p) => {
      m && (r(!p || p.type ? new W(null, e, m) : p), m.abort(), m = null);
    }, s.cancelToken && s.cancelToken.subscribe(l), s.signal && (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
    const O = Bn(s.url);
    if (O && A.protocols.indexOf(O) === -1) {
      r(new b("Unsupported protocol " + O + ":", b.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(i || null);
  });
}, Jn = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const i = function(u) {
      if (!s) {
        s = !0, c();
        const l = u instanceof Error ? u : this.reason;
        r.abort(l instanceof b ? l : new W(l instanceof Error ? l.message : l));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new b(`timeout ${t} of ms exceeded`, b.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", i));
    const { signal: d } = r;
    return d.unsubscribe = () => a.asap(c), d;
  }
}, Kn = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Wn = async function* (e, t) {
  for await (const n of Vn(e))
    yield* Kn(n, t);
}, Vn = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, qe = (e, t, n, r) => {
  const s = Wn(e, t);
  let i = 0, o, c = (d) => {
    o || (o = !0, r && r(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: u, value: l } = await s.next();
        if (u) {
          c(), d.close();
          return;
        }
        let h = l.byteLength;
        if (n) {
          let y = i += h;
          n(y);
        }
        d.enqueue(new Uint8Array(l));
      } catch (u) {
        throw c(u), u;
      }
    },
    cancel(d) {
      return c(d), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, ze = 64 * 1024, { isFunction: re } = a, Xn = (({ Request: e, Response: t }) => ({
  Request: e,
  Response: t
}))(a.global), {
  ReadableStream: Je,
  TextEncoder: Ke
} = a.global, We = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Gn = (e) => {
  e = a.merge.call({
    skipUndefined: !0
  }, Xn, e);
  const { fetch: t, Request: n, Response: r } = e, s = t ? re(t) : typeof fetch == "function", i = re(n), o = re(r);
  if (!s)
    return !1;
  const c = s && re(Je), d = s && (typeof Ke == "function" ? /* @__PURE__ */ ((f) => (w) => f.encode(w))(new Ke()) : async (f) => new Uint8Array(await new n(f).arrayBuffer())), u = i && c && We(() => {
    let f = !1;
    const w = new n(A.origin, {
      body: new Je(),
      method: "POST",
      get duplex() {
        return f = !0, "half";
      }
    }).headers.has("Content-Type");
    return f && !w;
  }), l = o && c && We(() => a.isReadableStream(new r("").body)), h = {
    stream: l && ((f) => f.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((f) => {
    !h[f] && (h[f] = (w, m) => {
      let S = w && w[f];
      if (S)
        return S.call(w);
      throw new b(`Response type '${f}' is not supported`, b.ERR_NOT_SUPPORT, m);
    });
  });
  const y = async (f) => {
    if (f == null)
      return 0;
    if (a.isBlob(f))
      return f.size;
    if (a.isSpecCompliantForm(f))
      return (await new n(A.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
    if (a.isArrayBufferView(f) || a.isArrayBuffer(f))
      return f.byteLength;
    if (a.isURLSearchParams(f) && (f = f + ""), a.isString(f))
      return (await d(f)).byteLength;
  }, E = async (f, w) => {
    const m = a.toFiniteNumber(f.getContentLength());
    return m ?? y(w);
  };
  return async (f) => {
    let {
      url: w,
      method: m,
      data: S,
      signal: O,
      cancelToken: p,
      timeout: g,
      onDownloadProgress: R,
      onUploadProgress: N,
      responseType: C,
      headers: U,
      withCredentials: ee = "same-origin",
      fetchOptions: Ne
    } = yt(f), Pe = t || fetch;
    C = C ? (C + "").toLowerCase() : "text";
    let te = Jn([O, p && p.toAbortSignal()], g), V = null;
    const I = te && te.unsubscribe && (() => {
      te.unsubscribe();
    });
    let ke;
    try {
      if (N && u && m !== "get" && m !== "head" && (ke = await E(U, S)) !== 0) {
        let B = new n(w, {
          method: "POST",
          body: S,
          duplex: "half"
        }), q;
        if (a.isFormData(S) && (q = B.headers.get("content-type")) && U.setContentType(q), B.body) {
          const [he, ne] = $e(
            ke,
            ce(He(N))
          );
          S = qe(B.body, ze, he, ne);
        }
      }
      a.isString(ee) || (ee = ee ? "include" : "omit");
      const F = i && "credentials" in n.prototype, Le = {
        ...Ne,
        signal: te,
        method: m.toUpperCase(),
        headers: U.normalize().toJSON(),
        body: S,
        duplex: "half",
        credentials: F ? ee : void 0
      };
      V = i && new n(w, Le);
      let D = await (i ? Pe(V, Ne) : Pe(w, Le));
      const Fe = l && (C === "stream" || C === "response");
      if (l && (R || Fe && I)) {
        const B = {};
        ["status", "statusText", "headers"].forEach((_e) => {
          B[_e] = D[_e];
        });
        const q = a.toFiniteNumber(D.headers.get("content-length")), [he, ne] = R && $e(
          q,
          ce(He(R), !0)
        ) || [];
        D = new r(
          qe(D.body, ze, he, () => {
            ne && ne(), I && I();
          }),
          B
        );
      }
      C = C || "text";
      let Tt = await h[a.findKey(h, C) || "text"](D, f);
      return !Fe && I && I(), await new Promise((B, q) => {
        mt(B, q, {
          data: Tt,
          headers: k.from(D.headers),
          status: D.status,
          statusText: D.statusText,
          config: f,
          request: V
        });
      });
    } catch (F) {
      throw I && I(), F && F.name === "TypeError" && /Load failed|fetch/i.test(F.message) ? Object.assign(
        new b("Network Error", b.ERR_NETWORK, f, V),
        {
          cause: F.cause || F
        }
      ) : b.from(F, F && F.code, f, V);
    }
  };
}, Zn = /* @__PURE__ */ new Map(), bt = (e) => {
  let t = e && e.env || {};
  const { fetch: n, Request: r, Response: s } = t, i = [
    r,
    s,
    n
  ];
  let o = i.length, c = o, d, u, l = Zn;
  for (; c--; )
    d = i[c], u = l.get(d), u === void 0 && l.set(d, u = c ? /* @__PURE__ */ new Map() : Gn(t)), l = u;
  return u;
};
bt();
const Ae = {
  http: hn,
  xhr: zn,
  fetch: {
    get: bt
  }
};
a.forEach(Ae, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ve = (e) => `- ${e}`, Qn = (e) => a.isFunction(e) || e === null || e === !1;
function Yn(e, t) {
  e = a.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, s;
  const i = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let c;
    if (s = r, !Qn(r) && (s = Ae[(c = String(r)).toLowerCase()], s === void 0))
      throw new b(`Unknown adapter '${c}'`);
    if (s && (a.isFunction(s) || (s = s.get(t))))
      break;
    i[c || "#" + o] = s;
  }
  if (!s) {
    const o = Object.entries(i).map(
      ([d, u]) => `adapter ${d} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let c = n ? o.length > 1 ? `since :
` + o.map(Ve).join(`
`) : " " + Ve(o[0]) : "as no adapter specified";
    throw new b(
      "There is no suitable adapter to dispatch the request " + c,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const gt = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Yn,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ae
};
function be(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new W(null, e);
}
function Xe(e) {
  return be(e), e.headers = k.from(e.headers), e.data = ye.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), gt.getAdapter(e.adapter || Y.adapter, e)(e).then(function(r) {
    return be(e), r.data = ye.call(
      e,
      e.transformResponse,
      r
    ), r.headers = k.from(r.headers), r;
  }, function(r) {
    return ht(r) || (be(e), r && r.response && (r.response.data = ye.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = k.from(r.response.headers))), Promise.reject(r);
  });
}
const Et = "1.13.2", pe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  pe[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ge = {};
pe.transitional = function(t, n, r) {
  function s(i, o) {
    return "[Axios v" + Et + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, c) => {
    if (t === !1)
      throw new b(
        s(o, " has been removed" + (n ? " in " + n : "")),
        b.ERR_DEPRECATED
      );
    return n && !Ge[o] && (Ge[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, o, c) : !0;
  };
};
pe.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function er(e, t, n) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = t[i];
    if (o) {
      const c = e[i], d = c === void 0 || o(c, i, e);
      if (d !== !0)
        throw new b("option " + i + " must be " + d, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new b("Unknown option " + i, b.ERR_BAD_OPTION);
  }
}
const ae = {
  assertOptions: er,
  validators: pe
}, _ = ae.validators;
let H = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new je(),
      response: new je()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = M(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && ae.assertOptions(r, {
      silentJSONParsing: _.transitional(_.boolean),
      forcedJSONParsing: _.transitional(_.boolean),
      clarifyTimeoutError: _.transitional(_.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : ae.assertOptions(s, {
      encode: _.function,
      serialize: _.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), ae.assertOptions(n, {
      baseUrl: _.spelling("baseURL"),
      withXsrfToken: _.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && a.merge(
      i.common,
      i[n.method]
    );
    i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete i[f];
      }
    ), n.headers = k.concat(o, i);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(n) === !1 || (d = d && w.synchronous, c.unshift(w.fulfilled, w.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(w) {
      u.push(w.fulfilled, w.rejected);
    });
    let l, h = 0, y;
    if (!d) {
      const f = [Xe.bind(this), void 0];
      for (f.unshift(...c), f.push(...u), y = f.length, l = Promise.resolve(n); h < y; )
        l = l.then(f[h++], f[h++]);
      return l;
    }
    y = c.length;
    let E = n;
    for (; h < y; ) {
      const f = c[h++], w = c[h++];
      try {
        E = f(E);
      } catch (m) {
        w.call(this, m);
        break;
      }
    }
    try {
      l = Xe.call(this, E);
    } catch (f) {
      return Promise.reject(f);
    }
    for (h = 0, y = u.length; h < y; )
      l = l.then(u[h++], u[h++]);
    return l;
  }
  getUri(t) {
    t = M(this.defaults, t);
    const n = wt(t.baseURL, t.url, t.allowAbsoluteUrls);
    return ft(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  H.prototype[t] = function(n, r) {
    return this.request(M(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, c) {
      return this.request(M(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  H.prototype[t] = n(), H.prototype[t + "Form"] = n(!0);
});
let tr = class St {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((c) => {
        r.subscribe(c), i = c;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, t(function(i, o, c) {
      r.reason || (r.reason = new W(i, o, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new St(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function nr(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function rr(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const Re = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Re).forEach(([e, t]) => {
  Re[t] = e;
});
function xt(e) {
  const t = new H(e), n = Ye(H.prototype.request, t);
  return a.extend(n, H.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return xt(M(e, s));
  }, n;
}
const x = xt(Y);
x.Axios = H;
x.CanceledError = W;
x.CancelToken = tr;
x.isCancel = ht;
x.VERSION = Et;
x.toFormData = de;
x.AxiosError = b;
x.Cancel = x.CanceledError;
x.all = function(t) {
  return Promise.all(t);
};
x.spread = nr;
x.isAxiosError = rr;
x.mergeConfig = M;
x.AxiosHeaders = k;
x.formToJSON = (e) => pt(a.isHTMLForm(e) ? new FormData(e) : e);
x.getAdapter = gt.getAdapter;
x.HttpStatusCode = Re;
x.default = x;
const {
  Axios: hr,
  AxiosError: mr,
  CanceledError: wr,
  isCancel: yr,
  CancelToken: br,
  VERSION: gr,
  all: Er,
  Cancel: Sr,
  isAxiosError: xr,
  spread: Rr,
  toFormData: Tr,
  AxiosHeaders: Or,
  HttpStatusCode: Cr,
  formToJSON: Ar,
  getAdapter: Nr,
  mergeConfig: Pr
} = x, sr = async (e, t, n, r) => {
  try {
    return (await x.post(`${n}/translation`, {
      text: e,
      targetLanguage: t,
      apiKey: r
      // Pass apiKey if provided
    })).data.translatedText;
  } catch (s) {
    return console.error("Translation service error:", s), e;
  }
}, or = (e, t = {}) => {
  const { currentLanguage: n, config: r } = Qe(), [s, i] = j(e), [o, c] = j(!1);
  return z(() => {
    let d = !0;
    return (async () => {
      if (!e || n === "en") {
        i(e);
        return;
      }
      const l = !(t.noCache ?? r.defaultNoCache ?? !1), h = `translation_${n}_${e}`;
      if (l) {
        const y = localStorage.getItem(h);
        if (y) {
          i(y);
          return;
        }
      }
      c(!0);
      try {
        let y;
        r.translateFn ? y = await r.translateFn(
          e,
          n,
          r.apiUrl,
          r.apiKey
        ) : y = await sr(
          e,
          n,
          r.apiUrl,
          r.apiKey
        ), d && (i(y), l && localStorage.setItem(h, y));
      } catch (y) {
        console.error("Translation error:", y), d && i(e);
      } finally {
        d && c(!1);
      }
    })(), () => {
      d = !1;
    };
  }, [
    e,
    n,
    r.apiUrl,
    r.apiKey,
    r.translateFn,
    r.defaultNoCache,
    t.noCache
  ]), { translatedText: s, isLoading: o };
}, kr = ({
  text: e,
  className: t = "",
  as: n = "span",
  enableScroll: r = !1,
  enableTooltip: s = !0,
  truncate: i = !1,
  enableMarquee: o = !1,
  marqueeSpeed: c = 10,
  noCache: d
}) => {
  const { translatedText: u } = or(e, { noCache: d }), [l, h] = j(!1), [y, E] = j(!1), f = se(null);
  if (z(() => {
    const g = () => {
      if (f.current) {
        const N = f.current.scrollWidth > f.current.clientWidth;
        h(N);
      }
    };
    g();
    const R = setTimeout(g, 100);
    return () => clearTimeout(R);
  }, [u]), o && l)
    return /* @__PURE__ */ v(
      "div",
      {
        className: `relative overflow-hidden whitespace-nowrap ${t}`,
        style: { whiteSpace: "nowrap" },
        onMouseEnter: () => s && E(!0),
        onMouseLeave: () => E(!1),
        children: [
          /* @__PURE__ */ v(
            "div",
            {
              className: "inline-flex items-center",
              style: {
                animation: `marquee ${c}s linear infinite`,
                animationPlayState: y ? "paused" : "running"
              },
              children: [
                /* @__PURE__ */ T("span", { className: "mr-8 whitespace-nowrap", children: u }),
                /* @__PURE__ */ T("span", { className: "mr-8 whitespace-nowrap", children: u })
              ]
            }
          ),
          s && y && /* @__PURE__ */ T(
            "div",
            {
              className: "fixed px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg max-w-xs break-words whitespace-normal pointer-events-none",
              style: {
                zIndex: 9999,
                transform: "translateY(-100%)",
                marginTop: "-8px"
              },
              children: u
            }
          )
        ]
      }
    );
  const m = `${t} ${i ? "overflow-hidden text-ellipsis whitespace-nowrap" : o ? "whitespace-nowrap" : r ? "overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400" : ""}`.trim(), S = t.includes("block") || i || o;
  return /* @__PURE__ */ v(S ? "div" : "span", { className: S ? "relative block w-full" : "relative inline-block max-w-full align-middle", style: o || i ? { whiteSpace: "nowrap", overflow: "hidden" } : void 0, children: [
    /* @__PURE__ */ T(
      n,
      {
        ref: f,
        className: m,
        style: o || i ? {
          whiteSpace: "nowrap",
          display: "block",
          lineHeight: "1.5",
          ...i ? { textOverflow: "ellipsis", overflow: "hidden" } : {}
        } : void 0,
        onMouseEnter: () => s && l && E(!0),
        onMouseLeave: () => E(!1),
        title: s && l ? u : void 0,
        children: u
      }
    ),
    s && y && l && /* @__PURE__ */ T(
      "div",
      {
        className: "fixed px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg max-w-xs break-words whitespace-normal pointer-events-none",
        style: {
          zIndex: 9999,
          transform: "translateY(-100%)",
          marginTop: "-8px"
        },
        children: u
      }
    )
  ] });
};
var ir = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const ar = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Rt = (e, t) => {
  const n = At(
    ({ color: r = "currentColor", size: s = 24, strokeWidth: i = 2, absoluteStrokeWidth: o, children: c, ...d }, u) => Ue(
      "svg",
      {
        ref: u,
        ...ir,
        width: s,
        height: s,
        stroke: r,
        strokeWidth: o ? Number(i) * 24 / Number(s) : i,
        className: `lucide lucide-${ar(e)}`,
        ...d
      },
      [
        ...t.map(([l, h]) => Ue(l, h)),
        ...(Array.isArray(c) ? c : [c]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
}, ge = Rt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), cr = Rt("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]), Lr = ({
  variant: e = "icon",
  onLanguageChange: t
}) => {
  var O;
  const [n, r] = j(!1), [s, i] = j(!1), [o, c] = j(
    "bottom"
  ), d = se(null), u = se(null), l = se(null), { currentLanguage: h, setLanguage: y, config: E } = Qe();
  z(() => {
    r(!0);
  }, []), z(() => {
    if (!s || !u.current) return;
    const p = () => {
      var U;
      const g = (U = u.current) == null ? void 0 : U.getBoundingClientRect();
      if (!g) return;
      const R = window.innerHeight - g.bottom, N = g.top;
      R < 250 && N > R ? c("top") : c("bottom");
    };
    return p(), window.addEventListener("scroll", p, !0), window.addEventListener("resize", p), () => {
      window.removeEventListener("scroll", p, !0), window.removeEventListener("resize", p);
    };
  }, [s]), z(() => {
    if (!s) return;
    const p = (R) => {
      const N = R.target, C = d.current, U = l.current;
      N && C && U && !C.contains(N) && !U.contains(N) && i(!1);
    }, g = setTimeout(() => {
      document.addEventListener("click", p, !0);
    }, 0);
    return () => {
      clearTimeout(g), document.removeEventListener("click", p, !0);
    };
  }, [s]);
  const f = ((O = E.supportedLanguages.find((p) => p.code === h)) == null ? void 0 : O.name) || "English", w = me((p) => {
    p.stopPropagation(), i((g) => !g);
  }, []), m = me(
    (p) => {
      y(p), i(!1), t && t(p);
    },
    [y, t]
  ), S = me((p) => {
    p.key === "Escape" ? i(!1) : (p.key === "Enter" || p.key === " ") && (p.preventDefault(), i((g) => !g));
  }, []);
  return n ? e === "text" ? /* @__PURE__ */ v(
    "div",
    {
      ref: d,
      className: "relative z-[50]",
      onMouseDown: (p) => {
        p.stopPropagation();
      },
      children: [
        /* @__PURE__ */ v(
          "button",
          {
            ref: u,
            type: "button",
            onClick: w,
            onKeyDown: S,
            className: "flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1",
            "aria-label": "Select language",
            "aria-expanded": s,
            "aria-haspopup": "listbox",
            children: [
              /* @__PURE__ */ T("span", { children: f }),
              /* @__PURE__ */ T(
                ge,
                {
                  size: 16,
                  className: `text-gray-500 transition-transform duration-200 ${s ? "rotate-180" : ""}`,
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        s && /* @__PURE__ */ T(
          "div",
          {
            ref: l,
            role: "listbox",
            className: `absolute right-0 w-48 bg-white border border-gray-300 rounded-lg shadow-xl overflow-hidden z-[9999] ${o === "top" ? "bottom-full mb-2" : "top-full mt-2"}`,
            onClick: (p) => p.stopPropagation(),
            onMouseDown: (p) => p.stopPropagation(),
            children: /* @__PURE__ */ T("div", { className: "py-1", children: E.supportedLanguages.map((p) => {
              const g = h === p.code;
              return /* @__PURE__ */ v(
                "button",
                {
                  type: "button",
                  role: "option",
                  "aria-selected": g,
                  onClick: () => m(p.code),
                  className: `w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50 ${g ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"}`,
                  children: [
                    /* @__PURE__ */ T("span", { children: p.name }),
                    g && /* @__PURE__ */ T(
                      ge,
                      {
                        size: 16,
                        className: "rotate-180 text-blue-600",
                        "aria-hidden": "true"
                      }
                    )
                  ]
                },
                p.code
              );
            }) })
          }
        )
      ]
    }
  ) : /* @__PURE__ */ v("div", { ref: d, className: "relative z-50", children: [
    /* @__PURE__ */ T(
      "button",
      {
        ref: u,
        type: "button",
        onClick: w,
        onKeyDown: S,
        className: "flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-300 shadow-sm transition-all duration-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1",
        style: {
          ...s ? {
            boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            backgroundColor: "white",
            color: "rgb(55 65 81)"
          } : {}
        },
        onMouseEnter: (p) => {
          s || (p.currentTarget.style.boxShadow = "0 4px 6px -1px rgb(0 0 0 / 0.1)", p.currentTarget.style.backgroundColor = "rgb(249 250 251)", p.currentTarget.style.color = "rgb(17 24 39)");
        },
        onMouseLeave: (p) => {
          s || (p.currentTarget.style.boxShadow = "0 1px 2px 0 rgb(0 0 0 / 0.05)", p.currentTarget.style.backgroundColor = "white", p.currentTarget.style.color = "rgb(55 65 81)");
        },
        "aria-label": "Select language",
        "aria-expanded": s,
        "aria-haspopup": "listbox",
        children: /* @__PURE__ */ T(cr, { size: 18, "aria-hidden": "true" })
      }
    ),
    s && /* @__PURE__ */ T(
      "div",
      {
        ref: l,
        role: "listbox",
        className: `absolute left-0 w-48 bg-white border border-gray-300 rounded-lg shadow-xl overflow-hidden z-[9999] ${o === "top" ? "bottom-full mb-2" : "top-full mt-2"}`,
        onClick: (p) => p.stopPropagation(),
        onMouseDown: (p) => p.stopPropagation(),
        children: /* @__PURE__ */ T("div", { className: "py-1", children: E.supportedLanguages.map((p) => {
          const g = h === p.code;
          return /* @__PURE__ */ v(
            "button",
            {
              type: "button",
              role: "option",
              "aria-selected": g,
              onClick: () => m(p.code),
              className: `w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50 ${g ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"}`,
              children: [
                /* @__PURE__ */ T("span", { children: p.name }),
                g && /* @__PURE__ */ T(
                  ge,
                  {
                    size: 16,
                    className: "rotate-180 text-blue-600",
                    "aria-hidden": "true"
                  }
                )
              ]
            },
            p.code
          );
        }) })
      }
    )
  ] }) : null;
};
export {
  Lr as LanguageSwitcher,
  kr as TextTranslator,
  Ze as TranslationContext,
  fr as TranslationProvider,
  sr as translateText,
  or as useTranslation,
  Qe as useTranslationContext
};
