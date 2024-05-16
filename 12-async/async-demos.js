(() => {
    // sync
    function f1Sync(){
        console.log('[f1Sync] started')
        console.log("[f1Sync] completed");
    }
    function f2Sync() {
      console.log("[f2Sync] started");
      console.log("[f2Sync] completed");
    }
    function f3Sync() {
      console.log("[f3Sync] started");
      console.log("[f3Sync] completed");
    }

    /* 
    function runSync(){
        f1Sync()
        f2Sync()
        f3Sync()
    }; 
    */

    const syncFns = [f1Sync, f2Sync, f3Sync];

    function runSync(){
        for (let idx = 0; idx < syncFns.length; idx++){
            syncFns[idx]();
        }
    }
    window['runSync'] = runSync;

    // Async
    function f1Async(next) {
      console.log("[f1Async] started");
      setTimeout(()=> {
        console.log("[f1Async] completed");
        if (typeof next === 'function')
            next()
      },5000)
      
    }
    function f2Async(next) {
      console.log("[f2Async] started");
      setTimeout(()=> {
        console.log("[f2Async] completed");
        if (typeof next === "function") next();
      },3000)
      
    }
    function f3Async(next) {
      console.log("[f3Async] started");
      setTimeout(()=> {
        console.log("[f3Async] completed");
        if (typeof next === "function") next();
      },4000)
      
    }

    /* 
    function runAsync() {
      f1Async(function(){
        f2Async(function(){
            f3Async()
        })
      })
    } 
    */

    const asyncFns = [f1Async, f2Async, f3Async];

    function runAsync(){
        function exec(fns){
            const first = fns[0],
                next = function(){
                    exec(fns.slice(1))
                }
            if (typeof first === 'function')
                first(next);
        }
        exec(asyncFns)
    }

    window["runAsync"] = runAsync;
})()