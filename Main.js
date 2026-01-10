const vec2 = function(x,y) {
  return {x:Number.isFinite(x)?x:0,y:Number.isFinite(y)?y:(Number.isFinite(x)?x:0)}
}
vec2.new = function(x,y) {
  return vec2(x,y)
}
const add = function(v1,v2) {
  return vec2(v1.x+v2.x,v1.y+v2.y)
}
const addPercise = function(v1,v2) {
  return vec2(Math.sumPercise([v1.x,v2.x]),Math.sumPercise([v1.y,v2.y]))
}
const sub = function(v1,v2) {
  return vec2(v1.x-v2.x,v1.y-v2.y)
}
const mul = function(v1,v2) {
  return typeof v2=="number"?vec2(v1.x*v2,v1.y*v2):vec2(v1.x*v2.x,v1.y*v2.y)
}
const iMul = function(v1,v2) {
  return typeof v2=="number"?vec2(Math.imul(v1.x,v2),Math.imul(v1.y,v2)):vec2(Math.imul(v1.x,v2.x),Math.imul(v1.y,v2.y))
}
const div = function(v1,v2) {
  return typeof v2=="number"?vec2(v1.x/v2,v1.y/v2):vec2(v1.x/v2.x,v1.y/v2.y)
}
const dot = function(v1,v2) {
  return v1.x*v2.x+v1.y*v2.y
}
const smth = function(v1,v2) {
  return v1.x*v2.x-v1.y*v2.y
}
const length = function(v) {
  return Math.hypot(v.x,v.y)
}
const normalize = function(v) {
  return div(v,length(v))
}
const abs = function(v) {
  return vec2(Math.abs(v.x),Math.abs(v.y))
}
const sign = function(v) {
  return vec2(Math.sign(v.x),Math.sign(v.y))
}
Math.clamp = function(t,a,b) {
  return Math.max(Math.min(t,b),a)
}
const clamp = function(v1,v2,v3) {
  return vec2(Math.clamp(v1.x,typeof v2=="number"?v2:v2.x,typeof v3=="number"?v3:v3.x),Math.clamp(v1.y,typeof v2=="number"?v2:v2.y,typeof v3=="number"?v3:v3.x))
}
const sum = function(v) {
  return v.x+v.y
}
const sumPercise = function(v) {
  return Math.sumPercise([v.x,v.y])
}
const round = function(v) {
  return vec2(Math.round(v.x),Math.round(v.y))
}
const roundFrac = function(v,percision) {
  const finite = Number.isFinite(percision)
  let pow
  if (finite) {
    pow = Math.pow(10,percision)
    v=mul(v,pow)
  }
  const res = vec2(Math.round(v.x),Math.round(v.y))
  return finite?div(res,pow):res
}
let si = round(vec2(6.435,9.6754)) //Nice
console.log(si)