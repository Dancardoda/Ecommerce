import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props
 

  return (
    <div className="flex justify-between items-center bg-gray-300 mb-3 border border-black rounded-lg p-4 w-80 ">
      <div className='flex flex-col justify-between w-full'>
        
        <p className='flex  items-center gap-2'>
        <CalendarDaysIcon className='flex h-6 w-6 text-black cursor-pointer'></CalendarDaysIcon>
        <span className='font-light'>01.02.2023</span>
        </p>

        <p className='flex  items-center gap-2'>
        <ShoppingBagIcon className='flex h-6 w-6 text-black cursor-pointer'></ShoppingBagIcon>
        <span className='font-light'>{ totalProducts } articles</span>
        </p>

      </div>

        <div>
          <p className='flex items-center gap-2'>
          <span className='font-medium text-2xl'> ${ totalPrice }</span>
          <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'></ChevronRightIcon>
          </p>
        </div>
    </div>
  )
}

export default OrdersCard