import buble from 'rollup-plugin-buble';
import config from './rollup.config';

config.entry = 'src/index.js';
config.plugins = [ buble() ];

export default config;
