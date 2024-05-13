export interface myTaskType {
    isNew: boolean,
    nameTask: string,
    keyTask: number,
    isChecked: boolean,
    isFlagged: boolean,
    noteTask: string,

    useDate: boolean,
    dateTask: string,
    useTime: boolean,
    hourTask: number,
    minuteTask: number,
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
