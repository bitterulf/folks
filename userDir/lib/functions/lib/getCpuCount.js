// name: Unnamed function
// outputs: 1
const os = global.get('osModule');
return { payload: os.cpus().length };
