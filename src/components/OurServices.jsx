import React from 'react';
import ServiceCard from './ServiceCard';
import sedan from '/public/sedan.svg';
import suv from '/public/suv.svg';
import truck from '/public/truck.svg';

const OurServices = () => {
    return (
        <div className="w-full grid grid-cols-3 grid-rows-1 gap-4 bg-yellow-500">
            <ServiceCard car={sedan} type="Sedan" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl." price="$100" />
            <ServiceCard car={suv} type="SUV" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl." price="$150" />
            <ServiceCard car={truck} type="Truck" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam nunc, vitae aliquam nisl nunc vitae nisl." price="$200" />
      </div>
    );
}

export default OurServices;

