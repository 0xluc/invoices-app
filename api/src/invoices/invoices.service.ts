import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Invoice } from './invoice.schema';
import { Model } from 'mongoose';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Injectable()
export class InvoicesService {
    constructor(@InjectModel('Invoice') private invoiceModel: Model<Invoice>) {}

    async create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
        const createdInvoice = new this.invoiceModel(createInvoiceDto);
        return createdInvoice.save();
    }
    async findAll(): Promise<Invoice[]> {
        return this.invoiceModel.find().exec();
    }
    async findOne(invoiceId: string): Promise<Invoice | null> {
        return this.invoiceModel.findOne({ _id: invoiceId }).exec();
    }
    async update(
        invoiceId: string,
        updatedInvoiceDto: CreateInvoiceDto,
    ): Promise<Invoice> {
        const existingInvoice = await this.invoiceModel.findByIdAndUpdate(
            invoiceId,
            updatedInvoiceDto,
            { new: true },
        );
        if (!existingInvoice) {
            throw new NotFoundException(
                `Invoice with id ${invoiceId} not found`,
            );
        }
        return existingInvoice;
    }
    async remove(invoiceId: string): Promise<Invoice> {
        const deletedInvoice =
            await this.invoiceModel.findByIdAndDelete(invoiceId);
        if (!deletedInvoice) {
            throw new NotFoundException(
                `Invoice with id ${invoiceId} not found`,
            );
        }
        return deletedInvoice;
    }
}
