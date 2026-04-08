"use client"

import { useState } from "react"
import { Check, Circle, ListFilter } from "lucide-react"

type Task = {
  id: number
  text: string
  completed: boolean
}

type FilterType = "all" | "active" | "completed"

export function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState("")
  const [filter, setFilter] = useState<FilterType>("all")

  const addTask = () => {
    const trimmedValue = inputValue.trim()
    if (!trimmedValue) return

    const newTask: Task = {
      id: Date.now(),
      text: trimmedValue,
      completed: false,
    }
    setTasks([...tasks, newTask])
    setInputValue("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask()
    }
  }

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed
    if (filter === "completed") return task.completed
    return true
  })

  const activeCount = tasks.filter((task) => !task.completed).length
  const completedCount = tasks.filter((task) => task.completed).length

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8">
      <div className="mx-auto max-w-xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Task Manager
          </h1>
          <p className="mt-1 text-muted-foreground">
            Organize your day with simple task tracking
          </p>
        </div>

        {/* Input */}
        <div className="mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new task..."
            className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
          />
          <p className="mt-2 text-sm text-muted-foreground">
            Press Enter to add
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6 flex items-center gap-1 rounded-lg border border-border bg-card p-1">
          <FilterButton
            label="All"
            count={tasks.length}
            active={filter === "all"}
            onClick={() => setFilter("all")}
          />
          <FilterButton
            label="Active"
            count={activeCount}
            active={filter === "active"}
            onClick={() => setFilter("active")}
          />
          <FilterButton
            label="Completed"
            count={completedCount}
            active={filter === "completed"}
            onClick={() => setFilter("completed")}
          />
        </div>

        {/* Task List */}
        <div className="space-y-2">
          {filteredTasks.length === 0 ? (
            <EmptyState filter={filter} />
          ) : (
            filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={() => toggleTask(task.id)}
              />
            ))
          )}
        </div>

        {/* Footer Stats */}
        {tasks.length > 0 && (
          <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
            <span>
              {activeCount} task{activeCount !== 1 ? "s" : ""} remaining
            </span>
            <span>
              {completedCount} completed
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

function FilterButton({
  label,
  count,
  active,
  onClick,
}: {
  label: string
  count: number
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-secondary text-secondary-foreground"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      }`}
    >
      {label}
      <span
        className={`rounded-full px-1.5 py-0.5 text-xs ${
          active ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
        }`}
      >
        {count}
      </span>
    </button>
  )
}

function TaskItem({ task, onToggle }: { task: Task; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="group flex w-full items-center gap-3 rounded-lg border border-border bg-card p-4 text-left transition-colors hover:bg-accent"
    >
      <div
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
          task.completed
            ? "border-primary bg-primary"
            : "border-muted-foreground group-hover:border-primary"
        }`}
      >
        {task.completed && <Check className="h-3 w-3 text-primary-foreground" />}
      </div>
      <span
        className={`flex-1 transition-colors ${
          task.completed
            ? "text-muted-foreground line-through"
            : "text-foreground"
        }`}
      >
        {task.text}
      </span>
      {task.completed && (
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
          Done
        </span>
      )}
    </button>
  )
}

function EmptyState({ filter }: { filter: FilterType }) {
  const messages = {
    all: "No tasks yet. Add one above!",
    active: "No active tasks. Great job!",
    completed: "No completed tasks yet.",
  }

  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-12 text-center">
      <ListFilter className="mb-3 h-10 w-10 text-muted-foreground/50" />
      <p className="text-muted-foreground">{messages[filter]}</p>
    </div>
  )
}
