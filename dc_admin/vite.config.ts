import { defineConfig } from 'vite';
import path from 'path';
import Vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss';
//约定编程
import Pages from 'vite-plugin-pages'

import AutoImport from 'unplugin-auto-import/vite';


export default defineConfig({
    resolve:{
        alias:{
            '~/': `${path.resolve(__dirname,'src')}/`
        }
    },
    plugins:[
        Vue({
            include:[/\.vue$/]
        }),
        Unocss({
            presets:[
                presetUno(), presetAttributify(), presetIcons()
            ]
        }),
        Pages({
            extensions:['vue','md']
        }),
        AutoImport({
            imports:[
                'vue',
                'vue-router',
                'pinia'
            ]
        })
    ]
})
