var __dom_testing_library__ = (function (exports) {
  'use strict'

  var commonjsGlobal =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : typeof self !== 'undefined'
      ? self
      : {}

  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default')
      ? x['default']
      : x
  }

  function createCommonjsModule(fn, basedir, module) {
    return (
      (module = {
        path: basedir,
        exports: {},
        require: function (path, base) {
          return commonjsRequire(path, base === undefined || base === null ? module.path : base)
        },
      }),
      fn(module, module.exports),
      module.exports
    )
  }

  function commonjsRequire() {
    throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs')
  }

  var interopRequireDefault = createCommonjsModule(function (module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule
        ? obj
        : {
            default: obj,
          }
    }

    module.exports = _interopRequireDefault
  })

  var colorName = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50],
  }

  /* MIT license */
  /* eslint-disable no-mixed-operators */

  // NOTE: conversions should only return primitive values (i.e. arrays, or
  //       values that give correct `typeof` results).
  //       do not use box values types (i.e. Number(), String(), etc.)

  const reverseKeywords = {}
  for (const key of Object.keys(colorName)) {
    reverseKeywords[colorName[key]] = key
  }

  const convert = {
    rgb: {channels: 3, labels: 'rgb'},
    hsl: {channels: 3, labels: 'hsl'},
    hsv: {channels: 3, labels: 'hsv'},
    hwb: {channels: 3, labels: 'hwb'},
    cmyk: {channels: 4, labels: 'cmyk'},
    xyz: {channels: 3, labels: 'xyz'},
    lab: {channels: 3, labels: 'lab'},
    lch: {channels: 3, labels: 'lch'},
    hex: {channels: 1, labels: ['hex']},
    keyword: {channels: 1, labels: ['keyword']},
    ansi16: {channels: 1, labels: ['ansi16']},
    ansi256: {channels: 1, labels: ['ansi256']},
    hcg: {channels: 3, labels: ['h', 'c', 'g']},
    apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
    gray: {channels: 1, labels: ['gray']},
  }

  var conversions = convert

  // Hide .channels and .labels properties
  for (const model of Object.keys(convert)) {
    if (!('channels' in convert[model])) {
      throw new Error('missing channels property: ' + model)
    }

    if (!('labels' in convert[model])) {
      throw new Error('missing channel labels property: ' + model)
    }

    if (convert[model].labels.length !== convert[model].channels) {
      throw new Error('channel and label counts mismatch: ' + model)
    }

    const {channels, labels} = convert[model]
    delete convert[model].channels
    delete convert[model].labels
    Object.defineProperty(convert[model], 'channels', {value: channels})
    Object.defineProperty(convert[model], 'labels', {value: labels})
  }

  convert.rgb.hsl = function (rgb) {
    const r = rgb[0] / 255
    const g = rgb[1] / 255
    const b = rgb[2] / 255
    const min = Math.min(r, g, b)
    const max = Math.max(r, g, b)
    const delta = max - min
    let h
    let s

    if (max === min) {
      h = 0
    } else if (r === max) {
      h = (g - b) / delta
    } else if (g === max) {
      h = 2 + (b - r) / delta
    } else if (b === max) {
      h = 4 + (r - g) / delta
    }

    h = Math.min(h * 60, 360)

    if (h < 0) {
      h += 360
    }

    const l = (min + max) / 2

    if (max === min) {
      s = 0
    } else if (l <= 0.5) {
      s = delta / (max + min)
    } else {
      s = delta / (2 - max - min)
    }

    return [h, s * 100, l * 100]
  }

  convert.rgb.hsv = function (rgb) {
    let rdif
    let gdif
    let bdif
    let h
    let s

    const r = rgb[0] / 255
    const g = rgb[1] / 255
    const b = rgb[2] / 255
    const v = Math.max(r, g, b)
    const diff = v - Math.min(r, g, b)
    const diffc = function (c) {
      return (v - c) / 6 / diff + 1 / 2
    }

    if (diff === 0) {
      h = 0
      s = 0
    } else {
      s = diff / v
      rdif = diffc(r)
      gdif = diffc(g)
      bdif = diffc(b)

      if (r === v) {
        h = bdif - gdif
      } else if (g === v) {
        h = 1 / 3 + rdif - bdif
      } else if (b === v) {
        h = 2 / 3 + gdif - rdif
      }

      if (h < 0) {
        h += 1
      } else if (h > 1) {
        h -= 1
      }
    }

    return [h * 360, s * 100, v * 100]
  }

  convert.rgb.hwb = function (rgb) {
    const r = rgb[0]
    const g = rgb[1]
    let b = rgb[2]
    const h = convert.rgb.hsl(rgb)[0]
    const w = (1 / 255) * Math.min(r, Math.min(g, b))

    b = 1 - (1 / 255) * Math.max(r, Math.max(g, b))

    return [h, w * 100, b * 100]
  }

  convert.rgb.cmyk = function (rgb) {
    const r = rgb[0] / 255
    const g = rgb[1] / 255
    const b = rgb[2] / 255

    const k = Math.min(1 - r, 1 - g, 1 - b)
    const c = (1 - r - k) / (1 - k) || 0
    const m = (1 - g - k) / (1 - k) || 0
    const y = (1 - b - k) / (1 - k) || 0

    return [c * 100, m * 100, y * 100, k * 100]
  }

  function comparativeDistance(x, y) {
    /*
			See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
		*/
    return (x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2 + (x[2] - y[2]) ** 2
  }

  convert.rgb.keyword = function (rgb) {
    const reversed = reverseKeywords[rgb]
    if (reversed) {
      return reversed
    }

    let currentClosestDistance = Infinity
    let currentClosestKeyword

    for (const keyword of Object.keys(colorName)) {
      const value = colorName[keyword]

      // Compute comparative distance
      const distance = comparativeDistance(rgb, value)

      // Check if its less, if so set as closest
      if (distance < currentClosestDistance) {
        currentClosestDistance = distance
        currentClosestKeyword = keyword
      }
    }

    return currentClosestKeyword
  }

  convert.keyword.rgb = function (keyword) {
    return colorName[keyword]
  }

  convert.rgb.xyz = function (rgb) {
    let r = rgb[0] / 255
    let g = rgb[1] / 255
    let b = rgb[2] / 255

    // Assume sRGB
    r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92
    g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92
    b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92

    const x = r * 0.4124 + g * 0.3576 + b * 0.1805
    const y = r * 0.2126 + g * 0.7152 + b * 0.0722
    const z = r * 0.0193 + g * 0.1192 + b * 0.9505

    return [x * 100, y * 100, z * 100]
  }

  convert.rgb.lab = function (rgb) {
    const xyz = convert.rgb.xyz(rgb)
    let x = xyz[0]
    let y = xyz[1]
    let z = xyz[2]

    x /= 95.047
    y /= 100
    z /= 108.883

    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116

    const l = 116 * y - 16
    const a = 500 * (x - y)
    const b = 200 * (y - z)

    return [l, a, b]
  }

  convert.hsl.rgb = function (hsl) {
    const h = hsl[0] / 360
    const s = hsl[1] / 100
    const l = hsl[2] / 100
    let t2
    let t3
    let val

    if (s === 0) {
      val = l * 255
      return [val, val, val]
    }

    if (l < 0.5) {
      t2 = l * (1 + s)
    } else {
      t2 = l + s - l * s
    }

    const t1 = 2 * l - t2

    const rgb = [0, 0, 0]
    for (let i = 0; i < 3; i++) {
      t3 = h + (1 / 3) * -(i - 1)
      if (t3 < 0) {
        t3++
      }

      if (t3 > 1) {
        t3--
      }

      if (6 * t3 < 1) {
        val = t1 + (t2 - t1) * 6 * t3
      } else if (2 * t3 < 1) {
        val = t2
      } else if (3 * t3 < 2) {
        val = t1 + (t2 - t1) * (2 / 3 - t3) * 6
      } else {
        val = t1
      }

      rgb[i] = val * 255
    }

    return rgb
  }

  convert.hsl.hsv = function (hsl) {
    const h = hsl[0]
    let s = hsl[1] / 100
    let l = hsl[2] / 100
    let smin = s
    const lmin = Math.max(l, 0.01)

    l *= 2
    s *= l <= 1 ? l : 2 - l
    smin *= lmin <= 1 ? lmin : 2 - lmin
    const v = (l + s) / 2
    const sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s)

    return [h, sv * 100, v * 100]
  }

  convert.hsv.rgb = function (hsv) {
    const h = hsv[0] / 60
    const s = hsv[1] / 100
    let v = hsv[2] / 100
    const hi = Math.floor(h) % 6

    const f = h - Math.floor(h)
    const p = 255 * v * (1 - s)
    const q = 255 * v * (1 - s * f)
    const t = 255 * v * (1 - s * (1 - f))
    v *= 255

    switch (hi) {
      case 0:
        return [v, t, p]
      case 1:
        return [q, v, p]
      case 2:
        return [p, v, t]
      case 3:
        return [p, q, v]
      case 4:
        return [t, p, v]
      case 5:
        return [v, p, q]
    }
  }

  convert.hsv.hsl = function (hsv) {
    const h = hsv[0]
    const s = hsv[1] / 100
    const v = hsv[2] / 100
    const vmin = Math.max(v, 0.01)
    let sl
    let l

    l = (2 - s) * v
    const lmin = (2 - s) * vmin
    sl = s * vmin
    sl /= lmin <= 1 ? lmin : 2 - lmin
    sl = sl || 0
    l /= 2

    return [h, sl * 100, l * 100]
  }

  // http://dev.w3.org/csswg/css-color/#hwb-to-rgb
  convert.hwb.rgb = function (hwb) {
    const h = hwb[0] / 360
    let wh = hwb[1] / 100
    let bl = hwb[2] / 100
    const ratio = wh + bl
    let f

    // Wh + bl cant be > 1
    if (ratio > 1) {
      wh /= ratio
      bl /= ratio
    }

    const i = Math.floor(6 * h)
    const v = 1 - bl
    f = 6 * h - i

    if ((i & 0x01) !== 0) {
      f = 1 - f
    }

    const n = wh + f * (v - wh) // Linear interpolation

    let r
    let g
    let b
    /* eslint-disable max-statements-per-line,no-multi-spaces */
    switch (i) {
      default:
      case 6:
      case 0:
        r = v
        g = n
        b = wh
        break
      case 1:
        r = n
        g = v
        b = wh
        break
      case 2:
        r = wh
        g = v
        b = n
        break
      case 3:
        r = wh
        g = n
        b = v
        break
      case 4:
        r = n
        g = wh
        b = v
        break
      case 5:
        r = v
        g = wh
        b = n
        break
    }
    /* eslint-enable max-statements-per-line,no-multi-spaces */

    return [r * 255, g * 255, b * 255]
  }

  convert.cmyk.rgb = function (cmyk) {
    const c = cmyk[0] / 100
    const m = cmyk[1] / 100
    const y = cmyk[2] / 100
    const k = cmyk[3] / 100

    const r = 1 - Math.min(1, c * (1 - k) + k)
    const g = 1 - Math.min(1, m * (1 - k) + k)
    const b = 1 - Math.min(1, y * (1 - k) + k)

    return [r * 255, g * 255, b * 255]
  }

  convert.xyz.rgb = function (xyz) {
    const x = xyz[0] / 100
    const y = xyz[1] / 100
    const z = xyz[2] / 100
    let r
    let g
    let b

    r = x * 3.2406 + y * -1.5372 + z * -0.4986
    g = x * -0.9689 + y * 1.8758 + z * 0.0415
    b = x * 0.0557 + y * -0.204 + z * 1.057

    // Assume sRGB
    r = r > 0.0031308 ? 1.055 * r ** (1.0 / 2.4) - 0.055 : r * 12.92

    g = g > 0.0031308 ? 1.055 * g ** (1.0 / 2.4) - 0.055 : g * 12.92

    b = b > 0.0031308 ? 1.055 * b ** (1.0 / 2.4) - 0.055 : b * 12.92

    r = Math.min(Math.max(0, r), 1)
    g = Math.min(Math.max(0, g), 1)
    b = Math.min(Math.max(0, b), 1)

    return [r * 255, g * 255, b * 255]
  }

  convert.xyz.lab = function (xyz) {
    let x = xyz[0]
    let y = xyz[1]
    let z = xyz[2]

    x /= 95.047
    y /= 100
    z /= 108.883

    x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116
    y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116
    z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116

    const l = 116 * y - 16
    const a = 500 * (x - y)
    const b = 200 * (y - z)

    return [l, a, b]
  }

  convert.lab.xyz = function (lab) {
    const l = lab[0]
    const a = lab[1]
    const b = lab[2]
    let x
    let y
    let z

    y = (l + 16) / 116
    x = a / 500 + y
    z = y - b / 200

    const y2 = y ** 3
    const x2 = x ** 3
    const z2 = z ** 3
    y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787
    x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787
    z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787

    x *= 95.047
    y *= 100
    z *= 108.883

    return [x, y, z]
  }

  convert.lab.lch = function (lab) {
    const l = lab[0]
    const a = lab[1]
    const b = lab[2]
    let h

    const hr = Math.atan2(b, a)
    h = (hr * 360) / 2 / Math.PI

    if (h < 0) {
      h += 360
    }

    const c = Math.sqrt(a * a + b * b)

    return [l, c, h]
  }

  convert.lch.lab = function (lch) {
    const l = lch[0]
    const c = lch[1]
    const h = lch[2]

    const hr = (h / 360) * 2 * Math.PI
    const a = c * Math.cos(hr)
    const b = c * Math.sin(hr)

    return [l, a, b]
  }

  convert.rgb.ansi16 = function (args, saturation = null) {
    const [r, g, b] = args
    let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation // Hsv -> ansi16 optimization

    value = Math.round(value / 50)

    if (value === 0) {
      return 30
    }

    let ansi = 30 + ((Math.round(b / 255) << 2) | (Math.round(g / 255) << 1) | Math.round(r / 255))

    if (value === 2) {
      ansi += 60
    }

    return ansi
  }

  convert.hsv.ansi16 = function (args) {
    // Optimization here; we already know the value and don't need to get
    // it converted for us.
    return convert.rgb.ansi16(convert.hsv.rgb(args), args[2])
  }

  convert.rgb.ansi256 = function (args) {
    const r = args[0]
    const g = args[1]
    const b = args[2]

    // We use the extended greyscale palette here, with the exception of
    // black and white. normal palette only has 4 greyscale shades.
    if (r === g && g === b) {
      if (r < 8) {
        return 16
      }

      if (r > 248) {
        return 231
      }

      return Math.round(((r - 8) / 247) * 24) + 232
    }

    const ansi =
      16 +
      36 * Math.round((r / 255) * 5) +
      6 * Math.round((g / 255) * 5) +
      Math.round((b / 255) * 5)

    return ansi
  }

  convert.ansi16.rgb = function (args) {
    let color = args % 10

    // Handle greyscale
    if (color === 0 || color === 7) {
      if (args > 50) {
        color += 3.5
      }

      color = (color / 10.5) * 255

      return [color, color, color]
    }

    const mult = (~~(args > 50) + 1) * 0.5
    const r = (color & 1) * mult * 255
    const g = ((color >> 1) & 1) * mult * 255
    const b = ((color >> 2) & 1) * mult * 255

    return [r, g, b]
  }

  convert.ansi256.rgb = function (args) {
    // Handle greyscale
    if (args >= 232) {
      const c = (args - 232) * 10 + 8
      return [c, c, c]
    }

    args -= 16

    let rem
    const r = (Math.floor(args / 36) / 5) * 255
    const g = (Math.floor((rem = args % 36) / 6) / 5) * 255
    const b = ((rem % 6) / 5) * 255

    return [r, g, b]
  }

  convert.rgb.hex = function (args) {
    const integer =
      ((Math.round(args[0]) & 0xff) << 16) +
      ((Math.round(args[1]) & 0xff) << 8) +
      (Math.round(args[2]) & 0xff)

    const string = integer.toString(16).toUpperCase()
    return '000000'.substring(string.length) + string
  }

  convert.hex.rgb = function (args) {
    const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i)
    if (!match) {
      return [0, 0, 0]
    }

    let colorString = match[0]

    if (match[0].length === 3) {
      colorString = colorString
        .split('')
        .map(char => {
          return char + char
        })
        .join('')
    }

    const integer = parseInt(colorString, 16)
    const r = (integer >> 16) & 0xff
    const g = (integer >> 8) & 0xff
    const b = integer & 0xff

    return [r, g, b]
  }

  convert.rgb.hcg = function (rgb) {
    const r = rgb[0] / 255
    const g = rgb[1] / 255
    const b = rgb[2] / 255
    const max = Math.max(Math.max(r, g), b)
    const min = Math.min(Math.min(r, g), b)
    const chroma = max - min
    let grayscale
    let hue

    if (chroma < 1) {
      grayscale = min / (1 - chroma)
    } else {
      grayscale = 0
    }

    if (chroma <= 0) {
      hue = 0
    } else if (max === r) {
      hue = ((g - b) / chroma) % 6
    } else if (max === g) {
      hue = 2 + (b - r) / chroma
    } else {
      hue = 4 + (r - g) / chroma
    }

    hue /= 6
    hue %= 1

    return [hue * 360, chroma * 100, grayscale * 100]
  }

  convert.hsl.hcg = function (hsl) {
    const s = hsl[1] / 100
    const l = hsl[2] / 100

    const c = l < 0.5 ? 2.0 * s * l : 2.0 * s * (1.0 - l)

    let f = 0
    if (c < 1.0) {
      f = (l - 0.5 * c) / (1.0 - c)
    }

    return [hsl[0], c * 100, f * 100]
  }

  convert.hsv.hcg = function (hsv) {
    const s = hsv[1] / 100
    const v = hsv[2] / 100

    const c = s * v
    let f = 0

    if (c < 1.0) {
      f = (v - c) / (1 - c)
    }

    return [hsv[0], c * 100, f * 100]
  }

  convert.hcg.rgb = function (hcg) {
    const h = hcg[0] / 360
    const c = hcg[1] / 100
    const g = hcg[2] / 100

    if (c === 0.0) {
      return [g * 255, g * 255, g * 255]
    }

    const pure = [0, 0, 0]
    const hi = (h % 1) * 6
    const v = hi % 1
    const w = 1 - v
    let mg = 0

    /* eslint-disable max-statements-per-line */
    switch (Math.floor(hi)) {
      case 0:
        pure[0] = 1
        pure[1] = v
        pure[2] = 0
        break
      case 1:
        pure[0] = w
        pure[1] = 1
        pure[2] = 0
        break
      case 2:
        pure[0] = 0
        pure[1] = 1
        pure[2] = v
        break
      case 3:
        pure[0] = 0
        pure[1] = w
        pure[2] = 1
        break
      case 4:
        pure[0] = v
        pure[1] = 0
        pure[2] = 1
        break
      default:
        pure[0] = 1
        pure[1] = 0
        pure[2] = w
    }
    /* eslint-enable max-statements-per-line */

    mg = (1.0 - c) * g

    return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255]
  }

  convert.hcg.hsv = function (hcg) {
    const c = hcg[1] / 100
    const g = hcg[2] / 100

    const v = c + g * (1.0 - c)
    let f = 0

    if (v > 0.0) {
      f = c / v
    }

    return [hcg[0], f * 100, v * 100]
  }

  convert.hcg.hsl = function (hcg) {
    const c = hcg[1] / 100
    const g = hcg[2] / 100

    const l = g * (1.0 - c) + 0.5 * c
    let s = 0

    if (l > 0.0 && l < 0.5) {
      s = c / (2 * l)
    } else if (l >= 0.5 && l < 1.0) {
      s = c / (2 * (1 - l))
    }

    return [hcg[0], s * 100, l * 100]
  }

  convert.hcg.hwb = function (hcg) {
    const c = hcg[1] / 100
    const g = hcg[2] / 100
    const v = c + g * (1.0 - c)
    return [hcg[0], (v - c) * 100, (1 - v) * 100]
  }

  convert.hwb.hcg = function (hwb) {
    const w = hwb[1] / 100
    const b = hwb[2] / 100
    const v = 1 - b
    const c = v - w
    let g = 0

    if (c < 1) {
      g = (v - c) / (1 - c)
    }

    return [hwb[0], c * 100, g * 100]
  }

  convert.apple.rgb = function (apple) {
    return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255]
  }

  convert.rgb.apple = function (rgb) {
    return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535]
  }

  convert.gray.rgb = function (args) {
    return [(args[0] / 100) * 255, (args[0] / 100) * 255, (args[0] / 100) * 255]
  }

  convert.gray.hsl = function (args) {
    return [0, 0, args[0]]
  }

  convert.gray.hsv = convert.gray.hsl

  convert.gray.hwb = function (gray) {
    return [0, 100, gray[0]]
  }

  convert.gray.cmyk = function (gray) {
    return [0, 0, 0, gray[0]]
  }

  convert.gray.lab = function (gray) {
    return [gray[0], 0, 0]
  }

  convert.gray.hex = function (gray) {
    const val = Math.round((gray[0] / 100) * 255) & 0xff
    const integer = (val << 16) + (val << 8) + val

    const string = integer.toString(16).toUpperCase()
    return '000000'.substring(string.length) + string
  }

  convert.rgb.gray = function (rgb) {
    const val = (rgb[0] + rgb[1] + rgb[2]) / 3
    return [(val / 255) * 100]
  }

  /*
		This function routes a model to all other models.

		all functions that are routed have a property `.conversion` attached
		to the returned synthetic function. This property is an array
		of strings, each with the steps in between the 'from' and 'to'
		color models (inclusive).

		conversions that are not possible simply are not included.
	*/

  function buildGraph() {
    const graph = {}
    // https://jsperf.com/object-keys-vs-for-in-with-closure/3
    const models = Object.keys(conversions)

    for (let len = models.length, i = 0; i < len; i++) {
      graph[models[i]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null,
      }
    }

    return graph
  }

  // https://en.wikipedia.org/wiki/Breadth-first_search
  function deriveBFS(fromModel) {
    const graph = buildGraph()
    const queue = [fromModel] // Unshift -> queue -> pop

    graph[fromModel].distance = 0

    while (queue.length) {
      const current = queue.pop()
      const adjacents = Object.keys(conversions[current])

      for (let len = adjacents.length, i = 0; i < len; i++) {
        const adjacent = adjacents[i]
        const node = graph[adjacent]

        if (node.distance === -1) {
          node.distance = graph[current].distance + 1
          node.parent = current
          queue.unshift(adjacent)
        }
      }
    }

    return graph
  }

  function link(from, to) {
    return function (args) {
      return to(from(args))
    }
  }

  function wrapConversion(toModel, graph) {
    const path = [graph[toModel].parent, toModel]
    let fn = conversions[graph[toModel].parent][toModel]

    let cur = graph[toModel].parent
    while (graph[cur].parent) {
      path.unshift(graph[cur].parent)
      fn = link(conversions[graph[cur].parent][cur], fn)
      cur = graph[cur].parent
    }

    fn.conversion = path
    return fn
  }

  var route = function (fromModel) {
    const graph = deriveBFS(fromModel)
    const conversion = {}

    const models = Object.keys(graph)
    for (let len = models.length, i = 0; i < len; i++) {
      const toModel = models[i]
      const node = graph[toModel]

      if (node.parent === null) {
        // No possible conversion, or this node is the source model.
        continue
      }

      conversion[toModel] = wrapConversion(toModel, graph)
    }

    return conversion
  }

  const convert$1 = {}

  const models = Object.keys(conversions)

  function wrapRaw(fn) {
    const wrappedFn = function (...args) {
      const arg0 = args[0]
      if (arg0 === undefined || arg0 === null) {
        return arg0
      }

      if (arg0.length > 1) {
        args = arg0
      }

      return fn(args)
    }

    // Preserve .conversion property if there is one
    if ('conversion' in fn) {
      wrappedFn.conversion = fn.conversion
    }

    return wrappedFn
  }

  function wrapRounded(fn) {
    const wrappedFn = function (...args) {
      const arg0 = args[0]

      if (arg0 === undefined || arg0 === null) {
        return arg0
      }

      if (arg0.length > 1) {
        args = arg0
      }

      const result = fn(args)

      // We're assuming the result is an array here.
      // see notice in conversions.js; don't use box types
      // in conversion functions.
      if (typeof result === 'object') {
        for (let len = result.length, i = 0; i < len; i++) {
          result[i] = Math.round(result[i])
        }
      }

      return result
    }

    // Preserve .conversion property if there is one
    if ('conversion' in fn) {
      wrappedFn.conversion = fn.conversion
    }

    return wrappedFn
  }

  models.forEach(fromModel => {
    convert$1[fromModel] = {}

    Object.defineProperty(convert$1[fromModel], 'channels', {
      value: conversions[fromModel].channels,
    })
    Object.defineProperty(convert$1[fromModel], 'labels', {value: conversions[fromModel].labels})

    const routes = route(fromModel)
    const routeModels = Object.keys(routes)

    routeModels.forEach(toModel => {
      const fn = routes[toModel]

      convert$1[fromModel][toModel] = wrapRounded(fn)
      convert$1[fromModel][toModel].raw = wrapRaw(fn)
    })
  })

  var colorConvert = convert$1

  var ansiStyles = createCommonjsModule(function (module) {
    const wrapAnsi16 = (fn, offset) => (...args) => {
      const code = fn(...args)
      return `\u001B[${code + offset}m`
    }

    const wrapAnsi256 = (fn, offset) => (...args) => {
      const code = fn(...args)
      return `\u001B[${38 + offset};5;${code}m`
    }

    const wrapAnsi16m = (fn, offset) => (...args) => {
      const rgb = fn(...args)
      return `\u001B[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`
    }

    const ansi2ansi = n => n
    const rgb2rgb = (r, g, b) => [r, g, b]

    const setLazyProperty = (object, property, get) => {
      Object.defineProperty(object, property, {
        get: () => {
          const value = get()

          Object.defineProperty(object, property, {
            value,
            enumerable: true,
            configurable: true,
          })

          return value
        },
        enumerable: true,
        configurable: true,
      })
    }

    /** @type {typeof import('color-convert')} */
    let colorConvert$1
    const makeDynamicStyles = (wrap, targetSpace, identity, isBackground) => {
      if (colorConvert$1 === undefined) {
        colorConvert$1 = colorConvert
      }

      const offset = isBackground ? 10 : 0
      const styles = {}

      for (const [sourceSpace, suite] of Object.entries(colorConvert$1)) {
        const name = sourceSpace === 'ansi16' ? 'ansi' : sourceSpace
        if (sourceSpace === targetSpace) {
          styles[name] = wrap(identity, offset)
        } else if (typeof suite === 'object') {
          styles[name] = wrap(suite[targetSpace], offset)
        }
      }

      return styles
    }

    function assembleStyles() {
      const codes = new Map()
      const styles = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29],
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],

          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39],
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],

          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49],
        },
      }

      // Alias bright black as gray (and grey)
      styles.color.gray = styles.color.blackBright
      styles.bgColor.bgGray = styles.bgColor.bgBlackBright
      styles.color.grey = styles.color.blackBright
      styles.bgColor.bgGrey = styles.bgColor.bgBlackBright

      for (const [groupName, group] of Object.entries(styles)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles[styleName] = {
            open: `\u001B[${style[0]}m`,
            close: `\u001B[${style[1]}m`,
          }

          group[styleName] = styles[styleName]

          codes.set(style[0], style[1])
        }

        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false,
        })
      }

      Object.defineProperty(styles, 'codes', {
        value: codes,
        enumerable: false,
      })

      styles.color.close = '\u001B[39m'
      styles.bgColor.close = '\u001B[49m'

      setLazyProperty(styles.color, 'ansi', () =>
        makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, false),
      )
      setLazyProperty(styles.color, 'ansi256', () =>
        makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, false),
      )
      setLazyProperty(styles.color, 'ansi16m', () =>
        makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, false),
      )
      setLazyProperty(styles.bgColor, 'ansi', () =>
        makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, true),
      )
      setLazyProperty(styles.bgColor, 'ansi256', () =>
        makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, true),
      )
      setLazyProperty(styles.bgColor, 'ansi16m', () =>
        makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, true),
      )

      return styles
    }

    // Make the export immutable
    Object.defineProperty(module, 'exports', {
      enumerable: true,
      get: assembleStyles,
    })
  })

  var collections = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.printIteratorEntries = printIteratorEntries
    exports.printIteratorValues = printIteratorValues
    exports.printListItems = printListItems
    exports.printObjectProperties = printObjectProperties

    /**
     * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     *
     */
    const getKeysOfEnumerableProperties = object => {
      const keys = Object.keys(object).sort()

      if (Object.getOwnPropertySymbols) {
        Object.getOwnPropertySymbols(object).forEach(symbol => {
          if (Object.getOwnPropertyDescriptor(object, symbol).enumerable) {
            keys.push(symbol)
          }
        })
      }

      return keys
    }
    /**
     * Return entries (for example, of a map)
     * with spacing, indentation, and comma
     * without surrounding punctuation (for example, braces)
     */

    function printIteratorEntries(
      iterator,
      config,
      indentation,
      depth,
      refs,
      printer, // Too bad, so sad that separator for ECMAScript Map has been ' => '
      // What a distracting diff if you change a data structure to/from
      // ECMAScript Object or Immutable.Map/OrderedMap which use the default.
      separator = ': ',
    ) {
      let result = ''
      let current = iterator.next()

      if (!current.done) {
        result += config.spacingOuter
        const indentationNext = indentation + config.indent

        while (!current.done) {
          const name = printer(current.value[0], config, indentationNext, depth, refs)
          const value = printer(current.value[1], config, indentationNext, depth, refs)
          result += indentationNext + name + separator + value
          current = iterator.next()

          if (!current.done) {
            result += ',' + config.spacingInner
          } else if (!config.min) {
            result += ','
          }
        }

        result += config.spacingOuter + indentation
      }

      return result
    }
    /**
     * Return values (for example, of a set)
     * with spacing, indentation, and comma
     * without surrounding punctuation (braces or brackets)
     */

    function printIteratorValues(iterator, config, indentation, depth, refs, printer) {
      let result = ''
      let current = iterator.next()

      if (!current.done) {
        result += config.spacingOuter
        const indentationNext = indentation + config.indent

        while (!current.done) {
          result += indentationNext + printer(current.value, config, indentationNext, depth, refs)
          current = iterator.next()

          if (!current.done) {
            result += ',' + config.spacingInner
          } else if (!config.min) {
            result += ','
          }
        }

        result += config.spacingOuter + indentation
      }

      return result
    }
    /**
     * Return items (for example, of an array)
     * with spacing, indentation, and comma
     * without surrounding punctuation (for example, brackets)
     **/

    function printListItems(list, config, indentation, depth, refs, printer) {
      let result = ''

      if (list.length) {
        result += config.spacingOuter
        const indentationNext = indentation + config.indent

        for (let i = 0; i < list.length; i++) {
          result += indentationNext + printer(list[i], config, indentationNext, depth, refs)

          if (i < list.length - 1) {
            result += ',' + config.spacingInner
          } else if (!config.min) {
            result += ','
          }
        }

        result += config.spacingOuter + indentation
      }

      return result
    }
    /**
     * Return properties of an object
     * with spacing, indentation, and comma
     * without surrounding punctuation (for example, braces)
     */

    function printObjectProperties(val, config, indentation, depth, refs, printer) {
      let result = ''
      const keys = getKeysOfEnumerableProperties(val)

      if (keys.length) {
        result += config.spacingOuter
        const indentationNext = indentation + config.indent

        for (let i = 0; i < keys.length; i++) {
          const key = keys[i]
          const name = printer(key, config, indentationNext, depth, refs)
          const value = printer(val[key], config, indentationNext, depth, refs)
          result += indentationNext + name + ': ' + value

          if (i < keys.length - 1) {
            result += ',' + config.spacingInner
          } else if (!config.min) {
            result += ','
          }
        }

        result += config.spacingOuter + indentation
      }

      return result
    }
  })

  var AsymmetricMatcher = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.default = exports.test = exports.serialize = void 0

    var Symbol = commonjsGlobal['jest-symbol-do-not-touch'] || commonjsGlobal.Symbol
    const asymmetricMatcher =
      typeof Symbol === 'function' && Symbol.for ? Symbol.for('jest.asymmetricMatcher') : 0x1357a5
    const SPACE = ' '

    const serialize = (val, config, indentation, depth, refs, printer) => {
      const stringedValue = val.toString()

      if (stringedValue === 'ArrayContaining' || stringedValue === 'ArrayNotContaining') {
        if (++depth > config.maxDepth) {
          return '[' + stringedValue + ']'
        }

        return (
          stringedValue +
          SPACE +
          '[' +
          (0, collections.printListItems)(val.sample, config, indentation, depth, refs, printer) +
          ']'
        )
      }

      if (stringedValue === 'ObjectContaining' || stringedValue === 'ObjectNotContaining') {
        if (++depth > config.maxDepth) {
          return '[' + stringedValue + ']'
        }

        return (
          stringedValue +
          SPACE +
          '{' +
          (0, collections.printObjectProperties)(
            val.sample,
            config,
            indentation,
            depth,
            refs,
            printer,
          ) +
          '}'
        )
      }

      if (stringedValue === 'StringMatching' || stringedValue === 'StringNotMatching') {
        return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs)
      }

      if (stringedValue === 'StringContaining' || stringedValue === 'StringNotContaining') {
        return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs)
      }

      return val.toAsymmetricMatcher()
    }

    exports.serialize = serialize

    const test = val => val && val.$$typeof === asymmetricMatcher

    exports.test = test
    const plugin = {
      serialize,
      test,
    }
    var _default = plugin
    exports.default = _default
  })

  var ansiRegex = ({onlyFirst = false} = {}) => {
    const pattern = [
      '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
      '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
    ].join('|')

    return new RegExp(pattern, onlyFirst ? undefined : 'g')
  }

  var ConvertAnsi = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.default = exports.serialize = exports.test = void 0

    var _ansiRegex = _interopRequireDefault(ansiRegex)

    var _ansiStyles = _interopRequireDefault(ansiStyles)

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj}
    }

    /**
     * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    const toHumanReadableAnsi = text =>
      text.replace((0, _ansiRegex.default)(), match => {
        switch (match) {
          case _ansiStyles.default.red.close:
          case _ansiStyles.default.green.close:
          case _ansiStyles.default.cyan.close:
          case _ansiStyles.default.gray.close:
          case _ansiStyles.default.white.close:
          case _ansiStyles.default.yellow.close:
          case _ansiStyles.default.bgRed.close:
          case _ansiStyles.default.bgGreen.close:
          case _ansiStyles.default.bgYellow.close:
          case _ansiStyles.default.inverse.close:
          case _ansiStyles.default.dim.close:
          case _ansiStyles.default.bold.close:
          case _ansiStyles.default.reset.open:
          case _ansiStyles.default.reset.close:
            return '</>'

          case _ansiStyles.default.red.open:
            return '<red>'

          case _ansiStyles.default.green.open:
            return '<green>'

          case _ansiStyles.default.cyan.open:
            return '<cyan>'

          case _ansiStyles.default.gray.open:
            return '<gray>'

          case _ansiStyles.default.white.open:
            return '<white>'

          case _ansiStyles.default.yellow.open:
            return '<yellow>'

          case _ansiStyles.default.bgRed.open:
            return '<bgRed>'

          case _ansiStyles.default.bgGreen.open:
            return '<bgGreen>'

          case _ansiStyles.default.bgYellow.open:
            return '<bgYellow>'

          case _ansiStyles.default.inverse.open:
            return '<inverse>'

          case _ansiStyles.default.dim.open:
            return '<dim>'

          case _ansiStyles.default.bold.open:
            return '<bold>'

          default:
            return ''
        }
      })

    const test = val => typeof val === 'string' && !!val.match((0, _ansiRegex.default)())

    exports.test = test

    const serialize = (val, config, indentation, depth, refs, printer) =>
      printer(toHumanReadableAnsi(val), config, indentation, depth, refs)

    exports.serialize = serialize
    const plugin = {
      serialize,
      test,
    }
    var _default = plugin
    exports.default = _default
  })

  var DOMCollection = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.default = exports.serialize = exports.test = void 0

    /**
     * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    const SPACE = ' '
    const OBJECT_NAMES = ['DOMStringMap', 'NamedNodeMap']
    const ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/

    const testName = name => OBJECT_NAMES.indexOf(name) !== -1 || ARRAY_REGEXP.test(name)

    const test = val =>
      val && val.constructor && !!val.constructor.name && testName(val.constructor.name)

    exports.test = test

    const isNamedNodeMap = collection => collection.constructor.name === 'NamedNodeMap'

    const serialize = (collection, config, indentation, depth, refs, printer) => {
      const name = collection.constructor.name

      if (++depth > config.maxDepth) {
        return '[' + name + ']'
      }

      return (
        (config.min ? '' : name + SPACE) +
        (OBJECT_NAMES.indexOf(name) !== -1
          ? '{' +
            (0, collections.printObjectProperties)(
              isNamedNodeMap(collection)
                ? Array.from(collection).reduce((props, attribute) => {
                    props[attribute.name] = attribute.value
                    return props
                  }, {})
                : {...collection},
              config,
              indentation,
              depth,
              refs,
              printer,
            ) +
            '}'
          : '[' +
            (0, collections.printListItems)(
              Array.from(collection),
              config,
              indentation,
              depth,
              refs,
              printer,
            ) +
            ']')
      )
    }

    exports.serialize = serialize
    const plugin = {
      serialize,
      test,
    }
    var _default = plugin
    exports.default = _default
  })

  var escapeHTML_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.default = escapeHTML

    /**
     * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    function escapeHTML(str) {
      return str.replace(/</g, '&lt;').replace(/>/g, '&gt;')
    }
  })

  var markup = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.printElementAsLeaf = exports.printElement = exports.printComment = exports.printText = exports.printChildren = exports.printProps = void 0

    var _escapeHTML = _interopRequireDefault(escapeHTML_1)

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj}
    }

    /**
     * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    // Return empty string if keys is empty.
    const printProps = (keys, props, config, indentation, depth, refs, printer) => {
      const indentationNext = indentation + config.indent
      const colors = config.colors
      return keys
        .map(key => {
          const value = props[key]
          let printed = printer(value, config, indentationNext, depth, refs)

          if (typeof value !== 'string') {
            if (printed.indexOf('\n') !== -1) {
              printed =
                config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation
            }

            printed = '{' + printed + '}'
          }

          return (
            config.spacingInner +
            indentation +
            colors.prop.open +
            key +
            colors.prop.close +
            '=' +
            colors.value.open +
            printed +
            colors.value.close
          )
        })
        .join('')
    } // Return empty string if children is empty.

    exports.printProps = printProps

    const printChildren = (children, config, indentation, depth, refs, printer) =>
      children
        .map(
          child =>
            config.spacingOuter +
            indentation +
            (typeof child === 'string'
              ? printText(child, config)
              : printer(child, config, indentation, depth, refs)),
        )
        .join('')

    exports.printChildren = printChildren

    const printText = (text, config) => {
      const contentColor = config.colors.content
      return contentColor.open + (0, _escapeHTML.default)(text) + contentColor.close
    }

    exports.printText = printText

    const printComment = (comment, config) => {
      const commentColor = config.colors.comment
      return (
        commentColor.open + '<!--' + (0, _escapeHTML.default)(comment) + '-->' + commentColor.close
      )
    } // Separate the functions to format props, children, and element,
    // so a plugin could override a particular function, if needed.
    // Too bad, so sad: the traditional (but unnecessary) space
    // in a self-closing tagColor requires a second test of printedProps.

    exports.printComment = printComment

    const printElement = (type, printedProps, printedChildren, config, indentation) => {
      const tagColor = config.colors.tag
      return (
        tagColor.open +
        '<' +
        type +
        (printedProps &&
          tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open) +
        (printedChildren
          ? '>' +
            tagColor.close +
            printedChildren +
            config.spacingOuter +
            indentation +
            tagColor.open +
            '</' +
            type
          : (printedProps && !config.min ? '' : ' ') + '/') +
        '>' +
        tagColor.close
      )
    }

    exports.printElement = printElement

    const printElementAsLeaf = (type, config) => {
      const tagColor = config.colors.tag
      return (
        tagColor.open + '<' + type + tagColor.close + ' …' + tagColor.open + ' />' + tagColor.close
      )
    }

    exports.printElementAsLeaf = printElementAsLeaf
  })

  var DOMElement = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.default = exports.serialize = exports.test = void 0

    /**
     * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    const ELEMENT_NODE = 1
    const TEXT_NODE = 3
    const COMMENT_NODE = 8
    const FRAGMENT_NODE = 11
    const ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/

    const testNode = (nodeType, name) =>
      (nodeType === ELEMENT_NODE && ELEMENT_REGEXP.test(name)) ||
      (nodeType === TEXT_NODE && name === 'Text') ||
      (nodeType === COMMENT_NODE && name === 'Comment') ||
      (nodeType === FRAGMENT_NODE && name === 'DocumentFragment')

    const test = val =>
      val && val.constructor && val.constructor.name && testNode(val.nodeType, val.constructor.name)

    exports.test = test

    function nodeIsText(node) {
      return node.nodeType === TEXT_NODE
    }

    function nodeIsComment(node) {
      return node.nodeType === COMMENT_NODE
    }

    function nodeIsFragment(node) {
      return node.nodeType === FRAGMENT_NODE
    }

    const serialize = (node, config, indentation, depth, refs, printer) => {
      if (nodeIsText(node)) {
        return (0, markup.printText)(node.data, config)
      }

      if (nodeIsComment(node)) {
        return (0, markup.printComment)(node.data, config)
      }

      const type = nodeIsFragment(node) ? `DocumentFragment` : node.tagName.toLowerCase()

      if (++depth > config.maxDepth) {
        return (0, markup.printElementAsLeaf)(type, config)
      }

      return (0, markup.printElement)(
        type,
        (0, markup.printProps)(
          nodeIsFragment(node)
            ? []
            : Array.from(node.attributes)
                .map(attr => attr.name)
                .sort(),
          nodeIsFragment(node)
            ? {}
            : Array.from(node.attributes).reduce((props, attribute) => {
                props[attribute.name] = attribute.value
                return props
              }, {}),
          config,
          indentation + config.indent,
          depth,
          refs,
          printer,
        ),
        (0, markup.printChildren)(
          Array.prototype.slice.call(node.childNodes || node.children),
          config,
          indentation + config.indent,
          depth,
          refs,
          printer,
        ),
        config,
        indentation,
      )
    }

    exports.serialize = serialize
    const plugin = {
      serialize,
      test,
    }
    var _default = plugin
    exports.default = _default
  })

  var Immutable = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.default = exports.test = exports.serialize = void 0

    /**
     * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    // SENTINEL constants are from https://github.com/facebook/immutable-js
    const IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@'
    const IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@'
    const IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@'
    const IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@'
    const IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@'
    const IS_RECORD_SENTINEL = '@@__IMMUTABLE_RECORD__@@' // immutable v4

    const IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@'
    const IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@'
    const IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@'

    const getImmutableName = name => 'Immutable.' + name

    const printAsLeaf = name => '[' + name + ']'

    const SPACE = ' '
    const LAZY = '…' // Seq is lazy if it calls a method like filter

    const printImmutableEntries = (val, config, indentation, depth, refs, printer, type) =>
      ++depth > config.maxDepth
        ? printAsLeaf(getImmutableName(type))
        : getImmutableName(type) +
          SPACE +
          '{' +
          (0, collections.printIteratorEntries)(
            val.entries(),
            config,
            indentation,
            depth,
            refs,
            printer,
          ) +
          '}' // Record has an entries method because it is a collection in immutable v3.
    // Return an iterator for Immutable Record from version v3 or v4.

    function getRecordEntries(val) {
      let i = 0
      return {
        next() {
          if (i < val._keys.length) {
            const key = val._keys[i++]
            return {
              done: false,
              value: [key, val.get(key)],
            }
          }

          return {
            done: true,
            value: undefined,
          }
        },
      }
    }

    const printImmutableRecord = (val, config, indentation, depth, refs, printer) => {
      // _name property is defined only for an Immutable Record instance
      // which was constructed with a second optional descriptive name arg
      const name = getImmutableName(val._name || 'Record')
      return ++depth > config.maxDepth
        ? printAsLeaf(name)
        : name +
            SPACE +
            '{' +
            (0, collections.printIteratorEntries)(
              getRecordEntries(val),
              config,
              indentation,
              depth,
              refs,
              printer,
            ) +
            '}'
    }

    const printImmutableSeq = (val, config, indentation, depth, refs, printer) => {
      const name = getImmutableName('Seq')

      if (++depth > config.maxDepth) {
        return printAsLeaf(name)
      }

      if (val[IS_KEYED_SENTINEL]) {
        return (
          name +
          SPACE +
          '{' + // from Immutable collection of entries or from ECMAScript object
          (val._iter || val._object
            ? (0, collections.printIteratorEntries)(
                val.entries(),
                config,
                indentation,
                depth,
                refs,
                printer,
              )
            : LAZY) +
          '}'
        )
      }

      return (
        name +
        SPACE +
        '[' +
        (val._iter || // from Immutable collection of values
        val._array || // from ECMAScript array
        val._collection || // from ECMAScript collection in immutable v4
        val._iterable // from ECMAScript collection in immutable v3
          ? (0, collections.printIteratorValues)(
              val.values(),
              config,
              indentation,
              depth,
              refs,
              printer,
            )
          : LAZY) +
        ']'
      )
    }

    const printImmutableValues = (val, config, indentation, depth, refs, printer, type) =>
      ++depth > config.maxDepth
        ? printAsLeaf(getImmutableName(type))
        : getImmutableName(type) +
          SPACE +
          '[' +
          (0, collections.printIteratorValues)(
            val.values(),
            config,
            indentation,
            depth,
            refs,
            printer,
          ) +
          ']'

    const serialize = (val, config, indentation, depth, refs, printer) => {
      if (val[IS_MAP_SENTINEL]) {
        return printImmutableEntries(
          val,
          config,
          indentation,
          depth,
          refs,
          printer,
          val[IS_ORDERED_SENTINEL] ? 'OrderedMap' : 'Map',
        )
      }

      if (val[IS_LIST_SENTINEL]) {
        return printImmutableValues(val, config, indentation, depth, refs, printer, 'List')
      }

      if (val[IS_SET_SENTINEL]) {
        return printImmutableValues(
          val,
          config,
          indentation,
          depth,
          refs,
          printer,
          val[IS_ORDERED_SENTINEL] ? 'OrderedSet' : 'Set',
        )
      }

      if (val[IS_STACK_SENTINEL]) {
        return printImmutableValues(val, config, indentation, depth, refs, printer, 'Stack')
      }

      if (val[IS_SEQ_SENTINEL]) {
        return printImmutableSeq(val, config, indentation, depth, refs, printer)
      } // For compatibility with immutable v3 and v4, let record be the default.

      return printImmutableRecord(val, config, indentation, depth, refs, printer)
    } // Explicitly comparing sentinel properties to true avoids false positive
    // when mock identity-obj-proxy returns the key as the value for any key.

    exports.serialize = serialize

    const test = val =>
      val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true)

    exports.test = test
    const plugin = {
      serialize,
      test,
    }
    var _default = plugin
    exports.default = _default
  })

  var reactIs_development = createCommonjsModule(function (module, exports) {
    {
      ;(function () {
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?

        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7

        function isValidElementType(type) {
          return (
            typeof type === 'string' ||
            typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE ||
            type === REACT_CONCURRENT_MODE_TYPE ||
            type === REACT_PROFILER_TYPE ||
            type === REACT_STRICT_MODE_TYPE ||
            type === REACT_SUSPENSE_TYPE ||
            type === REACT_SUSPENSE_LIST_TYPE ||
            (typeof type === 'object' &&
              type !== null &&
              (type.$$typeof === REACT_LAZY_TYPE ||
                type.$$typeof === REACT_MEMO_TYPE ||
                type.$$typeof === REACT_PROVIDER_TYPE ||
                type.$$typeof === REACT_CONTEXT_TYPE ||
                type.$$typeof === REACT_FORWARD_REF_TYPE ||
                type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
                type.$$typeof === REACT_RESPONDER_TYPE ||
                type.$$typeof === REACT_SCOPE_TYPE ||
                type.$$typeof === REACT_BLOCK_TYPE))
          )
        }

        function typeOf(object) {
          if (typeof object === 'object' && object !== null) {
            var $$typeof = object.$$typeof

            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type

                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type

                  default:
                    var $$typeofType = type && type.$$typeof

                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType

                      default:
                        return $$typeof
                    }
                }

              case REACT_PORTAL_TYPE:
                return $$typeof
            }
          }

          return undefined
        } // AsyncMode is deprecated along with isAsyncMode

        var AsyncMode = REACT_ASYNC_MODE_TYPE
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE
        var ContextConsumer = REACT_CONTEXT_TYPE
        var ContextProvider = REACT_PROVIDER_TYPE
        var Element = REACT_ELEMENT_TYPE
        var ForwardRef = REACT_FORWARD_REF_TYPE
        var Fragment = REACT_FRAGMENT_TYPE
        var Lazy = REACT_LAZY_TYPE
        var Memo = REACT_MEMO_TYPE
        var Portal = REACT_PORTAL_TYPE
        var Profiler = REACT_PROFILER_TYPE
        var StrictMode = REACT_STRICT_MODE_TYPE
        var Suspense = REACT_SUSPENSE_TYPE
        var hasWarnedAboutDeprecatedIsAsyncMode = false // AsyncMode should be deprecated

        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true // Using console['warn'] to evade Babel and ESLint

              console['warn'](
                'The ReactIs.isAsyncMode() alias has been deprecated, ' +
                  'and will be removed in React 17+. Update your code to use ' +
                  'ReactIs.isConcurrentMode() instead. It has the exact same API.',
              )
            }
          }

          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE
        }
        function isElement(object) {
          return (
            typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE
          )
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE
        }

        exports.AsyncMode = AsyncMode
        exports.ConcurrentMode = ConcurrentMode
        exports.ContextConsumer = ContextConsumer
        exports.ContextProvider = ContextProvider
        exports.Element = Element
        exports.ForwardRef = ForwardRef
        exports.Fragment = Fragment
        exports.Lazy = Lazy
        exports.Memo = Memo
        exports.Portal = Portal
        exports.Profiler = Profiler
        exports.StrictMode = StrictMode
        exports.Suspense = Suspense
        exports.isAsyncMode = isAsyncMode
        exports.isConcurrentMode = isConcurrentMode
        exports.isContextConsumer = isContextConsumer
        exports.isContextProvider = isContextProvider
        exports.isElement = isElement
        exports.isForwardRef = isForwardRef
        exports.isFragment = isFragment
        exports.isLazy = isLazy
        exports.isMemo = isMemo
        exports.isPortal = isPortal
        exports.isProfiler = isProfiler
        exports.isStrictMode = isStrictMode
        exports.isSuspense = isSuspense
        exports.isValidElementType = isValidElementType
        exports.typeOf = typeOf
      })()
    }
  })

  var reactIs = createCommonjsModule(function (module) {
    {
      module.exports = reactIs_development
    }
  })

  var ReactElement = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.default = exports.test = exports.serialize = void 0

    var ReactIs = _interopRequireWildcard(reactIs)

    function _getRequireWildcardCache() {
      if (typeof WeakMap !== 'function') return null
      var cache = new WeakMap()
      _getRequireWildcardCache = function () {
        return cache
      }
      return cache
    }

    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj
      }
      if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
        return {default: obj}
      }
      var cache = _getRequireWildcardCache()
      if (cache && cache.has(obj)) {
        return cache.get(obj)
      }
      var newObj = {}
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc)
          } else {
            newObj[key] = obj[key]
          }
        }
      }
      newObj.default = obj
      if (cache) {
        cache.set(obj, newObj)
      }
      return newObj
    }

    /**
     * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    // Given element.props.children, or subtree during recursive traversal,
    // return flattened array of children.
    const getChildren = (arg, children = []) => {
      if (Array.isArray(arg)) {
        arg.forEach(item => {
          getChildren(item, children)
        })
      } else if (arg != null && arg !== false) {
        children.push(arg)
      }

      return children
    }

    const getType = element => {
      const type = element.type

      if (typeof type === 'string') {
        return type
      }

      if (typeof type === 'function') {
        return type.displayName || type.name || 'Unknown'
      }

      if (ReactIs.isFragment(element)) {
        return 'React.Fragment'
      }

      if (ReactIs.isSuspense(element)) {
        return 'React.Suspense'
      }

      if (typeof type === 'object' && type !== null) {
        if (ReactIs.isContextProvider(element)) {
          return 'Context.Provider'
        }

        if (ReactIs.isContextConsumer(element)) {
          return 'Context.Consumer'
        }

        if (ReactIs.isForwardRef(element)) {
          if (type.displayName) {
            return type.displayName
          }

          const functionName = type.render.displayName || type.render.name || ''
          return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef'
        }

        if (ReactIs.isMemo(element)) {
          const functionName = type.displayName || type.type.displayName || type.type.name || ''
          return functionName !== '' ? 'Memo(' + functionName + ')' : 'Memo'
        }
      }

      return 'UNDEFINED'
    }

    const getPropKeys = element => {
      const {props} = element
      return Object.keys(props)
        .filter(key => key !== 'children' && props[key] !== undefined)
        .sort()
    }

    const serialize = (element, config, indentation, depth, refs, printer) =>
      ++depth > config.maxDepth
        ? (0, markup.printElementAsLeaf)(getType(element), config)
        : (0, markup.printElement)(
            getType(element),
            (0, markup.printProps)(
              getPropKeys(element),
              element.props,
              config,
              indentation + config.indent,
              depth,
              refs,
              printer,
            ),
            (0, markup.printChildren)(
              getChildren(element.props.children),
              config,
              indentation + config.indent,
              depth,
              refs,
              printer,
            ),
            config,
            indentation,
          )

    exports.serialize = serialize

    const test = val => val && ReactIs.isElement(val)

    exports.test = test
    const plugin = {
      serialize,
      test,
    }
    var _default = plugin
    exports.default = _default
  })

  var ReactTestComponent = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.default = exports.test = exports.serialize = void 0

    var Symbol = commonjsGlobal['jest-symbol-do-not-touch'] || commonjsGlobal.Symbol
    const testSymbol =
      typeof Symbol === 'function' && Symbol.for ? Symbol.for('react.test.json') : 0xea71357

    const getPropKeys = object => {
      const {props} = object
      return props
        ? Object.keys(props)
            .filter(key => props[key] !== undefined)
            .sort()
        : []
    }

    const serialize = (object, config, indentation, depth, refs, printer) =>
      ++depth > config.maxDepth
        ? (0, markup.printElementAsLeaf)(object.type, config)
        : (0, markup.printElement)(
            object.type,
            object.props
              ? (0, markup.printProps)(
                  getPropKeys(object),
                  object.props,
                  config,
                  indentation + config.indent,
                  depth,
                  refs,
                  printer,
                )
              : '',
            object.children
              ? (0, markup.printChildren)(
                  object.children,
                  config,
                  indentation + config.indent,
                  depth,
                  refs,
                  printer,
                )
              : '',
            config,
            indentation,
          )

    exports.serialize = serialize

    const test = val => val && val.$$typeof === testSymbol

    exports.test = test
    const plugin = {
      serialize,
      test,
    }
    var _default = plugin
    exports.default = _default
  })

  var build = createCommonjsModule(function (module) {
    var _ansiStyles = _interopRequireDefault(ansiStyles)

    var _AsymmetricMatcher = _interopRequireDefault(AsymmetricMatcher)

    var _ConvertAnsi = _interopRequireDefault(ConvertAnsi)

    var _DOMCollection = _interopRequireDefault(DOMCollection)

    var _DOMElement = _interopRequireDefault(DOMElement)

    var _Immutable = _interopRequireDefault(Immutable)

    var _ReactElement = _interopRequireDefault(ReactElement)

    var _ReactTestComponent = _interopRequireDefault(ReactTestComponent)

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {default: obj}
    }

    /**
     * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    const toString = Object.prototype.toString
    const toISOString = Date.prototype.toISOString
    const errorToString = Error.prototype.toString
    const regExpToString = RegExp.prototype.toString
    /**
     * Explicitly comparing typeof constructor to function avoids undefined as name
     * when mock identity-obj-proxy returns the key as the value for any key.
     */

    const getConstructorName = val =>
      (typeof val.constructor === 'function' && val.constructor.name) || 'Object'
    /* global window */

    /** Is val is equal to global window object? Works even if it does not exist :) */

    const isWindow = val => typeof window !== 'undefined' && val === window

    const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/
    const NEWLINE_REGEXP = /\n/gi

    class PrettyFormatPluginError extends Error {
      constructor(message, stack) {
        super(message)
        this.stack = stack
        this.name = this.constructor.name
      }
    }

    function isToStringedArrayType(toStringed) {
      return (
        toStringed === '[object Array]' ||
        toStringed === '[object ArrayBuffer]' ||
        toStringed === '[object DataView]' ||
        toStringed === '[object Float32Array]' ||
        toStringed === '[object Float64Array]' ||
        toStringed === '[object Int8Array]' ||
        toStringed === '[object Int16Array]' ||
        toStringed === '[object Int32Array]' ||
        toStringed === '[object Uint8Array]' ||
        toStringed === '[object Uint8ClampedArray]' ||
        toStringed === '[object Uint16Array]' ||
        toStringed === '[object Uint32Array]'
      )
    }

    function printNumber(val) {
      return Object.is(val, -0) ? '-0' : String(val)
    }

    function printBigInt(val) {
      return String(`${val}n`)
    }

    function printFunction(val, printFunctionName) {
      if (!printFunctionName) {
        return '[Function]'
      }

      return '[Function ' + (val.name || 'anonymous') + ']'
    }

    function printSymbol(val) {
      return String(val).replace(SYMBOL_REGEXP, 'Symbol($1)')
    }

    function printError(val) {
      return '[' + errorToString.call(val) + ']'
    }
    /**
     * The first port of call for printing an object, handles most of the
     * data-types in JS.
     */

    function printBasicValue(val, printFunctionName, escapeRegex, escapeString) {
      if (val === true || val === false) {
        return '' + val
      }

      if (val === undefined) {
        return 'undefined'
      }

      if (val === null) {
        return 'null'
      }

      const typeOf = typeof val

      if (typeOf === 'number') {
        return printNumber(val)
      }

      if (typeOf === 'bigint') {
        return printBigInt(val)
      }

      if (typeOf === 'string') {
        if (escapeString) {
          return '"' + val.replace(/"|\\/g, '\\$&') + '"'
        }

        return '"' + val + '"'
      }

      if (typeOf === 'function') {
        return printFunction(val, printFunctionName)
      }

      if (typeOf === 'symbol') {
        return printSymbol(val)
      }

      const toStringed = toString.call(val)

      if (toStringed === '[object WeakMap]') {
        return 'WeakMap {}'
      }

      if (toStringed === '[object WeakSet]') {
        return 'WeakSet {}'
      }

      if (toStringed === '[object Function]' || toStringed === '[object GeneratorFunction]') {
        return printFunction(val, printFunctionName)
      }

      if (toStringed === '[object Symbol]') {
        return printSymbol(val)
      }

      if (toStringed === '[object Date]') {
        return isNaN(+val) ? 'Date { NaN }' : toISOString.call(val)
      }

      if (toStringed === '[object Error]') {
        return printError(val)
      }

      if (toStringed === '[object RegExp]') {
        if (escapeRegex) {
          // https://github.com/benjamingr/RegExp.escape/blob/master/polyfill.js
          return regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
        }

        return regExpToString.call(val)
      }

      if (val instanceof Error) {
        return printError(val)
      }

      return null
    }
    /**
     * Handles more complex objects ( such as objects with circular references.
     * maps and sets etc )
     */

    function printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON) {
      if (refs.indexOf(val) !== -1) {
        return '[Circular]'
      }

      refs = refs.slice()
      refs.push(val)
      const hitMaxDepth = ++depth > config.maxDepth
      const min = config.min

      if (
        config.callToJSON &&
        !hitMaxDepth &&
        val.toJSON &&
        typeof val.toJSON === 'function' &&
        !hasCalledToJSON
      ) {
        return printer(val.toJSON(), config, indentation, depth, refs, true)
      }

      const toStringed = toString.call(val)

      if (toStringed === '[object Arguments]') {
        return hitMaxDepth
          ? '[Arguments]'
          : (min ? '' : 'Arguments ') +
              '[' +
              (0, collections.printListItems)(val, config, indentation, depth, refs, printer) +
              ']'
      }

      if (isToStringedArrayType(toStringed)) {
        return hitMaxDepth
          ? '[' + val.constructor.name + ']'
          : (min ? '' : val.constructor.name + ' ') +
              '[' +
              (0, collections.printListItems)(val, config, indentation, depth, refs, printer) +
              ']'
      }

      if (toStringed === '[object Map]') {
        return hitMaxDepth
          ? '[Map]'
          : 'Map {' +
              (0, collections.printIteratorEntries)(
                val.entries(),
                config,
                indentation,
                depth,
                refs,
                printer,
                ' => ',
              ) +
              '}'
      }

      if (toStringed === '[object Set]') {
        return hitMaxDepth
          ? '[Set]'
          : 'Set {' +
              (0, collections.printIteratorValues)(
                val.values(),
                config,
                indentation,
                depth,
                refs,
                printer,
              ) +
              '}'
      } // Avoid failure to serialize global window object in jsdom test environment.
      // For example, not even relevant if window is prop of React element.

      return hitMaxDepth || isWindow(val)
        ? '[' + getConstructorName(val) + ']'
        : (min ? '' : getConstructorName(val) + ' ') +
            '{' +
            (0, collections.printObjectProperties)(val, config, indentation, depth, refs, printer) +
            '}'
    }

    function isNewPlugin(plugin) {
      return plugin.serialize != null
    }

    function printPlugin(plugin, val, config, indentation, depth, refs) {
      let printed

      try {
        printed = isNewPlugin(plugin)
          ? plugin.serialize(val, config, indentation, depth, refs, printer)
          : plugin.print(
              val,
              valChild => printer(valChild, config, indentation, depth, refs),
              str => {
                const indentationNext = indentation + config.indent
                return indentationNext + str.replace(NEWLINE_REGEXP, '\n' + indentationNext)
              },
              {
                edgeSpacing: config.spacingOuter,
                min: config.min,
                spacing: config.spacingInner,
              },
              config.colors,
            )
      } catch (error) {
        throw new PrettyFormatPluginError(error.message, error.stack)
      }

      if (typeof printed !== 'string') {
        throw new Error(
          `pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`,
        )
      }

      return printed
    }

    function findPlugin(plugins, val) {
      for (let p = 0; p < plugins.length; p++) {
        try {
          if (plugins[p].test(val)) {
            return plugins[p]
          }
        } catch (error) {
          throw new PrettyFormatPluginError(error.message, error.stack)
        }
      }

      return null
    }

    function printer(val, config, indentation, depth, refs, hasCalledToJSON) {
      const plugin = findPlugin(config.plugins, val)

      if (plugin !== null) {
        return printPlugin(plugin, val, config, indentation, depth, refs)
      }

      const basicResult = printBasicValue(
        val,
        config.printFunctionName,
        config.escapeRegex,
        config.escapeString,
      )

      if (basicResult !== null) {
        return basicResult
      }

      return printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON)
    }

    const DEFAULT_THEME = {
      comment: 'gray',
      content: 'reset',
      prop: 'yellow',
      tag: 'cyan',
      value: 'green',
    }
    const DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME)
    const DEFAULT_OPTIONS = {
      callToJSON: true,
      escapeRegex: false,
      escapeString: true,
      highlight: false,
      indent: 2,
      maxDepth: Infinity,
      min: false,
      plugins: [],
      printFunctionName: true,
      theme: DEFAULT_THEME,
    }

    function validateOptions(options) {
      Object.keys(options).forEach(key => {
        if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
          throw new Error(`pretty-format: Unknown option "${key}".`)
        }
      })

      if (options.min && options.indent !== undefined && options.indent !== 0) {
        throw new Error('pretty-format: Options "min" and "indent" cannot be used together.')
      }

      if (options.theme !== undefined) {
        if (options.theme === null) {
          throw new Error(`pretty-format: Option "theme" must not be null.`)
        }

        if (typeof options.theme !== 'object') {
          throw new Error(
            `pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`,
          )
        }
      }
    }

    const getColorsHighlight = options =>
      DEFAULT_THEME_KEYS.reduce((colors, key) => {
        const value =
          options.theme && options.theme[key] !== undefined
            ? options.theme[key]
            : DEFAULT_THEME[key]
        const color = value && _ansiStyles.default[value]

        if (color && typeof color.close === 'string' && typeof color.open === 'string') {
          colors[key] = color
        } else {
          throw new Error(
            `pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`,
          )
        }

        return colors
      }, Object.create(null))

    const getColorsEmpty = () =>
      DEFAULT_THEME_KEYS.reduce((colors, key) => {
        colors[key] = {
          close: '',
          open: '',
        }
        return colors
      }, Object.create(null))

    const getPrintFunctionName = options =>
      options && options.printFunctionName !== undefined
        ? options.printFunctionName
        : DEFAULT_OPTIONS.printFunctionName

    const getEscapeRegex = options =>
      options && options.escapeRegex !== undefined
        ? options.escapeRegex
        : DEFAULT_OPTIONS.escapeRegex

    const getEscapeString = options =>
      options && options.escapeString !== undefined
        ? options.escapeString
        : DEFAULT_OPTIONS.escapeString

    const getConfig = options => ({
      callToJSON:
        options && options.callToJSON !== undefined
          ? options.callToJSON
          : DEFAULT_OPTIONS.callToJSON,
      colors: options && options.highlight ? getColorsHighlight(options) : getColorsEmpty(),
      escapeRegex: getEscapeRegex(options),
      escapeString: getEscapeString(options),
      indent:
        options && options.min
          ? ''
          : createIndent(
              options && options.indent !== undefined ? options.indent : DEFAULT_OPTIONS.indent,
            ),
      maxDepth:
        options && options.maxDepth !== undefined ? options.maxDepth : DEFAULT_OPTIONS.maxDepth,
      min: options && options.min !== undefined ? options.min : DEFAULT_OPTIONS.min,
      plugins: options && options.plugins !== undefined ? options.plugins : DEFAULT_OPTIONS.plugins,
      printFunctionName: getPrintFunctionName(options),
      spacingInner: options && options.min ? ' ' : '\n',
      spacingOuter: options && options.min ? '' : '\n',
    })

    function createIndent(indent) {
      return new Array(indent + 1).join(' ')
    }
    /**
     * Returns a presentation string of your `val` object
     * @param val any potential JavaScript object
     * @param options Custom settings
     */

    function prettyFormat(val, options) {
      if (options) {
        validateOptions(options)

        if (options.plugins) {
          const plugin = findPlugin(options.plugins, val)

          if (plugin !== null) {
            return printPlugin(plugin, val, getConfig(options), '', 0, [])
          }
        }
      }

      const basicResult = printBasicValue(
        val,
        getPrintFunctionName(options),
        getEscapeRegex(options),
        getEscapeString(options),
      )

      if (basicResult !== null) {
        return basicResult
      }

      return printComplexValue(val, getConfig(options), '', 0, [])
    }

    prettyFormat.plugins = {
      AsymmetricMatcher: _AsymmetricMatcher.default,
      ConvertAnsi: _ConvertAnsi.default,
      DOMCollection: _DOMCollection.default,
      DOMElement: _DOMElement.default,
      Immutable: _Immutable.default,
      ReactElement: _ReactElement.default,
      ReactTestComponent: _ReactTestComponent.default,
    } // eslint-disable-next-line no-redeclare

    module.exports = prettyFormat
  })

  var prettyFormat = /*@__PURE__*/ getDefaultExportFromCjs(build)

  var helpers = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.getWindowFromNode = getWindowFromNode
    exports.getDocument = getDocument
    exports.runWithRealTimers = runWithRealTimers
    exports.checkContainerType = checkContainerType
    exports.jestFakeTimersAreEnabled = exports.setTimeout = exports.setImmediate = exports.clearTimeout = void 0
    const globalObj = typeof window === 'undefined' ? commonjsGlobal : window // Currently this fn only supports jest timers, but it could support other test runners in the future.

    function runWithRealTimers(callback) {
      const fakeTimersType = getJestFakeTimersType()

      if (fakeTimersType) {
        jest.useRealTimers()
      }

      const callbackReturnValue = callback()

      if (fakeTimersType) {
        jest.useFakeTimers(fakeTimersType)
      }

      return callbackReturnValue
    }

    function getJestFakeTimersType() {
      // istanbul ignore if
      if (typeof jest === 'undefined' || typeof globalObj.setTimeout === 'undefined') {
        return null
      }

      if (
        typeof globalObj.setTimeout._isMockFunction !== 'undefined' &&
        globalObj.setTimeout._isMockFunction
      ) {
        return 'legacy'
      }

      if (
        typeof globalObj.setTimeout.clock !== 'undefined' &&
        typeof jest.getRealSystemTime !== 'undefined'
      ) {
        try {
          // jest.getRealSystemTime is only supported for Jest's `modern` fake timers and otherwise throws
          jest.getRealSystemTime()
          return 'modern'
        } catch {
          // not using Jest's modern fake timers
        }
      }

      return null
    }

    const jestFakeTimersAreEnabled = () => Boolean(getJestFakeTimersType()) // we only run our tests in node, and setImmediate is supported in node.
    // istanbul ignore next

    exports.jestFakeTimersAreEnabled = jestFakeTimersAreEnabled

    function setImmediatePolyfill(fn) {
      return globalObj.setTimeout(fn, 0)
    }

    function getTimeFunctions() {
      // istanbul ignore next
      return {
        clearTimeoutFn: globalObj.clearTimeout,
        setImmediateFn: globalObj.setImmediate || setImmediatePolyfill,
        setTimeoutFn: globalObj.setTimeout,
      }
    }

    const {clearTimeoutFn, setImmediateFn, setTimeoutFn} = runWithRealTimers(getTimeFunctions)
    exports.setTimeout = setTimeoutFn
    exports.setImmediate = setImmediateFn
    exports.clearTimeout = clearTimeoutFn

    function getDocument() {
      /* istanbul ignore if */
      if (typeof window === 'undefined') {
        throw new Error('Could not find default container')
      }

      return window.document
    }

    function getWindowFromNode(node) {
      if (node.defaultView) {
        // node is document
        return node.defaultView
      } else if (node.ownerDocument && node.ownerDocument.defaultView) {
        // node is a DOM node
        return node.ownerDocument.defaultView
      } else if (node.window) {
        // node is window
        return node.window
      } else if (node.then instanceof Function) {
        throw new Error(
          `It looks like you passed a Promise object instead of a DOM node. Did you do something like \`fireEvent.click(screen.findBy...\` when you meant to use a \`getBy\` query \`fireEvent.click(screen.getBy...\`, or await the findBy query \`fireEvent.click(await screen.findBy...\`?`,
        )
      } else {
        // The user passed something unusual to a calling function
        throw new Error(
          `Unable to find the "window" object for the given node. Please file an issue with the code that's causing you to see this error: https://github.com/testing-library/dom-testing-library/issues/new`,
        )
      }
    }

    function checkContainerType(container) {
      if (
        !container ||
        !(typeof container.querySelector === 'function') ||
        !(typeof container.querySelectorAll === 'function')
      ) {
        throw new TypeError(
          `Expected container to be an Element, a Document or a DocumentFragment but got ${getTypeName(
            container,
          )}.`,
        )
      }

      function getTypeName(object) {
        if (typeof object === 'object') {
          return object === null ? 'null' : object.constructor.name
        }

        return typeof object
      }
    }
  })

  var prettyDom = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.prettyDOM = prettyDOM
    exports.logDOM = void 0

    var _prettyFormat = interopRequireDefault(build)

    function inCypress(dom) {
      const window = (dom.ownerDocument && dom.ownerDocument.defaultView) || undefined
      return (
        (typeof commonjsGlobal !== 'undefined' && commonjsGlobal.Cypress) ||
        (typeof window !== 'undefined' && window.Cypress)
      )
    }

    const inNode = () =>
      typeof process !== 'undefined' &&
      process.versions !== undefined &&
      process.versions.node !== undefined

    const getMaxLength = dom =>
      inCypress(dom) ? 0 : (typeof process !== 'undefined' && process.env.DEBUG_PRINT_LIMIT) || 7000

    const {DOMElement, DOMCollection} = _prettyFormat.default.plugins

    function prettyDOM(dom, maxLength, options) {
      if (!dom) {
        dom = (0, helpers.getDocument)().body
      }

      if (typeof maxLength !== 'number') {
        maxLength = getMaxLength(dom)
      }

      if (maxLength === 0) {
        return ''
      }

      if (dom.documentElement) {
        dom = dom.documentElement
      }

      let domTypeName = typeof dom

      if (domTypeName === 'object') {
        domTypeName = dom.constructor.name
      } else {
        // To don't fall with `in` operator
        dom = {}
      }

      if (!('outerHTML' in dom)) {
        throw new TypeError(`Expected an element or document but got ${domTypeName}`)
      }

      const debugContent = (0, _prettyFormat.default)(dom, {
        plugins: [DOMElement, DOMCollection],
        printFunctionName: false,
        highlight: inNode(),
        ...options,
      })
      return maxLength !== undefined && dom.outerHTML.length > maxLength
        ? `${debugContent.slice(0, maxLength)}...`
        : debugContent
    }

    const logDOM = (...args) => console.log(prettyDOM(...args))

    exports.logDOM = logDOM
  })

  var config_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.runWithExpensiveErrorDiagnosticsDisabled = runWithExpensiveErrorDiagnosticsDisabled
    exports.configure = configure
    exports.getConfig = getConfig
    exports.DEFAULT_IGNORE_TAGS = void 0

    // It would be cleaner for this to live inside './queries', but
    // other parts of the code assume that all exports from
    // './queries' are query functions.
    let config = {
      testIdAttribute: 'data-testid',
      asyncUtilTimeout: 1000,
      // this is to support React's async `act` function.
      // forcing react-testing-library to wrap all async functions would've been
      // a total nightmare (consider wrapping every findBy* query and then also
      // updating `within` so those would be wrapped too. Total nightmare).
      // so we have this config option that's really only intended for
      // react-testing-library to use. For that reason, this feature will remain
      // undocumented.
      asyncWrapper: cb => cb(),
      eventWrapper: cb => cb(),
      // default value for the `hidden` option in `ByRole` queries
      defaultHidden: false,
      // showOriginalStackTrace flag to show the full error stack traces for async errors
      showOriginalStackTrace: false,
      // throw errors w/ suggestions for better queries. Opt in so off by default.
      throwSuggestions: false,

      // called when getBy* queries fail. (message, container) => Error
      getElementError(message, container) {
        const error = new Error(
          [message, (0, prettyDom.prettyDOM)(container)].filter(Boolean).join('\n\n'),
        )
        error.name = 'TestingLibraryElementError'
        return error
      },

      _disableExpensiveErrorDiagnostics: false,
      computedStyleSupportsPseudoElements: false,
    }
    const DEFAULT_IGNORE_TAGS = 'script, style'
    exports.DEFAULT_IGNORE_TAGS = DEFAULT_IGNORE_TAGS

    function runWithExpensiveErrorDiagnosticsDisabled(callback) {
      try {
        config._disableExpensiveErrorDiagnostics = true
        return callback()
      } finally {
        config._disableExpensiveErrorDiagnostics = false
      }
    }

    function configure(newConfig) {
      if (typeof newConfig === 'function') {
        // Pass the existing config out to the provided function
        // and accept a delta in return
        newConfig = newConfig(config)
      } // Merge the incoming config delta

      config = {...config, ...newConfig}
    }

    function getConfig() {
      return config
    }
  })

  var matches_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.fuzzyMatches = fuzzyMatches
    exports.matches = matches
    exports.getDefaultNormalizer = getDefaultNormalizer
    exports.makeNormalizer = makeNormalizer

    function assertNotNullOrUndefined(matcher) {
      if (matcher == null) {
        throw new Error(
          `It looks like ${matcher} was passed instead of a matcher. Did you do something like getByText(${matcher})?`,
        )
      }
    }

    function fuzzyMatches(textToMatch, node, matcher, normalizer) {
      if (typeof textToMatch !== 'string') {
        return false
      }

      assertNotNullOrUndefined(matcher)
      const normalizedText = normalizer(textToMatch)

      if (typeof matcher === 'string') {
        return normalizedText.toLowerCase().includes(matcher.toLowerCase())
      } else if (typeof matcher === 'function') {
        return matcher(normalizedText, node)
      } else {
        return matcher.test(normalizedText)
      }
    }

    function matches(textToMatch, node, matcher, normalizer) {
      if (typeof textToMatch !== 'string') {
        return false
      }

      assertNotNullOrUndefined(matcher)
      const normalizedText = normalizer(textToMatch)

      if (typeof matcher === 'string') {
        return normalizedText === matcher
      } else if (typeof matcher === 'function') {
        return matcher(normalizedText, node)
      } else {
        return matcher.test(normalizedText)
      }
    }

    function getDefaultNormalizer({trim = true, collapseWhitespace = true} = {}) {
      return text => {
        let normalizedText = text
        normalizedText = trim ? normalizedText.trim() : normalizedText
        normalizedText = collapseWhitespace ? normalizedText.replace(/\s+/g, ' ') : normalizedText
        return normalizedText
      }
    }
    /**
     * Constructs a normalizer to pass to functions in matches.js
     * @param {boolean|undefined} trim The user-specified value for `trim`, without
     * any defaulting having been applied
     * @param {boolean|undefined} collapseWhitespace The user-specified value for
     * `collapseWhitespace`, without any defaulting having been applied
     * @param {Function|undefined} normalizer The user-specified normalizer
     * @returns {Function} A normalizer
     */

    function makeNormalizer({trim, collapseWhitespace, normalizer}) {
      if (normalizer) {
        // User has specified a custom normalizer
        if (typeof trim !== 'undefined' || typeof collapseWhitespace !== 'undefined') {
          // They've also specified a value for trim or collapseWhitespace
          throw new Error(
            'trim and collapseWhitespace are not supported with a normalizer. ' +
              'If you want to use the default trim and collapseWhitespace logic in your normalizer, ' +
              'use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer',
          )
        }

        return normalizer
      } else {
        // No custom normalizer specified. Just use default.
        return getDefaultNormalizer({
          trim,
          collapseWhitespace,
        })
      }
    }
  })

  var getNodeText_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.getNodeText = getNodeText
    // Constant node.nodeType for text nodes, see:
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#Node_type_constants
    const TEXT_NODE = 3

    function getNodeText(node) {
      if (node.matches('input[type=submit], input[type=button]')) {
        return node.value
      }

      return Array.from(node.childNodes)
        .filter(child => child.nodeType === TEXT_NODE && Boolean(child.textContent))
        .map(c => c.textContent)
        .join('')
    }
  })

  /**
   * @source {https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Polyfill}
   * but without thisArg (too hard to type, no need to `this`)
   */
  var toStr = Object.prototype.toString

  function isCallable(fn) {
    return typeof fn === 'function' || toStr.call(fn) === '[object Function]'
  }

  function toInteger(value) {
    var number = Number(value)

    if (isNaN(number)) {
      return 0
    }

    if (number === 0 || !isFinite(number)) {
      return number
    }

    return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number))
  }

  var maxSafeInteger = Math.pow(2, 53) - 1

  function toLength(value) {
    var len = toInteger(value)
    return Math.min(Math.max(len, 0), maxSafeInteger)
  }
  /**
   * Creates an array from an iterable object.
   * @param iterable An iterable object to convert to an array.
   */

  /**
   * Creates an array from an iterable object.
   * @param iterable An iterable object to convert to an array.
   * @param mapfn A mapping function to call on every element of the array.
   * @param thisArg Value of 'this' used to invoke the mapfn.
   */
  function arrayFrom(arrayLike, mapFn) {
    // 1. Let C be the this value.
    // edit(@eps1lon): we're not calling it as Array.from
    var C = Array // 2. Let items be ToObject(arrayLike).

    var items = Object(arrayLike) // 3. ReturnIfAbrupt(items).

    if (arrayLike == null) {
      throw new TypeError('Array.from requires an array-like object - not null or undefined')
    } // 4. If mapfn is undefined, then let mapping be false.
    // const mapFn = arguments.length > 1 ? arguments[1] : void undefined;

    if (typeof mapFn !== 'undefined') {
      // 5. else
      // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
      if (!isCallable(mapFn)) {
        throw new TypeError('Array.from: when provided, the second argument must be a function')
      }
    } // 10. Let lenValue be Get(items, "length").
    // 11. Let len be ToLength(lenValue).

    var len = toLength(items.length) // 13. If IsConstructor(C) is true, then
    // 13. a. Let A be the result of calling the [[Construct]] internal method
    // of C with an argument list containing the single item len.
    // 14. a. Else, Let A be ArrayCreate(len).

    var A = isCallable(C) ? Object(new C(len)) : new Array(len) // 16. Let k be 0.

    var k = 0 // 17. Repeat, while k < len… (also steps a - h)

    var kValue

    while (k < len) {
      kValue = items[k]

      if (mapFn) {
        A[k] = mapFn(kValue, k)
      } else {
        A[k] = kValue
      }

      k += 1
    } // 18. Let putStatus be Put(A, "length", len, true).

    A.length = len // 20. Return A.

    return A
  }

  function _typeof(obj) {
    '@babel/helpers - typeof'
    if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
      _typeof = function _typeof(obj) {
        return typeof obj
      }
    } else {
      _typeof = function _typeof(obj) {
        return obj &&
          typeof Symbol === 'function' &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? 'symbol'
          : typeof obj
      }
    }
    return _typeof(obj)
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps)
    if (staticProps) _defineProperties(Constructor, staticProps)
    return Constructor
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function')
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {value: subClass, writable: true, configurable: true},
    })
    if (superClass) _setPrototypeOf(subClass, superClass)
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct()
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor
        result = Reflect.construct(Super, arguments, NewTarget)
      } else {
        result = Super.apply(this, arguments)
      }
      return _possibleConstructorReturn(this, result)
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
      return call
    }
    return _assertThisInitialized(self)
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return self
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === 'function' ? new Map() : undefined
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class
      if (typeof Class !== 'function') {
        throw new TypeError('Super expression must either be null or a function')
      }
      if (typeof _cache !== 'undefined') {
        if (_cache.has(Class)) return _cache.get(Class)
        _cache.set(Class, Wrapper)
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor)
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {value: Wrapper, enumerable: false, writable: true, configurable: true},
      })
      return _setPrototypeOf(Wrapper, Class)
    }
    return _wrapNativeSuper(Class)
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null]
        a.push.apply(a, args)
        var Constructor = Function.bind.apply(Parent, a)
        var instance = new Constructor()
        if (Class) _setPrototypeOf(instance, Class.prototype)
        return instance
      }
    }
    return _construct.apply(null, arguments)
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false
    if (Reflect.construct.sham) return false
    if (typeof Proxy === 'function') return true
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}))
      return true
    } catch (e) {
      return false
    }
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf('[native code]') !== -1
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf =
      Object.setPrototypeOf ||
      function _setPrototypeOf(o, p) {
        o.__proto__ = p
        return o
      }
    return _setPrototypeOf(o, p)
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o)
        }
    return _getPrototypeOf(o)
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      })
    } else {
      obj[key] = value
    }
    return obj
  }

  // for environments without Set we fallback to arrays with unique members
  var SetLike = /*#__PURE__*/ (function (_Set) {
    _inherits(SetLike, _Set)

    var _super = _createSuper(SetLike)

    function SetLike() {
      var _this

      _classCallCheck(this, SetLike)

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key]
      }

      _this = _super.call.apply(_super, [this].concat(args))

      _defineProperty(_assertThisInitialized(_this), 'items', [])

      return _this
    }

    _createClass(SetLike, [
      {
        key: 'add',
        value: function add(value) {
          if (this.has(value) === false) {
            this.items.push(value)
          }

          return this
        },
      },
      {
        key: 'clear',
        value: function clear() {
          this.items = []
        },
      },
      {
        key: 'delete',
        value: function _delete(value) {
          var previousLength = this.items.length
          this.items = this.items.filter(function (item) {
            return item !== value
          })
          return previousLength !== this.items.length
        },
      },
      {
        key: 'forEach',
        value: function forEach(callbackfn) {
          var _this2 = this

          this.items.forEach(function (item) {
            callbackfn(item, item, _this2)
          })
        },
      },
      {
        key: 'has',
        value: function has(value) {
          return this.items.indexOf(value) !== -1
        },
      },
      {
        key: 'size',
        get: function get() {
          return this.items.length
        },
      },
    ])

    return SetLike
  })(/*#__PURE__*/ _wrapNativeSuper(Set))

  var SetLike$1 = typeof Set === 'undefined' ? Set : SetLike

  function _slicedToArray(arr, i) {
    return (
      _arrayWithHoles(arr) ||
      _iterableToArrayLimit(arr, i) ||
      _unsupportedIterableToArray(arr, i) ||
      _nonIterableRest()
    )
  }

  function _nonIterableRest() {
    throw new TypeError(
      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    )
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return
    if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
    var n = Object.prototype.toString.call(o).slice(8, -1)
    if (n === 'Object' && o.constructor) n = o.constructor.name
    if (n === 'Map' || n === 'Set') return Array.from(o)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen)
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i]
    }
    return arr2
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) return
    var _arr = []
    var _n = true
    var _d = false
    var _e = undefined
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value)
        if (i && _arr.length === i) break
      }
    } catch (err) {
      _d = true
      _e = err
    } finally {
      try {
        if (!_n && _i['return'] != null) _i['return']()
      } finally {
        if (_d) throw _e
      }
    }
    return _arr
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
  }
  function getRole(element) {
    var explicitRole = getExplicitRole(element)

    if (explicitRole !== null) {
      return explicitRole
    }

    return getImplicitRole(element)
  }
  var localNameToRoleMappings = {
    article: 'article',
    aside: 'complementary',
    body: 'document',
    button: 'button',
    datalist: 'listbox',
    dd: 'definition',
    details: 'group',
    dialog: 'dialog',
    dt: 'term',
    fieldset: 'group',
    figure: 'figure',
    // WARNING: Only with an accessible name
    form: 'form',
    footer: 'contentinfo',
    h1: 'heading',
    h2: 'heading',
    h3: 'heading',
    h4: 'heading',
    h5: 'heading',
    h6: 'heading',
    header: 'banner',
    hr: 'separator',
    legend: 'legend',
    li: 'listitem',
    math: 'math',
    main: 'main',
    menu: 'list',
    nav: 'navigation',
    ol: 'list',
    optgroup: 'group',
    // WARNING: Only in certain context
    option: 'option',
    output: 'status',
    progress: 'progressbar',
    // WARNING: Only with an accessible name
    section: 'region',
    summary: 'button',
    table: 'table',
    tbody: 'rowgroup',
    textarea: 'textbox',
    tfoot: 'rowgroup',
    // WARNING: Only in certain context
    td: 'cell',
    th: 'columnheader',
    thead: 'rowgroup',
    tr: 'row',
    ul: 'list',
  }

  function getImplicitRole(element) {
    var mappedByTag = localNameToRoleMappings[getLocalName(element)]

    if (mappedByTag !== undefined) {
      return mappedByTag
    }

    switch (getLocalName(element)) {
      case 'a':
      case 'area':
      case 'link':
        if (element.hasAttribute('href')) {
          return 'link'
        }

        break

      case 'img':
        if ((element.getAttribute('alt') || '').length > 0) {
          return 'img'
        }

        break

      case 'input': {
        var _ref = element,
          type = _ref.type

        switch (type) {
          case 'button':
          case 'image':
          case 'reset':
          case 'submit':
            return 'button'

          case 'checkbox':
          case 'radio':
            return type

          case 'range':
            return 'slider'

          case 'email':
          case 'tel':
          case 'text':
          case 'url':
            if (element.hasAttribute('list')) {
              return 'combobox'
            }

            return 'textbox'

          case 'search':
            if (element.hasAttribute('list')) {
              return 'combobox'
            }

            return 'searchbox'

          default:
            return null
        }
      }

      case 'select':
        if (element.hasAttribute('multiple') || element.size > 1) {
          return 'listbox'
        }

        return 'combobox'
    }

    return null
  }

  function getExplicitRole(element) {
    if (element.hasAttribute('role')) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe due to hasAttribute check
      var _trim$split = element.getAttribute('role').trim().split(' '),
        _trim$split2 = _slicedToArray(_trim$split, 1),
        explicitRole = _trim$split2[0]

      if (explicitRole !== undefined && explicitRole.length > 0) {
        return explicitRole
      }
    }

    return null
  }

  /**
   * Safe Element.localName for all supported environments
   * @param element
   */

  function getLocalName(element) {
    var _element$localName

    return (_element$localName = element.localName) !== null && _element$localName !== void 0
      ? _element$localName // eslint-disable-next-line no-restricted-properties -- required for the fallback
      : element.tagName.toLowerCase()
  }
  function isElement(node) {
    return node !== null && node.nodeType === node.ELEMENT_NODE
  }
  function isHTMLTableCaptionElement(node) {
    return isElement(node) && getLocalName(node) === 'caption'
  }
  function isHTMLInputElement(node) {
    return isElement(node) && getLocalName(node) === 'input'
  }
  function isHTMLSelectElement(node) {
    return isElement(node) && getLocalName(node) === 'select'
  }
  function isHTMLTableElement(node) {
    return isElement(node) && getLocalName(node) === 'table'
  }
  function isHTMLTextAreaElement(node) {
    return isElement(node) && getLocalName(node) === 'textarea'
  }
  function safeWindow(node) {
    var _ref = node.ownerDocument === null ? node : node.ownerDocument,
      defaultView = _ref.defaultView

    if (defaultView === null) {
      throw new TypeError('no window available')
    }

    return defaultView
  }
  function isHTMLFieldSetElement(node) {
    return isElement(node) && getLocalName(node) === 'fieldset'
  }
  function isHTMLLegendElement(node) {
    return isElement(node) && getLocalName(node) === 'legend'
  }
  function isSVGElement(node) {
    return isElement(node) && node.ownerSVGElement !== undefined
  }
  function isSVGSVGElement(node) {
    return isElement(node) && getLocalName(node) === 'svg'
  }
  function isSVGTitleElement(node) {
    return isSVGElement(node) && getLocalName(node) === 'title'
  }
  /**
   *
   * @param {Node} node -
   * @param {string} attributeName -
   * @returns {Element[]} -
   */

  function queryIdRefs(node, attributeName) {
    if (isElement(node) && node.hasAttribute(attributeName)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe due to hasAttribute check
      var ids = node.getAttribute(attributeName).split(' ')
      return ids
        .map(function (id) {
          return node.ownerDocument.getElementById(id)
        })
        .filter(
          function (element) {
            return element !== null
          }, // TODO: why does this not narrow?
        )
    }

    return []
  }
  function hasAnyConcreteRoles(node, roles) {
    if (isElement(node)) {
      return roles.indexOf(getRole(node)) !== -1
    }

    return false
  }

  /**
   * implements https://w3c.github.io/accname/
   */
  /**
   *  A string of characters where all carriage returns, newlines, tabs, and form-feeds are replaced with a single space, and multiple spaces are reduced to a single space. The string contains only character data; it does not contain any markup.
   */

  /**
   *
   * @param {string} string -
   * @returns {FlatString} -
   */
  function asFlatString(s) {
    return s.trim().replace(/\s\s+/g, ' ')
  }
  /**
   *
   * @param node -
   * @param options - These are not optional to prevent accidentally calling it without options in `computeAccessibleName`
   * @returns {boolean} -
   */

  function isHidden(node, getComputedStyleImplementation) {
    if (!isElement(node)) {
      return false
    }

    if (node.hasAttribute('hidden') || node.getAttribute('aria-hidden') === 'true') {
      return true
    }

    var style = getComputedStyleImplementation(node)
    return (
      style.getPropertyValue('display') === 'none' ||
      style.getPropertyValue('visibility') === 'hidden'
    )
  }
  /**
   * @param {Node} node -
   * @returns {boolean} - As defined in step 2E of https://w3c.github.io/accname/#mapping_additional_nd_te
   */

  function isControl(node) {
    return (
      hasAnyConcreteRoles(node, ['button', 'combobox', 'listbox', 'textbox']) ||
      hasAbstractRole(node, 'range')
    )
  }

  function hasAbstractRole(node, role) {
    if (!isElement(node)) {
      return false
    }

    switch (role) {
      case 'range':
        return hasAnyConcreteRoles(node, [
          'meter',
          'progressbar',
          'scrollbar',
          'slider',
          'spinbutton',
        ])

      default:
        throw new TypeError(
          "No knowledge about abstract role '".concat(role, "'. This is likely a bug :("),
        )
    }
  }
  /**
   * element.querySelectorAll but also considers owned tree
   * @param element
   * @param selectors
   */

  function querySelectorAllSubtree(element, selectors) {
    var elements = arrayFrom(element.querySelectorAll(selectors))
    queryIdRefs(element, 'aria-owns').forEach(function (root) {
      // babel transpiles this assuming an iterator
      elements.push.apply(elements, arrayFrom(root.querySelectorAll(selectors)))
    })
    return elements
  }

  function querySelectedOptions(listbox) {
    if (isHTMLSelectElement(listbox)) {
      // IE11 polyfill
      return listbox.selectedOptions || querySelectorAllSubtree(listbox, '[selected]')
    }

    return querySelectorAllSubtree(listbox, '[aria-selected="true"]')
  }

  function isMarkedPresentational(node) {
    return hasAnyConcreteRoles(node, ['none', 'presentation'])
  }
  /**
   * Elements specifically listed in html-aam
   *
   * We don't need this for `label` or `legend` elements.
   * Their implicit roles already allow "naming from content".
   *
   * sources:
   *
   * - https://w3c.github.io/html-aam/#table-element
   */

  function isNativeHostLanguageTextAlternativeElement(node) {
    return isHTMLTableCaptionElement(node)
  }
  /**
   * https://w3c.github.io/aria/#namefromcontent
   */

  function allowsNameFromContent(node) {
    return hasAnyConcreteRoles(node, [
      'button',
      'cell',
      'checkbox',
      'columnheader',
      'gridcell',
      'heading',
      'label',
      'legend',
      'link',
      'menuitem',
      'menuitemcheckbox',
      'menuitemradio',
      'option',
      'radio',
      'row',
      'rowheader',
      'switch',
      'tab',
      'tooltip',
      'treeitem',
    ])
  }
  /**
   * TODO https://github.com/eps1lon/dom-accessibility-api/issues/100
   */

  function isDescendantOfNativeHostLanguageTextAlternativeElement(node) { // eslint-disable-next-line @typescript-eslint/no-unused-vars -- not implemented yet
    return false
  }

  function getValueOfTextbox(element) {
    if (isHTMLInputElement(element) || isHTMLTextAreaElement(element)) {
      return element.value
    } // https://github.com/eps1lon/dom-accessibility-api/issues/4

    return element.textContent || ''
  }

  function getTextualContent(declaration) {
    var content = declaration.getPropertyValue('content')

    if (/^["'].*["']$/.test(content)) {
      return content.slice(1, -1)
    }

    return ''
  }
  /**
   * https://html.spec.whatwg.org/multipage/forms.html#category-label
   * TODO: form-associated custom elements
   * @param element
   */

  function isLabelableElement(element) {
    var localName = getLocalName(element)
    return (
      localName === 'button' ||
      (localName === 'input' && element.getAttribute('type') !== 'hidden') ||
      localName === 'meter' ||
      localName === 'output' ||
      localName === 'progress' ||
      localName === 'select' ||
      localName === 'textarea'
    )
  }
  /**
   * > [...], then the first such descendant in tree order is the label element's labeled control.
   * -- https://html.spec.whatwg.org/multipage/forms.html#labeled-control
   * @param element
   */

  function findLabelableElement(element) {
    if (isLabelableElement(element)) {
      return element
    }

    var labelableElement = null
    element.childNodes.forEach(function (childNode) {
      if (labelableElement === null && isElement(childNode)) {
        var descendantLabelableElement = findLabelableElement(childNode)

        if (descendantLabelableElement !== null) {
          labelableElement = descendantLabelableElement
        }
      }
    })
    return labelableElement
  }
  /**
   * Polyfill of HTMLLabelElement.control
   * https://html.spec.whatwg.org/multipage/forms.html#labeled-control
   * @param label
   */

  function getControlOfLabel(label) {
    if (label.control !== undefined) {
      return label.control
    }

    var htmlFor = label.getAttribute('for')

    if (htmlFor !== null) {
      return label.ownerDocument.getElementById(htmlFor)
    }

    return findLabelableElement(label)
  }
  /**
   * Polyfill of HTMLInputElement.labels
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/labels
   * @param element
   */

  function getLabels(element) {
    var labelsProperty = element.labels

    if (labelsProperty === null) {
      return labelsProperty
    }

    if (labelsProperty !== undefined) {
      return arrayFrom(labelsProperty)
    }

    if (!isLabelableElement(element)) {
      return null
    }

    var document = element.ownerDocument
    return arrayFrom(document.querySelectorAll('label')).filter(function (label) {
      return getControlOfLabel(label) === element
    })
  }
  /**
   * implements https://w3c.github.io/accname/#mapping_additional_nd_te
   * @param root
   * @param [options]
   * @parma [options.getComputedStyle] - mock window.getComputedStyle. Needs `content`, `display` and `visibility`
   */

  function computeTextAlternative(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
    var consultedNodes = new SetLike$1()
    var window = safeWindow(root)
    var _options$compute = options.compute,
      compute = _options$compute === void 0 ? 'name' : _options$compute,
      _options$computedStyl = options.computedStyleSupportsPseudoElements,
      computedStyleSupportsPseudoElements =
        _options$computedStyl === void 0
          ? options.getComputedStyle !== undefined
          : _options$computedStyl,
      _options$getComputedS = options.getComputedStyle,
      getComputedStyle =
        _options$getComputedS === void 0
          ? window.getComputedStyle.bind(window)
          : _options$getComputedS // 2F.i

    function computeMiscTextAlternative(node, context) {
      var accumulatedText = ''

      if (isElement(node) && computedStyleSupportsPseudoElements) {
        var pseudoBefore = getComputedStyle(node, '::before')
        var beforeContent = getTextualContent(pseudoBefore)
        accumulatedText = ''.concat(beforeContent, ' ').concat(accumulatedText)
      } // FIXME: This is not defined in the spec
      // But it is required in the web-platform-test

      var childNodes = arrayFrom(node.childNodes).concat(queryIdRefs(node, 'aria-owns'))
      childNodes.forEach(function (child) {
        var result = computeTextAlternative(child, {
          isEmbeddedInLabel: context.isEmbeddedInLabel,
          isReferenced: false,
          recursion: true,
        }) // TODO: Unclear why display affects delimiter
        // see https://github.com/w3c/accname/issues/3

        var display = isElement(child)
          ? getComputedStyle(child).getPropertyValue('display')
          : 'inline'
        var separator = display !== 'inline' ? ' ' : '' // trailing separator for wpt tests

        accumulatedText += ''.concat(separator).concat(result).concat(separator)
      })

      if (isElement(node) && computedStyleSupportsPseudoElements) {
        var pseudoAfter = getComputedStyle(node, '::after')
        var afterContent = getTextualContent(pseudoAfter)
        accumulatedText = ''.concat(accumulatedText, ' ').concat(afterContent)
      }

      return accumulatedText
    }

    function computeAttributeTextAlternative(node) {
      if (!isElement(node)) {
        return null
      }

      var titleAttribute = node.getAttributeNode('title')

      if (titleAttribute !== null && !consultedNodes.has(titleAttribute)) {
        consultedNodes.add(titleAttribute)
        return titleAttribute.value
      }

      var altAttribute = node.getAttributeNode('alt')

      if (altAttribute !== null && !consultedNodes.has(altAttribute)) {
        consultedNodes.add(altAttribute)
        return altAttribute.value
      }

      if (isHTMLInputElement(node) && node.type === 'button') {
        consultedNodes.add(node)
        return node.getAttribute('value') || ''
      }

      return null
    }

    function computeElementTextAlternative(node) {
      // https://w3c.github.io/html-aam/#fieldset-and-legend-elements
      if (isHTMLFieldSetElement(node)) {
        consultedNodes.add(node)
        var children = arrayFrom(node.childNodes)

        for (var i = 0; i < children.length; i += 1) {
          var child = children[i]

          if (isHTMLLegendElement(child)) {
            return computeTextAlternative(child, {
              isEmbeddedInLabel: false,
              isReferenced: false,
              recursion: false,
            })
          }
        }

        return null
      } // https://w3c.github.io/html-aam/#table-element

      if (isHTMLTableElement(node)) {
        consultedNodes.add(node)

        var _children = arrayFrom(node.childNodes)

        for (var _i = 0; _i < _children.length; _i += 1) {
          var _child = _children[_i]

          if (isHTMLTableCaptionElement(_child)) {
            return computeTextAlternative(_child, {
              isEmbeddedInLabel: false,
              isReferenced: false,
              recursion: false,
            })
          }
        }

        return null
      } // https://www.w3.org/TR/svg-aam-1.0/

      if (isSVGSVGElement(node)) {
        consultedNodes.add(node)

        var _children2 = arrayFrom(node.childNodes)

        for (var _i2 = 0; _i2 < _children2.length; _i2 += 1) {
          var _child2 = _children2[_i2]

          if (isSVGTitleElement(_child2)) {
            return _child2.textContent
          }
        }

        return null
      }

      if (!(isHTMLInputElement(node) || isHTMLSelectElement(node) || isHTMLTextAreaElement(node))) {
        return null
      }

      var input = node // https://w3c.github.io/html-aam/#input-type-text-input-type-password-input-type-search-input-type-tel-input-type-email-input-type-url-and-textarea-element-accessible-description-computation

      if (input.type === 'submit') {
        return 'Submit'
      }

      if (input.type === 'reset') {
        return 'Reset'
      }

      var labels = getLabels(input)

      if (labels === null || labels.length === 0) {
        return null
      }

      consultedNodes.add(input)
      return arrayFrom(labels)
        .map(function (element) {
          return computeTextAlternative(element, {
            isEmbeddedInLabel: true,
            isReferenced: false,
            recursion: true,
          })
        })
        .filter(function (label) {
          return label.length > 0
        })
        .join(' ')
    }

    function computeTextAlternative(current, context) {
      if (consultedNodes.has(current)) {
        return ''
      } // special casing, cheating to make tests pass
      // https://github.com/w3c/accname/issues/67

      if (hasAnyConcreteRoles(current, ['menu'])) {
        consultedNodes.add(current)
        return ''
      } // 2A

      if (isHidden(current, getComputedStyle) && !context.isReferenced) {
        consultedNodes.add(current)
        return ''
      } // 2B

      var labelElements = queryIdRefs(current, 'aria-labelledby')

      if (compute === 'name' && !context.isReferenced && labelElements.length > 0) {
        return labelElements
          .map(function (element) {
            return computeTextAlternative(element, {
              isEmbeddedInLabel: context.isEmbeddedInLabel,
              isReferenced: true,
              // thais isn't recursion as specified, otherwise we would skip
              // `aria-label` in
              // <input id="myself" aria-label="foo" aria-labelledby="myself"
              recursion: false,
            })
          })
          .join(' ')
      } // 2C
      // Changed from the spec in anticipation of https://github.com/w3c/accname/issues/64
      // spec says we should only consider skipping if we have a non-empty label

      var skipToStep2E = context.recursion && isControl(current) && compute === 'name'

      if (!skipToStep2E) {
        var ariaLabel = ((isElement(current) && current.getAttribute('aria-label')) || '').trim()

        if (ariaLabel !== '' && compute === 'name') {
          consultedNodes.add(current)
          return ariaLabel
        } // 2D

        if (!isMarkedPresentational(current)) {
          var elementTextAlternative = computeElementTextAlternative(current)

          if (elementTextAlternative !== null) {
            consultedNodes.add(current)
            return elementTextAlternative
          }

          var attributeTextAlternative = computeAttributeTextAlternative(current)

          if (attributeTextAlternative !== null) {
            consultedNodes.add(current)
            return attributeTextAlternative
          }
        }
      } // 2E

      if (skipToStep2E || context.isEmbeddedInLabel || context.isReferenced) {
        if (hasAnyConcreteRoles(current, ['combobox', 'listbox'])) {
          consultedNodes.add(current)
          var selectedOptions = querySelectedOptions(current)

          if (selectedOptions.length === 0) {
            // defined per test `name_heading_combobox`
            return isHTMLInputElement(current) ? current.value : ''
          }

          return arrayFrom(selectedOptions)
            .map(function (selectedOption) {
              return computeTextAlternative(selectedOption, {
                isEmbeddedInLabel: context.isEmbeddedInLabel,
                isReferenced: false,
                recursion: true,
              })
            })
            .join(' ')
        }

        if (hasAbstractRole(current, 'range')) {
          consultedNodes.add(current)

          if (current.hasAttribute('aria-valuetext')) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe due to hasAttribute guard
            return current.getAttribute('aria-valuetext')
          }

          if (current.hasAttribute('aria-valuenow')) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe due to hasAttribute guard
            return current.getAttribute('aria-valuenow')
          } // Otherwise, use the value as specified by a host language attribute.

          return current.getAttribute('value') || ''
        }

        if (hasAnyConcreteRoles(current, ['textbox'])) {
          consultedNodes.add(current)
          return getValueOfTextbox(current)
        }
      } // 2F: https://w3c.github.io/accname/#step2F

      if (
        allowsNameFromContent(current) ||
        (isElement(current) && context.isReferenced) ||
        isNativeHostLanguageTextAlternativeElement(current) ||
        isDescendantOfNativeHostLanguageTextAlternativeElement()
      ) {
        consultedNodes.add(current)
        return computeMiscTextAlternative(current, {
          isEmbeddedInLabel: context.isEmbeddedInLabel,
          isReferenced: false,
        })
      }

      if (current.nodeType === current.TEXT_NODE) {
        consultedNodes.add(current)
        return current.textContent || ''
      }

      if (context.recursion) {
        consultedNodes.add(current)
        return computeMiscTextAlternative(current, {
          isEmbeddedInLabel: context.isEmbeddedInLabel,
          isReferenced: false,
        })
      }

      consultedNodes.add(current)
      return ''
    }

    return asFlatString(
      computeTextAlternative(root, {
        isEmbeddedInLabel: false,
        // by spec computeAccessibleDescription starts with the referenced elements as roots
        isReferenced: compute === 'description',
        recursion: false,
      }),
    )
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object)
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object)
      if (enumerableOnly)
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable
        })
      keys.push.apply(keys, symbols)
    }
    return keys
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {}
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty$1(target, key, source[key])
        })
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
        })
      }
    }
    return target
  }

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      })
    } else {
      obj[key] = value
    }
    return obj
  }
  /**
   * implements https://w3c.github.io/accname/#mapping_additional_nd_description
   * @param root
   * @param [options]
   * @parma [options.getComputedStyle] - mock window.getComputedStyle. Needs `content`, `display` and `visibility`
   */

  function computeAccessibleDescription(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
    var description = queryIdRefs(root, 'aria-describedby')
      .map(function (element) {
        return computeTextAlternative(
          element,
          _objectSpread(
            _objectSpread({}, options),
            {},
            {
              compute: 'description',
            },
          ),
        )
      })
      .join(' ') // TODO: Technically we need to make sure that node wasn't used for the accessible name
    //       This causes `description_1.0_combobox-focusable-manual` to fail
    //
    // https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation
    // says for so many elements to use the `title` that we assume all elements are considered

    if (description === '') {
      var title = root.getAttribute('title')
      description = title === null ? '' : title
    }

    return description
  }

  /**
   * https://w3c.github.io/aria/#namefromprohibited
   */

  function prohibitsNaming(node) {
    return hasAnyConcreteRoles(node, [
      'caption',
      'code',
      'deletion',
      'emphasis',
      'generic',
      'insertion',
      'paragraph',
      'presentation',
      'strong',
      'subscript',
      'superscript',
    ])
  }
  /**
   * implements https://w3c.github.io/accname/#mapping_additional_nd_name
   * @param root
   * @param [options]
   * @parma [options.getComputedStyle] - mock window.getComputedStyle. Needs `content`, `display` and `visibility`
   */

  function computeAccessibleName(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}

    if (prohibitsNaming(root)) {
      return ''
    }

    return computeTextAlternative(root, options)
  }

  var dist = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    computeAccessibleDescription: computeAccessibleDescription,
    computeAccessibleName: computeAccessibleName,
    getRole: getRole,
  })

  var interopRequireDefault$1 = createCommonjsModule(function (module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule
        ? obj
        : {
            default: obj,
          }
    }

    module.exports = _interopRequireDefault
  })

  var check = function (it) {
    return it && it.Math == Math && it
  }

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global_1 =
    // eslint-disable-next-line no-undef
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func
    Function('return this')()

  var fails = function (exec) {
    try {
      return !!exec()
    } catch (error) {
      return true
    }
  }

  // Thank's IE8 for his funny defineProperty
  var descriptors = !fails(function () {
    return (
      Object.defineProperty({}, 1, {
        get: function () {
          return 7
        },
      })[1] != 7
    )
  })

  var nativePropertyIsEnumerable = {}.propertyIsEnumerable
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({1: 2}, 1)

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
  var f = NASHORN_BUG
    ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V)
        return !!descriptor && descriptor.enumerable
      }
    : nativePropertyIsEnumerable

  var objectPropertyIsEnumerable = {
    f: f,
  }

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value,
    }
  }

  var toString = {}.toString

  var classofRaw = function (it) {
    return toString.call(it).slice(8, -1)
  }

  var split = ''.split

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins
    return !Object('z').propertyIsEnumerable(0)
  })
    ? function (it) {
        return classofRaw(it) == 'String' ? split.call(it, '') : Object(it)
      }
    : Object

  // `RequireObjectCoercible` abstract operation
  // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it)
    return it
  }

  // toObject with fallback for non-array-like ES3 strings

  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it))
  }

  var isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function'
  }

  // `ToPrimitive` abstract operation
  // https://tc39.github.io/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var toPrimitive = function (input, PREFERRED_STRING) {
    if (!isObject(input)) return input
    var fn, val
    if (
      PREFERRED_STRING &&
      typeof (fn = input.toString) == 'function' &&
      !isObject((val = fn.call(input)))
    )
      return val
    if (typeof (fn = input.valueOf) == 'function' && !isObject((val = fn.call(input)))) return val
    if (
      !PREFERRED_STRING &&
      typeof (fn = input.toString) == 'function' &&
      !isObject((val = fn.call(input)))
    )
      return val
    throw TypeError("Can't convert object to primitive value")
  }

  var hasOwnProperty = {}.hasOwnProperty

  var has = function (it, key) {
    return hasOwnProperty.call(it, key)
  }

  var document$1 = global_1.document
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject(document$1) && isObject(document$1.createElement)

  var documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {}
  }

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine =
    !descriptors &&
    !fails(function () {
      return (
        Object.defineProperty(documentCreateElement('div'), 'a', {
          get: function () {
            return 7
          },
        }).a != 7
      )
    })

  var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
  var f$1 = descriptors
    ? nativeGetOwnPropertyDescriptor
    : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O)
        P = toPrimitive(P, true)
        if (ie8DomDefine)
          try {
            return nativeGetOwnPropertyDescriptor(O, P)
          } catch (error) {
            /* empty */
          }
        if (has(O, P))
          return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P])
      }

  var objectGetOwnPropertyDescriptor = {
    f: f$1,
  }

  var replacement = /#|\.prototype\./

  var isForced = function (feature, detection) {
    var value = data[normalize(feature)]
    return value == POLYFILL
      ? true
      : value == NATIVE
      ? false
      : typeof detection == 'function'
      ? fails(detection)
      : !!detection
  }

  var normalize = (isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase()
  })

  var data = (isForced.data = {})
  var NATIVE = (isForced.NATIVE = 'N')
  var POLYFILL = (isForced.POLYFILL = 'P')

  var isForced_1 = isForced

  var path = {}

  var aFunction = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function')
    }
    return it
  }

  // optional / simple context binding
  var functionBindContext = function (fn, that, length) {
    aFunction(fn)
    if (that === undefined) return fn
    switch (length) {
      case 0:
        return function () {
          return fn.call(that)
        }
      case 1:
        return function (a) {
          return fn.call(that, a)
        }
      case 2:
        return function (a, b) {
          return fn.call(that, a, b)
        }
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c)
        }
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments)
    }
  }

  var anObject = function (it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + ' is not an object')
    }
    return it
  }

  var nativeDefineProperty = Object.defineProperty

  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  var f$2 = descriptors
    ? nativeDefineProperty
    : function defineProperty(O, P, Attributes) {
        anObject(O)
        P = toPrimitive(P, true)
        anObject(Attributes)
        if (ie8DomDefine)
          try {
            return nativeDefineProperty(O, P, Attributes)
          } catch (error) {
            /* empty */
          }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported')
        if ('value' in Attributes) O[P] = Attributes.value
        return O
      }

  var objectDefineProperty = {
    f: f$2,
  }

  var createNonEnumerableProperty = descriptors
    ? function (object, key, value) {
        return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value))
      }
    : function (object, key, value) {
        object[key] = value
        return object
      }

  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f

  var wrapConstructor = function (NativeConstructor) {
    var Wrapper = function (a, b, c) {
      if (this instanceof NativeConstructor) {
        switch (arguments.length) {
          case 0:
            return new NativeConstructor()
          case 1:
            return new NativeConstructor(a)
          case 2:
            return new NativeConstructor(a, b)
        }
        return new NativeConstructor(a, b, c)
      }
      return NativeConstructor.apply(this, arguments)
    }
    Wrapper.prototype = NativeConstructor.prototype
    return Wrapper
  }

  /*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/
  var _export = function (options, source) {
    var TARGET = options.target
    var GLOBAL = options.global
    var STATIC = options.stat
    var PROTO = options.proto

    var nativeSource = GLOBAL
      ? global_1
      : STATIC
      ? global_1[TARGET]
      : (global_1[TARGET] || {}).prototype

    var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {})
    var targetPrototype = target.prototype

    var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE
    var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor

    for (key in source) {
      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced)
      // contains in native
      USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key)

      targetProperty = target[key]

      if (USE_NATIVE)
        if (options.noTargetGet) {
          descriptor = getOwnPropertyDescriptor$1(nativeSource, key)
          nativeProperty = descriptor && descriptor.value
        } else nativeProperty = nativeSource[key]

      // export native or implementation
      sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key]

      if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue

      // bind timers to global for call from export context
      if (options.bind && USE_NATIVE) resultProperty = functionBindContext(sourceProperty, global_1)
      // wrap global constructors for prevent changs in this version
      else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty)
      // make static versions for prototype methods
      else if (PROTO && typeof sourceProperty == 'function')
        resultProperty = functionBindContext(Function.call, sourceProperty)
      // default case
      else resultProperty = sourceProperty

      // add a flag to not completely full polyfills
      if (
        options.sham ||
        (sourceProperty && sourceProperty.sham) ||
        (targetProperty && targetProperty.sham)
      ) {
        createNonEnumerableProperty(resultProperty, 'sham', true)
      }

      target[key] = resultProperty

      if (PROTO) {
        VIRTUAL_PROTOTYPE = TARGET + 'Prototype'
        if (!has(path, VIRTUAL_PROTOTYPE)) {
          createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {})
        }
        // export virtual prototype methods
        path[VIRTUAL_PROTOTYPE][key] = sourceProperty
        // export real prototype methods
        if (options.real && targetPrototype && !targetPrototype[key]) {
          createNonEnumerableProperty(targetPrototype, key, sourceProperty)
        }
      }
    }
  }

  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  _export(
    {target: 'Object', stat: true, forced: !descriptors, sham: !descriptors},
    {
      defineProperty: objectDefineProperty.f,
    },
  )

  var defineProperty_1 = createCommonjsModule(function (module) {
    var Object = path.Object

    var defineProperty = (module.exports = function defineProperty(it, key, desc) {
      return Object.defineProperty(it, key, desc)
    })

    if (Object.defineProperty.sham) defineProperty.sham = true
  })

  var defineProperty = defineProperty_1

  var defineProperty$1 = defineProperty

  var hiddenKeys = {}

  var id = 0
  var postfix = Math.random()

  var uid = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36)
  }

  var freezing = !fails(function () {
    return Object.isExtensible(Object.preventExtensions({}))
  })

  var internalMetadata = createCommonjsModule(function (module) {
    var defineProperty = objectDefineProperty.f

    var METADATA = uid('meta')
    var id = 0

    var isExtensible =
      Object.isExtensible ||
      function () {
        return true
      }

    var setMetadata = function (it) {
      defineProperty(it, METADATA, {
        value: {
          objectID: 'O' + ++id, // object ID
          weakData: {}, // weak collections IDs
        },
      })
    }

    var fastKey = function (it, create) {
      // return a primitive with prefix
      if (!isObject(it))
        return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it
      if (!has(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F'
        // not necessary to add metadata
        if (!create) return 'E'
        // add missing metadata
        setMetadata(it)
        // return object ID
      }
      return it[METADATA].objectID
    }

    var getWeakData = function (it, create) {
      if (!has(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true
        // not necessary to add metadata
        if (!create) return false
        // add missing metadata
        setMetadata(it)
        // return the store of weak collections IDs
      }
      return it[METADATA].weakData
    }

    // add metadata on freeze-family methods calling
    var onFreeze = function (it) {
      if (freezing && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it)
      return it
    }

    var meta = (module.exports = {
      REQUIRED: false,
      fastKey: fastKey,
      getWeakData: getWeakData,
      onFreeze: onFreeze,
    })

    hiddenKeys[METADATA] = true
  })

  var setGlobal = function (key, value) {
    try {
      createNonEnumerableProperty(global_1, key, value)
    } catch (error) {
      global_1[key] = value
    }
    return value
  }

  var SHARED = '__core-js_shared__'
  var store = global_1[SHARED] || setGlobal(SHARED, {})

  var sharedStore = store

  var shared = createCommonjsModule(function (module) {
    ;(module.exports = function (key, value) {
      return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {})
    })('versions', []).push({
      version: '3.6.4',
      mode: 'pure',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
    })
  })

  var nativeSymbol =
    !!Object.getOwnPropertySymbols &&
    !fails(function () {
      // Chrome 38 Symbol has incorrect toString conversion
      // eslint-disable-next-line no-undef
      return !String(Symbol())
    })

  var useSymbolAsUid =
    nativeSymbol &&
    // eslint-disable-next-line no-undef
    !Symbol.sham &&
    // eslint-disable-next-line no-undef
    typeof Symbol.iterator == 'symbol'

  var WellKnownSymbolsStore = shared('wks')
  var Symbol$1 = global_1.Symbol
  var createWellKnownSymbol = useSymbolAsUid
    ? Symbol$1
    : (Symbol$1 && Symbol$1.withoutSetter) || uid

  var wellKnownSymbol = function (name) {
    if (!has(WellKnownSymbolsStore, name)) {
      if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name]
      else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name)
    }
    return WellKnownSymbolsStore[name]
  }

  var iterators = {}

  var ITERATOR = wellKnownSymbol('iterator')
  var ArrayPrototype = Array.prototype

  // check on default Array iterator
  var isArrayIteratorMethod = function (it) {
    return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR] === it)
  }

  var ceil = Math.ceil
  var floor = Math.floor

  // `ToInteger` abstract operation
  // https://tc39.github.io/ecma262/#sec-tointeger
  var toInteger$1 = function (argument) {
    return isNaN((argument = +argument)) ? 0 : (argument > 0 ? floor : ceil)(argument)
  }

  var min = Math.min

  // `ToLength` abstract operation
  // https://tc39.github.io/ecma262/#sec-tolength
  var toLength$1 = function (argument) {
    return argument > 0 ? min(toInteger$1(argument), 0x1fffffffffffff) : 0 // 2 ** 53 - 1 == 9007199254740991
  }

  var TO_STRING_TAG = wellKnownSymbol('toStringTag')
  var test = {}

  test[TO_STRING_TAG] = 'z'

  var toStringTagSupport = String(test) === '[object z]'

  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag')
  // ES3 wrong here
  var CORRECT_ARGUMENTS =
    classofRaw(
      (function () {
        return arguments
      })(),
    ) == 'Arguments'

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key]
    } catch (error) {
      /* empty */
    }
  }

  // getting tag from ES6+ `Object.prototype.toString`
  var classof = toStringTagSupport
    ? classofRaw
    : function (it) {
        var O, tag, result
        return it === undefined
          ? 'Undefined'
          : it === null
          ? 'Null'
          : // @@toStringTag case
          typeof (tag = tryGet((O = Object(it)), TO_STRING_TAG$1)) == 'string'
          ? tag
          : // builtinTag case
          CORRECT_ARGUMENTS
          ? classofRaw(O)
          : // ES3 arguments fallback
          (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function'
          ? 'Arguments'
          : result
      }

  var ITERATOR$1 = wellKnownSymbol('iterator')

  var getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$1] || it['@@iterator'] || iterators[classof(it)]
  }

  // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value)
      // 7.4.6 IteratorClose(iterator, completion)
    } catch (error) {
      var returnMethod = iterator['return']
      if (returnMethod !== undefined) anObject(returnMethod.call(iterator))
      throw error
    }
  }

  var iterate_1 = createCommonjsModule(function (module) {
    var Result = function (stopped, result) {
      this.stopped = stopped
      this.result = result
    }

    var iterate = (module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
      var boundFunction = functionBindContext(fn, that, AS_ENTRIES ? 2 : 1)
      var iterator, iterFn, index, length, result, next, step

      if (IS_ITERATOR) {
        iterator = iterable
      } else {
        iterFn = getIteratorMethod(iterable)
        if (typeof iterFn != 'function') throw TypeError('Target is not iterable')
        // optimisation for array iterators
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = toLength$1(iterable.length); length > index; index++) {
            result = AS_ENTRIES
              ? boundFunction(anObject((step = iterable[index]))[0], step[1])
              : boundFunction(iterable[index])
            if (result && result instanceof Result) return result
          }
          return new Result(false)
        }
        iterator = iterFn.call(iterable)
      }

      next = iterator.next
      while (!(step = next.call(iterator)).done) {
        result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES)
        if (typeof result == 'object' && result && result instanceof Result) return result
      }
      return new Result(false)
    })

    iterate.stop = function (result) {
      return new Result(true, result)
    }
  })

  var anInstance = function (it, Constructor, name) {
    if (!(it instanceof Constructor)) {
      throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation')
    }
    return it
  }

  // `Object.prototype.toString` method implementation
  // https://tc39.github.io/ecma262/#sec-object.prototype.tostring
  var objectToString = toStringTagSupport
    ? {}.toString
    : function toString() {
        return '[object ' + classof(this) + ']'
      }

  var defineProperty$2 = objectDefineProperty.f

  var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag')

  var setToStringTag = function (it, TAG, STATIC, SET_METHOD) {
    if (it) {
      var target = STATIC ? it : it.prototype
      if (!has(target, TO_STRING_TAG$2)) {
        defineProperty$2(target, TO_STRING_TAG$2, {configurable: true, value: TAG})
      }
      if (SET_METHOD && !toStringTagSupport) {
        createNonEnumerableProperty(target, 'toString', objectToString)
      }
    }
  }

  // `ToObject` abstract operation
  // https://tc39.github.io/ecma262/#sec-toobject
  var toObject = function (argument) {
    return Object(requireObjectCoercible(argument))
  }

  // `IsArray` abstract operation
  // https://tc39.github.io/ecma262/#sec-isarray
  var isArray =
    Array.isArray ||
    function isArray(arg) {
      return classofRaw(arg) == 'Array'
    }

  var SPECIES = wellKnownSymbol('species')

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.github.io/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate = function (originalArray, length) {
    var C
    if (isArray(originalArray)) {
      C = originalArray.constructor
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined
      else if (isObject(C)) {
        C = C[SPECIES]
        if (C === null) C = undefined
      }
    }
    return new (C === undefined ? Array : C)(length === 0 ? 0 : length)
  }

  var push = [].push

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
  var createMethod = function (TYPE) {
    var IS_MAP = TYPE == 1
    var IS_FILTER = TYPE == 2
    var IS_SOME = TYPE == 3
    var IS_EVERY = TYPE == 4
    var IS_FIND_INDEX = TYPE == 6
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject($this)
      var self = indexedObject(O)
      var boundFunction = functionBindContext(callbackfn, that, 3)
      var length = toLength$1(self.length)
      var index = 0
      var create = specificCreate || arraySpeciesCreate
      var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      var value, result
      for (; length > index; index++)
        if (NO_HOLES || index in self) {
          value = self[index]
          result = boundFunction(value, index, O)
          if (TYPE) {
            if (IS_MAP) target[index] = result
            // map
            else if (result)
              switch (TYPE) {
                case 3:
                  return true // some
                case 5:
                  return value // find
                case 6:
                  return index // findIndex
                case 2:
                  push.call(target, value) // filter
              }
            else if (IS_EVERY) return false // every
          }
        }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target
    }
  }

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
    forEach: createMethod(0),
    // `Array.prototype.map` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.map
    map: createMethod(1),
    // `Array.prototype.filter` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.filter
    filter: createMethod(2),
    // `Array.prototype.some` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.some
    some: createMethod(3),
    // `Array.prototype.every` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.every
    every: createMethod(4),
    // `Array.prototype.find` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.find
    find: createMethod(5),
    // `Array.prototype.findIndex` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod(6),
  }

  var functionToString = Function.toString

  // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
  if (typeof sharedStore.inspectSource != 'function') {
    sharedStore.inspectSource = function (it) {
      return functionToString.call(it)
    }
  }

  var inspectSource = sharedStore.inspectSource

  var WeakMap$1 = global_1.WeakMap

  var nativeWeakMap =
    typeof WeakMap$1 === 'function' && /native code/.test(inspectSource(WeakMap$1))

  var keys = shared('keys')

  var sharedKey = function (key) {
    return keys[key] || (keys[key] = uid(key))
  }

  var WeakMap$2 = global_1.WeakMap
  var set, get, has$1

  var enforce = function (it) {
    return has$1(it) ? get(it) : set(it, {})
  }

  var getterFor = function (TYPE) {
    return function (it) {
      var state
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required')
      }
      return state
    }
  }

  if (nativeWeakMap) {
    var store$1 = new WeakMap$2()
    var wmget = store$1.get
    var wmhas = store$1.has
    var wmset = store$1.set
    set = function (it, metadata) {
      wmset.call(store$1, it, metadata)
      return metadata
    }
    get = function (it) {
      return wmget.call(store$1, it) || {}
    }
    has$1 = function (it) {
      return wmhas.call(store$1, it)
    }
  } else {
    var STATE = sharedKey('state')
    hiddenKeys[STATE] = true
    set = function (it, metadata) {
      createNonEnumerableProperty(it, STATE, metadata)
      return metadata
    }
    get = function (it) {
      return has(it, STATE) ? it[STATE] : {}
    }
    has$1 = function (it) {
      return has(it, STATE)
    }
  }

  var internalState = {
    set: set,
    get: get,
    has: has$1,
    enforce: enforce,
    getterFor: getterFor,
  }

  var defineProperty$3 = objectDefineProperty.f
  var forEach = arrayIteration.forEach

  var setInternalState = internalState.set
  var internalStateGetterFor = internalState.getterFor

  var collection = function (CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1
    var ADDER = IS_MAP ? 'set' : 'add'
    var NativeConstructor = global_1[CONSTRUCTOR_NAME]
    var NativePrototype = NativeConstructor && NativeConstructor.prototype
    var exported = {}
    var Constructor

    if (
      !descriptors ||
      typeof NativeConstructor != 'function' ||
      !(
        IS_WEAK ||
        (NativePrototype.forEach &&
          !fails(function () {
            new NativeConstructor().entries().next()
          }))
      )
    ) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER)
      internalMetadata.REQUIRED = true
    } else {
      Constructor = wrapper(function (target, iterable) {
        setInternalState(anInstance(target, Constructor, CONSTRUCTOR_NAME), {
          type: CONSTRUCTOR_NAME,
          collection: new NativeConstructor(),
        })
        if (iterable != undefined) iterate_1(iterable, target[ADDER], target, IS_MAP)
      })

      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME)

      forEach(
        ['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'],
        function (KEY) {
          var IS_ADDER = KEY == 'add' || KEY == 'set'
          if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
            createNonEnumerableProperty(Constructor.prototype, KEY, function (a, b) {
              var collection = getInternalState(this).collection
              if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false
              var result = collection[KEY](a === 0 ? 0 : a, b)
              return IS_ADDER ? this : result
            })
          }
        },
      )

      IS_WEAK ||
        defineProperty$3(Constructor.prototype, 'size', {
          configurable: true,
          get: function () {
            return getInternalState(this).collection.size
          },
        })
    }

    setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true)

    exported[CONSTRUCTOR_NAME] = Constructor
    _export({global: true, forced: true}, exported)

    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP)

    return Constructor
  }

  var max = Math.max
  var min$1 = Math.min

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex = function (index, length) {
    var integer = toInteger$1(index)
    return integer < 0 ? max(integer + length, 0) : min$1(integer, length)
  }

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$1 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this)
      var length = toLength$1(O.length)
      var index = toAbsoluteIndex(fromIndex, length)
      var value
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el)
        while (length > index) {
          value = O[index++]
          // eslint-disable-next-line no-self-compare
          if (value != value) return true
          // Array#indexOf ignores holes, Array#includes - not
        }
      else
        for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0
        }
      return !IS_INCLUDES && -1
    }
  }

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    includes: createMethod$1(true),
    // `Array.prototype.indexOf` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$1(false),
  }

  var indexOf = arrayIncludes.indexOf

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object)
    var i = 0
    var result = []
    var key
    for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key)
    // Don't enum bug & hidden keys
    while (names.length > i)
      if (has(O, (key = names[i++]))) {
        ~indexOf(result, key) || result.push(key)
      }
    return result
  }

  // IE8- don't enum bug keys
  var enumBugKeys = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ]

  // `Object.keys` method
  // https://tc39.github.io/ecma262/#sec-object.keys
  var objectKeys =
    Object.keys ||
    function keys(O) {
      return objectKeysInternal(O, enumBugKeys)
    }

  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  var objectDefineProperties = descriptors
    ? Object.defineProperties
    : function defineProperties(O, Properties) {
        anObject(O)
        var keys = objectKeys(Properties)
        var length = keys.length
        var index = 0
        var key
        while (length > index) objectDefineProperty.f(O, (key = keys[index++]), Properties[key])
        return O
      }

  var aFunction$1 = function (variable) {
    return typeof variable == 'function' ? variable : undefined
  }

  var getBuiltIn = function (namespace, method) {
    return arguments.length < 2
      ? aFunction$1(path[namespace]) || aFunction$1(global_1[namespace])
      : (path[namespace] && path[namespace][method]) ||
          (global_1[namespace] && global_1[namespace][method])
  }

  var html = getBuiltIn('document', 'documentElement')

  var GT = '>'
  var LT = '<'
  var PROTOTYPE = 'prototype'
  var SCRIPT = 'script'
  var IE_PROTO = sharedKey('IE_PROTO')

  var EmptyConstructor = function () {
    /* empty */
  }

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT
  }

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''))
    activeXDocument.close()
    var temp = activeXDocument.parentWindow.Object
    activeXDocument = null // avoid memory leak
    return temp
  }

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe')
    var JS = 'java' + SCRIPT + ':'
    var iframeDocument
    iframe.style.display = 'none'
    html.appendChild(iframe)
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS)
    iframeDocument = iframe.contentWindow.document
    iframeDocument.open()
    iframeDocument.write(scriptTag('document.F=Object'))
    iframeDocument.close()
    return iframeDocument.F
  }

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument
  var NullProtoObject = function () {
    try {
      /* global ActiveXObject */
      activeXDocument = document.domain && new ActiveXObject('htmlfile')
    } catch (error) {
      /* ignore */
    }
    NullProtoObject = activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument)
      : NullProtoObjectViaIFrame()
    var length = enumBugKeys.length
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]]
    return NullProtoObject()
  }

  hiddenKeys[IE_PROTO] = true

  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  var objectCreate =
    Object.create ||
    function create(O, Properties) {
      var result
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O)
        result = new EmptyConstructor()
        EmptyConstructor[PROTOTYPE] = null
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O
      } else result = NullProtoObject()
      return Properties === undefined ? result : objectDefineProperties(result, Properties)
    }

  var redefine = function (target, key, value, options) {
    if (options && options.enumerable) target[key] = value
    else createNonEnumerableProperty(target, key, value)
  }

  var redefineAll = function (target, src, options) {
    for (var key in src) {
      if (options && options.unsafe && target[key]) target[key] = src[key]
      else redefine(target, key, src[key], options)
    }
    return target
  }

  var correctPrototypeGetter = !fails(function () {
    function F() {
      /* empty */
    }
    F.prototype.constructor = null
    return Object.getPrototypeOf(new F()) !== F.prototype
  })

  var IE_PROTO$1 = sharedKey('IE_PROTO')
  var ObjectPrototype = Object.prototype

  // `Object.getPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-object.getprototypeof
  var objectGetPrototypeOf = correctPrototypeGetter
    ? Object.getPrototypeOf
    : function (O) {
        O = toObject(O)
        if (has(O, IE_PROTO$1)) return O[IE_PROTO$1]
        if (typeof O.constructor == 'function' && O instanceof O.constructor) {
          return O.constructor.prototype
        }
        return O instanceof Object ? ObjectPrototype : null
      }

  var ITERATOR$2 = wellKnownSymbol('iterator')
  var BUGGY_SAFARI_ITERATORS = false

  // `%IteratorPrototype%` object
  // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator

  if ([].keys) {
    arrayIterator = [].keys()
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true
    else {
      PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator))
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
        IteratorPrototype = PrototypeOfArrayIteratorPrototype
    }
  }

  if (IteratorPrototype == undefined) IteratorPrototype = {}

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS,
  }

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype

  var returnThis = function () {
    return this
  }

  var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator'
    IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
      next: createPropertyDescriptor(1, next),
    })
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true)
    iterators[TO_STRING_TAG] = returnThis
    return IteratorConstructor
  }

  var aPossiblePrototype = function (it) {
    if (!isObject(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype')
    }
    return it
  }

  // `Object.setPrototypeOf` method
  // https://tc39.github.io/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var objectSetPrototypeOf =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function () {
          var CORRECT_SETTER = false
          var test = {}
          var setter
          try {
            setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set
            setter.call(test, [])
            CORRECT_SETTER = test instanceof Array
          } catch (error) {
            /* empty */
          }
          return function setPrototypeOf(O, proto) {
            anObject(O)
            aPossiblePrototype(proto)
            if (CORRECT_SETTER) setter.call(O, proto)
            else O.__proto__ = proto
            return O
          }
        })()
      : undefined)

  var IteratorPrototype$2 = iteratorsCore.IteratorPrototype
  var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS
  var ITERATOR$3 = wellKnownSymbol('iterator')
  var KEYS = 'keys'
  var VALUES = 'values'
  var ENTRIES = 'entries'

  var returnThis$1 = function () {
    return this
  }

  var defineIterator = function (
    Iterable,
    NAME,
    IteratorConstructor,
    next,
    DEFAULT,
    IS_SET,
    FORCED,
  ) {
    createIteratorConstructor(IteratorConstructor, NAME, next)

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator
      if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND]
      switch (KIND) {
        case KEYS:
          return function keys() {
            return new IteratorConstructor(this, KIND)
          }
        case VALUES:
          return function values() {
            return new IteratorConstructor(this, KIND)
          }
        case ENTRIES:
          return function entries() {
            return new IteratorConstructor(this, KIND)
          }
      }
      return function () {
        return new IteratorConstructor(this)
      }
    }

    var TO_STRING_TAG = NAME + ' Iterator'
    var INCORRECT_VALUES_NAME = false
    var IterablePrototype = Iterable.prototype
    var nativeIterator =
      IterablePrototype[ITERATOR$3] ||
      IterablePrototype['@@iterator'] ||
      (DEFAULT && IterablePrototype[DEFAULT])
    var defaultIterator =
      (!BUGGY_SAFARI_ITERATORS$1 && nativeIterator) || getIterationMethod(DEFAULT)
    var anyNativeIterator =
      NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator
    var CurrentIteratorPrototype, methods, KEY

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()))
      if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true)
        iterators[TO_STRING_TAG] = returnThis$1
      }
    }

    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      INCORRECT_VALUES_NAME = true
      defaultIterator = function values() {
        return nativeIterator.call(this)
      }
    }

    // define iterator
    if (FORCED && IterablePrototype[ITERATOR$3] !== defaultIterator) {
      createNonEnumerableProperty(IterablePrototype, ITERATOR$3, defaultIterator)
    }
    iterators[NAME] = defaultIterator

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES),
      }
      if (FORCED)
        for (KEY in methods) {
          if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
            redefine(IterablePrototype, KEY, methods[KEY])
          }
        }
      else
        _export(
          {target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME},
          methods,
        )
    }

    return methods
  }

  var SPECIES$1 = wellKnownSymbol('species')

  var setSpecies = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME)
    var defineProperty = objectDefineProperty.f

    if (descriptors && Constructor && !Constructor[SPECIES$1]) {
      defineProperty(Constructor, SPECIES$1, {
        configurable: true,
        get: function () {
          return this
        },
      })
    }
  }

  var defineProperty$4 = objectDefineProperty.f

  var fastKey = internalMetadata.fastKey

  var setInternalState$1 = internalState.set
  var internalStateGetterFor$1 = internalState.getterFor

  var collectionStrong = {
    getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance(that, C, CONSTRUCTOR_NAME)
        setInternalState$1(that, {
          type: CONSTRUCTOR_NAME,
          index: objectCreate(null),
          first: undefined,
          last: undefined,
          size: 0,
        })
        if (!descriptors) that.size = 0
        if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP)
      })

      var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME)

      var define = function (that, key, value) {
        var state = getInternalState(that)
        var entry = getEntry(that, key)
        var previous, index
        // change existing entry
        if (entry) {
          entry.value = value
          // create new entry
        } else {
          state.last = entry = {
            index: (index = fastKey(key, true)),
            key: key,
            value: value,
            previous: (previous = state.last),
            next: undefined,
            removed: false,
          }
          if (!state.first) state.first = entry
          if (previous) previous.next = entry
          if (descriptors) state.size++
          else that.size++
          // add to index
          if (index !== 'F') state.index[index] = entry
        }
        return that
      }

      var getEntry = function (that, key) {
        var state = getInternalState(that)
        // fast case
        var index = fastKey(key)
        var entry
        if (index !== 'F') return state.index[index]
        // frozen object case
        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key == key) return entry
        }
      }

      redefineAll(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear() {
          var that = this
          var state = getInternalState(that)
          var data = state.index
          var entry = state.first
          while (entry) {
            entry.removed = true
            if (entry.previous) entry.previous = entry.previous.next = undefined
            delete data[entry.index]
            entry = entry.next
          }
          state.first = state.last = undefined
          if (descriptors) state.size = 0
          else that.size = 0
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        delete: function (key) {
          var that = this
          var state = getInternalState(that)
          var entry = getEntry(that, key)
          if (entry) {
            var next = entry.next
            var prev = entry.previous
            delete state.index[entry.index]
            entry.removed = true
            if (prev) prev.next = next
            if (next) next.previous = prev
            if (state.first == entry) state.first = next
            if (state.last == entry) state.last = prev
            if (descriptors) state.size--
            else that.size--
          }
          return !!entry
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn /* , that = undefined */) {
          var state = getInternalState(this)
          var boundFunction = functionBindContext(
            callbackfn,
            arguments.length > 1 ? arguments[1] : undefined,
            3,
          )
          var entry
          while ((entry = entry ? entry.next : state.first)) {
            boundFunction(entry.value, entry.key, this)
            // revert to the last existing entry
            while (entry && entry.removed) entry = entry.previous
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key) {
          return !!getEntry(this, key)
        },
      })

      redefineAll(
        C.prototype,
        IS_MAP
          ? {
              // 23.1.3.6 Map.prototype.get(key)
              get: function get(key) {
                var entry = getEntry(this, key)
                return entry && entry.value
              },
              // 23.1.3.9 Map.prototype.set(key, value)
              set: function set(key, value) {
                return define(this, key === 0 ? 0 : key, value)
              },
            }
          : {
              // 23.2.3.1 Set.prototype.add(value)
              add: function add(value) {
                return define(this, (value = value === 0 ? 0 : value), value)
              },
            },
      )
      if (descriptors)
        defineProperty$4(C.prototype, 'size', {
          get: function () {
            return getInternalState(this).size
          },
        })
      return C
    },
    setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator'
      var getInternalCollectionState = internalStateGetterFor$1(CONSTRUCTOR_NAME)
      var getInternalIteratorState = internalStateGetterFor$1(ITERATOR_NAME)
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      defineIterator(
        C,
        CONSTRUCTOR_NAME,
        function (iterated, kind) {
          setInternalState$1(this, {
            type: ITERATOR_NAME,
            target: iterated,
            state: getInternalCollectionState(iterated),
            kind: kind,
            last: undefined,
          })
        },
        function () {
          var state = getInternalIteratorState(this)
          var kind = state.kind
          var entry = state.last
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous
          // get next entry
          if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
            // or finish the iteration
            state.target = undefined
            return {value: undefined, done: true}
          }
          // return step by kind
          if (kind == 'keys') return {value: entry.key, done: false}
          if (kind == 'values') return {value: entry.value, done: false}
          return {value: [entry.key, entry.value], done: false}
        },
        IS_MAP ? 'entries' : 'values',
        !IS_MAP,
        true,
      )

      // add [@@species], 23.1.2.2, 23.2.2.2
      setSpecies(CONSTRUCTOR_NAME)
    },
  }

  // `Map` constructor
  // https://tc39.github.io/ecma262/#sec-map-objects
  var es_map = collection(
    'Map',
    function (init) {
      return function Map() {
        return init(this, arguments.length ? arguments[0] : undefined)
      }
    },
    collectionStrong,
  )

  // `String.prototype.{ codePointAt, at }` methods implementation
  var createMethod$2 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String(requireObjectCoercible($this))
      var position = toInteger$1(pos)
      var size = S.length
      var first, second
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined
      first = S.charCodeAt(position)
      return first < 0xd800 ||
        first > 0xdbff ||
        position + 1 === size ||
        (second = S.charCodeAt(position + 1)) < 0xdc00 ||
        second > 0xdfff
        ? CONVERT_TO_STRING
          ? S.charAt(position)
          : first
        : CONVERT_TO_STRING
        ? S.slice(position, position + 2)
        : ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000
    }
  }

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$2(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$2(true),
  }

  var charAt = stringMultibyte.charAt

  var STRING_ITERATOR = 'String Iterator'
  var setInternalState$2 = internalState.set
  var getInternalState = internalState.getterFor(STRING_ITERATOR)

  // `String.prototype[@@iterator]` method
  // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
  defineIterator(
    String,
    'String',
    function (iterated) {
      setInternalState$2(this, {
        type: STRING_ITERATOR,
        string: String(iterated),
        index: 0,
      })
      // `%StringIteratorPrototype%.next` method
      // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
    },
    function next() {
      var state = getInternalState(this)
      var string = state.string
      var index = state.index
      var point
      if (index >= string.length) return {value: undefined, done: true}
      point = charAt(string, index)
      state.index += point.length
      return {value: point, done: false}
    },
  )

  var ARRAY_ITERATOR = 'Array Iterator'
  var setInternalState$3 = internalState.set
  var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR)

  // `Array.prototype.entries` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.github.io/ecma262/#sec-createarrayiterator
  var es_array_iterator = defineIterator(
    Array,
    'Array',
    function (iterated, kind) {
      setInternalState$3(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated), // target
        index: 0, // next index
        kind: kind, // kind
      })
      // `%ArrayIteratorPrototype%.next` method
      // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
    },
    function () {
      var state = getInternalState$1(this)
      var target = state.target
      var kind = state.kind
      var index = state.index++
      if (!target || index >= target.length) {
        state.target = undefined
        return {value: undefined, done: true}
      }
      if (kind == 'keys') return {value: index, done: false}
      if (kind == 'values') return {value: target[index], done: false}
      return {value: [index, target[index]], done: false}
    },
    'values',
  )

  // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
  iterators.Arguments = iterators.Array

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  }

  var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag')

  for (var COLLECTION_NAME in domIterables) {
    var Collection = global_1[COLLECTION_NAME]
    var CollectionPrototype = Collection && Collection.prototype
    if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG$3) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME)
    }
    iterators[COLLECTION_NAME] = iterators.Array
  }

  var map = path.Map

  var map$1 = map

  var map$2 = map$1

  var ariaPropsMap_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0

    var _map = interopRequireDefault$1(map$2)

    var ariaPropsMap = new _map.default([
      [
        'aria-activedescendant',
        {
          type: 'id',
        },
      ],
      [
        'aria-atomic',
        {
          type: 'boolean',
        },
      ],
      [
        'aria-autocomplete',
        {
          type: 'token',
          values: ['inline', 'list', 'both', 'none'],
        },
      ],
      [
        'aria-busy',
        {
          type: 'boolean',
        },
      ],
      [
        'aria-checked',
        {
          type: 'tristate',
        },
      ],
      [
        'aria-colcount',
        {
          type: 'integer',
        },
      ],
      [
        'aria-colindex',
        {
          type: 'integer',
        },
      ],
      [
        'aria-colspan',
        {
          type: 'integer',
        },
      ],
      [
        'aria-controls',
        {
          type: 'idlist',
        },
      ],
      [
        'aria-current',
        {
          type: 'token',
          values: ['page', 'step', 'location', 'date', 'time', true, false],
        },
      ],
      [
        'aria-describedby',
        {
          type: 'idlist',
        },
      ],
      [
        'aria-details',
        {
          type: 'id',
        },
      ],
      [
        'aria-disabled',
        {
          type: 'boolean',
        },
      ],
      [
        'aria-dropeffect',
        {
          type: 'tokenlist',
          values: ['copy', 'execute', 'link', 'move', 'none', 'popup'],
        },
      ],
      [
        'aria-errormessage',
        {
          type: 'id',
        },
      ],
      [
        'aria-expanded',
        {
          type: 'boolean',
          allowundefined: true,
        },
      ],
      [
        'aria-flowto',
        {
          type: 'idlist',
        },
      ],
      [
        'aria-grabbed',
        {
          type: 'boolean',
          allowundefined: true,
        },
      ],
      [
        'aria-haspopup',
        {
          type: 'token',
          values: [false, true, 'menu', 'listbox', 'tree', 'grid', 'dialog'],
        },
      ],
      [
        'aria-hidden',
        {
          type: 'boolean',
          allowundefined: true,
        },
      ],
      [
        'aria-invalid',
        {
          type: 'token',
          values: ['grammar', false, 'spelling', true],
        },
      ],
      [
        'aria-keyshortcuts',
        {
          type: 'string',
        },
      ],
      [
        'aria-label',
        {
          type: 'string',
        },
      ],
      [
        'aria-labelledby',
        {
          type: 'idlist',
        },
      ],
      [
        'aria-level',
        {
          type: 'integer',
        },
      ],
      [
        'aria-live',
        {
          type: 'token',
          values: ['assertive', 'off', 'polite'],
        },
      ],
      [
        'aria-modal',
        {
          type: 'boolean',
        },
      ],
      [
        'aria-multiline',
        {
          type: 'boolean',
        },
      ],
      [
        'aria-multiselectable',
        {
          type: 'boolean',
        },
      ],
      [
        'aria-orientation',
        {
          type: 'token',
          values: ['vertical', 'undefined', 'horizontal'],
        },
      ],
      [
        'aria-owns',
        {
          type: 'idlist',
        },
      ],
      [
        'aria-placeholder',
        {
          type: 'string',
        },
      ],
      [
        'aria-posinset',
        {
          type: 'integer',
        },
      ],
      [
        'aria-pressed',
        {
          type: 'tristate',
        },
      ],
      [
        'aria-readonly',
        {
          type: 'boolean',
        },
      ],
      [
        'aria-relevant',
        {
          type: 'tokenlist',
          values: ['additions', 'all', 'removals', 'text'],
        },
      ],
      [
        'aria-required',
        {
          type: 'boolean',
        },
      ],
      [
        'aria-roledescription',
        {
          type: 'string',
        },
      ],
      [
        'aria-rowcount',
        {
          type: 'integer',
        },
      ],
      [
        'aria-rowindex',
        {
          type: 'integer',
        },
      ],
      [
        'aria-rowspan',
        {
          type: 'integer',
        },
      ],
      [
        'aria-selected',
        {
          type: 'boolean',
          allowundefined: true,
        },
      ],
      [
        'aria-setsize',
        {
          type: 'integer',
        },
      ],
      [
        'aria-sort',
        {
          type: 'token',
          values: ['ascending', 'descending', 'none', 'other'],
        },
      ],
      [
        'aria-valuemax',
        {
          type: 'number',
        },
      ],
      [
        'aria-valuemin',
        {
          type: 'number',
        },
      ],
      [
        'aria-valuenow',
        {
          type: 'number',
        },
      ],
      [
        'aria-valuetext',
        {
          type: 'string',
        },
      ],
    ])
    var _default = ariaPropsMap
    exports.default = _default
  })

  var domMap_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0

    var _map = interopRequireDefault$1(map$2)

    var domMap = new _map.default([
      [
        'a',
        {
          reserved: false,
        },
      ],
      [
        'abbr',
        {
          reserved: false,
        },
      ],
      [
        'acronym',
        {
          reserved: false,
        },
      ],
      [
        'address',
        {
          reserved: false,
        },
      ],
      [
        'applet',
        {
          reserved: false,
        },
      ],
      [
        'area',
        {
          reserved: false,
        },
      ],
      [
        'article',
        {
          reserved: false,
        },
      ],
      [
        'aside',
        {
          reserved: false,
        },
      ],
      [
        'audio',
        {
          reserved: false,
        },
      ],
      [
        'b',
        {
          reserved: false,
        },
      ],
      [
        'base',
        {
          reserved: true,
        },
      ],
      [
        'bdi',
        {
          reserved: false,
        },
      ],
      [
        'bdo',
        {
          reserved: false,
        },
      ],
      [
        'big',
        {
          reserved: false,
        },
      ],
      [
        'blink',
        {
          reserved: false,
        },
      ],
      [
        'blockquote',
        {
          reserved: false,
        },
      ],
      [
        'body',
        {
          reserved: false,
        },
      ],
      [
        'br',
        {
          reserved: false,
        },
      ],
      [
        'button',
        {
          reserved: false,
        },
      ],
      [
        'canvas',
        {
          reserved: false,
        },
      ],
      [
        'caption',
        {
          reserved: false,
        },
      ],
      [
        'center',
        {
          reserved: false,
        },
      ],
      [
        'cite',
        {
          reserved: false,
        },
      ],
      [
        'code',
        {
          reserved: false,
        },
      ],
      [
        'col',
        {
          reserved: true,
        },
      ],
      [
        'colgroup',
        {
          reserved: true,
        },
      ],
      [
        'content',
        {
          reserved: false,
        },
      ],
      [
        'data',
        {
          reserved: false,
        },
      ],
      [
        'datalist',
        {
          reserved: false,
        },
      ],
      [
        'dd',
        {
          reserved: false,
        },
      ],
      [
        'del',
        {
          reserved: false,
        },
      ],
      [
        'details',
        {
          reserved: false,
        },
      ],
      [
        'dfn',
        {
          reserved: false,
        },
      ],
      [
        'dialog',
        {
          reserved: false,
        },
      ],
      [
        'dir',
        {
          reserved: false,
        },
      ],
      [
        'div',
        {
          reserved: false,
        },
      ],
      [
        'dl',
        {
          reserved: false,
        },
      ],
      [
        'dt',
        {
          reserved: false,
        },
      ],
      [
        'em',
        {
          reserved: false,
        },
      ],
      [
        'embed',
        {
          reserved: false,
        },
      ],
      [
        'fieldset',
        {
          reserved: false,
        },
      ],
      [
        'figcaption',
        {
          reserved: false,
        },
      ],
      [
        'figure',
        {
          reserved: false,
        },
      ],
      [
        'font',
        {
          reserved: false,
        },
      ],
      [
        'footer',
        {
          reserved: false,
        },
      ],
      [
        'form',
        {
          reserved: false,
        },
      ],
      [
        'frame',
        {
          reserved: false,
        },
      ],
      [
        'frameset',
        {
          reserved: false,
        },
      ],
      [
        'h1',
        {
          reserved: false,
        },
      ],
      [
        'h2',
        {
          reserved: false,
        },
      ],
      [
        'h3',
        {
          reserved: false,
        },
      ],
      [
        'h4',
        {
          reserved: false,
        },
      ],
      [
        'h5',
        {
          reserved: false,
        },
      ],
      [
        'h6',
        {
          reserved: false,
        },
      ],
      [
        'head',
        {
          reserved: true,
        },
      ],
      [
        'header',
        {
          reserved: false,
        },
      ],
      [
        'hgroup',
        {
          reserved: false,
        },
      ],
      [
        'hr',
        {
          reserved: false,
        },
      ],
      [
        'html',
        {
          reserved: true,
        },
      ],
      [
        'i',
        {
          reserved: false,
        },
      ],
      [
        'iframe',
        {
          reserved: false,
        },
      ],
      [
        'img',
        {
          reserved: false,
        },
      ],
      [
        'input',
        {
          reserved: false,
        },
      ],
      [
        'ins',
        {
          reserved: false,
        },
      ],
      [
        'kbd',
        {
          reserved: false,
        },
      ],
      [
        'keygen',
        {
          reserved: false,
        },
      ],
      [
        'label',
        {
          reserved: false,
        },
      ],
      [
        'legend',
        {
          reserved: false,
        },
      ],
      [
        'li',
        {
          reserved: false,
        },
      ],
      [
        'link',
        {
          reserved: true,
        },
      ],
      [
        'main',
        {
          reserved: false,
        },
      ],
      [
        'map',
        {
          reserved: false,
        },
      ],
      [
        'mark',
        {
          reserved: false,
        },
      ],
      [
        'marquee',
        {
          reserved: false,
        },
      ],
      [
        'menu',
        {
          reserved: false,
        },
      ],
      [
        'menuitem',
        {
          reserved: false,
        },
      ],
      [
        'meta',
        {
          reserved: true,
        },
      ],
      [
        'meter',
        {
          reserved: false,
        },
      ],
      [
        'nav',
        {
          reserved: false,
        },
      ],
      [
        'noembed',
        {
          reserved: true,
        },
      ],
      [
        'noscript',
        {
          reserved: true,
        },
      ],
      [
        'object',
        {
          reserved: false,
        },
      ],
      [
        'ol',
        {
          reserved: false,
        },
      ],
      [
        'optgroup',
        {
          reserved: false,
        },
      ],
      [
        'option',
        {
          reserved: false,
        },
      ],
      [
        'output',
        {
          reserved: false,
        },
      ],
      [
        'p',
        {
          reserved: false,
        },
      ],
      [
        'param',
        {
          reserved: true,
        },
      ],
      [
        'picture',
        {
          reserved: true,
        },
      ],
      [
        'pre',
        {
          reserved: false,
        },
      ],
      [
        'progress',
        {
          reserved: false,
        },
      ],
      [
        'q',
        {
          reserved: false,
        },
      ],
      [
        'rp',
        {
          reserved: false,
        },
      ],
      [
        'rt',
        {
          reserved: false,
        },
      ],
      [
        'rtc',
        {
          reserved: false,
        },
      ],
      [
        'ruby',
        {
          reserved: false,
        },
      ],
      [
        's',
        {
          reserved: false,
        },
      ],
      [
        'samp',
        {
          reserved: false,
        },
      ],
      [
        'script',
        {
          reserved: true,
        },
      ],
      [
        'section',
        {
          reserved: false,
        },
      ],
      [
        'select',
        {
          reserved: false,
        },
      ],
      [
        'small',
        {
          reserved: false,
        },
      ],
      [
        'source',
        {
          reserved: true,
        },
      ],
      [
        'spacer',
        {
          reserved: false,
        },
      ],
      [
        'span',
        {
          reserved: false,
        },
      ],
      [
        'strike',
        {
          reserved: false,
        },
      ],
      [
        'strong',
        {
          reserved: false,
        },
      ],
      [
        'style',
        {
          reserved: true,
        },
      ],
      [
        'sub',
        {
          reserved: false,
        },
      ],
      [
        'summary',
        {
          reserved: false,
        },
      ],
      [
        'sup',
        {
          reserved: false,
        },
      ],
      [
        'table',
        {
          reserved: false,
        },
      ],
      [
        'tbody',
        {
          reserved: false,
        },
      ],
      [
        'td',
        {
          reserved: false,
        },
      ],
      [
        'textarea',
        {
          reserved: false,
        },
      ],
      [
        'tfoot',
        {
          reserved: false,
        },
      ],
      [
        'th',
        {
          reserved: false,
        },
      ],
      [
        'thead',
        {
          reserved: false,
        },
      ],
      [
        'time',
        {
          reserved: false,
        },
      ],
      [
        'title',
        {
          reserved: true,
        },
      ],
      [
        'tr',
        {
          reserved: false,
        },
      ],
      [
        'track',
        {
          reserved: true,
        },
      ],
      [
        'tt',
        {
          reserved: false,
        },
      ],
      [
        'u',
        {
          reserved: false,
        },
      ],
      [
        'ul',
        {
          reserved: false,
        },
      ],
      [
        'var',
        {
          reserved: false,
        },
      ],
      [
        'video',
        {
          reserved: false,
        },
      ],
      [
        'wbr',
        {
          reserved: false,
        },
      ],
      [
        'xmp',
        {
          reserved: false,
        },
      ],
    ])
    var _default = domMap
    exports.default = _default
  })

  var getIterator = function (it) {
    var iteratorMethod = getIteratorMethod(it)
    if (typeof iteratorMethod != 'function') {
      throw TypeError(String(it) + ' is not iterable')
    }
    return anObject(iteratorMethod.call(it))
  }

  var getIterator_1 = getIterator

  var getIterator$1 = getIterator_1

  // `Array.isArray` method
  // https://tc39.github.io/ecma262/#sec-array.isarray
  _export(
    {target: 'Array', stat: true},
    {
      isArray: isArray,
    },
  )

  var isArray$1 = path.Array.isArray

  var isArray$2 = isArray$1

  var isArray$3 = isArray$2

  var getIteratorMethod_1 = getIteratorMethod

  var getIteratorMethod$1 = getIteratorMethod_1

  var createProperty = function (object, key, value) {
    var propertyKey = toPrimitive(key)
    if (propertyKey in object)
      objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value))
    else object[propertyKey] = value
  }

  var engineUserAgent = getBuiltIn('navigator', 'userAgent') || ''

  var process$1 = global_1.process
  var versions = process$1 && process$1.versions
  var v8 = versions && versions.v8
  var match, version

  if (v8) {
    match = v8.split('.')
    version = match[0] + match[1]
  } else if (engineUserAgent) {
    match = engineUserAgent.match(/Edge\/(\d+)/)
    if (!match || match[1] >= 74) {
      match = engineUserAgent.match(/Chrome\/(\d+)/)
      if (match) version = match[1]
    }
  }

  var engineV8Version = version && +version

  var SPECIES$2 = wellKnownSymbol('species')

  var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return (
      engineV8Version >= 51 ||
      !fails(function () {
        var array = []
        var constructor = (array.constructor = {})
        constructor[SPECIES$2] = function () {
          return {foo: 1}
        }
        return array[METHOD_NAME](Boolean).foo !== 1
      })
    )
  }

  var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable')
  var MAX_SAFE_INTEGER = 0x1fffffffffffff
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT =
    engineV8Version >= 51 ||
    !fails(function () {
      var array = []
      array[IS_CONCAT_SPREADABLE] = false
      return array.concat()[0] !== array
    })

  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat')

  var isConcatSpreadable = function (O) {
    if (!isObject(O)) return false
    var spreadable = O[IS_CONCAT_SPREADABLE]
    return spreadable !== undefined ? !!spreadable : isArray(O)
  }

  var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT

  // `Array.prototype.concat` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  _export(
    {target: 'Array', proto: true, forced: FORCED},
    {
      concat: function concat(arg) {
        // eslint-disable-line no-unused-vars
        var O = toObject(this)
        var A = arraySpeciesCreate(O, 0)
        var n = 0
        var i, k, length, len, E
        for (i = -1, length = arguments.length; i < length; i++) {
          E = i === -1 ? O : arguments[i]
          if (isConcatSpreadable(E)) {
            len = toLength$1(E.length)
            if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED)
            for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k])
          } else {
            if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED)
            createProperty(A, n++, E)
          }
        }
        A.length = n
        return A
      },
    },
  )

  var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype')

  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  var f$3 =
    Object.getOwnPropertyNames ||
    function getOwnPropertyNames(O) {
      return objectKeysInternal(O, hiddenKeys$1)
    }

  var objectGetOwnPropertyNames = {
    f: f$3,
  }

  var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f

  var toString$1 = {}.toString

  var windowNames =
    typeof window == 'object' && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : []

  var getWindowNames = function (it) {
    try {
      return nativeGetOwnPropertyNames(it)
    } catch (error) {
      return windowNames.slice()
    }
  }

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  var f$4 = function getOwnPropertyNames(it) {
    return windowNames && toString$1.call(it) == '[object Window]'
      ? getWindowNames(it)
      : nativeGetOwnPropertyNames(toIndexedObject(it))
  }

  var objectGetOwnPropertyNamesExternal = {
    f: f$4,
  }

  var f$5 = Object.getOwnPropertySymbols

  var objectGetOwnPropertySymbols = {
    f: f$5,
  }

  var f$6 = wellKnownSymbol

  var wellKnownSymbolWrapped = {
    f: f$6,
  }

  var defineProperty$5 = objectDefineProperty.f

  var defineWellKnownSymbol = function (NAME) {
    var Symbol = path.Symbol || (path.Symbol = {})
    if (!has(Symbol, NAME))
      defineProperty$5(Symbol, NAME, {
        value: wellKnownSymbolWrapped.f(NAME),
      })
  }

  var $forEach = arrayIteration.forEach

  var HIDDEN = sharedKey('hidden')
  var SYMBOL = 'Symbol'
  var PROTOTYPE$1 = 'prototype'
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive')
  var setInternalState$4 = internalState.set
  var getInternalState$2 = internalState.getterFor(SYMBOL)
  var ObjectPrototype$1 = Object[PROTOTYPE$1]
  var $Symbol = global_1.Symbol
  var $stringify = getBuiltIn('JSON', 'stringify')
  var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f
  var nativeDefineProperty$1 = objectDefineProperty.f
  var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f
  var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f
  var AllSymbols = shared('symbols')
  var ObjectPrototypeSymbols = shared('op-symbols')
  var StringToSymbolRegistry = shared('string-to-symbol-registry')
  var SymbolToStringRegistry = shared('symbol-to-string-registry')
  var WellKnownSymbolsStore$1 = shared('wks')
  var QObject = global_1.QObject
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDescriptor =
    descriptors &&
    fails(function () {
      return (
        objectCreate(
          nativeDefineProperty$1({}, 'a', {
            get: function () {
              return nativeDefineProperty$1(this, 'a', {value: 7}).a
            },
          }),
        ).a != 7
      )
    })
      ? function (O, P, Attributes) {
          var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$1, P)
          if (ObjectPrototypeDescriptor) delete ObjectPrototype$1[P]
          nativeDefineProperty$1(O, P, Attributes)
          if (ObjectPrototypeDescriptor && O !== ObjectPrototype$1) {
            nativeDefineProperty$1(ObjectPrototype$1, P, ObjectPrototypeDescriptor)
          }
        }
      : nativeDefineProperty$1

  var wrap = function (tag, description) {
    var symbol = (AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]))
    setInternalState$4(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description,
    })
    if (!descriptors) symbol.description = description
    return symbol
  }

  var isSymbol = useSymbolAsUid
    ? function (it) {
        return typeof it == 'symbol'
      }
    : function (it) {
        return Object(it) instanceof $Symbol
      }

  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype$1) $defineProperty(ObjectPrototypeSymbols, P, Attributes)
    anObject(O)
    var key = toPrimitive(P, true)
    anObject(Attributes)
    if (has(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!has(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor(1, {}))
        O[HIDDEN][key] = true
      } else {
        if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false
        Attributes = objectCreate(Attributes, {enumerable: createPropertyDescriptor(0, false)})
      }
      return setSymbolDescriptor(O, key, Attributes)
    }
    return nativeDefineProperty$1(O, key, Attributes)
  }

  var $defineProperties = function defineProperties(O, Properties) {
    anObject(O)
    var properties = toIndexedObject(Properties)
    var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties))
    $forEach(keys, function (key) {
      if (!descriptors || $propertyIsEnumerable.call(properties, key))
        $defineProperty(O, key, properties[key])
    })
    return O
  }

  var $create = function create(O, Properties) {
    return Properties === undefined
      ? objectCreate(O)
      : $defineProperties(objectCreate(O), Properties)
  }

  var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPrimitive(V, true)
    var enumerable = nativePropertyIsEnumerable$1.call(this, P)
    if (this === ObjectPrototype$1 && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P))
      return false
    return enumerable ||
      !has(this, P) ||
      !has(AllSymbols, P) ||
      (has(this, HIDDEN) && this[HIDDEN][P])
      ? enumerable
      : true
  }

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject(O)
    var key = toPrimitive(P, true)
    if (it === ObjectPrototype$1 && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key))
      return
    var descriptor = nativeGetOwnPropertyDescriptor$1(it, key)
    if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true
    }
    return descriptor
  }

  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames$1(toIndexedObject(O))
    var result = []
    $forEach(names, function (key) {
      if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key)
    })
    return result
  }

  var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$1
    var names = nativeGetOwnPropertyNames$1(
      IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O),
    )
    var result = []
    $forEach(names, function (key) {
      if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype$1, key))) {
        result.push(AllSymbols[key])
      }
    })
    return result
  }

  // `Symbol` constructor
  // https://tc39.github.io/ecma262/#sec-symbol-constructor
  if (!nativeSymbol) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor')
      var description =
        !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0])
      var tag = uid(description)
      var setter = function (value) {
        if (this === ObjectPrototype$1) setter.call(ObjectPrototypeSymbols, value)
        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false
        setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value))
      }
      if (descriptors && USE_SETTER)
        setSymbolDescriptor(ObjectPrototype$1, tag, {configurable: true, set: setter})
      return wrap(tag, description)
    }

    redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
      return getInternalState$2(this).tag
    })

    redefine($Symbol, 'withoutSetter', function (description) {
      return wrap(uid(description), description)
    })

    objectPropertyIsEnumerable.f = $propertyIsEnumerable
    objectDefineProperty.f = $defineProperty
    objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor
    objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames
    objectGetOwnPropertySymbols.f = $getOwnPropertySymbols

    wellKnownSymbolWrapped.f = function (name) {
      return wrap(wellKnownSymbol(name), name)
    }

    if (descriptors) {
      // https://github.com/tc39/proposal-Symbol-description
      nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
        configurable: true,
        get: function description() {
          return getInternalState$2(this).description
        },
      })
    }
  }

  _export(
    {global: true, wrap: true, forced: !nativeSymbol, sham: !nativeSymbol},
    {
      Symbol: $Symbol,
    },
  )

  $forEach(objectKeys(WellKnownSymbolsStore$1), function (name) {
    defineWellKnownSymbol(name)
  })

  _export(
    {target: SYMBOL, stat: true, forced: !nativeSymbol},
    {
      // `Symbol.for` method
      // https://tc39.github.io/ecma262/#sec-symbol.for
      for: function (key) {
        var string = String(key)
        if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string]
        var symbol = $Symbol(string)
        StringToSymbolRegistry[string] = symbol
        SymbolToStringRegistry[symbol] = string
        return symbol
      },
      // `Symbol.keyFor` method
      // https://tc39.github.io/ecma262/#sec-symbol.keyfor
      keyFor: function keyFor(sym) {
        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol')
        if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym]
      },
      useSetter: function () {
        USE_SETTER = true
      },
      useSimple: function () {
        USE_SETTER = false
      },
    },
  )

  _export(
    {target: 'Object', stat: true, forced: !nativeSymbol, sham: !descriptors},
    {
      // `Object.create` method
      // https://tc39.github.io/ecma262/#sec-object.create
      create: $create,
      // `Object.defineProperty` method
      // https://tc39.github.io/ecma262/#sec-object.defineproperty
      defineProperty: $defineProperty,
      // `Object.defineProperties` method
      // https://tc39.github.io/ecma262/#sec-object.defineproperties
      defineProperties: $defineProperties,
      // `Object.getOwnPropertyDescriptor` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
      getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    },
  )

  _export(
    {target: 'Object', stat: true, forced: !nativeSymbol},
    {
      // `Object.getOwnPropertyNames` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
      getOwnPropertyNames: $getOwnPropertyNames,
      // `Object.getOwnPropertySymbols` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
      getOwnPropertySymbols: $getOwnPropertySymbols,
    },
  )

  // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  _export(
    {
      target: 'Object',
      stat: true,
      forced: fails(function () {
        objectGetOwnPropertySymbols.f(1)
      }),
    },
    {
      getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        return objectGetOwnPropertySymbols.f(toObject(it))
      },
    },
  )

  // `JSON.stringify` method behavior with symbols
  // https://tc39.github.io/ecma262/#sec-json.stringify
  if ($stringify) {
    var FORCED_JSON_STRINGIFY =
      !nativeSymbol ||
      fails(function () {
        var symbol = $Symbol()
        // MS Edge converts symbol values to JSON as {}
        return (
          $stringify([symbol]) != '[null]' ||
          // WebKit converts symbol values to JSON as null
          $stringify({a: symbol}) != '{}' ||
          // V8 throws on boxed symbols
          $stringify(Object(symbol)) != '{}'
        )
      })

    _export(
      {target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY},
      {
        // eslint-disable-next-line no-unused-vars
        stringify: function stringify(it, replacer, space) {
          var args = [it]
          var index = 1
          var $replacer
          while (arguments.length > index) args.push(arguments[index++])
          $replacer = replacer
          if ((!isObject(replacer) && it === undefined) || isSymbol(it)) return // IE8 returns string on undefined
          if (!isArray(replacer))
            replacer = function (key, value) {
              if (typeof $replacer == 'function') value = $replacer.call(this, key, value)
              if (!isSymbol(value)) return value
            }
          args[1] = replacer
          return $stringify.apply(null, args)
        },
      },
    )
  }

  // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
  if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) {
    createNonEnumerableProperty($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf)
  }
  // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag($Symbol, SYMBOL)

  hiddenKeys[HIDDEN] = true

  // `Symbol.asyncIterator` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.asynciterator
  defineWellKnownSymbol('asyncIterator')

  // `Symbol.hasInstance` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.hasinstance
  defineWellKnownSymbol('hasInstance')

  // `Symbol.isConcatSpreadable` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable
  defineWellKnownSymbol('isConcatSpreadable')

  // `Symbol.iterator` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.iterator
  defineWellKnownSymbol('iterator')

  // `Symbol.match` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.match
  defineWellKnownSymbol('match')

  // `Symbol.matchAll` well-known symbol
  defineWellKnownSymbol('matchAll')

  // `Symbol.replace` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.replace
  defineWellKnownSymbol('replace')

  // `Symbol.search` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.search
  defineWellKnownSymbol('search')

  // `Symbol.species` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.species
  defineWellKnownSymbol('species')

  // `Symbol.split` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.split
  defineWellKnownSymbol('split')

  // `Symbol.toPrimitive` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.toprimitive
  defineWellKnownSymbol('toPrimitive')

  // `Symbol.toStringTag` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.tostringtag
  defineWellKnownSymbol('toStringTag')

  // `Symbol.unscopables` well-known symbol
  // https://tc39.github.io/ecma262/#sec-symbol.unscopables
  defineWellKnownSymbol('unscopables')

  // Math[@@toStringTag] property
  // https://tc39.github.io/ecma262/#sec-math-@@tostringtag
  setToStringTag(Math, 'Math', true)

  // JSON[@@toStringTag] property
  // https://tc39.github.io/ecma262/#sec-json-@@tostringtag
  setToStringTag(global_1.JSON, 'JSON', true)

  var symbol = path.Symbol

  var symbol$1 = symbol

  var symbol$2 = symbol$1

  // `Array.from` method implementation
  // https://tc39.github.io/ecma262/#sec-array.from
  var arrayFrom$1 = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike)
    var C = typeof this == 'function' ? this : Array
    var argumentsLength = arguments.length
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined
    var mapping = mapfn !== undefined
    var iteratorMethod = getIteratorMethod(O)
    var index = 0
    var length, result, step, iterator, next, value
    if (mapping)
      mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2)
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
      iterator = iteratorMethod.call(O)
      next = iterator.next
      result = new C()
      for (; !(step = next.call(iterator)).done; index++) {
        value = mapping
          ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
          : step.value
        createProperty(result, index, value)
      }
    } else {
      length = toLength$1(O.length)
      result = new C(length)
      for (; length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index]
        createProperty(result, index, value)
      }
    }
    result.length = index
    return result
  }

  var ITERATOR$4 = wellKnownSymbol('iterator')
  var SAFE_CLOSING = false

  try {
    var called = 0
    var iteratorWithReturn = {
      next: function () {
        return {done: !!called++}
      },
      return: function () {
        SAFE_CLOSING = true
      },
    }
    iteratorWithReturn[ITERATOR$4] = function () {
      return this
    }
    // eslint-disable-next-line no-throw-literal
    Array.from(iteratorWithReturn, function () {
      throw 2
    })
  } catch (error) {
    /* empty */
  }

  var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false
    var ITERATION_SUPPORT = false
    try {
      var object = {}
      object[ITERATOR$4] = function () {
        return {
          next: function () {
            return {done: (ITERATION_SUPPORT = true)}
          },
        }
      }
      exec(object)
    } catch (error) {
      /* empty */
    }
    return ITERATION_SUPPORT
  }

  var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
    Array.from(iterable)
  })

  // `Array.from` method
  // https://tc39.github.io/ecma262/#sec-array.from
  _export(
    {target: 'Array', stat: true, forced: INCORRECT_ITERATION},
    {
      from: arrayFrom$1,
    },
  )

  var from_1 = path.Array.from

  var from_1$1 = from_1

  var from_1$2 = from_1$1

  var defineProperty$6 = Object.defineProperty
  var cache = {}

  var thrower = function (it) {
    throw it
  }

  var arrayMethodUsesToLength = function (METHOD_NAME, options) {
    if (has(cache, METHOD_NAME)) return cache[METHOD_NAME]
    if (!options) options = {}
    var method = [][METHOD_NAME]
    var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false
    var argument0 = has(options, 0) ? options[0] : thrower
    var argument1 = has(options, 1) ? options[1] : undefined

    return (cache[METHOD_NAME] =
      !!method &&
      !fails(function () {
        if (ACCESSORS && !descriptors) return true
        var O = {length: -1}

        if (ACCESSORS) defineProperty$6(O, 1, {enumerable: true, get: thrower})
        else O[1] = 1

        method.call(O, argument0, argument1)
      }))
  }

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice')
  var USES_TO_LENGTH = arrayMethodUsesToLength('slice', {ACCESSORS: true, 0: 0, 1: 2})

  var SPECIES$3 = wellKnownSymbol('species')
  var nativeSlice = [].slice
  var max$1 = Math.max

  // `Array.prototype.slice` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  _export(
    {target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH},
    {
      slice: function slice(start, end) {
        var O = toIndexedObject(this)
        var length = toLength$1(O.length)
        var k = toAbsoluteIndex(start, length)
        var fin = toAbsoluteIndex(end === undefined ? length : end, length)
        // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
        var Constructor, result, n
        if (isArray(O)) {
          Constructor = O.constructor
          // cross-realm fallback
          if (
            typeof Constructor == 'function' &&
            (Constructor === Array || isArray(Constructor.prototype))
          ) {
            Constructor = undefined
          } else if (isObject(Constructor)) {
            Constructor = Constructor[SPECIES$3]
            if (Constructor === null) Constructor = undefined
          }
          if (Constructor === Array || Constructor === undefined) {
            return nativeSlice.call(O, k, fin)
          }
        }
        result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0))
        for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k])
        result.length = n
        return result
      },
    },
  )

  var entryVirtual = function (CONSTRUCTOR) {
    return path[CONSTRUCTOR + 'Prototype']
  }

  var slice = entryVirtual('Array').slice

  var ArrayPrototype$1 = Array.prototype

  var slice_1 = function (it) {
    var own = it.slice
    return it === ArrayPrototype$1 || (it instanceof Array && own === ArrayPrototype$1.slice)
      ? slice
      : own
  }

  var slice$1 = slice_1

  var slice$2 = slice$1

  var defineProperty$7 = defineProperty_1

  var defineProperty$8 = defineProperty$7

  function _defineProperty$2(obj, key, value) {
    if (key in obj) {
      defineProperty$8(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      })
    } else {
      obj[key] = value
    }

    return obj
  }

  var defineProperty$9 = _defineProperty$2

  var nativeAssign = Object.assign
  var defineProperty$a = Object.defineProperty

  // `Object.assign` method
  // https://tc39.github.io/ecma262/#sec-object.assign
  var objectAssign =
    !nativeAssign ||
    fails(function () {
      // should have correct order of operations (Edge bug)
      if (
        descriptors &&
        nativeAssign(
          {b: 1},
          nativeAssign(
            defineProperty$a({}, 'a', {
              enumerable: true,
              get: function () {
                defineProperty$a(this, 'b', {
                  value: 3,
                  enumerable: false,
                })
              },
            }),
            {b: 2},
          ),
        ).b !== 1
      )
        return true
      // should work with symbols and should have deterministic property order (V8 bug)
      var A = {}
      var B = {}
      // eslint-disable-next-line no-undef
      var symbol = Symbol()
      var alphabet = 'abcdefghijklmnopqrst'
      A[symbol] = 7
      alphabet.split('').forEach(function (chr) {
        B[chr] = chr
      })
      return (
        nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet
      )
    })
      ? function assign(target, source) {
          // eslint-disable-line no-unused-vars
          var T = toObject(target)
          var argumentsLength = arguments.length
          var index = 1
          var getOwnPropertySymbols = objectGetOwnPropertySymbols.f
          var propertyIsEnumerable = objectPropertyIsEnumerable.f
          while (argumentsLength > index) {
            var S = indexedObject(arguments[index++])
            var keys = getOwnPropertySymbols
              ? objectKeys(S).concat(getOwnPropertySymbols(S))
              : objectKeys(S)
            var length = keys.length
            var j = 0
            var key
            while (length > j) {
              key = keys[j++]
              if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key]
            }
          }
          return T
        }
      : nativeAssign

  // `Object.assign` method
  // https://tc39.github.io/ecma262/#sec-object.assign
  _export(
    {target: 'Object', stat: true, forced: Object.assign !== objectAssign},
    {
      assign: objectAssign,
    },
  )

  var assign = path.Object.assign

  var assign$1 = assign

  var assign$2 = assign$1

  var FAILS_ON_PRIMITIVES = fails(function () {
    objectKeys(1)
  })

  // `Object.keys` method
  // https://tc39.github.io/ecma262/#sec-object.keys
  _export(
    {target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES},
    {
      keys: function keys(it) {
        return objectKeys(toObject(it))
      },
    },
  )

  var keys$1 = path.Object.keys

  var keys$2 = keys$1

  var keys$3 = keys$2

  var arrayMethodIsStrict = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME]
    return (
      !!method &&
      fails(function () {
        // eslint-disable-next-line no-useless-call,no-throw-literal
        method.call(
          null,
          argument ||
            function () {
              throw 1
            },
          1,
        )
      })
    )
  }

  var $forEach$1 = arrayIteration.forEach

  var STRICT_METHOD = arrayMethodIsStrict('forEach')
  var USES_TO_LENGTH$1 = arrayMethodUsesToLength('forEach')

  // `Array.prototype.forEach` method implementation
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  var arrayForEach =
    !STRICT_METHOD || !USES_TO_LENGTH$1
      ? function forEach(callbackfn /* , thisArg */) {
          return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
        }
      : [].forEach

  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  _export(
    {target: 'Array', proto: true, forced: [].forEach != arrayForEach},
    {
      forEach: arrayForEach,
    },
  )

  var forEach$1 = entryVirtual('Array').forEach

  var forEach$2 = forEach$1

  var ArrayPrototype$2 = Array.prototype

  var DOMIterables = {
    DOMTokenList: true,
    NodeList: true,
  }

  var forEach_1 = function (it) {
    var own = it.forEach
    return it === ArrayPrototype$2 ||
      (it instanceof Array && own === ArrayPrototype$2.forEach) ||
      // eslint-disable-next-line no-prototype-builtins
      DOMIterables.hasOwnProperty(classof(it))
      ? forEach$2
      : own
  }

  var forEach$3 = forEach_1

  var commandRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var commandRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'menuitem',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'widget']],
    }
    var _default = commandRole
    exports.default = _default
  })

  var compositeRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var compositeRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-activedescendant': null,
        'aria-disabled': null,
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'widget']],
    }
    var _default = compositeRole
    exports.default = _default
  })

  var inputRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var inputRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'input',
          },
          module: 'XForms',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'widget']],
    }
    var _default = inputRole
    exports.default = _default
  })

  var landmarkRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var landmarkRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = landmarkRole
    exports.default = _default
  })

  var rangeRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var rangeRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-valuemax': null,
        'aria-valuemin': null,
        'aria-valuenow': null,
        'aria-valuetext': null,
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure']],
    }
    var _default = rangeRole
    exports.default = _default
  })

  var roletypeRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var roletypeRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: [],
      prohibitedProps: [],
      props: {
        'aria-atomic': null,
        'aria-busy': null,
        'aria-controls': null,
        'aria-current': null,
        'aria-describedby': null,
        'aria-details': null,
        'aria-dropeffect': null,
        'aria-flowto': null,
        'aria-grabbed': null,
        'aria-hidden': null,
        'aria-keyshortcuts': null,
        'aria-label': null,
        'aria-labelledby': null,
        'aria-live': null,
        'aria-owns': null,
        'aria-relevant': null,
        'aria-roledescription': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'rel',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'role',
          },
          module: 'XHTML',
        },
        {
          concept: {
            name: 'type',
          },
          module: 'Dublin Core',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [],
    }
    var _default = roletypeRole
    exports.default = _default
  })

  var sectionRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var sectionRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: [],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'frontmatter',
          },
          module: 'DTB',
        },
        {
          concept: {
            name: 'level',
          },
          module: 'DTB',
        },
        {
          concept: {
            name: 'level',
          },
          module: 'SMIL',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure']],
    }
    var _default = sectionRole
    exports.default = _default
  })

  var sectionheadRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var sectionheadRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure']],
    }
    var _default = sectionheadRole
    exports.default = _default
  })

  var selectRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var selectRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-orientation': null,
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [
        ['roletype', 'widget', 'composite'],
        ['roletype', 'structure', 'section', 'group'],
      ],
    }
    var _default = selectRole
    exports.default = _default
  })

  var structureRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var structureRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: [],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype']],
    }
    var _default = structureRole
    exports.default = _default
  })

  var widgetRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var widgetRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: [],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype']],
    }
    var _default = widgetRole
    exports.default = _default
  })

  var windowRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var windowRole = {
      abstract: true,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-modal': null,
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype']],
    }
    var _default = windowRole
    exports.default = _default
  })

  var ariaAbstractRoles_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0

    var _map = interopRequireDefault$1(map$2)

    var _commandRole = interopRequireDefault$1(commandRole_1)

    var _compositeRole = interopRequireDefault$1(compositeRole_1)

    var _inputRole = interopRequireDefault$1(inputRole_1)

    var _landmarkRole = interopRequireDefault$1(landmarkRole_1)

    var _rangeRole = interopRequireDefault$1(rangeRole_1)

    var _roletypeRole = interopRequireDefault$1(roletypeRole_1)

    var _sectionRole = interopRequireDefault$1(sectionRole_1)

    var _sectionheadRole = interopRequireDefault$1(sectionheadRole_1)

    var _selectRole = interopRequireDefault$1(selectRole_1)

    var _structureRole = interopRequireDefault$1(structureRole_1)

    var _widgetRole = interopRequireDefault$1(widgetRole_1)

    var _windowRole = interopRequireDefault$1(windowRole_1)

    var ariaAbstractRoles = new _map.default([
      ['command', _commandRole.default],
      ['composite', _compositeRole.default],
      ['input', _inputRole.default],
      ['landmark', _landmarkRole.default],
      ['range', _rangeRole.default],
      ['roletype', _roletypeRole.default],
      ['section', _sectionRole.default],
      ['sectionhead', _sectionheadRole.default],
      ['select', _selectRole.default],
      ['structure', _structureRole.default],
      ['widget', _widgetRole.default],
      ['window', _windowRole.default],
    ])
    var _default = ariaAbstractRoles
    exports.default = _default
  })

  var alertRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var alertRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-atomic': 'true',
        'aria-live': 'assertive',
      },
      relatedConcepts: [
        {
          concept: {
            name: 'alert',
          },
          module: 'XForms',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = alertRole
    exports.default = _default
  })

  var alertdialogRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var alertdialogRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'alert',
          },
          module: 'XForms',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [
        ['roletype', 'structure', 'section', 'alert'],
        ['roletype', 'window', 'dialog'],
      ],
    }
    var _default = alertdialogRole
    exports.default = _default
  })

  var applicationRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var applicationRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-activedescendant': null,
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'Device Independence Delivery Unit',
          },
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure']],
    }
    var _default = applicationRole
    exports.default = _default
  })

  var articleRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var articleRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-posinset': null,
        'aria-setsize': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'article',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'document']],
    }
    var _default = articleRole
    exports.default = _default
  })

  var bannerRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var bannerRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            constraints: ['direct descendant of document'],
            name: 'header',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = bannerRole
    exports.default = _default
  })

  var blockquoteRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var blockquoteRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = blockquoteRole
    exports.default = _default
  })

  var buttonRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var buttonRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-pressed': null,
      },
      relatedConcepts: [
        {
          concept: {
            attributes: [
              {
                constraints: ['set'],
                name: 'aria-pressed',
              },
              {
                name: 'type',
                value: 'checkbox',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                name: 'aria-expanded',
                value: 'false',
              },
            ],
            name: 'summary',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                name: 'aria-expanded',
                value: 'true',
              },
            ],
            constraints: ['direct descendant of details element with the open attribute defined'],
            name: 'summary',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                name: 'type',
                value: 'button',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                name: 'type',
                value: 'image',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                name: 'type',
                value: 'reset',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                name: 'type',
                value: 'submit',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'button',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'trigger',
          },
          module: 'XForms',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'widget', 'command']],
    }
    var _default = buttonRole
    exports.default = _default
  })

  var captionRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var captionRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['prohibited'],
      prohibitedProps: ['aria-label', 'aria-labelledby'],
      props: {},
      relatedConcepts: [],
      requireContextRole: ['figure', 'grid', 'table'],
      requiredContextRole: ['figure', 'grid', 'table'],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = captionRole
    exports.default = _default
  })

  var cellRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var cellRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {
        'aria-colindex': null,
        'aria-colspan': null,
        'aria-rowindex': null,
        'aria-rowspan': null,
      },
      relatedConcepts: [
        {
          concept: {
            constraints: ['descendant of table'],
            name: 'td',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: ['row'],
      requiredContextRole: ['row'],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = cellRole
    exports.default = _default
  })

  var checkboxRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var checkboxRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {
        'aria-checked': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-invalid': null,
        'aria-readonly': null,
        'aria-required': null,
      },
      relatedConcepts: [
        {
          concept: {
            attributes: [
              {
                name: 'type',
                value: 'checkbox',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'option',
          },
          module: 'ARIA',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        'aria-checked': null,
      },
      superClass: [['roletype', 'widget', 'input']],
    }
    var _default = checkboxRole
    exports.default = _default
  })

  var codeRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var codeRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['prohibited'],
      prohibitedProps: ['aria-label', 'aria-labelledby'],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = codeRole
    exports.default = _default
  })

  var columnheaderRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var columnheaderRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {
        'aria-sort': null,
      },
      relatedConcepts: [
        {
          attributes: [
            {
              name: 'scope',
              value: 'col',
            },
          ],
          concept: {
            name: 'th',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: ['row'],
      requiredContextRole: ['row'],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [
        ['roletype', 'structure', 'section', 'cell'],
        ['roletype', 'structure', 'section', 'cell', 'gridcell'],
        ['roletype', 'widget', 'gridcell'],
        ['roletype', 'structure', 'sectionhead'],
      ],
    }
    var _default = columnheaderRole
    exports.default = _default
  })

  var comboboxRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var comboboxRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-activedescendant': null,
        'aria-autocomplete': null,
        'aria-errormessage': null,
        'aria-invalid': null,
        'aria-readonly': null,
        'aria-required': null,
        'aria-expanded': 'false',
        'aria-haspopup': 'listbox',
      },
      relatedConcepts: [
        {
          concept: {
            attributes: [
              {
                constraints: ['set'],
                name: 'list',
              },
              {
                name: 'type',
                value: 'email',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                constraints: ['set'],
                name: 'list',
              },
              {
                name: 'type',
                value: 'search',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                constraints: ['set'],
                name: 'list',
              },
              {
                name: 'type',
                value: 'tel',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                constraints: ['set'],
                name: 'list',
              },
              {
                name: 'type',
                value: 'text',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                constraints: ['set'],
                name: 'list',
              },
              {
                name: 'type',
                value: 'url',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                constraints: ['set'],
                name: 'list',
              },
              {
                name: 'type',
                value: 'url',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                constraints: ['undefined'],
                name: 'multiple',
              },
              {
                constraints: ['undefined'],
                name: 'size',
              },
            ],
            name: 'select',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                constraints: ['undefined'],
                name: 'multiple',
              },
              {
                name: 'size',
                value: 1,
              },
            ],
            name: 'select',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'select',
          },
          module: 'XForms',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        'aria-controls': null,
        'aria-expanded': 'false',
      },
      superClass: [['roletype', 'widget', 'input']],
    }
    var _default = comboboxRole
    exports.default = _default
  })

  var complementaryRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var complementaryRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'aside',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = complementaryRole
    exports.default = _default
  })

  var contentinfoRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var contentinfoRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            constraints: ['direct descendant of document'],
            name: 'footer',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = contentinfoRole
    exports.default = _default
  })

  var definitionRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var definitionRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'dd',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = definitionRole
    exports.default = _default
  })

  var deletionRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var deletionRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['prohibited'],
      prohibitedProps: ['aria-label', 'aria-labelledby'],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = deletionRole
    exports.default = _default
  })

  var dialogRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var dialogRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'dialog',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'window']],
    }
    var _default = dialogRole
    exports.default = _default
  })

  var directoryRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var directoryRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          module: 'DAISY Guide',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'list']],
    }
    var _default = directoryRole
    exports.default = _default
  })

  var documentRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var documentRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'Device Independence Delivery Unit',
          },
        },
        {
          concept: {
            name: 'body',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure']],
    }
    var _default = documentRole
    exports.default = _default
  })

  var emphasisRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var emphasisRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['prohibited'],
      prohibitedProps: ['aria-label', 'aria-labelledby'],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = emphasisRole
    exports.default = _default
  })

  var feedRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var feedRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [['article']],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'list']],
    }
    var _default = feedRole
    exports.default = _default
  })

  var figureRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var figureRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'figure',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = figureRole
    exports.default = _default
  })

  var formRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var formRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            attributes: [
              {
                constraints: ['set'],
                name: 'aria-label',
              },
            ],
            name: 'form',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                constraints: ['set'],
                name: 'aria-labelledby',
              },
            ],
            name: 'form',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                constraints: ['set'],
                name: 'name',
              },
            ],
            name: 'form',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = formRole
    exports.default = _default
  })

  var genericRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var genericRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['prohibited'],
      prohibitedProps: ['aria-label', 'aria-labelledby'],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'span',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'div',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure']],
    }
    var _default = genericRole
    exports.default = _default
  })

  var gridRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var gridRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-multiselectable': null,
        'aria-readonly': null,
      },
      relatedConcepts: [
        {
          concept: {
            attributes: [
              {
                name: 'role',
                value: 'grid',
              },
            ],
            name: 'table',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [['row'], ['row', 'rowgroup']],
      requiredProps: {},
      superClass: [
        ['roletype', 'widget', 'composite'],
        ['roletype', 'structure', 'section', 'table'],
      ],
    }
    var _default = gridRole
    exports.default = _default
  })

  var gridcellRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var gridcellRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
        'aria-readonly': null,
        'aria-required': null,
        'aria-selected': null,
      },
      relatedConcepts: [
        {
          concept: {
            attributes: [
              {
                name: 'role',
                value: 'gridcell',
              },
            ],
            name: 'td',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: ['row'],
      requiredContextRole: ['row'],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [
        ['roletype', 'structure', 'section', 'cell'],
        ['roletype', 'widget'],
      ],
    }
    var _default = gridcellRole
    exports.default = _default
  })

  var groupRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var groupRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-activedescendant': null,
        'aria-disabled': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'details',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'fieldset',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'optgroup',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = groupRole
    exports.default = _default
  })

  var headingRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var headingRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {
        'aria-level': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'h1',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'h2',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'h3',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'h4',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'h5',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'h6',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        'aria-level': 2,
      },
      superClass: [['roletype', 'structure', 'sectionhead']],
    }
    var _default = headingRole
    exports.default = _default
  })

  var imgRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var imgRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            attributes: [
              {
                constraints: ['set'],
                name: 'alt',
              },
            ],
            name: 'img',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                constraints: ['undefined'],
                name: 'alt',
              },
            ],
            name: 'img',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'imggroup',
          },
          module: 'DTB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = imgRole
    exports.default = _default
  })

  var insertionRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var insertionRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['prohibited'],
      prohibitedProps: ['aria-label', 'aria-labelledby'],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = insertionRole
    exports.default = _default
  })

  var linkRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var linkRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-expanded': null,
      },
      relatedConcepts: [
        {
          concept: {
            attributes: [
              {
                name: 'href',
              },
            ],
            name: 'a',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                name: 'href',
              },
            ],
            name: 'area',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                name: 'href',
              },
            ],
            name: 'link',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'widget', 'command']],
    }
    var _default = linkRole
    exports.default = _default
  })

  var listRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var listRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'menu',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'ol',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'ul',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [['listitem']],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = listRole
    exports.default = _default
  })

  var listboxRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var listboxRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-invalid': null,
        'aria-multiselectable': null,
        'aria-readonly': null,
        'aria-required': null,
        'aria-orientation': 'vertical',
      },
      relatedConcepts: [
        {
          concept: {
            attributes: [
              {
                constraints: ['>1'],
                name: 'size',
              },
              {
                name: 'multiple',
              },
            ],
            name: 'select',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                constraints: ['>1'],
                name: 'size',
              },
            ],
            name: 'select',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                name: 'multiple',
              },
            ],
            name: 'select',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'datalist',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'list',
          },
          module: 'ARIA',
        },
        {
          concept: {
            name: 'select',
          },
          module: 'XForms',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [['option', 'group'], ['option']],
      requiredProps: {},
      superClass: [
        ['roletype', 'widget', 'composite', 'select'],
        ['roletype', 'structure', 'section', 'group', 'select'],
      ],
    }
    var _default = listboxRole
    exports.default = _default
  })

  var listitemRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var listitemRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-level': null,
        'aria-posinset': null,
        'aria-setsize': null,
      },
      relatedConcepts: [
        {
          concept: {
            constraints: ['direct descendant of ol, ul or menu'],
            name: 'li',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'item',
          },
          module: 'XForms',
        },
      ],
      requireContextRole: ['directory', 'list'],
      requiredContextRole: ['directory', 'list'],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = listitemRole
    exports.default = _default
  })

  var logRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var logRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-live': 'polite',
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = logRole
    exports.default = _default
  })

  var mainRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var mainRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'main',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = mainRole
    exports.default = _default
  })

  var marqueeRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var marqueeRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = marqueeRole
    exports.default = _default
  })

  var mathRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var mathRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'math',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = mathRole
    exports.default = _default
  })

  var menuRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var menuRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-orientation': 'vertical',
      },
      relatedConcepts: [
        {
          concept: {
            name: 'MENU',
          },
          module: 'JAPI',
        },
        {
          concept: {
            name: 'list',
          },
          module: 'ARIA',
        },
        {
          concept: {
            name: 'select',
          },
          module: 'XForms',
        },
        {
          concept: {
            name: 'sidebar',
          },
          module: 'DTB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [
        ['menuitem', 'group'],
        ['menuitemradio', 'group'],
        ['menuitemcheckbox', 'group'],
        ['menuitem'],
        ['menuitemcheckbox'],
        ['menuitemradio'],
      ],
      requiredProps: {},
      superClass: [
        ['roletype', 'widget', 'composite', 'select'],
        ['roletype', 'structure', 'section', 'group', 'select'],
      ],
    }
    var _default = menuRole
    exports.default = _default
  })

  var menubarRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var menubarRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-orientation': 'horizontal',
      },
      relatedConcepts: [
        {
          concept: {
            name: 'toolbar',
          },
          module: 'ARIA',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [
        ['menuitem', 'group'],
        ['menuitemradio', 'group'],
        ['menuitemcheckbox', 'group'],
        ['menuitem'],
        ['menuitemcheckbox'],
        ['menuitemradio'],
      ],
      requiredProps: {},
      superClass: [
        ['roletype', 'widget', 'composite', 'select', 'menu'],
        ['roletype', 'structure', 'section', 'group', 'select', 'menu'],
      ],
    }
    var _default = menubarRole
    exports.default = _default
  })

  var menuitemRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var menuitemRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-posinset': null,
        'aria-setsize': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'MENU_ITEM',
          },
          module: 'JAPI',
        },
        {
          concept: {
            name: 'listitem',
          },
          module: 'ARIA',
        },
        {
          concept: {
            name: 'menuitem',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'option',
          },
          module: 'ARIA',
        },
      ],
      requireContextRole: ['group', 'menu', 'menubar'],
      requiredContextRole: ['group', 'menu', 'menubar'],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'widget', 'command']],
    }
    var _default = menuitemRole
    exports.default = _default
  })

  var menuitemcheckboxRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var menuitemcheckboxRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'menuitem',
          },
          module: 'ARIA',
        },
      ],
      requireContextRole: ['group', 'menu', 'menubar'],
      requiredContextRole: ['group', 'menu', 'menubar'],
      requiredOwnedElements: [],
      requiredProps: {
        'aria-checked': null,
      },
      superClass: [
        ['roletype', 'widget', 'input', 'checkbox'],
        ['roletype', 'widget', 'command', 'menuitem'],
      ],
    }
    var _default = menuitemcheckboxRole
    exports.default = _default
  })

  var menuitemradioRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var menuitemradioRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'menuitem',
          },
          module: 'ARIA',
        },
      ],
      requireContextRole: ['group', 'menu', 'menubar'],
      requiredContextRole: ['group', 'menu', 'menubar'],
      requiredOwnedElements: [],
      requiredProps: {
        'aria-checked': null,
      },
      superClass: [
        ['roletype', 'widget', 'input', 'checkbox', 'menuitemcheckbox'],
        ['roletype', 'widget', 'command', 'menuitem', 'menuitemcheckbox'],
        ['roletype', 'widget', 'input', 'radio'],
      ],
    }
    var _default = menuitemradioRole
    exports.default = _default
  })

  var meterRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var meterRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        'aria-valuemax': null,
        'aria-valuemin': null,
        'aria-valuenow': null,
      },
      superClass: [['roletype', 'structure', 'range']],
    }
    var _default = meterRole
    exports.default = _default
  })

  var navigationRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var navigationRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'nav',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = navigationRole
    exports.default = _default
  })

  var noneRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var noneRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: [],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [],
    }
    var _default = noneRole
    exports.default = _default
  })

  var noteRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var noteRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = noteRole
    exports.default = _default
  })

  var optionRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var optionRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {
        'aria-checked': null,
        'aria-posinset': null,
        'aria-setsize': null,
        'aria-selected': 'false',
      },
      relatedConcepts: [
        {
          concept: {
            name: 'item',
          },
          module: 'XForms',
        },
        {
          concept: {
            name: 'listitem',
          },
          module: 'ARIA',
        },
        {
          concept: {
            name: 'option',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        'aria-selected': 'false',
      },
      superClass: [['roletype', 'widget', 'input']],
    }
    var _default = optionRole
    exports.default = _default
  })

  var paragraphRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var paragraphRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['prohibited'],
      prohibitedProps: ['aria-label', 'aria-labelledby'],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = paragraphRole
    exports.default = _default
  })

  var presentationRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var presentationRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['prohibited'],
      prohibitedProps: ['aria-label', 'aria-labelledby'],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure']],
    }
    var _default = presentationRole
    exports.default = _default
  })

  var progressbarRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var progressbarRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'progress',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'status',
          },
          module: 'ARIA',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [
        ['roletype', 'structure', 'range'],
        ['roletype', 'widget'],
      ],
    }
    var _default = progressbarRole
    exports.default = _default
  })

  var radioRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var radioRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {
        'aria-checked': null,
        'aria-posinset': null,
        'aria-setsize': null,
      },
      relatedConcepts: [
        {
          concept: {
            attributes: [
              {
                name: 'type',
                value: 'radio',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        'aria-checked': null,
      },
      superClass: [['roletype', 'widget', 'input']],
    }
    var _default = radioRole
    exports.default = _default
  })

  var radiogroupRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var radiogroupRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-errormessage': null,
        'aria-invalid': null,
        'aria-readonly': null,
        'aria-required': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'list',
          },
          module: 'ARIA',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [['radio']],
      requiredProps: {},
      superClass: [
        ['roletype', 'widget', 'composite', 'select'],
        ['roletype', 'structure', 'section', 'group', 'select'],
      ],
    }
    var _default = radiogroupRole
    exports.default = _default
  })

  var regionRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var regionRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            attributes: [
              {
                constraints: ['set'],
                name: 'aria-label',
              },
            ],
            name: 'section',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                constraints: ['set'],
                name: 'aria-labelledby',
              },
            ],
            name: 'section',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'Device Independence Glossart perceivable unit',
          },
        },
        {
          concept: {
            name: 'frame',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = regionRole
    exports.default = _default
  })

  var rowRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var rowRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {
        'aria-colindex': null,
        'aria-expanded': null,
        'aria-level': null,
        'aria-posinset': null,
        'aria-rowindex': null,
        'aria-selected': null,
        'aria-setsize': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'tr',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
      requiredContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
      requiredOwnedElements: [['cell'], ['columnheader'], ['gridcell'], ['rowheader']],
      requiredProps: {},
      superClass: [
        ['roletype', 'structure', 'section', 'group'],
        ['roletype', 'widget'],
      ],
    }
    var _default = rowRole
    exports.default = _default
  })

  var rowgroupRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var rowgroupRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'tbody',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'tfoot',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'thead',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: ['grid', 'table', 'treegrid'],
      requiredContextRole: ['grid', 'table', 'treegrid'],
      requiredOwnedElements: [['row']],
      requiredProps: {},
      superClass: [['roletype', 'structure']],
    }
    var _default = rowgroupRole
    exports.default = _default
  })

  var rowheaderRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var rowheaderRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {
        'aria-sort': null,
      },
      relatedConcepts: [
        {
          concept: {
            attributes: [
              {
                name: 'scope',
                value: 'row',
              },
            ],
            name: 'th',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: ['row'],
      requiredContextRole: ['row'],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [
        ['roletype', 'structure', 'section', 'cell'],
        ['roletype', 'structure', 'section', 'cell', 'gridcell'],
        ['roletype', 'widget', 'gridcell'],
        ['roletype', 'structure', 'sectionhead'],
      ],
    }
    var _default = rowheaderRole
    exports.default = _default
  })

  var scrollbarRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var scrollbarRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-orientation': 'vertical',
        'aria-valuemax': '100',
        'aria-valuemin': '0',
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        'aria-controls': null,
        'aria-valuenow': null,
      },
      superClass: [
        ['roletype', 'structure', 'range'],
        ['roletype', 'widget'],
      ],
    }
    var _default = scrollbarRole
    exports.default = _default
  })

  var searchRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var searchRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = searchRole
    exports.default = _default
  })

  var searchboxRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var searchboxRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            attributes: [
              {
                constraints: ['undefined'],
                name: 'list',
              },
              {
                name: 'type',
                value: 'search',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'widget', 'input', 'textbox']],
    }
    var _default = searchboxRole
    exports.default = _default
  })

  var separatorRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var separatorRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-valuetext': null,
        'aria-orientation': 'horizontal',
        'aria-valuemax': '100',
        'aria-valuemin': '0',
      },
      relatedConcepts: [
        {
          concept: {
            name: 'hr',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure']],
    }
    var _default = separatorRole
    exports.default = _default
  })

  var sliderRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var sliderRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-errormessage': null,
        'aria-haspopup': null,
        'aria-invalid': null,
        'aria-readonly': null,
        'aria-orientation': 'horizontal',
        'aria-valuemax': '100',
        'aria-valuemin': '0',
      },
      relatedConcepts: [
        {
          concept: {
            attributes: [
              {
                name: 'type',
                value: 'range',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        'aria-valuenow': null,
      },
      superClass: [
        ['roletype', 'widget', 'input'],
        ['roletype', 'structure', 'range'],
      ],
    }
    var _default = sliderRole
    exports.default = _default
  })

  var spinbuttonRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var spinbuttonRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-errormessage': null,
        'aria-invalid': null,
        'aria-readonly': null,
        'aria-required': null,
        'aria-valuenow': '0',
      },
      relatedConcepts: [
        {
          concept: {
            attributes: [
              {
                name: 'type',
                value: 'number',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [
        ['roletype', 'widget', 'composite'],
        ['roletype', 'widget', 'input'],
        ['roletype', 'structure', 'range'],
      ],
    }
    var _default = spinbuttonRole
    exports.default = _default
  })

  var statusRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var statusRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-atomic': 'true',
        'aria-live': 'polite',
      },
      relatedConcepts: [
        {
          concept: {
            name: 'output',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = statusRole
    exports.default = _default
  })

  var strongRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var strongRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['prohibited'],
      prohibitedProps: ['aria-label', 'aria-labelledby'],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = strongRole
    exports.default = _default
  })

  var subscriptRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var subscriptRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['prohibited'],
      prohibitedProps: ['aria-label', 'aria-labelledby'],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = subscriptRole
    exports.default = _default
  })

  var superscriptRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var superscriptRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['prohibited'],
      prohibitedProps: ['aria-label', 'aria-labelledby'],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = superscriptRole
    exports.default = _default
  })

  var switchRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var switchRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'button',
          },
          module: 'ARIA',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {
        'aria-checked': null,
      },
      superClass: [['roletype', 'widget', 'input', 'checkbox']],
    }
    var _default = switchRole
    exports.default = _default
  })

  var tabRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var tabRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-posinset': null,
        'aria-setsize': null,
        'aria-selected': 'false',
      },
      relatedConcepts: [],
      requireContextRole: ['tablist'],
      requiredContextRole: ['tablist'],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [
        ['roletype', 'structure', 'sectionhead'],
        ['roletype', 'widget'],
      ],
    }
    var _default = tabRole
    exports.default = _default
  })

  var tableRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var tableRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-colcount': null,
        'aria-rowcount': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'table',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [['row'], ['row', 'rowgroup']],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = tableRole
    exports.default = _default
  })

  var tablistRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var tablistRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-level': null,
        'aria-multiselectable': null,
        'aria-orientation': 'horizontal',
      },
      relatedConcepts: [
        {
          module: 'DAISY',
          concept: {
            name: 'guide',
          },
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [['tab']],
      requiredProps: {},
      superClass: [['roletype', 'widget', 'composite']],
    }
    var _default = tablistRole
    exports.default = _default
  })

  var tabpanelRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var tabpanelRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = tabpanelRole
    exports.default = _default
  })

  var termRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var termRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'dfn',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = termRole
    exports.default = _default
  })

  var textboxRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var textboxRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-activedescendant': null,
        'aria-autocomplete': null,
        'aria-errormessage': null,
        'aria-haspopup': null,
        'aria-invalid': null,
        'aria-multiline': null,
        'aria-placeholder': null,
        'aria-readonly': null,
        'aria-required': null,
      },
      relatedConcepts: [
        {
          concept: {
            attributes: [
              {
                constraints: ['undefined'],
                name: 'type',
              },
              {
                constraints: ['undefined'],
                name: 'list',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                constraints: ['undefined'],
                name: 'list',
              },
              {
                name: 'type',
                value: 'email',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                constraints: ['undefined'],
                name: 'list',
              },
              {
                name: 'type',
                value: 'tel',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                constraints: ['undefined'],
                name: 'list',
              },
              {
                name: 'type',
                value: 'text',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
        {
          concept: {
            attributes: [
              {
                constraints: ['undefined'],
                name: 'list',
              },
              {
                name: 'type',
                value: 'url',
              },
            ],
            name: 'input',
          },
          module: 'HTML',
        },
        {
          concept: {
            name: 'input',
          },
          module: 'XForms',
        },
        {
          concept: {
            name: 'textarea',
          },
          module: 'HTML',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'widget', 'input']],
    }
    var _default = textboxRole
    exports.default = _default
  })

  var timeRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var timeRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = timeRole
    exports.default = _default
  })

  var timerRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var timerRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'status']],
    }
    var _default = timerRole
    exports.default = _default
  })

  var toolbarRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var toolbarRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-orientation': 'horizontal',
      },
      relatedConcepts: [
        {
          concept: {
            name: 'menubar',
          },
          module: 'ARIA',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'group']],
    }
    var _default = toolbarRole
    exports.default = _default
  })

  var tooltipRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var tooltipRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = tooltipRole
    exports.default = _default
  })

  var treeRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var treeRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-errormessage': null,
        'aria-invalid': null,
        'aria-multiselectable': null,
        'aria-required': null,
        'aria-orientation': 'vertical',
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [['treeitem', 'group'], ['treeitem']],
      requiredProps: {},
      superClass: [
        ['roletype', 'widget', 'composite', 'select'],
        ['roletype', 'structure', 'section', 'group', 'select'],
      ],
    }
    var _default = treeRole
    exports.default = _default
  })

  var treegridRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var treegridRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [['row'], ['row', 'rowgroup']],
      requiredProps: {},
      superClass: [
        ['roletype', 'widget', 'composite', 'grid'],
        ['roletype', 'structure', 'section', 'table', 'grid'],
        ['roletype', 'widget', 'composite', 'select', 'tree'],
        ['roletype', 'structure', 'section', 'group', 'select', 'tree'],
      ],
    }
    var _default = treegridRole
    exports.default = _default
  })

  var treeitemRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var treeitemRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {
        'aria-expanded': null,
        'aria-haspopup': null,
      },
      relatedConcepts: [],
      requireContextRole: ['group', 'tree'],
      requiredContextRole: ['group', 'tree'],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [
        ['roletype', 'structure', 'section', 'listitem'],
        ['roletype', 'widget', 'input', 'option'],
      ],
    }
    var _default = treeitemRole
    exports.default = _default
  })

  var ariaLiteralRoles_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0

    var _map = interopRequireDefault$1(map$2)

    var _alertRole = interopRequireDefault$1(alertRole_1)

    var _alertdialogRole = interopRequireDefault$1(alertdialogRole_1)

    var _applicationRole = interopRequireDefault$1(applicationRole_1)

    var _articleRole = interopRequireDefault$1(articleRole_1)

    var _bannerRole = interopRequireDefault$1(bannerRole_1)

    var _blockquoteRole = interopRequireDefault$1(blockquoteRole_1)

    var _buttonRole = interopRequireDefault$1(buttonRole_1)

    var _captionRole = interopRequireDefault$1(captionRole_1)

    var _cellRole = interopRequireDefault$1(cellRole_1)

    var _checkboxRole = interopRequireDefault$1(checkboxRole_1)

    var _codeRole = interopRequireDefault$1(codeRole_1)

    var _columnheaderRole = interopRequireDefault$1(columnheaderRole_1)

    var _comboboxRole = interopRequireDefault$1(comboboxRole_1)

    var _complementaryRole = interopRequireDefault$1(complementaryRole_1)

    var _contentinfoRole = interopRequireDefault$1(contentinfoRole_1)

    var _definitionRole = interopRequireDefault$1(definitionRole_1)

    var _deletionRole = interopRequireDefault$1(deletionRole_1)

    var _dialogRole = interopRequireDefault$1(dialogRole_1)

    var _directoryRole = interopRequireDefault$1(directoryRole_1)

    var _documentRole = interopRequireDefault$1(documentRole_1)

    var _emphasisRole = interopRequireDefault$1(emphasisRole_1)

    var _feedRole = interopRequireDefault$1(feedRole_1)

    var _figureRole = interopRequireDefault$1(figureRole_1)

    var _formRole = interopRequireDefault$1(formRole_1)

    var _genericRole = interopRequireDefault$1(genericRole_1)

    var _gridRole = interopRequireDefault$1(gridRole_1)

    var _gridcellRole = interopRequireDefault$1(gridcellRole_1)

    var _groupRole = interopRequireDefault$1(groupRole_1)

    var _headingRole = interopRequireDefault$1(headingRole_1)

    var _imgRole = interopRequireDefault$1(imgRole_1)

    var _insertionRole = interopRequireDefault$1(insertionRole_1)

    var _linkRole = interopRequireDefault$1(linkRole_1)

    var _listRole = interopRequireDefault$1(listRole_1)

    var _listboxRole = interopRequireDefault$1(listboxRole_1)

    var _listitemRole = interopRequireDefault$1(listitemRole_1)

    var _logRole = interopRequireDefault$1(logRole_1)

    var _mainRole = interopRequireDefault$1(mainRole_1)

    var _marqueeRole = interopRequireDefault$1(marqueeRole_1)

    var _mathRole = interopRequireDefault$1(mathRole_1)

    var _menuRole = interopRequireDefault$1(menuRole_1)

    var _menubarRole = interopRequireDefault$1(menubarRole_1)

    var _menuitemRole = interopRequireDefault$1(menuitemRole_1)

    var _menuitemcheckboxRole = interopRequireDefault$1(menuitemcheckboxRole_1)

    var _menuitemradioRole = interopRequireDefault$1(menuitemradioRole_1)

    var _meterRole = interopRequireDefault$1(meterRole_1)

    var _navigationRole = interopRequireDefault$1(navigationRole_1)

    var _noneRole = interopRequireDefault$1(noneRole_1)

    var _noteRole = interopRequireDefault$1(noteRole_1)

    var _optionRole = interopRequireDefault$1(optionRole_1)

    var _paragraphRole = interopRequireDefault$1(paragraphRole_1)

    var _presentationRole = interopRequireDefault$1(presentationRole_1)

    var _progressbarRole = interopRequireDefault$1(progressbarRole_1)

    var _radioRole = interopRequireDefault$1(radioRole_1)

    var _radiogroupRole = interopRequireDefault$1(radiogroupRole_1)

    var _regionRole = interopRequireDefault$1(regionRole_1)

    var _rowRole = interopRequireDefault$1(rowRole_1)

    var _rowgroupRole = interopRequireDefault$1(rowgroupRole_1)

    var _rowheaderRole = interopRequireDefault$1(rowheaderRole_1)

    var _scrollbarRole = interopRequireDefault$1(scrollbarRole_1)

    var _searchRole = interopRequireDefault$1(searchRole_1)

    var _searchboxRole = interopRequireDefault$1(searchboxRole_1)

    var _separatorRole = interopRequireDefault$1(separatorRole_1)

    var _sliderRole = interopRequireDefault$1(sliderRole_1)

    var _spinbuttonRole = interopRequireDefault$1(spinbuttonRole_1)

    var _statusRole = interopRequireDefault$1(statusRole_1)

    var _strongRole = interopRequireDefault$1(strongRole_1)

    var _subscriptRole = interopRequireDefault$1(subscriptRole_1)

    var _superscriptRole = interopRequireDefault$1(superscriptRole_1)

    var _switchRole = interopRequireDefault$1(switchRole_1)

    var _tabRole = interopRequireDefault$1(tabRole_1)

    var _tableRole = interopRequireDefault$1(tableRole_1)

    var _tablistRole = interopRequireDefault$1(tablistRole_1)

    var _tabpanelRole = interopRequireDefault$1(tabpanelRole_1)

    var _termRole = interopRequireDefault$1(termRole_1)

    var _textboxRole = interopRequireDefault$1(textboxRole_1)

    var _timeRole = interopRequireDefault$1(timeRole_1)

    var _timerRole = interopRequireDefault$1(timerRole_1)

    var _toolbarRole = interopRequireDefault$1(toolbarRole_1)

    var _tooltipRole = interopRequireDefault$1(tooltipRole_1)

    var _treeRole = interopRequireDefault$1(treeRole_1)

    var _treegridRole = interopRequireDefault$1(treegridRole_1)

    var _treeitemRole = interopRequireDefault$1(treeitemRole_1)

    var ariaLiteralRoles = new _map.default([
      ['alert', _alertRole.default],
      ['alertdialog', _alertdialogRole.default],
      ['application', _applicationRole.default],
      ['article', _articleRole.default],
      ['banner', _bannerRole.default],
      ['blockquote', _blockquoteRole.default],
      ['button', _buttonRole.default],
      ['caption', _captionRole.default],
      ['cell', _cellRole.default],
      ['checkbox', _checkboxRole.default],
      ['code', _codeRole.default],
      ['columnheader', _columnheaderRole.default],
      ['combobox', _comboboxRole.default],
      ['complementary', _complementaryRole.default],
      ['contentinfo', _contentinfoRole.default],
      ['definition', _definitionRole.default],
      ['deletion', _deletionRole.default],
      ['dialog', _dialogRole.default],
      ['directory', _directoryRole.default],
      ['document', _documentRole.default],
      ['emphasis', _emphasisRole.default],
      ['feed', _feedRole.default],
      ['figure', _figureRole.default],
      ['form', _formRole.default],
      ['generic', _genericRole.default],
      ['grid', _gridRole.default],
      ['gridcell', _gridcellRole.default],
      ['group', _groupRole.default],
      ['heading', _headingRole.default],
      ['img', _imgRole.default],
      ['insertion', _insertionRole.default],
      ['link', _linkRole.default],
      ['list', _listRole.default],
      ['listbox', _listboxRole.default],
      ['listitem', _listitemRole.default],
      ['log', _logRole.default],
      ['main', _mainRole.default],
      ['marquee', _marqueeRole.default],
      ['math', _mathRole.default],
      ['menu', _menuRole.default],
      ['menubar', _menubarRole.default],
      ['menuitem', _menuitemRole.default],
      ['menuitemcheckbox', _menuitemcheckboxRole.default],
      ['menuitemradio', _menuitemradioRole.default],
      ['meter', _meterRole.default],
      ['navigation', _navigationRole.default],
      ['none', _noneRole.default],
      ['note', _noteRole.default],
      ['option', _optionRole.default],
      ['paragraph', _paragraphRole.default],
      ['presentation', _presentationRole.default],
      ['progressbar', _progressbarRole.default],
      ['radio', _radioRole.default],
      ['radiogroup', _radiogroupRole.default],
      ['region', _regionRole.default],
      ['row', _rowRole.default],
      ['rowgroup', _rowgroupRole.default],
      ['rowheader', _rowheaderRole.default],
      ['scrollbar', _scrollbarRole.default],
      ['search', _searchRole.default],
      ['searchbox', _searchboxRole.default],
      ['separator', _separatorRole.default],
      ['slider', _sliderRole.default],
      ['spinbutton', _spinbuttonRole.default],
      ['status', _statusRole.default],
      ['strong', _strongRole.default],
      ['subscript', _subscriptRole.default],
      ['superscript', _superscriptRole.default],
      ['switch', _switchRole.default],
      ['tab', _tabRole.default],
      ['table', _tableRole.default],
      ['tablist', _tablistRole.default],
      ['tabpanel', _tabpanelRole.default],
      ['term', _termRole.default],
      ['textbox', _textboxRole.default],
      ['time', _timeRole.default],
      ['timer', _timerRole.default],
      ['toolbar', _toolbarRole.default],
      ['tooltip', _tooltipRole.default],
      ['tree', _treeRole.default],
      ['treegrid', _treegridRole.default],
      ['treeitem', _treeitemRole.default],
    ])
    var _default = ariaLiteralRoles
    exports.default = _default
  })

  var docAbstractRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docAbstractRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'abstract [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = docAbstractRole
    exports.default = _default
  })

  var docAcknowledgmentsRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docAcknowledgmentsRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'acknowledgments [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = docAcknowledgmentsRole
    exports.default = _default
  })

  var docAfterwordRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docAfterwordRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'afterword [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = docAfterwordRole
    exports.default = _default
  })

  var docAppendixRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docAppendixRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'appendix [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = docAppendixRole
    exports.default = _default
  })

  var docBacklinkRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docBacklinkRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author', 'content'],
      prohibitedProps: [],
      props: {
        'aria-errormessage': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'referrer [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'widget', 'command', 'link']],
    }
    var _default = docBacklinkRole
    exports.default = _default
  })

  var docBiblioentryRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docBiblioentryRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'EPUB biblioentry [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: ['doc-bibliography'],
      requiredContextRole: ['doc-bibliography'],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'listitem']],
    }
    var _default = docBiblioentryRole
    exports.default = _default
  })

  var docBibliographyRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docBibliographyRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'bibliography [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [['doc-biblioentry']],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = docBibliographyRole
    exports.default = _default
  })

  var docBibliorefRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docBibliorefRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {
        'aria-errormessage': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'biblioref [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'widget', 'command', 'link']],
    }
    var _default = docBibliorefRole
    exports.default = _default
  })

  var docChapterRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docChapterRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'chapter [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = docChapterRole
    exports.default = _default
  })

  var docColophonRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docColophonRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'colophon [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = docColophonRole
    exports.default = _default
  })

  var docConclusionRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docConclusionRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'conclusion [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = docConclusionRole
    exports.default = _default
  })

  var docCoverRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docCoverRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'cover [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'img']],
    }
    var _default = docCoverRole
    exports.default = _default
  })

  var docCreditRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docCreditRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'credit [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = docCreditRole
    exports.default = _default
  })

  var docCreditsRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docCreditsRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'credits [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = docCreditsRole
    exports.default = _default
  })

  var docDedicationRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docDedicationRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'dedication [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = docDedicationRole
    exports.default = _default
  })

  var docEndnoteRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docEndnoteRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'rearnote [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: ['doc-endnotes'],
      requiredContextRole: ['doc-endnotes'],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'listitem']],
    }
    var _default = docEndnoteRole
    exports.default = _default
  })

  var docEndnotesRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docEndnotesRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'rearnotes [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [['doc-endnote']],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = docEndnotesRole
    exports.default = _default
  })

  var docEpigraphRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docEpigraphRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'epigraph [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = docEpigraphRole
    exports.default = _default
  })

  var docEpilogueRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docEpilogueRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'epilogue [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = docEpilogueRole
    exports.default = _default
  })

  var docErrataRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docErrataRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'errata [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = docErrataRole
    exports.default = _default
  })

  var docExampleRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docExampleRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = docExampleRole
    exports.default = _default
  })

  var docFootnoteRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docFootnoteRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'footnote [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = docFootnoteRole
    exports.default = _default
  })

  var docForewordRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docForewordRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'foreword [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = docForewordRole
    exports.default = _default
  })

  var docGlossaryRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docGlossaryRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'glossary [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [['definition'], ['term']],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = docGlossaryRole
    exports.default = _default
  })

  var docGlossrefRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docGlossrefRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {
        'aria-errormessage': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'glossref [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'widget', 'command', 'link']],
    }
    var _default = docGlossrefRole
    exports.default = _default
  })

  var docIndexRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docIndexRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'index [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']],
    }
    var _default = docIndexRole
    exports.default = _default
  })

  var docIntroductionRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docIntroductionRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'introduction [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = docIntroductionRole
    exports.default = _default
  })

  var docNoterefRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docNoterefRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author', 'contents'],
      prohibitedProps: [],
      props: {
        'aria-errormessage': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'noteref [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'widget', 'command', 'link']],
    }
    var _default = docNoterefRole
    exports.default = _default
  })

  var docNoticeRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docNoticeRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'notice [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'note']],
    }
    var _default = docNoticeRole
    exports.default = _default
  })

  var docPagebreakRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docPagebreakRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: true,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'pagebreak [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'separator']],
    }
    var _default = docPagebreakRole
    exports.default = _default
  })

  var docPagelistRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docPagelistRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'page-list [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']],
    }
    var _default = docPagelistRole
    exports.default = _default
  })

  var docPartRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docPartRole = {
      abstract: false,
      accessibleNameRequired: true,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'part [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = docPartRole
    exports.default = _default
  })

  var docPrefaceRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docPrefaceRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'preface [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = docPrefaceRole
    exports.default = _default
  })

  var docPrologueRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docPrologueRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'prologue [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark']],
    }
    var _default = docPrologueRole
    exports.default = _default
  })

  var docPullquoteRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docPullquoteRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {},
      relatedConcepts: [
        {
          concept: {
            name: 'pullquote [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['none']],
    }
    var _default = docPullquoteRole
    exports.default = _default
  })

  var docQnaRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docQnaRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'qna [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section']],
    }
    var _default = docQnaRole
    exports.default = _default
  })

  var docSubtitleRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docSubtitleRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'subtitle [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'sectionhead']],
    }
    var _default = docSubtitleRole
    exports.default = _default
  })

  var docTipRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docTipRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'help [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'note']],
    }
    var _default = docTipRole
    exports.default = _default
  })

  var docTocRole_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0
    var docTocRole = {
      abstract: false,
      accessibleNameRequired: false,
      baseConcepts: [],
      childrenPresentational: false,
      nameFrom: ['author'],
      prohibitedProps: [],
      props: {
        'aria-disabled': null,
        'aria-errormessage': null,
        'aria-expanded': null,
        'aria-haspopup': null,
        'aria-invalid': null,
      },
      relatedConcepts: [
        {
          concept: {
            name: 'toc [EPUB-SSV]',
          },
          module: 'EPUB',
        },
      ],
      requireContextRole: [],
      requiredContextRole: [],
      requiredOwnedElements: [],
      requiredProps: {},
      superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']],
    }
    var _default = docTocRole
    exports.default = _default
  })

  var ariaDpubRoles_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0

    var _map = interopRequireDefault$1(map$2)

    var _docAbstractRole = interopRequireDefault$1(docAbstractRole_1)

    var _docAcknowledgmentsRole = interopRequireDefault$1(docAcknowledgmentsRole_1)

    var _docAfterwordRole = interopRequireDefault$1(docAfterwordRole_1)

    var _docAppendixRole = interopRequireDefault$1(docAppendixRole_1)

    var _docBacklinkRole = interopRequireDefault$1(docBacklinkRole_1)

    var _docBiblioentryRole = interopRequireDefault$1(docBiblioentryRole_1)

    var _docBibliographyRole = interopRequireDefault$1(docBibliographyRole_1)

    var _docBibliorefRole = interopRequireDefault$1(docBibliorefRole_1)

    var _docChapterRole = interopRequireDefault$1(docChapterRole_1)

    var _docColophonRole = interopRequireDefault$1(docColophonRole_1)

    var _docConclusionRole = interopRequireDefault$1(docConclusionRole_1)

    var _docCoverRole = interopRequireDefault$1(docCoverRole_1)

    var _docCreditRole = interopRequireDefault$1(docCreditRole_1)

    var _docCreditsRole = interopRequireDefault$1(docCreditsRole_1)

    var _docDedicationRole = interopRequireDefault$1(docDedicationRole_1)

    var _docEndnoteRole = interopRequireDefault$1(docEndnoteRole_1)

    var _docEndnotesRole = interopRequireDefault$1(docEndnotesRole_1)

    var _docEpigraphRole = interopRequireDefault$1(docEpigraphRole_1)

    var _docEpilogueRole = interopRequireDefault$1(docEpilogueRole_1)

    var _docErrataRole = interopRequireDefault$1(docErrataRole_1)

    var _docExampleRole = interopRequireDefault$1(docExampleRole_1)

    var _docFootnoteRole = interopRequireDefault$1(docFootnoteRole_1)

    var _docForewordRole = interopRequireDefault$1(docForewordRole_1)

    var _docGlossaryRole = interopRequireDefault$1(docGlossaryRole_1)

    var _docGlossrefRole = interopRequireDefault$1(docGlossrefRole_1)

    var _docIndexRole = interopRequireDefault$1(docIndexRole_1)

    var _docIntroductionRole = interopRequireDefault$1(docIntroductionRole_1)

    var _docNoterefRole = interopRequireDefault$1(docNoterefRole_1)

    var _docNoticeRole = interopRequireDefault$1(docNoticeRole_1)

    var _docPagebreakRole = interopRequireDefault$1(docPagebreakRole_1)

    var _docPagelistRole = interopRequireDefault$1(docPagelistRole_1)

    var _docPartRole = interopRequireDefault$1(docPartRole_1)

    var _docPrefaceRole = interopRequireDefault$1(docPrefaceRole_1)

    var _docPrologueRole = interopRequireDefault$1(docPrologueRole_1)

    var _docPullquoteRole = interopRequireDefault$1(docPullquoteRole_1)

    var _docQnaRole = interopRequireDefault$1(docQnaRole_1)

    var _docSubtitleRole = interopRequireDefault$1(docSubtitleRole_1)

    var _docTipRole = interopRequireDefault$1(docTipRole_1)

    var _docTocRole = interopRequireDefault$1(docTocRole_1)

    var ariaDpubRoles = new _map.default([
      ['doc-abstract', _docAbstractRole.default],
      ['doc-acknowledgments', _docAcknowledgmentsRole.default],
      ['doc-afterword', _docAfterwordRole.default],
      ['doc-appendix', _docAppendixRole.default],
      ['doc-backlink', _docBacklinkRole.default],
      ['doc-biblioentry', _docBiblioentryRole.default],
      ['doc-bibliography', _docBibliographyRole.default],
      ['doc-biblioref', _docBibliorefRole.default],
      ['doc-chapter', _docChapterRole.default],
      ['doc-colophon', _docColophonRole.default],
      ['doc-conclusion', _docConclusionRole.default],
      ['doc-cover', _docCoverRole.default],
      ['doc-credit', _docCreditRole.default],
      ['doc-credits', _docCreditsRole.default],
      ['doc-dedication', _docDedicationRole.default],
      ['doc-endnote', _docEndnoteRole.default],
      ['doc-endnotes', _docEndnotesRole.default],
      ['doc-epigraph', _docEpigraphRole.default],
      ['doc-epilogue', _docEpilogueRole.default],
      ['doc-errata', _docErrataRole.default],
      ['doc-example', _docExampleRole.default],
      ['doc-footnote', _docFootnoteRole.default],
      ['doc-foreword', _docForewordRole.default],
      ['doc-glossary', _docGlossaryRole.default],
      ['doc-glossref', _docGlossrefRole.default],
      ['doc-index', _docIndexRole.default],
      ['doc-introduction', _docIntroductionRole.default],
      ['doc-noteref', _docNoterefRole.default],
      ['doc-notice', _docNoticeRole.default],
      ['doc-pagebreak', _docPagebreakRole.default],
      ['doc-pagelist', _docPagelistRole.default],
      ['doc-part', _docPartRole.default],
      ['doc-preface', _docPrefaceRole.default],
      ['doc-prologue', _docPrologueRole.default],
      ['doc-pullquote', _docPullquoteRole.default],
      ['doc-qna', _docQnaRole.default],
      ['doc-subtitle', _docSubtitleRole.default],
      ['doc-tip', _docTipRole.default],
      ['doc-toc', _docTocRole.default],
    ])
    var _default = ariaDpubRoles
    exports.default = _default
  })

  var rolesMap_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0

    var _getIterator2 = interopRequireDefault$1(getIterator$1)

    var _isArray = interopRequireDefault$1(isArray$3)

    var _getIteratorMethod2 = interopRequireDefault$1(getIteratorMethod$1)

    var _symbol = interopRequireDefault$1(symbol$2)

    var _from = interopRequireDefault$1(from_1$2)

    var _slice = interopRequireDefault$1(slice$2)

    var _defineProperty2 = interopRequireDefault$1(defineProperty$9)

    var _assign = interopRequireDefault$1(assign$2)

    var _keys = interopRequireDefault$1(keys$3)

    var _forEach = interopRequireDefault$1(forEach$3)

    var _map = interopRequireDefault$1(map$2)

    var _ariaAbstractRoles = interopRequireDefault$1(ariaAbstractRoles_1)

    var _ariaLiteralRoles = interopRequireDefault$1(ariaLiteralRoles_1)

    var _ariaDpubRoles = interopRequireDefault$1(ariaDpubRoles_1)

    var _context

    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it
      if (typeof _symbol.default === 'undefined' || (0, _getIteratorMethod2.default)(o) == null) {
        if (
          (0, _isArray.default)(o) ||
          (it = _unsupportedIterableToArray(o)) ||
          (allowArrayLike && o && typeof o.length === 'number')
        ) {
          if (it) o = it
          var i = 0
          var F = function F() {}
          return {
            s: F,
            n: function n() {
              if (i >= o.length) return {done: true}
              return {done: false, value: o[i++]}
            },
            e: function e(_e) {
              throw _e
            },
            f: F,
          }
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      var normalCompletion = true,
        didErr = false,
        err
      return {
        s: function s() {
          it = (0, _getIterator2.default)(o)
        },
        n: function n() {
          var step = it.next()
          normalCompletion = step.done
          return step
        },
        e: function e(_e2) {
          didErr = true
          err = _e2
        },
        f: function f() {
          try {
            if (!normalCompletion && it.return != null) it.return()
          } finally {
            if (didErr) throw err
          }
        },
      }
    }

    function _unsupportedIterableToArray(o, minLen) {
      var _context2
      if (!o) return
      if (typeof o === 'string') return _arrayLikeToArray(o, minLen)
      var n = (0, _slice.default)((_context2 = Object.prototype.toString.call(o))).call(
        _context2,
        8,
        -1,
      )
      if (n === 'Object' && o.constructor) n = o.constructor.name
      if (n === 'Map' || n === 'Set') return (0, _from.default)(o)
      if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen)
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i]
      }
      return arr2
    }

    var rolesMap = new _map.default([])
    ;(0, _forEach.default)(
      (_context = [_ariaAbstractRoles.default, _ariaLiteralRoles.default, _ariaDpubRoles.default]),
    ).call(_context, function (roleSet) {
      ;(0, _forEach.default)(roleSet).call(roleSet, function (roleDefinition, name) {
        return rolesMap.set(name, roleDefinition)
      })
    })
    ;(0, _forEach.default)(rolesMap).call(rolesMap, function (roleDefinition, name) {
      // Conglomerate the properties
      var _iterator = _createForOfIteratorHelper(roleDefinition.superClass),
        _step

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var superClassIter = _step.value

          var _iterator2 = _createForOfIteratorHelper(superClassIter),
            _step2

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var superClassName = _step2.value
              var superClassDefinition = rolesMap.get(superClassName)

              if (superClassDefinition) {
                for (
                  var _i = 0, _Object$keys = (0, _keys.default)(superClassDefinition.props);
                  _i < _Object$keys.length;
                  _i++
                ) {
                  var prop = _Object$keys[_i]

                  if (!Object.prototype.hasOwnProperty.call(roleDefinition.props, prop)) {
                    ;(0, _assign.default)(
                      roleDefinition.props,
                      (0, _defineProperty2.default)({}, prop, superClassDefinition.props[prop]),
                    )
                  }
                }
              }
            }
          } catch (err) {
            _iterator2.e(err)
          } finally {
            _iterator2.f()
          }
        }
      } catch (err) {
        _iterator.e(err)
      } finally {
        _iterator.f()
      }
    })
    var _default = rolesMap
    exports.default = _default
  })

  // `Set` constructor
  // https://tc39.github.io/ecma262/#sec-set-objects
  var es_set = collection(
    'Set',
    function (init) {
      return function Set() {
        return init(this, arguments.length ? arguments[0] : undefined)
      }
    },
    collectionStrong,
  )

  var set$1 = path.Set

  var set$2 = set$1

  var set$3 = set$2

  var isArray$4 = isArray$1

  var isArray$5 = isArray$4

  function _arrayWithHoles$1(arr) {
    if (isArray$5(arr)) return arr
  }

  var arrayWithHoles = _arrayWithHoles$1

  var ITERATOR$5 = wellKnownSymbol('iterator')

  var isIterable = function (it) {
    var O = Object(it)
    return (
      O[ITERATOR$5] !== undefined ||
      '@@iterator' in O ||
      // eslint-disable-next-line no-prototype-builtins
      iterators.hasOwnProperty(classof(O))
    )
  }

  var isIterable_1 = isIterable

  var isIterable$1 = isIterable_1

  // `Symbol.asyncDispose` well-known symbol
  // https://github.com/tc39/proposal-using-statement
  defineWellKnownSymbol('asyncDispose')

  // `Symbol.dispose` well-known symbol
  // https://github.com/tc39/proposal-using-statement
  defineWellKnownSymbol('dispose')

  // `Symbol.observable` well-known symbol
  // https://github.com/tc39/proposal-observable
  defineWellKnownSymbol('observable')

  // `Symbol.patternMatch` well-known symbol
  // https://github.com/tc39/proposal-pattern-matching
  defineWellKnownSymbol('patternMatch')

  // TODO: remove from `core-js@4`

  defineWellKnownSymbol('replaceAll')

  // TODO: Remove from `core-js@4`

  var symbol$3 = symbol

  var symbol$4 = symbol$3

  function _iterableToArrayLimit$1(arr, i) {
    if (typeof symbol$4 === 'undefined' || !isIterable$1(Object(arr))) return
    var _arr = []
    var _n = true
    var _d = false
    var _e = undefined

    try {
      for (var _i = getIterator$1(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value)

        if (i && _arr.length === i) break
      }
    } catch (err) {
      _d = true
      _e = err
    } finally {
      try {
        if (!_n && _i['return'] != null) _i['return']()
      } finally {
        if (_d) throw _e
      }
    }

    return _arr
  }

  var iterableToArrayLimit = _iterableToArrayLimit$1

  var from_1$3 = from_1

  var from_1$4 = from_1$3

  var slice$3 = slice_1

  var slice$4 = slice$3

  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i]
    }

    return arr2
  }

  var arrayLikeToArray = _arrayLikeToArray$1

  function _unsupportedIterableToArray$1(o, minLen) {
    var _context

    if (!o) return
    if (typeof o === 'string') return arrayLikeToArray(o, minLen)

    var n = slice$4((_context = Object.prototype.toString.call(o))).call(_context, 8, -1)

    if (n === 'Object' && o.constructor) n = o.constructor.name
    if (n === 'Map' || n === 'Set') return from_1$4(o)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray(o, minLen)
  }

  var unsupportedIterableToArray = _unsupportedIterableToArray$1

  function _nonIterableRest$1() {
    throw new TypeError(
      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    )
  }

  var nonIterableRest = _nonIterableRest$1

  function _slicedToArray$1(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimit(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    )
  }

  var slicedToArray = _slicedToArray$1

  var entries = entryVirtual('Array').entries

  var entries$1 = entries

  var ArrayPrototype$3 = Array.prototype

  var DOMIterables$1 = {
    DOMTokenList: true,
    NodeList: true,
  }

  var entries_1 = function (it) {
    var own = it.entries
    return it === ArrayPrototype$3 ||
      (it instanceof Array && own === ArrayPrototype$3.entries) ||
      // eslint-disable-next-line no-prototype-builtins
      DOMIterables$1.hasOwnProperty(classof(it))
      ? entries$1
      : own
  }

  var entries$2 = entries_1

  var $find = arrayIteration.find

  var FIND = 'find'
  var SKIPS_HOLES = true

  var USES_TO_LENGTH$2 = arrayMethodUsesToLength(FIND)

  // Shouldn't skip holes
  if (FIND in [])
    Array(1)[FIND](function () {
      SKIPS_HOLES = false
    })

  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  _export(
    {target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH$2},
    {
      find: function find(callbackfn /* , that = undefined */) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined)
      },
    },
  )

  var find = entryVirtual('Array').find

  var ArrayPrototype$4 = Array.prototype

  var find_1 = function (it) {
    var own = it.find
    return it === ArrayPrototype$4 || (it instanceof Array && own === ArrayPrototype$4.find)
      ? find
      : own
  }

  var find$1 = find_1

  var find$2 = find$1

  var $stringify$1 = getBuiltIn('JSON', 'stringify')
  var re = /[\uD800-\uDFFF]/g
  var low = /^[\uD800-\uDBFF]$/
  var hi = /^[\uDC00-\uDFFF]$/

  var fix = function (match, offset, string) {
    var prev = string.charAt(offset - 1)
    var next = string.charAt(offset + 1)
    if ((low.test(match) && !hi.test(next)) || (hi.test(match) && !low.test(prev))) {
      return '\\u' + match.charCodeAt(0).toString(16)
    }
    return match
  }

  var FORCED$1 = fails(function () {
    return (
      $stringify$1('\uDF06\uD834') !== '"\\udf06\\ud834"' || $stringify$1('\uDEAD') !== '"\\udead"'
    )
  })

  if ($stringify$1) {
    // https://github.com/tc39/proposal-well-formed-stringify
    _export(
      {target: 'JSON', stat: true, forced: FORCED$1},
      {
        // eslint-disable-next-line no-unused-vars
        stringify: function stringify(it, replacer, space) {
          var result = $stringify$1.apply(null, arguments)
          return typeof result == 'string' ? result.replace(re, fix) : result
        },
      },
    )
  }

  if (!path.JSON) path.JSON = {stringify: JSON.stringify}

  // eslint-disable-next-line no-unused-vars
  var stringify = function stringify(it, replacer, space) {
    return path.JSON.stringify.apply(null, arguments)
  }

  var stringify$1 = stringify

  var stringify$2 = stringify$1

  var concat = entryVirtual('Array').concat

  var ArrayPrototype$5 = Array.prototype

  var concat_1 = function (it) {
    var own = it.concat
    return it === ArrayPrototype$5 || (it instanceof Array && own === ArrayPrototype$5.concat)
      ? concat
      : own
  }

  var concat$1 = concat_1

  var concat$2 = concat$1

  var keys$4 = entryVirtual('Array').keys

  var keys$5 = keys$4

  var ArrayPrototype$6 = Array.prototype

  var DOMIterables$2 = {
    DOMTokenList: true,
    NodeList: true,
  }

  var keys_1 = function (it) {
    var own = it.keys
    return it === ArrayPrototype$6 ||
      (it instanceof Array && own === ArrayPrototype$6.keys) ||
      // eslint-disable-next-line no-prototype-builtins
      DOMIterables$2.hasOwnProperty(classof(it))
      ? keys$5
      : own
  }

  var keys$6 = keys_1

  function _arrayWithoutHoles(arr) {
    if (isArray$5(arr)) return arrayLikeToArray(arr)
  }

  var arrayWithoutHoles = _arrayWithoutHoles

  function _iterableToArray(iter) {
    if (typeof symbol$4 !== 'undefined' && isIterable$1(Object(iter))) return from_1$4(iter)
  }

  var iterableToArray = _iterableToArray

  function _nonIterableSpread() {
    throw new TypeError(
      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    )
  }

  var nonIterableSpread = _nonIterableSpread

  function _toConsumableArray(arr) {
    return (
      arrayWithoutHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableSpread()
    )
  }

  var toConsumableArray = _toConsumableArray

  var elementRoleMap_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0

    var _set = interopRequireDefault$1(set$3)

    var _slicedToArray2 = interopRequireDefault$1(slicedToArray)

    var _entries = interopRequireDefault$1(entries$2)

    var _find = interopRequireDefault$1(find$2)

    var _stringify = interopRequireDefault$1(stringify$2)

    var _concat = interopRequireDefault$1(concat$2)

    var _keys = interopRequireDefault$1(keys$6)

    var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray)

    var _forEach = interopRequireDefault$1(forEach$3)

    var _map = interopRequireDefault$1(map$2)

    var _rolesMap = interopRequireDefault$1(rolesMap_1)

    var _context

    var elementRoleMap = new _map.default([])
    ;(0, _forEach.default)(
      (_context = (0, _toConsumableArray2.default)(
        (0, _keys.default)(_rolesMap.default).call(_rolesMap.default),
      )),
    ).call(_context, function (key) {
      var role = _rolesMap.default.get(key)

      if (role) {
        var _context2, _context3

        ;(0, _forEach.default)(
          (_context2 = (0, _concat.default)((_context3 = [])).call(
            _context3,
            (0, _toConsumableArray2.default)(role.baseConcepts),
            (0, _toConsumableArray2.default)(role.relatedConcepts),
          )),
        ).call(_context2, function (relation) {
          if (relation.module === 'HTML') {
            var concept = relation.concept

            if (concept) {
              var _context4

              var conceptStr = (0, _stringify.default)(concept)
              var roles = ((0, _find.default)(
                (_context4 = (0, _toConsumableArray2.default)(
                  (0, _entries.default)(elementRoleMap).call(elementRoleMap),
                )),
              ).call(_context4, function (_ref) {
                var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1]

                return (0, _stringify.default)(key) === conceptStr
              }) || [])[1]

              if (!roles) {
                roles = new _set.default([])
              }

              roles.add(key)
              elementRoleMap.set(concept, roles)
            }
          }
        })
      }
    })
    var _default = elementRoleMap
    exports.default = _default
  })

  var roleElementMap_1 = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.default = void 0

    var _set = interopRequireDefault$1(set$3)

    var _concat = interopRequireDefault$1(concat$2)

    var _keys = interopRequireDefault$1(keys$6)

    var _toConsumableArray2 = interopRequireDefault$1(toConsumableArray)

    var _forEach = interopRequireDefault$1(forEach$3)

    var _map = interopRequireDefault$1(map$2)

    var _rolesMap = interopRequireDefault$1(rolesMap_1)

    var _context

    var roleElementMap = new _map.default([])
    ;(0, _forEach.default)(
      (_context = (0, _toConsumableArray2.default)(
        (0, _keys.default)(_rolesMap.default).call(_rolesMap.default),
      )),
    ).call(_context, function (key) {
      var role = _rolesMap.default.get(key)

      if (role) {
        var _context2, _context3

        ;(0, _forEach.default)(
          (_context2 = (0, _concat.default)((_context3 = [])).call(
            _context3,
            (0, _toConsumableArray2.default)(role.baseConcepts),
            (0, _toConsumableArray2.default)(role.relatedConcepts),
          )),
        ).call(_context2, function (relation) {
          if (relation.module === 'HTML') {
            var concept = relation.concept

            if (concept) {
              var relationConcepts = roleElementMap.get(key) || new _set.default([])
              relationConcepts.add(concept)
              roleElementMap.set(key, relationConcepts)
            }
          }
        })
      }
    })
    var _default = roleElementMap
    exports.default = _default
  })

  var lib = createCommonjsModule(function (module, exports) {
    defineProperty$1(exports, '__esModule', {
      value: true,
    })

    exports.roleElements = exports.elementRoles = exports.roles = exports.dom = exports.aria = void 0

    var _ariaPropsMap = interopRequireDefault$1(ariaPropsMap_1)

    var _domMap = interopRequireDefault$1(domMap_1)

    var _rolesMap = interopRequireDefault$1(rolesMap_1)

    var _elementRoleMap = interopRequireDefault$1(elementRoleMap_1)

    var _roleElementMap = interopRequireDefault$1(roleElementMap_1)

    var aria = _ariaPropsMap.default
    exports.aria = aria
    var dom = _domMap.default
    exports.dom = dom
    var roles = _rolesMap.default
    exports.roles = roles
    var elementRoles = _elementRoleMap.default
    exports.elementRoles = elementRoles
    var roleElements = _roleElementMap.default
    exports.roleElements = roleElements
  })

  var roleHelpers = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.getRoles = getRoles
    exports.getImplicitAriaRoles = getImplicitAriaRoles
    exports.isSubtreeInaccessible = isSubtreeInaccessible
    exports.prettyRoles = prettyRoles
    exports.isInaccessible = isInaccessible
    exports.computeAriaSelected = computeAriaSelected
    exports.computeAriaChecked = computeAriaChecked
    exports.computeAriaPressed = computeAriaPressed
    exports.logRoles = void 0

    const elementRoleList = buildElementRoleList(lib.elementRoles)
    /**
     * @param {Element} element -
     * @returns {boolean} - `true` if `element` and its subtree are inaccessible
     */

    function isSubtreeInaccessible(element) {
      if (element.hidden === true) {
        return true
      }

      if (element.getAttribute('aria-hidden') === 'true') {
        return true
      }

      const window = element.ownerDocument.defaultView

      if (window.getComputedStyle(element).display === 'none') {
        return true
      }

      return false
    }
    /**
     * Partial implementation https://www.w3.org/TR/wai-aria-1.2/#tree_exclusion
     * which should only be used for elements with a non-presentational role i.e.
     * `role="none"` and `role="presentation"` will not be excluded.
     *
     * Implements aria-hidden semantics (i.e. parent overrides child)
     * Ignores "Child Presentational: True" characteristics
     *
     * @param {Element} element -
     * @param {object} [options] -
     * @param {function (element: Element): boolean} options.isSubtreeInaccessible -
     * can be used to return cached results from previous isSubtreeInaccessible calls
     * @returns {boolean} true if excluded, otherwise false
     */

    function isInaccessible(element, options = {}) {
      const {isSubtreeInaccessible: isSubtreeInaccessibleImpl = isSubtreeInaccessible} = options
      const window = element.ownerDocument.defaultView // since visibility is inherited we can exit early

      if (window.getComputedStyle(element).visibility === 'hidden') {
        return true
      }

      let currentElement = element

      while (currentElement) {
        if (isSubtreeInaccessibleImpl(currentElement)) {
          return true
        }

        currentElement = currentElement.parentElement
      }

      return false
    }

    function getImplicitAriaRoles(currentNode) {
      // eslint bug here:
      // eslint-disable-next-line no-unused-vars
      for (const {selector, roles} of elementRoleList) {
        if (currentNode.matches(selector)) {
          return [...roles]
        }
      }

      return []
    }

    function buildElementRoleList(elementRolesMap) {
      function makeElementSelector({name, attributes = []}) {
        return `${name}${attributes
          .map(({name: attributeName, value, constraints = []}) => {
            const shouldNotExist = constraints.indexOf('undefined') !== -1

            if (shouldNotExist) {
              return `:not([${attributeName}])`
            } else if (value) {
              return `[${attributeName}="${value}"]`
            } else {
              return `[${attributeName}]`
            }
          })
          .join('')}`
      }

      function getSelectorSpecificity({attributes = []}) {
        return attributes.length
      }

      let result = [] // eslint bug here:
      // eslint-disable-next-line no-unused-vars

      for (const [element, roles] of elementRolesMap.entries()) {
        result = [
          ...result,
          {
            selector: makeElementSelector(element),
            roles: Array.from(roles),
            specificity: getSelectorSpecificity(element),
          },
        ]
      }

      return result.sort(function (
        {specificity: leftSpecificity},
        {specificity: rightSpecificity},
      ) {
        return rightSpecificity - leftSpecificity
      })
    }

    function getRoles(container, {hidden = false} = {}) {
      function flattenDOM(node) {
        return [
          node,
          ...Array.from(node.children).reduce((acc, child) => [...acc, ...flattenDOM(child)], []),
        ]
      }

      return flattenDOM(container)
        .filter(element => {
          return hidden === false ? isInaccessible(element) === false : true
        })
        .reduce((acc, node) => {
          let roles = [] // TODO: This violates html-aria which does not allow any role on every element

          if (node.hasAttribute('role')) {
            roles = node.getAttribute('role').split(' ').slice(0, 1)
          } else {
            roles = getImplicitAriaRoles(node)
          }

          return roles.reduce(
            (rolesAcc, role) =>
              Array.isArray(rolesAcc[role])
                ? {...rolesAcc, [role]: [...rolesAcc[role], node]}
                : {...rolesAcc, [role]: [node]},
            acc,
          )
        }, {})
    }

    function prettyRoles(dom, {hidden}) {
      const roles = getRoles(dom, {
        hidden,
      }) // We prefer to skip generic role, we don't recommend it

      return Object.entries(roles)
        .filter(([role]) => role !== 'generic')
        .map(([role, elements]) => {
          const delimiterBar = '-'.repeat(50)
          const elementsString = elements
            .map(el => {
              const nameString = `Name "${(0, dist.computeAccessibleName)(el, {
                computedStyleSupportsPseudoElements: (0, config_1.getConfig)()
                  .computedStyleSupportsPseudoElements,
              })}":\n`
              const domString = (0, prettyDom.prettyDOM)(el.cloneNode(false))
              return `${nameString}${domString}`
            })
            .join('\n\n')
          return `${role}:\n\n${elementsString}\n\n${delimiterBar}`
        })
        .join('\n')
    }

    const logRoles = (dom, {hidden = false} = {}) =>
      console.log(
        prettyRoles(dom, {
          hidden,
        }),
      )
    /**
     * @param {Element} element -
     * @returns {boolean | undefined} - false/true if (not)selected, undefined if not selectable
     */

    exports.logRoles = logRoles

    function computeAriaSelected(element) {
      // implicit value from html-aam mappings: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings
      // https://www.w3.org/TR/html-aam-1.0/#details-id-97
      if (element.tagName === 'OPTION') {
        return element.selected
      } // explicit value

      return checkBooleanAttribute(element, 'aria-selected')
    }
    /**
     * @param {Element} element -
     * @returns {boolean | undefined} - false/true if (not)checked, undefined if not checked-able
     */

    function computeAriaChecked(element) {
      // implicit value from html-aam mappings: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings
      // https://www.w3.org/TR/html-aam-1.0/#details-id-56
      // https://www.w3.org/TR/html-aam-1.0/#details-id-67
      if ('indeterminate' in element && element.indeterminate) {
        return undefined
      }

      if ('checked' in element) {
        return element.checked
      } // explicit value

      return checkBooleanAttribute(element, 'aria-checked')
    }
    /**
     * @param {Element} element -
     * @returns {boolean | undefined} - false/true if (not)pressed, undefined if not press-able
     */

    function computeAriaPressed(element) {
      // https://www.w3.org/TR/wai-aria-1.1/#aria-pressed
      return checkBooleanAttribute(element, 'aria-pressed')
    }

    function checkBooleanAttribute(element, attribute) {
      const attributeValue = element.getAttribute(attribute)

      if (attributeValue === 'true') {
        return true
      }

      if (attributeValue === 'false') {
        return false
      }

      return undefined
    }
  })

  var suggestions = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.getSuggestedQuery = getSuggestedQuery

    const normalize = (0, matches_1.getDefaultNormalizer)()

    function getLabelTextFor(element) {
      let label =
        element.labels && Array.from(element.labels).find(el => Boolean(normalize(el.textContent))) // non form elements that are using aria-labelledby won't be included in `element.labels`

      if (!label) {
        const ariaLabelledBy = element.getAttribute('aria-labelledby')

        if (ariaLabelledBy) {
          // this is only a temporary fix. The problem is that at the moment @testing-library/dom
          // not support label concatenation
          // see https://github.com/testing-library/dom-testing-library/issues/545
          const firstId = ariaLabelledBy.split(' ')[0] // we're using this notation because with the # selector we would have to escape special characters e.g. user.name
          // see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector#Escaping_special_characters

          label = document.querySelector(`[id="${firstId}"]`)
        }
      }

      if (label) {
        return label.textContent
      }

      return undefined
    }

    function escapeRegExp(string) {
      return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
    }

    function getRegExpMatcher(string) {
      return new RegExp(escapeRegExp(string.toLowerCase()), 'i')
    }

    function makeSuggestion(queryName, content, {variant, name}) {
      const queryArgs = [
        queryName === 'Role' || queryName === 'TestId' ? content : getRegExpMatcher(content),
      ]

      if (name) {
        queryArgs.push({
          name: getRegExpMatcher(name),
        })
      }

      const queryMethod = `${variant}By${queryName}`
      return {
        queryName,
        queryMethod,
        queryArgs,
        variant,

        toString() {
          let [text, options] = queryArgs
          text = typeof text === 'string' ? `'${text}'` : text
          options = options
            ? `, { ${Object.entries(options)
                .map(([k, v]) => `${k}: ${v}`)
                .join(', ')} }`
            : ''
          return `${queryMethod}(${text}${options})`
        },
      }
    }

    function canSuggest(currentMethod, requestedMethod, data) {
      return (
        data && (!requestedMethod || requestedMethod.toLowerCase() === currentMethod.toLowerCase())
      )
    }

    function getSuggestedQuery(element, variant = 'get', method) {
      var _element$getAttribute, _getImplicitAriaRoles

      // don't create suggestions for script and style elements
      if (element.matches(config_1.DEFAULT_IGNORE_TAGS)) {
        return undefined
      } //We prefer to suggest something else if the role is generic

      const role =
        (_element$getAttribute = element.getAttribute('role')) != null
          ? _element$getAttribute
          : (_getImplicitAriaRoles = (0, roleHelpers.getImplicitAriaRoles)(element)) == null
          ? void 0
          : _getImplicitAriaRoles[0]

      if (role !== 'generic' && canSuggest('Role', method, role)) {
        return makeSuggestion('Role', role, {
          variant,
          name: (0, dist.computeAccessibleName)(element, {
            computedStyleSupportsPseudoElements: (0, config_1.getConfig)()
              .computedStyleSupportsPseudoElements,
          }),
        })
      }

      const labelText = getLabelTextFor(element)

      if (canSuggest('LabelText', method, labelText)) {
        return makeSuggestion('LabelText', labelText, {
          variant,
        })
      }

      const placeholderText = element.getAttribute('placeholder')

      if (canSuggest('PlaceholderText', method, placeholderText)) {
        return makeSuggestion('PlaceholderText', placeholderText, {
          variant,
        })
      }

      const textContent = normalize((0, getNodeText_1.getNodeText)(element))

      if (canSuggest('Text', method, textContent)) {
        return makeSuggestion('Text', textContent, {
          variant,
        })
      }

      if (canSuggest('DisplayValue', method, element.value)) {
        return makeSuggestion('DisplayValue', normalize(element.value), {
          variant,
        })
      }

      const alt = element.getAttribute('alt')

      if (canSuggest('AltText', method, alt)) {
        return makeSuggestion('AltText', alt, {
          variant,
        })
      }

      const title = element.getAttribute('title')

      if (canSuggest('Title', method, title)) {
        return makeSuggestion('Title', title, {
          variant,
        })
      }

      const testId = element.getAttribute((0, config_1.getConfig)().testIdAttribute)

      if (canSuggest('TestId', method, testId)) {
        return makeSuggestion('TestId', testId, {
          variant,
        })
      }

      return undefined
    }
  })

  var waitFor_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.waitFor = waitForWrapper
    exports.wait = wait

    // This is so the stack trace the developer sees is one that's
    // closer to their code (because async stack traces are hard to follow).
    function copyStackTrace(target, source) {
      target.stack = source.stack.replace(source.message, target.message)
    }

    function waitFor(
      callback,
      {
        container = (0, helpers.getDocument)(),
        timeout = (0, config_1.getConfig)().asyncUtilTimeout,
        showOriginalStackTrace = (0, config_1.getConfig)().showOriginalStackTrace,
        stackTraceError,
        interval = 50,
        onTimeout = error => {
          error.message = `${error.message}\n\n${(0, prettyDom.prettyDOM)(container)}`
          return error
        },
        mutationObserverOptions = {
          subtree: true,
          childList: true,
          attributes: true,
          characterData: true,
        },
      },
    ) {
      if (typeof callback !== 'function') {
        throw new TypeError('Received `callback` arg must be a function')
      }

      return new Promise(async (resolve, reject) => {
        let lastError, intervalId, observer
        let finished = false
        const overallTimeoutTimer = (0, helpers.setTimeout)(handleTimeout, timeout)
        const usingFakeTimers = (0, helpers.jestFakeTimersAreEnabled)()

        if (usingFakeTimers) {
          checkCallback() // this is a dangerous rule to disable because it could lead to an
          // infinite loop. However, eslint isn't smart enough to know that we're
          // setting finished inside `onDone` which will be called when we're done
          // waiting or when we've timed out.
          // eslint-disable-next-line no-unmodified-loop-condition

          while (!finished) {
            // we *could* (maybe should?) use `advanceTimersToNextTimer` but it's
            // possible that could make this loop go on forever if someone is using
            // third party code that's setting up recursive timers so rapidly that
            // the user's timer's don't get a chance to resolve. So we'll advance
            // by an interval instead. (We have a test for this case).
            jest.advanceTimersByTime(interval) // It's really important that checkCallback is run *before* we flush
            // in-flight promises. To be honest, I'm not sure why, and I can't quite
            // think of a way to reproduce the problem in a test, but I spent
            // an entire day banging my head against a wall on this.

            checkCallback() // In this rare case, we *need* to wait for in-flight promises
            // to resolve before continuing. We don't need to take advantage
            // of parallelization so we're fine.
            // https://stackoverflow.com/a/59243586/971592
            // eslint-disable-next-line no-await-in-loop

            await new Promise(r => (0, helpers.setImmediate)(r))
          }
        } else {
          intervalId = setInterval(checkCallback, interval)
          const {MutationObserver} = (0, helpers.getWindowFromNode)(container)
          observer = new MutationObserver(checkCallback)
          observer.observe(container, mutationObserverOptions)
          checkCallback()
        }

        function onDone(error, result) {
          finished = true
          ;(0, helpers.clearTimeout)(overallTimeoutTimer)

          if (!usingFakeTimers) {
            clearInterval(intervalId)
            ;(0, helpers.setImmediate)(() => observer.disconnect())
          }

          if (error) {
            reject(error)
          } else {
            resolve(result)
          }
        }

        function checkCallback() {
          try {
            onDone(null, (0, config_1.runWithExpensiveErrorDiagnosticsDisabled)(callback)) // If `callback` throws, wait for the next mutation, interval, or timeout.
          } catch (error) {
            // Save the most recent callback error to reject the promise with it in the event of a timeout
            lastError = error
          }
        }

        function handleTimeout() {
          let error

          if (lastError) {
            error = lastError

            if (!showOriginalStackTrace && error.name === 'TestingLibraryElementError') {
              copyStackTrace(error, stackTraceError)
            }
          } else {
            error = new Error('Timed out in waitFor.')

            if (!showOriginalStackTrace) {
              copyStackTrace(error, stackTraceError)
            }
          }

          onDone(onTimeout(error), null)
        }
      })
    }

    function waitForWrapper(callback, options) {
      // create the error here so its stack trace is as close to the
      // calling code as possible
      const stackTraceError = new Error('STACK_TRACE_MESSAGE')
      return (0, config_1.getConfig)().asyncWrapper(() =>
        waitFor(callback, {
          stackTraceError,
          ...options,
        }),
      )
    }

    let hasWarned = false // deprecated... TODO: remove this method. We renamed this to `waitFor` so the
    // code people write reads more clearly.

    function wait(...args) {
      // istanbul ignore next
      const [first = () => {}, ...rest] = args

      if (!hasWarned) {
        hasWarned = true
        console.warn(
          `\`wait\` has been deprecated and replaced by \`waitFor\` instead. In most cases you should be able to find/replace \`wait\` with \`waitFor\`. Learn more: https://testing-library.com/docs/dom-testing-library/api-async#waitfor.`,
        )
      }

      return waitForWrapper(first, ...rest)
    }
  })

  var queryHelpers = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.getElementError = getElementError
    exports.getMultipleElementsFoundError = getMultipleElementsFoundError
    exports.queryAllByAttribute = queryAllByAttribute
    exports.queryByAttribute = queryByAttribute
    exports.makeSingleQuery = makeSingleQuery
    exports.makeGetAllQuery = makeGetAllQuery
    exports.makeFindQuery = makeFindQuery
    exports.buildQueries = buildQueries
    exports.wrapSingleQueryWithSuggestion = exports.wrapAllByQueryWithSuggestion = void 0

    function getElementError(message, container) {
      return (0, config_1.getConfig)().getElementError(message, container)
    }

    function getMultipleElementsFoundError(message, container) {
      return getElementError(
        `${message}\n\n(If this is intentional, then use the \`*AllBy*\` variant of the query (like \`queryAllByText\`, \`getAllByText\`, or \`findAllByText\`)).`,
        container,
      )
    }

    function queryAllByAttribute(
      attribute,
      container,
      text,
      {exact = true, collapseWhitespace, trim, normalizer} = {},
    ) {
      const matcher = exact ? matches_1.matches : matches_1.fuzzyMatches
      const matchNormalizer = (0, matches_1.makeNormalizer)({
        collapseWhitespace,
        trim,
        normalizer,
      })
      return Array.from(container.querySelectorAll(`[${attribute}]`)).filter(node =>
        matcher(node.getAttribute(attribute), node, text, matchNormalizer),
      )
    }

    function queryByAttribute(attribute, container, text, ...args) {
      const els = queryAllByAttribute(attribute, container, text, ...args)

      if (els.length > 1) {
        throw getMultipleElementsFoundError(
          `Found multiple elements by [${attribute}=${text}]`,
          container,
        )
      }

      return els[0] || null
    } // this accepts a query function and returns a function which throws an error
    // if more than one elements is returned, otherwise it returns the first
    // element or null

    function makeSingleQuery(allQuery, getMultipleError) {
      return (container, ...args) => {
        const els = allQuery(container, ...args)

        if (els.length > 1) {
          const elementStrings = els.map(element => (0, prettyDom.prettyDOM)(element)).join('\n\n')
          throw getMultipleElementsFoundError(
            `${getMultipleError(container, ...args)}

Here are the matching elements:

${elementStrings}`,
            container,
          )
        }

        return els[0] || null
      }
    }

    function getSuggestionError(suggestion, container) {
      return (0, config_1.getConfig)().getElementError(
        `A better query is available, try this:
${suggestion.toString()}
`,
        container,
      )
    } // this accepts a query function and returns a function which throws an error
    // if an empty list of elements is returned

    function makeGetAllQuery(allQuery, getMissingError) {
      return (container, ...args) => {
        const els = allQuery(container, ...args)

        if (!els.length) {
          throw (0, config_1.getConfig)().getElementError(
            getMissingError(container, ...args),
            container,
          )
        }

        return els
      }
    } // this accepts a getter query function and returns a function which calls
    // waitFor and passing a function which invokes the getter.

    function makeFindQuery(getter) {
      return (container, text, options, waitForOptions) =>
        (0, waitFor_1.waitFor)(() => {
          return getter(container, text, options)
        }, waitForOptions)
    }

    const wrapSingleQueryWithSuggestion = (query, queryAllByName, variant) => (
      container,
      ...args
    ) => {
      const element = query(container, ...args)
      const [{suggest = (0, config_1.getConfig)().throwSuggestions} = {}] = args.slice(-1)

      if (element && suggest) {
        const suggestion = (0, suggestions.getSuggestedQuery)(element, variant)

        if (suggestion && !queryAllByName.endsWith(suggestion.queryName)) {
          throw getSuggestionError(suggestion.toString(), container)
        }
      }

      return element
    }

    exports.wrapSingleQueryWithSuggestion = wrapSingleQueryWithSuggestion

    const wrapAllByQueryWithSuggestion = (query, queryAllByName, variant) => (
      container,
      ...args
    ) => {
      const els = query(container, ...args)
      const [{suggest = (0, config_1.getConfig)().throwSuggestions} = {}] = args.slice(-1)

      if (els.length && suggest) {
        // get a unique list of all suggestion messages.  We are only going to make a suggestion if
        // all the suggestions are the same
        const uniqueSuggestionMessages = [
          ...new Set(
            els.map(element => {
              var _getSuggestedQuery

              return (_getSuggestedQuery = (0, suggestions.getSuggestedQuery)(element, variant)) ==
                null
                ? void 0
                : _getSuggestedQuery.toString()
            }),
          ),
        ]

        if (
          // only want to suggest if all the els have the same suggestion.
          uniqueSuggestionMessages.length === 1 &&
          !queryAllByName.endsWith((0, suggestions.getSuggestedQuery)(els[0], variant).queryName)
        ) {
          throw getSuggestionError(uniqueSuggestionMessages[0], container)
        }
      }

      return els
    }

    exports.wrapAllByQueryWithSuggestion = wrapAllByQueryWithSuggestion

    function buildQueries(queryAllBy, getMultipleError, getMissingError) {
      const queryBy = wrapSingleQueryWithSuggestion(
        makeSingleQuery(queryAllBy, getMultipleError),
        queryAllBy.name,
        'query',
      )
      const getAllBy = makeGetAllQuery(queryAllBy, getMissingError)
      const getBy = makeSingleQuery(getAllBy, getMultipleError)
      const getByWithSuggestions = wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, 'get')
      const getAllWithSuggestions = wrapAllByQueryWithSuggestion(
        getAllBy,
        queryAllBy.name.replace('query', 'get'),
        'getAll',
      )
      const findAllBy = makeFindQuery(
        wrapAllByQueryWithSuggestion(getAllBy, queryAllBy.name, 'findAll'),
      )
      const findBy = makeFindQuery(wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, 'find'))
      return [queryBy, getAllWithSuggestions, getByWithSuggestions, findAllBy, findBy]
    }
  })

  var allUtils = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })

    Object.keys(matches_1).forEach(function (key) {
      if (key === 'default' || key === '__esModule') return
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function () {
          return matches_1[key]
        },
      })
    })

    Object.keys(getNodeText_1).forEach(function (key) {
      if (key === 'default' || key === '__esModule') return
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function () {
          return getNodeText_1[key]
        },
      })
    })

    Object.keys(queryHelpers).forEach(function (key) {
      if (key === 'default' || key === '__esModule') return
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function () {
          return queryHelpers[key]
        },
      })
    })

    Object.keys(config_1).forEach(function (key) {
      if (key === 'default' || key === '__esModule') return
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function () {
          return config_1[key]
        },
      })
    })
  })

  var labelText = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.findByLabelText = exports.findAllByLabelText = exports.getByLabelText = exports.getAllByLabelText = exports.queryByLabelText = exports.queryAllByLabelText = void 0

    function queryAllLabels(container) {
      return Array.from(container.querySelectorAll('label,input'))
        .map(node => {
          let textToMatch =
            node.tagName.toLowerCase() === 'label' ? node.textContent : node.value || null // The children of a textarea are part of `textContent` as well. We
          // need to remove them from the string so we can match it afterwards.

          Array.from(node.querySelectorAll('textarea')).forEach(textarea => {
            textToMatch = textToMatch.replace(textarea.value, '')
          }) // The children of a select are also part of `textContent`, so we
          // need also to remove their text.

          Array.from(node.querySelectorAll('select')).forEach(select => {
            textToMatch = textToMatch.replace(select.textContent, '')
          })
          return {
            node,
            textToMatch,
          }
        })
        .filter(({textToMatch}) => textToMatch !== null)
    }

    function queryAllLabelsByText(
      container,
      text,
      {exact = true, trim, collapseWhitespace, normalizer} = {},
    ) {
      const matcher = exact ? allUtils.matches : allUtils.fuzzyMatches
      const matchNormalizer = (0, allUtils.makeNormalizer)({
        collapseWhitespace,
        trim,
        normalizer,
      })
      const textToMatchByLabels = queryAllLabels(container)
      return textToMatchByLabels
        .filter(({node, textToMatch}) => matcher(textToMatch, node, text, matchNormalizer))
        .map(({node}) => node)
    }

    function getLabelContent(label) {
      let labelContent = label.getAttribute('value') || label.textContent
      Array.from(label.querySelectorAll('textarea')).forEach(textarea => {
        labelContent = labelContent.replace(textarea.value, '')
      })
      Array.from(label.querySelectorAll('select')).forEach(select => {
        labelContent = labelContent.replace(select.textContent, '')
      })
      return labelContent
    }

    function queryAllByLabelText(
      container,
      text,
      {selector = '*', exact = true, collapseWhitespace, trim, normalizer} = {},
    ) {
      ;(0, helpers.checkContainerType)(container)
      const matcher = exact ? allUtils.matches : allUtils.fuzzyMatches
      const matchNormalizer = (0, allUtils.makeNormalizer)({
        collapseWhitespace,
        trim,
        normalizer,
      })
      const matchingLabelledElements = Array.from(container.querySelectorAll('*'))
        .filter(element => {
          return getLabels(element) || element.hasAttribute('aria-labelledby')
        })
        .reduce((labelledElements, labelledElement) => {
          const labelsId = labelledElement.getAttribute('aria-labelledby')
            ? labelledElement.getAttribute('aria-labelledby').split(' ')
            : []
          let labelsValue = labelsId.length
            ? labelsId.map(labelId => {
                const labellingElement = container.querySelector(`[id="${labelId}"]`)
                return labellingElement ? getLabelContent(labellingElement) : ''
              })
            : Array.from(getLabels(labelledElement)).map(label => {
                const textToMatch = getLabelContent(label)
                const labelledFormControl = Array.from(
                  label.querySelectorAll(
                    'button, input, meter, output, progress, select, textarea',
                  ),
                ).filter(element => element.matches(selector))[0]

                if (labelledFormControl) {
                  if (matcher(textToMatch, labelledFormControl, text, matchNormalizer))
                    labelledElements.push(labelledFormControl)
                }

                return textToMatch
              })
          labelsValue = labelsValue.filter(Boolean)
          if (matcher(labelsValue.join(' '), labelledElement, text, matchNormalizer))
            labelledElements.push(labelledElement)

          if (labelsValue.length > 1) {
            labelsValue.forEach((labelValue, index) => {
              if (matcher(labelValue, labelledElement, text, matchNormalizer))
                labelledElements.push(labelledElement)
              const labelsFiltered = [...labelsValue]
              labelsFiltered.splice(index, 1)

              if (labelsFiltered.length > 1) {
                if (matcher(labelsFiltered.join(' '), labelledElement, text, matchNormalizer))
                  labelledElements.push(labelledElement)
              }
            })
          }

          return labelledElements
        }, [])
        .concat(
          (0, allUtils.queryAllByAttribute)('aria-label', container, text, {
            exact,
          }),
        )
      return Array.from(new Set(matchingLabelledElements)).filter(element =>
        element.matches(selector),
      )
    } // the getAll* query would normally look like this:
    // const getAllByLabelText = makeGetAllQuery(
    //   queryAllByLabelText,
    //   (c, text) => `Unable to find a label with the text of: ${text}`,
    // )
    // however, we can give a more helpful error message than the generic one,
    // so we're writing this one out by hand.

    const getAllByLabelText = (container, text, ...rest) => {
      const els = queryAllByLabelText(container, text, ...rest)

      if (!els.length) {
        const labels = queryAllLabelsByText(container, text, ...rest)

        if (labels.length) {
          const tagNames = labels
            .map(label => getTagNameOfElementAssociatedWithLabelViaFor(container, label))
            .filter(tagName => !!tagName)

          if (tagNames.length) {
            throw (0, config_1.getConfig)().getElementError(
              tagNames
                .map(
                  tagName =>
                    `Found a label with the text of: ${text}, however the element associated with this label (<${tagName} />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <${tagName} />, you can use aria-label or aria-labelledby instead.`,
                )
                .join('\n\n'),
              container,
            )
          } else {
            throw (0, config_1.getConfig)().getElementError(
              `Found a label with the text of: ${text}, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`,
              container,
            )
          }
        } else {
          throw (0, config_1.getConfig)().getElementError(
            `Unable to find a label with the text of: ${text}`,
            container,
          )
        }
      }

      return els
    }

    function getTagNameOfElementAssociatedWithLabelViaFor(container, label) {
      const htmlFor = label.getAttribute('for')

      if (!htmlFor) {
        return null
      }

      const element = container.querySelector(`[id="${htmlFor}"]`)
      return element ? element.tagName.toLowerCase() : null
    } // the reason mentioned above is the same reason we're not using buildQueries

    const getMultipleError = (c, text) => `Found multiple elements with the text of: ${text}`

    const queryByLabelText = (0, allUtils.wrapSingleQueryWithSuggestion)(
      (0, allUtils.makeSingleQuery)(queryAllByLabelText, getMultipleError),
      queryAllByLabelText.name,
      'query',
    )
    exports.queryByLabelText = queryByLabelText
    const getByLabelText = (0, allUtils.makeSingleQuery)(getAllByLabelText, getMultipleError)
    const findAllByLabelText = (0, allUtils.makeFindQuery)(
      (0, allUtils.wrapAllByQueryWithSuggestion)(
        getAllByLabelText,
        getAllByLabelText.name,
        'findAll',
      ),
    )
    exports.findAllByLabelText = findAllByLabelText
    const findByLabelText = (0, allUtils.makeFindQuery)(
      (0, allUtils.wrapSingleQueryWithSuggestion)(getByLabelText, getByLabelText.name, 'find'),
    )
    exports.findByLabelText = findByLabelText
    const getAllByLabelTextWithSuggestions = (0, allUtils.wrapAllByQueryWithSuggestion)(
      getAllByLabelText,
      getAllByLabelText.name,
      'getAll',
    )
    exports.getAllByLabelText = getAllByLabelTextWithSuggestions
    const getByLabelTextWithSuggestions = (0, allUtils.wrapSingleQueryWithSuggestion)(
      getByLabelText,
      getAllByLabelText.name,
      'get',
    )
    exports.getByLabelText = getByLabelTextWithSuggestions
    const queryAllByLabelTextWithSuggestions = (0, allUtils.wrapAllByQueryWithSuggestion)(
      queryAllByLabelText,
      queryAllByLabelText.name,
      'queryAll',
    )
    exports.queryAllByLabelText = queryAllByLabelTextWithSuggestions

    // Based on https://github.com/eps1lon/dom-accessibility-api/pull/352
    function getLabels(element) {
      if (element.labels !== undefined) return element.labels
      if (!isLabelable(element)) return null
      const labels = element.ownerDocument.querySelectorAll('label')
      return Array.from(labels).filter(label => label.control === element)
    }

    function isLabelable(element) {
      return (
        element.tagName.match(/BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/) ||
        (element.tagName === 'INPUT' && element.getAttribute('type') !== 'hidden')
      )
    }
  })

  var placeholderText = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.findByPlaceholderText = exports.findAllByPlaceholderText = exports.getAllByPlaceholderText = exports.getByPlaceholderText = exports.queryAllByPlaceholderText = exports.queryByPlaceholderText = void 0

    function queryAllByPlaceholderText(...args) {
      ;(0, helpers.checkContainerType)(...args)
      return (0, allUtils.queryAllByAttribute)('placeholder', ...args)
    }

    const getMultipleError = (c, text) =>
      `Found multiple elements with the placeholder text of: ${text}`

    const getMissingError = (c, text) =>
      `Unable to find an element with the placeholder text of: ${text}`

    const queryAllByPlaceholderTextWithSuggestions = (0, queryHelpers.wrapAllByQueryWithSuggestion)(
      queryAllByPlaceholderText,
      queryAllByPlaceholderText.name,
      'queryAll',
    )
    exports.queryAllByPlaceholderText = queryAllByPlaceholderTextWithSuggestions
    const [
      queryByPlaceholderText,
      getAllByPlaceholderText,
      getByPlaceholderText,
      findAllByPlaceholderText,
      findByPlaceholderText,
    ] = (0, allUtils.buildQueries)(queryAllByPlaceholderText, getMultipleError, getMissingError)
    exports.findByPlaceholderText = findByPlaceholderText
    exports.findAllByPlaceholderText = findAllByPlaceholderText
    exports.getByPlaceholderText = getByPlaceholderText
    exports.getAllByPlaceholderText = getAllByPlaceholderText
    exports.queryByPlaceholderText = queryByPlaceholderText
  })

  var text = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.findByText = exports.findAllByText = exports.getAllByText = exports.getByText = exports.queryAllByText = exports.queryByText = void 0

    function queryAllByText(
      container,
      text,
      {
        selector = '*',
        exact = true,
        collapseWhitespace,
        trim,
        ignore = config_1.DEFAULT_IGNORE_TAGS,
        normalizer,
      } = {},
    ) {
      ;(0, helpers.checkContainerType)(container)
      const matcher = exact ? allUtils.matches : allUtils.fuzzyMatches
      const matchNormalizer = (0, allUtils.makeNormalizer)({
        collapseWhitespace,
        trim,
        normalizer,
      })
      let baseArray = []

      if (typeof container.matches === 'function' && container.matches(selector)) {
        baseArray = [container]
      }

      return [...baseArray, ...Array.from(container.querySelectorAll(selector))]
        .filter(node => !ignore || !node.matches(ignore))
        .filter(node => matcher((0, allUtils.getNodeText)(node), node, text, matchNormalizer))
    }

    const getMultipleError = (c, text) => `Found multiple elements with the text: ${text}`

    const getMissingError = (c, text) =>
      `Unable to find an element with the text: ${text}. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.`

    const queryAllByTextWithSuggestions = (0, queryHelpers.wrapAllByQueryWithSuggestion)(
      queryAllByText,
      queryAllByText.name,
      'queryAll',
    )
    exports.queryAllByText = queryAllByTextWithSuggestions
    const [queryByText, getAllByText, getByText, findAllByText, findByText] = (0,
    allUtils.buildQueries)(queryAllByText, getMultipleError, getMissingError)
    exports.findByText = findByText
    exports.findAllByText = findAllByText
    exports.getByText = getByText
    exports.getAllByText = getAllByText
    exports.queryByText = queryByText
  })

  var displayValue = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.findByDisplayValue = exports.findAllByDisplayValue = exports.getAllByDisplayValue = exports.getByDisplayValue = exports.queryAllByDisplayValue = exports.queryByDisplayValue = void 0

    function queryAllByDisplayValue(
      container,
      value,
      {exact = true, collapseWhitespace, trim, normalizer} = {},
    ) {
      ;(0, helpers.checkContainerType)(container)
      const matcher = exact ? allUtils.matches : allUtils.fuzzyMatches
      const matchNormalizer = (0, allUtils.makeNormalizer)({
        collapseWhitespace,
        trim,
        normalizer,
      })
      return Array.from(container.querySelectorAll(`input,textarea,select`)).filter(node => {
        if (node.tagName === 'SELECT') {
          const selectedOptions = Array.from(node.options).filter(option => option.selected)
          return selectedOptions.some(optionNode =>
            matcher((0, allUtils.getNodeText)(optionNode), optionNode, value, matchNormalizer),
          )
        } else {
          return matcher(node.value, node, value, matchNormalizer)
        }
      })
    }

    const getMultipleError = (c, value) =>
      `Found multiple elements with the display value: ${value}.`

    const getMissingError = (c, value) =>
      `Unable to find an element with the display value: ${value}.`

    const queryAllByDisplayValueWithSuggestions = (0, queryHelpers.wrapAllByQueryWithSuggestion)(
      queryAllByDisplayValue,
      queryAllByDisplayValue.name,
      'queryAll',
    )
    exports.queryAllByDisplayValue = queryAllByDisplayValueWithSuggestions
    const [
      queryByDisplayValue,
      getAllByDisplayValue,
      getByDisplayValue,
      findAllByDisplayValue,
      findByDisplayValue,
    ] = (0, allUtils.buildQueries)(queryAllByDisplayValue, getMultipleError, getMissingError)
    exports.findByDisplayValue = findByDisplayValue
    exports.findAllByDisplayValue = findAllByDisplayValue
    exports.getByDisplayValue = getByDisplayValue
    exports.getAllByDisplayValue = getAllByDisplayValue
    exports.queryByDisplayValue = queryByDisplayValue
  })

  var altText = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.findByAltText = exports.findAllByAltText = exports.getAllByAltText = exports.getByAltText = exports.queryAllByAltText = exports.queryByAltText = void 0

    function queryAllByAltText(
      container,
      alt,
      {exact = true, collapseWhitespace, trim, normalizer} = {},
    ) {
      ;(0, helpers.checkContainerType)(container)
      const matcher = exact ? allUtils.matches : allUtils.fuzzyMatches
      const matchNormalizer = (0, allUtils.makeNormalizer)({
        collapseWhitespace,
        trim,
        normalizer,
      })
      return Array.from(container.querySelectorAll('img,input,area')).filter(node =>
        matcher(node.getAttribute('alt'), node, alt, matchNormalizer),
      )
    }

    const getMultipleError = (c, alt) => `Found multiple elements with the alt text: ${alt}`

    const getMissingError = (c, alt) => `Unable to find an element with the alt text: ${alt}`

    const queryAllByAltTextWithSuggestions = (0, queryHelpers.wrapAllByQueryWithSuggestion)(
      queryAllByAltText,
      queryAllByAltText.name,
      'queryAll',
    )
    exports.queryAllByAltText = queryAllByAltTextWithSuggestions
    const [queryByAltText, getAllByAltText, getByAltText, findAllByAltText, findByAltText] = (0,
    allUtils.buildQueries)(queryAllByAltText, getMultipleError, getMissingError)
    exports.findByAltText = findByAltText
    exports.findAllByAltText = findAllByAltText
    exports.getByAltText = getByAltText
    exports.getAllByAltText = getAllByAltText
    exports.queryByAltText = queryByAltText
  })

  var title = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.findByTitle = exports.findAllByTitle = exports.getAllByTitle = exports.getByTitle = exports.queryAllByTitle = exports.queryByTitle = void 0

    function queryAllByTitle(
      container,
      text,
      {exact = true, collapseWhitespace, trim, normalizer} = {},
    ) {
      ;(0, helpers.checkContainerType)(container)
      const matcher = exact ? allUtils.matches : allUtils.fuzzyMatches
      const matchNormalizer = (0, allUtils.makeNormalizer)({
        collapseWhitespace,
        trim,
        normalizer,
      })
      return Array.from(container.querySelectorAll('[title], svg > title')).filter(
        node =>
          matcher(node.getAttribute('title'), node, text, matchNormalizer) ||
          matcher((0, allUtils.getNodeText)(node), node, text, matchNormalizer),
      )
    }

    const getMultipleError = (c, title) => `Found multiple elements with the title: ${title}.`

    const getMissingError = (c, title) => `Unable to find an element with the title: ${title}.`

    const queryAllByTitleWithSuggestions = (0, queryHelpers.wrapAllByQueryWithSuggestion)(
      queryAllByTitle,
      queryAllByTitle.name,
      'queryAll',
    )
    exports.queryAllByTitle = queryAllByTitleWithSuggestions
    const [queryByTitle, getAllByTitle, getByTitle, findAllByTitle, findByTitle] = (0,
    allUtils.buildQueries)(queryAllByTitle, getMultipleError, getMissingError)
    exports.findByTitle = findByTitle
    exports.findAllByTitle = findAllByTitle
    exports.getByTitle = getByTitle
    exports.getAllByTitle = getAllByTitle
    exports.queryByTitle = queryByTitle
  })

  var role = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.findByRole = exports.findAllByRole = exports.getByRole = exports.getAllByRole = exports.queryAllByRole = exports.queryByRole = void 0

    function queryAllByRole(
      container,
      role,
      {
        exact = true,
        collapseWhitespace,
        hidden = (0, allUtils.getConfig)().defaultHidden,
        name,
        trim,
        normalizer,
        queryFallbacks = false,
        selected,
        checked,
        pressed,
      } = {},
    ) {
      ;(0, helpers.checkContainerType)(container)
      const matcher = exact ? allUtils.matches : allUtils.fuzzyMatches
      const matchNormalizer = (0, allUtils.makeNormalizer)({
        collapseWhitespace,
        trim,
        normalizer,
      })

      if (selected !== undefined) {
        var _allRoles$get

        // guard against unknown roles
        if (
          ((_allRoles$get = lib.roles.get(role)) == null
            ? void 0
            : _allRoles$get.props['aria-selected']) === undefined
        ) {
          throw new Error(`"aria-selected" is not supported on role "${role}".`)
        }
      }

      if (checked !== undefined) {
        var _allRoles$get2

        // guard against unknown roles
        if (
          ((_allRoles$get2 = lib.roles.get(role)) == null
            ? void 0
            : _allRoles$get2.props['aria-checked']) === undefined
        ) {
          throw new Error(`"aria-checked" is not supported on role "${role}".`)
        }
      }

      if (pressed !== undefined) {
        var _allRoles$get3

        // guard against unknown roles
        if (
          ((_allRoles$get3 = lib.roles.get(role)) == null
            ? void 0
            : _allRoles$get3.props['aria-pressed']) === undefined
        ) {
          throw new Error(`"aria-pressed" is not supported on role "${role}".`)
        }
      }

      const subtreeIsInaccessibleCache = new WeakMap()

      function cachedIsSubtreeInaccessible(element) {
        if (!subtreeIsInaccessibleCache.has(element)) {
          subtreeIsInaccessibleCache.set(element, (0, roleHelpers.isSubtreeInaccessible)(element))
        }

        return subtreeIsInaccessibleCache.get(element)
      }

      return Array.from(container.querySelectorAll('*'))
        .filter(node => {
          const isRoleSpecifiedExplicitly = node.hasAttribute('role')

          if (isRoleSpecifiedExplicitly) {
            const roleValue = node.getAttribute('role')

            if (queryFallbacks) {
              return roleValue
                .split(' ')
                .filter(Boolean)
                .some(text => matcher(text, node, role, matchNormalizer))
            } // if a custom normalizer is passed then let normalizer handle the role value

            if (normalizer) {
              return matcher(roleValue, node, role, matchNormalizer)
            } // other wise only send the first word to match

            const [firstWord] = roleValue.split(' ')
            return matcher(firstWord, node, role, matchNormalizer)
          }

          const implicitRoles = (0, roleHelpers.getImplicitAriaRoles)(node)
          return implicitRoles.some(implicitRole =>
            matcher(implicitRole, node, role, matchNormalizer),
          )
        })
        .filter(element => {
          if (selected !== undefined) {
            return selected === (0, roleHelpers.computeAriaSelected)(element)
          }

          if (checked !== undefined) {
            return checked === (0, roleHelpers.computeAriaChecked)(element)
          }

          if (pressed !== undefined) {
            return pressed === (0, roleHelpers.computeAriaPressed)(element)
          } // don't care if aria attributes are unspecified

          return true
        })
        .filter(element => {
          return hidden === false
            ? (0, roleHelpers.isInaccessible)(element, {
                isSubtreeInaccessible: cachedIsSubtreeInaccessible,
              }) === false
            : true
        })
        .filter(element => {
          if (name === undefined) {
            // Don't care
            return true
          }

          return (0, allUtils.matches)(
            (0, dist.computeAccessibleName)(element, {
              computedStyleSupportsPseudoElements: (0, allUtils.getConfig)()
                .computedStyleSupportsPseudoElements,
            }),
            element,
            name,
            text => text,
          )
        })
    }

    const getMultipleError = (c, role, {name} = {}) => {
      let nameHint = ''

      if (name === undefined) {
        nameHint = ''
      } else if (typeof name === 'string') {
        nameHint = ` and name "${name}"`
      } else {
        nameHint = ` and name \`${name}\``
      }

      return `Found multiple elements with the role "${role}"${nameHint}`
    }

    const getMissingError = (
      container,
      role,
      {hidden = (0, allUtils.getConfig)().defaultHidden, name} = {},
    ) => {
      if ((0, allUtils.getConfig)()._disableExpensiveErrorDiagnostics) {
        return `Unable to find role="${role}"`
      }

      let roles = ''
      Array.from(container.children).forEach(childElement => {
        roles += (0, roleHelpers.prettyRoles)(childElement, {
          hidden,
          includeName: name !== undefined,
        })
      })
      let roleMessage

      if (roles.length === 0) {
        if (hidden === false) {
          roleMessage =
            'There are no accessible roles. But there might be some inaccessible roles. ' +
            'If you wish to access them, then set the `hidden` option to `true`. ' +
            'Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole'
        } else {
          roleMessage = 'There are no available roles.'
        }
      } else {
        roleMessage = `
Here are the ${hidden === false ? 'accessible' : 'available'} roles:

  ${roles.replace(/\n/g, '\n  ').replace(/\n\s\s\n/g, '\n\n')}
`.trim()
      }

      let nameHint = ''

      if (name === undefined) {
        nameHint = ''
      } else if (typeof name === 'string') {
        nameHint = ` and name "${name}"`
      } else {
        nameHint = ` and name \`${name}\``
      }

      return `
Unable to find an ${hidden === false ? 'accessible ' : ''}element with the role "${role}"${nameHint}

${roleMessage}`.trim()
    }

    const queryAllByRoleWithSuggestions = (0, queryHelpers.wrapAllByQueryWithSuggestion)(
      queryAllByRole,
      queryAllByRole.name,
      'queryAll',
    )
    exports.queryAllByRole = queryAllByRoleWithSuggestions
    const [queryByRole, getAllByRole, getByRole, findAllByRole, findByRole] = (0,
    allUtils.buildQueries)(queryAllByRole, getMultipleError, getMissingError)
    exports.findByRole = findByRole
    exports.findAllByRole = findAllByRole
    exports.getByRole = getByRole
    exports.getAllByRole = getAllByRole
    exports.queryByRole = queryByRole
  })

  var testId = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })
    exports.findByTestId = exports.findAllByTestId = exports.getAllByTestId = exports.getByTestId = exports.queryAllByTestId = exports.queryByTestId = void 0

    const getTestIdAttribute = () => (0, allUtils.getConfig)().testIdAttribute

    function queryAllByTestId(...args) {
      ;(0, helpers.checkContainerType)(...args)
      return (0, allUtils.queryAllByAttribute)(getTestIdAttribute(), ...args)
    }

    const getMultipleError = (c, id) =>
      `Found multiple elements by: [${getTestIdAttribute()}="${id}"]`

    const getMissingError = (c, id) =>
      `Unable to find an element by: [${getTestIdAttribute()}="${id}"]`

    const queryAllByTestIdWithSuggestions = (0, queryHelpers.wrapAllByQueryWithSuggestion)(
      queryAllByTestId,
      queryAllByTestId.name,
      'queryAll',
    )
    exports.queryAllByTestId = queryAllByTestIdWithSuggestions
    const [queryByTestId, getAllByTestId, getByTestId, findAllByTestId, findByTestId] = (0,
    allUtils.buildQueries)(queryAllByTestId, getMultipleError, getMissingError)
    exports.findByTestId = findByTestId
    exports.findAllByTestId = findAllByTestId
    exports.getByTestId = getByTestId
    exports.getAllByTestId = getAllByTestId
    exports.queryByTestId = queryByTestId
  })

  var queries = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    })

    Object.keys(labelText).forEach(function (key) {
      if (key === 'default' || key === '__esModule') return
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function () {
          return labelText[key]
        },
      })
    })

    Object.keys(placeholderText).forEach(function (key) {
      if (key === 'default' || key === '__esModule') return
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function () {
          return placeholderText[key]
        },
      })
    })

    Object.keys(text).forEach(function (key) {
      if (key === 'default' || key === '__esModule') return
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function () {
          return text[key]
        },
      })
    })

    Object.keys(displayValue).forEach(function (key) {
      if (key === 'default' || key === '__esModule') return
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function () {
          return displayValue[key]
        },
      })
    })

    Object.keys(altText).forEach(function (key) {
      if (key === 'default' || key === '__esModule') return
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function () {
          return altText[key]
        },
      })
    })

    Object.keys(title).forEach(function (key) {
      if (key === 'default' || key === '__esModule') return
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function () {
          return title[key]
        },
      })
    })

    Object.keys(role).forEach(function (key) {
      if (key === 'default' || key === '__esModule') return
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function () {
          return role[key]
        },
      })
    })

    Object.keys(testId).forEach(function (key) {
      if (key === 'default' || key === '__esModule') return
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function () {
          return testId[key]
        },
      })
    })
  })

  function _extends() {
    _extends =
      Object.assign ||
      function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i]

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key]
            }
          }
        }

        return target
      }

    return _extends.apply(this, arguments)
  }

  var runtime_1 = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var runtime = (function (exports) {
      var Op = Object.prototype
      var hasOwn = Op.hasOwnProperty
      var undefined$1 // More compressible than void 0.
      var $Symbol = typeof Symbol === 'function' ? Symbol : {}
      var iteratorSymbol = $Symbol.iterator || '@@iterator'
      var asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator'
      var toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag'

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator
        var generator = Object.create(protoGenerator.prototype)
        var context = new Context(tryLocsList || [])

        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context)

        return generator
      }
      exports.wrap = wrap

      // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.
      function tryCatch(fn, obj, arg) {
        try {
          return {type: 'normal', arg: fn.call(obj, arg)}
        } catch (err) {
          return {type: 'throw', arg: err}
        }
      }

      var GenStateSuspendedStart = 'suspendedStart'
      var GenStateSuspendedYield = 'suspendedYield'
      var GenStateExecuting = 'executing'
      var GenStateCompleted = 'completed'

      // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.
      var ContinueSentinel = {}

      // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {}

      // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.
      var IteratorPrototype = {}
      IteratorPrototype[iteratorSymbol] = function () {
        return this
      }

      var getProto = Object.getPrototypeOf
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])))
      if (
        NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)
      ) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype
      }

      var Gp = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(
        IteratorPrototype,
      ))
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype
      GeneratorFunctionPrototype.constructor = GeneratorFunction
      GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName =
        'GeneratorFunction'

      // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.
      function defineIteratorMethods(prototype) {
        ;['next', 'throw', 'return'].forEach(function (method) {
          prototype[method] = function (arg) {
            return this._invoke(method, arg)
          }
        })
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === 'function' && genFun.constructor
        return ctor
          ? ctor === GeneratorFunction ||
              // For the native GeneratorFunction constructor, the best we can
              // do is to check its .name property.
              (ctor.displayName || ctor.name) === 'GeneratorFunction'
          : false
      }

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype
          if (!(toStringTagSymbol in genFun)) {
            genFun[toStringTagSymbol] = 'GeneratorFunction'
          }
        }
        genFun.prototype = Object.create(Gp)
        return genFun
      }

      // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.
      exports.awrap = function (arg) {
        return {__await: arg}
      }

      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg)
          if (record.type === 'throw') {
            reject(record.arg)
          } else {
            var result = record.arg
            var value = result.value
            if (value && typeof value === 'object' && hasOwn.call(value, '__await')) {
              return PromiseImpl.resolve(value.__await).then(
                function (value) {
                  invoke('next', value, resolve, reject)
                },
                function (err) {
                  invoke('throw', err, resolve, reject)
                },
              )
            }

            return PromiseImpl.resolve(value).then(
              function (unwrapped) {
                // When a yielded Promise is resolved, its final value becomes
                // the .value of the Promise<{value,done}> result for the
                // current iteration.
                result.value = unwrapped
                resolve(result)
              },
              function (error) {
                // If a rejected Promise was yielded, throw the rejection back
                // into the async generator function so it can be handled there.
                return invoke('throw', error, resolve, reject)
              },
            )
          }
        }

        var previousPromise

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject)
            })
          }

          return (previousPromise =
            // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise
              ? previousPromise.then(
                  callInvokeWithMethodAndArg,
                  // Avoid propagating failures to Promises returned by later
                  // invocations of the iterator.
                  callInvokeWithMethodAndArg,
                )
              : callInvokeWithMethodAndArg())
        }

        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue
      }

      defineIteratorMethods(AsyncIterator.prototype)
      AsyncIterator.prototype[asyncIteratorSymbol] = function () {
        return this
      }
      exports.AsyncIterator = AsyncIterator

      // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.
      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise

        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl)

        return exports.isGeneratorFunction(outerFn)
          ? iter // If outerFn is a generator, return the full iterator.
          : iter.next().then(function (result) {
              return result.done ? result.value : iter.next()
            })
      }

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart

        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error('Generator is already running')
          }

          if (state === GenStateCompleted) {
            if (method === 'throw') {
              throw arg
            }

            // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
            return doneResult()
          }

          context.method = method
          context.arg = arg

          while (true) {
            var delegate = context.delegate
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context)
              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue
                return delegateResult
              }
            }

            if (context.method === 'next') {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg
            } else if (context.method === 'throw') {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted
                throw context.arg
              }

              context.dispatchException(context.arg)
            } else if (context.method === 'return') {
              context.abrupt('return', context.arg)
            }

            state = GenStateExecuting

            var record = tryCatch(innerFn, self, context)
            if (record.type === 'normal') {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield

              if (record.arg === ContinueSentinel) {
                continue
              }

              return {
                value: record.arg,
                done: context.done,
              }
            } else if (record.type === 'throw') {
              state = GenStateCompleted
              // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.
              context.method = 'throw'
              context.arg = record.arg
            }
          }
        }
      }

      // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.
      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method]
        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null

          if (context.method === 'throw') {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator['return']) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = 'return'
              context.arg = undefined$1
              maybeInvokeDelegate(delegate, context)

              if (context.method === 'throw') {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel
              }
            }

            context.method = 'throw'
            context.arg = new TypeError("The iterator does not provide a 'throw' method")
          }

          return ContinueSentinel
        }

        var record = tryCatch(method, delegate.iterator, context.arg)

        if (record.type === 'throw') {
          context.method = 'throw'
          context.arg = record.arg
          context.delegate = null
          return ContinueSentinel
        }

        var info = record.arg

        if (!info) {
          context.method = 'throw'
          context.arg = new TypeError('iterator result is not an object')
          context.delegate = null
          return ContinueSentinel
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value

          // Resume execution at the desired location (see delegateYield).
          context.next = delegate.nextLoc

          // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.
          if (context.method !== 'return') {
            context.method = 'next'
            context.arg = undefined$1
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info
        }

        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null
        return ContinueSentinel
      }

      // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.
      defineIteratorMethods(Gp)

      Gp[toStringTagSymbol] = 'Generator'

      // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.
      Gp[iteratorSymbol] = function () {
        return this
      }

      Gp.toString = function () {
        return '[object Generator]'
      }

      function pushTryEntry(locs) {
        var entry = {tryLoc: locs[0]}

        if (1 in locs) {
          entry.catchLoc = locs[1]
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2]
          entry.afterLoc = locs[3]
        }

        this.tryEntries.push(entry)
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {}
        record.type = 'normal'
        delete record.arg
        entry.completion = record
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{tryLoc: 'root'}]
        tryLocsList.forEach(pushTryEntry, this)
        this.reset(true)
      }

      exports.keys = function (object) {
        var keys = []
        for (var key in object) {
          keys.push(key)
        }
        keys.reverse()

        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
          while (keys.length) {
            var key = keys.pop()
            if (key in object) {
              next.value = key
              next.done = false
              return next
            }
          }

          // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.
          next.done = true
          return next
        }
      }

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol]
          if (iteratorMethod) {
            return iteratorMethod.call(iterable)
          }

          if (typeof iterable.next === 'function') {
            return iterable
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
              next = function next() {
                while (++i < iterable.length) {
                  if (hasOwn.call(iterable, i)) {
                    next.value = iterable[i]
                    next.done = false
                    return next
                  }
                }

                next.value = undefined$1
                next.done = true

                return next
              }

            return (next.next = next)
          }
        }

        // Return an iterator with no values.
        return {next: doneResult}
      }
      exports.values = values

      function doneResult() {
        return {value: undefined$1, done: true}
      }

      Context.prototype = {
        constructor: Context,

        reset: function (skipTempReset) {
          this.prev = 0
          this.next = 0
          // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.
          this.sent = this._sent = undefined$1
          this.done = false
          this.delegate = null

          this.method = 'next'
          this.arg = undefined$1

          this.tryEntries.forEach(resetTryEntry)

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === 't' && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1
              }
            }
          }
        },

        stop: function () {
          this.done = true

          var rootEntry = this.tryEntries[0]
          var rootRecord = rootEntry.completion
          if (rootRecord.type === 'throw') {
            throw rootRecord.arg
          }

          return this.rval
        },

        dispatchException: function (exception) {
          if (this.done) {
            throw exception
          }

          var context = this
          function handle(loc, caught) {
            record.type = 'throw'
            record.arg = exception
            context.next = loc

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = 'next'
              context.arg = undefined$1
            }

            return !!caught
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i]
            var record = entry.completion

            if (entry.tryLoc === 'root') {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle('end')
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, 'catchLoc')
              var hasFinally = hasOwn.call(entry, 'finallyLoc')

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true)
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc)
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true)
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc)
                }
              } else {
                throw new Error('try statement without catch or finally')
              }
            }
          }
        },

        abrupt: function (type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i]
            if (
              entry.tryLoc <= this.prev &&
              hasOwn.call(entry, 'finallyLoc') &&
              this.prev < entry.finallyLoc
            ) {
              var finallyEntry = entry
              break
            }
          }

          if (
            finallyEntry &&
            (type === 'break' || type === 'continue') &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc
          ) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null
          }

          var record = finallyEntry ? finallyEntry.completion : {}
          record.type = type
          record.arg = arg

          if (finallyEntry) {
            this.method = 'next'
            this.next = finallyEntry.finallyLoc
            return ContinueSentinel
          }

          return this.complete(record)
        },

        complete: function (record, afterLoc) {
          if (record.type === 'throw') {
            throw record.arg
          }

          if (record.type === 'break' || record.type === 'continue') {
            this.next = record.arg
          } else if (record.type === 'return') {
            this.rval = this.arg = record.arg
            this.method = 'return'
            this.next = 'end'
          } else if (record.type === 'normal' && afterLoc) {
            this.next = afterLoc
          }

          return ContinueSentinel
        },

        finish: function (finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i]
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc)
              resetTryEntry(entry)
              return ContinueSentinel
            }
          }
        },

        catch: function (tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i]
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion
              if (record.type === 'throw') {
                var thrown = record.arg
                resetTryEntry(entry)
              }
              return thrown
            }
          }

          // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.
          throw new Error('illegal catch attempt')
        },

        delegateYield: function (iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc,
          }

          if (this.method === 'next') {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1
          }

          return ContinueSentinel
        },
      }

      // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.
      return exports
    })(
      // If this script is executing as a CommonJS module, use module.exports
      // as the regeneratorRuntime namespace. Otherwise create a new empty
      // object. Either way, the resulting object will be used to initialize
      // the regeneratorRuntime variable at the top of this file.
      module.exports,
    )

    try {
      regeneratorRuntime = runtime
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      Function('r', 'regeneratorRuntime = r')(runtime)
    }
  })

  var regenerator = runtime_1

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg)
      var value = info.value
    } catch (error) {
      reject(error)
      return
    }

    if (info.done) {
      resolve(value)
    } else {
      Promise.resolve(value).then(_next, _throw)
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args)

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value)
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err)
        }

        _next(undefined)
      })
    }
  }

  var globalObj = typeof window === 'undefined' ? global : window // Currently this fn only supports jest timers, but it could support other test runners in the future.

  function runWithRealTimers(callback) {
    var fakeTimersType = getJestFakeTimersType()

    if (fakeTimersType) {
      jest.useRealTimers()
    }

    var callbackReturnValue = callback()

    if (fakeTimersType) {
      jest.useFakeTimers(fakeTimersType)
    }

    return callbackReturnValue
  }

  function getJestFakeTimersType() {
    // istanbul ignore if
    if (typeof jest === 'undefined' || typeof globalObj.setTimeout === 'undefined') {
      return null
    }

    if (
      typeof globalObj.setTimeout._isMockFunction !== 'undefined' &&
      globalObj.setTimeout._isMockFunction
    ) {
      return 'legacy'
    }

    if (
      typeof globalObj.setTimeout.clock !== 'undefined' &&
      typeof jest.getRealSystemTime !== 'undefined'
    ) {
      try {
        // jest.getRealSystemTime is only supported for Jest's `modern` fake timers and otherwise throws
        jest.getRealSystemTime()
        return 'modern'
      } catch (_unused) {
        // not using Jest's modern fake timers
      }
    }

    return null
  }

  var jestFakeTimersAreEnabled = function () {
    return Boolean(getJestFakeTimersType())
  } // we only run our tests in node, and setImmediate is supported in node.
  // istanbul ignore next

  function setImmediatePolyfill(fn) {
    return globalObj.setTimeout(fn, 0)
  }

  function getTimeFunctions() {
    // istanbul ignore next
    return {
      clearTimeoutFn: globalObj.clearTimeout,
      setImmediateFn: globalObj.setImmediate || setImmediatePolyfill,
      setTimeoutFn: globalObj.setTimeout,
    }
  }

  var _runWithRealTimers = runWithRealTimers(getTimeFunctions),
    clearTimeoutFn = _runWithRealTimers.clearTimeoutFn,
    setImmediateFn = _runWithRealTimers.setImmediateFn,
    setTimeoutFn = _runWithRealTimers.setTimeoutFn

  function getDocument() {
    /* istanbul ignore if */
    if (typeof window === 'undefined') {
      throw new Error('Could not find default container')
    }

    return window.document
  }

  function getWindowFromNode(node) {
    if (node.defaultView) {
      // node is document
      return node.defaultView
    } else if (node.ownerDocument && node.ownerDocument.defaultView) {
      // node is a DOM node
      return node.ownerDocument.defaultView
    } else if (node.window) {
      // node is window
      return node.window
    } else if (node.then instanceof Function) {
      throw new Error(
        'It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?',
      )
    } else {
      // The user passed something unusual to a calling function
      throw new Error(
        'Unable to find the "window" object for the given node. Please file an issue with the code that\'s causing you to see this error: https://github.com/testing-library/dom-testing-library/issues/new',
      )
    }
  }

  function checkContainerType(container) {
    if (
      !container ||
      !(typeof container.querySelector === 'function') ||
      !(typeof container.querySelectorAll === 'function')
    ) {
      throw new TypeError(
        'Expected container to be an Element, a Document or a DocumentFragment but got ' +
          getTypeName(container) +
          '.',
      )
    }

    function getTypeName(object) {
      if (typeof object === 'object') {
        return object === null ? 'null' : object.constructor.name
      }

      return typeof object
    }
  }

  function inCypress(dom) {
    var window = (dom.ownerDocument && dom.ownerDocument.defaultView) || undefined
    return (
      (typeof global !== 'undefined' && global.Cypress) ||
      (typeof window !== 'undefined' && window.Cypress)
    )
  }

  var inNode = function () {
    return (
      typeof process !== 'undefined' &&
      process.versions !== undefined &&
      process.versions.node !== undefined
    )
  }

  var getMaxLength = function (dom) {
    return inCypress(dom)
      ? 0
      : (typeof process !== 'undefined' && process.env.DEBUG_PRINT_LIMIT) || 7000
  }

  var _prettyFormat$plugins = prettyFormat.plugins,
    DOMElement$1 = _prettyFormat$plugins.DOMElement,
    DOMCollection$1 = _prettyFormat$plugins.DOMCollection

  function prettyDOM(dom, maxLength, options) {
    if (!dom) {
      dom = getDocument().body
    }

    if (typeof maxLength !== 'number') {
      maxLength = getMaxLength(dom)
    }

    if (maxLength === 0) {
      return ''
    }

    if (dom.documentElement) {
      dom = dom.documentElement
    }

    var domTypeName = typeof dom

    if (domTypeName === 'object') {
      domTypeName = dom.constructor.name
    } else {
      // To don't fall with `in` operator
      dom = {}
    }

    if (!('outerHTML' in dom)) {
      throw new TypeError('Expected an element or document but got ' + domTypeName)
    }

    var debugContent = prettyFormat(
      dom,
      _extends(
        {
          plugins: [DOMElement$1, DOMCollection$1],
          printFunctionName: false,
          highlight: inNode(),
        },
        options,
      ),
    )
    return maxLength !== undefined && dom.outerHTML.length > maxLength
      ? debugContent.slice(0, maxLength) + '...'
      : debugContent
  }

  var logDOM = function () {
    return console.log(prettyDOM.apply(void 0, arguments))
  }

  // other parts of the code assume that all exports from
  // './queries' are query functions.

  var config = {
    testIdAttribute: 'data-testid',
    asyncUtilTimeout: 1000,
    // this is to support React's async `act` function.
    // forcing react-testing-library to wrap all async functions would've been
    // a total nightmare (consider wrapping every findBy* query and then also
    // updating `within` so those would be wrapped too. Total nightmare).
    // so we have this config option that's really only intended for
    // react-testing-library to use. For that reason, this feature will remain
    // undocumented.
    asyncWrapper: function asyncWrapper(cb) {
      return cb()
    },
    eventWrapper: function eventWrapper(cb) {
      return cb()
    },
    // default value for the `hidden` option in `ByRole` queries
    defaultHidden: false,
    // showOriginalStackTrace flag to show the full error stack traces for async errors
    showOriginalStackTrace: false,
    // throw errors w/ suggestions for better queries. Opt in so off by default.
    throwSuggestions: false,
    // called when getBy* queries fail. (message, container) => Error
    getElementError: function getElementError(message, container) {
      var error = new Error([message, prettyDOM(container)].filter(Boolean).join('\n\n'))
      error.name = 'TestingLibraryElementError'
      return error
    },
    _disableExpensiveErrorDiagnostics: false,
    computedStyleSupportsPseudoElements: false,
  }
  var DEFAULT_IGNORE_TAGS = 'script, style'
  function runWithExpensiveErrorDiagnosticsDisabled(callback) {
    try {
      config._disableExpensiveErrorDiagnostics = true
      return callback()
    } finally {
      config._disableExpensiveErrorDiagnostics = false
    }
  }
  function getConfig() {
    return config
  }

  function assertNotNullOrUndefined(matcher) {
    if (matcher == null) {
      throw new Error(
        'It looks like ' +
          matcher +
          ' was passed instead of a matcher. Did you do something like getByText(' +
          matcher +
          ')?',
      )
    }
  }

  function fuzzyMatches(textToMatch, node, matcher, normalizer) {
    if (typeof textToMatch !== 'string') {
      return false
    }

    assertNotNullOrUndefined(matcher)
    var normalizedText = normalizer(textToMatch)

    if (typeof matcher === 'string') {
      return normalizedText.toLowerCase().includes(matcher.toLowerCase())
    } else if (typeof matcher === 'function') {
      return matcher(normalizedText, node)
    } else {
      return matcher.test(normalizedText)
    }
  }

  function matches(textToMatch, node, matcher, normalizer) {
    if (typeof textToMatch !== 'string') {
      return false
    }

    assertNotNullOrUndefined(matcher)
    var normalizedText = normalizer(textToMatch)

    if (typeof matcher === 'string') {
      return normalizedText === matcher
    } else if (typeof matcher === 'function') {
      return matcher(normalizedText, node)
    } else {
      return matcher.test(normalizedText)
    }
  }

  function getDefaultNormalizer(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$trim = _ref.trim,
      trim = _ref$trim === void 0 ? true : _ref$trim,
      _ref$collapseWhitespa = _ref.collapseWhitespace,
      collapseWhitespace = _ref$collapseWhitespa === void 0 ? true : _ref$collapseWhitespa

    return function (text) {
      var normalizedText = text
      normalizedText = trim ? normalizedText.trim() : normalizedText
      normalizedText = collapseWhitespace ? normalizedText.replace(/\s+/g, ' ') : normalizedText
      return normalizedText
    }
  }
  /**
   * Constructs a normalizer to pass to functions in matches.js
   * @param {boolean|undefined} trim The user-specified value for `trim`, without
   * any defaulting having been applied
   * @param {boolean|undefined} collapseWhitespace The user-specified value for
   * `collapseWhitespace`, without any defaulting having been applied
   * @param {Function|undefined} normalizer The user-specified normalizer
   * @returns {Function} A normalizer
   */

  function makeNormalizer(_ref2) {
    var trim = _ref2.trim,
      collapseWhitespace = _ref2.collapseWhitespace,
      normalizer = _ref2.normalizer

    if (normalizer) {
      // User has specified a custom normalizer
      if (typeof trim !== 'undefined' || typeof collapseWhitespace !== 'undefined') {
        // They've also specified a value for trim or collapseWhitespace
        throw new Error(
          'trim and collapseWhitespace are not supported with a normalizer. ' +
            'If you want to use the default trim and collapseWhitespace logic in your normalizer, ' +
            'use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer',
        )
      }

      return normalizer
    } else {
      // No custom normalizer specified. Just use default.
      return getDefaultNormalizer({
        trim: trim,
        collapseWhitespace: collapseWhitespace,
      })
    }
  }

  // Constant node.nodeType for text nodes, see:
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#Node_type_constants
  var TEXT_NODE = 3

  function getNodeText(node) {
    if (node.matches('input[type=submit], input[type=button]')) {
      return node.value
    }

    return Array.from(node.childNodes)
      .filter(function (child) {
        return child.nodeType === TEXT_NODE && Boolean(child.textContent)
      })
      .map(function (c) {
        return c.textContent
      })
      .join('')
  }

  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it
    if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) {
      if (
        Array.isArray(o) ||
        (it = _unsupportedIterableToArray$2(o)) ||
        (allowArrayLike && o && typeof o.length === 'number')
      ) {
        if (it) o = it
        var i = 0
        return function () {
          if (i >= o.length) return {done: true}
          return {done: false, value: o[i++]}
        }
      }
      throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      )
    }
    it = o[Symbol.iterator]()
    return it.next.bind(it)
  }

  function _unsupportedIterableToArray$2(o, minLen) {
    if (!o) return
    if (typeof o === 'string') return _arrayLikeToArray$2(o, minLen)
    var n = Object.prototype.toString.call(o).slice(8, -1)
    if (n === 'Object' && o.constructor) n = o.constructor.name
    if (n === 'Map' || n === 'Set') return Array.from(o)
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray$2(o, minLen)
  }

  function _arrayLikeToArray$2(arr, len) {
    if (len == null || len > arr.length) len = arr.length
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i]
    }
    return arr2
  }
  var elementRoleList = buildElementRoleList(lib.elementRoles)
  /**
   * @param {Element} element -
   * @returns {boolean} - `true` if `element` and its subtree are inaccessible
   */

  function isSubtreeInaccessible(element) {
    if (element.hidden === true) {
      return true
    }

    if (element.getAttribute('aria-hidden') === 'true') {
      return true
    }

    var window = element.ownerDocument.defaultView

    if (window.getComputedStyle(element).display === 'none') {
      return true
    }

    return false
  }
  /**
   * Partial implementation https://www.w3.org/TR/wai-aria-1.2/#tree_exclusion
   * which should only be used for elements with a non-presentational role i.e.
   * `role="none"` and `role="presentation"` will not be excluded.
   *
   * Implements aria-hidden semantics (i.e. parent overrides child)
   * Ignores "Child Presentational: True" characteristics
   *
   * @param {Element} element -
   * @param {object} [options] -
   * @param {function (element: Element): boolean} options.isSubtreeInaccessible -
   * can be used to return cached results from previous isSubtreeInaccessible calls
   * @returns {boolean} true if excluded, otherwise false
   */

  function isInaccessible(element, options) {
    if (options === void 0) {
      options = {}
    }

    var _options = options,
      _options$isSubtreeIna = _options.isSubtreeInaccessible,
      isSubtreeInaccessibleImpl =
        _options$isSubtreeIna === void 0 ? isSubtreeInaccessible : _options$isSubtreeIna
    var window = element.ownerDocument.defaultView // since visibility is inherited we can exit early

    if (window.getComputedStyle(element).visibility === 'hidden') {
      return true
    }

    var currentElement = element

    while (currentElement) {
      if (isSubtreeInaccessibleImpl(currentElement)) {
        return true
      }

      currentElement = currentElement.parentElement
    }

    return false
  }

  function getImplicitAriaRoles(currentNode) {
    // eslint bug here:
    // eslint-disable-next-line no-unused-vars
    for (
      var _iterator = _createForOfIteratorHelperLoose(elementRoleList), _step;
      !(_step = _iterator()).done;

    ) {
      var _step$value = _step.value,
        selector = _step$value.selector,
        roles = _step$value.roles

      if (currentNode.matches(selector)) {
        return [].concat(roles)
      }
    }

    return []
  }

  function buildElementRoleList(elementRolesMap) {
    function makeElementSelector(_ref) {
      var name = _ref.name,
        _ref$attributes = _ref.attributes,
        attributes = _ref$attributes === void 0 ? [] : _ref$attributes
      return (
        '' +
        name +
        attributes
          .map(function (_ref2) {
            var attributeName = _ref2.name,
              value = _ref2.value,
              _ref2$constraints = _ref2.constraints,
              constraints = _ref2$constraints === void 0 ? [] : _ref2$constraints
            var shouldNotExist = constraints.indexOf('undefined') !== -1

            if (shouldNotExist) {
              return ':not([' + attributeName + '])'
            } else if (value) {
              return '[' + attributeName + '="' + value + '"]'
            } else {
              return '[' + attributeName + ']'
            }
          })
          .join('')
      )
    }

    function getSelectorSpecificity(_ref3) {
      var _ref3$attributes = _ref3.attributes,
        attributes = _ref3$attributes === void 0 ? [] : _ref3$attributes
      return attributes.length
    }

    var result = [] // eslint bug here:
    // eslint-disable-next-line no-unused-vars

    for (
      var _iterator2 = _createForOfIteratorHelperLoose(elementRolesMap.entries()), _step2;
      !(_step2 = _iterator2()).done;

    ) {
      var _step2$value = _step2.value,
        element = _step2$value[0],
        roles = _step2$value[1]
      result = [].concat(result, [
        {
          selector: makeElementSelector(element),
          roles: Array.from(roles),
          specificity: getSelectorSpecificity(element),
        },
      ])
    }

    return result.sort(function (_ref4, _ref5) {
      var leftSpecificity = _ref4.specificity
      var rightSpecificity = _ref5.specificity
      return rightSpecificity - leftSpecificity
    })
  }

  function getRoles(container, _temp) {
    var _ref6 = _temp === void 0 ? {} : _temp,
      _ref6$hidden = _ref6.hidden,
      hidden = _ref6$hidden === void 0 ? false : _ref6$hidden

    function flattenDOM(node) {
      return [node].concat(
        Array.from(node.children).reduce(function (acc, child) {
          return [].concat(acc, flattenDOM(child))
        }, []),
      )
    }

    return flattenDOM(container)
      .filter(function (element) {
        return hidden === false ? isInaccessible(element) === false : true
      })
      .reduce(function (acc, node) {
        var roles = [] // TODO: This violates html-aria which does not allow any role on every element

        if (node.hasAttribute('role')) {
          roles = node.getAttribute('role').split(' ').slice(0, 1)
        } else {
          roles = getImplicitAriaRoles(node)
        }

        return roles.reduce(function (rolesAcc, role) {
          var _extends2, _extends3

          return Array.isArray(rolesAcc[role])
            ? _extends(
                {},
                rolesAcc,
                ((_extends2 = {}),
                (_extends2[role] = [].concat(rolesAcc[role], [node])),
                _extends2),
              )
            : _extends({}, rolesAcc, ((_extends3 = {}), (_extends3[role] = [node]), _extends3))
        }, acc)
      }, {})
  }

  function prettyRoles(dom, _ref7) {
    var hidden = _ref7.hidden
    var roles = getRoles(dom, {
      hidden: hidden,
    }) // We prefer to skip generic role, we don't recommend it

    return Object.entries(roles)
      .filter(function (_ref8) {
        var role = _ref8[0]
        return role !== 'generic'
      })
      .map(function (_ref9) {
        var role = _ref9[0],
          elements = _ref9[1]
        var delimiterBar = '-'.repeat(50)
        var elementsString = elements
          .map(function (el) {
            var nameString =
              'Name "' +
              computeAccessibleName(el, {
                computedStyleSupportsPseudoElements: getConfig()
                  .computedStyleSupportsPseudoElements,
              }) +
              '":\n'
            var domString = prettyDOM(el.cloneNode(false))
            return '' + nameString + domString
          })
          .join('\n\n')
        return role + ':\n\n' + elementsString + '\n\n' + delimiterBar
      })
      .join('\n')
  }
  /**
   * @param {Element} element -
   * @returns {boolean | undefined} - false/true if (not)selected, undefined if not selectable
   */

  function computeAriaSelected(element) {
    // implicit value from html-aam mappings: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings
    // https://www.w3.org/TR/html-aam-1.0/#details-id-97
    if (element.tagName === 'OPTION') {
      return element.selected
    } // explicit value

    return checkBooleanAttribute(element, 'aria-selected')
  }
  /**
   * @param {Element} element -
   * @returns {boolean | undefined} - false/true if (not)checked, undefined if not checked-able
   */

  function computeAriaChecked(element) {
    // implicit value from html-aam mappings: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings
    // https://www.w3.org/TR/html-aam-1.0/#details-id-56
    // https://www.w3.org/TR/html-aam-1.0/#details-id-67
    if ('indeterminate' in element && element.indeterminate) {
      return undefined
    }

    if ('checked' in element) {
      return element.checked
    } // explicit value

    return checkBooleanAttribute(element, 'aria-checked')
  }
  /**
   * @param {Element} element -
   * @returns {boolean | undefined} - false/true if (not)pressed, undefined if not press-able
   */

  function computeAriaPressed(element) {
    // https://www.w3.org/TR/wai-aria-1.1/#aria-pressed
    return checkBooleanAttribute(element, 'aria-pressed')
  }

  function checkBooleanAttribute(element, attribute) {
    var attributeValue = element.getAttribute(attribute)

    if (attributeValue === 'true') {
      return true
    }

    if (attributeValue === 'false') {
      return false
    }

    return undefined
  }

  var normalize$1 = getDefaultNormalizer()

  function getLabelTextFor(element) {
    var label =
      element.labels &&
      Array.from(element.labels).find(function (el) {
        return Boolean(normalize$1(el.textContent))
      }) // non form elements that are using aria-labelledby won't be included in `element.labels`

    if (!label) {
      var ariaLabelledBy = element.getAttribute('aria-labelledby')

      if (ariaLabelledBy) {
        // this is only a temporary fix. The problem is that at the moment @testing-library/dom
        // not support label concatenation
        // see https://github.com/testing-library/dom-testing-library/issues/545
        var firstId = ariaLabelledBy.split(' ')[0] // we're using this notation because with the # selector we would have to escape special characters e.g. user.name
        // see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector#Escaping_special_characters

        label = document.querySelector('[id="' + firstId + '"]')
      }
    }

    if (label) {
      return label.textContent
    }

    return undefined
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
  }

  function getRegExpMatcher(string) {
    return new RegExp(escapeRegExp(string.toLowerCase()), 'i')
  }

  function makeSuggestion(queryName, content, _ref) {
    var variant = _ref.variant,
      name = _ref.name
    var queryArgs = [
      queryName === 'Role' || queryName === 'TestId' ? content : getRegExpMatcher(content),
    ]

    if (name) {
      queryArgs.push({
        name: getRegExpMatcher(name),
      })
    }

    var queryMethod = variant + 'By' + queryName
    return {
      queryName: queryName,
      queryMethod: queryMethod,
      queryArgs: queryArgs,
      variant: variant,
      toString: function toString() {
        var text = queryArgs[0],
          options = queryArgs[1]
        text = typeof text === 'string' ? "'" + text + "'" : text
        options = options
          ? ', { ' +
            Object.entries(options)
              .map(function (_ref2) {
                var k = _ref2[0],
                  v = _ref2[1]
                return k + ': ' + v
              })
              .join(', ') +
            ' }'
          : ''
        return queryMethod + '(' + text + options + ')'
      },
    }
  }

  function canSuggest(currentMethod, requestedMethod, data) {
    return (
      data && (!requestedMethod || requestedMethod.toLowerCase() === currentMethod.toLowerCase())
    )
  }

  function getSuggestedQuery(element, variant, method) {
    var _element$getAttribute, _getImplicitAriaRoles

    if (variant === void 0) {
      variant = 'get'
    }

    // don't create suggestions for script and style elements
    if (element.matches(DEFAULT_IGNORE_TAGS)) {
      return undefined
    } //We prefer to suggest something else if the role is generic

    var role =
      (_element$getAttribute = element.getAttribute('role')) != null
        ? _element$getAttribute
        : (_getImplicitAriaRoles = getImplicitAriaRoles(element)) == null
        ? void 0
        : _getImplicitAriaRoles[0]

    if (role !== 'generic' && canSuggest('Role', method, role)) {
      return makeSuggestion('Role', role, {
        variant: variant,
        name: computeAccessibleName(element, {
          computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements,
        }),
      })
    }

    var labelText = getLabelTextFor(element)

    if (canSuggest('LabelText', method, labelText)) {
      return makeSuggestion('LabelText', labelText, {
        variant: variant,
      })
    }

    var placeholderText = element.getAttribute('placeholder')

    if (canSuggest('PlaceholderText', method, placeholderText)) {
      return makeSuggestion('PlaceholderText', placeholderText, {
        variant: variant,
      })
    }

    var textContent = normalize$1(getNodeText(element))

    if (canSuggest('Text', method, textContent)) {
      return makeSuggestion('Text', textContent, {
        variant: variant,
      })
    }

    if (canSuggest('DisplayValue', method, element.value)) {
      return makeSuggestion('DisplayValue', normalize$1(element.value), {
        variant: variant,
      })
    }

    var alt = element.getAttribute('alt')

    if (canSuggest('AltText', method, alt)) {
      return makeSuggestion('AltText', alt, {
        variant: variant,
      })
    }

    var title = element.getAttribute('title')

    if (canSuggest('Title', method, title)) {
      return makeSuggestion('Title', title, {
        variant: variant,
      })
    }

    var testId = element.getAttribute(getConfig().testIdAttribute)

    if (canSuggest('TestId', method, testId)) {
      return makeSuggestion('TestId', testId, {
        variant: variant,
      })
    }

    return undefined
  }

  // closer to their code (because async stack traces are hard to follow).

  function copyStackTrace(target, source) {
    target.stack = source.stack.replace(source.message, target.message)
  }

  function waitFor(callback, _ref) {
    var _ref$container = _ref.container,
      container = _ref$container === void 0 ? getDocument() : _ref$container,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? getConfig().asyncUtilTimeout : _ref$timeout,
      _ref$showOriginalStac = _ref.showOriginalStackTrace,
      showOriginalStackTrace =
        _ref$showOriginalStac === void 0
          ? getConfig().showOriginalStackTrace
          : _ref$showOriginalStac,
      stackTraceError = _ref.stackTraceError,
      _ref$interval = _ref.interval,
      interval = _ref$interval === void 0 ? 50 : _ref$interval,
      _ref$onTimeout = _ref.onTimeout,
      onTimeout =
        _ref$onTimeout === void 0
          ? function (error) {
              error.message = error.message + '\n\n' + prettyDOM(container)
              return error
            }
          : _ref$onTimeout,
      _ref$mutationObserver = _ref.mutationObserverOptions,
      mutationObserverOptions =
        _ref$mutationObserver === void 0
          ? {
              subtree: true,
              childList: true,
              attributes: true,
              characterData: true,
            }
          : _ref$mutationObserver

    if (typeof callback !== 'function') {
      throw new TypeError('Received `callback` arg must be a function')
    }

    return new Promise(
      /*#__PURE__*/ (function () {
        var _ref2 = _asyncToGenerator(
          /*#__PURE__*/ regenerator.mark(function _callee(resolve, reject) {
            var lastError,
              intervalId,
              observer,
              finished,
              overallTimeoutTimer,
              usingFakeTimers,
              _getWindowFromNode,
              MutationObserver,
              onDone,
              checkCallback,
              handleTimeout

            return regenerator.wrap(function (_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    handleTimeout = function () {
                      var error

                      if (lastError) {
                        error = lastError

                        if (
                          !showOriginalStackTrace &&
                          error.name === 'TestingLibraryElementError'
                        ) {
                          copyStackTrace(error, stackTraceError)
                        }
                      } else {
                        error = new Error('Timed out in waitFor.')

                        if (!showOriginalStackTrace) {
                          copyStackTrace(error, stackTraceError)
                        }
                      }

                      onDone(onTimeout(error), null)
                    }

                    checkCallback = function () {
                      try {
                        onDone(null, runWithExpensiveErrorDiagnosticsDisabled(callback)) // If `callback` throws, wait for the next mutation, interval, or timeout.
                      } catch (error) {
                        // Save the most recent callback error to reject the promise with it in the event of a timeout
                        lastError = error
                      }
                    }

                    onDone = function (error, result) {
                      finished = true
                      clearTimeoutFn(overallTimeoutTimer)

                      if (!usingFakeTimers) {
                        clearInterval(intervalId)
                        setImmediateFn(function () {
                          return observer.disconnect()
                        })
                      }

                      if (error) {
                        reject(error)
                      } else {
                        resolve(result)
                      }
                    }

                    finished = false
                    overallTimeoutTimer = setTimeoutFn(handleTimeout, timeout)
                    usingFakeTimers = jestFakeTimersAreEnabled()

                    if (!usingFakeTimers) {
                      _context.next = 17
                      break
                    }

                    checkCallback() // this is a dangerous rule to disable because it could lead to an
                  // infinite loop. However, eslint isn't smart enough to know that we're
                  // setting finished inside `onDone` which will be called when we're done
                  // waiting or when we've timed out.
                  // eslint-disable-next-line no-unmodified-loop-condition

                  case 8:
                    if (finished) {
                      _context.next = 15
                      break
                    }

                    // we *could* (maybe should?) use `advanceTimersToNextTimer` but it's
                    // possible that could make this loop go on forever if someone is using
                    // third party code that's setting up recursive timers so rapidly that
                    // the user's timer's don't get a chance to resolve. So we'll advance
                    // by an interval instead. (We have a test for this case).
                    jest.advanceTimersByTime(interval) // It's really important that checkCallback is run *before* we flush
                    // in-flight promises. To be honest, I'm not sure why, and I can't quite
                    // think of a way to reproduce the problem in a test, but I spent
                    // an entire day banging my head against a wall on this.

                    checkCallback() // In this rare case, we *need* to wait for in-flight promises
                    // to resolve before continuing. We don't need to take advantage
                    // of parallelization so we're fine.
                    // https://stackoverflow.com/a/59243586/971592
                    // eslint-disable-next-line no-await-in-loop

                    _context.next = 13
                    return new Promise(function (r) {
                      return setImmediateFn(r)
                    })

                  case 13:
                    _context.next = 8
                    break

                  case 15:
                    _context.next = 22
                    break

                  case 17:
                    intervalId = setInterval(checkCallback, interval)
                    ;(_getWindowFromNode = getWindowFromNode(container)),
                      (MutationObserver = _getWindowFromNode.MutationObserver)
                    observer = new MutationObserver(checkCallback)
                    observer.observe(container, mutationObserverOptions)
                    checkCallback()

                  case 22:
                  case 'end':
                    return _context.stop()
                }
              }
            }, _callee)
          }),
        )

        return function () {
          return _ref2.apply(this, arguments)
        }
      })(),
    )
  }

  function waitForWrapper(callback, options) {
    // create the error here so its stack trace is as close to the
    // calling code as possible
    var stackTraceError = new Error('STACK_TRACE_MESSAGE')
    return getConfig().asyncWrapper(function () {
      return waitFor(
        callback,
        _extends(
          {
            stackTraceError: stackTraceError,
          },
          options,
        ),
      )
    })
  }

  function getElementError(message, container) {
    return getConfig().getElementError(message, container)
  }

  function getMultipleElementsFoundError(message, container) {
    return getElementError(
      message +
        '\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).',
      container,
    )
  }

  function queryAllByAttribute(attribute, container, text, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$exact = _ref.exact,
      exact = _ref$exact === void 0 ? true : _ref$exact,
      collapseWhitespace = _ref.collapseWhitespace,
      trim = _ref.trim,
      normalizer = _ref.normalizer

    var matcher = exact ? matches : fuzzyMatches
    var matchNormalizer = makeNormalizer({
      collapseWhitespace: collapseWhitespace,
      trim: trim,
      normalizer: normalizer,
    })
    return Array.from(container.querySelectorAll('[' + attribute + ']')).filter(function (node) {
      return matcher(node.getAttribute(attribute), node, text, matchNormalizer)
    })
  }
  // if more than one elements is returned, otherwise it returns the first
  // element or null

  function makeSingleQuery(allQuery, getMultipleError) {
    return function (container) {
      for (
        var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2 - 1] = arguments[_key2]
      }

      var els = allQuery.apply(void 0, [container].concat(args))

      if (els.length > 1) {
        var elementStrings = els
          .map(function (element) {
            return prettyDOM(element)
          })
          .join('\n\n')
        throw getMultipleElementsFoundError(
          getMultipleError.apply(void 0, [container].concat(args)) +
            '\n\nHere are the matching elements:\n\n' +
            elementStrings,
          container,
        )
      }

      return els[0] || null
    }
  }

  function getSuggestionError(suggestion, container) {
    return getConfig().getElementError(
      'A better query is available, try this:\n' + suggestion.toString() + '\n',
      container,
    )
  } // this accepts a query function and returns a function which throws an error
  // if an empty list of elements is returned

  function makeGetAllQuery(allQuery, getMissingError) {
    return function (container) {
      for (
        var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1;
        _key3 < _len3;
        _key3++
      ) {
        args[_key3 - 1] = arguments[_key3]
      }

      var els = allQuery.apply(void 0, [container].concat(args))

      if (!els.length) {
        throw getConfig().getElementError(
          getMissingError.apply(void 0, [container].concat(args)),
          container,
        )
      }

      return els
    }
  } // this accepts a getter query function and returns a function which calls
  // waitFor and passing a function which invokes the getter.

  function makeFindQuery(getter) {
    return function (container, text, options, waitForOptions) {
      return waitForWrapper(function () {
        return getter(container, text, options)
      }, waitForOptions)
    }
  }

  var wrapSingleQueryWithSuggestion = function (query, queryAllByName, variant) {
    return function (container) {
      for (
        var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1;
        _key4 < _len4;
        _key4++
      ) {
        args[_key4 - 1] = arguments[_key4]
      }

      var element = query.apply(void 0, [container].concat(args))

      var _args$slice = args.slice(-1),
        _args$slice$ = _args$slice[0]

      _args$slice$ = _args$slice$ === void 0 ? {} : _args$slice$
      var _args$slice$$suggest = _args$slice$.suggest,
        suggest =
          _args$slice$$suggest === void 0 ? getConfig().throwSuggestions : _args$slice$$suggest

      if (element && suggest) {
        var suggestion = getSuggestedQuery(element, variant)

        if (suggestion && !queryAllByName.endsWith(suggestion.queryName)) {
          throw getSuggestionError(suggestion.toString(), container)
        }
      }

      return element
    }
  }

  var wrapAllByQueryWithSuggestion = function (query, queryAllByName, variant) {
    return function (container) {
      for (
        var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1;
        _key5 < _len5;
        _key5++
      ) {
        args[_key5 - 1] = arguments[_key5]
      }

      var els = query.apply(void 0, [container].concat(args))

      var _args$slice2 = args.slice(-1),
        _args$slice2$ = _args$slice2[0]

      _args$slice2$ = _args$slice2$ === void 0 ? {} : _args$slice2$
      var _args$slice2$$suggest = _args$slice2$.suggest,
        suggest =
          _args$slice2$$suggest === void 0 ? getConfig().throwSuggestions : _args$slice2$$suggest

      if (els.length && suggest) {
        // get a unique list of all suggestion messages.  We are only going to make a suggestion if
        // all the suggestions are the same
        var uniqueSuggestionMessages = [].concat(
          new Set(
            els.map(function (element) {
              var _getSuggestedQuery

              return (_getSuggestedQuery = getSuggestedQuery(element, variant)) == null
                ? void 0
                : _getSuggestedQuery.toString()
            }),
          ),
        )

        if (
          // only want to suggest if all the els have the same suggestion.
          uniqueSuggestionMessages.length === 1 &&
          !queryAllByName.endsWith(getSuggestedQuery(els[0], variant).queryName)
        ) {
          throw getSuggestionError(uniqueSuggestionMessages[0], container)
        }
      }

      return els
    }
  }

  function buildQueries(queryAllBy, getMultipleError, getMissingError) {
    var queryBy = wrapSingleQueryWithSuggestion(
      makeSingleQuery(queryAllBy, getMultipleError),
      queryAllBy.name,
      'query',
    )
    var getAllBy = makeGetAllQuery(queryAllBy, getMissingError)
    var getBy = makeSingleQuery(getAllBy, getMultipleError)
    var getByWithSuggestions = wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, 'get')
    var getAllWithSuggestions = wrapAllByQueryWithSuggestion(
      getAllBy,
      queryAllBy.name.replace('query', 'get'),
      'getAll',
    )
    var findAllBy = makeFindQuery(
      wrapAllByQueryWithSuggestion(getAllBy, queryAllBy.name, 'findAll'),
    )
    var findBy = makeFindQuery(wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, 'find'))
    return [queryBy, getAllWithSuggestions, getByWithSuggestions, findAllBy, findBy]
  }

  function queryAllLabels(container) {
    return Array.from(container.querySelectorAll('label,input'))
      .map(function (node) {
        var textToMatch =
          node.tagName.toLowerCase() === 'label' ? node.textContent : node.value || null // The children of a textarea are part of `textContent` as well. We
        // need to remove them from the string so we can match it afterwards.

        Array.from(node.querySelectorAll('textarea')).forEach(function (textarea) {
          textToMatch = textToMatch.replace(textarea.value, '')
        }) // The children of a select are also part of `textContent`, so we
        // need also to remove their text.

        Array.from(node.querySelectorAll('select')).forEach(function (select) {
          textToMatch = textToMatch.replace(select.textContent, '')
        })
        return {
          node: node,
          textToMatch: textToMatch,
        }
      })
      .filter(function (_ref) {
        var textToMatch = _ref.textToMatch
        return textToMatch !== null
      })
  }

  function queryAllLabelsByText(container, text, _temp) {
    var _ref2 = _temp === void 0 ? {} : _temp,
      _ref2$exact = _ref2.exact,
      exact = _ref2$exact === void 0 ? true : _ref2$exact,
      trim = _ref2.trim,
      collapseWhitespace = _ref2.collapseWhitespace,
      normalizer = _ref2.normalizer

    var matcher = exact ? matches : fuzzyMatches
    var matchNormalizer = makeNormalizer({
      collapseWhitespace: collapseWhitespace,
      trim: trim,
      normalizer: normalizer,
    })
    var textToMatchByLabels = queryAllLabels(container)
    return textToMatchByLabels
      .filter(function (_ref3) {
        var node = _ref3.node,
          textToMatch = _ref3.textToMatch
        return matcher(textToMatch, node, text, matchNormalizer)
      })
      .map(function (_ref4) {
        var node = _ref4.node
        return node
      })
  }

  function getLabelContent(label) {
    var labelContent = label.getAttribute('value') || label.textContent
    Array.from(label.querySelectorAll('textarea')).forEach(function (textarea) {
      labelContent = labelContent.replace(textarea.value, '')
    })
    Array.from(label.querySelectorAll('select')).forEach(function (select) {
      labelContent = labelContent.replace(select.textContent, '')
    })
    return labelContent
  }

  function queryAllByLabelText(container, text, _temp2) {
    var _ref5 = _temp2 === void 0 ? {} : _temp2,
      _ref5$selector = _ref5.selector,
      selector = _ref5$selector === void 0 ? '*' : _ref5$selector,
      _ref5$exact = _ref5.exact,
      exact = _ref5$exact === void 0 ? true : _ref5$exact,
      collapseWhitespace = _ref5.collapseWhitespace,
      trim = _ref5.trim,
      normalizer = _ref5.normalizer

    checkContainerType(container)
    var matcher = exact ? matches : fuzzyMatches
    var matchNormalizer = makeNormalizer({
      collapseWhitespace: collapseWhitespace,
      trim: trim,
      normalizer: normalizer,
    })
    var matchingLabelledElements = Array.from(container.querySelectorAll('*'))
      .filter(function (element) {
        return getLabels$1(element) || element.hasAttribute('aria-labelledby')
      })
      .reduce(function (labelledElements, labelledElement) {
        var labelsId = labelledElement.getAttribute('aria-labelledby')
          ? labelledElement.getAttribute('aria-labelledby').split(' ')
          : []
        var labelsValue = labelsId.length
          ? labelsId.map(function (labelId) {
              var labellingElement = container.querySelector('[id="' + labelId + '"]')
              return labellingElement ? getLabelContent(labellingElement) : ''
            })
          : Array.from(getLabels$1(labelledElement)).map(function (label) {
              var textToMatch = getLabelContent(label)
              var labelledFormControl = Array.from(
                label.querySelectorAll('button, input, meter, output, progress, select, textarea'),
              ).filter(function (element) {
                return element.matches(selector)
              })[0]

              if (labelledFormControl) {
                if (matcher(textToMatch, labelledFormControl, text, matchNormalizer))
                  labelledElements.push(labelledFormControl)
              }

              return textToMatch
            })
        labelsValue = labelsValue.filter(Boolean)
        if (matcher(labelsValue.join(' '), labelledElement, text, matchNormalizer))
          labelledElements.push(labelledElement)

        if (labelsValue.length > 1) {
          labelsValue.forEach(function (labelValue, index) {
            if (matcher(labelValue, labelledElement, text, matchNormalizer))
              labelledElements.push(labelledElement)
            var labelsFiltered = [].concat(labelsValue)
            labelsFiltered.splice(index, 1)

            if (labelsFiltered.length > 1) {
              if (matcher(labelsFiltered.join(' '), labelledElement, text, matchNormalizer))
                labelledElements.push(labelledElement)
            }
          })
        }

        return labelledElements
      }, [])
      .concat(
        queryAllByAttribute('aria-label', container, text, {
          exact: exact,
        }),
      )
    return Array.from(new Set(matchingLabelledElements)).filter(function (element) {
      return element.matches(selector)
    })
  } // the getAll* query would normally look like this:
  // const getAllByLabelText = makeGetAllQuery(
  //   queryAllByLabelText,
  //   (c, text) => `Unable to find a label with the text of: ${text}`,
  // )
  // however, we can give a more helpful error message than the generic one,
  // so we're writing this one out by hand.

  var getAllByLabelText = function (container, text) {
    for (
      var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2;
      _key < _len;
      _key++
    ) {
      rest[_key - 2] = arguments[_key]
    }

    var els = queryAllByLabelText.apply(void 0, [container, text].concat(rest))

    if (!els.length) {
      var labels = queryAllLabelsByText.apply(void 0, [container, text].concat(rest))

      if (labels.length) {
        var tagNames = labels
          .map(function (label) {
            return getTagNameOfElementAssociatedWithLabelViaFor(container, label)
          })
          .filter(function (tagName) {
            return !!tagName
          })

        if (tagNames.length) {
          throw getConfig().getElementError(
            tagNames
              .map(function (tagName) {
                return (
                  'Found a label with the text of: ' +
                  text +
                  ', however the element associated with this label (<' +
                  tagName +
                  ' />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <' +
                  tagName +
                  ' />, you can use aria-label or aria-labelledby instead.'
                )
              })
              .join('\n\n'),
            container,
          )
        } else {
          throw getConfig().getElementError(
            'Found a label with the text of: ' +
              text +
              ', however no form control was found associated to that label. Make sure you\'re using the "for" attribute or "aria-labelledby" attribute correctly.',
            container,
          )
        }
      } else {
        throw getConfig().getElementError(
          'Unable to find a label with the text of: ' + text,
          container,
        )
      }
    }

    return els
  }

  function getTagNameOfElementAssociatedWithLabelViaFor(container, label) {
    var htmlFor = label.getAttribute('for')

    if (!htmlFor) {
      return null
    }

    var element = container.querySelector('[id="' + htmlFor + '"]')
    return element ? element.tagName.toLowerCase() : null
  } // the reason mentioned above is the same reason we're not using buildQueries

  var getMultipleError = function (c, text) {
    return 'Found multiple elements with the text of: ' + text
  }

  var queryByLabelText = wrapSingleQueryWithSuggestion(
    makeSingleQuery(queryAllByLabelText, getMultipleError),
    queryAllByLabelText.name,
    'query',
  )
  var getByLabelText = makeSingleQuery(getAllByLabelText, getMultipleError)
  var findAllByLabelText = makeFindQuery(
    wrapAllByQueryWithSuggestion(getAllByLabelText, getAllByLabelText.name, 'findAll'),
  )
  var findByLabelText = makeFindQuery(
    wrapSingleQueryWithSuggestion(getByLabelText, getByLabelText.name, 'find'),
  )
  var getAllByLabelTextWithSuggestions = wrapAllByQueryWithSuggestion(
    getAllByLabelText,
    getAllByLabelText.name,
    'getAll',
  )
  var getByLabelTextWithSuggestions = wrapSingleQueryWithSuggestion(
    getByLabelText,
    getAllByLabelText.name,
    'get',
  )
  var queryAllByLabelTextWithSuggestions = wrapAllByQueryWithSuggestion(
    queryAllByLabelText,
    queryAllByLabelText.name,
    'queryAll',
  )

  function getLabels$1(element) {
    if (element.labels !== undefined) return element.labels
    if (!isLabelable(element)) return null
    var labels = element.ownerDocument.querySelectorAll('label')
    return Array.from(labels).filter(function (label) {
      return label.control === element
    })
  }

  function isLabelable(element) {
    return (
      element.tagName.match(/BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/) ||
      (element.tagName === 'INPUT' && element.getAttribute('type') !== 'hidden')
    )
  }

  function queryAllByPlaceholderText() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key]
    }

    checkContainerType.apply(void 0, args)
    return queryAllByAttribute.apply(void 0, ['placeholder'].concat(args))
  }

  var getMultipleError$1 = function (c, text) {
    return 'Found multiple elements with the placeholder text of: ' + text
  }

  var getMissingError = function (c, text) {
    return 'Unable to find an element with the placeholder text of: ' + text
  }

  var queryAllByPlaceholderTextWithSuggestions = wrapAllByQueryWithSuggestion(
    queryAllByPlaceholderText,
    queryAllByPlaceholderText.name,
    'queryAll',
  )

  var _buildQueries = buildQueries(queryAllByPlaceholderText, getMultipleError$1, getMissingError),
    queryByPlaceholderText = _buildQueries[0],
    getAllByPlaceholderText = _buildQueries[1],
    getByPlaceholderText = _buildQueries[2],
    findAllByPlaceholderText = _buildQueries[3],
    findByPlaceholderText = _buildQueries[4]

  function queryAllByText(container, text, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$selector = _ref.selector,
      selector = _ref$selector === void 0 ? '*' : _ref$selector,
      _ref$exact = _ref.exact,
      exact = _ref$exact === void 0 ? true : _ref$exact,
      collapseWhitespace = _ref.collapseWhitespace,
      trim = _ref.trim,
      _ref$ignore = _ref.ignore,
      ignore = _ref$ignore === void 0 ? DEFAULT_IGNORE_TAGS : _ref$ignore,
      normalizer = _ref.normalizer

    checkContainerType(container)
    var matcher = exact ? matches : fuzzyMatches
    var matchNormalizer = makeNormalizer({
      collapseWhitespace: collapseWhitespace,
      trim: trim,
      normalizer: normalizer,
    })
    var baseArray = []

    if (typeof container.matches === 'function' && container.matches(selector)) {
      baseArray = [container]
    }

    return []
      .concat(baseArray, Array.from(container.querySelectorAll(selector)))
      .filter(function (node) {
        return !ignore || !node.matches(ignore)
      })
      .filter(function (node) {
        return matcher(getNodeText(node), node, text, matchNormalizer)
      })
  }

  var getMultipleError$2 = function (c, text) {
    return 'Found multiple elements with the text: ' + text
  }

  var getMissingError$1 = function (c, text) {
    return (
      'Unable to find an element with the text: ' +
      text +
      '. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.'
    )
  }

  var queryAllByTextWithSuggestions = wrapAllByQueryWithSuggestion(
    queryAllByText,
    queryAllByText.name,
    'queryAll',
  )

  var _buildQueries$1 = buildQueries(queryAllByText, getMultipleError$2, getMissingError$1),
    queryByText = _buildQueries$1[0],
    getAllByText = _buildQueries$1[1],
    getByText = _buildQueries$1[2],
    findAllByText = _buildQueries$1[3],
    findByText = _buildQueries$1[4]

  function queryAllByDisplayValue(container, value, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$exact = _ref.exact,
      exact = _ref$exact === void 0 ? true : _ref$exact,
      collapseWhitespace = _ref.collapseWhitespace,
      trim = _ref.trim,
      normalizer = _ref.normalizer

    checkContainerType(container)
    var matcher = exact ? matches : fuzzyMatches
    var matchNormalizer = makeNormalizer({
      collapseWhitespace: collapseWhitespace,
      trim: trim,
      normalizer: normalizer,
    })
    return Array.from(container.querySelectorAll('input,textarea,select')).filter(function (node) {
      if (node.tagName === 'SELECT') {
        var selectedOptions = Array.from(node.options).filter(function (option) {
          return option.selected
        })
        return selectedOptions.some(function (optionNode) {
          return matcher(getNodeText(optionNode), optionNode, value, matchNormalizer)
        })
      } else {
        return matcher(node.value, node, value, matchNormalizer)
      }
    })
  }

  var getMultipleError$3 = function (c, value) {
    return 'Found multiple elements with the display value: ' + value + '.'
  }

  var getMissingError$2 = function (c, value) {
    return 'Unable to find an element with the display value: ' + value + '.'
  }

  var queryAllByDisplayValueWithSuggestions = wrapAllByQueryWithSuggestion(
    queryAllByDisplayValue,
    queryAllByDisplayValue.name,
    'queryAll',
  )

  var _buildQueries$2 = buildQueries(queryAllByDisplayValue, getMultipleError$3, getMissingError$2),
    queryByDisplayValue = _buildQueries$2[0],
    getAllByDisplayValue = _buildQueries$2[1],
    getByDisplayValue = _buildQueries$2[2],
    findAllByDisplayValue = _buildQueries$2[3],
    findByDisplayValue = _buildQueries$2[4]

  function queryAllByAltText(container, alt, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$exact = _ref.exact,
      exact = _ref$exact === void 0 ? true : _ref$exact,
      collapseWhitespace = _ref.collapseWhitespace,
      trim = _ref.trim,
      normalizer = _ref.normalizer

    checkContainerType(container)
    var matcher = exact ? matches : fuzzyMatches
    var matchNormalizer = makeNormalizer({
      collapseWhitespace: collapseWhitespace,
      trim: trim,
      normalizer: normalizer,
    })
    return Array.from(container.querySelectorAll('img,input,area')).filter(function (node) {
      return matcher(node.getAttribute('alt'), node, alt, matchNormalizer)
    })
  }

  var getMultipleError$4 = function (c, alt) {
    return 'Found multiple elements with the alt text: ' + alt
  }

  var getMissingError$3 = function (c, alt) {
    return 'Unable to find an element with the alt text: ' + alt
  }

  var queryAllByAltTextWithSuggestions = wrapAllByQueryWithSuggestion(
    queryAllByAltText,
    queryAllByAltText.name,
    'queryAll',
  )

  var _buildQueries$3 = buildQueries(queryAllByAltText, getMultipleError$4, getMissingError$3),
    queryByAltText = _buildQueries$3[0],
    getAllByAltText = _buildQueries$3[1],
    getByAltText = _buildQueries$3[2],
    findAllByAltText = _buildQueries$3[3],
    findByAltText = _buildQueries$3[4]

  function queryAllByTitle(container, text, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$exact = _ref.exact,
      exact = _ref$exact === void 0 ? true : _ref$exact,
      collapseWhitespace = _ref.collapseWhitespace,
      trim = _ref.trim,
      normalizer = _ref.normalizer

    checkContainerType(container)
    var matcher = exact ? matches : fuzzyMatches
    var matchNormalizer = makeNormalizer({
      collapseWhitespace: collapseWhitespace,
      trim: trim,
      normalizer: normalizer,
    })
    return Array.from(container.querySelectorAll('[title], svg > title')).filter(function (node) {
      return (
        matcher(node.getAttribute('title'), node, text, matchNormalizer) ||
        matcher(getNodeText(node), node, text, matchNormalizer)
      )
    })
  }

  var getMultipleError$5 = function (c, title) {
    return 'Found multiple elements with the title: ' + title + '.'
  }

  var getMissingError$4 = function (c, title) {
    return 'Unable to find an element with the title: ' + title + '.'
  }

  var queryAllByTitleWithSuggestions = wrapAllByQueryWithSuggestion(
    queryAllByTitle,
    queryAllByTitle.name,
    'queryAll',
  )

  var _buildQueries$4 = buildQueries(queryAllByTitle, getMultipleError$5, getMissingError$4),
    queryByTitle = _buildQueries$4[0],
    getAllByTitle = _buildQueries$4[1],
    getByTitle = _buildQueries$4[2],
    findAllByTitle = _buildQueries$4[3],
    findByTitle = _buildQueries$4[4]

  function queryAllByRole(container, role, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$exact = _ref.exact,
      exact = _ref$exact === void 0 ? true : _ref$exact,
      collapseWhitespace = _ref.collapseWhitespace,
      _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? getConfig().defaultHidden : _ref$hidden,
      name = _ref.name,
      trim = _ref.trim,
      normalizer = _ref.normalizer,
      _ref$queryFallbacks = _ref.queryFallbacks,
      queryFallbacks = _ref$queryFallbacks === void 0 ? false : _ref$queryFallbacks,
      selected = _ref.selected,
      checked = _ref.checked,
      pressed = _ref.pressed

    checkContainerType(container)
    var matcher = exact ? matches : fuzzyMatches
    var matchNormalizer = makeNormalizer({
      collapseWhitespace: collapseWhitespace,
      trim: trim,
      normalizer: normalizer,
    })

    if (selected !== undefined) {
      var _allRoles$get

      // guard against unknown roles
      if (
        ((_allRoles$get = lib.roles.get(role)) == null
          ? void 0
          : _allRoles$get.props['aria-selected']) === undefined
      ) {
        throw new Error('"aria-selected" is not supported on role "' + role + '".')
      }
    }

    if (checked !== undefined) {
      var _allRoles$get2

      // guard against unknown roles
      if (
        ((_allRoles$get2 = lib.roles.get(role)) == null
          ? void 0
          : _allRoles$get2.props['aria-checked']) === undefined
      ) {
        throw new Error('"aria-checked" is not supported on role "' + role + '".')
      }
    }

    if (pressed !== undefined) {
      var _allRoles$get3

      // guard against unknown roles
      if (
        ((_allRoles$get3 = lib.roles.get(role)) == null
          ? void 0
          : _allRoles$get3.props['aria-pressed']) === undefined
      ) {
        throw new Error('"aria-pressed" is not supported on role "' + role + '".')
      }
    }

    var subtreeIsInaccessibleCache = new WeakMap()

    function cachedIsSubtreeInaccessible(element) {
      if (!subtreeIsInaccessibleCache.has(element)) {
        subtreeIsInaccessibleCache.set(element, isSubtreeInaccessible(element))
      }

      return subtreeIsInaccessibleCache.get(element)
    }

    return Array.from(container.querySelectorAll('*'))
      .filter(function (node) {
        var isRoleSpecifiedExplicitly = node.hasAttribute('role')

        if (isRoleSpecifiedExplicitly) {
          var roleValue = node.getAttribute('role')

          if (queryFallbacks) {
            return roleValue
              .split(' ')
              .filter(Boolean)
              .some(function (text) {
                return matcher(text, node, role, matchNormalizer)
              })
          } // if a custom normalizer is passed then let normalizer handle the role value

          if (normalizer) {
            return matcher(roleValue, node, role, matchNormalizer)
          } // other wise only send the first word to match

          var _roleValue$split = roleValue.split(' '),
            firstWord = _roleValue$split[0]

          return matcher(firstWord, node, role, matchNormalizer)
        }

        var implicitRoles = getImplicitAriaRoles(node)
        return implicitRoles.some(function (implicitRole) {
          return matcher(implicitRole, node, role, matchNormalizer)
        })
      })
      .filter(function (element) {
        if (selected !== undefined) {
          return selected === computeAriaSelected(element)
        }

        if (checked !== undefined) {
          return checked === computeAriaChecked(element)
        }

        if (pressed !== undefined) {
          return pressed === computeAriaPressed(element)
        } // don't care if aria attributes are unspecified

        return true
      })
      .filter(function (element) {
        return hidden === false
          ? isInaccessible(element, {
              isSubtreeInaccessible: cachedIsSubtreeInaccessible,
            }) === false
          : true
      })
      .filter(function (element) {
        if (name === undefined) {
          // Don't care
          return true
        }

        return matches(
          computeAccessibleName(element, {
            computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements,
          }),
          element,
          name,
          function (text) {
            return text
          },
        )
      })
  }

  var getMultipleError$6 = function (c, role, _temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      name = _ref2.name

    var nameHint = ''

    if (name === undefined) {
      nameHint = ''
    } else if (typeof name === 'string') {
      nameHint = ' and name "' + name + '"'
    } else {
      nameHint = ' and name `' + name + '`'
    }

    return 'Found multiple elements with the role "' + role + '"' + nameHint
  }

  var getMissingError$5 = function (container, role, _temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      _ref3$hidden = _ref3.hidden,
      hidden = _ref3$hidden === void 0 ? getConfig().defaultHidden : _ref3$hidden,
      name = _ref3.name

    if (getConfig()._disableExpensiveErrorDiagnostics) {
      return 'Unable to find role="' + role + '"'
    }

    var roles = ''
    Array.from(container.children).forEach(function (childElement) {
      roles += prettyRoles(childElement, {
        hidden: hidden,
        includeName: name !== undefined,
      })
    })
    var roleMessage

    if (roles.length === 0) {
      if (hidden === false) {
        roleMessage =
          'There are no accessible roles. But there might be some inaccessible roles. ' +
          'If you wish to access them, then set the `hidden` option to `true`. ' +
          'Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole'
      } else {
        roleMessage = 'There are no available roles.'
      }
    } else {
      roleMessage = (
        '\nHere are the ' +
        (hidden === false ? 'accessible' : 'available') +
        ' roles:\n\n  ' +
        roles.replace(/\n/g, '\n  ').replace(/\n\s\s\n/g, '\n\n') +
        '\n'
      ).trim()
    }

    var nameHint = ''

    if (name === undefined) {
      nameHint = ''
    } else if (typeof name === 'string') {
      nameHint = ' and name "' + name + '"'
    } else {
      nameHint = ' and name `' + name + '`'
    }

    return (
      '\nUnable to find an ' +
      (hidden === false ? 'accessible ' : '') +
      'element with the role "' +
      role +
      '"' +
      nameHint +
      '\n\n' +
      roleMessage
    ).trim()
  }

  var queryAllByRoleWithSuggestions = wrapAllByQueryWithSuggestion(
    queryAllByRole,
    queryAllByRole.name,
    'queryAll',
  )

  var _buildQueries$5 = buildQueries(queryAllByRole, getMultipleError$6, getMissingError$5),
    queryByRole = _buildQueries$5[0],
    getAllByRole = _buildQueries$5[1],
    getByRole = _buildQueries$5[2],
    findAllByRole = _buildQueries$5[3],
    findByRole = _buildQueries$5[4]

  var getTestIdAttribute = function () {
    return getConfig().testIdAttribute
  }

  function queryAllByTestId() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key]
    }

    checkContainerType.apply(void 0, args)
    return queryAllByAttribute.apply(void 0, [getTestIdAttribute()].concat(args))
  }

  var getMultipleError$7 = function (c, id) {
    return 'Found multiple elements by: [' + getTestIdAttribute() + '="' + id + '"]'
  }

  var getMissingError$6 = function (c, id) {
    return 'Unable to find an element by: [' + getTestIdAttribute() + '="' + id + '"]'
  }

  var queryAllByTestIdWithSuggestions = wrapAllByQueryWithSuggestion(
    queryAllByTestId,
    queryAllByTestId.name,
    'queryAll',
  )

  var _buildQueries$6 = buildQueries(queryAllByTestId, getMultipleError$7, getMissingError$6),
    queryByTestId = _buildQueries$6[0],
    getAllByTestId = _buildQueries$6[1],
    getByTestId = _buildQueries$6[2],
    findAllByTestId = _buildQueries$6[3],
    findByTestId = _buildQueries$6[4]

  var queries$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    queryAllByLabelText: queryAllByLabelTextWithSuggestions,
    queryByLabelText: queryByLabelText,
    getAllByLabelText: getAllByLabelTextWithSuggestions,
    getByLabelText: getByLabelTextWithSuggestions,
    findAllByLabelText: findAllByLabelText,
    findByLabelText: findByLabelText,
    queryByPlaceholderText: queryByPlaceholderText,
    queryAllByPlaceholderText: queryAllByPlaceholderTextWithSuggestions,
    getByPlaceholderText: getByPlaceholderText,
    getAllByPlaceholderText: getAllByPlaceholderText,
    findAllByPlaceholderText: findAllByPlaceholderText,
    findByPlaceholderText: findByPlaceholderText,
    queryByText: queryByText,
    queryAllByText: queryAllByTextWithSuggestions,
    getByText: getByText,
    getAllByText: getAllByText,
    findAllByText: findAllByText,
    findByText: findByText,
    queryByDisplayValue: queryByDisplayValue,
    queryAllByDisplayValue: queryAllByDisplayValueWithSuggestions,
    getByDisplayValue: getByDisplayValue,
    getAllByDisplayValue: getAllByDisplayValue,
    findAllByDisplayValue: findAllByDisplayValue,
    findByDisplayValue: findByDisplayValue,
    queryByAltText: queryByAltText,
    queryAllByAltText: queryAllByAltTextWithSuggestions,
    getByAltText: getByAltText,
    getAllByAltText: getAllByAltText,
    findAllByAltText: findAllByAltText,
    findByAltText: findByAltText,
    queryByTitle: queryByTitle,
    queryAllByTitle: queryAllByTitleWithSuggestions,
    getByTitle: getByTitle,
    getAllByTitle: getAllByTitle,
    findAllByTitle: findAllByTitle,
    findByTitle: findByTitle,
    queryByRole: queryByRole,
    queryAllByRole: queryAllByRoleWithSuggestions,
    getAllByRole: getAllByRole,
    getByRole: getByRole,
    findAllByRole: findAllByRole,
    findByRole: findByRole,
    queryByTestId: queryByTestId,
    queryAllByTestId: queryAllByTestIdWithSuggestions,
    getByTestId: getByTestId,
    getAllByTestId: getAllByTestId,
    findAllByTestId: findAllByTestId,
    findByTestId: findByTestId,
  })

  /**
   * @typedef {{[key: string]: Function}} FuncMap
   */

  /**
   * @param {HTMLElement} element container
   * @param {FuncMap} queries object of functions
   * @param {Object} initialValue for reducer
   * @returns {FuncMap} returns object of functions bound to container
   */

  function getQueriesForElement(element, queries$1$1, initialValue) {
    if (queries$1$1 === void 0) {
      queries$1$1 = queries$1
    }

    if (initialValue === void 0) {
      initialValue = {}
    }

    return Object.keys(queries$1$1).reduce(function (helpers, key) {
      var fn = queries$1$1[key]
      helpers[key] = fn.bind(null, element)
      return helpers
    }, initialValue)
  }

  var eventMap = {
    // Clipboard Events
    copy: {
      EventType: 'ClipboardEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    cut: {
      EventType: 'ClipboardEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    paste: {
      EventType: 'ClipboardEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    // Composition Events
    compositionEnd: {
      EventType: 'CompositionEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    compositionStart: {
      EventType: 'CompositionEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    compositionUpdate: {
      EventType: 'CompositionEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    // Keyboard Events
    keyDown: {
      EventType: 'KeyboardEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        charCode: 0,
        composed: true,
      },
    },
    keyPress: {
      EventType: 'KeyboardEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        charCode: 0,
        composed: true,
      },
    },
    keyUp: {
      EventType: 'KeyboardEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        charCode: 0,
        composed: true,
      },
    },
    // Focus Events
    focus: {
      EventType: 'FocusEvent',
      defaultInit: {
        bubbles: false,
        cancelable: false,
        composed: true,
      },
    },
    blur: {
      EventType: 'FocusEvent',
      defaultInit: {
        bubbles: false,
        cancelable: false,
        composed: true,
      },
    },
    focusIn: {
      EventType: 'FocusEvent',
      defaultInit: {
        bubbles: true,
        cancelable: false,
        composed: true,
      },
    },
    focusOut: {
      EventType: 'FocusEvent',
      defaultInit: {
        bubbles: true,
        cancelable: false,
        composed: true,
      },
    },
    // Form Events
    change: {
      EventType: 'Event',
      defaultInit: {
        bubbles: true,
        cancelable: false,
      },
    },
    input: {
      EventType: 'InputEvent',
      defaultInit: {
        bubbles: true,
        cancelable: false,
        composed: true,
      },
    },
    invalid: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: true,
      },
    },
    submit: {
      EventType: 'Event',
      defaultInit: {
        bubbles: true,
        cancelable: true,
      },
    },
    reset: {
      EventType: 'Event',
      defaultInit: {
        bubbles: true,
        cancelable: true,
      },
    },
    // Mouse Events
    click: {
      EventType: 'MouseEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        button: 0,
        composed: true,
      },
    },
    contextMenu: {
      EventType: 'MouseEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    dblClick: {
      EventType: 'MouseEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    drag: {
      EventType: 'DragEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    dragEnd: {
      EventType: 'DragEvent',
      defaultInit: {
        bubbles: true,
        cancelable: false,
        composed: true,
      },
    },
    dragEnter: {
      EventType: 'DragEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    dragExit: {
      EventType: 'DragEvent',
      defaultInit: {
        bubbles: true,
        cancelable: false,
        composed: true,
      },
    },
    dragLeave: {
      EventType: 'DragEvent',
      defaultInit: {
        bubbles: true,
        cancelable: false,
        composed: true,
      },
    },
    dragOver: {
      EventType: 'DragEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    dragStart: {
      EventType: 'DragEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    drop: {
      EventType: 'DragEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    mouseDown: {
      EventType: 'MouseEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    mouseEnter: {
      EventType: 'MouseEvent',
      defaultInit: {
        bubbles: false,
        cancelable: false,
        composed: true,
      },
    },
    mouseLeave: {
      EventType: 'MouseEvent',
      defaultInit: {
        bubbles: false,
        cancelable: false,
        composed: true,
      },
    },
    mouseMove: {
      EventType: 'MouseEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    mouseOut: {
      EventType: 'MouseEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    mouseOver: {
      EventType: 'MouseEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    mouseUp: {
      EventType: 'MouseEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    // Selection Events
    select: {
      EventType: 'Event',
      defaultInit: {
        bubbles: true,
        cancelable: false,
      },
    },
    // Touch Events
    touchCancel: {
      EventType: 'TouchEvent',
      defaultInit: {
        bubbles: true,
        cancelable: false,
        composed: true,
      },
    },
    touchEnd: {
      EventType: 'TouchEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    touchMove: {
      EventType: 'TouchEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    touchStart: {
      EventType: 'TouchEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    // UI Events
    scroll: {
      EventType: 'UIEvent',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    // Wheel Events
    wheel: {
      EventType: 'WheelEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    // Media Events
    abort: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    canPlay: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    canPlayThrough: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    durationChange: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    emptied: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    encrypted: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    ended: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    loadedData: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    loadedMetadata: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    loadStart: {
      EventType: 'ProgressEvent',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    pause: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    play: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    playing: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    progress: {
      EventType: 'ProgressEvent',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    rateChange: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    seeked: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    seeking: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    stalled: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    suspend: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    timeUpdate: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    volumeChange: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    waiting: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    // Image Events
    load: {
      EventType: 'UIEvent',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    error: {
      EventType: 'Event',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    // Animation Events
    animationStart: {
      EventType: 'AnimationEvent',
      defaultInit: {
        bubbles: true,
        cancelable: false,
      },
    },
    animationEnd: {
      EventType: 'AnimationEvent',
      defaultInit: {
        bubbles: true,
        cancelable: false,
      },
    },
    animationIteration: {
      EventType: 'AnimationEvent',
      defaultInit: {
        bubbles: true,
        cancelable: false,
      },
    },
    // Transition Events
    transitionEnd: {
      EventType: 'TransitionEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
      },
    },
    // pointer events
    pointerOver: {
      EventType: 'PointerEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    pointerEnter: {
      EventType: 'PointerEvent',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    pointerDown: {
      EventType: 'PointerEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    pointerMove: {
      EventType: 'PointerEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    pointerUp: {
      EventType: 'PointerEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    pointerCancel: {
      EventType: 'PointerEvent',
      defaultInit: {
        bubbles: true,
        cancelable: false,
        composed: true,
      },
    },
    pointerOut: {
      EventType: 'PointerEvent',
      defaultInit: {
        bubbles: true,
        cancelable: true,
        composed: true,
      },
    },
    pointerLeave: {
      EventType: 'PointerEvent',
      defaultInit: {
        bubbles: false,
        cancelable: false,
      },
    },
    gotPointerCapture: {
      EventType: 'PointerEvent',
      defaultInit: {
        bubbles: false,
        cancelable: false,
        composed: true,
      },
    },
    lostPointerCapture: {
      EventType: 'PointerEvent',
      defaultInit: {
        bubbles: false,
        cancelable: false,
        composed: true,
      },
    },
    // history events
    popState: {
      EventType: 'PopStateEvent',
      defaultInit: {
        bubbles: true,
        cancelable: false,
      },
    },
  }
  var eventAliasMap = {
    doubleClick: 'dblClick',
  }

  Object.keys(eventMap).forEach(function (key) {
    var _eventMap$key = eventMap[key],
      EventType = _eventMap$key.EventType,
      defaultInit = _eventMap$key.defaultInit
    var eventName = key.toLowerCase()
  }) // function written after some investigation here:

  Object.keys(eventAliasMap).forEach(function (aliasKey) {})
  /* eslint complexity:["error", 9] */

  var debug = function (element, maxLength, options) {
    return Array.isArray(element)
      ? element.forEach(function (el) {
          return logDOM(el, maxLength, options)
        })
      : logDOM(element, maxLength, options)
  }

  var screen =
    typeof document !== 'undefined' && document.body
      ? getQueriesForElement(document.body, queries$1, {
          debug: debug,
        })
      : Object.keys(queries$1).reduce(
          function (helpers, key) {
            helpers[key] = function () {
              throw new TypeError(
                'For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error',
              )
            }

            return helpers
          },
          {
            debug: debug,
          },
        )

  exports.__moduleExports = queries
  exports.getNodeText = getNodeText

  return exports
})({})
