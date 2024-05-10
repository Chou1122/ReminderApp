export interface openTabType {
    newGroupTab: boolean,
    newListTab: boolean,
    newTaskTab: boolean,
    newTaskDetailTab: boolean,
    priorityTaskTab: boolean,
    cPriorityTaskTab: boolean,
    settingDetailTaskTab: boolean,

    indexListOpened: number,
    indexTaskOpened: number,

    titleNewTask: string,

    minuteTimeTask: number,
    hourTimeTask: number,
    timeOnTask: boolean,
}