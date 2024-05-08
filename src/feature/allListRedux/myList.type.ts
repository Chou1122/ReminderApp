export interface myTaskType {
    isNew: boolean,
    nameTask: string,
    indexTask: number,
    isChecked: boolean,
}

export interface myListType {
    colorBox: string,
    iconBox: string,
    textBox: string,
    numberBox: number,
    indexKey: number,
    taskList: {
        countTaskKey: number,
        taskListArr: Array<myTaskType>,
    }
}
