import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Req,
} from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Controller('invoices')
export class InvoicesController {
    constructor(private invoicesService: InvoicesService) {}
    @Get()
    findAll(@Req() request: Request) {
        return this.invoicesService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.invoicesService.findOne(id);
    }
    @Post()
    create(@Body() createInvoiceDto: CreateInvoiceDto) {
        return this.invoicesService.create(createInvoiceDto);
    }
    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() updateInvoiceDto: CreateInvoiceDto,
    ) {
        return this.invoicesService.update(id, updateInvoiceDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.invoicesService.remove(id);
    }
}
