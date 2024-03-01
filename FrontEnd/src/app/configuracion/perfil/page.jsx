import Configuration from '@/src/components/configuracion/Configuration'
import React from 'react'
import { getCategories } from '@/src/lib/api'

export default async function ConfigurationPage() {
  const categories = await getCategories()
  
  return (
    <Configuration categories={categories} />
  )
}
