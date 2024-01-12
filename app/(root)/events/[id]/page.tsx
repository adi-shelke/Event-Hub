import { getEventDetails } from '@/lib/actions/event.actions'
import { SearchParamProps } from '@/types'
import React from 'react'

const EventDetails = async({params:{id}}:SearchParamProps) => {
    const event = await getEventDetails(id);
    console.log(event)
  return (
    <div>page</div>
  )
}

export default EventDetails