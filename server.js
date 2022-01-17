import Nullstack from 'nullstack';
import Application from './src/Application';
import devtools from './plugin/devtool'

Nullstack.use(devtools);

export default Nullstack.start(Application);
