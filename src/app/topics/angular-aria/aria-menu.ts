import { Component, viewChild } from '@angular/core';
import { Menu, MenuContent, MenuItem, MenuTrigger } from '@angular/aria/menu';
import { OverlayModule } from '@angular/cdk/overlay';
@Component({
  selector: 'app-aria-menu',
  templateUrl: 'aria-menu.html',
  styleUrls: ['aria-menu.css'],
  imports: [Menu, MenuContent, MenuItem, MenuTrigger, OverlayModule],
})
export class AriaMenu {
  formatMenu = viewChild<Menu<string>>('formatMenu');
  categorizeMenu = viewChild<Menu<string>>('categorizeMenu');
}
