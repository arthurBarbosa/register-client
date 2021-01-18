export interface Client {
        id?: number;
        name?: string;
        cpf: string;
        income: number;
        birthDate: Date;
        children: number;     
        
}

export interface PaginatorClient{
        content: Client[];
        totalElements: number,
        size: number;
        number: number;
}