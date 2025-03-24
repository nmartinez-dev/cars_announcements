# Aplicación de Anuncios de Coches

## Descripción del Proyecto
Este proyecto es una aplicación web desarrollada con Next.js v15, React 19, Tailwind CSS v4 y shadcn/ui. Su objetivo es consumir un API REST y mostrar en pantalla una tabla paginada con anuncios de coches. La aplicación permite al usuario ordenar, filtrar y buscar entre los anuncios de manera local.

## Tecnologías Utilizadas
- **Next.js v15**
- **React 19**
- **Tailwind CSS v4**
- **shadcn/ui**
- **@tanstack/react-table** (para la gestión de la tabla)
- **Lucide Icons** (para iconos)

## Características Principales
- Consumo de datos desde un endpoint REST.
- Tabla paginada con ordenamiento y filtros.
- Búsqueda en tiempo real.
- Diseño responsivo y moderno con Tailwind CSS.
- Uso de componentes reutilizables y optimizados.

## Instalación y Configuración

### 1. Clonar el Repositorio
```bash
  git clone https://github.com/nmartinez-dev/cars_announcements.git
  cd application/
```

### 2. Instalar Dependencias
```bash
  npm install
```

### 3. Ejecutar el Proyecto en Desarrollo
```bash
  npm run dev
```
La aplicación estará disponible en `http://localhost:3000`.

## Estructura del Proyecto
```
📂 application
├── 📂 src
|   ├── 📂 app              # Páginas de la aplicación
|   ├── 📂 components       # Componentes reutilizables
|   ├── 📂 constants        # Constantes
|   ├── 📂 lib              # Funciones auxiliares
|   ├── 📂 rest             # Conexión con api
├── package.json            # Dependencias del proyecto
```

## Decisiones de Desarrollo
- **Paginación y carga de datos local:** Se obtiene la lista completa de anuncios desde el API y se maneja la paginación en el cliente.
- **Ordenamiento y búsqueda eficiente:** Uso de `@tanstack/react-table` para gestionar los datos de la tabla.
- **Manejo de errores:** Se implementaron mensajes de error y estados de carga para mejorar la UX.

## Mejoras Futuras
- Integración de filtrado avanzado
- Implementación de carga incremental desde el API
- Soporte para múltiples idiomas
