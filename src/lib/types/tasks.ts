export type TaskStatus = "COMPLETED" | "CANCELED" | "IN_PROGRESS" | "BACKLOG"
export type TaskPriority = "HIGH" | "MEDIUM" | "LOW" | "URGENT"
export type TaskLabel = "LIFE" | "WORK" | "FINANCIAL" | "TRAINING"


export interface Task {
    id: string
    created_at: any
    content: string
    title: string
    status: TaskStatus
    priority: TaskPriority
    label: TaskLabel
}



