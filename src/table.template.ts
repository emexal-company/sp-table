import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { Table } from './table.component';

import '@spectrum/sp-icon';
import './tablehead.component';
import './tablerow.component';
import './tablecell.component';

export default function template(this: Table) {

    return html`
    <table class="spectrum-Table">
        <slot></slot>
    </table>
    `;
}