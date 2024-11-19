function testStatus(funcName = 'all') {
  console.log('--- JSTools Status ---');

  const originalConsoleLog = console.log;
  const originalConsoleError = console.error;
  const originalConsoleWarn = console.warn;
  const originalConsoleInfo = console.info;

  let logOutput = '';
  let errorOutput = '';
  let warnOutput = '';
  let infoOutput = '';

  console.log = (msg) => { logOutput += msg; };
  console.error = (msg) => { errorOutput += msg; };
  console.warn = (msg) => { warnOutput += msg; };
  console.info = (msg) => { infoOutput += msg; };

  const testPrintFunction = () => {
    console.log('Testing print function...');
    print('Print test log', 'log');
    print('Print test error', 'error');
    print('Print test warn', 'warn');
    print('Print test info', 'info');

    if (logOutput.includes('] Print test log') &&
        logOutput.includes('LOG - [') &&
        errorOutput.includes('] Print test error') &&
        errorOutput.includes('ERROR - [') &&
        warnOutput.includes('] Print test warn') &&
        warnOutput.includes('WARN - [') &&
        infoOutput.includes('] Print test info') &&
        infoOutput.includes('INFO - [')) {
      console.log('Print function is working correctly.');
    } else {
      console.error('Print function has been altered.');
    }
  };

  if (funcName === 'all' || funcName === 'print') {
    testPrintFunction();
  }

  console.log = originalConsoleLog;
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
  console.info = originalConsoleInfo;

  console.log('Test completed.');

  // Return the captured outputs or a summary
  return {
    logOutput,
    errorOutput,
    warnOutput,
    infoOutput
  };
}
