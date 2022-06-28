import { Component, OnInit } from '@angular/core';
import { UserModal } from '../userDetails.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  arr: any[] = [
   
  ];
  userDetail: UserModal = { name: '', gender: '', email: '', contact: '' };
  isEdit: boolean = false;
  saveIdx: number = 0;
  isAdd: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  openModel() {
    this.isEdit = true;
    this.isAdd = true;
    this.userDetail = { name: '', gender: '', email: '', contact: '' };
  }

  add() {
    this.isEdit = false;
    this.arr.push(this.userDetail);
  }
  edit(idx: number) {
    this.isEdit = true;
    this.isAdd = false;
    this.userDetail = this.arr[idx];
    this.saveIdx = idx;
  }
  close() {
    this.isEdit = false;
  }
  update() {
    this.isEdit = false;
    this.isAdd = true;
    this.arr[this.saveIdx] = this.userDetail;
  }
  delete(idx: number) {
    this.arr.splice(idx, 1);
  }
}
