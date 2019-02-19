import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <user-list>
      <user #first>Lee</user>
      <user>Hyoda</user>
      <user>Seo</user>
    </user-list>
  `,
  styles: []
})
export class AppComponent {
  title = 'framework-content-child-children';
}
