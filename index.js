let principio = document.querySelector('#principal')
let container = document.querySelector('#container')
let cx1 = document.querySelector('#nota1')
let cx2 = document.querySelector('#nota2')
let cx3 = document.querySelector('#nota3')
let cxmedia = document.querySelector('#media')
let media = (2/(cx1 + cx2 + cx3))




let btn1 = document.querySelector('#botaoCalcular')
let btn2 = document.querySelector('#botaoLimpar')


btn1.addEventListener('click' ,function (e){
let n1= cx1.value
let n2= cx2.value
let n3 = cx3.value
cxmedia.value = media


console.log (n1)
console.log (n2)
console.log (n3)
console.log (media)



    e.preventDefault()
})