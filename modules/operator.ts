import { of, map, first, interval, take, filter, delay, tap } from "rxjs";

// of(1, 2, 3).pipe(map(x => x * 2)).subscribe(console.log)
// of(1, 2, 3).pipe(first()).subscribe(console.log)
// of(1, 2, 3).pipe(map(x => x * 2), first()).subscribe(console.log)

// interval(500).pipe(map(x => x + 1), take(10)).subscribe(console.log)

let time = Date.now()
of('hello').pipe(tap(() => { time = Date.now() }), delay(1000), tap(() => { console.log(`After ${Date.now() - time}`) })).subscribe(console.log)