(async function(Scratch) {
  "use strict";
  //Globals
  const swizMap = {x:0,y:1,z:2,w:3,
                   r:0,g:1,b:2,a:3,
                   s:0,t:1,q:2,p:3};
  const toRad = Math.pi/180;
  const toDeg = 180/Math.pi;

  let cache = new Map;

  
  //Functions
  function parse(v) {
    /*Todo: find a way to make the replace readable 
    without Regex yelling at me :<
    */
    const preV = cache.get(v);
    
    if (preV) {
      return preV;
    }
    if (Array.isArray(v)) return v;
    if (Number.isFinite(v)) return [v];
    const res = v.trim().replace(new RegExp("\\[|\\]", "g"),"").split(",").map(Number);
    cache.set(v,res);
    console.log(cache)
    return res;
  }
  function toString(array) {
    if (array.length == 1) return array[0];
    const preString = cache.get(array);
    if (preString) {
      return preString;
    }
    const str = "[" + array.join(",") + "]";
    cache.set(str,array);
    return "[" + array.join(",") + "]";
  }
  
  //Extension Functions
  function vec2(v) {
    return "["+v.X+","+v.Y+"]";
  }
  function vec3(v) {
    return "["+v.X+","+v.Y+","+v.Z+"]";
  }
  function vec4(v) {
    return "["+v.X+","+v.Y+","+v.Z+","+v.W+"]";
  }
  function add(a,b) {
    const maxLength = Math.max(a.length,b.length);
    const output = [];

    for (let i = 0; i < maxLength; i++) {
      output.push((a[i] ?? 0)+(b[i] ?? 0));
    }
    return output;
  }
  function sub(a,b) {
    const maxLength = Math.max(a.length,b.length);
    const output = [];

    for (let i = 0; i < maxLength; i++) {
      output.push((a[i] ?? 0)-(b[i] ?? 0));
    }

    return output;
  }
  function mul(a,b) {
    const maxLength = Math.max(a.length,b.length);
    if (a.length==1) {
      switch(maxLength) {
          case(1):
            return [a[0]*b[0]];
          case(2):
            return [a[0]*b[0],a[0]*b[1]];
          case(3):
            return [a[0]*b[0],a[0]*b[1],a[0]*b[2]];
          case(4):
            return [a[0]*b[0],a[0]*b[1],a[0]*b[2],a[0]*b[3]];
      }
    }
    if (b.length==1) {
      switch(maxLength) {
          case(1):
            return [a[0]*b[0]];
          case(2):
            return [b[0]*a[0],b[0]*a[1]];
          case(3):
            return [b[0]*a[0],b[0]*a[1],b[0]*a[2]];
          case(4):
            return [b[0]*a[0],b[0]*a[1],b[0]*a[2],b[0]*a[3]];
      }
    }
    const output = [];

    for (let i = 0; i < maxLength; i++) {
      output.push((a[i] ?? 1)*(b[i] ?? 1));
    }

    return output;
  }
  function div(a,b) {
    const maxLength = Math.max(a.length,b.length);
    if (b.length==1) {
      const invB = 1/b[0]
      switch(maxLength) {
          case(1):
            return [a[0]*invB];
          case(2):
            return [a[0]*invB,a[1]*invB];
          case(3):
            return [a[0]*invB,a[1]*invB,a[2]*invB];
          case(4):
            return [a[0]*invB,a[1]*invB,a[2]*invB,a[3]*invB];
      }
    }
    const output = [];

    for (let i = 0; i < maxLength; i++) {
      const div = b[i] ?? 1;
      if (div==0) {
        output.push(0);
        continue
      }
      output.push((a[i] ?? 0)/div);
    }
    return output;
  }
  function getItem(v,i) {
    return v[i] ?? 0;
  }
  function length(v) {
    return v.length;
  }
  function typeOf(v) {
    const len = v.length;
    switch(len) {
      case(1):
        return "Number"
      case(2):
        return "Vector2";
      case(3):
        return "Vector3";
      case(4):
        return "Vector4";
      default:
        console.warn("Type is NOT a vector!");
        return "Non vector";
      }
  }
  function dot(a,b) {
    const maxLength = Math.max(a.length,b.length);
    let output = 0;

    for (let i = 0; i < maxLength; i++) {
      output+=((a[i] ?? 0)*(b[i] ?? 0));
    }

    return output;
  }
  function magnitude(a) {
    let output = 0;

    for (let i = 0; i < a.length; i++) {
      output+=(a[i]*a[i]);
    }
    output = Math.sqrt(output);
    return output;
  }
  function unit(a) {
    return div(a,[magnitude(a)]);
  }
  function swizzle(v,pat) {
    const aPat = pat.split("");
    const len = aPat.length;
    const output = [];

    for (let i = 0; i < len; i++) {
      output.push(v[swizMap[aPat[i]]] ?? 0);
    }

    return output;
  }
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