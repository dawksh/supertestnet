"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useSetAtom } from "jotai"
import { chainAtom } from "@/lib/atoms"
import { Chain } from "viem"
import { chains } from "@/lib/config"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import Link from "next/link"


export function Combobox() {
    const [open, setOpen] = React.useState(false)
    const [selectedChain, setSelectedChain] = React.useState<string | null>(null)

    const setChain = useSetAtom(chainAtom)

    return (
        <div className="flex flex-row items-center gap-4">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between"
                    >
                        {selectedChain
                            ? chains.find((chain) => chain.value.name === selectedChain)?.label
                            : "select a chain"}
                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search framework..." />
                        <CommandList>
                            <CommandEmpty>No framework found.</CommandEmpty>
                            <CommandGroup>
                                {chains.map((chain) => (
                                    <CommandItem
                                        key={chain.value.id}
                                        value={chain.value.name}
                                        onSelect={(currentValue: string) => {
                                            setSelectedChain(currentValue);
                                            const selectedChainObj = chains.find(c => c.value.name === currentValue)?.value;
                                            if (selectedChainObj) {
                                                setChain(selectedChainObj as Chain);
                                            }
                                            setOpen(false);
                                        }}
                                    >
                                        {chain.label}
                                        <Check
                                            className={cn(
                                                "ml-auto",
                                                selectedChain === chain.value.name ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>?</TooltipTrigger>
                    <TooltipContent>
                        <p>to add a new chain, checkout the readme <Link href="https://github.com/dawksh/supertestnet" target="_blank">here</Link></p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}
