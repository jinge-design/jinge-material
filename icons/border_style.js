import {
  Icon
} from '../src/icon';

const __svg_IconBaselineBorderStyle = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z"/></svg>`;

export class IconBaselineBorderStyle extends Icon {
  get svg() {
    return __svg_IconBaselineBorderStyle;
  }
}

export class IconOutlinedBorderStyle extends Icon {
  get svg() {
    return __svg_IconBaselineBorderStyle;
  }
}

export class IconRoundBorderStyle extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 5v15c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2zm16 4h2V7h-2v2z"/></svg>`;
  }
}

export class IconSharpBorderStyle extends Icon {
  get svg() {
    return __svg_IconBaselineBorderStyle;
  }
}

export class IconTwotoneBorderStyle extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 19h2v2h-2zm0-8h2v2h-2zm0 4h2v2h-2zm-4 4h2v2h-2zM3 21h2V5h16V3H3zM19 7h2v2h-2zm-8 12h2v2h-2zm-4 0h2v2H7z"/></svg>`;
  }
}