export interface Diet {
    id: string;
    dietName: string;
    proteinPercentage: number;
    carbsPercentage: number;
    fatPercentage: number;
    surplusPercentage: number;
    deficitPercentage: number;
    isDefault: boolean;
    mealSchedule: string;
}