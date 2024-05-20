import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { DeclaranteService } from '../../../services/declarante.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-declaracao-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatIconModule, MatListModule],
  templateUrl: './declaracao-dialog.component.html',
  styleUrl: './declaracao-dialog.component.css'
})
export class DeclaracaoDialogComponent implements OnInit{

  informacoes:any;

  constructor(
    public dialogRef: MatDialogRef<DeclaracaoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private declaranteService : DeclaranteService
  ){}

  async ngOnInit(){
    const response = await this.declaranteService.getDeclaranteById(this.data.documento).subscribe(
      data => {
        this.informacoes = data
      });
  }
}
