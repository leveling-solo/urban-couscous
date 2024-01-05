import React from 'react';


export const TypingAnimation = () => {

    const [WelcomeText, setWelcomeText] = React.useState("TricolorDeviL");
    const [isTypingComplete, setIsTypingComplete] = React.useState(false);

    React.useEffect(() => {
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            if (currentIndex <= WelcomeText.length) {
                setWelcomeText(WelcomeText.slice(0, currentIndex))
                currentIndex++;
            } else {
                clearInterval(typingInterval)
                setIsTypingComplete(true)
            }
        }, 200);

        // CleanUp the timeout to avoid memory leask 
        return () => clearInterval(typingInterval);
    }, [])

    return <p id='typingText' className={isTypingComplete}>{WelcomeText}</p>
}

export default TypingAnimation


