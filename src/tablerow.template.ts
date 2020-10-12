import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { TableRow } from './tablerow.component';

import '@spectrum/sp-icon';
import './tablecell.component';
import './tablehead.component';

export default function template(this: TableRow) {

    return html`
        <tr class="spectrum-Table-row">
            <slot></slot>
        </tr>
    `;
}