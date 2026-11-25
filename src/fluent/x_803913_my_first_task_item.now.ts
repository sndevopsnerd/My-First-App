import { Table, StringColumn, DateColumn } from '@servicenow/sdk/core'

// Variable name MUST match the name property
export const x_803913_my_first_task_item = Table({
  name: 'x_803913_my_first_task_item',
  label: 'Task Item',
  display: 'title',
  schema: {
    title: StringColumn({ label: 'Title', mandatory: true, maxLength: 100 }),
    due_date: DateColumn({ label: 'Due Date' }),
  },
})
