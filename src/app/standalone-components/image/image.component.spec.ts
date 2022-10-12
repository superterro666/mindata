import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageComponent } from './image.component';

describe('ImageComponent', () => {
  let component: ImageComponent;
  let fixture: ComponentFixture<ImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    
 xit('save file', () => {
       
        var parts = [
            new Blob(['you construct a file...'], { type: 'text/plain' }),
            ' Same way as you do with blob',
            new Uint16Array([33])
        ];

       
        var file = new File(parts, 'sample.txt', {
            lastModified: 11111, 
            type: "overide/mimetype" 
        });
        var event = new CustomEvent("eventName", {
            detail: {
              target : file  
              } 
        });
          
        const response = component.saveFile(event);
        expect(response).not.toBeNull();

    });

    it('open file', () => {
        expect(component).toBeTruthy();
    });
});
