import react from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {
    let cup = "☕";
    let coffeeCups = Math.ceil(minutes / 5)
    // cup.repeat(coffeeCups)
    console.log(coffeeCups)

    return (
        <article key={`uni-${title}`}>
            <h3>{title}</h3>
            <small>{`${date}, ${minutes} minute read. ${cup.repeat(coffeeCups)}`}</small>
            <p>{preview}</p>
        </article>
    )    
}

export default Article;