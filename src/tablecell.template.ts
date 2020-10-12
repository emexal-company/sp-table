import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { TableCell } from './tablecell.component';

import '@spectrum/sp-icon';
import './tablerow.component';
import './tablehead.component';

export default function template(this: TableCell) {

    return html`
        <td class="spectrum-Table-cell" tabindex="0">
            <slot></slot>
        </td>
    `;
}