import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import tablecellStyles from './tablecell.styles';
import template from './tablecell.template';

import { Table } from '@spectrum/sp-table';

@customElement('sp-tablecell')
export class TableCell extends Base {
    public static componentStyles = [ Table.componentStyles, tablecellStyles ];

    protected render() {
        return template.call(this);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sp-tablecell': TableCell;
    }
}
