(() => {
  // Sync
  function addSync(x, y) {
    console.log(`   [@service] processing ${x} and ${y}`);
    const result = x + y;
    console.log(`   [@service] returning result`);
    return result;
  }

  function addSyncClient(x, y) {
    console.log(`[@client] invoking the service`);
    const result = addSync(x, y);
    console.log(`[@client] result = ${result}`);
  }

  window["addSyncClient"] = addSyncClient;

  // Async using callbacks
  function addAsync(x, y, callback) {
    console.log(`   [@service] processing ${x} and ${y}`);
    setTimeout(() => {
      const result = x + y;
      console.log(`   [@service] returning result`);
      callback(result);
    }, 5000);
  }

  function addAsyncClient(x, y) {
    console.log(`[@client] invoking the service`);
    addAsync(x, y, function (result) {
      console.log(`[@client] result = ${result}`);
    });
  }

  window["addAsyncClient"] = addAsyncClient;

  // Async using promise
  // (Service)
  function addAsyncPromise(x, y) {
    console.log(`   [@service] processing ${x} and ${y}`);
    const p = new Promise(function (resolveFn, rejectFn) {
      setTimeout(() => {
        const result = x + y;
        console.log(`   [@service] returning result`);
        resolveFn(result);
      }, 5000);
    });
    return p;
  }

  /* (Client) */
  /* 
    function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`);
        const p = addAsyncPromise(x, y)
        p.then(function (result) {
          console.log(`[@client] result = ${result}`);
        });
    } 
    */

  async function addAsyncPromiseClient(x, y) {
    console.log(`[@client] invoking the service`);
    const result = await addAsyncPromise(x, y);
    console.log(`[@client] result = ${result}`);
    const doubleResult = result * 2;
    return doubleResult;
  }

  window["addAsyncPromiseClient"] = addAsyncPromiseClient;

  function divideAsyncPromise(x, y) {
    console.log(`   [@service] processing ${x} and ${y}`);
    const p = new Promise(function (resolveFn, rejectFn) {
      setTimeout(() => {
        if (y === 0) {
          rejectFn(new Error("invalid arguments"));
        }
        const result = x + y;
        console.log(`   [@service] returning result`);
        resolveFn(result);
      }, 5000);
    });
    return p;
  }

  /* 
    function divideAsyncPromiseClient(x, y) {
      console.log(`[@client] invoking the service`);
      const p = divideAsyncPromise(x, y);
      p.then(function (result) {
        console.log(`[@client] result = ${result}`);
      }).catch(function(err){
        console.log("error : ", err)
      })
    }  
    */
  async function divideAsyncPromiseClient(x, y) {
    try {
      console.log(`[@client] invoking the service`);
      const result = await divideAsyncPromise(x, y);
      console.log(`[@client] result = ${result}`);
    } catch (err) {
      console.log("error : ", err);
    }
  }
  window["divideAsyncPromiseClient"] = divideAsyncPromiseClient;
})()

// client
/* 
const p = addAsyncPromise(100, 200)
p.then(function(result){ 
    //callback function invoked when the promise is "resolved" by invoking the "resolveFn"

})
p.catch(function(err){
  //callback function invoked when the promise is "rejected" by invoking the "rejectFn"
}) 
*/