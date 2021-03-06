import pkg from './package.json';
import graphql from '@kocal/rollup-plugin-graphql';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

function generateBaseConfig(pkg) {
    return {
        input: 'src/index.ts',
        output: [
            {
                file: pkg.main,
                format: 'cjs'
            },
            {
                file: pkg.module,
                format: 'es'
            }
        ],
        external: [
            ...Object.keys(pkg.dependencies || {})
        ],
        plugins: [
            typescript({
                // eslint-disable-next-line global-require
                typescript: require('typescript')
            }),
            terser()
        ]
    };
}

const baseConfig = generateBaseConfig(pkg);
baseConfig.plugins.push(
    graphql()
);

export default baseConfig;