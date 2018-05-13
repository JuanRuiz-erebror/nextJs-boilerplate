 
const span_3 = () => (
    <div><span>o</span>
        <style jsx>{`    
            font-weight: normal !important;
            margin: 0px !important;
            word-wrap: break-word !important;          
            font-size: 15px !important;
            line-height: 18px !important;
            letter-spacing: 0.2px !important;
            padding-top: 0px !important;
            padding-bottom: 0px !important;
            color: #767676 !important;
            display: inline !important;
        `}</style></div>
)


const span_2 = () => (
    <div><span>{span_3()}</span>
        <style jsx>{`    
            position: relative !important;
            padding: 16px !important;
            
            ::before {
                content: '' !important;
                position: absolute !important;
                border-bottom: 1px solid #e4e4e4 !important;
                top: 50% !important;
                right: 100% !important;
                width: 5000px !important;
            }
            ::after {
                content: '' !important;
                position: absolute !important;
                border-bottom: 1px solid #e4e4e4 !important;
                top: 50% !important;
                left: 100% !important;
                width: 5000px !important;
            }    
                    
        `}</style></div>
)


const span_1 = () => (
    <div><div>{span_2()}</div>
        <style jsx>{`    
            overflow: hidden !important;
            text-align: center !important;
        `}</style></div>
)


const div = () => (
    <div>{span_1()}</div>
)


export default div
