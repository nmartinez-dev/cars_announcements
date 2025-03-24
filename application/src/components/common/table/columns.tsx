'use client';

import { useState } from 'react';
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
import { Loader } from 'lucide-react';

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

const ImagePreview = ({
  mainImage,
  make,
  model,
}: {
  mainImage: string;
  make: string;
  model: string;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Dialog>
      <DialogTrigger>
        <div className='w-[100px] h-[100px] flex items-center justify-center cursor-pointer'>
          <Image
            src={mainImage ?? '/no_image.jpg'}
            alt={`${make} ${model}`}
            width={100}
            height={100}
            className='object-cover rounded-lg'
          />
        </div>
      </DialogTrigger>
      <DialogContent
        aria-describedby={`${make} ${model}`}
        className='flex justify-center items-center flex-col'>
        <DialogTitle>
          {make} {model}
        </DialogTitle>
        {isLoading && (
          <div className='flex flex-col justify-center items-center'>
            <Loader className='h-10 w-10 animate-spin text-primary mb-2' />
            Cargando...
          </div>
        )}
        <Image
          src={mainImage ?? '/no_image.jpg'}
          alt={`${make} ${model}`}
          width={isLoading ? 0 : 500}
          height={isLoading ? 0 : 500}
          className={'object-cover rounded-lg'}
          onLoad={() => setIsLoading(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export const columns: ColumnDef<Announcement>[] = [
  {
    accessorKey: 'mainImage',
    header: () => <div className='text-center'>Imagen</div>,
    cell: ({ row }) => (
      <ImagePreview
        mainImage={row.getValue('mainImage')}
        make={row.getValue('make')}
        model={row.getValue('model')}
      />
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
