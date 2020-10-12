import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { TableBody } from './tablebody.component';

import '@spectrum/sp-icon';
import './tablecell.component';
import './tablehead.component';

export default function template(this: TableBody) {

    return html`
    <tbody class="spectrum-Table-body">
        <slot></slot>
    </tbody>
    `;
}