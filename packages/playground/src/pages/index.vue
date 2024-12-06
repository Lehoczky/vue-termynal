<template>
  <v-termynal :type-delay="40" :line-delay="700" forward-button restart-button>
    <vt-input prompt="▲">npm uninstall react</vt-input>
    <vt-text>Are you sure you want to uninstall 'react'?</vt-text>
    <vt-input prompt="(y/n)" :type-delay="1000">y</vt-input>
    <vt-progress progress-char="·" />
    <vt-text>Uninstalled 'react'</vt-text>
    <vt-input prompt="▲">node</vt-input>
    <vt-input prompt=">">Array(5).fill('🦄 ')</vt-input>
    <vt-text>['🦄', '🦄', '🦄', '🦄', '🦄']</vt-text>
    <vt-input prompt="▲">cd ~/repos</vt-input>
    <vt-input prompt="▲  ~/repos">git checkout branch master</vt-input>
    <vt-input prompt="▲  ~/repos (master)">git commit -m "Fix things"</vt-input>
  </v-termynal>
</template>
