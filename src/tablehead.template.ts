import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { TableHead } from './tablehead.component';

import '@spectrum/sp-icon';
import './tablerow.component';
import './tablecell.component';

export default function template(this: TableHead) {

    return html`
    <thead class="spectrum-Table-head">
        <tr>
            <slot></slot>
        </tr>
    </thead>
    `;
}