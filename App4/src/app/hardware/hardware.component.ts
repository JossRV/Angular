import { Component } from '@angular/core';

@Component({
    selector: 'app-hardware',
    templateUrl: './hardware.component.html',
    styleUrls: ['./hardware.component.css']
})
export class HardwareComponent {
    public hardware: any = [
        {
            id: 1,
            nombre: 'Asus VivoBoock',
            marca: 'ASUS',
            modelo: 'X505ZA',
            memoria: '8 GB',
            procesador: 'Ryzen 5 2500U',
            disco_duro: '500GB SSD'
        },
        {
            id: 2,
            nombre: 'Asus VivoBoock',
            marca: 'ASUS',
            modelo: 'X515JA',
            memoria: '12 GB',
            procesador: 'Core i5 Gen 11th',
            disco_duro: '500GB SSD 1TB HDD'
        },
        {
            id: 3,
            nombre: 'Laptop Lenovo',
            marca: 'LENOVO',
            modelo: '14ITL05',
            memoria: '8 GB',
            procesador: 'Core i5 Gen 11th',
            disco_duro: '256GB SSD'
        },
        {
            id: 4,
            nombre: 'Laptop HP',
            marca: 'HP',
            modelo: '15-dy2508la',
            memoria: '8 GB',
            procesador: 'Core i3 Gen 11th',
            disco_duro: '512GB SSD'
        },
        {
            id: 5,
            nombre: 'Laptop Gamer',
            marca: 'DELL',
            modelo: '3515-V3',
            memoria: '16GB',
            procesador: 'Ryzen 5 3450U',
            disco_duro: '256GB'
        },
        {
            id: 6,
            nombre: 'Laptop HP',
            marca: 'HP',
            modelo: '15-ef2518',
            memoria: '12GB',
            procesador: 'Ryzen 3 5300u',
            disco_duro: '256GB SSD'
        },
        {
            id: 7,
            nombre: 'Laptop Gamer',
            marca: 'MSI',
            modelo: 'GF63',
            memoria: '16GB',
            procesador: 'Core i5 10500H',
            disco_duro: '512GB SSD'
        },
        {
            id: 8,
            nombre: 'Laptop HP',
            marca: 'HP',
            modelo: '15-ef2519',
            memoria: '8GB',
            procesador: 'Ryzen 5 5800u',
            disco_duro: '512GB SSD'
        }
    ];
}
