/* 
1. our task in order to complete this Kata is to write a function which 
formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just 
returns "now". Otherwise, the duration is expressed as a combination of 
years, days, hours, minutes and seconds.

example: 
* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"


**For the purpose of this Kata, a year is 365 days and a day is 24 hours.**

Note that spaces are important.

### **Detailed rules**

The resulting expression is made of components like `4 seconds`, 
`1 year`, etc. In general, a positive integer and one of the valid
 units of time, separated by a space. The unit of time is used in
  plural if the integer is greater than 1.

The components are separated by a comma and a space (`", "`).
 Except the last component, which is separated by `" and "`, 
 just like it would be written in English.

A more significant units of time will occur before than a least
significant one. Therefore, `1 second and 1 year` is not correct,
but `1 year and 1 second` is.

Different components have different unit of times. So there is not
 repeated units like in `5 seconds and 1 second`.

A component will not appear at all if its value happens to be zero. 
Hence, `1 minute and 0 seconds` is not valid, but it should be just 
`1 minute`.

A unit of time must be used "as much as possible". It means that the
function should not return `61 seconds`, but `1 minute and 1 second` 
instead. Formally, the duration specified by of a component must not 
be greater than any valid more significant unit of time.

Test cases:
    dotest(1, "1 second");
    dotest(62, "1 minute and 2 seconds");
    dotest(120, "2 minutes");
    dotest(3600, "1 hour");
    dotest(3662, "1 hour, 1 minute and 2 seconds");

    dotest(15731080, "182 days, 1 hour, 44 minutes and 40 seconds");
    dotest(132030240, "4 years, 68 days, 3 hours and 4 minutes");
    dotest(205851834, "6 years, 192 days, 13 hours, 3 minutes and 54 seconds");
    dotest(253374061, "8 years, 12 days, 13 hours, 41 minutes and 1 second");
    dotest(242062374, "7 years, 246 days, 15 hours, 32 minutes and 54 seconds");
    dotest(101956166, "3 years, 85 days, 1 hour, 9 minutes and 26 seconds");
    dotest(33243586, "1 year, 19 days, 18 hours, 19 minutes and 46 seconds");

*/


function dotest(seconds){
    let years, days, hours, minutes, remainingSeconds;
    
    if(seconds === 0){
        return `now`;
    }
    else if(seconds === 3600){
        return `1 hour`;
    }
    else if(seconds === 86400){
        return `1 day`;
    }
    else if(seconds === 31536000){
        return `1 year`;
    }
    else{
       if(seconds >= 3156000){
        years = Math.floor(seconds / 3156000);
        remainingSeconds = seconds % 3156000;
        if(remainingSeconds >= 86400){
            days = Math.floor(remainingSeconds / 86400);
            remainingSeconds = remainingSeconds % 86400;
            if(remainingSeconds >= 3600){
                hours = Math.floor(remainingSeconds/ 3600);
                remainingSeconds = remainingSeconds % 3600;

                if(remainingSeconds >= 60){
                    minutes = Math.floor(remainingSeconds / 60);
                    remainingSeconds = remainingSeconds % 60;
            }
        }
       }
       return `${years===0?"":`${years} ${years===1?"year":"years"}`}${hours===0?"and":", "}${days===0?"":`${days} ${days===1?"day":"days"}`}${minutes===0?"and":","} ${hours===0?"":`${hours} ${hours===1?"hour":"hours"}`}${remainingSeconds===0?" and":","} ${minutes===0?"":`${minutes} ${minutes===1?"minute":"minutes"}`} ${remainingSeconds===0?"":`and ${remainingSeconds} ${seconds===1?"second":"seconds"}`}`

    }
    else if(seconds >= 86400){
       days = Math.floor(seconds / 86400);
       remainingSeconds = seconds % 86400;
    }

}

}
