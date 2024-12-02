import React from 'react'

const Right = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='bg-primary text-center'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className='text-white mb-0 m-2'>&copy; {year}. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Right
