
  import { customElement, property } from 'lit-element';
  import { Base } from '@spectrum/sp-base';
  import tablerowStyles from './tablerow.styles';
  import template from './tablerow.template';

  import { Table } from '@spectrum/sp-table';

  @customElement('sp-tablerow')
  export class TableRow extends Base {
    public static componentStyles = [Table.componentStyles, tablerowStyles];

    protected render() {
      return template.call(this);
    }
  }

  declare global {
    interface HTMLElementTagNameMap {
      'sp-tablerow': TableRow;
    }
  }
  