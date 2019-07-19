import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCarouselComponent } from './todo-carousel.component';

describe('TodoCarouselComponent', () => {
  let component: TodoCarouselComponent;
  let fixture: ComponentFixture<TodoCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
