import {
  Icon
} from '../src/icon';

export class IconBaselineFunctions extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"/></svg>`;
  }
}

const __svg_IconOutlinedFunctions = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7V4z"/></svg>`;

export class IconOutlinedFunctions extends Icon {
  get svg() {
    return __svg_IconOutlinedFunctions;
  }
}

export class IconRoundFunctions extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 4H7.56C6.7 4 6 4.7 6 5.56c0 .28.12.55.32.74L12.5 12l-6.18 5.7c-.2.19-.32.46-.32.74C6 19.3 6.7 20 7.56 20h8.94c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H11l3.59-3.59c.78-.78.78-2.05 0-2.83L11 7h5.5c.83 0 1.5-.67 1.5-1.5S17.33 4 16.5 4z"/></svg>`;
  }
}

export class IconSharpFunctions extends Icon {
  get svg() {
    return __svg_IconOutlinedFunctions;
  }
}

export class IconTwotoneFunctions extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 17h-7l5-5-5-5h7V4H6v2l6.5 6L6 18v2h12z"/></svg>`;
  }
}