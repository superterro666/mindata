import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-image',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
    @ViewChild('image') image!: ElementRef;
    @Input() path: string | boolean |File = "https://via.placeholder.com/100x150";
    @Output() file: EventEmitter<string> = new EventEmitter<string>();


    constructor() { }

    ngOnInit(): void {
    }
    
    openFile(): void {
        this.image.nativeElement.click();
    }

    saveFile(event: any): void {
        const reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.path = reader.result as string;
                this.file.emit(this.path);
            };
        }
    }
    
}
