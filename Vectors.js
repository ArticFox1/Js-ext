import * as Vector from "C:/Users/onlin/OneDrive/Documents/GitHub/Js-ext/VectorArrayMath"
(async function(Scratch) {
  "use strict";
  //Extension Class
  class Extension {
    getInfo() {
      return {
        id: "vector",
        name: "Vectors",
        color1: "#0fbd8c",
        blocks: [
          //Declarations
          { blockType: Scratch.BlockType.LABEL, text: "Declarations" },
          {
            opcode: "extVec2",
            text: "Vector2 [X] [Y]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              X: {"type": "number"},
              Y: {"type": "number"}
            }
          },
          {
            opcode: "extVec3",
            text: "Vector3 [X] [Y] [Z]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              X: {"type": "number"},
              Y: {"type": "number"},
              Z: {"type": "number"}
            }
          },
          {
            opcode: "extVec4",
            text: "Vector4 [X] [Y] [Z] [W]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              X: {"type": "number"},
              Y: {"type": "number"},
              Z: {"type": "number"},
              W: {"type": "number"}
            }
          },
          "---", //Arithmatic
          { blockType: Scratch.BlockType.LABEL, text: "Arithmetic" },
          {
            opcode: "extAdd",
            text: "[A] + [B]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              A: {type: "string",
                 defaultValue: "[1,2]"},
              B: {type: "string",
                 defaultValue: "[3,4]"}
            }
          },
          {
            opcode: "extSub",
            text: "[A] - [B]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              A: {type: "string",
                 defaultValue: "[2,0]"},
              B: {type: "string",
                 defaultValue: "[4,1]"}
            }
          },
          {
            opcode: "extMul",
            text: "[A] * [B]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              A: {type: "string",
                 defaultValue: "[1,0]"},
              B: {type: "string",
                 defaultValue: "[4,7]"}
            }
          },
          {
            opcode: "extDiv",
            text: "[A] / [B]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              A: {type: "string",
                 defaultValue: "[2,6]"},
              B: {type: "string",
                 defaultValue: "[0,4]"}
            }
          },
          "---", //Properties
          { blockType: Scratch.BlockType.LABEL, text: "Properties" },
          {
            opcode: "extGetItem",
            text: "Get [ITEM] of [VECTOR]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              ITEM: {menu: "vectorItem",
                    defaultValue: 0},
              VECTOR: {type: "string",
                      defaultValue: "[5,3]"}
            }
          },
          {
            opcode: "extLength",
            text: "Length of [VECTOR]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              VECTOR: {type: "string",
                      defaultValue: "[0,0]"}
            }
          },
          {
            opcode: "extTypeOf",
            text: "Type of [VECTOR]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              VECTOR: {type: "string",
                      defaultValue: "[0,0,0]"}
            }
          },
          "---", //Methods
          { blockType: Scratch.BlockType.LABEL, text: "Methods" },
          {
            opcode: "extDot",
            text: "[A] dot [B]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              A: {type: "string",
                 defaultValue: "[1,1]"},
              B: {type: "string",
                 defaultValue: "[-1,-1]"}
            }
          },
          {
            opcode: "extUnitMag",
            text: "[MENU] of [VECTOR]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              MENU: {menu: "unitMag",
                    defaultValue: "Unit"},
              VECTOR: {type: "string",
                 defaultValue: "[1,1]"}
            }
          },
          "---", //Swizzles
          { blockType: Scratch.BlockType.LABEL, text: "Swizzles" },
          {
            opcode: "extSwizzle",
            text: "Swizzle [VECTOR] with [PATTERN]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              VECTOR: {type: "string",
                 defaultValue: "[2,4,6]"},
              PATTERN: {type: "string",
                 defaultValue: "yxz"}
            }
          },
          //Todo, add this later
          /*"---", //Angles
          { blockType: Scratch.BlockType.LABEL, text: "Angles" },
          {
            //opcode: "extSwizzle",
            text: "Angle of [VECTOR]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            arguments: {
              VECTOR: {type: "string",
                 defaultValue: "[2,5]"},
            }
          }*/
        ],
        menus: {
          vectorItem: {
            acceptReporters: false,
            items: [
              {
                text: "x",
                value: 0
              },
              {
                text: "y",
                value: 1
              },
              {
                text: "z",
                value: 2
              },
              {
                text: "w",
                value: 3
              }
            ]
          },
          unitMag: {
            acceptReporters: false,
            items: [
              {
                text: "Unit",
                value: true
              },
              {
                text: "Magnitude",
                value: false
              }
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
    extVec2(args) {
      return vec2(args);
    }
    extVec3(args) {
      return vec3(args);
    }
    extVec4(args) {
      return vec4(args);
    }
    //Arithmatic
    extAdd(args) {
      return toString(add(parse(args.A),parse(args.B)));
    }
    extSub(args) {
      return toString(sub(parse(args.A),parse(args.B)));
    }
    extMul(args) {
      return toString(mul(parse(args.A),parse(args.B)));
    }
    extDiv(args) {
      return toString(div(parse(args.A),parse(args.B)));
    }
    //Properties
    extGetItem(args) {
      return getItem(parse(args.VECTOR),args.ITEM);
    }
    extLength(args) {
      return length(parse(args.VECTOR));
    }
    extTypeOf(args) {
      return typeOf(parse(args.VECTOR));
    }
    extDot(args) {
      return dot(parse(args.A),parse(args.B));
    }
    extUnitMag(args) {
      if (args.MENU) {
        return toString(unit(parse(args.VECTOR)));
      }
      return magnitude(parse(args.VECTOR));
    }
    extSwizzle(args) {
      return toString(swizzle(parse(args.VECTOR),args.PATTERN.toLowerCase()));
    }
  }
  
  let extension = new Extension();
  // Thanks to ExtForge,
  // PenguinMod Docs, 
  // and the pm Vectors extension made by jwklong.
  // This extension would not have been possible without these

  Scratch.extensions.register(extension);
})(Scratch);