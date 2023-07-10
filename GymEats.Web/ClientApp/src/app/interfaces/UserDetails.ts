export interface UserDetails{
    data: any[]
    id: number,
    age: number,
    height: number,
    weight: number,
    gender: string,
    targetWeight: number,
    calories: number,
    planAmount: number,
    waterIntake: number,
    userBMI: number,
    dailyActivityLevel: string,
    mealPlanSubscriptionId: string,
    dietId: string,
    surveyId: string,
    createdOn: Date,
    updatedOn: Date,
    isVerified: boolean,
    isActive: boolean,
    isDeleted: boolean,
    userId: string,
    user: User
}

export interface User{
    createdOn: Date,
        uniqueToken: string,
        passwordResetToken: string,
        resetTokenExirationTime: string,
        firstName: string,
        lastName: string,
        email: string,
        isActive: boolean,
        isBan: boolean,
        emailConfirmatiomToken: string,
        userId: string
}