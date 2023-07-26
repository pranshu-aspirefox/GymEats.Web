import { Option } from './Option';
export class Question {
    id!: string;
    label!: string
    isPrimary?: boolean;
    answerType?: number;
    options?: Option[];
    sequenceNumber?:Number;
}

export { Option };
