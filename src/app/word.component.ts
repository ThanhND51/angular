import { Component } from '@angular/core';

@Component({
    selector: 'app-word', //tao HTML tag
    templateUrl: './word.component.html',
    styleUrls: ['./word.component.css']
})

export class WordComponent {
    en = 'Hello';
    vn = 'Xin chao';
}