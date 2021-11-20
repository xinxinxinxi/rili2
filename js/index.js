function main (timer){
  // 1.换日历头21021年11月
let year=timer.getFullYear()
let month=timer.getMonth()+1
g('time').innerText=`${year}年${month}月`

// 2.换几号几号，首先我们得确定这个月有几天，下个月月初
// 减一天就是这个月最后一天，最后一天是几这个月就有几天
const 下月初=new Date(year,month-1+1,1)
// console.log(下月初)
const 本月末时间=new Date(下月初-86400*1000)
const 本月末几号=new Date(本月末时间).getDate()
const 本月末星期几=new Date(本月末时间).getDay()
console.log('本月末几号')
console.log(本月末几号)
let days=g('#days')
// 用于计数(42天)
let n=0
const ol=g('#days')
ol.textContent=''
// 3.插入之后我们要几号和星期几对应好，怎么确定1号是周几，获取本月月初时间转为周几
var 本月初时间=new Date(year,month-1,1)
// var 本月初时间=new Date(2021,5,1)
// console.log(本月初时间)
var 本月初周几=本月初时间.getDay()
console.log('本月初周几')
// console.log(本月初周几)
// 4.确定好周几，就在前面插入几个空白li,空白li该为上个月最后几天，本月月初时间减1，2,3，。。天
for (var i=1;i<本月初周几;i++){
  let beforeLi=document.createElement('li')
  const d=new Date(本月初时间-86400*1000*i)
  beforeLi.innerText=d.getDate()
  days.prepend(beforeLi)
  beforeLi.classList.add('beforeLi')
  n=n+1
}
const today=new Date()
// 5.插入本月日期
let selectdLi
for(var i=1;i<=本月末几号;i++){
  let li=document.createElement('li')
  if(i===today.getDate()&&month===today.getMonth()+1 && year===today.getFullYear()){
    li.classList.add('calender-days-today')
  }
  li.innerText=i
  li.onclick=function(){
    if(selectdLi){
      selectdLi.classList.remove('calender-days-selected')
    }
    li.classList.add('calender-days-selected')
    selectdLi=li
  }
  days.append(li)
  n=n+1
}


// 6.日历末尾用下个月的几天补全,本月末周几就补7-几个
// const reset=7-本月末星期几
i=本月末星期几+1
 for(let j=1;j<=42-n;j++){
   let delta=i-本月末星期几
  let afterLi=document.createElement('li')
  const d=new Date(本月末时间-0+86400*1000*delta).getDate()
  afterLi.innerText=d
  days.append(afterLi)
  afterLi.classList.add('beforeLi')
  i++
 }
 now=timer
}
let now=new Date()
main(now)


// 切换到今天
const today=document.querySelector('#today')
today.onclick=()=>{
  main(new Date())
}

// 切换到上个月
// 切换上个月
const prevMonth=document.querySelector('#prevMonth')
prevMonth.onclick=function(){
  const 月初=new Date(now.getFullYear(),now.getMonth(),1)
  // main(月初-86400*1000)
  main(new Date(月初-86400*1000))
}

// 切换到下个月
const nextMonth=document.querySelector('#nextMonth')
nextMonth.onclick=function(){
  const 下月初=new Date(now.getFullYear(),now.getMonth()+1,1)
  // main(月初-86400*1000)
  main(下月初)
}
// 帮助函数
function g(select){
 return document.querySelector(select)
}
function gs(select){
  return document.querySelectorAll(select)
 }