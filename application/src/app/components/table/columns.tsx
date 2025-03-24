'use client';

import { Column } from '@tanstack/react-table';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { ArrowUpDown } from 'lucide-react';
import Image from 'next/image';
import { formatNumber } from '@/lib/utils';

export type Announcement = {
  mainImage: string;
  reservationLabelCode: string;
  salePriceGross: number;
  make: string;
  model: string;
  registrationYear: number;
  trim: string;
  gearbox: string;
  mileage: number;
  details: {
    gearbox?: string;
    mileage?: number;
    registrationYear?: number;
  };
};

const sortedHeader = (column: Column<Announcement, unknown>, name: string) => (
  <Button
    variant='ghost'
    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
    {name}
    <ArrowUpDown className='ml-2 h-4 w-4' />
  </Button>
);

export const columns: ColumnDef<Announcement>[] = [
  {
    accessorKey: 'mainImage',
    header: 'Imagen',
    cell: ({ row }) => (
      <Image
        src={row.getValue('mainImage') ?? '/no_image.jpg'}
        alt={'test'}
        width={100}
        height={100}
      />
    ),
  },
  // {
  //   accessorKey: 'reservationLabelCode',
  //   header: 'Estado',
  // },
  {
    accessorKey: 'salePriceGross',
    header: ({ column }) => sortedHeader(column, 'Precio'),
    cell: ({ row }) => formatNumber(row.getValue('salePriceGross'), true),
  },
  {
    accessorKey: 'make',
    header: ({ column }) => sortedHeader(column, 'Marca'),
  },
  {
    accessorKey: 'model',
    header: 'Modelo',
  },
  {
    accessorKey: 'registrationYear',
    header: ({ column }) => sortedHeader(column, 'Año'),
  },
  {
    accessorKey: 'trim',
    header: 'Versión',
  },
  {
    accessorKey: 'gearbox',
    header: ({ column }) => sortedHeader(column, 'Transmisión'),
  },
  {
    accessorKey: 'mileage',
    header: ({ column }) => sortedHeader(column, 'Kilometraje'),
    cell: ({ row }) => formatNumber(row.getValue('salePriceGross')),
  },
];
