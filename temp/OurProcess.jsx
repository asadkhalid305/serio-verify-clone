import React, { Component, Fragment } from 'react'

export class OurProcess extends Component {

    state = {
        transformY: '943px',
        showAnalyze: false,
        showImplement: false,
        showImprove: false,
        showIndex: 0
    }

    shouldShowAnalyze = (strokeDashoffset) => {
        if(strokeDashoffset <= 3180)
        {
            this.setState({showAnalyze: true, showIndex: 1})
        }
        else{
            this.setState({showAnalyze: false})
        }
    }

    shouldShowImplement = (strokeDashoffset) => {
        if(strokeDashoffset <= 2610)
        {
            this.setState({showImplement: true, showIndex: 2})
        }
        else{
            this.setState({showImplement: false})
        }
    }

    shouldShowImprove = (strokeDashoffset) => {
        if(strokeDashoffset <= 2000)
        {
            this.setState({showImprove: true, showIndex: 3})
        }
        else{
            this.setState({showImprove: false})
        }
    }


    setScrollFill = () => {
        // Get a reference to the <path>
        var path = document.querySelector('#innerpath1');

        // Get length of path... ~577px in this case
        var pathLength = path.getTotalLength() + 943;
        // Make very long dashes (the length of the path itself)
        path.style.strokeDasharray = pathLength + ' ' + pathLength;

        // Offset the dashes so the it appears hidden entirely
        path.style.strokeDashoffset = pathLength;

        // Jake Archibald says so
        // https://jakearchibald.com/2013/animated-line-drawing-svg/
        path.getBoundingClientRect();

        // When the page scrolls...
        window.addEventListener("scroll", (e) => {

            // What % down is it? 
            // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
            // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
            // var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

            var scrollPercentage = ((document.documentElement.scrollTop + document.body.scrollTop) - 943) / (document.documentElement.scrollHeight);

            if(scrollPercentage < 0)
            {
                scrollPercentage = 0;
            }

            // console.log(scrollPercentage)
            // Length to offset the dashes
            var drawLength =  pathLength * scrollPercentage;

            // Draw in reverse
            path.style.strokeDashoffset = pathLength - drawLength;
            // path.style.strokeDashoffset = path.style.strokeDashoffset - 100;
            console.log("Dash offset: ", path.style.strokeDashoffset);
            this.shouldShowAnalyze(path.style.strokeDashoffset)
            this.shouldShowImplement(path.style.strokeDashoffset)
            this.shouldShowImprove(path.style.strokeDashoffset)

            // When complete, remove the dash array, otherwise shape isn't quite sharp
            // Accounts for fuzzy math
            if (scrollPercentage >= 0.99) {
                path.style.strokeDasharray = "none";
            } else {
                // path.style.strokeDasharray = pathLength + ' ' + pathLength;
            }
            // this.setState({transformY: 943 - window.pageYOffset})
        })

    }

    componentDidMount() {
        this.setScrollFill();
    }
    

