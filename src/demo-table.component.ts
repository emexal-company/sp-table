import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-table.styles';
import template from './demo-table.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Table } from '@spectrum/sp-table';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-table')
export class DemoTable extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-table': DemoTable;
  }
}
