'use client';

import { ColumnDef } from '@tanstack/react-table';
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
    header: 'Precio',
    cell: ({ row }) => formatNumber(row.getValue('salePriceGross'), true),
  },
  {
    accessorKey: 'make',
    header: 'Marca',
  },
  {
    accessorKey: 'model',
    header: 'Modelo',
  },
  {
    accessorKey: 'registrationYear',
    header: 'Año',
  },
  {
    accessorKey: 'trim',
    header: 'Versión',
  },
  {
    accessorKey: 'gearbox',
    header: 'Transmisión',
  },
  {
    accessorKey: 'mileage',
    header: 'Kilometraje',
    cell: ({ row }) => formatNumber(row.getValue('salePriceGross')),
  },
];
