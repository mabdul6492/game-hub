function TC(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var Xa =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function th(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var A1 = { exports: {} },
  Xu = {},
  R1 = { exports: {} },
  re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wa = Symbol.for("react.element"),
  AC = Symbol.for("react.portal"),
  RC = Symbol.for("react.fragment"),
  $C = Symbol.for("react.strict_mode"),
  MC = Symbol.for("react.profiler"),
  OC = Symbol.for("react.provider"),
  zC = Symbol.for("react.context"),
  LC = Symbol.for("react.forward_ref"),
  IC = Symbol.for("react.suspense"),
  DC = Symbol.for("react.memo"),
  jC = Symbol.for("react.lazy"),
  T0 = Symbol.iterator;
function FC(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (T0 && e[T0]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $1 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  M1 = Object.assign,
  O1 = {};
function Ni(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = O1),
    (this.updater = n || $1);
}
Ni.prototype.isReactComponent = {};
Ni.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ni.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function z1() {}
z1.prototype = Ni.prototype;
function nh(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = O1),
    (this.updater = n || $1);
}
var rh = (nh.prototype = new z1());
rh.constructor = nh;
M1(rh, Ni.prototype);
rh.isPureReactComponent = !0;
var A0 = Array.isArray,
  L1 = Object.prototype.hasOwnProperty,
  oh = { current: null },
  I1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function D1(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      L1.call(t, r) && !I1.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: wa,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: oh.current,
  };
}
function BC(e, t) {
  return {
    $$typeof: wa,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ih(e) {
  return typeof e == "object" && e !== null && e.$$typeof === wa;
}
function NC(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var R0 = /\/+/g;
function ud(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? NC("" + e.key)
    : t.toString(36);
}
function Tl(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case wa:
          case AC:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + ud(s, 0) : r),
      A0(o)
        ? ((n = ""),
          e != null && (n = e.replace(R0, "$&/") + "/"),
          Tl(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (ih(o) &&
            (o = BC(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(R0, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), A0(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + ud(i, a);
      s += Tl(i, t, n, l, o);
    }
  else if (((l = FC(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + ud(i, a++)), (s += Tl(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Qa(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Tl(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function VC(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var vt = { current: null },
  Al = { transition: null },
  WC = {
    ReactCurrentDispatcher: vt,
    ReactCurrentBatchConfig: Al,
    ReactCurrentOwner: oh,
  };
re.Children = {
  map: Qa,
  forEach: function (e, t, n) {
    Qa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Qa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Qa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ih(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
re.Component = Ni;
re.Fragment = RC;
re.Profiler = MC;
re.PureComponent = nh;
re.StrictMode = $C;
re.Suspense = IC;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = WC;
re.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = M1({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = oh.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      L1.call(t, l) &&
        !I1.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: wa, type: e.type, key: o, ref: i, props: r, _owner: s };
};
re.createContext = function (e) {
  return (
    (e = {
      $$typeof: zC,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: OC, _context: e }),
    (e.Consumer = e)
  );
};
re.createElement = D1;
re.createFactory = function (e) {
  var t = D1.bind(null, e);
  return (t.type = e), t;
};
re.createRef = function () {
  return { current: null };
};
re.forwardRef = function (e) {
  return { $$typeof: LC, render: e };
};
re.isValidElement = ih;
re.lazy = function (e) {
  return { $$typeof: jC, _payload: { _status: -1, _result: e }, _init: VC };
};
re.memo = function (e, t) {
  return { $$typeof: DC, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function (e) {
  var t = Al.transition;
  Al.transition = {};
  try {
    e();
  } finally {
    Al.transition = t;
  }
};
re.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
re.useCallback = function (e, t) {
  return vt.current.useCallback(e, t);
};
re.useContext = function (e) {
  return vt.current.useContext(e);
};
re.useDebugValue = function () {};
re.useDeferredValue = function (e) {
  return vt.current.useDeferredValue(e);
};
re.useEffect = function (e, t) {
  return vt.current.useEffect(e, t);
};
re.useId = function () {
  return vt.current.useId();
};
re.useImperativeHandle = function (e, t, n) {
  return vt.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function (e, t) {
  return vt.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function (e, t) {
  return vt.current.useLayoutEffect(e, t);
};
re.useMemo = function (e, t) {
  return vt.current.useMemo(e, t);
};
re.useReducer = function (e, t, n) {
  return vt.current.useReducer(e, t, n);
};
re.useRef = function (e) {
  return vt.current.useRef(e);
};
re.useState = function (e) {
  return vt.current.useState(e);
};
re.useSyncExternalStore = function (e, t, n) {
  return vt.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function () {
  return vt.current.useTransition();
};
re.version = "18.2.0";
R1.exports = re;
var x = R1.exports;
const Lt = th(x),
  $0 = TC({ __proto__: null, default: Lt }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var HC = x,
  UC = Symbol.for("react.element"),
  GC = Symbol.for("react.fragment"),
  KC = Object.prototype.hasOwnProperty,
  qC = HC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  YC = { key: !0, ref: !0, __self: !0, __source: !0 };
function j1(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) KC.call(t, r) && !YC.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: UC,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: qC.current,
  };
}
Xu.Fragment = GC;
Xu.jsx = j1;
Xu.jsxs = j1;
A1.exports = Xu;
var k = A1.exports,
  Sf = {},
  F1 = { exports: {} },
  Vt = {},
  B1 = { exports: {} },
  N1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, B) {
    var H = L.length;
    L.push(B);
    e: for (; 0 < H; ) {
      var V = (H - 1) >>> 1,
        te = L[V];
      if (0 < o(te, B)) (L[V] = B), (L[H] = te), (H = V);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var B = L[0],
      H = L.pop();
    if (H !== B) {
      L[0] = H;
      e: for (var V = 0, te = L.length, N = te >>> 1; V < N; ) {
        var G = 2 * (V + 1) - 1,
          ke = L[G],
          he = G + 1,
          He = L[he];
        if (0 > o(ke, H))
          he < te && 0 > o(He, ke)
            ? ((L[V] = He), (L[he] = H), (V = he))
            : ((L[V] = ke), (L[G] = H), (V = G));
        else if (he < te && 0 > o(He, H)) (L[V] = He), (L[he] = H), (V = he);
        else break e;
      }
    }
    return B;
  }
  function o(L, B) {
    var H = L.sortIndex - B.sortIndex;
    return H !== 0 ? H : L.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    p = !1,
    m = !1,
    y = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(L) {
    for (var B = n(u); B !== null; ) {
      if (B.callback === null) r(u);
      else if (B.startTime <= L)
        r(u), (B.sortIndex = B.expirationTime), t(l, B);
      else break;
      B = n(u);
    }
  }
  function S(L) {
    if (((y = !1), v(L), !m))
      if (n(l) !== null) (m = !0), Z(P);
      else {
        var B = n(u);
        B !== null && z(S, B.startTime - L);
      }
  }
  function P(L, B) {
    (m = !1), y && ((y = !1), g(A), (A = -1)), (p = !0);
    var H = f;
    try {
      for (
        v(B), d = n(l);
        d !== null && (!(d.expirationTime > B) || (L && !F()));

      ) {
        var V = d.callback;
        if (typeof V == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var te = V(d.expirationTime <= B);
          (B = e.unstable_now()),
            typeof te == "function" ? (d.callback = te) : d === n(l) && r(l),
            v(B);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var N = !0;
      else {
        var G = n(u);
        G !== null && z(S, G.startTime - B), (N = !1);
      }
      return N;
    } finally {
      (d = null), (f = H), (p = !1);
    }
  }
  var T = !1,
    _ = null,
    A = -1,
    O = 5,
    M = -1;
  function F() {
    return !(e.unstable_now() - M < O);
  }
  function X() {
    if (_ !== null) {
      var L = e.unstable_now();
      M = L;
      var B = !0;
      try {
        B = _(!0, L);
      } finally {
        B ? Y() : ((T = !1), (_ = null));
      }
    } else T = !1;
  }
  var Y;
  if (typeof h == "function")
    Y = function () {
      h(X);
    };
  else if (typeof MessageChannel < "u") {
    var Q = new MessageChannel(),
      J = Q.port2;
    (Q.port1.onmessage = X),
      (Y = function () {
        J.postMessage(null);
      });
  } else
    Y = function () {
      w(X, 0);
    };
  function Z(L) {
    (_ = L), T || ((T = !0), Y());
  }
  function z(L, B) {
    A = w(function () {
      L(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || p || ((m = !0), Z(P));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (L) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = f;
      }
      var H = f;
      f = B;
      try {
        return L();
      } finally {
        f = H;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, B) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var H = f;
      f = L;
      try {
        return B();
      } finally {
        f = H;
      }
    }),
    (e.unstable_scheduleCallback = function (L, B, H) {
      var V = e.unstable_now();
      switch (
        (typeof H == "object" && H !== null
          ? ((H = H.delay), (H = typeof H == "number" && 0 < H ? V + H : V))
          : (H = V),
        L)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = H + te),
        (L = {
          id: c++,
          callback: B,
          priorityLevel: L,
          startTime: H,
          expirationTime: te,
          sortIndex: -1,
        }),
        H > V
          ? ((L.sortIndex = H),
            t(u, L),
            n(l) === null &&
              L === n(u) &&
              (y ? (g(A), (A = -1)) : (y = !0), z(S, H - V)))
          : ((L.sortIndex = te), t(l, L), m || p || ((m = !0), Z(P))),
        L
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (L) {
      var B = f;
      return function () {
        var H = f;
        f = B;
        try {
          return L.apply(this, arguments);
        } finally {
          f = H;
        }
      };
    });
})(N1);
B1.exports = N1;
var XC = B1.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var V1 = x,
  Ft = XC;
function I(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var W1 = new Set(),
  Us = {};
function Ro(e, t) {
  ki(e, t), ki(e + "Capture", t);
}
function ki(e, t) {
  for (Us[e] = t, e = 0; e < t.length; e++) W1.add(t[e]);
}
var ir = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wf = Object.prototype.hasOwnProperty,
  QC =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  M0 = {},
  O0 = {};
function ZC(e) {
  return wf.call(O0, e)
    ? !0
    : wf.call(M0, e)
    ? !1
    : QC.test(e)
    ? (O0[e] = !0)
    : ((M0[e] = !0), !1);
}
function JC(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function e5(e, t, n, r) {
  if (t === null || typeof t > "u" || JC(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function yt(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var rt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    rt[e] = new yt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  rt[t] = new yt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  rt[e] = new yt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  rt[e] = new yt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    rt[e] = new yt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  rt[e] = new yt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  rt[e] = new yt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  rt[e] = new yt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  rt[e] = new yt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var sh = /[\-:]([a-z])/g;
function ah(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(sh, ah);
    rt[t] = new yt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(sh, ah);
    rt[t] = new yt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(sh, ah);
  rt[t] = new yt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  rt[e] = new yt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
rt.xlinkHref = new yt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  rt[e] = new yt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function lh(e, t, n, r) {
  var o = rt.hasOwnProperty(t) ? rt[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (e5(t, n, o, r) && (n = null),
    r || o === null
      ? ZC(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var fr = V1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Za = Symbol.for("react.element"),
  Ho = Symbol.for("react.portal"),
  Uo = Symbol.for("react.fragment"),
  uh = Symbol.for("react.strict_mode"),
  kf = Symbol.for("react.profiler"),
  H1 = Symbol.for("react.provider"),
  U1 = Symbol.for("react.context"),
  ch = Symbol.for("react.forward_ref"),
  Cf = Symbol.for("react.suspense"),
  Ef = Symbol.for("react.suspense_list"),
  dh = Symbol.for("react.memo"),
  Sr = Symbol.for("react.lazy"),
  G1 = Symbol.for("react.offscreen"),
  z0 = Symbol.iterator;
function Xi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (z0 && e[z0]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Oe = Object.assign,
  cd;
function fs(e) {
  if (cd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      cd = (t && t[1]) || "";
    }
  return (
    `
` +
    cd +
    e
  );
}
var dd = !1;
function fd(e, t) {
  if (!e || dd) return "";
  dd = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (dd = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? fs(e) : "";
}
function t5(e) {
  switch (e.tag) {
    case 5:
      return fs(e.type);
    case 16:
      return fs("Lazy");
    case 13:
      return fs("Suspense");
    case 19:
      return fs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = fd(e.type, !1)), e;
    case 11:
      return (e = fd(e.type.render, !1)), e;
    case 1:
      return (e = fd(e.type, !0)), e;
    default:
      return "";
  }
}
function _f(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Uo:
      return "Fragment";
    case Ho:
      return "Portal";
    case kf:
      return "Profiler";
    case uh:
      return "StrictMode";
    case Cf:
      return "Suspense";
    case Ef:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case U1:
        return (e.displayName || "Context") + ".Consumer";
      case H1:
        return (e._context.displayName || "Context") + ".Provider";
      case ch:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case dh:
        return (
          (t = e.displayName || null), t !== null ? t : _f(e.type) || "Memo"
        );
      case Sr:
        (t = e._payload), (e = e._init);
        try {
          return _f(e(t));
        } catch {}
    }
  return null;
}
function n5(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return _f(t);
    case 8:
      return t === uh ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Nr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function K1(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function r5(e) {
  var t = K1(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ja(e) {
  e._valueTracker || (e._valueTracker = r5(e));
}
function q1(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = K1(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function au(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Pf(e, t) {
  var n = t.checked;
  return Oe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function L0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Nr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Y1(e, t) {
  (t = t.checked), t != null && lh(e, "checked", t, !1);
}
function Tf(e, t) {
  Y1(e, t);
  var n = Nr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Af(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Af(e, t.type, Nr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function I0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Af(e, t, n) {
  (t !== "number" || au(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ps = Array.isArray;
function fi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Nr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Rf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return Oe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function D0(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(I(92));
      if (ps(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Nr(n) };
}
function X1(e, t) {
  var n = Nr(t.value),
    r = Nr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function j0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Q1(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function $f(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Q1(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var el,
  Z1 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        el = el || document.createElement("div"),
          el.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = el.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Gs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ks = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  o5 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ks).forEach(function (e) {
  o5.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ks[t] = ks[e]);
  });
});
function J1(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ks.hasOwnProperty(e) && ks[e])
    ? ("" + t).trim()
    : t + "px";
}
function eb(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = J1(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var i5 = Oe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Mf(e, t) {
  if (t) {
    if (i5[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function Of(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var zf = null;
function fh(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Lf = null,
  pi = null,
  hi = null;
function F0(e) {
  if ((e = Ea(e))) {
    if (typeof Lf != "function") throw Error(I(280));
    var t = e.stateNode;
    t && ((t = tc(t)), Lf(e.stateNode, e.type, t));
  }
}
function tb(e) {
  pi ? (hi ? hi.push(e) : (hi = [e])) : (pi = e);
}
function nb() {
  if (pi) {
    var e = pi,
      t = hi;
    if (((hi = pi = null), F0(e), t)) for (e = 0; e < t.length; e++) F0(t[e]);
  }
}
function rb(e, t) {
  return e(t);
}
function ob() {}
var pd = !1;
function ib(e, t, n) {
  if (pd) return e(t, n);
  pd = !0;
  try {
    return rb(e, t, n);
  } finally {
    (pd = !1), (pi !== null || hi !== null) && (ob(), nb());
  }
}
function Ks(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = tc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(I(231, t, typeof n));
  return n;
}
var If = !1;
if (ir)
  try {
    var Qi = {};
    Object.defineProperty(Qi, "passive", {
      get: function () {
        If = !0;
      },
    }),
      window.addEventListener("test", Qi, Qi),
      window.removeEventListener("test", Qi, Qi);
  } catch {
    If = !1;
  }
function s5(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Cs = !1,
  lu = null,
  uu = !1,
  Df = null,
  a5 = {
    onError: function (e) {
      (Cs = !0), (lu = e);
    },
  };
function l5(e, t, n, r, o, i, s, a, l) {
  (Cs = !1), (lu = null), s5.apply(a5, arguments);
}
function u5(e, t, n, r, o, i, s, a, l) {
  if ((l5.apply(this, arguments), Cs)) {
    if (Cs) {
      var u = lu;
      (Cs = !1), (lu = null);
    } else throw Error(I(198));
    uu || ((uu = !0), (Df = u));
  }
}
function $o(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function sb(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function B0(e) {
  if ($o(e) !== e) throw Error(I(188));
}
function c5(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $o(e)), t === null)) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return B0(o), e;
        if (i === r) return B0(o), t;
        i = i.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function ab(e) {
  return (e = c5(e)), e !== null ? lb(e) : null;
}
function lb(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = lb(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ub = Ft.unstable_scheduleCallback,
  N0 = Ft.unstable_cancelCallback,
  d5 = Ft.unstable_shouldYield,
  f5 = Ft.unstable_requestPaint,
  je = Ft.unstable_now,
  p5 = Ft.unstable_getCurrentPriorityLevel,
  ph = Ft.unstable_ImmediatePriority,
  cb = Ft.unstable_UserBlockingPriority,
  cu = Ft.unstable_NormalPriority,
  h5 = Ft.unstable_LowPriority,
  db = Ft.unstable_IdlePriority,
  Qu = null,
  Mn = null;
function m5(e) {
  if (Mn && typeof Mn.onCommitFiberRoot == "function")
    try {
      Mn.onCommitFiberRoot(Qu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var xn = Math.clz32 ? Math.clz32 : y5,
  g5 = Math.log,
  v5 = Math.LN2;
function y5(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((g5(e) / v5) | 0)) | 0;
}
var tl = 64,
  nl = 4194304;
function hs(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function du(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = hs(a)) : ((i &= s), i !== 0 && (r = hs(i)));
  } else (s = n & ~o), s !== 0 ? (r = hs(s)) : i !== 0 && (r = hs(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - xn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function b5(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function x5(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - xn(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = b5(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function jf(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function fb() {
  var e = tl;
  return (tl <<= 1), !(tl & 4194240) && (tl = 64), e;
}
function hd(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ka(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - xn(t)),
    (e[t] = n);
}
function S5(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - xn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function hh(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - xn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ge = 0;
function pb(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var hb,
  mh,
  mb,
  gb,
  vb,
  Ff = !1,
  rl = [],
  Ar = null,
  Rr = null,
  $r = null,
  qs = new Map(),
  Ys = new Map(),
  Cr = [],
  w5 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function V0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ar = null;
      break;
    case "dragenter":
    case "dragleave":
      Rr = null;
      break;
    case "mouseover":
    case "mouseout":
      $r = null;
      break;
    case "pointerover":
    case "pointerout":
      qs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ys.delete(t.pointerId);
  }
}
function Zi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Ea(t)), t !== null && mh(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function k5(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Ar = Zi(Ar, e, t, n, r, o)), !0;
    case "dragenter":
      return (Rr = Zi(Rr, e, t, n, r, o)), !0;
    case "mouseover":
      return ($r = Zi($r, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return qs.set(i, Zi(qs.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Ys.set(i, Zi(Ys.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function yb(e) {
  var t = fo(e.target);
  if (t !== null) {
    var n = $o(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = sb(n)), t !== null)) {
          (e.blockedOn = t),
            vb(e.priority, function () {
              mb(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Rl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Bf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (zf = r), n.target.dispatchEvent(r), (zf = null);
    } else return (t = Ea(n)), t !== null && mh(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function W0(e, t, n) {
  Rl(e) && n.delete(t);
}
function C5() {
  (Ff = !1),
    Ar !== null && Rl(Ar) && (Ar = null),
    Rr !== null && Rl(Rr) && (Rr = null),
    $r !== null && Rl($r) && ($r = null),
    qs.forEach(W0),
    Ys.forEach(W0);
}
function Ji(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ff ||
      ((Ff = !0),
      Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority, C5)));
}
function Xs(e) {
  function t(o) {
    return Ji(o, e);
  }
  if (0 < rl.length) {
    Ji(rl[0], e);
    for (var n = 1; n < rl.length; n++) {
      var r = rl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ar !== null && Ji(Ar, e),
      Rr !== null && Ji(Rr, e),
      $r !== null && Ji($r, e),
      qs.forEach(t),
      Ys.forEach(t),
      n = 0;
    n < Cr.length;
    n++
  )
    (r = Cr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Cr.length && ((n = Cr[0]), n.blockedOn === null); )
    yb(n), n.blockedOn === null && Cr.shift();
}
var mi = fr.ReactCurrentBatchConfig,
  fu = !0;
function E5(e, t, n, r) {
  var o = ge,
    i = mi.transition;
  mi.transition = null;
  try {
    (ge = 1), gh(e, t, n, r);
  } finally {
    (ge = o), (mi.transition = i);
  }
}
function _5(e, t, n, r) {
  var o = ge,
    i = mi.transition;
  mi.transition = null;
  try {
    (ge = 4), gh(e, t, n, r);
  } finally {
    (ge = o), (mi.transition = i);
  }
}
function gh(e, t, n, r) {
  if (fu) {
    var o = Bf(e, t, n, r);
    if (o === null) Cd(e, t, r, pu, n), V0(e, r);
    else if (k5(o, e, t, n, r)) r.stopPropagation();
    else if ((V0(e, r), t & 4 && -1 < w5.indexOf(e))) {
      for (; o !== null; ) {
        var i = Ea(o);
        if (
          (i !== null && hb(i),
          (i = Bf(e, t, n, r)),
          i === null && Cd(e, t, r, pu, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Cd(e, t, r, null, n);
  }
}
var pu = null;
function Bf(e, t, n, r) {
  if (((pu = null), (e = fh(r)), (e = fo(e)), e !== null))
    if (((t = $o(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = sb(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (pu = e), null;
}
function bb(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (p5()) {
        case ph:
          return 1;
        case cb:
          return 4;
        case cu:
        case h5:
          return 16;
        case db:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Pr = null,
  vh = null,
  $l = null;
function xb() {
  if ($l) return $l;
  var e,
    t = vh,
    n = t.length,
    r,
    o = "value" in Pr ? Pr.value : Pr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return ($l = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ml(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ol() {
  return !0;
}
function H0() {
  return !1;
}
function Wt(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ol
        : H0),
      (this.isPropagationStopped = H0),
      this
    );
  }
  return (
    Oe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ol));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ol));
      },
      persist: function () {},
      isPersistent: ol,
    }),
    t
  );
}
var Vi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  yh = Wt(Vi),
  Ca = Oe({}, Vi, { view: 0, detail: 0 }),
  P5 = Wt(Ca),
  md,
  gd,
  es,
  Zu = Oe({}, Ca, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: bh,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== es &&
            (es && e.type === "mousemove"
              ? ((md = e.screenX - es.screenX), (gd = e.screenY - es.screenY))
              : (gd = md = 0),
            (es = e)),
          md);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : gd;
    },
  }),
  U0 = Wt(Zu),
  T5 = Oe({}, Zu, { dataTransfer: 0 }),
  A5 = Wt(T5),
  R5 = Oe({}, Ca, { relatedTarget: 0 }),
  vd = Wt(R5),
  $5 = Oe({}, Vi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  M5 = Wt($5),
  O5 = Oe({}, Vi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  z5 = Wt(O5),
  L5 = Oe({}, Vi, { data: 0 }),
  G0 = Wt(L5),
  I5 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  D5 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  j5 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function F5(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = j5[e]) ? !!t[e] : !1;
}
function bh() {
  return F5;
}
var B5 = Oe({}, Ca, {
    key: function (e) {
      if (e.key) {
        var t = I5[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ml(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? D5[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: bh,
    charCode: function (e) {
      return e.type === "keypress" ? Ml(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ml(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  N5 = Wt(B5),
  V5 = Oe({}, Zu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  K0 = Wt(V5),
  W5 = Oe({}, Ca, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bh,
  }),
  H5 = Wt(W5),
  U5 = Oe({}, Vi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  G5 = Wt(U5),
  K5 = Oe({}, Zu, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  q5 = Wt(K5),
  Y5 = [9, 13, 27, 32],
  xh = ir && "CompositionEvent" in window,
  Es = null;
ir && "documentMode" in document && (Es = document.documentMode);
var X5 = ir && "TextEvent" in window && !Es,
  Sb = ir && (!xh || (Es && 8 < Es && 11 >= Es)),
  q0 = String.fromCharCode(32),
  Y0 = !1;
function wb(e, t) {
  switch (e) {
    case "keyup":
      return Y5.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function kb(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Go = !1;
function Q5(e, t) {
  switch (e) {
    case "compositionend":
      return kb(t);
    case "keypress":
      return t.which !== 32 ? null : ((Y0 = !0), q0);
    case "textInput":
      return (e = t.data), e === q0 && Y0 ? null : e;
    default:
      return null;
  }
}
function Z5(e, t) {
  if (Go)
    return e === "compositionend" || (!xh && wb(e, t))
      ? ((e = xb()), ($l = vh = Pr = null), (Go = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Sb && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var J5 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function X0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!J5[e.type] : t === "textarea";
}
function Cb(e, t, n, r) {
  tb(r),
    (t = hu(t, "onChange")),
    0 < t.length &&
      ((n = new yh("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _s = null,
  Qs = null;
function eE(e) {
  Lb(e, 0);
}
function Ju(e) {
  var t = Yo(e);
  if (q1(t)) return e;
}
function tE(e, t) {
  if (e === "change") return t;
}
var Eb = !1;
if (ir) {
  var yd;
  if (ir) {
    var bd = "oninput" in document;
    if (!bd) {
      var Q0 = document.createElement("div");
      Q0.setAttribute("oninput", "return;"),
        (bd = typeof Q0.oninput == "function");
    }
    yd = bd;
  } else yd = !1;
  Eb = yd && (!document.documentMode || 9 < document.documentMode);
}
function Z0() {
  _s && (_s.detachEvent("onpropertychange", _b), (Qs = _s = null));
}
function _b(e) {
  if (e.propertyName === "value" && Ju(Qs)) {
    var t = [];
    Cb(t, Qs, e, fh(e)), ib(eE, t);
  }
}
function nE(e, t, n) {
  e === "focusin"
    ? (Z0(), (_s = t), (Qs = n), _s.attachEvent("onpropertychange", _b))
    : e === "focusout" && Z0();
}
function rE(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ju(Qs);
}
function oE(e, t) {
  if (e === "click") return Ju(t);
}
function iE(e, t) {
  if (e === "input" || e === "change") return Ju(t);
}
function sE(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var wn = typeof Object.is == "function" ? Object.is : sE;
function Zs(e, t) {
  if (wn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!wf.call(t, o) || !wn(e[o], t[o])) return !1;
  }
  return !0;
}
function J0(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function eg(e, t) {
  var n = J0(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = J0(n);
  }
}
function Pb(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Pb(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Tb() {
  for (var e = window, t = au(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = au(e.document);
  }
  return t;
}
function Sh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function aE(e) {
  var t = Tb(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Pb(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Sh(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = eg(n, i));
        var s = eg(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var lE = ir && "documentMode" in document && 11 >= document.documentMode,
  Ko = null,
  Nf = null,
  Ps = null,
  Vf = !1;
function tg(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vf ||
    Ko == null ||
    Ko !== au(r) ||
    ((r = Ko),
    "selectionStart" in r && Sh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ps && Zs(Ps, r)) ||
      ((Ps = r),
      (r = hu(Nf, "onSelect")),
      0 < r.length &&
        ((t = new yh("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ko))));
}
function il(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var qo = {
    animationend: il("Animation", "AnimationEnd"),
    animationiteration: il("Animation", "AnimationIteration"),
    animationstart: il("Animation", "AnimationStart"),
    transitionend: il("Transition", "TransitionEnd"),
  },
  xd = {},
  Ab = {};
ir &&
  ((Ab = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete qo.animationend.animation,
    delete qo.animationiteration.animation,
    delete qo.animationstart.animation),
  "TransitionEvent" in window || delete qo.transitionend.transition);
function ec(e) {
  if (xd[e]) return xd[e];
  if (!qo[e]) return e;
  var t = qo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ab) return (xd[e] = t[n]);
  return e;
}
var Rb = ec("animationend"),
  $b = ec("animationiteration"),
  Mb = ec("animationstart"),
  Ob = ec("transitionend"),
  zb = new Map(),
  ng =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Gr(e, t) {
  zb.set(e, t), Ro(t, [e]);
}
for (var Sd = 0; Sd < ng.length; Sd++) {
  var wd = ng[Sd],
    uE = wd.toLowerCase(),
    cE = wd[0].toUpperCase() + wd.slice(1);
  Gr(uE, "on" + cE);
}
Gr(Rb, "onAnimationEnd");
Gr($b, "onAnimationIteration");
Gr(Mb, "onAnimationStart");
Gr("dblclick", "onDoubleClick");
Gr("focusin", "onFocus");
Gr("focusout", "onBlur");
Gr(Ob, "onTransitionEnd");
ki("onMouseEnter", ["mouseout", "mouseover"]);
ki("onMouseLeave", ["mouseout", "mouseover"]);
ki("onPointerEnter", ["pointerout", "pointerover"]);
ki("onPointerLeave", ["pointerout", "pointerover"]);
Ro(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ro(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ro("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ro(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ro(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ro(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ms =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  dE = new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));
function rg(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), u5(r, t, void 0, e), (e.currentTarget = null);
}
function Lb(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          rg(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          rg(o, a, u), (i = l);
        }
    }
  }
  if (uu) throw ((e = Df), (uu = !1), (Df = null), e);
}
function Ce(e, t) {
  var n = t[Kf];
  n === void 0 && (n = t[Kf] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ib(t, e, 2, !1), n.add(r));
}
function kd(e, t, n) {
  var r = 0;
  t && (r |= 4), Ib(n, e, r, t);
}
var sl = "_reactListening" + Math.random().toString(36).slice(2);
function Js(e) {
  if (!e[sl]) {
    (e[sl] = !0),
      W1.forEach(function (n) {
        n !== "selectionchange" && (dE.has(n) || kd(n, !1, e), kd(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[sl] || ((t[sl] = !0), kd("selectionchange", !1, t));
  }
}
function Ib(e, t, n, r) {
  switch (bb(t)) {
    case 1:
      var o = E5;
      break;
    case 4:
      o = _5;
      break;
    default:
      o = gh;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !If ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Cd(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = fo(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  ib(function () {
    var u = i,
      c = fh(n),
      d = [];
    e: {
      var f = zb.get(e);
      if (f !== void 0) {
        var p = yh,
          m = e;
        switch (e) {
          case "keypress":
            if (Ml(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = N5;
            break;
          case "focusin":
            (m = "focus"), (p = vd);
            break;
          case "focusout":
            (m = "blur"), (p = vd);
            break;
          case "beforeblur":
          case "afterblur":
            p = vd;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = U0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = A5;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = H5;
            break;
          case Rb:
          case $b:
          case Mb:
            p = M5;
            break;
          case Ob:
            p = G5;
            break;
          case "scroll":
            p = P5;
            break;
          case "wheel":
            p = q5;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = z5;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = K0;
        }
        var y = (t & 4) !== 0,
          w = !y && e === "scroll",
          g = y ? (f !== null ? f + "Capture" : null) : f;
        y = [];
        for (var h = u, v; h !== null; ) {
          v = h;
          var S = v.stateNode;
          if (
            (v.tag === 5 &&
              S !== null &&
              ((v = S),
              g !== null && ((S = Ks(h, g)), S != null && y.push(ea(h, S, v)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < y.length &&
          ((f = new p(f, m, null, n, c)), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          f &&
            n !== zf &&
            (m = n.relatedTarget || n.fromElement) &&
            (fo(m) || m[sr]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          p
            ? ((m = n.relatedTarget || n.toElement),
              (p = u),
              (m = m ? fo(m) : null),
              m !== null &&
                ((w = $o(m)), m !== w || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((p = null), (m = u)),
          p !== m)
        ) {
          if (
            ((y = U0),
            (S = "onMouseLeave"),
            (g = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = K0),
              (S = "onPointerLeave"),
              (g = "onPointerEnter"),
              (h = "pointer")),
            (w = p == null ? f : Yo(p)),
            (v = m == null ? f : Yo(m)),
            (f = new y(S, h + "leave", p, n, c)),
            (f.target = w),
            (f.relatedTarget = v),
            (S = null),
            fo(c) === u &&
              ((y = new y(g, h + "enter", m, n, c)),
              (y.target = v),
              (y.relatedTarget = w),
              (S = y)),
            (w = S),
            p && m)
          )
            t: {
              for (y = p, g = m, h = 0, v = y; v; v = Fo(v)) h++;
              for (v = 0, S = g; S; S = Fo(S)) v++;
              for (; 0 < h - v; ) (y = Fo(y)), h--;
              for (; 0 < v - h; ) (g = Fo(g)), v--;
              for (; h--; ) {
                if (y === g || (g !== null && y === g.alternate)) break t;
                (y = Fo(y)), (g = Fo(g));
              }
              y = null;
            }
          else y = null;
          p !== null && og(d, f, p, y, !1),
            m !== null && w !== null && og(d, w, m, y, !0);
        }
      }
      e: {
        if (
          ((f = u ? Yo(u) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === "select" || (p === "input" && f.type === "file"))
        )
          var P = tE;
        else if (X0(f))
          if (Eb) P = iE;
          else {
            P = rE;
            var T = nE;
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (P = oE);
        if (P && (P = P(e, u))) {
          Cb(d, P, n, c);
          break e;
        }
        T && T(e, f, u),
          e === "focusout" &&
            (T = f._wrapperState) &&
            T.controlled &&
            f.type === "number" &&
            Af(f, "number", f.value);
      }
      switch (((T = u ? Yo(u) : window), e)) {
        case "focusin":
          (X0(T) || T.contentEditable === "true") &&
            ((Ko = T), (Nf = u), (Ps = null));
          break;
        case "focusout":
          Ps = Nf = Ko = null;
          break;
        case "mousedown":
          Vf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Vf = !1), tg(d, n, c);
          break;
        case "selectionchange":
          if (lE) break;
        case "keydown":
        case "keyup":
          tg(d, n, c);
      }
      var _;
      if (xh)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        Go
          ? wb(e, n) && (A = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      A &&
        (Sb &&
          n.locale !== "ko" &&
          (Go || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && Go && (_ = xb())
            : ((Pr = c),
              (vh = "value" in Pr ? Pr.value : Pr.textContent),
              (Go = !0))),
        (T = hu(u, A)),
        0 < T.length &&
          ((A = new G0(A, e, null, n, c)),
          d.push({ event: A, listeners: T }),
          _ ? (A.data = _) : ((_ = kb(n)), _ !== null && (A.data = _)))),
        (_ = X5 ? Q5(e, n) : Z5(e, n)) &&
          ((u = hu(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new G0("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = _)));
    }
    Lb(d, t);
  });
}
function ea(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function hu(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ks(e, n)),
      i != null && r.unshift(ea(e, i, o)),
      (i = Ks(e, t)),
      i != null && r.push(ea(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Fo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function og(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = Ks(n, i)), l != null && s.unshift(ea(n, l, a)))
        : o || ((l = Ks(n, i)), l != null && s.push(ea(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var fE = /\r\n?/g,
  pE = /\u0000|\uFFFD/g;
function ig(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      fE,
      `
`
    )
    .replace(pE, "");
}
function al(e, t, n) {
  if (((t = ig(t)), ig(e) !== t && n)) throw Error(I(425));
}
function mu() {}
var Wf = null,
  Hf = null;
function Uf(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Gf = typeof setTimeout == "function" ? setTimeout : void 0,
  hE = typeof clearTimeout == "function" ? clearTimeout : void 0,
  sg = typeof Promise == "function" ? Promise : void 0,
  mE =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof sg < "u"
      ? function (e) {
          return sg.resolve(null).then(e).catch(gE);
        }
      : Gf;
function gE(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ed(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Xs(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Xs(t);
}
function Mr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ag(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Wi = Math.random().toString(36).slice(2),
  $n = "__reactFiber$" + Wi,
  ta = "__reactProps$" + Wi,
  sr = "__reactContainer$" + Wi,
  Kf = "__reactEvents$" + Wi,
  vE = "__reactListeners$" + Wi,
  yE = "__reactHandles$" + Wi;
function fo(e) {
  var t = e[$n];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[sr] || n[$n])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ag(e); e !== null; ) {
          if ((n = e[$n])) return n;
          e = ag(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ea(e) {
  return (
    (e = e[$n] || e[sr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Yo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function tc(e) {
  return e[ta] || null;
}
var qf = [],
  Xo = -1;
function Kr(e) {
  return { current: e };
}
function _e(e) {
  0 > Xo || ((e.current = qf[Xo]), (qf[Xo] = null), Xo--);
}
function xe(e, t) {
  Xo++, (qf[Xo] = e.current), (e.current = t);
}
var Vr = {},
  ct = Kr(Vr),
  kt = Kr(!1),
  ko = Vr;
function Ci(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ct(e) {
  return (e = e.childContextTypes), e != null;
}
function gu() {
  _e(kt), _e(ct);
}
function lg(e, t, n) {
  if (ct.current !== Vr) throw Error(I(168));
  xe(ct, t), xe(kt, n);
}
function Db(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(I(108, n5(e) || "Unknown", o));
  return Oe({}, n, r);
}
function vu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vr),
    (ko = ct.current),
    xe(ct, e),
    xe(kt, kt.current),
    !0
  );
}
function ug(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  n
    ? ((e = Db(e, t, ko)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      _e(kt),
      _e(ct),
      xe(ct, e))
    : _e(kt),
    xe(kt, n);
}
var Un = null,
  nc = !1,
  _d = !1;
function jb(e) {
  Un === null ? (Un = [e]) : Un.push(e);
}
function bE(e) {
  (nc = !0), jb(e);
}
function qr() {
  if (!_d && Un !== null) {
    _d = !0;
    var e = 0,
      t = ge;
    try {
      var n = Un;
      for (ge = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Un = null), (nc = !1);
    } catch (o) {
      throw (Un !== null && (Un = Un.slice(e + 1)), ub(ph, qr), o);
    } finally {
      (ge = t), (_d = !1);
    }
  }
  return null;
}
var Qo = [],
  Zo = 0,
  yu = null,
  bu = 0,
  en = [],
  tn = 0,
  Co = null,
  qn = 1,
  Yn = "";
function io(e, t) {
  (Qo[Zo++] = bu), (Qo[Zo++] = yu), (yu = e), (bu = t);
}
function Fb(e, t, n) {
  (en[tn++] = qn), (en[tn++] = Yn), (en[tn++] = Co), (Co = e);
  var r = qn;
  e = Yn;
  var o = 32 - xn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - xn(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (qn = (1 << (32 - xn(t) + o)) | (n << o) | r),
      (Yn = i + e);
  } else (qn = (1 << i) | (n << o) | r), (Yn = e);
}
function wh(e) {
  e.return !== null && (io(e, 1), Fb(e, 1, 0));
}
function kh(e) {
  for (; e === yu; )
    (yu = Qo[--Zo]), (Qo[Zo] = null), (bu = Qo[--Zo]), (Qo[Zo] = null);
  for (; e === Co; )
    (Co = en[--tn]),
      (en[tn] = null),
      (Yn = en[--tn]),
      (en[tn] = null),
      (qn = en[--tn]),
      (en[tn] = null);
}
var It = null,
  zt = null,
  Ae = !1,
  vn = null;
function Bb(e, t) {
  var n = nn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function cg(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (It = e), (zt = Mr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (It = e), (zt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Co !== null ? { id: qn, overflow: Yn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = nn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (It = e),
            (zt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Yf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xf(e) {
  if (Ae) {
    var t = zt;
    if (t) {
      var n = t;
      if (!cg(e, t)) {
        if (Yf(e)) throw Error(I(418));
        t = Mr(n.nextSibling);
        var r = It;
        t && cg(e, t)
          ? Bb(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ae = !1), (It = e));
      }
    } else {
      if (Yf(e)) throw Error(I(418));
      (e.flags = (e.flags & -4097) | 2), (Ae = !1), (It = e);
    }
  }
}
function dg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  It = e;
}
function ll(e) {
  if (e !== It) return !1;
  if (!Ae) return dg(e), (Ae = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Uf(e.type, e.memoizedProps))),
    t && (t = zt))
  ) {
    if (Yf(e)) throw (Nb(), Error(I(418)));
    for (; t; ) Bb(e, t), (t = Mr(t.nextSibling));
  }
  if ((dg(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              zt = Mr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      zt = null;
    }
  } else zt = It ? Mr(e.stateNode.nextSibling) : null;
  return !0;
}
function Nb() {
  for (var e = zt; e; ) e = Mr(e.nextSibling);
}
function Ei() {
  (zt = It = null), (Ae = !1);
}
function Ch(e) {
  vn === null ? (vn = [e]) : vn.push(e);
}
var xE = fr.ReactCurrentBatchConfig;
function mn(e, t) {
  if (e && e.defaultProps) {
    (t = Oe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var xu = Kr(null),
  Su = null,
  Jo = null,
  Eh = null;
function _h() {
  Eh = Jo = Su = null;
}
function Ph(e) {
  var t = xu.current;
  _e(xu), (e._currentValue = t);
}
function Qf(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function gi(e, t) {
  (Su = e),
    (Eh = Jo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (wt = !0), (e.firstContext = null));
}
function ln(e) {
  var t = e._currentValue;
  if (Eh !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jo === null)) {
      if (Su === null) throw Error(I(308));
      (Jo = e), (Su.dependencies = { lanes: 0, firstContext: e });
    } else Jo = Jo.next = e;
  return t;
}
var po = null;
function Th(e) {
  po === null ? (po = [e]) : po.push(e);
}
function Vb(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Th(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    ar(e, r)
  );
}
function ar(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var wr = !1;
function Ah(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Wb(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Jn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Or(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ae & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      ar(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Th(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    ar(e, n)
  );
}
function Ol(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), hh(e, n);
  }
}
function fg(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function wu(e, t, n, r) {
  var o = e.updateQueue;
  wr = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var f = a.lane,
        p = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var m = e,
            y = a;
          switch (((f = t), (p = n), y.tag)) {
            case 1:
              if (((m = y.payload), typeof m == "function")) {
                d = m.call(p, d, f);
                break e;
              }
              d = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = y.payload),
                (f = typeof m == "function" ? m.call(p, d, f) : m),
                f == null)
              )
                break e;
              d = Oe({}, d, f);
              break e;
            case 2:
              wr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        (p = {
          eventTime: p,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (l = d)) : (c = c.next = p),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (_o |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function pg(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(I(191, o));
        o.call(r);
      }
    }
}
var Hb = new V1.Component().refs;
function Zf(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Oe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var rc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $o(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = mt(),
      o = Lr(e),
      i = Jn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Or(e, i, o)),
      t !== null && (Sn(t, e, o, r), Ol(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = mt(),
      o = Lr(e),
      i = Jn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Or(e, i, o)),
      t !== null && (Sn(t, e, o, r), Ol(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = mt(),
      r = Lr(e),
      o = Jn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Or(e, o, r)),
      t !== null && (Sn(t, e, r, n), Ol(t, e, r));
  },
};
function hg(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Zs(n, r) || !Zs(o, i)
      : !0
  );
}
function Ub(e, t, n) {
  var r = !1,
    o = Vr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ln(i))
      : ((o = Ct(t) ? ko : ct.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Ci(e, o) : Vr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = rc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function mg(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && rc.enqueueReplaceState(t, t.state, null);
}
function Jf(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Hb), Ah(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = ln(i))
    : ((i = Ct(t) ? ko : ct.current), (o.context = Ci(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Zf(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && rc.enqueueReplaceState(o, o.state, null),
      wu(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ts(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            a === Hb && (a = o.refs = {}),
              s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function ul(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      I(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function gg(e) {
  var t = e._init;
  return t(e._payload);
}
function Gb(e) {
  function t(g, h) {
    if (e) {
      var v = g.deletions;
      v === null ? ((g.deletions = [h]), (g.flags |= 16)) : v.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), (h = h.sibling);
    return null;
  }
  function r(g, h) {
    for (g = new Map(); h !== null; )
      h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
    return g;
  }
  function o(g, h) {
    return (g = Ir(g, h)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, h, v) {
    return (
      (g.index = v),
      e
        ? ((v = g.alternate),
          v !== null
            ? ((v = v.index), v < h ? ((g.flags |= 2), h) : v)
            : ((g.flags |= 2), h))
        : ((g.flags |= 1048576), h)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, h, v, S) {
    return h === null || h.tag !== 6
      ? ((h = Od(v, g.mode, S)), (h.return = g), h)
      : ((h = o(h, v)), (h.return = g), h);
  }
  function l(g, h, v, S) {
    var P = v.type;
    return P === Uo
      ? c(g, h, v.props.children, S, v.key)
      : h !== null &&
        (h.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === Sr &&
            gg(P) === h.type))
      ? ((S = o(h, v.props)), (S.ref = ts(g, h, v)), (S.return = g), S)
      : ((S = Fl(v.type, v.key, v.props, null, g.mode, S)),
        (S.ref = ts(g, h, v)),
        (S.return = g),
        S);
  }
  function u(g, h, v, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== v.containerInfo ||
      h.stateNode.implementation !== v.implementation
      ? ((h = zd(v, g.mode, S)), (h.return = g), h)
      : ((h = o(h, v.children || [])), (h.return = g), h);
  }
  function c(g, h, v, S, P) {
    return h === null || h.tag !== 7
      ? ((h = yo(v, g.mode, S, P)), (h.return = g), h)
      : ((h = o(h, v)), (h.return = g), h);
  }
  function d(g, h, v) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Od("" + h, g.mode, v)), (h.return = g), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Za:
          return (
            (v = Fl(h.type, h.key, h.props, null, g.mode, v)),
            (v.ref = ts(g, null, h)),
            (v.return = g),
            v
          );
        case Ho:
          return (h = zd(h, g.mode, v)), (h.return = g), h;
        case Sr:
          var S = h._init;
          return d(g, S(h._payload), v);
      }
      if (ps(h) || Xi(h))
        return (h = yo(h, g.mode, v, null)), (h.return = g), h;
      ul(g, h);
    }
    return null;
  }
  function f(g, h, v, S) {
    var P = h !== null ? h.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return P !== null ? null : a(g, h, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Za:
          return v.key === P ? l(g, h, v, S) : null;
        case Ho:
          return v.key === P ? u(g, h, v, S) : null;
        case Sr:
          return (P = v._init), f(g, h, P(v._payload), S);
      }
      if (ps(v) || Xi(v)) return P !== null ? null : c(g, h, v, S, null);
      ul(g, v);
    }
    return null;
  }
  function p(g, h, v, S, P) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (g = g.get(v) || null), a(h, g, "" + S, P);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Za:
          return (g = g.get(S.key === null ? v : S.key) || null), l(h, g, S, P);
        case Ho:
          return (g = g.get(S.key === null ? v : S.key) || null), u(h, g, S, P);
        case Sr:
          var T = S._init;
          return p(g, h, v, T(S._payload), P);
      }
      if (ps(S) || Xi(S)) return (g = g.get(v) || null), c(h, g, S, P, null);
      ul(h, S);
    }
    return null;
  }
  function m(g, h, v, S) {
    for (
      var P = null, T = null, _ = h, A = (h = 0), O = null;
      _ !== null && A < v.length;
      A++
    ) {
      _.index > A ? ((O = _), (_ = null)) : (O = _.sibling);
      var M = f(g, _, v[A], S);
      if (M === null) {
        _ === null && (_ = O);
        break;
      }
      e && _ && M.alternate === null && t(g, _),
        (h = i(M, h, A)),
        T === null ? (P = M) : (T.sibling = M),
        (T = M),
        (_ = O);
    }
    if (A === v.length) return n(g, _), Ae && io(g, A), P;
    if (_ === null) {
      for (; A < v.length; A++)
        (_ = d(g, v[A], S)),
          _ !== null &&
            ((h = i(_, h, A)), T === null ? (P = _) : (T.sibling = _), (T = _));
      return Ae && io(g, A), P;
    }
    for (_ = r(g, _); A < v.length; A++)
      (O = p(_, g, A, v[A], S)),
        O !== null &&
          (e && O.alternate !== null && _.delete(O.key === null ? A : O.key),
          (h = i(O, h, A)),
          T === null ? (P = O) : (T.sibling = O),
          (T = O));
    return (
      e &&
        _.forEach(function (F) {
          return t(g, F);
        }),
      Ae && io(g, A),
      P
    );
  }
  function y(g, h, v, S) {
    var P = Xi(v);
    if (typeof P != "function") throw Error(I(150));
    if (((v = P.call(v)), v == null)) throw Error(I(151));
    for (
      var T = (P = null), _ = h, A = (h = 0), O = null, M = v.next();
      _ !== null && !M.done;
      A++, M = v.next()
    ) {
      _.index > A ? ((O = _), (_ = null)) : (O = _.sibling);
      var F = f(g, _, M.value, S);
      if (F === null) {
        _ === null && (_ = O);
        break;
      }
      e && _ && F.alternate === null && t(g, _),
        (h = i(F, h, A)),
        T === null ? (P = F) : (T.sibling = F),
        (T = F),
        (_ = O);
    }
    if (M.done) return n(g, _), Ae && io(g, A), P;
    if (_ === null) {
      for (; !M.done; A++, M = v.next())
        (M = d(g, M.value, S)),
          M !== null &&
            ((h = i(M, h, A)), T === null ? (P = M) : (T.sibling = M), (T = M));
      return Ae && io(g, A), P;
    }
    for (_ = r(g, _); !M.done; A++, M = v.next())
      (M = p(_, g, A, M.value, S)),
        M !== null &&
          (e && M.alternate !== null && _.delete(M.key === null ? A : M.key),
          (h = i(M, h, A)),
          T === null ? (P = M) : (T.sibling = M),
          (T = M));
    return (
      e &&
        _.forEach(function (X) {
          return t(g, X);
        }),
      Ae && io(g, A),
      P
    );
  }
  function w(g, h, v, S) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Uo &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Za:
          e: {
            for (var P = v.key, T = h; T !== null; ) {
              if (T.key === P) {
                if (((P = v.type), P === Uo)) {
                  if (T.tag === 7) {
                    n(g, T.sibling),
                      (h = o(T, v.props.children)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                } else if (
                  T.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === Sr &&
                    gg(P) === T.type)
                ) {
                  n(g, T.sibling),
                    (h = o(T, v.props)),
                    (h.ref = ts(g, T, v)),
                    (h.return = g),
                    (g = h);
                  break e;
                }
                n(g, T);
                break;
              } else t(g, T);
              T = T.sibling;
            }
            v.type === Uo
              ? ((h = yo(v.props.children, g.mode, S, v.key)),
                (h.return = g),
                (g = h))
              : ((S = Fl(v.type, v.key, v.props, null, g.mode, S)),
                (S.ref = ts(g, h, v)),
                (S.return = g),
                (g = S));
          }
          return s(g);
        case Ho:
          e: {
            for (T = v.key; h !== null; ) {
              if (h.key === T)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === v.containerInfo &&
                  h.stateNode.implementation === v.implementation
                ) {
                  n(g, h.sibling),
                    (h = o(h, v.children || [])),
                    (h.return = g),
                    (g = h);
                  break e;
                } else {
                  n(g, h);
                  break;
                }
              else t(g, h);
              h = h.sibling;
            }
            (h = zd(v, g.mode, S)), (h.return = g), (g = h);
          }
          return s(g);
        case Sr:
          return (T = v._init), w(g, h, T(v._payload), S);
      }
      if (ps(v)) return m(g, h, v, S);
      if (Xi(v)) return y(g, h, v, S);
      ul(g, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        h !== null && h.tag === 6
          ? (n(g, h.sibling), (h = o(h, v)), (h.return = g), (g = h))
          : (n(g, h), (h = Od(v, g.mode, S)), (h.return = g), (g = h)),
        s(g))
      : n(g, h);
  }
  return w;
}
var _i = Gb(!0),
  Kb = Gb(!1),
  _a = {},
  On = Kr(_a),
  na = Kr(_a),
  ra = Kr(_a);
function ho(e) {
  if (e === _a) throw Error(I(174));
  return e;
}
function Rh(e, t) {
  switch ((xe(ra, t), xe(na, e), xe(On, _a), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : $f(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = $f(t, e));
  }
  _e(On), xe(On, t);
}
function Pi() {
  _e(On), _e(na), _e(ra);
}
function qb(e) {
  ho(ra.current);
  var t = ho(On.current),
    n = $f(t, e.type);
  t !== n && (xe(na, e), xe(On, n));
}
function $h(e) {
  na.current === e && (_e(On), _e(na));
}
var Re = Kr(0);
function ku(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Pd = [];
function Mh() {
  for (var e = 0; e < Pd.length; e++)
    Pd[e]._workInProgressVersionPrimary = null;
  Pd.length = 0;
}
var zl = fr.ReactCurrentDispatcher,
  Td = fr.ReactCurrentBatchConfig,
  Eo = 0,
  Me = null,
  Ue = null,
  Ye = null,
  Cu = !1,
  Ts = !1,
  oa = 0,
  SE = 0;
function it() {
  throw Error(I(321));
}
function Oh(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!wn(e[n], t[n])) return !1;
  return !0;
}
function zh(e, t, n, r, o, i) {
  if (
    ((Eo = i),
    (Me = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zl.current = e === null || e.memoizedState === null ? EE : _E),
    (e = n(r, o)),
    Ts)
  ) {
    i = 0;
    do {
      if (((Ts = !1), (oa = 0), 25 <= i)) throw Error(I(301));
      (i += 1),
        (Ye = Ue = null),
        (t.updateQueue = null),
        (zl.current = PE),
        (e = n(r, o));
    } while (Ts);
  }
  if (
    ((zl.current = Eu),
    (t = Ue !== null && Ue.next !== null),
    (Eo = 0),
    (Ye = Ue = Me = null),
    (Cu = !1),
    t)
  )
    throw Error(I(300));
  return e;
}
function Lh() {
  var e = oa !== 0;
  return (oa = 0), e;
}
function _n() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ye === null ? (Me.memoizedState = Ye = e) : (Ye = Ye.next = e), Ye;
}
function un() {
  if (Ue === null) {
    var e = Me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ue.next;
  var t = Ye === null ? Me.memoizedState : Ye.next;
  if (t !== null) (Ye = t), (Ue = e);
  else {
    if (e === null) throw Error(I(310));
    (Ue = e),
      (e = {
        memoizedState: Ue.memoizedState,
        baseState: Ue.baseState,
        baseQueue: Ue.baseQueue,
        queue: Ue.queue,
        next: null,
      }),
      Ye === null ? (Me.memoizedState = Ye = e) : (Ye = Ye.next = e);
  }
  return Ye;
}
function ia(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ad(e) {
  var t = un(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = Ue,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Eo & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (Me.lanes |= c),
          (_o |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      wn(r, t.memoizedState) || (wt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Me.lanes |= i), (_o |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Rd(e) {
  var t = un(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    wn(i, t.memoizedState) || (wt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Yb() {}
function Xb(e, t) {
  var n = Me,
    r = un(),
    o = t(),
    i = !wn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (wt = !0)),
    (r = r.queue),
    Ih(Jb.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Ye !== null && Ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      sa(9, Zb.bind(null, n, r, o, t), void 0, null),
      Xe === null)
    )
      throw Error(I(349));
    Eo & 30 || Qb(n, t, o);
  }
  return o;
}
function Qb(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Me.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Zb(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ex(t) && tx(e);
}
function Jb(e, t, n) {
  return n(function () {
    ex(t) && tx(e);
  });
}
function ex(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !wn(e, n);
  } catch {
    return !0;
  }
}
function tx(e) {
  var t = ar(e, 1);
  t !== null && Sn(t, e, 1, -1);
}
function vg(e) {
  var t = _n();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ia,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = CE.bind(null, Me, e)),
    [t.memoizedState, e]
  );
}
function sa(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Me.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function nx() {
  return un().memoizedState;
}
function Ll(e, t, n, r) {
  var o = _n();
  (Me.flags |= e),
    (o.memoizedState = sa(1 | t, n, void 0, r === void 0 ? null : r));
}
function oc(e, t, n, r) {
  var o = un();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ue !== null) {
    var s = Ue.memoizedState;
    if (((i = s.destroy), r !== null && Oh(r, s.deps))) {
      o.memoizedState = sa(t, n, i, r);
      return;
    }
  }
  (Me.flags |= e), (o.memoizedState = sa(1 | t, n, i, r));
}
function yg(e, t) {
  return Ll(8390656, 8, e, t);
}
function Ih(e, t) {
  return oc(2048, 8, e, t);
}
function rx(e, t) {
  return oc(4, 2, e, t);
}
function ox(e, t) {
  return oc(4, 4, e, t);
}
function ix(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function sx(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), oc(4, 4, ix.bind(null, t, e), n)
  );
}
function Dh() {}
function ax(e, t) {
  var n = un();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oh(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function lx(e, t) {
  var n = un();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oh(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ux(e, t, n) {
  return Eo & 21
    ? (wn(n, t) || ((n = fb()), (Me.lanes |= n), (_o |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (wt = !0)), (e.memoizedState = n));
}
function wE(e, t) {
  var n = ge;
  (ge = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Td.transition;
  Td.transition = {};
  try {
    e(!1), t();
  } finally {
    (ge = n), (Td.transition = r);
  }
}
function cx() {
  return un().memoizedState;
}
function kE(e, t, n) {
  var r = Lr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dx(e))
  )
    fx(t, n);
  else if (((n = Vb(e, t, n, r)), n !== null)) {
    var o = mt();
    Sn(n, e, r, o), px(n, t, r);
  }
}
function CE(e, t, n) {
  var r = Lr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dx(e)) fx(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), wn(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Th(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Vb(e, t, o, r)),
      n !== null && ((o = mt()), Sn(n, e, r, o), px(n, t, r));
  }
}
function dx(e) {
  var t = e.alternate;
  return e === Me || (t !== null && t === Me);
}
function fx(e, t) {
  Ts = Cu = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function px(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), hh(e, n);
  }
}
var Eu = {
    readContext: ln,
    useCallback: it,
    useContext: it,
    useEffect: it,
    useImperativeHandle: it,
    useInsertionEffect: it,
    useLayoutEffect: it,
    useMemo: it,
    useReducer: it,
    useRef: it,
    useState: it,
    useDebugValue: it,
    useDeferredValue: it,
    useTransition: it,
    useMutableSource: it,
    useSyncExternalStore: it,
    useId: it,
    unstable_isNewReconciler: !1,
  },
  EE = {
    readContext: ln,
    useCallback: function (e, t) {
      return (_n().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ln,
    useEffect: yg,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ll(4194308, 4, ix.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ll(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ll(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = _n();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = _n();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = kE.bind(null, Me, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = _n();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: vg,
    useDebugValue: Dh,
    useDeferredValue: function (e) {
      return (_n().memoizedState = e);
    },
    useTransition: function () {
      var e = vg(!1),
        t = e[0];
      return (e = wE.bind(null, e[1])), (_n().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Me,
        o = _n();
      if (Ae) {
        if (n === void 0) throw Error(I(407));
        n = n();
      } else {
        if (((n = t()), Xe === null)) throw Error(I(349));
        Eo & 30 || Qb(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        yg(Jb.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        sa(9, Zb.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = _n(),
        t = Xe.identifierPrefix;
      if (Ae) {
        var n = Yn,
          r = qn;
        (n = (r & ~(1 << (32 - xn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = oa++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = SE++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  _E = {
    readContext: ln,
    useCallback: ax,
    useContext: ln,
    useEffect: Ih,
    useImperativeHandle: sx,
    useInsertionEffect: rx,
    useLayoutEffect: ox,
    useMemo: lx,
    useReducer: Ad,
    useRef: nx,
    useState: function () {
      return Ad(ia);
    },
    useDebugValue: Dh,
    useDeferredValue: function (e) {
      var t = un();
      return ux(t, Ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Ad(ia)[0],
        t = un().memoizedState;
      return [e, t];
    },
    useMutableSource: Yb,
    useSyncExternalStore: Xb,
    useId: cx,
    unstable_isNewReconciler: !1,
  },
  PE = {
    readContext: ln,
    useCallback: ax,
    useContext: ln,
    useEffect: Ih,
    useImperativeHandle: sx,
    useInsertionEffect: rx,
    useLayoutEffect: ox,
    useMemo: lx,
    useReducer: Rd,
    useRef: nx,
    useState: function () {
      return Rd(ia);
    },
    useDebugValue: Dh,
    useDeferredValue: function (e) {
      var t = un();
      return Ue === null ? (t.memoizedState = e) : ux(t, Ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Rd(ia)[0],
        t = un().memoizedState;
      return [e, t];
    },
    useMutableSource: Yb,
    useSyncExternalStore: Xb,
    useId: cx,
    unstable_isNewReconciler: !1,
  };
function Ti(e, t) {
  try {
    var n = "",
      r = t;
    do (n += t5(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function $d(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ep(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var TE = typeof WeakMap == "function" ? WeakMap : Map;
function hx(e, t, n) {
  (n = Jn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Pu || ((Pu = !0), (cp = r)), ep(e, t);
    }),
    n
  );
}
function mx(e, t, n) {
  (n = Jn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ep(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ep(e, t),
          typeof r != "function" &&
            (zr === null ? (zr = new Set([this])) : zr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function bg(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new TE();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = VE.bind(null, e, t, n)), t.then(e, e));
}
function xg(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Sg(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Jn(-1, 1)), (t.tag = 2), Or(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var AE = fr.ReactCurrentOwner,
  wt = !1;
function pt(e, t, n, r) {
  t.child = e === null ? Kb(t, null, n, r) : _i(t, e.child, n, r);
}
function wg(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    gi(t, o),
    (r = zh(e, t, n, r, i, o)),
    (n = Lh()),
    e !== null && !wt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        lr(e, t, o))
      : (Ae && n && wh(t), (t.flags |= 1), pt(e, t, r, o), t.child)
  );
}
function kg(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Uh(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), gx(e, t, i, r, o))
      : ((e = Fl(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Zs), n(s, r) && e.ref === t.ref)
    )
      return lr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Ir(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function gx(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Zs(i, r) && e.ref === t.ref)
      if (((wt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (wt = !0);
      else return (t.lanes = e.lanes), lr(e, t, o);
  }
  return tp(e, t, n, r, o);
}
function vx(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        xe(ti, Mt),
        (Mt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          xe(ti, Mt),
          (Mt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        xe(ti, Mt),
        (Mt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      xe(ti, Mt),
      (Mt |= r);
  return pt(e, t, o, n), t.child;
}
function yx(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function tp(e, t, n, r, o) {
  var i = Ct(n) ? ko : ct.current;
  return (
    (i = Ci(t, i)),
    gi(t, o),
    (n = zh(e, t, n, r, i, o)),
    (r = Lh()),
    e !== null && !wt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        lr(e, t, o))
      : (Ae && r && wh(t), (t.flags |= 1), pt(e, t, n, o), t.child)
  );
}
function Cg(e, t, n, r, o) {
  if (Ct(n)) {
    var i = !0;
    vu(t);
  } else i = !1;
  if ((gi(t, o), t.stateNode === null))
    Il(e, t), Ub(t, n, r), Jf(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ln(u))
      : ((u = Ct(n) ? ko : ct.current), (u = Ci(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && mg(t, s, r, u)),
      (wr = !1);
    var f = t.memoizedState;
    (s.state = f),
      wu(t, r, s, o),
      (l = t.memoizedState),
      a !== r || f !== l || kt.current || wr
        ? (typeof c == "function" && (Zf(t, n, c, r), (l = t.memoizedState)),
          (a = wr || hg(t, n, a, r, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Wb(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : mn(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = ln(l))
        : ((l = Ct(n) ? ko : ct.current), (l = Ci(t, l)));
    var p = n.getDerivedStateFromProps;
    (c =
      typeof p == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && mg(t, s, r, l)),
      (wr = !1),
      (f = t.memoizedState),
      (s.state = f),
      wu(t, r, s, o);
    var m = t.memoizedState;
    a !== d || f !== m || kt.current || wr
      ? (typeof p == "function" && (Zf(t, n, p, r), (m = t.memoizedState)),
        (u = wr || hg(t, n, u, r, f, m, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, m, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, m, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (s.props = r),
        (s.state = m),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return np(e, t, n, r, i, o);
}
function np(e, t, n, r, o, i) {
  yx(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && ug(t, n, !1), lr(e, t, i);
  (r = t.stateNode), (AE.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = _i(t, e.child, null, i)), (t.child = _i(t, null, a, i)))
      : pt(e, t, a, i),
    (t.memoizedState = r.state),
    o && ug(t, n, !0),
    t.child
  );
}
function bx(e) {
  var t = e.stateNode;
  t.pendingContext
    ? lg(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && lg(e, t.context, !1),
    Rh(e, t.containerInfo);
}
function Eg(e, t, n, r, o) {
  return Ei(), Ch(o), (t.flags |= 256), pt(e, t, n, r), t.child;
}
var rp = { dehydrated: null, treeContext: null, retryLane: 0 };
function op(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function xx(e, t, n) {
  var r = t.pendingProps,
    o = Re.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    xe(Re, o & 1),
    e === null)
  )
    return (
      Xf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = ac(s, r, 0, null)),
              (e = yo(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = op(n)),
              (t.memoizedState = rp),
              e)
            : jh(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return RE(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Ir(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Ir(a, i)) : ((i = yo(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? op(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = rp),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Ir(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function jh(e, t) {
  return (
    (t = ac({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function cl(e, t, n, r) {
  return (
    r !== null && Ch(r),
    _i(t, e.child, null, n),
    (e = jh(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function RE(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = $d(Error(I(422)))), cl(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = ac({ mode: "visible", children: r.children }, o, 0, null)),
        (i = yo(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && _i(t, e.child, null, s),
        (t.child.memoizedState = op(s)),
        (t.memoizedState = rp),
        i);
  if (!(t.mode & 1)) return cl(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(I(419))), (r = $d(i, r, void 0)), cl(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), wt || a)) {
    if (((r = Xe), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), ar(e, o), Sn(r, e, o, -1));
    }
    return Hh(), (r = $d(Error(I(421)))), cl(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = WE.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (zt = Mr(o.nextSibling)),
      (It = t),
      (Ae = !0),
      (vn = null),
      e !== null &&
        ((en[tn++] = qn),
        (en[tn++] = Yn),
        (en[tn++] = Co),
        (qn = e.id),
        (Yn = e.overflow),
        (Co = t)),
      (t = jh(t, r.children)),
      (t.flags |= 4096),
      t);
}
function _g(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Qf(e.return, t, n);
}
function Md(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Sx(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((pt(e, t, r.children, n), (r = Re.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && _g(e, n, t);
        else if (e.tag === 19) _g(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((xe(Re, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ku(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Md(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ku(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Md(t, !0, n, null, i);
        break;
      case "together":
        Md(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Il(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function lr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (_o |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ir(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ir(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function $E(e, t, n) {
  switch (t.tag) {
    case 3:
      bx(t), Ei();
      break;
    case 5:
      qb(t);
      break;
    case 1:
      Ct(t.type) && vu(t);
      break;
    case 4:
      Rh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      xe(xu, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (xe(Re, Re.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? xx(e, t, n)
          : (xe(Re, Re.current & 1),
            (e = lr(e, t, n)),
            e !== null ? e.sibling : null);
      xe(Re, Re.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Sx(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        xe(Re, Re.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), vx(e, t, n);
  }
  return lr(e, t, n);
}
var wx, ip, kx, Cx;
wx = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ip = function () {};
kx = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), ho(On.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Pf(e, o)), (r = Pf(e, r)), (i = []);
        break;
      case "select":
        (o = Oe({}, o, { value: void 0 })),
          (r = Oe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Rf(e, o)), (r = Rf(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = mu);
    }
    Mf(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Us.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Us.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && Ce("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Cx = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ns(e, t) {
  if (!Ae)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function st(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ME(e, t, n) {
  var r = t.pendingProps;
  switch ((kh(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return st(t), null;
    case 1:
      return Ct(t.type) && gu(), st(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Pi(),
        _e(kt),
        _e(ct),
        Mh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ll(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), vn !== null && (pp(vn), (vn = null)))),
        ip(e, t),
        st(t),
        null
      );
    case 5:
      $h(t);
      var o = ho(ra.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        kx(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return st(t), null;
        }
        if (((e = ho(On.current)), ll(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[$n] = t), (r[ta] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ce("cancel", r), Ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ce("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ms.length; o++) Ce(ms[o], r);
              break;
            case "source":
              Ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ce("error", r), Ce("load", r);
              break;
            case "details":
              Ce("toggle", r);
              break;
            case "input":
              L0(r, i), Ce("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Ce("invalid", r);
              break;
            case "textarea":
              D0(r, i), Ce("invalid", r);
          }
          Mf(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      al(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      al(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Us.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  Ce("scroll", r);
            }
          switch (n) {
            case "input":
              Ja(r), I0(r, i, !0);
              break;
            case "textarea":
              Ja(r), j0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = mu);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Q1(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[$n] = t),
            (e[ta] = r),
            wx(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Of(n, r)), n)) {
              case "dialog":
                Ce("cancel", e), Ce("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ce("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ms.length; o++) Ce(ms[o], e);
                o = r;
                break;
              case "source":
                Ce("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Ce("error", e), Ce("load", e), (o = r);
                break;
              case "details":
                Ce("toggle", e), (o = r);
                break;
              case "input":
                L0(e, r), (o = Pf(e, r)), Ce("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Oe({}, r, { value: void 0 })),
                  Ce("invalid", e);
                break;
              case "textarea":
                D0(e, r), (o = Rf(e, r)), Ce("invalid", e);
                break;
              default:
                o = r;
            }
            Mf(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? eb(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Z1(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Gs(e, l)
                    : typeof l == "number" && Gs(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Us.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && Ce("scroll", e)
                      : l != null && lh(e, i, l, s));
              }
            switch (n) {
              case "input":
                Ja(e), I0(e, r, !1);
                break;
              case "textarea":
                Ja(e), j0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Nr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? fi(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      fi(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = mu);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return st(t), null;
    case 6:
      if (e && t.stateNode != null) Cx(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (((n = ho(ra.current)), ho(On.current), ll(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$n] = t),
            (i = r.nodeValue !== n) && ((e = It), e !== null))
          )
            switch (e.tag) {
              case 3:
                al(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  al(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[$n] = t),
            (t.stateNode = r);
      }
      return st(t), null;
    case 13:
      if (
        (_e(Re),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ae && zt !== null && t.mode & 1 && !(t.flags & 128))
          Nb(), Ei(), (t.flags |= 98560), (i = !1);
        else if (((i = ll(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(I(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(I(317));
            i[$n] = t;
          } else
            Ei(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          st(t), (i = !1);
        } else vn !== null && (pp(vn), (vn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Re.current & 1 ? Ge === 0 && (Ge = 3) : Hh())),
          t.updateQueue !== null && (t.flags |= 4),
          st(t),
          null);
    case 4:
      return (
        Pi(), ip(e, t), e === null && Js(t.stateNode.containerInfo), st(t), null
      );
    case 10:
      return Ph(t.type._context), st(t), null;
    case 17:
      return Ct(t.type) && gu(), st(t), null;
    case 19:
      if ((_e(Re), (i = t.memoizedState), i === null)) return st(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) ns(i, !1);
        else {
          if (Ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ku(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ns(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return xe(Re, (Re.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            je() > Ai &&
            ((t.flags |= 128), (r = !0), ns(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ku(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ns(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !Ae)
            )
              return st(t), null;
          } else
            2 * je() - i.renderingStartTime > Ai &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ns(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = je()),
          (t.sibling = null),
          (n = Re.current),
          xe(Re, r ? (n & 1) | 2 : n & 1),
          t)
        : (st(t), null);
    case 22:
    case 23:
      return (
        Wh(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Mt & 1073741824 && (st(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : st(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function OE(e, t) {
  switch ((kh(t), t.tag)) {
    case 1:
      return (
        Ct(t.type) && gu(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Pi(),
        _e(kt),
        _e(ct),
        Mh(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return $h(t), null;
    case 13:
      if (
        (_e(Re), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(I(340));
        Ei();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return _e(Re), null;
    case 4:
      return Pi(), null;
    case 10:
      return Ph(t.type._context), null;
    case 22:
    case 23:
      return Wh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var dl = !1,
  ut = !1,
  zE = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function ei(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Le(e, t, r);
      }
    else n.current = null;
}
function sp(e, t, n) {
  try {
    n();
  } catch (r) {
    Le(e, t, r);
  }
}
var Pg = !1;
function LE(e, t) {
  if (((Wf = fu), (e = Tb()), Sh(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var p;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (f = d), (d = p);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (a = s),
                f === i && ++c === r && (l = s),
                (p = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Hf = { focusedElem: e, selectionRange: n }, fu = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var y = m.memoizedProps,
                    w = m.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : mn(t.type, y),
                      w
                    );
                  g.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (S) {
          Le(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (m = Pg), (Pg = !1), m;
}
function As(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && sp(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ic(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ap(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ex(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ex(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$n], delete t[ta], delete t[Kf], delete t[vE], delete t[yE])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function _x(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Tg(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || _x(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function lp(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = mu));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (lp(e, t, n), e = e.sibling; e !== null; ) lp(e, t, n), (e = e.sibling);
}
function up(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (up(e, t, n), e = e.sibling; e !== null; ) up(e, t, n), (e = e.sibling);
}
var et = null,
  gn = !1;
function mr(e, t, n) {
  for (n = n.child; n !== null; ) Px(e, t, n), (n = n.sibling);
}
function Px(e, t, n) {
  if (Mn && typeof Mn.onCommitFiberUnmount == "function")
    try {
      Mn.onCommitFiberUnmount(Qu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ut || ei(n, t);
    case 6:
      var r = et,
        o = gn;
      (et = null),
        mr(e, t, n),
        (et = r),
        (gn = o),
        et !== null &&
          (gn
            ? ((e = et),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : et.removeChild(n.stateNode));
      break;
    case 18:
      et !== null &&
        (gn
          ? ((e = et),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ed(e.parentNode, n)
              : e.nodeType === 1 && Ed(e, n),
            Xs(e))
          : Ed(et, n.stateNode));
      break;
    case 4:
      (r = et),
        (o = gn),
        (et = n.stateNode.containerInfo),
        (gn = !0),
        mr(e, t, n),
        (et = r),
        (gn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ut &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && sp(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      mr(e, t, n);
      break;
    case 1:
      if (
        !ut &&
        (ei(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Le(n, t, a);
        }
      mr(e, t, n);
      break;
    case 21:
      mr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ut = (r = ut) || n.memoizedState !== null), mr(e, t, n), (ut = r))
        : mr(e, t, n);
      break;
    default:
      mr(e, t, n);
  }
}
function Ag(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new zE()),
      t.forEach(function (r) {
        var o = HE.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function pn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (et = a.stateNode), (gn = !1);
              break e;
            case 3:
              (et = a.stateNode.containerInfo), (gn = !0);
              break e;
            case 4:
              (et = a.stateNode.containerInfo), (gn = !0);
              break e;
          }
          a = a.return;
        }
        if (et === null) throw Error(I(160));
        Px(i, s, o), (et = null), (gn = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Le(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Tx(t, e), (t = t.sibling);
}
function Tx(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((pn(t, e), Cn(e), r & 4)) {
        try {
          As(3, e, e.return), ic(3, e);
        } catch (y) {
          Le(e, e.return, y);
        }
        try {
          As(5, e, e.return);
        } catch (y) {
          Le(e, e.return, y);
        }
      }
      break;
    case 1:
      pn(t, e), Cn(e), r & 512 && n !== null && ei(n, n.return);
      break;
    case 5:
      if (
        (pn(t, e),
        Cn(e),
        r & 512 && n !== null && ei(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Gs(o, "");
        } catch (y) {
          Le(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Y1(o, i),
              Of(a, s);
            var u = Of(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? eb(o, d)
                : c === "dangerouslySetInnerHTML"
                ? Z1(o, d)
                : c === "children"
                ? Gs(o, d)
                : lh(o, c, d, u);
            }
            switch (a) {
              case "input":
                Tf(o, i);
                break;
              case "textarea":
                X1(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? fi(o, !!i.multiple, p, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? fi(o, !!i.multiple, i.defaultValue, !0)
                      : fi(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ta] = i;
          } catch (y) {
            Le(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((pn(t, e), Cn(e), r & 4)) {
        if (e.stateNode === null) throw Error(I(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (y) {
          Le(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (pn(t, e), Cn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xs(t.containerInfo);
        } catch (y) {
          Le(e, e.return, y);
        }
      break;
    case 4:
      pn(t, e), Cn(e);
      break;
    case 13:
      pn(t, e),
        Cn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Nh = je())),
        r & 4 && Ag(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ut = (u = ut) || c), pn(t, e), (ut = u)) : pn(t, e),
        Cn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (j = e, c = e.child; c !== null; ) {
            for (d = j = c; j !== null; ) {
              switch (((f = j), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  As(4, f, f.return);
                  break;
                case 1:
                  ei(f, f.return);
                  var m = f.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (y) {
                      Le(r, n, y);
                    }
                  }
                  break;
                case 5:
                  ei(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    $g(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = f), (j = p)) : $g(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = J1("display", s)));
              } catch (y) {
                Le(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (y) {
                Le(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      pn(t, e), Cn(e), r & 4 && Ag(e);
      break;
    case 21:
      break;
    default:
      pn(t, e), Cn(e);
  }
}
function Cn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_x(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Gs(o, ""), (r.flags &= -33));
          var i = Tg(e);
          up(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Tg(e);
          lp(e, a, s);
          break;
        default:
          throw Error(I(161));
      }
    } catch (l) {
      Le(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function IE(e, t, n) {
  (j = e), Ax(e);
}
function Ax(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var o = j,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || dl;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || ut;
        a = dl;
        var u = ut;
        if (((dl = s), (ut = l) && !u))
          for (j = o; j !== null; )
            (s = j),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Mg(o)
                : l !== null
                ? ((l.return = s), (j = l))
                : Mg(o);
        for (; i !== null; ) (j = i), Ax(i), (i = i.sibling);
        (j = o), (dl = a), (ut = u);
      }
      Rg(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (j = i)) : Rg(e);
  }
}
function Rg(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ut || ic(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ut)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : mn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && pg(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                pg(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Xs(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(I(163));
          }
        ut || (t.flags & 512 && ap(t));
      } catch (f) {
        Le(t, t.return, f);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function $g(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Mg(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ic(4, t);
          } catch (l) {
            Le(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Le(t, o, l);
            }
          }
          var i = t.return;
          try {
            ap(t);
          } catch (l) {
            Le(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            ap(t);
          } catch (l) {
            Le(t, s, l);
          }
      }
    } catch (l) {
      Le(t, t.return, l);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (j = a);
      break;
    }
    j = t.return;
  }
}
var DE = Math.ceil,
  _u = fr.ReactCurrentDispatcher,
  Fh = fr.ReactCurrentOwner,
  on = fr.ReactCurrentBatchConfig,
  ae = 0,
  Xe = null,
  Ve = null,
  nt = 0,
  Mt = 0,
  ti = Kr(0),
  Ge = 0,
  aa = null,
  _o = 0,
  sc = 0,
  Bh = 0,
  Rs = null,
  xt = null,
  Nh = 0,
  Ai = 1 / 0,
  Hn = null,
  Pu = !1,
  cp = null,
  zr = null,
  fl = !1,
  Tr = null,
  Tu = 0,
  $s = 0,
  dp = null,
  Dl = -1,
  jl = 0;
function mt() {
  return ae & 6 ? je() : Dl !== -1 ? Dl : (Dl = je());
}
function Lr(e) {
  return e.mode & 1
    ? ae & 2 && nt !== 0
      ? nt & -nt
      : xE.transition !== null
      ? (jl === 0 && (jl = fb()), jl)
      : ((e = ge),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : bb(e.type))),
        e)
    : 1;
}
function Sn(e, t, n, r) {
  if (50 < $s) throw (($s = 0), (dp = null), Error(I(185)));
  ka(e, n, r),
    (!(ae & 2) || e !== Xe) &&
      (e === Xe && (!(ae & 2) && (sc |= n), Ge === 4 && Er(e, nt)),
      Et(e, r),
      n === 1 && ae === 0 && !(t.mode & 1) && ((Ai = je() + 500), nc && qr()));
}
function Et(e, t) {
  var n = e.callbackNode;
  x5(e, t);
  var r = du(e, e === Xe ? nt : 0);
  if (r === 0)
    n !== null && N0(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && N0(n), t === 1))
      e.tag === 0 ? bE(Og.bind(null, e)) : jb(Og.bind(null, e)),
        mE(function () {
          !(ae & 6) && qr();
        }),
        (n = null);
    else {
      switch (pb(r)) {
        case 1:
          n = ph;
          break;
        case 4:
          n = cb;
          break;
        case 16:
          n = cu;
          break;
        case 536870912:
          n = db;
          break;
        default:
          n = cu;
      }
      n = Dx(n, Rx.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Rx(e, t) {
  if (((Dl = -1), (jl = 0), ae & 6)) throw Error(I(327));
  var n = e.callbackNode;
  if (vi() && e.callbackNode !== n) return null;
  var r = du(e, e === Xe ? nt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Au(e, r);
  else {
    t = r;
    var o = ae;
    ae |= 2;
    var i = Mx();
    (Xe !== e || nt !== t) && ((Hn = null), (Ai = je() + 500), vo(e, t));
    do
      try {
        BE();
        break;
      } catch (a) {
        $x(e, a);
      }
    while (1);
    _h(),
      (_u.current = i),
      (ae = o),
      Ve !== null ? (t = 0) : ((Xe = null), (nt = 0), (t = Ge));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = jf(e)), o !== 0 && ((r = o), (t = fp(e, o)))), t === 1)
    )
      throw ((n = aa), vo(e, 0), Er(e, r), Et(e, je()), n);
    if (t === 6) Er(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !jE(o) &&
          ((t = Au(e, r)),
          t === 2 && ((i = jf(e)), i !== 0 && ((r = i), (t = fp(e, i)))),
          t === 1))
      )
        throw ((n = aa), vo(e, 0), Er(e, r), Et(e, je()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          so(e, xt, Hn);
          break;
        case 3:
          if (
            (Er(e, r), (r & 130023424) === r && ((t = Nh + 500 - je()), 10 < t))
          ) {
            if (du(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              mt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Gf(so.bind(null, e, xt, Hn), t);
            break;
          }
          so(e, xt, Hn);
          break;
        case 4:
          if ((Er(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - xn(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = je() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * DE(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Gf(so.bind(null, e, xt, Hn), r);
            break;
          }
          so(e, xt, Hn);
          break;
        case 5:
          so(e, xt, Hn);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return Et(e, je()), e.callbackNode === n ? Rx.bind(null, e) : null;
}
function fp(e, t) {
  var n = Rs;
  return (
    e.current.memoizedState.isDehydrated && (vo(e, t).flags |= 256),
    (e = Au(e, t)),
    e !== 2 && ((t = xt), (xt = n), t !== null && pp(t)),
    e
  );
}
function pp(e) {
  xt === null ? (xt = e) : xt.push.apply(xt, e);
}
function jE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!wn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Er(e, t) {
  for (
    t &= ~Bh,
      t &= ~sc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - xn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Og(e) {
  if (ae & 6) throw Error(I(327));
  vi();
  var t = du(e, 0);
  if (!(t & 1)) return Et(e, je()), null;
  var n = Au(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = jf(e);
    r !== 0 && ((t = r), (n = fp(e, r)));
  }
  if (n === 1) throw ((n = aa), vo(e, 0), Er(e, t), Et(e, je()), n);
  if (n === 6) throw Error(I(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    so(e, xt, Hn),
    Et(e, je()),
    null
  );
}
function Vh(e, t) {
  var n = ae;
  ae |= 1;
  try {
    return e(t);
  } finally {
    (ae = n), ae === 0 && ((Ai = je() + 500), nc && qr());
  }
}
function Po(e) {
  Tr !== null && Tr.tag === 0 && !(ae & 6) && vi();
  var t = ae;
  ae |= 1;
  var n = on.transition,
    r = ge;
  try {
    if (((on.transition = null), (ge = 1), e)) return e();
  } finally {
    (ge = r), (on.transition = n), (ae = t), !(ae & 6) && qr();
  }
}
function Wh() {
  (Mt = ti.current), _e(ti);
}
function vo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), hE(n)), Ve !== null))
    for (n = Ve.return; n !== null; ) {
      var r = n;
      switch ((kh(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && gu();
          break;
        case 3:
          Pi(), _e(kt), _e(ct), Mh();
          break;
        case 5:
          $h(r);
          break;
        case 4:
          Pi();
          break;
        case 13:
          _e(Re);
          break;
        case 19:
          _e(Re);
          break;
        case 10:
          Ph(r.type._context);
          break;
        case 22:
        case 23:
          Wh();
      }
      n = n.return;
    }
  if (
    ((Xe = e),
    (Ve = e = Ir(e.current, null)),
    (nt = Mt = t),
    (Ge = 0),
    (aa = null),
    (Bh = sc = _o = 0),
    (xt = Rs = null),
    po !== null)
  ) {
    for (t = 0; t < po.length; t++)
      if (((n = po[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    po = null;
  }
  return e;
}
function $x(e, t) {
  do {
    var n = Ve;
    try {
      if ((_h(), (zl.current = Eu), Cu)) {
        for (var r = Me.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Cu = !1;
      }
      if (
        ((Eo = 0),
        (Ye = Ue = Me = null),
        (Ts = !1),
        (oa = 0),
        (Fh.current = null),
        n === null || n.return === null)
      ) {
        (Ge = 1), (aa = t), (Ve = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = nt),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = xg(s);
          if (p !== null) {
            (p.flags &= -257),
              Sg(p, s, a, i, t),
              p.mode & 1 && bg(i, u, t),
              (t = p),
              (l = u);
            var m = t.updateQueue;
            if (m === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else m.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              bg(i, u, t), Hh();
              break e;
            }
            l = Error(I(426));
          }
        } else if (Ae && a.mode & 1) {
          var w = xg(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Sg(w, s, a, i, t),
              Ch(Ti(l, a));
            break e;
          }
        }
        (i = l = Ti(l, a)),
          Ge !== 4 && (Ge = 2),
          Rs === null ? (Rs = [i]) : Rs.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = hx(i, l, t);
              fg(i, g);
              break e;
            case 1:
              a = l;
              var h = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (zr === null || !zr.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = mx(i, a, t);
                fg(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      zx(n);
    } catch (P) {
      (t = P), Ve === n && n !== null && (Ve = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Mx() {
  var e = _u.current;
  return (_u.current = Eu), e === null ? Eu : e;
}
function Hh() {
  (Ge === 0 || Ge === 3 || Ge === 2) && (Ge = 4),
    Xe === null || (!(_o & 268435455) && !(sc & 268435455)) || Er(Xe, nt);
}
function Au(e, t) {
  var n = ae;
  ae |= 2;
  var r = Mx();
  (Xe !== e || nt !== t) && ((Hn = null), vo(e, t));
  do
    try {
      FE();
      break;
    } catch (o) {
      $x(e, o);
    }
  while (1);
  if ((_h(), (ae = n), (_u.current = r), Ve !== null)) throw Error(I(261));
  return (Xe = null), (nt = 0), Ge;
}
function FE() {
  for (; Ve !== null; ) Ox(Ve);
}
function BE() {
  for (; Ve !== null && !d5(); ) Ox(Ve);
}
function Ox(e) {
  var t = Ix(e.alternate, e, Mt);
  (e.memoizedProps = e.pendingProps),
    t === null ? zx(e) : (Ve = t),
    (Fh.current = null);
}
function zx(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = OE(n, t)), n !== null)) {
        (n.flags &= 32767), (Ve = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ge = 6), (Ve = null);
        return;
      }
    } else if (((n = ME(n, t, Mt)), n !== null)) {
      Ve = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ve = t;
      return;
    }
    Ve = t = e;
  } while (t !== null);
  Ge === 0 && (Ge = 5);
}
function so(e, t, n) {
  var r = ge,
    o = on.transition;
  try {
    (on.transition = null), (ge = 1), NE(e, t, n, r);
  } finally {
    (on.transition = o), (ge = r);
  }
  return null;
}
function NE(e, t, n, r) {
  do vi();
  while (Tr !== null);
  if (ae & 6) throw Error(I(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(I(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (S5(e, i),
    e === Xe && ((Ve = Xe = null), (nt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      fl ||
      ((fl = !0),
      Dx(cu, function () {
        return vi(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = on.transition), (on.transition = null);
    var s = ge;
    ge = 1;
    var a = ae;
    (ae |= 4),
      (Fh.current = null),
      LE(e, n),
      Tx(n, e),
      aE(Hf),
      (fu = !!Wf),
      (Hf = Wf = null),
      (e.current = n),
      IE(n),
      f5(),
      (ae = a),
      (ge = s),
      (on.transition = i);
  } else e.current = n;
  if (
    (fl && ((fl = !1), (Tr = e), (Tu = o)),
    (i = e.pendingLanes),
    i === 0 && (zr = null),
    m5(n.stateNode),
    Et(e, je()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Pu) throw ((Pu = !1), (e = cp), (cp = null), e);
  return (
    Tu & 1 && e.tag !== 0 && vi(),
    (i = e.pendingLanes),
    i & 1 ? (e === dp ? $s++ : (($s = 0), (dp = e))) : ($s = 0),
    qr(),
    null
  );
}
function vi() {
  if (Tr !== null) {
    var e = pb(Tu),
      t = on.transition,
      n = ge;
    try {
      if (((on.transition = null), (ge = 16 > e ? 16 : e), Tr === null))
        var r = !1;
      else {
        if (((e = Tr), (Tr = null), (Tu = 0), ae & 6)) throw Error(I(331));
        var o = ae;
        for (ae |= 4, j = e.current; j !== null; ) {
          var i = j,
            s = i.child;
          if (j.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (j = u; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      As(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (j = d);
                  else
                    for (; j !== null; ) {
                      c = j;
                      var f = c.sibling,
                        p = c.return;
                      if ((Ex(c), c === u)) {
                        j = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = p), (j = f);
                        break;
                      }
                      j = p;
                    }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var y = m.child;
                if (y !== null) {
                  m.child = null;
                  do {
                    var w = y.sibling;
                    (y.sibling = null), (y = w);
                  } while (y !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (j = s);
          else
            e: for (; j !== null; ) {
              if (((i = j), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    As(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (j = g);
                break e;
              }
              j = i.return;
            }
        }
        var h = e.current;
        for (j = h; j !== null; ) {
          s = j;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (j = v);
          else
            e: for (s = h; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ic(9, a);
                  }
                } catch (P) {
                  Le(a, a.return, P);
                }
              if (a === s) {
                j = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (j = S);
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((ae = o), qr(), Mn && typeof Mn.onPostCommitFiberRoot == "function")
        )
          try {
            Mn.onPostCommitFiberRoot(Qu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ge = n), (on.transition = t);
    }
  }
  return !1;
}
function zg(e, t, n) {
  (t = Ti(n, t)),
    (t = hx(e, t, 1)),
    (e = Or(e, t, 1)),
    (t = mt()),
    e !== null && (ka(e, 1, t), Et(e, t));
}
function Le(e, t, n) {
  if (e.tag === 3) zg(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        zg(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (zr === null || !zr.has(r)))
        ) {
          (e = Ti(n, e)),
            (e = mx(t, e, 1)),
            (t = Or(t, e, 1)),
            (e = mt()),
            t !== null && (ka(t, 1, e), Et(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function VE(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = mt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Xe === e &&
      (nt & n) === n &&
      (Ge === 4 || (Ge === 3 && (nt & 130023424) === nt && 500 > je() - Nh)
        ? vo(e, 0)
        : (Bh |= n)),
    Et(e, t);
}
function Lx(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = nl), (nl <<= 1), !(nl & 130023424) && (nl = 4194304))
      : (t = 1));
  var n = mt();
  (e = ar(e, t)), e !== null && (ka(e, t, n), Et(e, n));
}
function WE(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Lx(e, n);
}
function HE(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  r !== null && r.delete(t), Lx(e, n);
}
var Ix;
Ix = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || kt.current) wt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (wt = !1), $E(e, t, n);
      wt = !!(e.flags & 131072);
    }
  else (wt = !1), Ae && t.flags & 1048576 && Fb(t, bu, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Il(e, t), (e = t.pendingProps);
      var o = Ci(t, ct.current);
      gi(t, n), (o = zh(null, t, r, e, o, n));
      var i = Lh();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ct(r) ? ((i = !0), vu(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ah(t),
            (o.updater = rc),
            (t.stateNode = o),
            (o._reactInternals = t),
            Jf(t, r, e, n),
            (t = np(null, t, r, !0, i, n)))
          : ((t.tag = 0), Ae && i && wh(t), pt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Il(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = GE(r)),
          (e = mn(r, e)),
          o)
        ) {
          case 0:
            t = tp(null, t, r, e, n);
            break e;
          case 1:
            t = Cg(null, t, r, e, n);
            break e;
          case 11:
            t = wg(null, t, r, e, n);
            break e;
          case 14:
            t = kg(null, t, r, mn(r.type, e), n);
            break e;
        }
        throw Error(I(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mn(r, o)),
        tp(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mn(r, o)),
        Cg(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((bx(t), e === null)) throw Error(I(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Wb(e, t),
          wu(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Ti(Error(I(423)), t)), (t = Eg(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Ti(Error(I(424)), t)), (t = Eg(e, t, r, n, o));
            break e;
          } else
            for (
              zt = Mr(t.stateNode.containerInfo.firstChild),
                It = t,
                Ae = !0,
                vn = null,
                n = Kb(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ei(), r === o)) {
            t = lr(e, t, n);
            break e;
          }
          pt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        qb(t),
        e === null && Xf(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Uf(r, o) ? (s = null) : i !== null && Uf(r, i) && (t.flags |= 32),
        yx(e, t),
        pt(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Xf(t), null;
    case 13:
      return xx(e, t, n);
    case 4:
      return (
        Rh(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = _i(t, null, r, n)) : pt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mn(r, o)),
        wg(e, t, r, o, n)
      );
    case 7:
      return pt(e, t, t.pendingProps, n), t.child;
    case 8:
      return pt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          xe(xu, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (wn(i.value, s)) {
            if (i.children === o.children && !kt.current) {
              t = lr(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = Jn(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      Qf(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(I(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Qf(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        pt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        gi(t, n),
        (o = ln(o)),
        (r = r(o)),
        (t.flags |= 1),
        pt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = mn(r, t.pendingProps)),
        (o = mn(r.type, o)),
        kg(e, t, r, o, n)
      );
    case 15:
      return gx(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : mn(r, o)),
        Il(e, t),
        (t.tag = 1),
        Ct(r) ? ((e = !0), vu(t)) : (e = !1),
        gi(t, n),
        Ub(t, r, o),
        Jf(t, r, o, n),
        np(null, t, r, !0, e, n)
      );
    case 19:
      return Sx(e, t, n);
    case 22:
      return vx(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function Dx(e, t) {
  return ub(e, t);
}
function UE(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function nn(e, t, n, r) {
  return new UE(e, t, n, r);
}
function Uh(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function GE(e) {
  if (typeof e == "function") return Uh(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ch)) return 11;
    if (e === dh) return 14;
  }
  return 2;
}
function Ir(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = nn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Fl(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Uh(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Uo:
        return yo(n.children, o, i, t);
      case uh:
        (s = 8), (o |= 8);
        break;
      case kf:
        return (
          (e = nn(12, n, t, o | 2)), (e.elementType = kf), (e.lanes = i), e
        );
      case Cf:
        return (e = nn(13, n, t, o)), (e.elementType = Cf), (e.lanes = i), e;
      case Ef:
        return (e = nn(19, n, t, o)), (e.elementType = Ef), (e.lanes = i), e;
      case G1:
        return ac(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case H1:
              s = 10;
              break e;
            case U1:
              s = 9;
              break e;
            case ch:
              s = 11;
              break e;
            case dh:
              s = 14;
              break e;
            case Sr:
              (s = 16), (r = null);
              break e;
          }
        throw Error(I(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = nn(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function yo(e, t, n, r) {
  return (e = nn(7, e, r, t)), (e.lanes = n), e;
}
function ac(e, t, n, r) {
  return (
    (e = nn(22, e, r, t)),
    (e.elementType = G1),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Od(e, t, n) {
  return (e = nn(6, e, null, t)), (e.lanes = n), e;
}
function zd(e, t, n) {
  return (
    (t = nn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function KE(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = hd(0)),
    (this.expirationTimes = hd(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = hd(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Gh(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new KE(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = nn(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ah(i),
    e
  );
}
function qE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ho,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function jx(e) {
  if (!e) return Vr;
  e = e._reactInternals;
  e: {
    if ($o(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ct(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ct(n)) return Db(e, n, t);
  }
  return t;
}
function Fx(e, t, n, r, o, i, s, a, l) {
  return (
    (e = Gh(n, r, !0, e, o, i, s, a, l)),
    (e.context = jx(null)),
    (n = e.current),
    (r = mt()),
    (o = Lr(n)),
    (i = Jn(r, o)),
    (i.callback = t ?? null),
    Or(n, i, o),
    (e.current.lanes = o),
    ka(e, o, r),
    Et(e, r),
    e
  );
}
function lc(e, t, n, r) {
  var o = t.current,
    i = mt(),
    s = Lr(o);
  return (
    (n = jx(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Jn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Or(o, t, s)),
    e !== null && (Sn(e, o, s, i), Ol(e, o, s)),
    s
  );
}
function Ru(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Lg(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Kh(e, t) {
  Lg(e, t), (e = e.alternate) && Lg(e, t);
}
function YE() {
  return null;
}
var Bx =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function qh(e) {
  this._internalRoot = e;
}
uc.prototype.render = qh.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  lc(e, t, null, null);
};
uc.prototype.unmount = qh.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Po(function () {
      lc(null, e, null, null);
    }),
      (t[sr] = null);
  }
};
function uc(e) {
  this._internalRoot = e;
}
uc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = gb();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Cr.length && t !== 0 && t < Cr[n].priority; n++);
    Cr.splice(n, 0, e), n === 0 && yb(e);
  }
};
function Yh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function cc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ig() {}
function XE(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Ru(s);
        i.call(u);
      };
    }
    var s = Fx(t, r, e, 0, null, !1, !1, "", Ig);
    return (
      (e._reactRootContainer = s),
      (e[sr] = s.current),
      Js(e.nodeType === 8 ? e.parentNode : e),
      Po(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Ru(l);
      a.call(u);
    };
  }
  var l = Gh(e, 0, !1, null, null, !1, !1, "", Ig);
  return (
    (e._reactRootContainer = l),
    (e[sr] = l.current),
    Js(e.nodeType === 8 ? e.parentNode : e),
    Po(function () {
      lc(t, l, n, r);
    }),
    l
  );
}
function dc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = Ru(s);
        a.call(l);
      };
    }
    lc(t, s, e, o);
  } else s = XE(n, t, e, o, r);
  return Ru(s);
}
hb = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = hs(t.pendingLanes);
        n !== 0 &&
          (hh(t, n | 1), Et(t, je()), !(ae & 6) && ((Ai = je() + 500), qr()));
      }
      break;
    case 13:
      Po(function () {
        var r = ar(e, 1);
        if (r !== null) {
          var o = mt();
          Sn(r, e, 1, o);
        }
      }),
        Kh(e, 1);
  }
};
mh = function (e) {
  if (e.tag === 13) {
    var t = ar(e, 134217728);
    if (t !== null) {
      var n = mt();
      Sn(t, e, 134217728, n);
    }
    Kh(e, 134217728);
  }
};
mb = function (e) {
  if (e.tag === 13) {
    var t = Lr(e),
      n = ar(e, t);
    if (n !== null) {
      var r = mt();
      Sn(n, e, t, r);
    }
    Kh(e, t);
  }
};
gb = function () {
  return ge;
};
vb = function (e, t) {
  var n = ge;
  try {
    return (ge = e), t();
  } finally {
    ge = n;
  }
};
Lf = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Tf(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = tc(r);
            if (!o) throw Error(I(90));
            q1(r), Tf(r, o);
          }
        }
      }
      break;
    case "textarea":
      X1(e, n);
      break;
    case "select":
      (t = n.value), t != null && fi(e, !!n.multiple, t, !1);
  }
};
rb = Vh;
ob = Po;
var QE = { usingClientEntryPoint: !1, Events: [Ea, Yo, tc, tb, nb, Vh] },
  rs = {
    findFiberByHostInstance: fo,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  ZE = {
    bundleType: rs.bundleType,
    version: rs.version,
    rendererPackageName: rs.rendererPackageName,
    rendererConfig: rs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: fr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ab(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: rs.findFiberByHostInstance || YE,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!pl.isDisabled && pl.supportsFiber)
    try {
      (Qu = pl.inject(ZE)), (Mn = pl);
    } catch {}
}
Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = QE;
Vt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Yh(t)) throw Error(I(200));
  return qE(e, t, null, n);
};
Vt.createRoot = function (e, t) {
  if (!Yh(e)) throw Error(I(299));
  var n = !1,
    r = "",
    o = Bx;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Gh(e, 1, !1, null, null, n, !1, r, o)),
    (e[sr] = t.current),
    Js(e.nodeType === 8 ? e.parentNode : e),
    new qh(t)
  );
};
Vt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(I(188))
      : ((e = Object.keys(e).join(",")), Error(I(268, e)));
  return (e = ab(t)), (e = e === null ? null : e.stateNode), e;
};
Vt.flushSync = function (e) {
  return Po(e);
};
Vt.hydrate = function (e, t, n) {
  if (!cc(t)) throw Error(I(200));
  return dc(null, e, t, !0, n);
};
Vt.hydrateRoot = function (e, t, n) {
  if (!Yh(e)) throw Error(I(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = Bx;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Fx(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[sr] = t.current),
    Js(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new uc(t);
};
Vt.render = function (e, t, n) {
  if (!cc(t)) throw Error(I(200));
  return dc(null, e, t, !1, n);
};
Vt.unmountComponentAtNode = function (e) {
  if (!cc(e)) throw Error(I(40));
  return e._reactRootContainer
    ? (Po(function () {
        dc(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[sr] = null);
        });
      }),
      !0)
    : !1;
};
Vt.unstable_batchedUpdates = Vh;
Vt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!cc(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return dc(e, t, n, !1, r);
};
Vt.version = "18.2.0-next-9e3b772b8-20220608";
function Nx() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nx);
    } catch (e) {
      console.error(e);
    }
}
Nx(), (F1.exports = Vt);
var Xh = F1.exports,
  Dg = Xh;
(Sf.createRoot = Dg.createRoot), (Sf.hydrateRoot = Dg.hydrateRoot);
function JE(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function e_(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var t_ = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(e_(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = JE(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  at = "-ms-",
  $u = "-moz-",
  de = "-webkit-",
  Vx = "comm",
  Qh = "rule",
  Zh = "decl",
  n_ = "@import",
  Wx = "@keyframes",
  r_ = "@layer",
  o_ = Math.abs,
  fc = String.fromCharCode,
  i_ = Object.assign;
function s_(e, t) {
  return tt(e, 0) ^ 45
    ? (((((((t << 2) ^ tt(e, 0)) << 2) ^ tt(e, 1)) << 2) ^ tt(e, 2)) << 2) ^
        tt(e, 3)
    : 0;
}
function Hx(e) {
  return e.trim();
}
function a_(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function fe(e, t, n) {
  return e.replace(t, n);
}
function hp(e, t) {
  return e.indexOf(t);
}
function tt(e, t) {
  return e.charCodeAt(t) | 0;
}
function la(e, t, n) {
  return e.slice(t, n);
}
function An(e) {
  return e.length;
}
function Jh(e) {
  return e.length;
}
function hl(e, t) {
  return t.push(e), e;
}
function l_(e, t) {
  return e.map(t).join("");
}
var pc = 1,
  Ri = 1,
  Ux = 0,
  At = 0,
  Ne = 0,
  Hi = "";
function hc(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: pc,
    column: Ri,
    length: s,
    return: "",
  };
}
function os(e, t) {
  return i_(hc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function u_() {
  return Ne;
}
function c_() {
  return (
    (Ne = At > 0 ? tt(Hi, --At) : 0), Ri--, Ne === 10 && ((Ri = 1), pc--), Ne
  );
}
function Dt() {
  return (
    (Ne = At < Ux ? tt(Hi, At++) : 0), Ri++, Ne === 10 && ((Ri = 1), pc++), Ne
  );
}
function zn() {
  return tt(Hi, At);
}
function Bl() {
  return At;
}
function Pa(e, t) {
  return la(Hi, e, t);
}
function ua(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Gx(e) {
  return (pc = Ri = 1), (Ux = An((Hi = e))), (At = 0), [];
}
function Kx(e) {
  return (Hi = ""), e;
}
function Nl(e) {
  return Hx(Pa(At - 1, mp(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function d_(e) {
  for (; (Ne = zn()) && Ne < 33; ) Dt();
  return ua(e) > 2 || ua(Ne) > 3 ? "" : " ";
}
function f_(e, t) {
  for (
    ;
    --t &&
    Dt() &&
    !(Ne < 48 || Ne > 102 || (Ne > 57 && Ne < 65) || (Ne > 70 && Ne < 97));

  );
  return Pa(e, Bl() + (t < 6 && zn() == 32 && Dt() == 32));
}
function mp(e) {
  for (; Dt(); )
    switch (Ne) {
      case e:
        return At;
      case 34:
      case 39:
        e !== 34 && e !== 39 && mp(Ne);
        break;
      case 40:
        e === 41 && mp(e);
        break;
      case 92:
        Dt();
        break;
    }
  return At;
}
function p_(e, t) {
  for (; Dt() && e + Ne !== 47 + 10; )
    if (e + Ne === 42 + 42 && zn() === 47) break;
  return "/*" + Pa(t, At - 1) + "*" + fc(e === 47 ? e : Dt());
}
function h_(e) {
  for (; !ua(zn()); ) Dt();
  return Pa(e, At);
}
function m_(e) {
  return Kx(Vl("", null, null, null, [""], (e = Gx(e)), 0, [0], e));
}
function Vl(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0,
      c = 0,
      d = s,
      f = 0,
      p = 0,
      m = 0,
      y = 1,
      w = 1,
      g = 1,
      h = 0,
      v = "",
      S = o,
      P = i,
      T = r,
      _ = v;
    w;

  )
    switch (((m = h), (h = Dt()))) {
      case 40:
        if (m != 108 && tt(_, d - 1) == 58) {
          hp((_ += fe(Nl(h), "&", "&\f")), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += Nl(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += d_(m);
        break;
      case 92:
        _ += f_(Bl() - 1, 7);
        continue;
      case 47:
        switch (zn()) {
          case 42:
          case 47:
            hl(g_(p_(Dt(), Bl()), t, n), l);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * y:
        a[u++] = An(_) * g;
      case 125 * y:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            w = 0;
          case 59 + c:
            g == -1 && (_ = fe(_, /\f/g, "")),
              p > 0 &&
                An(_) - d &&
                hl(
                  p > 32
                    ? Fg(_ + ";", r, n, d - 1)
                    : Fg(fe(_, " ", "") + ";", r, n, d - 2),
                  l
                );
            break;
          case 59:
            _ += ";";
          default:
            if (
              (hl((T = jg(_, t, n, u, c, o, a, v, (S = []), (P = []), d)), i),
              h === 123)
            )
              if (c === 0) Vl(_, t, T, T, S, i, d, a, P);
              else
                switch (f === 99 && tt(_, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Vl(
                      e,
                      T,
                      T,
                      r && hl(jg(e, T, T, 0, 0, o, a, v, o, (S = []), d), P),
                      o,
                      P,
                      d,
                      a,
                      r ? S : P
                    );
                    break;
                  default:
                    Vl(_, T, T, T, [""], P, 0, a, P);
                }
        }
        (u = c = p = 0), (y = g = 1), (v = _ = ""), (d = s);
        break;
      case 58:
        (d = 1 + An(_)), (p = m);
      default:
        if (y < 1) {
          if (h == 123) --y;
          else if (h == 125 && y++ == 0 && c_() == 125) continue;
        }
        switch (((_ += fc(h)), h * y)) {
          case 38:
            g = c > 0 ? 1 : ((_ += "\f"), -1);
            break;
          case 44:
            (a[u++] = (An(_) - 1) * g), (g = 1);
            break;
          case 64:
            zn() === 45 && (_ += Nl(Dt())),
              (f = zn()),
              (c = d = An((v = _ += h_(Bl())))),
              h++;
            break;
          case 45:
            m === 45 && An(_) == 2 && (y = 0);
        }
    }
  return i;
}
function jg(e, t, n, r, o, i, s, a, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], p = Jh(f), m = 0, y = 0, w = 0;
    m < r;
    ++m
  )
    for (var g = 0, h = la(e, d + 1, (d = o_((y = s[m])))), v = e; g < p; ++g)
      (v = Hx(y > 0 ? f[g] + " " + h : fe(h, /&\f/g, f[g]))) && (l[w++] = v);
  return hc(e, t, n, o === 0 ? Qh : a, l, u, c);
}
function g_(e, t, n) {
  return hc(e, t, n, Vx, fc(u_()), la(e, 2, -2), 0);
}
function Fg(e, t, n, r) {
  return hc(e, t, n, Zh, la(e, 0, r), la(e, r + 1, -1), r);
}
function yi(e, t) {
  for (var n = "", r = Jh(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function v_(e, t, n, r) {
  switch (e.type) {
    case r_:
      if (e.children.length) break;
    case n_:
    case Zh:
      return (e.return = e.return || e.value);
    case Vx:
      return "";
    case Wx:
      return (e.return = e.value + "{" + yi(e.children, r) + "}");
    case Qh:
      e.value = e.props.join(",");
  }
  return An((n = yi(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function y_(e) {
  var t = Jh(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function b_(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Bg = function (t) {
  var n = new WeakMap();
  return function (r) {
    if (n.has(r)) return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function qx(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var x_ = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = zn()), o === 38 && i === 12 && (n[r] = 1), !ua(i);

    )
      Dt();
    return Pa(t, At);
  },
  S_ = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (ua(o)) {
        case 0:
          o === 38 && zn() === 12 && (n[r] = 1), (t[r] += x_(At - 1, n, r));
          break;
        case 2:
          t[r] += Nl(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = zn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += fc(o);
      }
    while ((o = Dt()));
    return t;
  },
  w_ = function (t, n) {
    return Kx(S_(Gx(t), n));
  },
  Ng = new WeakMap(),
  k_ = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ng.get(r)) &&
        !o
      ) {
        Ng.set(t, !0);
        for (
          var i = [], s = w_(n, i), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
      }
    }
  },
  C_ = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Yx(e, t) {
  switch (s_(e, t)) {
    case 5103:
      return de + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return de + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return de + e + $u + e + at + e + e;
    case 6828:
    case 4268:
      return de + e + at + e + e;
    case 6165:
      return de + e + at + "flex-" + e + e;
    case 5187:
      return (
        de + e + fe(e, /(\w+).+(:[^]+)/, de + "box-$1$2" + at + "flex-$1$2") + e
      );
    case 5443:
      return de + e + at + "flex-item-" + fe(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        de +
        e +
        at +
        "flex-line-pack" +
        fe(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return de + e + at + fe(e, "shrink", "negative") + e;
    case 5292:
      return de + e + at + fe(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        de +
        "box-" +
        fe(e, "-grow", "") +
        de +
        e +
        at +
        fe(e, "grow", "positive") +
        e
      );
    case 4554:
      return de + fe(e, /([^-])(transform)/g, "$1" + de + "$2") + e;
    case 6187:
      return (
        fe(
          fe(fe(e, /(zoom-|grab)/, de + "$1"), /(image-set)/, de + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return fe(e, /(image-set\([^]*)/, de + "$1$`$1");
    case 4968:
      return (
        fe(
          fe(e, /(.+:)(flex-)?(.*)/, de + "box-pack:$3" + at + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        de +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return fe(e, /(.+)-inline(.+)/, de + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (An(e) - 1 - t > 6)
        switch (tt(e, t + 1)) {
          case 109:
            if (tt(e, t + 4) !== 45) break;
          case 102:
            return (
              fe(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  de +
                  "$2-$3$1" +
                  $u +
                  (tt(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~hp(e, "stretch")
              ? Yx(fe(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (tt(e, t + 1) !== 115) break;
    case 6444:
      switch (tt(e, An(e) - 3 - (~hp(e, "!important") && 10))) {
        case 107:
          return fe(e, ":", ":" + de) + e;
        case 101:
          return (
            fe(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                de +
                (tt(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                de +
                "$2$3$1" +
                at +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (tt(e, t + 11)) {
        case 114:
          return de + e + at + fe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return de + e + at + fe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return de + e + at + fe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return de + e + at + e + e;
  }
  return e;
}
var E_ = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Zh:
          t.return = Yx(t.value, t.length);
          break;
        case Wx:
          return yi([os(t, { value: fe(t.value, "@", "@" + de) })], o);
        case Qh:
          if (t.length)
            return l_(t.props, function (i) {
              switch (a_(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return yi(
                    [os(t, { props: [fe(i, /:(read-\w+)/, ":" + $u + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return yi(
                    [
                      os(t, {
                        props: [fe(i, /:(plac\w+)/, ":" + de + "input-$1")],
                      }),
                      os(t, { props: [fe(i, /:(plac\w+)/, ":" + $u + "$1")] }),
                      os(t, { props: [fe(i, /:(plac\w+)/, at + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  __ = [E_],
  P_ = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (y) {
        var w = y.getAttribute("data-emotion");
        w.indexOf(" ") !== -1 &&
          (document.head.appendChild(y), y.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || __,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (y) {
          for (
            var w = y.getAttribute("data-emotion").split(" "), g = 1;
            g < w.length;
            g++
          )
            i[w[g]] = !0;
          a.push(y);
        }
      );
    var l,
      u = [k_, C_];
    {
      var c,
        d = [
          v_,
          b_(function (y) {
            c.insert(y);
          }),
        ],
        f = y_(u.concat(o, d)),
        p = function (w) {
          return yi(m_(w), f);
        };
      l = function (w, g, h, v) {
        (c = h),
          p(w ? w + "{" + g.styles + "}" : g.styles),
          v && (m.inserted[g.name] = !0);
      };
    }
    var m = {
      key: n,
      sheet: new t_({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return m.sheet.hydrate(a), m;
  };
function Mu() {
  return (
    (Mu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Mu.apply(this, arguments)
  );
}
var Xx = { exports: {} },
  ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qe = typeof Symbol == "function" && Symbol.for,
  em = Qe ? Symbol.for("react.element") : 60103,
  tm = Qe ? Symbol.for("react.portal") : 60106,
  mc = Qe ? Symbol.for("react.fragment") : 60107,
  gc = Qe ? Symbol.for("react.strict_mode") : 60108,
  vc = Qe ? Symbol.for("react.profiler") : 60114,
  yc = Qe ? Symbol.for("react.provider") : 60109,
  bc = Qe ? Symbol.for("react.context") : 60110,
  nm = Qe ? Symbol.for("react.async_mode") : 60111,
  xc = Qe ? Symbol.for("react.concurrent_mode") : 60111,
  Sc = Qe ? Symbol.for("react.forward_ref") : 60112,
  wc = Qe ? Symbol.for("react.suspense") : 60113,
  T_ = Qe ? Symbol.for("react.suspense_list") : 60120,
  kc = Qe ? Symbol.for("react.memo") : 60115,
  Cc = Qe ? Symbol.for("react.lazy") : 60116,
  A_ = Qe ? Symbol.for("react.block") : 60121,
  R_ = Qe ? Symbol.for("react.fundamental") : 60117,
  $_ = Qe ? Symbol.for("react.responder") : 60118,
  M_ = Qe ? Symbol.for("react.scope") : 60119;
function Ht(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case em:
        switch (((e = e.type), e)) {
          case nm:
          case xc:
          case mc:
          case vc:
          case gc:
          case wc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case bc:
              case Sc:
              case Cc:
              case kc:
              case yc:
                return e;
              default:
                return t;
            }
        }
      case tm:
        return t;
    }
  }
}
function Qx(e) {
  return Ht(e) === xc;
}
ye.AsyncMode = nm;
ye.ConcurrentMode = xc;
ye.ContextConsumer = bc;
ye.ContextProvider = yc;
ye.Element = em;
ye.ForwardRef = Sc;
ye.Fragment = mc;
ye.Lazy = Cc;
ye.Memo = kc;
ye.Portal = tm;
ye.Profiler = vc;
ye.StrictMode = gc;
ye.Suspense = wc;
ye.isAsyncMode = function (e) {
  return Qx(e) || Ht(e) === nm;
};
ye.isConcurrentMode = Qx;
ye.isContextConsumer = function (e) {
  return Ht(e) === bc;
};
ye.isContextProvider = function (e) {
  return Ht(e) === yc;
};
ye.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === em;
};
ye.isForwardRef = function (e) {
  return Ht(e) === Sc;
};
ye.isFragment = function (e) {
  return Ht(e) === mc;
};
ye.isLazy = function (e) {
  return Ht(e) === Cc;
};
ye.isMemo = function (e) {
  return Ht(e) === kc;
};
ye.isPortal = function (e) {
  return Ht(e) === tm;
};
ye.isProfiler = function (e) {
  return Ht(e) === vc;
};
ye.isStrictMode = function (e) {
  return Ht(e) === gc;
};
ye.isSuspense = function (e) {
  return Ht(e) === wc;
};
ye.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === mc ||
    e === xc ||
    e === vc ||
    e === gc ||
    e === wc ||
    e === T_ ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Cc ||
        e.$$typeof === kc ||
        e.$$typeof === yc ||
        e.$$typeof === bc ||
        e.$$typeof === Sc ||
        e.$$typeof === R_ ||
        e.$$typeof === $_ ||
        e.$$typeof === M_ ||
        e.$$typeof === A_))
  );
};
ye.typeOf = Ht;
Xx.exports = ye;
var O_ = Xx.exports,
  Zx = O_,
  z_ = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  L_ = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Jx = {};
Jx[Zx.ForwardRef] = z_;
Jx[Zx.Memo] = L_;
var I_ = !0;
function D_(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var eS = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || I_ === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  tS = function (t, n, r) {
    eS(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function j_(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var F_ = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  B_ = /[A-Z]|^ms/g,
  N_ = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  nS = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Vg = function (t) {
    return t != null && typeof t != "boolean";
  },
  Ld = qx(function (e) {
    return nS(e) ? e : e.replace(B_, "-$&").toLowerCase();
  }),
  Wg = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(N_, function (r, o, i) {
            return (Rn = { name: o, styles: i, next: Rn }), o;
          });
    }
    return F_[t] !== 1 && !nS(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function ca(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Rn = { name: n.name, styles: n.styles, next: Rn }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Rn = { name: r.name, styles: r.styles, next: Rn }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return V_(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Rn,
          s = n(e);
        return (Rn = i), ca(e, t, s);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function V_(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += ca(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0
          ? (r += i + "{" + t[s] + "}")
          : Vg(s) && (r += Ld(i) + ":" + Wg(i, s) + ";");
      else if (
        Array.isArray(s) &&
        typeof s[0] == "string" &&
        (t == null || t[s[0]] === void 0)
      )
        for (var a = 0; a < s.length; a++)
          Vg(s[a]) && (r += Ld(i) + ":" + Wg(i, s[a]) + ";");
      else {
        var l = ca(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Ld(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var Hg = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Rn,
  rm = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    Rn = void 0;
    var s = t[0];
    s == null || s.raw === void 0
      ? ((o = !1), (i += ca(r, n, s)))
      : (i += s[0]);
    for (var a = 1; a < t.length; a++) (i += ca(r, n, t[a])), o && (i += s[a]);
    Hg.lastIndex = 0;
    for (var l = "", u; (u = Hg.exec(i)) !== null; ) l += "-" + u[1];
    var c = j_(i) + l;
    return { name: c, styles: i, next: Rn };
  },
  W_ = function (t) {
    return t();
  },
  rS = $0["useInsertionEffect"] ? $0["useInsertionEffect"] : !1,
  H_ = rS || W_,
  Ug = rS || x.useLayoutEffect,
  oS = x.createContext(typeof HTMLElement < "u" ? P_({ key: "css" }) : null);
oS.Provider;
var iS = function (t) {
    return x.forwardRef(function (n, r) {
      var o = x.useContext(oS);
      return t(n, o, r);
    });
  },
  da = x.createContext({}),
  U_ = function (t, n) {
    if (typeof n == "function") {
      var r = n(t);
      return r;
    }
    return Mu({}, t, n);
  },
  G_ = Bg(function (e) {
    return Bg(function (t) {
      return U_(e, t);
    });
  }),
  K_ = function (t) {
    var n = x.useContext(da);
    return (
      t.theme !== n && (n = G_(n)(t.theme)),
      x.createElement(da.Provider, { value: n }, t.children)
    );
  },
  Ec = iS(function (e, t) {
    var n = e.styles,
      r = rm([n], void 0, x.useContext(da)),
      o = x.useRef();
    return (
      Ug(
        function () {
          var i = t.key + "-global",
            s = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            l = document.querySelector(
              'style[data-emotion="' + i + " " + r.name + '"]'
            );
          return (
            t.sheet.tags.length && (s.before = t.sheet.tags[0]),
            l !== null &&
              ((a = !0), l.setAttribute("data-emotion", i), s.hydrate([l])),
            (o.current = [s, a]),
            function () {
              s.flush();
            }
          );
        },
        [t]
      ),
      Ug(
        function () {
          var i = o.current,
            s = i[0],
            a = i[1];
          if (a) {
            i[1] = !1;
            return;
          }
          if ((r.next !== void 0 && tS(t, r.next, !0), s.tags.length)) {
            var l = s.tags[s.tags.length - 1].nextElementSibling;
            (s.before = l), s.flush();
          }
          t.insert("", r, s, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
function q_() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return rm(t);
}
var om = function () {
    var t = q_.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  sS = String.raw,
  aS = sS`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,
  Y_ = () => k.jsx(Ec, { styles: aS }),
  X_ = ({ scope: e = "" }) =>
    k.jsx(Ec, {
      styles: sS`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${aS}
    `,
    });
function Q_(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Ut(e = {}) {
  const {
      name: t,
      strict: n = !0,
      hookName: r = "useContext",
      providerName: o = "Provider",
      errorMessage: i,
      defaultValue: s,
    } = e,
    a = x.createContext(s);
  a.displayName = t;
  function l() {
    var u;
    const c = x.useContext(a);
    if (!c && n) {
      const d = new Error(i ?? Q_(r, o));
      throw (
        ((d.name = "ContextError"),
        (u = Error.captureStackTrace) == null || u.call(Error, d, l),
        d)
      );
    }
    return c;
  }
  return [a.Provider, l, a];
}
var [Z_, J_] = Ut({ strict: !1, name: "PortalManagerContext" });
function lS(e) {
  const { children: t, zIndex: n } = e;
  return k.jsx(Z_, { value: { zIndex: n }, children: t });
}
lS.displayName = "PortalManager";
var er =
    globalThis != null && globalThis.document ? x.useLayoutEffect : x.useEffect,
  [uS, e4] = Ut({ strict: !1, name: "PortalContext" }),
  im = "chakra-portal",
  t4 = ".chakra-portal",
  n4 = (e) =>
    k.jsx("div", {
      className: "chakra-portal-zIndex",
      style: {
        position: "absolute",
        zIndex: e.zIndex,
        top: 0,
        left: 0,
        right: 0,
      },
      children: e.children,
    }),
  r4 = (e) => {
    const { appendToParentPortal: t, children: n } = e,
      [r, o] = x.useState(null),
      i = x.useRef(null),
      [, s] = x.useState({});
    x.useEffect(() => s({}), []);
    const a = e4(),
      l = J_();
    er(() => {
      if (!r) return;
      const c = r.ownerDocument,
        d = t ? a ?? c.body : c.body;
      if (!d) return;
      (i.current = c.createElement("div")),
        (i.current.className = im),
        d.appendChild(i.current),
        s({});
      const f = i.current;
      return () => {
        d.contains(f) && d.removeChild(f);
      };
    }, [r]);
    const u =
      l != null && l.zIndex
        ? k.jsx(n4, { zIndex: l == null ? void 0 : l.zIndex, children: n })
        : n;
    return i.current
      ? Xh.createPortal(k.jsx(uS, { value: i.current, children: u }), i.current)
      : k.jsx("span", {
          ref: (c) => {
            c && o(c);
          },
        });
  },
  o4 = (e) => {
    const { children: t, containerRef: n, appendToParentPortal: r } = e,
      o = n.current,
      i = o ?? (typeof window < "u" ? document.body : void 0),
      s = x.useMemo(() => {
        const l = o == null ? void 0 : o.ownerDocument.createElement("div");
        return l && (l.className = im), l;
      }, [o]),
      [, a] = x.useState({});
    return (
      er(() => a({}), []),
      er(() => {
        if (!(!s || !i))
          return (
            i.appendChild(s),
            () => {
              i.removeChild(s);
            }
          );
      }, [s, i]),
      i && s
        ? Xh.createPortal(k.jsx(uS, { value: r ? s : null, children: t }), s)
        : null
    );
  };
function _c(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: n, ...r } = t;
  return n ? k.jsx(o4, { containerRef: n, ...r }) : k.jsx(r4, { ...r });
}
_c.className = im;
_c.selector = t4;
_c.displayName = "Portal";
function Mo() {
  const e = x.useContext(da);
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var sm = x.createContext({});
sm.displayName = "ColorModeContext";
function Pc() {
  const e = x.useContext(sm);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var ml = { light: "chakra-ui-light", dark: "chakra-ui-dark" };
function i4(e = {}) {
  const { preventTransition: t = !0 } = e,
    n = {
      setDataset: (r) => {
        const o = t ? n.preventTransition() : void 0;
        (document.documentElement.dataset.theme = r),
          (document.documentElement.style.colorScheme = r),
          o == null || o();
      },
      setClassName(r) {
        document.body.classList.add(r ? ml.dark : ml.light),
          document.body.classList.remove(r ? ml.light : ml.dark);
      },
      query() {
        return window.matchMedia("(prefers-color-scheme: dark)");
      },
      getSystemTheme(r) {
        var o;
        return ((o = n.query().matches) != null ? o : r === "dark")
          ? "dark"
          : "light";
      },
      addListener(r) {
        const o = n.query(),
          i = (s) => {
            r(s.matches ? "dark" : "light");
          };
        return (
          typeof o.addListener == "function"
            ? o.addListener(i)
            : o.addEventListener("change", i),
          () => {
            typeof o.removeListener == "function"
              ? o.removeListener(i)
              : o.removeEventListener("change", i);
          }
        );
      },
      preventTransition() {
        const r = document.createElement("style");
        return (
          r.appendChild(
            document.createTextNode(
              "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
            )
          ),
          document.head.appendChild(r),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(r);
                });
              });
          }
        );
      },
    };
  return n;
}
var s4 = "chakra-ui-color-mode";
function a4(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document)) return t;
      let n;
      try {
        n = localStorage.getItem(e) || t;
      } catch {}
      return n || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {}
    },
  };
}
var l4 = a4(s4),
  Gg = () => {};
function Kg(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function cS(e) {
  const {
      value: t,
      children: n,
      options: {
        useSystemColorMode: r,
        initialColorMode: o,
        disableTransitionOnChange: i,
      } = {},
      colorModeManager: s = l4,
    } = e,
    a = o === "dark" ? "dark" : "light",
    [l, u] = x.useState(() => Kg(s, a)),
    [c, d] = x.useState(() => Kg(s)),
    {
      getSystemTheme: f,
      setClassName: p,
      setDataset: m,
      addListener: y,
    } = x.useMemo(() => i4({ preventTransition: i }), [i]),
    w = o === "system" && !l ? c : l,
    g = x.useCallback(
      (S) => {
        const P = S === "system" ? f() : S;
        u(P), p(P === "dark"), m(P), s.set(P);
      },
      [s, f, p, m]
    );
  er(() => {
    o === "system" && d(f());
  }, []),
    x.useEffect(() => {
      const S = s.get();
      if (S) {
        g(S);
        return;
      }
      if (o === "system") {
        g("system");
        return;
      }
      g(a);
    }, [s, a, o, g]);
  const h = x.useCallback(() => {
    g(w === "dark" ? "light" : "dark");
  }, [w, g]);
  x.useEffect(() => {
    if (r) return y(g);
  }, [r, y, g]);
  const v = x.useMemo(
    () => ({
      colorMode: t ?? w,
      toggleColorMode: t ? Gg : h,
      setColorMode: t ? Gg : g,
      forced: t !== void 0,
    }),
    [w, h, g, t]
  );
  return k.jsx(sm.Provider, { value: v, children: n });
}
cS.displayName = "ColorModeProvider";
var u4 = new Set(["dark", "light", "system"]);
function c4(e) {
  let t = e;
  return u4.has(t) || (t = "light"), t;
}
function d4(e = {}) {
  const {
      initialColorMode: t = "light",
      type: n = "localStorage",
      storageKey: r = "chakra-ui-color-mode",
    } = e,
    o = c4(t),
    i = n === "cookie",
    s = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `,
    a = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${i ? s : a}`.trim();
}
function f4(e = {}) {
  const { nonce: t } = e;
  return k.jsx("script", {
    id: "chakra-script",
    nonce: t,
    dangerouslySetInnerHTML: { __html: d4(e) },
  });
}
function p4() {
  const e = Pc(),
    t = Mo();
  return { ...e, theme: t };
}
function h4(e, t, n) {
  var r, o;
  if (t == null) return t;
  const i = (s) => {
    var a, l;
    return (l = (a = e.__breakpoints) == null ? void 0 : a.asArray) == null
      ? void 0
      : l[s];
  };
  return (o = (r = i(t)) != null ? r : i(n)) != null ? o : n;
}
function m4(e, t, n) {
  var r, o;
  if (t == null) return t;
  const i = (s) => {
    var a, l;
    return (l = (a = e.__cssMap) == null ? void 0 : a[s]) == null
      ? void 0
      : l.value;
  };
  return (o = (r = i(t)) != null ? r : i(n)) != null ? o : n;
}
function g4(e, t, n) {
  const r = Mo();
  return dS(e, t, n)(r);
}
function dS(e, t, n) {
  const r = Array.isArray(t) ? t : [t],
    o = Array.isArray(n) ? n : [n];
  return (i) => {
    const s = o.filter(Boolean),
      a = r.map((l, u) => {
        var c, d;
        if (e === "breakpoints") return h4(i, l, (c = s[u]) != null ? c : l);
        const f = `${e}.${l}`;
        return m4(i, f, (d = s[u]) != null ? d : l);
      });
    return Array.isArray(t) ? a : a[0];
  };
}
var ve = (...e) => e.filter(Boolean).join(" ");
function _t(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function Xn(e, ...t) {
  return v4(e) ? e(...t) : e;
}
var v4 = (e) => typeof e == "function",
  le = (e) => (e ? "" : void 0),
  Id = (e) => (e ? !0 : void 0);
function lt(...e) {
  return function (n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function y4(...e) {
  return function (n) {
    e.forEach((r) => {
      r == null || r(n);
    });
  };
}
var Ou = { exports: {} };
Ou.exports;
(function (e, t) {
  var n = 200,
    r = "__lodash_hash_undefined__",
    o = 800,
    i = 16,
    s = 9007199254740991,
    a = "[object Arguments]",
    l = "[object Array]",
    u = "[object AsyncFunction]",
    c = "[object Boolean]",
    d = "[object Date]",
    f = "[object Error]",
    p = "[object Function]",
    m = "[object GeneratorFunction]",
    y = "[object Map]",
    w = "[object Number]",
    g = "[object Null]",
    h = "[object Object]",
    v = "[object Proxy]",
    S = "[object RegExp]",
    P = "[object Set]",
    T = "[object String]",
    _ = "[object Undefined]",
    A = "[object WeakMap]",
    O = "[object ArrayBuffer]",
    M = "[object DataView]",
    F = "[object Float32Array]",
    X = "[object Float64Array]",
    Y = "[object Int8Array]",
    Q = "[object Int16Array]",
    J = "[object Int32Array]",
    Z = "[object Uint8Array]",
    z = "[object Uint8ClampedArray]",
    L = "[object Uint16Array]",
    B = "[object Uint32Array]",
    H = /[\\^$.*+?()[\]{}|]/g,
    V = /^\[object .+?Constructor\]$/,
    te = /^(?:0|[1-9]\d*)$/,
    N = {};
  (N[F] = N[X] = N[Y] = N[Q] = N[J] = N[Z] = N[z] = N[L] = N[B] = !0),
    (N[a] =
      N[l] =
      N[O] =
      N[c] =
      N[M] =
      N[d] =
      N[f] =
      N[p] =
      N[y] =
      N[w] =
      N[h] =
      N[S] =
      N[P] =
      N[T] =
      N[A] =
        !1);
  var G = typeof Xa == "object" && Xa && Xa.Object === Object && Xa,
    ke = typeof self == "object" && self && self.Object === Object && self,
    he = G || ke || Function("return this")(),
    He = t && !t.nodeType && t,
    De = He && !0 && e && !e.nodeType && e,
    Gt = De && De.exports === He,
    Kt = Gt && G.process,
    ot = (function () {
      try {
        var b = De && De.require && De.require("util").types;
        return b || (Kt && Kt.binding && Kt.binding("util"));
      } catch {}
    })(),
    Bn = ot && ot.isTypedArray;
  function Nn(b, C, R) {
    switch (R.length) {
      case 0:
        return b.call(C);
      case 1:
        return b.call(C, R[0]);
      case 2:
        return b.call(C, R[0], R[1]);
      case 3:
        return b.call(C, R[0], R[1], R[2]);
    }
    return b.apply(C, R);
  }
  function Va(b, C) {
    for (var R = -1, D = Array(b); ++R < b; ) D[R] = C(R);
    return D;
  }
  function ne(b) {
    return function (C) {
      return b(C);
    };
  }
  function Ze(b, C) {
    return b == null ? void 0 : b[C];
  }
  function dt(b, C) {
    return function (R) {
      return b(C(R));
    };
  }
  var pr = Array.prototype,
    Zc = Function.prototype,
    qt = Object.prototype,
    hr = he["__core-js_shared__"],
    Jr = Zc.toString,
    Yt = qt.hasOwnProperty,
    Io = (function () {
      var b = /[^.]+$/.exec((hr && hr.keys && hr.keys.IE_PROTO) || "");
      return b ? "Symbol(src)_1." + b : "";
    })(),
    Gi = qt.toString,
    Wa = Jr.call(Object),
    Ha = RegExp(
      "^" +
        Jr.call(Yt)
          .replace(H, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    eo = Gt ? he.Buffer : void 0,
    d0 = he.Symbol,
    f0 = he.Uint8Array,
    p0 = eo ? eo.allocUnsafe : void 0,
    h0 = dt(Object.getPrototypeOf, Object),
    m0 = Object.create,
    Ck = qt.propertyIsEnumerable,
    Ek = pr.splice,
    to = d0 ? d0.toStringTag : void 0,
    Ua = (function () {
      try {
        var b = td(Object, "defineProperty");
        return b({}, "", {}), b;
      } catch {}
    })(),
    _k = eo ? eo.isBuffer : void 0,
    g0 = Math.max,
    Pk = Date.now,
    v0 = td(he, "Map"),
    Ki = td(Object, "create"),
    Tk = (function () {
      function b() {}
      return function (C) {
        if (!ro(C)) return {};
        if (m0) return m0(C);
        b.prototype = C;
        var R = new b();
        return (b.prototype = void 0), R;
      };
    })();
  function no(b) {
    var C = -1,
      R = b == null ? 0 : b.length;
    for (this.clear(); ++C < R; ) {
      var D = b[C];
      this.set(D[0], D[1]);
    }
  }
  function Ak() {
    (this.__data__ = Ki ? Ki(null) : {}), (this.size = 0);
  }
  function Rk(b) {
    var C = this.has(b) && delete this.__data__[b];
    return (this.size -= C ? 1 : 0), C;
  }
  function $k(b) {
    var C = this.__data__;
    if (Ki) {
      var R = C[b];
      return R === r ? void 0 : R;
    }
    return Yt.call(C, b) ? C[b] : void 0;
  }
  function Mk(b) {
    var C = this.__data__;
    return Ki ? C[b] !== void 0 : Yt.call(C, b);
  }
  function Ok(b, C) {
    var R = this.__data__;
    return (
      (this.size += this.has(b) ? 0 : 1),
      (R[b] = Ki && C === void 0 ? r : C),
      this
    );
  }
  (no.prototype.clear = Ak),
    (no.prototype.delete = Rk),
    (no.prototype.get = $k),
    (no.prototype.has = Mk),
    (no.prototype.set = Ok);
  function Vn(b) {
    var C = -1,
      R = b == null ? 0 : b.length;
    for (this.clear(); ++C < R; ) {
      var D = b[C];
      this.set(D[0], D[1]);
    }
  }
  function zk() {
    (this.__data__ = []), (this.size = 0);
  }
  function Lk(b) {
    var C = this.__data__,
      R = Ga(C, b);
    if (R < 0) return !1;
    var D = C.length - 1;
    return R == D ? C.pop() : Ek.call(C, R, 1), --this.size, !0;
  }
  function Ik(b) {
    var C = this.__data__,
      R = Ga(C, b);
    return R < 0 ? void 0 : C[R][1];
  }
  function Dk(b) {
    return Ga(this.__data__, b) > -1;
  }
  function jk(b, C) {
    var R = this.__data__,
      D = Ga(R, b);
    return D < 0 ? (++this.size, R.push([b, C])) : (R[D][1] = C), this;
  }
  (Vn.prototype.clear = zk),
    (Vn.prototype.delete = Lk),
    (Vn.prototype.get = Ik),
    (Vn.prototype.has = Dk),
    (Vn.prototype.set = jk);
  function Do(b) {
    var C = -1,
      R = b == null ? 0 : b.length;
    for (this.clear(); ++C < R; ) {
      var D = b[C];
      this.set(D[0], D[1]);
    }
  }
  function Fk() {
    (this.size = 0),
      (this.__data__ = {
        hash: new no(),
        map: new (v0 || Vn)(),
        string: new no(),
      });
  }
  function Bk(b) {
    var C = qa(this, b).delete(b);
    return (this.size -= C ? 1 : 0), C;
  }
  function Nk(b) {
    return qa(this, b).get(b);
  }
  function Vk(b) {
    return qa(this, b).has(b);
  }
  function Wk(b, C) {
    var R = qa(this, b),
      D = R.size;
    return R.set(b, C), (this.size += R.size == D ? 0 : 1), this;
  }
  (Do.prototype.clear = Fk),
    (Do.prototype.delete = Bk),
    (Do.prototype.get = Nk),
    (Do.prototype.has = Vk),
    (Do.prototype.set = Wk);
  function jo(b) {
    var C = (this.__data__ = new Vn(b));
    this.size = C.size;
  }
  function Hk() {
    (this.__data__ = new Vn()), (this.size = 0);
  }
  function Uk(b) {
    var C = this.__data__,
      R = C.delete(b);
    return (this.size = C.size), R;
  }
  function Gk(b) {
    return this.__data__.get(b);
  }
  function Kk(b) {
    return this.__data__.has(b);
  }
  function qk(b, C) {
    var R = this.__data__;
    if (R instanceof Vn) {
      var D = R.__data__;
      if (!v0 || D.length < n - 1)
        return D.push([b, C]), (this.size = ++R.size), this;
      R = this.__data__ = new Do(D);
    }
    return R.set(b, C), (this.size = R.size), this;
  }
  (jo.prototype.clear = Hk),
    (jo.prototype.delete = Uk),
    (jo.prototype.get = Gk),
    (jo.prototype.has = Kk),
    (jo.prototype.set = qk);
  function Yk(b, C) {
    var R = od(b),
      D = !R && rd(b),
      ie = !R && !D && w0(b),
      be = !R && !D && !ie && C0(b),
      Pe = R || D || ie || be,
      oe = Pe ? Va(b.length, String) : [],
      Te = oe.length;
    for (var Xt in b)
      (C || Yt.call(b, Xt)) &&
        !(
          Pe &&
          (Xt == "length" ||
            (ie && (Xt == "offset" || Xt == "parent")) ||
            (be &&
              (Xt == "buffer" || Xt == "byteLength" || Xt == "byteOffset")) ||
            x0(Xt, Te))
        ) &&
        oe.push(Xt);
    return oe;
  }
  function Jc(b, C, R) {
    ((R !== void 0 && !Ya(b[C], R)) || (R === void 0 && !(C in b))) &&
      ed(b, C, R);
  }
  function Xk(b, C, R) {
    var D = b[C];
    (!(Yt.call(b, C) && Ya(D, R)) || (R === void 0 && !(C in b))) &&
      ed(b, C, R);
  }
  function Ga(b, C) {
    for (var R = b.length; R--; ) if (Ya(b[R][0], C)) return R;
    return -1;
  }
  function ed(b, C, R) {
    C == "__proto__" && Ua
      ? Ua(b, C, { configurable: !0, enumerable: !0, value: R, writable: !0 })
      : (b[C] = R);
  }
  var Qk = cC();
  function Ka(b) {
    return b == null
      ? b === void 0
        ? _
        : g
      : to && to in Object(b)
      ? dC(b)
      : vC(b);
  }
  function y0(b) {
    return qi(b) && Ka(b) == a;
  }
  function Zk(b) {
    if (!ro(b) || mC(b)) return !1;
    var C = sd(b) ? Ha : V;
    return C.test(SC(b));
  }
  function Jk(b) {
    return qi(b) && k0(b.length) && !!N[Ka(b)];
  }
  function eC(b) {
    if (!ro(b)) return gC(b);
    var C = S0(b),
      R = [];
    for (var D in b) (D == "constructor" && (C || !Yt.call(b, D))) || R.push(D);
    return R;
  }
  function b0(b, C, R, D, ie) {
    b !== C &&
      Qk(
        C,
        function (be, Pe) {
          if ((ie || (ie = new jo()), ro(be))) tC(b, C, Pe, R, b0, D, ie);
          else {
            var oe = D ? D(nd(b, Pe), be, Pe + "", b, C, ie) : void 0;
            oe === void 0 && (oe = be), Jc(b, Pe, oe);
          }
        },
        E0
      );
  }
  function tC(b, C, R, D, ie, be, Pe) {
    var oe = nd(b, R),
      Te = nd(C, R),
      Xt = Pe.get(Te);
    if (Xt) {
      Jc(b, R, Xt);
      return;
    }
    var $t = be ? be(oe, Te, R + "", b, C, Pe) : void 0,
      Yi = $t === void 0;
    if (Yi) {
      var ad = od(Te),
        ld = !ad && w0(Te),
        P0 = !ad && !ld && C0(Te);
      ($t = Te),
        ad || ld || P0
          ? od(oe)
            ? ($t = oe)
            : wC(oe)
            ? ($t = aC(oe))
            : ld
            ? ((Yi = !1), ($t = oC(Te, !0)))
            : P0
            ? ((Yi = !1), ($t = sC(Te, !0)))
            : ($t = [])
          : kC(Te) || rd(Te)
          ? (($t = oe),
            rd(oe) ? ($t = CC(oe)) : (!ro(oe) || sd(oe)) && ($t = fC(Te)))
          : (Yi = !1);
    }
    Yi && (Pe.set(Te, $t), ie($t, Te, D, be, Pe), Pe.delete(Te)), Jc(b, R, $t);
  }
  function nC(b, C) {
    return bC(yC(b, C, _0), b + "");
  }
  var rC = Ua
    ? function (b, C) {
        return Ua(b, "toString", {
          configurable: !0,
          enumerable: !1,
          value: _C(C),
          writable: !0,
        });
      }
    : _0;
  function oC(b, C) {
    if (C) return b.slice();
    var R = b.length,
      D = p0 ? p0(R) : new b.constructor(R);
    return b.copy(D), D;
  }
  function iC(b) {
    var C = new b.constructor(b.byteLength);
    return new f0(C).set(new f0(b)), C;
  }
  function sC(b, C) {
    var R = C ? iC(b.buffer) : b.buffer;
    return new b.constructor(R, b.byteOffset, b.length);
  }
  function aC(b, C) {
    var R = -1,
      D = b.length;
    for (C || (C = Array(D)); ++R < D; ) C[R] = b[R];
    return C;
  }
  function lC(b, C, R, D) {
    var ie = !R;
    R || (R = {});
    for (var be = -1, Pe = C.length; ++be < Pe; ) {
      var oe = C[be],
        Te = D ? D(R[oe], b[oe], oe, R, b) : void 0;
      Te === void 0 && (Te = b[oe]), ie ? ed(R, oe, Te) : Xk(R, oe, Te);
    }
    return R;
  }
  function uC(b) {
    return nC(function (C, R) {
      var D = -1,
        ie = R.length,
        be = ie > 1 ? R[ie - 1] : void 0,
        Pe = ie > 2 ? R[2] : void 0;
      for (
        be = b.length > 3 && typeof be == "function" ? (ie--, be) : void 0,
          Pe && pC(R[0], R[1], Pe) && ((be = ie < 3 ? void 0 : be), (ie = 1)),
          C = Object(C);
        ++D < ie;

      ) {
        var oe = R[D];
        oe && b(C, oe, D, be);
      }
      return C;
    });
  }
  function cC(b) {
    return function (C, R, D) {
      for (var ie = -1, be = Object(C), Pe = D(C), oe = Pe.length; oe--; ) {
        var Te = Pe[b ? oe : ++ie];
        if (R(be[Te], Te, be) === !1) break;
      }
      return C;
    };
  }
  function qa(b, C) {
    var R = b.__data__;
    return hC(C) ? R[typeof C == "string" ? "string" : "hash"] : R.map;
  }
  function td(b, C) {
    var R = Ze(b, C);
    return Zk(R) ? R : void 0;
  }
  function dC(b) {
    var C = Yt.call(b, to),
      R = b[to];
    try {
      b[to] = void 0;
      var D = !0;
    } catch {}
    var ie = Gi.call(b);
    return D && (C ? (b[to] = R) : delete b[to]), ie;
  }
  function fC(b) {
    return typeof b.constructor == "function" && !S0(b) ? Tk(h0(b)) : {};
  }
  function x0(b, C) {
    var R = typeof b;
    return (
      (C = C ?? s),
      !!C &&
        (R == "number" || (R != "symbol" && te.test(b))) &&
        b > -1 &&
        b % 1 == 0 &&
        b < C
    );
  }
  function pC(b, C, R) {
    if (!ro(R)) return !1;
    var D = typeof C;
    return (D == "number" ? id(R) && x0(C, R.length) : D == "string" && C in R)
      ? Ya(R[C], b)
      : !1;
  }
  function hC(b) {
    var C = typeof b;
    return C == "string" || C == "number" || C == "symbol" || C == "boolean"
      ? b !== "__proto__"
      : b === null;
  }
  function mC(b) {
    return !!Io && Io in b;
  }
  function S0(b) {
    var C = b && b.constructor,
      R = (typeof C == "function" && C.prototype) || qt;
    return b === R;
  }
  function gC(b) {
    var C = [];
    if (b != null) for (var R in Object(b)) C.push(R);
    return C;
  }
  function vC(b) {
    return Gi.call(b);
  }
  function yC(b, C, R) {
    return (
      (C = g0(C === void 0 ? b.length - 1 : C, 0)),
      function () {
        for (
          var D = arguments, ie = -1, be = g0(D.length - C, 0), Pe = Array(be);
          ++ie < be;

        )
          Pe[ie] = D[C + ie];
        ie = -1;
        for (var oe = Array(C + 1); ++ie < C; ) oe[ie] = D[ie];
        return (oe[C] = R(Pe)), Nn(b, this, oe);
      }
    );
  }
  function nd(b, C) {
    if (!(C === "constructor" && typeof b[C] == "function") && C != "__proto__")
      return b[C];
  }
  var bC = xC(rC);
  function xC(b) {
    var C = 0,
      R = 0;
    return function () {
      var D = Pk(),
        ie = i - (D - R);
      if (((R = D), ie > 0)) {
        if (++C >= o) return arguments[0];
      } else C = 0;
      return b.apply(void 0, arguments);
    };
  }
  function SC(b) {
    if (b != null) {
      try {
        return Jr.call(b);
      } catch {}
      try {
        return b + "";
      } catch {}
    }
    return "";
  }
  function Ya(b, C) {
    return b === C || (b !== b && C !== C);
  }
  var rd = y0(
      (function () {
        return arguments;
      })()
    )
      ? y0
      : function (b) {
          return qi(b) && Yt.call(b, "callee") && !Ck.call(b, "callee");
        },
    od = Array.isArray;
  function id(b) {
    return b != null && k0(b.length) && !sd(b);
  }
  function wC(b) {
    return qi(b) && id(b);
  }
  var w0 = _k || PC;
  function sd(b) {
    if (!ro(b)) return !1;
    var C = Ka(b);
    return C == p || C == m || C == u || C == v;
  }
  function k0(b) {
    return typeof b == "number" && b > -1 && b % 1 == 0 && b <= s;
  }
  function ro(b) {
    var C = typeof b;
    return b != null && (C == "object" || C == "function");
  }
  function qi(b) {
    return b != null && typeof b == "object";
  }
  function kC(b) {
    if (!qi(b) || Ka(b) != h) return !1;
    var C = h0(b);
    if (C === null) return !0;
    var R = Yt.call(C, "constructor") && C.constructor;
    return typeof R == "function" && R instanceof R && Jr.call(R) == Wa;
  }
  var C0 = Bn ? ne(Bn) : Jk;
  function CC(b) {
    return lC(b, E0(b));
  }
  function E0(b) {
    return id(b) ? Yk(b, !0) : eC(b);
  }
  var EC = uC(function (b, C, R, D) {
    b0(b, C, R, D);
  });
  function _C(b) {
    return function () {
      return b;
    };
  }
  function _0(b) {
    return b;
  }
  function PC() {
    return !1;
  }
  e.exports = EC;
})(Ou, Ou.exports);
var b4 = Ou.exports;
const rn = th(b4);
var x4 = (e) => /!(important)?$/.test(e),
  qg = (e) =>
    typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
  S4 = (e, t) => (n) => {
    const r = String(t),
      o = x4(r),
      i = qg(r),
      s = e ? `${e}.${i}` : i;
    let a = _t(n.__cssMap) && s in n.__cssMap ? n.__cssMap[s].varRef : t;
    return (a = qg(a)), o ? `${a} !important` : a;
  };
function am(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, s) => {
    var a;
    const l = S4(t, i)(s);
    let u = (a = n == null ? void 0 : n(l, s)) != null ? a : l;
    return r && (u = r(u, s)), u;
  };
}
var gl =
  (...e) =>
  (t) =>
    e.reduce((n, r) => r(n), t);
function Qt(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return (r.transform = am({ scale: e, transform: t })), r;
  };
}
var w4 =
  ({ rtl: e, ltr: t }) =>
  (n) =>
    n.direction === "rtl" ? e : t;
function k4(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: w4(t),
    transform: n ? am({ scale: n, compose: r }) : r,
  };
}
var fS = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))",
];
function C4() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...fS,
  ].join(" ");
}
function E4() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...fS,
  ].join(" ");
}
var _4 = {
    "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
    filter: [
      "var(--chakra-blur)",
      "var(--chakra-brightness)",
      "var(--chakra-contrast)",
      "var(--chakra-grayscale)",
      "var(--chakra-hue-rotate)",
      "var(--chakra-invert)",
      "var(--chakra-saturate)",
      "var(--chakra-sepia)",
      "var(--chakra-drop-shadow)",
    ].join(" "),
  },
  P4 = {
    backdropFilter: [
      "var(--chakra-backdrop-blur)",
      "var(--chakra-backdrop-brightness)",
      "var(--chakra-backdrop-contrast)",
      "var(--chakra-backdrop-grayscale)",
      "var(--chakra-backdrop-hue-rotate)",
      "var(--chakra-backdrop-invert)",
      "var(--chakra-backdrop-opacity)",
      "var(--chakra-backdrop-saturate)",
      "var(--chakra-backdrop-sepia)",
    ].join(" "),
    "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  };
function T4(e) {
  return {
    "--chakra-ring-offset-shadow":
      "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow":
      "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)",
    ].join(", "),
  };
}
var A4 = {
    "row-reverse": {
      space: "--chakra-space-x-reverse",
      divide: "--chakra-divide-x-reverse",
    },
    "column-reverse": {
      space: "--chakra-space-y-reverse",
      divide: "--chakra-divide-y-reverse",
    },
  },
  gp = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  R4 = new Set(Object.values(gp)),
  vp = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  $4 = (e) => e.trim();
function M4(e, t) {
  if (e == null || vp.has(e)) return e;
  if (!(yp(e) || vp.has(e))) return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    i = o == null ? void 0 : o[1],
    s = o == null ? void 0 : o[2];
  if (!i || !s) return e;
  const a = i.includes("-gradient") ? i : `${i}-gradient`,
    [l, ...u] = s.split(",").map($4).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0) return e;
  const c = l in gp ? gp[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (R4.has(f)) return f;
    const p = f.indexOf(" "),
      [m, y] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f],
      w = yp(y) ? y : y && y.split(" "),
      g = `colors.${m}`,
      h = g in t.__cssMap ? t.__cssMap[g].varRef : m;
    return w ? [h, ...(Array.isArray(w) ? w : [w])].join(" ") : h;
  });
  return `${a}(${d.join(", ")})`;
}
var yp = (e) => typeof e == "string" && e.includes("(") && e.includes(")"),
  O4 = (e, t) => M4(e, t ?? {});
function z4(e) {
  return /^var\(--.+\)$/.test(e);
}
var L4 = (e) => {
    const t = parseFloat(e.toString()),
      n = e.toString().replace(String(t), "");
    return { unitless: !n, value: t, unit: n };
  },
  En = (e) => (t) => `${e}(${t})`,
  ue = {
    filter(e) {
      return e !== "auto" ? e : _4;
    },
    backdropFilter(e) {
      return e !== "auto" ? e : P4;
    },
    ring(e) {
      return T4(ue.px(e));
    },
    bgClip(e) {
      return e === "text"
        ? { color: "transparent", backgroundClip: "text" }
        : { backgroundClip: e };
    },
    transform(e) {
      return e === "auto" ? C4() : e === "auto-gpu" ? E4() : e;
    },
    vh(e) {
      return e === "$100vh" ? "var(--chakra-vh)" : e;
    },
    px(e) {
      if (e == null) return e;
      const { unitless: t } = L4(e);
      return t || typeof e == "number" ? `${e}px` : e;
    },
    fraction(e) {
      return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
    },
    float(e, t) {
      const n = { left: "right", right: "left" };
      return t.direction === "rtl" ? n[e] : e;
    },
    degree(e) {
      if (z4(e) || e == null) return e;
      const t = typeof e == "string" && !e.endsWith("deg");
      return typeof e == "number" || t ? `${e}deg` : e;
    },
    gradient: O4,
    blur: En("blur"),
    opacity: En("opacity"),
    brightness: En("brightness"),
    contrast: En("contrast"),
    dropShadow: En("drop-shadow"),
    grayscale: En("grayscale"),
    hueRotate: En("hue-rotate"),
    invert: En("invert"),
    saturate: En("saturate"),
    sepia: En("sepia"),
    bgImage(e) {
      return e == null || yp(e) || vp.has(e) ? e : `url(${e})`;
    },
    outline(e) {
      const t = String(e) === "0" || String(e) === "none";
      return e !== null && t
        ? { outline: "2px solid transparent", outlineOffset: "2px" }
        : { outline: e };
    },
    flexDirection(e) {
      var t;
      const { space: n, divide: r } = (t = A4[e]) != null ? t : {},
        o = { flexDirection: e };
      return n && (o[n] = 1), r && (o[r] = 1), o;
    },
  },
  E = {
    borderWidths: Qt("borderWidths"),
    borderStyles: Qt("borderStyles"),
    colors: Qt("colors"),
    borders: Qt("borders"),
    gradients: Qt("gradients", ue.gradient),
    radii: Qt("radii", ue.px),
    space: Qt("space", gl(ue.vh, ue.px)),
    spaceT: Qt("space", gl(ue.vh, ue.px)),
    degreeT(e) {
      return { property: e, transform: ue.degree };
    },
    prop(e, t, n) {
      return {
        property: e,
        scale: t,
        ...(t && { transform: am({ scale: t, transform: n }) }),
      };
    },
    propT(e, t) {
      return { property: e, transform: t };
    },
    sizes: Qt("sizes", gl(ue.vh, ue.px)),
    sizesT: Qt("sizes", gl(ue.vh, ue.fraction)),
    shadows: Qt("shadows"),
    logical: k4,
    blur: Qt("blur", ue.blur),
  },
  Wl = {
    background: E.colors("background"),
    backgroundColor: E.colors("backgroundColor"),
    backgroundImage: E.gradients("backgroundImage"),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: ue.bgClip },
    bgSize: E.prop("backgroundSize"),
    bgPosition: E.prop("backgroundPosition"),
    bg: E.colors("background"),
    bgColor: E.colors("backgroundColor"),
    bgPos: E.prop("backgroundPosition"),
    bgRepeat: E.prop("backgroundRepeat"),
    bgAttachment: E.prop("backgroundAttachment"),
    bgGradient: E.gradients("backgroundImage"),
    bgClip: { transform: ue.bgClip },
  };
Object.assign(Wl, { bgImage: Wl.backgroundImage, bgImg: Wl.backgroundImage });
var ce = {
  border: E.borders("border"),
  borderWidth: E.borderWidths("borderWidth"),
  borderStyle: E.borderStyles("borderStyle"),
  borderColor: E.colors("borderColor"),
  borderRadius: E.radii("borderRadius"),
  borderTop: E.borders("borderTop"),
  borderBlockStart: E.borders("borderBlockStart"),
  borderTopLeftRadius: E.radii("borderTopLeftRadius"),
  borderStartStartRadius: E.logical({
    scale: "radii",
    property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
  }),
  borderEndStartRadius: E.logical({
    scale: "radii",
    property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" },
  }),
  borderTopRightRadius: E.radii("borderTopRightRadius"),
  borderStartEndRadius: E.logical({
    scale: "radii",
    property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
  }),
  borderEndEndRadius: E.logical({
    scale: "radii",
    property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" },
  }),
  borderRight: E.borders("borderRight"),
  borderInlineEnd: E.borders("borderInlineEnd"),
  borderBottom: E.borders("borderBottom"),
  borderBlockEnd: E.borders("borderBlockEnd"),
  borderBottomLeftRadius: E.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: E.radii("borderBottomRightRadius"),
  borderLeft: E.borders("borderLeft"),
  borderInlineStart: { property: "borderInlineStart", scale: "borders" },
  borderInlineStartRadius: E.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
    },
  }),
  borderInlineEndRadius: E.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    },
  }),
  borderX: E.borders(["borderLeft", "borderRight"]),
  borderInline: E.borders("borderInline"),
  borderY: E.borders(["borderTop", "borderBottom"]),
  borderBlock: E.borders("borderBlock"),
  borderTopWidth: E.borderWidths("borderTopWidth"),
  borderBlockStartWidth: E.borderWidths("borderBlockStartWidth"),
  borderTopColor: E.colors("borderTopColor"),
  borderBlockStartColor: E.colors("borderBlockStartColor"),
  borderTopStyle: E.borderStyles("borderTopStyle"),
  borderBlockStartStyle: E.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: E.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: E.borderWidths("borderBlockEndWidth"),
  borderBottomColor: E.colors("borderBottomColor"),
  borderBlockEndColor: E.colors("borderBlockEndColor"),
  borderBottomStyle: E.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: E.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: E.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: E.borderWidths("borderInlineStartWidth"),
  borderLeftColor: E.colors("borderLeftColor"),
  borderInlineStartColor: E.colors("borderInlineStartColor"),
  borderLeftStyle: E.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: E.borderStyles("borderInlineStartStyle"),
  borderRightWidth: E.borderWidths("borderRightWidth"),
  borderInlineEndWidth: E.borderWidths("borderInlineEndWidth"),
  borderRightColor: E.colors("borderRightColor"),
  borderInlineEndColor: E.colors("borderInlineEndColor"),
  borderRightStyle: E.borderStyles("borderRightStyle"),
  borderInlineEndStyle: E.borderStyles("borderInlineEndStyle"),
  borderTopRadius: E.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: E.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ]),
  borderLeftRadius: E.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: E.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius",
  ]),
};
Object.assign(ce, {
  rounded: ce.borderRadius,
  roundedTop: ce.borderTopRadius,
  roundedTopLeft: ce.borderTopLeftRadius,
  roundedTopRight: ce.borderTopRightRadius,
  roundedTopStart: ce.borderStartStartRadius,
  roundedTopEnd: ce.borderStartEndRadius,
  roundedBottom: ce.borderBottomRadius,
  roundedBottomLeft: ce.borderBottomLeftRadius,
  roundedBottomRight: ce.borderBottomRightRadius,
  roundedBottomStart: ce.borderEndStartRadius,
  roundedBottomEnd: ce.borderEndEndRadius,
  roundedLeft: ce.borderLeftRadius,
  roundedRight: ce.borderRightRadius,
  roundedStart: ce.borderInlineStartRadius,
  roundedEnd: ce.borderInlineEndRadius,
  borderStart: ce.borderInlineStart,
  borderEnd: ce.borderInlineEnd,
  borderTopStartRadius: ce.borderStartStartRadius,
  borderTopEndRadius: ce.borderStartEndRadius,
  borderBottomStartRadius: ce.borderEndStartRadius,
  borderBottomEndRadius: ce.borderEndEndRadius,
  borderStartRadius: ce.borderInlineStartRadius,
  borderEndRadius: ce.borderInlineEndRadius,
  borderStartWidth: ce.borderInlineStartWidth,
  borderEndWidth: ce.borderInlineEndWidth,
  borderStartColor: ce.borderInlineStartColor,
  borderEndColor: ce.borderInlineEndColor,
  borderStartStyle: ce.borderInlineStartStyle,
  borderEndStyle: ce.borderInlineEndStyle,
});
var I4 = {
    color: E.colors("color"),
    textColor: E.colors("color"),
    fill: E.colors("fill"),
    stroke: E.colors("stroke"),
  },
  bp = {
    boxShadow: E.shadows("boxShadow"),
    mixBlendMode: !0,
    blendMode: E.prop("mixBlendMode"),
    backgroundBlendMode: !0,
    bgBlendMode: E.prop("backgroundBlendMode"),
    opacity: !0,
  };
Object.assign(bp, { shadow: bp.boxShadow });
var D4 = {
    filter: { transform: ue.filter },
    blur: E.blur("--chakra-blur"),
    brightness: E.propT("--chakra-brightness", ue.brightness),
    contrast: E.propT("--chakra-contrast", ue.contrast),
    hueRotate: E.degreeT("--chakra-hue-rotate"),
    invert: E.propT("--chakra-invert", ue.invert),
    saturate: E.propT("--chakra-saturate", ue.saturate),
    dropShadow: E.propT("--chakra-drop-shadow", ue.dropShadow),
    backdropFilter: { transform: ue.backdropFilter },
    backdropBlur: E.blur("--chakra-backdrop-blur"),
    backdropBrightness: E.propT("--chakra-backdrop-brightness", ue.brightness),
    backdropContrast: E.propT("--chakra-backdrop-contrast", ue.contrast),
    backdropHueRotate: E.degreeT("--chakra-backdrop-hue-rotate"),
    backdropInvert: E.propT("--chakra-backdrop-invert", ue.invert),
    backdropSaturate: E.propT("--chakra-backdrop-saturate", ue.saturate),
  },
  zu = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: ue.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: E.sizes("flexBasis"),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: E.space("gap"),
    rowGap: E.space("rowGap"),
    columnGap: E.space("columnGap"),
  };
Object.assign(zu, { flexDir: zu.flexDirection });
var pS = {
    gridGap: E.space("gridGap"),
    gridColumnGap: E.space("gridColumnGap"),
    gridRowGap: E.space("gridRowGap"),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  j4 = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: ue.outline },
    outlineOffset: !0,
    outlineColor: E.colors("outlineColor"),
  },
  Jt = {
    width: E.sizesT("width"),
    inlineSize: E.sizesT("inlineSize"),
    height: E.sizes("height"),
    blockSize: E.sizes("blockSize"),
    boxSize: E.sizes(["width", "height"]),
    minWidth: E.sizes("minWidth"),
    minInlineSize: E.sizes("minInlineSize"),
    minHeight: E.sizes("minHeight"),
    minBlockSize: E.sizes("minBlockSize"),
    maxWidth: E.sizes("maxWidth"),
    maxInlineSize: E.sizes("maxInlineSize"),
    maxHeight: E.sizes("maxHeight"),
    maxBlockSize: E.sizes("maxBlockSize"),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    aspectRatio: !0,
    hideFrom: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, r, o;
        return {
          [`@media screen and (min-width: ${
            (o =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r.minW) != null
              ? o
              : e
          })`]: { display: "none" },
        };
      },
    },
    hideBelow: {
      scale: "breakpoints",
      transform: (e, t) => {
        var n, r, o;
        return {
          [`@media screen and (max-width: ${
            (o =
              (r = (n = t.__breakpoints) == null ? void 0 : n.get(e)) == null
                ? void 0
                : r._minW) != null
              ? o
              : e
          })`]: { display: "none" },
        };
      },
    },
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: E.propT("float", ue.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign(Jt, {
  w: Jt.width,
  h: Jt.height,
  minW: Jt.minWidth,
  maxW: Jt.maxWidth,
  minH: Jt.minHeight,
  maxH: Jt.maxHeight,
  overscroll: Jt.overscrollBehavior,
  overscrollX: Jt.overscrollBehaviorX,
  overscrollY: Jt.overscrollBehaviorY,
});
var F4 = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: E.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: E.prop("listStyleImage"),
};
function B4(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
var N4 = (e) => {
    const t = new WeakMap();
    return (r, o, i, s) => {
      if (typeof r > "u") return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const a = t.get(r);
      if (a.has(o)) return a.get(o);
      const l = e(r, o, i, s);
      return a.set(o, l), l;
    };
  },
  V4 = N4(B4),
  W4 = {
    border: "0px",
    clip: "rect(0, 0, 0, 0)",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  H4 = {
    position: "static",
    width: "auto",
    height: "auto",
    clip: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
  },
  Dd = (e, t, n) => {
    const r = {},
      o = V4(e, t, {});
    for (const i in o) (i in n && n[i] != null) || (r[i] = o[i]);
    return r;
  },
  U4 = {
    srOnly: {
      transform(e) {
        return e === !0 ? W4 : e === "focusable" ? H4 : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: (e, t, n) => Dd(t, `layerStyles.${e}`, n),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, n) => Dd(t, `textStyles.${e}`, n),
    },
    apply: { processResult: !0, transform: (e, t, n) => Dd(t, e, n) },
  },
  Ms = {
    position: !0,
    pos: E.prop("position"),
    zIndex: E.prop("zIndex", "zIndices"),
    inset: E.spaceT("inset"),
    insetX: E.spaceT(["left", "right"]),
    insetInline: E.spaceT("insetInline"),
    insetY: E.spaceT(["top", "bottom"]),
    insetBlock: E.spaceT("insetBlock"),
    top: E.spaceT("top"),
    insetBlockStart: E.spaceT("insetBlockStart"),
    bottom: E.spaceT("bottom"),
    insetBlockEnd: E.spaceT("insetBlockEnd"),
    left: E.spaceT("left"),
    insetInlineStart: E.logical({
      scale: "space",
      property: { ltr: "left", rtl: "right" },
    }),
    right: E.spaceT("right"),
    insetInlineEnd: E.logical({
      scale: "space",
      property: { ltr: "right", rtl: "left" },
    }),
  };
Object.assign(Ms, {
  insetStart: Ms.insetInlineStart,
  insetEnd: Ms.insetInlineEnd,
});
var G4 = {
    ring: { transform: ue.ring },
    ringColor: E.colors("--chakra-ring-color"),
    ringOffset: E.prop("--chakra-ring-offset-width"),
    ringOffsetColor: E.colors("--chakra-ring-offset-color"),
    ringInset: E.prop("--chakra-ring-inset"),
  },
  Ee = {
    margin: E.spaceT("margin"),
    marginTop: E.spaceT("marginTop"),
    marginBlockStart: E.spaceT("marginBlockStart"),
    marginRight: E.spaceT("marginRight"),
    marginInlineEnd: E.spaceT("marginInlineEnd"),
    marginBottom: E.spaceT("marginBottom"),
    marginBlockEnd: E.spaceT("marginBlockEnd"),
    marginLeft: E.spaceT("marginLeft"),
    marginInlineStart: E.spaceT("marginInlineStart"),
    marginX: E.spaceT(["marginInlineStart", "marginInlineEnd"]),
    marginInline: E.spaceT("marginInline"),
    marginY: E.spaceT(["marginTop", "marginBottom"]),
    marginBlock: E.spaceT("marginBlock"),
    padding: E.space("padding"),
    paddingTop: E.space("paddingTop"),
    paddingBlockStart: E.space("paddingBlockStart"),
    paddingRight: E.space("paddingRight"),
    paddingBottom: E.space("paddingBottom"),
    paddingBlockEnd: E.space("paddingBlockEnd"),
    paddingLeft: E.space("paddingLeft"),
    paddingInlineStart: E.space("paddingInlineStart"),
    paddingInlineEnd: E.space("paddingInlineEnd"),
    paddingX: E.space(["paddingInlineStart", "paddingInlineEnd"]),
    paddingInline: E.space("paddingInline"),
    paddingY: E.space(["paddingTop", "paddingBottom"]),
    paddingBlock: E.space("paddingBlock"),
  };
Object.assign(Ee, {
  m: Ee.margin,
  mt: Ee.marginTop,
  mr: Ee.marginRight,
  me: Ee.marginInlineEnd,
  marginEnd: Ee.marginInlineEnd,
  mb: Ee.marginBottom,
  ml: Ee.marginLeft,
  ms: Ee.marginInlineStart,
  marginStart: Ee.marginInlineStart,
  mx: Ee.marginX,
  my: Ee.marginY,
  p: Ee.padding,
  pt: Ee.paddingTop,
  py: Ee.paddingY,
  px: Ee.paddingX,
  pb: Ee.paddingBottom,
  pl: Ee.paddingLeft,
  ps: Ee.paddingInlineStart,
  paddingStart: Ee.paddingInlineStart,
  pr: Ee.paddingRight,
  pe: Ee.paddingInlineEnd,
  paddingEnd: Ee.paddingInlineEnd,
});
var K4 = {
    textDecorationColor: E.colors("textDecorationColor"),
    textDecoration: !0,
    textDecor: { property: "textDecoration" },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: E.shadows("textShadow"),
  },
  q4 = {
    clipPath: !0,
    transform: E.propT("transform", ue.transform),
    transformOrigin: !0,
    translateX: E.spaceT("--chakra-translate-x"),
    translateY: E.spaceT("--chakra-translate-y"),
    skewX: E.degreeT("--chakra-skew-x"),
    skewY: E.degreeT("--chakra-skew-y"),
    scaleX: E.prop("--chakra-scale-x"),
    scaleY: E.prop("--chakra-scale-y"),
    scale: E.prop(["--chakra-scale-x", "--chakra-scale-y"]),
    rotate: E.degreeT("--chakra-rotate"),
  },
  Y4 = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: E.prop("transitionDuration", "transition.duration"),
    transitionProperty: E.prop("transitionProperty", "transition.property"),
    transitionTimingFunction: E.prop(
      "transitionTimingFunction",
      "transition.easing"
    ),
  },
  X4 = {
    fontFamily: E.prop("fontFamily", "fonts"),
    fontSize: E.prop("fontSize", "fontSizes", ue.px),
    fontWeight: E.prop("fontWeight", "fontWeights"),
    lineHeight: E.prop("lineHeight", "lineHeights"),
    letterSpacing: E.prop("letterSpacing", "letterSpacings"),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform(e) {
        if (e === !0)
          return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          };
      },
    },
    noOfLines: {
      static: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "var(--chakra-line-clamp)",
      },
      property: "--chakra-line-clamp",
    },
  },
  Q4 = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: E.spaceT("scrollMargin"),
    scrollMarginTop: E.spaceT("scrollMarginTop"),
    scrollMarginBottom: E.spaceT("scrollMarginBottom"),
    scrollMarginLeft: E.spaceT("scrollMarginLeft"),
    scrollMarginRight: E.spaceT("scrollMarginRight"),
    scrollMarginX: E.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
    scrollMarginY: E.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
    scrollPadding: E.spaceT("scrollPadding"),
    scrollPaddingTop: E.spaceT("scrollPaddingTop"),
    scrollPaddingBottom: E.spaceT("scrollPaddingBottom"),
    scrollPaddingLeft: E.spaceT("scrollPaddingLeft"),
    scrollPaddingRight: E.spaceT("scrollPaddingRight"),
    scrollPaddingX: E.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
    scrollPaddingY: E.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
  };
function hS(e) {
  return _t(e) && e.reference ? e.reference : String(e);
}
var Tc = (e, ...t) => t.map(hS).join(` ${e} `).replace(/calc/g, ""),
  Yg = (...e) => `calc(${Tc("+", ...e)})`,
  Xg = (...e) => `calc(${Tc("-", ...e)})`,
  xp = (...e) => `calc(${Tc("*", ...e)})`,
  Qg = (...e) => `calc(${Tc("/", ...e)})`,
  Zg = (e) => {
    const t = hS(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : xp(t, -1);
  },
  uo = Object.assign(
    (e) => ({
      add: (...t) => uo(Yg(e, ...t)),
      subtract: (...t) => uo(Xg(e, ...t)),
      multiply: (...t) => uo(xp(e, ...t)),
      divide: (...t) => uo(Qg(e, ...t)),
      negate: () => uo(Zg(e)),
      toString: () => e.toString(),
    }),
    { add: Yg, subtract: Xg, multiply: xp, divide: Qg, negate: Zg }
  );
function Z4(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function J4(e) {
  const t = Z4(e.toString());
  return tP(eP(t));
}
function eP(e) {
  return e.includes("\\.")
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? e.replace(".", "\\.")
    : e;
}
function tP(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function nP(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function rP(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function oP(e, t = "") {
  return J4(`--${nP(e, t)}`);
}
function W(e, t, n) {
  const r = oP(e, n);
  return { variable: r, reference: rP(r, t) };
}
function iP(e, t) {
  const n = {};
  for (const r of t) {
    if (Array.isArray(r)) {
      const [o, i] = r;
      n[o] = W(`${e}-${o}`, i);
      continue;
    }
    n[r] = W(`${e}-${r}`);
  }
  return n;
}
function sP(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function aP(e) {
  const t = parseFloat(e.toString()),
    n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function Sp(e) {
  if (e == null) return e;
  const { unitless: t } = aP(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var mS = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  lm = (e) => Object.fromEntries(Object.entries(e).sort(mS));
function Jg(e) {
  const t = lm(e);
  return Object.assign(Object.values(t), t);
}
function lP(e) {
  const t = Object.keys(lm(e));
  return new Set(t);
}
function ev(e) {
  var t;
  if (!e) return e;
  e = (t = Sp(e)) != null ? t : e;
  const n = -0.02;
  return typeof e == "number"
    ? `${e + n}`
    : e.replace(/(\d+\.?\d*)/u, (r) => `${parseFloat(r) + n}`);
}
function gs(e, t) {
  const n = ["@media screen"];
  return (
    e && n.push("and", `(min-width: ${Sp(e)})`),
    t && n.push("and", `(max-width: ${Sp(t)})`),
    n.join(" ")
  );
}
function uP(e) {
  var t;
  if (!e) return null;
  e.base = (t = e.base) != null ? t : "0px";
  const n = Jg(e),
    r = Object.entries(e)
      .sort(mS)
      .map(([s, a], l, u) => {
        var c;
        let [, d] = (c = u[l + 1]) != null ? c : [];
        return (
          (d = parseFloat(d) > 0 ? ev(d) : void 0),
          {
            _minW: ev(a),
            breakpoint: s,
            minW: a,
            maxW: d,
            maxWQuery: gs(null, d),
            minWQuery: gs(a),
            minMaxQuery: gs(a, d),
          }
        );
      }),
    o = lP(e),
    i = Array.from(o.values());
  return {
    keys: o,
    normalized: n,
    isResponsive(s) {
      const a = Object.keys(s);
      return a.length > 0 && a.every((l) => o.has(l));
    },
    asObject: lm(e),
    asArray: Jg(e),
    details: r,
    get(s) {
      return r.find((a) => a.breakpoint === s);
    },
    media: [null, ...n.map((s) => gs(s)).slice(1)],
    toArrayValue(s) {
      if (!_t(s)) throw new Error("toArrayValue: value must be an object");
      const a = i.map((l) => {
        var u;
        return (u = s[l]) != null ? u : null;
      });
      for (; sP(a) === null; ) a.pop();
      return a;
    },
    toObjectValue(s) {
      if (!Array.isArray(s))
        throw new Error("toObjectValue: value must be an array");
      return s.reduce((a, l, u) => {
        const c = i[u];
        return c != null && l != null && (a[c] = l), a;
      }, {});
    },
  };
}
var Je = {
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) =>
      `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  gr = (e) => gS((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
  Wn = (e) => gS((t) => e(t, "~ &"), "[data-peer]", ".peer"),
  gS = (e, ...t) => t.map(e).join(", "),
  Ac = {
    _hover: "&:hover, &[data-hover]",
    _active: "&:active, &[data-active]",
    _focus: "&:focus, &[data-focus]",
    _highlighted: "&[data-highlighted]",
    _focusWithin: "&:focus-within",
    _focusVisible: "&:focus-visible, &[data-focus-visible]",
    _disabled:
      "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
    _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
    _before: "&::before",
    _after: "&::after",
    _empty: "&:empty",
    _expanded: "&[aria-expanded=true], &[data-expanded]",
    _checked: "&[aria-checked=true], &[data-checked]",
    _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
    _pressed: "&[aria-pressed=true], &[data-pressed]",
    _invalid: "&[aria-invalid=true], &[data-invalid]",
    _valid: "&[data-valid], &[data-state=valid]",
    _loading: "&[data-loading], &[aria-busy=true]",
    _selected: "&[aria-selected=true], &[data-selected]",
    _hidden: "&[hidden], &[data-hidden]",
    _autofill: "&:-webkit-autofill",
    _even: "&:nth-of-type(even)",
    _odd: "&:nth-of-type(odd)",
    _first: "&:first-of-type",
    _firstLetter: "&::first-letter",
    _last: "&:last-of-type",
    _notFirst: "&:not(:first-of-type)",
    _notLast: "&:not(:last-of-type)",
    _visited: "&:visited",
    _activeLink: "&[aria-current=page]",
    _activeStep: "&[aria-current=step]",
    _indeterminate:
      "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
    _groupHover: gr(Je.hover),
    _peerHover: Wn(Je.hover),
    _groupFocus: gr(Je.focus),
    _peerFocus: Wn(Je.focus),
    _groupFocusVisible: gr(Je.focusVisible),
    _peerFocusVisible: Wn(Je.focusVisible),
    _groupActive: gr(Je.active),
    _peerActive: Wn(Je.active),
    _groupDisabled: gr(Je.disabled),
    _peerDisabled: Wn(Je.disabled),
    _groupInvalid: gr(Je.invalid),
    _peerInvalid: Wn(Je.invalid),
    _groupChecked: gr(Je.checked),
    _peerChecked: Wn(Je.checked),
    _groupFocusWithin: gr(Je.focusWithin),
    _peerFocusWithin: Wn(Je.focusWithin),
    _peerPlaceholderShown: Wn(Je.placeholderShown),
    _placeholder: "&::placeholder",
    _placeholderShown: "&:placeholder-shown",
    _fullScreen: "&:fullscreen",
    _selection: "&::selection",
    _rtl: "[dir=rtl] &, &[dir=rtl]",
    _ltr: "[dir=ltr] &, &[dir=ltr]",
    _mediaDark: "@media (prefers-color-scheme: dark)",
    _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
    _dark:
      ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
    _light:
      ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
    _horizontal: "&[data-orientation=horizontal]",
    _vertical: "&[data-orientation=vertical]",
  },
  vS = Object.keys(Ac);
function tv(e, t) {
  return W(String(e).replace(/\./g, "-"), void 0, t);
}
function cP(e, t) {
  let n = {};
  const r = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: s, value: a } = i,
      { variable: l, reference: u } = tv(
        o,
        t == null ? void 0 : t.cssVarPrefix
      );
    if (!s) {
      if (o.startsWith("space")) {
        const f = o.split("."),
          [p, ...m] = f,
          y = `${p}.-${m.join(".")}`,
          w = uo.negate(a),
          g = uo.negate(u);
        r[y] = { value: w, var: l, varRef: g };
      }
      (n[l] = a), (r[o] = { value: a, var: l, varRef: u });
      continue;
    }
    const c = (f) => {
        const m = [String(o).split(".")[0], f].join(".");
        if (!e[m]) return f;
        const { reference: w } = tv(m, t == null ? void 0 : t.cssVarPrefix);
        return w;
      },
      d = _t(a) ? a : { default: a };
    (n = rn(
      n,
      Object.entries(d).reduce((f, [p, m]) => {
        var y, w;
        if (!m) return f;
        const g = c(`${m}`);
        if (p === "default") return (f[l] = g), f;
        const h = (w = (y = Ac) == null ? void 0 : y[p]) != null ? w : p;
        return (f[h] = { [l]: g }), f;
      }, {})
    )),
      (r[o] = { value: u, var: l, varRef: u });
  }
  return { cssVars: n, cssMap: r };
}
function dP(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
function fP(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function pP(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function nv(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  function i(s, a = []) {
    var l;
    if (pP(s) || Array.isArray(s)) {
      const u = {};
      for (const [c, d] of Object.entries(s)) {
        const f = (l = o == null ? void 0 : o(c)) != null ? l : c,
          p = [...a, f];
        if (r != null && r(s, p)) return t(s, a);
        u[f] = i(d, p);
      }
      return u;
    }
    return t(s, a);
  }
  return i(e);
}
var hP = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints",
];
function mP(e) {
  return fP(e, hP);
}
function gP(e) {
  return e.semanticTokens;
}
function vP(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
  return o;
}
var yP = (e) => vS.includes(e) || e === "default";
function bP({ tokens: e, semanticTokens: t }) {
  const n = {};
  return (
    nv(e, (r, o) => {
      r != null && (n[o.join(".")] = { isSemantic: !1, value: r });
    }),
    nv(
      t,
      (r, o) => {
        r != null && (n[o.join(".")] = { isSemantic: !0, value: r });
      },
      { stop: (r) => Object.keys(r).every(yP) }
    ),
    n
  );
}
function xP(e) {
  var t;
  const n = vP(e),
    r = mP(n),
    o = gP(n),
    i = bP({ tokens: r, semanticTokens: o }),
    s = (t = n.config) == null ? void 0 : t.cssVarPrefix,
    { cssMap: a, cssVars: l } = cP(i, { cssVarPrefix: s });
  return (
    Object.assign(n, {
      __cssVars: {
        ...{
          "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-ring-offset-width": "0px",
          "--chakra-ring-offset-color": "#fff",
          "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
          "--chakra-ring-offset-shadow": "0 0 #0000",
          "--chakra-ring-shadow": "0 0 #0000",
          "--chakra-space-x-reverse": "0",
          "--chakra-space-y-reverse": "0",
        },
        ...l,
      },
      __cssMap: a,
      __breakpoints: uP(n.breakpoints),
    }),
    n
  );
}
var um = rn(
  {},
  Wl,
  ce,
  I4,
  zu,
  Jt,
  D4,
  G4,
  j4,
  pS,
  U4,
  Ms,
  bp,
  Ee,
  Q4,
  X4,
  K4,
  q4,
  F4,
  Y4
);
Object.assign({}, Ee, Jt, zu, pS, Ms);
var SP = [...Object.keys(um), ...vS],
  wP = { ...um, ...Ac },
  kP = (e) => e in wP,
  CP = (e) => (t) => {
    if (!t.__breakpoints) return e;
    const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints,
      i = {};
    for (const s in e) {
      let a = Xn(e[s], t);
      if (a == null) continue;
      if (((a = _t(a) && n(a) ? r(a) : a), !Array.isArray(a))) {
        i[s] = a;
        continue;
      }
      const l = a.slice(0, o.length).length;
      for (let u = 0; u < l; u += 1) {
        const c = o == null ? void 0 : o[u];
        if (!c) {
          i[s] = a[u];
          continue;
        }
        (i[c] = i[c] || {}), a[u] != null && (i[c][s] = a[u]);
      }
    }
    return i;
  };
function EP(e) {
  const t = [];
  let n = "",
    r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "("
      ? ((r = !0), (n += i))
      : i === ")"
      ? ((r = !1), (n += i))
      : i === "," && !r
      ? (t.push(n), (n = ""))
      : (n += i);
  }
  return (n = n.trim()), n && t.push(n), t;
}
function _P(e) {
  return /^var\(--.+\)$/.test(e);
}
var PP = (e, t) => e.startsWith("--") && typeof t == "string" && !_P(t),
  TP = (e, t) => {
    var n, r;
    if (t == null) return t;
    const o = (l) => {
        var u, c;
        return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null
          ? void 0
          : c.varRef;
      },
      i = (l) => {
        var u;
        return (u = o(l)) != null ? u : l;
      },
      [s, a] = EP(t);
    return (t = (r = (n = o(s)) != null ? n : i(a)) != null ? r : i(t)), t;
  };
function AP(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e,
    o = (i, s = !1) => {
      var a, l, u;
      const c = Xn(i, r),
        d = CP(c)(r);
      let f = {};
      for (let p in d) {
        const m = d[p];
        let y = Xn(m, r);
        p in n && (p = n[p]), PP(p, y) && (y = TP(r, y));
        let w = t[p];
        if ((w === !0 && (w = { property: p }), _t(y))) {
          (f[p] = (a = f[p]) != null ? a : {}), (f[p] = rn({}, f[p], o(y, !0)));
          continue;
        }
        let g =
          (u =
            (l = w == null ? void 0 : w.transform) == null
              ? void 0
              : l.call(w, y, r, c)) != null
            ? u
            : y;
        g = w != null && w.processResult ? o(g, !0) : g;
        const h = Xn(w == null ? void 0 : w.property, r);
        if (!s && w != null && w.static) {
          const v = Xn(w.static, r);
          f = rn({}, f, v);
        }
        if (h && Array.isArray(h)) {
          for (const v of h) f[v] = g;
          continue;
        }
        if (h) {
          h === "&" && _t(g) ? (f = rn({}, f, g)) : (f[h] = g);
          continue;
        }
        if (_t(g)) {
          f = rn({}, f, g);
          continue;
        }
        f[p] = g;
      }
      return f;
    };
  return o;
}
var yS = (e) => (t) => AP({ theme: t, pseudos: Ac, configs: um })(e);
function we(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    },
  };
}
function RP(e, t) {
  if (Array.isArray(e)) return e;
  if (_t(e)) return t(e);
  if (e != null) return [e];
}
function $P(e, t) {
  for (let n = t + 1; n < e.length; n++) if (e[n] != null) return n;
  return -1;
}
function MP(e) {
  const t = e.__breakpoints;
  return function (r, o, i, s) {
    var a, l;
    if (!t) return;
    const u = {},
      c = RP(i, t.toArrayValue);
    if (!c) return u;
    const d = c.length,
      f = d === 1,
      p = !!r.parts;
    for (let m = 0; m < d; m++) {
      const y = t.details[m],
        w = t.details[$P(c, m)],
        g = gs(y.minW, w == null ? void 0 : w._minW),
        h = Xn((a = r[o]) == null ? void 0 : a[c[m]], s);
      if (h) {
        if (p) {
          (l = r.parts) == null ||
            l.forEach((v) => {
              rn(u, { [v]: f ? h[v] : { [g]: h[v] } });
            });
          continue;
        }
        if (!p) {
          f ? rn(u, h) : (u[g] = h);
          continue;
        }
        u[g] = h;
      }
    }
    return u;
  };
}
function OP(e) {
  return (t) => {
    var n;
    const { variant: r, size: o, theme: i } = t,
      s = MP(i);
    return rn(
      {},
      Xn((n = e.baseStyle) != null ? n : {}, t),
      s(e, "sizes", o, t),
      s(e, "variants", r, t)
    );
  };
}
function bt(e) {
  return dP(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var zP = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices",
];
function LP(e) {
  return _t(e)
    ? zP.every((t) => Object.prototype.hasOwnProperty.call(e, t))
    : !1;
}
var IP = {
    common:
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    colors: "background-color, border-color, color, fill, stroke",
    dimensions: "width, height",
    position: "left, right, top, bottom",
    background: "background-color, background-image, background-position",
  },
  DP = {
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  jP = {
    "ultra-fast": "50ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    "ultra-slow": "500ms",
  },
  FP = { property: IP, easing: DP, duration: jP },
  BP = FP,
  NP = {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  VP = NP,
  WP = {
    none: 0,
    "1px": "1px solid",
    "2px": "2px solid",
    "4px": "4px solid",
    "8px": "8px solid",
  },
  HP = WP,
  UP = {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  GP = UP,
  KP = {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#FFFFFF",
    whiteAlpha: {
      50: "rgba(255, 255, 255, 0.04)",
      100: "rgba(255, 255, 255, 0.06)",
      200: "rgba(255, 255, 255, 0.08)",
      300: "rgba(255, 255, 255, 0.16)",
      400: "rgba(255, 255, 255, 0.24)",
      500: "rgba(255, 255, 255, 0.36)",
      600: "rgba(255, 255, 255, 0.48)",
      700: "rgba(255, 255, 255, 0.64)",
      800: "rgba(255, 255, 255, 0.80)",
      900: "rgba(255, 255, 255, 0.92)",
    },
    blackAlpha: {
      50: "rgba(0, 0, 0, 0.04)",
      100: "rgba(0, 0, 0, 0.06)",
      200: "rgba(0, 0, 0, 0.08)",
      300: "rgba(0, 0, 0, 0.16)",
      400: "rgba(0, 0, 0, 0.24)",
      500: "rgba(0, 0, 0, 0.36)",
      600: "rgba(0, 0, 0, 0.48)",
      700: "rgba(0, 0, 0, 0.64)",
      800: "rgba(0, 0, 0, 0.80)",
      900: "rgba(0, 0, 0, 0.92)",
    },
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    red: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#E53E3E",
      600: "#C53030",
      700: "#9B2C2C",
      800: "#822727",
      900: "#63171B",
    },
    orange: {
      50: "#FFFAF0",
      100: "#FEEBC8",
      200: "#FBD38D",
      300: "#F6AD55",
      400: "#ED8936",
      500: "#DD6B20",
      600: "#C05621",
      700: "#9C4221",
      800: "#7B341E",
      900: "#652B19",
    },
    yellow: {
      50: "#FFFFF0",
      100: "#FEFCBF",
      200: "#FAF089",
      300: "#F6E05E",
      400: "#ECC94B",
      500: "#D69E2E",
      600: "#B7791F",
      700: "#975A16",
      800: "#744210",
      900: "#5F370E",
    },
    green: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: "#9AE6B4",
      300: "#68D391",
      400: "#48BB78",
      500: "#38A169",
      600: "#2F855A",
      700: "#276749",
      800: "#22543D",
      900: "#1C4532",
    },
    teal: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
    blue: {
      50: "#ebf8ff",
      100: "#bee3f8",
      200: "#90cdf4",
      300: "#63b3ed",
      400: "#4299e1",
      500: "#3182ce",
      600: "#2b6cb0",
      700: "#2c5282",
      800: "#2a4365",
      900: "#1A365D",
    },
    cyan: {
      50: "#EDFDFD",
      100: "#C4F1F9",
      200: "#9DECF9",
      300: "#76E4F7",
      400: "#0BC5EA",
      500: "#00B5D8",
      600: "#00A3C4",
      700: "#0987A0",
      800: "#086F83",
      900: "#065666",
    },
    purple: {
      50: "#FAF5FF",
      100: "#E9D8FD",
      200: "#D6BCFA",
      300: "#B794F4",
      400: "#9F7AEA",
      500: "#805AD5",
      600: "#6B46C1",
      700: "#553C9A",
      800: "#44337A",
      900: "#322659",
    },
    pink: {
      50: "#FFF5F7",
      100: "#FED7E2",
      200: "#FBB6CE",
      300: "#F687B3",
      400: "#ED64A6",
      500: "#D53F8C",
      600: "#B83280",
      700: "#97266D",
      800: "#702459",
      900: "#521B41",
    },
    linkedin: {
      50: "#E8F4F9",
      100: "#CFEDFB",
      200: "#9BDAF3",
      300: "#68C7EC",
      400: "#34B3E4",
      500: "#00A0DC",
      600: "#008CC9",
      700: "#0077B5",
      800: "#005E93",
      900: "#004471",
    },
    facebook: {
      50: "#E8F4F9",
      100: "#D9DEE9",
      200: "#B7C2DA",
      300: "#6482C0",
      400: "#4267B2",
      500: "#385898",
      600: "#314E89",
      700: "#29487D",
      800: "#223B67",
      900: "#1E355B",
    },
    messenger: {
      50: "#D0E6FF",
      100: "#B9DAFF",
      200: "#A2CDFF",
      300: "#7AB8FF",
      400: "#2E90FF",
      500: "#0078FF",
      600: "#0063D1",
      700: "#0052AC",
      800: "#003C7E",
      900: "#002C5C",
    },
    whatsapp: {
      50: "#dffeec",
      100: "#b9f5d0",
      200: "#90edb3",
      300: "#65e495",
      400: "#3cdd78",
      500: "#22c35e",
      600: "#179848",
      700: "#0c6c33",
      800: "#01421c",
      900: "#001803",
    },
    twitter: {
      50: "#E5F4FD",
      100: "#C8E9FB",
      200: "#A8DCFA",
      300: "#83CDF7",
      400: "#57BBF5",
      500: "#1DA1F2",
      600: "#1A94DA",
      700: "#1681BF",
      800: "#136B9E",
      900: "#0D4D71",
    },
    telegram: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
  },
  qP = KP,
  YP = {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  XP = YP,
  QP = {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
    "dark-lg":
      "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
  },
  ZP = QP,
  JP = {
    none: 0,
    sm: "4px",
    base: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  eT = JP,
  tT = {
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeights: {
      normal: "normal",
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      "3xs": "0.45rem",
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  bS = tT,
  xS = {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  nT = {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    prose: "60ch",
  },
  rT = { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
  oT = { ...xS, ...nT, container: rT },
  SS = oT,
  iT = {
    breakpoints: GP,
    zIndices: VP,
    radii: XP,
    blur: eT,
    colors: qP,
    ...bS,
    sizes: SS,
    shadows: ZP,
    space: xS,
    borders: HP,
    transition: BP,
  },
  { defineMultiStyleConfig: sT, definePartsStyle: vs } = we([
    "stepper",
    "step",
    "title",
    "description",
    "indicator",
    "separator",
    "icon",
    "number",
  ]),
  Gn = W("stepper-indicator-size"),
  ni = W("stepper-icon-size"),
  ri = W("stepper-title-font-size"),
  ys = W("stepper-description-font-size"),
  is = W("stepper-accent-color"),
  aT = vs(({ colorScheme: e }) => ({
    stepper: {
      display: "flex",
      justifyContent: "space-between",
      gap: "4",
      "&[data-orientation=vertical]": {
        flexDirection: "column",
        alignItems: "flex-start",
      },
      "&[data-orientation=horizontal]": {
        flexDirection: "row",
        alignItems: "center",
      },
      [is.variable]: `colors.${e}.500`,
      _dark: { [is.variable]: `colors.${e}.200` },
    },
    title: { fontSize: ri.reference, fontWeight: "medium" },
    description: { fontSize: ys.reference, color: "chakra-subtle-text" },
    number: { fontSize: ri.reference },
    step: {
      flexShrink: 0,
      position: "relative",
      display: "flex",
      gap: "2",
      "&[data-orientation=horizontal]": { alignItems: "center" },
      flex: "1",
      "&:last-of-type:not([data-stretch])": { flex: "initial" },
    },
    icon: { flexShrink: 0, width: ni.reference, height: ni.reference },
    indicator: {
      flexShrink: 0,
      borderRadius: "full",
      width: Gn.reference,
      height: Gn.reference,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&[data-status=active]": {
        borderWidth: "2px",
        borderColor: is.reference,
      },
      "&[data-status=complete]": {
        bg: is.reference,
        color: "chakra-inverse-text",
      },
      "&[data-status=incomplete]": { borderWidth: "2px" },
    },
    separator: {
      bg: "chakra-border-color",
      flex: "1",
      "&[data-status=complete]": { bg: is.reference },
      "&[data-orientation=horizontal]": {
        width: "100%",
        height: "2px",
        marginStart: "2",
      },
      "&[data-orientation=vertical]": {
        width: "2px",
        position: "absolute",
        height: "100%",
        maxHeight: `calc(100% - ${Gn.reference} - 8px)`,
        top: `calc(${Gn.reference} + 4px)`,
        insetStart: `calc(${Gn.reference} / 2 - 1px)`,
      },
    },
  })),
  lT = sT({
    baseStyle: aT,
    sizes: {
      xs: vs({
        stepper: {
          [Gn.variable]: "sizes.4",
          [ni.variable]: "sizes.3",
          [ri.variable]: "fontSizes.xs",
          [ys.variable]: "fontSizes.xs",
        },
      }),
      sm: vs({
        stepper: {
          [Gn.variable]: "sizes.6",
          [ni.variable]: "sizes.4",
          [ri.variable]: "fontSizes.sm",
          [ys.variable]: "fontSizes.xs",
        },
      }),
      md: vs({
        stepper: {
          [Gn.variable]: "sizes.8",
          [ni.variable]: "sizes.5",
          [ri.variable]: "fontSizes.md",
          [ys.variable]: "fontSizes.sm",
        },
      }),
      lg: vs({
        stepper: {
          [Gn.variable]: "sizes.10",
          [ni.variable]: "sizes.6",
          [ri.variable]: "fontSizes.lg",
          [ys.variable]: "fontSizes.md",
        },
      }),
    },
    defaultProps: { size: "md", colorScheme: "blue" },
  });
function me(e, t = {}) {
  let n = !1;
  function r() {
    if (!n) {
      n = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...c) {
    r();
    for (const d of c) t[d] = l(d);
    return me(e, t);
  }
  function i(...c) {
    for (const d of c) d in t || (t[d] = l(d));
    return me(e, t);
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.selector])
    );
  }
  function a() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.className])
    );
  }
  function l(c) {
    const p = `chakra-${(["container", "root"].includes(c ?? "") ? [e] : [e, c])
      .filter(Boolean)
      .join("__")}`;
    return { className: p, selector: `.${p}`, toString: () => c };
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: s,
    classnames: a,
    get keys() {
      return Object.keys(t);
    },
    __type: {},
  };
}
var uT = me("accordion")
    .parts("root", "container", "button", "panel")
    .extend("icon"),
  cT = me("alert")
    .parts("title", "description", "container")
    .extend("icon", "spinner"),
  dT = me("avatar")
    .parts("label", "badge", "container")
    .extend("excessLabel", "group"),
  fT = me("breadcrumb").parts("link", "item", "container").extend("separator");
me("button").parts();
var pT = me("checkbox").parts("control", "icon", "container").extend("label");
me("progress").parts("track", "filledTrack").extend("label");
var hT = me("drawer")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  mT = me("editable").parts("preview", "input", "textarea"),
  gT = me("form").parts("container", "requiredIndicator", "helperText"),
  vT = me("formError").parts("text", "icon"),
  yT = me("input").parts("addon", "field", "element", "group"),
  bT = me("list").parts("container", "item", "icon"),
  xT = me("menu")
    .parts("button", "list", "item")
    .extend("groupTitle", "icon", "command", "divider"),
  ST = me("modal")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  wT = me("numberinput").parts("root", "field", "stepperGroup", "stepper");
me("pininput").parts("field");
var kT = me("popover")
    .parts("content", "header", "body", "footer")
    .extend("popper", "arrow", "closeButton"),
  CT = me("progress").parts("label", "filledTrack", "track"),
  ET = me("radio").parts("container", "control", "label"),
  _T = me("select").parts("field", "icon"),
  PT = me("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
  TT = me("stat").parts("container", "label", "helpText", "number", "icon"),
  AT = me("switch").parts("container", "track", "thumb"),
  RT = me("table").parts(
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "tfoot",
    "caption"
  ),
  $T = me("tabs").parts(
    "root",
    "tab",
    "tablist",
    "tabpanel",
    "tabpanels",
    "indicator"
  ),
  MT = me("tag").parts("container", "label", "closeButton"),
  OT = me("card").parts("container", "header", "body", "footer");
function mo(e, t, n) {
  return Math.min(Math.max(e, n), t);
}
class zT extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var bs = zT;
function cm(e) {
  if (typeof e != "string") throw new bs(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let t = e.trim();
  t = VT.test(e) ? DT(e) : e;
  const n = jT.exec(t);
  if (n) {
    const s = Array.from(n).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(fa(a, 2), 16)),
      parseInt(fa(s[3] || "f", 2), 16) / 255,
    ];
  }
  const r = FT.exec(t);
  if (r) {
    const s = Array.from(r).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(a, 16)),
      parseInt(s[3] || "ff", 16) / 255,
    ];
  }
  const o = BT.exec(t);
  if (o) {
    const s = Array.from(o).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(a, 10)),
      parseFloat(s[3] || "1"),
    ];
  }
  const i = NT.exec(t);
  if (i) {
    const [s, a, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (mo(0, 100, a) !== a) throw new bs(e);
    if (mo(0, 100, l) !== l) throw new bs(e);
    return [...WT(s, a, l), Number.isNaN(u) ? 1 : u];
  }
  throw new bs(e);
}
function LT(e) {
  let t = 5381,
    n = e.length;
  for (; n; ) t = (t * 33) ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const rv = (e) => parseInt(e.replace(/_/g, ""), 36),
  IT =
    "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm"
      .split(" ")
      .reduce((e, t) => {
        const n = rv(t.substring(0, 3)),
          r = rv(t.substring(3)).toString(16);
        let o = "";
        for (let i = 0; i < 6 - r.length; i++) o += "0";
        return (e[n] = `${o}${r}`), e;
      }, {});
function DT(e) {
  const t = e.toLowerCase().trim(),
    n = IT[LT(t)];
  if (!n) throw new bs(e);
  return `#${n}`;
}
const fa = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(""),
  jT = new RegExp(`^#${fa("([a-f0-9])", 3)}([a-f0-9])?$`, "i"),
  FT = new RegExp(`^#${fa("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"),
  BT = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${fa(
      ",\\s*(\\d+)\\s*",
      2
    )}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    "i"
  ),
  NT =
    /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  VT = /^[a-z]+$/i,
  ov = (e) => Math.round(e * 255),
  WT = (e, t, n) => {
    let r = n / 100;
    if (t === 0) return [r, r, r].map(ov);
    const o = (((e % 360) + 360) % 360) / 60,
      i = (1 - Math.abs(2 * r - 1)) * (t / 100),
      s = i * (1 - Math.abs((o % 2) - 1));
    let a = 0,
      l = 0,
      u = 0;
    o >= 0 && o < 1
      ? ((a = i), (l = s))
      : o >= 1 && o < 2
      ? ((a = s), (l = i))
      : o >= 2 && o < 3
      ? ((l = i), (u = s))
      : o >= 3 && o < 4
      ? ((l = s), (u = i))
      : o >= 4 && o < 5
      ? ((a = s), (u = i))
      : o >= 5 && o < 6 && ((a = i), (u = s));
    const c = r - i / 2,
      d = a + c,
      f = l + c,
      p = u + c;
    return [d, f, p].map(ov);
  };
function HT(e, t, n, r) {
  return `rgba(${mo(0, 255, e).toFixed()}, ${mo(0, 255, t).toFixed()}, ${mo(
    0,
    255,
    n
  ).toFixed()}, ${parseFloat(mo(0, 1, r).toFixed(3))})`;
}
function UT(e, t) {
  const [n, r, o, i] = cm(e);
  return HT(n, r, o, i - t);
}
function GT(e) {
  const [t, n, r, o] = cm(e);
  let i = (s) => {
    const a = mo(0, 255, s).toString(16);
    return a.length === 1 ? `0${a}` : a;
  };
  return `#${i(t)}${i(n)}${i(r)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function KT(e, t, n, r, o) {
  for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
    e = e ? e[t[r]] : o;
  return e === o ? n : e;
}
var qT = (e) => Object.keys(e).length === 0,
  ht = (e, t, n) => {
    const r = KT(e, `colors.${t}`, t);
    try {
      return GT(r), r;
    } catch {
      return n ?? "#000000";
    }
  },
  YT = (e) => {
    const [t, n, r] = cm(e);
    return (t * 299 + n * 587 + r * 114) / 1e3;
  },
  XT = (e) => (t) => {
    const n = ht(t, e);
    return YT(n) < 128 ? "dark" : "light";
  },
  QT = (e) => (t) => XT(e)(t) === "dark",
  $i = (e, t) => (n) => {
    const r = ht(n, e);
    return UT(r, 1 - t);
  };
function iv(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`,
  };
}
var ZT = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, "0")}`;
function JT(e) {
  const t = ZT();
  return !e || qT(e)
    ? t
    : e.string && e.colors
    ? t3(e.string, e.colors)
    : e.string && !e.colors
    ? e3(e.string)
    : e.colors && !e.string
    ? n3(e.colors)
    : t;
}
function e3(e) {
  let t = 0;
  if (e.length === 0) return t.toString();
  for (let r = 0; r < e.length; r += 1)
    (t = e.charCodeAt(r) + ((t << 5) - t)), (t = t & t);
  let n = "#";
  for (let r = 0; r < 3; r += 1) {
    const o = (t >> (r * 8)) & 255;
    n += `00${o.toString(16)}`.substr(-2);
  }
  return n;
}
function t3(e, t) {
  let n = 0;
  if (e.length === 0) return t[0];
  for (let r = 0; r < e.length; r += 1)
    (n = e.charCodeAt(r) + ((n << 5) - n)), (n = n & n);
  return (n = ((n % t.length) + t.length) % t.length), t[n];
}
function n3(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function U(e, t) {
  return (n) => (n.colorMode === "dark" ? t : e);
}
function dm(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? (t === "vertical" ? n : r) : {};
}
function wS(e) {
  return _t(e) && e.reference ? e.reference : String(e);
}
var Rc = (e, ...t) => t.map(wS).join(` ${e} `).replace(/calc/g, ""),
  sv = (...e) => `calc(${Rc("+", ...e)})`,
  av = (...e) => `calc(${Rc("-", ...e)})`,
  wp = (...e) => `calc(${Rc("*", ...e)})`,
  lv = (...e) => `calc(${Rc("/", ...e)})`,
  uv = (e) => {
    const t = wS(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : wp(t, -1);
  },
  Kn = Object.assign(
    (e) => ({
      add: (...t) => Kn(sv(e, ...t)),
      subtract: (...t) => Kn(av(e, ...t)),
      multiply: (...t) => Kn(wp(e, ...t)),
      divide: (...t) => Kn(lv(e, ...t)),
      negate: () => Kn(uv(e)),
      toString: () => e.toString(),
    }),
    { add: sv, subtract: av, multiply: wp, divide: lv, negate: uv }
  );
function r3(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function o3(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function kS(e) {
  const t = o3(e.toString());
  return t.includes("\\.") ? e : r3(e) ? t.replace(".", "\\.") : e;
}
function i3(e, t = "") {
  return [t, kS(e)].filter(Boolean).join("-");
}
function s3(e, t) {
  return `var(${kS(e)}${t ? `, ${t}` : ""})`;
}
function a3(e, t = "") {
  return `--${i3(e, t)}`;
}
function Ke(e, t) {
  const n = a3(e, t == null ? void 0 : t.prefix);
  return { variable: n, reference: s3(n, l3(t == null ? void 0 : t.fallback)) };
}
function l3(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: u3, definePartsStyle: Hl } = we(AT.keys),
  Os = Ke("switch-track-width"),
  bo = Ke("switch-track-height"),
  jd = Ke("switch-track-diff"),
  c3 = Kn.subtract(Os, bo),
  kp = Ke("switch-thumb-x"),
  ss = Ke("switch-bg"),
  d3 = (e) => {
    const { colorScheme: t } = e;
    return {
      borderRadius: "full",
      p: "0.5",
      width: [Os.reference],
      height: [bo.reference],
      transitionProperty: "common",
      transitionDuration: "fast",
      [ss.variable]: "colors.gray.300",
      _dark: { [ss.variable]: "colors.whiteAlpha.400" },
      _focusVisible: { boxShadow: "outline" },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
      _checked: {
        [ss.variable]: `colors.${t}.500`,
        _dark: { [ss.variable]: `colors.${t}.200` },
      },
      bg: ss.reference,
    };
  },
  f3 = {
    bg: "white",
    transitionProperty: "transform",
    transitionDuration: "normal",
    borderRadius: "inherit",
    width: [bo.reference],
    height: [bo.reference],
    _checked: { transform: `translateX(${kp.reference})` },
  },
  p3 = Hl((e) => ({
    container: {
      [jd.variable]: c3,
      [kp.variable]: jd.reference,
      _rtl: { [kp.variable]: Kn(jd).negate().toString() },
    },
    track: d3(e),
    thumb: f3,
  })),
  h3 = {
    sm: Hl({
      container: { [Os.variable]: "1.375rem", [bo.variable]: "sizes.3" },
    }),
    md: Hl({
      container: { [Os.variable]: "1.875rem", [bo.variable]: "sizes.4" },
    }),
    lg: Hl({
      container: { [Os.variable]: "2.875rem", [bo.variable]: "sizes.6" },
    }),
  },
  m3 = u3({
    baseStyle: p3,
    sizes: h3,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: g3, definePartsStyle: bi } = we(RT.keys),
  v3 = bi({
    table: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
    },
    th: {
      fontFamily: "heading",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "wider",
      textAlign: "start",
    },
    td: { textAlign: "start" },
    caption: {
      mt: 4,
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "medium",
    },
  }),
  Lu = { "&[data-is-numeric=true]": { textAlign: "end" } },
  y3 = bi((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: U("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: U(`${t}.100`, `${t}.700`)(e),
        ...Lu,
      },
      td: {
        borderBottom: "1px",
        borderColor: U(`${t}.100`, `${t}.700`)(e),
        ...Lu,
      },
      caption: { color: U("gray.600", "gray.100")(e) },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  b3 = bi((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: U("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: U(`${t}.100`, `${t}.700`)(e),
        ...Lu,
      },
      td: {
        borderBottom: "1px",
        borderColor: U(`${t}.100`, `${t}.700`)(e),
        ...Lu,
      },
      caption: { color: U("gray.600", "gray.100")(e) },
      tbody: {
        tr: {
          "&:nth-of-type(odd)": {
            "th, td": {
              borderBottomWidth: "1px",
              borderColor: U(`${t}.100`, `${t}.700`)(e),
            },
            td: { background: U(`${t}.100`, `${t}.700`)(e) },
          },
        },
      },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  x3 = { simple: y3, striped: b3, unstyled: {} },
  S3 = {
    sm: bi({
      th: { px: "4", py: "1", lineHeight: "4", fontSize: "xs" },
      td: { px: "4", py: "2", fontSize: "sm", lineHeight: "4" },
      caption: { px: "4", py: "2", fontSize: "xs" },
    }),
    md: bi({
      th: { px: "6", py: "3", lineHeight: "4", fontSize: "xs" },
      td: { px: "6", py: "4", lineHeight: "5" },
      caption: { px: "6", py: "2", fontSize: "sm" },
    }),
    lg: bi({
      th: { px: "8", py: "4", lineHeight: "5", fontSize: "sm" },
      td: { px: "8", py: "5", lineHeight: "6" },
      caption: { px: "6", py: "2", fontSize: "md" },
    }),
  },
  w3 = g3({
    baseStyle: v3,
    variants: x3,
    sizes: S3,
    defaultProps: { variant: "simple", size: "md", colorScheme: "gray" },
  }),
  St = W("tabs-color"),
  yn = W("tabs-bg"),
  vl = W("tabs-border-color"),
  { defineMultiStyleConfig: k3, definePartsStyle: Ln } = we($T.keys),
  C3 = (e) => {
    const { orientation: t } = e;
    return { display: t === "vertical" ? "flex" : "block" };
  },
  E3 = (e) => {
    const { isFitted: t } = e;
    return {
      flex: t ? 1 : void 0,
      transitionProperty: "common",
      transitionDuration: "normal",
      _focusVisible: { zIndex: 1, boxShadow: "outline" },
      _disabled: { cursor: "not-allowed", opacity: 0.4 },
    };
  },
  _3 = (e) => {
    const { align: t = "start", orientation: n } = e;
    return {
      justifyContent: {
        end: "flex-end",
        center: "center",
        start: "flex-start",
      }[t],
      flexDirection: n === "vertical" ? "column" : "row",
    };
  },
  P3 = { p: 4 },
  T3 = Ln((e) => ({ root: C3(e), tab: E3(e), tablist: _3(e), tabpanel: P3 })),
  A3 = {
    sm: Ln({ tab: { py: 1, px: 4, fontSize: "sm" } }),
    md: Ln({ tab: { fontSize: "md", py: 2, px: 4 } }),
    lg: Ln({ tab: { fontSize: "lg", py: 3, px: 4 } }),
  },
  R3 = Ln((e) => {
    const { colorScheme: t, orientation: n } = e,
      r = n === "vertical",
      o = r ? "borderStart" : "borderBottom",
      i = r ? "marginStart" : "marginBottom";
    return {
      tablist: { [o]: "2px solid", borderColor: "inherit" },
      tab: {
        [o]: "2px solid",
        borderColor: "transparent",
        [i]: "-2px",
        _selected: {
          [St.variable]: `colors.${t}.600`,
          _dark: { [St.variable]: `colors.${t}.300` },
          borderColor: "currentColor",
        },
        _active: {
          [yn.variable]: "colors.gray.200",
          _dark: { [yn.variable]: "colors.whiteAlpha.300" },
        },
        _disabled: { _active: { bg: "none" } },
        color: St.reference,
        bg: yn.reference,
      },
    };
  }),
  $3 = Ln((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderTopRadius: "md",
        border: "1px solid",
        borderColor: "transparent",
        mb: "-1px",
        [vl.variable]: "transparent",
        _selected: {
          [St.variable]: `colors.${t}.600`,
          [vl.variable]: "colors.white",
          _dark: {
            [St.variable]: `colors.${t}.300`,
            [vl.variable]: "colors.gray.800",
          },
          borderColor: "inherit",
          borderBottomColor: vl.reference,
        },
        color: St.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  M3 = Ln((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        border: "1px solid",
        borderColor: "inherit",
        [yn.variable]: "colors.gray.50",
        _dark: { [yn.variable]: "colors.whiteAlpha.50" },
        mb: "-1px",
        _notLast: { marginEnd: "-1px" },
        _selected: {
          [yn.variable]: "colors.white",
          [St.variable]: `colors.${t}.600`,
          _dark: {
            [yn.variable]: "colors.gray.800",
            [St.variable]: `colors.${t}.300`,
          },
          borderColor: "inherit",
          borderTopColor: "currentColor",
          borderBottomColor: "transparent",
        },
        color: St.reference,
        bg: yn.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  O3 = Ln((e) => {
    const { colorScheme: t, theme: n } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        color: "gray.600",
        _selected: { color: ht(n, `${t}.700`), bg: ht(n, `${t}.100`) },
      },
    };
  }),
  z3 = Ln((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        [St.variable]: "colors.gray.600",
        _dark: { [St.variable]: "inherit" },
        _selected: {
          [St.variable]: "colors.white",
          [yn.variable]: `colors.${t}.600`,
          _dark: {
            [St.variable]: "colors.gray.800",
            [yn.variable]: `colors.${t}.300`,
          },
        },
        color: St.reference,
        bg: yn.reference,
      },
    };
  }),
  L3 = Ln({}),
  I3 = {
    line: R3,
    enclosed: $3,
    "enclosed-colored": M3,
    "soft-rounded": O3,
    "solid-rounded": z3,
    unstyled: L3,
  },
  D3 = k3({
    baseStyle: T3,
    sizes: A3,
    variants: I3,
    defaultProps: { size: "md", variant: "line", colorScheme: "blue" },
  }),
  Fe = iP("badge", ["bg", "color", "shadow"]),
  j3 = {
    px: 1,
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "sm",
    fontWeight: "bold",
    bg: Fe.bg.reference,
    color: Fe.color.reference,
    boxShadow: Fe.shadow.reference,
  },
  F3 = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = $i(`${t}.500`, 0.6)(n);
    return {
      [Fe.bg.variable]: `colors.${t}.500`,
      [Fe.color.variable]: "colors.white",
      _dark: {
        [Fe.bg.variable]: r,
        [Fe.color.variable]: "colors.whiteAlpha.800",
      },
    };
  },
  B3 = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = $i(`${t}.200`, 0.16)(n);
    return {
      [Fe.bg.variable]: `colors.${t}.100`,
      [Fe.color.variable]: `colors.${t}.800`,
      _dark: { [Fe.bg.variable]: r, [Fe.color.variable]: `colors.${t}.200` },
    };
  },
  N3 = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = $i(`${t}.200`, 0.8)(n);
    return {
      [Fe.color.variable]: `colors.${t}.500`,
      _dark: { [Fe.color.variable]: r },
      [Fe.shadow.variable]: `inset 0 0 0px 1px ${Fe.color.reference}`,
    };
  },
  V3 = { solid: F3, subtle: B3, outline: N3 },
  zs = {
    baseStyle: j3,
    variants: V3,
    defaultProps: { variant: "subtle", colorScheme: "gray" },
  },
  { defineMultiStyleConfig: W3, definePartsStyle: xo } = we(MT.keys),
  cv = W("tag-bg"),
  dv = W("tag-color"),
  Fd = W("tag-shadow"),
  Ul = W("tag-min-height"),
  Gl = W("tag-min-width"),
  Kl = W("tag-font-size"),
  ql = W("tag-padding-inline"),
  H3 = {
    fontWeight: "medium",
    lineHeight: 1.2,
    outline: 0,
    [dv.variable]: Fe.color.reference,
    [cv.variable]: Fe.bg.reference,
    [Fd.variable]: Fe.shadow.reference,
    color: dv.reference,
    bg: cv.reference,
    boxShadow: Fd.reference,
    borderRadius: "md",
    minH: Ul.reference,
    minW: Gl.reference,
    fontSize: Kl.reference,
    px: ql.reference,
    _focusVisible: { [Fd.variable]: "shadows.outline" },
  },
  U3 = { lineHeight: 1.2, overflow: "visible" },
  G3 = {
    fontSize: "lg",
    w: "5",
    h: "5",
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "full",
    marginStart: "1.5",
    marginEnd: "-1",
    opacity: 0.5,
    _disabled: { opacity: 0.4 },
    _focusVisible: { boxShadow: "outline", bg: "rgba(0, 0, 0, 0.14)" },
    _hover: { opacity: 0.8 },
    _active: { opacity: 1 },
  },
  K3 = xo({ container: H3, label: U3, closeButton: G3 }),
  q3 = {
    sm: xo({
      container: {
        [Ul.variable]: "sizes.5",
        [Gl.variable]: "sizes.5",
        [Kl.variable]: "fontSizes.xs",
        [ql.variable]: "space.2",
      },
      closeButton: { marginEnd: "-2px", marginStart: "0.35rem" },
    }),
    md: xo({
      container: {
        [Ul.variable]: "sizes.6",
        [Gl.variable]: "sizes.6",
        [Kl.variable]: "fontSizes.sm",
        [ql.variable]: "space.2",
      },
    }),
    lg: xo({
      container: {
        [Ul.variable]: "sizes.8",
        [Gl.variable]: "sizes.8",
        [Kl.variable]: "fontSizes.md",
        [ql.variable]: "space.3",
      },
    }),
  },
  Y3 = {
    subtle: xo((e) => {
      var t;
      return { container: (t = zs.variants) == null ? void 0 : t.subtle(e) };
    }),
    solid: xo((e) => {
      var t;
      return { container: (t = zs.variants) == null ? void 0 : t.solid(e) };
    }),
    outline: xo((e) => {
      var t;
      return { container: (t = zs.variants) == null ? void 0 : t.outline(e) };
    }),
  },
  X3 = W3({
    variants: Y3,
    baseStyle: K3,
    sizes: q3,
    defaultProps: { size: "md", variant: "subtle", colorScheme: "gray" },
  }),
  { definePartsStyle: Qn, defineMultiStyleConfig: Q3 } = we(yT.keys),
  oi = W("input-height"),
  ii = W("input-font-size"),
  si = W("input-padding"),
  ai = W("input-border-radius"),
  Z3 = Qn({
    addon: {
      height: oi.reference,
      fontSize: ii.reference,
      px: si.reference,
      borderRadius: ai.reference,
    },
    field: {
      width: "100%",
      height: oi.reference,
      fontSize: ii.reference,
      px: si.reference,
      borderRadius: ai.reference,
      minWidth: 0,
      outline: 0,
      position: "relative",
      appearance: "none",
      transitionProperty: "common",
      transitionDuration: "normal",
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
    },
  }),
  vr = {
    lg: {
      [ii.variable]: "fontSizes.lg",
      [si.variable]: "space.4",
      [ai.variable]: "radii.md",
      [oi.variable]: "sizes.12",
    },
    md: {
      [ii.variable]: "fontSizes.md",
      [si.variable]: "space.4",
      [ai.variable]: "radii.md",
      [oi.variable]: "sizes.10",
    },
    sm: {
      [ii.variable]: "fontSizes.sm",
      [si.variable]: "space.3",
      [ai.variable]: "radii.sm",
      [oi.variable]: "sizes.8",
    },
    xs: {
      [ii.variable]: "fontSizes.xs",
      [si.variable]: "space.2",
      [ai.variable]: "radii.sm",
      [oi.variable]: "sizes.6",
    },
  },
  J3 = {
    lg: Qn({ field: vr.lg, group: vr.lg }),
    md: Qn({ field: vr.md, group: vr.md }),
    sm: Qn({ field: vr.sm, group: vr.sm }),
    xs: Qn({ field: vr.xs, group: vr.xs }),
  };
function fm(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || U("blue.500", "blue.300")(e),
    errorBorderColor: n || U("red.500", "red.300")(e),
  };
}
var eA = Qn((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = fm(e);
    return {
      field: {
        border: "1px solid",
        borderColor: "inherit",
        bg: "inherit",
        _hover: { borderColor: U("gray.300", "whiteAlpha.400")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: ht(t, r), boxShadow: `0 0 0 1px ${ht(t, r)}` },
        _focusVisible: {
          zIndex: 1,
          borderColor: ht(t, n),
          boxShadow: `0 0 0 1px ${ht(t, n)}`,
        },
      },
      addon: {
        border: "1px solid",
        borderColor: U("inherit", "whiteAlpha.50")(e),
        bg: U("gray.100", "whiteAlpha.300")(e),
      },
    };
  }),
  tA = Qn((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = fm(e);
    return {
      field: {
        border: "2px solid",
        borderColor: "transparent",
        bg: U("gray.100", "whiteAlpha.50")(e),
        _hover: { bg: U("gray.200", "whiteAlpha.100")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: ht(t, r) },
        _focusVisible: { bg: "transparent", borderColor: ht(t, n) },
      },
      addon: {
        border: "2px solid",
        borderColor: "transparent",
        bg: U("gray.100", "whiteAlpha.50")(e),
      },
    };
  }),
  nA = Qn((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = fm(e);
    return {
      field: {
        borderBottom: "1px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: {
          borderColor: ht(t, r),
          boxShadow: `0px 1px 0px 0px ${ht(t, r)}`,
        },
        _focusVisible: {
          borderColor: ht(t, n),
          boxShadow: `0px 1px 0px 0px ${ht(t, n)}`,
        },
      },
      addon: {
        borderBottom: "2px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
      },
    };
  }),
  rA = Qn({
    field: { bg: "transparent", px: "0", height: "auto" },
    addon: { bg: "transparent", px: "0", height: "auto" },
  }),
  oA = { outline: eA, filled: tA, flushed: nA, unstyled: rA },
  pe = Q3({
    baseStyle: Z3,
    sizes: J3,
    variants: oA,
    defaultProps: { size: "md", variant: "outline" },
  }),
  fv,
  iA = {
    ...((fv = pe.baseStyle) == null ? void 0 : fv.field),
    paddingY: "2",
    minHeight: "20",
    lineHeight: "short",
    verticalAlign: "top",
  },
  pv,
  hv,
  sA = {
    outline: (e) => {
      var t, n;
      return (n = (t = pe.variants) == null ? void 0 : t.outline(e).field) !=
        null
        ? n
        : {};
    },
    flushed: (e) => {
      var t, n;
      return (n = (t = pe.variants) == null ? void 0 : t.flushed(e).field) !=
        null
        ? n
        : {};
    },
    filled: (e) => {
      var t, n;
      return (n = (t = pe.variants) == null ? void 0 : t.filled(e).field) !=
        null
        ? n
        : {};
    },
    unstyled:
      (hv = (pv = pe.variants) == null ? void 0 : pv.unstyled.field) != null
        ? hv
        : {},
  },
  mv,
  gv,
  vv,
  yv,
  bv,
  xv,
  Sv,
  wv,
  aA = {
    xs: (gv = (mv = pe.sizes) == null ? void 0 : mv.xs.field) != null ? gv : {},
    sm: (yv = (vv = pe.sizes) == null ? void 0 : vv.sm.field) != null ? yv : {},
    md: (xv = (bv = pe.sizes) == null ? void 0 : bv.md.field) != null ? xv : {},
    lg: (wv = (Sv = pe.sizes) == null ? void 0 : Sv.lg.field) != null ? wv : {},
  },
  lA = {
    baseStyle: iA,
    sizes: aA,
    variants: sA,
    defaultProps: { size: "md", variant: "outline" },
  },
  yl = Ke("tooltip-bg"),
  Bd = Ke("tooltip-fg"),
  uA = Ke("popper-arrow-bg"),
  cA = {
    bg: yl.reference,
    color: Bd.reference,
    [yl.variable]: "colors.gray.700",
    [Bd.variable]: "colors.whiteAlpha.900",
    _dark: {
      [yl.variable]: "colors.gray.300",
      [Bd.variable]: "colors.gray.900",
    },
    [uA.variable]: yl.reference,
    px: "2",
    py: "0.5",
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "md",
    maxW: "xs",
    zIndex: "tooltip",
  },
  dA = { baseStyle: cA },
  { defineMultiStyleConfig: fA, definePartsStyle: xs } = we(CT.keys),
  pA = (e) => {
    const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e,
      i = U(iv(), iv("1rem", "rgba(0,0,0,0.1)"))(e),
      s = U(`${t}.500`, `${t}.200`)(e),
      a = `linear-gradient(
    to right,
    transparent 0%,
    ${ht(n, s)} 50%,
    transparent 100%
  )`;
    return { ...(!r && o && i), ...(r ? { bgImage: a } : { bgColor: s }) };
  },
  hA = {
    lineHeight: "1",
    fontSize: "0.25em",
    fontWeight: "bold",
    color: "white",
  },
  mA = (e) => ({ bg: U("gray.100", "whiteAlpha.300")(e) }),
  gA = (e) => ({
    transitionProperty: "common",
    transitionDuration: "slow",
    ...pA(e),
  }),
  vA = xs((e) => ({ label: hA, filledTrack: gA(e), track: mA(e) })),
  yA = {
    xs: xs({ track: { h: "1" } }),
    sm: xs({ track: { h: "2" } }),
    md: xs({ track: { h: "3" } }),
    lg: xs({ track: { h: "4" } }),
  },
  bA = fA({
    sizes: yA,
    baseStyle: vA,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  xA = (e) => typeof e == "function";
function gt(e, ...t) {
  return xA(e) ? e(...t) : e;
}
var { definePartsStyle: Yl, defineMultiStyleConfig: SA } = we(pT.keys),
  Ls = W("checkbox-size"),
  wA = (e) => {
    const { colorScheme: t } = e;
    return {
      w: Ls.reference,
      h: Ls.reference,
      transitionProperty: "box-shadow",
      transitionDuration: "normal",
      border: "2px solid",
      borderRadius: "sm",
      borderColor: "inherit",
      color: "white",
      _checked: {
        bg: U(`${t}.500`, `${t}.200`)(e),
        borderColor: U(`${t}.500`, `${t}.200`)(e),
        color: U("white", "gray.900")(e),
        _hover: {
          bg: U(`${t}.600`, `${t}.300`)(e),
          borderColor: U(`${t}.600`, `${t}.300`)(e),
        },
        _disabled: {
          borderColor: U("gray.200", "transparent")(e),
          bg: U("gray.200", "whiteAlpha.300")(e),
          color: U("gray.500", "whiteAlpha.500")(e),
        },
      },
      _indeterminate: {
        bg: U(`${t}.500`, `${t}.200`)(e),
        borderColor: U(`${t}.500`, `${t}.200`)(e),
        color: U("white", "gray.900")(e),
      },
      _disabled: {
        bg: U("gray.100", "whiteAlpha.100")(e),
        borderColor: U("gray.100", "transparent")(e),
      },
      _focusVisible: { boxShadow: "outline" },
      _invalid: { borderColor: U("red.500", "red.300")(e) },
    };
  },
  kA = { _disabled: { cursor: "not-allowed" } },
  CA = { userSelect: "none", _disabled: { opacity: 0.4 } },
  EA = { transitionProperty: "transform", transitionDuration: "normal" },
  _A = Yl((e) => ({ icon: EA, container: kA, control: gt(wA, e), label: CA })),
  PA = {
    sm: Yl({
      control: { [Ls.variable]: "sizes.3" },
      label: { fontSize: "sm" },
      icon: { fontSize: "3xs" },
    }),
    md: Yl({
      control: { [Ls.variable]: "sizes.4" },
      label: { fontSize: "md" },
      icon: { fontSize: "2xs" },
    }),
    lg: Yl({
      control: { [Ls.variable]: "sizes.5" },
      label: { fontSize: "lg" },
      icon: { fontSize: "2xs" },
    }),
  },
  Iu = SA({
    baseStyle: _A,
    sizes: PA,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: TA, definePartsStyle: Xl } = we(ET.keys),
  AA = (e) => {
    var t;
    const n = (t = gt(Iu.baseStyle, e)) == null ? void 0 : t.control;
    return {
      ...n,
      borderRadius: "full",
      _checked: {
        ...(n == null ? void 0 : n._checked),
        _before: {
          content: '""',
          display: "inline-block",
          pos: "relative",
          w: "50%",
          h: "50%",
          borderRadius: "50%",
          bg: "currentColor",
        },
      },
    };
  },
  RA = Xl((e) => {
    var t, n, r, o;
    return {
      label: (n = (t = Iu).baseStyle) == null ? void 0 : n.call(t, e).label,
      container:
        (o = (r = Iu).baseStyle) == null ? void 0 : o.call(r, e).container,
      control: AA(e),
    };
  }),
  $A = {
    md: Xl({ control: { w: "4", h: "4" }, label: { fontSize: "md" } }),
    lg: Xl({ control: { w: "5", h: "5" }, label: { fontSize: "lg" } }),
    sm: Xl({ control: { width: "3", height: "3" }, label: { fontSize: "sm" } }),
  },
  MA = TA({
    baseStyle: RA,
    sizes: $A,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: OA, definePartsStyle: zA } = we(_T.keys),
  bl = W("select-bg"),
  kv,
  LA = {
    ...((kv = pe.baseStyle) == null ? void 0 : kv.field),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    bg: bl.reference,
    [bl.variable]: "colors.white",
    _dark: { [bl.variable]: "colors.gray.700" },
    "> option, > optgroup": { bg: bl.reference },
  },
  IA = {
    width: "6",
    height: "100%",
    insetEnd: "2",
    position: "relative",
    color: "currentColor",
    fontSize: "xl",
    _disabled: { opacity: 0.5 },
  },
  DA = zA({ field: LA, icon: IA }),
  xl = { paddingInlineEnd: "8" },
  Cv,
  Ev,
  _v,
  Pv,
  Tv,
  Av,
  Rv,
  $v,
  jA = {
    lg: {
      ...((Cv = pe.sizes) == null ? void 0 : Cv.lg),
      field: { ...((Ev = pe.sizes) == null ? void 0 : Ev.lg.field), ...xl },
    },
    md: {
      ...((_v = pe.sizes) == null ? void 0 : _v.md),
      field: { ...((Pv = pe.sizes) == null ? void 0 : Pv.md.field), ...xl },
    },
    sm: {
      ...((Tv = pe.sizes) == null ? void 0 : Tv.sm),
      field: { ...((Av = pe.sizes) == null ? void 0 : Av.sm.field), ...xl },
    },
    xs: {
      ...((Rv = pe.sizes) == null ? void 0 : Rv.xs),
      field: { ...(($v = pe.sizes) == null ? void 0 : $v.xs.field), ...xl },
      icon: { insetEnd: "1" },
    },
  },
  FA = OA({
    baseStyle: DA,
    sizes: jA,
    variants: pe.variants,
    defaultProps: pe.defaultProps,
  }),
  Nd = W("skeleton-start-color"),
  Vd = W("skeleton-end-color"),
  BA = {
    [Nd.variable]: "colors.gray.100",
    [Vd.variable]: "colors.gray.400",
    _dark: {
      [Nd.variable]: "colors.gray.800",
      [Vd.variable]: "colors.gray.600",
    },
    background: Nd.reference,
    borderColor: Vd.reference,
    opacity: 0.7,
    borderRadius: "sm",
  },
  NA = { baseStyle: BA },
  Wd = W("skip-link-bg"),
  VA = {
    borderRadius: "md",
    fontWeight: "semibold",
    _focusVisible: {
      boxShadow: "outline",
      padding: "4",
      position: "fixed",
      top: "6",
      insetStart: "6",
      [Wd.variable]: "colors.white",
      _dark: { [Wd.variable]: "colors.gray.700" },
      bg: Wd.reference,
    },
  },
  WA = { baseStyle: VA },
  { defineMultiStyleConfig: HA, definePartsStyle: $c } = we(PT.keys),
  pa = W("slider-thumb-size"),
  ha = W("slider-track-size"),
  _r = W("slider-bg"),
  UA = (e) => {
    const { orientation: t } = e;
    return {
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      _disabled: { opacity: 0.6, cursor: "default", pointerEvents: "none" },
      ...dm({
        orientation: t,
        vertical: { h: "100%" },
        horizontal: { w: "100%" },
      }),
    };
  },
  GA = (e) => ({
    ...dm({
      orientation: e.orientation,
      horizontal: { h: ha.reference },
      vertical: { w: ha.reference },
    }),
    overflow: "hidden",
    borderRadius: "sm",
    [_r.variable]: "colors.gray.200",
    _dark: { [_r.variable]: "colors.whiteAlpha.200" },
    _disabled: {
      [_r.variable]: "colors.gray.300",
      _dark: { [_r.variable]: "colors.whiteAlpha.300" },
    },
    bg: _r.reference,
  }),
  KA = (e) => {
    const { orientation: t } = e;
    return {
      ...dm({
        orientation: t,
        vertical: {
          left: "50%",
          transform: "translateX(-50%)",
          _active: { transform: "translateX(-50%) scale(1.15)" },
        },
        horizontal: {
          top: "50%",
          transform: "translateY(-50%)",
          _active: { transform: "translateY(-50%) scale(1.15)" },
        },
      }),
      w: pa.reference,
      h: pa.reference,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      outline: 0,
      zIndex: 1,
      borderRadius: "full",
      bg: "white",
      boxShadow: "base",
      border: "1px solid",
      borderColor: "transparent",
      transitionProperty: "transform",
      transitionDuration: "normal",
      _focusVisible: { boxShadow: "outline" },
      _disabled: { bg: "gray.300" },
    };
  },
  qA = (e) => {
    const { colorScheme: t } = e;
    return {
      width: "inherit",
      height: "inherit",
      [_r.variable]: `colors.${t}.500`,
      _dark: { [_r.variable]: `colors.${t}.200` },
      bg: _r.reference,
    };
  },
  YA = $c((e) => ({
    container: UA(e),
    track: GA(e),
    thumb: KA(e),
    filledTrack: qA(e),
  })),
  XA = $c({
    container: { [pa.variable]: "sizes.4", [ha.variable]: "sizes.1" },
  }),
  QA = $c({
    container: { [pa.variable]: "sizes.3.5", [ha.variable]: "sizes.1" },
  }),
  ZA = $c({
    container: { [pa.variable]: "sizes.2.5", [ha.variable]: "sizes.0.5" },
  }),
  JA = { lg: XA, md: QA, sm: ZA },
  eR = HA({
    baseStyle: YA,
    sizes: JA,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  co = Ke("spinner-size"),
  tR = { width: [co.reference], height: [co.reference] },
  nR = {
    xs: { [co.variable]: "sizes.3" },
    sm: { [co.variable]: "sizes.4" },
    md: { [co.variable]: "sizes.6" },
    lg: { [co.variable]: "sizes.8" },
    xl: { [co.variable]: "sizes.12" },
  },
  rR = { baseStyle: tR, sizes: nR, defaultProps: { size: "md" } },
  { defineMultiStyleConfig: oR, definePartsStyle: CS } = we(TT.keys),
  iR = { fontWeight: "medium" },
  sR = { opacity: 0.8, marginBottom: "2" },
  aR = { verticalAlign: "baseline", fontWeight: "semibold" },
  lR = { marginEnd: 1, w: "3.5", h: "3.5", verticalAlign: "middle" },
  uR = CS({ container: {}, label: iR, helpText: sR, number: aR, icon: lR }),
  cR = {
    md: CS({
      label: { fontSize: "sm" },
      helpText: { fontSize: "sm" },
      number: { fontSize: "2xl" },
    }),
  },
  dR = oR({ baseStyle: uR, sizes: cR, defaultProps: { size: "md" } }),
  Hd = W("kbd-bg"),
  fR = {
    [Hd.variable]: "colors.gray.100",
    _dark: { [Hd.variable]: "colors.whiteAlpha.100" },
    bg: Hd.reference,
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap",
  },
  pR = { baseStyle: fR },
  hR = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "inherit",
    _hover: { textDecoration: "underline" },
    _focusVisible: { boxShadow: "outline" },
  },
  mR = { baseStyle: hR },
  { defineMultiStyleConfig: gR, definePartsStyle: vR } = we(bT.keys),
  yR = { marginEnd: "2", display: "inline", verticalAlign: "text-bottom" },
  bR = vR({ icon: yR }),
  xR = gR({ baseStyle: bR }),
  { defineMultiStyleConfig: SR, definePartsStyle: wR } = we(xT.keys),
  Tn = W("menu-bg"),
  Ud = W("menu-shadow"),
  kR = {
    [Tn.variable]: "#fff",
    [Ud.variable]: "shadows.sm",
    _dark: {
      [Tn.variable]: "colors.gray.700",
      [Ud.variable]: "shadows.dark-lg",
    },
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px",
    bg: Tn.reference,
    boxShadow: Ud.reference,
  },
  CR = {
    py: "1.5",
    px: "3",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      [Tn.variable]: "colors.gray.100",
      _dark: { [Tn.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [Tn.variable]: "colors.gray.200",
      _dark: { [Tn.variable]: "colors.whiteAlpha.200" },
    },
    _expanded: {
      [Tn.variable]: "colors.gray.100",
      _dark: { [Tn.variable]: "colors.whiteAlpha.100" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    bg: Tn.reference,
  },
  ER = { mx: 4, my: 2, fontWeight: "semibold", fontSize: "sm" },
  _R = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  PR = { opacity: 0.6 },
  TR = {
    border: 0,
    borderBottom: "1px solid",
    borderColor: "inherit",
    my: "2",
    opacity: 0.6,
  },
  AR = { transitionProperty: "common", transitionDuration: "normal" },
  RR = wR({
    button: AR,
    list: kR,
    item: CR,
    groupTitle: ER,
    icon: _R,
    command: PR,
    divider: TR,
  }),
  $R = SR({ baseStyle: RR }),
  { defineMultiStyleConfig: MR, definePartsStyle: Cp } = we(ST.keys),
  Gd = W("modal-bg"),
  Kd = W("modal-shadow"),
  OR = { bg: "blackAlpha.600", zIndex: "modal" },
  zR = (e) => {
    const { isCentered: t, scrollBehavior: n } = e;
    return {
      display: "flex",
      zIndex: "modal",
      justifyContent: "center",
      alignItems: t ? "center" : "flex-start",
      overflow: n === "inside" ? "hidden" : "auto",
      overscrollBehaviorY: "none",
    };
  },
  LR = (e) => {
    const { isCentered: t, scrollBehavior: n } = e;
    return {
      borderRadius: "md",
      color: "inherit",
      my: t ? "auto" : "16",
      mx: t ? "auto" : void 0,
      zIndex: "modal",
      maxH: n === "inside" ? "calc(100% - 7.5rem)" : void 0,
      [Gd.variable]: "colors.white",
      [Kd.variable]: "shadows.lg",
      _dark: {
        [Gd.variable]: "colors.gray.700",
        [Kd.variable]: "shadows.dark-lg",
      },
      bg: Gd.reference,
      boxShadow: Kd.reference,
    };
  },
  IR = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  DR = { position: "absolute", top: "2", insetEnd: "3" },
  jR = (e) => {
    const { scrollBehavior: t } = e;
    return {
      px: "6",
      py: "2",
      flex: "1",
      overflow: t === "inside" ? "auto" : void 0,
    };
  },
  FR = { px: "6", py: "4" },
  BR = Cp((e) => ({
    overlay: OR,
    dialogContainer: gt(zR, e),
    dialog: gt(LR, e),
    header: IR,
    closeButton: DR,
    body: gt(jR, e),
    footer: FR,
  }));
function hn(e) {
  return Cp(
    e === "full"
      ? {
          dialog: { maxW: "100vw", minH: "$100vh", my: "0", borderRadius: "0" },
        }
      : { dialog: { maxW: e } }
  );
}
var NR = {
    xs: hn("xs"),
    sm: hn("sm"),
    md: hn("md"),
    lg: hn("lg"),
    xl: hn("xl"),
    "2xl": hn("2xl"),
    "3xl": hn("3xl"),
    "4xl": hn("4xl"),
    "5xl": hn("5xl"),
    "6xl": hn("6xl"),
    full: hn("full"),
  },
  VR = MR({ baseStyle: BR, sizes: NR, defaultProps: { size: "md" } }),
  { defineMultiStyleConfig: WR, definePartsStyle: ES } = we(wT.keys),
  pm = Ke("number-input-stepper-width"),
  _S = Ke("number-input-input-padding"),
  HR = Kn(pm).add("0.5rem").toString(),
  qd = Ke("number-input-bg"),
  Yd = Ke("number-input-color"),
  Xd = Ke("number-input-border-color"),
  UR = { [pm.variable]: "sizes.6", [_S.variable]: HR },
  GR = (e) => {
    var t, n;
    return (n = (t = gt(pe.baseStyle, e)) == null ? void 0 : t.field) != null
      ? n
      : {};
  },
  KR = { width: pm.reference },
  qR = {
    borderStart: "1px solid",
    borderStartColor: Xd.reference,
    color: Yd.reference,
    bg: qd.reference,
    [Yd.variable]: "colors.chakra-body-text",
    [Xd.variable]: "colors.chakra-border-color",
    _dark: {
      [Yd.variable]: "colors.whiteAlpha.800",
      [Xd.variable]: "colors.whiteAlpha.300",
    },
    _active: {
      [qd.variable]: "colors.gray.200",
      _dark: { [qd.variable]: "colors.whiteAlpha.300" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
  },
  YR = ES((e) => {
    var t;
    return {
      root: UR,
      field: (t = gt(GR, e)) != null ? t : {},
      stepperGroup: KR,
      stepper: qR,
    };
  });
function Sl(e) {
  var t, n, r;
  const o = (t = pe.sizes) == null ? void 0 : t[e],
    i = { lg: "md", md: "md", sm: "sm", xs: "sm" },
    s = (r = (n = o.field) == null ? void 0 : n.fontSize) != null ? r : "md",
    a = bS.fontSizes[s];
  return ES({
    field: { ...o.field, paddingInlineEnd: _S.reference, verticalAlign: "top" },
    stepper: {
      fontSize: Kn(a).multiply(0.75).toString(),
      _first: { borderTopEndRadius: i[e] },
      _last: { borderBottomEndRadius: i[e], mt: "-1px", borderTopWidth: 1 },
    },
  });
}
var XR = { xs: Sl("xs"), sm: Sl("sm"), md: Sl("md"), lg: Sl("lg") },
  QR = WR({
    baseStyle: YR,
    sizes: XR,
    variants: pe.variants,
    defaultProps: pe.defaultProps,
  }),
  Mv,
  ZR = {
    ...((Mv = pe.baseStyle) == null ? void 0 : Mv.field),
    textAlign: "center",
  },
  JR = {
    lg: { fontSize: "lg", w: 12, h: 12, borderRadius: "md" },
    md: { fontSize: "md", w: 10, h: 10, borderRadius: "md" },
    sm: { fontSize: "sm", w: 8, h: 8, borderRadius: "sm" },
    xs: { fontSize: "xs", w: 6, h: 6, borderRadius: "sm" },
  },
  Ov,
  zv,
  e6 = {
    outline: (e) => {
      var t, n, r;
      return (r =
        (n = gt((t = pe.variants) == null ? void 0 : t.outline, e)) == null
          ? void 0
          : n.field) != null
        ? r
        : {};
    },
    flushed: (e) => {
      var t, n, r;
      return (r =
        (n = gt((t = pe.variants) == null ? void 0 : t.flushed, e)) == null
          ? void 0
          : n.field) != null
        ? r
        : {};
    },
    filled: (e) => {
      var t, n, r;
      return (r =
        (n = gt((t = pe.variants) == null ? void 0 : t.filled, e)) == null
          ? void 0
          : n.field) != null
        ? r
        : {};
    },
    unstyled:
      (zv = (Ov = pe.variants) == null ? void 0 : Ov.unstyled.field) != null
        ? zv
        : {},
  },
  t6 = {
    baseStyle: ZR,
    sizes: JR,
    variants: e6,
    defaultProps: pe.defaultProps,
  },
  { defineMultiStyleConfig: n6, definePartsStyle: r6 } = we(kT.keys),
  wl = Ke("popper-bg"),
  o6 = Ke("popper-arrow-bg"),
  Lv = Ke("popper-arrow-shadow-color"),
  i6 = { zIndex: 10 },
  s6 = {
    [wl.variable]: "colors.white",
    bg: wl.reference,
    [o6.variable]: wl.reference,
    [Lv.variable]: "colors.gray.200",
    _dark: {
      [wl.variable]: "colors.gray.700",
      [Lv.variable]: "colors.whiteAlpha.300",
    },
    width: "xs",
    border: "1px solid",
    borderColor: "inherit",
    borderRadius: "md",
    boxShadow: "sm",
    zIndex: "inherit",
    _focusVisible: { outline: 0, boxShadow: "outline" },
  },
  a6 = { px: 3, py: 2, borderBottomWidth: "1px" },
  l6 = { px: 3, py: 2 },
  u6 = { px: 3, py: 2, borderTopWidth: "1px" },
  c6 = {
    position: "absolute",
    borderRadius: "md",
    top: 1,
    insetEnd: 2,
    padding: 2,
  },
  d6 = r6({
    popper: i6,
    content: s6,
    header: a6,
    body: l6,
    footer: u6,
    closeButton: c6,
  }),
  f6 = n6({ baseStyle: d6 }),
  { definePartsStyle: Ep, defineMultiStyleConfig: p6 } = we(hT.keys),
  Qd = W("drawer-bg"),
  Zd = W("drawer-box-shadow");
function Bo(e) {
  return Ep(
    e === "full"
      ? { dialog: { maxW: "100vw", h: "100vh" } }
      : { dialog: { maxW: e } }
  );
}
var h6 = { bg: "blackAlpha.600", zIndex: "modal" },
  m6 = { display: "flex", zIndex: "modal", justifyContent: "center" },
  g6 = (e) => {
    const { isFullHeight: t } = e;
    return {
      ...(t && { height: "100vh" }),
      zIndex: "modal",
      maxH: "100vh",
      color: "inherit",
      [Qd.variable]: "colors.white",
      [Zd.variable]: "shadows.lg",
      _dark: {
        [Qd.variable]: "colors.gray.700",
        [Zd.variable]: "shadows.dark-lg",
      },
      bg: Qd.reference,
      boxShadow: Zd.reference,
    };
  },
  v6 = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  y6 = { position: "absolute", top: "2", insetEnd: "3" },
  b6 = { px: "6", py: "2", flex: "1", overflow: "auto" },
  x6 = { px: "6", py: "4" },
  S6 = Ep((e) => ({
    overlay: h6,
    dialogContainer: m6,
    dialog: gt(g6, e),
    header: v6,
    closeButton: y6,
    body: b6,
    footer: x6,
  })),
  w6 = {
    xs: Bo("xs"),
    sm: Bo("md"),
    md: Bo("lg"),
    lg: Bo("2xl"),
    xl: Bo("4xl"),
    full: Bo("full"),
  },
  k6 = p6({ baseStyle: S6, sizes: w6, defaultProps: { size: "xs" } }),
  { definePartsStyle: C6, defineMultiStyleConfig: E6 } = we(mT.keys),
  _6 = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
  },
  P6 = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  T6 = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  A6 = C6({ preview: _6, input: P6, textarea: T6 }),
  R6 = E6({ baseStyle: A6 }),
  { definePartsStyle: $6, defineMultiStyleConfig: M6 } = we(gT.keys),
  xi = W("form-control-color"),
  O6 = {
    marginStart: "1",
    [xi.variable]: "colors.red.500",
    _dark: { [xi.variable]: "colors.red.300" },
    color: xi.reference,
  },
  z6 = {
    mt: "2",
    [xi.variable]: "colors.gray.600",
    _dark: { [xi.variable]: "colors.whiteAlpha.600" },
    color: xi.reference,
    lineHeight: "normal",
    fontSize: "sm",
  },
  L6 = $6({
    container: { width: "100%", position: "relative" },
    requiredIndicator: O6,
    helperText: z6,
  }),
  I6 = M6({ baseStyle: L6 }),
  { definePartsStyle: D6, defineMultiStyleConfig: j6 } = we(vT.keys),
  Si = W("form-error-color"),
  F6 = {
    [Si.variable]: "colors.red.500",
    _dark: { [Si.variable]: "colors.red.300" },
    color: Si.reference,
    mt: "2",
    fontSize: "sm",
    lineHeight: "normal",
  },
  B6 = {
    marginEnd: "0.5em",
    [Si.variable]: "colors.red.500",
    _dark: { [Si.variable]: "colors.red.300" },
    color: Si.reference,
  },
  N6 = D6({ text: F6, icon: B6 }),
  V6 = j6({ baseStyle: N6 }),
  W6 = {
    fontSize: "md",
    marginEnd: "3",
    mb: "2",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "normal",
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  H6 = { baseStyle: W6 },
  U6 = { fontFamily: "heading", fontWeight: "bold" },
  G6 = {
    "4xl": { fontSize: ["6xl", null, "7xl"], lineHeight: 1 },
    "3xl": { fontSize: ["5xl", null, "6xl"], lineHeight: 1 },
    "2xl": { fontSize: ["4xl", null, "5xl"], lineHeight: [1.2, null, 1] },
    xl: { fontSize: ["3xl", null, "4xl"], lineHeight: [1.33, null, 1.2] },
    lg: { fontSize: ["2xl", null, "3xl"], lineHeight: [1.33, null, 1.2] },
    md: { fontSize: "xl", lineHeight: 1.2 },
    sm: { fontSize: "md", lineHeight: 1.2 },
    xs: { fontSize: "sm", lineHeight: 1.2 },
  },
  K6 = { baseStyle: U6, sizes: G6, defaultProps: { size: "xl" } },
  { defineMultiStyleConfig: q6, definePartsStyle: Y6 } = we(fT.keys),
  Jd = W("breadcrumb-link-decor"),
  X6 = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    outline: "none",
    color: "inherit",
    textDecoration: Jd.reference,
    [Jd.variable]: "none",
    "&:not([aria-current=page])": {
      cursor: "pointer",
      _hover: { [Jd.variable]: "underline" },
      _focusVisible: { boxShadow: "outline" },
    },
  },
  Q6 = Y6({ link: X6 }),
  Z6 = q6({ baseStyle: Q6 }),
  J6 = {
    lineHeight: "1.2",
    borderRadius: "md",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: { boxShadow: "outline" },
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: { _disabled: { bg: "initial" } },
  },
  PS = (e) => {
    const { colorScheme: t, theme: n } = e;
    if (t === "gray")
      return {
        color: U("gray.800", "whiteAlpha.900")(e),
        _hover: { bg: U("gray.100", "whiteAlpha.200")(e) },
        _active: { bg: U("gray.200", "whiteAlpha.300")(e) },
      };
    const r = $i(`${t}.200`, 0.12)(n),
      o = $i(`${t}.200`, 0.24)(n);
    return {
      color: U(`${t}.600`, `${t}.200`)(e),
      bg: "transparent",
      _hover: { bg: U(`${t}.50`, r)(e) },
      _active: { bg: U(`${t}.100`, o)(e) },
    };
  },
  e$ = (e) => {
    const { colorScheme: t } = e,
      n = U("gray.200", "whiteAlpha.300")(e);
    return {
      border: "1px solid",
      borderColor: t === "gray" ? n : "currentColor",
      ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":
        { marginEnd: "-1px" },
      ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":
        { marginBottom: "-1px" },
      ...gt(PS, e),
    };
  },
  t$ = {
    yellow: {
      bg: "yellow.400",
      color: "black",
      hoverBg: "yellow.500",
      activeBg: "yellow.600",
    },
    cyan: {
      bg: "cyan.400",
      color: "black",
      hoverBg: "cyan.500",
      activeBg: "cyan.600",
    },
  },
  n$ = (e) => {
    var t;
    const { colorScheme: n } = e;
    if (n === "gray") {
      const l = U("gray.100", "whiteAlpha.200")(e);
      return {
        bg: l,
        color: U("gray.800", "whiteAlpha.900")(e),
        _hover: {
          bg: U("gray.200", "whiteAlpha.300")(e),
          _disabled: { bg: l },
        },
        _active: { bg: U("gray.300", "whiteAlpha.400")(e) },
      };
    }
    const {
        bg: r = `${n}.500`,
        color: o = "white",
        hoverBg: i = `${n}.600`,
        activeBg: s = `${n}.700`,
      } = (t = t$[n]) != null ? t : {},
      a = U(r, `${n}.200`)(e);
    return {
      bg: a,
      color: U(o, "gray.800")(e),
      _hover: { bg: U(i, `${n}.300`)(e), _disabled: { bg: a } },
      _active: { bg: U(s, `${n}.400`)(e) },
    };
  },
  r$ = (e) => {
    const { colorScheme: t } = e;
    return {
      padding: 0,
      height: "auto",
      lineHeight: "normal",
      verticalAlign: "baseline",
      color: U(`${t}.500`, `${t}.200`)(e),
      _hover: {
        textDecoration: "underline",
        _disabled: { textDecoration: "none" },
      },
      _active: { color: U(`${t}.700`, `${t}.500`)(e) },
    };
  },
  o$ = {
    bg: "none",
    color: "inherit",
    display: "inline",
    lineHeight: "inherit",
    m: "0",
    p: "0",
  },
  i$ = { ghost: PS, outline: e$, solid: n$, link: r$, unstyled: o$ },
  s$ = {
    lg: { h: "12", minW: "12", fontSize: "lg", px: "6" },
    md: { h: "10", minW: "10", fontSize: "md", px: "4" },
    sm: { h: "8", minW: "8", fontSize: "sm", px: "3" },
    xs: { h: "6", minW: "6", fontSize: "xs", px: "2" },
  },
  a$ = {
    baseStyle: J6,
    variants: i$,
    sizes: s$,
    defaultProps: { variant: "solid", size: "md", colorScheme: "gray" },
  },
  { definePartsStyle: So, defineMultiStyleConfig: l$ } = we(OT.keys),
  Du = W("card-bg"),
  tr = W("card-padding"),
  TS = W("card-shadow"),
  Ql = W("card-radius"),
  AS = W("card-border-width", "0"),
  RS = W("card-border-color"),
  u$ = So({
    container: {
      [Du.variable]: "colors.chakra-body-bg",
      backgroundColor: Du.reference,
      boxShadow: TS.reference,
      borderRadius: Ql.reference,
      color: "chakra-body-text",
      borderWidth: AS.reference,
      borderColor: RS.reference,
    },
    body: { padding: tr.reference, flex: "1 1 0%" },
    header: { padding: tr.reference },
    footer: { padding: tr.reference },
  }),
  c$ = {
    sm: So({
      container: { [Ql.variable]: "radii.base", [tr.variable]: "space.3" },
    }),
    md: So({
      container: { [Ql.variable]: "radii.md", [tr.variable]: "space.5" },
    }),
    lg: So({
      container: { [Ql.variable]: "radii.xl", [tr.variable]: "space.7" },
    }),
  },
  d$ = {
    elevated: So({
      container: {
        [TS.variable]: "shadows.base",
        _dark: { [Du.variable]: "colors.gray.700" },
      },
    }),
    outline: So({
      container: {
        [AS.variable]: "1px",
        [RS.variable]: "colors.chakra-border-color",
      },
    }),
    filled: So({ container: { [Du.variable]: "colors.chakra-subtle-bg" } }),
    unstyled: {
      body: { [tr.variable]: 0 },
      header: { [tr.variable]: 0 },
      footer: { [tr.variable]: 0 },
    },
  },
  f$ = l$({
    baseStyle: u$,
    variants: d$,
    sizes: c$,
    defaultProps: { variant: "elevated", size: "md" },
  }),
  Is = Ke("close-button-size"),
  as = Ke("close-button-bg"),
  p$ = {
    w: [Is.reference],
    h: [Is.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: {
      [as.variable]: "colors.blackAlpha.100",
      _dark: { [as.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [as.variable]: "colors.blackAlpha.200",
      _dark: { [as.variable]: "colors.whiteAlpha.200" },
    },
    _focusVisible: { boxShadow: "outline" },
    bg: as.reference,
  },
  h$ = {
    lg: { [Is.variable]: "sizes.10", fontSize: "md" },
    md: { [Is.variable]: "sizes.8", fontSize: "xs" },
    sm: { [Is.variable]: "sizes.6", fontSize: "2xs" },
  },
  m$ = { baseStyle: p$, sizes: h$, defaultProps: { size: "md" } },
  { variants: g$, defaultProps: v$ } = zs,
  y$ = {
    fontFamily: "mono",
    fontSize: "sm",
    px: "0.2em",
    borderRadius: "sm",
    bg: Fe.bg.reference,
    color: Fe.color.reference,
    boxShadow: Fe.shadow.reference,
  },
  b$ = { baseStyle: y$, variants: g$, defaultProps: v$ },
  x$ = { w: "100%", mx: "auto", maxW: "prose", px: "4" },
  S$ = { baseStyle: x$ },
  w$ = { opacity: 0.6, borderColor: "inherit" },
  k$ = { borderStyle: "solid" },
  C$ = { borderStyle: "dashed" },
  E$ = { solid: k$, dashed: C$ },
  _$ = { baseStyle: w$, variants: E$, defaultProps: { variant: "solid" } },
  { definePartsStyle: P$, defineMultiStyleConfig: T$ } = we(uT.keys),
  A$ = {
    borderTopWidth: "1px",
    borderColor: "inherit",
    _last: { borderBottomWidth: "1px" },
  },
  R$ = {
    transitionProperty: "common",
    transitionDuration: "normal",
    fontSize: "md",
    _focusVisible: { boxShadow: "outline" },
    _hover: { bg: "blackAlpha.50" },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    px: "4",
    py: "2",
  },
  $$ = { pt: "2", px: "4", pb: "5" },
  M$ = { fontSize: "1.25em" },
  O$ = P$({ container: A$, button: R$, panel: $$, icon: M$ }),
  z$ = T$({ baseStyle: O$ }),
  { definePartsStyle: Ta, defineMultiStyleConfig: L$ } = we(cT.keys),
  jt = W("alert-fg"),
  ur = W("alert-bg"),
  I$ = Ta({
    container: { bg: ur.reference, px: "4", py: "3" },
    title: { fontWeight: "bold", lineHeight: "6", marginEnd: "2" },
    description: { lineHeight: "6" },
    icon: {
      color: jt.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "6",
    },
    spinner: {
      color: jt.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "5",
    },
  });
function hm(e) {
  const { theme: t, colorScheme: n } = e,
    r = $i(`${n}.200`, 0.16)(t);
  return { light: `colors.${n}.100`, dark: r };
}
var D$ = Ta((e) => {
    const { colorScheme: t } = e,
      n = hm(e);
    return {
      container: {
        [jt.variable]: `colors.${t}.500`,
        [ur.variable]: n.light,
        _dark: { [jt.variable]: `colors.${t}.200`, [ur.variable]: n.dark },
      },
    };
  }),
  j$ = Ta((e) => {
    const { colorScheme: t } = e,
      n = hm(e);
    return {
      container: {
        [jt.variable]: `colors.${t}.500`,
        [ur.variable]: n.light,
        _dark: { [jt.variable]: `colors.${t}.200`, [ur.variable]: n.dark },
        paddingStart: "3",
        borderStartWidth: "4px",
        borderStartColor: jt.reference,
      },
    };
  }),
  F$ = Ta((e) => {
    const { colorScheme: t } = e,
      n = hm(e);
    return {
      container: {
        [jt.variable]: `colors.${t}.500`,
        [ur.variable]: n.light,
        _dark: { [jt.variable]: `colors.${t}.200`, [ur.variable]: n.dark },
        pt: "2",
        borderTopWidth: "4px",
        borderTopColor: jt.reference,
      },
    };
  }),
  B$ = Ta((e) => {
    const { colorScheme: t } = e;
    return {
      container: {
        [jt.variable]: "colors.white",
        [ur.variable]: `colors.${t}.500`,
        _dark: {
          [jt.variable]: "colors.gray.900",
          [ur.variable]: `colors.${t}.200`,
        },
        color: jt.reference,
      },
    };
  }),
  N$ = { subtle: D$, "left-accent": j$, "top-accent": F$, solid: B$ },
  V$ = L$({
    baseStyle: I$,
    variants: N$,
    defaultProps: { variant: "subtle", colorScheme: "blue" },
  }),
  { definePartsStyle: $S, defineMultiStyleConfig: W$ } = we(dT.keys),
  wi = W("avatar-border-color"),
  Ds = W("avatar-bg"),
  ma = W("avatar-font-size"),
  Mi = W("avatar-size"),
  H$ = {
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: wi.reference,
    [wi.variable]: "white",
    _dark: { [wi.variable]: "colors.gray.800" },
  },
  U$ = {
    bg: Ds.reference,
    fontSize: ma.reference,
    width: Mi.reference,
    height: Mi.reference,
    lineHeight: "1",
    [Ds.variable]: "colors.gray.200",
    _dark: { [Ds.variable]: "colors.whiteAlpha.400" },
  },
  G$ = (e) => {
    const { name: t, theme: n } = e,
      r = t ? JT({ string: t }) : "colors.gray.400",
      o = QT(r)(n);
    let i = "white";
    return (
      o || (i = "gray.800"),
      {
        bg: Ds.reference,
        fontSize: ma.reference,
        color: i,
        borderColor: wi.reference,
        verticalAlign: "top",
        width: Mi.reference,
        height: Mi.reference,
        "&:not([data-loaded])": { [Ds.variable]: r },
        [wi.variable]: "colors.white",
        _dark: { [wi.variable]: "colors.gray.800" },
      }
    );
  },
  K$ = { fontSize: ma.reference, lineHeight: "1" },
  q$ = $S((e) => ({
    badge: gt(H$, e),
    excessLabel: gt(U$, e),
    container: gt(G$, e),
    label: K$,
  }));
function yr(e) {
  const t = e !== "100%" ? SS[e] : void 0;
  return $S({
    container: {
      [Mi.variable]: t ?? e,
      [ma.variable]: `calc(${t ?? e} / 2.5)`,
    },
    excessLabel: {
      [Mi.variable]: t ?? e,
      [ma.variable]: `calc(${t ?? e} / 2.5)`,
    },
  });
}
var Y$ = {
    "2xs": yr(4),
    xs: yr(6),
    sm: yr(8),
    md: yr(12),
    lg: yr(16),
    xl: yr(24),
    "2xl": yr(32),
    full: yr("100%"),
  },
  X$ = W$({ baseStyle: q$, sizes: Y$, defaultProps: { size: "md" } }),
  Q$ = {
    Accordion: z$,
    Alert: V$,
    Avatar: X$,
    Badge: zs,
    Breadcrumb: Z6,
    Button: a$,
    Checkbox: Iu,
    CloseButton: m$,
    Code: b$,
    Container: S$,
    Divider: _$,
    Drawer: k6,
    Editable: R6,
    Form: I6,
    FormError: V6,
    FormLabel: H6,
    Heading: K6,
    Input: pe,
    Kbd: pR,
    Link: mR,
    List: xR,
    Menu: $R,
    Modal: VR,
    NumberInput: QR,
    PinInput: t6,
    Popover: f6,
    Progress: bA,
    Radio: MA,
    Select: FA,
    Skeleton: NA,
    SkipLink: WA,
    Slider: eR,
    Spinner: rR,
    Stat: dR,
    Switch: m3,
    Table: w3,
    Tabs: D3,
    Tag: X3,
    Textarea: lA,
    Tooltip: dA,
    Card: f$,
    Stepper: lT,
  },
  Z$ = {
    colors: {
      "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
      "chakra-body-bg": { _light: "white", _dark: "gray.800" },
      "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
      "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
      "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
      "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
      "chakra-placeholder-color": {
        _light: "gray.500",
        _dark: "whiteAlpha.400",
      },
    },
  },
  J$ = {
    global: {
      body: {
        fontFamily: "body",
        color: "chakra-body-text",
        bg: "chakra-body-bg",
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base",
      },
      "*::placeholder": { color: "chakra-placeholder-color" },
      "*, *::before, &::after": { borderColor: "chakra-border-color" },
    },
  },
  eM = "ltr",
  tM = {
    useSystemColorMode: !1,
    initialColorMode: "light",
    cssVarPrefix: "chakra",
  },
  MS = {
    semanticTokens: Z$,
    direction: eM,
    ...iT,
    components: Q$,
    styles: J$,
    config: tM,
  };
function Ss(e) {
  return typeof e == "function";
}
function nM(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
var rM = (e) =>
    function (...n) {
      let r = [...n],
        o = n[n.length - 1];
      return (
        LP(o) && r.length > 1 ? (r = r.slice(0, r.length - 1)) : (o = e),
        nM(...r.map((i) => (s) => Ss(i) ? i(s) : iM(s, i)))(o)
      );
    },
  oM = rM(MS);
function iM(...e) {
  return rn({}, ...e, OS);
}
function OS(e, t, n, r) {
  if ((Ss(e) || Ss(t)) && Object.prototype.hasOwnProperty.call(r, n))
    return (...o) => {
      const i = Ss(e) ? e(...o) : e,
        s = Ss(t) ? t(...o) : t;
      return rn({}, i, s, OS);
    };
}
function sM(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      t.includes(r) || (n[r] = e[r]);
    }),
    n
  );
}
function aM(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
var lM = (e) => {
    const t = new WeakMap();
    return (r, o, i, s) => {
      if (typeof r > "u") return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const a = t.get(r);
      if (a.has(o)) return a.get(o);
      const l = e(r, o, i, s);
      return a.set(o, l), l;
    };
  },
  zS = lM(aM);
function LS(e, t) {
  const n = {};
  return (
    Object.keys(e).forEach((r) => {
      const o = e[r];
      t(o, r, e) && (n[r] = o);
    }),
    n
  );
}
var IS = (e) => LS(e, (t) => t != null);
function uM(e) {
  return typeof e == "function";
}
function DS(e, ...t) {
  return uM(e) ? e(...t) : e;
}
var cM = typeof Element < "u",
  dM = typeof Map == "function",
  fM = typeof Set == "function",
  pM = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Zl(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Zl(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (dM && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!Zl(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (fM && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (pM && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (cM && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
          e.$$typeof
        ) &&
        !Zl(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var hM = function (t, n) {
  try {
    return Zl(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const mM = th(hM);
function jS(e, t = {}) {
  var n;
  const { styleConfig: r, ...o } = t,
    { theme: i, colorMode: s } = p4(),
    a = e ? zS(i, `components.${e}`) : void 0,
    l = r || a,
    u = rn(
      { theme: i, colorMode: s },
      (n = l == null ? void 0 : l.defaultProps) != null ? n : {},
      IS(sM(o, ["children"]))
    ),
    c = x.useRef({});
  if (l) {
    const f = OP(l)(u);
    mM(c.current, f) || (c.current = f);
  }
  return c.current;
}
function Yr(e, t = {}) {
  return jS(e, t);
}
function Xr(e, t = {}) {
  return jS(e, t);
}
var gM = new Set([
    ...SP,
    "textStyle",
    "layerStyle",
    "apply",
    "noOfLines",
    "focusBorderColor",
    "errorBorderColor",
    "as",
    "__css",
    "css",
    "sx",
  ]),
  vM = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
function yM(e) {
  return vM.has(e) || !gM.has(e);
}
function bM(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) &&
          (o in n && delete n[o], (n[o] = r[o]));
  return n;
}
function mm(e) {
  const t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
var xM =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  SM = qx(function (e) {
    return (
      xM.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  wM = SM,
  kM = function (t) {
    return t !== "theme";
  },
  Iv = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? wM : kM;
  },
  Dv = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  CM = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      eS(n, r, o),
      H_(function () {
        return tS(n, r, o);
      }),
      null
    );
  },
  EM = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = Dv(t, n, r),
      l = a || Iv(o),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, p = 1; p < f; p++) d.push(c[p], c[0][p]);
      }
      var m = iS(function (y, w, g) {
        var h = (u && y.as) || o,
          v = "",
          S = [],
          P = y;
        if (y.theme == null) {
          P = {};
          for (var T in y) P[T] = y[T];
          P.theme = x.useContext(da);
        }
        typeof y.className == "string"
          ? (v = D_(w.registered, S, y.className))
          : y.className != null && (v = y.className + " ");
        var _ = rm(d.concat(S), w.registered, P);
        (v += w.key + "-" + _.name), s !== void 0 && (v += " " + s);
        var A = u && a === void 0 ? Iv(h) : l,
          O = {};
        for (var M in y) (u && M === "as") || (A(M) && (O[M] = y[M]));
        return (
          (O.className = v),
          (O.ref = g),
          x.createElement(
            x.Fragment,
            null,
            x.createElement(CM, {
              cache: w,
              serialized: _,
              isStringTag: typeof h == "string",
            }),
            x.createElement(h, O)
          )
        );
      });
      return (
        (m.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (m.defaultProps = t.defaultProps),
        (m.__emotion_real = m),
        (m.__emotion_base = o),
        (m.__emotion_styles = d),
        (m.__emotion_forwardProp = a),
        Object.defineProperty(m, "toString", {
          value: function () {
            return "." + s;
          },
        }),
        (m.withComponent = function (y, w) {
          return e(y, Mu({}, n, w, { shouldForwardProp: Dv(m, w, !0) })).apply(
            void 0,
            d
          );
        }),
        m
      );
    };
  },
  _M = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  ju = EM.bind();
_M.forEach(function (e) {
  ju[e] = ju(e);
});
var jv,
  PM = (jv = ju.default) != null ? jv : ju,
  TM =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: n, css: r, __css: o, sx: i, ...s } = t,
        a = LS(s, (d, f) => kP(f)),
        l = DS(e, t),
        u = bM({}, o, l, IS(a), i),
        c = yS(u)(t.theme);
      return r ? [c, r] : c;
    };
function ef(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = yM);
  const o = TM({ baseStyle: n }),
    i = PM(e, r)(o);
  return Lt.forwardRef(function (l, u) {
    const { colorMode: c, forced: d } = Pc();
    return Lt.createElement(i, { ref: u, "data-theme": d ? c : void 0, ...l });
  });
}
function AM() {
  const e = new Map();
  return new Proxy(ef, {
    apply(t, n, r) {
      return ef(...r);
    },
    get(t, n) {
      return e.has(n) || e.set(n, ef(n)), e.get(n);
    },
  });
}
var q = AM();
function ee(e) {
  return x.forwardRef(e);
}
function FS(e = {}) {
  const {
      strict: t = !0,
      errorMessage:
        n = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
      name: r,
    } = e,
    o = x.createContext(void 0);
  o.displayName = r;
  function i() {
    var s;
    const a = x.useContext(o);
    if (!a && t) {
      const l = new Error(n);
      throw (
        ((l.name = "ContextError"),
        (s = Error.captureStackTrace) == null || s.call(Error, l, i),
        l)
      );
    }
    return a;
  }
  return [o.Provider, i, o];
}
function RM(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e,
    o = x.useMemo(() => xP(n), [n]);
  return k.jsxs(K_, { theme: o, children: [k.jsx($M, { root: t }), r] });
}
function $M({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return k.jsx(Ec, { styles: (n) => ({ [t]: n.__cssVars }) });
}
FS({
  name: "StylesContext",
  errorMessage:
    "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ",
});
function MM(e) {
  return FS({
    name: `${e}StylesContext`,
    errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${e} />" `,
  });
}
function OM() {
  const { colorMode: e } = Pc();
  return k.jsx(Ec, {
    styles: (t) => {
      const n = zS(t, "styles.global"),
        r = DS(n, { theme: t, colorMode: e });
      return r ? yS(r)(t) : void 0;
    },
  });
}
var gm = x.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  },
});
gm.displayName = "EnvironmentContext";
function zM({ defer: e } = {}) {
  const [, t] = x.useReducer((n) => n + 1, 0);
  return (
    er(() => {
      e && t();
    }, [e]),
    x.useContext(gm)
  );
}
function BS(e) {
  const { children: t, environment: n, disabled: r } = e,
    o = x.useRef(null),
    i = x.useMemo(
      () =>
        n || {
          getDocument: () => {
            var a, l;
            return (l = (a = o.current) == null ? void 0 : a.ownerDocument) !=
              null
              ? l
              : document;
          },
          getWindow: () => {
            var a, l;
            return (l =
              (a = o.current) == null ? void 0 : a.ownerDocument.defaultView) !=
              null
              ? l
              : window;
          },
        },
      [n]
    ),
    s = !r || !n;
  return k.jsxs(gm.Provider, {
    value: i,
    children: [
      t,
      s && k.jsx("span", { id: "__chakra_env", hidden: !0, ref: o }),
    ],
  });
}
BS.displayName = "EnvironmentProvider";
var LM = (e) => {
    const {
        children: t,
        colorModeManager: n,
        portalZIndex: r,
        resetScope: o,
        resetCSS: i = !0,
        theme: s = {},
        environment: a,
        cssVarsRoot: l,
        disableEnvironment: u,
        disableGlobalStyle: c,
      } = e,
      d = k.jsx(BS, { environment: a, disabled: u, children: t });
    return k.jsx(RM, {
      theme: s,
      cssVarsRoot: l,
      children: k.jsxs(cS, {
        colorModeManager: n,
        options: s.config,
        children: [
          i ? k.jsx(X_, { scope: o }) : k.jsx(Y_, {}),
          !c && k.jsx(OM, {}),
          r ? k.jsx(lS, { zIndex: r, children: d }) : d,
        ],
      }),
    });
  },
  IM = (e, t) => e.find((n) => n.id === t);
function Fv(e, t) {
  const n = NS(e, t),
    r = n ? e[n].findIndex((o) => o.id === t) : -1;
  return { position: n, index: r };
}
function NS(e, t) {
  for (const [n, r] of Object.entries(e)) if (IM(r, t)) return n;
}
function DM(e) {
  const t = e.includes("right"),
    n = e.includes("left");
  let r = "center";
  return (
    t && (r = "flex-end"),
    n && (r = "flex-start"),
    { display: "flex", flexDirection: "column", alignItems: r }
  );
}
function jM(e) {
  const n = e === "top" || e === "bottom" ? "0 auto" : void 0,
    r = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
    o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0,
    i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
    s = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: n,
    top: r,
    bottom: o,
    right: i,
    left: s,
  };
}
function Dr(e, t = []) {
  const n = x.useRef(e);
  return (
    x.useEffect(() => {
      n.current = e;
    }),
    x.useCallback((...r) => {
      var o;
      return (o = n.current) == null ? void 0 : o.call(n, ...r);
    }, t)
  );
}
function FM(e, t) {
  const n = Dr(e);
  x.useEffect(() => {
    if (t == null) return;
    let r = null;
    return (
      (r = window.setTimeout(() => {
        n();
      }, t)),
      () => {
        r && window.clearTimeout(r);
      }
    );
  }, [t, n]);
}
function Oi(e, t) {
  const n = x.useRef(!1),
    r = x.useRef(!1);
  x.useEffect(() => {
    if (n.current && r.current) return e();
    r.current = !0;
  }, t),
    x.useEffect(
      () => (
        (n.current = !0),
        () => {
          n.current = !1;
        }
      ),
      []
    );
}
const VS = x.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Mc = x.createContext({}),
  Aa = x.createContext(null),
  Oc = typeof document < "u",
  vm = Oc ? x.useLayoutEffect : x.useEffect,
  WS = x.createContext({ strict: !1 });
function BM(e, t, n, r) {
  const { visualElement: o } = x.useContext(Mc),
    i = x.useContext(WS),
    s = x.useContext(Aa),
    a = x.useContext(VS).reducedMotion,
    l = x.useRef();
  (r = r || i.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const u = l.current;
  x.useInsertionEffect(() => {
    u && u.update(n, s);
  });
  const c = x.useRef(!!window.HandoffAppearAnimations);
  return (
    vm(() => {
      u &&
        (u.render(),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    x.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        (window.HandoffAppearAnimations = void 0),
        (c.current = !1));
    }),
    u
  );
}
function li(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function NM(e, t, n) {
  return x.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : li(n) && (n.current = r));
    },
    [t]
  );
}
function ga(e) {
  return typeof e == "string" || Array.isArray(e);
}
function zc(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const ym = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  bm = ["initial", ...ym];
function Lc(e) {
  return zc(e.animate) || bm.some((t) => ga(e[t]));
}
function HS(e) {
  return !!(Lc(e) || e.variants);
}
function VM(e, t) {
  if (Lc(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ga(n) ? n : void 0,
      animate: ga(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function WM(e) {
  const { initial: t, animate: n } = VM(e, x.useContext(Mc));
  return x.useMemo(() => ({ initial: t, animate: n }), [Bv(t), Bv(n)]);
}
function Bv(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Nv = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  va = {};
for (const e in Nv) va[e] = { isEnabled: (t) => Nv[e].some((n) => !!t[n]) };
function HM(e) {
  for (const t in e) va[t] = { ...va[t], ...e[t] };
}
const xm = x.createContext({}),
  US = x.createContext({}),
  UM = Symbol.for("motionComponentSymbol");
function GM({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && HM(e);
  function i(a, l) {
    let u;
    const c = { ...x.useContext(VS), ...a, layoutId: KM(a) },
      { isStatic: d } = c,
      f = WM(a),
      p = r(a, d);
    if (!d && Oc) {
      f.visualElement = BM(o, p, c, t);
      const m = x.useContext(US),
        y = x.useContext(WS).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, y, e, m));
    }
    return x.createElement(
      Mc.Provider,
      { value: f },
      u && f.visualElement
        ? x.createElement(u, { visualElement: f.visualElement, ...c })
        : null,
      n(o, a, NM(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const s = x.forwardRef(i);
  return (s[UM] = o), s;
}
function KM({ layoutId: e }) {
  const t = x.useContext(xm).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function qM(e) {
  function t(r, o = {}) {
    return GM(e(r, o));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o)),
  });
}
const YM = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Sm(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(YM.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Fu = {};
function XM(e) {
  Object.assign(Fu, e);
}
const Ra = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Oo = new Set(Ra);
function GS(e, { layout: t, layoutId: n }) {
  return (
    Oo.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Fu[e] || e === "opacity"))
  );
}
const Rt = (e) => !!(e && e.getVelocity),
  QM = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  ZM = Ra.length;
function JM(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  o
) {
  let i = "";
  for (let s = 0; s < ZM; s++) {
    const a = Ra[s];
    if (e[a] !== void 0) {
      const l = QM[a] || a;
      i += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (i += "translateZ(0)"),
    (i = i.trim()),
    o ? (i = o(e, r ? "" : i)) : n && r && (i = "none"),
    i
  );
}
const KS = (e) => (t) => typeof t == "string" && t.startsWith(e),
  qS = KS("--"),
  _p = KS("var(--"),
  eO =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  tO = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Wr = (e, t, n) => Math.min(Math.max(n, e), t),
  zo = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  js = { ...zo, transform: (e) => Wr(0, 1, e) },
  kl = { ...zo, default: 1 },
  Fs = (e) => Math.round(e * 1e5) / 1e5,
  Ic = /(-)?([\d]*\.?[\d])+/g,
  YS =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  nO =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function $a(e) {
  return typeof e == "string";
}
const Ma = (e) => ({
    test: (t) => $a(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  xr = Ma("deg"),
  In = Ma("%"),
  K = Ma("px"),
  rO = Ma("vh"),
  oO = Ma("vw"),
  Vv = {
    ...In,
    parse: (e) => In.parse(e) / 100,
    transform: (e) => In.transform(e * 100),
  },
  Wv = { ...zo, transform: Math.round },
  XS = {
    borderWidth: K,
    borderTopWidth: K,
    borderRightWidth: K,
    borderBottomWidth: K,
    borderLeftWidth: K,
    borderRadius: K,
    radius: K,
    borderTopLeftRadius: K,
    borderTopRightRadius: K,
    borderBottomRightRadius: K,
    borderBottomLeftRadius: K,
    width: K,
    maxWidth: K,
    height: K,
    maxHeight: K,
    size: K,
    top: K,
    right: K,
    bottom: K,
    left: K,
    padding: K,
    paddingTop: K,
    paddingRight: K,
    paddingBottom: K,
    paddingLeft: K,
    margin: K,
    marginTop: K,
    marginRight: K,
    marginBottom: K,
    marginLeft: K,
    rotate: xr,
    rotateX: xr,
    rotateY: xr,
    rotateZ: xr,
    scale: kl,
    scaleX: kl,
    scaleY: kl,
    scaleZ: kl,
    skew: xr,
    skewX: xr,
    skewY: xr,
    distance: K,
    translateX: K,
    translateY: K,
    translateZ: K,
    x: K,
    y: K,
    z: K,
    perspective: K,
    transformPerspective: K,
    opacity: js,
    originX: Vv,
    originY: Vv,
    originZ: K,
    zIndex: Wv,
    fillOpacity: js,
    strokeOpacity: js,
    numOctaves: Wv,
  };
function wm(e, t, n, r) {
  const { style: o, vars: i, transform: s, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (qS(d)) {
      i[d] = f;
      continue;
    }
    const p = XS[d],
      m = tO(f, p);
    if (Oo.has(d)) {
      if (((l = !0), (s[d] = m), !c)) continue;
      f !== (p.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (a[d] = m)) : (o[d] = m);
  }
  if (
    (t.transform ||
      (l || r
        ? (o.transform = JM(e.transform, n, c, r))
        : o.transform && (o.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = a;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const km = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function QS(e, t, n) {
  for (const r in t) !Rt(t[r]) && !GS(r, n) && (e[r] = t[r]);
}
function iO({ transformTemplate: e }, t, n) {
  return x.useMemo(() => {
    const r = km();
    return (
      wm(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function sO(e, t, n) {
  const r = e.style || {},
    o = {};
  return (
    QS(o, r, e),
    Object.assign(o, iO(e, t, n)),
    e.transformValues ? e.transformValues(o) : o
  );
}
function aO(e, t, n) {
  const r = {},
    o = sO(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = o),
    r
  );
}
const lO = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport",
]);
function Bu(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    lO.has(e)
  );
}
let ZS = (e) => !Bu(e);
function uO(e) {
  e && (ZS = (t) => (t.startsWith("on") ? !Bu(t) : e(t)));
}
try {
  uO(require("@emotion/is-prop-valid").default);
} catch {}
function cO(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((ZS(o) ||
        (n === !0 && Bu(o)) ||
        (!t && !Bu(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function Hv(e, t, n) {
  return typeof e == "string" ? e : K.transform(t + n * e);
}
function dO(e, t, n) {
  const r = Hv(t, e.x, e.width),
    o = Hv(n, e.y, e.height);
  return `${r} ${o}`;
}
const fO = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  pO = { offset: "strokeDashoffset", array: "strokeDasharray" };
function hO(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? fO : pO;
  e[i.offset] = K.transform(-r);
  const s = K.transform(t),
    a = K.transform(n);
  e[i.array] = `${s} ${a}`;
}
function Cm(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  f
) {
  if ((wm(e, u, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: p, style: m, dimensions: y } = e;
  p.transform && (y && (m.transform = p.transform), delete p.transform),
    y &&
      (o !== void 0 || i !== void 0 || m.transform) &&
      (m.transformOrigin = dO(
        y,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (p.x = t),
    n !== void 0 && (p.y = n),
    r !== void 0 && (p.scale = r),
    s !== void 0 && hO(p, s, a, l, !1);
}
const JS = () => ({ ...km(), attrs: {} }),
  Em = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function mO(e, t, n, r) {
  const o = x.useMemo(() => {
    const i = JS();
    return (
      Cm(i, t, { enableHardwareAcceleration: !1 }, Em(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    QS(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function gO(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const l = (Sm(n) ? mO : aO)(r, i, s, n),
      c = { ...cO(r, typeof n == "string", e), ...l, ref: o },
      { children: d } = r,
      f = x.useMemo(() => (Rt(d) ? d.get() : d), [d]);
    return x.createElement(n, { ...c, children: f });
  };
}
const _m = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function ew(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const tw = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function nw(e, t, n, r) {
  ew(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(tw.has(o) ? o : _m(o), t.attrs[o]);
}
function Pm(e, t) {
  const { style: n } = e,
    r = {};
  for (const o in n)
    (Rt(n[o]) || (t.style && Rt(t.style[o])) || GS(o, e)) && (r[o] = n[o]);
  return r;
}
function rw(e, t) {
  const n = Pm(e, t);
  for (const r in e)
    if (Rt(e[r]) || Rt(t[r])) {
      const o =
        Ra.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[o] = e[r];
    }
  return n;
}
function Tm(e, t, n, r = {}, o = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)),
    t
  );
}
function ow(e) {
  const t = x.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Nu = (e) => Array.isArray(e),
  vO = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  yO = (e) => (Nu(e) ? e[e.length - 1] || 0 : e);
function Jl(e) {
  const t = Rt(e) ? e.get() : e;
  return vO(t) ? t.toValue() : t;
}
function bO(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  o,
  i
) {
  const s = { latestValues: xO(r, o, i, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const iw = (e) => (t, n) => {
  const r = x.useContext(Mc),
    o = x.useContext(Aa),
    i = () => bO(e, t, r, o);
  return n ? i() : ow(i);
};
function xO(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const f in i) o[f] = Jl(i[f]);
  let { initial: s, animate: a } = e;
  const l = Lc(e),
    u = HS(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  return (
    d &&
      typeof d != "boolean" &&
      !zc(d) &&
      (Array.isArray(d) ? d : [d]).forEach((p) => {
        const m = Tm(e, p);
        if (!m) return;
        const { transitionEnd: y, transition: w, ...g } = m;
        for (const h in g) {
          let v = g[h];
          if (Array.isArray(v)) {
            const S = c ? v.length - 1 : 0;
            v = v[S];
          }
          v !== null && (o[h] = v);
        }
        for (const h in y) o[h] = y[h];
      }),
    o
  );
}
const Ie = (e) => e;
class Uv {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function SO(e) {
  let t = new Uv(),
    n = new Uv(),
    r = 0,
    o = !1,
    i = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && o,
          f = d ? t : n;
        return u && s.add(l), f.add(l) && d && o && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), s.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            c(l), s.has(c) && (a.schedule(c), e());
          }
        (o = !1), i && ((i = !1), a.process(l));
      },
    };
  return a;
}
const Cl = ["prepare", "read", "update", "preRender", "render", "postRender"],
  wO = 40;
function kO(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = Cl.reduce((d, f) => ((d[f] = SO(() => (n = !0))), d), {}),
    s = (d) => i[d].process(o),
    a = () => {
      const d = performance.now();
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, wO), 1)),
        (o.timestamp = d),
        (o.isProcessing = !0),
        Cl.forEach(s),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    l = () => {
      (n = !0), (r = !0), o.isProcessing || e(a);
    };
  return {
    schedule: Cl.reduce((d, f) => {
      const p = i[f];
      return (d[f] = (m, y = !1, w = !1) => (n || l(), p.schedule(m, y, w))), d;
    }, {}),
    cancel: (d) => Cl.forEach((f) => i[f].cancel(d)),
    state: o,
    steps: i,
  };
}
const {
    schedule: Se,
    cancel: cr,
    state: qe,
    steps: tf,
  } = kO(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ie, !0),
  CO = {
    useVisualState: iw({
      scrapeMotionValuesFromProps: rw,
      createRenderState: JS,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        Se.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          Se.render(() => {
            Cm(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Em(t.tagName),
              e.transformTemplate
            ),
              nw(t, n);
          });
      },
    }),
  },
  EO = {
    useVisualState: iw({
      scrapeMotionValuesFromProps: Pm,
      createRenderState: km,
    }),
  };
function _O(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Sm(e) ? CO : EO),
    preloadedFeatures: n,
    useRender: gO(t),
    createVisualElement: r,
    Component: e,
  };
}
function Zn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const sw = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Dc(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const PO = (e) => (t) => sw(t) && e(t, Dc(t));
function nr(e, t, n, r) {
  return Zn(e, t, PO(n), r);
}
const TO = (e, t) => (n) => t(e(n)),
  jr = (...e) => e.reduce(TO);
function aw(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Gv = aw("dragHorizontal"),
  Kv = aw("dragVertical");
function lw(e) {
  let t = !1;
  if (e === "y") t = Kv();
  else if (e === "x") t = Gv();
  else {
    const n = Gv(),
      r = Kv();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function uw() {
  const e = lw(!0);
  return e ? (e(), !1) : !0;
}
class Qr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function qv(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    o = (i, s) => {
      if (i.type === "touch" || uw()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t),
        a[r] && Se.update(() => a[r](i, s));
    };
  return nr(e.current, n, o, { passive: !e.getProps()[r] });
}
class AO extends Qr {
  mount() {
    this.unmount = jr(qv(this.node, !0), qv(this.node, !1));
  }
  unmount() {}
}
class RO extends Qr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = jr(
      Zn(this.node.current, "focus", () => this.onFocus()),
      Zn(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const cw = (e, t) => (t ? (e === t ? !0 : cw(e, t.parentElement)) : !1);
function nf(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Dc(n));
}
class $O extends Qr {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ie),
      (this.removeEndListeners = Ie),
      (this.removeAccessibleListeners = Ie),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          i = nr(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              Se.update(() => {
                cw(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = nr(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = jr(i, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                nf("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && Se.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Zn(this.node.current, "keyup", s)),
              nf("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Zn(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && nf("cancel", (i, s) => this.cancelPress(i, s));
          },
          o = Zn(this.node.current, "blur", r);
        this.removeAccessibleListeners = jr(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && Se.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !uw()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && Se.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = nr(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = Zn(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = jr(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Pp = new WeakMap(),
  rf = new WeakMap(),
  MO = (e) => {
    const t = Pp.get(e.target);
    t && t(e);
  },
  OO = (e) => {
    e.forEach(MO);
  };
function zO({ root: e, ...t }) {
  const n = e || document;
  rf.has(n) || rf.set(n, {});
  const r = rf.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(OO, { root: e, ...t })), r[o];
}
function LO(e, t, n) {
  const r = zO(t);
  return (
    Pp.set(e, n),
    r.observe(e),
    () => {
      Pp.delete(e), r.unobserve(e);
    }
  );
}
const IO = { some: 0, all: 1 };
class DO extends Qr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : IO[o],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return LO(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(jO(t, n)) && this.startObserver();
  }
  unmount() {}
}
function jO({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const FO = {
  inView: { Feature: DO },
  tap: { Feature: $O },
  focus: { Feature: RO },
  hover: { Feature: AO },
};
function dw(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function BO(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function NO(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function jc(e, t, n) {
  const r = e.getProps();
  return Tm(r, t, n !== void 0 ? n : r.custom, BO(e), NO(e));
}
const VO = "framerAppearId",
  WO = "data-" + _m(VO);
let HO = Ie,
  Am = Ie;
const Fr = (e) => e * 1e3,
  rr = (e) => e / 1e3,
  UO = { current: !1 },
  fw = (e) => Array.isArray(e) && typeof e[0] == "number";
function pw(e) {
  return !!(
    !e ||
    (typeof e == "string" && hw[e]) ||
    fw(e) ||
    (Array.isArray(e) && e.every(pw))
  );
}
const ws = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  hw = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ws([0, 0.65, 0.55, 1]),
    circOut: ws([0.55, 0, 1, 0.45]),
    backIn: ws([0.31, 0.01, 0.66, -0.59]),
    backOut: ws([0.33, 1.53, 0.69, 0.99]),
  };
function mw(e) {
  if (e) return fw(e) ? ws(e) : Array.isArray(e) ? e.map(mw) : hw[e];
}
function GO(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = mw(a);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function KO(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const gw = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  qO = 1e-7,
  YO = 12;
function XO(e, t, n, r, o) {
  let i,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (i = gw(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > qO && ++a < YO);
  return s;
}
function Oa(e, t, n, r) {
  if (e === t && n === r) return Ie;
  const o = (i) => XO(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : gw(o(i), t, r));
}
const QO = Oa(0.42, 0, 1, 1),
  ZO = Oa(0, 0, 0.58, 1),
  vw = Oa(0.42, 0, 0.58, 1),
  JO = (e) => Array.isArray(e) && typeof e[0] != "number",
  yw = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  bw = (e) => (t) => 1 - e(1 - t),
  xw = (e) => 1 - Math.sin(Math.acos(e)),
  Rm = bw(xw),
  ez = yw(Rm),
  Sw = Oa(0.33, 1.53, 0.69, 0.99),
  $m = bw(Sw),
  tz = yw($m),
  nz = (e) =>
    (e *= 2) < 1 ? 0.5 * $m(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  rz = {
    linear: Ie,
    easeIn: QO,
    easeInOut: vw,
    easeOut: ZO,
    circIn: xw,
    circInOut: ez,
    circOut: Rm,
    backIn: $m,
    backInOut: tz,
    backOut: Sw,
    anticipate: nz,
  },
  Yv = (e) => {
    if (Array.isArray(e)) {
      Am(e.length === 4);
      const [t, n, r, o] = e;
      return Oa(t, n, r, o);
    } else if (typeof e == "string") return rz[e];
    return e;
  },
  Mm = (e, t) => (n) =>
    !!(
      ($a(n) && nO.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  ww = (e, t, n) => (r) => {
    if (!$a(r)) return r;
    const [o, i, s, a] = r.match(Ic);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  oz = (e) => Wr(0, 255, e),
  of = { ...zo, transform: (e) => Math.round(oz(e)) },
  go = {
    test: Mm("rgb", "red"),
    parse: ww("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      of.transform(e) +
      ", " +
      of.transform(t) +
      ", " +
      of.transform(n) +
      ", " +
      Fs(js.transform(r)) +
      ")",
  };
function iz(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Tp = { test: Mm("#"), parse: iz, transform: go.transform },
  ui = {
    test: Mm("hsl", "hue"),
    parse: ww("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      In.transform(Fs(t)) +
      ", " +
      In.transform(Fs(n)) +
      ", " +
      Fs(js.transform(r)) +
      ")",
  },
  ft = {
    test: (e) => go.test(e) || Tp.test(e) || ui.test(e),
    parse: (e) =>
      go.test(e) ? go.parse(e) : ui.test(e) ? ui.parse(e) : Tp.parse(e),
    transform: (e) =>
      $a(e) ? e : e.hasOwnProperty("red") ? go.transform(e) : ui.transform(e),
  },
  $e = (e, t, n) => -n * e + n * t + e;
function sf(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function sz({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (o = sf(l, a, e + 1 / 3)), (i = sf(l, a, e)), (s = sf(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const af = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  az = [Tp, go, ui],
  lz = (e) => az.find((t) => t.test(e));
function Xv(e) {
  const t = lz(e);
  let n = t.parse(e);
  return t === ui && (n = sz(n)), n;
}
const kw = (e, t) => {
  const n = Xv(e),
    r = Xv(t),
    o = { ...n };
  return (i) => (
    (o.red = af(n.red, r.red, i)),
    (o.green = af(n.green, r.green, i)),
    (o.blue = af(n.blue, r.blue, i)),
    (o.alpha = $e(n.alpha, r.alpha, i)),
    go.transform(o)
  );
};
function uz(e) {
  var t, n;
  return (
    isNaN(e) &&
    $a(e) &&
    (((t = e.match(Ic)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(YS)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Cw = { regex: eO, countKey: "Vars", token: "${v}", parse: Ie },
  Ew = { regex: YS, countKey: "Colors", token: "${c}", parse: ft.parse },
  _w = { regex: Ic, countKey: "Numbers", token: "${n}", parse: zo.parse };
function lf(e, { regex: t, countKey: n, token: r, parse: o }) {
  const i = e.tokenised.match(t);
  i &&
    ((e["num" + n] = i.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...i.map(o)));
}
function Vu(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && lf(n, Cw), lf(n, Ew), lf(n, _w), n;
}
function Pw(e) {
  return Vu(e).values;
}
function Tw(e) {
  const { values: t, numColors: n, numVars: r, tokenised: o } = Vu(e),
    i = t.length;
  return (s) => {
    let a = o;
    for (let l = 0; l < i; l++)
      l < r
        ? (a = a.replace(Cw.token, s[l]))
        : l < r + n
        ? (a = a.replace(Ew.token, ft.transform(s[l])))
        : (a = a.replace(_w.token, Fs(s[l])));
    return a;
  };
}
const cz = (e) => (typeof e == "number" ? 0 : e);
function dz(e) {
  const t = Pw(e);
  return Tw(e)(t.map(cz));
}
const Hr = {
    test: uz,
    parse: Pw,
    createTransformer: Tw,
    getAnimatableNone: dz,
  },
  Aw = (e, t) => (n) => `${n > 0 ? t : e}`;
function Rw(e, t) {
  return typeof e == "number"
    ? (n) => $e(e, t, n)
    : ft.test(e)
    ? kw(e, t)
    : e.startsWith("var(")
    ? Aw(e, t)
    : Mw(e, t);
}
const $w = (e, t) => {
    const n = [...e],
      r = n.length,
      o = e.map((i, s) => Rw(i, t[s]));
    return (i) => {
      for (let s = 0; s < r; s++) n[s] = o[s](i);
      return n;
    };
  },
  fz = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const o in n)
      e[o] !== void 0 && t[o] !== void 0 && (r[o] = Rw(e[o], t[o]));
    return (o) => {
      for (const i in r) n[i] = r[i](o);
      return n;
    };
  },
  Mw = (e, t) => {
    const n = Hr.createTransformer(t),
      r = Vu(e),
      o = Vu(t);
    return r.numVars === o.numVars &&
      r.numColors === o.numColors &&
      r.numNumbers >= o.numNumbers
      ? jr($w(r.values, o.values), n)
      : Aw(e, t);
  },
  ya = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Qv = (e, t) => (n) => $e(e, t, n);
function pz(e) {
  return typeof e == "number"
    ? Qv
    : typeof e == "string"
    ? ft.test(e)
      ? kw
      : Mw
    : Array.isArray(e)
    ? $w
    : typeof e == "object"
    ? fz
    : Qv;
}
function hz(e, t, n) {
  const r = [],
    o = n || pz(e[0]),
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Ie : t;
      a = jr(l, a);
    }
    r.push(a);
  }
  return r;
}
function Ow(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((Am(i === t.length), i === 1)) return () => t[0];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = hz(t, r, o),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = ya(e[c], e[c + 1], u);
      return s[c](d);
    };
  return n ? (u) => l(Wr(e[0], e[i - 1], u)) : l;
}
function mz(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = ya(0, t, r);
    e.push($e(n, 1, o));
  }
}
function gz(e) {
  const t = [0];
  return mz(t, e.length - 1), t;
}
function vz(e, t) {
  return e.map((n) => n * t);
}
function yz(e, t) {
  return e.map(() => t || vw).splice(0, e.length - 1);
}
function Wu({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = JO(r) ? r.map(Yv) : Yv(r),
    i = { done: !1, value: t[0] },
    s = vz(n && n.length === t.length ? n : gz(t), e),
    a = Ow(s, t, { ease: Array.isArray(o) ? o : yz(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
function zw(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const bz = 5;
function Lw(e, t, n) {
  const r = Math.max(t - bz, 0);
  return zw(n - e(r), t - r);
}
const uf = 0.001,
  xz = 0.01,
  Zv = 10,
  Sz = 0.05,
  wz = 1;
function kz({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o, i;
  HO(e <= Fr(Zv));
  let s = 1 - t;
  (s = Wr(Sz, wz, s)),
    (e = Wr(xz, Zv, rr(e))),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            d = c * e,
            f = c - n,
            p = Ap(u, s),
            m = Math.exp(-d);
          return uf - (f / p) * m;
        }),
        (i = (u) => {
          const d = u * s * e,
            f = d * n + n,
            p = Math.pow(s, 2) * Math.pow(u, 2) * e,
            m = Math.exp(-d),
            y = Ap(Math.pow(u, 2), s);
          return ((-o(u) + uf > 0 ? -1 : 1) * ((f - p) * m)) / y;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -uf + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = Ez(o, i, a);
  if (((e = Fr(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Cz = 12;
function Ez(e, t, n) {
  let r = n;
  for (let o = 1; o < Cz; o++) r = r - e(r) / t(r);
  return r;
}
function Ap(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const _z = ["duration", "bounce"],
  Pz = ["stiffness", "damping", "mass"];
function Jv(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Tz(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Jv(e, Pz) && Jv(e, _z)) {
    const n = kz(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Iw({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    s = { done: !1, value: o },
    {
      stiffness: a,
      damping: l,
      mass: u,
      velocity: c,
      duration: d,
      isResolvedFromDuration: f,
    } = Tz(r),
    p = c ? -rr(c) : 0,
    m = l / (2 * Math.sqrt(a * u)),
    y = i - o,
    w = rr(Math.sqrt(a / u)),
    g = Math.abs(y) < 5;
  n || (n = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5);
  let h;
  if (m < 1) {
    const v = Ap(w, m);
    h = (S) => {
      const P = Math.exp(-m * w * S);
      return (
        i - P * (((p + m * w * y) / v) * Math.sin(v * S) + y * Math.cos(v * S))
      );
    };
  } else if (m === 1) h = (v) => i - Math.exp(-w * v) * (y + (p + w * y) * v);
  else {
    const v = w * Math.sqrt(m * m - 1);
    h = (S) => {
      const P = Math.exp(-m * w * S),
        T = Math.min(v * S, 300);
      return (
        i - (P * ((p + m * w * y) * Math.sinh(T) + v * y * Math.cosh(T))) / v
      );
    };
  }
  return {
    calculatedDuration: (f && d) || null,
    next: (v) => {
      const S = h(v);
      if (f) s.done = v >= d;
      else {
        let P = p;
        v !== 0 && (m < 1 ? (P = Lw(h, v, S)) : (P = 0));
        const T = Math.abs(P) <= n,
          _ = Math.abs(i - S) <= t;
        s.done = T && _;
      }
      return (s.value = s.done ? i : S), s;
    },
  };
}
function ey({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    p = (A) => (a !== void 0 && A < a) || (l !== void 0 && A > l),
    m = (A) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - A) < Math.abs(l - A)
        ? a
        : l;
  let y = n * t;
  const w = d + y,
    g = s === void 0 ? w : s(w);
  g !== w && (y = g - d);
  const h = (A) => -y * Math.exp(-A / r),
    v = (A) => g + h(A),
    S = (A) => {
      const O = h(A),
        M = v(A);
      (f.done = Math.abs(O) <= u), (f.value = f.done ? g : M);
    };
  let P, T;
  const _ = (A) => {
    p(f.value) &&
      ((P = A),
      (T = Iw({
        keyframes: [f.value, m(f.value)],
        velocity: Lw(v, A, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    _(0),
    {
      calculatedDuration: null,
      next: (A) => {
        let O = !1;
        return (
          !T && P === void 0 && ((O = !0), S(A), _(A)),
          P !== void 0 && A > P ? T.next(A - P) : (!O && S(A), f)
        );
      },
    }
  );
}
const Az = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Se.update(t, !0),
      stop: () => cr(t),
      now: () => (qe.isProcessing ? qe.timestamp : performance.now()),
    };
  },
  ty = 2e4;
function ny(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < ty; ) (t += n), (r = e.next(t));
  return t >= ty ? 1 / 0 : t;
}
const Rz = { decay: ey, inertia: ey, tween: Wu, keyframes: Wu, spring: Iw };
function Hu({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = Az,
  keyframes: r,
  type: o = "keyframes",
  repeat: i = 0,
  repeatDelay: s = 0,
  repeatType: a = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: d,
  ...f
}) {
  let p = 1,
    m = !1,
    y,
    w;
  const g = () => {
    w = new Promise((V) => {
      y = V;
    });
  };
  g();
  let h;
  const v = Rz[o] || Wu;
  let S;
  v !== Wu &&
    typeof r[0] != "number" &&
    ((S = Ow([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const P = v({ ...f, keyframes: r });
  let T;
  a === "mirror" &&
    (T = v({
      ...f,
      keyframes: [...r].reverse(),
      velocity: -(f.velocity || 0),
    }));
  let _ = "idle",
    A = null,
    O = null,
    M = null;
  P.calculatedDuration === null && i && (P.calculatedDuration = ny(P));
  const { calculatedDuration: F } = P;
  let X = 1 / 0,
    Y = 1 / 0;
  F !== null && ((X = F + s), (Y = X * (i + 1) - s));
  let Q = 0;
  const J = (V) => {
      if (O === null) return;
      p > 0 && (O = Math.min(O, V)),
        p < 0 && (O = Math.min(V - Y / p, O)),
        A !== null ? (Q = A) : (Q = Math.round(V - O) * p);
      const te = Q - t * (p >= 0 ? 1 : -1),
        N = p >= 0 ? te < 0 : te > Y;
      (Q = Math.max(te, 0)), _ === "finished" && A === null && (Q = Y);
      let G = Q,
        ke = P;
      if (i) {
        const Gt = Q / X;
        let Kt = Math.floor(Gt),
          ot = Gt % 1;
        !ot && Gt >= 1 && (ot = 1),
          ot === 1 && Kt--,
          (Kt = Math.min(Kt, i + 1));
        const Bn = !!(Kt % 2);
        Bn &&
          (a === "reverse"
            ? ((ot = 1 - ot), s && (ot -= s / X))
            : a === "mirror" && (ke = T));
        let Nn = Wr(0, 1, ot);
        Q > Y && (Nn = a === "reverse" && Bn ? 1 : 0), (G = Nn * X);
      }
      const he = N ? { done: !1, value: r[0] } : ke.next(G);
      S && (he.value = S(he.value));
      let { done: He } = he;
      !N && F !== null && (He = p >= 0 ? Q >= Y : Q <= 0);
      const De = A === null && (_ === "finished" || (_ === "running" && He));
      return d && d(he.value), De && L(), he;
    },
    Z = () => {
      h && h.stop(), (h = void 0);
    },
    z = () => {
      (_ = "idle"), Z(), y(), g(), (O = M = null);
    },
    L = () => {
      (_ = "finished"), c && c(), Z(), y();
    },
    B = () => {
      if (m) return;
      h || (h = n(J));
      const V = h.now();
      l && l(),
        A !== null ? (O = V - A) : (!O || _ === "finished") && (O = V),
        _ === "finished" && g(),
        (M = O),
        (A = null),
        (_ = "running"),
        h.start();
    };
  e && B();
  const H = {
    then(V, te) {
      return w.then(V, te);
    },
    get time() {
      return rr(Q);
    },
    set time(V) {
      (V = Fr(V)),
        (Q = V),
        A !== null || !h || p === 0 ? (A = V) : (O = h.now() - V / p);
    },
    get duration() {
      const V = P.calculatedDuration === null ? ny(P) : P.calculatedDuration;
      return rr(V);
    },
    get speed() {
      return p;
    },
    set speed(V) {
      V === p || !h || ((p = V), (H.time = rr(Q)));
    },
    get state() {
      return _;
    },
    play: B,
    pause: () => {
      (_ = "paused"), (A = Q);
    },
    stop: () => {
      (m = !0), _ !== "idle" && ((_ = "idle"), u && u(), z());
    },
    cancel: () => {
      M !== null && J(M), z();
    },
    complete: () => {
      _ = "finished";
    },
    sample: (V) => ((O = 0), J(V)),
  };
  return H;
}
function $z(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Mz = $z(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Oz = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  El = 10,
  zz = 2e4,
  Lz = (e, t) => t.type === "spring" || e === "backgroundColor" || !pw(t.ease);
function Iz(e, t, { onUpdate: n, onComplete: r, ...o }) {
  if (
    !(
      Mz() &&
      Oz.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== "mirror" &&
      o.damping !== 0 &&
      o.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    a,
    l;
  const u = () => {
    l = new Promise((h) => {
      a = h;
    });
  };
  u();
  let { keyframes: c, duration: d = 300, ease: f, times: p } = o;
  if (Lz(t, o)) {
    const h = Hu({ ...o, repeat: 0, delay: 0 });
    let v = { done: !1, value: c[0] };
    const S = [];
    let P = 0;
    for (; !v.done && P < zz; ) (v = h.sample(P)), S.push(v.value), (P += El);
    (p = void 0), (c = S), (d = P - El), (f = "linear");
  }
  const m = GO(e.owner.current, t, c, { ...o, duration: d, ease: f, times: p });
  o.syncStart &&
    (m.startTime = qe.isProcessing
      ? qe.timestamp
      : document.timeline
      ? document.timeline.currentTime
      : performance.now());
  const y = () => m.cancel(),
    w = () => {
      Se.update(y), a(), u();
    };
  return (
    (m.onfinish = () => {
      e.set(KO(c, o)), r && r(), w();
    }),
    {
      then(h, v) {
        return l.then(h, v);
      },
      attachTimeline(h) {
        return (m.timeline = h), (m.onfinish = null), Ie;
      },
      get time() {
        return rr(m.currentTime || 0);
      },
      set time(h) {
        m.currentTime = Fr(h);
      },
      get speed() {
        return m.playbackRate;
      },
      set speed(h) {
        m.playbackRate = h;
      },
      get duration() {
        return rr(d);
      },
      play: () => {
        s || (m.play(), cr(y));
      },
      pause: () => m.pause(),
      stop: () => {
        if (((s = !0), m.playState === "idle")) return;
        const { currentTime: h } = m;
        if (h) {
          const v = Hu({ ...o, autoplay: !1 });
          e.setWithVelocity(v.sample(h - El).value, v.sample(h).value, El);
        }
        w();
      },
      complete: () => m.finish(),
      cancel: w,
    }
  );
}
function Dz({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const o = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Ie,
      pause: Ie,
      stop: Ie,
      then: (i) => (i(), Promise.resolve()),
      cancel: Ie,
      complete: Ie,
    }
  );
  return t
    ? Hu({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o })
    : o();
}
const jz = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Fz = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Bz = { type: "keyframes", duration: 0.8 },
  Nz = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Vz = (e, { keyframes: t }) =>
    t.length > 2
      ? Bz
      : Oo.has(e)
      ? e.startsWith("scale")
        ? Fz(t[1])
        : jz
      : Nz,
  Rp = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (Hr.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  Wz = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Hz(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Ic) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = Wz.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const Uz = /([a-z-]*)\(.*?\)/g,
  $p = {
    ...Hr,
    getAnimatableNone: (e) => {
      const t = e.match(Uz);
      return t ? t.map(Hz).join(" ") : e;
    },
  },
  Gz = {
    ...XS,
    color: ft,
    backgroundColor: ft,
    outlineColor: ft,
    fill: ft,
    stroke: ft,
    borderColor: ft,
    borderTopColor: ft,
    borderRightColor: ft,
    borderBottomColor: ft,
    borderLeftColor: ft,
    filter: $p,
    WebkitFilter: $p,
  },
  Om = (e) => Gz[e];
function Dw(e, t) {
  let n = Om(e);
  return (
    n !== $p && (n = Hr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const jw = (e) => /^0[^.\s]+$/.test(e);
function Kz(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || jw(e);
}
function qz(e, t, n, r) {
  const o = Rp(t, n);
  let i;
  Array.isArray(n) ? (i = [...n]) : (i = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let a;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? s : i[u - 1]),
      Kz(i[u]) && l.push(u),
      typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (a = i[u]);
  if (o && l.length && a)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = Dw(t, a);
    }
  return i;
}
function Yz({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Fw(e, t) {
  return e[t] || e.default || e;
}
const zm =
  (e, t, n, r = {}) =>
  (o) => {
    const i = Fw(r, e) || {},
      s = i.delay || r.delay || 0;
    let { elapsed: a = 0 } = r;
    a = a - Fr(s);
    const l = qz(t, e, n, i),
      u = l[0],
      c = l[l.length - 1],
      d = Rp(e, u),
      f = Rp(e, c);
    let p = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...i,
      delay: -a,
      onUpdate: (m) => {
        t.set(m), i.onUpdate && i.onUpdate(m);
      },
      onComplete: () => {
        o(), i.onComplete && i.onComplete();
      },
    };
    if (
      (Yz(i) || (p = { ...p, ...Vz(e, p) }),
      p.duration && (p.duration = Fr(p.duration)),
      p.repeatDelay && (p.repeatDelay = Fr(p.repeatDelay)),
      !d || !f || UO.current || i.type === !1)
    )
      return Dz(p);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const m = Iz(t, e, p);
      if (m) return m;
    }
    return Hu(p);
  };
function Uu(e) {
  return !!(Rt(e) && e.add);
}
const Bw = (e) => /^\-?\d*\.?\d+$/.test(e);
function Lm(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Im(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Dm {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Lm(this.subscriptions, t), () => Im(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Xz = (e) => !isNaN(parseFloat(e));
class Qz {
  constructor(t, n = {}) {
    (this.version = "10.16.4"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: i, timestamp: s } = qe;
        this.lastUpdated !== s &&
          ((this.timeDelta = i),
          (this.lastUpdated = s),
          Se.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => Se.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = Xz(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Dm());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            Se.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? zw(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function zi(e, t) {
  return new Qz(e, t);
}
const Nw = (e) => (t) => t.test(e),
  Zz = { test: (e) => e === "auto", parse: (e) => e },
  Vw = [zo, K, In, xr, oO, rO, Zz],
  ls = (e) => Vw.find(Nw(e)),
  Jz = [...Vw, ft, Hr],
  e8 = (e) => Jz.find(Nw(e));
function t8(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, zi(n));
}
function n8(e, t) {
  const n = jc(e, t);
  let {
    transitionEnd: r = {},
    transition: o = {},
    ...i
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = yO(i[s]);
    t8(e, s, a);
  }
}
function r8(e, t, n) {
  var r, o;
  const i = Object.keys(t).filter((a) => !e.hasValue(a)),
    s = i.length;
  if (s)
    for (let a = 0; a < s; a++) {
      const l = i[a],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && o !== void 0
              ? o
              : t[l]),
        c != null &&
          (typeof c == "string" && (Bw(c) || jw(c))
            ? (c = parseFloat(c))
            : !e8(c) && Hr.test(u) && (c = Dw(l, u)),
          e.addValue(l, zi(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function o8(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function i8(e, t, n) {
  const r = {};
  for (const o in e) {
    const i = o8(o, t);
    if (i !== void 0) r[o] = i;
    else {
      const s = n.getValue(o);
      s && (r[o] = s.get());
    }
  }
  return r;
}
function s8({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Ww(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: s,
    ...a
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (i = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const d in a) {
    const f = e.getValue(d),
      p = a[d];
    if (!f || p === void 0 || (c && s8(c, d))) continue;
    const m = { delay: n, elapsed: 0, ...i };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const w = e.getProps()[WO];
      w &&
        ((m.elapsed = window.HandoffAppearAnimations(w, d, f, Se)),
        (m.syncStart = !0));
    }
    f.start(zm(d, f, p, e.shouldReduceMotion && Oo.has(d) ? { type: !1 } : m));
    const y = f.animation;
    Uu(l) && (l.add(d), y.then(() => l.remove(d))), u.push(y);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && n8(e, s);
      }),
    u
  );
}
function Mp(e, t, n = {}) {
  const r = jc(e, t, n.custom);
  let { transition: o = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (o = n.transitionOverride);
  const i = r ? () => Promise.all(Ww(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: d,
            } = o;
            return a8(e, t, u + l, c, d, n);
          }
        : () => Promise.resolve(),
    { when: a } = o;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [i, s] : [s, i];
    return l().then(() => u());
  } else return Promise.all([i(), s(n.delay)]);
}
function a8(e, t, n = 0, r = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(l8)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            Mp(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function l8(e, t) {
  return e.sortNodePosition(t);
}
function u8(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Mp(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = Mp(e, t, n);
  else {
    const o = typeof t == "function" ? jc(e, t, n.custom) : t;
    r = Promise.all(Ww(e, o, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const c8 = [...ym].reverse(),
  d8 = ym.length;
function f8(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => u8(e, n, r)));
}
function p8(e) {
  let t = f8(e);
  const n = m8();
  let r = !0;
  const o = (l, u) => {
    const c = jc(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...p } = c;
      l = { ...l, ...p, ...f };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function s(l, u) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      f = [],
      p = new Set();
    let m = {},
      y = 1 / 0;
    for (let g = 0; g < d8; g++) {
      const h = c8[g],
        v = n[h],
        S = c[h] !== void 0 ? c[h] : d[h],
        P = ga(S),
        T = h === u ? v.isActive : null;
      T === !1 && (y = g);
      let _ = S === d[h] && S !== c[h] && P;
      if (
        (_ && r && e.manuallyAnimateOnMount && (_ = !1),
        (v.protectedKeys = { ...m }),
        (!v.isActive && T === null) ||
          (!S && !v.prevProp) ||
          zc(S) ||
          typeof S == "boolean")
      )
        continue;
      const A = h8(v.prevProp, S);
      let O = A || (h === u && v.isActive && !_ && P) || (g > y && P);
      const M = Array.isArray(S) ? S : [S];
      let F = M.reduce(o, {});
      T === !1 && (F = {});
      const { prevResolvedValues: X = {} } = v,
        Y = { ...X, ...F },
        Q = (J) => {
          (O = !0), p.delete(J), (v.needsAnimating[J] = !0);
        };
      for (const J in Y) {
        const Z = F[J],
          z = X[J];
        m.hasOwnProperty(J) ||
          (Z !== z
            ? Nu(Z) && Nu(z)
              ? !dw(Z, z) || A
                ? Q(J)
                : (v.protectedKeys[J] = !0)
              : Z !== void 0
              ? Q(J)
              : p.add(J)
            : Z !== void 0 && p.has(J)
            ? Q(J)
            : (v.protectedKeys[J] = !0));
      }
      (v.prevProp = S),
        (v.prevResolvedValues = F),
        v.isActive && (m = { ...m, ...F }),
        r && e.blockInitialAnimation && (O = !1),
        O &&
          !_ &&
          f.push(
            ...M.map((J) => ({ animation: J, options: { type: h, ...l } }))
          );
    }
    if (p.size) {
      const g = {};
      p.forEach((h) => {
        const v = e.getBaseTarget(h);
        v !== void 0 && (g[h] = v);
      }),
        f.push({ animation: g });
    }
    let w = !!f.length;
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (w = !1),
      (r = !1),
      w ? t(f) : Promise.resolve()
    );
  }
  function a(l, u, c) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((p) => {
        var m;
        return (m = p.animationState) === null || m === void 0
          ? void 0
          : m.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = s(c, l);
    for (const p in n) n[p].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
  };
}
function h8(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !dw(t, e) : !1;
}
function oo(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function m8() {
  return {
    animate: oo(!0),
    whileInView: oo(),
    whileHover: oo(),
    whileTap: oo(),
    whileDrag: oo(),
    whileFocus: oo(),
    exit: oo(),
  };
}
class g8 extends Qr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = p8(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), zc(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let v8 = 0;
class y8 extends Qr {
  constructor() {
    super(...arguments), (this.id = v8++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o) return;
    const i = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const b8 = { animation: { Feature: g8 }, exit: { Feature: y8 } },
  ry = (e, t) => Math.abs(e - t);
function x8(e, t) {
  const n = ry(e.x, t.x),
    r = ry(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Hw {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = df(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          d = x8(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !d) return;
        const { point: f } = u,
          { timestamp: p } = qe;
        this.history.push({ ...f, timestamp: p });
        const { onStart: m, onMove: y } = this.handlers;
        c ||
          (m && m(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          y && y(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = cf(c, this.transformPagePoint)),
          Se.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: d, onSessionEnd: f } = this.handlers,
          p = df(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : cf(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && d && d(u, p), f && f(u, p);
      }),
      !sw(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const o = Dc(t),
      i = cf(o, this.transformPagePoint),
      { point: s } = i,
      { timestamp: a } = qe;
    this.history = [{ ...s, timestamp: a }];
    const { onSessionStart: l } = n;
    l && l(t, df(i, this.history)),
      (this.removeListeners = jr(
        nr(window, "pointermove", this.handlePointerMove),
        nr(window, "pointerup", this.handlePointerUp),
        nr(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), cr(this.updatePoint);
  }
}
function cf(e, t) {
  return t ? { point: t(e.point) } : e;
}
function oy(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function df({ point: e }, t) {
  return {
    point: e,
    delta: oy(e, Uw(t)),
    offset: oy(e, S8(t)),
    velocity: w8(t, 0.1),
  };
}
function S8(e) {
  return e[0];
}
function Uw(e) {
  return e[e.length - 1];
}
function w8(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = Uw(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > Fr(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = rr(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Bt(e) {
  return e.max - e.min;
}
function Op(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function iy(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = $e(t.min, t.max, e.origin)),
    (e.scale = Bt(n) / Bt(t)),
    (Op(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = $e(n.min, n.max, e.origin) - e.originPoint),
    (Op(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Bs(e, t, n, r) {
  iy(e.x, t.x, n.x, r ? r.originX : void 0),
    iy(e.y, t.y, n.y, r ? r.originY : void 0);
}
function sy(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Bt(t));
}
function k8(e, t, n) {
  sy(e.x, t.x, n.x), sy(e.y, t.y, n.y);
}
function ay(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Bt(t));
}
function Ns(e, t, n) {
  ay(e.x, t.x, n.x), ay(e.y, t.y, n.y);
}
function C8(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? $e(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? $e(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function ly(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function E8(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: ly(e.x, n, o), y: ly(e.y, t, r) };
}
function uy(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function _8(e, t) {
  return { x: uy(e.x, t.x), y: uy(e.y, t.y) };
}
function P8(e, t) {
  let n = 0.5;
  const r = Bt(e),
    o = Bt(t);
  return (
    o > r
      ? (n = ya(t.min, t.max - r, e.min))
      : r > o && (n = ya(e.min, e.max - o, t.min)),
    Wr(0, 1, n)
  );
}
function T8(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const zp = 0.35;
function A8(e = zp) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = zp),
    { x: cy(e, "left", "right"), y: cy(e, "top", "bottom") }
  );
}
function cy(e, t, n) {
  return { min: dy(e, t), max: dy(e, n) };
}
function dy(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const fy = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ci = () => ({ x: fy(), y: fy() }),
  py = () => ({ min: 0, max: 0 }),
  Be = () => ({ x: py(), y: py() });
function Pn(e) {
  return [e("x"), e("y")];
}
function Gw({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function R8({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function $8(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function ff(e) {
  return e === void 0 || e === 1;
}
function Lp({ scale: e, scaleX: t, scaleY: n }) {
  return !ff(e) || !ff(t) || !ff(n);
}
function ao(e) {
  return Lp(e) || Kw(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Kw(e) {
  return hy(e.x) || hy(e.y);
}
function hy(e) {
  return e && e !== "0%";
}
function Gu(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function my(e, t, n, r, o) {
  return o !== void 0 && (e = Gu(e, o, r)), Gu(e, n, r) + t;
}
function Ip(e, t = 0, n = 1, r, o) {
  (e.min = my(e.min, t, n, r, o)), (e.max = my(e.max, t, n, r, o));
}
function qw(e, { x: t, y: n }) {
  Ip(e.x, t.translate, t.scale, t.originPoint),
    Ip(e.y, n.translate, n.scale, n.originPoint);
}
function M8(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    (i = n[a]), (s = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        di(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), qw(e, s)),
      r && ao(i.latestValues) && di(e, i.latestValues));
  }
  (t.x = gy(t.x)), (t.y = gy(t.y));
}
function gy(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function kr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function vy(e, t, [n, r, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    s = $e(e.min, e.max, i);
  Ip(e, t[n], t[r], s, t.scale);
}
const O8 = ["x", "scaleX", "originX"],
  z8 = ["y", "scaleY", "originY"];
function di(e, t) {
  vy(e.x, t, O8), vy(e.y, t, z8);
}
function Yw(e, t) {
  return Gw($8(e.getBoundingClientRect(), t));
}
function L8(e, t, n) {
  const r = Yw(e, n),
    { scroll: o } = t;
  return o && (kr(r.x, o.offset.x), kr(r.y, o.offset.y)), r;
}
const I8 = new WeakMap();
class D8 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Be()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (l) => {
        this.stopAnimation(), n && this.snapToCursor(Dc(l, "page").point);
      },
      i = (l, u) => {
        const { drag: c, dragPropagation: d, onDragStart: f } = this.getProps();
        if (
          c &&
          !d &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = lw(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Pn((m) => {
            let y = this.getAxisMotionValue(m).get() || 0;
            if (In.test(y)) {
              const { projection: w } = this.visualElement;
              if (w && w.layout) {
                const g = w.layout.layoutBox[m];
                g && (y = Bt(g) * (parseFloat(y) / 100));
              }
            }
            this.originPoint[m] = y;
          }),
          f && Se.update(() => f(l, u), !1, !0);
        const { animationState: p } = this.visualElement;
        p && p.setActive("whileDrag", !0);
      },
      s = (l, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: d,
          onDirectionLock: f,
          onDrag: p,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: m } = u;
        if (d && this.currentDirection === null) {
          (this.currentDirection = j8(m)),
            this.currentDirection !== null && f && f(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, m),
          this.updateAxis("y", u.point, m),
          this.visualElement.render(),
          p && p(l, u);
      },
      a = (l, u) => this.stop(l, u);
    this.panSession = new Hw(
      t,
      { onSessionStart: o, onStart: i, onMove: s, onSessionEnd: a },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && Se.update(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !_l(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = C8(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      o = this.constraints;
    t && li(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = E8(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = A8(n)),
      o !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Pn((i) => {
          this.getAxisMotionValue(i) &&
            (this.constraints[i] = T8(r.layoutBox[i], this.constraints[i]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !li(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = L8(r, o.root, this.visualElement.getTransformPagePoint());
    let s = _8(o.layout.layoutBox, i);
    if (n) {
      const a = n(R8(s));
      (this.hasMutatedConstraints = !!a), a && (s = Gw(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Pn((c) => {
        if (!_l(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        s && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          p = o ? 40 : 1e7,
          m = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, m);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(zm(t, r, 0, n));
  }
  stopAnimation() {
    Pn((t) => this.getAxisMotionValue(t).stop());
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Pn((n) => {
      const { drag: r } = this.getProps();
      if (!_l(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - $e(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!li(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    Pn((s) => {
      const a = this.getAxisMotionValue(s);
      if (a) {
        const l = a.get();
        o[s] = P8({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Pn((s) => {
        if (!_l(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set($e(l, u, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    I8.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = nr(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        li(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), r();
    const s = Zn(window, "resize", () => this.scalePositionWithinConstraints()),
      a = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Pn((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = zp,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function _l(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function j8(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class F8 extends Qr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ie),
      (this.removeListeners = Ie),
      (this.controls = new D8(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ie);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const yy = (e) => (t, n) => {
  e && Se.update(() => e(t, n));
};
class B8 extends Qr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ie);
  }
  onPointerDown(t) {
    this.session = new Hw(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: yy(t),
      onStart: yy(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && Se.update(() => o(i, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = nr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function N8() {
  const e = x.useContext(Aa);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = x.useId();
  return x.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0];
}
function V8() {
  return W8(x.useContext(Aa));
}
function W8(e) {
  return e === null ? !0 : e.isPresent;
}
const eu = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function by(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const us = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (K.test(e)) e = parseFloat(e);
        else return e;
      const n = by(e, t.target.x),
        r = by(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  H8 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = Hr.parse(e);
      if (o.length > 5) return r;
      const i = Hr.createTransformer(e),
        s = typeof o[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + s] /= a), (o[1 + s] /= l);
      const u = $e(a, l, 0.5);
      return (
        typeof o[2 + s] == "number" && (o[2 + s] /= u),
        typeof o[3 + s] == "number" && (o[3 + s] /= u),
        i(o)
      );
    },
  };
class U8 extends Lt.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    XM(G8),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (eu.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              Se.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Xw(e) {
  const [t, n] = N8(),
    r = x.useContext(xm);
  return Lt.createElement(U8, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: x.useContext(US),
    isPresent: t,
    safeToRemove: n,
  });
}
const G8 = {
    borderRadius: {
      ...us,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: us,
    borderTopRightRadius: us,
    borderBottomLeftRadius: us,
    borderBottomRightRadius: us,
    boxShadow: H8,
  },
  Qw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  K8 = Qw.length,
  xy = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Sy = (e) => typeof e == "number" || K.test(e);
function q8(e, t, n, r, o, i) {
  o
    ? ((e.opacity = $e(0, n.opacity !== void 0 ? n.opacity : 1, Y8(r))),
      (e.opacityExit = $e(t.opacity !== void 0 ? t.opacity : 1, 0, X8(r))))
    : i &&
      (e.opacity = $e(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < K8; s++) {
    const a = `border${Qw[s]}Radius`;
    let l = wy(t, a),
      u = wy(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Sy(l) === Sy(u)
        ? ((e[a] = Math.max($e(xy(l), xy(u), r), 0)),
          (In.test(u) || In.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = $e(t.rotate || 0, n.rotate || 0, r));
}
function wy(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Y8 = Zw(0, 0.5, Rm),
  X8 = Zw(0.5, 0.95, Ie);
function Zw(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(ya(e, t, r)));
}
function ky(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Zt(e, t) {
  ky(e.x, t.x), ky(e.y, t.y);
}
function Cy(e, t, n, r, o) {
  return (
    (e -= t), (e = Gu(e, 1 / n, r)), o !== void 0 && (e = Gu(e, 1 / o, r)), e
  );
}
function Q8(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (
    (In.test(t) &&
      ((t = parseFloat(t)), (t = $e(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = $e(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = Cy(e.min, t, n, a, o)),
    (e.max = Cy(e.max, t, n, a, o));
}
function Ey(e, t, [n, r, o], i, s) {
  Q8(e, t[n], t[r], t[o], t.scale, i, s);
}
const Z8 = ["x", "scaleX", "originX"],
  J8 = ["y", "scaleY", "originY"];
function _y(e, t, n, r) {
  Ey(e.x, t, Z8, n ? n.x : void 0, r ? r.x : void 0),
    Ey(e.y, t, J8, n ? n.y : void 0, r ? r.y : void 0);
}
function Py(e) {
  return e.translate === 0 && e.scale === 1;
}
function Jw(e) {
  return Py(e.x) && Py(e.y);
}
function eL(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function e2(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Ty(e) {
  return Bt(e.x) / Bt(e.y);
}
class tL {
  constructor() {
    this.members = [];
  }
  add(t) {
    Lm(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Im(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Ay(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y;
  if (
    ((o || i) && (r = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none";
}
const nL = (e, t) => e.depth - t.depth;
class rL {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Lm(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Im(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(nL),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function oL(e, t) {
  const n = performance.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (cr(r), e(i - t));
    };
  return Se.read(r, !0), () => cr(r);
}
function iL(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function sL(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function aL(e, t, n) {
  const r = Rt(e) ? e : zi(e);
  return r.start(zm("", r, t, n)), r.animation;
}
const Ry = ["", "X", "Y", "Z"],
  $y = 1e3;
let lL = 0;
const lo = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function t2({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = lL++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (lo.totalNodes =
            lo.resolvedTargetDeltas =
            lo.recalculatedProjection =
              0),
            this.nodes.forEach(dL),
            this.nodes.forEach(gL),
            this.nodes.forEach(vL),
            this.nodes.forEach(fL),
            iL(lo);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new rL());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Dm()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = sL(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = oL(f, 250)),
            eu.hasAnimatedSinceResize &&
              ((eu.hasAnimatedSinceResize = !1), this.nodes.forEach(Oy));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: p,
              layout: m,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const y =
                  this.options.transition || c.getDefaultTransition() || wL,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: g } =
                  c.getProps(),
                h = !this.targetLayout || !e2(this.targetLayout, m) || p,
                v = !f && p;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                v ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, v);
                const S = { ...Fw(y, "layout"), onPlay: w, onComplete: g };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S);
              } else
                f || Oy(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = m;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        cr(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(yL),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(My);
        return;
      }
      this.isUpdating || this.nodes.forEach(hL),
        (this.isUpdating = !1),
        this.nodes.forEach(mL),
        this.nodes.forEach(uL),
        this.nodes.forEach(cL),
        this.clearAllSnapshots();
      const a = performance.now();
      (qe.delta = Wr(0, 1e3 / 60, a - qe.timestamp)),
        (qe.timestamp = a),
        (qe.isProcessing = !0),
        tf.update.process(qe),
        tf.preRender.process(qe),
        tf.render.process(qe),
        (qe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(pL), this.sharedNodes.forEach(bL);
    }
    scheduleUpdateProjection() {
      Se.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      Se.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Be()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!o) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !Jw(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || ao(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        kL(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return Be();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (kr(a.x, l.offset.x), kr(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = Be();
      Zt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            Zt(a, s);
            const { scroll: f } = this.root;
            f && (kr(a.x, -f.offset.x), kr(a.y, -f.offset.y));
          }
          kr(a.x, c.offset.x), kr(a.y, c.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = Be();
      Zt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          di(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          ao(c.latestValues) && di(l, c.latestValues);
      }
      return ao(this.latestValues) && di(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = Be();
      Zt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !ao(u.latestValues)) continue;
        Lp(u.latestValues) && u.updateSnapshot();
        const c = Be(),
          d = u.measurePageBox();
        Zt(c, d),
          _y(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return ao(this.latestValues) && _y(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== qe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = qe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1
            ? ((this.relativeParent = p),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Be()),
              (this.relativeTargetOrigin = Be()),
              Ns(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                p.layout.layoutBox
              ),
              Zt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Be()), (this.targetWithTransforms = Be())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                k8(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Zt(this.target, this.layout.layoutBox),
                qw(this.target, this.targetDelta))
              : Zt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Be()),
                (this.relativeTargetOrigin = Be()),
                Ns(this.relativeTargetOrigin, this.target, p.target),
                Zt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          lo.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Lp(this.parent.latestValues) ||
          Kw(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === qe.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      Zt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        p = this.treeScale.y;
      M8(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (a.target = a.layout.layoutBox);
      const { target: m } = a;
      if (!m) {
        this.projectionTransform &&
          ((this.projectionDelta = ci()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = ci()),
        (this.projectionDeltaWithTransform = ci()));
      const y = this.projectionTransform;
      Bs(this.projectionDelta, this.layoutCorrected, m, this.latestValues),
        (this.projectionTransform = Ay(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== y ||
          this.treeScale.x !== f ||
          this.treeScale.y !== p) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", m)),
        lo.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = ci();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = Be(),
        p = l ? l.source : void 0,
        m = this.layout ? this.layout.source : void 0,
        y = p !== m,
        w = this.getStack(),
        g = !w || w.members.length <= 1,
        h = !!(y && !g && this.options.crossfade === !0 && !this.path.some(SL));
      this.animationProgress = 0;
      let v;
      (this.mixTargetDelta = (S) => {
        const P = S / 1e3;
        zy(d.x, s.x, P),
          zy(d.y, s.y, P),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ns(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            xL(this.relativeTarget, this.relativeTargetOrigin, f, P),
            v && eL(this.relativeTarget, v) && (this.isProjectionDirty = !1),
            v || (v = Be()),
            Zt(v, this.relativeTarget)),
          y &&
            ((this.animationValues = c), q8(c, u, this.latestValues, P, h, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = P);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (cr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Se.update(() => {
          (eu.hasAnimatedSinceResize = !0),
            (this.currentAnimation = aL(0, $y, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta($y),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          n2(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || Be();
          const d = Bt(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const f = Bt(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + f);
        }
        Zt(a, l),
          di(a, c),
          Bs(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new tL()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const u = {};
      for (let c = 0; c < Ry.length; c++) {
        const d = "rotate" + Ry[c];
        l[d] && ((u[d] = l[d]), s.setStaticValue(d, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s = {}) {
      var a, l;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Jl(s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return (
          this.options.layoutId &&
            ((y.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (y.pointerEvents = Jl(s.pointerEvents) || "")),
          this.hasProjected &&
            !ao(this.latestValues) &&
            ((y.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          y
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Ay(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: p, y: m } = this.projectionDelta;
      (u.transformOrigin = `${p.origin * 100}% ${m.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const y in Fu) {
        if (f[y] === void 0) continue;
        const { correct: w, applyTo: g } = Fu[y],
          h = u.transform === "none" ? f[y] : w(f[y], d);
        if (g) {
          const v = g.length;
          for (let S = 0; S < v; S++) u[g[S]] = h;
        } else u[y] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? Jl(s.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(My),
        this.root.sharedNodes.clear();
    }
  };
}
function uL(e) {
  e.updateLayout();
}
function cL(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = n.source !== e.layout.source;
    i === "size"
      ? Pn((d) => {
          const f = s ? n.measuredBox[d] : n.layoutBox[d],
            p = Bt(f);
          (f.min = r[d].min), (f.max = f.min + p);
        })
      : n2(i, n.layoutBox, r) &&
        Pn((d) => {
          const f = s ? n.measuredBox[d] : n.layoutBox[d],
            p = Bt(r[d]);
          (f.max = f.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + p));
        });
    const a = ci();
    Bs(a, r, n.layoutBox);
    const l = ci();
    s ? Bs(l, e.applyTransform(o, !0), n.measuredBox) : Bs(l, r, n.layoutBox);
    const u = !Jw(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const m = Be();
          Ns(m, n.layoutBox, f.layoutBox);
          const y = Be();
          Ns(y, r, p.layoutBox),
            e2(m, y) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = y),
              (e.relativeTargetOrigin = m),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function dL(e) {
  lo.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function fL(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function pL(e) {
  e.clearSnapshot();
}
function My(e) {
  e.clearMeasurements();
}
function hL(e) {
  e.isLayoutDirty = !1;
}
function mL(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Oy(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function gL(e) {
  e.resolveTargetDelta();
}
function vL(e) {
  e.calcProjection();
}
function yL(e) {
  e.resetRotation();
}
function bL(e) {
  e.removeLeadSnapshot();
}
function zy(e, t, n) {
  (e.translate = $e(t.translate, 0, n)),
    (e.scale = $e(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Ly(e, t, n, r) {
  (e.min = $e(t.min, n.min, r)), (e.max = $e(t.max, n.max, r));
}
function xL(e, t, n, r) {
  Ly(e.x, t.x, n.x, r), Ly(e.y, t.y, n.y, r);
}
function SL(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const wL = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Iy = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  Dy = Iy("applewebkit/") && !Iy("chrome/") ? Math.round : Ie;
function jy(e) {
  (e.min = Dy(e.min)), (e.max = Dy(e.max));
}
function kL(e) {
  jy(e.x), jy(e.y);
}
function n2(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Op(Ty(t), Ty(n), 0.2))
  );
}
const CL = t2({
    attachResizeListener: (e, t) => Zn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  pf = { current: void 0 },
  r2 = t2({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!pf.current) {
        const e = new CL({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (pf.current = e);
      }
      return pf.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  EL = {
    pan: { Feature: B8 },
    drag: { Feature: F8, ProjectionNode: r2, MeasureLayout: Xw },
  },
  _L = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function PL(e) {
  const t = _L.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Dp(e, t, n = 1) {
  const [r, o] = PL(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return Bw(s) ? parseFloat(s) : s;
  } else return _p(o) ? Dp(o, t, n + 1) : o;
}
function TL(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((o) => {
      const i = o.get();
      if (!_p(i)) return;
      const s = Dp(i, r);
      s && o.set(s);
    });
  for (const o in t) {
    const i = t[o];
    if (!_p(i)) continue;
    const s = Dp(i, r);
    s && ((t[o] = s), n || (n = {}), n[o] === void 0 && (n[o] = i));
  }
  return { target: t, transitionEnd: n };
}
const AL = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  o2 = (e) => AL.has(e),
  RL = (e) => Object.keys(e).some(o2),
  Fy = (e) => e === zo || e === K,
  By = (e, t) => parseFloat(e.split(", ")[t]),
  Ny =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/);
      if (o) return By(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/);
        return i ? By(i[1], e) : 0;
      }
    },
  $L = new Set(["x", "y", "z"]),
  ML = Ra.filter((e) => !$L.has(e));
function OL(e) {
  const t = [];
  return (
    ML.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Li = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Ny(4, 13),
  y: Ny(5, 14),
};
Li.translateX = Li.x;
Li.translateY = Li.y;
const zL = (e, t, n) => {
    const r = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: s } = i,
      a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        a[u] = Li[u](r, i);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(a[u]), (e[u] = Li[u](l, i));
      }),
      e
    );
  },
  LL = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const o = Object.keys(t).filter(o2);
    let i = [],
      s = !1;
    const a = [];
    if (
      (o.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          d = ls(c);
        const f = t[l];
        let p;
        if (Nu(f)) {
          const m = f.length,
            y = f[0] === null ? 1 : 0;
          (c = f[y]), (d = ls(c));
          for (let w = y; w < m && f[w] !== null; w++)
            p ? Am(ls(f[w]) === p) : (p = ls(f[w]));
        } else p = ls(f);
        if (d !== p)
          if (Fy(d) && Fy(p)) {
            const m = u.get();
            typeof m == "string" && u.set(parseFloat(m)),
              typeof f == "string"
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && p === K && (t[l] = f.map(parseFloat));
          } else
            d != null &&
            d.transform &&
            p != null &&
            p.transform &&
            (c === 0 || f === 0)
              ? c === 0
                ? u.set(p.transform(c))
                : (t[l] = d.transform(f))
              : (s || ((i = OL(e)), (s = !0)),
                a.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(f));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = zL(t, e, a);
      return (
        i.length &&
          i.forEach(([c, d]) => {
            e.getValue(c).set(d);
          }),
        e.render(),
        Oc && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function IL(e, t, n, r) {
  return RL(t) ? LL(e, t, n, r) : { target: t, transitionEnd: r };
}
const DL = (e, t, n, r) => {
    const o = TL(e, t, r);
    return (t = o.target), (r = o.transitionEnd), IL(e, t, n, r);
  },
  jp = { current: null },
  i2 = { current: !1 };
function jL() {
  if (((i2.current = !0), !!Oc))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (jp.current = e.matches);
      e.addListener(t), t();
    } else jp.current = !1;
}
function FL(e, t, n) {
  const { willChange: r } = t;
  for (const o in t) {
    const i = t[o],
      s = n[o];
    if (Rt(i)) e.addValue(o, i), Uu(r) && r.add(o);
    else if (Rt(s)) e.addValue(o, zi(i, { owner: e })), Uu(r) && r.remove(o);
    else if (s !== i)
      if (e.hasValue(o)) {
        const a = e.getValue(o);
        !a.hasAnimated && a.set(i);
      } else {
        const a = e.getStaticValue(o);
        e.addValue(o, zi(a !== void 0 ? a : i, { owner: e }));
      }
  }
  for (const o in n) t[o] === void 0 && e.removeValue(o);
  return t;
}
const Vy = new WeakMap(),
  s2 = Object.keys(va),
  BL = s2.length,
  Wy = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  NL = bm.length;
class VL {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      visualState: i,
    },
    s = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => Se.render(this.render, !1, !0));
    const { latestValues: a, renderState: l } = i;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = s),
      (this.isControllingVariants = Lc(n)),
      (this.isVariantNode = HS(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      a[d] !== void 0 && Rt(f) && (f.set(a[d], !1), Uu(u) && u.add(d));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      Vy.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      i2.current || jL(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : jp.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Vy.delete(this.current),
      this.projection && this.projection.unmount(),
      cr(this.notifyUpdate),
      cr(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Oo.has(t),
      o = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && Se.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, o, i) {
    let s, a;
    for (let l = 0; l < BL; l++) {
      const u = s2[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: f,
          MeasureLayout: p,
        } = va[u];
      f && (s = f),
        c(n) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          p && (a = p));
    }
    if (!this.projection && s) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: p,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (d && li(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: f,
        layoutRoot: p,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Be();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Wy.length; r++) {
      const o = Wy[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    (this.prevMotionValues = FL(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < NL; r++) {
      const o = bm[r],
        i = this.props[o];
      (ga(i) || i === !1) && (n[o] = i);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = zi(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      o =
        typeof r == "string" || typeof r == "object"
          ? (n = Tm(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Rt(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Dm()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class a2 extends VL {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: o },
    i
  ) {
    let s = i8(r, t || {}, this);
    if ((o && (n && (n = o(n)), r && (r = o(r)), s && (s = o(s))), i)) {
      r8(this, r, s);
      const a = DL(this, r, s, n);
      (n = a.transitionEnd), (r = a.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function WL(e) {
  return window.getComputedStyle(e);
}
class HL extends a2 {
  readValueFromInstance(t, n) {
    if (Oo.has(n)) {
      const r = Om(n);
      return (r && r.default) || 0;
    } else {
      const r = WL(t),
        o = (qS(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Yw(t, n);
  }
  build(t, n, r, o) {
    wm(t, n, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Pm(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Rt(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, o) {
    ew(t, n, r, o);
  }
}
class UL extends a2 {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Oo.has(n)) {
      const r = Om(n);
      return (r && r.default) || 0;
    }
    return (n = tw.has(n) ? n : _m(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Be();
  }
  scrapeMotionValuesFromProps(t, n) {
    return rw(t, n);
  }
  build(t, n, r, o) {
    Cm(t, n, r, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    nw(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = Em(t.tagName)), super.mount(t);
  }
}
const GL = (e, t) =>
    Sm(e)
      ? new UL(t, { enableHardwareAcceleration: !1 })
      : new HL(t, { enableHardwareAcceleration: !0 }),
  KL = { layout: { ProjectionNode: r2, MeasureLayout: Xw } },
  qL = { ...b8, ...FO, ...EL, ...KL },
  l2 = qM((e, t) => _O(e, t, qL, GL));
function u2() {
  const e = x.useRef(!1);
  return (
    vm(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function YL() {
  const e = u2(),
    [t, n] = x.useState(0),
    r = x.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [x.useCallback(() => Se.postRender(r), [r]), t];
}
class XL extends x.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function QL({ children: e, isPresent: t }) {
  const n = x.useId(),
    r = x.useRef(null),
    o = x.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    x.useInsertionEffect(() => {
      const { width: i, height: s, top: a, left: l } = o.current;
      if (t || !r.current || !i || !s) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    x.createElement(
      XL,
      { isPresent: t, childRef: r, sizeRef: o },
      x.cloneElement(e, { ref: r })
    )
  );
}
const hf = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: i,
  mode: s,
}) => {
  const a = ow(ZL),
    l = x.useId(),
    u = x.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: (c) => {
          a.set(c, !0);
          for (const d of a.values()) if (!d) return;
          r && r();
        },
        register: (c) => (a.set(c, !1), () => a.delete(c)),
      }),
      i ? void 0 : [n]
    );
  return (
    x.useMemo(() => {
      a.forEach((c, d) => a.set(d, !1));
    }, [n]),
    x.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = x.createElement(QL, { isPresent: n }, e)),
    x.createElement(Aa.Provider, { value: u }, e)
  );
};
function ZL() {
  return new Map();
}
function JL(e) {
  return x.useEffect(() => () => e(), []);
}
const Wo = (e) => e.key || "";
function eI(e, t) {
  e.forEach((n) => {
    const r = Wo(n);
    t.set(r, n);
  });
}
function tI(e) {
  const t = [];
  return (
    x.Children.forEach(e, (n) => {
      x.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const nI = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: o,
  presenceAffectsLayout: i = !0,
  mode: s = "sync",
}) => {
  const a = x.useContext(xm).forceRender || YL()[0],
    l = u2(),
    u = tI(e);
  let c = u;
  const d = x.useRef(new Map()).current,
    f = x.useRef(c),
    p = x.useRef(new Map()).current,
    m = x.useRef(!0);
  if (
    (vm(() => {
      (m.current = !1), eI(u, p), (f.current = c);
    }),
    JL(() => {
      (m.current = !0), p.clear(), d.clear();
    }),
    m.current)
  )
    return x.createElement(
      x.Fragment,
      null,
      c.map((h) =>
        x.createElement(
          hf,
          {
            key: Wo(h),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: i,
            mode: s,
          },
          h
        )
      )
    );
  c = [...c];
  const y = f.current.map(Wo),
    w = u.map(Wo),
    g = y.length;
  for (let h = 0; h < g; h++) {
    const v = y[h];
    w.indexOf(v) === -1 && !d.has(v) && d.set(v, void 0);
  }
  return (
    s === "wait" && d.size && (c = []),
    d.forEach((h, v) => {
      if (w.indexOf(v) !== -1) return;
      const S = p.get(v);
      if (!S) return;
      const P = y.indexOf(v);
      let T = h;
      if (!T) {
        const _ = () => {
          p.delete(v), d.delete(v);
          const A = f.current.findIndex((O) => O.key === v);
          if ((f.current.splice(A, 1), !d.size)) {
            if (((f.current = u), l.current === !1)) return;
            a(), r && r();
          }
        };
        (T = x.createElement(
          hf,
          {
            key: Wo(S),
            isPresent: !1,
            onExitComplete: _,
            custom: t,
            presenceAffectsLayout: i,
            mode: s,
          },
          S
        )),
          d.set(v, T);
      }
      c.splice(P, 0, T);
    }),
    (c = c.map((h) => {
      const v = h.key;
      return d.has(v)
        ? h
        : x.createElement(
            hf,
            { key: Wo(h), isPresent: !0, presenceAffectsLayout: i, mode: s },
            h
          );
    })),
    x.createElement(
      x.Fragment,
      null,
      d.size ? c : c.map((h) => x.cloneElement(h))
    )
  );
};
var rI = {
    initial: (e) => {
      const { position: t } = e,
        n = ["top", "bottom"].includes(t) ? "y" : "x";
      let r = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
      return t === "bottom" && (r = 1), { opacity: 0, [n]: r * 24 };
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
    },
  },
  c2 = x.memo((e) => {
    const {
        id: t,
        message: n,
        onCloseComplete: r,
        onRequestRemove: o,
        requestClose: i = !1,
        position: s = "bottom",
        duration: a = 5e3,
        containerStyle: l,
        motionVariants: u = rI,
        toastSpacing: c = "0.5rem",
      } = e,
      [d, f] = x.useState(a),
      p = V8();
    Oi(() => {
      p || r == null || r();
    }, [p]),
      Oi(() => {
        f(a);
      }, [a]);
    const m = () => f(null),
      y = () => f(a),
      w = () => {
        p && o();
      };
    x.useEffect(() => {
      p && i && o();
    }, [p, i, o]),
      FM(w, d);
    const g = x.useMemo(
        () => ({
          pointerEvents: "auto",
          maxWidth: 560,
          minWidth: 300,
          margin: c,
          ...l,
        }),
        [l, c]
      ),
      h = x.useMemo(() => DM(s), [s]);
    return k.jsx(l2.div, {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: m,
      onHoverEnd: y,
      custom: { position: s },
      style: h,
      children: k.jsx(q.div, {
        role: "status",
        "aria-atomic": "true",
        className: "chakra-toast__inner",
        __css: g,
        children: Xn(n, { id: t, onClose: w }),
      }),
    });
  });
c2.displayName = "ToastComponent";
var Hy = {
    path: k.jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      children: [
        k.jsx("path", {
          strokeLinecap: "round",
          fill: "none",
          d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
        }),
        k.jsx("path", {
          fill: "currentColor",
          strokeLinecap: "round",
          d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
        }),
        k.jsx("circle", {
          fill: "none",
          strokeMiterlimit: "10",
          cx: "12",
          cy: "12",
          r: "11.25",
        }),
      ],
    }),
    viewBox: "0 0 24 24",
  },
  Lo = ee((e, t) => {
    const {
        as: n,
        viewBox: r,
        color: o = "currentColor",
        focusable: i = !1,
        children: s,
        className: a,
        __css: l,
        ...u
      } = e,
      c = ve("chakra-icon", a),
      d = Yr("Icon", e),
      f = {
        w: "1em",
        h: "1em",
        display: "inline-block",
        lineHeight: "1em",
        flexShrink: 0,
        color: o,
        ...l,
        ...d,
      },
      p = { ref: t, focusable: i, className: c, __css: f },
      m = r ?? Hy.viewBox;
    if (n && typeof n != "string") return k.jsx(q.svg, { as: n, ...p, ...u });
    const y = s ?? Hy.path;
    return k.jsx(q.svg, {
      verticalAlign: "middle",
      viewBox: m,
      ...p,
      ...u,
      children: y,
    });
  });
Lo.displayName = "Icon";
function oI(e) {
  return k.jsx(Lo, {
    viewBox: "0 0 24 24",
    ...e,
    children: k.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
    }),
  });
}
function iI(e) {
  return k.jsx(Lo, {
    viewBox: "0 0 24 24",
    ...e,
    children: k.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z",
    }),
  });
}
function Uy(e) {
  return k.jsx(Lo, {
    viewBox: "0 0 24 24",
    ...e,
    children: k.jsx("path", {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
    }),
  });
}
var sI = om({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  }),
  jm = ee((e, t) => {
    const n = Yr("Spinner", e),
      {
        label: r = "Loading...",
        thickness: o = "2px",
        speed: i = "0.45s",
        emptyColor: s = "transparent",
        className: a,
        ...l
      } = bt(e),
      u = ve("chakra-spinner", a),
      c = {
        display: "inline-block",
        borderColor: "currentColor",
        borderStyle: "solid",
        borderRadius: "99999px",
        borderWidth: o,
        borderBottomColor: s,
        borderLeftColor: s,
        animation: `${sI} ${i} linear infinite`,
        ...n,
      };
    return k.jsx(q.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: r && k.jsx(q.span, { srOnly: !0, children: r }),
    });
  });
jm.displayName = "Spinner";
var [aI, Fm] = Ut({
    name: "AlertContext",
    hookName: "useAlertContext",
    providerName: "<Alert />",
  }),
  [lI, Bm] = Ut({
    name: "AlertStylesContext",
    hookName: "useAlertStyles",
    providerName: "<Alert />",
  }),
  d2 = {
    info: { icon: iI, colorScheme: "blue" },
    warning: { icon: Uy, colorScheme: "orange" },
    success: { icon: oI, colorScheme: "green" },
    error: { icon: Uy, colorScheme: "red" },
    loading: { icon: jm, colorScheme: "blue" },
  };
function uI(e) {
  return d2[e].colorScheme;
}
function cI(e) {
  return d2[e].icon;
}
var f2 = ee(function (t, n) {
  const r = Bm(),
    { status: o } = Fm(),
    i = { display: "inline", ...r.description };
  return k.jsx(q.div, {
    ref: n,
    "data-status": o,
    ...t,
    className: ve("chakra-alert__desc", t.className),
    __css: i,
  });
});
f2.displayName = "AlertDescription";
function p2(e) {
  const { status: t } = Fm(),
    n = cI(t),
    r = Bm(),
    o = t === "loading" ? r.spinner : r.icon;
  return k.jsx(q.span, {
    display: "inherit",
    "data-status": t,
    ...e,
    className: ve("chakra-alert__icon", e.className),
    __css: o,
    children: e.children || k.jsx(n, { h: "100%", w: "100%" }),
  });
}
p2.displayName = "AlertIcon";
var h2 = ee(function (t, n) {
  const r = Bm(),
    { status: o } = Fm();
  return k.jsx(q.div, {
    ref: n,
    "data-status": o,
    ...t,
    className: ve("chakra-alert__title", t.className),
    __css: r.title,
  });
});
h2.displayName = "AlertTitle";
var m2 = ee(function (t, n) {
  var r;
  const { status: o = "info", addRole: i = !0, ...s } = bt(t),
    a = (r = t.colorScheme) != null ? r : uI(o),
    l = Xr("Alert", { ...t, colorScheme: a }),
    u = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      ...l.container,
    };
  return k.jsx(aI, {
    value: { status: o },
    children: k.jsx(lI, {
      value: l,
      children: k.jsx(q.div, {
        "data-status": o,
        role: i ? "alert" : void 0,
        ref: n,
        ...s,
        className: ve("chakra-alert", t.className),
        __css: u,
      }),
    }),
  });
});
m2.displayName = "Alert";
function dI(e) {
  return k.jsx(Lo, {
    focusable: "false",
    "aria-hidden": !0,
    ...e,
    children: k.jsx("path", {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
    }),
  });
}
var g2 = ee(function (t, n) {
  const r = Yr("CloseButton", t),
    { children: o, isDisabled: i, __css: s, ...a } = bt(t),
    l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    };
  return k.jsx(q.button, {
    type: "button",
    "aria-label": "Close",
    ref: n,
    disabled: i,
    __css: { ...l, ...r, ...s },
    ...a,
    children: o || k.jsx(dI, { width: "1em", height: "1em" }),
  });
});
g2.displayName = "CloseButton";
var fI = {
    top: [],
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    bottom: [],
    "bottom-right": [],
  },
  Vs = pI(fI);
function pI(e) {
  let t = e;
  const n = new Set(),
    r = (o) => {
      (t = o(t)), n.forEach((i) => i());
    };
  return {
    getState: () => t,
    subscribe: (o) => (
      n.add(o),
      () => {
        r(() => e), n.delete(o);
      }
    ),
    removeToast: (o, i) => {
      r((s) => ({ ...s, [i]: s[i].filter((a) => a.id != o) }));
    },
    notify: (o, i) => {
      const s = hI(o, i),
        { position: a, id: l } = s;
      return (
        r((u) => {
          var c, d;
          const p = a.includes("top")
            ? [s, ...((c = u[a]) != null ? c : [])]
            : [...((d = u[a]) != null ? d : []), s];
          return { ...u, [a]: p };
        }),
        l
      );
    },
    update: (o, i) => {
      o &&
        r((s) => {
          const a = { ...s },
            { position: l, index: u } = Fv(a, o);
          return (
            l && u !== -1 && (a[l][u] = { ...a[l][u], ...i, message: gI(i) }), a
          );
        });
    },
    closeAll: ({ positions: o } = {}) => {
      r((i) =>
        (
          o ?? [
            "bottom",
            "bottom-right",
            "bottom-left",
            "top",
            "top-left",
            "top-right",
          ]
        ).reduce(
          (l, u) => ((l[u] = i[u].map((c) => ({ ...c, requestClose: !0 }))), l),
          { ...i }
        )
      );
    },
    close: (o) => {
      r((i) => {
        const s = NS(i, o);
        return s
          ? {
              ...i,
              [s]: i[s].map((a) =>
                a.id == o ? { ...a, requestClose: !0 } : a
              ),
            }
          : i;
      });
    },
    isActive: (o) => !!Fv(Vs.getState(), o).position,
  };
}
var Gy = 0;
function hI(e, t = {}) {
  var n, r;
  Gy += 1;
  const o = (n = t.id) != null ? n : Gy,
    i = (r = t.position) != null ? r : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Vs.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  };
}
var mI = (e) => {
  const {
      status: t,
      variant: n = "solid",
      id: r,
      title: o,
      isClosable: i,
      onClose: s,
      description: a,
      colorScheme: l,
      icon: u,
    } = e,
    c = r
      ? {
          root: `toast-${r}`,
          title: `toast-${r}-title`,
          description: `toast-${r}-description`,
        }
      : void 0;
  return k.jsxs(m2, {
    addRole: !1,
    status: t,
    variant: n,
    id: c == null ? void 0 : c.root,
    alignItems: "start",
    borderRadius: "md",
    boxShadow: "lg",
    paddingEnd: 8,
    textAlign: "start",
    width: "auto",
    colorScheme: l,
    children: [
      k.jsx(p2, { children: u }),
      k.jsxs(q.div, {
        flex: "1",
        maxWidth: "100%",
        children: [
          o && k.jsx(h2, { id: c == null ? void 0 : c.title, children: o }),
          a &&
            k.jsx(f2, {
              id: c == null ? void 0 : c.description,
              display: "block",
              children: a,
            }),
        ],
      }),
      i &&
        k.jsx(g2, {
          size: "sm",
          onClick: s,
          position: "absolute",
          insetEnd: 1,
          top: 1,
        }),
    ],
  });
};
function gI(e = {}) {
  const { render: t, toastComponent: n = mI } = e;
  return (o) =>
    typeof t == "function" ? t({ ...o, ...e }) : k.jsx(n, { ...o, ...e });
}
var [vI, $7] = Ut({ name: "ToastOptionsContext", strict: !1 }),
  yI = (e) => {
    const t = x.useSyncExternalStore(Vs.subscribe, Vs.getState, Vs.getState),
      { motionVariants: n, component: r = c2, portalProps: o } = e,
      s = Object.keys(t).map((a) => {
        const l = t[a];
        return k.jsx(
          "div",
          {
            role: "region",
            "aria-live": "polite",
            "aria-label": "Notifications",
            id: `chakra-toast-manager-${a}`,
            style: jM(a),
            children: k.jsx(nI, {
              initial: !1,
              children: l.map((u) =>
                k.jsx(r, { motionVariants: n, ...u }, u.id)
              ),
            }),
          },
          a
        );
      });
    return k.jsx(_c, { ...o, children: s });
  },
  bI = (e) =>
    function ({ children: n, theme: r = e, toastOptions: o, ...i }) {
      return k.jsxs(LM, {
        theme: r,
        ...i,
        children: [
          k.jsx(vI, {
            value: o == null ? void 0 : o.defaultOptions,
            children: n,
          }),
          k.jsx(yI, { ...o }),
        ],
      });
    },
  xI = bI(MS),
  SI = Object.defineProperty,
  wI = (e, t, n) =>
    t in e
      ? SI(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ze = (e, t, n) => (wI(e, typeof t != "symbol" ? t + "" : t, n), n);
function Ky(e) {
  return e.sort((t, n) => {
    const r = t.compareDocumentPosition(n);
    if (
      r & Node.DOCUMENT_POSITION_FOLLOWING ||
      r & Node.DOCUMENT_POSITION_CONTAINED_BY
    )
      return -1;
    if (
      r & Node.DOCUMENT_POSITION_PRECEDING ||
      r & Node.DOCUMENT_POSITION_CONTAINS
    )
      return 1;
    if (
      r & Node.DOCUMENT_POSITION_DISCONNECTED ||
      r & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
    )
      throw Error("Cannot sort the given nodes.");
    return 0;
  });
}
var kI = (e) =>
  typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function qy(e, t, n) {
  let r = e + 1;
  return n && r >= t && (r = 0), r;
}
function Yy(e, t, n) {
  let r = e - 1;
  return n && r < 0 && (r = t), r;
}
var Fp = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
  Ku = (e) => e,
  CI = class {
    constructor() {
      ze(this, "descendants", new Map()),
        ze(this, "register", (e) => {
          if (e != null)
            return kI(e)
              ? this.registerNode(e)
              : (t) => {
                  this.registerNode(t, e);
                };
        }),
        ze(this, "unregister", (e) => {
          this.descendants.delete(e);
          const t = Ky(Array.from(this.descendants.keys()));
          this.assignIndex(t);
        }),
        ze(this, "destroy", () => {
          this.descendants.clear();
        }),
        ze(this, "assignIndex", (e) => {
          this.descendants.forEach((t) => {
            const n = e.indexOf(t.node);
            (t.index = n), (t.node.dataset.index = t.index.toString());
          });
        }),
        ze(this, "count", () => this.descendants.size),
        ze(this, "enabledCount", () => this.enabledValues().length),
        ze(this, "values", () =>
          Array.from(this.descendants.values()).sort(
            (t, n) => t.index - n.index
          )
        ),
        ze(this, "enabledValues", () =>
          this.values().filter((e) => !e.disabled)
        ),
        ze(this, "item", (e) => {
          if (this.count() !== 0) return this.values()[e];
        }),
        ze(this, "enabledItem", (e) => {
          if (this.enabledCount() !== 0) return this.enabledValues()[e];
        }),
        ze(this, "first", () => this.item(0)),
        ze(this, "firstEnabled", () => this.enabledItem(0)),
        ze(this, "last", () => this.item(this.descendants.size - 1)),
        ze(this, "lastEnabled", () => {
          const e = this.enabledValues().length - 1;
          return this.enabledItem(e);
        }),
        ze(this, "indexOf", (e) => {
          var t, n;
          return e &&
            (n = (t = this.descendants.get(e)) == null ? void 0 : t.index) !=
              null
            ? n
            : -1;
        }),
        ze(this, "enabledIndexOf", (e) =>
          e == null
            ? -1
            : this.enabledValues().findIndex((t) => t.node.isSameNode(e))
        ),
        ze(this, "next", (e, t = !0) => {
          const n = qy(e, this.count(), t);
          return this.item(n);
        }),
        ze(this, "nextEnabled", (e, t = !0) => {
          const n = this.item(e);
          if (!n) return;
          const r = this.enabledIndexOf(n.node),
            o = qy(r, this.enabledCount(), t);
          return this.enabledItem(o);
        }),
        ze(this, "prev", (e, t = !0) => {
          const n = Yy(e, this.count() - 1, t);
          return this.item(n);
        }),
        ze(this, "prevEnabled", (e, t = !0) => {
          const n = this.item(e);
          if (!n) return;
          const r = this.enabledIndexOf(n.node),
            o = Yy(r, this.enabledCount() - 1, t);
          return this.enabledItem(o);
        }),
        ze(this, "registerNode", (e, t) => {
          if (!e || this.descendants.has(e)) return;
          const n = Array.from(this.descendants.keys()).concat(e),
            r = Ky(n);
          t != null && t.disabled && (t.disabled = !!t.disabled);
          const o = { node: e, index: -1, ...t };
          this.descendants.set(e, o), this.assignIndex(r);
        });
    }
  };
function EI(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function cn(...e) {
  return (t) => {
    e.forEach((n) => {
      EI(n, t);
    });
  };
}
function _I(...e) {
  return x.useMemo(() => cn(...e), e);
}
function PI() {
  const e = x.useRef(new CI());
  return Fp(() => () => e.current.destroy()), e.current;
}
var [TI, v2] = Ut({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider",
});
function AI(e) {
  const t = v2(),
    [n, r] = x.useState(-1),
    o = x.useRef(null);
  Fp(
    () => () => {
      o.current && t.unregister(o.current);
    },
    []
  ),
    Fp(() => {
      if (!o.current) return;
      const s = Number(o.current.dataset.index);
      n != s && !Number.isNaN(s) && r(s);
    });
  const i = Ku(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: n,
    enabledIndex: t.enabledIndexOf(o.current),
    register: cn(i, o),
  };
}
function RI() {
  return [Ku(TI), () => Ku(v2()), () => PI(), (o) => AI(o)];
}
var Bp = ee(function (t, n) {
  const { htmlWidth: r, htmlHeight: o, alt: i, ...s } = t;
  return k.jsx("img", { width: r, height: o, ref: n, alt: i, ...s });
});
Bp.displayName = "NativeImage";
function $I(e) {
  const {
      loading: t,
      src: n,
      srcSet: r,
      onLoad: o,
      onError: i,
      crossOrigin: s,
      sizes: a,
      ignoreFallback: l,
    } = e,
    [u, c] = x.useState("pending");
  x.useEffect(() => {
    c(n ? "loading" : "pending");
  }, [n]);
  const d = x.useRef(),
    f = x.useCallback(() => {
      if (!n) return;
      p();
      const m = new Image();
      (m.src = n),
        s && (m.crossOrigin = s),
        r && (m.srcset = r),
        a && (m.sizes = a),
        t && (m.loading = t),
        (m.onload = (y) => {
          p(), c("loaded"), o == null || o(y);
        }),
        (m.onerror = (y) => {
          p(), c("failed"), i == null || i(y);
        }),
        (d.current = m);
    }, [n, s, r, a, o, i, t]),
    p = () => {
      d.current &&
        ((d.current.onload = null),
        (d.current.onerror = null),
        (d.current = null));
    };
  return (
    er(() => {
      if (!l)
        return (
          u === "loading" && f(),
          () => {
            p();
          }
        );
    }, [u, f, l]),
    l ? "loaded" : u
  );
}
var MI = (e, t) =>
  (e !== "loaded" && t === "beforeLoadOrError") ||
  (e === "failed" && t === "onError");
function OI(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
var za = ee(function (t, n) {
  const {
      fallbackSrc: r,
      fallback: o,
      src: i,
      srcSet: s,
      align: a,
      fit: l,
      loading: u,
      ignoreFallback: c,
      crossOrigin: d,
      fallbackStrategy: f = "beforeLoadOrError",
      referrerPolicy: p,
      ...m
    } = t,
    y = r !== void 0 || o !== void 0,
    w = u != null || c || !y,
    g = $I({ ...t, crossOrigin: d, ignoreFallback: w }),
    h = MI(g, f),
    v = {
      ref: n,
      objectFit: l,
      objectPosition: a,
      ...(w ? m : OI(m, ["onError", "onLoad"])),
    };
  return h
    ? o ||
        k.jsx(q.img, {
          as: Bp,
          className: "chakra-image__placeholder",
          src: r,
          ...v,
        })
    : k.jsx(q.img, {
        as: Bp,
        src: i,
        srcSet: s,
        crossOrigin: d,
        loading: u,
        referrerPolicy: p,
        className: "chakra-image",
        ...v,
      });
});
za.displayName = "Image";
function Nm(e) {
  return x.Children.toArray(e).filter((t) => x.isValidElement(t));
}
var [M7, zI] = Ut({ strict: !1, name: "ButtonGroupContext" });
function LI(e) {
  const [t, n] = x.useState(!e);
  return {
    ref: x.useCallback((i) => {
      i && n(i.tagName === "BUTTON");
    }, []),
    type: t ? "button" : void 0,
  };
}
function Np(e) {
  const { children: t, className: n, ...r } = e,
    o = x.isValidElement(t)
      ? x.cloneElement(t, { "aria-hidden": !0, focusable: !1 })
      : t,
    i = ve("chakra-button__icon", n);
  return k.jsx(q.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...r,
    className: i,
    children: o,
  });
}
Np.displayName = "ButtonIcon";
function Vp(e) {
  const {
      label: t,
      placement: n,
      spacing: r = "0.5rem",
      children: o = k.jsx(jm, {
        color: "currentColor",
        width: "1em",
        height: "1em",
      }),
      className: i,
      __css: s,
      ...a
    } = e,
    l = ve("chakra-button__spinner", i),
    u = n === "start" ? "marginEnd" : "marginStart",
    c = x.useMemo(
      () => ({
        display: "flex",
        alignItems: "center",
        position: t ? "relative" : "absolute",
        [u]: t ? r : 0,
        fontSize: "1em",
        lineHeight: "normal",
        ...s,
      }),
      [s, t, u, r]
    );
  return k.jsx(q.div, { className: l, ...a, __css: c, children: o });
}
Vp.displayName = "ButtonSpinner";
var Fc = ee((e, t) => {
  const n = zI(),
    r = Yr("Button", { ...n, ...e }),
    {
      isDisabled: o = n == null ? void 0 : n.isDisabled,
      isLoading: i,
      isActive: s,
      children: a,
      leftIcon: l,
      rightIcon: u,
      loadingText: c,
      iconSpacing: d = "0.5rem",
      type: f,
      spinner: p,
      spinnerPlacement: m = "start",
      className: y,
      as: w,
      ...g
    } = bt(e),
    h = x.useMemo(() => {
      const T = { ...(r == null ? void 0 : r._focus), zIndex: 1 };
      return {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        position: "relative",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        outline: "none",
        ...r,
        ...(!!n && { _focus: T }),
      };
    }, [r, n]),
    { ref: v, type: S } = LI(w),
    P = { rightIcon: u, leftIcon: l, iconSpacing: d, children: a };
  return k.jsxs(q.button, {
    ref: _I(t, v),
    as: w,
    type: f ?? S,
    "data-active": le(s),
    "data-loading": le(i),
    __css: h,
    className: ve("chakra-button", y),
    ...g,
    disabled: o || i,
    children: [
      i &&
        m === "start" &&
        k.jsx(Vp, {
          className: "chakra-button__spinner--start",
          label: c,
          placement: "start",
          spacing: d,
          children: p,
        }),
      i
        ? c || k.jsx(q.span, { opacity: 0, children: k.jsx(Xy, { ...P }) })
        : k.jsx(Xy, { ...P }),
      i &&
        m === "end" &&
        k.jsx(Vp, {
          className: "chakra-button__spinner--end",
          label: c,
          placement: "end",
          spacing: d,
          children: p,
        }),
    ],
  });
});
Fc.displayName = "Button";
function Xy(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return k.jsxs(k.Fragment, {
    children: [
      t && k.jsx(Np, { marginEnd: o, children: t }),
      r,
      n && k.jsx(Np, { marginStart: o, children: n }),
    ],
  });
}
var [II, DI] = MM("Card"),
  y2 = ee(function (t, n) {
    const { className: r, ...o } = t,
      i = DI();
    return k.jsx(q.div, {
      ref: n,
      className: ve("chakra-card__body", r),
      __css: i.body,
      ...o,
    });
  }),
  b2 = ee(function (t, n) {
    const {
        className: r,
        children: o,
        direction: i = "column",
        justify: s,
        align: a,
        ...l
      } = bt(t),
      u = Xr("Card", t);
    return k.jsx(q.div, {
      ref: n,
      className: ve("chakra-card", r),
      __css: {
        display: "flex",
        flexDirection: i,
        justifyContent: s,
        alignItems: a,
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        ...u.container,
      },
      ...l,
      children: k.jsx(II, { value: u, children: o }),
    });
  }),
  [jI, FI] = Ut({
    name: "FormControlStylesContext",
    errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `,
  }),
  [BI, x2] = Ut({ strict: !1, name: "FormControlContext" });
function NI(e) {
  const {
      id: t,
      isRequired: n,
      isInvalid: r,
      isDisabled: o,
      isReadOnly: i,
      ...s
    } = e,
    a = x.useId(),
    l = t || `field-${a}`,
    u = `${l}-label`,
    c = `${l}-feedback`,
    d = `${l}-helptext`,
    [f, p] = x.useState(!1),
    [m, y] = x.useState(!1),
    [w, g] = x.useState(!1),
    h = x.useCallback(
      (_ = {}, A = null) => ({
        id: d,
        ..._,
        ref: cn(A, (O) => {
          O && y(!0);
        }),
      }),
      [d]
    ),
    v = x.useCallback(
      (_ = {}, A = null) => ({
        ..._,
        ref: A,
        "data-focus": le(w),
        "data-disabled": le(o),
        "data-invalid": le(r),
        "data-readonly": le(i),
        id: _.id !== void 0 ? _.id : u,
        htmlFor: _.htmlFor !== void 0 ? _.htmlFor : l,
      }),
      [l, o, w, r, i, u]
    ),
    S = x.useCallback(
      (_ = {}, A = null) => ({
        id: c,
        ..._,
        ref: cn(A, (O) => {
          O && p(!0);
        }),
        "aria-live": "polite",
      }),
      [c]
    ),
    P = x.useCallback(
      (_ = {}, A = null) => ({ ..._, ...s, ref: A, role: "group" }),
      [s]
    ),
    T = x.useCallback(
      (_ = {}, A = null) => ({
        ..._,
        ref: A,
        role: "presentation",
        "aria-hidden": !0,
        children: _.children || "*",
      }),
      []
    );
  return {
    isRequired: !!n,
    isInvalid: !!r,
    isReadOnly: !!i,
    isDisabled: !!o,
    isFocused: !!w,
    onFocus: () => g(!0),
    onBlur: () => g(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: m,
    setHasHelpText: y,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: s,
    getHelpTextProps: h,
    getErrorMessageProps: S,
    getRootProps: P,
    getLabelProps: v,
    getRequiredIndicatorProps: T,
  };
}
var VI = ee(function (t, n) {
  const r = Xr("Form", t),
    o = bt(t),
    { getRootProps: i, htmlProps: s, ...a } = NI(o),
    l = ve("chakra-form-control", t.className);
  return k.jsx(BI, {
    value: a,
    children: k.jsx(jI, {
      value: r,
      children: k.jsx(q.div, { ...i({}, n), className: l, __css: r.container }),
    }),
  });
});
VI.displayName = "FormControl";
var WI = ee(function (t, n) {
  const r = x2(),
    o = FI(),
    i = ve("chakra-form__helper-text", t.className);
  return k.jsx(q.div, {
    ...(r == null ? void 0 : r.getHelpTextProps(t, n)),
    __css: o.helperText,
    className: i,
  });
});
WI.displayName = "FormHelperText";
function HI(e) {
  const {
    isDisabled: t,
    isInvalid: n,
    isReadOnly: r,
    isRequired: o,
    ...i
  } = S2(e);
  return {
    ...i,
    disabled: t,
    readOnly: r,
    required: o,
    "aria-invalid": Id(n),
    "aria-required": Id(o),
    "aria-readonly": Id(r),
  };
}
function S2(e) {
  var t, n, r;
  const o = x2(),
    {
      id: i,
      disabled: s,
      readOnly: a,
      required: l,
      isRequired: u,
      isInvalid: c,
      isReadOnly: d,
      isDisabled: f,
      onFocus: p,
      onBlur: m,
      ...y
    } = e,
    w = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return (
    o != null &&
      o.hasFeedbackText &&
      o != null &&
      o.isInvalid &&
      w.push(o.feedbackId),
    o != null && o.hasHelpText && w.push(o.helpTextId),
    {
      ...y,
      "aria-describedby": w.join(" ") || void 0,
      id: i ?? (o == null ? void 0 : o.id),
      isDisabled: (t = s ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
      isReadOnly: (n = a ?? d) != null ? n : o == null ? void 0 : o.isReadOnly,
      isRequired: (r = l ?? u) != null ? r : o == null ? void 0 : o.isRequired,
      isInvalid: c ?? (o == null ? void 0 : o.isInvalid),
      onFocus: lt(o == null ? void 0 : o.onFocus, p),
      onBlur: lt(o == null ? void 0 : o.onBlur, m),
    }
  );
}
var UI = {
    border: "0",
    clip: "rect(0, 0, 0, 0)",
    height: "1px",
    width: "1px",
    margin: "-1px",
    padding: "0",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  GI = () => typeof document < "u",
  Qy = !1,
  La = null,
  To = !1,
  Wp = !1,
  Hp = new Set();
function Vm(e, t) {
  Hp.forEach((n) => n(e, t));
}
var KI =
  typeof window < "u" && window.navigator != null
    ? /^Mac/.test(window.navigator.platform)
    : !1;
function qI(e) {
  return !(
    e.metaKey ||
    (!KI && e.altKey) ||
    e.ctrlKey ||
    e.key === "Control" ||
    e.key === "Shift" ||
    e.key === "Meta"
  );
}
function Zy(e) {
  (To = !0), qI(e) && ((La = "keyboard"), Vm("keyboard", e));
}
function No(e) {
  if (((La = "pointer"), e.type === "mousedown" || e.type === "pointerdown")) {
    To = !0;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    let n = !1;
    try {
      n = t.matches(":focus-visible");
    } catch {}
    if (n) return;
    Vm("pointer", e);
  }
}
function YI(e) {
  return e.mozInputSource === 0 && e.isTrusted
    ? !0
    : e.detail === 0 && !e.pointerType;
}
function XI(e) {
  YI(e) && ((To = !0), (La = "virtual"));
}
function QI(e) {
  e.target === window ||
    e.target === document ||
    (!To && !Wp && ((La = "virtual"), Vm("virtual", e)), (To = !1), (Wp = !1));
}
function ZI() {
  (To = !1), (Wp = !0);
}
function Jy() {
  return La !== "pointer";
}
function JI() {
  if (!GI() || Qy) return;
  const { focus: e } = HTMLElement.prototype;
  (HTMLElement.prototype.focus = function (...n) {
    (To = !0), e.apply(this, n);
  }),
    document.addEventListener("keydown", Zy, !0),
    document.addEventListener("keyup", Zy, !0),
    document.addEventListener("click", XI, !0),
    window.addEventListener("focus", QI, !0),
    window.addEventListener("blur", ZI, !1),
    typeof PointerEvent < "u"
      ? (document.addEventListener("pointerdown", No, !0),
        document.addEventListener("pointermove", No, !0),
        document.addEventListener("pointerup", No, !0))
      : (document.addEventListener("mousedown", No, !0),
        document.addEventListener("mousemove", No, !0),
        document.addEventListener("mouseup", No, !0)),
    (Qy = !0);
}
function eD(e) {
  JI(), e(Jy());
  const t = () => e(Jy());
  return (
    Hp.add(t),
    () => {
      Hp.delete(t);
    }
  );
}
function tD(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
function nD(e = {}) {
  const t = S2(e),
    {
      isDisabled: n,
      isReadOnly: r,
      isRequired: o,
      isInvalid: i,
      id: s,
      onBlur: a,
      onFocus: l,
      "aria-describedby": u,
    } = t,
    {
      defaultChecked: c,
      isChecked: d,
      isFocusable: f,
      onChange: p,
      isIndeterminate: m,
      name: y,
      value: w,
      tabIndex: g = void 0,
      "aria-label": h,
      "aria-labelledby": v,
      "aria-invalid": S,
      ...P
    } = e,
    T = tD(P, [
      "isDisabled",
      "isReadOnly",
      "isRequired",
      "isInvalid",
      "id",
      "onBlur",
      "onFocus",
      "aria-describedby",
    ]),
    _ = Dr(p),
    A = Dr(a),
    O = Dr(l),
    [M, F] = x.useState(!1),
    [X, Y] = x.useState(!1),
    [Q, J] = x.useState(!1),
    [Z, z] = x.useState(!1);
  x.useEffect(() => eD(F), []);
  const L = x.useRef(null),
    [B, H] = x.useState(!0),
    [V, te] = x.useState(!!c),
    N = d !== void 0,
    G = N ? d : V,
    ke = x.useCallback(
      (ne) => {
        if (r || n) {
          ne.preventDefault();
          return;
        }
        N || te(G ? ne.target.checked : m ? !0 : ne.target.checked),
          _ == null || _(ne);
      },
      [r, n, G, N, m, _]
    );
  er(() => {
    L.current && (L.current.indeterminate = !!m);
  }, [m]),
    Oi(() => {
      n && Y(!1);
    }, [n, Y]),
    er(() => {
      const ne = L.current;
      if (!(ne != null && ne.form)) return;
      const Ze = () => {
        te(!!c);
      };
      return (
        ne.form.addEventListener("reset", Ze),
        () => {
          var dt;
          return (dt = ne.form) == null
            ? void 0
            : dt.removeEventListener("reset", Ze);
        }
      );
    }, []);
  const he = n && !f,
    He = x.useCallback(
      (ne) => {
        ne.key === " " && z(!0);
      },
      [z]
    ),
    De = x.useCallback(
      (ne) => {
        ne.key === " " && z(!1);
      },
      [z]
    );
  er(() => {
    if (!L.current) return;
    L.current.checked !== G && te(L.current.checked);
  }, [L.current]);
  const Gt = x.useCallback(
      (ne = {}, Ze = null) => {
        const dt = (pr) => {
          X && pr.preventDefault(), z(!0);
        };
        return {
          ...ne,
          ref: Ze,
          "data-active": le(Z),
          "data-hover": le(Q),
          "data-checked": le(G),
          "data-focus": le(X),
          "data-focus-visible": le(X && M),
          "data-indeterminate": le(m),
          "data-disabled": le(n),
          "data-invalid": le(i),
          "data-readonly": le(r),
          "aria-hidden": !0,
          onMouseDown: lt(ne.onMouseDown, dt),
          onMouseUp: lt(ne.onMouseUp, () => z(!1)),
          onMouseEnter: lt(ne.onMouseEnter, () => J(!0)),
          onMouseLeave: lt(ne.onMouseLeave, () => J(!1)),
        };
      },
      [Z, G, n, X, M, Q, m, i, r]
    ),
    Kt = x.useCallback(
      (ne = {}, Ze = null) => ({
        ...ne,
        ref: Ze,
        "data-active": le(Z),
        "data-hover": le(Q),
        "data-checked": le(G),
        "data-focus": le(X),
        "data-focus-visible": le(X && M),
        "data-indeterminate": le(m),
        "data-disabled": le(n),
        "data-invalid": le(i),
        "data-readonly": le(r),
      }),
      [Z, G, n, X, M, Q, m, i, r]
    ),
    ot = x.useCallback(
      (ne = {}, Ze = null) => ({
        ...T,
        ...ne,
        ref: cn(Ze, (dt) => {
          dt && H(dt.tagName === "LABEL");
        }),
        onClick: lt(ne.onClick, () => {
          var dt;
          B ||
            ((dt = L.current) == null || dt.click(),
            requestAnimationFrame(() => {
              var pr;
              (pr = L.current) == null || pr.focus({ preventScroll: !0 });
            }));
        }),
        "data-disabled": le(n),
        "data-checked": le(G),
        "data-invalid": le(i),
      }),
      [T, n, G, i, B]
    ),
    Bn = x.useCallback(
      (ne = {}, Ze = null) => ({
        ...ne,
        ref: cn(L, Ze),
        type: "checkbox",
        name: y,
        value: w,
        id: s,
        tabIndex: g,
        onChange: lt(ne.onChange, ke),
        onBlur: lt(ne.onBlur, A, () => Y(!1)),
        onFocus: lt(ne.onFocus, O, () => Y(!0)),
        onKeyDown: lt(ne.onKeyDown, He),
        onKeyUp: lt(ne.onKeyUp, De),
        required: o,
        checked: G,
        disabled: he,
        readOnly: r,
        "aria-label": h,
        "aria-labelledby": v,
        "aria-invalid": S ? !!S : i,
        "aria-describedby": u,
        "aria-disabled": n,
        style: UI,
      }),
      [y, w, s, ke, A, O, He, De, o, G, he, r, h, v, S, i, u, n, g]
    ),
    Nn = x.useCallback(
      (ne = {}, Ze = null) => ({
        ...ne,
        ref: Ze,
        onMouseDown: lt(ne.onMouseDown, rD),
        "data-disabled": le(n),
        "data-checked": le(G),
        "data-invalid": le(i),
      }),
      [G, n, i]
    );
  return {
    state: {
      isInvalid: i,
      isFocused: X,
      isChecked: G,
      isActive: Z,
      isHovered: Q,
      isIndeterminate: m,
      isDisabled: n,
      isReadOnly: r,
      isRequired: o,
    },
    getRootProps: ot,
    getCheckboxProps: Gt,
    getIndicatorProps: Kt,
    getInputProps: Bn,
    getLabelProps: Nn,
    htmlProps: T,
  };
}
function rD(e) {
  e.preventDefault(), e.stopPropagation();
}
function oD(e, t, n, r) {
  const o = Dr(n);
  return (
    x.useEffect(() => {
      const i = typeof e == "function" ? e() : e ?? document;
      if (!(!n || !i))
        return (
          i.addEventListener(t, o, r),
          () => {
            i.removeEventListener(t, o, r);
          }
        );
    }, [t, e, r, o, n]),
    () => {
      const i = typeof e == "function" ? e() : e ?? document;
      i == null || i.removeEventListener(t, o, r);
    }
  );
}
function w2(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "nodeType" in e &&
    e.nodeType === Node.ELEMENT_NODE
  );
}
function k2(e) {
  var t;
  if (!w2(e)) return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function iD(e) {
  var t, n;
  return (n = (t = C2(e)) == null ? void 0 : t.defaultView) != null
    ? n
    : window;
}
function C2(e) {
  return w2(e) ? e.ownerDocument : document;
}
function sD(e) {
  return C2(e).activeElement;
}
var E2 = (e) => e.hasAttribute("tabindex"),
  aD = (e) => E2(e) && e.tabIndex === -1;
function lD(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function _2(e) {
  return e.parentElement && _2(e.parentElement) ? !0 : e.hidden;
}
function uD(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function cD(e) {
  if (!k2(e) || _2(e) || lD(e)) return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0) return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls"),
  };
  return t in r ? r[t]() : uD(e) ? !0 : E2(e);
}
function dD(e) {
  return e ? k2(e) && cD(e) && !aD(e) : !1;
}
var [fD, pD] = Ut({
    name: "InputGroupStylesContext",
    errorMessage: `useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `,
  }),
  P2 = ee(function (t, n) {
    const r = Xr("Input", t),
      { children: o, className: i, ...s } = bt(t),
      a = ve("chakra-input__group", i),
      l = {},
      u = Nm(o),
      c = r.field;
    u.forEach((f) => {
      var p, m;
      r &&
        (c &&
          f.type.id === "InputLeftElement" &&
          (l.paddingStart = (p = c.height) != null ? p : c.h),
        c &&
          f.type.id === "InputRightElement" &&
          (l.paddingEnd = (m = c.height) != null ? m : c.h),
        f.type.id === "InputRightAddon" && (l.borderEndRadius = 0),
        f.type.id === "InputLeftAddon" && (l.borderStartRadius = 0));
    });
    const d = u.map((f) => {
      var p, m;
      const y = mm({
        size: ((p = f.props) == null ? void 0 : p.size) || t.size,
        variant: ((m = f.props) == null ? void 0 : m.variant) || t.variant,
      });
      return f.type.id !== "Input"
        ? x.cloneElement(f, y)
        : x.cloneElement(f, Object.assign(y, l, f.props));
    });
    return k.jsx(q.div, {
      className: a,
      ref: n,
      __css: {
        width: "100%",
        display: "flex",
        position: "relative",
        isolation: "isolate",
        ...r.group,
      },
      "data-group": !0,
      ...s,
      children: k.jsx(fD, { value: r, children: d }),
    });
  });
P2.displayName = "InputGroup";
var hD = q("div", {
    baseStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "0",
      zIndex: 2,
    },
  }),
  Bc = ee(function (t, n) {
    var r, o;
    const { placement: i = "left", ...s } = t,
      a = pD(),
      l = a.field,
      c = {
        [i === "left" ? "insetStart" : "insetEnd"]: "0",
        width:
          (r = l == null ? void 0 : l.height) != null
            ? r
            : l == null
            ? void 0
            : l.h,
        height:
          (o = l == null ? void 0 : l.height) != null
            ? o
            : l == null
            ? void 0
            : l.h,
        fontSize: l == null ? void 0 : l.fontSize,
        ...a.element,
      };
    return k.jsx(hD, { ref: n, __css: c, ...s });
  });
Bc.id = "InputElement";
Bc.displayName = "InputElement";
var Wm = ee(function (t, n) {
  const { className: r, ...o } = t,
    i = ve("chakra-input__left-element", r);
  return k.jsx(Bc, { ref: n, placement: "left", className: i, ...o });
});
Wm.id = "InputLeftElement";
Wm.displayName = "InputLeftElement";
var T2 = ee(function (t, n) {
  const { className: r, ...o } = t,
    i = ve("chakra-input__right-element", r);
  return k.jsx(Bc, { ref: n, placement: "right", className: i, ...o });
});
T2.id = "InputRightElement";
T2.displayName = "InputRightElement";
var Hm = ee(function (t, n) {
  const { htmlSize: r, ...o } = t,
    i = Xr("Input", o),
    s = bt(o),
    a = HI(s),
    l = ve("chakra-input", t.className);
  return k.jsx(q.input, {
    size: r,
    ...a,
    __css: i.field,
    ref: n,
    className: l,
  });
});
Hm.displayName = "Input";
Hm.id = "Input";
var [mD, A2] = Ut({
    name: "ListStylesContext",
    errorMessage: `useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `,
  }),
  Nc = ee(function (t, n) {
    const r = Xr("List", t),
      {
        children: o,
        styleType: i = "none",
        stylePosition: s,
        spacing: a,
        ...l
      } = bt(t),
      u = Nm(o),
      d = a ? { ["& > *:not(style) ~ *:not(style)"]: { mt: a } } : {};
    return k.jsx(mD, {
      value: r,
      children: k.jsx(q.ul, {
        ref: n,
        listStyleType: i,
        listStylePosition: s,
        role: "list",
        __css: { ...r.container, ...d },
        ...l,
        children: u,
      }),
    });
  });
Nc.displayName = "List";
var gD = ee((e, t) => {
  const { as: n, ...r } = e;
  return k.jsx(Nc, {
    ref: t,
    as: "ol",
    styleType: "decimal",
    marginStart: "1em",
    ...r,
  });
});
gD.displayName = "OrderedList";
var vD = ee(function (t, n) {
  const { as: r, ...o } = t;
  return k.jsx(Nc, {
    ref: n,
    as: "ul",
    styleType: "initial",
    marginStart: "1em",
    ...o,
  });
});
vD.displayName = "UnorderedList";
var Up = ee(function (t, n) {
  const r = A2();
  return k.jsx(q.li, { ref: n, ...t, __css: r.item });
});
Up.displayName = "ListItem";
var yD = ee(function (t, n) {
  const r = A2();
  return k.jsx(Lo, { ref: n, role: "presentation", ...t, __css: r.icon });
});
yD.displayName = "ListIcon";
var Um = ee(function (t, n) {
  const {
      templateAreas: r,
      gap: o,
      rowGap: i,
      columnGap: s,
      column: a,
      row: l,
      autoFlow: u,
      autoRows: c,
      templateRows: d,
      autoColumns: f,
      templateColumns: p,
      ...m
    } = t,
    y = {
      display: "grid",
      gridTemplateAreas: r,
      gridGap: o,
      gridRowGap: i,
      gridColumnGap: s,
      gridAutoColumns: f,
      gridColumn: a,
      gridRow: l,
      gridAutoFlow: u,
      gridAutoRows: c,
      gridTemplateRows: d,
      gridTemplateColumns: p,
    };
  return k.jsx(q.div, { ref: n, __css: y, ...m });
});
Um.displayName = "Grid";
var R2 = Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
function Vc(e, t) {
  return Array.isArray(e)
    ? e.map((n) => (n === null ? null : t(n)))
    : _t(e)
    ? Object.keys(e).reduce((n, r) => ((n[r] = t(e[r])), n), {})
    : e != null
    ? t(e)
    : null;
}
function bD(e, t = R2) {
  const n = {};
  return (
    e.forEach((r, o) => {
      const i = t[o];
      r != null && (n[i] = r);
    }),
    n
  );
}
var $2 = ee(function (t, n) {
  const {
      columns: r,
      spacingX: o,
      spacingY: i,
      spacing: s,
      minChildWidth: a,
      ...l
    } = t,
    u = Mo(),
    c = a ? SD(a, u) : wD(r);
  return k.jsx(Um, {
    ref: n,
    gap: s,
    columnGap: o,
    rowGap: i,
    templateColumns: c,
    ...l,
  });
});
$2.displayName = "SimpleGrid";
function xD(e) {
  return typeof e == "number" ? `${e}px` : e;
}
function SD(e, t) {
  return Vc(e, (n) => {
    const r = dS("sizes", n, xD(n))(t);
    return n === null ? null : `repeat(auto-fit, minmax(${r}, 1fr))`;
  });
}
function wD(e) {
  return Vc(e, (t) => (t === null ? null : `repeat(${t}, minmax(0, 1fr))`));
}
var Gm = ee(function (t, n) {
  const r = Yr("Text", t),
    { className: o, align: i, decoration: s, casing: a, ...l } = bt(t),
    u = mm({
      textAlign: t.align,
      textDecoration: t.decoration,
      textTransform: t.casing,
    });
  return k.jsx(q.p, {
    ref: n,
    className: ve("chakra-text", t.className),
    ...u,
    ...l,
    __css: r,
  });
});
Gm.displayName = "Text";
var M2 = (e) =>
  k.jsx(q.div, {
    className: "chakra-stack__item",
    ...e,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...e.__css,
    },
  });
M2.displayName = "StackItem";
function kD(e) {
  const { spacing: t, direction: n } = e,
    r = {
      column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" },
      "column-reverse": {
        my: t,
        mx: 0,
        borderLeftWidth: 0,
        borderBottomWidth: "1px",
      },
      row: { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 },
      "row-reverse": {
        mx: t,
        my: 0,
        borderLeftWidth: "1px",
        borderBottomWidth: 0,
      },
    };
  return { "&": Vc(n, (o) => r[o]) };
}
var O2 = ee((e, t) => {
  const {
      isInline: n,
      direction: r,
      align: o,
      justify: i,
      spacing: s = "0.5rem",
      wrap: a,
      children: l,
      divider: u,
      className: c,
      shouldWrapChildren: d,
      ...f
    } = e,
    p = n ? "row" : r ?? "column",
    m = x.useMemo(() => kD({ spacing: s, direction: p }), [s, p]),
    y = !!u,
    w = !d && !y,
    g = x.useMemo(() => {
      const v = Nm(l);
      return w
        ? v
        : v.map((S, P) => {
            const T = typeof S.key < "u" ? S.key : P,
              _ = P + 1 === v.length,
              O = d ? k.jsx(M2, { children: S }, T) : S;
            if (!y) return O;
            const M = x.cloneElement(u, { __css: m }),
              F = _ ? null : M;
            return k.jsxs(x.Fragment, { children: [O, F] }, T);
          });
    }, [u, m, y, w, d, l]),
    h = ve("chakra-stack", c);
  return k.jsx(q.div, {
    ref: t,
    display: "flex",
    alignItems: o,
    justifyContent: i,
    flexDirection: p,
    flexWrap: a,
    gap: y ? void 0 : s,
    className: h,
    ...f,
    children: g,
  });
});
O2.displayName = "Stack";
var Ur = ee((e, t) =>
  k.jsx(O2, { align: "center", ...e, direction: "row", ref: t })
);
Ur.displayName = "HStack";
function e1(e) {
  return Vc(e, (t) => (t === "auto" ? "auto" : `span ${t}/span ${t}`));
}
var tu = ee(function (t, n) {
  const {
      area: r,
      colSpan: o,
      colStart: i,
      colEnd: s,
      rowEnd: a,
      rowSpan: l,
      rowStart: u,
      ...c
    } = t,
    d = mm({
      gridArea: r,
      gridColumn: e1(o),
      gridRow: e1(l),
      gridColumnStart: i,
      gridColumnEnd: s,
      gridRowStart: u,
      gridRowEnd: a,
    });
  return k.jsx(q.div, { ref: n, __css: d, ...c });
});
tu.displayName = "GridItem";
var Wc = ee(function (t, n) {
  const r = Yr("Heading", t),
    { className: o, ...i } = bt(t);
  return k.jsx(q.h2, {
    ref: n,
    className: ve("chakra-heading", t.className),
    ...i,
    __css: r,
  });
});
Wc.displayName = "Heading";
var Hc = q("div");
Hc.displayName = "Box";
var z2 = ee(function (t, n) {
  const { size: r, centerContent: o = !0, ...i } = t,
    s = o
      ? { display: "flex", alignItems: "center", justifyContent: "center" }
      : {};
  return k.jsx(Hc, {
    ref: n,
    boxSize: r,
    __css: { ...s, flexShrink: 0, flexGrow: 0 },
    ...i,
  });
});
z2.displayName = "Square";
var CD = ee(function (t, n) {
  const { size: r, ...o } = t;
  return k.jsx(z2, { size: r, ref: n, borderRadius: "9999px", ...o });
});
CD.displayName = "Circle";
var L2 = ee(function (t, n) {
  const r = Yr("Badge", t),
    { className: o, ...i } = bt(t);
  return k.jsx(q.span, {
    ref: n,
    className: ve("chakra-badge", t.className),
    ...i,
    __css: {
      display: "inline-block",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      ...r,
    },
  });
});
L2.displayName = "Badge";
function I2(e, t = {}) {
  const { ssr: n = !0, fallback: r } = t,
    { getWindow: o } = zM(),
    i = Array.isArray(e) ? e : [e];
  let s = Array.isArray(r) ? r : [r];
  s = s.filter((u) => u != null);
  const [a, l] = x.useState(() =>
    i.map((u, c) => ({
      media: u,
      matches: n ? !!s[c] : o().matchMedia(u).matches,
    }))
  );
  return (
    x.useEffect(() => {
      const u = o();
      l(i.map((f) => ({ media: f, matches: u.matchMedia(f).matches })));
      const c = i.map((f) => u.matchMedia(f)),
        d = (f) => {
          l((p) =>
            p
              .slice()
              .map((m) =>
                m.media === f.media ? { ...m, matches: f.matches } : m
              )
          );
        };
      return (
        c.forEach((f) => {
          typeof f.addListener == "function"
            ? f.addListener(d)
            : f.addEventListener("change", d);
        }),
        () => {
          c.forEach((f) => {
            typeof f.removeListener == "function"
              ? f.removeListener(d)
              : f.removeEventListener("change", d);
          });
        }
      );
    }, [o]),
    a.map((u) => u.matches)
  );
}
function ED(e) {
  const { breakpoint: t, hide: n, children: r, ssr: o } = e,
    [i] = I2(t, { ssr: o });
  return (n ? !i : i) ? r : null;
}
var t1 = (e, t) => {
  var n, r;
  return (r =
    (n = e == null ? void 0 : e.breakpoints) == null ? void 0 : n[t]) != null
    ? r
    : t;
};
function _D(e) {
  const { breakpoint: t = "", below: n, above: r } = e,
    o = Mo(),
    i = t1(o, n),
    s = t1(o, r);
  let a = t;
  return i ? (a = `(max-width: ${i})`) : s && (a = `(min-width: ${s})`), a;
}
function D2(e) {
  const { children: t, ssr: n } = e,
    r = _D(e);
  return k.jsx(ED, { breakpoint: r, ssr: n, children: t });
}
D2.displayName = "Show";
function PD(e, t, n = R2) {
  let r = Object.keys(e).indexOf(t);
  if (r !== -1) return e[t];
  let o = n.indexOf(t);
  for (; o >= 0; ) {
    const i = n[o];
    if (e.hasOwnProperty(i)) {
      r = o;
      break;
    }
    o -= 1;
  }
  if (r !== -1) {
    const i = n[r];
    return e[i];
  }
}
function TD(e) {
  var t, n;
  const r = _t(e) ? e : { fallback: e ?? "base" },
    i = Mo().__breakpoints.details.map(({ minMaxQuery: u, breakpoint: c }) => ({
      breakpoint: c,
      query: u.replace("@media screen and ", ""),
    })),
    s = i.map((u) => u.breakpoint === r.fallback),
    l = I2(
      i.map((u) => u.query),
      { fallback: s, ssr: r.ssr }
    ).findIndex((u) => u == !0);
  return (n = (t = i[l]) == null ? void 0 : t.breakpoint) != null
    ? n
    : r.fallback;
}
function AD(e, t) {
  var n;
  const r = _t(t) ? t : { fallback: t ?? "base" },
    o = TD(r),
    i = Mo();
  if (!o) return;
  const s = Array.from(((n = i.__breakpoints) == null ? void 0 : n.keys) || []),
    a = Array.isArray(e)
      ? Object.fromEntries(Object.entries(bD(e, s)).map(([l, u]) => [l, u]))
      : e;
  return PD(a, o, s);
}
function RD(e) {
  const { key: t } = e;
  return t.length === 1 || (t.length > 1 && /[^a-zA-Z0-9]/.test(t));
}
function $D(e = {}) {
  const { timeout: t = 300, preventDefault: n = () => !0 } = e,
    [r, o] = x.useState([]),
    i = x.useRef(),
    s = () => {
      i.current && (clearTimeout(i.current), (i.current = null));
    },
    a = () => {
      s(),
        (i.current = setTimeout(() => {
          o([]), (i.current = null);
        }, t));
    };
  x.useEffect(() => s, []);
  function l(u) {
    return (c) => {
      if (c.key === "Backspace") {
        const d = [...r];
        d.pop(), o(d);
        return;
      }
      if (RD(c)) {
        const d = r.concat(c.key);
        n(c) && (c.preventDefault(), c.stopPropagation()),
          o(d),
          u(d.join("")),
          a();
      }
    };
  }
  return l;
}
function MD(e, t, n, r) {
  if (t == null) return r;
  if (!r) return e.find((s) => n(s).toLowerCase().startsWith(t.toLowerCase()));
  const o = e.filter((i) => n(i).toLowerCase().startsWith(t.toLowerCase()));
  if (o.length > 0) {
    let i;
    return o.includes(r)
      ? ((i = o.indexOf(r) + 1), i === o.length && (i = 0), o[i])
      : ((i = e.indexOf(o[0])), e[i]);
  }
  return r;
}
function OD() {
  const e = x.useRef(new Map()),
    t = e.current,
    n = x.useCallback((o, i, s, a) => {
      e.current.set(s, { type: i, el: o, options: a }),
        o.addEventListener(i, s, a);
    }, []),
    r = x.useCallback((o, i, s, a) => {
      o.removeEventListener(i, s, a), e.current.delete(s);
    }, []);
  return (
    x.useEffect(
      () => () => {
        t.forEach((o, i) => {
          r(o.el, o.type, i, o.options);
        });
      },
      [r, t]
    ),
    { add: n, remove: r }
  );
}
function mf(e) {
  const t = e.target,
    { tagName: n, isContentEditable: r } = t;
  return n !== "INPUT" && n !== "TEXTAREA" && r !== !0;
}
function zD(e = {}) {
  const {
      ref: t,
      isDisabled: n,
      isFocusable: r,
      clickOnEnter: o = !0,
      clickOnSpace: i = !0,
      onMouseDown: s,
      onMouseUp: a,
      onClick: l,
      onKeyDown: u,
      onKeyUp: c,
      tabIndex: d,
      onMouseOver: f,
      onMouseLeave: p,
      ...m
    } = e,
    [y, w] = x.useState(!0),
    [g, h] = x.useState(!1),
    v = OD(),
    S = (z) => {
      z && z.tagName !== "BUTTON" && w(!1);
    },
    P = y ? d : d || 0,
    T = n && !r,
    _ = x.useCallback(
      (z) => {
        if (n) {
          z.stopPropagation(), z.preventDefault();
          return;
        }
        z.currentTarget.focus(), l == null || l(z);
      },
      [n, l]
    ),
    A = x.useCallback(
      (z) => {
        g &&
          mf(z) &&
          (z.preventDefault(),
          z.stopPropagation(),
          h(!1),
          v.remove(document, "keyup", A, !1));
      },
      [g, v]
    ),
    O = x.useCallback(
      (z) => {
        if (
          (u == null || u(z),
          n || z.defaultPrevented || z.metaKey || !mf(z.nativeEvent) || y)
        )
          return;
        const L = o && z.key === "Enter";
        i && z.key === " " && (z.preventDefault(), h(!0)),
          L && (z.preventDefault(), z.currentTarget.click()),
          v.add(document, "keyup", A, !1);
      },
      [n, y, u, o, i, v, A]
    ),
    M = x.useCallback(
      (z) => {
        if (
          (c == null || c(z),
          n || z.defaultPrevented || z.metaKey || !mf(z.nativeEvent) || y)
        )
          return;
        i &&
          z.key === " " &&
          (z.preventDefault(), h(!1), z.currentTarget.click());
      },
      [i, y, n, c]
    ),
    F = x.useCallback(
      (z) => {
        z.button === 0 && (h(!1), v.remove(document, "mouseup", F, !1));
      },
      [v]
    ),
    X = x.useCallback(
      (z) => {
        if (z.button !== 0) return;
        if (n) {
          z.stopPropagation(), z.preventDefault();
          return;
        }
        y || h(!0),
          z.currentTarget.focus({ preventScroll: !0 }),
          v.add(document, "mouseup", F, !1),
          s == null || s(z);
      },
      [n, y, s, v, F]
    ),
    Y = x.useCallback(
      (z) => {
        z.button === 0 && (y || h(!1), a == null || a(z));
      },
      [a, y]
    ),
    Q = x.useCallback(
      (z) => {
        if (n) {
          z.preventDefault();
          return;
        }
        f == null || f(z);
      },
      [n, f]
    ),
    J = x.useCallback(
      (z) => {
        g && (z.preventDefault(), h(!1)), p == null || p(z);
      },
      [g, p]
    ),
    Z = cn(t, S);
  return y
    ? {
        ...m,
        ref: Z,
        type: "button",
        "aria-disabled": T ? void 0 : n,
        disabled: T,
        onClick: _,
        onMouseDown: s,
        onMouseUp: a,
        onKeyUp: c,
        onKeyDown: u,
        onMouseOver: f,
        onMouseLeave: p,
      }
    : {
        ...m,
        ref: Z,
        role: "button",
        "data-active": le(g),
        "aria-disabled": n ? "true" : void 0,
        tabIndex: T ? void 0 : P,
        onClick: _,
        onMouseDown: X,
        onMouseUp: Y,
        onKeyUp: M,
        onKeyDown: O,
        onMouseOver: Q,
        onMouseLeave: J,
      };
}
function LD(e) {
  const t = e.current;
  if (!t) return !1;
  const n = sD(t);
  return !n || t.contains(n) ? !1 : !!dD(n);
}
function ID(e, t) {
  const { shouldFocus: n, visible: r, focusRef: o } = t,
    i = n && !r;
  Oi(() => {
    if (!i || LD(e)) return;
    const s = (o == null ? void 0 : o.current) || e.current;
    let a;
    if (s)
      return (
        (a = requestAnimationFrame(() => {
          s.focus({ preventScroll: !0 });
        })),
        () => {
          cancelAnimationFrame(a);
        }
      );
  }, [i, e, o]);
}
var Vo = (e, t) => ({ var: e, varRef: t ? `var(${e}, ${t})` : `var(${e})` }),
  Ot = {
    arrowShadowColor: Vo("--popper-arrow-shadow-color"),
    arrowSize: Vo("--popper-arrow-size", "8px"),
    arrowSizeHalf: Vo("--popper-arrow-size-half"),
    arrowBg: Vo("--popper-arrow-bg"),
    transformOrigin: Vo("--popper-transform-origin"),
    arrowOffset: Vo("--popper-arrow-offset"),
  };
function DD(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var jD = {
    top: "bottom center",
    "top-start": "bottom left",
    "top-end": "bottom right",
    bottom: "top center",
    "bottom-start": "top left",
    "bottom-end": "top right",
    left: "right center",
    "left-start": "right top",
    "left-end": "right bottom",
    right: "left center",
    "right-start": "left top",
    "right-end": "left bottom",
  },
  FD = (e) => jD[e],
  n1 = { scroll: !0, resize: !0 };
function BD(e) {
  let t;
  return (
    typeof e == "object"
      ? (t = { enabled: !0, options: { ...n1, ...e } })
      : (t = { enabled: e, options: n1 }),
    t
  );
}
var ND = {
    name: "matchWidth",
    enabled: !0,
    phase: "beforeWrite",
    requires: ["computeStyles"],
    fn: ({ state: e }) => {
      e.styles.popper.width = `${e.rects.reference.width}px`;
    },
    effect:
      ({ state: e }) =>
      () => {
        const t = e.elements.reference;
        e.elements.popper.style.width = `${t.offsetWidth}px`;
      },
  },
  VD = {
    name: "transformOrigin",
    enabled: !0,
    phase: "write",
    fn: ({ state: e }) => {
      r1(e);
    },
    effect:
      ({ state: e }) =>
      () => {
        r1(e);
      },
  },
  r1 = (e) => {
    e.elements.popper.style.setProperty(
      Ot.transformOrigin.var,
      FD(e.placement)
    );
  },
  WD = {
    name: "positionArrow",
    enabled: !0,
    phase: "afterWrite",
    fn: ({ state: e }) => {
      HD(e);
    },
  },
  HD = (e) => {
    var t;
    if (!e.placement) return;
    const n = UD(e.placement);
    if ((t = e.elements) != null && t.arrow && n) {
      Object.assign(e.elements.arrow.style, {
        [n.property]: n.value,
        width: Ot.arrowSize.varRef,
        height: Ot.arrowSize.varRef,
        zIndex: -1,
      });
      const r = {
        [Ot.arrowSizeHalf.var]: `calc(${Ot.arrowSize.varRef} / 2 - 1px)`,
        [Ot.arrowOffset.var]: `calc(${Ot.arrowSizeHalf.varRef} * -1)`,
      };
      for (const o in r) e.elements.arrow.style.setProperty(o, r[o]);
    }
  },
  UD = (e) => {
    if (e.startsWith("top"))
      return { property: "bottom", value: Ot.arrowOffset.varRef };
    if (e.startsWith("bottom"))
      return { property: "top", value: Ot.arrowOffset.varRef };
    if (e.startsWith("left"))
      return { property: "right", value: Ot.arrowOffset.varRef };
    if (e.startsWith("right"))
      return { property: "left", value: Ot.arrowOffset.varRef };
  },
  GD = {
    name: "innerArrow",
    enabled: !0,
    phase: "main",
    requires: ["arrow"],
    fn: ({ state: e }) => {
      o1(e);
    },
    effect:
      ({ state: e }) =>
      () => {
        o1(e);
      },
  },
  o1 = (e) => {
    if (!e.elements.arrow) return;
    const t = e.elements.arrow.querySelector("[data-popper-arrow-inner]");
    if (!t) return;
    const n = DD(e.placement);
    n && t.style.setProperty("--popper-arrow-default-shadow", n),
      Object.assign(t.style, {
        transform: "rotate(45deg)",
        background: Ot.arrowBg.varRef,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: "inherit",
        boxShadow:
          "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))",
      });
  },
  KD = {
    "start-start": { ltr: "left-start", rtl: "right-start" },
    "start-end": { ltr: "left-end", rtl: "right-end" },
    "end-start": { ltr: "right-start", rtl: "left-start" },
    "end-end": { ltr: "right-end", rtl: "left-end" },
    start: { ltr: "left", rtl: "right" },
    end: { ltr: "right", rtl: "left" },
  },
  qD = {
    "auto-start": "auto-end",
    "auto-end": "auto-start",
    "top-start": "top-end",
    "top-end": "top-start",
    "bottom-start": "bottom-end",
    "bottom-end": "bottom-start",
  };
function YD(e, t = "ltr") {
  var n, r;
  const o = ((n = KD[e]) == null ? void 0 : n[t]) || e;
  return t === "ltr" ? o : (r = qD[e]) != null ? r : o;
}
var Pt = "top",
  dn = "bottom",
  fn = "right",
  Tt = "left",
  Km = "auto",
  Ia = [Pt, dn, fn, Tt],
  Ii = "start",
  ba = "end",
  XD = "clippingParents",
  j2 = "viewport",
  cs = "popper",
  QD = "reference",
  i1 = Ia.reduce(function (e, t) {
    return e.concat([t + "-" + Ii, t + "-" + ba]);
  }, []),
  F2 = [].concat(Ia, [Km]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Ii, t + "-" + ba]);
  }, []),
  ZD = "beforeRead",
  JD = "read",
  e9 = "afterRead",
  t9 = "beforeMain",
  n9 = "main",
  r9 = "afterMain",
  o9 = "beforeWrite",
  i9 = "write",
  s9 = "afterWrite",
  a9 = [ZD, JD, e9, t9, n9, r9, o9, i9, s9];
function jn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Nt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Ao(e) {
  var t = Nt(e).Element;
  return e instanceof t || e instanceof Element;
}
function sn(e) {
  var t = Nt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function qm(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Nt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function l9(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      o = t.attributes[n] || {},
      i = t.elements[n];
    !sn(i) ||
      !jn(i) ||
      (Object.assign(i.style, r),
      Object.keys(o).forEach(function (s) {
        var a = o[s];
        a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
      }));
  });
}
function u9(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var o = t.elements[r],
          i = t.attributes[r] || {},
          s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          a = s.reduce(function (l, u) {
            return (l[u] = ""), l;
          }, {});
        !sn(o) ||
          !jn(o) ||
          (Object.assign(o.style, a),
          Object.keys(i).forEach(function (l) {
            o.removeAttribute(l);
          }));
      });
    }
  );
}
const c9 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: l9,
  effect: u9,
  requires: ["computeStyles"],
};
function Dn(e) {
  return e.split("-")[0];
}
var wo = Math.max,
  qu = Math.min,
  Di = Math.round;
function Gp() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function B2() {
  return !/^((?!chrome|android).)*safari/i.test(Gp());
}
function ji(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    sn(e) &&
    ((o = (e.offsetWidth > 0 && Di(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && Di(r.height) / e.offsetHeight) || 1));
  var s = Ao(e) ? Nt(e) : window,
    a = s.visualViewport,
    l = !B2() && n,
    u = (r.left + (l && a ? a.offsetLeft : 0)) / o,
    c = (r.top + (l && a ? a.offsetTop : 0)) / i,
    d = r.width / o,
    f = r.height / i;
  return {
    width: d,
    height: f,
    top: c,
    right: u + d,
    bottom: c + f,
    left: u,
    x: u,
    y: c,
  };
}
function Ym(e) {
  var t = ji(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function N2(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && qm(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function dr(e) {
  return Nt(e).getComputedStyle(e);
}
function d9(e) {
  return ["table", "td", "th"].indexOf(jn(e)) >= 0;
}
function Zr(e) {
  return ((Ao(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function Uc(e) {
  return jn(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (qm(e) ? e.host : null) || Zr(e);
}
function s1(e) {
  return !sn(e) || dr(e).position === "fixed" ? null : e.offsetParent;
}
function f9(e) {
  var t = /firefox/i.test(Gp()),
    n = /Trident/i.test(Gp());
  if (n && sn(e)) {
    var r = dr(e);
    if (r.position === "fixed") return null;
  }
  var o = Uc(e);
  for (qm(o) && (o = o.host); sn(o) && ["html", "body"].indexOf(jn(o)) < 0; ) {
    var i = dr(o);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function Da(e) {
  for (var t = Nt(e), n = s1(e); n && d9(n) && dr(n).position === "static"; )
    n = s1(n);
  return n &&
    (jn(n) === "html" || (jn(n) === "body" && dr(n).position === "static"))
    ? t
    : n || f9(e) || t;
}
function Xm(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ws(e, t, n) {
  return wo(e, qu(t, n));
}
function p9(e, t, n) {
  var r = Ws(e, t, n);
  return r > n ? n : r;
}
function V2() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function W2(e) {
  return Object.assign({}, V2(), e);
}
function H2(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var h9 = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    W2(typeof t != "number" ? t : H2(t, Ia))
  );
};
function m9(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    i = n.elements.arrow,
    s = n.modifiersData.popperOffsets,
    a = Dn(n.placement),
    l = Xm(a),
    u = [Tt, fn].indexOf(a) >= 0,
    c = u ? "height" : "width";
  if (!(!i || !s)) {
    var d = h9(o.padding, n),
      f = Ym(i),
      p = l === "y" ? Pt : Tt,
      m = l === "y" ? dn : fn,
      y =
        n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c],
      w = s[l] - n.rects.reference[l],
      g = Da(i),
      h = g ? (l === "y" ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
      v = y / 2 - w / 2,
      S = d[p],
      P = h - f[c] - d[m],
      T = h / 2 - f[c] / 2 + v,
      _ = Ws(S, T, P),
      A = l;
    n.modifiersData[r] = ((t = {}), (t[A] = _), (t.centerOffset = _ - T), t);
  }
}
function g9(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (N2(t.elements.popper, o) && (t.elements.arrow = o)));
}
const v9 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: m9,
  effect: g9,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Fi(e) {
  return e.split("-")[1];
}
var y9 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function b9(e, t) {
  var n = e.x,
    r = e.y,
    o = t.devicePixelRatio || 1;
  return { x: Di(n * o) / o || 0, y: Di(r * o) / o || 0 };
}
function a1(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    i = e.variation,
    s = e.offsets,
    a = e.position,
    l = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    d = e.isFixed,
    f = s.x,
    p = f === void 0 ? 0 : f,
    m = s.y,
    y = m === void 0 ? 0 : m,
    w = typeof c == "function" ? c({ x: p, y }) : { x: p, y };
  (p = w.x), (y = w.y);
  var g = s.hasOwnProperty("x"),
    h = s.hasOwnProperty("y"),
    v = Tt,
    S = Pt,
    P = window;
  if (u) {
    var T = Da(n),
      _ = "clientHeight",
      A = "clientWidth";
    if (
      (T === Nt(n) &&
        ((T = Zr(n)),
        dr(T).position !== "static" &&
          a === "absolute" &&
          ((_ = "scrollHeight"), (A = "scrollWidth"))),
      (T = T),
      o === Pt || ((o === Tt || o === fn) && i === ba))
    ) {
      S = dn;
      var O = d && T === P && P.visualViewport ? P.visualViewport.height : T[_];
      (y -= O - r.height), (y *= l ? 1 : -1);
    }
    if (o === Tt || ((o === Pt || o === dn) && i === ba)) {
      v = fn;
      var M = d && T === P && P.visualViewport ? P.visualViewport.width : T[A];
      (p -= M - r.width), (p *= l ? 1 : -1);
    }
  }
  var F = Object.assign({ position: a }, u && y9),
    X = c === !0 ? b9({ x: p, y }, Nt(n)) : { x: p, y };
  if (((p = X.x), (y = X.y), l)) {
    var Y;
    return Object.assign(
      {},
      F,
      ((Y = {}),
      (Y[S] = h ? "0" : ""),
      (Y[v] = g ? "0" : ""),
      (Y.transform =
        (P.devicePixelRatio || 1) <= 1
          ? "translate(" + p + "px, " + y + "px)"
          : "translate3d(" + p + "px, " + y + "px, 0)"),
      Y)
    );
  }
  return Object.assign(
    {},
    F,
    ((t = {}),
    (t[S] = h ? y + "px" : ""),
    (t[v] = g ? p + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function x9(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    i = n.adaptive,
    s = i === void 0 ? !0 : i,
    a = n.roundOffsets,
    l = a === void 0 ? !0 : a,
    u = {
      placement: Dn(t.placement),
      variation: Fi(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      a1(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: s,
          roundOffsets: l,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        a1(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const S9 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: x9,
  data: {},
};
var Pl = { passive: !0 };
function w9(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    i = o === void 0 ? !0 : o,
    s = r.resize,
    a = s === void 0 ? !0 : s,
    l = Nt(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      u.forEach(function (c) {
        c.addEventListener("scroll", n.update, Pl);
      }),
    a && l.addEventListener("resize", n.update, Pl),
    function () {
      i &&
        u.forEach(function (c) {
          c.removeEventListener("scroll", n.update, Pl);
        }),
        a && l.removeEventListener("resize", n.update, Pl);
    }
  );
}
const k9 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: w9,
  data: {},
};
var C9 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function nu(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return C9[t];
  });
}
var E9 = { start: "end", end: "start" };
function l1(e) {
  return e.replace(/start|end/g, function (t) {
    return E9[t];
  });
}
function Qm(e) {
  var t = Nt(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Zm(e) {
  return ji(Zr(e)).left + Qm(e).scrollLeft;
}
function _9(e, t) {
  var n = Nt(e),
    r = Zr(e),
    o = n.visualViewport,
    i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (o) {
    (i = o.width), (s = o.height);
    var u = B2();
    (u || (!u && t === "fixed")) && ((a = o.offsetLeft), (l = o.offsetTop));
  }
  return { width: i, height: s, x: a + Zm(e), y: l };
}
function P9(e) {
  var t,
    n = Zr(e),
    r = Qm(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = wo(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    s = wo(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    a = -r.scrollLeft + Zm(e),
    l = -r.scrollTop;
  return (
    dr(o || n).direction === "rtl" &&
      (a += wo(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: s, x: a, y: l }
  );
}
function Jm(e) {
  var t = dr(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function U2(e) {
  return ["html", "body", "#document"].indexOf(jn(e)) >= 0
    ? e.ownerDocument.body
    : sn(e) && Jm(e)
    ? e
    : U2(Uc(e));
}
function Hs(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = U2(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = Nt(r),
    s = o ? [i].concat(i.visualViewport || [], Jm(r) ? r : []) : r,
    a = t.concat(s);
  return o ? a : a.concat(Hs(Uc(s)));
}
function Kp(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function T9(e, t) {
  var n = ji(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function u1(e, t, n) {
  return t === j2 ? Kp(_9(e, n)) : Ao(t) ? T9(t, n) : Kp(P9(Zr(e)));
}
function A9(e) {
  var t = Hs(Uc(e)),
    n = ["absolute", "fixed"].indexOf(dr(e).position) >= 0,
    r = n && sn(e) ? Da(e) : e;
  return Ao(r)
    ? t.filter(function (o) {
        return Ao(o) && N2(o, r) && jn(o) !== "body";
      })
    : [];
}
function R9(e, t, n, r) {
  var o = t === "clippingParents" ? A9(e) : [].concat(t),
    i = [].concat(o, [n]),
    s = i[0],
    a = i.reduce(function (l, u) {
      var c = u1(e, u, r);
      return (
        (l.top = wo(c.top, l.top)),
        (l.right = qu(c.right, l.right)),
        (l.bottom = qu(c.bottom, l.bottom)),
        (l.left = wo(c.left, l.left)),
        l
      );
    }, u1(e, s, r));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function G2(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? Dn(r) : null,
    i = r ? Fi(r) : null,
    s = t.x + t.width / 2 - n.width / 2,
    a = t.y + t.height / 2 - n.height / 2,
    l;
  switch (o) {
    case Pt:
      l = { x: s, y: t.y - n.height };
      break;
    case dn:
      l = { x: s, y: t.y + t.height };
      break;
    case fn:
      l = { x: t.x + t.width, y: a };
      break;
    case Tt:
      l = { x: t.x - n.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? Xm(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case Ii:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case ba:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function xa(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    i = n.strategy,
    s = i === void 0 ? e.strategy : i,
    a = n.boundary,
    l = a === void 0 ? XD : a,
    u = n.rootBoundary,
    c = u === void 0 ? j2 : u,
    d = n.elementContext,
    f = d === void 0 ? cs : d,
    p = n.altBoundary,
    m = p === void 0 ? !1 : p,
    y = n.padding,
    w = y === void 0 ? 0 : y,
    g = W2(typeof w != "number" ? w : H2(w, Ia)),
    h = f === cs ? QD : cs,
    v = e.rects.popper,
    S = e.elements[m ? h : f],
    P = R9(Ao(S) ? S : S.contextElement || Zr(e.elements.popper), l, c, s),
    T = ji(e.elements.reference),
    _ = G2({ reference: T, element: v, strategy: "absolute", placement: o }),
    A = Kp(Object.assign({}, v, _)),
    O = f === cs ? A : T,
    M = {
      top: P.top - O.top + g.top,
      bottom: O.bottom - P.bottom + g.bottom,
      left: P.left - O.left + g.left,
      right: O.right - P.right + g.right,
    },
    F = e.modifiersData.offset;
  if (f === cs && F) {
    var X = F[o];
    Object.keys(M).forEach(function (Y) {
      var Q = [fn, dn].indexOf(Y) >= 0 ? 1 : -1,
        J = [Pt, dn].indexOf(Y) >= 0 ? "y" : "x";
      M[Y] += X[J] * Q;
    });
  }
  return M;
}
function $9(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    s = n.padding,
    a = n.flipVariations,
    l = n.allowedAutoPlacements,
    u = l === void 0 ? F2 : l,
    c = Fi(r),
    d = c
      ? a
        ? i1
        : i1.filter(function (m) {
            return Fi(m) === c;
          })
      : Ia,
    f = d.filter(function (m) {
      return u.indexOf(m) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (m, y) {
    return (
      (m[y] = xa(e, { placement: y, boundary: o, rootBoundary: i, padding: s })[
        Dn(y)
      ]),
      m
    );
  }, {});
  return Object.keys(p).sort(function (m, y) {
    return p[m] - p[y];
  });
}
function M9(e) {
  if (Dn(e) === Km) return [];
  var t = nu(e);
  return [l1(e), t, l1(t)];
}
function O9(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        s = n.altAxis,
        a = s === void 0 ? !0 : s,
        l = n.fallbackPlacements,
        u = n.padding,
        c = n.boundary,
        d = n.rootBoundary,
        f = n.altBoundary,
        p = n.flipVariations,
        m = p === void 0 ? !0 : p,
        y = n.allowedAutoPlacements,
        w = t.options.placement,
        g = Dn(w),
        h = g === w,
        v = l || (h || !m ? [nu(w)] : M9(w)),
        S = [w].concat(v).reduce(function (G, ke) {
          return G.concat(
            Dn(ke) === Km
              ? $9(t, {
                  placement: ke,
                  boundary: c,
                  rootBoundary: d,
                  padding: u,
                  flipVariations: m,
                  allowedAutoPlacements: y,
                })
              : ke
          );
        }, []),
        P = t.rects.reference,
        T = t.rects.popper,
        _ = new Map(),
        A = !0,
        O = S[0],
        M = 0;
      M < S.length;
      M++
    ) {
      var F = S[M],
        X = Dn(F),
        Y = Fi(F) === Ii,
        Q = [Pt, dn].indexOf(X) >= 0,
        J = Q ? "width" : "height",
        Z = xa(t, {
          placement: F,
          boundary: c,
          rootBoundary: d,
          altBoundary: f,
          padding: u,
        }),
        z = Q ? (Y ? fn : Tt) : Y ? dn : Pt;
      P[J] > T[J] && (z = nu(z));
      var L = nu(z),
        B = [];
      if (
        (i && B.push(Z[X] <= 0),
        a && B.push(Z[z] <= 0, Z[L] <= 0),
        B.every(function (G) {
          return G;
        }))
      ) {
        (O = F), (A = !1);
        break;
      }
      _.set(F, B);
    }
    if (A)
      for (
        var H = m ? 3 : 1,
          V = function (ke) {
            var he = S.find(function (He) {
              var De = _.get(He);
              if (De)
                return De.slice(0, ke).every(function (Gt) {
                  return Gt;
                });
            });
            if (he) return (O = he), "break";
          },
          te = H;
        te > 0;
        te--
      ) {
        var N = V(te);
        if (N === "break") break;
      }
    t.placement !== O &&
      ((t.modifiersData[r]._skip = !0), (t.placement = O), (t.reset = !0));
  }
}
const z9 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: O9,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function c1(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function d1(e) {
  return [Pt, fn, dn, Tt].some(function (t) {
    return e[t] >= 0;
  });
}
function L9(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    s = xa(t, { elementContext: "reference" }),
    a = xa(t, { altBoundary: !0 }),
    l = c1(s, r),
    u = c1(a, o, i),
    c = d1(l),
    d = d1(u);
  (t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": d,
    }));
}
const I9 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: L9,
};
function D9(e, t, n) {
  var r = Dn(e),
    o = [Tt, Pt].indexOf(r) >= 0 ? -1 : 1,
    i = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    s = i[0],
    a = i[1];
  return (
    (s = s || 0),
    (a = (a || 0) * o),
    [Tt, fn].indexOf(r) >= 0 ? { x: a, y: s } : { x: s, y: a }
  );
}
function j9(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    i = o === void 0 ? [0, 0] : o,
    s = F2.reduce(function (c, d) {
      return (c[d] = D9(d, t.rects, i)), c;
    }, {}),
    a = s[t.placement],
    l = a.x,
    u = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[r] = s);
}
const F9 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: j9,
};
function B9(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = G2({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const N9 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: B9,
  data: {},
};
function V9(e) {
  return e === "x" ? "y" : "x";
}
function W9(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    i = o === void 0 ? !0 : o,
    s = n.altAxis,
    a = s === void 0 ? !1 : s,
    l = n.boundary,
    u = n.rootBoundary,
    c = n.altBoundary,
    d = n.padding,
    f = n.tether,
    p = f === void 0 ? !0 : f,
    m = n.tetherOffset,
    y = m === void 0 ? 0 : m,
    w = xa(t, { boundary: l, rootBoundary: u, padding: d, altBoundary: c }),
    g = Dn(t.placement),
    h = Fi(t.placement),
    v = !h,
    S = Xm(g),
    P = V9(S),
    T = t.modifiersData.popperOffsets,
    _ = t.rects.reference,
    A = t.rects.popper,
    O =
      typeof y == "function"
        ? y(Object.assign({}, t.rects, { placement: t.placement }))
        : y,
    M =
      typeof O == "number"
        ? { mainAxis: O, altAxis: O }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, O),
    F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    X = { x: 0, y: 0 };
  if (T) {
    if (i) {
      var Y,
        Q = S === "y" ? Pt : Tt,
        J = S === "y" ? dn : fn,
        Z = S === "y" ? "height" : "width",
        z = T[S],
        L = z + w[Q],
        B = z - w[J],
        H = p ? -A[Z] / 2 : 0,
        V = h === Ii ? _[Z] : A[Z],
        te = h === Ii ? -A[Z] : -_[Z],
        N = t.elements.arrow,
        G = p && N ? Ym(N) : { width: 0, height: 0 },
        ke = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : V2(),
        he = ke[Q],
        He = ke[J],
        De = Ws(0, _[Z], G[Z]),
        Gt = v ? _[Z] / 2 - H - De - he - M.mainAxis : V - De - he - M.mainAxis,
        Kt = v
          ? -_[Z] / 2 + H + De + He + M.mainAxis
          : te + De + He + M.mainAxis,
        ot = t.elements.arrow && Da(t.elements.arrow),
        Bn = ot ? (S === "y" ? ot.clientTop || 0 : ot.clientLeft || 0) : 0,
        Nn = (Y = F == null ? void 0 : F[S]) != null ? Y : 0,
        Va = z + Gt - Nn - Bn,
        ne = z + Kt - Nn,
        Ze = Ws(p ? qu(L, Va) : L, z, p ? wo(B, ne) : B);
      (T[S] = Ze), (X[S] = Ze - z);
    }
    if (a) {
      var dt,
        pr = S === "x" ? Pt : Tt,
        Zc = S === "x" ? dn : fn,
        qt = T[P],
        hr = P === "y" ? "height" : "width",
        Jr = qt + w[pr],
        Yt = qt - w[Zc],
        Io = [Pt, Tt].indexOf(g) !== -1,
        Gi = (dt = F == null ? void 0 : F[P]) != null ? dt : 0,
        Wa = Io ? Jr : qt - _[hr] - A[hr] - Gi + M.altAxis,
        Ha = Io ? qt + _[hr] + A[hr] - Gi - M.altAxis : Yt,
        eo = p && Io ? p9(Wa, qt, Ha) : Ws(p ? Wa : Jr, qt, p ? Ha : Yt);
      (T[P] = eo), (X[P] = eo - qt);
    }
    t.modifiersData[r] = X;
  }
}
const H9 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: W9,
  requiresIfExists: ["offset"],
};
function U9(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function G9(e) {
  return e === Nt(e) || !sn(e) ? Qm(e) : U9(e);
}
function K9(e) {
  var t = e.getBoundingClientRect(),
    n = Di(t.width) / e.offsetWidth || 1,
    r = Di(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function q9(e, t, n) {
  n === void 0 && (n = !1);
  var r = sn(t),
    o = sn(t) && K9(t),
    i = Zr(t),
    s = ji(e, o, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((jn(t) !== "body" || Jm(i)) && (a = G9(t)),
      sn(t)
        ? ((l = ji(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : i && (l.x = Zm(i))),
    {
      x: s.left + a.scrollLeft - l.x,
      y: s.top + a.scrollTop - l.y,
      width: s.width,
      height: s.height,
    }
  );
}
function Y9(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function (a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && o(l);
      }
    }),
      r.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || o(i);
    }),
    r
  );
}
function X9(e) {
  var t = Y9(e);
  return a9.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      })
    );
  }, []);
}
function Q9(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function Z9(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var f1 = { placement: "bottom", modifiers: [], strategy: "absolute" };
function p1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function J9(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    i = o === void 0 ? f1 : o;
  return function (a, l, u) {
    u === void 0 && (u = i);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, f1, i),
        modifiersData: {},
        elements: { reference: a, popper: l },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      p = {
        state: c,
        setOptions: function (g) {
          var h = typeof g == "function" ? g(c.options) : g;
          y(),
            (c.options = Object.assign({}, i, c.options, h)),
            (c.scrollParents = {
              reference: Ao(a)
                ? Hs(a)
                : a.contextElement
                ? Hs(a.contextElement)
                : [],
              popper: Hs(l),
            });
          var v = X9(Z9([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = v.filter(function (S) {
              return S.enabled;
            })),
            m(),
            p.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var g = c.elements,
              h = g.reference,
              v = g.popper;
            if (p1(h, v)) {
              (c.rects = {
                reference: q9(h, Da(v), c.options.strategy === "fixed"),
                popper: Ym(v),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (M) {
                  return (c.modifiersData[M.name] = Object.assign({}, M.data));
                });
              for (var S = 0; S < c.orderedModifiers.length; S++) {
                if (c.reset === !0) {
                  (c.reset = !1), (S = -1);
                  continue;
                }
                var P = c.orderedModifiers[S],
                  T = P.fn,
                  _ = P.options,
                  A = _ === void 0 ? {} : _,
                  O = P.name;
                typeof T == "function" &&
                  (c = T({ state: c, options: A, name: O, instance: p }) || c);
              }
            }
          }
        },
        update: Q9(function () {
          return new Promise(function (w) {
            p.forceUpdate(), w(c);
          });
        }),
        destroy: function () {
          y(), (f = !0);
        },
      };
    if (!p1(a, l)) return p;
    p.setOptions(u).then(function (w) {
      !f && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function m() {
      c.orderedModifiers.forEach(function (w) {
        var g = w.name,
          h = w.options,
          v = h === void 0 ? {} : h,
          S = w.effect;
        if (typeof S == "function") {
          var P = S({ state: c, name: g, instance: p, options: v }),
            T = function () {};
          d.push(P || T);
        }
      });
    }
    function y() {
      d.forEach(function (w) {
        return w();
      }),
        (d = []);
    }
    return p;
  };
}
var ej = [k9, N9, S9, c9, F9, z9, H9, v9, I9],
  tj = J9({ defaultModifiers: ej });
function nj(e = {}) {
  const {
      enabled: t = !0,
      modifiers: n,
      placement: r = "bottom",
      strategy: o = "absolute",
      arrowPadding: i = 8,
      eventListeners: s = !0,
      offset: a,
      gutter: l = 8,
      flip: u = !0,
      boundary: c = "clippingParents",
      preventOverflow: d = !0,
      matchWidth: f,
      direction: p = "ltr",
    } = e,
    m = x.useRef(null),
    y = x.useRef(null),
    w = x.useRef(null),
    g = YD(r, p),
    h = x.useRef(() => {}),
    v = x.useCallback(() => {
      var M;
      !t ||
        !m.current ||
        !y.current ||
        ((M = h.current) == null || M.call(h),
        (w.current = tj(m.current, y.current, {
          placement: g,
          modifiers: [
            GD,
            WD,
            VD,
            { ...ND, enabled: !!f },
            { name: "eventListeners", ...BD(s) },
            { name: "arrow", options: { padding: i } },
            { name: "offset", options: { offset: a ?? [0, l] } },
            { name: "flip", enabled: !!u, options: { padding: 8 } },
            { name: "preventOverflow", enabled: !!d, options: { boundary: c } },
            ...(n ?? []),
          ],
          strategy: o,
        })),
        w.current.forceUpdate(),
        (h.current = w.current.destroy));
    }, [g, t, n, f, s, i, a, l, u, d, c, o]);
  x.useEffect(
    () => () => {
      var M;
      !m.current &&
        !y.current &&
        ((M = w.current) == null || M.destroy(), (w.current = null));
    },
    []
  );
  const S = x.useCallback(
      (M) => {
        (m.current = M), v();
      },
      [v]
    ),
    P = x.useCallback((M = {}, F = null) => ({ ...M, ref: cn(S, F) }), [S]),
    T = x.useCallback(
      (M) => {
        (y.current = M), v();
      },
      [v]
    ),
    _ = x.useCallback(
      (M = {}, F = null) => ({
        ...M,
        ref: cn(T, F),
        style: {
          ...M.style,
          position: o,
          minWidth: f ? void 0 : "max-content",
          inset: "0 auto auto 0",
        },
      }),
      [o, T, f]
    ),
    A = x.useCallback((M = {}, F = null) => {
      const { size: X, shadowColor: Y, bg: Q, style: J, ...Z } = M;
      return { ...Z, ref: F, "data-popper-arrow": "", style: rj(M) };
    }, []),
    O = x.useCallback(
      (M = {}, F = null) => ({ ...M, ref: F, "data-popper-arrow-inner": "" }),
      []
    );
  return {
    update() {
      var M;
      (M = w.current) == null || M.update();
    },
    forceUpdate() {
      var M;
      (M = w.current) == null || M.forceUpdate();
    },
    transformOrigin: Ot.transformOrigin.varRef,
    referenceRef: S,
    popperRef: T,
    getPopperProps: _,
    getArrowProps: A,
    getArrowInnerProps: O,
    getReferenceProps: P,
  };
}
function rj(e) {
  const { size: t, shadowColor: n, bg: r, style: o } = e,
    i = { ...o, position: "absolute" };
  return (
    t && (i["--popper-arrow-size"] = t),
    n && (i["--popper-arrow-shadow-color"] = n),
    r && (i["--popper-arrow-bg"] = r),
    i
  );
}
function oj(e = {}) {
  const { onClose: t, onOpen: n, isOpen: r, id: o } = e,
    i = Dr(n),
    s = Dr(t),
    [a, l] = x.useState(e.defaultIsOpen || !1),
    u = r !== void 0 ? r : a,
    c = r !== void 0,
    d = x.useId(),
    f = o ?? `disclosure-${d}`,
    p = x.useCallback(() => {
      c || l(!1), s == null || s();
    }, [c, s]),
    m = x.useCallback(() => {
      c || l(!0), i == null || i();
    }, [c, i]),
    y = x.useCallback(() => {
      u ? p() : m();
    }, [u, m, p]);
  function w(h = {}) {
    return {
      ...h,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(v) {
        var S;
        (S = h.onClick) == null || S.call(h, v), y();
      },
    };
  }
  function g(h = {}) {
    return { ...h, hidden: !u, id: f };
  }
  return {
    isOpen: u,
    onOpen: m,
    onClose: p,
    onToggle: y,
    isControlled: c,
    getButtonProps: w,
    getDisclosureProps: g,
  };
}
function ij(e) {
  const { ref: t, handler: n, enabled: r = !0 } = e,
    o = Dr(n),
    s = x.useRef({ isPointerDown: !1, ignoreEmulatedMouseEvents: !1 }).current;
  x.useEffect(() => {
    if (!r) return;
    const a = (d) => {
        gf(d, t) && (s.isPointerDown = !0);
      },
      l = (d) => {
        if (s.ignoreEmulatedMouseEvents) {
          s.ignoreEmulatedMouseEvents = !1;
          return;
        }
        s.isPointerDown && n && gf(d, t) && ((s.isPointerDown = !1), o(d));
      },
      u = (d) => {
        (s.ignoreEmulatedMouseEvents = !0),
          n && s.isPointerDown && gf(d, t) && ((s.isPointerDown = !1), o(d));
      },
      c = K2(t.current);
    return (
      c.addEventListener("mousedown", a, !0),
      c.addEventListener("mouseup", l, !0),
      c.addEventListener("touchstart", a, !0),
      c.addEventListener("touchend", u, !0),
      () => {
        c.removeEventListener("mousedown", a, !0),
          c.removeEventListener("mouseup", l, !0),
          c.removeEventListener("touchstart", a, !0),
          c.removeEventListener("touchend", u, !0);
      }
    );
  }, [n, t, o, s, r]);
}
function gf(e, t) {
  var n;
  const r = e.target;
  return r && !K2(r).contains(r)
    ? !1
    : !((n = t.current) != null && n.contains(r));
}
function K2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function sj(e) {
  const { isOpen: t, ref: n } = e,
    [r, o] = x.useState(t),
    [i, s] = x.useState(!1);
  return (
    x.useEffect(() => {
      i || (o(t), s(!0));
    }, [t, i, r]),
    oD(
      () => n.current,
      "animationend",
      () => {
        o(t);
      }
    ),
    {
      present: !(t ? !1 : !r),
      onComplete() {
        var l;
        const u = iD(n.current),
          c = new u.CustomEvent("animationend", { bubbles: !0 });
        (l = n.current) == null || l.dispatchEvent(c);
      },
    }
  );
}
function aj(e) {
  const { wasSelected: t, enabled: n, isSelected: r, mode: o = "unmount" } = e;
  return !!(!n || r || (o === "keepMounted" && t));
}
var [lj, uj, cj, dj] = RI(),
  [fj, ja] = Ut({ strict: !1, name: "MenuContext" });
function pj(e, ...t) {
  const n = x.useId(),
    r = e || n;
  return x.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
function q2(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function h1(e) {
  return q2(e).activeElement === e;
}
function hj(e = {}) {
  const {
      id: t,
      closeOnSelect: n = !0,
      closeOnBlur: r = !0,
      initialFocusRef: o,
      autoSelect: i = !0,
      isLazy: s,
      isOpen: a,
      defaultIsOpen: l,
      onClose: u,
      onOpen: c,
      placement: d = "bottom-start",
      lazyBehavior: f = "unmount",
      direction: p,
      computePositionOnMount: m = !1,
      ...y
    } = e,
    w = x.useRef(null),
    g = x.useRef(null),
    h = cj(),
    v = x.useCallback(() => {
      requestAnimationFrame(() => {
        var N;
        (N = w.current) == null || N.focus({ preventScroll: !1 });
      });
    }, []),
    S = x.useCallback(() => {
      const N = setTimeout(() => {
        var G;
        if (o) (G = o.current) == null || G.focus();
        else {
          const ke = h.firstEnabled();
          ke && Y(ke.index);
        }
      });
      L.current.add(N);
    }, [h, o]),
    P = x.useCallback(() => {
      const N = setTimeout(() => {
        const G = h.lastEnabled();
        G && Y(G.index);
      });
      L.current.add(N);
    }, [h]),
    T = x.useCallback(() => {
      c == null || c(), i ? S() : v();
    }, [i, S, v, c]),
    {
      isOpen: _,
      onOpen: A,
      onClose: O,
      onToggle: M,
    } = oj({ isOpen: a, defaultIsOpen: l, onClose: u, onOpen: T });
  ij({
    enabled: _ && r,
    ref: w,
    handler: (N) => {
      var G;
      ((G = g.current) != null && G.contains(N.target)) || O();
    },
  });
  const F = nj({ ...y, enabled: _ || m, placement: d, direction: p }),
    [X, Y] = x.useState(-1);
  Oi(() => {
    _ || Y(-1);
  }, [_]),
    ID(w, { focusRef: g, visible: _, shouldFocus: !0 });
  const Q = sj({ isOpen: _, ref: w }),
    [J, Z] = pj(t, "menu-button", "menu-list"),
    z = x.useCallback(() => {
      A(), v();
    }, [A, v]),
    L = x.useRef(new Set([]));
  x.useEffect(() => {
    const N = L.current;
    return () => {
      N.forEach((G) => clearTimeout(G)), N.clear();
    };
  }, []);
  const B = x.useCallback(() => {
      A(), S();
    }, [S, A]),
    H = x.useCallback(() => {
      A(), P();
    }, [A, P]),
    V = x.useCallback(() => {
      var N, G;
      const ke = q2(w.current),
        he = (N = w.current) == null ? void 0 : N.contains(ke.activeElement);
      if (!(_ && !he)) return;
      const De = (G = h.item(X)) == null ? void 0 : G.node;
      De == null || De.focus({ preventScroll: !0 });
    }, [_, X, h]),
    te = x.useRef(null);
  return {
    openAndFocusMenu: z,
    openAndFocusFirstItem: B,
    openAndFocusLastItem: H,
    onTransitionEnd: V,
    unstable__animationState: Q,
    descendants: h,
    popper: F,
    buttonId: J,
    menuId: Z,
    forceUpdate: F.forceUpdate,
    orientation: "vertical",
    isOpen: _,
    onToggle: M,
    onOpen: A,
    onClose: O,
    menuRef: w,
    buttonRef: g,
    focusedIndex: X,
    closeOnSelect: n,
    closeOnBlur: r,
    autoSelect: i,
    setFocusedIndex: Y,
    isLazy: s,
    lazyBehavior: f,
    initialFocusRef: o,
    rafId: te,
  };
}
function mj(e = {}, t = null) {
  const n = ja(),
    {
      onToggle: r,
      popper: o,
      openAndFocusFirstItem: i,
      openAndFocusLastItem: s,
    } = n,
    a = x.useCallback(
      (l) => {
        const u = l.key,
          d = { Enter: i, ArrowDown: i, ArrowUp: s }[u];
        d && (l.preventDefault(), l.stopPropagation(), d(l));
      },
      [i, s]
    );
  return {
    ...e,
    ref: cn(n.buttonRef, t, o.referenceRef),
    id: n.buttonId,
    "data-active": le(n.isOpen),
    "aria-expanded": n.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": n.menuId,
    onClick: lt(e.onClick, r),
    onKeyDown: lt(e.onKeyDown, a),
  };
}
function qp(e) {
  var t;
  return (
    bj(e) &&
    !!(
      (t = e == null ? void 0 : e.getAttribute("role")) != null &&
      t.startsWith("menuitem")
    )
  );
}
function gj(e = {}, t = null) {
  const n = ja();
  if (!n)
    throw new Error(
      "useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>"
    );
  const {
      focusedIndex: r,
      setFocusedIndex: o,
      menuRef: i,
      isOpen: s,
      onClose: a,
      menuId: l,
      isLazy: u,
      lazyBehavior: c,
      unstable__animationState: d,
    } = n,
    f = uj(),
    p = $D({ preventDefault: (g) => g.key !== " " && qp(g.target) }),
    m = x.useCallback(
      (g) => {
        if (!g.currentTarget.contains(g.target)) return;
        const h = g.key,
          S = {
            Tab: (T) => T.preventDefault(),
            Escape: a,
            ArrowDown: () => {
              const T = f.nextEnabled(r);
              T && o(T.index);
            },
            ArrowUp: () => {
              const T = f.prevEnabled(r);
              T && o(T.index);
            },
          }[h];
        if (S) {
          g.preventDefault(), S(g);
          return;
        }
        const P = p((T) => {
          const _ = MD(
            f.values(),
            T,
            (A) => {
              var O, M;
              return (M =
                (O = A == null ? void 0 : A.node) == null
                  ? void 0
                  : O.textContent) != null
                ? M
                : "";
            },
            f.item(r)
          );
          if (_) {
            const A = f.indexOf(_.node);
            o(A);
          }
        });
        qp(g.target) && P(g);
      },
      [f, r, p, a, o]
    ),
    y = x.useRef(!1);
  s && (y.current = !0);
  const w = aj({
    wasSelected: y.current,
    enabled: u,
    mode: c,
    isSelected: d.present,
  });
  return {
    ...e,
    ref: cn(i, t),
    children: w ? e.children : null,
    tabIndex: -1,
    role: "menu",
    id: l,
    style: { ...e.style, transformOrigin: "var(--popper-transform-origin)" },
    "aria-orientation": "vertical",
    onKeyDown: lt(e.onKeyDown, m),
  };
}
function vj(e = {}) {
  const { popper: t, isOpen: n } = ja();
  return t.getPopperProps({
    ...e,
    style: { visibility: n ? "visible" : "hidden", ...e.style },
  });
}
function yj(e = {}, t = null) {
  const {
      onMouseEnter: n,
      onMouseMove: r,
      onMouseLeave: o,
      onClick: i,
      onFocus: s,
      isDisabled: a,
      isFocusable: l,
      closeOnSelect: u,
      type: c,
      ...d
    } = e,
    f = ja(),
    {
      setFocusedIndex: p,
      focusedIndex: m,
      closeOnSelect: y,
      onClose: w,
      menuRef: g,
      isOpen: h,
      menuId: v,
      rafId: S,
    } = f,
    P = x.useRef(null),
    T = `${v}-menuitem-${x.useId()}`,
    { index: _, register: A } = dj({ disabled: a && !l }),
    O = x.useCallback(
      (z) => {
        n == null || n(z), !a && p(_);
      },
      [p, _, a, n]
    ),
    M = x.useCallback(
      (z) => {
        r == null || r(z), P.current && !h1(P.current) && O(z);
      },
      [O, r]
    ),
    F = x.useCallback(
      (z) => {
        o == null || o(z), !a && p(-1);
      },
      [p, a, o]
    ),
    X = x.useCallback(
      (z) => {
        i == null || i(z), qp(z.currentTarget) && (u ?? y) && w();
      },
      [w, i, y, u]
    ),
    Y = x.useCallback(
      (z) => {
        s == null || s(z), p(_);
      },
      [p, s, _]
    ),
    Q = _ === m,
    J = a && !l;
  Oi(() => {
    if (h)
      return (
        Q && !J && P.current
          ? (S.current && cancelAnimationFrame(S.current),
            (S.current = requestAnimationFrame(() => {
              var z;
              (z = P.current) == null || z.focus({ preventScroll: !0 }),
                (S.current = null);
            })))
          : g.current &&
            !h1(g.current) &&
            g.current.focus({ preventScroll: !0 }),
        () => {
          S.current && cancelAnimationFrame(S.current);
        }
      );
  }, [Q, J, g, h]);
  const Z = zD({
    onClick: X,
    onFocus: Y,
    onMouseEnter: O,
    onMouseMove: M,
    onMouseLeave: F,
    ref: cn(A, P, t),
    isDisabled: a,
    isFocusable: l,
  });
  return {
    ...d,
    ...Z,
    type: c ?? Z.type,
    id: T,
    role: "menuitem",
    tabIndex: Q ? 0 : -1,
  };
}
function bj(e) {
  var t;
  if (!xj(e)) return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function xj(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "nodeType" in e &&
    e.nodeType === Node.ELEMENT_NODE
  );
}
var [Sj, Fa] = Ut({
    name: "MenuStylesContext",
    errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `,
  }),
  e0 = (e) => {
    const { children: t } = e,
      n = Xr("Menu", e),
      r = bt(e),
      { direction: o } = Mo(),
      { descendants: i, ...s } = hj({ ...r, direction: o }),
      a = x.useMemo(() => s, [s]),
      { isOpen: l, onClose: u, forceUpdate: c } = a;
    return k.jsx(lj, {
      value: i,
      children: k.jsx(fj, {
        value: a,
        children: k.jsx(Sj, {
          value: n,
          children: Xn(t, { isOpen: l, onClose: u, forceUpdate: c }),
        }),
      }),
    });
  };
e0.displayName = "Menu";
var Y2 = ee((e, t) => {
  const n = Fa();
  return k.jsx(q.span, {
    ref: t,
    ...e,
    __css: n.command,
    className: "chakra-menu__command",
  });
});
Y2.displayName = "MenuCommand";
var wj = ee((e, t) => {
    const { type: n, ...r } = e,
      o = Fa(),
      i = r.as || n ? n ?? void 0 : "button",
      s = x.useMemo(
        () => ({
          textDecoration: "none",
          color: "inherit",
          userSelect: "none",
          display: "flex",
          width: "100%",
          alignItems: "center",
          textAlign: "start",
          flex: "0 0 auto",
          outline: 0,
          ...o.item,
        }),
        [o.item]
      );
    return k.jsx(q.button, { ref: t, type: i, ...r, __css: s });
  }),
  X2 = (e) => {
    const { className: t, children: n, ...r } = e,
      o = Fa(),
      i = x.Children.only(n),
      s = x.isValidElement(i)
        ? x.cloneElement(i, {
            focusable: "false",
            "aria-hidden": !0,
            className: ve("chakra-menu__icon", i.props.className),
          })
        : null,
      a = ve("chakra-menu__icon-wrapper", t);
    return k.jsx(q.span, { className: a, ...r, __css: o.icon, children: s });
  };
X2.displayName = "MenuIcon";
var t0 = ee((e, t) => {
  const {
      icon: n,
      iconSpacing: r = "0.75rem",
      command: o,
      commandSpacing: i = "0.75rem",
      children: s,
      ...a
    } = e,
    l = yj(a, t),
    c =
      n || o
        ? k.jsx("span", {
            style: { pointerEvents: "none", flex: 1 },
            children: s,
          })
        : s;
  return k.jsxs(wj, {
    ...l,
    className: ve("chakra-menu__menuitem", l.className),
    children: [
      n && k.jsx(X2, { fontSize: "0.8em", marginEnd: r, children: n }),
      c,
      o && k.jsx(Y2, { marginStart: i, children: o }),
    ],
  });
});
t0.displayName = "MenuItem";
var kj = {
    enter: {
      visibility: "visible",
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      transitionEnd: { visibility: "hidden" },
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.1, easings: "easeOut" },
    },
  },
  Cj = q(l2.div),
  n0 = ee(function (t, n) {
    var r, o;
    const { rootProps: i, motionProps: s, ...a } = t,
      { isOpen: l, onTransitionEnd: u, unstable__animationState: c } = ja(),
      d = gj(a, n),
      f = vj(i),
      p = Fa();
    return k.jsx(q.div, {
      ...f,
      __css: {
        zIndex:
          (o = t.zIndex) != null ? o : (r = p.list) == null ? void 0 : r.zIndex,
      },
      children: k.jsx(Cj, {
        variants: kj,
        initial: !1,
        animate: l ? "enter" : "exit",
        __css: { outline: 0, ...p.list },
        ...s,
        className: ve("chakra-menu__menu-list", d.className),
        ...d,
        onUpdate: u,
        onAnimationComplete: y4(c.onComplete, d.onAnimationComplete),
      }),
    });
  });
n0.displayName = "MenuList";
var Ej = ee((e, t) => {
    const n = Fa();
    return k.jsx(q.button, {
      ref: t,
      ...e,
      __css: {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        outline: 0,
        ...n.button,
      },
    });
  }),
  r0 = ee((e, t) => {
    const { children: n, as: r, ...o } = e,
      i = mj(o, t),
      s = r || Ej;
    return k.jsx(s, {
      ...i,
      className: ve("chakra-menu__menu-button", e.className),
      children: k.jsx(q.span, {
        __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
        children: e.children,
      }),
    });
  });
r0.displayName = "MenuButton";
function _j() {
  const e = x.useRef(!0);
  return (
    x.useEffect(() => {
      e.current = !1;
    }, []),
    e.current
  );
}
function Pj(e) {
  const t = x.useRef();
  return (
    x.useEffect(() => {
      t.current = e;
    }, [e]),
    t.current
  );
}
var Tj = q("div", {
    baseStyle: {
      boxShadow: "none",
      backgroundClip: "padding-box",
      cursor: "default",
      color: "transparent",
      pointerEvents: "none",
      userSelect: "none",
      "&::before, &::after, *": { visibility: "hidden" },
    },
  }),
  Yp = W("skeleton-start-color"),
  Xp = W("skeleton-end-color"),
  Aj = om({ from: { opacity: 0 }, to: { opacity: 1 } }),
  Rj = om({
    from: { borderColor: Yp.reference, background: Yp.reference },
    to: { borderColor: Xp.reference, background: Xp.reference },
  }),
  Gc = ee((e, t) => {
    const n = {
        ...e,
        fadeDuration: typeof e.fadeDuration == "number" ? e.fadeDuration : 0.4,
        speed: typeof e.speed == "number" ? e.speed : 0.8,
      },
      r = Yr("Skeleton", n),
      o = _j(),
      {
        startColor: i = "",
        endColor: s = "",
        isLoaded: a,
        fadeDuration: l,
        speed: u,
        className: c,
        fitContent: d,
        ...f
      } = bt(n),
      [p, m] = g4("colors", [i, s]),
      y = Pj(a),
      w = ve("chakra-skeleton", c),
      g = { ...(p && { [Yp.variable]: p }), ...(m && { [Xp.variable]: m }) };
    if (a) {
      const h = o || y ? "none" : `${Aj} ${l}s`;
      return k.jsx(q.div, {
        ref: t,
        className: w,
        __css: { animation: h },
        ...f,
      });
    }
    return k.jsx(Tj, {
      ref: t,
      className: w,
      ...f,
      __css: {
        width: d ? "fit-content" : void 0,
        ...r,
        ...g,
        _dark: { ...r._dark, ...g },
        animation: `${u}s linear infinite alternate ${Rj}`,
      },
    });
  });
Gc.displayName = "Skeleton";
function $j(e) {
  return Array(e)
    .fill(1)
    .map((t, n) => n + 1);
}
var m1 = 3,
  o0 = (e) => {
    const {
        noOfLines: t = m1,
        spacing: n = "0.5rem",
        skeletonHeight: r = "0.5rem",
        className: o,
        startColor: i,
        endColor: s,
        isLoaded: a,
        fadeDuration: l,
        speed: u,
        variant: c,
        size: d,
        colorScheme: f,
        children: p,
        ...m
      } = e,
      y = AD(typeof t == "number" ? [t] : t) || m1,
      w = $j(y),
      g = (v) => (y > 1 && v === w.length ? "80%" : "100%"),
      h = ve("chakra-skeleton__group", o);
    return k.jsx(q.div, {
      className: h,
      ...m,
      children: w.map((v, S) => {
        if (a && S > 0) return null;
        const P = a
          ? null
          : { mb: v === w.length ? "0" : n, width: g(v), height: r };
        return k.jsx(
          Gc,
          {
            startColor: i,
            endColor: s,
            isLoaded: a,
            fadeDuration: l,
            speed: u,
            variant: c,
            size: d,
            colorScheme: f,
            ...P,
            children: S === 0 ? p : void 0,
          },
          w.length.toString() + v
        );
      }),
    });
  };
o0.displayName = "SkeletonText";
var Q2 = ee(function (t, n) {
  const r = Xr("Switch", t),
    { spacing: o = "0.5rem", children: i, ...s } = bt(t),
    {
      getIndicatorProps: a,
      getInputProps: l,
      getCheckboxProps: u,
      getRootProps: c,
      getLabelProps: d,
    } = nD(s),
    f = x.useMemo(
      () => ({
        display: "inline-block",
        position: "relative",
        verticalAlign: "middle",
        lineHeight: 0,
        ...r.container,
      }),
      [r.container]
    ),
    p = x.useMemo(
      () => ({
        display: "inline-flex",
        flexShrink: 0,
        justifyContent: "flex-start",
        boxSizing: "content-box",
        cursor: "pointer",
        ...r.track,
      }),
      [r.track]
    ),
    m = x.useMemo(
      () => ({ userSelect: "none", marginStart: o, ...r.label }),
      [o, r.label]
    );
  return k.jsxs(q.label, {
    ...c(),
    className: ve("chakra-switch", t.className),
    __css: f,
    children: [
      k.jsx("input", { className: "chakra-switch__input", ...l({}, n) }),
      k.jsx(q.span, {
        ...u(),
        className: "chakra-switch__track",
        __css: p,
        children: k.jsx(q.span, {
          __css: r.thumb,
          className: "chakra-switch__thumb",
          ...a(),
        }),
      }),
      i &&
        k.jsx(q.span, {
          className: "chakra-switch__label",
          ...d(),
          __css: m,
          children: i,
        }),
    ],
  });
});
Q2.displayName = "Switch";
const Mj = "/game-hub/assets/logo-ff4914e6.webp",
  Oj = () => {
    const { toggleColorMode: e, colorMode: t } = Pc();
    return k.jsxs(Ur, {
      children: [
        k.jsx(Q2, { isChecked: t === "dark", onChange: e }),
        k.jsx(Gm, { whiteSpace: "nowrap", children: "Dark Mode" }),
      ],
    });
  };
var Z2 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  g1 = Lt.createContext && Lt.createContext(Z2),
  Br =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Br =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        Br.apply(this, arguments)
      );
    },
  zj =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      return n;
    };
function J2(e) {
  return (
    e &&
    e.map(function (t, n) {
      return Lt.createElement(t.tag, Br({ key: n }, t.attr), J2(t.child));
    })
  );
}
function kn(e) {
  return function (t) {
    return Lt.createElement(Lj, Br({ attr: Br({}, e.attr) }, t), J2(e.child));
  };
}
function Lj(e) {
  var t = function (n) {
    var r = e.attr,
      o = e.size,
      i = e.title,
      s = zj(e, ["attr", "size", "title"]),
      a = o || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      Lt.createElement(
        "svg",
        Br(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: l,
            style: Br(Br({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && Lt.createElement("title", null, i),
        e.children
      )
    );
  };
  return g1 !== void 0
    ? Lt.createElement(g1.Consumer, null, function (n) {
        return t(n);
      })
    : t(Z2);
}
function ek(e) {
  return kn({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z",
        },
      },
    ],
  })(e);
}
function Ij(e) {
  return kn({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z",
        },
      },
    ],
  })(e);
}
function Dj(e) {
  return kn({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z",
        },
      },
    ],
  })(e);
}
const jj = ({ onSearch: e }) => {
    const t = x.useRef(null);
    return k.jsx("form", {
      onSubmit: (n) => {
        n.preventDefault(), t.current && e(t.current.value);
      },
      children: k.jsxs(P2, {
        children: [
          k.jsx(Wm, { children: k.jsx(Dj, {}) }),
          k.jsx(Hm, {
            ref: t,
            borderRadius: 20,
            placeholder: "Search games...",
            variant: "filled",
          }),
        ],
      }),
    });
  },
  Fj = ({ onSearch: e }) =>
    k.jsxs(Ur, {
      padding: "10px",
      children: [
        k.jsx(za, { src: Mj, boxSize: "60px" }),
        k.jsx(jj, { onSearch: e }),
        k.jsx(Oj, {}),
      ],
    });
function tk(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Bj } = Object.prototype,
  { getPrototypeOf: i0 } = Object,
  Kc = ((e) => (t) => {
    const n = Bj.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Fn = (e) => ((e = e.toLowerCase()), (t) => Kc(t) === e),
  qc = (e) => (t) => typeof t === e,
  { isArray: Ui } = Array,
  Sa = qc("undefined");
function Nj(e) {
  return (
    e !== null &&
    !Sa(e) &&
    e.constructor !== null &&
    !Sa(e.constructor) &&
    an(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const nk = Fn("ArrayBuffer");
function Vj(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && nk(e.buffer)),
    t
  );
}
const Wj = qc("string"),
  an = qc("function"),
  rk = qc("number"),
  Yc = (e) => e !== null && typeof e == "object",
  Hj = (e) => e === !0 || e === !1,
  ru = (e) => {
    if (Kc(e) !== "object") return !1;
    const t = i0(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Uj = Fn("Date"),
  Gj = Fn("File"),
  Kj = Fn("Blob"),
  qj = Fn("FileList"),
  Yj = (e) => Yc(e) && an(e.pipe),
  Xj = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (an(e.append) &&
          ((t = Kc(e)) === "formdata" ||
            (t === "object" &&
              an(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Qj = Fn("URLSearchParams"),
  Zj = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ba(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), Ui(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = i.length;
    let a;
    for (r = 0; r < s; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function ok(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const ik = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  sk = (e) => !Sa(e) && e !== ik;
function Qp() {
  const { caseless: e } = (sk(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && ok(t, o)) || o;
      ru(t[i]) && ru(r)
        ? (t[i] = Qp(t[i], r))
        : ru(r)
        ? (t[i] = Qp({}, r))
        : Ui(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Ba(arguments[r], n);
  return t;
}
const Jj = (e, t, n, { allOwnKeys: r } = {}) => (
    Ba(
      t,
      (o, i) => {
        n && an(o) ? (e[i] = tk(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  eF = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  tF = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  nF = (e, t, n, r) => {
    let o, i, s;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (s = o[i]), (!r || r(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0));
      e = n !== !1 && i0(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  rF = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  oF = (e) => {
    if (!e) return null;
    if (Ui(e)) return e;
    let t = e.length;
    if (!rk(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  iF = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && i0(Uint8Array)),
  sF = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  aF = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  lF = Fn("HTMLFormElement"),
  uF = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  v1 = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  cF = Fn("RegExp"),
  ak = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Ba(n, (o, i) => {
      let s;
      (s = t(o, i, e)) !== !1 && (r[i] = s || o);
    }),
      Object.defineProperties(e, r);
  },
  dF = (e) => {
    ak(e, (t, n) => {
      if (an(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (an(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  fF = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return Ui(e) ? r(e) : r(String(e).split(t)), n;
  },
  pF = () => {},
  hF = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  vf = "abcdefghijklmnopqrstuvwxyz",
  y1 = "0123456789",
  lk = { DIGIT: y1, ALPHA: vf, ALPHA_DIGIT: vf + vf.toUpperCase() + y1 },
  mF = (e = 16, t = lk.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function gF(e) {
  return !!(
    e &&
    an(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const vF = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (Yc(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = Ui(r) ? [] : {};
            return (
              Ba(r, (s, a) => {
                const l = n(s, o + 1);
                !Sa(l) && (i[a] = l);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  yF = Fn("AsyncFunction"),
  bF = (e) => e && (Yc(e) || an(e)) && an(e.then) && an(e.catch),
  $ = {
    isArray: Ui,
    isArrayBuffer: nk,
    isBuffer: Nj,
    isFormData: Xj,
    isArrayBufferView: Vj,
    isString: Wj,
    isNumber: rk,
    isBoolean: Hj,
    isObject: Yc,
    isPlainObject: ru,
    isUndefined: Sa,
    isDate: Uj,
    isFile: Gj,
    isBlob: Kj,
    isRegExp: cF,
    isFunction: an,
    isStream: Yj,
    isURLSearchParams: Qj,
    isTypedArray: iF,
    isFileList: qj,
    forEach: Ba,
    merge: Qp,
    extend: Jj,
    trim: Zj,
    stripBOM: eF,
    inherits: tF,
    toFlatObject: nF,
    kindOf: Kc,
    kindOfTest: Fn,
    endsWith: rF,
    toArray: oF,
    forEachEntry: sF,
    matchAll: aF,
    isHTMLForm: lF,
    hasOwnProperty: v1,
    hasOwnProp: v1,
    reduceDescriptors: ak,
    freezeMethods: dF,
    toObjectSet: fF,
    toCamelCase: uF,
    noop: pF,
    toFiniteNumber: hF,
    findKey: ok,
    global: ik,
    isContextDefined: sk,
    ALPHABET: lk,
    generateString: mF,
    isSpecCompliantForm: gF,
    toJSONObject: vF,
    isAsyncFn: yF,
    isThenable: bF,
  };
function se(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
$.inherits(se, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: $.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const uk = se.prototype,
  ck = {};
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
  "ERR_INVALID_URL",
].forEach((e) => {
  ck[e] = { value: e };
});
Object.defineProperties(se, ck);
Object.defineProperty(uk, "isAxiosError", { value: !0 });
se.from = (e, t, n, r, o, i) => {
  const s = Object.create(uk);
  return (
    $.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    se.call(s, e.message, t, n, r, o),
    (s.cause = e),
    (s.name = e.name),
    i && Object.assign(s, i),
    s
  );
};
const xF = null;
function Zp(e) {
  return $.isPlainObject(e) || $.isArray(e);
}
function dk(e) {
  return $.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function b1(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = dk(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function SF(e) {
  return $.isArray(e) && !e.some(Zp);
}
const wF = $.toFlatObject($, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Xc(e, t, n) {
  if (!$.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = $.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, w) {
        return !$.isUndefined(w[y]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    s = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && $.isSpecCompliantForm(t);
  if (!$.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if ($.isDate(m)) return m.toISOString();
    if (!l && $.isBlob(m))
      throw new se("Blob is not supported. Use a Buffer instead.");
    return $.isArrayBuffer(m) || $.isTypedArray(m)
      ? l && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function c(m, y, w) {
    let g = m;
    if (m && !w && typeof m == "object") {
      if ($.endsWith(y, "{}"))
        (y = r ? y : y.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        ($.isArray(m) && SF(m)) ||
        (($.isFileList(m) || $.endsWith(y, "[]")) && (g = $.toArray(m)))
      )
        return (
          (y = dk(y)),
          g.forEach(function (v, S) {
            !($.isUndefined(v) || v === null) &&
              t.append(
                s === !0 ? b1([y], S, i) : s === null ? y : y + "[]",
                u(v)
              );
          }),
          !1
        );
    }
    return Zp(m) ? !0 : (t.append(b1(w, y, i), u(m)), !1);
  }
  const d = [],
    f = Object.assign(wF, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: Zp,
    });
  function p(m, y) {
    if (!$.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(m),
        $.forEach(m, function (g, h) {
          (!($.isUndefined(g) || g === null) &&
            o.call(t, g, $.isString(h) ? h.trim() : h, y, f)) === !0 &&
            p(g, y ? y.concat(h) : [h]);
        }),
        d.pop();
    }
  }
  if (!$.isObject(e)) throw new TypeError("data must be an object");
  return p(e), t;
}
function x1(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function s0(e, t) {
  (this._pairs = []), e && Xc(e, this, t);
}
const fk = s0.prototype;
fk.append = function (t, n) {
  this._pairs.push([t, n]);
};
fk.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, x1);
      }
    : x1;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function kF(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function pk(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || kF,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = $.isURLSearchParams(t) ? t.toString() : new s0(t, n).toString(r)),
    i)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class CF {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    $.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const S1 = CF,
  hk = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  EF = typeof URLSearchParams < "u" ? URLSearchParams : s0,
  _F = typeof FormData < "u" ? FormData : null,
  PF = typeof Blob < "u" ? Blob : null,
  TF = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  AF = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  bn = {
    isBrowser: !0,
    classes: { URLSearchParams: EF, FormData: _F, Blob: PF },
    isStandardBrowserEnv: TF,
    isStandardBrowserWebWorkerEnv: AF,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function RF(e, t) {
  return Xc(
    e,
    new bn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return bn.isNode && $.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function $F(e) {
  return $.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function MF(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function mk(e) {
  function t(n, r, o, i) {
    let s = n[i++];
    const a = Number.isFinite(+s),
      l = i >= n.length;
    return (
      (s = !s && $.isArray(o) ? o.length : s),
      l
        ? ($.hasOwnProp(o, s) ? (o[s] = [o[s], r]) : (o[s] = r), !a)
        : ((!o[s] || !$.isObject(o[s])) && (o[s] = []),
          t(n, r, o[s], i) && $.isArray(o[s]) && (o[s] = MF(o[s])),
          !a)
    );
  }
  if ($.isFormData(e) && $.isFunction(e.entries)) {
    const n = {};
    return (
      $.forEachEntry(e, (r, o) => {
        t($F(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function OF(e, t, n) {
  if ($.isString(e))
    try {
      return (t || JSON.parse)(e), $.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const a0 = {
  transitional: hk,
  adapter: bn.isNode ? "http" : "xhr",
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = $.isObject(t);
      if ((i && $.isHTMLForm(t) && (t = new FormData(t)), $.isFormData(t)))
        return o && o ? JSON.stringify(mk(t)) : t;
      if (
        $.isArrayBuffer(t) ||
        $.isBuffer(t) ||
        $.isStream(t) ||
        $.isFile(t) ||
        $.isBlob(t)
      )
        return t;
      if ($.isArrayBufferView(t)) return t.buffer;
      if ($.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return RF(t, this.formSerializer).toString();
        if ((a = $.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Xc(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), OF(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || a0.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && $.isString(t) && ((r && !this.responseType) || o)) {
        const s = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (s)
            throw a.name === "SyntaxError"
              ? se.from(a, se.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: bn.classes.FormData, Blob: bn.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
$.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  a0.headers[e] = {};
});
const l0 = a0,
  zF = $.toObjectSet([
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
    "user-agent",
  ]),
  LF = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (o = s.indexOf(":")),
              (n = s.substring(0, o).trim().toLowerCase()),
              (r = s.substring(o + 1).trim()),
              !(!n || (t[n] && zF[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  w1 = Symbol("internals");
function ds(e) {
  return e && String(e).trim().toLowerCase();
}
function ou(e) {
  return e === !1 || e == null ? e : $.isArray(e) ? e.map(ou) : String(e);
}
function IF(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const DF = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function yf(e, t, n, r, o) {
  if ($.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!$.isString(t))) {
    if ($.isString(r)) return t.indexOf(r) !== -1;
    if ($.isRegExp(r)) return r.test(t);
  }
}
function jF(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function FF(e, t) {
  const n = $.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, s) {
        return this[r].call(this, t, o, i, s);
      },
      configurable: !0,
    });
  });
}
let Qc = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, l, u) {
      const c = ds(l);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = $.findKey(o, c);
      (!d || o[d] === void 0 || u === !0 || (u === void 0 && o[d] !== !1)) &&
        (o[d || l] = ou(a));
    }
    const s = (a, l) => $.forEach(a, (u, c) => i(u, c, l));
    return (
      $.isPlainObject(t) || t instanceof this.constructor
        ? s(t, n)
        : $.isString(t) && (t = t.trim()) && !DF(t)
        ? s(LF(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = ds(t)), t)) {
      const r = $.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return IF(o);
        if ($.isFunction(n)) return n.call(this, o, r);
        if ($.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = ds(t)), t)) {
      const r = $.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || yf(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(s) {
      if (((s = ds(s)), s)) {
        const a = $.findKey(r, s);
        a && (!n || yf(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return $.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || yf(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      $.forEach(this, (o, i) => {
        const s = $.findKey(r, i);
        if (s) {
          (n[s] = ou(o)), delete n[i];
          return;
        }
        const a = t ? jF(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = ou(o)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      $.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && $.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[w1] = this[w1] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(s) {
      const a = ds(s);
      r[a] || (FF(o, s), (r[a] = !0));
    }
    return $.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
Qc.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
$.reduceDescriptors(Qc.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
$.freezeMethods(Qc);
const or = Qc;
function bf(e, t) {
  const n = this || l0,
    r = t || n,
    o = or.from(r.headers);
  let i = r.data;
  return (
    $.forEach(e, function (a) {
      i = a.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function gk(e) {
  return !!(e && e.__CANCEL__);
}
function Na(e, t, n) {
  se.call(this, e ?? "canceled", se.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
$.inherits(Na, se, { __CANCEL__: !0 });
function BF(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new se(
          "Request failed with status code " + n.status,
          [se.ERR_BAD_REQUEST, se.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const NF = bn.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, o, i, s, a) {
          const l = [];
          l.push(n + "=" + encodeURIComponent(r)),
            $.isNumber(o) && l.push("expires=" + new Date(o).toGMTString()),
            $.isString(i) && l.push("path=" + i),
            $.isString(s) && l.push("domain=" + s),
            a === !0 && l.push("secure"),
            (document.cookie = l.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function VF(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function WF(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function vk(e, t) {
  return e && !VF(t) ? WF(e, t) : t;
}
const HF = bn.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(i) {
        let s = i;
        return (
          t && (n.setAttribute("href", s), (s = n.href)),
          n.setAttribute("href", s),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (s) {
          const a = $.isString(s) ? o(s) : s;
          return a.protocol === r.protocol && a.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function UF(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function GF(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = r[i];
      s || (s = u), (n[o] = l), (r[o] = u);
      let d = i,
        f = 0;
      for (; d !== o; ) (f += n[d++]), (d = d % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - s < t)) return;
      const p = c && u - c;
      return p ? Math.round((f * 1e3) / p) : void 0;
    }
  );
}
function k1(e, t) {
  let n = 0;
  const r = GF(50, 250);
  return (o) => {
    const i = o.loaded,
      s = o.lengthComputable ? o.total : void 0,
      a = i - n,
      l = r(a),
      u = i <= s;
    n = i;
    const c = {
      loaded: i,
      total: s,
      progress: s ? i / s : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && s && u ? (s - i) / l : void 0,
      event: o,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const KF = typeof XMLHttpRequest < "u",
  qF =
    KF &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = or.from(e.headers).normalize(),
          s = e.responseType;
        let a;
        function l() {
          e.cancelToken && e.cancelToken.unsubscribe(a),
            e.signal && e.signal.removeEventListener("abort", a);
        }
        $.isFormData(o) &&
          (bn.isStandardBrowserEnv || bn.isStandardBrowserWebWorkerEnv
            ? i.setContentType(!1)
            : i.setContentType("multipart/form-data;", !1));
        let u = new XMLHttpRequest();
        if (e.auth) {
          const p = e.auth.username || "",
            m = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(p + ":" + m));
        }
        const c = vk(e.baseURL, e.url);
        u.open(e.method.toUpperCase(), pk(c, e.params, e.paramsSerializer), !0),
          (u.timeout = e.timeout);
        function d() {
          if (!u) return;
          const p = or.from(
              "getAllResponseHeaders" in u && u.getAllResponseHeaders()
            ),
            y = {
              data:
                !s || s === "text" || s === "json"
                  ? u.responseText
                  : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: p,
              config: e,
              request: u,
            };
          BF(
            function (g) {
              n(g), l();
            },
            function (g) {
              r(g), l();
            },
            y
          ),
            (u = null);
        }
        if (
          ("onloadend" in u
            ? (u.onloadend = d)
            : (u.onreadystatechange = function () {
                !u ||
                  u.readyState !== 4 ||
                  (u.status === 0 &&
                    !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(d);
              }),
          (u.onabort = function () {
            u &&
              (r(new se("Request aborted", se.ECONNABORTED, e, u)), (u = null));
          }),
          (u.onerror = function () {
            r(new se("Network Error", se.ERR_NETWORK, e, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let m = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const y = e.transitional || hk;
            e.timeoutErrorMessage && (m = e.timeoutErrorMessage),
              r(
                new se(
                  m,
                  y.clarifyTimeoutError ? se.ETIMEDOUT : se.ECONNABORTED,
                  e,
                  u
                )
              ),
              (u = null);
          }),
          bn.isStandardBrowserEnv)
        ) {
          const p =
            (e.withCredentials || HF(c)) &&
            e.xsrfCookieName &&
            NF.read(e.xsrfCookieName);
          p && i.set(e.xsrfHeaderName, p);
        }
        o === void 0 && i.setContentType(null),
          "setRequestHeader" in u &&
            $.forEach(i.toJSON(), function (m, y) {
              u.setRequestHeader(y, m);
            }),
          $.isUndefined(e.withCredentials) ||
            (u.withCredentials = !!e.withCredentials),
          s && s !== "json" && (u.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            u.addEventListener("progress", k1(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            u.upload &&
            u.upload.addEventListener("progress", k1(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((a = (p) => {
              u &&
                (r(!p || p.type ? new Na(null, e, u) : p),
                u.abort(),
                (u = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(a),
            e.signal &&
              (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
        const f = UF(c);
        if (f && bn.protocols.indexOf(f) === -1) {
          r(new se("Unsupported protocol " + f + ":", se.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(o || null);
      });
    },
  iu = { http: xF, xhr: qF };
$.forEach(iu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const yk = {
  getAdapter: (e) => {
    e = $.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let o = 0;
      o < t && ((n = e[o]), !(r = $.isString(n) ? iu[n.toLowerCase()] : n));
      o++
    );
    if (!r)
      throw r === !1
        ? new se(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            $.hasOwnProp(iu, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!$.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: iu,
};
function xf(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Na(null, e);
}
function C1(e) {
  return (
    xf(e),
    (e.headers = or.from(e.headers)),
    (e.data = bf.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    yk
      .getAdapter(e.adapter || l0.adapter)(e)
      .then(
        function (r) {
          return (
            xf(e),
            (r.data = bf.call(e, e.transformResponse, r)),
            (r.headers = or.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            gk(r) ||
              (xf(e),
              r &&
                r.response &&
                ((r.response.data = bf.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = or.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const E1 = (e) => (e instanceof or ? e.toJSON() : e);
function Bi(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d) {
    return $.isPlainObject(u) && $.isPlainObject(c)
      ? $.merge.call({ caseless: d }, u, c)
      : $.isPlainObject(c)
      ? $.merge({}, c)
      : $.isArray(c)
      ? c.slice()
      : c;
  }
  function o(u, c, d) {
    if ($.isUndefined(c)) {
      if (!$.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, c, d);
  }
  function i(u, c) {
    if (!$.isUndefined(c)) return r(void 0, c);
  }
  function s(u, c) {
    if ($.isUndefined(c)) {
      if (!$.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function a(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, c) => o(E1(u), E1(c), !0),
  };
  return (
    $.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = l[c] || o,
        f = d(e[c], t[c], c);
      ($.isUndefined(f) && d !== a) || (n[c] = f);
    }),
    n
  );
}
const bk = "1.5.0",
  u0 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    u0[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const _1 = {};
u0.transitional = function (t, n, r) {
  function o(i, s) {
    return (
      "[Axios v" +
      bk +
      "] Transitional option '" +
      i +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (i, s, a) => {
    if (t === !1)
      throw new se(
        o(s, " has been removed" + (n ? " in " + n : "")),
        se.ERR_DEPRECATED
      );
    return (
      n &&
        !_1[s] &&
        ((_1[s] = !0),
        console.warn(
          o(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, s, a) : !0
    );
  };
};
function YF(e, t, n) {
  if (typeof e != "object")
    throw new se("options must be an object", se.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      s = t[i];
    if (s) {
      const a = e[i],
        l = a === void 0 || s(a, i, e);
      if (l !== !0)
        throw new se("option " + i + " must be " + l, se.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new se("Unknown option " + i, se.ERR_BAD_OPTION);
  }
}
const Jp = { assertOptions: YF, validators: u0 },
  br = Jp.validators;
let Yu = class {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new S1(), response: new S1() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Bi(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Jp.assertOptions(
        r,
        {
          silentJSONParsing: br.transitional(br.boolean),
          forcedJSONParsing: br.transitional(br.boolean),
          clarifyTimeoutError: br.transitional(br.boolean),
        },
        !1
      ),
      o != null &&
        ($.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : Jp.assertOptions(
              o,
              { encode: br.function, serialize: br.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = i && $.merge(i.common, i[n.method]);
    i &&
      $.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (m) => {
          delete i[m];
        }
      ),
      (n.headers = or.concat(s, i));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == "function" && y.runWhen(n) === !1) ||
        ((l = l && y.synchronous), a.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (y) {
      u.push(y.fulfilled, y.rejected);
    });
    let c,
      d = 0,
      f;
    if (!l) {
      const m = [C1.bind(this), void 0];
      for (
        m.unshift.apply(m, a),
          m.push.apply(m, u),
          f = m.length,
          c = Promise.resolve(n);
        d < f;

      )
        c = c.then(m[d++], m[d++]);
      return c;
    }
    f = a.length;
    let p = n;
    for (d = 0; d < f; ) {
      const m = a[d++],
        y = a[d++];
      try {
        p = m(p);
      } catch (w) {
        y.call(this, w);
        break;
      }
    }
    try {
      c = C1.call(this, p);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, f = u.length; d < f; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = Bi(this.defaults, t);
    const n = vk(t.baseURL, t.url);
    return pk(n, t.params, t.paramsSerializer);
  }
};
$.forEach(["delete", "get", "head", "options"], function (t) {
  Yu.prototype[t] = function (n, r) {
    return this.request(
      Bi(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
$.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, s, a) {
      return this.request(
        Bi(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: s,
        })
      );
    };
  }
  (Yu.prototype[t] = n()), (Yu.prototype[t + "Form"] = n(!0));
});
const su = Yu;
let XF = class xk {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const s = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(o);
        return (
          (s.cancel = function () {
            r.unsubscribe(i);
          }),
          s
        );
      }),
      t(function (i, s, a) {
        r.reason || ((r.reason = new Na(i, s, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new xk(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
};
const QF = XF;
function ZF(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function JF(e) {
  return $.isObject(e) && e.isAxiosError === !0;
}
const eh = {
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
};
Object.entries(eh).forEach(([e, t]) => {
  eh[t] = e;
});
const e7 = eh;
function Sk(e) {
  const t = new su(e),
    n = tk(su.prototype.request, t);
  return (
    $.extend(n, su.prototype, t, { allOwnKeys: !0 }),
    $.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return Sk(Bi(e, o));
    }),
    n
  );
}
const We = Sk(l0);
We.Axios = su;
We.CanceledError = Na;
We.CancelToken = QF;
We.isCancel = gk;
We.VERSION = bk;
We.toFormData = Xc;
We.AxiosError = se;
We.Cancel = We.CanceledError;
We.all = function (t) {
  return Promise.all(t);
};
We.spread = ZF;
We.isAxiosError = JF;
We.mergeConfig = Bi;
We.AxiosHeaders = or;
We.formToJSON = (e) => mk($.isHTMLForm(e) ? new FormData(e) : e);
We.getAdapter = yk.getAdapter;
We.HttpStatusCode = e7;
We.default = We;
const wk = We,
  {
    Axios: L7,
    AxiosError: I7,
    CanceledError: t7,
    isCancel: D7,
    CancelToken: j7,
    VERSION: F7,
    all: B7,
    Cancel: N7,
    isAxiosError: V7,
    spread: W7,
    toFormData: H7,
    AxiosHeaders: U7,
    HttpStatusCode: G7,
    formToJSON: K7,
    getAdapter: q7,
    mergeConfig: Y7,
  } = wk,
  n7 = wk.create({
    baseURL: "https://api.rawg.io/api",
    params: { key: "b84ff1ec64604de68b7d9a3af1b60937" },
  }),
  c0 = (e, t, n) => {
    const [r, o] = x.useState([]),
      [i, s] = x.useState(""),
      [a, l] = x.useState(!1);
    return (
      x.useEffect(
        () => {
          const u = new AbortController();
          return (
            l(!0),
            n7
              .get(e, { signal: u.signal, ...t })
              .then((c) => {
                o(c.data.results), l(!1);
              })
              .catch((c) => {
                c instanceof t7 || (s(c.message), l(!1));
              }),
            () => u.abort()
          );
        },
        n ? [...n] : []
      ),
      { data: r, error: i, isLoading: a }
    );
  },
  r7 = (e) => {
    var t, n;
    return c0(
      "/games",
      {
        params: {
          genres: (t = e.genre) == null ? void 0 : t.id,
          platforms: (n = e.platform) == null ? void 0 : n.id,
          ordering: e.sortOrder,
          search: e.searchText,
        },
      },
      [e]
    );
  };
function o7(e) {
  return kn({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55",
        },
      },
    ],
  })(e);
}
function i7(e) {
  return kn({
    tag: "svg",
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z",
        },
      },
    ],
  })(e);
}
function s7(e) {
  return kn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5.2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4.2-.8.7-.6 1.1.3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6.2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5.1-1.3.6-3.4 1.5-3.2 2.9.1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7.1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9.6 7.9 1.2 11.8 1.2 8.1 2.5 15.7.8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1.6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3.4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4.7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6.6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7.8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4.6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1.8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7.4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6.8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1.3-.2.7-.3 1-.5.8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z",
        },
      },
    ],
  })(e);
}
function a7(e) {
  return kn({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M570.9 372.3c-11.3 14.2-38.8 24.3-38.8 24.3L327 470.2v-54.3l150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4-13.9-4.6-39.1-3.3-56.2 2.9L327 381.1v-56.4c23.2-7.8 47.1-13.6 75.7-16.8 40.9-4.5 90.9.6 130.2 15.5 44.2 14 49.2 34.7 38 48.9zm-224.4-92.5v-139c0-16.3-3-31.3-18.3-35.6-11.7-3.8-19 7.1-19 23.4v347.9l-93.8-29.8V32c39.9 7.4 98 24.9 129.2 35.4C424.1 94.7 451 128.7 451 205.2c0 74.5-46 102.8-104.5 74.6zM43.2 410.2c-45.4-12.8-53-39.5-32.3-54.8 19.1-14.2 51.7-24.9 51.7-24.9l134.5-47.8v54.5l-96.8 34.6c-17.1 6.1-19.7 14.8-5.8 19.4 13.9 4.6 39.1 3.3 56.2-2.9l46.4-16.9v48.8c-51.6 9.3-101.4 7.3-153.9-10z",
        },
      },
    ],
  })(e);
}
function l7(e) {
  return kn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z",
        },
      },
    ],
  })(e);
}
function u7(e) {
  return kn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43C189 40.5 251 77.5 255.6 78.4c.7.1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z",
        },
      },
    ],
  })(e);
}
function c7(e) {
  return kn({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
      {
        tag: "path",
        attr: {
          d: "M15.5 1h-8A2.5 2.5 0 005 3.5v17A2.5 2.5 0 007.5 23h8a2.5 2.5 0 002.5-2.5v-17A2.5 2.5 0 0015.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z",
        },
      },
    ],
  })(e);
}
function d7(e) {
  return kn({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      { tag: "title", attr: {}, child: [] },
      {
        tag: "path",
        attr: { d: "M0 .6h7.1l9.85 15.9V.6H24v22.8h-7.04L7.06 7.5v15.9H0V.6" },
      },
    ],
  })(e);
}
const f7 = ({ platforms: e }) => {
    const t = {
      pc: l7,
      playstation: a7,
      xbox: u7,
      mac: i7,
      linux: s7,
      android: o7,
      ios: c7,
      nintendo: d7,
      web: Ij,
    };
    return k.jsx(Ur, {
      marginY: 1,
      children: e.map((n) =>
        k.jsx(Lo, { as: t[n.slug], color: "gray.500" }, n.id)
      ),
    });
  },
  p7 = ({ score: e }) => {
    const t = e > 75 ? "green" : e > 60 ? "yellow" : "";
    return k.jsx(L2, {
      colorScheme: t,
      paddingX: 2,
      borderRadius: "4px",
      fontSize: "14px",
      children: e,
    });
  },
  h7 = "/game-hub/assets/no-image-placeholder-6f3882e0.webp",
  kk = (e) => {
    if (!e) return h7;
    const t = "media/",
      n = e.indexOf(t) + t.length;
    return e.slice(0, n) + "crop/600/400/" + e.slice(n);
  },
  m7 = "/game-hub/assets/bulls-eye-d37f7fe5.webp",
  g7 =
    "data:image/webp;base64,UklGRtoLAABXRUJQVlA4WAoAAAAQAAAAnwAAnwAAQUxQSDwEAAABoMIAFNvGejIw6AgyuhWUoNyKgiKjSiYpMoiKosJWDbrRcTPo/p6mjYpWlNu7sL29995R9975Knqkd37P8Xv6MCImAMI13nKwUCi0J01QqeM9w+9+6nX04Yyiz9EWZRxAwpKliSNIOuvoIYXUB9Twggx/VUIKGT0d/MqBR1RQZkFHA8M8VUsB/Tx4QwFHmNCVz+aqyGcuMGFOPDjP9Uy+A1yYEi/F5olnVrkq4sENLkyK57EdES/Hdl683WwfxTMXuHCbdHCDLSmex5YRL8fmipdkaxHPqnLlxIMXXK58w1wZ+TwuW74jXHHxjBzTRkQ8yDJ9BO2cVkAr0ykFHGFyFFDm2axTwBjPCMhvI29BAWWmtHwW8k4b8h1hKoH8Y0wd8jnInJbvBtOmJZ2xG5knQfwbXA/Fc5F7RDqjqp1+ZH8oXBb5FwzRLAxiTLRngchJ1o+BvCHYEQxok1guBnUhJpSNwa1mRdpdDRBif0ye2AIGvLhbmG0LGPxyRhKrgjX54oAlxbYK1upa2TUliC9gLY95GQPMyLZoLGXbTsbNZt2MY++ORkJk2wLWeuXF2Ow6+l57UT7imKGwrYIhPuZFa8+qYLhX87VWV8HQL9bYCxTwfE0No4inuKyISVdEIXdz1P36aX127NOz0VJv4WCLk4xbdT+SRymfMcTG0Pf67Kcbl3t/PdLqpjIop0MWXUclnqcyZ1CLCybRDdTjbpp2VKRLYqEmW0luqCJL4aAqbYp3qqjWEdioyn4gvKaLOME2VGU/EB5UxaRJcVcTG3Eg3IaKfB8DynZF9JlAOqSFtYsZIB7TwqsoEG9DPZ5O0DiKQPyJpFsV+NAi8HSBFdPfNWXgDX9PtYF5P+aYOtD0sQ31mfeRVMgNH45CFny0qKddIRs/ZnRrB7z/YT76GFJI0cc1hTRp5xn4vKePhJ+n6ugA5fwEyukE3QyngfCuHuYvukB6TQ+dQDykh3mXyNMDYhNNtybW6khaNIH9JElV4G6KyH+qKFPAXVVghKJXFw5Fuy7yFHFd/EkB79TTq4pTJI4q8iTGlCZsEuhVRLWOxlZEEYin9GBRHVRDDqjrtNAJ9AUVTDcDozkj3/vOOmC1hZsuZQ3gLkhWTEcgiMOCXYWA3gjKZghhX0CMG3yVYa+jaVt6PnwwEQyAfoaV+32dbsyALaOvw6cUFMhvUqzc7+tIW/DjxunQ2agLCkRP+3hdbEtHgLQzbNANDIBd2qpyseBGwTAMIE6/DplCgACiHX1ebrcB7CfC5c9ABTd6WjsA6dPhUQgpgERxLSTc0AKwTrwKBSvEAKC5uFJzDyHcDcNqu7pSW27IbWk1F1/VznuQMtrcVrz6aiV481ExtrYSabet86fi6dP3779+/z4AFy2Q3R1hGmkC6Q1IdFycpnr4ZwpUaICRyBVKDz8uf29j8uH5U7k46NEAMCDwVlA4IHgHAADQLwCdASqgAKAAPpFAmUgltKghLTcKspASCWIAzupZ3B6C/t/7Zzg3VPiL2VeTslLr+8qdV/zAP1u6eHmF84X+4/pL7k/QA/qvUOegB/Cv8p6aXsZ/u2614f6In1yf8dva0Ah5ljbWR9wfd85zhfhUOW1Xh+/6FRof/vcPUh1BEhZzHWsbmQh/GacBYFuLol1ipwV+CLX4oHAgrby/z/gXPkP9J4c3xp2zGatn6imFuWnZekyUdUCXZBEyXl2USSD/jglwb8jzRKDCOopi5Q6KnQCc2f+mB9Bi1UBmkFE9Kv67zmfmFLLu/gZMyy/ei0Fp8ZQpLIy8mCTwEQpY9FnP+3HAnKdbOiyaj3j40GYFo55YRsfy2FiZ7ykZOZmAjTwsD+JjZx3IvZzeeUWfVe5NPUkKyvXtFJpQVYxgEK0s1pStE8SjgzdT9tYZ4utvzH9IUmOo1MJn2kkgrTMW8aNGcoTS7oO/Hqy7a4LEdhThbepB01V/nTP1UQ9Di5ttnvY4sGwpFkmAAP7uQxbunCbv3SI+AIn3R8TqVjpsFFwCpb/hkPxu/KukYLSxf++mpB6W7Q28fk3IoV6WUHDK5fpNbf8DUk+DLvAmesB7LzDERww0DXSBQyy/OUNgvim26ZtdmqVTr58fgufsMKJBGoQjCIR0s1Q3dYu3/ddm/XWcvwiSSh5jPwEsuAAD5ug1xxQEysNygvol1L7do7dNGp89vGtlWCL265zjDg7qYEvSZcP6EnsLO52v7ANADcit01HxxNfg8yqbNRQxRDtlyGQAAARljEjP48pWn7Vl1M2vKEDcoGmDj93kBxY2AYBcQNMdPHSlfKy7xoeI5diX9t3CHT85bJXXlAB8S3mYy/AAAKv1xiffhzbSI36p9One1h4TIuROrRnqh+lfD2st+4Yx5dtqN5Z2VukJeTFoRsf35oLvNqMwMgdYyILJXkSf/M6t74owIG0zvxsp8psRZZxw0HrnTGzk2Jmg5TE6Ic2/xdVoGoNWy/3Cd53QPK590R+Auf4RBgAPL1G3jcgfYCi2CUKwDWf5WhIoXSRWv5jqu+VXEYhi9SMnLuTHKrRc2mu3lj4zx3UqNjAd7FmKplpag2x4p3zp+Z7fkW2o5ThTcav6uKzTIZh7vuPpB9/ZCZeXZtWfeDTsKYQL/2VrYJEzdbidMv6BB55xX95lqYU+GruSbhdMPiZRRcXCoZhLsHDuzNnN6LN09tzhzS8EB7rU1SSVeSRKBEQZu44YL9uOmhnLSKqmm8l9AXVJVacevYBJI2xs4F3nCSxo3pQVTiAfxpwX07OLC6DWvQx2H9N2teF3CtzNLgRbghtKWflqyvbWzHv1TdhH6VybEt9TnpsukMnrjjpH04dAHUCfs7fNUfqMLGgR4hVyVs8/dCWoxRbFeS4LhevCMcgJ/a8Sx3YwlV13FOlcq+hqcgbOj8cMvwjXhTdbaF+Cuqc5Vn5KFR5nYYN2UtM01hVkuc+tnU4NBGRMSJGef/sEfto71A+QgEwY8P0ev3cAoMjtJURjfGYiwJ9653CcCbVxYPUApI8Lb8FHavM8/HqSALIk3R9jrofFo4qX+LY7kHBS0I4KtVqdfYjNskRhY/PcOBZvMmwseGbHg43DOu/8y1pxIzB99nZAtcI1SbLmAX28h4ZyPf74GNDmLI5cCRnTBVqBiw5Lk2U8xeSVtglLZxgxPktmCcsV2AKHRbYsJ3OgxntvHOIWpsLTkjJDr00CoxQF2n+9RcmjaVDExIdBfOUHx0hkk7YFQaX0sl8yuslJ3stNIQJtV4Ti9OhE5efYBhGZvfn8TYyS9IDBXEriV/B9Zb/4i+rNC7gVTPc5myeNH6pur//oFiPwvf5Tad4RS+uCuNMNoC8s+vw7W0wRl4mLTTMb1DRP1FbuuBF0d0MMAmMzwEV2v0scIshuRZ0+gPXImdefPSzL10+Vk5kkAhOVMy3k53yCY7+dM8w6og35BH8cG4yoGMfs6tW2ojGIkhQTyJxNBET5KbdUrry8q1YoTInRmXzLfsMnESnfdOZttMmhrUALj2cEH4/yTR8xkocNLwjJsXVxXXck0TU1RF2sUK9cotX9bpxMzJeovJxwpNvaDiXPKK9Rq73gdHN67Ure8/zClVZIRXR7YQwZL4nfpPk4Zy7M9trXv7zuIH/4BzsyebIsa9Eu5CMH8Lqbq2nGMG+iat0AfcoP6uzafgKG9j+z/Lt+xFVc5tL29gUmFDhufRm0YolO1tJKRqPcHgYtt/hAbXQhoMIjSciieecO82prFObKK6fiw/OqOrc1/zfAgJV3O0t1aHGZZmhkw41o29afMCNbTLmp4DAFye8WycuUD6Hm7vBStRrTDl0fCaK5qWqOCwQuOVK0EML+Kujm0i/C3dcnm+8DJSZHGJbrFtOek7VsE47zy6Xlm6pn7ggO1f668YwSF+IFebpFzi0jK6/0TRU5qN/7twfblkgk8ZnXVLrG8hJ24vVlIuYFlGZtY1RgILsWKZCvY79FIwWXi3VgW9smH2ZES+5GdyPNBTSH3/QPtR+C0AAA",
  v7 = "/game-hub/assets/meh-e338422f.webp",
  y7 = ({ rating: e }) => {
    const t = {
      3: { src: v7, alt: "meh", boxSize: "25px" },
      4: { src: g7, alt: "recommended", boxSize: "25px" },
      5: { src: m7, alt: "exceptional", boxSize: "35px" },
    };
    return k.jsx(za, { ...t[e], marginTop: 1 });
  },
  b7 = ({ game: e }) =>
    k.jsxs(b2, {
      children: [
        k.jsx(za, { src: kk(e.background_image) }),
        k.jsxs(y2, {
          children: [
            k.jsxs(Ur, {
              justifyContent: "space-between",
              marginBottom: 3,
              children: [
                k.jsx(f7, {
                  platforms: e.parent_platforms.map((t) => t.platform),
                }),
                k.jsx(p7, { score: e.metacritic }),
              ],
            }),
            k.jsxs(Wc, {
              fontSize: "2xl",
              children: [e.name, k.jsx(y7, { rating: e.rating_top })],
            }),
          ],
        }),
      ],
    }),
  x7 = () =>
    k.jsxs(b2, {
      children: [
        k.jsx(Gc, { height: "200px" }),
        k.jsx(y2, { children: k.jsx(o0, {}) }),
      ],
    }),
  P1 = ({ children: e }) =>
    k.jsx(Hc, { borderRadius: 10, overflow: "hidden", children: e }),
  S7 = ({ gameQuery: e }) => {
    const { data: t, error: n, isLoading: r } = r7(e),
      o = [1, 2, 3, 4, 5, 6];
    return k.jsxs(k.Fragment, {
      children: [
        n && k.jsx(Gm, { children: n }),
        k.jsxs($2, {
          columns: { sm: 1, md: 2, lg: 3, xl: 4 },
          padding: "10px",
          spacing: 5,
          children: [
            r && o.map((i) => k.jsx(P1, { children: k.jsx(x7, {}) }, i)),
            t.map((i) => k.jsx(P1, { children: k.jsx(b7, { game: i }) }, i.id)),
          ],
        }),
      ],
    });
  },
  w7 = () => c0("/genres"),
  k7 = ({ selectedGenre: e, onSelectGenre: t }) => {
    const { data: n, isLoading: r } = w7(),
      o = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return k.jsxs(k.Fragment, {
      children: [
        k.jsx(Wc, { fontSize: "2xl", marginBottom: 3, children: "Genre" }),
        k.jsxs(Nc, {
          children: [
            r &&
              o.map((i) =>
                k.jsx(
                  Up,
                  {
                    paddingY: "5px",
                    children: k.jsxs(Ur, {
                      children: [
                        k.jsx(Gc, {
                          height: "32px",
                          borderRadius: 5,
                          width: "32px",
                        }),
                        k.jsx(o0, {
                          noOfLines: 2,
                          height: "32px",
                          borderRadius: 5,
                          flexGrow: "100",
                        }),
                      ],
                    }),
                  },
                  i
                )
              ),
            n.map((i) =>
              k.jsx(
                Up,
                {
                  paddingY: "5px",
                  children: k.jsxs(Ur, {
                    children: [
                      k.jsx(za, {
                        objectFit: "cover",
                        boxSize: "32px",
                        borderRadius: 8,
                        src: kk(i.image_background),
                      }),
                      k.jsx(Fc, {
                        whiteSpace: "normal",
                        textAlign: "left",
                        fontWeight:
                          (e == null ? void 0 : e.id) === i.id
                            ? "bold"
                            : "normal",
                        onClick: () => t(i),
                        variant: "link",
                        fontSize: "lg",
                        children: i.name,
                      }),
                    ],
                  }),
                },
                i.id
              )
            ),
          ],
        }),
      ],
    });
  },
  C7 = () => c0("/platforms/lists/parents"),
  E7 = ({ onSelectPlatform: e, selectedPlatform: t }) => {
    const { data: n, error: r } = C7();
    return r
      ? null
      : k.jsxs(e0, {
          children: [
            k.jsx(r0, {
              as: Fc,
              rightIcon: k.jsx(ek, {}),
              children: (t == null ? void 0 : t.name) || "Platform",
            }),
            k.jsx(n0, {
              children: n.map((o) =>
                k.jsx(t0, { onClick: () => e(o), children: o.slug }, o.id)
              ),
            }),
          ],
        });
  },
  _7 = ({ onSelectSortOrder: e, sortOrder: t }) => {
    var o;
    const n = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" },
      ],
      r = (o = n.find((i) => i.value === t)) == null ? void 0 : o.label;
    return k.jsxs(e0, {
      children: [
        k.jsxs(r0, {
          as: Fc,
          rightIcon: k.jsx(ek, {}),
          children: ["Order by: ", r || "Relevance"],
        }),
        k.jsx(n0, {
          children: n.map((i) =>
            k.jsx(t0, { onClick: () => e(i.value), children: i.label }, i.value)
          ),
        }),
      ],
    });
  },
  P7 = ({ gameQuery: e }) => {
    var n, r;
    const t = `
  ${((n = e.platform) == null ? void 0 : n.name) || ""} 
  ${((r = e.genre) == null ? void 0 : r.name) || ""} 
  Games
  `;
    return k.jsx(Wc, {
      as: "h1",
      fontSize: "5xl",
      marginBottom: 5,
      children: t,
    });
  };
function T7() {
  const [e, t] = x.useState({});
  return k.jsxs(Um, {
    templateAreas: { base: '"nav" "main"', lg: '"nav nav" "aside main"' },
    templateColumns: { base: "1fr", lg: "200px 1fr" },
    children: [
      k.jsx(tu, {
        area: "nav",
        children: k.jsx(Fj, { onSearch: (n) => t({ ...e, searchText: n }) }),
      }),
      k.jsx(D2, {
        above: "lg",
        children: k.jsx(tu, {
          area: "aside",
          paddingX: 5,
          children: k.jsx(k7, {
            selectedGenre: e.genre,
            onSelectGenre: (n) => t({ ...e, genre: n }),
          }),
        }),
      }),
      k.jsxs(tu, {
        area: "main",
        children: [
          k.jsxs(Hc, {
            paddingLeft: 2,
            children: [
              k.jsx(P7, { gameQuery: e }),
              k.jsxs(Ur, {
                marginBottom: 5,
                children: [
                  k.jsx(E7, {
                    selectedPlatform: e.platform,
                    onSelectPlatform: (n) => t({ ...e, platform: n }),
                  }),
                  k.jsx(_7, {
                    sortOrder: e.sortOrder,
                    onSelectSortOrder: (n) => t({ ...e, sortOrder: n }),
                  }),
                ],
              }),
            ],
          }),
          k.jsx(S7, { gameQuery: e }),
        ],
      }),
    ],
  });
}
const A7 = { initialColorMode: "dark" },
  T1 = oM({
    config: A7,
    colors: {
      gray: {
        50: "#f9f9f9",
        100: "#ededed",
        200: "#d3d3d3",
        300: "#d3d3d3",
        400: "#a0a0a0",
        500: "#898989",
        600: "#6c6c6c",
        700: "#202020",
        800: "#121212",
        900: "#111",
      },
    },
  });
Sf.createRoot(document.getElementById("root")).render(
  k.jsx(Lt.StrictMode, {
    children: k.jsxs(xI, {
      theme: T1,
      children: [
        k.jsx(f4, { initialColorMode: T1.config.initialColorMode }),
        k.jsx(T7, {}),
      ],
    }),
  })
);
