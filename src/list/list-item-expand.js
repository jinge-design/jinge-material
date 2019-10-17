import './list-item-expand.scss';

import {
  Component,
  NOTIFY,
  setImmediate,
  AFTER_RENDER,
  BEFORE_DESTROY,
  GET_CONTEXT,
  GET_REF,
  DOM_ON
} from 'jinge';
import {
  LIST_PROVIDER
} from './list';

export class ListItemExpand extends Component {
  static get template() {
    return `
<!--
  import { ListItemContent } from './list-item-content.js';
-->

<div
  ref:item
  class="md-list-item-expand\${className ? ' ' + className : ''}\${showContent ? ' md-active' : ''}"
>
  <ListItemContent
    e:disabled="disabled || !ripple"
  >
    <_slot slot-use:default />

    <md-icon-keyboard_arrow_down class="md-list-expand-icon" />
  </ListItemContent>

  <div
    class="md-list-expand"
    style="height: \${showContent ? 'auto' : '0'}"
  >
    <_slot slot-use:expand />
  </div>
</div>
`;
  }

  constructor(attrs) {
    super(attrs);
    this.ripple = attrs.ripple !== false;
    this.disabled = attrs.disabled;
    this.className = attrs.class;

    this.expanded = attrs.expanded;
    this._List = this[GET_CONTEXT](LIST_PROVIDER);
    this._List.pushExpandable(this);
  }

  get expanded() {
    return this._expanded;
  }

  set expanded(v) {
    if (this._expanded === v) return;
    this._expanded = v;
    if (v) this.open();
    else this.close();
  }

  get showContent() {
    return this._showCnt;
  }

  set showContent(v) {
    if (this._showCnt === v) return;
    this._showCnt = v;
    this[NOTIFY]('update.expanded', v);
    setImmediate(() => {
      this[NOTIFY](v ? 'expanded' : 'collapsed');
    });
    if (v && this._List) {
      this._List.expandATab(this);
    }
  }

  [AFTER_RENDER]() {
    const el = this[GET_REF]('item').children[0];
    this[DOM_ON](el, 'click', this._onClick);
    if (this.expanded) {
      this.open();
    }
  }

  [BEFORE_DESTROY]() {
    this._List.removeExpandable(this);
    this._List = null;
  }

  _onClick() {
    this.toggleExpand();
  }

  // fetchStyle() {
  //   return new Promise(resolve => {
  //     setImmediate(() => {
  //       let fullHeight = 0;

  //       if (!this.showContent) {
  //         fullHeight = 'auto';
  //       }

  //       this.expandHeight = fullHeight;
  //       resolve();
  //     });
  //   });
  // }

  toggleExpand() {
    // this.fetchStyle().then(() => {
    this.showContent = !this.showContent;
    // });
  }

  open() {
    if (this.showContent) {
      return false;
    }

    // this.fetchStyle().then(() => {
    this.showContent = true;
    // });
  }

  close() {
    if (!this.showContent) {
      return false;
    }

    // this.fetchStyle().then(() => {
    this.showContent = false;
    // });
  }
}
