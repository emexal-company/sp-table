import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import tablecellheadStyles from './tablecellhead.styles';
import template from './tablecellhead.template';
import { Table } from '@spectrum/sp-table';

@customElement('sp-tablecellhead')
export class TableCellHead extends Base {
    public static componentStyles = [ Table.componentStyles, tablecellheadStyles ];

    @property({ type: String }) public title: string = '';

    protected render() {
        return template.call(this);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sp-tablecellhead': TableCellHead;
    }
}
