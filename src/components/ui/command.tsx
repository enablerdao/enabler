import * as React from "react"
import {
  Command as CommandPrimitive,
  CommandGroup as CommandGroupPrimitive,
  CommandList as CommandListPrimitive,
  CommandItem as CommandItemPrimitive,
  CommandSeparator as CommandSeparatorPrimitive,
} from "cmdk"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

import { cn } from "@/lib/utils"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<"p">,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "py-2 text-center text-sm text-muted-foreground",
      className
    )}
    {...props}
  />
))
CommandEmpty.displayName = "CommandEmpty"

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandGroupPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandGroupPrimitive>
>(({ className, ...props }, ref) => (
  <CommandGroupPrimitive
    ref={ref}
    className={cn("overflow-hidden p-[calc(var(--padding)-1px)]", className)}
    {...props}
  />
))
CommandGroup.displayName = CommandGroupPrimitive.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandListPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandListPrimitive>
>(({ className, ...props }, ref) => (
  <CommandListPrimitive
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))
CommandList.displayName = CommandListPrimitive.displayName

const CommandInput = React.forwardRef<
  React.ElementRef<"input">,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <div className="border-border flex items-center border-b px-3">
    <input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  </div>
))
CommandInput.displayName = "CommandInput"

export type CommandInputProps = React.InputHTMLAttributes<HTMLInputElement>

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandItemPrimitive>
>(({ className, ...props }, ref) => (
  <CommandItemPrimitive
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  />
))
CommandItem.displayName = CommandItemPrimitive.displayName

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground")}
      {...props}
    />
  )
}
CommandShortcut.displayName = "CommandShortcut"

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandSeparatorPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandSeparatorPrimitive>
>(({ className, ...props }, ref) => (
  <CommandSeparatorPrimitive
    ref={ref}
    className={cn("-mx-1 my-2 h-px bg-border", className)}
    {...props}
  />
))
CommandSeparator.displayName = CommandSeparatorPrimitive.displayName

export {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandList,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
  CommandInput,
}
