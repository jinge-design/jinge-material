import {
  Icon
} from '../src/icon';

const __svg_IconBaselineSupport = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M19.46,9.12l-2.78,1.15 c-0.51-1.36-1.58-2.44-2.95-2.94l1.15-2.78C16.98,5.35,18.65,7.02,19.46,9.12z M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3 S13.66,15,12,15z M9.13,4.54l1.17,2.78c-1.38,0.5-2.47,1.59-2.98,2.97L4.54,9.13C5.35,7.02,7.02,5.35,9.13,4.54z M4.54,14.87 l2.78-1.15c0.51,1.38,1.59,2.46,2.97,2.96l-1.17,2.78C7.02,18.65,5.35,16.98,4.54,14.87z M14.88,19.46l-1.15-2.78 c1.37-0.51,2.45-1.59,2.95-2.97l2.78,1.17C18.65,16.98,16.98,18.65,14.88,19.46z"/></g></svg>`;

export class IconBaselineSupport extends Icon {
  get svg() {
    return __svg_IconBaselineSupport;
  }
}

export class IconOutlinedSupport extends Icon {
  get svg() {
    return __svg_IconBaselineSupport;
  }
}

export class IconRoundSupport extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M19.46,9.12l-2.78,1.15 c-0.51-1.36-1.58-2.44-2.95-2.94l1.15-2.78C16.98,5.35,18.65,7.02,19.46,9.12z M12,15c-1.66,0-3-1.34-3-3s1.34-3,3-3s3,1.34,3,3 S13.66,15,12,15z M9.13,4.54l1.17,2.78c-1.38,0.5-2.47,1.59-2.98,2.97L4.54,9.13C5.35,7.02,7.02,5.35,9.13,4.54z M4.54,14.87 l2.78-1.15c0.51,1.38,1.59,2.46,2.97,2.96l-1.17,2.78C7.02,18.65,5.35,16.98,4.54,14.87z M14.88,19.46l-1.15-2.78 c1.37-0.51,2.45-1.59,2.95-2.97l2.78,1.17C18.65,16.98,16.98,18.65,14.88,19.46z"/></g></svg>`;
  }
}

export class IconSharpSupport extends Icon {
  get svg() {
    return __svg_IconBaselineSupport;
  }
}

export class IconTwotoneSupport extends Icon {
  get svg() {
    return `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M10.3,7.32L9.13,4.54C7.02,5.35,5.35,7.02,4.54,9.13l2.78,1.15C7.83,8.9,8.92,7.82,10.3,7.32z" opacity=".3"/><path d="M7.32,13.72l-2.78,1.15c0.81,2.1,2.48,3.78,4.59,4.59l1.17-2.78C8.91,16.18,7.83,15.09,7.32,13.72z" opacity=".3"/><path d="M16.67,10.27l2.78-1.15c-0.81-2.1-2.48-3.77-4.58-4.58l-1.15,2.78C15.09,7.83,16.17,8.9,16.67,10.27z" opacity=".3"/><path d="M16.68,13.71c-0.5,1.37-1.58,2.46-2.95,2.97l1.15,2.78c2.1-0.81,3.77-2.48,4.58-4.58L16.68,13.71z" opacity=".3"/><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M14.87,4.54 c2.1,0.81,3.77,2.48,4.58,4.58l-2.78,1.15c-0.51-1.36-1.58-2.44-2.95-2.94L14.87,4.54z M9.13,4.54l1.17,2.78 c-1.38,0.5-2.47,1.59-2.98,2.97L4.54,9.13C5.35,7.02,7.02,5.35,9.13,4.54z M9.13,19.46c-2.1-0.81-3.78-2.48-4.59-4.59l2.78-1.15 c0.51,1.38,1.59,2.46,2.97,2.96L9.13,19.46z M9,12c0-1.66,1.34-3,3-3s3,1.34,3,3s-1.34,3-3,3S9,13.66,9,12z M14.88,19.46 l-1.15-2.78c1.37-0.51,2.45-1.59,2.95-2.97l2.78,1.17C18.65,16.98,16.98,18.65,14.88,19.46z"/></g></g></svg>`;
  }
}