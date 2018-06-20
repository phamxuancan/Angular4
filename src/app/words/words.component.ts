import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  englishword = "";
  vnword = "";
  isShow = false;
  filterValue ="XEM_TAT_CA";
  constructor() { }

  ngOnInit() {
  }

  array_words = [
    { id: 1, en: 'action', 'vi': 'Hành động', memorized: true },
    { id: 2, en: 'remenber', 'vi': 'Nhớ', memorized: false },
    { id: 3, en: 'test', 'vi': 'Kiểm tra', memorized: false },
    { id: 4, en: 'cup', 'vi': 'Cái cốc', memorized: true },
    { id: 5, en: 'bag', 'vi': 'Cái túi', memorized: true },
    { id: 6, en: 'keyboard', 'vi': 'Bàn phím', memorized: true },
    { id: 7, en: 'computer', 'vi': 'Máy tính', memorized: false }
  ];
  addnew(){
      this.array_words.unshift({
          id: this.array_words.length + 1,
          en:this.englishword,
          vi:this.vnword,
          memorized:false
      });
      this.englishword = "";
      this.vnword = "";
      this.isShow = false;
  }
  delete(id){
    var index = this.array_words.findIndex(e =>e.id == id);
    this.array_words.splice(index,1);
  }
}
