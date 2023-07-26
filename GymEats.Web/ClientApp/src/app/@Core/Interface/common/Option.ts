import { Question } from './Question';
import { Diet } from './Diet';
export class Option{
    id!:string;
    label!:string
    question_Diet!:number;
    isOpen!:boolean;
    isExclusive?:boolean;
    question?:Question ;
    diet?:Diet;
    sequenceNumber?:number;
}