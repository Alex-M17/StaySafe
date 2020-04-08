import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasFalsasComponent } from './noticias-falsas.component';

describe('NoticiasFalsasComponent', () => {
  let component: NoticiasFalsasComponent;
  let fixture: ComponentFixture<NoticiasFalsasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasFalsasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasFalsasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
