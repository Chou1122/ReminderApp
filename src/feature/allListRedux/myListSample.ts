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
              isFlagged: false,
              noteTask: '',
              useDate: true,
              dateTask: '12/09/2003',
              useTime: true,
              hourTask: 12,
              minuteTask: 5,
            },
            {
                isNew: true,
                nameTask: 'New Reminder',
                keyTask: 1,
                isChecked: true,
                isFlagged: true,
                noteTask: 'sample note for new reminder',
                useDate: true,
                dateTask: '12/09/2003',
                useTime: false,
              hourTask: 12,
              minuteTask: 5,
            },
            {
              isNew: false,
              nameTask: 'Sample Reminder',
              keyTask: 2,
              isChecked: false,
              isFlagged: true,
              noteTask: 'sample not for reminder',
              useDate: false,
              dateTask: '12/09/2003',
              useTime: false,
              hourTask: 12,
              minuteTask: 5,
          },
          {
            isNew: false,
            nameTask: 'Go to gym',
            keyTask: 3,
            isChecked: false,
            isFlagged: true,
            noteTask: 'this is note for gym',
            useDate: false,
            dateTask: '12/09/2003',
            useTime: false,
              hourTask: 12,
              minuteTask: 5,
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
              isFlagged: false,
              noteTask: '',
              useDate: true,
              dateTask: '15/12/2024',
              useTime: false,
              hourTask: 12,
              minuteTask: 5,
            },
            {
              isNew: false,
              nameTask: 'NotCompleted Reminder',
              keyTask: 1,
              isChecked: false,
              isFlagged: false,
              noteTask: '',
              useDate: true,
              dateTask: '18/02/2024',
              useTime: false,
              hourTask: 12,
              minuteTask: 5,
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
              isFlagged: false,
              noteTask: '',
              useDate: false,
              dateTask: '12/09/2003',
              useTime: false,
              hourTask: 12,
              minuteTask: 5,
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
              isFlagged: false,
              noteTask: '',
              useDate: false,
              dateTask: '12/09/2003',
              useTime: false,
              hourTask: 12,
              minuteTask: 5,
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
              isFlagged: false,
              noteTask: '',
              useDate: false,
              dateTask: '12/09/2003',
              useTime: false,
              hourTask: 12,
              minuteTask: 5,
            }
          ]
        }
      },
    ]
}