import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { TableCellHead } from './tablecellhead.component';

import '@spectrum/sp-icon';
import './tablerow.component';
import './tablecell.component';

export default function template(this: TableCellHead) {

    return html`
    <th class="spectrum-Table-headCell is-sortable is-sorted-desc" aria-sort="descending" tabindex="0" >
        ${this.title}
        <sp-icon name="ArrowDownSmall" class="spectrum-Table-sortedIcon"></sp-icon>
    </th>
    `;
}