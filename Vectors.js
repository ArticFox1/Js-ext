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
      return new Float32Array([args.X,args.Y]);
    }
    extVec3(args) {
      return new Float32Array([args.X,args.Y,args.Z]);
    }
    extVec4(args) {
      return new Float32Array([args.X,args.Y,args.Z,args.W]);
    }
  }
  
  let extension = new Extension();
  // Thanks to ExtForge,
  // PenguinMod Docs, 
  // and the pm Vectors extension made by jwklong.
  // This extension would not have been possible without these

  Scratch.extensions.register(extension);
})(Scratch);