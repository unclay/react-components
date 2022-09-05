import { exec, execSync } from 'child_process';

// lessOptions: { math: 'always' }
// exec('lessc src/style/weui.less lib/css/weui.css --math=always', function(err, st) {
//   console.log(err, st);
// });

execSync('lessc src/components/toast/index.less lib/toast/index.css --math=always');
execSync('lessc src/components/toast/index.less lib/action-sheet/index.css --math=always');