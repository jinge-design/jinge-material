import {
  Component
} from 'jinge';

import _sty from './about.scss';

export class PageAbout extends Component {
  static get template() {
    return `
<!-- import { PageContainer } from '../components/page-container.js' -->
<PageContainer centered _t:title="关于">
  <section class="page-container-section">
    <h2 class="md-headline">Jinge Material</h2>
    <strong><_t>构建在 Jinge 框架上的 Material Design 组件库</_t></strong>
  </section>

  <section class="page-container-section">
    <h2 class="md-title"><_t>作者</_t></h2>
    <div class="author-card">
      <div class="author-card-info">
        <span>Yuhang Ge</span>
        <div class="author-card-links">
          <a href="https://github.com/YuhangGe" target="_blank" rel="noopener">GitHub</a>
          <a href="mailto:abeyuhang@gmail.com" target="_blank" rel="noopener">Email</a>
        </div>
      </div>
    </div>
  </section>

  <section class="page-container-section">
    <h2 class="md-title"><_t>项目起源</_t></h2>
    <p>
    <_t>
      在长期的业务项目研发中，我探索并开发了一个和主流 mvvm 框架的核心都不同的 <a target="_blank" href="https://github.com/YuhangGe/jinge">Jinge</a> 框架。
      为了验证这个框架的能力，我决定在这个框架上开发一个 UI 组件库。
    </_t>
    </p>
    <p>
    <_t>
      考虑到主要是为了快速验证 Jinge 框架的能力，并在组件库开发的过程中同步地不断完善这个框架，而不想在组件本身的开发上耗费过多精力，
      我决定直接从 <a target="_blank" href="https://vuematerial.io">Vue Material</a> 这个项目分叉（Fork）。
    </_t>
    </p>
    <p>
    <_t>
      但由于 Jinge 框架和 Vue 框架除了在功能和使用方式上都保持了现代 mvvm 框架的一致性外，
      核心几乎完全不同，因此从 Vue Material 项目分叉后，会需要把整个项目除了 scss 样式之外的代码几乎全部重写。
      因此我并没有采用在 Github 平台上直接分叉（Fork）该项目的方式，而是另起炉灶新开了 Jinge Material 仓库。
      所以更准确的说法是，Jinge Materail 项目移植（Port）自 Vue Material 项目。
    </_t>
    </p>
  </section>
</PageContainer>`;
  }

  static get style() {
    return _sty;
  }
}
