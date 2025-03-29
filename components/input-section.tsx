'use client'
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Combobox } from './query/combobox'

const InputSection = () => {
    const [tokenId, setTokenId] = useState(0)
    return (
        <div className='flex flex-row gap-6 items-center justify-center'>
            <Combobox />
            <Input placeholder='enter contract address' />
            <p>token id: </p>
            <Button onClick={() => setTokenId(tokenId + 1)}>+</Button>
            <Input placeholder='token id' type='number' value={tokenId} className='w-2/5' onChange={() => { }} />
            <Button onClick={() => setTokenId(tokenId - 1)}>-</Button>
            <Button>query</Button>
        </div>
    )
}

export default InputSection