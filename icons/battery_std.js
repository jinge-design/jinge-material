import {
  Icon
} from '../src/icon';

const __svg_IconBaselineBatteryStd = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>`;

export class IconBaselineBatteryStd extends Icon {
  get svg() {
    return __svg_IconBaselineBatteryStd;
  }
}

export class IconOutlinedBatteryStd extends Icon {
  get svg() {
    return __svg_IconBaselineBatteryStd;
  }
}

export class IconRoundBatteryStd extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.67 4H14V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.34 22h7.32c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>`;
  }
}

export class IconSharpBatteryStd extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 4h-3V2h-4v2H7v18h10V4z"/></svg>`;
  }
}

export class IconTwotoneBatteryStd extends Icon {
  get svg() {
    return __svg_IconBaselineBatteryStd;
  }
}