import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { JarService } from '../jar.service';

@Component({
  selector: 'app-jar',
  templateUrl: './jar.component.html',
  styleUrls: ['./jar.component.css']
})
export class JarComponent implements OnInit {

  result : String  = ""

  constructor(
    private route: ActivatedRoute,
    private jarService: JarService,
    private location: Location
  ) {}

  ngOnInit(): void {
  }

  async runJar() {
    await this.jarService.runJar()
    this.result = this.jarService.result
  }

}
