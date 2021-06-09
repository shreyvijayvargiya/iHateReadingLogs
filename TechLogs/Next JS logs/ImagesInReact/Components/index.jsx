import React from 'react';
import Image from 'next/image';

const ImageComponent = () => {
    
    return (
        <div className="flex flex-col justify-center text-center align-middle">
            <h1 className="text-2xl text-black">Working with Images in Next JS</h1>
            {new Array(4).fill(4).map(item => {
                return (
                    <div key={item} className="flex flex-row p-4 justify-between w-6/12 m-auto">
                        <Image
                            alt="Mountains"
                            src="/mountain.png"
                            objectFit="fill"
                            quality={100}
                            width={300}
                            height={300}
                            className="border border-gray-200 shadow-md rounded-md cursor-pointer p-2"
                        />
                        <Image
                            alt="Mountains"
                            src="/dog.png"
                            objectFit="cover"
                            quality={100}
                            width={300}
                            height={300}
                            className="border border-gray-200 shadow-md rounded-md cursor-pointer m-1"
                        />
                    
                    </div>
                )
            })}
        </div>
    )
};
export default ImageComponent;
