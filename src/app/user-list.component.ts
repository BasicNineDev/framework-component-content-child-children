import {AfterContentInit, Component, ContentChild, ContentChildren, OnInit, QueryList} from '@angular/core';
import {UserComponent} from './user.component';

@Component({
  selector: 'user-list',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
    <button (click)="changeFirstUserColor()">
      첫 번째 사용자 배경색 변경
    </button>
    <button (click)="changeAllUserColor()">
      모든 사용자 배경색 변경
    </button>
  `,
  styles: []
})
export class UserListComponent implements OnInit, AfterContentInit {

  // 부모 컴포넌트가 지정한 컨텐츠 중에서 템플릿 참조 변수 first를 가진 컨턴츠를 취득한다.
  @ContentChild('first') firstChild: UserComponent;

  // 부모 컴포넌트가 지정한 컨텐츠 중에서 UserComponent 모두를 취득한다.
  @ContentChildren(UserComponent) children: QueryList<UserComponent>;

  /*
    ngAfterViewInit 은 뷰 초기화가 종료됐을 때 실행되는 컴포넌트 생명주기 메소드이다.
    @ContentChild, @ContentChildren ngAfterViewInit 이전에 초기화 된다.
    ngAfterViewInit에서 참조하는 것이 안전함.
   */
  ngAfterContentInit() {
    console.log(this.firstChild);
    this.children.forEach(child => console.log(child));
  }

  constructor() { }

  ngOnInit() {
  }

  changeFirstUserColor() {
    this.firstChild.randomizeColor();
  }

  changeAllUserColor() {
    this.children.forEach(child => child.randomizeColor());
  }

}
