import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Invoice>;

@Schema()
export class Invoice{
  @Prop()
  descricao: string;

  @Prop()
  data_cadastro: Date;

  @Prop()
  solicitado_por: string;

  @Prop()
  valor: number;

  @Prop()
  status: boolean;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
    
