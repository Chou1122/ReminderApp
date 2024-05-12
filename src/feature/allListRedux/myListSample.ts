export const initialState: any = {
    countKey: 4,
    myListArr: [
      {
        colorBox: "#DC2626",
        iconBox: "barbell-outline",
        textBox: "Gym Target",
        numberBox: 4,
        indexKey: 0,
        taskList: {
          countTaskKey: 3,
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
          {
            isNew: false,
            nameTask: 'Go to gym',
            keyTask: 3,
            isChecked: false,
          },
          ]
        }
      },
      {
        colorBox: "#3D7CE8",
        iconBox: "list-outline",
        textBox: "Reminders",
        numberBox: 2,
        indexKey: 1,
        taskList: {
          countTaskKey: 1,
          taskListArr: [
            {
              isNew: false,
              nameTask: 'Completed Reminder',
              keyTask: 0,
              isChecked: false,
            },
            {
              isNew: false,
              nameTask: 'NotCompleted Reminder',
              keyTask: 1,
              isChecked: false,
            }
          ]
        }
      },
      {
        colorBox: "#F09A37",
        iconBox: "people",
        textBox: "Relationship Target",
        numberBox: 1,
        indexKey: 2,
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
      {
        colorBox: "#3D7CE8",
        iconBox: "list-outline",
        textBox: "Timeable",
        numberBox: 1,
        indexKey: 3,
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
      {
        colorBox: "#DC2626",
        iconBox: "school",
        textBox: "Study Target",
        numberBox: 1,
        indexKey: 4,
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