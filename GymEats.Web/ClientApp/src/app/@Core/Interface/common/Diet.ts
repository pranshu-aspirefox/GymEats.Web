export interface Diet {
    id: string;
    dietName: string;
    proteinPercentage: number;
    carbsPercentage: number;
    fatPercentage: number;
    surplusPercentage: number;
    deficitPercentage: number;
    createdBy: string;
    createdOn: string;
    isDefault: boolean;
    mealSchedule: string;
    clickBankProductId : string;

}