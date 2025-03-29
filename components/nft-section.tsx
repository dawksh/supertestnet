import React from 'react'

const NFTSection = () => {
    return (
        <div className='flex flex-row justify-around gap-6 w-3/4'>
            <div className='w-1/2'>
                <img src='https://i.imgur.com/Qi2mdhO.jpeg' alt='NFT Image' className='w-64 h-64' />
            </div>
            <div className='flex flex-col w-1/2 gap-4'>
                <p className='text-3xl font-bold'>NFT Title</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero distinctio quaerat voluptate neque molestias. Unde architecto natus doloremque corporis? Ea sunt minima id quaerat tempore, similique quasi aliquam dolorum quibusdam?</p>
            </div>
        </div>
    )
}

export default NFTSection