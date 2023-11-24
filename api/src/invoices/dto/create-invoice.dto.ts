export class CreateInvoiceDto {
    descricao: string;
    data_criacao: Date;
    valor: number;
    solicitado_por: string;
    status: boolean;
}
