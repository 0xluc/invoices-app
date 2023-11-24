import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceSchema } from './invoice.schema';
import { InvoicesService } from './invoices.service';
import { InvoicesController } from './invoices.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Invoice', schema: InvoiceSchema }]),
    ],
    providers: [InvoicesService],
    controllers: [InvoicesController],
})
export class InvoicesModule {}