    render() {
        return (
            // <Fragment>
            <div id="process" className="ng-scope"
            >
                <section id="process" className="process bg-white ng-scope">
                <div id="process-container" className="fixed-container" style={{transform: `translate(0px, ${this.props.ourProcess.transformY}px)`}}>
                <div className="svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900">
                    <defs>
                        <clipPath id="processMask">
                        <path fill="#7FEA3F" d="M0,1v899h1440V1H0z M241,361.6L78,317v-89l163-25V361.6z M473,486l-47-10l73-142.4l35,31.4L473,486z M628,836l17-51l170-14l25,65H628z M962,478l-65-121l45-29l72,138L962,478z" />
                        </clipPath>
                    </defs>
                    <g style={{clipPath: 'url(#processMask)'}}>
                        <path fill="none" stroke="#dfdfdf" strokeWidth={10} strokeMiterlimit={10} d="M0,264.2h720h9c149,3.9,268.6,125.9,268.6,275.9c0,152.4-123.6,276-276,276s-276-123.6-276-276c0-149.3,118.6-271,266.7-275.8l45.7-0.1h682" />
                        <path id="process-line" id="innerpath1" fill="none" stroke="#3aafa9" strokeWidth={10} strokeMiterlimit={10} d="M0,264.2h720h9c149,3.9,268.6,125.9,268.6,275.9c0,152.4-123.6,276-276,276s-276-123.6-276-276c0-149.3,118.6-271,266.7-275.8l45.7-0.1h682" style={{strokeDasharray: '3173.38', strokeDashoffset: '2127.86'}} />
                    </g>
                    <g className="title">
                        <path d="M114.5,285.3c-13,0-22.7-7.9-22.7-21.6c0-13.6,9.7-21.6,22.7-21.6s22.7,8,22.7,21.6C137.2,277.4,127.5,285.3,114.5,285.3z M114.5,253.7c-5.5,0-9,4-9,9.8c0,5.8,3.5,9.8,9,9.8c5.5,0,8.9-4,8.9-9.8C123.4,257.7,119.9,253.7,114.5,253.7z" />
                        <path d="M180.8,266.7c0,6.7-1.5,10.6-4.5,13.6s-7.9,4.9-14.5,4.9c-6.7,0-11.5-1.9-14.5-4.9c-3-3-4.5-7-4.5-13.6v-23.9h13.8v24.6c0,2.5,0.5,3.6,1.4,4.5c0.9,0.9,2.1,1.5,3.9,1.5s3-0.6,3.9-1.5c0.9-0.9,1.3-2.1,1.3-4.5v-24.6h13.8V266.7z" />
                        <path d="M226,284.6h-15.8l-6.7-13.9h-1.8v13.9h-13.7v-41.8h18.2c5.2,0,9.1,0.9,12.1,3s5.2,5.8,5.2,10.3c0,8.5-5.2,11.5-7,12.6
                                    L226,284.6z M208.2,253.8c-0.6-0.5-1.5-0.8-3-0.8h-3.5v7.3h3.5c1.5,0,2.5-0.3,3-0.7c0.7-0.5,1.5-1.1,1.5-2.9C209.8,254.9,208.8,254.3,208.2,253.8z" />
                        <path d="M123.4,321.3c-3,2.4-7.1,3.3-11.6,3.3h-4.5v13H93.6v-41.8h18.2c4.5,0,8.6,0.9,11.6,3.3c3,2.4,4.7,6.1,4.7,11.1
                                    C128.1,315.2,126.4,318.8,123.4,321.3z M112.8,306.9c-0.9-0.7-1.8-0.8-3.3-0.8h-2.2v8.2h2.2c1.5,0,2.4-0.1,3.3-0.7
                                    c1-0.7,1.5-1.7,1.5-3.3C114.3,308.5,113.7,307.5,112.8,306.9z" />
                        <path d="M170.8,337.6h-15.8l-6.7-13.9h-1.8v13.9H133v-41.8h18.2c5.2,0,9.1,0.9,12.1,3c3,2.1,5.2,5.8,5.2,10.3
                                    c0,8.5-5.2,11.5-7,12.6L170.8,337.6z M153.1,306.9c-0.6-0.5-1.5-0.8-3-0.8h-3.5v7.3h3.5c1.5,0,2.5-0.3,3-0.7
                                    c0.7-0.5,1.5-1.1,1.5-2.9C154.6,307.9,153.7,307.3,153.1,306.9z" />
                        <path d="M195.4,338.3c-13,0-22.7-7.9-22.7-21.6c0-13.6,9.7-21.6,22.7-21.6s22.7,8,22.7,21.6C218.1,330.4,208.4,338.3,195.4,338.3z
                                    M195.4,306.7c-5.5,0-9,4-9,9.8c0,5.8,3.5,9.8,9,9.8s8.9-4,8.9-9.8C204.3,310.7,200.8,306.7,195.4,306.7z" />
                        <path d="M259.3,333.1c-1.5,1.5-5.8,5.3-14.9,5.3c-12.4,0-22.4-7.6-22.4-21.6s10-21.6,22.4-21.6c9.4,0,13.9,3.9,13.9,3.9l-3.6,11.5
                                    c0,0-4.2-3.6-9.4-3.6c-5.2,0-9.6,3-9.6,9.6c0,6.5,4.7,9.4,9.6,9.4c4.8,0,8.2-2,10-3.8L259.3,333.1z" />
                        <path d="M294.2,337.6h-30.3v-41.8h29.7v10.8h-16.1v4.5h15.2v10.7h-15.2v4.8h16.7V337.6z" />
                        <path d="M326,334.8c-3.3,2.5-7.5,3.6-12.4,3.6c-4.8,0-10.4-1.3-16.1-5.6l6.1-10.3c3.9,3.3,9.3,4.5,11.2,4.5c1.8,0,3.1-0.5,3.1-1.8
                                    s-1.5-1.7-3-2.2c-1.5-0.4-4.8-1.5-6.1-1.9c-1.2-0.5-3.6-1.3-5.8-3.1c-2.1-1.8-3.8-4.4-3.8-8.9c0-4.5,2.4-8.1,4.8-10.1
                                    c2.5-2.1,6.7-3.6,12.3-3.6s11.3,2,14.9,5l-5.2,9.7c-3.2-2.8-7.8-4-9.9-4s-3.4,0.4-3.4,1.7c0,1.2,1.9,1.6,2.9,1.9c1,0.3,3.5,1,5,1.5
                                    c1.5,0.5,4.8,1.7,7,3.5c2.1,1.8,3.9,4.7,3.9,9.1C331.5,328.2,329.4,332.2,326,334.8z" />
                        <path d="M361.5,334.8c-3.3,2.5-7.5,3.6-12.4,3.6s-10.4-1.3-16.1-5.6l6.1-10.3c3.9,3.3,9.3,4.5,11.2,4.5c1.8,0,3.1-0.5,3.1-1.8
                                    s-1.5-1.7-3-2.2c-1.5-0.4-4.8-1.5-6.1-1.9c-1.2-0.5-3.6-1.3-5.8-3.1c-2.1-1.8-3.8-4.4-3.8-8.9c0-4.5,2.4-8.1,4.8-10.1
                                    c2.5-2.1,6.7-3.6,12.3-3.6s11.3,2,14.9,5l-5.2,9.7c-3.2-2.8-7.8-4-9.9-4c-2.2,0-3.4,0.4-3.4,1.7c0,1.2,1.9,1.6,2.9,1.9
                                    c1,0.3,3.5,1,5,1.5c1.5,0.5,4.8,1.7,7,3.5c2.1,1.8,3.9,4.7,3.9,9.1C366.9,328.2,364.8,332.2,361.5,334.8z" />
                    </g>
                    </svg>
                    <svg id="analyze" className={`svg-word ${this.state.showAnalyze ? 'complete' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900">
                    <g className="word">
                        <path d="M929.5,373.7l-4.5-5.2l1.6-2.4l-3.6-4.2l-2.5,1.2l-4.3-5l19.1-7.6l4.6,5.3L929.5,373.7z M929.4,362l3-4.5l-4.9,2.3L929.4,362z" />
                        <path d="M941.2,389.5l-3.9-5.3l5.2-11.2c0,0-1.6,1.4-2.7,2.2l-5.9,4.4l-3.7-5l15.6-11.6l4.1,5.5l-5.4,11c0,0,1.6-1.4,2.7-2.2l5.9-4.4l3.7,5L941.2,389.5z" />
                        <path d="M952.8,407.7l-3.7-5.8l1.9-2.1l-3-4.7l-2.7,0.8l-3.5-5.6l20-4.6l3.7,6L952.8,407.7z M954.4,396.1l3.6-4l-5.2,1.6L954.4,396.1z" />
                        <path d="M959.4,420.1l-6.2-11.4l17.1-9.2l3,5.6l-12.5,6.8l3.1,5.8L959.4,420.1z" />
                        <path d="M984.2,427.2l-13.6-1l-6.9,3.3l-2.7-5.7l6.9-3.3l7.8-11.1l3,6.4l-4.7,5.4l7.2-0.2L984.2,427.2z" />
                        <path d="M972.8,451.4l-6.2-15.9l4.2-1.6l12.3,4.3l-3-7.6l4.7-1.8l6,15.2l-4.1,1.6l-12.3-4.3l3.2,8.3L972.8,451.4z" />
                        <path d="M977.8,466.8l-4.3-13.4l18.5-5.9l4.2,13.1l-4.8,1.5l-2.3-7.1l-2,0.6l2.1,6.7l-4.7,1.5l-2.1-6.7l-2.1,0.7l2.3,7.4L977.8,466.8z" />
                    </g>
                    </svg>
                    <svg id="implement" className={`svg-word ${this.state.showImplement ? 'complete' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900">
                    <g className="word">
                        <path d="M804.5,793.8l6-2.1l6.3,18.4l-6,2.1L804.5,793.8z" />
                        <path d="M779.7,800.9l6-1.6l3.1,10.7l-0.5-11.4l5.3-1.4l5.4,10.1l-2.7-10.8l6-1.6l4,19l-7.9,2.1l-5.1-9.5l0.4,10.8l-7.9,2.1L779.7,800.9z" />
                        <path d="M765.4,811.2c1.2-1.4,3-2.1,5-2.5l2-0.4l-1.1-6l6.3-1.2l3.6,19.1l-8.3,1.6c-2.1,0.4-4,0.3-5.6-0.5
                                    c-1.6-0.8-2.7-2.4-3.1-4.7C763.7,814.4,764.2,812.5,765.4,811.2z M771.4,816.8c0.5,0.2,0.9,0.2,1.6,0.1l1-0.2l-0.7-3.7l-1,0.2
                                    c-0.7,0.1-1.1,0.3-1.5,0.6c-0.4,0.4-0.5,0.9-0.4,1.7C770.6,816.2,771,816.6,771.4,816.8z" />
                        <path d="M747.4,805.9l12.8-1.6l2.4,19.3l-6.3,0.8l-1.8-14.1l-6.6,0.8L747.4,805.9z" />
                        <path d="M731.7,807l14-0.9l1.3,19.4l-13.8,0.9l-0.3-5l7.4-0.5l-0.1-2.1l-7,0.5l-0.3-5l7-0.5l-0.1-2.2L732,812L731.7,807z" />
                        <path d="M706.6,806.9l6.2,0.1l0.1,11.1l2.7-11.1l5.5,0.1l2.4,11.1l0.4-11.1l6.2,0.1l-1.4,19.4l-8.2-0.1l-2.3-10.6l-2.6,10.5l-8.2-0.1L706.6,806.9z" />
                        <path d="M690.4,805.3l14,1.3l-1.7,19.3l-13.7-1.2l0.5-5l7.4,0.7l0.2-2.1l-7-0.6l0.4-5l7,0.6l0.2-2.2l-7.7-0.7L690.4,805.3z" />
                        <path d="M669.9,802.1l6.5,1.1l4.1,11.6c0,0,0.2-2.1,0.4-3.5l1.2-7.2l6.1,1l-3.1,19.2l-6.8-1.1l-3.8-11.6c0,0-0.2,2.1-0.4,3.5l-1.2,7.2l-6.1-1L669.9,802.1z" />
                        <path d="M650.2,812.4l4.5,1l3.3-14.1l6.2,1.5l-3.3,14.1l4.4,1l-1.1,4.8l-15.1-3.5L650.2,812.4z" />
                    </g>
                    </svg>
                    <svg id="improve" className={`svg-word ${this.state.showImprove ? 'complete' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900">
                    <g className="word">
                        <path d="M465.2,468l-1.7,6.1l-18.7-5.1l1.7-6.1L465.2,468z" />
                        <path d="M473.2,443.5l-2,5.9l-10.6-3.4l9.7,6l-1.8,5.2l-11.3-1.2l10.5,3.8l-2,5.9l-18-7.3l2.6-7.7l10.8,1.1l-9.2-5.7l2.6-7.7L473.2,443.5z" />
                        <path d="M472.6,425.8c0.5,1.7,0.1,3.6-0.7,5.6l-0.8,1.9l5.6,2.4l-2.5,5.8l-17.8-7.7l3.3-7.8c0.8-1.9,2-3.5,3.6-4.3
                                    c1.6-0.8,3.5-0.9,5.6,0C470.9,422.7,472.2,424.1,472.6,425.8z M464.6,427.7c-0.5,0.3-0.7,0.6-1,1.3l-0.4,1l3.5,1.5l0.4-1
                                    c0.3-0.6,0.4-1.1,0.3-1.6c-0.1-0.5-0.4-1-1.1-1.3C465.5,427.4,465,427.4,464.6,427.7z" />
                        <path d="M489.2,409.8l-3.3,6.5l-7.2-0.2l-0.4,0.7l5.8,3l-2.9,5.7l-17.3-8.9l3.9-7.5c1.1-2.1,2.3-3.6,3.8-4.4
                                    c1.5-0.8,3.5-0.9,5.4,0.1c3.5,1.8,3.7,4.6,3.7,5.6L489.2,409.8z M472.7,410.6c-0.3,0.1-0.6,0.5-1,1.1l-0.7,1.4l3,1.5l0.7-1.4
                                    c0.3-0.6,0.4-1.1,0.3-1.4c-0.1-0.4-0.1-0.9-0.9-1.2C473.5,410.2,473,410.5,472.7,410.6z" />
                        <path d="M495,400.9c-3.2,5.2-8.7,7.1-14.1,3.7s-6.2-9.1-3-14.3c3.2-5.2,8.7-7,14.1-3.7
                                    C497.4,390,498.2,395.8,495,400.9z M482.5,393.2c-1.3,2.2-0.6,4.5,1.7,5.9c2.3,1.4,4.7,1,6-1.2c1.3-2.2,0.6-4.5-1.7-5.9
                                    C486.3,390.7,483.8,391.1,482.5,393.2z" />
                        <path d="M496.5,363.9l11.4,17.3l-3.6,5l-20-5.5l4-5.5l11.3,3.7l-7-9.6L496.5,363.9z" />
                        <path d="M522.1,363.8l-9,10.8l-14.9-12.5l8.9-10.6l3.8,3.2l-4.8,5.7l1.6,1.4l4.5-5.4l3.8,3.2l-4.5,5.4l1.7,1.4l5-5.9L522.1,363.8z" />
                    </g>
                    </svg>
                    <div className="txt-black intro-txt">
                    <p>Working with Serio Verify is an iterative process.<br /><br />
                        Only by measuring and continuously improving your inside sales can we achieve the needed results.</p>
                    </div>
                    <div className="slides txt-black txt-center">
                        {
                            this.state.showIndex > 0 && 
                            <span className="counter ng-binding" data-ng-show="pc.curSlide >= 0">{this.state.showIndex} / 3</span>
                        }
                    <div className={`slide ${this.state.showAnalyze && !this.state.showImplement ? "active" : "null"}`} data-ng-class="{'active' : pc.curSlide === 0}">
                        <h3>Analyze</h3>
                        <p>We analyze your current setup, detailing your needs as well as key performance indicators.</p>
                    </div>
                    <div className={`slide ${this.state.showImplement && !this.state.showImprove ? "active" : "null"}`} data-ng-class="{'active' : pc.curSlide === 1}">
                        <h3>Implement</h3>
                        <p>We handle the implementation process end-to-end, including configuration, and integration of third parties – with minimal internal IT resource requirements.</p>
                    </div>
                    <div className={`slide ${this.state.showImprove ? "active" : "null"}`} data-ng-class="{'active' : pc.curSlide === 2}">
                        <h3>Improve</h3>
                        <p>Our consultants improve your setup incrementally, maximizing your inside sales effort and your online media spend on attracting interested consumers.</p>
                    </div>
                    </div>
                </div>
                </div>
                </section>
            </div>
            // </Fragment>
        )
    }
}

export default OurProcess
