function renderElement(element,container){

    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    // domElement.setAttribute("href",element.props.href)
    // domElement.setAttribute("target",element.props.target)

    for(const prop in element.props){
        if(prop==="children")continue
        domElement.setAttribute(prop,element.props[prop])
    }
    container.appendChild(domElement)
}

const mainContainer = document.querySelector('#root')
const element = {
    type : 'a',
    props : {
        href: "https://google.com",
        target: "_blank"
    },
    children : "Visit google"
}

renderElement(element,mainContainer)