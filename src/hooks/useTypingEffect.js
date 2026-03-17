import { useState, useEffect } from 'react';

export const useTypingEffect = (textArray, config) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const { typingSpeed, erasingSpeed, delayAfterText } = config;

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (displayedText.length < textArray[textIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(textArray[textIndex].substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayAfterText);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(textArray[textIndex].substring(0, displayedText.length - 1));
        }, erasingSpeed);
      } else {
        setIsTyping(true);
        setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, textIndex, textArray, typingSpeed, erasingSpeed, delayAfterText]);

  return displayedText;
};
