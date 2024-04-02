import React from 'react'

function RenderingLists() {

    const books = [
        {
            title: "bok ett",
            pages: 3
        },
        {
            title: "bok två",
            pages: 5
        },
        {
            title: "bok tre",
            pages: 8
        }
    ]
    return (
        <div>
            {books.map(book => {
                return (
                    <div key={book.title}>
                        <h2>{book.title}</h2>
                        <p>{book.pages}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default RenderingLists