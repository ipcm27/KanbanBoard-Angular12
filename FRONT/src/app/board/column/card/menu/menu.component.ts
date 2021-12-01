import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() id!: string;
  @Input() card!: Card;
  openEditForm: boolean = false;

  @Output() mudouValor = new EventEmitter();

  showForm: boolean = false;
  cardForm: FormGroup = new FormGroup({
    titulo: new FormControl(),
    conteudo: new FormControl(),
  });

  constructor(private route: ActivatedRoute, private service: CardService) {}

  ngOnInit(): void {}

  onDeleteCard() {
    this.service.deleteCard(this.id).subscribe((p) => {
      this.service.cardsChanged.next(p);
    });
  }

  onEditCard() {
    this.openEditForm = !this.openEditForm;
    this.mudouValor.emit(this.openEditForm.toString());
  }

  updateCard() {
    this.service
      .updateCard(
        this.id,
        this.cardForm.value.titulo,
        this.cardForm.value.conteudo,
        this.card.lista
      )
      .subscribe((p) => {
        this.service.cardsChanged.next(p);
      });
  }
}
