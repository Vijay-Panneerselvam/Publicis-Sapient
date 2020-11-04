import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-launch-program-dtls',
  templateUrl: './launch-program-dtls.component.html',
  styleUrls: ['./launch-program-dtls.component.css']
})
export class LaunchProgramDtlsComponent implements OnInit {
@Input() RecsToLoad :string;

  constructor() { }

  ngOnInit(): void {
  }

}
