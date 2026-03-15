(function (Scratch) {
  "use strict";
  //Variables
  const isPen = Scratch.extensions.isPenguinMod
  const vm = Scratch.vm
  const runtime = vm.runtime
  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Must be ran unsandboxed!!!")
  }
  const menuIcon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0ODAiIGhlaWdodD0iNDgwIiB2aWV3Qm94PSIwLDAsNDgwLDQ4MCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw2MCkiPjxnIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMCw0MjB2LTQ4MGg0ODB2NDgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIi8+PHBhdGggZD0iTTE0NC41OTkwNywxNzIuNDk4NDhjLTMuOTIzMjcsLTEwLjc3NDE1IC0xOC44NzA3MiwtNjQuNjE3NTEgLTUwLjkwODAyLC02NS44MTA2OGMtNzguNzg2ODcsLTIuOTM0MjYgLTg2LjczNDY4LC0xOC45MTMzMiAtODcuNDE0MDksLTQyLjkxMDA1Yy0xLjYwOTYxLC01Ni44NTEwNiA3Ny4xOTc1NCwtNTAuNzIwODUgMTQ0Ljk0MDgxLC00OC4xNDIzMmM2OS41NTQ4NywyLjY0NzQ4IDkzLjkxOTE5LDIzMS43NDM0MyA5NS41MTgwMSwyMzEuNDU0MjdjOS43OTA1MywwLjM1NzYzIDU0Ljc1NzMsLTIxNC4yNzA5MSAxNDYuNzI2MiwtMjE2LjIzMTI2YzE5LjkwODEyLDAuMDA3MSA3OC4zMzkyNywtNi41NzU2OCA3OS40OTExMSwyNC42MzUzMmMwLjE0MjYzLDMuODY0NjkgNS4xMjA5MywzNS42MjI5MiAtMTEuNzMzMjIsMzguMDk2MTVjLTIyLjc4NDU1LDMuMzQzNDcgLTY1LjEyOTA1LDEwLjI5MDQ5IC03Ny41MTkyNywzMi4zNTc5OGMtNDcuOTI5MjksODUuMzY0MDMgLTgwLjc0MDI1LDIxNy42NDEyMSAtMTQ2LjQzOTgsMjE5Ljk2MDQxYy0zOS4wNTI1OSwxLjM3ODU2IC01Ni4yNTg5LC03My40Mzk4OCAtOTIuNjYxNzIsLTE3My40MDk3OXoiIGZpbGw9IiMwOTNmM2UiIHN0cm9rZT0ibm9uZSIvPjxwYXRoIGQ9Ik0xNTQuMjc4NDgsMTcyLjk0NzMyYy0zLjY4ODUyLC0xMC4xMjk0OCAtMjEuNzEyODMsLTY5LjM1NTUgLTUxLjgzMzIyLC03MC40NzcyN2MtNzQuMDcyNzUsLTIuNzU4NyAtODEuNTQ1MDIsLTE1Ljc5NjA2IC04Mi4xODM3OCwtMzguMzU2OThjLTEuNTEzMywtNTMuNDQ5NDQgNjEuMzI2NzMsLTQxLjA2NzMzIDEyNS4wMTY2OCwtMzguNjQzMDljNjUuMzkzMTQsMi40ODkwNyA5NC45MTgzNCwyNDIuMzY2NTEgMTAxLjA1NDU5LDI0Mi4wOTQ2NWM5LjIwNDcyLDAuMzM2MjMgNjYuNzAzOTYsLTIzMS4yMzQ0IDE1My4xNzAwMSwtMjMzLjA3NzQ1YzE4LjcxNjk1LDAuMDA2NjggNjYuMzcxMzcsLTQuMTk2NjMgNjcuNDU0MjksMjUuMTQ2OWMwLjEzNDA5LDMuNjMzNDUgLTMuMTI3OSwyNi44NzI3NyAtMTguOTczNjEsMjkuMTk4MDJjLTIxLjQyMTI3LDMuMTQzNDIgLTYxLjIzMjEzLDEwLjk5ODUgLTcyLjg4MSwzMS43NDU2MmMtNDUuMDYxNSw4MC4yNTYzOCAtNzUuOTA5MjUsMjEzLjIyMzIxIC0xMzcuNjc3NzUsMjE1LjQwMzY1Yy0zNi43MTU5MywxLjI5NjA3IC00OC45MjE1MSwtNjkuMDQ1NjkgLTgzLjE0NjIxLC0xNjMuMDM0MDN6IiBmaWxsPSIjMGZiZDhjIiBzdHJva2U9Im5vbmUiLz48cGF0aCBkPSJNMTQ5LjMxODU2LDQzLjczNDAxYy0zLjk4NDksMTYuNjU2OTMgLTU3LjcyNDkyLDEwLjgyODcxIC04MS4zNzAzNCwxMC44Mjg3MWMtMjMuNjQ1NDEsMCAtMzIuNDQ4ODUsLTIuMTQ1MjYgLTMwLjQ2NzUxLC05Ljk1NjdjMS4xNDU3NCwtNC41MTcxMSA2LjU3MTgyLC0xMS4yODE4NiAxNS45NTY3NCwtMTMuMDAwNzljNy43Mjg5OSwtMS40MTU2MyA0OS44OTU4LC0yLjgzMzQ0IDc1Ljg1MjQzLDEuNDIwMTljMTIuNDExNTksMi4wMzM5NSAyMS4yNzE5NSw1LjUxMTcgMjAuMDI4NjgsMTAuNzA4NTl6IiBmaWxsPSIjNmRjYzk2IiBzdHJva2U9Im5vbmUiLz48cGF0aCBkPSJNMzA4LjYzNzkxLDE4My4yNzQ1OGMtOS44MzI1NiwyNy45NTg2NSAtMzMuMDQxNzgsODcuODUyNSAtNDcuODE4NjgsMTAzLjAwNTE5Yy0zLjgxMjM0LDMuOTA5MyAtNS43NjkxLC01LjM5Mzk1IC03LjIxMTczLC01LjkwMTI5Yy03LjAzNDM2LC0yLjQ3Mzg2IDIzLjM0NjA0LC02NS4yMDU4NyAzNS43MTUzMywtMTAwLjM3NzY4YzEyLjM2OTI5LC0zNS4xNzE4MSAzMC40Njc3NCwtNjYuNDE2MTEgMzcuNTAyMSwtNjMuOTQyMjVjMS41MjA5MSwwLjUzNDg3IDguMzgxNSwwLjkxNTIzIDguNDIyNTksMy43NjYyMmMwLjE0ODk1LDEwLjMzNTE2IC0xNi45MTQ3LDM1Ljg4MjUzIC0yNi42MDk2MSw2My40NDk4MXoiIGZpbGw9IiM2ZGNjOTYiIHN0cm9rZT0ibm9uZSIvPjxwYXRoIGQ9Ik00NDYuNzI4NDgsNTIuMjk0OTRjMC4zMDQwNSw1LjA5Mjg3IC0xNi40MjcwMiw0Ljg4MjUzIC0zNC40NDc5Nyw1Ljk1ODRjLTE4LjAyMDk1LDEuMDc1ODggLTM1LjcxODcyLDUuODcyOTkgLTM2LjAyMjc3LDAuNzgwMTJjLTAuMTEwOTcsLTEuODU4ODUgMC4zMTA2NSwtOS44NjQwMSAzLjU3MjA4LC0xMS41MTE5NWM1LjY3NDI2LC0yLjg2NzExIDE5LjkwNjEzLC01LjYwNjcgMzEuMzQ5NjMsLTYuMjg5OWMxMC42NzY5OSwtMC42Mzc0MyAyMy40NDI5MywtMC4zMTg2OSAzMC4yMDcyMiwyLjY1MDYzYzQuNjUyNjksMi4wNDIzOSA1LjIxNzksNi4zMzcyMyA1LjM0MTgxLDguNDEyNjl6IiBmaWxsPSIjNmRjYzk2IiBzdHJva2U9Im5vbmUiLz48cGF0aCBkPSJNMTc3LjU5MjksMTg5Ljg3MzQ4YzkuMjQwOTEsMjguMjIxNTIgNS40NjUxLDI5LjY5NjYzIC0xLjIyMTksMzUuOTUyODljLTEuMzEzMzEsMS4yMjg3MSAtNC43MDM3MiwtMy45OTg4NyAtNS40MDgsLTUuODM5NDljLTQuODk3MTUsLTEyLjc5ODY0IC0xMC44NzU4NSwtMjkuODA1NTMgLTE4LjIwNzYzLC01MS4zMzkwMmMtMy4yMTQ5OSwtOS40NDI0NCAtMTQuMzE3MzQsLTM1LjkyMjAxIC0yMS40ODAzOCwtNDUuNzUyNzZjLTE0LjE2MjExLC0xOS40MzY0NiAtMjYuMjkzOTgsLTIwLjE0MDU0IC0yNi4yMDQ5NCwtMjAuMTQ3NzRjNDUuNTk2OTMsLTMuNjg2MTQgNjMuMDAwMzIsNTguMDQ0NTMgNzIuNTIyODYsODcuMTI2MTF6IiBmaWxsPSIjMDQ2YTU3IiBzdHJva2U9Im5vbmUiLz48cGF0aCBkPSJNMjM4LjQ3MDIyLDI1Mi44Mzg5NWMtOS44NTcyNCwtNDEuNzkyMzUgLTcuMTMyNjEsLTM4LjY0NDE5IC00LjY1NTc4LC0zOS4yMTE0OGMwLjIzMTEyLC0wLjA1MjkzIDQuMjYyMTQsMjEuNjc0OTcgOC41MzgyLDQwLjAzMzAxYzEuMDc2ODUsNC42MjMxNSAxLjcyNzI3LDguODgxOSAyLjYzNjU4LDExLjMzODA4YzAuMzA1MDUsMC44MjM5OSAwLjc2NzgyLDEuODIyIDEuMzU0NTYsMi42MjI1M2MxLjMyNjI5LDEuODA5NTUgMi42ODM4NSwzLjQyNTUzIC0wLjMwODQ3LDMuOTA4NmMtMi4wNTg0MSwwLjMzMjMgLTQuNjg2NDMsLTYuNDg1OTQgLTcuNTY1MDgsLTE4LjY5MDczeiIgZmlsbD0iIzA0NmE1NyIgc3Ryb2tlPSJub25lIi8+PC9nPjwvZz48L3N2Zz4="
  //Functions
  function vec2(x = 0, y = x) {
    return { x: x, y: y, z: 0, w: 0, length: 2, toString: () => { return "[" + x + "," + y + "]" } }
  }
  function vec3(x = 0, y = x, z = y) {
    return { x: x, y: y, z: z, w: 0, length: 3, toString: () => { return "[" + x + "," + y + "," + z + "]" } }
  }
  function vec4(x = 0, y = x, z = y, w = z) {
    return { x: x, y: y, z: z, w: w, length: 4, toString: () => { return "[" + x + "," + y + "," + z + "," + w + "]" } }
  }
  function len1(v) {
    return v
  }
  function len2(v) {
    return Math.hypot(v.x, v.y)
  }
  function len3(v) {
    return Math.hypot(v.x, v.y, v.z)
  }
  function len4(v) {
    return Math.hypot(v.x, v.y, v.z, v.w)
  }
  function add1(a, b) {
    return a + b
  }
  function add2(a, b) {
    return vec2(a.x + b.x,
      a.y + b.y)
  }
  function add3(a, b) {
    return vec3(a.x + b.x,
      a.y + b.y,
      a.z + b.z)
  }
  function add4(a, b) {
    return vec4(a.x + b.x,
      a.y + b.y,
      a.z + b.z,
      a.w + b.w)
  }
  function sub1(a, b) {
    return a - b
  }
  function sub2(a, b) {
    return vec2(a.x - b.x,
      a.y - b.y)
  }
  function sub3(a, b) {
    return vec3(a.x - b.x,
      a.y - b.y,
      a.z - b.z)
  }
  function sub4(a, b) {
    return vec4(a.x - b.x,
      a.y - b.y,
      a.z - b.z,
      a.w - b.w)
  }
  function mul1(a, b) {
    return a * b
  }
  function mul2(a, b) {
    const av = (typeof a == "number") ? vec2(a) : a
    const bv = (typeof b == "number") ? vec2(b) : b
    return vec2((av.x ?? 1) * (bv.x ?? 1),
      (av.y ?? 1) * (bv.y ?? 1))
  }
  function mul3(a, b) {
    const av = (typeof a == "number") ? vec3(a) : a
    const bv = (typeof b == "number") ? vec3(b) : b
    return vec3((av.x ?? 1) * (bv.x ?? 1),
      (av.y ?? 1) * (bv.y ?? 1),
      (av.z ?? 1) * (bv.z ?? 1))
  }
  function mul4(a, b) {
    const av = (typeof a == "number") ? vec4(a) : a
    const bv = (typeof b == "number") ? vec4(b) : b
    return vec4((av.x ?? 1) * (bv.x ?? 1),
      (av.y ?? 1) * (bv.y ?? 1),
      (av.z ?? 1) * (bv.z ?? 1),
      (av.w ?? 1) * (bv.w ?? 1))
  }
  function div1(a, b) {
    return a / b
  }
  function div2(a, b) {
    av = (typeof a == "number") ? vec2(a) : a
    bv = (typeof b == "number") ? vec2(b) : b
    return vec2(av.x / (bv.x ?? 1),
      av.y / (bv.y ?? 1))
  }
  function div3(a, b) {
    av = (typeof a == "number") ? vec3(a) : a
    bv = (typeof b == "number") ? vec3(b) : b
    return vec3(av.x / (bv.x ?? 1),
      av.y / (bv.y ?? 1),
      av.z / (bv.z ?? 1))
  }
  function div4(a, b) {
    av = (typeof a == "number") ? vec4(a) : a
    bv = (typeof b == "number") ? vec4(b) : b
    return vec4(av.x / (bv.x ?? 1),
      av.y / (bv.y ?? 1),
      av.z / (bv.z ?? 1),
      av.w / (bv.w ?? 1))
  }
  function dot1(a, b) {
    return
  }
  function dot2(a, b) {
    return a.x * b.x + a.y * b.y
  }
  function dot3(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z
  }
  function dot4(a, b) {
    return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w
  }

  const len = [len1, len2, len3, len4]
  const add = [add1, add2, add3, add4]
  const sub = [sub1, sub2, sub3, sub4]
  const mul = [mul1, mul2, mul3, mul4]
  const div = [div1, div2, div3, div4]
  const dot = [dot1, dot2, dot3, dot4]

  //Extension Functions
  function addition(a, b) {
    const aL = a.length ?? 1
    const bL = b.length ?? 1
    return add[((aL > bL) ? aL : bL) - 1](a, b)
  }
  function subtract(a, b) {
    const aL = a.length ?? 1
    const bL = b.length ?? 1
    return sub[((aL > bL) ? aL : bL) - 1](a, b)
  }
  function multiply(a, b) {
    const aL = a.length ?? 1
    const bL = b.length ?? 1
    return mul[((aL > bL) ? aL : bL) - 1](a, b)
  }
  function divide(a, b) {
    const aL = a.length ?? 1
    const bL = b.length ?? 1
    return div[((aL > bL) ? aL : bL) - 1](a, b)
  }
  function length(v) {
    return len[(v.length ?? 1) - 1](v)
  }
  function normalize(v) {
    return divide(v, length(v))
  }
  function dotProduct(a, b) {
    const aL = a.length ?? 1
    const bL = b.length ?? 1
    return dot[((aL > bL) ? aL : bL) - 1](a, b)
  }
  //Extension Class
  class Extension {
    getInfo() {
      return {
        id: "vector",
        name: "Vectors",
        color1: "#0fbd8c",
        menuIconURI: menuIcon,
        blocks: [
          //Declarations
          {
            opcode: "extVec2",
            text: "vec2 [X] [Y]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            allowDropAnywhere: false,
            arguments: {
              X: { type: Scratch.ArgumentType.NUMBER, exemptFromNormalization: true },
              Y: { type: Scratch.ArgumentType.NUMBER, exemptFromNormalization: true }
            }
          },
          {
            opcode: "extVec3",
            text: "vec3 [X] [Y] [Z]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            allowDropAnywhere: false,
            arguments: {
              X: { type: Scratch.ArgumentType.NUMBER, exemptFromNormalization: true },
              Y: { type: Scratch.ArgumentType.NUMBER, exemptFromNormalization: true },
              Z: { type: Scratch.ArgumentType.NUMBER, exemptFromNormalization: true }
            }
          },
          {
            opcode: "extVec4",
            text: "vec4 [X] [Y] [Z] [W]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            allowDropAnywhere: false,
            arguments: {
              X: { type: Scratch.ArgumentType.NUMBER, exemptFromNormalization: true },
              Y: { type: Scratch.ArgumentType.NUMBER, exemptFromNormalization: true },
              Z: { type: Scratch.ArgumentType.NUMBER, exemptFromNormalization: true },
              W: { type: Scratch.ArgumentType.NUMBER, exemptFromNormalization: true }
            }
          },
          "---",
          { blockType: Scratch.BlockType.LABEL, text: "Arithmetic" },
          {
            opcode: "extAdd",
            text: "[A] + [B]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            allowDropAnywhere: false,
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                shape: Scratch.BlockShape.SQUARE,
                defaultValue: 0,
                exemptFromNormalization: true
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                shape: Scratch.BlockShape.SQUARE,
                defaultValue: 0,
                exemptFromNormalization: true
              }
            }
          },
          {
            opcode: "extSub",
            text: "[A] - [B]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            allowDropAnywhere: false,
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                shape: Scratch.BlockShape.SQUARE,
                defaultValue: 0,
                exemptFromNormalization: true
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                shape: Scratch.BlockShape.SQUARE,
                defaultValue: 0,
                exemptFromNormalization: true
              }
            }
          },
          {
            opcode: "extMul",
            text: "[A] * [B]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            allowDropAnywhere: false,
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                shape: Scratch.BlockShape.SQUARE,
                defaultValue: 0,
                exemptFromNormalization: true
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                shape: Scratch.BlockShape.SQUARE,
                defaultValue: 2,
                exemptFromNormalization: true
              }
            }
          },
          {
            opcode: "extDiv",
            text: "[A] / [B]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            allowDropAnywhere: false,
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                shape: Scratch.BlockShape.SQUARE,
                defaultValue: 0,
                exemptFromNormalization: true
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                shape: Scratch.BlockShape.SQUARE,
                defaultValue: 2,
                exemptFromNormalization: true
              }
            }
          },
          "---",
          { blockType: Scratch.BlockType.LABEL, text: "Properties" },
          {
            opcode: "extItem",
            text: "[ITEM] of [V]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: false,
            arguments: {
              ITEM: {
                menu: "vectorItem",
                defaultValue: "x",
                shape: Scratch.BlockShape.SQUARE,
                type: Scratch.ArgumentType.NUMBER,
                execeptFromNormalization: true
              },
              V: {
                shape: Scratch.BlockShape.SQUARE,
                defaultValue: 0,
                exemptFromNormalization: true
              }
            }
          },
          {
            opcode: "extLength",
            text: "length of [V]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: false,
            arguments: {
              V: {
                type: Scratch.ArgumentType.NUMBER,
                shape: Scratch.BlockShape.SQUARE,
                defaultValue: 0,
                exemptFromNormalization: true
              }
            }
          },
          {
            opcode: "extNormal",
            text: "unit of [V]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            allowDropAnywhere: false,
            arguments: {
              V: {
                type: Scratch.ArgumentType.NUMBER,
                shape: Scratch.BlockShape.SQUARE,
                defaultValue: 0,
                exemptFromNormalization: true
              }
            }
          },
          {
            opcode: "extString",
            text: "string of [V]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.ROUND,
            allowDropAnywhere: false,
            arguments: {
              V: {
                type: Scratch.ArgumentType.NUMBER,
                shape: Scratch.BlockShape.SQUARE,
                defaultValue: 0,
                exemptFromNormalization: true
              }
            }
          },
          "---",
          { blockType: Scratch.BlockType.LABEL, text: "Methods" },
          {
            opcode: "extDot",
            text: "[A] dot [B]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            allowDropAnywhere: false,
            arguments: {
              A: {
                type: Scratch.ArgumentType.ANY,
                shape: Scratch.BlockShape.SQUARE,
                exemptFromNormalization: true
              },
              B: {
                type: Scratch.ArgumentType.ANY,
                shape: Scratch.BlockShape.SQUARE,
                exemptFromNormalization: true
              }
            }
          },
        ],
        menus: {
          vectorItem: {
            acceptReporters: false,
            items: [
              "x",
              "y",
              "z",
              "w"
            ]
          },
          angleTypes: {
            acceptReporters: false,
            items: [
              {
                text: "Degrees",
                value: true
              },
              {
                text: "Radians",
                value: false
              }
            ]
          }
        }
      }
    }
    //Declarations
    extVec2({ X, Y }) {
      return vec2(X, Y)
    }
    extVec3({ X, Y, Z }) {
      return vec3(X, Y, Z)
    }
    extVec4({ X, Y, Z, W }) {
      return vec4(X, Y, Z, W)
    }
    //Arithmetic
    extAdd({ A, B }) {
      return addition(A, B)
    }
    extSub({ A, B }) {
      return subtract(A, B)
    }
    extMul({ A, B }) {
      console.log(A, B)
      return multiply(A, B)
    }
    extDiv({ A, B }) {
      return divide(A, B)
    }
    //Properties
    extItem({ V, ITEM }) {
      return V[ITEM]
    }
    extLength({ V }) {
      return length(V)
    }
    extNormal({ V }) {
      return normalize(V)
    }
    extString({ V }) {
      return V.toString()
    }
    //Methods
    extDot({ A, B }) {
      return dotProduct(A, B)
    }
  }

  let extension = new Extension()
  // Thanks to ExtForge,
  // PenguinMod Docs, 
  // Turbowarp Docs,
  // and the pm Vectors extension made by jwklong.
  // This extension would not have been possible without these

  Scratch.extensions.register(extension)
})(Scratch)