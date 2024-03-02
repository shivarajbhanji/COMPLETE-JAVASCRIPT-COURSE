// suppose we have a fn which we just call once and is not called later. Instead of storing it we can immediately invoke it. Such kind of fns are called immediately invoked fn expression
 (function(){
    console.log('This will never run again');
 })();

( ()=> console.log('This will never run again')
)();