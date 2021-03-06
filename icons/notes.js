import {
  Icon
} from '../src/icon';

export class IconBaselineNotes extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"/></svg>`;
  }
}

const __svg_IconOutlinedNotes = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"/></svg>`;

export class IconOutlinedNotes extends Icon {
  get svg() {
    return __svg_IconOutlinedNotes;
  }
}

export class IconRoundNotes extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1zM4 18h10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM20 6H4c-.55 0-1 .45-1 1v.01c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1z"/></svg>`;
  }
}

export class IconSharpNotes extends Icon {
  get svg() {
    return __svg_IconOutlinedNotes;
  }
}

export class IconTwotoneNotes extends Icon {
  get svg() {
    return __svg_IconOutlinedNotes;
  }
}