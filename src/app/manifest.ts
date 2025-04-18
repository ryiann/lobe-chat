import { kebabCase } from 'lodash-es';
import type { MetadataRoute } from 'next';

import { BRANDING_NAME } from '@/const/branding';
import { manifestModule } from '@/server/manifest';

const manifest = (): MetadataRoute.Manifest | any => {
  return manifestModule.generate({
    description: `${BRANDING_NAME} brings you the best UI experience for ChatGPT, Claude, Gemini, and OLLaMA.`,
    icons: [
      {
        purpose: 'any',
        sizes: '192x192',
        url: 'https://cdn.funtui.com/icon-192x192.png',
      },
      {
        purpose: 'maskable',
        sizes: '192x192',
        url: '/icons/icon-192x192.maskable.png',
      },
      {
        purpose: 'any',
        sizes: '512x512',
        url: 'https://cdn.funtui.com/icon-512x512.png',
      },
      {
        purpose: 'maskable',
        sizes: '512x512',
        url: '/icons/icon-512x512.maskable.png',
      },
    ],
    id: kebabCase(BRANDING_NAME),
    name: BRANDING_NAME,
    screenshots: [],
  });
};

export default manifest;
