'use client';

import Image from 'next/image';
import { Column } from '@tanstack/react-table';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { ArrowUpDown } from 'lucide-react';
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
    header: () => <div className='text-center'>Imagen</div>,
    cell: ({ row }) => (
      <Dialog>
        <DialogTrigger>
          <div className='w-[100px] h-[100px] flex items-center justify-center cursor-pointer'>
            <Image
              src={row.getValue('mainImage') ?? '/no_image.jpg'}
              alt={`${row.getValue('make')} ${row.getValue('model')}`}
              width={100}
              height={100}
              className='object-cover rounded-lg'
            />
          </div>
        </DialogTrigger>
        <DialogContent className='flex justify-center items-center flex-col'>
          <DialogTitle>
            {row.getValue('make')} {row.getValue('model')}
          </DialogTitle>
          <Image
            src={row.getValue('mainImage') ?? '/no_image.jpg'}
            alt={`${row.getValue('make')} ${row.getValue('model')}`}
            width={500}
            height={500}
            className='object-cover rounded-lg'
          />
        </DialogContent>
      </Dialog>
    ),
  },
  {
    accessorKey: 'salePriceGross',
    header: ({ column }) => sortedHeader(column, 'Precio'),
    cell: ({ row }) => (
      <div className='text-center'>
        {formatNumber(row.getValue('salePriceGross'), true)}
      </div>
    ),
  },
  {
    accessorKey: 'make',
    header: ({ column }) => sortedHeader(column, 'Marca'),
    cell: ({ row }) => (
      <div className='text-center'>{row.getValue('make')}</div>
    ),
  },
  {
    accessorKey: 'model',
    header: () => <div className='text-center'>Modelo</div>,
    cell: ({ row }) => (
      <div className='text-center'>{row.getValue('model')}</div>
    ),
  },
  {
    accessorKey: 'registrationYear',
    header: ({ column }) => sortedHeader(column, 'Año'),
    cell: ({ row }) => (
      <div className='text-center'>{row.getValue('registrationYear')}</div>
    ),
  },
  {
    accessorKey: 'trim',
    header: () => <div className='text-center'>Versión</div>,
    cell: ({ row }) => (
      <div className='text-center'>{row.getValue('trim')}</div>
    ),
  },
  {
    accessorKey: 'gearbox',
    header: () => <div className='text-center'>Transmisión</div>,
    cell: ({ row }) => (
      <div className='text-center'>{row.getValue('gearbox')}</div>
    ),
  },
  {
    accessorKey: 'mileage',
    header: () => <div className='text-center'>Kilometraje</div>,
    cell: ({ row }) => (
      <div className='text-center'>
        {formatNumber(row.getValue('salePriceGross'))}
      </div>
    ),
  },
];
