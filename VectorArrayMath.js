(function() {
    //I am experimenting with using arrays to dynamically but quickly select the correct functions for the task at hand
    //Unfortunately for me, though, I have to make a million different functions for every edge case I want to cover
    //There's also ram issues, but I think people will be fine
    //This file will probably be a megabyte at max
    //I've seen files with tens of thousands of lines be smaller than a megabyte
    //I don't think I'll get there. Hope I don't too

    //How the architecture will work is there will be an array for each function. When a function is called, that function's array is called for the item thats in the
    //```array.length-1``` spot of the array. Scalar versions will be stacked on top so I can add 4 to the item number if there is a scalar.
    //When changing settings, a function will be called to override every function's array with new functions appropriate for the new settings.

    //Add
    function add1(a,b) {
        return [a[0]+b[0]]
    }
    function add2(a,b) {
        return [a[0]+b[0],a[1]+b[1]];
    }
    function add3(a,b) {
        return [a[0]+b[0],a[1]+b[1],a[2]+b[2]];
    }
    function add4(a,b) {
        return [a[0]+b[0],a[1]+b[1],a[2]+b[2],a[3]+b[3]];
    }
    //Sub
    function sub1(a,b) {
        return [a[0]-b[0]]
    }
    function sub2(a,b) {
        return [a[0]-b[0],a[1]-b[1]];
    }
    function sub3(a,b) {
        return [a[0]-b[0],a[1]-b[1],a[2]-b[2]];
    }
    function sub4(a,b) {
        return [a[0]-b[0],a[1]-b[1],a[2]-b[2],a[3]-b[3]];
    }
    //Mul
    function mul1(a,b) {
        return [a[0]*b[0]]
    }
    function mul2(a,b) {
        return [a[0]*b[0],a[1]*b[1]];
    }
    function mul3(a,b) {
        return [a[0]*b[0],a[1]*b[1],a[2]*b[2]];
    }
    function mul4(a,b) {
        return [a[0]*b[0],a[1]*b[1],a[2]*b[2],a[3]*b[3]];
    }
    function mulScalar1(a,b) {
        return [a[0]*b[0]] //No need to change like the others ig
    }
    function mulScalar2(a,b) {
        const m = b[0]; //Multiplier
        return [a[0]*m,a[1]*m];
    }
    function mulScalar3(a,b) {
        const m = b[0]; //Multiplier
        return [a[0]*m,a[1]*m,a[2]*m];
    }
    function mulScalar4(a,b) {
        const m = b[0]; //Multiplier
        return [a[0]*m,a[1]*m,a[2]*m,a[3]*m];
    }
    //Div
    function div1(a,b) {
        return [a[0]/b[0]]
    }
    function div2(a,b) {
        return [a[0]/b[0],a[1]/b[1]];
    }
    function div3(a,b) {
        return [a[0]/b[0],a[1]/b[1],a[2]/b[2]];
    }
    function div4(a,b) {
        return [a[0]/b[0],a[1]/b[1],a[2]/b[2],a[3]/b[3]];
    }
    function divSafe1(a,b) {
        return [b[0]==0?0:a[0]/b[0]]
    }
    function divSafe2(a,b) {
        return [b[0]==0?0:a[0]/b[0],
        b[1]==0?0:a[1]/b[1]];
    }
    function divSafe3(a,b) {
        return [b[0]==0?0:a[0]/b[0],
        b[1]==0?0:a[1]/b[1],
        b[2]==0?0:a[2]/b[2]];
    }
    function divSafe4(a,b) {
        return [b[0]==0?0:a[0]/b[0],
        b[1]==0?0:a[1]/b[1],
        b[2]==0?0:a[2]/b[2],
        b[3]==0?0:a[3]/b[3]];
    }
    function divScalar1(a,b) {
        return [a[0]/b[0]]
    }
    function divScalar2(a,b) {
        const d = 1/b[0]; //Divisor
        return [a[0]*d,a[1]*d];
    }
    function divScalar3(a,b) {
        const d = 1/b[0]; //Divisor
        return [a[0]*d,a[1]*d,a[2]*d];
    }
    function divScalar4(a,b) {
        const d = 1/b[0]; //Divisor
        return [a[0]*d,a[1]*d,a[2]*d,a[3]*d];
    }
    function divScalarSafe1(a,b) {
        return b[0]==0?[0]:[a[0]/b[0]]
    }
    function divScalarSafe2(a,b) {
        const d = b[0]==0?1:1/b[0]; //Divisor
        return b[0]==0?[0,0,0]:[a[0]*d,
        a[1]*d];
    }
    function divScalarSafe3(a,b) {
        const d = b[0]==0?1:1/b[0]; //Divisor
        return b[0]==0?[0,0,0]:[a[0]*d,
        a[1]*d,
        a[2]*d];
    }
    function divScalarSafe4(a,b) {
        const d = b[0]==0?1:1/b[0]; //Divisor
        return b[0]==0?[0,0,0,0]:[b[0]==0?0:a[0]*d,
        a[1]*d,
        a[2]*d,
        a[3]*d];
    }
    //Countof 
    function getVectorCount(v) { //Got any name ideas?
        return v.length;
    }
    //Typeof
    function getVectorType(v) {
        return ["Number","Vector2","Vector3","Vector4"][v.length-1];
    }
    //Get Item
    function getItem(v,i) {
        return v[i];
    }
    function getItemSafe(v,i) { //Not very necessary but I wanted to include it
        return v[i]??0;
    }
    //Dot
    function dot1(a,b) {
        return 0;
    }
    function dot2(a,b) {
        return a[0]*b[0]+a[1]*b[1];
    }
    function dot3(a,b) {
        return a[0]*b[0]+a[1]*b[1]+a[2]*b[2];
    }
    function dot4(a,b) {
        return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3];
    }
    //Length
    function length1(v) {
        return v[0]
    }
    function length2(v) {
        return Math.sqrt(v[0]*v[0]+v[1]*v[1]);
    }
    function length3(v) {
        return Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2]);
    }
    function length4(v) {
        return Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2]+v[3]*v[3]);
    }
    //Normalize
    function normalize1(v) {
        return v[0]
    }
    function normalize2(v) {
        return div2(v,[length2(v)])
    }
    function normalize3(v) {
        return div3(v,[length3(v)])
    }
    function normalize4(v) {
        return div4(v,[length4(v)])
    }
    function normalizeSafe1(v) {
        return v[0]
    }
    function normalizeSafe2(v) {
        return divScalarSafe2(v,[length2(v)])
    }
    function normalizeSafe3(v) {
        return divScalarSafe3(v,[length3(v)])
    }
    function normalizeSafe4(v) {
        return divScalarSafe4(v,[length4(v)])
    }
})