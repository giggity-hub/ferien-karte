import {defineConfig} from 'windicss/helpers';
import colors from 'windicss/colors'

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
            colors: customColors
        },
        // make custom colors available as stroke-sommer etc.
        // fill: customColors
    }
})