import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MessageService } from 'primeng/api';
import { Demand } from 'src/app/core/models';
import { DemandsService } from '../demands.service';

@Component({
  selector: 'app-demands-register',
  templateUrl: './demands-register.component.html',
  styleUrls: ['./demands-register.component.scss'],
})
export class DemandsRegisterComponent {
  @Output() closeDialogEvent = new EventEmitter();
  constructor(
    private demandsService: DemandsService,
    private messageService: MessageService
  ) {}

  demand: Demand = new Demand();
  loading = false;

  checkMode(invoiceId: string | undefined): void {
    this.demand = new Demand();
    if (invoiceId) {
      this.loading = true;
      this.demandsService.findOne(invoiceId).subscribe((data) => {
        this.demand = data;
        this.demand.data_cadastro = new Date(this.demand.data_cadastro!);
        this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }
  save() {
    this.loading = true;
    if (this.demand._id) {
      this.demandsService
        .update(this.demand, this.demand._id!)
        .subscribe(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Demanda atualizada com sucesso!',
          });
          this.closeDialog();
        });
    } else {
      this.demandsService.create(this.demand).subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Demanda criada com sucesso!',
        });
        this.closeDialog();
      });
    }
  }
  closeDialog() {
    this.closeDialogEvent.emit();
  }
}
