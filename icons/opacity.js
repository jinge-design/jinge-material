import {
  Icon
} from '../src/icon';

const __svg_IconBaselineOpacity = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"/></svg>`;

export class IconBaselineOpacity extends Icon {
  get svg() {
    return __svg_IconBaselineOpacity;
  }
}

export class IconOutlinedOpacity extends Icon {
  get svg() {
    return __svg_IconBaselineOpacity;
  }
}

export class IconRoundOpacity extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.66 8l-4.95-4.94c-.39-.39-1.02-.39-1.41 0L6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"/></svg>`;
  }
}

export class IconSharpOpacity extends Icon {
  get svg() {
    return __svg_IconBaselineOpacity;
  }
}

export class IconTwotoneOpacity extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.24 9.65L12 5.27 7.76 9.6C6.62 10.73 6.01 12 6 14h12c-.01-2-.62-3.23-1.76-4.35z" opacity=".3"/><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"/></svg>`;
  }
}