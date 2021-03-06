import {
  Icon
} from '../src/icon';

const __svg_IconBaselineDone = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>`;

export class IconBaselineDone extends Icon {
  get svg() {
    return __svg_IconBaselineDone;
  }
}

export class IconOutlinedDone extends Icon {
  get svg() {
    return __svg_IconBaselineDone;
  }
}

export class IconRoundDone extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z"/></svg>`;
  }
}

export class IconSharpDone extends Icon {
  get svg() {
    return __svg_IconBaselineDone;
  }
}

export class IconTwotoneDone extends Icon {
  get svg() {
    return __svg_IconBaselineDone;
  }
}