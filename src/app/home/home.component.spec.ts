import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('Home Component', () => {
  const html = '<my-home></my-home>';

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [HomeComponent, TestComponent]});
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(true).toBe(true)
  });

});

@Component({selector: 'my-test', template: ''})
class TestComponent { }
