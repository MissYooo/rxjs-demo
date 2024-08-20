import { Observable } from "rxjs";

const observable = new Observable(subscribe => {
  subscribe.next(1)
  subscribe.next(2)
  const timer = setTimeout(() => {
    subscribe.next(3)
    subscribe.complete()
  }, 1000)
  const unsubscribe = () => {
    console.log('自定义unsubscribe')
    clearTimeout(timer)
  }
  return unsubscribe
})

console.log('订阅前')
const subscription = observable.subscribe({
  next(x) {
    console.log(`获取值: ${x}`)
  },
  error(err) {
    console.log('出错了', err)
  },
  complete() {
    console.log('完成')
  }
})

/* observable.subscribe(x => {
  console.log(`获取值: ${x}`)
}) */
// 取消订阅
subscription.unsubscribe()
console.log('订阅后')