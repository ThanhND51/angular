import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  filter = 'XEM_TAT_CA';
  show = true;
  english;
  vnese;
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];
  pushWord() {
    this.arrWords.unshift({id: this.arrWords.length + 1, en: this.english, vn: this.vnese, memorized: false});
    this.english = '';
    this.vnese = '';
    this.show = !this.show;
  }
  remove(id: number) {
    for(let i in this.arrWords) {
      if (this.arrWords[i].id === id) {
        this.arrWords.splice(parseInt(i), 1)
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
