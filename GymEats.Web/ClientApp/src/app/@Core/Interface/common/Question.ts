import { Option } from './Option';
export class Question {
    id!: string;
    label!: string
    isPrimary?: boolean;
    answerType?: number;
    options?: Option[];
    createdBy?: string;
    createdOn?: string;
    sequenceNumber?:Number;

}