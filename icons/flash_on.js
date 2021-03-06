import {
  Icon
} from '../src/icon';

export class IconBaselineFlashOn extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>`;
  }
}

const __svg_IconOutlinedFlashOn = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l3-8z"/></svg>`;

export class IconOutlinedFlashOn extends Icon {
  get svg() {
    return __svg_IconOutlinedFlashOn;
  }
}

export class IconRoundFlashOn extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 3v9c0 .55.45 1 1 1h2v7.15c0 .51.67.69.93.25l5.19-8.9c.39-.67-.09-1.5-.86-1.5H13l2.49-6.65c.25-.65-.23-1.35-.93-1.35H8c-.55 0-1 .45-1 1z"/></svg>`;
  }
}

export class IconSharpFlashOn extends Icon {
  get svg() {
    return __svg_IconOutlinedFlashOn;
  }
}

export class IconTwotoneFlashOn extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 10h-4l3-8H7v11h3v9z"/></svg>`;
  }
}