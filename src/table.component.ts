import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import tableStyles from './table.styles';
import template from './table.template';

@customElement('sp-table')
export class Table extends Base {
  public static componentStyles = tableStyles;

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-table': Table;
  }
}
