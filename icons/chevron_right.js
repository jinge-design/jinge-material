import {
  Icon
} from '../src/icon';

export class IconBaselineChevronRight extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>`;
  }
}

const __svg_IconOutlinedChevronRight = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>`;

export class IconOutlinedChevronRight extends Icon {
  get svg() {
    return __svg_IconOutlinedChevronRight;
  }
}

export class IconRoundChevronRight extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/></svg>`;
  }
}

export class IconSharpChevronRight extends Icon {
  get svg() {
    return __svg_IconOutlinedChevronRight;
  }
}

export class IconTwotoneChevronRight extends Icon {
  get svg() {
    return __svg_IconOutlinedChevronRight;
  }
}