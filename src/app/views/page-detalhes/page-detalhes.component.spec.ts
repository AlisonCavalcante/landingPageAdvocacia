import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetalhesComponent } from './page-detalhes.component';

describe('PageDetalhesComponent', () => {
  let component: PageDetalhesComponent;
  let fixture: ComponentFixture<PageDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
