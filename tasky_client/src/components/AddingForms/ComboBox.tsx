import { Check, ChevronsUpDown } from "lucide-react"
import { useState } from "react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
const categories = [
  {
    value: "studies",
    label: "studies",
  },
  {
    value: "work",
    label: "work",
  },
  {
    value: "gym",
    label: "gym",
  },
  {
    value: "toDo",
    label: "toDo",
  },
]

interface ComboboxProps {
    category: string
    setCategory: React.Dispatch<React.SetStateAction<string>>
}
 
export function Combobox({ category, setCategory}: ComboboxProps) {
  const [open, setOpen] = useState(false)
 
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {category
            ? categories.find((object) => object.value === category)?.label
            : "Select category..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandEmpty>No category found.</CommandEmpty>
          <CommandGroup>
            {categories.map((object) => (
              <CommandItem
                key={object.value}
                value={object.value}
                onSelect={(currentValue) => {
                  setCategory(currentValue === category ? "" : currentValue)
                  setOpen(false)
                }}
                >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    category === object.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {object.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default Combobox