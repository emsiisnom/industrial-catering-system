"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, Check } from "lucide-react"

interface SelectContextType {
  value?: string
  onValueChange?: (value: string) => void
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  registerLabel: (val: string, label: string) => void
  labels: Record<string, string>
}

const SelectContext = React.createContext<SelectContextType>({
  open: false,
  setOpen: () => {},
  registerLabel: () => {},
  labels: {},
})

interface SelectProps {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

export function Select({ value, defaultValue, onValueChange, children }: SelectProps) {
  const [open, setOpen] = React.useState(false)
  const [internalValue, setInternalValue] = React.useState(defaultValue || "")
  const [labels, setLabels] = React.useState<Record<string, string>>({})
  const containerRef = React.useRef<HTMLDivElement>(null)

  const currentValue = value !== undefined ? value : internalValue

  const registerLabel = React.useCallback((val: string, label: string) => {
    setLabels((prev) => {
      if (prev[val] === label) return prev
      return { ...prev, [val]: label }
    })
  }, [])

  const handleValueChange = React.useCallback(
    (val: string) => {
      setInternalValue(val)
      onValueChange?.(val)
      setOpen(false)
    },
    [onValueChange]
  )

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <SelectContext.Provider
      value={{
        value: currentValue,
        onValueChange: handleValueChange,
        open,
        setOpen,
        registerLabel,
        labels,
      }}
    >
      <div ref={containerRef} className="relative w-full">
        {children}
      </div>
    </SelectContext.Provider>
  )
}

export function SelectTrigger({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  const { open, setOpen } = React.useContext(SelectContext)

  return (
    <button
      id={id}
      type="button"
      onClick={() => setOpen((prev) => !prev)}
      className={cn(
        "flex h-11 w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2 text-base sm:text-sm shadow-sm transition-colors hover:border-gray-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20 text-left",
        className
      )}
      aria-expanded={open}
    >
      <div className="flex-1 truncate text-left">{children}</div>
      <ChevronDown
        className={cn(
          "h-4 w-4 text-gray-500 transition-transform duration-200 shrink-0 ml-2",
          open && "rotate-180"
        )}
      />
    </button>
  )
}

export function SelectValue({
  placeholder = "Chọn...",
  className,
}: {
  placeholder?: string
  className?: string
}) {
  const { value, labels } = React.useContext(SelectContext)
  // Ưu tiên hiển thị nhãn thân thiện (VD: "Chỉ bữa trưa (Ca chính)") thay vì slug kỹ thuật
  const friendlyLabel = value ? labels[value] : undefined
  const displayText = friendlyLabel || value || placeholder
  const isPlaceholder = !value

  return (
    <span
      className={cn(
        "truncate block text-left",
        isPlaceholder ? "text-gray-400" : "text-gray-900 font-medium",
        className
      )}
    >
      {displayText}
    </span>
  )
}

export function SelectContent({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const { open } = React.useContext(SelectContext)

  return (
    <div
      className={cn(
        "absolute left-0 top-full z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white p-1 shadow-lg ring-1 ring-black/5 transition-all duration-150",
        open ? "block opacity-100 scale-100" : "hidden opacity-0 scale-95",
        className
      )}
    >
      <div className="space-y-0.5">{children}</div>
    </div>
  )
}

export function SelectItem({
  value,
  children,
  className,
}: {
  value: string
  children: React.ReactNode
  className?: string
}) {
  const { value: selectedValue, onValueChange, registerLabel } = React.useContext(SelectContext)
  const isSelected = selectedValue === value
  const labelText = typeof children === "string" ? children : value

  // Tự động đăng ký nhãn ngay khi render để SelectValue đọc được ngay
  React.useEffect(() => {
    registerLabel(value, labelText)
  }, [value, labelText, registerLabel])

  return (
    <button
      type="button"
      onClick={() => {
        onValueChange?.(value)
      }}
      className={cn(
        "flex w-full items-center justify-between px-3 py-2.5 text-sm text-left rounded-md transition-colors hover:bg-green-50 hover:text-green-800 cursor-pointer",
        isSelected ? "bg-green-100/70 text-green-900 font-semibold" : "text-gray-700",
        className
      )}
    >
      <span className="truncate">{children}</span>
      {isSelected && <Check className="h-4 w-4 text-green-700 shrink-0 ml-2" />}
    </button>
  )
}
