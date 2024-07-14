import React, { useEffect, useState } from "react";


const WriteText = () => {
    const [index, setIndex] = useState(0);
    const [letters, setLetters] = useState('');

    useEffect(() => {
        const textInterval = setInterval(() => writeText(), 500);
        return () => {

            clearInterval(textInterval);
        }
    });

    const text = 'فروشگاه آنلاین';
    function writeText() {
        const temp = (index + 1) > text.length ? 0 : index + 1;
        setIndex(temp);
        setLetters(text.slice(0, temp));

    }
    
    return (
        <div>
            {letters}
        </div>
    )
}

export default WriteText;