import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] w-full">
        <SelectValue placeholder="Selecione a comarca válida" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Belém</SelectItem>
          <SelectItem value="banana">Satarem</SelectItem>
          <SelectItem value="blueberry">Outeiro</SelectItem>
          <SelectItem value="grapes">Icoaraci</SelectItem>
          <SelectItem value="pineapple">Salinas</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
