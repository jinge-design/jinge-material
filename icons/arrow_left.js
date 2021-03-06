import {
  Icon
} from '../src/icon';

const __svg_IconBaselineArrowLeft = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 7l-5 5 5 5V7z"/></svg>`;

export class IconBaselineArrowLeft extends Icon {
  get svg() {
    return __svg_IconBaselineArrowLeft;
  }
}

export class IconOutlinedArrowLeft extends Icon {
  get svg() {
    return __svg_IconBaselineArrowLeft;
  }
}

export class IconRoundArrowLeft extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.29 8.71L9.7 11.3c-.39.39-.39 1.02 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z"/></svg>`;
  }
}

export class IconSharpArrowLeft extends Icon {
  get svg() {
    return __svg_IconBaselineArrowLeft;
  }
}

export class IconTwotoneArrowLeft extends Icon {
  get svg() {
    return __svg_IconBaselineArrowLeft;
  }
}