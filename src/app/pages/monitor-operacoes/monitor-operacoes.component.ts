import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Declarante, DeclaranteService } from '../../services/declarante.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeclaracaoDialogComponent } from '../../components/dialogs/declaracao-dialog/declaracao-dialog.component';



@Component({
  selector: 'app-monitor-operacoes',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatFormFieldModule,
    MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatDialogModule],
  templateUrl: './monitor-operacoes.component.html',
  styleUrl: './monitor-operacoes.component.css'
})

export class MonitorOperacoesComponent implements OnInit , AfterViewInit {

  displayedColumns: string[] = ['atualizado', 'documento', 'nome', 'email', 'telefone', 'btn-visualizar'];
  dataSource: MatTableDataSource<Declarante>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private declaranteService : DeclaranteService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(){
    const response = this.declaranteService.getAllDeclarantes().subscribe(
      data => {
        this.dataSource.data = data
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public formatarData(dataString:string) {
    if(!dataString)return '';
    const partes = dataString.split("-");
    const dataFormatada = partes[2] + "/" + partes[1] + "/" + partes[0];
    
    return dataFormatada;
  }

  openDialog(documento:string){
    const dialogRef = this.dialog.open(DeclaracaoDialogComponent, {
      data: {documento: documento}});
  }
}
