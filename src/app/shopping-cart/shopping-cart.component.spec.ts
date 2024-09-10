import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IgxButtonDirective } from 'igniteui-angular';
import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ShoppingCartComponent, NoopAnimationsModule, FormsModule, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent, IgxButtonDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
