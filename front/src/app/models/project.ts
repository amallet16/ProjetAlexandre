import { Category } from "./category";

export class Project {
    id: number;
    name: string;
    beginDate: Date;
    endDate: Date;
    budget: number;
    typeDon: string;
    nameEnt: string;
    description: string;
    pmName: string;
    pmMail: string;
    category: Category;
    interet: number;
    count: number;

}