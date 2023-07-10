export interface UpdateDietModal{
    id: string,
    dietName: string,
    proteinPercentage: number,
    carbsPercentage: number,
    fatPercentage: number,
    // createdBy: string,
    // createdOn: Date,
    // updatedBy: string,
    // updatedOn: Date,
    isActive: boolean,
    isDeleted: boolean,
    isDefault: boolean,
    surplusPercentage: number,
    deficitPercentage: number,
    mealSchedule: string
}