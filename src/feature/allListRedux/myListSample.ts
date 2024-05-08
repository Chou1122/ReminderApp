export const initialState: any = {
    countKey: 1,
    myListArr: [
      {
        colorBox: "#DC2626",
        iconBox: "barbell-outline",
        textBox: "Gym Target",
        numberBox: 3,
        indexKey: 0,
        taskList: {
          countTaskKey: 2,
          taskListArr: [
            {
              isNew: false,
              nameTask: 'Completed Reminder',
              keyTask: 0,
              isChecked: false,
            },
            {
                isNew: true,
                nameTask: 'New Reminder',
                keyTask: 1,
                isChecked: true,
            },
            {
              isNew: false,
              nameTask: 'Sample Reminder',
              keyTask: 2,
              isChecked: false,
          },
          ]
        }
      },
      {
        colorBox: "#3D7CE8",
        iconBox: "list-outline",
        textBox: "Reminders",
        numberBox: 1,
        indexKey: 1,
        taskList: {
          countTaskKey: 0,
          taskListArr: [
            {
              isNew: false,
              nameTask: 'Completed Reminder',
              keyTask: 0,
              isChecked: false,
            }
          ]
        }
      },
    ]
}