export { loggerProjector }

const loggerProjector = () => {

    /* JS Goodie Woche 3 - Web Programming Herbstsemester 2021 */

    const longRunning = x => {
        out.textContent += " ...";
        setTimeout( _=> out.textContent += " " + x, 1000 * 2);
        return x;
    };

    /* constants */
    const LEVEL_NONE    = -1;
    const LEVEL_ERROR   =  0;
    const LEVEL_WARN    =  1;
    const LEVEL_INFO    =  2;
    const LEVEL_LOG     =  3;
    const LEVEL_DEBUG   =  4;
    let logLevel = LEVEL_LOG;


// strict version (not working as desired, yet)
    const error = getArgs => { if (logLevel >= LEVEL_ERROR) console.error(getArgs()); }
    const warn  = getArgs => { if (logLevel >= LEVEL_WARN)  console.warn (getArgs()); }
    const info  = getArgs => { if (logLevel >= LEVEL_INFO)  console.info (getArgs()); }
    const log   = getArgs => { if (logLevel >= LEVEL_LOG)   console.log  (getArgs()); }
    const debug = getArgs => { if (logLevel >= LEVEL_DEBUG) console.debug(getArgs()); }

    const logAll = () => {
        error(()=>["error", longRunning("error")]);
        warn (()=>["warn",  longRunning("warn") ]);
        info (()=>["info",  longRunning("info") ]);
        log  (()=>["log",   longRunning("log")  ]);
        debug(()=>["debug", longRunning("debug")]);
    }



}