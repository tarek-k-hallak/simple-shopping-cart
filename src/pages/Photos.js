import React, { useContext } from 'react'
import { Context } from '../Context'

import Image from '../components/Image'


function getClass(i) {
    if (i % 5 === 0) {
        return 'big';
    }
    else if (i % 6 === 0) {
        return 'wide'
    }
    return 'tall'
}

function Photos() {
    const { allPhotos } = useContext(Context)

    const Elements = allPhotos.map((photo, index) => (
        <Image
            key={photo.id}
            img={photo}
            className={getClass(index)} />
    ))

    return (
        <main className='photos'>
            {Elements}
        </main>
    )
}

export default Photos;
