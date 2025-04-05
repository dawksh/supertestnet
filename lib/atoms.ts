import { atom } from "jotai"
import { Chain } from "viem"

export const chainAtom = atom<Chain | null>(null)

export const contractAtom = atom<`0x${string}` | null>(null)

export const tokenAtom = atom<number>(0)

export const uriAtom = atom<Record<string, unknown> | null>(null)