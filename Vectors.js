(function(Scratch) {
  "use strict";
  //Variables
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
      return new Float32Array([args.X,args.Y]);
    }
    extVec3(args) {
      return new Float32Array([args.X,args.Y,args.Z]);
    }
    extVec4(args) {
      return new Float32Array([args.X,args.Y,args.Z,args.W]);
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