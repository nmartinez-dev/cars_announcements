'use client';

import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';

export type Announcement = {
  id: string;
  mainImage: string;
  make: string;
  model: string;
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
  {
    accessorKey: 'make',
    header: 'Marca',
  },
  {
    accessorKey: 'model',
    header: 'Modelo',
  },
];
