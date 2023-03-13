import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Actor } from '../actor';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent {

  @Input() actor!: Actor;
  @Output() deleteActor = new EventEmitter<void>();

}
