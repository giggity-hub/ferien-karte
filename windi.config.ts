import {defineConfig} from 'windicss/helpers';
import colors from 'windicss/colors'
import { color } from 'd3-color';

const customColorNames = ['sommer', 'herbst', 'weihnachten', 'ostern', 'pfingsten', 'unterrichtsfrei', 'winter', 'halbjahr', 'other']

// const customColors = {
//     sommer: colors.amber[400],
//     herbst: colors.orange[500],
//     weihnachten: colors.blue[500],
//     ostern: colors.green[500],
//     pfingsten: colors.green[500],
//     unterrichtsfrei: colors.purple[500],
//     winter: colors.blue[500],
//     halbjahr: colors.blue[500],
//     other: colors.purple[500],
//   }

  const customColors = {
    sommer: {
        DEFAULT: colors.amber[400],
        active: colors.amber[500],
    },
    herbst: {
        DEFAULT: colors.orange[400],
        active: colors.orange[500],
    },
    weihnachten: {
        DEFAULT:colors.blue[400],
        active:colors.blue[500],
    },
    ostern: {
        DEFAULT:colors.green[400],
        active:colors.green[500],
    },
    pfingsten: {
        DEFAULT:colors.green[400],
        active:colors.green[500],
    },
    unterrichtsfrei: {
        DEFAULT:colors.purple[400],
        active:colors.purple[500],
    },
    winter: {
        DEFAULT:colors.blue[400],
        active:colors.blue[500],
    },
    halbjahr: {
        DEFAULT:colors.blue[400],
        active:colors.blue[500],
    },
    other: {
        DEFAULT:colors.purple[400],
        active:colors.purple[500],
    },
  }


export default defineConfig({
    safelist: customColorNames.flatMap( color => [
        `bg-${color}`,`bg-${color}-active`, 
        `text-${color}`, `text-${color}-active`,
        `fill-${color}`, `fill-${color}-active`
    ]),
    theme: {
        extend: {
            colors: {
                ...customColors,
            }
        },
        boxShadow: {
            'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
            'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.12)', // If a DEFAULT shadow is provided, it will be used for the non-suffixed shadow utility.
            'md': '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12)',
            'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
            'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.08)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.6)',
            'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.12)',
            'none': 'none',
        },
        // make custom colors available as stroke-sommer etc.
        // fill: customColors
    }
})