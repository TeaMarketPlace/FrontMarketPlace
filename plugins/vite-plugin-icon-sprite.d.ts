declare module './vite-plugin-icon-sprite' {

import { Plugin } from 'vite';
import { FSWatcher } from 'fs';


interface IconSpritePlugin {
  (): Plugin;
}


interface Plugin {
  name: string;
  buildStart: () => Promise<void>;
  configureServer: (server: Server) => void;
}

interface Server {
  watcher: FSWatcher & {
    add: (path: string) => void;
    on: (event: string, callback: (path: string) => Promise<void>) => void;
  };
}


declare const IconSpritePlugin: IconSpritePlugin;

export default IconSpritePlugin;
}

export{}