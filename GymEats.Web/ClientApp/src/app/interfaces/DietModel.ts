export interface AddNewDietModel
{
      id:string,
      dietName: string,
      proteinPercentage: number,
      carbsPercentage: Number,
      fatPercentage: number,
      createdBy: string,
      createdOn:string,
      updatedBy: string,
      updatedOn: string,
      isActive: boolean,
      isDeleted: boolean,
      isDefault: boolean,
      surplusPercentage: number,
      deficitPercentage: number,
      mealSchedule: string
}