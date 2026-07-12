// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yaericure.github.io',
  base: '/sapiens',
  integrations: [
    starlight({
      title: '人類大歷史',
      description: '從認知革命到科學革命——十萬年人類史的大框架,看懂我們如何走到今天。',
      defaultLocale: 'root',
      locales: { root: { label: '正體中文', lang: 'zh-TW' } },
      customCss: ['./src/styles/theme.css', './src/styles/sidebar-num.css'],
      lastUpdated: false,
      pagination: true,
      sidebar: [
        {
          label: '認知革命',
          items: [
            { label: '人類：一種也沒什麼特別的動物', slug: 'unit00' },
            { label: '知善惡樹', slug: 'unit01' },
            { label: '亞當和夏娃的一天', slug: 'unit02' },
            { label: '毀天滅地的人類洪水', slug: 'unit03' },
          ],
        },
        {
          label: '農業革命',
          items: [
            { label: '史上最大騙局', slug: 'unit04' },
            { label: '蓋起監獄高牆', slug: 'unit05' },
            { label: '大腦記憶過載', slug: 'unit06' },
            { label: '歷史從無正義', slug: 'unit07' },
          ],
        },
        {
          label: '人類的融合統一',
          items: [
            { label: '歷史的方向', slug: 'unit08' },
            { label: '金錢的氣味', slug: 'unit09' },
            { label: '帝國的願景', slug: 'unit10' },
            { label: '宗教的法則', slug: 'unit11' },
            { label: '成敗的祕密', slug: 'unit12' },
          ],
        },
        {
          label: '科學革命',
          items: [
            { label: '發現自己的無知', slug: 'unit13' },
            { label: '科學與帝國的聯姻', slug: 'unit14' },
            { label: '資本主義教條', slug: 'unit15' },
            { label: '工業的巨輪', slug: 'unit16' },
            { label: '一場永遠的革命', slug: 'unit17' },
            { label: '從此過著幸福快樂的日子', slug: 'unit18' },
            { label: '智人末日', slug: 'unit19' },
          ],
        },
        { label: '變成神的這種動物', slug: 'unit20' },
      ],
    }),
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});
