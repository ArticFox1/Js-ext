(function(Scratch) {
  "use strict";
  //Variables

  //Functions
  function sum(v) {
    v.reduce(function (x, y) {
      return x + y;
    }, 0)
    return v
  }
  

  //Extension Functions
  function vec2(v) {
    return new Float32Array(v)
  }
  function vec3(v) {
    return new Float32Array(v)
  }
  function vec4(v) {
    return new Float32Array(v)
  }
  function length(v) {
    return sum(v)/v.length
  }
  function normalize(v) {

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
            text: "vec2 [X] [Y]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            blockShape: Scratch.BlockShape.SQUARE,
            allowDropAnywhere: false,
            arguments: {
              X: {type: Scratch.ArgumentType.NUMBER, exemptFromNormalization: true},
              Y: {type: Scratch.ArgumentType.NUMBER, exemptFromNormalization: true}
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
              X: {type: Scratch.ArgumentType.NUMBER, exemptFromNormalization: true},
              Y: {type: Scratch.ArgumentType.NUMBER, exemptFromNormalization: true},
              Z: {type: Scratch.ArgumentType.NUMBER, exemptFromNormalization: true}
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
              X: {type: Scratch.ArgumentType.NUMBER, exemptFromNormalization: true},
              Y: {type: Scratch.ArgumentType.NUMBER, exemptFromNormalization: true},
              Z: {type: Scratch.ArgumentType.NUMBER, exemptFromNormalization: true},
              W: {type: Scratch.ArgumentType.NUMBER, exemptFromNormalization: true}
            }
          },
          "---",
          { blockType: Scratch.BlockType.LABEL, text: "Properties" },
          {
            opcode: "extLength",
            text: "length of [V]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: false,
            arguments: {
              V: {
                shape: Scratch.BlockShape.SQUARE,
                type: Scratch.ArgumentType.ANY,
                exemptFromNormalization: true
              }
            }
          },
          {
            opcode: "extNormal",
            text: "unit of [V]",
            disableMonitor: true,
            blockType: Scratch.BlockType.REPORTER,
            allowDropAnywhere: false,
            arguments: {
              V: {
                shape: Scratch.BlockShape.SQUARE,
                type: Scratch.ArgumentType.ANY,
                exemptFromNormalization: true
              }
            }
          },
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
                text: "Length",
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
      return vec2([args.X,args.Y])
    }
    extVec3(args) {
      return vec3([args.X,args.Y,args.Z])
    }
    extVec4(args) {
      return vec4([args.X,args.Y,args.Z,args.W])
    }
    extLength(args) {
      return length(args.V)
    }
    extNormal(args) {
      return args.V
    }
  }
  
  let extension = new Extension();
  // Thanks to ExtForge,
  // PenguinMod Docs, 
  // and the pm Vectors extension made by jwklong.
  // This extension would not have been possible without these

  Scratch.extensions.register(extension);
})(Scratch);