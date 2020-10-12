
  import { customElement, property } from 'lit-element';
  import { Base } from '@spectrum/sp-base';
  import tablebodyStyles from './tablebody.styles';
  import template from './tablebody.template';
  
  import { Table } from '@spectrum/sp-table';

  @customElement('sp-tablebody')
  export class TableBody extends Base {
    public static componentStyles = [Table.componentStyles, tablebodyStyles];

    protected render() {
      return template.call(this);
    }
  }
  
  declare global {
    interface HTMLElementTagNameMap {
      'sp-tablebody': TableBody;
    }
  }
  