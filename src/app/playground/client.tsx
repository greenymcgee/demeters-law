'use client'

import { Button } from '@/common/components'
import React from 'react'

export function PlaygroundClientSide() {
  return (
    <Button
      onClick={() => {
        console.log('You clicked the button')
      }}
      size="xl"
      variant="success"
    >
      Heya! It&apos;s me, Imoen.
    </Button>
  )
}
