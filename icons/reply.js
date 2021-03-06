import {
  Icon
} from '../src/icon';

const __svg_IconBaselineReply = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>`;

export class IconBaselineReply extends Icon {
  get svg() {
    return __svg_IconBaselineReply;
  }
}

export class IconOutlinedReply extends Icon {
  get svg() {
    return __svg_IconBaselineReply;
  }
}

export class IconRoundReply extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 9V7.41c0-.89-1.08-1.34-1.71-.71L3.7 11.29c-.39.39-.39 1.02 0 1.41l4.59 4.59c.63.63 1.71.19 1.71-.7V14.9c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>`;
  }
}

export class IconSharpReply extends Icon {
  get svg() {
    return __svg_IconBaselineReply;
  }
}

export class IconTwotoneReply extends Icon {
  get svg() {
    return __svg_IconBaselineReply;
  }
}