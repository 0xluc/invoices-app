import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Demand } from 'src/app/core/models';
import { DemandsRegisterComponent } from '../demands-register/demands-register.component';
import { DemandsService } from '../demands.service';
import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-demands',
  templateUrl: './demands.component.html',
  styleUrls: ['./demands.component.scss'],
})
export class DemandsComponent implements OnInit {
  @ViewChild(DemandsRegisterComponent)
  invoiceRegisterComponent: DemandsRegisterComponent;

  constructor(
    private demandsService: DemandsService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}
  pipe = new DatePipe('en-US');
  demands: Demand[] = [];
  loading = true;
  dialogVisible = false;
  loadingReport = false;
  reportDialogVisible = false;
  client = '';
  startPeriod: Date | undefined = undefined;
  endPeriod: Date | undefined = undefined;

  ngOnInit(): void {
    this.demandsService.findAll().subscribe((data) => {
      this.demands = data.reverse();
      this.loading = false;
    });
  }
  genReport() {
    this.loadingReport = true;
    const doc = new jsPDF();
    let demandasData: any = [];
    let soma = 0;
    let demandsReverted = this.demands.slice().reverse();
    for (let demanda of demandsReverted) {
      soma += demanda.valor!;
      demandasData.push([
        demanda.descricao,
        this.pipe.transform(demanda.data_cadastro, 'dd/MM/yy'),
        demanda.solicitado_por,
        'R$ ' +
          demanda.valor?.toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
      ]);
    }

    autoTable(doc, {
      body: [
        [
          {
            content:
              'Demandas ' +
              this.client +
              ' ' +
              this.pipe.transform(this.startPeriod, 'dd/MM/yy') +
              ' - ' +
              this.pipe.transform(this.endPeriod, 'dd/MM/yy'),
            styles: {
              halign: 'center',
              fontSize: 20,
              textColor: '#ffffff',
            },
          },
        ],
      ],
      theme: 'plain',
      styles: {
        fillColor: '#3366ff',
      },
    });
    autoTable(doc, {
      head: [['Serviço', 'Data de solicitação', 'Solicitante', 'Valor']],
      body: demandasData,
      theme: 'striped',
      headStyles: {
        fillColor: '#343a40',
      },
      rowPageBreak: 'avoid',
      columnStyles: {
        3: {
          cellWidth: 30,
        },
      },
    });

    autoTable(doc, {
      body: [
        [
          {
            content: 'Subtotal:',
            styles: {
              halign: 'right',
            },
          },
          {
            content: `R$ ${soma.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}`,
            styles: {
              halign: 'right',
            },
          },
        ],
        [
          {
            content: 'Total de impostos:',
            styles: {
              halign: 'right',
            },
          },
          {
            content: `R$ 72,00`,
            styles: {
              halign: 'right',
            },
          },
        ],
        [
          {
            content: 'Quantia Total:',
            styles: {
              halign: 'right',
              fontSize: 14,
            },
          },
          {
            content: `R$ ${(soma + 72).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}`,
            styles: {
              halign: 'right',
              fontSize: 20,
              textColor: '#3366ff',
            },
          },
        ],
      ],
      theme: 'plain',
    });

    this.loadingReport = false;
    return doc.save('invoice');
  }
  edit(invoiceId: string) {
    this.dialogVisible = true;
    this.invoiceRegisterComponent.checkMode(invoiceId);
  }
  register() {
    this.dialogVisible = true;
    this.invoiceRegisterComponent.checkMode(undefined);
  }
  remove(invoiceId: string) {
    this.demandsService.remove(invoiceId).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Demanda deletada com sucesso!',
      });
      this.ngOnInit();
    });
  }
  confirm(event: Event, invoiceId: string) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Tem certeza que deseja excluir esta demanda?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.remove(invoiceId);
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Cancelado',
          detail: 'Exclusão cancelada',
        });
      },
    });
  }
  showDialogReport() {
    this.reportDialogVisible = true;
    this.client = '';
    this.startPeriod = undefined;
    this.endPeriod = undefined;
  }
  closeDialog() {
    this.ngOnInit();
    this.dialogVisible = false;
  }
}
