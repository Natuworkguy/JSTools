function jstools_v1() {
   function print(msg, type) {
     if (type === 'error') {
       console.error(msg);
     } else if (type === 'log') {
       console.log(msg);
     } else {
       console.error('NNOS JSTools: Print: The type parameter must be either "log" or "error".');
     }
   }
  function status() {
     console.log('--- JSTools Status ---');
     console.log('Testing print function...');
     const originalConsoleLog = console.log;
     const originalConsoleError = console.error;
     let logOutput = '';
     let errorOutput = '';
     console.log = (msg) => { 
       logOutput += msg;
     };
     console.error = (msg) => { 
       errorOutput += msg;
     };
     print('{Print test line}', 'log');
     print('{Print test line 2}', 'error');
     console.log = originalConsoleLog;
     console.error = originalConsoleError;
     if (logOutput !== '{Print test line}' || errorOutput !== '{Print test line 2}') {
      console.error('Print function has been altered.');
     } else {
      console.log('Print function is working correctly.');
     }
      console.log('Test completed.');
  }
  return { 
      print,
      status
  };
}
const jstools = jstools_v1();
