import {
  Icon
} from '../src/icon';

export class IconBaselineArrowDropDown extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>`;
  }
}

const __svg_IconOutlinedArrowDropDown = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5H7z"/></svg>`;

export class IconOutlinedArrowDropDown extends Icon {
  get svg() {
    return __svg_IconOutlinedArrowDropDown;
  }
}

export class IconRoundArrowDropDown extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"/></svg>`;
  }
}

export class IconSharpArrowDropDown extends Icon {
  get svg() {
    return __svg_IconOutlinedArrowDropDown;
  }
}

export class IconTwotoneArrowDropDown extends Icon {
  get svg() {
    return __svg_IconOutlinedArrowDropDown;
  }
}