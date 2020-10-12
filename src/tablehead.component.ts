import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import tableheadStyles from './tablehead.styles';
import template from './tablehead.template';

import { Table } from '@spectrum/sp-table';

@customElement('sp-tablehead')
export class TableHead extends Base {
    public static componentStyles = [Table.componentStyles, tableheadStyles];

    @property({ type: String }) public title: string = '';

    protected render() {
        return template.call(this);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sp-tablehead': TableHead;
    }
}
