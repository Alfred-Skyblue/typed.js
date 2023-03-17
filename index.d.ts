interface TypedOptions {
    /**
     * @property {array} strings strings to be typed
     */
    strings?: string[],
    /**
     * @property {string} stringsElement ID of element containing string children
     */
    stringsElement?: string,

    /**
     * @property {number} typeSpeed type speed in milliseconds
     */
    typeSpeed?: number,

    /**
     * @property {number} startDelay time before typing starts in milliseconds
     */
    startDelay?: number,

    /**
     * @property {number} backSpeed backspacing speed in milliseconds
     */
    backSpeed?: number,

    /**
     * @property {boolean} smartBackspace only backspace what doesn't match the previous string
     */
    smartBackspace?: boolean,

    /**
     * @property {boolean} shuffle shuffle the strings
     */
    shuffle?: boolean,

    /**
     * @property {number} backDelay time before backspacing in milliseconds
     */
    backDelay?: number,

    /**
     * @property {boolean} fadeOut Fade out instead of backspace
     */
    fadeOut?: boolean,
    /**
     * @property {string} fadeOutClass css class for fade animation
     */
    fadeOutClass?: string,
    /**
     * @property {number} fadeOutDelay Fade out delay in milliseconds
     */
    fadeOutDelay?: number,

    /**
     * @property {boolean} loop loop strings
     */
    loop?: boolean,
    /**
     * @property {number} loopCount amount of loops
     */
    loopCount?: number,

    /**
     * @property {boolean} showCursor show cursor
     */
    showCursor?: boolean,
    /**
     * @property {string} cursorChar character for cursor
     */
    cursorChar?: string,
    /**
     * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
     */
    autoInsertCss?: boolean,

    /**
     * @property {string} attr attribute for typing
     * Ex: input placeholder, value, or just HTML text
     */
    attr?: string,

    /**
     * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
     */
    bindInputFocusEvents?: boolean,

    /**
     * @property {string} contentType 'html' or 'null' for plaintext
     */
    contentType?: string,

    /**
     * Before it begins typing
     * @param {Typed} self
     */
    onBegin?: (self:Typed) => void,

    /**
     * All typing is complete
     * @param {Typed} self
     */
    onComplete?: (self:Typed) => void,

    /**
     * Before each string is typed
     * @param {number} arrayPos
     * @param {Typed} self
     */
    preStringTyped?: (arrayPos:number, self:Typed) => void,

    /**
     * After each string is typed
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onStringTyped?: (arrayPos:number, self:Typed) => void,

    /**
     * During looping, after last string is typed
     * @param {Typed} self
     */
    onLastStringBackspaced?: (self:Typed) => void,

    /**
     * Typing has been stopped
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onTypingPaused?: (arrayPos:number, self:Typed) => void,

    /**
     * Typing has been started after being stopped
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onTypingResumed?: (arrayPos:number, self:Typed) => void,

    /**
     * After reset
     * @param {Typed} self
     */
    onReset?: (self:Typed) => void,

    /**
     * After stop
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onStop?: (arrayPos:number, self:Typed) => void,

    /**
     * After start
     * @param {number} arrayPos
     * @param {Typed} self
     */
    onStart?: (arrayPos:number, self:Typed) => void,

    /**
     * After destroy
     * @param {Typed} self
     */
    onDestroy?: (self:Typed) => void,
}

/**
 * Welcome to Typed.js!
 * @param {HTMLElement | string} elementId HTML element ID _OR_ HTML element
 * @param {TypedOptions} options options object
 * @returns {object} a new Typed object
 */
declare class Typed {
    constructor(elementId: HTMLElement | string, options: TypedOptions);
    /**
     * Toggle start() and stop() of the Typed instance
     * @public
     */
    public toggle(): void;
    /**
     * Stop typing / backspacing and enable cursor blinking
     * @public
     */
    public stop(): void;
    /**
     * Start typing / backspacing after being stopped
     * @public
     */
    public start(): void;
    /**
     * Destroy this instance of Typed
     * @public
     */
    public destroy(): void;
    /**
     * Reset Typed and optionally restarts
     * @param {boolean} restart
     * @public
     */
    public reset(restart?: boolean): void;
    cursor: HTMLSpanElement;
    strPos: number;
    arrayPos: number;
    curLoop: number;
    /**
     * Begins the typing animation
     * @private
     */
    private begin;
    typingComplete: boolean;
    timeout: any;
    /**
     * Called for each character typed
     * @param {string} curString the current string in the strings array
     * @param {number} curStrPos the current position in the curString
     * @private
     */
    private typewrite;
    temporaryPause: boolean;
    /**
     * Continue to the next string & begin typing
     * @param {string} curString the current string in the strings array
     * @param {number} curStrPos the current position in the curString
     * @private
     */
    private keepTyping;
    /**
     * We're done typing the current string
     * @param {string} curString the current string in the strings array
     * @param {number} curStrPos the current position in the curString
     * @private
     */
    private doneTyping;
    /**
     * Backspaces 1 character at a time
     * @param {string} curString the current string in the strings array
     * @param {number} curStrPos the current position in the curString
     * @private
     */
    private backspace;
    stopNum: number;
    /**
     * Full animation is complete
     * @private
     */
    private complete;
    /**
     * Has the typing been stopped
     * @param {string} curString the current string in the strings array
     * @param {number} curStrPos the current position in the curString
     * @param {boolean} isTyping
     * @private
     */
    private setPauseStatus;
    /**
     * Toggle the blinking cursor
     * @param {boolean} isBlinking
     * @private
     */
    private toggleBlinking;
    cursorBlinking: any;
    /**
     * Speed in MS to type
     * @param {number} speed
     * @private
     */
    private humanizer;
    /**
     * Shuffle the sequence of the strings array
     * @private
     */
    private shuffleStringsIfNeeded;
    sequence: any;
    /**
     * Adds a CSS class to fade out current string
     * @private
     */
    private initFadeOut;
    /**
     * Replaces current text in the HTML element
     * depending on element type
     * @param {string} str
     * @private
     */
    private replaceText;
    /**
     * If using input elements, bind focus in order to
     * start and stop the animation
     * @private
     */
    private bindFocusEvents;
    /**
     * On init, insert the cursor element
     * @private
     */
    private insertCursor;
}
