import { html } from 'lit-element';
import { DemoTable } from './demo-table.component';

import '@spectrum/sp-table';
import '@spectrum/sp-table';
import '@spectrum/sp-table';
import '@spectrum/sp-table';
import '@spectrum/sp-table';
import '@spectrum/sp-table';


import '@spectrum/sp-container';


export default function template(this: DemoTable) {
  return html`
  <sp-container>
      <sp-rule medium label="table - Standard"></sp-rule>

      <sp-demo width="500">
        <pre>
          <sp-table>
            <sp-tablehead>
              <sp-tablecellhead title="title1"></sp-tablecellhead>
              <sp-tablecellhead title="title2"></sp-tablecellhead>
              <sp-tablecellhead title="title3"></sp-tablecellhead>
            </sp-tablehead>           
            <sp-tablebody>
              <sp-tablerow>
                <sp-tablecell>element01</sp-tablecell>
                <sp-tablecell>element02</sp-tablecell>
                <sp-tablecell>element03</sp-tablecell>
              </sp-tablerow>
              <sp-tablerow>
                <sp-tablecell>element11</sp-tablecell>
                <sp-tablecell>element12</sp-tablecell>
                <sp-tablecell>element13</sp-tablecell>
              </sp-tablerow>
              <sp-tablerow>
                <sp-tablecell>element21</sp-tablecell>
                <sp-tablecell>element22</sp-tablecell>
                <sp-tablecell>element23</sp-tablecell>
              </sp-tablerow>
            </sp-tablebody>
          </sp-table>
        </pre>
      </sp-demo>
    </sp-container>
  `;
}
