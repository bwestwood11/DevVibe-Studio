import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const timeDifference = Math.abs(now.getTime() - date.getTime());
  const minutes = Math.floor(timeDifference / (60 * 1000));
  const hours = Math.floor(minutes / 60);

  if (hours >= 1 && hours < 24) {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (timeDifference >= 24 * 60 * 60 * 1000) {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'

  
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  } else {
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  }
}

export function formatTimeforEach(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  const timeDifference = Math.abs(now.getTime() - date.getTime());
  const minutes = Math.floor(timeDifference / (60 * 1000));
  const hours = Math.floor(minutes / 60);

  if (hours >= 1 && hours < 24) {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (timeDifference >= 24 * 60 * 60 * 1000) {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  } else {
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  }
}

export const TextToFile = (body:string, fileName:string) => {
  const fileBlob = new Blob([body],{type: "text/plain"});
  const file = new File([fileBlob], fileName, { type: "text/plain" });

  return file
}
export const formatQuestionAndAnswers = (
  questions: { question: string; answer: string }[]
) => {
  return questions
    .map(
      (question) => `Question: ${question.question}, Answer: ${question.answer}`
    )
    .join("\n");
};

export const FormatTime = (date:string) => {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export const AbsoluteUrl = (path:string) => {
  const NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  return `${NEXT_PUBLIC_APP_URL}/${path}`
}

export const FormatProperCasing = (str:string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}